
import { Text } from "./Text";

export const ArticlesBlock = () => {
    return (
        <div className="h-screen w-screen">
            <div>
                <div>{Text.artname2.text}</div>
                <div>{Text.artname3.text}</div>
                <div>{Text.artname3.text}</div>
            </div>
        </div>
    );
}