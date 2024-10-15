"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { H3 } from "@/components/ui/typography";
import { Camera } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCustomerSchema, customerSchema } from "@/schema/customer.schema";
import FormInput from "@/components/form/FormInput";
import { useAddCustomerMutation } from "@/hooks/mutations/customer.mutation";
import toast from "react-hot-toast";

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCustomerSchema>({
    resolver: zodResolver(customerSchema),
  });
  const { mutateAsync } = useAddCustomerMutation();

  const onSubmit = (data: TCustomerSchema) => {
    const promise = mutateAsync(data).then(() => reset());
    toast.promise(promise, {
      loading: "Please wait...",
      success: "Customer added successfully",
      error: (err) => err.message,
    });
  };
  console.log(errors);

  return (
    <>
      <H3>Add a new customer</H3>
      <p className="text-muted-foreground text-sm">
        Insert details of your customer
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-5 flex gap-8 flex-col lg:flex-row"
      >
        <div className="h-48 w-48 mt-2 border flex flex-col items-center justify-center text-muted-foreground text-center">
          <p>Add Image</p>
          <p className="text-xs">Recommended Size</p>
          <p className="text-xs">400x400</p>
          <Camera />
        </div>
        <div className="col-span-3 px-4 space-y-3 flex-1 max-w-lg">
          <div>
            <Label>Customer Name</Label>
            <FormInput
              placeholder="Enter customer name"
              register={register("name")}
              errors={errors.name}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Phone</Label>
              <FormInput
                placeholder="Enter customer phone"
                register={register("phone")}
                errors={errors.phone}
              />
            </div>
            <div>
              <Label>Email</Label>
              <FormInput
                placeholder="Enter Customer email"
                register={register("email")}
                errors={errors.email}
              />
            </div>
          </div>
          <div>
            <Label>Address</Label>
            <FormInput
              placeholder="Enter Customer email"
              register={register("address")}
              errors={errors.address}
            />
          </div>
          <div>
            <Label>
              Registration Number{" "}
              <span className="text-xs text-muted-foreground">
                ( if applicable )
              </span>{" "}
            </Label>
            <Input
              {...register("regNo")}
              type="number"
              placeholder="Enter registration number"
            />
          </div>
          <div>
            <Label>
              Enter Due Amount{" "}
              <span className="text-xs text-muted-foreground">
                ( if applicable )
              </span>{" "}
            </Label>
            <Input
              {...register("dueAmount")}
              type="number"
              placeholder="Enter Due Amount"
            />
          </div>
          <Button>Save Details</Button>
        </div>
      </form>
    </>
  );
}
