import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import FaceDetectionProvider from "./Providers/FaceDetectionProvider";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <FaceDetectionProvider>
      <Router />
      <ToastContainer />
    </FaceDetectionProvider>
  );
}

export default App;
