import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemGrid from "./Components/ItemGrid";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <ItemGrid />
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;