import { BlockProperties, Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";
import {
  typeButton,
  typeDiv,
  typeForm,
  typeHiddenDiv,
  typeInput,
  typeLabel,
  typeText,
} from "./components";

export default async (editor: Editor, opts: RequiredPluginOptions) => {
  const { block, label, id } = opts;

  // Funciton for adding custom blocks
  const addBlock = (id: string, def: BlockProperties) => {
    opts.blocks?.indexOf(id)! >= 0 &&
      editor.Blocks.add(id, {
        select: true,
        ...def,
        ...opts.block(id),
      });
  };

  if (block) {
    const url = "https://chepapest.com/api/dev/products";
    let productData = null;
    try {
      // API request when the block is added
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // storing the response in variable
      const data = await response.json();
      productData = data.data;

      // Adding the Form block to the UI sidebar
      addBlock(id[0], {
        media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>`,
        label: label[0],
        category: "Extra",
        content: {
          type: typeForm,
          data: productData,
          data1: 1,
          components: [
            {
              type: typeDiv,
              components: [{ type: typeText, components: "Order Form" }],
            },
            {
              components: [
                {
                  type: typeDiv,
                  components: [
                    { type: typeLabel, components: "Your Name:" },
                    {
                      type: typeInput,
                      attributes: {
                        type: "text",
                        placeholder: "Enter your Name",
                        name: "userName",
                      },
                    },
                  ],
                },
              ],
            },
            {
              components: [
                {
                  type: typeDiv,
                  components: [
                    { type: typeLabel, components: "Phone Number:" },
                    {
                      type: typeInput,
                      attributes: {
                        type: "text",
                        placeholder: "Enter your Number",
                        name: "number",
                      },
                    },
                  ],
                },
              ],
            },
            {
              components: [
                {
                  type: typeDiv,
                  components: [
                    { type: typeLabel, components: "Address:" },
                    {
                      type: typeInput,
                      attributes: {
                        type: "text",
                        placeholder: "Enter your Address",
                        name: "address",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: typeHiddenDiv,
              components: [
                {
                  type: typeHiddenDiv,
                  components: [
                    {
                      type: typeInput,
                      attributes: {
                        type: "hidden",
                        id: "server",
                        name: "landingpage",
                        value: "true",
                      },
                    },
                    {
                      type: typeInput,
                      attributes: {
                        type: "hidden",
                        id: "token",
                        name: "_token",
                        value: "{{ csrf_token() }}",
                      },
                    },

                    {
                      type: typeInput,
                      attributes: { type: "hidden", id: "productId" },
                      name: "productId",
                    },
                    {
                      type: typeInput,
                      attributes: { type: "hidden", id: "productPrice" },
                      name: "productPrice",
                    },
                    {
                      type: typeInput,
                      attributes: { type: "hidden", id: "productQuantity" },
                      name: "productQuantity",
                    },
                  ],
                },
              ],
            },
            {
              components: [{ type: typeButton, components: "Submit" }],
            },
            // Add Hidden components
          ],
        },
        ...block,
      });
    } catch (error) {
      console.error("Error in Fetching Data", error);
    }
  }

  editor.BlockManager.add("link-block", {
    label: "Link Block",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,
    content: {
      type: "link",
      editable: false,
      droppable: true,
      style: {
        display: "inline-block",
        padding: "5px",
        "min-height": "50px",
        "min-width": "50px",
      },
    },
  });

  editor.BlockManager.add("quote", {
    label: "Quote",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>`,
    content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`,
  });

  editor.BlockManager.add("text-basic", {
    label: "Text section",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />
    </svg>`,
    content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`,
  });

  editor.BlockManager.add("h1-block", {
    label: "Heading",
    content: "<h1>Put your title here</h1>",
    category: "Basic",
    attributes: {
      title: "Insert h1 block",
    },
  });

  editor.BlockManager.add("text", {
    label: "Text",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    </svg>`,
    activate: true,
    content: {
      type: "text",
      content: "Insert your text here",
      style: { padding: "10px" },
    },
  });

  // Added Text Section
  editor.BlockManager.add("text-sect", {
    label: "Text Section",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
    </svg>`,
    content: `
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
    `,
  });

  // Works
  editor.BlockManager.add("image", {
    label: "Image",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    </svg>`,
    activate: true,
    content: {
      type: "image",
      style: { color: "black" },
    },
  });

  editor.BlockManager.add("sect100", {
    label: "1 Section",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `
      <table class="custom-table">
        <tr>
          <td></td>
        </tr>
      </table>
    `,
  });

  editor.BlockManager.add("sect50", {
    label: "1/2 Section",
    media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `
      <table>
        <tr>
          <td ></td>
          <td ></td>
        </tr>
      </table>
    `,
  });

  editor.BlockManager.add("sect30", {
    label: "1/3 Section",
    media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `
      <table>
        <tr>
          <td></td>
          <td ></td>
          <td></td>
        </tr>
      </table>
    `,
  });

  editor.BlockManager.add("sect37", {
    label: "3/7 Section",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>
    </svg>`,
    content: `
      <table>
        <tr>
          <td> </td>
          <td> </td>
        </tr>
      </table>
    `,
  });

  editor.BlockManager.add("button", {
    label: "Button",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
    </svg>`,
    content: '<a class="btn btn-primary">Button</a>',
  });

  editor.BlockManager.add("divider", {
    label: "Divider",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />
    </svg>`,
    content: `
      <table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td ></td>
        </tr>
      </table>
      <style>
        .divider {
          background-color: red;
          height: 1px;
        }
      </style>
    `,
  });

  const gridItem = `<table class="grid-item-card">
    <tr>
      <td class="grid-item-card-cell">
        <img class="grid-item-image" src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image"/>
        <table class="grid-item-card-body">
          <tr>
            <td class="grid-item-card-content">
              <h1 class="card-title">Title here</h1>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;

  editor.BlockManager.add("grid-items", {
    label: "Grid Items",
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>
  </svg>`,
    content: `
    <table class="grid-item-row">
      <tr>
        <td class="grid-item-cell2-l">${gridItem}</td>
        <td class="grid-item-cell2-r">${gridItem}</td>
      </tr>
    </table>
  `,
  });

  const listItem = `<table class="list-item">
    <tr>
      <td class="list-item-cell">
        <table class="list-item-content">
          <tr class="list-item-row">
            <td class="list-cell-left">
              <img class="list-item-image" src="https://via.placeholder.com/150/78c5d6/fff" alt="Image"/>
            </td>
            <td class="list-cell-right">
              <h1 class="card-title">Title here</h1>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;

  editor.BlockManager.add("list-items", {
    label: "List Items",
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"/>
  </svg>`,
    content: listItem + listItem,
  });
};
