import { useContext, useEffect, useRef, useState } from 'react';
import { SearchQueryContext } from '../../App';
import axios from 'axios';

export default function SearchPage() {
    const searchRef = useRef<any>(null);
    const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    function debounce(cb: any, delay = 1000) {
        let searchTimeout: any;
        return (...args: any) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                cb(...args);
            });
        };
    }
    function getSearchSuggestions(e: any) {
        console.log(e.target.value);

        const searchTimeout = setTimeout(async () => {
            clearTimeout(searchTimeout);
            let str = '';
            if (e.target.value === '') {
                str += '+';
            } else {
                str += e.target.value;
            }
            try {
                const res = await axios.get(`https://jiosaavn-api-obviously-cloned.vercel.app/api/search?query=${str}`);
                setSearchSuggestions(res.data);
            } catch (error: any) {
                console.log(error.message);
            }
        }, 1000);
    }

    useEffect(() => {
        console.log(searchQuery);
    }, [searchQuery]);

    useEffect(() => {
        console.log(searchSuggestions);
    }, [searchSuggestions]);

    function searchBtnClick() {
        setSearchQuery(searchRef.current.value);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (searchRef.current) {
                setSearchQuery(searchRef.current.value);
            }
        }
    });

    return (
        <>
            <div id="search-bar" className="flex m-auto items-center mt-3 bg-light rounded-full w-3/4 focus-within:outline focus-within:outline-primary-200 focus-within:outline-1 md:w-1/3">
                <div className="w-full text-center">
                    <input ref={searchRef} onChange={getSearchSuggestions} id="search-bar" className="px-2 mx-2 my-2 md:my-1 w-full bg-light text-dark text-sm placeholder:text-md focus:outline-none focus:border-none" placeholder="search for your favourite song" type="text"></input>
                </div>
                <div onClick={searchBtnClick} className="w-8 cursor-pointer">
                    <span className="text-gray-500 bi bi-search"></span>
                </div>
            </div>
        </>
    );
}
