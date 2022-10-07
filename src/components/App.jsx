import { apiPixabay } from '../API';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
// import css from './App/App.modules.css';
// import './App.modules.css'
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Box } from '../Constants/Box';


class App extends Component {
  state = {
    page: 1,
    img: [],
    search: '',
    emptySearch: false,
    loadMoreBtn: false,
    isLoader: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, search } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      try {
        this.setState({
          isLoader: true,
          loadMoreBtn: false,
        });
        const resultApi = await apiPixabay(search, page);
        this.setState(prevState => ({
          img: [...prevState.img, ...resultApi.data.hits],
        }));
        this.checkImgArray(resultApi.data.hits);
        if (resultApi.data.total > page * 12) {
          this.setState({
            loadMoreBtn: true,
          });
        }
      } catch (error) {
        console.log(error);
        this.setState({ emptySearch: true });
      }
      finally {
         this.setState({isLoader: false})
      }
    }
  }

  getValueForm = getSearchInput => {
    if (this.state.search === getSearchInput && this.state.page === 1) {
      return;
    }
    this.setState(() => ({ search: getSearchInput, img: [], page: 1 }));
  };

  checkImgArray = array => {
    if (!array.length) {
      this.setState({ emptySearch: true, loadMoreBtn: false });
    } else {
      this.setState({ emptySearch: false });
    }
  };

  loadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const { img, emptySearch, loadMoreBtn, isLoader} = this.state;
    return (

      <Box display="grid" gridTemplateColumns="1fr" gridGap="16px" pb="24px">
        <Searchbar onSubmit={this.getValueForm} />
        {emptySearch && <p>Ничего не найдено</p>}
        {img.length > 0 && <ImageGallery images={img} />}
        {loadMoreBtn && <Button onClick={this.loadMoreClick} />}
        {isLoader && <Loader/>}
      </Box>
    );
  }
}

export default App;
