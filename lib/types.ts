export interface FoodList {
    id: string;
    slug: string;
    title: string;
    content: string;
    created_at: Date | string;
    emoji: string;
    category: 'pinned' | 'today' | 'yesterday' | 'older';
  }
  
  // Keep Note for backward compatibility during transition
  export interface Note {
    id: string;
    slug: string;
    title: string;
    content: string;
    created_at: string;
    session_id: string;
    emoji?: string;
    public: boolean;
    category?: string;
  }