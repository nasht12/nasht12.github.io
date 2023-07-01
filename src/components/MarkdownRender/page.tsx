import ReactMarkdown from 'react-markdown';

interface MarkdownRenderProps {
  content: string;
}

export default function MarkdownRender({ content }: MarkdownRenderProps) {
  return (
    <div className="content">
      <ReactMarkdown >{content}</ReactMarkdown>
    </div>
  );
}
