"use client";

import { useState, useCallback } from "react";
import FoodListHeader from "./food-list-header";
import FoodListContent from "./food-list-content";
import { FoodList as FoodListType } from "@/lib/types";

export default function FoodList({ foodList: initialFoodList }: { foodList: FoodListType }) {
  const [foodList, setFoodList] = useState(initialFoodList);

  const saveFoodList = useCallback(
    (updates: Partial<FoodListType>) => {
      // Update local state immediately (frontend-only for now)
      // Later, this can be extended to save to Supabase
      setFoodList((prevList) => {
        const updatedList = { ...prevList, ...updates };
        return updatedList;
      });
    },
    []
  );

  // For now, all food lists are view-only (no edit capability)
  // This can be extended later when Supabase integration is added
  const canEdit = false;

  return (
    <div className="h-full overflow-y-auto bg-background">
      <FoodListHeader foodList={foodList} saveFoodList={saveFoodList} canEdit={canEdit} />
      <FoodListContent foodList={foodList} saveFoodList={saveFoodList} canEdit={canEdit} />
    </div>
  );
}

