function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var l=o("7Y9D8");document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const{elements:{delay:r,step:n,amount:o}}=t.currentTarget;let u=null,i=o.value,a=1,d=Number(r.value);u=setInterval((()=>{i-=1,function(e,t){return new Promise(((r,n)=>{setTimeout((()=>{Math.random()>.3?r(`✅ Fulfilled promise ${e} in ${t}ms`):n(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}(a,d).then((t=>{e(l).Notify.success(t,{timeout:4e3})})).catch((t=>{e(l).Notify.failure(t,{timeout:4e3})})),a+=1,d+=Number(n.value),i||clearInterval(u)}),1e3)}));
//# sourceMappingURL=03-promises.e0aead90.js.map
