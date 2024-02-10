import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";


export const typeForm = 'form';
export const typeInput = 'input';
export const typeButton = 'button';
export const typeLabel = 'label';
export const typeText = 'text';
export const typeDesc = 'desc';
export const typeDiv = 'div';


  

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
            gap: 1rem;
            margin-bottom: 2rem;
            padding: 3rem;
          }
          .${productPrefix}-inputField-contain {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            
          }
          .${productPrefix}-inputBtn{
            padding: 0.5rem;
            width: 23rem;
            cursor: pointer;
            background: transparent;
            border: 2px solid #d9d9d9;
            border-radius: 10px;

          }
          }
          .${productPrefix}-inputBtn:hover{
            background: #ddd;
            
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
      //   <div class="${productPrefix}-container">
      //   <h1 class="${productPrefix}-idTitle">Order ${productData.title}</h1>
      //   <p class="${productPrefix}-idDesc">${productData.description}</p>
      //     <div class="${productPrefix}-inputField">
      //     <div class="${productPrefix}-inputField-contain">
      //     <label class="${productPrefix}-idLabel">Your Name:</label>
      //     <input class="${productPrefix}-input" type="text" placeholder="Enter your Name" name="name">
      //     </div>
      //     <div class="${productPrefix}-inputField-contain">
      //     <label class="${productPrefix}-idLabel">Phone Number:</label>
      //     <input class="${productPrefix}-input" type="text" placeholder="Enter your Phone Number" name="number">
      //     </div>
      //     <div class="${productPrefix}-inputField-contain">
      //     <label class="${productPrefix}-idLabel">Address:</label>
      //     <input class="${productPrefix}-input" type="text" placeholder="Address Details" name="address">
      //     </div>
      //     </div>
          

      //     <div class="${productPrefix}-inputField-hiddenDetails">
      //       <input class="input" name="landingpage" value="true" type="hidden">
      //       <input class="input" type="hidden" name="price" value="${productData.price}">
      //       <input class="input" type="hidden" name="quantity" value="${productData.qty}">
      //       <input class="input" type="hidden" name="productId" value="${productData.id}">
      //     </div>

      //     <button class="${productPrefix}-inputBtn" type="submit">Submit Now</button>

      //   </div>
        
      //   </form>`;
      // },
    },
  });

  // For Product Title
  Components.addType(typeText, {
    isComponent: el => el.tagName == 'TEXTTITLE',
    model: {
      defaults: {
        tagName: 'textTitle',
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










}
