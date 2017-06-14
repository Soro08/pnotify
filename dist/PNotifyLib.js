"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},PNotifyLib=function(){function t(){var t=o("style");t.id="svelte-1874503376-style",t.textContent="\n  [svelte-1874503376].pnotify-notice, [svelte-1874503376] .pnotify-notice {\n    display: block;\n  }\n",c(t,document.head)}function n(t,n){var e=o("div");return r(e,"svelte-1874503376",""),e.className="pnotify-notice",c(u("PNotify"),e),{mount:function(t,n){i(e,t,n)},unmount:function(){s(e)},destroy:l}}function e(e){e=e||{},this._state=f(b.data(),e.data),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=e._root||this,this._yield=e._yield,this._torndown=!1,document.getElementById("svelte-1874503376-style")||t(),this._fragment=n(this._state,this),e.target&&this._fragment.mount(e.target,null),e._root?e._root._renderHooks.push(b.oncreate.bind(this)):b.oncreate.call(this)}function o(t){return document.createElement(t)}function i(t,n,e){n.insertBefore(t,e)}function r(t,n,e){t.setAttribute(n,e)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createTextNode(t)}function c(t,n){n.appendChild(t)}function f(t){for(var n,e,o=1,i=arguments.length;o<i;o++){e=arguments[o];for(n in e)t[n]=e[n]}return t}function a(t,n,e,o){for(var i in n)if(i in e){var r=e[i],s=o[i];if(m(r,s)){var u=n[i];if(!u)continue;for(var c=0;c<u.length;c+=1){var f=u[c];f.__calling||(f.__calling=!0,f.call(t,r,s),f.__calling=!1)}}}}function l(){}function h(t){return t?this._state[t]:this._state}function _(t,n){var e=t in this._handlers&&this._handlers[t].slice();if(e)for(var o=0;o<e.length;o+=1)e[o].call(this,n)}function d(t,n,e){var o=e&&e.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(n),e&&!1===e.init||(n.__calling=!0,n.call(this,this._state[t]),n.__calling=!1),{cancel:function(){var e=o[t].indexOf(n);~e&&o[t].splice(e,1)}}}function p(t,n){if("teardown"===t)return this.on("destroy",n);var e=this._handlers[t]||(this._handlers[t]=[]);return e.push(n),{cancel:function(){var t=e.indexOf(n);~t&&e.splice(t,1)}}}function y(t){this._set(f({},t)),this._root._flush()}function v(){if(this._renderHooks)for(;this._renderHooks.length;)this._renderHooks.pop()()}function m(t,n){return t!==n||t&&"object"===(void 0===t?"undefined":_typeof(t))||"function"==typeof t}var b=function(){return{oncreate:function(){this.thing()},data:function(){return{dummy:!0}},methods:{thing:function(){return null}}}}();return f(e.prototype,b.methods,{get:h,fire:_,observe:d,on:p,set:y,_flush:v}),e.prototype._set=function(t){var n=this._state;this._state=f({},n,t),a(this,this._observers.pre,t,n),a(this,this._observers.post,t,n)},e.prototype.teardown=e.prototype.destroy=function(t){this.fire("destroy"),!1!==t&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=null,this._state={},this._torndown=!0},e}();
//# sourceMappingURL=PNotifyLib.js.map