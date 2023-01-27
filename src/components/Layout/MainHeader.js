import { useDispatch, useSelector } from 'react-redux';
import cartShow, { cartShowActions } from '../../store/cartShow';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const isShown = useSelector(state => state.cartShow.cartShow)


  
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
