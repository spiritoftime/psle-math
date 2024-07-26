import React from "react";

const ProgressIndicatorSkeleton: React.FC = () => {
  return (
    <div className="flex items-center w-full h-10 space-x-4">
      <div className="w-1/4 h-4 bg-gray-300 rounded-md animate-pulse"></div>
      <div className="w-full h-4 bg-gray-300 rounded-md animate-pulse"></div>
    </div>
  );
};

export default ProgressIndicatorSkeleton;
