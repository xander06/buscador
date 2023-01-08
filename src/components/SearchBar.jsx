import React from 'react'
import { useState, useCallback, useMemo } from "react";
import Results from "./Results";

/* 

const SearchBarContainer = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  min-width: 400px;
  box-sizing: border-box;
  border: solid 1px #222;
  outline: none;
`;
 */
const SearchBar = ({ items, onItemSelected }) => {

    const [query, setQuery] = useState("a");
    const [results, setResults] = useState([]);

    function handleOnChange(e) {
        const value = e.target.value;
        setQuery(value);
    }

    function handleResults(items) {
        setResults(items);
    }

    return (
        <div>
            {results && <div>{results.length} results</div>}
            <input
                type={"text"}
                onChange={handleOnChange}
                value={query}
            ></input>

            <Results
                items={items}
                query={query}
                onItemSelected={onItemSelected}
                onResultsCalculated={handleResults}
            />
        </div>
    );
}

export default SearchBar