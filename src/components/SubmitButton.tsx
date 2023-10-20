"use client";
import React from "react";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button className="w-full mt-4" aria-disabled={pending}>
        {pending ? (
          <div className="flex gap-2 items-center justify-center">
            Submitting <Loader className="animate-spin" />
          </div>
        ) : (
          "Submit"
        )}
      </Button>
    </div>
  );
};

export default SubmitButton;
