export const findAppElement = () => {
  const element = document.getElementById("app");
  if (element) {
    // element.classList.add("with-extension");
    // Add custom styles
    const style = document.createElement("style");
    style.textContent = `
      .xo92w5m {
      max-width: 40px;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      }
      .xw7yly9 {
      margin-top: 24px !important;
      margin-bottom: 12px !important;
      margin-left: auto !important;
      margin-right: auto !important;
      }
        ._amj-{
          width:100% !important;
        }
          ._ap6h._alzb._alze {
       height: 60px !important; 
       padding-top: 0px !important; 
       padding-bottom: 0px !important; 
  
  }
        .app-wrapper-web {
            // height: calc(100% - 72px) !important; 
            margin: 0 !important;
          }
          // #app.with-extension {
          //   width: calc(100% - 360px) !important;
          // }
             /* Make space for our navbar */
          // body {
          //   overflow: hidden !important;
          // }
          // #app > div > div > div {
          //   height: calc(100vh - 48px) !important;
          // }
          /* Position your navbar */
          /* Adjust the right sidebar */
          // .sidebar-content {
          //   top: 48px !important;
          //   height: calc(100vh - 48px) !important;
          // }
        `;
    document.head.appendChild(style);
  }
};
