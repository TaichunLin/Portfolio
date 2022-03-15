//const colors = require('tailwindcss/colors');
//Using the default colors outside extend -> gray: colors.gray | Aliasing color names -> gray: colors.slate,

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        asul: ['Asul', 'Roboto', 'monospace'],
        chivo: ['Chivo', 'Roboto', 'monospace'],
        cd: ['Cinzel Decorative', 'Roboto', 'monospace'],
        cg: ['Cormorant Garamond', 'Roboto', 'monospace'],
        eczar: ['Eczar', 'Roboto', 'monospace'],
        press: ['Press Start 2P', 'Roboto', 'monospace'],
        roboto: ['Roboto', 'monospace'],
        VT323: ['VT323', 'Roboto', 'monospace'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          50: withOpacity('--color-primary'),
          // 100: 'var(--color-primary-100)',
        },

        secondary: {
          50: withOpacity('--color-secondary'),
          100: 'var(--color-secondary-100)',
        },

        bg: withOpacity('--color-bg'),
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
