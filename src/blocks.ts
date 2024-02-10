import { BlockProperties, Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";
import { typeButton, typeForm, typeInput, typeLabel } from "./components";

export default async (editor: Editor, opts: RequiredPluginOptions) => {
  const { block, label} = opts;

  const opt = opts;
  const bm = editor.BlockManager;
  const addBlock = (id: string, def: BlockProperties) => {
    opt.blocks?.indexOf(id)! >= 0 &&
      bm.add(id, {
        ...def,
        category: "Extra",
        select: true,
        ...opts.block(id),
      });
  };

  if (block) {
    const url = "https://dev.chepapest.com/api/dev/products";
    let productData = null;
    try {
      // API request when the block is added
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // storing the response in variable
      const data = await response.json();
      productData = data.data[0];
      console.log(productData)

      // Limiting the number of posts to 10
      // const limitedPosts = postData.slice(0, 10);
      // console.log(limitedPosts);

      // Adding the Form block to the UI sidebar
      addBlock(typeForm, {
        media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>`,
        label: label[0],
        content: {
          type: typeForm,
          data: productData,
        },
        ...block,
      });
    } catch (error) {
      console.error("Error in Fetching Data", error);
    }
  }
};
