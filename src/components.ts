import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export const typeForm = "form";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { id, label } = opts;
  let productData;

  const userPrefix = opts.classPrefix;
  const idContainer = `${id}-container`;

  Components.addType(id[0], {
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
        productData = this.model.attributes.data.data[0];
        this.el.innerHTML = `<div>
        <h1 class="${userPrefix}-idTitle">${productData.title}</h1>
        <p class="${userPrefix}-idBody">
        ${productData.category.category_name}
      </p>
        <p class="${userPrefix}-idBody">
        Price: ${productData.price}
      </p>
        <p class="${userPrefix}-idBody">
        Features: ${productData.product_type4}
      </p>
      <div class="${userPrefix}-idUser">${productData.short_description}</div>
        </div>`;
      },
    },
  });

  Components.addType(id[1], {
    model: {
      defaults: {
        droppable: false,
        name: label[1],
        attributes: { class: userPrefix },
        components: { type: idContainer },
        styles: opts.style + opts.styleAdditional,
      },
    },
    view: {
      onRender() {
        productData = this.model.attributes.data;
        console.log(this.model.attributes.data)

        this.el.innerHTML = `<form>
        <h1 class="${userPrefix}-idTitle">${productData.title}</h1>
    
        </form>`;
      },
    },
  });
};
