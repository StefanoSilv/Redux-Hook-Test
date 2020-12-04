import { useSelector } from 'react-redux';
import './App.css';
import Main from './components/Main';
import { selectBackgroundColor } from './reducers/backgroundColor';
import { selectFontSize } from './reducers/fontSize';

function App() {
  const backgroundColor = useSelector(selectBackgroundColor);
  const fontSize = useSelector(selectFontSize);

  return (
    <div className='App' style={{ backgroundColor: backgroundColor }}>
      <Main />
      <p style={{ fontSize: fontSize }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export default App;
