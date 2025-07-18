import { useState } from 'react'
import Header from './components/Header'
import Buttons from './components/Buttons'
import Search from './components/Search'
import List from './components/List'
import Slider1 from './components/Slider1'
import Faq from './components/Faq'
import Footer from './components/footer'
import Slider from './components/Slider'
import Nav from './components/Nav'
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css'
function App() {
  const API_KEY = '32fe0cbe';
  const [allFetchedMovies, setAllFetchedMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiPage, setApiPage] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('');
  const [currentType, setCurrentType] = useState('');
  const [visibleCount, setVisibleCount] = useState(4);



  const searchMovies = async (query, type = '', apiPageToFetch = 1) => {
    if (!query) return;

    if (apiPageToFetch === 1) {
      setAllFetchedMovies([]);
      setCurrentPage(1);
    }

    setCurrentQuery(query);
    setCurrentType(type);

    let apiUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${apiPageToFetch}`;
    if (type) {
      apiUrl += `&type=${type}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.Search) {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie) => {
          const detailsResponse = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`);
          return await detailsResponse.json();
        })
      );

      const updatedAllFetched = [...allFetchedMovies, ...detailedMovies];
      setAllFetchedMovies(updatedAllFetched);
      setTotalResults(parseInt(data.totalResults));
      setApiPage(apiPageToFetch);
    } else {
      setAllFetchedMovies([]);
      setTotalResults(0);
    }
  };

  const handleShowMore = () => {
  const newVisible = visibleCount + 4;
  if (newVisible <= allFetchedMovies.length) {
    setVisibleCount(newVisible);
  } else if (allFetchedMovies.length < totalResults) {
    // Fetch next API page if needed
    searchMovies(currentQuery, currentType, apiPage + 1);
  }
};

  const handlePageClick = (frontendPage) => {
  const neededMovies = frontendPage * 4;

  if (neededMovies > allFetchedMovies.length && allFetchedMovies.length < totalResults) {
    searchMovies(currentQuery, currentType, apiPage + 1);
  }

  setVisibleCount(neededMovies);
  setCurrentPage(frontendPage);
};

  const displayedMovies = allFetchedMovies.slice(0, visibleCount);



  return (
    <>
      <center>
        <Nav/>
        <Slider/>
        <div className='app'>
          <center><Header /></center>
          <Buttons onCatClick={(query, type) => searchMovies(query, type)} />
          <center><Search onSearch={searchMovies} /></center>
          <List movies={displayedMovies} />
        </div>
      {displayedMovies.length > 0 && displayedMovies.length < totalResults && (
        <button onClick={handleShowMore} className='show'>Show More...</button>
      )}
      <div className="pagination">
        {Array.from({ length: Math.ceil(allFetchedMovies.length / 4) }, (_, index) => (
          <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className='btn'
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Slider1/>
      <Faq/>
      <Footer/>
        </center>
    </>
  );
}

export default App;
