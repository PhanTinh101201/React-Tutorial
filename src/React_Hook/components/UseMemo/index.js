import React, { useState, useMemo, useRef } from "react";

export default function ReactUseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);

  const nameRef = useRef();

  const handelSubmit = () => {
    setProduct([...product, { price: Number(price), name: name }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = product.reduce((result, prod) => {
      console.log("Tính Toán Lại");
      return result + prod.price;
    }, 0);

    return result;
  }, [product]);

  console.log("total", total);

  return (
    <div className="App">
      <h6>name</h6>
      <input
        ref={nameRef}
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <h6>price</h6>
      <input
        value={price}
        type="text"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button style={{ margin: "20px" }} onClick={handelSubmit}>
        submit
      </button>
      <br />
      Total: {total}
      <ul>
        {product.map((item, index) => {
          return (
            <li key={index}>
              {item.price} - {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
