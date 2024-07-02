import { DSMLogo } from "@/assets/images";
import styled from "styled-components";
import { Text } from "@/components";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetBoothInfo } from "@/apis";
import { useCookies } from "react-cookie";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies] = useCookies();

  const { data } = useGetBoothInfo();

  return (
    <Container>
      <Wrapper>
        <Logo
          src={DSMLogo}
          alt=""
          height={70}
          onClick={() => {
            navigate("/");
          }}
          style={{ cursor: "pointer" }}
        />
        <NavWrapper>
          <NavText
            $isSelect={location.pathname.includes("order") || location.pathname === "/"}
            onClick={() => {
              navigate("/order");
            }}
          >
            <span>주문</span>
            <span>내역</span>
          </NavText>
          <NavText
            $isSelect={location.pathname.includes("product")}
            onClick={() => {
              navigate("/product");
            }}
          >
            <span>상품</span>
            <span>관리</span>
          </NavText>
          {cookies.isAdmin === "True" && (
            <NavText
              $isSelect={location.pathname.includes("student")}
              onClick={() => {
                navigate("/student");
              }}
            >
              거래소
            </NavText>
          )}
        </NavWrapper>
        <BoothName>
          <span>{`${data?.name} `}</span>
          <Text size={16} color="#CCCCCC">
            부스
          </Text>
        </BoothName>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 70px;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const Logo = styled.img`
  display: flex;
  cursor: pointer;

  @media (max-width: 500px) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavText = styled.span<{ $isSelect: boolean }>`
  display: flex;
  gap: 4px;
  white-space: pre-wrap;
  font-size: 16px;
  font-weight: ${({ $isSelect }) => ($isSelect ? 700 : 400)};
  color: ${({ $isSelect }) => ($isSelect ? "#3D8AFF" : "#000000")};
  cursor: pointer;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0px;
  }
`;

const BoothName = styled.span`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  gap: 4px;
  align-items: center;
  width: 163.33px;
  text-align: end;

  @media (max-width: 500px) {
    width: 64px;
    flex-direction: column;
  }
`;
