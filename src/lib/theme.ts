export const colors = {
  piin: {
    light: 'bg-cyan-600/90 hover:bg-cyan-700/90 text-white',
    dark: 'dark:bg-cyan-700/80 dark:hover:bg-cyan-600/80',
  }
} as const

// استفاده: import { colors } from '@/lib/theme'
// className={`rounded-xl ${colors.piin.light} ${colors.piin.dark}`}
