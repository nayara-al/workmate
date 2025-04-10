type CommentProps = {
    text: string;
    author: string;
  };
  
  export default function Comment({ text, author }: CommentProps) {
    return (
      <p className="text-sm text-gray-800">
        <span className="mr-1">💬</span>
        “{text}” — <span className="font-medium">{author}</span>
      </p>
    );
  }
  