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
    blocks: ["productform"],
    id: ["productform"],
    label: ["Product Form"],
    block: () => ({}),
    style: "",
    styleAdditional: "",
    classPrefix: "productform",
    ...opts,
  };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);

  // let postData = null;

  // async function fetchData() {
  //   try {
  //     let response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  //     let data = await response.json();
  //     postData = data;

  //     return postData;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // postData = fetchData();
  // console.log(postData);
};

export default plugin;
