(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{4530:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/locations",function(){return l(7601)}])},1221:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let a=l(8754),n=(l(7294),a._(l(177)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let l=n.default,a={loading:e=>{let{error:t,isLoading:l,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e}),a={...a,...t};let r=a.loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?l({...a,loader:()=>null!=r?r().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete a.webpack,delete a.modules,noSSR(l,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7747:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let a=l(8754),n=a._(l(7294)),r=n.default.createContext(null)},177:function(e,t,l){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let a=l(8754),n=a._(l(7294)),r=l(7747),d=[],i=[],s=!1;function load(e){let t=e(),l={loading:!0,loaded:null,error:null};return l.promise=t.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function init(){if(!a){let t=new LoadableSubscription(e,l);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!s){let e=l.webpack?l.webpack():l.modules;e&&i.push(t=>{for(let l of e)if(t.includes(l))return init()})}function LoadableComponent(e,t){!function(){init();let e=n.default.useContext(r.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(t=>{e(t)})}();let d=n.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),n.default.useMemo(()=>{var t;return d.loading||d.error?n.default.createElement(l.loading,{isLoading:d.loading,pastDelay:d.pastDelay,timedOut:d.timedOut,error:d.error,retry:a.retry}):d.loaded?n.default.createElement((t=d.loaded)&&t.default?t.default:t,e):null},[e,d])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",n.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let l=[];for(;e.length;){let a=e.pop();l.push(a(t))}return Promise.all(l).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(d).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(s=!0,t());flushInitializers(i,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let o=Loadable},1700:function(e,t,l){"use strict";var a=l(5893);l(7294);var n=l(8513),r=l(1664),d=l.n(r);t.Z=function(){return(0,a.jsxs)("div",{className:"lg:mt-[160px] mx-small px-small md:px-[58px] lg:p-0 lg:mx-standard bg-primary-dark rounded-standard pb-[64px] md:mih-[350px] lg:min-h-[292px] text-center flex flex-col align-center items-center lg:grid lg:grid-cols-2 bg-footerCardMobile md:bg-footerCardTablet md:bg-no-repeat md:bg-center md:bg-[75%]",children:[(0,a.jsxs)("div",{className:"lg:ml-[95px] lg:py-[72px] lg:h-100",children:[(0,a.jsx)("div",{className:"lg:w-[298px] lg:text-left lg:p-0 mt-[64px] lg:mt-0 mb-[6px] text-light text-[32px] md:text-[40px] md:leading-[40px] font-[500] leading-[36px] md:px-[119px]",children:"Let’s talk about your project"}),(0,a.jsx)("div",{className:"lg:text-left text-light text-[15px] md:text-[16px] md:leading-[26px] font-[400] leading-[25px]",children:"Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow."})]}),(0,a.jsx)("div",{className:"lg:w-100",children:(0,a.jsx)("div",{className:"w-[152px] mt-[32px] lg:mt-0 lg:ml-auto lg:mr-[96px]",children:(0,a.jsx)(d(),{href:"/contact",children:(0,a.jsx)(n.Z,{children:"Get in touch"})})})})]})}},7601:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Locations}});var a=l(5893),n=l(1700);l(7294);var r=l(9008),d=l.n(r),i=l(5152),s=l.n(i),o=l(5225);let u=s()(()=>Promise.all([l.e(269),l.e(652)]).then(l.bind(l,5652)),{loadableGenerated:{webpack:()=>[5652]},ssr:!1});function Locations(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"Designo - Locations"})}),(0,a.jsxs)("div",{className:"max-w-container mx-auto relative overflow-hidden",children:[(0,a.jsx)("div",{className:"flex flex-col gap-large md:gap-[120px] lg:mt-[60px] lg:gap-[32px] md:mt-[64px] md:px-standard",children:o.K.map((e,t)=>(0,a.jsxs)("div",{className:"md:flex md:flex-col md:gap-[31px] lg:grid lg:grid-cols-3",children:[(0,a.jsx)("div",{className:"overflow-hidden h-[320px] z-10 md:rounded-standard lg:h-full md:min-h-[326px]".concat(t%2==0?" lg:order-1":" lg:order-0"),children:(0,a.jsx)(u,{coordinates:e.coordinates})}),(0,a.jsxs)("div",{className:"bg-threeCircles bg-cover md:bg-twoCircles col-span-2 py-[80px] px-small md:py-[96px] lg:w-full md:px-[75px] lg:pl-[96px] md:text-left md:min-h-[326px] min-h-[320px] bg-primary-light text-center flex flex-col justify-center text-dark-faded text-[15px] font-[400] leading-[25px] gap-standard md:rounded-standard",children:[(0,a.jsx)("div",{className:"text-primary-dark text-[32px] font-[500] leading-[36px] md:text-[40px] md:leading-[48px]",children:e.name}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row gap-[24px] md:gap-[30px] justify-between md:text-[16px] md:leading-[26px]",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"font-[700]",children:e.address.name}),(0,a.jsx)("div",{children:e.address.street}),(0,a.jsx)("div",{children:e.address.misc})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"font-[700]",children:"Contact"}),(0,a.jsxs)("div",{children:["P: ",e.contact.phone]}),(0,a.jsxs)("div",{children:["M: ",e.contact.email]})]})]})]})]},e.name))}),(0,a.jsx)("div",{className:"mt-[120px]",children:(0,a.jsx)(n.Z,{})})]})]})}},5152:function(e,t,l){e.exports=l(1221)}},function(e){e.O(0,[336,774,888,179],function(){return e(e.s=4530)}),_N_E=e.O()}]);