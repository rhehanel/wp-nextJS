import Image from "next/image";
import Logo from 'assets/EMA_LOGO.svg'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const MainCover = ({ attr }) => {
    const data = Object.values(attr)
    const filteredData = data.filter((word) => !JSON.stringify(word).includes('field'))
    const maxVal = 5;
    var array = [];

    while (filteredData.length >= maxVal) {
        array.unshift(filteredData.splice(-maxVal -1, maxVal));
    }
    array.unshift(filteredData);

    const coverGroup = array.slice(1);
    
    const [randomProject, setRandomProject] = useState(coverGroup[0]);
    const random = coverGroup[Math.floor(Math.random() * coverGroup.length)];

    useEffect(() => setRandomProject(random), [])

    return(
        <div className="h-screen text-white min-h-[400px] flex justify-center items-center">
            <Image
                alt="Cover"
                src={randomProject[0].url}
                fill
                className="object-cover"
            />
            <div className="
                cover-logo 
                max-w-5xl z-10
                fixed
                bottom-[50px]
            ">
                <Logo className="w-[725px] fill-white mix-blend-soft-light"/>
            </div>
            <div className="cover-info z-30 text-black text-center fixed right-[22%] top-[150px] font-[300]">
                <div className="border-black py-2 px-4 bg-white mb-[20px] w-fit text-[20px]">
                    <p>이엠에이 건축사무소</p>
                </div>
            </div>
            <div className="cover-info z-30 text-black text-center fixed left-[121px] bottom-[230px] font-[300]">
                <div className="border-black py-2 px-4 bg-white mb-[20px] w-fit text-[20px]">
                    <p>{randomProject[2]}</p>
                </div>
                <div className="border-black py-2 px-4 bg-white ml-[40px] w-fit text-[20px]">
                    <h2>
                        <Link href={randomProject[3]}>{randomProject[1]}</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};