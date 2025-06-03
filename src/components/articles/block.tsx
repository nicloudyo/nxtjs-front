import { Text } from "./Text";


export const Block = (props: { title: string; bgColor?: string }) => {
    return (
        <div 
            className="border h-[198px] w-[336px] rounded-[42px] items-center justify-center flex border-gray-300" 
            style={{ backgroundColor: props.bgColor }}
        >
            <div className="text-center text-2xl font-[400] my-7">
                {props.title}
            </div>
        </div>
    );
}
type BlocksContainerProps = {
    bgColor?: string; 
};
export const BlocksContainer = ({ bgColor }: BlocksContainerProps) => {
    return (
        <div className="grid grid-cols-3 gap-20 gap-x-150 px-">
            {Text.text.map((title, index) => (
                <Block 
                    key={index} 
                    title={title} 
                    bgColor={bgColor}
                />
            ))}
        </div>
    );
}