var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("iQIUW");function r(e,n){const o=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}function l({position:e,delay:n}){i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)}function u({position:e,delay:n}){i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:n,step:o,amount:t}=e.target,i=Number(n.value),a=Number(o.value),d=Number(t.value);for(let e=0;e<d;e+=1)r(e+1,i+e*a).then(l).catch(u)}));
//# sourceMappingURL=03-promises.277d3a61.js.map
