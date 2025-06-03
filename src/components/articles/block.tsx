import { Text } from "./Text";


export const Block = (props: { title?: string[]; bgColor?: string }) => {
   return (
        <div className="grid grid-cols-3 gap-y-10 p-5 gap-x-150">
            {Text.text.map((title) => (
                <div className="border h-[198px] w-[336px] rounded-[42px] flex items-center justify-center border-gray-300" style={{ backgroundColor: props.bgColor }}>
                    <div className="text-center text-2xl font-[400]">{title}</div>
                </div>
            ))}
        </div>
    );
}