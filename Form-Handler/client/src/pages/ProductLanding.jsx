import React, { useRef, useEffect } from 'react';
import './ProductLanding.css';

export default function ProductLanding() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const product = productRef.current?.value;

    alert(`Product Registration Details:\nName: ${name}\nEmail: ${email}\nModel: ${product}`);
  };

  return (
    <div className="product-landing">
      <div className="card">
        <div className="header">
          <div className="header-gradient"></div>
          <div className="header-content">
            <h1 className="header-title">Product Registration</h1>
            <p className="header-subtitle">Sign up to activate your warranty and unlock exclusive perks.</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              ref={nameRef}
              className="input"
              placeholder="Jane Doe"
              data-testid="input-name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="input"
              placeholder="jane@example.com"
              data-testid="input-email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="product" className="label">
              Product Model
            </label>
            <div className="select-wrapper">
              <select
                id="product"
                ref={productRef}
                className="select"
                data-testid="select-product"
              >
                <option value="Standard">Standard</option>
                <option value="Pro">Pro</option>
                <option value="Ultra">Ultra</option>
              </select>
              <div className="select-icon">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="button-container">
            <button
              type="submit"
              className="button"
              data-testid="button-submit"
            >
              Complete Registration
            </button>
          </div>
        </form>
        
        <div className="footer">
          <span className="footer-emoji">✨</span>
          <p className="footer-text">
            This design was brought to life by your AI model companion.
          </p>
          <span className="footer-emoji">✨</span>
        </div>
      </div>
    </div>
  );
}
