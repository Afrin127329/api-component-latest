import { Editor, Plugin } from "grapesjs";
import loadBlocks from "./blocks";
import loadComponents from "./components";
import loadPanels from "./panels";
import loadTraits from "./traits";

// Plugin options
export type PluginOptions = {
  /**
   * Inecessary plugin options
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
  token?: any;
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor: Editor, opts = {}) => {
  // Putting the token inside Form component
  let token = document.querySelector('[name="_token"]');

  token = document.head.querySelector('meta[name="csrf-token"]');

  const options: RequiredPluginOptions = {
    blocks: ["productform"],
    id: ["productform"],
    label: ["Product Form"],
    block: () => ({}),
    style: "",
    styleAdditional: "",
    classPrefix: "productform",
    token: token,
    ...opts,
  };

  // Add components & blocks
  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadTraits(editor);
  loadPanels(editor, options);
};

export default plugin;
