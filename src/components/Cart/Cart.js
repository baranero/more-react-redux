import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const amount = useSelector(state => state.amount.amount)
  const price = 6

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {amount > 0 ? <CartItem
          item={{ title: 'Test Item', quantity: amount, total: amount*price, price: price }}
        /> : ""}
      </ul>
    </Card>
  );
};

export default Cart;
