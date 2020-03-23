import { StyleSheet } from 'react-native'


export const COLORS = 
{
  TITLE_COLOR: "#9F2447",
  FONT_COLOR_NORMAL: "#797979",
  FONT_COLOR_DARK: "#4B4B4B"
}


export const globalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingBottom:20
  },
  screenContainer: {
    paddingTop: 40,
    flex: 1,
    paddingLeft:10,
    paddingRight:10
  },
  h1: {
    fontSize: 36,
    color: COLORS.FONT_COLOR_DARK
  },
  h2: {
    fontSize: 30,
    color: COLORS.FONT_COLOR_DARK
  },
  h3: {
    fontSize: 25,
    color: COLORS.FONT_COLOR_DARK
  },
  text: {
    fontSize: 17,
    color: COLORS.FONT_COLOR_NORMAL,
    lineHeight: 25
  },
  androidButtonText: {
    color: 'blue',
    fontSize: 20
  }
});