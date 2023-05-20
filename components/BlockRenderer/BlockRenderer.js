import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";
import { MainCover } from "components/MainCover"
import { Columns } from "components/Columns";
import { usePathname } from 'next/navigation'
import { Column } from "components/Column";
import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import { Buttons } from "components/Buttons";
import { Children } from "react";
import { Button } from "components/Button";
import { ProjectFilter } from "components/projectFilter";

export const BlockRenderer = ({ blocks, idx }) => {

    return blocks.map((block, idx) => {
        switch (block.name) {
            case "core/paragraph": {
                return (
                    <Paragraph
                        key={block.id}
                        textAlign={block.attributes.align}
                        content={block.attributes.content}
                        textColor={
                            theme[block.attributes.textColor] ||
                            block.attributes.style?.color?.text
                        }
                    />

                )
            }
            case "core/heading": {
                return (
                 <Heading
                    key={block.id}
                    level={block.attributes.level}
                    content={block.attributes.content}
                    textAlign={block.attributes.textAlign}
                />
                )
            }
            case 'core/cover': {
                return (
                    <Cover key={block.id} background={block.attributes.url}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Cover>
                )
            }
            case 'acf/maincover': {
                return (
                    <MainCover key={block.id} attr={block.attributes.data} />
                )
            }
            case 'acf/projectGallery': {
                return (
                    <ProjectGallery key={block.id} />
                )
            }

            case 'core/buttons': {
                return (
                    <Buttons key={block.id}>
                       <BlockRenderer blocks={block.innerBlocks} />
                    </Buttons>
                )
            }

            case 'core/button': {
                return (
                    <Button key={block.id} content={block.originalContent} />
                )
            }

            case 'acf/projectfilter': {
                return (
                    <ProjectFilter key={block.id} />
                )
            }

            case 'core/image': {
                return (
                    <Image
                        key={block.id}
                        src={block.attributes.url}
                        height={block.attributes.height}
                        width={block.attributes.width}
                        alt={block.attributes.alt || ""}
                    />
                )
            }

            case 'core/table': {
                return(
                    <div key={block.id} className='table mb-[116px]'>
                        {HTMLReactParser(block.originalContent)}
                    </div>
                )
            }

            case 'core/columns': {
                return (
                    <Columns
                        isStackedOnMobile={block.attributes.isStackedOnMobile}
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Columns>
                )
            }

            case 'core/column': {
                return (
                    <Column
                        key={block.id}
                        width={block.attributes.width}
                        block={block}
                        index={idx}
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Column>
                )
            }

            // case 'core/columns': {
            //     if (pathname.includes('about') || pathname.includes('contact')){
            //         return (
            //             <Columns key={block.id} blocks={block.innerBlocks}/>
            //         )
            //     } else {
            //         return (
            //             <Columns key={block.id} blocks={block.innerBlocks}>
            //                 {block.innerBlocks.map((firstDepthBlock) => {
            //                     <BlockRenderer blocks={firstDepthBlock.innerBlocks} />
            //                 })}
            //             </Columns>
            //         )
            //     }
            // }
            
            default:
                return null;
        }
    })
}