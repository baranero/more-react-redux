import { useDispatch, useSelector } from 'react-redux';
import { amountActions } from '../../store/amount';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch()
  const amount = useSelector(state => state.amount.amount)

  const incrementAmount = () => {
    dispatch(amountActions.increment({ id, title, price }))
  }

  const decrementAmount = () => {
    dispatch(amountActions.decrement(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button disabled={amount === 0} onClick={decrementAmount}>-</button>
          <button onClick={incrementAmount}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
