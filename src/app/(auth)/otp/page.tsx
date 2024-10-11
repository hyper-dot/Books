"use client";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import { BackBtn } from "@/components/common/BackBtn";
import {
  useGenerateNewOTP,
  useOTPVerification,
} from "@/hooks/mutations/auth.mutation";
import toast from "react-hot-toast";

const OTP_RESET_TIMER = 60; // in seconds

export default function Page() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(OTP_RESET_TIMER);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const { mutateAsync, isPending } = useOTPVerification();
  const newOTPMutation = useGenerateNewOTP();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const promise = mutateAsync({ otp, email }).then(() =>
      router.push("/login"),
    );
    toast.promise(promise, {
      loading: "Please wait ...",
      success: "OTP verified successfully !!",
      error: (err) => err.message || "Something went wrong !!",
    });
  };

  function handeNewOTPMRequest() {
    const promise = newOTPMutation
      .mutateAsync({ email: email! })
      .then(() => setTimer(OTP_RESET_TIMER));
    toast.promise(promise, {
      loading: "Please wait ...",
      success: "New otp sent to email successfully",
      error: (err) => err.message || "Something went wrong !!",
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col -translate-y-10 min-h-screen w-fit mx-auto justify-center">
      <div className="pb-4">
        <BackBtn />
      </div>
      <form
        onSubmit={handleSubmit}
        className="sm:border sm:p-8 space-y-5 text-center rounded-3xl w-fit"
      >
        <h3 className="text-2xl font-semibold">Verify OTP</h3>
        <p className="text-sm text-muted-foreground">
          Enter OTP code sent to <span className="font-bold">{email}</span>
        </p>
        <InputOTP value={otp} onChange={(val) => setOtp(val)} maxLength={6}>
          <InputOTPSlot className="bg-background text-foreground" index={0} />
          <InputOTPSlot className="bg-background text-foreground" index={1} />
          <InputOTPSlot className="bg-background text-foreground" index={2} />
          <InputOTPSlot className="bg-background text-foreground" index={3} />
          <InputOTPSlot className="bg-background text-foreground" index={4} />
          <InputOTPSlot className="bg-background text-foreground" index={5} />
        </InputOTP>
        <p className="text-sm text-muted-foreground">
          Didnt receive code ?{" "}
          <button
            type="button"
            disabled={!!timer || newOTPMutation.isPending}
            onClick={handeNewOTPMRequest}
            className="font-bold cursor-pointer disabled:cursor-not-allowed text-blue-600 dark:text-blue-400 disabled:text-muted-foreground disabled:dark:text-muted-foreground"
          >
            Resend
          </button>{" "}
          {!!timer && (
            <>
              in <span className="font-bold">{timer}</span>s
            </>
          )}
        </p>

        <Button disabled={isPending} size="lg" className="w-full">
          Verify
        </Button>
      </form>
    </div>
  );
}
