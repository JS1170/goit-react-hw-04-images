import { apiPixabay } from '../API';
// import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
// import css from './App/App.modules.css';
// import './App.modules.css'
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Box } from '../Constants/Box';
import { useState, useEffect} from 'react';



export default function App() {
  const [page, setPage] = useState(1);
  const [img, setImg] = useState([]);
  const [search, setSearch] = useState('');
  const [emptySearch, setEmptySearch] = useState(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  
  useEffect(() => {
    async function gettingImgFunc() {
      try {
        setIsLoader(false);
        setLoadMoreBtn(false);
     
        const resultApi = await apiPixabay(search, page);
        setImg(prevImg => [...prevImg, ...resultApi.data.hits],
        );
       checkImgArray(resultApi.data.hits);
        if (resultApi.data.total > page * 12) {
          setLoadMoreBtn(true);
        }
      } catch (error) {
        console.log(error);
        setEmptySearch(true);
      }
      finally {
        setIsLoader(false)
      }
    }
    if (search) {
      gettingImgFunc();
    }
  }, [page, search])


  const getValueForm = getSearchInput => {
    if (search === getSearchInput &&page === 1) {
      return;
    }
    setSearch(getSearchInput);
    setImg([]);
    setPage(1);
  };

  const checkImgArray = array => {
    if (!array.length) {
      setEmptySearch(true);
      setLoadMoreBtn(false);
    } else {
      setEmptySearch(false);
    }
  };

  const loadMoreClick = () => {
   setPage(prevPage => prevPage + 1)
  }

 
    // const { img, emptySearch, loadMoreBtn, isLoader} = this.state;
  return (

      <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
      <Searchbar onSubmit={getValueForm} />
        {emptySearch && <p>Ничего не найдено</p>}
        {img.length > 0 && <ImageGallery images={img} />}
        {loadMoreBtn && <Button onClick={loadMoreClick} />}
        {isLoader && <Loader/>}
      </Box>
    );
  }


// export default App;
