// import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { ImageGalleryItemLi, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ImageGalleryItem({ webformatURL, largeImageURL, alt }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // const openModal = () => setIsOpenModal(true);
  // const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <ImageGalleryItemLi>
        <Img
          src={webformatURL}
          alt={alt}
          onClick={() => setIsOpenModal(true)}
        />
      </ImageGalleryItemLi>
      {isOpenModal && (
        <Modal img={largeImageURL} alt={alt} onClose={() => setIsOpenModal(false)}></Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

