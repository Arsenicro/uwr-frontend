import { css } from "@emotion/css";

export function setupBox2(element: HTMLElement, color: string): void {
  const box1 = document.createElement("div");
  const text = document.createElement("span");
  text.textContent = "Box 2";
  box1.appendChild(text);

  box1.className = css({
    width: "100px",
    height: "100px",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "20px",
    borderRadius: "10px",
    ":hover": {
      backgroundColor: "lightgray",
      color: "black",
    },
    span: {
      color: "black",
    },
  });

  element.appendChild(box1);
}
