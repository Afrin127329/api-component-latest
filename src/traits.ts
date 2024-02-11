import { Editor } from "grapesjs";
import { typeForm } from "./components";


export default function(editor: Editor){


    editor.TraitManager.addType('select', {
        noLabel: true,
        createInput({component, trait}): any {
          
          alert('hi')
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
}