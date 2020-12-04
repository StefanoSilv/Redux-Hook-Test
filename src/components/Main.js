import { useDispatch } from 'react-redux';
import { changeBackgroundColor } from '../reducers/backgroundColor';
import { changeFontSize } from '../reducers/fontSize';

function Main() {
  const dispatch = useDispatch();
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
    </>
  );
}

export default Main;
