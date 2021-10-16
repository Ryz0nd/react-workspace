import { css, Global, ThemeProvider } from "@emotion/react";
import { theme } from "styles/theme";
import { normalize } from "styles/normalize";

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          h1, h2, h3, h4, h5, h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <div>Hello</div>
      </ThemeProvider>
    </>
  );
};

export default App;
