export default function SearchPage() {
    return (
        <>
            <div id="search-bar" className="flex m-auto items-center mt-3 bg-light rounded-full w-3/4 focus-within:outline focus-within:outline-primary-200 focus-within:outline-1 md:w-1/3">
                <div className="w-full text-center">
                    <input id="search-bar" className="px-2 mx-2 my-2 md:my-1 w-full bg-light text-dark text-sm placeholder:text-md focus:outline-none focus:border-none" placeholder="search for your favourite song" type="text"></input>
                </div>
                <div className="w-8 cursor-pointer">
                    <span className="text-gray-500 bi bi-search"></span>
                </div>
            </div>
        </>
    );
}
