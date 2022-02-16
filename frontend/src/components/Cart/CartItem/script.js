import './styles.scss';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cart-item-name">
        <p>{item.name}</p>
      </Link>
      <p className="cart-item-price">$ {item.price}</p>

      <select
        className="cart-item-select"
        value={item.qty}
        onChange={e => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(10).keys()].map(x => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="cart-item-deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
