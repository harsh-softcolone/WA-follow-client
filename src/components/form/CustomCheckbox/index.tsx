import React from "react";

type CustomCheckboxProps = {
  id: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  checked = false,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2" id={id}>
      <div
        className={`relative h-[12px] w-[12px] cursor-pointer rounded-[2px] border-none ${
          checked ? "bg-[#319795]" : "bg-[#319795]"
        }`}
        onClick={() => onChange(!checked)}
      >
        {checked && (
          <svg
            className="absolute left-0 top-0 h-full w-full text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414-1.414l-7 7-3-3a1 1 0 00-1.414 1.414l3.707 3.707a1 1 0 001.414 0l7.707-7.707z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default CustomCheckbox;
