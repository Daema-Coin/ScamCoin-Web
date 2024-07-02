import styled from "styled-components";
import { Button, ColorSpan, Stack, Text } from "@/components";
import { SoldOut } from "@/assets/images";
import { useModal } from "@/stores";
import { ProductModal } from "@/pages";
import { useChangeMenuStatus, type MenuType } from "@/apis";
import { TransImageURL } from "@/utils";

type PropsType = {
  item: MenuType;
  isSoldOut: boolean;
};

export const ProductBox = ({ item, isSoldOut }: PropsType) => {
  const { openModal } = useModal();

  const { mutate } = useChangeMenuStatus();

  return (
    <Stack position="relative" width={285} height={285}>
      {!item.is_open && (
        <SoldOutContainer>
          <img src={SoldOut} alt="" height={75} />
        </SoldOutContainer>
      )}
      <Container>
        <Img src={TransImageURL(item.image_url)} alt="" />
        <Text size={14} weight={700}>
          {item.name}
        </Text>
        <Text size={8} weight={700} color="#CACACA" style={{ marginTop: "-6px" }}>
          {item.price}코인
        </Text>
        <Text size={10} weight={700} color="#CACACA" lineHeight={18}>
          {item.description}
        </Text>
        <Stack align="center">
          <Stack direction="column" gap={4}>
            <Text size={10} weight={700}>
              판매량<ColorSpan color="#CACACA">・</ColorSpan>매출
            </Text>
            <Text size={10} weight={700} color="#CACACA">
              <ColorSpan color="#3D8AFF">{item.sell_count}</ColorSpan>개・
              <ColorSpan color="#3D8AFF">{item.sell_count * item.price}</ColorSpan>코인
            </Text>
          </Stack>
          <Button
            width={50}
            height={28}
            style={{ zIndex: 1 }}
            onClick={() => {
              isSoldOut
                ? mutate(item.id)
                : openModal({
                    children: (
                      <ProductModal
                        id={item.id}
                        item={{
                          name: item.name,
                          description: item.description,
                          price: item.price,
                          image_url: item.image_url,
                        }}
                      />
                    ),
                  });
            }}
          >
            {isSoldOut ? (item.is_open ? "품절" : "취소") : "수정"}
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 13px;
  width: 100%;
  height: 100%;
  border: 1px solid #cccccc;
  border-radius: 8px;
`;

const Img = styled.img`
  width: 100%;
  height: 130px;
  background-color: #cccccc;
  border-radius: 4px;
`;

const SoldOutContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(217, 217, 217, 0.6);
`;
