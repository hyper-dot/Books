import { apiClient } from "@/config/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddCustomerMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: any) =>
      await apiClient.post("/customer", payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });
}
