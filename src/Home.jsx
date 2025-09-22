import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <div className="w-screen h-screen home-bg flex justify-center">
      <div className="w-screen h-screen flex-col items-center justify-center flex p-1 container ">
        <p className=" font-bold text-3xl">ID Frame</p>
        <p className=" text-gray-500">Recapture Your Best</p>

        <Link
          to="/ID"
          className="inline-block p-2 mt-5 bg-yellow-200 rounded-sm shadow-md hover:bg-blue-400 transition hover:text-white font-semibold"
        >
          LETS GO
        </Link>
        <div className="white-blue absolute left-[2rem] top-[10rem] -rotate-z-20 -rotate-y-50 rotate-x-5 scale-120">Kuya isang pic pa</div>
        <div className="white-blue absolute right-[-1rem] top-[7rem] rotate-z-70 rotate-x-50 scale-75">Pwede ba dalawa kami sa ID pic</div>
        <div className="white-blue absolute right-[2rem] bottom-[7rem] -rotate-z-30  rotate-y-10">I Lab my ID </div>
        <div className="white-blue absolute  bottom-[14rem] rotate-z-4  rotate-y-10">Pwede ba full body picture</div>
        <div className="white-blue absolute left-[-1rem] bottom-[7rem] rotate-z-70 rotate-x-50">Hanggang 4th year na to</div>


      </div>
    </div>
  );
};

export default Home;
