import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderEnum, instance, type OrderListResponse } from "@/apis";
import toast from "react-hot-toast";

const router = "/order";

export const useGetOrderList = (status: OrderEnum) => {
  return useQuery({
    queryKey: ["getOrderList", status],
    queryFn: async () => {
      const { data } = await instance.get<OrderListResponse>(`${router}/lists?status=${status}`);
      return data;
    },
  });
};

export const useChangeOrderStatus = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (status: OrderEnum) => instance.put(`${router}/${id}?status=${status}`),
    onSuccess: (_, status) => {
      toast.success("주문 상태가 변경되었어요.");
      queryClient.invalidateQueries({ queryKey: ["getOrderList"] });
      status === "done" && queryClient.invalidateQueries({ queryKey: ["getBoothInfo"] });
    },
    onError: () => {
      toast.error("주문 상태 변경에 실패했어요.");
    },
  });
};
