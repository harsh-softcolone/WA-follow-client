import { LucideIcon } from "lucide-react";

interface MetricCardsProps {
  svgName: LucideIcon;
  title: string;
  value: string;
}

export function MetricCards({ svgName: Icon, title, value }: MetricCardsProps) {
  return (
    <div className="flex h-[132px] w-[132px] flex-col items-center justify-center gap-[10px] rounded-[10px] border-[1px] border-solid border-border bg-input p-[20px] font-inter">
      <Icon size={24} className="text-icon" />
      <div className="flex flex-col items-center justify-center gap-[6px]">
        <p className="text-[14px] font-normal leading-normal text-heading">
          {title}
        </p>
        <h4 className="text-center text-[20px] font-bold leading-normal text-heading">
          {value}
        </h4>
      </div>
    </div>
  );
}
