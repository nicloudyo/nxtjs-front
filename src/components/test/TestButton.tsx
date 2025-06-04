


export const TestButton = (props: { title: string }) => {
    return (
        <button className="max-w-90 max-h-75 bg-[#5D7C6DB5] border-[#5D7C6DB5] border-10 hover:opacity-50 cursor-pointer focus:bg-white">
            {props.title}
        </button>
    );
}