import { Editor } from "grapesjs";
import { typeForm } from "./components";


export default async function(editor: Editor){

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

    editor.TraitManager.addType('select', {
        
      createInput({component, trait}): any {

        // added product to the options of the trait using Loop
        // for(let i = 0; i < productData.length; i++){
        //   this.model.attributes.options?.push(productData[i])

     
        // }

             
        const traitOpts = trait.get('options') || [];

        const options = traitOpts.length ? traitOpts : productData;
        console.log(options)
      },
      // events: {
      //     keyup: 'onChange'
      // },
     
      // getInputEl(){
      //     console.log('hi')
      // },

      // onEvent(){
      //     alert('heelo')
      // },

      // onUpdate(){
      //     alert('hi')
      // }

      // will fire after changing the value
      // onValueChange(){
      //     alert('Hi')
      // },
  })
  } catch(error){

  }



}