import { BlockRenderer } from "components/BlockRenderer"
import { MainMenu } from "components/MainMenu"

export const Page = (props) => {
    return (
        <div>
            <MainMenu items={props.mainMenuItems}/>
            <main className="main pt-[133px] pb-[71px] px-[72px]">
                <BlockRenderer blocks={props.blocks} />
            </main>
        </div>
    )
}