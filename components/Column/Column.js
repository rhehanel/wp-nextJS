import { usePathname } from 'next/navigation'
import HTMLReactParser from 'html-react-parser';
import { Paragraph } from 'components/Paragraph';
import { theme } from "theme";
import { BlockRenderer } from 'components/BlockRenderer';
 

export const Column = ({ children, width, block, index }) => {
    const pathname = usePathname();
    const widthStyle = width
        ? { minWidth: width, flexGrow: 1 }
        : { flexGrow: 1, flexBasics: 0 }
    if (pathname.includes('about')){
        switch (index) {
            case 0: {
                return (
                    <section className="w-[30%] border-right pr-[56px] pt-[50px]" key={block.id}>
                        {children}
                    </section>
                )
            }
            case 1: {
                return (
                    <section className="w-[45%] pt-[50px] pl-[60px]" key={block.id}>
                        {children}
                    </section>
                )
            }
            case 2: {
                return (
                    <section className="w-[45%] pt-[50px] pl-[60px]" key={block.id}>
                        {children}
                    </section>
                )
            }
            default: return null;
        }
    } else if (pathname.includes('contact')) {
        switch (index) {
            case 0: {
                return (
                    <section style={widthStyle} className='px-2 py-5'>
                        {children}
                    </section>
                )
            }
            case 1: {
                return (
                    <section style={widthStyle} className='px-2 py-5'>
                        {children}
                    </section>
                )
            }
            default: return null;
        }
    } else {
        return (
            <section style={widthStyle} className='px-2 py-5'>
                    {children}
            </section>
        )
    }
    
};