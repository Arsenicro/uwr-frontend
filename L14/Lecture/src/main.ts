import { setupBox2 } from "./components/box2/box2";
import { setupBox1 } from "./components/box1/box1";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="container1"></div>
    <div id="container2"></div>
  </div>
`;

setupBox1(document.querySelector("#container1")!);
setupBox2(document.querySelector("#container2")!);
