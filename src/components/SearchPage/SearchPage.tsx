import { useContext, useEffect, useRef, useState } from 'react';
import { SearchQueryContext } from '../../App';
// import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';

import axios from 'axios';

export default function SearchPage() {
    const searchRef = useRef<any>(null);
    const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);
    const [searchSuggestions, setSearchSuggestions] = useState<any>(null);

    useEffect(() => {
        // console.log(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        // console.log(searchSuggestions);
    }, [searchSuggestions]);

    function getSearchSuggestions(value: any) {
        console.log(value);
        // if (!value) {
        //     setSearchSuggestions('');
        //     return;
        // }
        // axios.get(`https://jiosaavn-api-obviously-cloned.vercel.app/api/search?query=${value}`).then((res) => {
        //     setSearchSuggestions(res.data);
        // });
    }

    function searchBtnClick() {
        if (!searchRef.current.value) return;
        setSearchQuery(searchRef.current.value);
        console.log(searchQuery);
    }

    // using this so that I can get search results on enter btn click
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (searchRef.current && searchRef.current.value != '') {
                setSearchQuery(searchRef.current.value);
            }
        }
    });

    return (
        <>
            <div>
                <div id="search-bar" className="relative flex m-auto items-center mt-3 bg-light rounded-full w-3/4 focus-within:outline focus-within:outline-primary-200 focus-within:outline-1 md:w-1/3">
                    <div className="w-full text-center">
                        <input ref={searchRef} onChange={(e) => getSearchSuggestions(e.target.value)} id="search-bar" className="px-2 mx-2 my-2 md:my-1 w-full bg-light text-dark text-sm placeholder:text-md focus:outline-none focus:border-none" placeholder="search for your favourite song" type="text"></input>
                    </div>
                    <div onClick={searchBtnClick} className="w-8 cursor-pointer">
                        <span className="text-gray-500 bi bi-search"></span>
                    </div>
                    <div id="search-suggestions" className="absolute top-9 w-full overflow-y-auto">
                        {/* <SearchSuggestions info={searchSuggestions} /> */}
                    </div>
                </div>
                <div className="p-4 text-light">asfadf</div>
            </div>
        </>
    );
}
