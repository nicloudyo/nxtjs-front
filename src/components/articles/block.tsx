import { Text } from "./Text";


export const ArtBlock = (props: { title: string }) => {
    return (
        <div className="border h-[198px] w-[336px] bg-[#76A34F99] rounded-[42px] items-center justify-center flex border-gray-300">
            <div className="text-center text-2xl font-[400] my-7">
                {props.title}
            </div>
        </div>
    );
}
export const TestBlock = (props: { title: string }) => {
    return (
        <div className="border h-[198px] w-[336px] bg-[#BFDAD9] rounded-[42px] items-center justify-center flex border-gray-300">
            <div className="text-center text-2xl font-[400] my-7">
                {props.title}
            </div>
        </div>
    );
}
export const  ArtBlocksContainer = () => {
    return (
        <div className="grid grid-cols-3 gap-20 gap-x-150 px-">
            {Text.text.map((title, index) => (
                <ArtBlock key={index} title={title} /> 
            ))}
        </div>
    );
}
export const  TestBlocksContainer = () => {
    return (
        <div className="grid grid-cols-3 gap-20 gap-x-150 px-">
            {Text.text.map((title, index) => (
                <TestBlock key={index} title={title} /> 
            ))}
        </div>
    );
}