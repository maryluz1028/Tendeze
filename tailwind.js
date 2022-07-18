module.exports = {
    mode: 'jit',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: [
            './*.php',
            './templates/**/*.php',
            './build/js/**/*.js',
        ],
        content: ['*.php','./*.php','./**/*.php','./home.php'],
        options: {
            safelist: [],
            blocklist: [],
            keyframes: true,
            fontFace: true,
        },
    },
    theme: {
        screens:{
            'sm':	'640px',
            'md':	'768px'	,
            'lg':	'1024px',
            'xl':	'1280px',	
            '2xl':	'1400px',	
        },
        fontFamily: {
            prelo: 'prelo',
            times: 'times',
        },
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                    'yellow-color': '#fae800',
                    'black-color':'#231f20',
                    'white-color':'#fff',
                    'white-alpha-color':'rgba(255,255,255,90%)',
                    'yellow-alpha-color':'rgba(250,232,0,90%)',
                    'black-alpha-color':'rgba(35,31,32,90%)'

            },
            fontSize: {
                xxs: '0.675rem',
            },
            lineHeight: {
                tighter: '1.125',
            },
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: [
        ({addUtilities}) => {
            const utils = {
                '.translate-x-half': {
                    transform: 'translateX(50%)',
                },
            };
            addUtilities(utils, ['responsive'])
        }
    ]
};
