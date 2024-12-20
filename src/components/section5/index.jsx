import LogoBlack from "../../assets/logoblack.png";
import "./style.css";

const index = () => {
  return (
    <div
      id="container-section5"
      className="flex justify-between flex-col gap-14 py-10 px-5 md:px-24"
    >
      <div className="md:flex justify-between items-center">
        <h1 className="text-md text-black md:text-4xl font-bold leading-normal   mb-8 md:mb-0">
          Join our newsletterto <br /> keep up to date with us!
        </h1>

        <div className="flex items-center gap-5 md:gap-3">
          <div className="flex w-44 md:w-80  items-center gap-4 py-3 md:px-3 border-[2px]  rounded-full">
            <svg
              className="hidden md:flex"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E5E7EB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <input
              type="text"
              placeholder="Enter your name"
              className="outline-none text-xs md:text-lg"
            />
          </div>
          <button className="flex bg-[#EAFE63] py-3 px-5 rounded-full text-black text-md font-medium">
            Subscribe
          </button>
        </div>
      </div>

      <div className=" md:flex justify-between items-center py-20 border-y-[2px] border-[#E5E7EB]">
        <img
          src={LogoBlack}
          alt=""
          className="w-[110px] h-[110px] cursor-pointer"
        />
        <div className="flex gap-7 md:gap-14 items-center">
          <ul className="flex flex-col gap-5 text-black font-normal text-xs md:text-xl">
            <li className="cursor-pointer hover:underline">Platform</li>
            <li className="cursor-pointer hover:underline">Plans & Pricing</li>
            <li className="cursor-pointer hover:underline">
              Personal AI Manager
            </li>
            <li className="cursor-pointer hover:underline">
              AI Business Writer
            </li>
          </ul>
          <ul className="flex flex-col gap-5 text-black font-normal text-xs md:text-xl">
            <li className="cursor-pointer hover:underline">Company</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Careers</li>
            <li className="cursor-pointer hover:underline">News</li>
          </ul>
          <ul className="flex flex-col gap-5 text-black font-normal text-xs md:text-xl">
            <li className="cursor-pointer hover:underline">Resources</li>
            <li className="cursor-pointer hover:underline">Documentation</li>
            <li className="cursor-pointer hover:underline">Papers</li>
            <li className="cursor-pointer hover:underline">
              Press Conferences
            </li>
          </ul>
        </div>
      </div>
      <div className=" md:flex justify-between items-center">
        <h2 className="text-black font-normal text-lg cursor-pointer">
          &copy; 2024 Gym Inc.
        </h2>
        <ul className="flex gap-4 md:gap-9 text-black font-normal md:text-lg">
          <li className="cursor-pointer hover:underline">Term of Service</li>
          <li className="cursor-pointer hover:underline">Privacy Policy</li>
          <li className="cursor-pointer hover:underline">Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default index;
