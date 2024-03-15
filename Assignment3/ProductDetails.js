import React, { useState } from 'react';

function ProductDetails() {
  const [pname, setPname] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [total, setTotal] = useState(0);

  function calculateTotal() {
    let discountedTotal = price * qty;
    if (qty >= 30) {
      discountedTotal *= 0.85; // 15% discount
    } else if (qty > 20) {
      discountedTotal *= 0.9; // 10% discount
    } else if (qty > 10) {
      discountedTotal *= 0.95; // 5% discount
    }
    setTotal(discountedTotal);
  }

  return (
    <>
    <fieldset>
    <legend>Product Details</legend>
        <label>Product Name: </label>
        <input type="text" placeholder="Prdouct Name" value={pname} onChange={(e) => setPname(e.target.value)} /> 
        <br/> <br/>   
        <label>Price: </label>  
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br/> <br/>
        <label>Quantity: </label>
        <input type="text" placeholder="Quantity" value={qty} onChange={(e) => setQty(e.target.value)} />
        <hr />

        <input type="button" onClick={calculateTotal} value="Calculate Total" />
        <p>Total Amount: Rs{total.toFixed(2)}</p>
        
    </fieldset>
    </>
 
  );
}

export default ProductDetails;
