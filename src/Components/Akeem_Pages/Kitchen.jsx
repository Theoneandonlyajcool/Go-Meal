import React, { useState } from "react";
import { ChevronLeft, ShoppingBag } from "lucide-react";
import "./Kitchen.css";
import Paymodal from "./Paymodal";

const Kitchen = () => {
  // const [pay, setPay] = useState(false);
  const [PayModal, SetPayModal] = useState(false);

  const [items, setItems] = useState([
    { id: 1, name: "Yam and Sauce", price: 0, quantity: 0 },
    { id: 2, name: "Bread, egg and tea", price: 1500, quantity: 0 },
    { id: 3, name: "Meat pie", price: 2000, quantity: 0 },
    { id: 4, name: "A cup of coffee", price: 1000, quantity: 0 },
    { id: 5, name: "Waffles", price: 1500, quantity: 0 },
  ]);

  const updateQuantity = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const productsTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 2000;
  const service = 423.23;
  const total = productsTotal + deliveryFee + service;

  return (
    <div className="container">
      <div className="max-width">
        <div className="header">
          <ChevronLeft size={24} />
          <span className="header-text">Order summary</span>
        </div>

        <h1 className="title">Mama Kitchen</h1>

        <div className="layout">
          <div className="left-side">
            <p className="product-count">5 product from mama's kitchen</p>

            <div className="items-container">
              {items.map((item) => (
                <div key={item.id} className="item">
                  <div className="item-left">
                    <div className="quantity-control">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="quantity-button"
                      >
                        −
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="quantity-button"
                      >
                        +
                      </button>
                    </div>
                    <span className="item-name">{item.name}</span>
                  </div>
                  <span className="item-price">
                    ₦ {item.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="right-side">
            <div className="summary-card">
              <div className="summary-header">
                <h2 className="summary-title">Summary</h2>
                <div className="icon">
                  <ShoppingBag size={24} color="white" />
                </div>
              </div>

              <div className="summary-content">
                <div className="summary-row">
                  <span>Products</span>
                  <span>₦ {productsTotal.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery fee</span>
                  <span>₦ {deliveryFee.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Service</span>
                  <span>₦ {service.toFixed(2)}</span>
                </div>
              </div>

              <div className="divider">
                <div className="total-row">
                  <span className="total-text">Total</span>
                  <span className="total-text">
                    ₦{" "}
                    {total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>

              <button
                // onClick={({ Paymodal = { Paymodal } }) => setPay(true)}
                onClick={() => {
                  SetPayModal(true);
                  props.onOrderComplete({ total, items });
                }}
                className="pay-button"
              >
                Pay to order
              </button>
            </div>
          </div>
        </div>
      </div>
      {PayModal && <Paymodal closingOfPayModal={SetPayModal} />}
    </div>
  );
};

export default Kitchen;

// import React, { useState } from 'react';
// import MamaKitchen from './MamaKitchen';
// import OrderCompleted from './OrderCompleted';

// export default function App() {
//   const [showOrderComplete, setShowOrderComplete] = useState(false);
//   const [orderData, setOrderData] = useState(null);

//   const handleOrderComplete = (data) => {
//     setOrderData(data);
//     setShowOrderComplete(true);
//   };

//   return (
//     <>
//       {!showOrderComplete ? (
//         <MamaKitchen onOrderComplete={handleOrderComplete} />
//       ) : (
//         <OrderCompleted
//           orderData={orderData}
//           onClose={() => setShowOrderComplete(false)}
//         />
//       )}
//     </>
//   );
// }
