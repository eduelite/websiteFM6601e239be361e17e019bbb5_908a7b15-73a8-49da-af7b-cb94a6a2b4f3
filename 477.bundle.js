"use strict";(self.webpackChunkmfe4=self.webpackChunkmfe4||[]).push([[477],{477:(t,e,n)=>{n.r(e);var r=n(271),o=n.n(r),a=n(650),i=n.n(a);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function f(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:String(e)}function l(t){var e="function"==typeof Map?new Map:void 0;return l=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(p())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(t.bind.apply(t,r));return n&&s(o,n.prototype),o}(t,arguments,y(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)},l(t)}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var b=function(t){t.data,t.onUpdateData;var e=n(147).HO.Ym;return[o().createElement("h1",{key:"h1key"},"React",o().createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",height:"30"})),o().createElement("p",{key:"pkey"},"React Version: ",e)]},m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(l,t);var e,n,r,a,f=(r=l,a=p(),function(){var t,e=y(r);if(a){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===c(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function l(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(t=f.call(this)).dataState=null,t}return e=l,(n=[{key:"getDataState",value:function(){return this.dataState}},{key:"setDataState",value:function(t){this.dataState=t,console.log("react component set DataState:"),console.log(this.dataState)}},{key:"connectedCallback",value:function(){var t=this.getAttribute("data");console.log("react component input data"),console.log(t),i().render(o().createElement(b,{data:t,onUpdateData:this.setDataState}),this)}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),l}(l(HTMLElement));customElements.define("react-component6601e239be361e17e019bbb5",m)},147:t=>{t.exports=JSON.parse('{"HO":{"Ym":"^17.0.1"}}')}}]);