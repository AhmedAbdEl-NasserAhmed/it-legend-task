import "./Modal.css";

import {
  cloneElement,
  isValidElement,
  useContext,
  useState,
  type ReactElement,
  type ReactNode
} from "react";
import { ModalContext, type ModalContextType } from "../../constants";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  const contextValue: ModalContextType = {
    open,
    setOpen
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

const Button = ({ children }: { children: ReactNode }) => {
  const context = useContext(ModalContext);

  console.log("hello");

  if (!context) return;

  const { setOpen } = context;

  return (
    <button type="button" onClick={() => setOpen(true)}>
      {children}
    </button>
  );
};

interface ModalChildProps {
  closeModal: () => void;
}

const Content = ({ children }: { children: ReactElement<ModalChildProps> }) => {
  const context = useContext(ModalContext);

  if (!context) return;

  const { open, setOpen } = context;

  const modalRoot = document.getElementById("modal");

  if (!modalRoot || !isValidElement(children)) return null;

  return (
    open &&
    createPortal(
      <div className="overlay">
        <div className="content">
          {cloneElement(children, { closeModal: () => setOpen(false) })}
        </div>
      </div>,
      modalRoot
    )
  );
};

Modal.Modal = Modal;

Modal.Trigger = Button;

Modal.Content = Content;

export default Modal;
