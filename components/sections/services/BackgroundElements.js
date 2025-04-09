//components/sections/services/BackgroundElements.jsx
export const BackgroundElements = () => {
  return (
<div>
  <div className="absolute top-0 left-10 w-96 h-96 rounded-full bg-blue-700 filter blur-[100px]"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-purple-600 filter blur-[80px]"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-teal-700 filter blur-[90px]"></div>
      <div className="absolute -top-10 right-1/4 w-24 h-24 rounded-full bg-amber-800 filter blur-[60px]"></div>
      
      {/* Grid pattern */}
      {/* <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg> */}
</div>
  );
};