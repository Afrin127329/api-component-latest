import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { id, label } = opts;

  const userPrefix = opts.classPrefix;
  const idContainer = `${id}-container`;

  Components.addType(id, {
    model: {
      defaults: {
        droppable: false,
        name: label,
        attributes: { class: userPrefix },
        components: { type: idContainer },
        styles:
          (opts.style ||
            `
          .${userPrefix} {
            background-color: rgb(94 255 50 / 58%);
            max-width: 20rem;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 5px 18px 11px #056518;
            margin: 1rem;
          }

          .${userPrefix}-container {
            max-width: 100%;
            margin: 0 auto;
            width: 95%;
          }

          .${userPrefix}-data-element {
            margin: 0px;
          }

          .${userPrefix}-idUser {
            line-height: 35px;
          }

          .${userPrefix}-idBody {
            line-height: 20px;
          }

          .${userPrefix}-idTitle,
          .${userPrefix}-idUser,
          .${userPrefix}-idBody {
            font-size: larger;
            font-weight: 900;
          }
        `) + opts.styleAdditional,
      },
    },
  });

  Components.addType("dynamicDataRenderer", {
    model: {
      defaults: {
        name: "Dynamic Data Renderer",
        droppable: false,
        draggable: false,
        highlightable: false,
        attributes: { class: `${userPrefix}-data-element` },
      },
    },
    view: {
      init() {
        const content = this.model.get("content");
        //@ts-ignore
        const data = content?.data || [];

        data.forEach((post: any) => {
          const userId = post?.userId || "";
          const title = post?.title || "";
          const description = post?.body || "";

          //@ts-ignore
          this.model.get("components").add([
            {
              type: "dynamicDataElement",
              content: { label: "User ID", value: userId },
            },
            {
              type: "dynamicDataElement",
              content: { label: "Title", value: title },
            },
            {
              type: "dynamicDataElement",
              content: { label: "Body", value: description },
            },
          ]);
        });
      },
    },
  });

  Components.addType("dynamicDataElement", {
    model: {
      defaults: {
        droppable: false,
        draggable: false,
        highlightable: false,
        attributes: { class: `${userPrefix}-data-element` },
      },
    },
    view: {
      onRender() {
        const content = this.model.get("content");
        const label = content?.label || "";
        const value = content?.value || "";

        this.el.innerHTML = `<div class="${userPrefix}-data-label">${label}:</div><div class="${userPrefix}-data-value">${value}</div>`;
      },
    },
  });
};
