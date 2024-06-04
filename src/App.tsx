import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import RootProvider from "./Providers";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <RootProvider>
      <Router />
      <ToastContainer />
    </RootProvider>
  );
}

export default App;
