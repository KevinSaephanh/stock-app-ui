import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
