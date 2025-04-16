import chroma from "chroma-js";
import "./App.css";

const colours = chroma.scale(["#fafa6e", "#2A4858"]).colors(6);

const cssVars = colours.map((hex, i) => {
  const [h, s, l] = chroma(hex).hsl(); // hue in deg, sat/lum in 0–1
  return `--chart-${i + 1}: ${h.toFixed(1)} ${(s * 100).toFixed(1)}% ${(
    l * 100
  ).toFixed(1)}%;`;
});

function App() {
  return (
    <>
      {cssVars.map((color, i) => (
        <div key={color} style={{ display: "flex", alignItems: "center" }}>
          <pre style={{ marginRight: "0.2rem" }}>{color}</pre>
          <span
            style={{
              display: "inline-block",
              backgroundColor: colours[i],
              height: "1rem",
              width: "1rem",
              borderRadius: "0.2rem",
            }}
          />
        </div>
      ))}
    </>
  );
}

export default App;
