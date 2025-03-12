import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LabeledIcon from "./LabeledIcon";
import { IoLocationSharp } from "react-icons/io5";
import { MdTransgender } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { AiFillTag } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

interface ProfileHeaderProps {
  name: string;
  phone: string;
  gender: string;
  location: string;
  email: string;
  plan: string;
  isMinimized?: boolean;
  handleEditProfile?: () => void;
}

export function ProfileHeader({
  name = "Sohit SoftColon",
  phone = "91869081904",
  gender = "Man",
  location = "Ahmedabad",
  email = "sohit.softcolon@gmail.com",
  plan = "Test pro",
  isMinimized = false,
  handleEditProfile,
}: ProfileHeaderProps) {
  return (
    <div className="item-center flex gap-[10px]">
      <Avatar className="border-[1px] border-solid border-border">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-1 flex-col gap-[10px]">
        <div className="flex flex-col gap-[5px]">
          <h1 className="font-inter text-[14px] font-[500] leading-normal text-heading">
            {name}
          </h1>
          <p className="font-inter text-[14px] leading-normal text-sub-heading">
            {phone}
          </p>
        </div>
        {!isMinimized && (
          <div className="flex flex-col items-start gap-[6px]">
            <div className="flex items-start gap-[20px]">
              <LabeledIcon
                labelDetail={{ icon: MdTransgender, label: gender }}
              />
              <LabeledIcon
                labelDetail={{ icon: IoLocationSharp, label: location }}
              />
            </div>
            <LabeledIcon labelDetail={{ icon: IoMdMail, label: email }} />
            <LabeledIcon labelDetail={{ icon: AiFillTag, label: plan }} />
          </div>
        )}
      </div>
      <div className="flex gap-[6px]">
        <div
          className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-input"
          onClick={() => {}}
        >
          <IoMdCreate className="h-4 w-4 text-sub-heading" />
        </div>
        <div
          className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-input"
          onClick={handleEditProfile}
        >
          <IoIosCall className="h-4 w-4 text-sub-heading" />
        </div>
      </div>
    </div>
  );
}
