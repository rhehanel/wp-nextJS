import HTMLReactParser from "html-react-parser"

export const Button = ({ content }) => {
    return (
        <div>
            {HTMLReactParser(content)}
        </div>
    )
}