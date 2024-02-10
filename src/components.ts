import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";


export const typeForm = 'form';
export const typeInput = 'input';
export const typeButton = 'button';
export const typeLabel = 'label';
export const typeText = 'text';
export const typeDesc = 'desc';
export const typeDiv = 'div';
export const typeHiddenDiv = 'hiddenDiv';


  

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { label } = opts;
  let productData;
  const productPrefix = opts.classPrefix;
  const idContainer = `${typeForm}-container`;

  const idTrait = {
    name: 'id',
  };

  const forTrait = {
    name: 'for',
  };

  const nameTrait = {
    name: 'name',
  };

  const placeholderTrait = {
    name: 'placeholder',
  };

  const valueTrait = {
    name: 'value',
  };

  const requiredTrait = {
    type: 'checkbox',
    name: 'required',
  };

  const checkIfInPreview = (ev: Event) => {
    if (!editor.Commands.isActive('preview')) {
      ev.preventDefault();
    }
  };

  Components.addType(typeForm, {
    model: {
      defaults: {
        tagName: 'form',
        droppable: ":not(form)",
        draggable: ":not(form)",
        name: label,
        attributes: { class: `${productPrefix} ${productPrefix}-container`, method: 'get' },
        traits: [
          {
            type: 'select',
            name: 'method',
            options: [
              {value: 'get', name: 'GET'},
              {value: 'post', name: 'POST'}
            ]
          },{
            name: 'action'
          }
        ],
        components: { type: idContainer },
        styles:
          (opts.style ||
            `
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
          .${productPrefix}-inputField-contain {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            
          }

          @media only screen and (max-width: 600px) {
            .${productPrefix}{
              width: 90%;
  
            }
          }
        `) + opts.styleAdditional,
      },
    },
    view: {
      events: {
        submit: (e: Event)=> e.preventDefault(),
      } as any
      // onRender() {
      //   productData = this.model.attributes.data;
      //   this.el.innerHTML = `<form action="/checkout">
      // }
    },
  });

  // For Product Title
  Components.addType(typeText, {
    isComponent: el => el.tagName == 'P',
    model: {
      defaults: {
        tagName: 'p',
        droppable: false,
        highlightable: false,
        attributes: {class:  `${productPrefix}-idTitle`},
        styles: (opts.style || 
          `
          .${productPrefix}-idTitle {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 0rem;
          } 

          @media only screen and (max-width: 600px) {
            .${productPrefix}-idTitle{
              text-align: center;
  
            }
          }
          `
        )
      }
    }
  })

  // For product Description
  Components.addType(typeDesc, {
    isComponent: el => el.tagName == 'P',
    model: {
      defaults: {
        tagName: 'p',
        droppable: false,
        highlightable: false,
        attributes: {class: `${productPrefix}-idDesc`},
        styles: (opts.style || 
          `
          .${productPrefix}-idDesc {
            margin: 1rem 0;
          }

          @media only screen and (max-width: 600px) {
            .${productPrefix}-idDesc{
              text-align: center;
  
            }
          }
          `
        )
      }
    }
  })

  // For input div
  Components.addType(typeDiv, {
    isComponent: el => el.tagName == 'DIV',
    model: {
      defaults: {
        tagName: 'div',
        droppable: false,
        highlightable: false,
        attributes: {class:  `${productPrefix}-inputDiv`},
        styles: (opts.style || 
          `
          .${productPrefix}-inputDiv {
            display: flex;
            gap: 2 rem;
            gap: 2rem;
            justify-content: space-between;
            font-size: 1.4rem;
            align-items: center;
            width: 23rem;
          }

          
          
          @media only screen and (max-width: 600px) {
            .${productPrefix}-inputDiv{
              width: 100%;
              font-size: 1rem;
              flex-direction: column;
              gap: 0.5rem;
  
            }
          }
          `
        )
      }
    }
  })


  // For hidden input div
  Components.addType(typeHiddenDiv, {
    isComponent: el => el.tagName == 'DIV',
    model: {
      defaults: {
        tagName: 'div',
        droppable: false,
        highlightable: false,
        attributes: {class:  `${productPrefix}-hiddenInput`},
        styles: (opts.style || 
          `
          .${productPrefix}-hiddenInput {
            display: none;
          }
          `
        )
      }
    }
  })

  // Input Elements
  Components.addType(typeInput, {
    isComponent: el => el.tagName == 'INPUT',
    model: {
      defaults: {
        tagName: 'input',
        droppable: false,
        highlightable: false,
        attributes: { type: 'text', class:  `${productPrefix}-inputField`},
        traits: [
          nameTrait,
          placeholderTrait,
          {
            type: 'select',
            name: 'type',
            options: [
              {value: 'text'}
            ]
          },
          requiredTrait
        ],
        styles: (opts.style || 
          `
          .${productPrefix}-inputField {
            border: 2px solid #10101033;
            padding: 0.5rem;
            outline: none;
            border-radius: 10px;
          } 
          `
        )
      }
    },

    extendFnView: ['updateAttributes'],
    view: {
    
      updateAttributes(){
        this.el.setAttribute('autocomplete', 'off')
      }
    }
  })

  Components.addType(typeButton, {
    extend: typeInput,
    isComponent: el => el.tagName == 'BUTTON',
    model: {
      defaults: {
        tagName: 'button',
        attributes: {type: 'button', class: `${productPrefix}-inputBtn`},
        text: 'Submit Now',
        traits: [
          {
            name: 'text',
            changeProp: true
          }, {
            type: 'select',
            name: 'type',
            options: [
              { value: 'button' },
              { value: 'submit' },
              { value: 'reset' },
            ]
          }
        ],
        styles: (opts.style || 
          `
          .${productPrefix}-inputBtn{
            padding: 0.5rem;
            width: 100%;
            cursor: pointer;
            background: transparent;
            border: 2px solid #d9d9d9;
            border-radius: 10px;
            font-size: 18px;


          }
          .${productPrefix}-inputBtn:hover{
            background: green;
            color: white;
          }

          @media only screen and (max-width: 600px) {
            .${productPrefix}-inputBtn{
              font-size: 1rem;
  
            }
          }

          `
        ),
      }, 

      init(){

      }
    }



  })










}
