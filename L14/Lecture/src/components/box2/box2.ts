import "./style.css";

export function setupBox2(element: HTMLElement): void {
  const box1 = document.createElement("div");

  box1.className = "box";

  element.appendChild(box1);
}
