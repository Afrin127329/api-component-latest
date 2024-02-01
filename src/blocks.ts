import { Editor } from "grapesjs";

export default (editor: Editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("MY-BLOCK", {
    label: "My block",
    content: { type: "MY-COMPONENT" },
    // media: '<svg>...</svg>',
  });
};
