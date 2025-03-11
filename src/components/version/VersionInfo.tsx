import TextLink from "@/components/common/TextLink";

const VersionInfo = () => {
  return (
    <div className="mt-[20px] px-[18px]">
      <div className="flex w-full justify-between">
        <TextLink
          name="Having issues?"
          onClick={() => {}}
          className="cursor-default text-center text-[13px]"
        />
        <TextLink
          name="Get Help"
          onClick={() => {}}
          className="text-center text-[13px] text-active-color hover:underline"
        />
      </div>
      <div className="mb-[28px] mt-[16px] h-[1px] w-full bg-border" />
      <div className="flex w-full justify-between">
        <TextLink
          name="Follow Client Version"
          onClick={() => {}}
          className="cursor-default text-center text-[13px]"
        />
        <TextLink
          name="0.0.1"
          onClick={() => {}}
          className="text-center text-[13px] hover:underline"
        />
      </div>
      <div className="mt-2 flex w-full justify-between">
        <TextLink
          name="Whatsapp Version"
          onClick={() => {}}
          className="cursor-default text-center text-[13px]"
        />
        <TextLink
          name="2.3000.1018797727"
          onClick={() => {}}
          className="text-center text-[13px] hover:underline"
        />
      </div>
    </div>
  );
};

export default VersionInfo;
