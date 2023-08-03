import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';
import styles from './ConfirmOrderModal.module.css';
import Button from '../Button/Button';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>Order Confirmed</h2>
      </header>
      <div className={styles.content}>
        <p>Your order has been confirmed. Delivered in 5 minutes</p>
      </div>
      <footer className={styles.actions}>
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </Card>
  );
};

const ConfirmOrderModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ConfirmOrderModal;