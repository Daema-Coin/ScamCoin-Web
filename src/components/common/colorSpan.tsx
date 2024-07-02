import { forwardRef, type ForwardedRef, type ReactNode, type CSSProperties } from "react";
import { styled } from "styled-components";

type PropsType = {
  children: ReactNode;
  color?: CSSProperties["color"];
};

export const ColorSpan = forwardRef(
  ({ children, color = "#000000" }: PropsType, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <StyledText ref={ref} $color={color}>
        {children}
      </StyledText>
    );
  }
);

const StyledText = styled.span<{ $color: CSSProperties["color"] }>`
  color: ${({ $color }) => $color};
`;
