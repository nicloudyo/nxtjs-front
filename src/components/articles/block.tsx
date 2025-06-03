import { text } from "../../utils/textblock.data";


export const Block = (props: { title?: string[]; bgColor: string }) => {
   return (
        <div className="grid border grid-cols-3 gap-y-10 p-5 gap-x-150">
            {text.text.map((title, index) => (
                <div key={index} className={`bg-[${props.bgColor}] border h-[198px] w-[336px] rounded-[42px] flex items-center justify-center border-gray-300`}>
                    <div className="text-center text-2xl font-[400]">{title}</div>
                </div>
            ))}
        </div>
    );
}