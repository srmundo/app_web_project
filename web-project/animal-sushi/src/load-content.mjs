export function loadContent(url, container, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => console.error("Error al cargar el contenido:", error));
}

export function loadScriptOnce(scriptUrl) {
  const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
  if (existingScript) {
    existingScript.remove(); // Eliminar el script existente
  }
  const script = document.createElement("script");
  script.src = scriptUrl;
  document.body.appendChild(script);
}

export function removeScript(removeScriptUrl) {
  const scriptToRemove = document.querySelector(
    `script[src="${removeScriptUrl}"]`
  );
  if (scriptToRemove) {
    scriptToRemove.remove(); // Eliminar el script especificado
  }
}
