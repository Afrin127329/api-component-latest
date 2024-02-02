import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { id, label } = opts;
  let userData;

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

          .${userPrefix}-idUser {
            font-size: larger;
            font-weight: 900;
          }

          .${userPrefix}-idBody {
            line-height: 20px;
          }

          .${userPrefix}-idTitle {
            margin: 0px;
            line-height: 35px;
          }
        `) + opts.styleAdditional,
      },
    },
    view: {
      onRender() {
        userData = this.model.attributes.data;
        this.el.innerHTML = `<div>
        <h1 class="${userPrefix}-idTitle">${userData.title}</h1>
        <p class="${userPrefix}-idBody">
        ${userData.body}
      </p>
      <div class="${userPrefix}-idUser">${userData.userId}</div>
        </div>`;
      },
    },
  });
};
