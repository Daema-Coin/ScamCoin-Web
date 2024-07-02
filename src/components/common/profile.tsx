import styled from "styled-components";
import { Stack, Text } from "@/components";
import type { ReactNode } from "react";
import { useGetBoothInfo } from "@/apis";
import { DSM } from "@/assets/images";
import { useNumCountAnimation } from "@/hooks";

type PropsType = {
  children: ReactNode;
};

export const Profile = ({ children }: PropsType) => {
  const { data } = useGetBoothInfo();

  return (
    <TitleBox>
      <TitleWrapper width="60%" gap={20} align="center">
        <BoothImg src={DSM} alt="" />
        <TextWrapper width="auto" direction="column" gap={4}>
          <Text size={24} weight={700}>
            {data?.name}
          </Text>
          <Text size={12} weight={500} color="#CACACA">
            총 매출
          </Text>
          <Text size={16} weight={700} color="#3D8AFF">
            {`${useNumCountAnimation(data?.profit || 0)} `}
            <Text size={14} weight={500} color="#000000">
              COIN
            </Text>
          </Text>
        </TextWrapper>
      </TitleWrapper>
      {children}
    </TitleBox>
  );
};

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 292px;
  padding: 90px 20px 0px 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  @media (max-height: 900px) {
    height: 220px;
    justify-content: space-between;
  }
`;

const TitleWrapper = styled(Stack)`
  height: 211px;
  justify-content: flex-start;

  @media (max-height: 900px) {
    height: 100px;
    justify-content: center;
  }
`;

const TextWrapper = styled(Stack)`
  @media (max-height: 900px) {
    height: 80px;
    align-items: center;
  }
`;

const BoothImg = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #cccccc;
  background-color: #cccccc;

  @media (max-height: 900px) {
    display: none;
  }
`;
