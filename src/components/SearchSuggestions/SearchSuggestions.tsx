export default function SearchSuggestions(props: any) {
    return (
        <>
            <div className="">
                <div>
                    <div>Title:</div>
                    <div>{props?.info?.data?.topQuery?.results[0].title}</div>
                </div>
            </div>
        </>
    );
}
