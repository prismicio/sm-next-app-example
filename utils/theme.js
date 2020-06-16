import theme from 'essential-slices/src/theme'
import { merge } from 'theme-ui'

export default merge(theme, {
  ...theme,
  container: {
    ...theme.container,
    slice: {
      background: '#F7F7F7',
    },
    eyebrow: {
      color: 'tomato',
    },
    item: {
      background: '#FFF',
      border: '1px solid #111',
      padding: '12px',
    },
  },
})