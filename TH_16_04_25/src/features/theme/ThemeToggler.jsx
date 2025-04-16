import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

function ThemeToggler() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Theme</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Chuyển sang {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <div className={`app ${theme}`}>
        {/* Nội dung ứng dụng của bạn sẽ ở đây */}
        <p>Nội dung với theme: {theme}</p>
      </div>
    </div>
  );
}

export default ThemeToggler;