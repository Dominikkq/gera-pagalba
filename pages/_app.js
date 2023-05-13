import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";

import Meta from "../components/Meta";
import UserContext from "../components/UserContext";
import { useEffect, useRef } from "react";
import "./css/Loading.css";
import "./css/Checkmark.css";

import "./css/DateTimePicker.css";
import "./css/Clock.css";
import "./css/tooltip.css";
import "./css/Calendar.css";
import "./css/btns.css";
import "./css/table.css";
import "./css/profile.css";
import "./css/testimonials.css";
import "./css/body.css";
import "./css/Loading.css";
import "./css/settings.css";
const cors = require("cors");
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  useEffect(() => {}, []);

  return (
    <>
      <Meta title="Home 1 || Xhibiter | NFT Marketplace Next.js Template" />

      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <UserContext.Provider value={{ scrollRef: scrollRef }}>
            {pid === "/login" ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </UserContext.Provider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
