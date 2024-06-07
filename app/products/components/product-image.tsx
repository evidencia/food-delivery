"use client";

import Image from "next/image";
import { Product } from "@prisma/client";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";

interface ProductImageProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const router = useRouter();

  return (
    <div className="relative h-[360px] w-full">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />

      <Button
        size="icon"
        className="absolute left-4 top-4 rounded-full bg-white text-foreground hover:text-white"
        onClick={() => router.back()}
      >
        <ChevronLeft />
      </Button>
    </div>
  );
};

export default ProductImage;
