


export const Block = (props: { title: string[]}) => {
    return (
        <div className="border h-[198px] w-[336px] bg-[#76A34F99] rounded-[42px] items-center justify-center flex border-gray-300">
            <div className=" text-center text-2xl font-[400] my-7">
                {props.title}
            </div>
        </div>
    );
}