export default function AuthLink({ text, href }: { text: string; href: string }) {
    return <a href={href} className="text-secondary hover:underline">{text}</a>;
  }