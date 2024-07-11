import styled from "styled-components";
import { Checkbox, Stack, Text } from "@/components";
import { UserType } from "@/apis";
import { DSM } from "@/assets/images";

type PropsType = {
  item: UserType;
  isSelect: boolean;
  onClick: () => void;
};

export const StudentBox = ({ item, isSelect, onClick }: PropsType) => {
  return (
    <Container $isSelect={isSelect} onClick={onClick}>
      <Stack align="center" gap={16} width="auto">
        <StyleCheckbox checked={isSelect} onChange={() => {}} />
        <Img src={DSM} alt="" />
        <StyleText size={18} weight={400}>
          {item.name}
        </StyleText>
        <StyleText size={18} weight={300} color="#555555">
          {item.gcn}
        </StyleText>
      </Stack>
      <StyleText size={18} weight={300} color="#555555">
        {item.coin_balance}코인
      </StyleText>
    </Container>
  );
};

const Container = styled.div<{ $isSelect: boolean }>`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 100%;
  height: 70px;
  border-radius: 8px;
  border: 1.5px solid ${({ $isSelect }) => ($isSelect ? "#3D8AFF" : "#cccccc")};
  cursor: pointer;
`;

const StyleCheckbox = styled(Checkbox)`
  @media (max-width: 500px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #cccccc;
  @media (max-width: 500px) {
    display: none;
  }
`;

const StyleText = styled(Text)`
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
