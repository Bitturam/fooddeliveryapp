import React from "react";

export default function CartDesign(props) {
  const pstyle = { margin: "0" };
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "370px" }}
        >
          <img
            src={props.data.img}
            className="card-img-top"
            alt="..."
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.data.name}</h5>
            <div className="container w-100">
              <p style={pstyle}>Quantity:{props.data.qty}</p>
              <p style={pstyle}>Price :{props.data.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
