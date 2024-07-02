import { forwardRef, type ForwardedRef, type HTMLAttributes, type ReactNode, type CSSProperties } from "react";
import { css, styled } from "styled-components";

type PropsType = {
  children: ReactNode;
  tag?: "p" | "span";
  size?: CSSProperties["fontSize"];
  color?: CSSProperties["color"];
  weight?: CSSProperties["fontWeight"];
  lineHeight?: CSSProperties["lineHeight"];
} & HTMLAttributes<HTMLSpanElement>;

type StylePropsType = {
  $color: CSSProperties["color"];
  $size: CSSProperties["fontSize"];
  $weight: CSSProperties["fontWeight"];
  $lineHeight?: CSSProperties["lineHeight"];
};

export const Text = forwardRef(
  (
    { tag = "span", children, size = 10, color = "#000000", weight = 500, lineHeight, ...props }: PropsType,
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
    return (
      <StyledText ref={ref} as={tag} $color={color} $size={size} $weight={weight} $lineHeight={lineHeight} {...props}>
        {children}
      </StyledText>
    );
  }
);

const StyledText = styled.span<StylePropsType>`
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => $size}px;
  font-weight: ${({ $weight }) => $weight};
  ${({ $lineHeight }) =>
    $lineHeight &&
    css`
    line-height: {$lineHeight}px;
  `}
`;
