// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: ["class"],
//     content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//   	extend: {
//   		colors: {
//   			background: 'var(--background)',
//   			foreground: 'var(--foreground)'
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //   },
    //   screens: {
    //     sm: '100%',
    //     md: '540px',
    //     lg: '720px',
    //     xl: '992px',
    //     '2xl': '1320px',
    //   },
    // },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    //   xxl: "1700px",
    },
    container: {
      center: true,
      padding: "1rem",
    //   screens: {
    //     sm: "540px",
    //     md: "720px",
    //     lg: "960px",
    //     xl: "1200px",
    //     xxl: "1320px",
    //   },
    },
	fontFamily:{
		primary:"var(--font-jetbrainsMono)"
	},
    
    extend: {

		colors: {
			brand: {
			  DEFAULT: '#FF2800',
			},
			accent:{
				DEFAULT:'#00ff99',
				hover:"#00e187"
			},
			primary:'#1c1c22',
			darkGreen:'#13484E',
			graniteGray: '#696767',
			light_yellow:"#FCAA47",
			scarlet: '#ff280017',
			crimson: '#E50F0F',
			caramel: '#FFD88D',
			palePink: '#F8D7DA',
			light_black:"#5C5C5C",
			bloodOrange: '#D70014',
			lightGray: '#D6CFCF',
			cultured: '#F6F6F6',
			islamicGreen: '#029A11',
			magicMint: '#B6FFBD',
			mistyRose: '#FDE3DE',
			doctorPale: '#F9F9F9',
			broadGray: '#EBEAEA',
			brandColor: '#FFF2F0',
			successBackground: '#B6FFBD',
			successText: '#029A11',
			skeletonColor: '#00000013',
		  //   ...colors,
		  },

		keyframes: {
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
			"caret-blink": {
			  "0%,70%,100%": { opacity: "1" },
			  "20%,50%": { opacity: "0" },
			},
		  },
		  animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			"caret-blink": "caret-blink 1.25s ease-out infinite",
		  },
    
    boxShadow: {
      socialLinks: '0px 5px 15px rgba(0, 0, 0, 0.35) ',
      filters: '0px 0px 9px 0px #FFD4CC',
      bookProperty: '0px 2px 8px 0px rgba(0, 0, 0, 0.12);',
    },
  },
  },
}


