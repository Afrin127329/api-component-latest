import { Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";


export const typeForm = 'form';
export const typeInput = 'input';
export const typeButton = 'button';
export const typeLabel = 'label';
export const typeText = 'text';

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const { Components } = editor;
  const { label } = opts;
  let productData;
  const productPrefix = opts.classPrefix;
  const idContainer = `${typeForm}-container`;

  Components.addType(typeForm, {
    model: {
      defaults: {
        droppable: ":not(form)",
        draggable: ":not(form)",
        name: label,
        attributes: { class: productPrefix },
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
          }

          .${productPrefix}-idTitle {
            font-size: 2.5rem;
            font-weight: 900;
            margin-bottom: 0rem;
          }

          .${productPrefix}-idDesc {
            margin-top: 0rem;
            margin-bottom: 2rem;
          }

          .${productPrefix}-inputField {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            font-size: 1.4rem;
          }

          .${productPrefix}-idTitle {
            margin: 0px;
            line-height: 35px;
          }

          .${productPrefix}-input {
            border: 2px solid #10101033;
            padding: 0.5rem;
            outline: none;
            border-radius: 10px;
            
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
      onRender() {
        productData = this.model.attributes.data;
        this.el.innerHTML = `<form action="/checkout">
        <div class="${productPrefix}-container">
        <h1 class="${productPrefix}-idTitle">Order ${productData.title}</h1>
        <p class="${productPrefix}-idDesc">${productData.description}</p>
          <div class="${productPrefix}-inputField">
          <div class="${productPrefix}-inputField-contain">
          <label class="${productPrefix}-idLabel">Your Name:</label>
          <input class="${productPrefix}-input" type="text" placeholder="Enter your Name" name="name">
          </div>
          <div class="${productPrefix}-inputField-contain">
          <label class="${productPrefix}-idLabel">Phone Number:</label>
          <input class="${productPrefix}-input" type="text" placeholder="Enter your Phone Number" name="number">
          </div>
          <div class="${productPrefix}-inputField-contain">
          <label class="${productPrefix}-idLabel">Address:</label>
          <input class="${productPrefix}-input" type="text" placeholder="Address Details" name="address">
          </div>
          </div>
          

          <div class="${productPrefix}-inputField-hiddenDetails">
            <input class="input" name="landingpage" value="true" type="hidden">
            <input class="input" type="hidden" name="price" value="${productData.price}">
            <input class="input" type="hidden" name="quantity" value="${productData.qty}">
            <input class="input" type="hidden" name="productId" value="${productData.id}">
          </div>

          <button class="${productPrefix}-inputBtn" type="submit">Submit Now</button>

        </div>
        
        </form>`;
      },
    },
  });
};
