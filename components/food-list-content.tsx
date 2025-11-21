"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FoodList } from "@/lib/types";
import { useMobileDetect } from "./mobile-detector";
import { useMemo } from "react";

const renderMarkdown = (text: string) => {
  return text.split('\n').map((line, i) => {
    // Handle bold headers (e.g., **Must-eats:**)
    if (line.startsWith('**') && line.endsWith('**')) {
      return <h3 key={i} className="font-semibold text-base mt-4 mb-2">{line.slice(2, -2)}</h3>;
    }
    
    // Handle bullet points with checkmark circles
    if (line.trim().startsWith('*') && !line.startsWith('**')) {
      const content = line.trim().slice(1).trim();
      
      // Parse markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts: (string | JSX.Element)[] = [];
      let lastIndex = 0;
      let match;
      
      while ((match = linkRegex.exec(content)) !== null) {
        // Add text before link
        if (match.index > lastIndex) {
          parts.push(content.substring(lastIndex, match.index));
        }
        // Add link
        parts.push(
          <a 
            key={match.index}
            href={match[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#e2a727] underline hover:text-[#e2a727]/80"
          >
            {match[1]}
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      
      // Add remaining text
      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }
      
      // If no links found, just use plain text
      const displayContent = parts.length > 0 ? parts : content;
      
      return (
        <li key={i} className="flex items-start mb-2 ml-2">
          {/* Checkmark circle */}
          <span className="flex-shrink-0 mr-2 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#e2a727]">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M5 8.5L7 10.5L11 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="flex-1">{displayContent}</span>
        </li>
      );
    }
    
    // Handle task lists (checkboxes) - [x] or [ ]
    if (line.trim().match(/^-\s+\[[ x]\]/)) {
      const isChecked = line.trim().startsWith('- [x]');
      const content = line.trim().replace(/^-\s+\[[ x]\]\s*/, '');
      
      // Parse markdown links [text](url)
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts: (string | JSX.Element)[] = [];
      let lastIndex = 0;
      let match;
      
      while ((match = linkRegex.exec(content)) !== null) {
        if (match.index > lastIndex) {
          parts.push(content.substring(lastIndex, match.index));
        }
        parts.push(
          <a 
            key={match.index}
            href={match[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#e2a727] underline hover:text-[#e2a727]/80 whitespace-nowrap"
          >
            {match[1]}
          </a>
        );
        lastIndex = match.index + match[0].length;
      }
      
      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }
      
      const displayContent = parts.length > 0 ? parts : content;
      
      return (
        <div key={i} className="flex items-start mb-2">
          <div className="relative mt-0.5 mr-2 flex-shrink-0">
            <input
              type="checkbox"
              checked={isChecked}
              readOnly
              className="w-[1.125rem] h-[1.125rem] rounded-full border border-[#6a737d] bg-transparent checked:bg-[#e2a727] checked:border-[#e2a727]"
              style={{ 
                appearance: 'none',
                cursor: 'default',
              }}
            />
            {isChecked && (
              <span 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#1c1c1c] text-xs font-bold leading-none"
                style={{ fontSize: '0.875rem' }}
              >
                ✓
              </span>
            )}
          </div>
          <span className="flex-1 leading-normal">{displayContent}</span>
        </div>
      );
    }
    
    // Handle italic text
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      return <p key={i} className="text-gray-500 dark:text-gray-400 italic mb-2">{line.slice(1, -1)}</p>;
    }
    
    // Regular text
    if (line.trim()) {
      return <p key={i} className="mb-2">{line}</p>;
    }
    
    return <br key={i} />;
  });
};

export default function FoodListContent({
  foodList,
  saveFoodList,
  canEdit,
}: {
  foodList: FoodList;
  saveFoodList: (updates: Partial<FoodList>) => void;
  canEdit: boolean;
}) {
  const isMobile = useMobileDetect();
  const content = foodList.content || "";
  
  const renderedContent = useMemo(() => {
    if (isMobile) {
      return <div className="markdown-body min-h-dvh break-words">{renderMarkdown(content)}</div>;
    }
    return null;
  }, [isMobile, content]);

  return (
    <div className="px-2 sm:px-4 md:px-2">
      <div className="h-full text-base md:text-sm max-w-full overflow-x-hidden">
        {isMobile ? (
          renderedContent
        ) : (
          <ReactMarkdown
            className="markdown-body min-h-dvh break-words"
            remarkPlugins={[remarkGfm]}
            components={{
              a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e2a727] underline underline-offset-2 break-words"
                >
                  {props.children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

