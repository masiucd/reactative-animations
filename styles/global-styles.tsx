import React from "react"
import { Global, css } from "@emotion/react"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        :root {
          /* Define Colors as colors */
          --green: #4fc4cf;
          --red: #ff5470;
          --yellow: #fde24f;
          --blueGreen: #7fdbca;
          --orange: #ff8906;
          --purple: #6246ea;
          --black: #1b2d45;
          --dark: #0e182a;
          --dark2: #232946;
          --pink: #eebbc3;
          --white: #fffffe;
          --greyish: #b8c1ec;
          --blackTransparent: rgba(27, 45, 69, 0.4);
          --white: #feffff;
          --darkBlue: #00214d;
          --grey: #bfbfbf;
          --gradient-bg1: #12c2e9;
          --gradient-bg2: #f64f59;
          --gradient-bg3: #c471ed;
          --lightGrey: #f2f4f6;
          --transparentDark: rgba(0, 0, 0, 0.05);
          --transparentDark2: rgba(0, 0, 0, 0.1);
          --transparentDark3: rgba(0, 0, 0, 0.06);
          /* Define Colors intentions */
          --primary: var(--green);
          --danger: var(--red);
          --background: var(--lightGrey);
          --headerAndFooterBg: var(--black);
          --headerAndFooterColor: var(--white);
          --textColor: var(--black);
          --border-left-color: var(--black);
          /* elements */
          --bg: var(--dark);
          --paragraph: var(--greyish);
          --button: var(--green);
          --button-text: var(--dark);
          --link-color: var(--dark2);
          --stroke-color: var(--dark2);
          /* Styles */
          --line: solid 1px var(--lineColor);
          /* Elevations */
          --shadowXs: 0 0 0 1px var(--transparentDark);
          --shadowS: 0 1px 2px 0 var(--transparentDark);
          --shadow: 0 1px 3px 0 var(--transparentDark2),
            0 1px 2px 0 var(--transparentDark3);
          --shadowMd: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadowLg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadowXl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --shadow2Xl: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
          --shadowInner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
          --shadowOutline: 0 0 0 3px rgba(66, 153, 225, 0.5);
          /* Type */
          --headingFont: "Space Mono", monospace;
          --bodyFont: "Roboto", sans-serif;
          --h1: 3.052em;
          --h2: 2.441em;
          --h3: 1.953em;
          --h4: 1.563em;
          --h5: 1.25em;
          --smallText: 0.8em;
          /* positioning */
          --containerPadding: 2.5%;
          --headerHeight: 10rem;
          --max-width: 970px;
          /* Utils */
          --border-radius: 4px;
          --border-radius-M: 6px;
          --border-radius-L: 8px;
          --border-radius-XL: 12px;
          /* transitions */
          --main-trans: 300ms ease-in all;
          --secondary-transition: 500ms ease-in all;
        }
        *::before,
        *::after,
        * {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        html {
          font-size: 100%; /*16px*/
        }
        body {
          height: 100%;
          box-sizing: border-box;
          color: #333;
          font-weight: 400;
          line-height: 1.75;
          background: var(--background);
          color: var(--textColor);
          font-family: var(--bodyFont);
        }

        body[data-theme="light"] {
          --textColor: var(--black);
          --background: var(--white);
          --lineColor: var(--green);
          --stroke-color: var(--red);
        }
        body[data-theme="dark"] {
          --textColor: var(--white);
          --background: var(--dark);
          --lineColor: var(--green);
          --stroke-color: var(--blueGreen);
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 3rem 0 1.38rem;
          font-family: var(--headingFont);
          font-weight: 400;
          line-height: 1.3;
        }

        p {
          margin-bottom: 1rem;
        }

        h1 {
          margin-top: 0;
          font-size: 3.052rem;
        }

        h2 {
          font-size: 2.441rem;
        }

        h3 {
          font-size: 1.953rem;
        }

        h4 {
          font-size: 1.563rem;
        }

        h5 {
          font-size: 1.25rem;
        }

        small,
        .text_small {
          font-size: 0.8rem;
        }
      `}
    />
  )
}

export default GlobalStyles
