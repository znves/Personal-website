import Editor from "@monaco-editor/react";

export default function CodeEditor({ language, code, setCode }) {
  return (
    <Editor
      height="300px"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={v => setCode(v || "")}
    />
  );
}
