"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { Pin } from "lucide-react";
import { Nav } from "./nav";
import { useTheme } from "next-themes";
import { ScrollArea } from "./ui/scroll-area";
import { FoodList } from "@/lib/types";
import { groupFoodListsByCategory, sortGroupedFoodLists } from "@/lib/food-list-utils";
import { FoodListSearchBar } from "./food-list-search";
import { FoodListSidebarContent } from "./food-list-sidebar-content";
import { toast } from "./ui/use-toast";

const labels = {
  pinned: (
    <>
      <Pin className="inline-block w-4 h-4 mr-1" /> Pinned
    </>
  ),
  today: "Today",
  yesterday: "Yesterday",
  older: "Older",
};

const categoryOrder = ["pinned", "today", "yesterday", "older"];

export default function FoodListSidebar({
  foodLists: allFoodLists,
  onFoodListSelect,
  isMobile,
}: {
  foodLists: FoodList[];
  onFoodListSelect: (foodList: FoodList) => void;
  isMobile: boolean;
}) {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedFoodListSlug, setSelectedFoodListSlug] = useState<string | null>(null);
  const [pinnedFoodLists, setPinnedFoodLists] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [localSearchResults, setLocalSearchResults] = useState<FoodList[] | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [groupedFoodLists, setGroupedFoodLists] = useState<Record<string, FoodList[]>>({});
  const [selectedFoodList, setSelectedFoodList] = useState<FoodList | null>(null);
  const [openSwipeItemSlug, setOpenSwipeItemSlug] = useState<string | null>(null);
  const [highlightedFoodList, setHighlightedFoodList] = useState<FoodList | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const scrollViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedFoodListSlug && scrollViewportRef.current) {
      const selectedElement = scrollViewportRef.current.querySelector(`[data-food-list-slug="${selectedFoodListSlug}"]`);
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }
  }, [selectedFoodListSlug]);

  useEffect(() => {
    if (pathname) {
      const slug = pathname.split("/").pop();
      setSelectedFoodListSlug(slug || null);
    }
  }, [pathname]);

  useEffect(() => {
    if (selectedFoodListSlug) {
      const foodList = allFoodLists.find((list) => list.slug === selectedFoodListSlug);
      setSelectedFoodList(foodList || null);
    } else {
      setSelectedFoodList(null);
    }
  }, [selectedFoodListSlug, allFoodLists]);

  useEffect(() => {
    const storedPinnedFoodLists = localStorage.getItem("pinnedFoodLists");
    if (storedPinnedFoodLists) {
      setPinnedFoodLists(new Set(JSON.parse(storedPinnedFoodLists)));
    } else {
      // Initialize with pinned category food lists
      const initialPinnedFoodLists = new Set(
        allFoodLists
          .filter((list) => list.category === "pinned")
          .map((list) => list.slug)
      );
      setPinnedFoodLists(initialPinnedFoodLists);
      localStorage.setItem(
        "pinnedFoodLists",
        JSON.stringify(Array.from(initialPinnedFoodLists))
      );
    }
  }, [allFoodLists]);

  useEffect(() => {
    const grouped = groupFoodListsByCategory(allFoodLists, pinnedFoodLists);
    sortGroupedFoodLists(grouped);
    setGroupedFoodLists(grouped);
  }, [allFoodLists, pinnedFoodLists]);

  useEffect(() => {
    if (localSearchResults && localSearchResults.length > 0) {
      setHighlightedFoodList(localSearchResults[highlightedIndex]);
    } else {
      setHighlightedFoodList(selectedFoodList);
    }
  }, [localSearchResults, highlightedIndex, selectedFoodList]);

  const clearSearch = useCallback(() => {
    setLocalSearchResults(null);
    setSearchQuery("");
    setHighlightedIndex(0);
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  }, []);

  const flattenedFoodLists = useCallback(() => {
    return categoryOrder.flatMap((category) =>
      groupedFoodLists[category] ? groupedFoodLists[category] : []
    );
  }, [groupedFoodLists]);

  const navigateFoodLists = useCallback(
    (direction: "up" | "down") => {
      if (!localSearchResults) {
        const flattened = flattenedFoodLists();
        const currentIndex = flattened.findIndex(
          (list) => list.slug === selectedFoodListSlug
        );
        
        let nextIndex;
        if (direction === "up") {
          nextIndex =
            currentIndex > 0 ? currentIndex - 1 : flattened.length - 1;
        } else {
          nextIndex =
            currentIndex < flattened.length - 1 ? currentIndex + 1 : 0;
        }

        const nextFoodList = flattened[nextIndex];
        
        if (nextFoodList) {
          router.push(`/notes/${nextFoodList.slug}`);
          setTimeout(() => {
            const selectedElement = document.querySelector(`[data-food-list-slug="${nextFoodList.slug}"]`);
            if (selectedElement) {
              selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }, 100);
        }
      }
    },
    [flattenedFoodLists, selectedFoodListSlug, router, localSearchResults]
  );

  const handlePinToggle = useCallback(
    (slug: string) => {
      let isPinning = false;
      setPinnedFoodLists((prev) => {
        const newPinned = new Set(prev);
        isPinning = !newPinned.has(slug);
        if (isPinning) {
          newPinned.add(slug);
        } else {
          newPinned.delete(slug);
        }
        localStorage.setItem(
          "pinnedFoodLists",
          JSON.stringify(Array.from(newPinned))
        );
        return newPinned;
      });

      clearSearch();

      if (!isMobile) {
        router.push(`/notes/${slug}`);
      }

      toast({
        description: isPinning ? "Food list pinned" : "Food list unpinned",
      });
    },
    [router, isMobile, clearSearch]
  );

  const goToHighlightedFoodList = useCallback(() => {
    if (localSearchResults && localSearchResults[highlightedIndex]) {
      const selectedFoodList = localSearchResults[highlightedIndex];
      router.push(`/notes/${selectedFoodList.slug}`);
      setTimeout(() => {
        const selectedElement = document.querySelector(`[data-food-list-slug="${selectedFoodList.slug}"]`);
        selectedElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 0);
      clearSearch();
    }
  }, [localSearchResults, highlightedIndex, router, clearSearch]);

  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const shortcuts = {
      j: () => navigateFoodLists("down"),
      ArrowDown: () => navigateFoodLists("down"),
      k: () => navigateFoodLists("up"),
      ArrowUp: () => navigateFoodLists("up"),
      p: () => highlightedFoodList && handlePinToggle(highlightedFoodList.slug),
      "/": () => searchInputRef.current?.focus(),
      Escape: () => (document.activeElement as HTMLElement)?.blur(),
      t: () => setTheme(theme === "dark" ? "light" : "dark"),
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isTyping =
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) ||
        target.isContentEditable;

      if (isTyping) {
        if (event.key === "Escape") {
          shortcuts["Escape"]();
        } else if (
          event.key === "Enter" &&
          localSearchResults &&
          localSearchResults.length > 0
        ) {
          event.preventDefault();
          goToHighlightedFoodList();
        }
        return;
      }

      const key = event.key as keyof typeof shortcuts;
      if (shortcuts[key] && !(event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        (document.activeElement as HTMLElement)?.blur();

        if (
          localSearchResults &&
          ["j", "ArrowDown", "k", "ArrowUp"].includes(key)
        ) {
          const direction = ["j", "ArrowDown"].includes(key) ? 1 : -1;
          setHighlightedIndex(
            (prevIndex) =>
              (prevIndex + direction + localSearchResults.length) %
              localSearchResults.length
          );
        } else {
          shortcuts[key]();
        }
      } else if (
        event.key === "Enter" &&
        localSearchResults &&
        localSearchResults.length > 0
      ) {
        event.preventDefault();
        goToHighlightedFoodList();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    navigateFoodLists,
    highlightedFoodList,
    handlePinToggle,
    localSearchResults,
    setHighlightedIndex,
    goToHighlightedFoodList,
    setTheme,
    theme,
  ]);

  const handleFoodListSelect = useCallback(
    (foodList: FoodList) => {
      onFoodListSelect(foodList);
      if (!isMobile) {
        router.push(`/notes/${foodList.slug}`);
      }
      clearSearch();
    },
    [clearSearch, onFoodListSelect, isMobile, router]
  );

  return (
    <div
      className={`${
        isMobile
          ? "w-full max-w-full"
          : "w-[320px] border-r border-muted-foreground/20"
      } h-dvh flex flex-col dark:bg-muted`}
    >
      <div className={`${isMobile ? "w-full" : "w-[320px]"}`}>
        <Nav
          addNewPinnedNote={handlePinToggle}
          clearSearch={clearSearch}
          setSelectedNoteSlug={setSelectedFoodListSlug}
          isMobile={isMobile}
          isScrolled={isScrolled}
        />
      </div>
      <ScrollArea 
        className="flex-1" 
        onScrollCapture={(e: React.UIEvent<HTMLDivElement>) => {
          const viewport = e.currentTarget.querySelector(
            '[data-radix-scroll-area-viewport]'
          );
          if (viewport) {
            const scrolled = viewport.scrollTop > 0;
            setIsScrolled(scrolled);
          }
        }}
        isMobile={isMobile}
      >
        <div ref={scrollViewportRef} className="flex flex-col w-full">
          <div className={`${isMobile ? "w-full" : "w-[320px]"} px-2`}>
            <FoodListSearchBar
              foodLists={allFoodLists}
              onSearchResults={setLocalSearchResults}
              inputRef={searchInputRef}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setHighlightedIndex={setHighlightedIndex}
              clearSearch={clearSearch}
            />
            <FoodListSidebarContent
              groupedFoodLists={groupedFoodLists}
              selectedFoodListSlug={selectedFoodListSlug}
              onFoodListSelect={handleFoodListSelect}
              handlePinToggle={handlePinToggle}
              pinnedFoodLists={pinnedFoodLists}
              localSearchResults={localSearchResults}
              highlightedIndex={highlightedIndex}
              categoryOrder={categoryOrder}
              labels={labels}
              openSwipeItemSlug={openSwipeItemSlug}
              setOpenSwipeItemSlug={setOpenSwipeItemSlug}
              clearSearch={clearSearch}
              setSelectedFoodListSlug={setSelectedFoodListSlug}
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

