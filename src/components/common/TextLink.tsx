import { cn } from "@/lib/utils";

interface TextLinkProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

const TextLink = ({ name, onClick, className }: TextLinkProps) => {
  return (
    <div>
      <p
        className={cn(
          "cursor-pointer font-inter text-[12px] text-sub-heading",
          className
        )}
        onClick={onClick}
      >
        {name}
      </p>
    </div>
  );
};

export default TextLink;
