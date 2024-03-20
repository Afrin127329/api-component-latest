import { BlockProperties, Editor } from "grapesjs";
import { RequiredPluginOptions } from ".";
import {
  typeButton,
  typeDiv,
  typeForm,
  typeHero,
  typeHiddenDiv,
  typeInput,
  typeLabel,
  typeNavbar,
  typeSocial,
  typeText,
  typeWrapper,
} from "./components";
import { carousel } from "./helper/custom-components";

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

  // let tableStyleStr = "";
  // let cellStyleStr = "";
  // let tableStyle = opts.tableStyle || {};
  // let cellStyle = opts.cellStyle || {};

  // for (let prop in tableStyle) {
  //   tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
  // }
  // for (let prop in cellStyle) {
  //   cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
  // }

  if (block) {
    const url = document.location.protocol+"//"+document.location.host+"/api/dev/products";
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
              components: [
                {
                  type: typeText,
                  components: "Order Form",
                  attributes: { class: "h1 text-center" },
                },
              ],
              attributes: { class: "text-center " },
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
                      attributes: { type: "hidden", id: "productId",name: "productId", },
                      
                    },
                    {
                      type: typeInput,
                      attributes: { type: "hidden", id: "productPrice" ,name: "productPrice",},
                      
                    },
                    {
                      type: typeInput,
                      attributes: { type: "hidden", id: "productQuantity",name: "productQuantity", },
                      
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

  // Link block
  editor.BlockManager.add("link-block", {
    label: "Link Block",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
    </svg>`,
    content: `<a href="#" class="btn btn-outline-secondary p-2"><span>Link</span></a>`,
  });

  // Quote
  editor.BlockManager.add("quote", {
    label: "Quote",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>`,
    content: `<blockquote class="alert alert-primary py-3 m-2 quote-block">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10m11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10"/></svg>

      <span class="lead mx-2 quote-block-span">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</span>

    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539m-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537"/></svg>
      </blockquote>`,
  });

  //  H1 block
  editor.BlockManager.add("h1-block", {
    label: "Heading",
    media: `
    <svg  class="bi bi-type-h1" viewBox="0 0 16 16">
  <path d="M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z"/>
</svg>
    `,
    content: `<h1 class="gjs-droppable h1 text-center font-weight-bold h1-block">Put your title here</h1>
      
      <style>
          .h1{
            font-weight: 800;
            font-size: 3rem;
          }
      </style>
      
      `,
    category: "Basic",
    attributes: {
      title: "Insert h1 block",
    },
  });

  // Add Text Section
  editor.BlockManager.add("text-sect", {
    label: "Text Section",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
    </svg>`,
    content: `
    <div class="shadow-lg p-3 mb-5 bg-body rounded text-sect-head">
     <h1 class="heading text-sect-h1">Insert title here</h1>
    <p class="paragraph text-sect-p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    </p></div>
    `,
  });

  // Image block
  editor.BlockManager.add("image", {
    label: "Image",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    </svg>`,
    activate: true,
    content: {
      type: "image",
      style: { color: "black" },
      attributes: {
        class: "img-fluid img-block",
      },
    },
  });

  // 1 section
  editor.BlockManager.add("sect100", {
    label: "1 Section",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`,
    attributes: {
      class: "gjs-droppable",
    },
    content: `
    <div class="gjs-droppable container sect100Class"></div>

      <style>
      .sect100Class{
        height: 10rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      </style>
    `,
  });

  //  Add text block
  editor.BlockManager.add("text", {
    label: "Text",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    </svg>`,
    attributes: {
      class: "gjs-droppable",
    },
    content: `
    <p class= "gjs-droppable alert alert-success text-block-p">Insert your text here</p>
    `,
  });

  // 2/1 section
  editor.BlockManager.add("sect50", {
    label: "1/2 Section",
    category: "Basic",
    media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `
    <div class="d-flex container text-center sect50Class gjs-droppable">
  <div class=" gjs-droppable sect50Div1"></div>
  <div class=" gjs-droppable sect50Div1"></div>
</div>


  <style>
  .sect50Class{
    height: 10rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .sect50Div1{
    width: 50%;
    height: 100%;
  }
  </style>
    `,
  });

  //  3/1 section
  editor.BlockManager.add("sect30", {
    label: "1/3 Section",
    category: "Basic",
    media: `<svg viewBox="0 0 23 24">
      <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>
    </svg>`,
    content: `

    <div class="d-flex container text-center sect30Class gjs-droppable">
    <div class=" gjs-droppable sect30Div1"></div>
    <div class=" gjs-droppable sect30Div1"></div>
    <div class=" gjs-droppable sect30Div1"></div>
  </div>

      <style>
      .sect30Class{
        height: 10rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .sect30Div1{
        width: 50%;
        height: 100%;
      }
      </style>
    `,
  });

  // 3/7 section block
  editor.BlockManager.add("sect37", {
    label: "3/7 Section",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>
    </svg>`,
    content: `
    <div class="d-flex container text-center sect37Class gjs-droppable">
    <div class=" gjs-droppable sect37Div1"></div>
    <div class=" gjs-droppable sect37Div2"></div>
  </div>

  <style>
      .sect37Class{
        height: 10rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .sect37Div1{
        width: 30%;
        height: 100%;
      }
      .sect37Div2{
        width: 70%;
        height: 100%;
      }
      </style>
    `,
  });

  // Customer Review component
  editor.BlockManager.add("customer-review", {
    label: "Reviews",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"></path>
    </svg>`,
    content: `
    <section class="customer-review">
    <div class="container py-5 customer-review-container-div">
      <!-- head  -->
      <div class="row d-flex justify-content-center customer-review-flex-div">
        <div class="col-md-10 col-xl-8 text-center customer-review-head-div">
          <h3 class="fw-bold mb-4 customer-review-head-title">
            Testimonials
          </h3>
          <p class="mb-4 pb-2 mb-md-5 pb-md-0 customer-review-head-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </div>

      <!-- body  -->
      <div class="row text-center customer-review-card-body">
        <div class="col-md-4 mb-4 mb-md-0 customer-review-card-container">
          <div class="card customer-review-card">
            <div class="card-body py-4 mt-2 customer-review-inner-card">
              <div
                class="d-flex justify-content-center mb-4 customer-review-body-head"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  class="rounded-circle shadow-1-strong customer-review-head-img"
                  width="100"
                  height="100"
                />
              </div>
              <h5 class="font-weight-bold customer-review-card-title">
                Teresa May
              </h5>
              <h6
                class="font-weight-bold my-3 customer-review-card-second-title"
              >
                Founder at ET Company
              </h6>
              <ul
                class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"
              >
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-half text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
                    />
                  </svg>
                </li>
              </ul>
              <p class="mb-2 customer-review-card-p">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-quote text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"
                  /></svg
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4 mb-md-0 customer-review-card-container">
          <div class="card customer-review-card">
            <div
              class="card-body py-4 mt-2 card-body py-4 mt-2 customer-review-inner-card"
            >
              <div
                class="d-flex justify-content-center mb-4 customer-review-body-head"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                  class="rounded-circle shadow-1-strong customer-review-head-img"
                  width="100"
                  height="100"
                />
              </div>
              <h5 class="font-weight-bold customer-review-card-title">
                Maggie McLoan
              </h5>
              <h6
                class="font-weight-bold my-3 customer-review-card-second-title"
              >
                Photographer at Studio LA
              </h6>
              <ul
                class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"
              >
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
              </ul>
              <p class="mb-2 customer-review-card-p">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-quote text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"
                  /></svg
                >Autem, totam debitis suscipit saepe sapiente magnam officiis
                quaerat necessitatibus odio assumenda perferendis labore
                laboriosam.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-0 customer-review-card-container">
          <div class="card customer-review-card">
            <div
              class="card-body py-4 mt-2 card-body py-4 mt-2 customer-review-inner-card"
            >
              <div
                class="d-flex justify-content-center mb-4 customer-review-body-head"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                  class="rounded-circle shadow-1-strong customer-review-head-img"
                  width="100"
                  height="100"
                />
              </div>
              <h5 class="font-weight-bold customer-review-card-title">
                Alexa Horwitz
              </h5>
              <h6
                class="font-weight-bold my-3 customer-review-card-second-title"
              >
                Front-end Developer in NY
              </h6>
              <ul
                class="list-unstyled d-flex justify-content-center customer-review-card-star-ul"
              >
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-fill text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
                <li class="customer-review-card-star-li">
                  <svg
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star-half text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
                    />
                  </svg>
                </li>
              </ul>
              <p class="mb-2 customer-review-card-p">
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-quote text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"
                  /></svg
                >Cras sit amet nibh libero, in gravida nulla metus scelerisque
                ante sollicitudin commodo cras purus odio, vestibulum in
                tempus viverra turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<style>
.customer-review {
  color: #000;
  background-color: #f3f2f2;
}
 .card {
  background-color: #303030;
  color: #fff;
 }
</style>

    `,
  });

  //  Bootstrap button
  editor.BlockManager.add("button", {
    label: "Button",
    category: "Basic",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 20.5C20 21.3 19.3 22 18.5 22H13C12.6 22 12.3 21.9 12 21.6L8 17.4L8.7 16.6C8.9 16.4 9.2 16.3 9.5 16.3H9.7L12 18V9C12 8.4 12.4 8 13 8S14 8.4 14 9V13.5L15.2 13.6L19.1 15.8C19.6 16 20 16.6 20 17.1V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H8V12H4V4H20V12H18V14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2Z" />
    </svg>`,
    content: '<a class="btn btn-primary btn-block"><span>Button</span></a>',
  });

  //  Divider block
  editor.BlockManager.add("divider", {
    label: "Divider",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21 18H2V20H21V18M19 10V14H4V10H19M20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8M21 4H2V6H21V4Z" />
    </svg>`,
    content: `
      <div class="divider-table container">
      </div>


      <style>
        .divider-table {
          width: 100%;
          margin-top: 1rem;
          margin-bottom: 1rem;
          height: 0px;
          border: 1px solid gray;
        }
      </style>
    `,
  });

  //  3 Grid items content
  const gridItem = `
  <div class="card grid-item-card">
          <img class="card-img-top grid-item-img" src="https://via.placeholder.com/250x150/78c5d6/fff/" alt="Image"/>
            <div class="card-body  d-flex flex-column grid-item-card-body-col mt-4">
                <h1 class="card-titl p-2 text-center grid-item-card-body-col-head">Title here</h1>
                <p class="card-text p-2 text-center grid-item-card-body-col-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                <a href="#" class="btn btn-success p-2 grid-item-card-body-btn"><span>Go somewhere</span></a>
            </div>
   </div>
  
  <style>
    .grid-item-card{
      width: 18rem;
    }
  </style>
  `;

  //  3 Grid items block
  editor.BlockManager.add("grid-items", {
    label: "Grid Items",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"/>
  </svg>`,
    content: `
    <div class="all-grid-items">
    <div >${gridItem}</div>
    <div>${gridItem}</div>
    <div >${gridItem}</div>
    </div>

    <style>
      .all-grid-items{
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
    </style>
  `,
  });

  // 3 list items content
  const listItem = `<div class="card list-container d-inline-flex">
      <div class="list-item-cell list-inner-container">
        <div class="list-item-content list-content">
          <div class="list-item-row list-content-row">
            <div class="list-cell-left list-content-cell-left">
              <img class="card rounded list-content-cell-left-img" src="https://via.placeholder.com/150/78c5d6/fff" alt="Image"/>
            </div>
            <div class="list-cell-right list-content-cell-right">
              <h1 class="card-title list-content-cell-title">Title here</h1>
              <p class="card-text list-content-cell-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </div>
          </div>
        </div>
      </div>
  </div>

  <style>
    .list-inner-container{
      margin: 13px;
    }
    .list-content{
      margin: 13px;
    }
    .list-content-row{
      display: flex;
      gap: 1rem;
    }
    .3-list-content-cell-right{
      margin-left: 10px;
    }
  </style>

  `;

  // 3 list block
  editor.BlockManager.add("list-items", {
    label: "List Items",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"/>
  </svg>`,
    content: listItem + listItem,
  });

  // Social Icons styled with bootstrap
  editor.BlockManager.add(typeSocial, {
    label: "socialGroup",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
  </svg>`,
    content: `
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups social-container">
        <div class="btn-group" role="group" aria-label="First group social-inner-div">
              <a href="#" class="btn btn-primary social-icon-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg><br> <span>Facebook</span></a>
              <a href="#" class="btn btn-primary social-icon-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg><br> <span>Facebook</span></a>
              <a href="#" class="btn btn-primary social-icon-link"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
        </svg><br> <span>Facebook</span></a>
        </div>
</div>

<style>
  .btn-toolbar {
    display: inline-block;
  }
  .social-icon-link{
    margin: 12px;
  }
  .social-inner-div{
    margin: 0.5rem;
  }
</style>
      `,
  });

  //  Bootstrap Navbar
  editor.BlockManager.add(typeNavbar, {
    label: "Navbar",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
</svg>`,
    content: `<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><span>Navbar</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav justify-conter-center me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"><span>Home</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>About</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>Contact Us</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><span>Products</span></a>
          </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit"><span>Search</span></button>
        </form>
      </div>
    </div>
  </nav>
  `,
  });
  //  Hero Section
  editor.BlockManager.add(typeHero, {
    label: "Hero Section",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z" />
</svg>`,
    content: `
    <div class="hero-container">
    <p class="hero-text">GO TO SPACE</p>
    <p class="text-center text-white hero-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea libero animi neque officiis. Nemo corporis perspiciatis modi amet, saepe quaerat tempora deserunt consequuntur dolore libero recusandae ex, voluptate veniam?</p>
    <a class="btn btn-outline-light btn-lg hero-btn" href="#" style="align-items: center;" ><span>ORDER NOW</span></a>
  </div>

<style>
    .hero-container {
      background-image: url('https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg');
      background-color: #2a3448;
      background-size: 600px 469px;
      height: 469px;
      padding: 100px 0px;
      text-align: center;
    }
    .hero-text {
      color: #ffffff;
      font-family: Helvetica;
      font-size: 45px;
      line-height: 45px;
      font-weight: 900;
      padding: 20px;
    }

    @media only screen and (max-width: 600px) {
      .hero {
        display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      }
    }

  </style>
  `,
  });
  // Wrapper
  editor.BlockManager.add(typeWrapper, {
    label: "Wrapper",
    category: "Extra",
    media: `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M18 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V4C20 2.9 19.11 2 18 2M18 20H6V16H18V20M18 8H6V4H18V8Z" />
</svg>`,
    content: `<div class="wrapper shadow-lg p-3 mb-5 bg-body rounded">
    <div class="wrapper-section-top">
        <div class="wrapper-section-top-column">
            <img class="rounded" src="https://via.placeholder.com/350x250/78c5d6/fff" style="padding: 0; width: 100%">
        </div>
    </div>
    
    <div class="wrapper-section-bottom">
        <div class="wrapper-column">
            <p class="wrapper-column-text fs-4">First line of text</p>
            <hr class="wrapper-divider">
            <p class="wrapper-column-text fs-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum fugiat dolorum nemo voluptatibus corrupti nesciunt unde ut qui distinctio modi.</p>
        </div>
    </div>
</div>
  
  <style>
        .wrapper {
            padding: 50px 30px;
            width: 36rem;
        }
        .wrapper-section-top {
            padding: 20px;
        }
        .wrapper-section-bottom {
            padding: 20px;
        }
        .wrapper-column {
            border: 1px solid #dddddd;
        }
        .wrapper-column-text {
            padding: 20px;
        }
        .wrapper-divider {
            border-width: 1px;
            border-style: dashed;
            border-color: lightgrey;
            padding: 0 20px;
        }

        @media only screen and (max-width: 600px) {
          .wrapper{
            width: 100% !important;
            padding: 1rem;
          }
          .wrapper-column-text{
            padding: 1rem;
          }

          .wrapper-section-top {
            padding: 1rem;
        }
        .wrapper-section-bottom {
            padding: 1rem;
        }
        }
    </style>
  `,
  });

  // Video
  editor.BlockManager.add("video", {
    label: "Video",
    category: "Extra",
    media: `<svg class="bi bi-play-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
  </svg>`,
    content: {
      type: "video",
      src: "",
    },
  });

  // Carousel using bootstrap
  editor.BlockManager.add("carousel", {
    label: "Slider",
    category: "Extra",
    media: `<svg class="bi bi-sliders" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
  </svg>`,
    content: carousel,
  });

  // collapse using bootstrap component
  editor.BlockManager.add("collapse", {
    label: "Collapse",
    category: "Extra",
    media: `<svg class="bi bi-arrows-collapse" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8m7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0m-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0z"/>
  </svg>`,
    content: `
    <p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span>Toggle element</span></a>
</p>
<div class="row rowClass">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
      <p class="fs-6"> Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.</p>
      </div>
    </div>
  </div>
</div>
    `,
  });

  // Tabs component using bootstrap
  editor.BlockManager.add("tabs", {
    label: "Tabs",
    category: "Extra",
    media: `<svg class="bi bi-segmented-nav" viewBox="0 0 16 16">
    <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6 3h4V5H6zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1"/>
  </svg>`,
    content: `
    <ul class="nav nav-tabs myTab" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><p class="fs-6" style="margin-bottom: 0rem;">Home</p></button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false"><p class="fs-6" style="margin-bottom: 0rem;">Profile</p></button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"><p class="fs-6" style="margin-bottom: 0rem;">Contact</p></button>
    </li>
  </ul>
  <div class="tab-content border border-secondary myTab" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    <p class="fs-6" style="margin-bottom: 0rem;">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis ullam expedita sed ipsum tenetur laudantium architecto cumque esse accusamus praesentium quas eos quasi repellendus, a rem. Hic, soluta iusto?
    </p>
    </div>
    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <p class="fs-6" style="margin-bottom: 0rem;">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, velit quasi. Reprehenderit, quidem quos. Quibusdam, in? Veniam quas obcaecati eligendi maxime perferendis, atque ducimus cumque, praesentium voluptas delectus laboriosam quis necessitatibus ratione perspiciatis voluptatibus iusto.
    </p>
    </div>
    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
    <p class="fs-6" style="margin-bottom: 0rem;">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, facilis. Rerum, ad? Facilis ipsa illum quaerat corrupti earum? Sequi, distinctio!
    </p>
    </div>
  </div>

  <style>
  .myTab {
    width: 25rem;
  }
  @media only screen and (max-width: 600px) {
    .myTab{
      width: 100% !important;
    }
  }
  </style>
    `,
  });

  // Footer with bootstrap
  editor.BlockManager.add("footer", {
    label: "Footer",
    category: "Extra",
    media: `<svg class="bi bi-caret-up-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
    <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
  </svg>`,
    content: `
    <footer class="w-100 py-4 flex-shrink-0">
    <div class="container py-4">
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <h5 class="h1 text-white">FB.</h5>
                <p class="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <p class="small mb-0 text-whte">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Bootstrapious.com</a></p>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                    <li><a href="#"><span>Home</span></a></li>
                    <li><a href="#"><span>About</span></a></li>
                    <li><a href="#"><span>Get started</span></a></li>
                    <li><a href="#"><span>FAQ</span></a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                <li><a href="#"><span>Home</span></a></li>
                    <li><a href="#"><span>About</span></a></li>
                    <li><a href="#"><span>Get started</span></a></li>
                    <li><a href="#"><span>FAQ</span></a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="text-white mb-3">Newsletter</h5>
                <p class="small  text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>
</footer>

  <style>

  footer {
    background: #212529;
  }
  a {
    color: white;
    text-decoration: none;
    transition: all 0.3s;
  }
  
  a:hover, a:focus {
    text-decoration: none;
  }
  </style>
    `,
  });

  // Carousel with card
  // editor.BlockManager.add("CarouselCard", {
  //   label: "Carousel Card",
  //   category: "Extra",
  //   media: `<svg class="bi bi-calendar2-check-fill" viewBox="0 0 16 16">
  //     <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5m-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
  //   </svg>`,
  //   content: carouselSlider,
  // });

  // Vertically centered Modal Active component using bootstrap --> Will add later
  //   editor.BlockManager.add("bootstrapModal", {
  //     label: "Modal",
  //     category: "Extra",
  //     media: `<svg class="bi bi-calendar2-check-fill" viewBox="0 0 16 16">
  //     <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5m-2.6 5.854a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
  //   </svg>`,
  //     content: `
  // <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  // <p class="fs-6" style="margin-bottom: 0rem;" ondblclick="editable()">
  //   Launch  modal
  //   </p>
  // </button>

  // <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  //   <div class="modal-dialog modal-dialog-centered">
  //     <div class="modal-content">
  //       <div class="modal-header">
  //         <h1 class="modal-title fs-5" id="staticBackdropLabel"><p class="fs-6" style="margin-bottom: 0rem;">Modal title</p></h1>
  //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //       </div>
  //       <div class="modal-body">
  //       <p class="fs-6" style="margin-bottom: 0rem;">Modal body text goes here.</p>
  //       </div>
  //       <div class="modal-footer">
  //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><p class="fs-6" style="margin-bottom: 0rem;">Close</p></button>
  //         <button type="button" class="btn btn-primary"><p class="fs-6" style="margin-bottom: 0rem;">Understood</p></button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //     `,
  //   });

  // Off canvas component using bootstrap --> Will add later
  //   editor.BlockManager.add("offCanvas", {
  //     label: "Off Canvas",
  //     media: `<svg class="bi bi-layout-text-sidebar" viewBox="0 0 16 16">
  //     <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  //     <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9z"/>
  //   </svg>`,
  //     content: `
  // <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  //   Open Off Canvas
  // </button>

  // <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  //   <div class="offcanvas-header">
  //     <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
  //     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  //   </div>
  //   <div class="offcanvas-body">
  //     <div>
  //     <p class="fs-6" style="margin-bottom: 0rem;">
  //       Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
  //       </p>
  //     </div>
  //   </div>
  // </div>
  //     `,
  //   });

  //  Progress bar component using bootstrap --> add later if necessary
  //   editor.BlockManager.add("progressBar", {
  //     label: "Progress Bar",
  //     media: `<svg class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
  //     <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
  //   </svg>`,
  //     content: `
  //     <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="margin: 2rem;">
  //   <div class="progress-bar bg-success" style="width: 25%"></div>
  // </div>
  // <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  //   <div class="progress-bar bg-info" style="width: 50%"></div>
  // </div>
  // <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  //   <div class="progress-bar bg-warning" style="width: 75%"></div>
  // </div>
  // <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  //   <div class="progress-bar bg-danger" style="width: 100%"></div>
  // </div>
  //     `,
  //   });

  //  Spinner component using bootstrap --> add later if necessary
  // editor.BlockManager.add("spinner", {
  //   label: "Spinner",
  //   media: `<svg class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  //   <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  //   <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
  // </svg>`,
  //   content: `
  //   <div class="spinner-border text-warning" role="status">
  //   <span class="visually-hidden">Loading...</span>
  // </div>
  //   `,
  // });
};
