"use client";
import React from "react";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = ({
  name,
  loadingName,
}: {
  name: string;
  loadingName: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button className="w-full mt-4" aria-disabled={pending}>
        {pending ? (
          <div className="flex gap-2 items-center justify-center">
            {loadingName} <Loader className="animate-spin" />
          </div>
        ) : (
          name
        )}
      </Button>
    </div>
  );
};

export default SubmitButton;
