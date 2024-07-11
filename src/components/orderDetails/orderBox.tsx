import styled from "styled-components";
import { Button, Stack, Text } from "@/components";
import { DottedLine } from "@/assets/images";
import { MenuListType, OrderListType, useChangeOrderStatus } from "@/apis";
import { useSearchParams } from "react-router-dom";

type PropsType = {
  item: OrderListType;
};

type RowPropsType = {
  menu?: MenuListType;
  size: number;
  weight: number;
  color?: string;
};

export const OrderBox = ({ item }: PropsType) => {
  const { mutate } = useChangeOrderStatus(item.order_id);
  const [searchParams] = useSearchParams();

  const totalPrice = item.menu_list
    .map(menu => menu.price * menu.amount)
    .reduce((sum, currValue) => {
      return sum + currValue;
    }, 0);

  const Row = ({ menu, size, weight, color = "#000000" }: RowPropsType) => {
    return (
      <Stack justify="space-between" gap="5%">
        <StyleText size={size} weight={weight} color={color}>
          {menu?.menu || "메뉴명"}
        </StyleText>
        <StyleText size={size} weight={weight} color={color} style={{ textAlign: "center" }}>
          {menu?.amount || "수량"}
        </StyleText>
        <StyleText size={size} weight={weight} color={color} style={{ textAlign: "end" }}>
          {menu?.price || "가격"}
        </StyleText>
      </Stack>
    );
  };

  return (
    <Container>
      <HumanInfoWrapper width="100%" justify="space-between" align="center">
        <Text size={18} weight={700}>
          {`${item.orderer_name} `}
          <Text size={14} color="#CACACA">
            님
          </Text>
        </Text>
        {searchParams.get("status") !== "done" && (
          <Stack width={130} gap={10}>
            <Button
              width={60}
              height={36}
              onClick={() => {
                mutate("cancel");
              }}
            >
              취소
            </Button>
            <Button
              width={60}
              height={36}
              onClick={() => {
                mutate("done");
              }}
            >
              완료
            </Button>
          </Stack>
        )}
      </HumanInfoWrapper>
      <Line src={DottedLine} alt="" />
      <Stack direction="column" gap={10}>
        <Text size={12} weight={700} color="#CACACA">
          요청사항:
        </Text>
        <Text size={16} weight={700}>
          {item.request}
        </Text>
      </Stack>
      <Line src={DottedLine} alt="" />
      <Row size={12} weight={700} color="#CACACA" />
      <Line src={DottedLine} alt="" />
      {item.menu_list.map((menu, idx) => (
        <Row key={idx} menu={menu} size={14} weight={500} />
      ))}
      <Line src={DottedLine} alt="" />
      <Stack justify="space-between">
        <Text size={14} weight={700}>
          합계
        </Text>
        <Text size={14} weight={700}>
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}코인
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
  height: 36px;
  @media (max-width: 500px) {
    height: auto;
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
