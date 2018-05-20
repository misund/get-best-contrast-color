import getContrastRatio from 'get-contrast-ratio';

/**
 * Calculate wich color in a array of colors gives the highest contrast to another color.
 *
 * @param background string A string that can be parsed as a CSS color
 * @param colors array An array of strings that can be parsed to CSS colors
 * @return string The color from colors that has the highest contrast to background
 */
const getBestContrastColor = (background, colors = []) => (
  colors.reduce((acc, color) => (
    getContrastRatio(background, color) > getContrastRatio(background, acc)
      ? color
      : acc
  ))
);

export default getBestContrastColor;
