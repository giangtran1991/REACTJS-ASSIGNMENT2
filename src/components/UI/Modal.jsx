import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
// Tao cua so modal de hien thi thong tin chi tiet bo phim khi click vao anh
const ModalOverlay = (props) => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
