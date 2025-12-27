import { loadPyodide } from "pyodide";

let pyodide;

export async function runPython(code) {
  if (!pyodide) pyodide = await loadPyodide();

  try {
    const result = await pyodide.runPythonAsync(code);
    return { output: String(result ?? ""), error: "" };
  } catch (e) {
    return { output: "", error: e.toString() };
  }
}
