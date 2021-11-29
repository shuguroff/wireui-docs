const colors = require('tailwindcss/colors')

module.exports = {
    presets: [
        require('./vendor/ph7jack/wireui/tailwind.config.js')
    ],
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './storage/framework/views/*.php',
        './storage/framework/views/**/*.blade.php',
        './vendor/ph7jack/wireui/resources/**/*.blade.php',
        './vendor/ph7jack/wireui/ts/**/*.ts',
        './vendor/ph7jack/wireui/src/View/**/*.php'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blueGray: colors.blueGray,
                teal: colors.teal,
            },
            boxShadow: {
                soft: '3px 3px 16px #446b8d33',
            },
            zIndex: {
                '55': '55',
                '60': '60',
            },
            spacing: {
                '18': '4.5rem',
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
            width: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            },
            screens: {
                '3xl': '1600px',
                '4xl': '2560px',
            },
            maxWidth: {
                '8xl': '90rem',
                '9xl': '95rem'
            }
        },
    },
    variants: {
        extend: {
            textColor: ['focus-within'],
            borderWidth: ['hover', 'focus'],
            fontWeight: ['hover', 'focus'],
            margin: ['dark', 'responsive']
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}