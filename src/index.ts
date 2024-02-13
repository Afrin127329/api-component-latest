import { Editor, Plugin } from "grapesjs";
import loadBlocks from "./blocks";
import loadComponents from "./components";
import loadCommands from './commands';
import loadTraits from './traits'

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
  token?: any
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: Plugin<PluginOptions> = (editor: Editor, opts = {}) => {

  let token = document.querySelector('[name="_token"]'); 
  
  token = document.head.querySelector('meta[name="csrf-token"]')


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


  console.log(document)

  // Add components & blocks
  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadCommands(editor, options);
  loadTraits(editor);
};

export default plugin;
