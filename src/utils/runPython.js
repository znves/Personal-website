let pyodide = null;

export async function runPython(code) {
  try {
    if (!pyodide) {
      await loadPyodideFromCDN();
    }

    const result = await pyodide.runPythonAsync(code);
    return {
      output: result !== undefined ? String(result) : "",
      error: ""
    };
  } catch (err) {
    return {
      output: "",
      error: err.toString()
    };
  }
}

async function loadPyodideFromCDN() {
  if (window.loadPyodide) {
    pyodide = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
    });
    return;
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
    script.onload = async () => {
      pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
      });
      resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
