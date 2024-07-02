import { forwardRef, type ForwardedRef, type CSSProperties, type InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { Text } from "@/components";

type PropsType = {
  width?: CSSProperties["width"];
  maxLength?: number;
} & InputHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef(
  ({ maxLength, width = "100%", onChange, ...props }: PropsType, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <StyledTextAreaWrapper $width={width}>
        <StyledTextArea ref={ref} maxLength={maxLength} onChange={onChange} {...props} />
        <Text
          size={10}
          weight={500}
          color="#CACACA"
          lineHeight={16}
        >{`${props.value?.toString().length}/${maxLength}`}</Text>
      </StyledTextAreaWrapper>
    );
  }
);

const StyledTextAreaWrapper = styled.label<{ $width?: CSSProperties["width"] }>`
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

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px 16px;
  border: 1px solid #cacaca;
  border-radius: 8px;

  outline: none;

  font-size: 12;
  font-weight: 500;

  ::placeholder {
    color: #cacaca;
  }
`;
