"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useMobileDetect } from "./mobile-detector";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDisplayDateByCategory } from "@/lib/food-list-utils";
import { FoodList } from "@/lib/types";
import { Icons } from "./icons";

export default function FoodListHeader({
  foodList,
  saveFoodList,
  canEdit,
}: {
  foodList: FoodList;
  saveFoodList: (updates: Partial<FoodList>) => void;
  canEdit: boolean;
}) {
  const isMobile = useMobileDetect();
  const pathname = usePathname();
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const displayDate = getDisplayDateByCategory(foodList.category, foodList.created_at);
    setFormattedDate(
      format(displayDate, "MMMM d, yyyy")
    );
  }, [foodList.category, foodList.created_at]);

  return (
    <>
      {isMobile && pathname !== "/notes" && (
        <Link href="/notes">
          <button className="pt-2 flex items-center">
            <Icons.back />
            <span className="text-[#e2a727] text-base ml-1">Lists</span>
          </button>
        </Link>
      )}
      <div className="px-2 mb-4 relative">
        <div className="flex justify-center items-center">
          <p className="text-muted-foreground text-xs">{formattedDate}</p>
        </div>
        <div className="flex items-center relative">
          <span className="mr-2">{foodList.emoji}</span>
          <span className="text-2xl font-bold flex-grow py-2 leading-normal min-h-[50px]">
            {foodList.title}
          </span>
        </div>
      </div>
    </>
  );
}

