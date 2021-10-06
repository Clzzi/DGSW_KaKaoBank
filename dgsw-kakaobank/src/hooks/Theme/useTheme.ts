import { ThemeEnum } from 'enum/ThemeEnum';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { themeMode } from 'store/theme';
import { darkTheme, lightTheme } from 'styles/ThemePalette';
import { ITheme } from 'types/theme/theme.type';
import getTheme from 'util/getTheme';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ThemeEnum>(themeMode);
  const { LIGHT, DARK } = ThemeEnum;

  const handleChangeTheme = useCallback((): void => {
    if (currentTheme === DARK) {
      localStorage.setItem('theme', '0');
      setCurrentTheme(LIGHT);
      return;
    }

    localStorage.setItem('theme', '1');
    setCurrentTheme(DARK);
  }, [DARK, LIGHT, setCurrentTheme, currentTheme]);

  const theme: ITheme = getTheme() ? darkTheme : lightTheme;

  return {
    theme,
    currentTheme,
    handleChangeTheme,
  };
};

export default useTheme;
