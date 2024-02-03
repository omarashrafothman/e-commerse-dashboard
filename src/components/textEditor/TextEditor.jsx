import { createContext, useContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
export const EditorContext = useContext();
function TextEditor(props) {
  const editorInstanceRef = useRef(null);
  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */

      tools: {
        header: Header,
        list: List,
      },
    });
    editorInstanceRef.current = editor;
  };

  return (
    <TextEditor.Provider
      value={{ initEditor, editorInstanceRef }}
    ></TextEditor.Provider>
  );
}
export default TextEditor;
