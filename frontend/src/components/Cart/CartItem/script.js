import './styles.scss';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img
          src="https://i.pinimg.com/originals/1b/36/b7/1b36b74eec13cba252aac5db1b9c2a2f.jpg"
          alt=""
        />
      </div>
      <Link to="/" className="cart-item-name">
        <p>Classic Hoodie</p>
      </Link>
      <p className="cart-item-price">$120</p>

      <select className="cart-item-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button className="cart-item-deleteBtn">
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
