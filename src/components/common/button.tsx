import { forwardRef, type ForwardedRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { css, styled, type CSSProperties } from "styled-components";

type PropsType = {
  size?: CSSProperties["fontSize"];
  variant?: "gray" | "primary";
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  (
    { size = 12, variant = "primary", children, icon, width, height = 26, ...props }: PropsType,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <StyleButton
        ref={ref}
        $size={size}
        $width={width}
        $height={height}
        $children={children}
        $variant={variant}
        {...props}
      >
        {children}
      </StyleButton>
    );
  }
);

const StyleButton = styled.button<{
  $width: CSSProperties["width"];
  $height: CSSProperties["height"];
  $size: CSSProperties["fontSize"];
  $children: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  font-size: ${({ $size }) => $size}px;
  font-weight: 500;
  ${({ $width }) =>
    typeof $width === "number"
      ? css`
          width: ${$width}px;
        `
      : css`
          width: ${$width};
        `}
  height: ${({ $height }) => $height}px;

  border: none;
  border-radius: 8px;
  color: #ffffff;
  background-color: ${({ $children }) => ($children === "취소" || $children === "감소" ? "#C8C8C8" : "#3D8AFF")};

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
