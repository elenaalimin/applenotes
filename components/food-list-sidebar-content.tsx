import { useCallback } from "react";
import { FoodListItem } from "./food-list-item";
import { FoodList } from "@/lib/types";

interface FoodListSidebarContentProps {
  groupedFoodLists: Record<string, FoodList[]>;
  selectedFoodListSlug: string | null;
  onFoodListSelect: (foodList: FoodList) => void;
  handlePinToggle: (slug: string) => void;
  pinnedFoodLists: Set<string>;
  localSearchResults: FoodList[] | null;
  highlightedIndex: number;
  categoryOrder: string[];
  labels: Record<string, React.ReactNode>;
  openSwipeItemSlug: string | null;
  setOpenSwipeItemSlug: React.Dispatch<React.SetStateAction<string | null>>;
  clearSearch: () => void;
  setSelectedFoodListSlug: (slug: string | null) => void;
}

export function FoodListSidebarContent({
  groupedFoodLists,
  selectedFoodListSlug,
  onFoodListSelect,
  handlePinToggle,
  pinnedFoodLists,
  localSearchResults,
  highlightedIndex,
  categoryOrder,
  labels,
  openSwipeItemSlug,
  setOpenSwipeItemSlug,
  clearSearch,
  setSelectedFoodListSlug,
}: FoodListSidebarContentProps) {
  const handlePinToggleWithClear = useCallback(
    (slug: string) => {
      clearSearch();
      handlePinToggle(slug);
    },
    [clearSearch, handlePinToggle]
  );

  const handlePinnedSelect = useCallback(
    (foodList: FoodList) => {
      clearSearch();
      setSelectedFoodListSlug(foodList.slug);
      onFoodListSelect(foodList);
    },
    [clearSearch, onFoodListSelect, setSelectedFoodListSlug]
  );

  const renderPinnedBar = () => {
    const pinnedLists = groupedFoodLists.pinned;
    if (!pinnedLists || pinnedLists.length === 0) return null;

    return (
      <section key="pinned" className="mb-4">
        <h3 className="py-1 text-xs font-bold text-muted-foreground ml-2">
          {labels.pinned}
        </h3>
        <div className="px-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {pinnedLists.map((item) => {
            const isSelected = selectedFoodListSlug === item.slug;
            return (
              <button
                key={item.id}
                onClick={() => handlePinnedSelect(item)}
                className={`text-left rounded-2xl border border-transparent bg-[#F6F2E8] dark:bg-[#2F2B22] px-3 py-3 transition-colors hover:border-[#e2a727]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e2a727] ${
                  isSelected ? "ring-2 ring-[#e2a727]" : ""
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1">
                  {item.emoji} {item.title}
                </span>
                <span className="text-sm text-foreground/80 dark:text-white/80 line-clamp-2">
                  {item.content}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="py-2">
      {localSearchResults === null ? (
        <nav>
          {renderPinnedBar()}
          {categoryOrder.map((categoryKey) =>
            categoryKey === "pinned" ? null :
            groupedFoodLists[categoryKey] &&
            groupedFoodLists[categoryKey].length > 0 ? (
              <section key={categoryKey}>
                <h3 className="py-1 text-xs font-bold text-muted-foreground ml-2">
                  {labels[categoryKey as keyof typeof labels]}
                </h3>
                <ul>
                  {groupedFoodLists[categoryKey].map(
                    (item: FoodList, index: number) => (
                      <FoodListItem
                        key={index}
                        item={item}
                        selectedFoodListSlug={selectedFoodListSlug}
                        onFoodListSelect={onFoodListSelect}
                        handlePinToggle={handlePinToggle}
                        isPinned={pinnedFoodLists.has(item.slug)}
                        isHighlighted={false}
                        isSearching={false}
                        openSwipeItemSlug={openSwipeItemSlug}
                        setOpenSwipeItemSlug={setOpenSwipeItemSlug}
                        showDivider={index < groupedFoodLists[categoryKey].length - 1}
                      />
                    )
                  )}
                </ul>
              </section>
            ) : null
          )}
        </nav>
      ) : localSearchResults.length > 0 ? (
        <ul>
          {localSearchResults.map((item: FoodList, index: number) => (
            <FoodListItem
              key={item.id}
              item={item}
              selectedFoodListSlug={selectedFoodListSlug}
              onFoodListSelect={onFoodListSelect}
              handlePinToggle={handlePinToggleWithClear}
              isPinned={pinnedFoodLists.has(item.slug)}
              isHighlighted={index === highlightedIndex}
              isSearching={true}
              openSwipeItemSlug={openSwipeItemSlug}
              setOpenSwipeItemSlug={setOpenSwipeItemSlug}
              showDivider={index < localSearchResults.length - 1}
            />
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground px-2 mt-4">No results found</p>
      )}
    </div>
  );
}

