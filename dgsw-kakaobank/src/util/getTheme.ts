import { ThemeEnum } from 'enum/ThemeEnum';

const { DARK, LIGHT } = ThemeEnum;

export const getTheme = () => {
  const theme: ThemeEnum = Number(localStorage.getItem('theme'));
  // theme이 1이면 다크모드, 0이면 라이트모드
  if (theme === DARK) {
    return DARK;
  }

  return LIGHT;
};
