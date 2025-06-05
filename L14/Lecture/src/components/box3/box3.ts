export function setupBox3(element: HTMLElement): void {
  const box = document.createElement("div");

  /* box.className =
    "w-[100px] h-[100px] bg-blue-900 hover:bg-blue-50 transition-colors duration-300 md:bg-blue-500 lg:bg-yellow-700 xl:bg-green-900";
 */

  const color = "bg-yellow-400";

  //box.className = `w-[100px] h-[100px] ${color}`;

  box.className = "box";

  element.appendChild(box);
}
