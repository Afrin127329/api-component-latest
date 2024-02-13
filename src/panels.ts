import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  // Remove view code panel button
  console.log(editor.Panels.removeButton("options", "export-template"));
};
