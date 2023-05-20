import Logo from 'assets/EMA_LOGO.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MainMenu = ({items}) => {
    const pathname = usePathname();
    const style = 'px-5 pt-1 block text-[20px] font-[300]';
    return(
        <div className="
            font-heading
            bg-white
            text-black
            pl-10 pr-2 h-[60px]
            fixed top-[36px] z-20 flex items-center
            left-1/2 -translate-x-1/2
            w-4/5
            max-w-[824px]
            border-1
            border-black
        ">
            <div className="py-4 pl-5 pr-5 flex">
                <Link href="/">
                    <Logo className="w-[53px]"/>
                </Link>
            </div>
            <div className='flex flex-1 justify-end'>
                {(items || []).map(item => {
                    let isPage;
                    if (pathname == `/${item.label.toLowerCase()}`) {
                        isPage = style;
                    } else if (pathname == '/') {
                        isPage = style;
                    } else {
                        isPage = style + ' opacity-[0.55]';
                    }
                    return(
                        <div key={item.id} className='cursor-pointer relative group'>
                            <Link href={item.destination} className={isPage}>
                                {item.label}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}