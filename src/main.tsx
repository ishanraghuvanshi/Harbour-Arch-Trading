import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <div style={{ color: "white", padding: "2rem" }}>
    Test render – if you see this, React is working.
  </div>
);
