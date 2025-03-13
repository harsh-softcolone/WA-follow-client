import { useThemeHook } from "@/hooks/useThemeHook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginSchema } from "@/utils/schemas/loginSchema";
import darkLogo from "@/assets/darkLogo.webp";
import whiteLogo from "@/assets/whiteLogo.webp";
import CustomFormInput from "@/components/form/CustomFormInput";
import TextLink from "@/components/common/TextLink";
import CustomButton from "@/components/common/CustomButton";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

const LoginForm = () => {
  const { theme } = useThemeHook();
  const navigate = useNavigate();
  const { handleSetUser } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: zodResolver(loginSchema()),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      if (data?.email && data?.password) {
        setLoading(true);
        window.postMessage(
          {
            type: "LOGIN_REQUEST",
            data: { email: data?.email, password: data?.password },
          },
          "*"
        );
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  });

  // Set up the event listener once when component mounts
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "LOGIN_RESPONSE") {
        console.log(event.data.response.data);
        setLoading(false);
        // Make sure we're accessing the correct data structure
        if (event.data.response.success) {
          if (event?.data?.response?.data?.statusCode === 200) {
            toast.success(event.data.response.data.message);
            handleSetUser(event.data.response.data.data);
            localStorage.setItem(
              "userMobileNumber",
              event.data.response.data.data.phoneNumber
            );
            localStorage.setItem(
              "accessToken",
              event.data.response.data.data.accessToken
            );
            navigate("/home");
          } else {
            toast.error(event.data.response.data.message);
          }
        } else {
          console.log("Login failed:", event.data);
          toast.error(event.data.response.details.message);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      {/* Logo and Welcome */}
      <div className="mb-[30px] flex w-full flex-col items-center justify-center">
        {theme === "dark" ? (
          <img src={whiteLogo} alt="followClientLogo" className="w-[160px]" />
        ) : (
          <img src={darkLogo} alt="followClientLogo" className="w-[160px]" />
        )}
        <div className="pt-[32px]">
          <h1 className="text-center font-inter text-[18px] font-semibold text-heading leading-normal">
            Welcome
          </h1>
          <p className="mt-[8px] text-center font-inter text-[13px] text-gray-400 text-sub-heading leading-normal">
            Please sign in to your account
          </p>
        </div>
      </div>

      {/* Login Form */}
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="ml-[19px] mr-[17px]">
          <div className="mt-[15px] flex flex-col gap-[16px]">
            <CustomFormInput
              name="email"
              label="Email"
              type="email"
              placeHolder="Enter your email"
            />
            <CustomFormInput
              name="password"
              label="Password"
              type="password"
              showPasswordToggle
              placeHolder="Enter your password"
            />
            <div className="flex items-center justify-end">
              <TextLink
                name="Forgot Password?"
                onClick={() => {}}
                className="text-[12px] hover:underline"
              />
            </div>
            <CustomButton
              name="Login"
              type="submit"
              isLoading={isSubmitting || loading}
            />
            <div>
              <TextLink
                name="Don't have an account yet?"
                onClick={() => {}}
                className="text-center text-[13px] cursor-default"
              />
              <CustomButton
                variant="outlined"
                name="Create account"
                className="mt-[14px] border-2 border-solid border-input-border"
                onClick={() => {}}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
