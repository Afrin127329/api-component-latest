import { Editor } from "grapesjs";
import { typeForm } from "./components";


export default async(editor: Editor) =>{

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
      //       events: {
      //     keyup: 'onChange'
      // },
        
      createInput({trait}): any {

        // added product to the options of the trait using Loop
        // for(let i = 0; i < productData.length; i++){
        //   this.model.attributes.options?.push(productData[i])

     
        // }

             
        const traitOpts = trait.get('options') || [];

        const options = traitOpts.length ? traitOpts : productData;
        console.log(options)


        const el = document.createElement('div');
        el.innerHTML = `
          <select class="href-next__type">
            ${options.map((opt: any) => `<option value="${opt.title}">${opt.title}</option>`).join('')}
          </select>
        `;

        const inputsUrl: any = el.querySelector('.href-next__url-inputs');
        const inputsEmail: any = el.querySelector('.href-next__email-inputs');
        const inputType: any = el.querySelector('.href-next__type');
        inputType.addEventListener('change', (ev: any) => {
          switch (ev.target.value) {
            case 'url':
              inputsUrl.style.display = '';
              inputsEmail.style.display = 'none';
              break;
            case 'email':
              inputsUrl.style.display = 'none';
              inputsEmail.style.display = '';
              break;
          }
        });
    
        return el;
      },

     
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
    console.log("Error in Fetching Data", error)
  }



}