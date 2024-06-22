import { createPortal } from 'react-dom';

export const Modal = () => {
  return createPortal(
    <p
      style={{
        color: 'red',
        bottom: '0',
        position: 'fixed'
      }}
    >
      my portal
    </p>,
    document.body
  );
};
