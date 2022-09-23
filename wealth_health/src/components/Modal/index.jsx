import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

import logo from './logo.png';

/**
 * @description Modal
 *
 * @param   {string}  props.title
 * @param   {string}  props.text
 * @param   {string}  props.image
 * @param   {boolean}  props.show
 * @param   {function}  props.onClose
 * @returns {Reactnode}  jsx injected in DOM
 */

const Modal = ({ show, title, image, onClose, text }) => {
  const modal = (
    <div className="modal">
      <div className="modal-container">
        {image && <img className="container-image" src={logo}></img>}
        <h3 className="modal-title">{title}!!!</h3>
        <p className="modal-text">{text}</p>
        <button
          className="close-button"
          onClick={() => {
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );

  return show ? ReactDOM.createPortal(modal, document.body) : null;
};

//il est parfois utile d’insérer un enfant à un autre emplacement du DOM 
// React *ne crée pas* une nouvelle div, mais affiche les enfants dans le Domnode.
// Domnode peut être n’importe quel élément valide du DOM, peu importe sa position.

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  image: PropTypes.string,
};

export default Modal;
