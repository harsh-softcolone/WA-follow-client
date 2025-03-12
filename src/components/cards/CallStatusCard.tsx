import { LucideIcon } from "lucide-react";

interface CallStatusCardProps {
  svgName: LucideIcon;
  title: string;
  value: string;
}

const CallStatusCard = ({
  svgName: Icon,
  title,
  value,
}: CallStatusCardProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-[10px] border-[1px] border-solid border-border bg-input px-[20px] py-[16px]">
      <div className="flex items-center gap-[12px]">
        <Icon size={24} className="text-icon" />
        <p className="text-[14px] font-normal leading-normal text-heading">
          {title}
        </p>
      </div>
      <h4 className="text-center text-[20px] font-bold leading-normal text-heading">
        {value}
      </h4>
    </div>
  );
};

export default CallStatusCard;
