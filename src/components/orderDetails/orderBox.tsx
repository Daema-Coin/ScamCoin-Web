import styled from "styled-components";
import { Button, Stack, Text } from "@/components";
import { DottedLine } from "@/assets/images";

type RowPropsType = {
  size: number;
  weight: number;
  color?: string;
};

export const OrderBox = () => {
  const Row = ({ size, weight, color = "#000000" }: RowPropsType) => {
    return (
      <Stack justify="space-between" gap="5%">
        <StyleText size={size} weight={weight} color={color}>
          상품명
        </StyleText>
        <StyleText size={size} weight={weight} color={color} style={{ textAlign: "center" }}>
          수량
        </StyleText>
        <StyleText size={size} weight={weight} color={color} style={{ textAlign: "end" }}>
          가격
        </StyleText>
      </Stack>
    );
  };

  return (
    <Container>
      <HumanInfoWrapper width="100%" justify="space-between" align="center">
        <Text size={18} weight={700}>
          이정호{" "}
          <Text size={14} color="#CACACA">
            님
          </Text>
        </Text>
        <Stack width={130} gap={10}>
          <Button width={60} height={36}>
            취소
          </Button>
          <Button width={60} height={36}>
            완료
          </Button>
        </Stack>
      </HumanInfoWrapper>
      <Line src={DottedLine} alt="" />
      <Stack direction="column" gap={10}>
        <Text size={12} weight={700} color="#CACACA">
          요청사항:
        </Text>
        <Text size={16} weight={700}>
          많이주세요~
        </Text>
      </Stack>
      <Line src={DottedLine} alt="" />
      <Row size={12} weight={700} color="#CACACA" />
      <Line src={DottedLine} alt="" />
      {Array.from({ length: 3 }, () => (
        <Row size={14} weight={500} />
      ))}
      <Line src={DottedLine} alt="" />
      <Stack justify="space-between">
        <Text size={14} weight={700}>
          합계
        </Text>
        <Text size={14} weight={700}>
          800코인
        </Text>
      </Stack>
    </Container>
  );
};

const Container = styled.div`
  width: 60vw;
  padding: 28px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const HumanInfoWrapper = styled(Stack)`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Line = styled.img`
  width: calc(60vw - 50px);
  height: 1px;
`;

const StyleText = styled(Text)`
  width: 30%;
`;
