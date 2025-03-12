import { cn } from "@/lib/utils";

interface ButtonProps {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  variant?: "contained" | "outlined";
  onClick?: () => void;
  isLoading?: boolean;
}

const ActionButton = ({
  type = "button",
  variant = "contained",
  name,
  className,
  onClick,
  isLoading,
}: ButtonProps) => {
  const baseStyles = `w-full rounded-[5px] text-[14px] leading-normal outline-none font-inter transition-all duration-200 ease-in-out`;
  const variantStyles =
    variant === "contained"
      ? "bg-button text-[#111B21] border-none hover:bg-[#45a06d] active:transform active:scale-[0.98]"
      : "bg-transparent border-2 border-solid border-input-border text-sub-heading hover:border-button hover:border-opacity-100 active:transform active:scale-[0.98]";

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variantStyles, className)}
      disabled={isLoading}
      style={{
        padding: "10px",
      }}
    >
      {isLoading ? "...loading" : name}
    </button>
  );
};

export default ActionButton;
