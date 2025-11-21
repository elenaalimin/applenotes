"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FoodList } from "@/lib/types";
import { useMobileDetect } from "./mobile-detector";
import { useMemo } from "react";

// Helper function to parse markdown links and convert them to JSX
const parseLinks = (content: string): (string | JSX.Element)[] => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;
  let linkIndex = 0;
  
  while ((match = linkRegex.exec(content)) !== null) {
    // Add text before link
    if (match.index > lastIndex) {
      parts.push(content.substring(lastIndex, match.index));
    }
    // Add link
    parts.push(
      <a 
        key={`link-${linkIndex++}`}
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
  
  // Add remaining text
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : [content];
};

const renderMarkdown = (text: string) => {
  return text.split('\n').map((line, i) => {
    // Handle bold headers (e.g., **Must-eats:**)
    if (line.startsWith('**') && line.endsWith('**')) {
      const headerText = line.slice(2, -2);
      const parts = parseLinks(headerText);
      return <h3 key={i} className="font-semibold text-base mt-4 mb-2">{parts}</h3>;
    }
    
    // Handle task lists (checkboxes) - [x] or [ ] - with checkmark circles
    if (line.trim().match(/^-\s+\[[ x]\]/)) {
      const isChecked = line.trim().startsWith('- [x]');
      const content = line.trim().replace(/^-\s+\[[ x]\]\s*/, '');
      const displayContent = parseLinks(content);
      
      return (
        <div key={i} className="flex items-start mb-2">
          {/* Checkmark circle */}
          <span className="flex-shrink-0 mr-2 mt-0.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={isChecked ? "text-[#e2a727]" : "text-gray-400"}>
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill={isChecked ? "currentColor" : "none"}/>
              {isChecked && (
                <path d="M5 8.5L7 10.5L11 5.5" stroke="#1c1c1c" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </span>
          <span className="flex-1 leading-normal">{displayContent}</span>
        </div>
      );
    }
    
    // Handle bullet points - regular bullet style
    if (line.trim().startsWith('*') && !line.startsWith('**')) {
      const content = line.trim().slice(1).trim();
      const displayContent = parseLinks(content);
      
      return (
        <li key={i} className="mb-2 ml-6 list-disc">
          <span>{displayContent}</span>
        </li>
      );
    }
    
    // Handle italic text
    if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      const italicText = line.slice(1, -1);
      const parts = parseLinks(italicText);
      return <p key={i} className="text-gray-500 dark:text-gray-400 italic mb-2">{parts}</p>;
    }
    
    // Regular text - parse links here too
    if (line.trim()) {
      const parts = parseLinks(line);
      return <p key={i} className="mb-2">{parts}</p>;
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
                  href={props.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e2a727] underline underline-offset-2 whitespace-nowrap"
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

