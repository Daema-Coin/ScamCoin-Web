import { Minus, Plus } from "@/assets/images";
import { Text } from "@/components";
import styled, { css } from "styled-components";

type PropsType = {
  value: number;
  onChange: (value: number) => void;
};

export const NumberButton = ({ value, onChange }: PropsType) => {
  return (
    <Container>
      <Img
        src={Minus}
        alt=""
        onClick={() => {
          onChange(value <= 0 ? 0 : value - 1);
        }}
        width={16}
        height={16}
        $disabled={value <= 0}
      />
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(+e.target.value.replace(/[^0-9]/g, " "));
        }}
      />
      <Img
        src={Plus}
        alt=""
        onClick={() => {
          onChange(value + 1);
        }}
        width={16}
        height={16}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cccccc;
  border-radius: 4px;
  gap: 10px;
  padding: 2px 6px;
`;

const Img = styled.img<{ $disabled?: boolean }>`
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.2;
    `}
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;

const Input = styled.input`
  border: none;
  width: 30px;
  text-align: center;
`;
