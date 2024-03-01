import type { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Panels } = editor;

  Panels.addButton("options", {
    id: "publishSite",
    active: true, // active by default
    className: "btn-toggle-borders",
    label: "Save as Template",
    command: "sw-visibility",
  });

  interface DataObject {
    id: string | null;
    html: string;
    css: string;
    projectData: any;
  }

  // Remove view code panel button
  editor.Panels.removeButton("options", "export-template");

  // Logic for sending data to the server after clicking on the btn
  const btn: any = editor.Panels.getButton("options", "publishSite");
  btn.on("change", async () => {
    // get html  & css from the editor
    const htmlString = editor.getHtml();
    const css = editor.getCss();

    const projectData = editor.getProjectData();

    // For removing the body tag
    const html = htmlString
      .replace(/<body[^>]*>/, "")
      .replace(/<\/body\s*>/, "");

    // get the Id from the location
    const url1 = document.location.href; //?id=33
    const url = new URL(url1);

    const params = new URLSearchParams(url.search);
    const id = params.get("id");

    const dataObj: DataObject = {
      id,
      html: `${html}`,
      css: `${css}`,
      projectData,
    };

    const projectEndpoint = `https://chepapest.com/api/dev/user/landing-page/${id}/save`;

    // Send data to the server
    async function sendData() {
      const response = await fetch(projectEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
      const res = await response.json();

      if (!res.project_data) {
        editor.Modal.open({
          title: "There was a server side error!",
        });
      } else {
        editor.Modal.open({
          title: "Your Page has been Published",
          content: "Thank you",
        });

        // Get and load current project data
        editor.loadProjectData(res.project_data);
      }
      console.log(res);
    }

    sendData();
  });
};
