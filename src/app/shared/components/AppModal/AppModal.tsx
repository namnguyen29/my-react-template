import { createPortal } from 'react-dom';

export const AppModal = () => {
  return (
    <div className="modal-container border border-solid border-red-400">
      {createPortal(<p className="fixed bottom-0 text-red-400">my portal</p>, document.body)}
    </div>
  );
};
