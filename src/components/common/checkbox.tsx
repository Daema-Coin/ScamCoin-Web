import { forwardRef, type InputHTMLAttributes, type ForwardedRef } from "react";
import { styled } from "styled-components";

type PropsType = InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef(({ ...props }: PropsType, ref: ForwardedRef<HTMLInputElement>) => {
  return <StyleCheckbox type="checkbox" ref={ref} {...props} />;
});

const StyleCheckbox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1.5px solid #cccccc;
  border-radius: 2px;
  cursor: pointer;

  &:checked {
    border-color: transparent;

    background: url("/src/assets/images/checkImg.svg") no-repeat;
    background-color: #3d8aff;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;
