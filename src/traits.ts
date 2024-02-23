import { Editor } from "grapesjs";
import { typeForm } from "./components";

export default async (editor: Editor) => {
  const url = "https://chepapest.com/api/dev/products";
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

    editor.TraitManager.addType(typeForm, {
      events: {
        keyup: "click",
      },

      // Initializing the traits with HTML select elem
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

        // Disabling the first Element
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

      // Fires while clicking on the gear icon
      onEvent({ elInput, component }) {
        const remoteData = component.attributes.data;

        const productId: any = elInput.querySelector(".products");
        let selectedData;

        // Match the selected data object from the data got from the server
        for (let i = 0; i < remoteData.length; i++) {
          if (remoteData[i].id == productId.value) {
            selectedData = remoteData[i];
          }
        }
        component.addAttributes({ selectedData: selectedData });
        component.attributes.selectedData = selectedData;
      },
    });
  } catch (error) {
    console.log("Error in Fetching Data", error);
  }

  // editor.TraitManager.addType("link", {
  //   onEvent({ elInput, component }) {
  //     console.log("clicked");
  //   },
  // });
};
