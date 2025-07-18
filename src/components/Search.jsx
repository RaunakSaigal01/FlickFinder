import React,{useState} from 'react';
import './Search.css';
const Search=({onSearch})=>{
    const [query,setQuery]=useState('');
    const handleSearh=(e)=>{
        e.preventDefault();
        onSearch(query);
    };
    return(
        <form  className='search' onSubmit={handleSearh}>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}
            placeholder='Search...' className='srch'/>
            <button type='submit'>Search</button>
        </form>
    )
}

export default Search;
