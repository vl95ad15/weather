export function createEl(tagName, className) {
  const element = document.createElement(tagName);
  if (className !== undefined) {
    element.className = className;
  }
  return element;
}

export function clearInput() {
  document.getElementById("search-form").reset();
}
