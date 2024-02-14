import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  // Remove view code panel button
  editor.Panels.removeButton("options", "export-template");

  // Add new button for sending data to server
  editor.Panels.addButton("options", {
    id: "publishSite",
    active: true, // active by default
    className: "btn-toggle-borders",
    label: "Publish",
    command: "sw-visibility",
  });
  const btn: any = editor.Panels.getButton("options", "publishSite");
  btn.on("change", async () => {
    // get html  & css from the editor
    const html = editor.getHtml();
    const css = editor.getCss();

    // get the Id from the location
    //   const url = document.location.href;
    const url = "https://chepapest.com/admin/landing_page/edit/1";
    const id = url.split("/").pop();
    const dataObj = {
      id,
      html: `${html}`,
      css: `${css}`,
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
        // for redirecting to another page
        // redirect: 'follow'
      });
      const res = await response.json();
      console.log(res);
    }

    sendData();
  });
};
