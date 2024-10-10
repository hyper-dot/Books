"use client";
import Link from "next/link";
import { H2 } from "@/components/ui/typography";
import { BackBtn } from "@/components/common/BackBtn";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import FormInput from "@/components/form/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "@/schema/auth.schema";
import { useLoginMutation } from "@/hooks/mutations/auth.mutation";
import FormSubmitBtn from "@/components/form/FormSubmitBtn";
import Image from "next/image";

export default function Page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });
  const { mutateAsync, isPending } = useLoginMutation();

  const onSubmit = async (payload: TLoginSchema) => {
    mutateAsync(payload);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 mt-10">
      <div className="w-full max-w-sm">
        <BackBtn />
        <H2>Welcome Back,</H2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-4"
      >
        <div>
          <Label>Email</Label>
          <FormInput
            register={register("email")}
            errors={errors.email}
            placeholder="Enter your email here"
          />
        </div>
        <div>
          <Label>Password</Label>
          <FormInput
            type="password"
            register={register("password")}
            errors={errors.password}
            placeholder="Enter your password"
          />
        </div>
        <div>
          <Link href="/forgot" className="hover:text-muted-foreground">
            Forgot Password ?
          </Link>
        </div>

        <div className="space-y-2">
          <FormSubmitBtn className="w-full" isSubmitting={isPending}>
            Login
          </FormSubmitBtn>

          {/* <p className="text-center">Or</p> */}

          {/* <Button type="button" className="flex w-full gap-2" variant="outline">
            <Image width={20} height={20} src="/google.svg" alt="" />
            Continue with Google
          </Button> */}

          <p className="pt-5 text-center">
            Don&apos;t have an account ?{" "}
            <Link
              className="text-blue-500 underline-offset-2 hover:underline"
              href="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
