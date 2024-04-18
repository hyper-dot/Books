"use client";
import { BackBtn } from "@/components/BackBtn.client";
import { H2 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const oAuthPost = async () => {
    const res = await fetch(`/api/auth/oauth`, { method: "POST" });
    const { url } = await res.json();
    router.push(url);
  };

  const mutation = useMutation({
    mutationFn: oAuthPost,
    onSuccess: () => {},
  });
  return (
    <div className="h-full gap-8 flex justify-center flex-col items-center w-full">
      <div className="w-full max-w-sm">
        <BackBtn />
        <H2>Welcome Back</H2>
      </div>
      <form className="w-full max-w-sm space-y-4">
        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email here" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" placeholder="Enter your email here" />
        </div>
        <div>
          <Link href="/forgot" className="hover:text-muted-foreground">
            Forgot Password ?
          </Link>
        </div>

        <div className="space-y-2">
          <Button className="w-full flex gap-2">
            <Loader2 size={16} className="animate-spin" />
            Sign In
          </Button>

          <p className="text-center">Or</p>

          <Button
            type="button"
            onClick={() => mutation.mutate()}
            className="w-full flex gap-2"
            variant="outline"
            disabled={mutation.isPending}
          >
            <img width={20} src="/google.svg" alt="" />
            Continue with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default page;
