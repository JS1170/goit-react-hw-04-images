import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ImagesUl } from './ImageGallery.styled';
import PropTypes from 'prop-types';

 

const ImageGallery = ({ images }) => {
  return (
    <ImagesUl>
      {images.map(image => (
        <ImageGalleryItem
          key={image.webformatURL}
          webformatURL={image.webformatURL}
          alt={image.tags}
          largeImageURL={image.largeImageURL}
        ></ImageGalleryItem>
      ))}
    </ImagesUl>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
			webformatURL: PropTypes.string.isRequired,
			largeImageURL: PropTypes.string.isRequired,
			tags: PropTypes.string.isRequired,
    })
  )
};


export default ImageGallery;
