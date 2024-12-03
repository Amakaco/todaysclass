import pic from "../../assets/todoist logo (12).svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import lip from "../../assets/todoist logo (13).svg";
import opp from "../../assets/todoist logo (72).png";
import { SiApple } from "react-icons/si";
import iii from "../../assets/todoist logo (69).png";
import ioi from "../../assets/todoist logo (68).png";
import jjj from "../../assets/todoist logo (71).png";
import jj from "../../assets/todoist logo (65).png";
import io from "../../assets/todoist logo (66).png";
import fo from "../../assets/todoist logo (70).png";
import ho from "../../assets/todoist logo (64).png";
import { PiArrowBendDownRightBold } from "react-icons/pi";

const LandingScreen = () => {
  return (
    <div>
      <div className="w-full h-[500vh] bg-[#F2F7F8] pt-52 ">
        <div className="w-full h-[800px]  flex items-center justify-between">
          <div className="w-[600px] h-[600px]  ml-28 pt-5">
            <div className="w-[400px] h-[50px] bg-[#0089FF] text-white flex items-center justify-center hover:bg-blue-950 rounded-3xl cursor-pointer font-bold">
              <img src={pic} alt="" className="pr-5 animate-spin  " />
              The 2024 Amaka's Wallet Savings Report
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="w-[400px] h-[100px]  mt-5 text-5xl font-semibold">
              The Better Way to Save & Invest
            </div>
            <div className="w-[390px] h-[200px] text-2xl font-medium text-[#3D4F60] mt-7">
              Amaka's Wallet helps over 5 million customers achieve their
              financial goals by helping them save and invest with ease.
            </div>
            <div className="w-[400px] h-[90px] flex items-center justify-center ">
              <div className="w-[250px] h-[80px] bg-[#122231] text-white flex items-center justify-center rounded-2xl text-xl font-semibold hover:animate-bounce">
                <SiApple className="mr-2" />
                Get on iPhone
              </div>
              <div className="w-[250px] h-[80px] bg-[#122231] text-white flex items-center justify-center rounded-2xl ml-6 text-xl font-semibold hover:animate-bounce ">
                <img src={lip} alt="" className="mr-2" />
                Get on Android
              </div>
            </div>
          </div>
          <div className="w-[700px] h-[600px] mr-20">
            <div className="animate-bounce transition-all duration-[3000ms] am">
              <img src={opp} alt="" className="relative " />
              <div className="absolute left-[-60px] top-0 flex flex-col gap-40 py-14">
                <img src={jj} alt="" className=" w-[270px] h-[80px]" />
                <img src={ioi} alt="" className=" w-[270px] h-[80px]" />
                <img src={iii} alt="" className=" w-[270px] h-[80px]" />
              </div>
              <div className="absolute right-[-50px] top-0 flex flex-col gap-40 py-14">
                <img src={jjj} alt="" className=" w-[270px] h-[80px]" />
                <img src={io} alt="" className=" w-[270px] h-[80px]" />
                <img src={fo} alt="" className=" w-[270px] h-[80px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1500px] h-[400px]  ml-28 mt-32 flex">
          <div className="mt-11">
            <img src={ho} alt="lock" />
          </div>
          <div className="w-[800px] h-[400px] ml-6 ">
            <p className="text-5xl font-semibold">
              Your security is our priority
            </p>
            <p className="w-[620px] h-[90px] mt-5 font-semibold text-[#3D4F60]">
              Amaka's Wallet uses the highest level of Internet Security and it
              is secured by 256 bits SSL security encryption to ensure that your
              information is comepletely protected from fraud.
            </p>
            <div className="flex items-center w-[300px] h-[70px] ">
              <PiArrowBendDownRightBold />
              <p className="pl-3 text-lg font-medium">
                More on our security measures
              </p>
            </div>{" "}
          </div>
        </div>
        <div className="w-[1500px] h-[300px]   ">
          <div>Many ways to build your savings</div>
          <div>
            Earn 12%-20% when you save with any of these PiggyVest plans.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
