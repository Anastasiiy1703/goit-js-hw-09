!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),a={form:document.querySelector(".form"),delay:document.querySelector("input[name='delay']"),step:document.querySelector("input[name='step']"),amount:document.querySelector("input[name='amount']"),createPromiseBtn:document.querySelector("button")};function u(e,n){return new Promise((function(t,o){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}))}a.form.addEventListener("submit",(function(n){n.preventDefault();for(var t=parseInt(a.delay.value),o=parseInt(a.step.value),r=parseInt(a.amount.value),l=t,c=0;c<r;c+=1)u(c+1,l).then((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),l+=o}))}();
//# sourceMappingURL=03-promises.9bff3b6c.js.map
