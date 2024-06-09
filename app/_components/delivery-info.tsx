import { Bike, Timer } from "lucide-react";
import { formatCurrency } from "../_healper/price";
import { Restaurant } from "@prisma/client";
import { Card } from "./ui/card";

interface DeliveryInfoProps {
  restaurant: Pick<Restaurant, "deliveryFee" | "deliveryTimeMinutes">;
}

const DeliveryInfo = ({ restaurant }: DeliveryInfoProps) => {
  return (
    <div>
      <Card className="mt-6 flex justify-around py-3">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Entrega</span>
            <Bike size={14} />
          </div>

          {Number(restaurant.deliveryFee) > 0 ? (
            <p>{formatCurrency(Number(restaurant.deliveryFee))}</p>
          ) : (
            <p className="text-xs">Grátis</p>
          )}
        </div>

        <div className="flex flex-col items-center ">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Tempo</span>
            <Timer size={14} />
          </div>

          <p className="text-xs">{restaurant.deliveryTimeMinutes} min</p>
        </div>
      </Card>
    </div>
  );
};

export default DeliveryInfo;
