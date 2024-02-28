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

  // Remove view code panel button
  editor.Panels.removeButton("options", "export-template");

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

    // const url = document.location.href;
    // const url = "https://chepapest.com/admin/landing_page/edit/1";
    // const id = url.split("/").pop();

    const dataObj = {
      id,
      html: `${html}`,
      css: `${css}`,
      projectData,
    };

    const projectEndpoint = `https://chepapest.com/api/dev/user/landing-page/${id}/save`;

    // Send data
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
          styles: `
            .gjs-mdl-header {
              height: 50rem !important;
            }
            `,
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
