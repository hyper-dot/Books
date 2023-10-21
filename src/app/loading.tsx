import React from "react";
import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default loading;
