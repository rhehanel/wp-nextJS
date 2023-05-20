import Image from "next/image";
import Logo from 'assets/EMA_LOGO.svg'

export const Cover = ({children, background }) => {
    return(
        <div className="h-screen text-white min-h-[400px] flex justify-center items-center">
            <Image
                alt="Cover"
                src={background}
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
        </div>
    );
};