import { Editor } from "grapesjs";

export default (editor: Editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("MY-COMPONENT", {
    model: {
      defaults: {
        // Default props
      },
    },
    view: {},
  });
};
