import { ReactNode } from "react";
import { Stack, Text } from "@/components";
import styled from "styled-components";

type PropsType = {
  children: ReactNode;
  name: string;
};

export const OptionInput = ({ children, name }: PropsType) => {
  return (
    <Stack justify="space-between">
      <Text size={12} weight={700} color="#8d8d8d" lineHeight={28}>
        {name}
      </Text>
      <OptionWrapper position="relative">{children}</OptionWrapper>
    </Stack>
  );
};

const OptionWrapper = styled(Stack)`
  width: 240px;

  @media (max-width: 500px) {
    width: 280px;
  }
`;
