import { Editor } from "grapesjs";
import { typeForm } from "./components";


export default function(editor: Editor){


    editor.TraitManager.addType(typeForm, {
        noLabel: true,
        // createInput({component, trait}): any {
        //   console.log(component)
        //   console.log(trait)
        // },
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