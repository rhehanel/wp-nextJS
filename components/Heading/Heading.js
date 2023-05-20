import { getFontSizeForHeading, getTextAlign } from "utils/fonts"
import React from "react";
import { usePathname } from "next/navigation";


export const Heading = ({textAlign, content, level = 2 }) => {
    const pathname = usePathname();
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
            level
        )} ${getTextAlign(textAlign)}`,
    });

    const aboutHeader = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `text-[20px] leading-[34px] min-h-[74px mb-[52px] font-[400]`,
    });

    const contactHeader = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `text-[20px] leading-[34px] mb-[12px] font-[400]`,
    });

    if (pathname.includes('about')){
        return aboutHeader;
    } else if (pathname.includes('contact')){
        return contactHeader;
    } else {
        return tag;
    }
}