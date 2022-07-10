import PaperPlane from "@images/paper-plane.svg";
import Cloud from "@images/cloud.svg";
type LoadingScreenProps = {
  className?: string;
};
export const LoadingScreen = ({ className }: LoadingScreenProps) => {
  return (
    <div
      className={`overflow-x-hidden w-full ${className} h-screen bg-totalwhite`}
    >
      <div className="flex justify-center mobile:mt-[15%] tablet:mt-[30%] desktop:mt-[5%] ">
        <Cloud className="animate-slide-out-right absolute mobile:mt-72 tablet:mt-40 desktop:mt-28 mobile:mr-32 tablet:mr-56 desktop:mr-64 mobile:w-10 tablet:w-20 " />
        <Cloud className="animate-slide-out-left absolute mobile:ml-40 tablet:ml-72 desktop:ml-80 mobile:w-10 tablet:w-20 tablet:mt-0 mobile:mt-40" />
      </div>

      <div className="plane-container absolute inset-x-0 mobile:top-[22rem] tablet:top-[25rem] desktop:top-[10rem] flex justify-center">
        <PaperPlane className="mobile:w-32 mobile:h-1/3 tablet:w-52 table:h-52 flex" />
      </div>
      <div className="flex justify-center absolute inset-x-0 mobile:top-[31.5rem] desktop:top-[23rem] tablet:top-[37rem] ">
        <div className="">
          <div className="circle absolute mobile:left-[34%] tablet:left-[43%] desktop:left-[45%]  "></div>
          <div className="circle absolute mobile:left-[43%] tablet:left-[47%] desktop:left-[48%] "></div>
          <div className="circle absolute mobile:left-[52%] tablet:left-[51%]"></div>
        </div>
      </div>
    </div>
  );
};
