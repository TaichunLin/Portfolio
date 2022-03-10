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
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        asul: ['Asul', 'monospace'],
        chivo: ['Chivo', 'monospace'],
        cd: ['Cinzel Decorative', 'monospace'],
        cg: ['Cormorant Garamond', 'monospace'],
        eczar: ['Eczar', 'monospace'],
        ps: ['Press Start 2P', 'monospace'],
        roboto: ['Roboto', 'monospace'],
        VT323: ['VT323', 'monospace'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        whiteAlt: 'var(--color-white-alt)',
        'button-muted': withOpacity('--color-button-muted'),
      },
    },
  },
  plugins: [],
};
