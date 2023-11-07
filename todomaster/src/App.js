import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router1 from "./routes/route";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router1} />
    </ThemeProvider>
  );
}

export default App;
