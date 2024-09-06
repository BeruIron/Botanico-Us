
import photo from "../image/Botanico_BBox_logo-01.png"
function SmallHeader({ headerText }) {
    return (
      <div className="w-full flex items-center px-20  gap-10">
        
        <div className="flex flex-col w-full">
          <h1 className=" text-black-800 text-[38px] font-bold">{headerText}</h1>
          <div className="border-t-2 border-black mt-1 w-full"></div>
        </div>

        <div className="pl-36">
        <img className='w-[120px]  ' src={photo} alt="logo" />
        </div>
      </div>
    );
  }
  
  export default SmallHeader;
  
  