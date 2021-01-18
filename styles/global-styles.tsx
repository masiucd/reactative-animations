import React from "react"
import { Global, css } from "@emotion/react"
import { jsx } from "@emotion/react"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *::before,
        *::after,
        * {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        html {
          font-family: sans-serif;
          font-size: 100%; /*16px*/
        }
        body {
          height: 100%;
          box-sizing: border-box;
          color: #333;
          font-weight: 400;
          line-height: 1.75;
          /* font-family: "Roboto", sans-serif;
          font-family: "Space Mono", monospace; */
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 3rem 0 1.38rem;
          font-family: "Space Mono", monospace;
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
