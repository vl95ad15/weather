export function createEl(tagName, className) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  return element;
}

export function clearInput() {
  document.getElementById("search-form").reset();
}

export function clearRootElement() {
  const rootElement = document.querySelector("#root");
  rootElement.querySelectorAll("*").forEach((n) => n.remove());

  return rootElement;
}
