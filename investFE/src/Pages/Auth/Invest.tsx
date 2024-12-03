import { SiApple } from "react-icons/si";
import Header from "../../Static/Header";
// import lip from "../../assets/todoist logo (13).svg";

const Invest = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <div className="w-full h-[1000px] bg-[#7913E5] pt-52">
          <div className="w-full h-[500px] bg-green-900 pt-36">
            <div className="w-[600px] h-[500px] bg-red-700 pl-28">
              <div>Invest on the go</div>
              <div>Up to 35% returns</div>
              <div>
                Invest securely and confidently on the go. Up to 35% returns,
                6-12 month duration.
              </div>
              {/* <div className="w-[400px] h-[90px] flex items-center justify-center ">
                <div className="w-[250px] h-[80px] bg-[#122231] text-white flex items-center justify-center rounded-2xl text-xl font-semibold hover:animate-bounce">
                  <SiApple className="mr-2" />
                  Get on iPhone
                </div>
                <div className="w-[250px] h-[80px] bg-[#122231] text-white flex items-center justify-center rounded-2xl ml-6 text-xl font-semibold hover:animate-bounce ">
                  <img src={lip} alt="" className="mr-2" />
                  Get on Android
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
