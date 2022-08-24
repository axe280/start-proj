import {
  addDocumentScrollBlocker,
  removeDocumentScrollBlocker,
} from '../ui/documentScrollBlocker.js';
import MicroModal from 'micromodal';

export const initModals = () => {
  MicroModal.init({
    disableFocus: true,
    awaitCloseAnimation: true,
    onShow: () => addDocumentScrollBlocker('.header-inner'),
    // onClose: () => removeDocumentScrollBlocker('.header-inner'),
  });

  const modals = document.querySelectorAll('.modal .modal-overlay');

  modals.forEach((animationSelector) => {
    animationSelector.addEventListener('animationend', (e) => {
      if (e.animationName === 'modalCloseAnimation') {
        removeDocumentScrollBlocker();
      }
    });
  });
};
