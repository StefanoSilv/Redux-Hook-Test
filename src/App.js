import { useSelector } from 'react-redux';
import './App.css';
import Main from './components/Main';
import { selectBackgroundColor } from './reducers/backgroundColor';

function App() {
  const backgroundColor = useSelector(selectBackgroundColor);

  return (
    <div className='App' style={{ backgroundColor: backgroundColor }}>
      <Main />
    </div>
  );
}

export default App;
