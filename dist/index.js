/*! api-component - 1.0.3 */
!function(t,e){'object'==typeof exports&&'object'==typeof module?module.exports=e():'function'==typeof define&&define.amd?define([],e):'object'==typeof exports?exports["api-component"]=e():t["api-component"]=e()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0})}},e={};t.r(e),t.d(e,{default:()=>v});var n="form",a="input",o="button",r="label",i="text",l="div",c="hiddenDiv";var s=void 0&&(void 0).__assign||function(){return s=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)},d=void 0&&(void 0).__awaiter||function(t,e,n,a){return new(n||(n=Promise))((function(o,r){function i(t){try{c(a.next(t))}catch(t){r(t)}}function l(t){try{c(a["throw"](t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,l)}c((a=a.apply(t,e||[])).next())}))},u=void 0&&(void 0).__generator||function(t,e){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(i=0)),i;)try{if(n=1,a&&(o=2&l[0]?a["return"]:l[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,l[1])).done)return o;switch(a=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,a=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(t,i)}catch(t){l=[6,t],a=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};var p=void 0&&(void 0).__awaiter||function(t,e,n,a){return new(n||(n=Promise))((function(o,r){function i(t){try{c(a.next(t))}catch(t){r(t)}}function l(t){try{c(a["throw"](t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,l)}c((a=a.apply(t,e||[])).next())}))},m=void 0&&(void 0).__generator||function(t,e){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(i=0)),i;)try{if(n=1,a&&(o=2&l[0]?a["return"]:l[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,l[1])).done)return o;switch(a=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,a=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(t,i)}catch(t){l=[6,t],a=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};const h=function(t,e){t.Panels.removeButton("options","export-template"),t.Panels.addButton("options",{id:"publishSite",active:!0,className:"btn-toggle-borders",label:"Publish",command:"sw-visibility"}),t.Panels.getButton("options","publishSite").on("change",(function(){return p(void 0,void 0,void 0,(function(){var e,n,a,o,r,i,l;return m(this,(function(c){return e=t.getHtml(),n=t.getCss(),a=t.getProjectData(),t.loadProjectData(a),o=e.replace(/<body[^>]*>/,"").replace(/<\/body\s*>/,""),r="https://chepapest.com/admin/landing_page/edit/1".split("/").pop(),i={id:r,html:"".concat(o),css:"".concat(n),projectData:a},console.log(i),l="https://chepapest.com/api/dev/user/landing-page/".concat(r,"/save"),function(){p(this,void 0,void 0,(function(){var e;return m(this,(function(n){switch(n.label){case 0:return[4,fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})];case 1:return[4,n.sent().json()];case 2:return"OK"===(e=n.sent()).data&&t.Modal.open({title:"Your Page has been Published. Thank you",styles:"\n          .gjs-mdl-header {\n            height: 50rem !important;\n          }\n          "}),console.log(e),[2]}}))}))}(),[2]}))}))}))};var b=void 0&&(void 0).__awaiter||function(t,e,n,a){return new(n||(n=Promise))((function(o,r){function i(t){try{c(a.next(t))}catch(t){r(t)}}function l(t){try{c(a["throw"](t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,l)}c((a=a.apply(t,e||[])).next())}))},f=void 0&&(void 0).__generator||function(t,e){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(i=0)),i;)try{if(n=1,a&&(o=2&l[0]?a["return"]:l[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,l[1])).done)return o;switch(a=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,a=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(t,i)}catch(t){l=[6,t],a=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};var g=void 0&&(void 0).__assign||function(){return g=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},g.apply(this,arguments)};const v=function(t,e){void 0===e&&(e={});var p=g({blocks:["productform"],id:["productform"],label:["Product Form"],block:function(){return{}},style:"",styleAdditional:"",classPrefix:"productform"},e);!function(t,e){var s,d=t.Components,u=(t.TraitManager,e.label),p=e.classPrefix,m="".concat(n,"-container");d.addType(n,{view:{onRender:function(){s=this.model.attributes.selectedData,d.getById("token").view.el.value=document.head.querySelector('meta[name="csrf-token"]')},events:{submit:function(t){return t.preventDefault()}}},model:{defaults:{tagName:"form",droppable:":not(form)",draggable:":not(form)",name:u,attributes:{class:"".concat(p," ").concat(p,"-container"),method:"post",action:"https://chepapest.com/checkout"},traits:[{type:"select",name:"product"}],components:{type:m,data:s},styles:"\n          .".concat(p," {\n            max-width: 50rem;\n            padding: 20px;\n            border-radius: 10px;\n            box-shadow: rgb(223 223 223) 0px 6px 20px 7px;\n            margin: 1rem;\n            outline: none !important;\n            border: 2px solid #d9d9d9;\n\n          }\n\n          .").concat(p,"-container {\n            width: 100%;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 2rem;\n            margin-bottom: 2rem;\n            padding: 3rem;\n          }\n\n          @media only screen and (max-width: 600px) {\n            .").concat(p,"{\n              width: 90%;\n  \n            }\n          }\n        ")},init:function(){var t=this;this.on("change:attributes:selectedData",(function(){var e=t.getAttributes().selectedData,n=d.getById("productId").view,a=d.getById("productPrice").view,o=d.getById("productQuantity").view;n.el.innerHTML=e.id,a.el.innerHTML=e.price,o.el.innerHTML=1}))}}}),d.addType(i,{isComponent:function(t){return"P"==t.tagName},model:{defaults:{tagName:"p",droppable:!1,highlightable:!1,attributes:{class:"".concat(p,"-idTitle")},styles:e.style||"\n          .".concat(p,"-idTitle {\n            font-size: 2.5rem;\n            font-weight: 900;\n            margin-bottom: 0rem;\n            text-align: center;\n            width: 100%;\n          } \n          ")}}}),d.addType(r,{isComponent:function(t){return"LABEL"==t.tagName},model:{defaults:{tagName:"label",droppable:!1,highlightable:!1,attributes:{class:"".concat(p,"-idLabel")},styles:e.style||"\n          .".concat(p,"-idLabel {\n            \n          } \n          ")}}}),d.addType(l,{isComponent:function(t){return"DIV"==t.tagName},model:{defaults:{tagName:"div",droppable:!1,highlightable:!1,attributes:{class:"".concat(p,"-inputDiv")},styles:e.style||"\n          .".concat(p,"-inputDiv {\n            display: flex;\n            gap: 2 rem;\n            gap: 2rem;\n            justify-content: space-between;\n            font-size: 1.4rem;\n            align-items: center;\n            width: 23rem;\n          }\n\n          \n          \n          @media only screen and (max-width: 600px) {\n            .").concat(p,"-inputDiv{\n              width: 100%;\n              font-size: 1rem;\n              flex-direction: column;\n              gap: 0.5rem;\n  \n            }\n          }\n          ")}}}),d.addType(c,{isComponent:function(t){return"DIV"==t.tagName},model:{defaults:{tagName:"div",droppable:!1,highlightable:!1,attributes:{class:"".concat(p,"-hiddenInput")},styles:e.style||"\n          .".concat(p,"-hiddenInput {\n            display: none;\n          }\n          ")}}}),d.addType(a,{isComponent:function(t){return"INPUT"==t.tagName},model:{defaults:{tagName:"input",droppable:!1,highlightable:!1,attributes:{type:"text",class:"".concat(p,"-inputField")},traits:[{name:"name"},{name:"placeholder"},{type:"select",name:"type",options:[{value:"text"}]},{type:"checkbox",name:"required"}],styles:e.style||"\n          .".concat(p,"-inputField {\n            border: 2px solid #10101033;\n            padding: 0.5rem;\n            outline: none;\n            border-radius: 10px;\n          } \n          ")}},extendFnView:["updateAttributes"],view:{updateAttributes:function(){this.el.setAttribute("autocomplete","off")}}}),d.addType(o,{extend:a,isComponent:function(t){return"BUTTON"==t.tagName},model:{defaults:{tagName:"button",attributes:{type:"submit",value:"submit",class:"".concat(p,"-inputBtn")},text:"Submit Now",styles:e.style||"\n          .".concat(p,"-inputBtn{\n            padding: 0.5rem;\n            width: 100%;\n            cursor: pointer;\n            background: transparent;\n            border: 2px solid #d9d9d9;\n            border-radius: 10px;\n            font-size: 18px;\n\n\n          }\n          .").concat(p,"-inputBtn:hover{\n            background: green;\n            color: white;\n          }\n\n          @media only screen and (max-width: 600px) {\n            .").concat(p,"-inputBtn{\n              font-size: 1rem;\n  \n            }\n          }\n\n          ")}}})}(t,p),function(t,e){d(void 0,void 0,void 0,(function(){var d,p,m,h,b,f,g,v,y,x,w;return u(this,(function(u){switch(u.label){case 0:if(d=e.block,p=e.label,m=e.id,h=function(n,a){var o;(null===(o=e.blocks)||void 0===o?void 0:o.indexOf(n))>=0&&t.Blocks.add(n,s(s({select:!0},a),e.block(n)))},!d)return[3,5];b="https://chepapest.com/api/dev/products",f=null,u.label=1;case 1:return u.trys.push([1,4,,5]),[4,fetch(b)];case 2:if(!(g=u.sent()).ok)throw new Error("Failed to fetch data");return[4,g.json()];case 3:return v=u.sent(),f=v.data,h(m[0],s({media:"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z\"/><rect width=\"10\" height=\"3\" x=\"2\" y=\"15\" rx=\".5\"/></svg>",label:p[0],category:"Extra",content:{type:n,data:f,data1:1,components:[{type:l,components:[{type:i,components:"Order Form"}]},{components:[{type:l,components:[{type:r,components:"Your Name:"},{type:a,attributes:{type:"text",placeholder:"Enter your Name",name:"userName"}}]}]},{components:[{type:l,components:[{type:r,components:"Phone Number:"},{type:a,attributes:{type:"text",placeholder:"Enter your Number",name:"number"}}]}]},{components:[{type:l,components:[{type:r,components:"Address:"},{type:a,attributes:{type:"text",placeholder:"Enter your Address",name:"address"}}]}]},{type:c,components:[{type:c,components:[{type:a,attributes:{type:"hidden",id:"server",name:"landingpage",value:"true"}},{type:a,attributes:{type:"hidden",id:"token",name:"_token",value:"{{ csrf_token() }}"}},{type:a,attributes:{type:"hidden",id:"productId"},name:"productId"},{type:a,attributes:{type:"hidden",id:"productPrice"},name:"productPrice"},{type:a,attributes:{type:"hidden",id:"productQuantity"},name:"productQuantity"}]}]},{components:[{type:o,components:"Submit"}]}]}},d)),[3,5];case 4:return y=u.sent(),console.error("Error in Fetching Data",y),[3,5];case 5:return t.BlockManager.add("link-block",{label:"Link Block",category:"Basic",media:"<svg viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z\"></path>\n    </svg>",content:{type:"link",editable:!1,droppable:!0,style:{display:"inline-block",padding:"5px","min-height":"50px","min-width":"50px"}}}),t.BlockManager.add("quote",{label:"Quote",media:"<svg viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z\" />\n    </svg>",content:"<blockquote class=\"quote\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit\n      </blockquote>"}),t.BlockManager.add("text-basic",{label:"Text section",media:"<svg viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z\" />\n    </svg>",content:"<section class=\"bdg-sect\">\n      <h1 class=\"heading\">Insert title here</h1>\n      <p class=\"paragraph\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n      </section>"}),t.BlockManager.add("h1-block",{label:"Heading",content:"<h1>Put your title here</h1>",category:"Basic",attributes:{title:"Insert h1 block"}}),t.BlockManager.add("text",{label:"Text",media:"<svg viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z\" />\n    </svg>",activate:!0,content:{type:"text",content:"Insert your text here",style:{padding:"10px"}}}),t.BlockManager.add("text-sect",{label:"Text Section",media:"<svg viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z\" />\n    </svg>",content:"\n      <h1 class=\"heading\">Insert title here</h1>\n      <p class=\"paragraph\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n      </p>\n    "}),t.BlockManager.add("image",{label:"Image",media:"<svg viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z\" />\n    </svg>",activate:!0,content:{type:"image",style:{color:"black"}}}),t.BlockManager.add("sect100",{label:"1 Section",media:"<svg viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z\"/>\n    </svg>",content:"\n      <table class=\"custom-table\">\n        <tr>\n          <td></td>\n        </tr>\n      </table>\n    "}),t.BlockManager.add("sect50",{label:"1/2 Section",media:"<svg viewBox=\"0 0 23 24\">\n      <path fill=\"currentColor\" d=\"M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z\"/>\n    </svg>",content:"\n      <table>\n        <tr>\n          <td ></td>\n          <td ></td>\n        </tr>\n      </table>\n    "}),t.BlockManager.add("sect30",{label:"1/3 Section",media:"<svg viewBox=\"0 0 23 24\">\n      <path fill=\"currentColor\" d=\"M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z\"/>\n    </svg>",content:"\n      <table>\n        <tr>\n          <td></td>\n          <td ></td>\n          <td></td>\n        </tr>\n      </table>\n    "}),t.BlockManager.add("sect37",{label:"3/7 Section",media:"<svg viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z\"></path>\n    </svg>",content:"\n      <table>\n        <tr>\n          <td> </td>\n          <td> </td>\n        </tr>\n      </table>\n    "}),t.BlockManager.add("button",{label:"Button",media:"<svg viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z\" />\n    </svg>",content:'<a class="button">Button</a>'}),t.BlockManager.add("divider",{label:"Divider",media:"<svg viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z\" />\n    </svg>",content:"\n      <table style=\"width: 100%; margin-top: 10px; margin-bottom: 10px;\">\n        <tr>\n          <td ></td>\n        </tr>\n      </table>\n      <style>\n        .divider {\n          background-color: red;\n          height: 1px;\n        }\n      </style>\n    "}),x="<table class=\"grid-item-card\">\n    <tr>\n      <td class=\"grid-item-card-cell\">\n        <img class=\"grid-item-image\" src=\"https://via.placeholder.com/250x150/78c5d6/fff/\" alt=\"Image\"/>\n        <table class=\"grid-item-card-body\">\n          <tr>\n            <td class=\"grid-item-card-content\">\n              <h1 class=\"card-title\">Title here</h1>\n              <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>",t.BlockManager.add("grid-items",{label:"Grid Items",media:"<svg viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3\"/>\n  </svg>",content:"\n    <table class=\"grid-item-row\">\n      <tr>\n        <td class=\"grid-item-cell2-l\">".concat(x,"</td>\n        <td class=\"grid-item-cell2-r\">").concat(x,"</td>\n      </tr>\n    </table>\n  ")}),w="<table class=\"list-item\">\n    <tr>\n      <td class=\"list-item-cell\">\n        <table class=\"list-item-content\">\n          <tr class=\"list-item-row\">\n            <td class=\"list-cell-left\">\n              <img class=\"list-item-image\" src=\"https://via.placeholder.com/150/78c5d6/fff\" alt=\"Image\"/>\n            </td>\n            <td class=\"list-cell-right\">\n              <h1 class=\"card-title\">Title here</h1>\n              <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>",t.BlockManager.add("list-items",{label:"List Items",media:"<svg viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10\"/>\n  </svg>",content:w+w}),[2]}}))}))}(t,p),function(t){b(void 0,void 0,void 0,(function(){var e,n,a,o,r;return f(this,(function(i){switch(i.label){case 0:e="https://chepapest.com/api/dev/products",n=null,i.label=1;case 1:return i.trys.push([1,4,,5]),[4,fetch(e)];case 2:if(!(a=i.sent()).ok)throw new Error("Failed to fetch data");return[4,a.json()];case 3:return o=i.sent(),n=o.data,t.TraitManager.addType("select",{events:{keyup:"click"},createInput:function(t){var e=t.trait.get("options")||[],a=e.length?e:n,o=document.createElement("div");return o.innerHTML="\n          <select class=\"products\">\n          <option value=\"\" disabled selected>Select a Product</option>\n            ".concat(a.map((function(t){return"<option value=\"".concat(t.id,"\">").concat(t.title,"</option>")})).join(""),"\n          </select>\n        "),o.querySelector(".products").addEventListener("click",(function(t){var e=o.querySelector("option:first-child");t.target!==e||e.dataset.clicked||(e.dataset.clicked=!0,e.style.display="none",e.disabled=!0)})),o},onEvent:function(t){for(var e,n=t.elInput,a=t.component,o=a.attributes.data,r=n.querySelector(".products"),i=0;i<o.length;i++)o[i].id==r.value&&(e=o[i]);a.addAttributes({selectedData:e}),a.attributes.selectedData=e}}),[3,5];case 4:return r=i.sent(),console.log("Error in Fetching Data",r),[3,5];case 5:return[2]}}))}))}(t),h(t)};return e})()));
//# sourceMappingURL=index.js.map