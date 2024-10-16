import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-cfdromon)']
  		},
  		fontSize: {
  			'responsive-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 1rem)',
  			'responsive-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1.25rem)',
  			'responsive-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)',
  			'responsive-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.75rem)',
  			'responsive-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 2rem)',
  			'responsive-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.5rem)',
  			'responsive-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 3.25rem)',
  			'responsive-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 4rem)',
  			'responsive-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 5.5rem)',
  			'responsive-6xl': 'clamp(3.75rem, 3.1rem + 3.25vw, 7rem)',
  			'responsive-7xl': 'clamp(4.5rem, 3.7rem + 4vw, 8.5rem)',
  			'responsive-8xl': 'clamp(6rem, 4.9rem + 5.5vw, 11.5rem)',
  			'responsive-9xl': 'clamp(8rem, 6.5rem + 7.5vw, 15.5rem)',
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		backdropFilter: {
  			none: 'none',
  			blur: 'blur(10px)'
  		},
  		mixBlendMode: {
  			difference: 'difference'
  		}
  	}
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.nav-sticky': {
          '@apply bg-black bg-opacity-50': {},
          '@supports (backdrop-filter: blur(10px))': {
            '@apply backdrop-blur': {},
          },
        },
        '.nav-sticky::before': {
          content: "''",
          '@apply absolute inset-0 bg-white pointer-events-none mix-blend-difference':
            {},
        },
        '.image-shadow': {
          '-webkit-box-shadow': '0px 0px 30px -25px rgba(0,0,0,0.59)',
          '-moz-box-shadow': '0px 0px 30px -25px rgba(0,0,0,0.59)',
          'box-shadow': '0px 0px 30px -25px rgba(0,0,0,0.59)',
        },
        '.full-opacity-to-transparent': {
          'mask-image':
            'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          '-webkit-mask-image':
            '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
        },
				'.safe-area-top': {
					'padding-top': 'env(safe-area-inset-top)',
				},
				'.safe-area-bottom': {
					'padding-bottom': 'env(safe-area-inset-bottom)',
				},
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
} satisfies Config

export default config
