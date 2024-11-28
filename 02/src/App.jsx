import { useState } from "react";
import "./App.css";

function App() {
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState([]);
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Smartphone", price: 20000 },
    { id: 3, name: "Tablet", price: 15000 },
  ];

  const popupHandle = (product = null) => {
    setPopup(!popup);
    if (product) setData(product);
  };

  let popupElement = null;
  if (popup) {
    popupElement = (
      <div className="popup">
        <div className="popupBg">
          <div
            style={{ cursor: "pointer", textAlign: "end" ,padding:'10px'}}
            onClick={popupHandle}
          >
            x
          </div>
          คุณเลือก {data.name}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="header">รายการสินค้า</h1>
      {popupElement}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <div className="productContainer">
          {products.map((product) => (
            <div
              onClick={() => popupHandle(product)}
              className="productFrame"
              key={product.id}
            >
              <div className="productName">{product.name}</div>
              <div className="productPrice">Price: ${product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
