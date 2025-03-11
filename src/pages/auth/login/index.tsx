import { ThemeToggle } from "@/components/theme/ThemeToggle";
import VersionInfo from "@/components/version/VersionInfo";
import LoginForm from "@/pages/auth/login/LoginForm";

const index = () => {
  return (
    <div className="mx-auto flex h-full w-full justify-between flex-col py-8 pt-[52px] text-white">
      <LoginForm />
      <ThemeToggle />
      <VersionInfo />
    </div>
  );
};

export default index;
