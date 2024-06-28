import * as React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, width, ...inputProps }, ref) => {
    return (
      <Label style={{ width }}>
        {label}
        <InputWrapper>
          <JustInput ref={ref} {...inputProps} />
        </InputWrapper>
      </Label>
    );
  }
);

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #333333;
  width: 100%;
  font-weight: 400;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const JustInput = styled.input`
  border: none;
  box-shadow: none;
  appearance: none;
  outline: none;

  border-style: solid;
  border-width: 2px;
  display: flex;
  align-items: center;
  font-weight: 400;
  border-color: #fafafa;
  background-color: #fafafa;
  color: #333333;
  width: 100%;

  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  border-radius: 8px;
  padding: 14px;
  ::placeholder {
    color: #7f7f7f;
    font-weight: 400;
  }

  &:focus-visible {
    border-color: #3d8aff;
  }
`;
