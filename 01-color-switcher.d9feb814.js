const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let d=null;t.addEventListener("click",(function(){d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled"),e.setAttribute("disabled","true")}));
//# sourceMappingURL=01-color-switcher.d9feb814.js.map
