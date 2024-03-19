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
    ...opts,
  };

  editor.on("load", () => {
    const url1 = document.location.href; // ?id=33
    const url = new URL(url1);
    const params = new URLSearchParams(url.search);
    const id = params.get("id");

    //  Function for Recieving data from server and load it while initialization of the editor
    async function getData() {
      try {
        const response = await fetch(
          `${document.location.protocol+"//"+document.location.host}/api/dev/user/landing-page/${id}`,
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

          // const localEditorData: any = editor.getProjectData();
          // const editorData = res.data.project_data
          //   ? res.data.project_data
          //   : localEditorData;

          // if (res.data.content) {

          // editor.loadProjectData(JSON.parse(res.data.project_data));
          // } else {
          //   const storedData: any = localStorage.getItem("gjsProject");
          //   editor.loadProjectData(JSON.parse(storedData));
          // }

          localStorage.setItem("gjsProject", res.data.project_data);
        } else {
          editor.setComponents('<div class="cls">Start editing</div>');
          const storedData: any = localStorage.getItem("gjsProject");
          editor.loadProjectData(JSON.parse(storedData));
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

  editor.on("update", () => {
    const localData = editor.getProjectData();
    localStorage.setItem("gjsProject", JSON.stringify(localData));
  });

  // Add components & blocks
  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadTraits(editor);
  loadPanels(editor, options);
};

export default plugin;
