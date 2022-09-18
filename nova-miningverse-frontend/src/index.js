import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import WebFont from "webfontloader";
import App from "./App";

import { Connect } from "@stacks/connect-react";
import { Buffer } from "@stacks/common";
import { userSession } from "./components/Navbar";

global.Buffer = Buffer;

WebFont.load({
    google: {
        families: ['Poppins', "Urbanist:700,400"]
    }
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
    <Connect
      authOptions={{
        appDetails: {
          name: "Nova Miningverse",
          // todo:
          icon: window.location.origin + "/logo.png",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      }}
    >
      <App />
    </Connect>
  </React.StrictMode>
  );
    