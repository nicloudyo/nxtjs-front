
export const BlueBlock = (props: { title: string[]}) => {
    return (
        <div className="border h-[198px] w-[336px] bg-[#BFDAD9] rounded-[42px] items-center justify-center flex border-gray-300">
            <div className=" text-center text-2xl font-[400] my-7">
                {props.title}
            </div>
        </div>
    );
}