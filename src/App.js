import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCardData } from './store/amount';

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const isShown = useSelector(state => state.cartShow.isShown)
  const cart = useSelector(state => state.amount)
  const notification = useSelector(state => state.cartShow.notification)

  useEffect(() => {

    if (isInitial) {
      isInitial = false
      return
    }

    dispatch(sendCardData(cart))

  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {!isShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
