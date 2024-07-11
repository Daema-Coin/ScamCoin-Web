import styled from "styled-components";
import { NavButton, OrderBox, Profile, Stack } from "@/components";
import { type OrderEnum, useGetOrderList } from "@/apis";
import { useNavigate, useSearchParams } from "react-router-dom";

export const OrderDetails = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const isProcess = searchParams.get("status") === "done";
  const { data } = useGetOrderList((searchParams.get("status") as OrderEnum) || "request");

  return (
    <Container>
      <Profile>
        <NavBtnWrapper width="60%" height={80}>
          <NavButton
            width={60}
            total={isProcess ? undefined : data?.orders.length}
            name="처리중"
            isSelect={!isProcess}
            onClick={() => {
              navigate("/order?status=request");
            }}
          />
          <NavButton
            width={60}
            total={isProcess ? data?.orders.length : undefined}
            name="완료"
            isSelect={isProcess}
            onClick={() => {
              navigate("/order?status=done");
            }}
          />
        </NavBtnWrapper>
      </Profile>
      <OrderWrapper>{data?.orders.map(item => <OrderBox item={item} key={item.order_id} />)}</OrderWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #fafafa;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin: 20px 0;
`;

const NavBtnWrapper = styled(Stack)`
  gap: 40px;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
    gap: 10px;
  }
`;
