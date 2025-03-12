import { pinnedQuickReplies } from "@/utils/footer-msg-data";
import darkLogo from "@/assets/darkLogo.webp";

const QuickActionsBar = () => {
  return (
    <div className="flex gap-[17px] items-center justify-end">
      {pinnedQuickReplies?.map((data) => {
        return (
          <div
            key={data?.title}
            className="bg-tag py-[7px] px-[12px] rounded-[5px] cursor-pointer flex items-center justify-center gap-[10px]"
          >
            {data.hasOwnProperty("image") && (
              <img
                src={darkLogo}
                alt="imageUrl"
                className="w-[20px] h-[20px] rounded-full object-cover"
              />
            )}
            <p className="text-[14px] text-heading">{data?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuickActionsBar;
