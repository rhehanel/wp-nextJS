import { usePathname } from 'next/navigation'
import HTMLReactParser from 'html-react-parser';
import { Paragraph } from 'components/Paragraph';
import { theme } from "theme";
import { BlockRenderer } from 'components/BlockRenderer';
 

export const PageColumns = ({ children, blocks }) => {
    const pathname = usePathname();
    return(
        <div className="flex justify-between">
            {blocks.map((block, index) => {
                if (pathname.includes('about')){
                    switch (index) {
                        case 0: {
                            return (
                                <section className="w-[30%] border-right pr-[56px] pt-[50px]" key={block.id}>
                                    {block.innerBlocks.map((inBlock) => {
                                        switch (inBlock.name) {
                                            case 'core/buttons': {
                                                return (
                                                    <div key={inBlock.id}>
                                                        <h2 className='mb-[95px] text-[400] text-[20px]'>
                                                            {HTMLReactParser(inBlock.innerBlocks[0].originalContent)}
                                                        </h2>
                                                    </div>
                                                )

                                            }
                                            
                                            case 'core/heading': {
                                                return (
                                                    <div key={inBlock.id}>
                                                        <h3 className='text-[20px] leading-[34px] min-h-[74px mb-[52px] font-[400]'>
                                                            {HTMLReactParser(inBlock.attributes.content)}
                                                        </h3>
                                                    </div>
                                                )
                                            }
                                            
                                            case 'core/paragraph': {
                                                return (
                                                    <Paragraph
                                                        style='font-[400] text-[16px] leading-[31px]'
                                                        key={inBlock.id}
                                                        textAlign={inBlock.attributes.align}
                                                        content={inBlock.attributes.content}
                                                        textColor={
                                                            theme[inBlock.attributes.textColor] ||
                                                            inBlock.attributes.style?.color?.text
                                                        }
                                                    />
                                                )
                                            }

                                            default: return null;
                                        }
                                    })}
                                </section>
                            )
                        }

                        default: {
                            return (
                                <section className="w-[45%] pt-[50px] pl-[60px]" key={block.id}>
                                    {block.innerBlocks.map((inBlock) => {
                                        switch (inBlock.name) {
                                            case 'core/buttons': {
                                                return (
                                                    <div key={inBlock.id}>
                                                        <h2 className='mb-[95px] text-[400] text-[20px]'>
                                                            {HTMLReactParser(inBlock.innerBlocks[0].originalContent)}
                                                        </h2>
                                                    </div>
                                                )

                                            }
                                            
                                            case 'core/heading': {
                                                return (
                                                    <div key={inBlock.id}>
                                                        <h3 className='text-[20px] leading-[34px] min-h-[74px] mb-[52px] font-[500]'>
                                                            {HTMLReactParser(inBlock.attributes.content)}
                                                        </h3>
                                                    </div>
                                                )
                                            }
                                            
                                            case 'core/paragraph': {
                                                return(
                                                    <Paragraph
                                                        style='font-[400] text-[16px] leading-[31px]'
                                                        key={inBlock.id}
                                                        textAlign={inBlock.attributes.align}
                                                        content={inBlock.attributes.content}
                                                        textColor={
                                                            theme[inBlock.attributes.textColor] ||
                                                            inBlock.attributes.style?.color?.text
                                                        }
                                                    />
                                                )
                                            }

                                            case 'core/table': {
                                                return(
                                                    <div key={inBlock.id} className='table mb-[116px]'>
                                                        {HTMLReactParser(inBlock.originalContent)}
                                                    </div>
                                                )
                                            }

                                            default: return null;
                                        }
                                    })}
                                </section>
                            )
                        }
                    }
                } else if (pathname.includes('contact')) {
                    switch (index) {
                        case 0: {
                            return (
                                <section className="w-[70%] border-right pr-[56px] pt-[50px]" key={block.id}>
                                    {block.innerBlocks.map((columns) => {
                                        switch (columns.name) {
                                            case 'core/buttons': {
                                                return (
                                                    <div key={columns.id}>
                                                        <h2 className='mb-[95px] text-[400] text-[20px]'>
                                                            {HTMLReactParser(columns.innerBlocks[0].originalContent)}
                                                        </h2>
                                                    </div>
                                                )
                                                
                                            }
                                            case 'core/columns': {
                                                
                                            }

                                            default: return null;
                                        }
                                    })}
                                </section>
                            )
                        }

                        default: {
                            return (
                                <section className="w-[30%] pt-[50px] pl-[60px]" key={block.id}>
                                    {block.innerBlocks.map((inBlock) => {
                                        switch (inBlock.name) {
                                            case 'core/buttons': {
                                                return (
                                                    <div key={inBlock.id}>
                                                        <h2 className='mb-[95px] text-[400] text-[20px]'>
                                                            {HTMLReactParser(inBlock.innerBlocks[0].originalContent)}
                                                        </h2>
                                                    </div>
                                                )

                                            }
                                            
                                            case 'core/heading': {
                                                return (
                                                    <div key={inBlock.id}>
                                                        <h3 className='text-[20px] leading-[34px] min-h-[74px] mb-[52px] font-[500]'>
                                                            {HTMLReactParser(inBlock.attributes.content)}
                                                        </h3>
                                                    </div>
                                                )
                                            }
                                            
                                            case 'core/paragraph': {
                                                return(
                                                    <Paragraph
                                                        style='font-[400] text-[16px] leading-[31px]'
                                                        key={inBlock.id}
                                                        textAlign={inBlock.attributes.align}
                                                        content={inBlock.attributes.content}
                                                        textColor={
                                                            theme[inBlock.attributes.textColor] ||
                                                            inBlock.attributes.style?.color?.text
                                                        }
                                                    />
                                                )
                                            }

                                            case 'core/table': {
                                                return(
                                                    <div key={inBlock.id} className='table mb-[116px]'>
                                                        {HTMLReactParser(inBlock.originalContent)}
                                                    </div>
                                                )
                                            }

                                            default: return null;
                                        }
                                    })}
                                </section>
                            )
                        }
                    }
                }
            })}
        </div>
    );
};