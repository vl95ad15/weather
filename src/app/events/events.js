function setupEventListenerByClass(doc, elementClass, eventName, handler) {
  const element = doc.getElementById(elementClass);
  if (element !== null) {
    element.removeEventListener(eventName, handler);
    element.addEventListener(eventName, handler);
  }
}

function setupEventListener(element, eventName, handler) {
  if (element !== null) {
    element.removeEventListener(eventName, handler);
    element.addEventListener(eventName, handler);
  }
}

export default function setupEventListeners(doc, eventHandlers) {
  console.log("Setting up event listeners");

  eventHandlers.forEach((h) => {
    if (h.element === undefined) {
      setupEventListenerByClass(doc, h.elementClass, h.eventName, h.handler);
    } else {
      setupEventListener(h.element, h.eventName, h.handler);
    }
  });
}
