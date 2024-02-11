import { Component, Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";

export default (editor: Editor, opts: RequiredPluginOptions) => {
    const {id} = opts;
    const title = "Hello World!"

    // editor.Modal.open({title})
    // editor.Commands.add(id[0], {
    //     run(editor){
    //         editor.Modal.open({title}).onceClose(()=> editor.stopCommand('form'));
    //     alert('Modal Fired')
    //     },
    //     stop(editor){
    //         editor.Modal.close();
    //     }
    // })
};
