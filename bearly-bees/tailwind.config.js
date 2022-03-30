module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['Open Sans', 'sans-serif'],
        'hind-font': ['Hind', 'sans-serif'],
        'font-robot': ['Roboto', 'sans-serif'],
        'robot-condensed': ['Roboto Condensed', 'sans-serif'],
        'robot-slab': ['Roboto Slab', 'serif'],
        'source-serif': ['Source Serif Pro', 'serif'],
        'font-smooch': ['Smooch Sans','sans-serif']

      },
      backgroundImage: theme => ({
        'mm-lakes':
          'url(https://www.mercurynews.com/wp-content/uploads/2018/10/MAMMOTH5.jpg)',
        'bb-mountain':
          'url(https://www.bigbearmountainresort.com/-/media/widen/big-bear-mountain-resort/scenic/winter/2021-bb-ls-parkinglots-drone-jpg.ashx?h=1350&w=2400&hash=73F0A5457CB1AAB4146758943DA36862)',
          'retro-game-one': 
          'url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700812861.jpg)',
          'retro-game-two':
          'url(https://wallpapercave.com/wp/wp2210347.jpg)'
      })
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp')
  ],
}
