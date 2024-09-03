function set_loading() {
  /**
   * loading 占位
   * 解决首次加载时白屏的问题
   */
  const innerHTML = `
      <style>
      .loader {
        font-weight: bold;
        font-family: sans-serif;
        font-size: 30px;
        animation: l1 1s linear infinite alternate;
      }
      .loader:before {
        content:"Loading..."
      }
      @keyframes l1 {to{opacity: 0}}
      </style>

      <div style='position: absolute;top:0;right:0;bottom:0;left:0;z-index: 10;'>
        <div style='
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 362px;
        '>
          <div class='loader'></div>
        </div>
      </div>
`;

  const app_container = document.querySelector('#root');
  if (app_container && app_container.innerHTML?.trim().length <= 0) {
    app_container.innerHTML = innerHTML;
  }
}

function set_header_meta() {
  const header = document.getElementsByTagName('head')?.item(0);
  if (header) {
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', 'upgrade-insecure-requests');
    header.appendChild(meta);
  }
}

(function() {
  set_loading();
  //set_header_meta();
})();
