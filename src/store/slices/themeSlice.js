import { createSlice } from '@reduxjs/toolkit';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
  OCEAN: 'ocean',
  SUNSET: 'sunset',
};

const storedTheme = localStorage.getItem('theme') || THEMES.DARK;

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    current: storedTheme,
  },
  reducers: {
    setTheme: (state, action) => {
      state.current = action.payload;
      localStorage.setItem('theme', action.payload);
      document.documentElement.setAttribute('data-theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const selectTheme = (state) => state.theme.current;