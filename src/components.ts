import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export const typeForm = "form";
export const typeInput = "input";
export const typeButton = "button";
export const typeLabel = "label";
export const typeText = "text";
export const typeDesc = "desc";
export const typeDiv = "div";
export const typeHiddenDiv = "hiddenDiv";
export const typeNavbar = "";
export const typeHero = "hero";
export const typeWrapper = "wrapper";
export const typeSocial = "social";

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components, TraitManager } = editor;
  const { label } = opts;
  let productData: any;
  const productPrefix = opts.classPrefix;
  const idContainer = `${typeForm}-container`;

  const nameTrait = {
    name: "name",
  };

  const placeholderTrait = {
    name: "placeholder",
  };

  const requiredTrait = {
    type: "checkbox",
    name: "required",
  };

  const checkIfInPreview = (ev: Event) => {
    if (!editor.Commands.isActive("preview")) {
      ev.preventDefault();
    }
  };

  Components.addType(typeForm, {
    view: {
      onRender() {
        productData = this.model.attributes.selectedData;

        let token: any = Components.getById("token").view;
        token.el.value = document.head.querySelector('meta[name="csrf-token"]');
      },
      events: {
        submit: (e: Event) => e.preventDefault(),
      } as any,
    },
    model: {
      defaults: {
        tagName: "form",
        droppable: ":not(form)",
        draggable: ":not(form)",
        name: label,
        attributes: {
          class: `${productPrefix} ${productPrefix}-container`,
          method: "post",
          action: "https://chepapest.com/checkout",
        },
        traits: [
          {
            type: "select",
            name: "product",
          },
        ],
        components: { type: idContainer, data: productData },
        styles: `
          .${productPrefix} {
            max-width: 50rem;
            padding: 20px;
            border-radius: 10px;
            box-shadow: rgb(223 223 223) 0px 6px 20px 7px;
            margin: 1rem;
            outline: none !important;
            border: 2px solid #d9d9d9;

          }

          .${productPrefix}-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            margin-bottom: 2rem;
            padding: 3rem;
          }

          @media only screen and (max-width: 600px) {
            .${productPrefix}{
              width: 90%;
  
            }
          }
        `,
      },

      init() {
        this.on("change:attributes:selectedData", () => {
          // Take Selected Data object from the traits
          const data = this.getAttributes().selectedData;

          // Grab the DOM Elements
          const idElem: any = Components.getById("productId").view;
          const priceElem: any = Components.getById("productPrice").view;
          const quantityElem: any = Components.getById("productQuantity").view;

          idElem.el.innerHTML = data.id;
          priceElem.el.innerHTML = data.price;
          quantityElem.el.innerHTML = 1;
        });
      },
    },
  });

  // For Product Title
  Components.addType(typeText, {
    isComponent: (el) => el.tagName == "P",
    model: {
      defaults: {
        tagName: "p",
        droppable: false,
        highlightable: false,
        attributes: { class: ` ${productPrefix}-idTitle` },
        styles:
          opts.style ||
          `
          .${productPrefix}-idTitle {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 0rem;
            text-align: center;
            width: 100%;
          } 
          `,
      },
    },
  });
  // For Input  Label
  Components.addType(typeLabel, {
    isComponent: (el) => el.tagName == "LABEL",
    model: {
      defaults: {
        tagName: "label",
        droppable: false,
        highlightable: false,
        attributes: { class: `${productPrefix}-idLabel` },
        styles:
          opts.style ||
          `
          .${productPrefix}-idLabel {
            
          } 
          `,
      },
    },
  });

  // For input div
  Components.addType(typeDiv, {
    isComponent: (el) => el.tagName == "DIV",
    model: {
      defaults: {
        tagName: "div",
        droppable: false,
        highlightable: false,
        attributes: { class: `${productPrefix}-inputDiv` },
        styles:
          opts.style ||
          `
          .${productPrefix}-inputDiv {
            display: flex;
            gap: 2rem;
            justify-content: space-between;
            font-size: 1.2rem !important;
            align-items: center;
            width: 26rem !important;
          }

          
          
          @media only screen and (max-width: 600px) {
            .${productPrefix}-inputDiv{
              width: 100%;
              font-size: 1rem;
              flex-direction: column;
              gap: 0.5rem;
  
            }
          }
          `,
      },
    },
  });

  // For hidden input div
  Components.addType(typeHiddenDiv, {
    isComponent: (el) => el.tagName == "DIV",
    model: {
      defaults: {
        tagName: "div",
        droppable: false,
        highlightable: false,
        attributes: { class: `${productPrefix}-hiddenInput` },
        styles:
          opts.style ||
          `
          .${productPrefix}-hiddenInput {
            display: none;
          }
          `,
      },
    },
  });

  // Input Elements
  Components.addType(typeInput, {
    isComponent: (el) => el.tagName == "INPUT",
    model: {
      defaults: {
        tagName: "input",
        droppable: false,
        highlightable: false,
        attributes: { type: "text", class: `${productPrefix}-inputField` },
        traits: [
          nameTrait,
          placeholderTrait,
          {
            type: "select",
            name: "type",
            options: [{ value: "text" }],
          },
          requiredTrait,
        ],
        styles:
          opts.style ||
          `
          .${productPrefix}-inputField {
            border: 2px solid #10101033;
            padding: 0.5rem;
            outline: none;
            border-radius: 10px;
          } 
          `,
      },
    },

    extendFnView: ["updateAttributes"],
    view: {
      updateAttributes() {
        this.el.setAttribute("autocomplete", "off");
      },
    },
  });

  Components.addType(typeButton, {
    extend: typeInput,
    isComponent: (el) => el.tagName == "BUTTON",
    model: {
      defaults: {
        tagName: "button",
        attributes: {
          type: "submit",
          value: "submit",
          class: `${productPrefix}-inputBtn btn btn-success`,
        },
        text: "Submit Now",
        // styles:
        //   opts.style ||
        //   `
        //   .${productPrefix}-inputBtn{
        //     padding: 0.5rem;
        //     width: 100%;
        //     cursor: pointer;
        //     background: transparent;
        //     border: 2px solid #d9d9d9;
        //     border-radius: 10px;
        //     font-size: 18px;

        //   }
        //   .${productPrefix}-inputBtn:hover{
        //     background: green;
        //     color: white;
        //   }

        //   @media only screen and (max-width: 600px) {
        //     .${productPrefix}-inputBtn{
        //       font-size: 1rem;

        //     }
        //   }

        //   `,
      },
    },
  });

  editor.Components.addType(typeSocial, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "Social Icons",
        tagName: "div",
        traits: [
          {
            type: "select",
            label: "Mode",
            name: "mode",
            options: [
              { value: "horizontal", name: "Horizontal" },
              { value: "vertical", name: "Vertical" },
            ],
          },
        ],
      },
    },
  });

  Components.addType(typeHero, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "Hero section",
        tagName: "div",
        traits: [
          {
            type: "select",
            label: "Mode",
            name: "mode",
            options: [
              { value: "horizontal", name: "Horizontal" },
              { value: "vertical", name: "Vertical" },
            ],
          },
        ],
      },
    },
  });

  Components.addType(typeWrapper, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "Wrapper",
        tagName: "div",
        traits: [
          {
            type: "select",
            label: "Mode",
            name: "mode",
            options: [
              { value: "horizontal", name: "Horizontal" },
              { value: "vertical", name: "Vertical" },
            ],
          },
        ],
      },
    },
  });

  Components.addType(typeNavbar, {
    isComponent: (el) => el.tagName == "DIV",

    model: {
      defaults: {
        name: "Navbar",
        tagName: "div",
        traits: [
          {
            type: "select",
            label: "Mode",
            name: "mode",
            options: [
              { value: "horizontal", name: "Horizontal" },
              { value: "vertical", name: "Vertical" },
            ],
          },
        ],
      },
    },
  });
};
