"use client";

import Image from "next/image";
import { Restaurant } from "@prisma/client";

import { ChevronLeft, Heart } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { useRouter } from "next/navigation";

interface RestaurantImageProps {
  restaurant: Pick<Restaurant, "imageUrl" | "name">;
}

const RestaurantImage = ({ restaurant }: RestaurantImageProps) => {
  const router = useRouter();

  return (
    <div className="relative h-[250px] w-full">
      <Image
        src={restaurant.imageUrl}
        alt={restaurant.name}
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

      <Button
        size="icon"
        className="absolute right-4 top-4  rounded-full bg-gray-700"
      >
        <Heart size={20} className="fill-white text-white" />
      </Button>
    </div>
  );
};

export default RestaurantImage;
