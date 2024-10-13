import { apiClient } from "@/config/axios";
import { useQuery } from "@tanstack/react-query";

export function useAPIQuery(route: string, key: any[]) {
  return useQuery({ queryFn: () => apiClient.get(route), queryKey: key });
}
