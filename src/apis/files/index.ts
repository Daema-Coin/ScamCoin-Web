import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { type PreSignedResponse, useCreateMenu, type CreateMenuRequest, useUpdateMenu } from "@/apis";
import toast from "react-hot-toast";

const router = "/files";

export const usePreSignedURL = (file: File, data: CreateMenuRequest) => {
  const queryClient = useQueryClient();

  const { mutate: createMutate } = useCreateMenu();
  const { mutate: updateMenu } = useUpdateMenu();

  return useMutation({
    // eslint-disable-next-line no-unused-vars
    mutationFn: async (_?: number) =>
      await axios.post<PreSignedResponse>(`${import.meta.env.VITE_RETURN_BASE_URL}${router}/pre-signed`, {
        files: [
          {
            type: "LOGO_IMAGE",
            file_name: file.name,
          },
        ],
      }),
    onSuccess: (res, id) => {
      axios.put(res.data.urls[0].pre_signed_url, file).then(() => {
        queryClient.invalidateQueries({ queryKey: ["getMenus"] });
      });
      id
        ? updateMenu({
            id: id,
            data: { ...data, image_url: res.data.urls[0].file_path },
          })
        : createMutate({
            ...data,
            image_url: res.data.urls[0].file_path,
          });
    },
    onError: () => {
      toast.error("파일 업로드에 실패했어요.");
    },
  });
};
