import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ size }: { size?: "sm" | "lg" }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        className={cn(
          size === "sm" ? "h-8 w-8" : "",
          size === "lg" ? "h-10 w-10" : "",
          "fill-black dark:fill-accent-2",
        )}
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <polyline
            className="fill-orange-500"
            points="160,441.6 160,386.928 352,386.928 352,435.2 "
          ></polyline>{" "}
          <path d="M378.672,485.872H133.328c-13.936,0-25.328-11.392-25.328-25.328l0,0c0-13.936,11.392-25.328,25.328-25.328h245.328 c13.936,0,25.328,11.392,25.328,25.328l0,0C404,474.464,392.608,485.872,378.672,485.872z"></path>{" "}
          <path d="M480,346.128H32c-17.6,0-32-14.4-32-32v-256c0-17.6,14.4-32,32-32h448c17.6,0,32,14.4,32,32v256 C512,331.728,497.6,346.128,480,346.128z"></path>{" "}
          <g>
            {" "}
            <polygon
              className="fill-accent-2 dark:fill-white"
              points="103.088,236.496 91.776,225.184 179.392,137.584 311.04,209.408 414.096,129.264 423.904,141.888 312.576,228.464 182.24,157.376 "
            ></polygon>{" "}
            <circle
              className="fill-accent-2 dark:fill-white"
              cx="421.568"
              cy="135.568"
              r="24.176"
            ></circle>{" "}
            <circle
              className="fill-accent-2 dark:fill-white"
              cx="97.44"
              cy="237.168"
              r="24.176"
            ></circle>{" "}
            <circle
              className="fill-accent-2 dark:fill-white"
              cx="178.928"
              cy="148.208"
              r="24.176"
            ></circle>{" "}
            <circle
              className="fill-accent-2 dark:fill-white"
              cx="311.808"
              cy="217.424"
              r="24.176"
            ></circle>{" "}
          </g>{" "}
        </g>
      </svg>
      <span className={cn("text-3xl font-bold")}>
        E<span className="text-accent-2">Z</span>Books
      </span>
    </Link>
  );
};

export default Logo;
