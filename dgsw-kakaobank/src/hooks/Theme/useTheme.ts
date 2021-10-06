import { ThemeEnum } from 'enum/ThemeEnum';
import { useRecoilValue } from 'recoil';
import { themeMode } from 'store/theme';
import { darkTheme, fontTheme, lightTheme } from 'styles/Theme';
import { ITheme } from 'types/theme/theme.type';

const useTheme = () => {
  const mode: ThemeEnum = useRecoilValue(themeMode);
  const { LIGHT } = ThemeEnum;

  const theme: ITheme = {
    color: mode === LIGHT ? lightTheme : darkTheme,
    font: fontTheme,
  };

  return theme;
};

export default useTheme;
