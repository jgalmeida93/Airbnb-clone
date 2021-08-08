import Image from "next/image";
import { getData } from "../constants/getData";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image placeholder='blur' blurDataURL={`${getData}/0fm`} src={`${getData}/0fm`} layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white py-4 px-10 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
