import { forwardRef, type ForwardedRef, type InputHTMLAttributes, type CSSProperties } from "react";
import { styled } from "styled-components";
import { Text } from "@/components";

type PropsType = {
  isPrice?: boolean;
  width?: CSSProperties["width"];
  maxLength?: number;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (
    { isPrice = false, maxLength, width = "100%", onChange, ...props }: PropsType,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledInputWrapper $width={width}>
        <StyledInput ref={ref} $isPrice={isPrice} onChange={onChange} type={isPrice ? "number" : "text"} {...props} />
        {isPrice ? (
          <Text size={14} weight={500} color="#CACACA" className="coin">
            코인
          </Text>
        ) : (
          maxLength && (
            <Text
              size={10}
              weight={500}
              color="#CACACA"
              lineHeight={16}
            >{`${props.value?.toString().length}/${maxLength}`}</Text>
          )
        )}
      </StyledInputWrapper>
    );
  }
);

const StyledInputWrapper = styled.label<{ $width?: CSSProperties["width"] }>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width)};
  cursor: text;

  .coin {
    position: absolute;
    right: 16px;
  }
`;

const StyledInput = styled.input<{ $isPrice: boolean }>`
  width: 100%;
  height: 40px;
  padding: ${({ $isPrice }) => ($isPrice ? "10px 48px 10px 16px" : "10px 16px")};
  border: 1px solid #cacaca;
  border-radius: 8px;

  outline: none;

  font-size: 12;
  font-weight: 500;

  ::placeholder {
    color: #cacaca;
  }
`;
