import { ThemeEnum } from 'enum/ThemeEnum';

const { LIGHT, DARK } = ThemeEnum;

const getTheme = (): ThemeEnum => {
  const theme: ThemeEnum = Number(localStorage.getItem('theme'));

  if (theme === DARK) {
    return DARK;
  }

  return LIGHT;
};

export default getTheme;
