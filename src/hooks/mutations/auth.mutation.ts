import { login } from "@/action/auth.action";
import { r } from "@/config/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (payload: any) => {
      return await r.post({
        endpoint: "/auth/register",
        payload,
      });
    },
  });
};

export const useOTPVerification = () => {
  return useMutation({
    mutationFn: async (payload: any) => {
      return await r.post({
        endpoint: "/auth/otp",
        payload,
      });
    },
  });
};

// Register mutations
export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    onSuccess: () => {
      queryClient.resetQueries();
    },
    mutationFn: async (payload: any) => {
      try {
        const { error, code } = await login(payload);

        if (error) {
          if (code === 403) {
            toast.error("You haven't verified otp.", {});
            router.push(`/otp?email=${payload.email}`);
            return;
          } else {
            return toast.error(error);
          }
        } else {
          toast.success("You have been loggedin successfully.");
          router.push("/dashboard");
        }
      } catch (err) {
        toast("Something went wrong. Please try again.");
      }
    },
  });
};
