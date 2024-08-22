import React from "react";

const page = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(43,199,188,0) 0%, rgba(89,206,157,0.5844931722689075) 90%, rgba(212,212,212,0.6069021358543417) 100%), linear-gradient(0deg, rgba(43,199,188,0.3) 0%, rgba(253,183,45,0.2) 100%), url(/patterns/dots.svg)",
      }}
      className="min-h-screen relative"
    >
      <div className="absolute inset-0 bg-white/95"></div>
    </div>
  );
};

export default page;
