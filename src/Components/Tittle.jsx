import Image from '../image/Botanico_BBox_logo-01.png';

function Title() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1 className='ml-[50px] -mb-[10px] text-2xl font-bold'>BOTANICO</h1>
                <img className='h-[90px] mr-[50px]' src={Image} alt="logo" />
            </div>
            <hr className='bg-black py-1 w-[90%]' />
        </div>
    );
}

export default Title;
