


export const TestButton = (props: { title: string }) => {
    return (
        <button className="max-w-[320px] max-h-[300px] w-full h-[300px]
            rounded-4xl bg-[#5D7C6DB5] border-[#5D7C6DB5] text-3xl
            border-10 hover:opacity-50 cursor-pointer focus:bg-white duration-200">
            {props.title}
        </button>
    );
}