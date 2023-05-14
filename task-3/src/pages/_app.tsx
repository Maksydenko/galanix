import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/provider/store";
import "@/assets/scss/globals.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
