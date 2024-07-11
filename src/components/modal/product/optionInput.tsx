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
      <StyleText size={12} weight={700} color="#8d8d8d" lineHeight={28}>
        {name}
      </StyleText>
      <OptionWrapper position="relative">{children}</OptionWrapper>
    </Stack>
  );
};

const StyleText = styled(Text)`
  width: 20%;
`;

const OptionWrapper = styled(Stack)`
  width: 80%;

  @media (max-width: 500px) {
    width: 80%;
  }
`;
