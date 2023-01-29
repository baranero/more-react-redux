import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { cartShowActions } from './store/cartShow';

let isInitial = true

function App() {
  const dispatch = useDispatch()
  const isShown = useSelector(state => state.cartShow.isShown)
  const cart = useSelector(state => state.amount)
  const notification = useSelector(state => state.cartShow.notification)

  useEffect(() => {
    const sendCardData = async () => {
      dispatch(cartShowActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))
      const response = await fetch('https://react-http-ff2de-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })
      if (!response.ok) {
        throw new Error('Sending cart dara failed.')
      }

      dispatch(cartShowActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    }

    if (isInitial) {
      isInitial = false
      return
    }

    sendCardData().catch((error) => {
      dispatch(cartShowActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    })
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
