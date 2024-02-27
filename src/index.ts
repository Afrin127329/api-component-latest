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
  inlineCss?: boolean;
  updateStyleManager?: boolean;
  tableStyle?: Record<string, string>;
  cellStyle?: Record<string, string>;
  // resetBlocks?: true;
  // resetStyleManager?: true;
  // resetDevices?: true;
  // hideSelector?: true;
  // useXmlParser?: false;
};
export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = async (editor: Editor, opts = {}) => {
  const options: RequiredPluginOptions = {
    blocks: ["productform"],
    id: ["productform"],
    label: ["Product Form"],
    block: () => ({}),
    style: "",
    styleAdditional: "",
    classPrefix: "productform",
    inlineCss: true,
    updateStyleManager: true,
    cellStyle: {
      padding: "0",
      margin: "0",
      "vertical-align": "top",
    },
    tableStyle: {
      height: "150px",
      margin: "0 auto 10px auto",
      padding: "5px 5px 5px 5px",
      width: "100%",
    },
    // resetBlocks: true,
    // resetStyleManager: true,
    // resetDevices: true,
    // hideSelector: true,
    // useXmlParser: false,
    ...opts,
  };

  // Add components & blocks
  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadTraits(editor);
  loadPanels(editor, options);
};

export default plugin;
