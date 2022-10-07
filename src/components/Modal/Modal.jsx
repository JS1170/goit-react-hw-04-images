// import css from './components/Modal/Modal.modules';
import { createPortal } from 'react-dom';
import { OverlayModal, ModalStyle } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const refHtml = document.querySelector('html');
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, img, alt }) {
  useEffect(() => {
  const closeBtnEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      };
    };

    window.addEventListener('keydown', closeBtnEscape);
    refHtml.classList.add('openModalScroll');

    return () => {
      window.removeEventListener('keydown', closeBtnEscape);
      refHtml.classList.remove('openModalScroll');
    };
  }, [onClose]);

  const closeBackdrop = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <OverlayModal onClick={closeBackdrop}>
      <ModalStyle>
        <img src={img} alt={alt} />
      </ModalStyle>
    </OverlayModal>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
