import photo from "../image/Botanico_BBox_logo-01.png";

function SmallHeader({ headerText }) {
  return (
    <div className="w-full flex items-center justify-between px-4 md:px-10 lg:px-20 gap-4">
 
      <div className="flex flex-col w-full">
        <h1 className="text-black-800 text-[20px] font-abc max-sm:text-[20px] md:text-[30px] lg:text-[30px] font-bold">
          {headerText}
        </h1>
        <div className="border-t-2 border-black mt-1 w-full"></div>
      </div>

      <img
        className="w-[40px] md:w-[60px] lg:w-[80px] xl:w-[100px] h-auto" 
        src={photo} 
        alt="logo" 
      />
    </div>
  );
}

export default SmallHeader;



  
  