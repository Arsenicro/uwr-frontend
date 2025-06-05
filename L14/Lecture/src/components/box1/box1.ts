import styles from "./style.module.scss";

export function setupBox1(element: HTMLElement): void {
  const box1 = document.createElement("div");

  box1.className = styles.box;

  element.appendChild(box1);
}
