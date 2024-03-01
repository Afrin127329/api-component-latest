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
          `https://chepapest.com/api/dev/user/landing-page/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await response.json();

        // if (!res.data) {

        //   }
        if (res.data) {
          editor.setComponents(res.data.content);
          editor.setStyle(res.data.css);
          const localEditorData: any = editor.getProjectData();
          const editorData = res.data.project_data
            ? res.data.project_data
            : localEditorData;

          localStorage.setItem("gjsProject", editorData);
        } else {
          editor.setComponents('<div class="cls">Start editing</div>');
          const storedData: any = localStorage.getItem("gjsProject");
          console.log(storedData);
          editor.loadProjectData(JSON.parse(storedData));

          // const projectData: any = localStorage.getItem("gjsProject");
          // editor.Storage.add("gjsProject", {
          //   async load(options = {}) {
          //     console.log(JSON.parse(projectData));
          //     return JSON.parse(projectData);
          //   },
          //   async store(data, options = {}) {
          //     sessionStorage.setItem("gjsProject", JSON.stringify(data));
          //   },
          // });
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
    // editor.loadProjectData(localData);
    // console.log("updated");
    // console.log(localData);
  });

  // Add components & blocks
  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadTraits(editor);
  loadPanels(editor, options);
};

export default plugin;
