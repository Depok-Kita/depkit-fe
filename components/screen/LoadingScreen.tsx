import PaperPlane from "@images/paper-plane.svg";
import Cloud from "@images/cloud.svg";
type LoadingScreenProps = {
  className?: string;
};
export const LoadingScreen = ({ className }: LoadingScreenProps) => {
  return (
    <div
      className={`overflow-x-hidden mobile:mt-[15%] tablet:mt-[30%] desktop:mt-[5%] w-full ${className}`}
    >
      <div className="flex justify-center">
        <Cloud className="animate-slide-out-right absolute mobile:mt-40 tablet:mt-40 desktop:mt-44 mobile:mr-32 tablet:mr-56 desktop:mr-64 mobile:w-10 tablet:w-20 " />
        <Cloud className="animate-slide-out-left absolute mobile:ml-40 tablet:ml-72 desktop:ml-80 mobile:w-10 tablet:w-20 mt-10" />
      </div>

      <div className="plane-container absolute inset-x-0 top-[10rem] flex justify-center">
        <PaperPlane className="mobile:w-32 mobile:h-1/3 tablet:w-52 table:h-52 flex" />
      </div>
      <div className="flex justify-center absolute inset-x-0 mobile:top-[21rem] tablet:top-[23rem] ">
        <div className="">
          <div className="circle absolute mobile:left-[34%] tablet:left-[43%] desktop:left-[45%]  "></div>
          <div className="circle absolute mobile:left-[43%] tablet:left-[47%] desktop:left-[48%] "></div>
          <div className="circle absolute mobile:left-[52%] tablet:left-[51%]"></div>
        </div>
      </div>
    </div>
  );
};
