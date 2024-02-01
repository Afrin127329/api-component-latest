import { Editor } from "grapesjs";
import loadBlocks from "./blocks";
import loadComponents from "./components";

export default (editor: Editor, opts = {}) => {
  const options = {
    ...{
      // default options
    },
    ...opts,
  };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);

  // TODO Remove
  editor.on("load", () =>
    editor.addComponents(
      `<div style="margin:100px; padding:25px;">
            Content loaded from the plugin
        </div>`,
      { at: 0 }
    )
  );
};
