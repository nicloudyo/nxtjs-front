

export const Title = (props: { title: string}) => {
    return (
        <h1 className="text-8xl font-[400] my-7">
            {props.title}
        </h1>
    );
}