import { type SignInRequest, useSignIn } from "@/apis";
import { Input } from "@/components";
import { useForm } from "@/hooks";
import styled from "styled-components";

export const SignInPage = () => {
  const { form, handleChange } = useForm<SignInRequest>({
    auth_code: "",
  });

  const { mutate } = useSignIn(form);

  return (
    <Container
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
      }}
    >
      <Wrapper>
        <LoginText>로그인</LoginText>
        <Input placeholder="코드를 입력해주세요." name="auth_code" value={form.auth_code} onChange={handleChange} />
        <ConfirmButton type="submit">확인</ConfirmButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: #fafafa;

  @media (max-width: 500px) {
    background-color: #ffffff;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 36px 32px;
  border-radius: 12px;
  gap: 20px;

  background-color: #fff;
  box-shadow: 0 4px 20px 0 rgb(112 144 176 / 12%);

  @media (max-width: 500px) {
    width: 90%;
    gap: 40px;
    box-shadow: none;
  }
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
  height: 48px;
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
