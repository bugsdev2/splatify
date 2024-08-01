export default function SearchSuggestions(props: any) {
    return (
        <>
            <div className="text-light">
                <div>Top Query</div>
                <div className="">{props?.info?.data?.topQuery?.results[0]?.title}</div>
                {props?.info?.data?.songs ? <div>Songs</div> : null}
                {props?.info?.data?.songs?.results.map((item: any) => {
                    return <div className="ps-5">{item.title}</div>;
                })}
            </div>
        </>
    );
}
