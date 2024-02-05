import { BlockProperties, Editor, Plugin } from "grapesjs";
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
  id?: string;
  label?: string;
  style?: string;
  block?: Partial<BlockProperties>;
  styleAdditional?: string;
  classPrefix?: string;
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor: Editor, opts = {}) => {
  const options: RequiredPluginOptions = {
    id: "user",
    label: "Product",
    block: {},
    style: "",
    styleAdditional: "",
    classPrefix: "user",
    ...opts,
  };

  // editor.Blocks.add("grapesjs-preset-webpage", {});

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
};

export default plugin;
