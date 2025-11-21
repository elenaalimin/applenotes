import { useState } from "react";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";
import { useMobileDetect } from "@/components/mobile-detector";
import { SwipeActions } from "./swipe-actions";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";
import { FoodList } from "@/lib/types";
import { getDisplayDateByCategory } from "@/lib/food-list-utils";
import { Dispatch, SetStateAction } from "react";

function previewContent(content: string): string {
  // Get only the first line (before first newline)
  const firstLine = content.split('\n')[0];
  
  return firstLine
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\s+/g, " ")
    .trim();
}

interface FoodListItemProps {
  item: FoodList;
  selectedFoodListSlug: string | null;
  onFoodListSelect: (foodList: FoodList) => void;
  handlePinToggle: (slug: string) => void;
  isPinned: boolean;
  isHighlighted: boolean;
  isSearching: boolean;
  openSwipeItemSlug: string | null;
  setOpenSwipeItemSlug: Dispatch<SetStateAction<string | null>>;
  showDivider?: boolean;
}

export function FoodListItem({
  item,
  selectedFoodListSlug,
  onFoodListSelect,
  handlePinToggle,
  isPinned,
  isHighlighted,
  isSearching,
  openSwipeItemSlug,
  setOpenSwipeItemSlug,
  showDivider = false,
}: FoodListItemProps) {
  const isMobile = useMobileDetect();
  const [isSwiping, setIsSwiping] = useState(false);
  const isSwipeOpen = openSwipeItemSlug === item.slug;

  const handlePinAction = () => {
    handlePinToggle(item.slug);
    setOpenSwipeItemSlug(null);
  };

  const handleSwipeAction = (action: () => void) => {
    if (isSwipeOpen) {
      action();
    }
  };

  const FoodListContent = (
    <li
      tabIndex={0}
      className={`h-[70px] w-full ${
        (!isMobile && isSearching && isHighlighted) ||
        (!isSearching && item.slug === selectedFoodListSlug)
          ? "bg-[#FFE390] dark:bg-[#9D7D28] dark:text-white rounded-md"
          : ""
      } ${
        !isMobile && showDivider &&
        (isSearching ? !isHighlighted : item.slug !== selectedFoodListSlug)
          ? 'after:content-[""] after:block after:mx-2 after:border-t after:border-muted-foreground/20'
          : ""
      }`}
    >
      <div 
        data-food-list-slug={item.slug}
        className={`h-full w-full px-4`}
      >
        <Link
          href={`/notes/${item.slug || ""}`}
          prefetch={true}
          tabIndex={-1}
          className="block py-2 h-full w-full flex flex-col justify-center"
        >
          <h2 className="text-sm font-bold px-2 break-words line-clamp-1">
            {item.emoji} {item.title}
          </h2>
        <p
          className={`text-xs pl-2 break-words line-clamp-1 ${
            (!isMobile && isSearching && isHighlighted) ||
            (!isSearching && item.slug === selectedFoodListSlug)
              ? "text-white/80"
              : "text-muted-foreground"
          }`}
        >
            <span className="text-black dark:text-white">
              {getDisplayDateByCategory(item.category, item.created_at).toLocaleDateString("en-US")}
            </span>{" "}
            {previewContent(item.content)}
          </p>
        </Link>
      </div>
    </li>
  );

  const handlers = useSwipeable({
    onSwipeStart: () => setIsSwiping(true),
    onSwiped: () => setIsSwiping(false),
    onSwipedLeft: () => {
      setOpenSwipeItemSlug(item.slug);
      setIsSwiping(false);
    },
    onSwipedRight: () => {
      setOpenSwipeItemSlug(null);
      setIsSwiping(false);
    },
    trackMouse: true,
  });

  if (isMobile) {
    return (
      <div {...handlers} className="relative overflow-hidden">
        <div
          data-food-list-slug={item.slug}
          className={`transition-transform duration-300 ease-out w-full ${
            isSwipeOpen ? "transform -translate-x-24" : ""
          } ${
            showDivider
              ? 'after:content-[""] after:block after:mx-6 after:border-t after:border-muted-foreground/20'
              : ""
          }`}
        >
          {FoodListContent}
        </div>
        <SwipeActions
          isOpen={isSwipeOpen}
          onPin={() => handleSwipeAction(handlePinAction)}
          onEdit={() => {}}
          onDelete={() => {}}
          isPinned={isPinned}
          canEditOrDelete={false}
        />
      </div>
    );
  } else {
    return (
      <ContextMenu>
        <ContextMenuTrigger>{FoodListContent}</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={handlePinAction} className="cursor-pointer">
            {isPinned ? "Unpin" : "Pin"}
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  }
}

