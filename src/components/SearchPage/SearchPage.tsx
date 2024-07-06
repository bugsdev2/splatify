import { useContext, useEffect, useRef, useState } from 'react';
import { SearchQueryContext } from '../../App';
// import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';

import axios from 'axios';
import debounce from 'lodash.debounce';
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';

export default function SearchPage() {
    const searchRef = useRef<any>(null);
    const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);
    const [searchSuggestions, setSearchSuggestions] = useState<any>(null);

    const getSearchSuggestions = debounce(async (...args) => {
        if (!searchQuery) alert('Please Enter a Song/Album/Artist Name');
        setSearchQuery(...args);
        try {
            const res = await axios.get(`https://jiosaavn-api-obviously-cloned.vercel.app/api/search?query=${args.join()}`);
            setSearchSuggestions(res.data);
        } catch (err: any) {
            console.log(err.message);
        }
    }, 1000);

    useEffect(() => {
        // console.log(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        // console.log(searchSuggestions);
    }, [searchSuggestions]);

    function searchBtnClick() {
        setSearchQuery(searchRef.current.value);
        console.log(searchQuery);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (searchRef.current && searchRef.current.value != '') {
                setSearchQuery(searchRef.current.value);
                console.log(searchQuery);
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
                    {/* <div id="search-suggestions" className="absolute top-10 w-full rounded bg-darker text-light">
                        <div>
                            <SearchSuggestions info={searchSuggestions} />
                        </div>
                    </div> */}
                </div>
                <div className="p-4 text-light">Hello</div>
            </div>
        </>
    );
}
