import { Component } from 'react';
// import css from './components/Modal/Modal.modules';
import { createPortal } from 'react-dom';
import { OverlayModal, ModalStyle } from './Modal.styled';
import PropTypes from 'prop-types';


const refHtml = document.querySelector('html');
const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };



  componentDidMount() {
    window.addEventListener('keydown', this.closeBtnEscape);
    refHtml.classList.add('openModalScroll');
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeBtnEscape);
    refHtml.classList.remove('openModalScroll');
  }

  closeBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  closeBtnEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { img, alt } = this.props;
    return createPortal(
      <OverlayModal onClick={this.closeBackdrop}>
        <ModalStyle>
          <img src={img} alt={alt} />
        </ModalStyle>
      </OverlayModal>, modalRoot
    );
  }
}

export default Modal;