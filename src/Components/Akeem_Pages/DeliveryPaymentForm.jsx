import React, { useState } from "react";
import { MapPin, Smartphone, CreditCard, ChevronDown } from "lucide-react";
import "./DeliveryPaymentForm.css";

export default function DeliveryPaymentForm() {
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("Add your phone number");
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="container">
      {/* Delivery Address Section */}
      <div className="section">
        <h1 className="section-title">Delivery Address</h1>

        <div
          className="location-dropdown"
          onClick={() => console.log("Open location picker")}
        >
          <MapPin size={20} color="#000" />
          <span className="location-text">Select your location</span>
          <ChevronDown size={20} color="#000" />
        </div>

        <div className="phone-input-wrapper">
          <Smartphone size={24} color="#000" className="phone-icon" />
          <input
            type="tel"
            className="phone-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
          />
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="section">
        <h1 className="section-title">Payment Method</h1>

        <div
          className="payment-dropdown"
          onClick={() => console.log("Open payment options")}
        >
          <div className="payment-left">
            <CreditCard size={24} color="#000" />
            <span className="payment-text">Add a payment method</span>
          </div>
          <ChevronDown size={20} color="#000" />
        </div>

        <p className="required-text">Required field</p>
      </div>
    </div>
  );
}
