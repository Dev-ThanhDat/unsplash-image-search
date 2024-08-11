import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchDataImages } from './api/config';
import ButtonPage from './components/ButtonPage';
import Filters from './components/Filters';
import FormSearch from './components/FormSearch';
import Images from './components/Images';

function App() {
  const searchInput = useRef(null);

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    const response = await fetchDataImages(
      searchInput.current.value,
      page,
      import.meta.env.VITE_IMAGES_PER_PAGE
    );
    setImages(response.results);
    setTotalPages(response.total_pages);
    setLoading(false);
  }, [page]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    resetSearch();
  };

  useEffect(() => {
    if (searchInput.current.value) {
      fetchImages();
    }
  }, [fetchImages]);

  return (
    <>
      <div className='container'>
        <h1 className='title'>Image Search</h1>
        <FormSearch
          handleSearch={handleSearch}
          searchInput={searchInput}
        />
        <Filters handleSelection={handleSelection} />
        {loading ? (
          <p className='loading'>Loading...</p>
        ) : (
          <>
            <Images images={images} />
            <ButtonPage
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
