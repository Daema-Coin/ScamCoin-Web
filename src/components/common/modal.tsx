import styled from "styled-components";
import { useEffect } from "react";
import { useModal } from "@/stores";

export const Modal = () => {
  const { isOpen, modalData, closeModal } = useModal(state => ({
    isOpen: state.isOpen,
    modalData: state.modalData,
    closeModal: state.closeModal,
  }));

  const { children } = modalData;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [isOpen]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <Modals>
      <ModalDropdown
        onClick={() => {
          closeModal();
        }}
      />
      <ModalContents>
        <div>{children}</div>
      </ModalContents>
    </Modals>
  );
};

const Modals = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;

  background-color: rgb(0 0 0 / 60%);
`;

const ModalDropdown = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ModalContents = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #cacaca;

  background-color: #fff;
  min-width: 370px;
  box-shadow: 0 0 10px rgb(0 0 0 / 25%);
`;
