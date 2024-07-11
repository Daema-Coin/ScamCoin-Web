import { useAllUsers, useGrantCoin } from "@/apis";
import { Button, ColorSpan, NumberButton, SearchInput, Stack, StudentBox, Text } from "@/components";
import { useState } from "react";
import styled from "styled-components";

export const Student = () => {
  const [coin, setCoin] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [selectUser, setSelectUser] = useState<number[]>([]);
  const { data } = useAllUsers();
  const { mutate } = useGrantCoin(setSelectUser);

  const grantCoinMutate = (type: "MINUS" | "PLUS") => {
    if (selectUser.length > 0) {
      type === "MINUS"
        ? mutate({ user_ids: selectUser, amount: -coin })
        : mutate({ user_ids: selectUser, amount: coin });
    }
  };

  return (
    <Container>
      <Stack width="60vw" direction="column" gap={16}>
        <ControlerWrapper justify="space-between">
          <StyleSearchInput
            height={50}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }}
          />
          <Stack width={206} gap={10}>
            <NumberButton
              value={coin}
              onChange={value => {
                setCoin(value);
              }}
            />
            <Button
              width={58}
              height={36}
              disabled={selectUser.length === 0}
              onClick={() => {
                grantCoinMutate("PLUS");
              }}
            >
              증가
            </Button>
            <Button
              width={58}
              height={36}
              disabled={selectUser.length === 0}
              onClick={() => {
                grantCoinMutate("MINUS");
              }}
            >
              감소
            </Button>
          </Stack>
        </ControlerWrapper>
        <Text size={16} weight={700}>
          <ColorSpan color="#3D8AFF">{selectUser.length}</ColorSpan>명이 선택되었습니다.
        </Text>
        <Stack direction="column" height="calc(100vh - 262px)" overflow="scroll" gap={16}>
          {data?.users
            .filter(item => item.name.includes(search) || item.gcn.includes(search))
            .map(item => (
              <StudentBox
                key={item.id}
                item={item}
                isSelect={!!selectUser.includes(item.id)}
                onClick={() => {
                  if (selectUser.includes(item.id)) {
                    setSelectUser(prev => prev.filter(id => id !== item.id));
                  } else {
                    setSelectUser(prev => [...prev, item.id]);
                  }
                }}
              />
            ))}
        </Stack>
      </Stack>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 106px;
  display: flex;
  justify-content: center;
`;

const ControlerWrapper = styled(Stack)`
  align-items: flex-end;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const StyleSearchInput = styled(SearchInput)`
  width: 380px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
