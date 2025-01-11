import { ColorThemeStyle, ColorThemeName } from "@/types/colorTheme";

import {
  dryadBark,
  white,
  errigalWhite,
  gainsboro,
  coralRed,
  vegetation,
  astrograniteDebris,
  aswadBlack,
  washedBlack,
  softPetals,
  translucentUnicorn,

  softSilver,

  deepSlate,
  deepCharcoal,
  deepSlateGray,

  petrolSlumber,
  midnightTeal,
  whisperingMist
} from "@/const/styles/colors";

export const defaultColorThemeName: ColorThemeName = 'light';

export const lightTheme: ColorThemeStyle = {
  colors: {
    text: dryadBark,
    background: errigalWhite,
    componentBackground: white,
    border: gainsboro,
    info: vegetation,
    infoBg: softPetals,
    danger: coralRed,
    dangerBg: translucentUnicorn,
    baseBgLevel1: softSilver,
    baseBgLevel2: white,
    card: white,
  },
};

export const darkTheme: ColorThemeStyle = {
  colors: {
    text: white,
    background: aswadBlack,
    componentBackground: washedBlack,
    border: astrograniteDebris,
    info: vegetation,
    infoBg: softPetals,
    danger: coralRed,
    dangerBg: translucentUnicorn,
    baseBgLevel1: deepSlate,
    baseBgLevel2: deepCharcoal,
    card: deepSlateGray,
  },
};

export const neutralTonesWithDepth: ColorThemeStyle = {
  colors: {
    text: white,
    background: aswadBlack,
    componentBackground: washedBlack,
    border: astrograniteDebris,
    info: vegetation,
    infoBg: softPetals,
    danger: coralRed,
    dangerBg: translucentUnicorn,
    baseBgLevel1: petrolSlumber,
    baseBgLevel2: midnightTeal,
    card: midnightTeal,
  }
}

export const themeNameStyleMap: { [key in ColorThemeName]: ColorThemeStyle} = {
  light: lightTheme,
  dark: neutralTonesWithDepth,
}

export const defaultColorThemeStyle = themeNameStyleMap[defaultColorThemeName];