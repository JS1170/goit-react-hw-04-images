import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { ImageGalleryItemLi, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
     alt: PropTypes.string.isRequired,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { webformatURL, largeImageURL, alt } = this.props;
    return (
      <>
        <ImageGalleryItemLi>
          <Img
            src={webformatURL}
            alt={alt}
            onClick={() => {
              this.openModal();
            }}
          />
        </ImageGalleryItemLi>
        {this.state.isOpenModal && (
          <Modal
            img={largeImageURL}
            alt={alt}
            onClose={this.closeModal}
          ></Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
