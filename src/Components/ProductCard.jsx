import React from 'react';

function ProductCard({ title1, title2,image1, image2, titlestyle }) {
    return (
        <div className="rounded shadow-lg bg-white w-[547px] h-[658px] m-4 ">
          
            <div className="flex gap-1 bg-red-5">
                
                <div className="flex-1 bg-red-700 w-[267px] h-[430px] ">
                    <img className="" src={image1} alt="Image 1"/>
                </div>
                
                <div className="flex-1 bg-black w-[267px] h-[430px]">
                    <img className="" src={image2} alt="Image 2"/>
                </div>
            </div>
           
            <div className="text-center mt-[80px]">
                <div 
                className="font-bold text-3xl text-black">{title1} </div>
                <div className={titlestyle}>{title2} </div>
            </div>
        </div>
    );
}

export default ProductCard;
