import Image from '../image/Botanico_BBox_logo-01.png';

function Title({ titleText }) {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='ml-[50px] -mb-[10px] text-[30px] font-bold max-sm:text-[20px] max-sm:ml-[30px]'>{titleText}</h1>
                <img className='w-[80px] mr-[50px] max-sm:w-[50px] max-sm:mr-[30px]' src={Image} alt="logo" />
            </div>
            <hr className='bg-black h-[3px] w-[85%] ml-[50px] max-sm:ml-[30px]' />
        </div>
    );
}

export default Title;
