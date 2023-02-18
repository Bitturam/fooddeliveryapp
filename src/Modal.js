import React from "react";
import ReactDom from "react-dom";
import CartDesign from "./components/CartDesign";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(34,34,34)",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
  overflow: "scroll",
  display: "flex",
  overflowX: "hidden",
  padding: "20px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ children, onClose, cartData }) {
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <button
          className="btn bg-danger fs-4"
          style={{ marginLeft: "90%", marginTop: "0px", zIndex: "1001" }}
          onClick={onClose}
        >
          {" "}
          X{" "}
        </button>{" "}
        {children}{" "}
      </div>
      <div style={MODAL_STYLES}>
        {cartData.map((data) => (
          <div>
            <CartDesign data={data} />
          </div>
        ))}
      </div>
    </>,
    document.getElementById("cart-root")
  );
}
