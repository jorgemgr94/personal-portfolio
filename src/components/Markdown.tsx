import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
  /**
   * Optional: Overwrite standard styles for specific tags
   * Example: { strong: ({node, ...props}) => <strong className="text-primary" {...props} /> }
   */
  components?: Components;
}

/**
 * Shared Markdown Renderer
 * Standardizes how we handle text formatting across the portfolio and resume.
 */
export function Markdown({ content, components }: MarkdownProps) {

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Default styling for markdown elements
        p: ({ children }) => <span className="inline">{children}</span>,
        strong: ({ children }) => (
          <strong className="font-bold text-foreground">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-1 ml-4">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-1 ml-4">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-foreground leading-relaxed">
            {children}
          </li>
        ),
        ...components
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
