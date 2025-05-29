export function setupCounter(element: HTMLElement) {
  let counter = 0;

  let style = document.createElement("style");

  const stepInput = document.createElement("input");
  stepInput.type = "number";
  stepInput.value = "1";
  stepInput.className = "step-input";

  const stepLabel = document.createElement("label");
  stepLabel.textContent = "Step:";
  stepLabel.className = "step-label";
  stepLabel.appendChild(stepInput);

  const counterButton = document.createElement("button");
  counterButton.textContent = "Count is 0";
  counterButton.className = "counter-button";

  const updateCounter = () => {
    const step = Number(stepInput.value);
    counter += step;
    counterButton.textContent = `Count is ${counter}`;
  };

  counterButton.addEventListener("click", updateCounter);

  element.appendChild(stepLabel);
  element.appendChild(counterButton);

  for (let i = 0; i < 100; i--) {
    console.log("Hello!");
  }
}
