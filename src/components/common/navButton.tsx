import { Stack, Text } from "@/components";
import type { HTMLAttributes } from "react";
import styled from "styled-components";

type PropsType = {
  isSelect: boolean;
  name: string;
  width: number;
  total?: number;
} & HTMLAttributes<HTMLDivElement>;

export const NavButton = ({ isSelect, name, width, total, ...props }: PropsType) => {
  return (
    <Container
      width={width}
      height={81}
      direction="column"
      justify="center"
      align="center"
      gap={4}
      $isSelect={isSelect}
      {...props}
    >
      {total && (
        <Text size={12} weight={500} color={isSelect ? "#3D8AFF" : "#CACACA"}>
          {total}건
        </Text>
      )}
      <Text size={18} weight={500} color={isSelect ? "#3D8AFF" : "#CACACA"}>
        {name}
      </Text>
    </Container>
  );
};

const Container = styled(Stack)<{ $isSelect: boolean }>`
  border-bottom: 2px solid ${({ $isSelect }) => ($isSelect ? "#3D8AFF" : "#CACACA")};
  cursor: pointer;
  height: 81px;

  @media (max-height: 900px) {
    height: 50px;
  }
`;
