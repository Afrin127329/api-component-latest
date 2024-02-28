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

  editor.on("load", () => {
    // const url = document.location.href; //?id=33
    // const url = new URL("https://chepapest.com/admin/landing_page/edit/?id=1");
    // const params = new URLSearchParams(url.search);
    // const id = params.get("id");

    // const url = document.location.href;
    const url = "https://chepapest.com/admin/landing_page/edit/1";
    const id = url.split("/").pop();

    // get data
    async function getData() {
      try {
        const response = await fetch(
          `https://chepapest.com/api/dev/user/landing-page/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await response.json();

        if (res.data) {
          editor.setComponents(res.data.content);
          editor.setStyle(res.data.css);
        } else {
          editor.setComponents('<div class="cls">Start editing</div>');
        }
      } catch (error) {
        editor.Modal.open({
          title: "There was some server side error",
          content: "Sorry for inconvenience",
        });
      }
    }
    getData();
  });

  // Add components & blocks
  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadTraits(editor);
  loadPanels(editor, options);
};

export default plugin;
