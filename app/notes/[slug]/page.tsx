import FoodList from "@/components/food-list";
import { foodLists } from "@/lib/food-lists-data";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { FoodList as FoodListType } from "@/lib/types";

// Generate static params for all food lists
export async function generateStaticParams() {
  return foodLists.map((list) => ({
    slug: list.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const foodList = foodLists.find((list) => list.slug === slug);

  if (!foodList) {
    return { title: "Food List not found" };
  }

  const title = foodList.title || "Food List";
  const emoji = foodList.emoji || "🍽️";

  return {
    title: `Food Lists | ${title}`,
    openGraph: {
      images: [
        `/notes/api/og/?title=${encodeURIComponent(title)}&emoji=${encodeURIComponent(
          emoji
        )}`,
      ],
    },
  };
}

export default function FoodListPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const foodList = foodLists.find((list) => list.slug === slug);

  if (!foodList) {
    return redirect("/notes/michelin");
  }

  return (
    <div className="w-full min-h-dvh p-3 sm:p-4 md:p-3 max-w-full overflow-x-hidden">
      <FoodList foodList={foodList} />
    </div>
  );
}