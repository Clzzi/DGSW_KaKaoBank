import { ThemeEnum } from 'enum/ThemeEnum';
import { useRecoilValue } from 'recoil';
import { themeMode } from 'store/theme';
import { darkTheme, fontTheme, lightTheme } from 'styles/Theme';
import { ITheme } from 'types/theme/theme.type';

const useTheme = () => {
  const { LIGHT } = ThemeEnum;
  const mode: ThemeEnum = useRecoilValue(themeMode);

  const theme: ITheme = {
    color: mode === LIGHT ? lightTheme : darkTheme,
    font: fontTheme,
  };

  return theme;
};

export default useTheme;
