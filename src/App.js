import { Provider } from 'react-redux';
import store from './store'
import TransferList from './components/TransferList';

function App() {
  return (
    <>
      <Provider store={store}>
        <TransferList />
      </Provider>      
    </>
  );
}

export default App;
