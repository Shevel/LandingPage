(()=>{"use strict";(()=>{function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t){var n=t.id,o=t.title,a=t.urlToImage,r=t.tags;!function(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}}(t,["id","title","urlToImage","tags"]),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=n,this.title=o,this.urlToImage=a,this.tags=r}var n,o;return n=e,(o=[{key:"generateArticle",value:function(){var t="",e=document.createElement("article");return e.className="strategy block-shadowed",e.setAttribute("data-id",this.id),this.urlToImage&&(t+='<img class="strategy__image" src='.concat(this.urlToImage,' alt="strategy">')),(this.title||this.tags)&&(t+='<div class="strategy__content">',this.title&&(t+='<h3 class="strategy__name">'.concat(this.title,"</h3>")),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map((function(e){t+='<span class="tag tag_colored">'.concat(e,"</span>")})),t+="</div>"),t+="</div>"),e.innerHTML=t,e}}])&&t(n.prototype,o),e}();function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.classes=e,this.modal="",this.modalContent="",this.modalCloseBtn="",this.overlay=""}var e,o;return e=t,(o=[{key:"buildModal",value:function(t){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal__content"),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"span","modal__close-icon"),this.modalCloseBtn.innerHTML='<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#2F281E"/></svg>',this.setContent(t),this.appendModalElements(),this.bindEvents(),this.openModal()}},{key:"createDomNode",value:function(t,e){var n;t=document.createElement(e);for(var o=arguments.length,a=new Array(o>2?o-2:0),r=2;r<o;r++)a[r-2]=arguments[r];return(n=t.classList).add.apply(n,a),t}},{key:"setContent",value:function(t){"string"==typeof t?this.modalContent.innerHTML=t:(this.modalContent.innerHTML="",this.modalContent.appendChild(t))}},{key:"appendModalElements",value:function(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}},{key:"bindEvents",value:function(){this.modalCloseBtn.addEventListener("click",this.closeModal),this.overlay.addEventListener("click",this.closeModal)}},{key:"openModal",value:function(){console.log(this.overlay),document.body.append(this.overlay)}},{key:"closeModal",value:function(t){var e=t.target.classList;(e.contains("overlay")||e.contains("modal__close-icon"))&&document.querySelector(".overlay").remove()}}])&&n(e.prototype,o),t}();function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(o){var a=Object.getOwnPropertyDescriptor(o,e);return a.get?a.get.call(n):a.value}})(t,e,n||t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(d,t);var e,n,o,a,u=(o=d,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(o);if(a){var n=c(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function d(t,e){var n,o=e.id,a=e.title,r=e.urlToImage,i=e.tags,s=e.content,l=e.date;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(n=u.call(this,t)).id=o,n.title=a,n.urlToImage=r,n.tags=i,n.content=s,n.date=l,n}return e=d,(n=[{key:"generateContent",value:function(){var t="",e=document.createElement("div");return e.className="article-modal__content",this.urlToImage&&(t+='<img class="strategy__image" src='.concat(this.urlToImage,' alt="strategy">')),(this.title||this.tags||this.content||this.date)&&(t+='<div class="strategy__content">',this.date&&(t+='<p class="strategy__date">'.concat(this.date,"</p>")),this.title&&(t+='<h3 class="strategy__name">'.concat(this.title,"</h3>")),this.content&&(t+='<p class="strategy__text">'.concat(this.content,"</p>")),this.tags&&(t+='<div class="strategy__tags tags">',this.tags.map((function(e){t+='<span class="tag tag_colored">'.concat(e,"</span>")})),t+="</div>"),t+="</div>"),e.innerHTML=t,e}},{key:"renderModal",value:function(){var t=this.generateContent();console.log(t),i(c(d.prototype),"buildModal",this).call(this,t)}}])&&r(e.prototype,n),d}(o),d=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"}],f=function(t){var n=[];return t.forEach((function(t){n.push(new e(t))})),n},h=function(t){new o("tools-modal").buildModal(t)},y=function(){document.querySelector(".strategy__wrapper").addEventListener("click",(function(t){if(t.target.closest(".strategy")){var e=t.target.closest(".strategy").getAttribute("data-id"),n=(o=e,d.find((function(t){return t.id==o})));new u("article-modal",n).renderModal()}var o}))};window.onload=function(){var t,e;d&&((t=document.querySelector(".strategy__wrapper")).innerHTML=null,e=t,f(d).forEach((function(t){e.append(t.generateArticle())})),y()),document.querySelector(".strategies__tags").addEventListener("click",(function(t){if(t.target.classList.contains("tag")){var e=t.target;document.querySelectorAll(".strategies__tags .tag").forEach((function(t){t.classList.remove("tag_selected"),t.classList.add("tag_bordered")})),function(t){t.classList.remove("tag_bordered"),t.classList.add("tag_selected")}(e),"All"===e.innerText?document.querySelectorAll(".strategy__wrapper .strategy").forEach((function(t){t.classList.remove("strategy_hidden")})):(n=e.innerText,document.querySelectorAll(".strategy__wrapper .strategy").forEach((function(t){t.classList.add("strategy_hidden"),t.querySelectorAll(".tag").forEach((function(e){e.innerText===n&&t.classList.remove("strategy_hidden")}))})))}var n})),document.querySelector(".tools__button .button").addEventListener("click",(function(){h("Test content for Tools Modal")}))}})()})();