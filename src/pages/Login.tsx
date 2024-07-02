import { Flex } from "@/components/Flex";
import { Input } from "@/components/Input";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginRequest {
  id: string;
  password: string;
}

export default function LoginPage() {
  const { handleSubmit, register } = useForm<LoginRequest>();

  const onSubmit: SubmitHandler<LoginRequest> = data => {
    const { id, password } = data;
    console.log(id, password);
    //TODO 로그인 api 연동
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <LoginText>로그인</LoginText>
        <Flex
          align="center"
          direction="column"
          gap={12}
          style={{ marginBottom: 40, marginTop: 28, width: "100%" }}
        >
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            {...register("id")}
          />
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password")}
          />
        </Flex>
        <ConfirmButton type="submit">확인</ConfirmButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: #fafafa;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 36px 32px;
  border-radius: 12px;

  background-color: #fff;
  box-shadow: 0 4px 20px 0 rgb(112 144 176 / 12%);
`;

const LoginText = styled.span`
  color: #3d8aff;
  font-size: 24px;
  font-weight: 700;
`;

const ConfirmButton = styled.button`
  border: 0;
  outline: 0;
  background: none;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background-color: #3d8aff;
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:focus {
    opacity: 0.8;
  }
`;
