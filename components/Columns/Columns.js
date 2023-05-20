import { usePathname } from 'next/navigation'
import HTMLReactParser from 'html-react-parser';
import { Paragraph } from 'components/Paragraph';
import { theme } from "theme";
import { BlockRenderer } from 'components/BlockRenderer';
 

export const Columns = ({ children, isStackedOnMobile }) => {
    return (
        <div>
            <div className={`${isStackedOnMobile ? "flex raw:block" : "flex"}`}>
                {children}
            </div>
        </div>
    )
    
};