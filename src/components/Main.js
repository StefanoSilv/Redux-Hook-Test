import { useDispatch, useSelector } from 'react-redux';
import { changeBackgroundColor } from '../reducers/backgroundColor';
import { changeFontSize, selectFontSize } from '../reducers/fontSize';
import {
  selectRotate,
  startRotationDelayed,
  stopRotation,
} from '../reducers/rotate';

import './Main.css';

function Main() {
  const dispatch = useDispatch();
  const fontSize = useSelector(selectFontSize);
  const rotateBoolean = useSelector(selectRotate);

  return (
    <>
      <div>
        <input
          type='text'
          id='backGroundColor'
          name='backGroundColor'
          placeholder='Insert the new background color'
          onChange={(e) => dispatch(changeBackgroundColor(e.target.value))}
        ></input>
      </div>
      <div>
        <input
          type='number'
          id='fontSize'
          name='fontSize'
          placeholder='Insert the font size'
          onChange={(e) => dispatch(changeFontSize(`${e.target.value}rem`))}
        ></input>
      </div>
      <p
        style={{ fontSize: fontSize }}
        className={rotateBoolean ? 'rotate' : ''}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <button
          onClick={() => {
            dispatch(startRotationDelayed());
          }}
        >
          Rotate in 2 seconds
        </button>
        <button onClick={() => dispatch(stopRotation())}>Stop Rotation</button>
      </div>
    </>
  );
}

export default Main;
