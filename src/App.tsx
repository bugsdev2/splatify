import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen/SplashScreen.tsx';
import Player from './components/Player/Player.tsx';
import SearchPage from './components/SearchPage/SearchPage.tsx';

export const SearchQueryContext = React.createContext<any>([]);

export default function App() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <>
            <SearchQueryContext.Provider value={[searchQuery, setSearchQuery]}>
                {/* <SplashScreen /> */}
                <SearchPage />
                <Player />
            </SearchQueryContext.Provider>
        </>
    );
}
