import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { instance, type CreateMenuRequest, type MenuResponse } from "@/apis";
import toast from "react-hot-toast";
import { useModal } from "@/stores";

const router = "/menu";

export const useGetMenus = () => {
  return useQuery({
    queryKey: ["getMenus"],
    queryFn: async () => {
      const { data } = await instance.get<MenuResponse>(`${router}`);
      return data;
    },
  });
};

export const useChangeMenuStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => instance.patch(`${router}/${id}`),
    onSuccess: () => {
      toast.success("해당 상품의 상태가 변경되었어요.");
      queryClient.invalidateQueries({ queryKey: ["getMenus"] });
    },
    onError: () => {
      toast.error("상품 상태 변경에 실패했어요.");
    },
  });
};

export const useCreateMenu = () => {
  const { closeModal } = useModal();

  return useMutation({
    mutationFn: (data: CreateMenuRequest) => instance.post(`${router}`, data),
    onSuccess: () => {
      toast.success("상품이 추가되었어요.");
      closeModal();
    },
    onError: () => {
      toast.error("상품 추가에 실패했어요.");
    },
  });
};

export const useUpdateMenu = () => {
  const { closeModal } = useModal();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CreateMenuRequest }) => instance.put(`${router}/${id}`, data),
    onSuccess: () => {
      toast.success("해당 상품이 수정되었어요.");
      closeModal();
    },
    onError: () => {
      toast.error("상품 수정에 실패했어요.");
    },
  });
};
