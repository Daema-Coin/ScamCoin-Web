import { useGetMenus } from "@/apis";
import { Button, NavButton, ProductBox, Profile, Stack } from "@/components";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProductModal } from "@/pages";
import { useModal } from "@/stores";

export const ProductManagement = () => {
  const { data } = useGetMenus();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { openModal } = useModal();

  const isSoldOut = searchParams.get("soldout") === "true";

  return (
    <Container>
      <Profile>
        <TitleWrapper width="60%" height={80} align="center" justify="space-between">
          <NavWrapper>
            <NavButton
              width={70}
              name="상품관리"
              isSelect={!isSoldOut}
              onClick={() => {
                navigate("/product?soldout=false");
              }}
            />
            <NavButton
              width={70}
              name="품절관리"
              isSelect={isSoldOut}
              onClick={() => {
                navigate("/product?soldout=true");
              }}
            />
          </NavWrapper>
          <AddButton
            width={70}
            height={36}
            size={14}
            onClick={() => {
              openModal({ children: <ProductModal /> });
            }}
          >
            추가
          </AddButton>
        </TitleWrapper>
      </Profile>
      <ProductWrapper>
        {data?.menu.map(item => <ProductBox key={item.id} item={item} isSoldOut={isSoldOut} />)}
        {data?.menu && Array.from({ length: (data.menu.length - 1) % 3 }, (_, idx) => <FakeBox key={idx} />)}
      </ProductWrapper>
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

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
  gap: 20px;
  margin: 20px 0;
`;

const FakeBox = styled.div`
  width: 285px;
  height: 285px;
`;

const NavWrapper = styled(Stack)`
  align-items: flex-end;
  gap: 40px;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
    gap: 10px;
  }
`;

const TitleWrapper = styled(Stack)`
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    width: 100%;
    justify-content: center;
    gap: 10px;
  }
`;

const AddButton = styled(Button)`
  @media (max-width: 500px) {
    position: absolute;
    top: 90px;
    right: 20px;
  }
`;
