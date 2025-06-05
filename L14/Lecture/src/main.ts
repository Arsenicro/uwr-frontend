import { setupBox3 } from "./components/box3/box3";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="container1"></div>
    <div id="container2"></div>
    <button class="btn btn-primary" id="button1">Click me</button>
  </div>
`;

/* setupBox1(document.querySelector("#container1")!);

document.getElementById("button1")!.addEventListener("click", () => {
  document.querySelector("#container2")!.innerHTML = "";
  setupBox2(
    document.querySelector("#container2")!,
    Math.random() < 0.5 ? "blue" : "green"
  );
});
 */

setupBox3(document.querySelector("#container1")!);
