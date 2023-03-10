import { radii } from './../../../tokens/src/radii'
import { lineHeights } from './../../../tokens/src/line-heights'
import { colors, fonts, fontSizes, fontWeights, space } from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap:{  
    ...defaultThemeMap,
    height:'space',
    width:'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
