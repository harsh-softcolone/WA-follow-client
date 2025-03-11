import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
  name: string;
  label?: string;
  helperText?: string;
  containerClassName?: string;
  showPasswordToggle?: boolean;
  isDisabled?: boolean;
  placeHolder?: string;
}

const CustomFormInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      helperText,
      type = "text",
      containerClassName,
      showPasswordToggle = false,
      isDisabled = false,
      className,
      placeHolder,
      ...props
    },
    ref
  ) => {
    const { control } = useFormContext();
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";

    const inputType =
      isPassword && showPasswordToggle
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div
            className={cn("flex w-full flex-col space-y-2", containerClassName)}
          >
            {label && (
              <label
                htmlFor={name}
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                {label}
              </label>
            )}

            <div className="relative">
              <input
                {...field}
                {...props}
                ref={ref}
                type={inputType}
                disabled={isDisabled}
                placeholder={placeHolder}
                id={name}
                style={{
                  padding: "10px",
                }}
                className={cn(
                  "w-full rounded-[5px] bg-input font-inter text-[14px] outline-none placeholder:text-sub-heading",
                  isPassword && showPasswordToggle && "pr-10",
                  className
                )}
                value={field.value || ""}
                onChange={(e) => {
                  const value =
                    type === "number" ? Number(e.target.value) : e.target.value;
                  field.onChange(value);
                }}
              />

              {isPassword && showPasswordToggle && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>

            {(error?.message || helperText) && (
              <p
                className={cn(
                  "!mt-1 text-xs",
                  error ? "text-red-500" : "text-gray-500"
                )}
              >
                {error?.message || helperText}
              </p>
            )}
          </div>
        )}
      />
    );
  }
);

CustomFormInput.displayName = "CustomFormInput";

export default CustomFormInput;
