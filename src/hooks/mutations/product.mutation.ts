import { r } from "@/config/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddProductMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: any) =>
      await r.post({ endpoint: "/product", payload }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
