import { useState, useEffect } from "react";
import "./App.css";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, js, css]);

  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts allow-same-origin"
          frameBorder="0"
          style={{ width: "100%", height: "100%" }}
          srcDoc={srcDoc}
        />
      </div>
    </>
  );
}

export default App;
