import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity, selectCartTotalQuantity, selectCartTotalPrice } from './cartSlice';

const products = [
  { id: 1, name: 'Sản phẩm A', price: 20 },
  { id: 2, name: 'Sản phẩm B', price: 30 },
  { id: 3, name: 'Sản phẩm C', price: 15 },
];

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => dispatch(addItem(product))}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>

      <h3>Giỏ hàng của bạn</h3>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
              <div>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                <button onClick={() => dispatch(removeItem(item.id))}>Xoá</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <p>Tổng số lượng: {totalQuantity}</p>
      <p>Tổng tiền: ${totalPrice}</p>
    </div>
  );
}

export default ShoppingCart;