import { Editor } from "grapesjs";

export default async (editor: Editor) => {
  const url = "https://dev.chepapest.com/api/dev/products";
  let productData: any = null;
  try {
    // API request when the block is added
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // storing the response in variable
    const data = await response.json();
    productData = data.data;

    editor.TraitManager.addType("select", {
      events: {
        keyup: 'click'
      },
      createInput({ trait }): any {
        const traitOpts = trait.get("options") || [];

        const options = traitOpts.length ? traitOpts : productData;

        const el = document.createElement("div");
        el.innerHTML = `
          <select class="products">
          <option value="" disabled selected>Select a Product</option>
            ${options
              .map(
                (opt: any) => `<option value="${opt.id}">${opt.title}</option>`
              )
              .join("")}
          </select>
        `;

        const inputType: any = el.querySelector(".products");
        inputType.addEventListener("click", (e: any) => {
          let firstOpt: any = el.querySelector("option:first-child");
          if (e.target === firstOpt && !firstOpt.dataset.clicked) {
            firstOpt.dataset.clicked = true;
            firstOpt.style.display = "none";
            firstOpt.disabled = true;
          }
        });

        return el;
      },

      onEvent({ elInput, component }) {
        const remoteData = component.attributes.data;

        const productId: any = elInput.querySelector(".products");
        let selectedData;

        // selectedData = remoteData.find((el: any) => {
        //   if (el.id === productId.value) {
        //     return el;
        //   }
        // });

        for (let i = 0; i < remoteData.length; i++) {
          if (remoteData[i].id == productId.value) {
            selectedData = remoteData[i];
          }
        }
        component.addAttributes({selectedData: selectedData})
        component.attributes.selectedData = selectedData;
        console.log(component.attributes)
        let price: any = document.getElementById('productPrice');
        // price.value = selectedData.price;
        console.log(price);

        // this.view?.render();
       
      },

      onUpdate({elInput, component}){
        const inputType: any = elInput.querySelector(".products");

          const data = component.getAttributes();
          console.log(data);

        
      }

    });
  } catch (error) {
    console.log("Error in Fetching Data", error);
  }
};
