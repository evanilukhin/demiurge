module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: { enabled: true, content: ['./js/**/*.vue','./js/**/*.ts'] },
    theme: {
        extend: {
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            }
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography')
    ],
}
