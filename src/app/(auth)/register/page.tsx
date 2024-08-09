"use client";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import FormSubmitBtn from "@/components/form/FormSubmitBtn";
import { BackBtn } from "@/components/common/BackBtn";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { H2 } from "@/components/ui/typography";
import FormInput from "@/components/form/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterSchema, registerSchema } from "@/schema/auth.schema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useRegisterUser } from "@/hooks/mutations/auth.mutation";

export default function page() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const { mutateAsync, isPending } = useRegisterUser();

  if (process.env.NODE_ENV === "development") {
    console.log(errors);
  }

  const onSubmit = (payload: TRegisterSchema) => {
    const promise = mutateAsync(payload).then(() =>
      router.push(`/otp?email=${payload.email}`),
    );
    toast.promise(promise, {
      loading: "Please wait...",
      success: "Account created successfully !",
      error: (err) => err.message || "Something went wrong !!",
    });
  };

  return (
    <div className="flex mt-10 h-full w-full flex-col items-center justify-center gap-8 px-4 py-10">
      <div className="w-full max-w-sm">
        <BackBtn />
        <H2>Hi there,</H2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-4"
      >
        <div>
          <div>
            <Label>Full Name</Label>
            <FormInput
              placeholder="Enter full name"
              register={register("name")}
              errors={errors.name}
            />
          </div>
        </div>
        <div>
          <Label>Email</Label>
          <FormInput
            placeholder="Enter your email"
            register={register("email")}
            errors={errors.email}
          />
        </div>
        <div>
          <Label>Password</Label>
          <FormInput
            type="password"
            placeholder="Enter a new password"
            register={register("password")}
            errors={errors.password}
          />
        </div>
        <div>
          <Label>Confirm Password</Label>
          <FormInput
            type="password"
            placeholder="Re-enter your password"
            register={register("confirm_password")}
            errors={errors.confirm_password}
          />
        </div>

        <div className="space-y-2 pt-5">
          <FormSubmitBtn className="w-full" isSubmitting={false}>
            Register
          </FormSubmitBtn>

          <p className="text-center">Or</p>

          <Button
            type="button"
            className="flex w-full gap-2"
            variant="outline"
            disabled={false}
          >
            <img width={20} src="/google.svg" alt="" />
            Continue with Google
          </Button>

          <p className="pt-5 text-center">
            Already have an account ?{" "}
            <Link
              className="text-blue-500 underline-offset-2 hover:underline"
              href="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
