"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FoodList } from "@/lib/types";

export default function FoodListContent({
  foodList,
  saveFoodList,
  canEdit,
}: {
  foodList: FoodList;
  saveFoodList: (updates: Partial<FoodList>) => void;
  canEdit: boolean;
}) {
  return (
    <div className="px-2">
      <div className="h-full text-base md:text-sm">
        <ReactMarkdown
          className="markdown-body min-h-dvh"
          remarkPlugins={[remarkGfm]}
          components={{
            a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
              <a
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e2a727] underline underline-offset-2"
              >
                {props.children}
              </a>
            ),
          }}
        >
          {foodList.content || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}

