import { defaultColorThemeName } from "@/const/colorTheme";

import { getColorThemeCookie, setColorThemeCookie } from "@/utils/cookie/colorTheme";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectColorTheme, updateColorTheme } from "@/lib/features/theme/colorThemeSlice";

import { themeNameStyleMap } from "@/config/styles/colorTheme";

import { ColorThemeName, ColorThemeStyle, isColorThemeName } from "@/types/colorTheme";

/**
 * 
 * Custom hook for handling color themes
*/

const useColorTheme = () => {
  const dispatch = useAppDispatch();
  const currentColorTheme = useAppSelector(selectColorTheme);
  // const currentColorThemeState = useAppSelector(selectColorTheme);

  /**
   * Set color theme cookie and state
   *
   * @param {ColorThemeName} colorThemeName
  */
  
  const setColorTheme = (colorThemeName: ColorThemeName) => {
    setColorThemeCookie(colorThemeName);
    dispatch(updateColorTheme(colorThemeName));
  };

  /**
   * Initialize color theme cookie and state
   *
   * @return {void}
  */
  
  const initColorTheme = () => {
    const currentColorThemeCookie = getColorThemeCookie();

    if (!currentColorThemeCookie || !isColorThemeName(currentColorThemeCookie)) {
      setColorTheme(defaultColorThemeName);
      return;
    }

    dispatch(updateColorTheme(currentColorThemeCookie))
  };
  
  /**
   * 
   * @return {*} ColorThemeName
  */
  const getCurrentColorThemeState = (): ColorThemeName => (
    currentColorTheme
  );
  
  /**
   * 
   * @return {*}  {ColorThemeStyle}
  */
  const getCurrentColorThemeStyle = (): ColorThemeStyle => (
    themeNameStyleMap[currentColorTheme]
  );

  return {
    setColorTheme,
    initColorTheme,
    getCurrentColorThemeState,
    getCurrentColorThemeStyle
  };
}

export default useColorTheme;
