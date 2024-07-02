import styled from "styled-components";
import { NavButton, OrderBox, Profile, Stack } from "@/components";

export const OrderDetails = () => {
  return (
    <Container>
      <Profile>
        <NavBtnWrapper width="60%" height={80}>
          <NavButton width={60} total={21} name="처리중" isSelect />
          <NavButton width={60} total={21} name="완료" isSelect={false} />
        </NavBtnWrapper>
      </Profile>
      <OrderWrapper>
        {Array.from({ length: 3 }, () => (
          <OrderBox />
        ))}
      </OrderWrapper>
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
