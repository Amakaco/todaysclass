import { GrGoogleWallet } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  //   const Categories = [
  //     {
  //       id: 1,
  //       navs: "Save",
  //     },
  //     {
  //       id: 2,
  //       navs: "Invest",
  //     },
  //     {
  //       id: 3,
  //       navs: "Resources",
  //     },
  //     {
  //       id: 4,
  //       navs: "FAQs",
  //     },
  //   ];
  return (
    <div>
      <div className="w-full h-[100px] bg-slate-100 flex items-center  fixed z-10">
        <Link to="/">
          <div className="w-[300px] h-[60px] pl-10 hover:cursor-pointer">
            <span className="font-bold">
              <GrGoogleWallet className="text-3xl" />
              AMAKA'S
            </span>
            <span className="font-extrabold ml-3">Wallet</span>
          </div>
        </Link>
        <div className="w-[700px] h-[70px] flex items-center ">
          <div className="pl-32 text-[#3D4F60] hover:cursor-pointer text-xl font-semibold">
            Save
          </div>
          <Link
            to="/invest"
            className="pl-11 text-[#3D4F60] hover:cursor-pointer text-xl font-semibold"
          >
            <div>Invest</div>
          </Link>
          <div className="pl-11 text-[#3D4F60] hover:cursor-pointer text-xl font-semibold">
            Resources
          </div>
          <div className="pl-11 text-[#3D4F60] hover:cursor-pointer text-xl font-semibold">
            FAQs
          </div>
        </div>
        <div className="w-[500px] h-[80] ml-28 flex mr-6">
          <Link
            to="/login"
            className="w-[100px] h-[70px] border rounded-xl flex items-center justify-center text-xl font-bold hover:cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-[200px] h-[70px] bg-[#122231] text-white text-xl font-bold ml-4 rounded-xl flex items-center justify-center  "
          >
            Create free account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
