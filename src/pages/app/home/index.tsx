import CallStatusCard from "@/components/cards/CallStatusCard";
import { MetricCards } from "@/components/cards/MetricCard";
import { callStatusArray, homeCards } from "@/utils/staticData";
import { ProfileHeader } from "@/pages/app/home/components/ProfileHeader";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-full border-l-[1px] border-border overflow-y-auto p-[18px]">
        <div className="mb-[20px]">
          <ProfileHeader
            name="Sohit SoftColon"
            phone="91869081904"
            gender="Man"
            location="Ahmedabad"
            email="sohit.softcolon@gmail.com"
            plan="Test pro"
          />
        </div>
        <div className="border-y-[1px] border-solid border-border py-[12px]">
          <h1 className="font-inter text-sm font-bold text-heading">
            Dashboard
          </h1>
        </div>
        <div className="mt-[16px] grid grid-cols-2 gap-[20px]">
          {homeCards.map((metric, index) => (
            <MetricCards
              key={index}
              svgName={metric.icon}
              title={metric.title}
              value={metric.value}
            />
          ))}
        </div>
        <div className="mt-[21px] flex flex-col items-start gap-[21px]">
          {callStatusArray.map((metric, index) => (
            <CallStatusCard
              key={index}
              svgName={metric.icon}
              title={metric.title}
              value={metric.value}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
