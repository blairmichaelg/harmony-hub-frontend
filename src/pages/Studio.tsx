import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVolume } from '../store/slices/audioSlice';
import { RootState } from '../store/store';

const Studio: React.FC = () => {
  const volume = useSelector((state: RootState) => state.audio.volume);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Studio</h1>
      <p>Volume: {volume}</p>
      <button onClick={() => dispatch(setVolume(Math.random()))}>Change Volume</button>
    </div>
  );
};

export default Studio;
