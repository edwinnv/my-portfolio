module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      maxHeight: {
        accordion: '75rem',
      },
      outline: {
        majorelleBlue: ['1px solid #7373F9', '8px'],
      },
      transitionProperty: {
        height: 'height',
      },
      lineHeight: {
        10: '3.938rem',
      },
      spacing: {
        9.5: '41px',
        '11.5/12': '96%',
      },
      boxShadow: {
        card: '0px 2px 6px #DCE0E7',
        main: '0px 5px 10px #DCE0E7',
        buttonHover: '0px 2px 2px #BAC6D8',
        selectedRow: '0px 0px 0px 2px #7373F9',
      },
      fontSize: {
        sm: '.875rem',
        md: '1.875rem',
        md2: '24px',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
      },
      fontWeight: {
        light: 300,
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      padding: {
        1.5: '5px',
      },
      borderWidth: {
        1: '1px',
      },
      width: {
        15: '67px',
        84: '335px',
        94: '480px',
        98: '410px',
        60: '60rem',
        card: '36.25rem',
        form: '944px',
      },
      height: {
        90: '350px',
        97: '25.375rem',
        110: '29.563rem',
        120: '31.063rem',
        card: '40.875rem',
        6.125: '98px',
      },
      colors: {
        'primary-portofolio': '#171718',
        'fill-portofolio': '#1C1E22',
        'white-portofolio': '#FFFFFF',
        'border-portofolio': '#26292D',
        'purple-portofolio': '#5C62EC',
        'purple-2-portofolio': '#3C40AE',
        'gray-portofolio': '#26292D',
        'acento-portofolio': '#85BFD1',
      },
      screens: {
        desktop: { min: '1050px' },
        tablet: { min: '750px' },
        '-tablet': { max: '750px' },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      screens: {
        '3xl': '1702px',
        '2xl': '1502px',
        xl: '1351px',
        lg: '1103px',
        md: '1007px',
        sm: '997px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-hamburgers'),
    // ...
  ],
};
