import getContrastRatio from 'get-contrast-ratio'

/**
 * Calculate which color in an array of colors gives the highest contrast to another color.
 *
 * @param background A string that can be parsed as a CSS color
 * @param colors An array of strings that can be parsed to CSS colors
 * @return The color from colors that has the highest contrast to background
 */
const getBestContrastColor = (background: string, colors: string[] = []): string =>
  colors.reduce((acc, color) =>
    getContrastRatio(background, color) > getContrastRatio(background, acc) ? color : acc,
  )

export default getBestContrastColor
