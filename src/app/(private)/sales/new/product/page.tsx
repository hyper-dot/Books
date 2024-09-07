"use client";
import { Label } from "@/components/ui/label";
import { H3 } from "@/components/ui/typography";
import { Camera } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/form/FormInput";
import { TProductSchema, productSchema } from "@/schema/product.schema";
import { useAddProductMutation } from "@/hooks/mutations/product.mutation";
import toast from "react-hot-toast";
import { ImageDropzone } from "@/components/common/ImageDropzone";

export default function Page() {
  const [productImageUrl, setProductImageUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProductSchema>({
    resolver: zodResolver(productSchema),
  });

  const { mutateAsync } = useAddProductMutation();

  const onSubmit = (data: TProductSchema) => {
    const productData = {
      ...data,
      image_url: productImageUrl,
    };
    toast.promise(mutateAsync(productData), {
      loading: "Adding product...",
      success: "Product added successfully",
      error: (err) => err.message,
    });
  };

  const handleImageUpload = (url: string | null) => {
    setProductImageUrl(url);
  };

  return (
    <>
      <H3>Add a new Product</H3>
      <p className="text-muted-foreground text-sm">
        Insert details of your product
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-5 grid gap-y-8 lg:grid-cols-4"
      >
        <div className="h-48 bg-secondary cursor-pointer mx-4 w-48 mt-2 border flex flex-col items-center justify-center text-muted-foreground text-center">
          <ImageDropzone onImageUpload={handleImageUpload}>
            <div className="flex flex-col items-center">
              <p>Add Image</p>
              <p className="text-xs">Recommended Size</p>
              <p className="text-xs">400x400</p>
              <Camera className="mt-2" />
            </div>
          </ImageDropzone>
        </div>
        <div className="max-w-4xl col-span-2 px-4 space-y-3">
          <div>
            <Label required>Product name</Label>
            <FormInput
              placeholder="Enter product name"
              register={register("name")}
              errors={errors.name}
            />
          </div>

          <div>
            <Label>Stock In Hand</Label>
            <FormInput
              type="number"
              placeholder="Enter current stock"
              register={register("stock")}
              errors={errors.stock}
            />
          </div>
          <div>
            <Label>Reorder Level</Label>
            <FormInput
              type="number"
              placeholder="Enter reorder level"
              register={register("reorder_level")}
              errors={errors.reorder_level}
            />
          </div>

          <div>
            <Label>Sales Price</Label>
            <FormInput
              type="number"
              placeholder="Enter sales price per unit"
              register={register("sales_price")}
              errors={errors.sales_price}
            />
          </div>
          <div>
            <Label>Cost Price</Label>
            <FormInput
              type="number"
              placeholder="Enter cost price per unit"
              register={register("cost_price")}
              errors={errors.cost_price}
            />
          </div>
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </>
  );
}
