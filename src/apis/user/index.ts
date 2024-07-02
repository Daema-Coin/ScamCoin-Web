import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { instance, type GrantCoinRequest, type UsersResponse } from "@/apis";
import toast from "react-hot-toast";

const router = "/user";

export const useAllUsers = () => {
  return useQuery({
    queryKey: ["getAllUsers"],
    queryFn: async () => {
      const { data } = await instance.get<UsersResponse>(`${router}`);
      return data;
    },
  });
};

export const useGrantCoin = (setSelectUser: React.Dispatch<React.SetStateAction<number[]>>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: GrantCoinRequest) => instance.post(`${router}/coin`, data),
    onSuccess: () => {
      toast.success("코인 지급이 완료되었어요.");
      setSelectUser([]);
      queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
    },
    onError: () => {
      toast.error("코입 지급에 실패했어요.");
    },
  });
};
