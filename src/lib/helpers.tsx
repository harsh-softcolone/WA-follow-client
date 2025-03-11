interface IChatList {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

interface IChat {
  isChatBlurred: boolean;
  setIsChatBlurred: (value: boolean) => void;
}
interface IDp {
  isDPBlurred: boolean;
  setIsDPBlurred: (value: boolean) => void;
}

export const findAppElement = () => {
  const element = document.getElementById("app");
  if (element) {
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
      ._amj- {
        width: 100% !important;
      }
      ._ap6h._alzb._alze {
        height: 60px !important; 
        padding-top: 0px !important; 
        padding-bottom: 0px !important; 
      }
      .app-wrapper-web {
        height: calc(100% - 72px) !important; 
        margin: 0 !important;
      }
      #app {
        margin-top: 33px !important;
      }
      .whatsapp-navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 48px;
        width: calc(100% - 360px) !important;
        border-bottom: 1px solid #212121;
        transition: display 0.3s ease-in-out;
      }
      .whatsapp-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 58px;
        width: 100%;
        border-top: 1px solid #212121;
        transition: display 0.3s ease-in-out;
      }
      .ellipsis {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; /* Show only one line */
        overflow: hidden;
        text-overflow: ellipsis; /* Add ellipsis (...) */
      }
      .language-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        background: #202c33;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        padding: 8px 0;
        min-width: 160px;
        z-index: 1000;
        border: 1px solid rgba(0, 0, 0, 0.1);
        animation: slideIn 0.2s ease-out;
      }
      .language-option {
        width: 100%;
        padding: 10px 16px;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 14px;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .language-option:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: #128c7e;
      }
      .toast-container {
        position: fixed;
        top: 70px;
        right: 24px;
        z-index: 9999;
      }
      .toast-content {
        background: #128c7e;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: toastSlideIn 0.3s ease-out;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .button-container {
        width: 25px;
        height: 25px;
        padding: 0;
        margin: 0;
        border-radius: 50%;
        border: none;
        background: #000000b3;
        color: #e9edef80;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ._akbu em {
        font-size: 13px;
        color: #e9edef;
      }
      .xc8qplx {
        width: calc(100% - 360px) !important;
      }
    `;
    document.head.appendChild(style);
  }
};
