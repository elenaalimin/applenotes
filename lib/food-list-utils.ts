import { FoodList } from './types';

export function groupFoodListsByCategory(foodLists: FoodList[], pinnedLists: Set<string>) {
  const groupedLists: Record<string, FoodList[]> = {
    pinned: [],
    today: [],
    yesterday: [],
    older: []
  };

  foodLists.forEach((list) => {
    if (pinnedLists.has(list.slug)) {
      groupedLists.pinned.push(list);
      return;
    }

    let category = list.category;
    const createdDate = new Date(list.created_at);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (createdDate.toDateString() === today.toDateString()) {
      category = 'today';
    } else if (createdDate.toDateString() === yesterday.toDateString()) {
      category = 'yesterday';
    } else {
      category = 'older';
    }

    if (!groupedLists[category]) {
      groupedLists[category] = [];
    }
    groupedLists[category].push(list);
  });

  return groupedLists;
}

export function sortGroupedFoodLists(groupedLists: Record<string, FoodList[]>) {
  Object.keys(groupedLists).forEach((category) => {
    groupedLists[category].sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA;
    });
  });
}

export function getDisplayDateByCategory(category: string | undefined, created_at: Date | string): Date {
  const createdDate = new Date(created_at);
  return createdDate;
}

