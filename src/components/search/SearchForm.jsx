import React, { useState } from "react";
import "./SearchForm.css";
// Tao form tim kiem
const SearchForm = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <form>
            <div className="inner-form">
                <div className="basic-search">
                    <div className="input-field">
                        <input
                            value={searchInput}
                            type="search"
                            id="search"
                            placeholder="Search..."
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                            }}
                        />
                        <div className="icon-wrap">
                            <svg
                                className="svg-inline--fa fa-search fa-w-16"
                                fill="#ccc"
                                aria-hidden="true"
                                data-prefix="fas"
                                data-icon="search"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="advance-search">
                    <div className="row third">
                        <div className="input-field">
                            <div className="result-count">
                                <div className="group-btn">
                                    <button
                                        className="btn-delete"
                                        id="delete"
                                        type="button"
                                        onClick={() => setSearchInput("")}
                                    >
                                        RESET
                                    </button>
                                    <button
                                        className="btn-search"
                                        type="button"
                                        onClick={() => onSearch(searchInput)}
                                    >
                                        SEARCH
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
