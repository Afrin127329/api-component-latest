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
    // Get current project data
    const projectData = editor.getProjectData();
    // Load project data
    const data = editor.loadProjectData(projectData);
    // console.log(data.pages);

    // Store data
    // const storedProjectData = await editor.store({
    //   data: { html, css },
    // });

    // // Load data
    // const loadedProjectData = await editor.load();

    // //   editor.Storage.add('remote', {
    // //       store(data, options) {
    // //           return {data}
    // //       },
    // //   })
    // console.log(storedProjectData);
    //   const url = document.location.href;

    const url = "https://chepapest.com/admin/landing_page/edit/1";
    const id = url.split("/").pop();

    const projectEndpoint = `https://chepapest.com/api/dev/user/landing-page/${id}/save`;

    editor.Commands.add("publishSite", {
      run: function (editor, sender) {
        sender && sender.set("active", 0); // turn off the button
        editor.store();
        console.log(editor.store());

        var htmldata = editor.getHtml();
        var cssdata = editor.getCss();
        $.post(projectEndpoint, {
          html: htmldata,
          css: cssdata,
        });
      },
    });

    // console.log(data);
  });
};
