import Image from '../image/Botanico_BBox_logo-01.png';

function Title({ titleText }) {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='flex justify-between items-center w-[70%] max-sm:w-[90%] mx-auto '>
                <h1 className='text-[30px] font-abc font-extrabold max-sm:text-[20px]'>{titleText}</h1>
                <img className='w-[80px] max-sm:w-[50px]' src={Image} alt="logo" />
            </div>
            {/* Set the width of the line to match the container width */}
            <hr className='bg-black h-[3px] w-[70%] max-sm:w-[90%] mx-auto mt-2' />
        </div>
    );
}

export default Title;

