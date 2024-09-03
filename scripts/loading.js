/**
 * loading 占位
 * 解决首次加载时白屏的问题
 */
const innerHTML = `
<style>
        html,
        body,
        #root {
          margin: 0;
          padding: 0;
        }
        #root {
          background-repeat: no-repeat;
          background-size: 100% auto;
        }
      </style>

      <style>
      .loading {
        display: block;
        position: relative;
        width: 6px;
        height: 10px;
        animation: rectangle infinite 1s ease-in-out -0.2s;
        background-color: #000;
      }

      .loading:before,
      .loading:after {
        position: absolute;
        width: 6px;
        height: 10px;
        content: "";
        background-color: #000;
      }

      .loading:before {
        left: -14px;
        animation: rectangle infinite 1s ease-in-out -0.4s;
      }

      .loading:after {
        right: -14px;
        animation: rectangle infinite 1s ease-in-out;
      }

      @keyframes rectangle {
        0%,
        80%,
        100% {
          height: 20px;
          box-shadow: 0 0 #000;
        }

        40% {
          height: 30px;
          box-shadow: 0 -20px #000;
        }
      }
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
          <div class='loading' style='margin-bottom:10px'></div>
          <h3>正在加载中...</h3>
        </div>

      </div>
`;

(function() {
  const app_container = document.querySelector('#root');
  if (app_container && app_container.innerHTML?.trim().length <= 0) {
    app_container.innerHTML = innerHTML;
  }

  const header = document.getElementsByTagName('head')?.item(0);
  if (header) {
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'Content-Security-Policy');
    meta.setAttribute('content', 'upgrade-insecure-requests');
    header.appendChild(meta);
  }

})();
