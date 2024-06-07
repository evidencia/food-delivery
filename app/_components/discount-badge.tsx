import { Product } from "@prisma/client";
import { ArrowDown } from "lucide-react";

interface DiscountBadgeProps {
  product: Pick<Product, "discountPercentage">;
}

const DiscountBadge = ({ product }: DiscountBadgeProps) => {
  return (
    <div className="flex items-center gap-1 rounded-full bg-primary px-2 py-[2px] text-white">
      <ArrowDown size={12} />
      <span className="text-xs font-semibold text-white">
        {product.discountPercentage}%
      </span>
    </div>
  );
};

export default DiscountBadge;
