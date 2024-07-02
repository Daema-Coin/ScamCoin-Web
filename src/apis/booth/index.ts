import { useMutation, useQuery } from "@tanstack/react-query";
import { type SignInRequest, instance, type BoothInfoResponse } from "@/apis";
import axios from "axios";
import toast from "react-hot-toast";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const router = "/booth";
const cookie = new Cookies();

export const useGetBoothInfo = () => {
  return useQuery({
    queryKey: ["getBoothInfo"],
    queryFn: async () => {
      const { data } = await instance.get<BoothInfoResponse>(`${router}`);
      return data;
    },
  });
};

export const useSignIn = (data: SignInRequest) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => axios.post(`${import.meta.env.VITE_BASE_URL}${router}/login`, data),
    onSuccess: res => {
      cookie.set("access_token", res.data.token);
      cookie.set("isAdmin", res.data.is_admin);
      toast.success("로그인에 성공하였어요.");
      navigate("/");
    },
    onError: () => {
      toast.error("로그인에 실패했어요.");
    },
  });
};
