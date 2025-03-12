import { IconType } from "react-icons";

interface LabelDetailProps {
  icon: IconType;
  label: string;
}

interface LabeledIconProps {
  labelDetail: LabelDetailProps;
}

const LabeledIcon = ({ labelDetail }: LabeledIconProps) => {
  const Icon = labelDetail.icon;

  return (
    <div className="flex items-center justify-center gap-[6px]">
      <Icon className="h-4 w-4 text-sub-heading" />
      <p className="font-inter text-[12px] font-[400] leading-normal text-sub-heading">
        {labelDetail.label}
      </p>
    </div>
  );
};

export default LabeledIcon;
