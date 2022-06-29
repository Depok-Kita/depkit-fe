import PaperPlane from "@images/paper-plane.svg";
import Cloud from "@images/cloud.svg";
import { Header } from "@components";
export const LoadingScreen = () => {
  return (
    <div className="overflow-x-hidden mt-20">
      <div className="flex justify-center">
        <Cloud className="animate-slide-out-right absolute mt-36 mr-64 w-20 " />
        <Cloud className="animate-slide-out-left absolute ml-80 w-20 mt-10" />
      </div>

      <div className="plane-container absolute inset-x-0 top-[10rem]">
        <PaperPlane />
      </div>
      <div className="flex justify-center absolute inset-x-0 top-[21rem] ">
        {/* <Header preset="h4" className="top-[20rem] absolute">
          Memuat
        </Header> */}
        <div className="">
          <div className="circle "></div>
          <div className="circle "></div>
          <div className="circle "></div>
        </div>
      </div>
      {/* <div className="loader absolute top-[24rem]">
        <div className="loaderBar"></div>
      </div> */}
    </div>
  );
};
