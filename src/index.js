import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Data } from "./Data";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="display">
      <h1 className="heading">LIST OF TOP 5 NETFLIX SERIES IN 2022</h1>
      <div className="flex">
        <App
          imgscr={Data[0].imgsrc}
          title={Data[0].title}
          name={Data[0].name}
          href={Data[0].href} />

        <App
          imgscr={Data[1].imgsrc}
          title={Data[1].title}
          name={Data[1].name}
          href={Data[1].href} />

        <App
          imgscr={Data[2].imgsrc}
          title={Data[2].title}
          name={Data[2].name}
          href={Data[2].href} />

      </div>
      <div className="flex">
        <App
          imgscr={Data[3].imgsrc}
          title={Data[3].title}
          name={Data[3].name}
          href={Data[3].href} />
        <App
          imgscr={Data[4].imgsrc}
          title={Data[4].title}
          name={Data[4].name}
          href={Data[4].href} />
      </div>
    </div>
  </>
);