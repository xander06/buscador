import React from 'react'
import { useState} from "react";
import Results from "./Results";
import styled from 'styled-components';



const SearchBarContainer = styled.div`
  position: relative;
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
        <SearchBarContainer>
         <div className='cantidadRes'>{results && <div>{results.length} Results</div>}</div>
            
            <StyledInput
                type={"text"}
                onChange={handleOnChange}
                value={query}
            ></StyledInput>
             <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>              
            
            <Results
                items={items}
                query={query}
                onItemSelected={onItemSelected }
                onResultsCalculated={handleResults}
            />
        </SearchBarContainer>
    );
}

export default SearchBar