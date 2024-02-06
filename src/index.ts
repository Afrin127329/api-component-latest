import { Editor, Plugin } from "grapesjs";
import loadBlocks from "./blocks";
import loadComponents from "./components";

// Plugin options
export type PluginOptions = {
  /**
   * ID, label, CSS(component), Additional CSS and component class prefix used to create block and component and object to extent the default block
   * @default 'api'
   * @default 'API'
   * @default ''
   * @default ''
   * @default 'api'
   */
  id?: string[];
  label?: string[];
  style?: string;
  block?: (blockId: string) => {};
  styleAdditional?: string;
  classPrefix?: string;
  blocks?: string[];
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor: Editor, opts = {}) => {
  const options: RequiredPluginOptions = {
    blocks: ["product", "form"],
    id: ["product", "form"],
    label: ["Product", "Product Form"],
    block: () => ({}),
    style: "",
    styleAdditional: "",
    classPrefix: "user",
    ...opts,
  };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);

  // TODO Remove
  // editor.on("load", () =>
  //   editor.addComponents(
  //     `<div style="margin:100px; padding:25px;">
  //           Content loaded from the plugin
  //       </div>`,
  //     { at: 0 }
  //   )
  // );

  editor.Blocks.add("form", {
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>`,
    label: "Product Form",
    category: "Extra",
    select: true,

    content: {
      type: "form",
      components: [
        {
          components: [
            { type: "label", components: "Name" },
            { type: "input" },
          ],
        },
        {
          components: [
            { type: "label", components: "Email" },
            { type: "input", attributes: { type: "email" } },
          ],
        },
        {
          components: [
            { type: "label", components: "Gender" },
            { type: "checkbox", attributes: { value: "M" } },
            { type: "label", components: "M" },
            { type: "checkbox", attributes: { value: "F" } },
            { type: "label", components: "F" },
          ],
        },
        {
          components: [
            { type: "label", components: "Message" },
            { type: "textarea" },
          ],
        },
        {
          components: [{ type: "button" }],
        },
      ],
    },
  });
};

export default plugin;
