import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitlize tex-center">
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
          <img
            src={img}
            alt="product"
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
        <span className="d-lg-none">product : {title}</span>
        {title}
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
        <span className="d-lg-none">price : {price}</span>
        {price}
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mx-1" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="d-flex justify-content-center">
        <strong>item total : $ {total}</strong>
        </div>
      </div>
    </div>
  );
}
