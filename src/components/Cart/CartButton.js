import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartShowActions } from '../../store/cartShow';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const amount = useSelector(state => state.amount.amount)
  const isShown = useSelector(state => state.cartShow.isShown)
  const dispatch = useDispatch()

  const showCart = () => {
    if (!isShown) {
      dispatch(cartShowActions.isNotEmpty())
    }
    if (isShown) {
      dispatch(cartShowActions.isEmpty())
    }
      
    
}
  return (
    <button onClick={showCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
}

export default CartButton
