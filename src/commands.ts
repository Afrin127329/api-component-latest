import { Component, Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";
import { typeForm } from "./components";

export default (editor: Editor, opts: RequiredPluginOptions) => {
    const {id} = opts;
    const title = "Hello World!"

    // editor.Modal.open({title})
    editor.Commands.add(typeForm, {
        run(editor){
        alert('Modal Fired')
        }
    })
};
