import { usePreSignedURL, useUpdateMenu, type CreateMenuRequest } from "@/apis";
import { Pencil, DSMLogo } from "@/assets/images";
import { Button, Input, OptionInput, Stack, Text, Textarea } from "@/components";
import { useForm } from "@/hooks";
import { useModal } from "@/stores";
import { TransImageURL } from "@/utils";
import { useRef, useState } from "react";
import styled from "styled-components";

type PropsType = {
  id?: number;
  item?: CreateMenuRequest;
};

export const ProductModal = ({ id, item }: PropsType) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const { closeModal } = useModal();

  const { form, handleChange } = useForm<CreateMenuRequest>({
    name: item?.name || "",
    description: item?.description || "",
    price: item?.price || 0,
    image_url: item?.image_url as string,
  });

  const { mutate: fileUploader } = usePreSignedURL(file!, form);
  const { mutate: updateMutate } = useUpdateMenu();

  const { name, description, price, image_url } = form;

  return (
    <TitleWrapper direction="column" gap={20}>
      <Stack width="100%" justify="space-between" align="center">
        <Text size={16} weight={500}>
          상품 {id ? "수정" : "추가"}
        </Text>
        <Stack width={110} gap={10}>
          <Button
            width={50}
            height={28}
            onClick={() => {
              closeModal();
            }}
          >
            취소
          </Button>
          <Button
            width={50}
            height={28}
            onClick={() => {
              id ? updateMutate({ id, data: form }) : fileUploader(id);
            }}
          >
            {id ? "수정" : "추가"}
          </Button>
        </Stack>
      </Stack>
      <Divider $isHorizontal />
      <Stack width="100%">
        <InputWrapper direction="column" gap={16} padding="0 20px 0 0">
          <OptionInput name="상품 사진">
            <ProductImg
              src={file ? URL.createObjectURL(file) : image_url ? TransImageURL(image_url) : DSMLogo}
              height={80}
              width={80}
              onClick={() => {
                fileInput.current?.click();
              }}
            />
            <EditImg
              src={Pencil}
              width={20}
              onClick={() => {
                fileInput.current?.click();
              }}
            />
            <input
              type="file"
              hidden
              ref={fileInput}
              accept="image/png"
              onChange={e => {
                setFile(e.target.files ? e.target.files[0] : null);
              }}
            />
          </OptionInput>
          <Divider $isHorizontal $isLight />
          <OptionInput name="상품명">
            <Input maxLength={24} value={name} name="name" onChange={handleChange} />
          </OptionInput>
          <Divider $isHorizontal $isLight />
          <OptionInput name="상품 설명">
            <Textarea maxLength={120} value={description} name="description" onChange={handleChange} />
          </OptionInput>
          <Divider $isHorizontal $isLight />
          <OptionInput name="가격">
            <Input min={0} value={price} name="price" onChange={handleChange} isPrice />
          </OptionInput>
        </InputWrapper>
        <PreviewWrapper width={220} direction="column" align="center" gap={10} padding="0 0 0 20px">
          <Text size={12} weight={700} color="#8D8D8D">
            상품 미리보기
          </Text>
          <Divider $isHorizontal $isLight />
          <PreviewBox>
            <Stack height="100%" direction="column" justify="space-between">
              <Text size={10} weight={700}>
                {name}
              </Text>
              <Text size={8} weight={500} color="#BDBDBD">
                {description}
              </Text>
              <Text size={8} weight={500}>
                {price}코인
              </Text>
            </Stack>
            <ProductImg
              src={file ? URL.createObjectURL(file) : image_url ? TransImageURL(image_url) : DSMLogo}
              height={40}
              width={40}
            />
          </PreviewBox>
        </PreviewWrapper>
      </Stack>
    </TitleWrapper>
  );
};

const Divider = styled.div<{ $isHorizontal: boolean; $isLight?: boolean }>`
  height: ${({ $isHorizontal }) => ($isHorizontal ? "1px" : "100%")};
  width: ${({ $isHorizontal }) => ($isHorizontal ? "100%" : "1px")};
  background-color: ${({ $isLight }) => ($isLight ? "#f2f2f2" : "#cacaca")};
`;

const PreviewBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 8px;
  width: 100%;
  height: 70px;
  background-color: #f2f2f2;
  border-radius: 4px;
`;

const TitleWrapper = styled(Stack)`
  width: 600px;

  @media (max-width: 500px) {
    width: auto;
  }
`;

const InputWrapper = styled(Stack)`
  border-right: 1px solid #cacaca;
  width: 380px;
  padding: 0 20px 0 0;

  @media (max-width: 500px) {
    width: 360px;
    padding: 0px;
    border-right: none;
  }
`;

const ProductImg = styled.img`
  border-radius: 4px;
  background-color: #cacaca;
  cursor: pointer;
`;

const EditImg = styled.img`
  position: absolute;
  left: 68px;
  bottom: -8px;
  cursor: pointer;
`;

const PreviewWrapper = styled(Stack)`
  display: flex;

  @media (max-width: 500px) {
    display: none;
  }
`;
