import React, { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import SearchForm from "../../components/search/SearchForm";
import ResultList from "../../components/search/ResultList";
import { apiConfig } from "../../components/api/apiConfig";
import "./Search.css";
// Hien thi trang tim kiem
const Search = () => {
    const [results, setResults] = useState([]);
    // Xu ly logic khi tim kiem phim
    const handleFetchSearch = async (searchInput) => {
        if (!searchInput) return;
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${searchInput}&api_key=${apiConfig.API_KEY}&language=en-US&page=1&include_adult=false`
            );

            const data = await response.json();

            setResults(data.results);

            return data;
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="search-app">
            <NavBar />
            <div className="search-form">
                <SearchForm onSearch={handleFetchSearch} />
            </div>
            <div className="search-list">
                <ResultList movies={results} />
            </div>
        </div>
    );
};

export default Search;
