import{a as F,b as K}from"./chunk-C6Q5SG76.js";var ee=window,te=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),Me=new WeakMap,W=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(te&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=Me.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Me.set(t,e))}return e}toString(){return this.cssText}},Re=i=>new W(typeof i=="string"?i:i+"",void 0,de),he=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new W(t,i,de)},pe=(i,e)=>{te?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let s=document.createElement("style"),r=ee.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)})},se=te?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return Re(t)})(i):i;var ue,ie=window,Te=ie.trustedTypes,ht=Te?Te.emptyScript:"",Oe=ie.reactiveElementPolyfillSupport,me={toAttribute(i,e){switch(e){case Boolean:i=i?ht:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ne=(i,e)=>e!==i&&(e==e||i==i),fe={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:Ne},ge="finalized",w=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,s)=>{let r=this._$Ep(s,t);r!==void 0&&(this._$Ev.set(r,s),e.push(r))}),e}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let s=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){let o=this[e];this[t]=r,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||fe}static finalize(){if(this.hasOwnProperty(ge))return!1;this[ge]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let r of s)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(se(r))}else e!==void 0&&t.push(se(e));return t}static _$Ep(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return pe(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=fe){var r;let o=this.constructor._$Ep(e,s);if(o!==void 0&&s.reflect===!0){let n=(((r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?s.converter:me).toAttribute(t,s.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var s;let r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){let n=r.getPropertyOptions(o),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:me;this._$El=o,this[o]=l.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,s){let r=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||Ne)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(s)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};w[ge]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},Oe?.({ReactiveElement:w}),((ue=ie.reactiveElementVersions)!==null&&ue!==void 0?ue:ie.reactiveElementVersions=[]).push("1.6.3");var ve,re=window,U=re.trustedTypes,ze=U?U.createPolicy("lit-html",{createHTML:i=>i}):void 0,_e="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,Fe="?"+A,pt=`<${Fe}>`,T=document,Q=()=>T.createComment(""),Y=i=>i===null||typeof i!="object"&&typeof i!="function",Ke=Array.isArray,ut=i=>Ke(i)||typeof i?.[Symbol.iterator]=="function",ye=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,je=/>/g,M=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),De=/'/g,Be=/"/g,We=/^(?:script|style|textarea|title)$/i,Ve=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),C=Ve(1),P=Ve(2),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),He=new WeakMap,R=T.createTreeWalker(T,129,null,!1);function Qe(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ze!==void 0?ze.createHTML(e):e}var ft=(i,e)=>{let t=i.length-1,s=[],r,o=e===2?"<svg>":"",n=V;for(let l=0;l<t;l++){let a=i[l],c,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===V?p[1]==="!--"?n=Ue:p[1]!==void 0?n=je:p[2]!==void 0?(We.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=M):p[3]!==void 0&&(n=M):n===M?p[0]===">"?(n=r??V,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?M:p[3]==='"'?Be:De):n===Be||n===De?n=M:n===Ue||n===je?n=V:(n=M,r=void 0);let v=n===M&&i[l+1].startsWith("/>")?" ":"";o+=n===V?a+pt:h>=0?(s.push(c),a.slice(0,h)+_e+a.slice(h)+A+v):a+A+(h===-2?(s.push(void 0),l):v)}return[Qe(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),s]},X=class i{constructor({strings:e,_$litType$:t},s){let r;this.parts=[];let o=0,n=0,l=e.length-1,a=this.parts,[c,p]=ft(e,t);if(this.el=i.createElement(c,s),R.currentNode=this.el.content,t===2){let h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(r=R.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes()){let h=[];for(let u of r.getAttributeNames())if(u.endsWith(_e)||u.startsWith(A)){let v=p[n++];if(h.push(u),v!==void 0){let ce=r.getAttribute(v.toLowerCase()+_e).split(A),z=/([.?@])?(.*)/.exec(v);a.push({type:1,index:o,name:z[2],strings:ce,ctor:z[1]==="."?be:z[1]==="?"?$e:z[1]==="@"?Ce:D})}else a.push({type:6,index:o})}for(let u of h)r.removeAttribute(u)}if(We.test(r.tagName)){let h=r.textContent.split(A),u=h.length-1;if(u>0){r.textContent=U?U.emptyScript:"";for(let v=0;v<u;v++)r.append(h[v],Q()),R.nextNode(),a.push({type:2,index:++o});r.append(h[u],Q())}}}else if(r.nodeType===8)if(r.data===Fe)a.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(A,h+1))!==-1;)a.push({type:7,index:o}),h+=A.length-1}o++}}static createElement(e,t){let s=T.createElement("template");return s.innerHTML=e,s}};function j(i,e,t=i,s){var r,o,n,l;if(e===S)return e;let a=s!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[s]:t._$Cl,c=Y(e)?void 0:e._$litDirective$;return a?.constructor!==c&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(i),a._$AT(i,t,s)),s!==void 0?((n=(l=t)._$Co)!==null&&n!==void 0?n:l._$Co=[])[s]=a:t._$Cl=a),a!==void 0&&(e=j(i,a._$AS(i,e.values),a,s)),e}var Pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:s},parts:r}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:T).importNode(s,!0);R.currentNode=o;let n=R.nextNode(),l=0,a=0,c=r[0];for(;c!==void 0;){if(l===c.index){let p;c.type===2?p=new J(n,n.nextSibling,this,e):c.type===1?p=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(p=new Se(n,this,e)),this._$AV.push(p),c=r[++a]}l!==c?.index&&(n=R.nextNode(),l++)}return R.currentNode=T,o}v(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},J=class i{constructor(e,t,s,r){var o;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=r,this._$Cp=(o=r?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),Y(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ut(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){var t;let{values:s,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=X.createElement(Qe(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(s);else{let n=new Pe(o,this),l=n.u(this.options);n.v(s),this.$(l),this._$AH=n}}_$AC(e){let t=He.get(e.strings);return t===void 0&&He.set(e.strings,t=new X(e)),t}T(e){Ke(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,r=0;for(let o of e)r===t.length?t.push(s=new i(this.k(Q()),this.k(Q()),this,this.options)):s=t[r],s._$AI(o),r++;r<t.length&&(this._$AR(s&&s._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},D=class{constructor(e,t,s,r,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,r){let o=this.strings,n=!1;if(o===void 0)e=j(this,e,t,0),n=!Y(e)||e!==this._$AH&&e!==S,n&&(this._$AH=e);else{let l=e,a,c;for(e=o[0],a=0;a<o.length-1;a++)c=j(this,l[s+a],t,a),c===S&&(c=this._$AH[a]),n||(n=!Y(c)||c!==this._$AH[a]),c===d?e=d:e!==d&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!r&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},be=class extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},mt=U?U.emptyScript:"",$e=class extends D{constructor(){super(...arguments),this.type=4}j(e){e&&e!==d?this.element.setAttribute(this.name,mt):this.element.removeAttribute(this.name)}},Ce=class extends D{constructor(e,t,s,r,o){super(e,t,s,r,o),this.type=5}_$AI(e,t=this){var s;if((e=(s=j(this,e,t,0))!==null&&s!==void 0?s:d)===S)return;let r=this._$AH,o=e===d&&r!==d||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==d&&(r===d||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}},Se=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}};var Ie=re.litHtmlPolyfillSupport;Ie?.(X,J),((ve=re.litHtmlVersions)!==null&&ve!==void 0?ve:re.litHtmlVersions=[]).push("2.8.0");var B=(i,e,t)=>{var s,r;let o=(s=t?.renderBefore)!==null&&s!==void 0?s:e,n=o._$litPart$;if(n===void 0){let l=(r=t?.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=n=new J(e.insertBefore(Q(),l),l,void 0,t??{})}return n._$AI(i),n};var ke,we;var E=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=B(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return S}};E.finalized=!0,E._$litElement$=!0,(ke=globalThis.litElementHydrateSupport)===null||ke===void 0||ke.call(globalThis,{LitElement:E});var Ye=globalThis.litElementPolyfillSupport;Ye?.({LitElement:E});((we=globalThis.litElementVersions)!==null&&we!==void 0?we:globalThis.litElementVersions=[]).push("3.3.3");var Xe=i=>e=>typeof e=="function"?((t,s)=>(customElements.define(t,s),s))(i,e):((t,s)=>{let{kind:r,elements:o}=s;return{kind:r,elements:o,finisher(n){customElements.define(t,n)}}})(i,e);var gt=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?K(F({},e),{finisher(t){t.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},vt=(i,e,t)=>{e.constructor.createProperty(t,i)};function y(i){return(e,t)=>t!==void 0?vt(i,e,t):gt(i,e)}var O=({finisher:i,descriptor:e})=>(t,s)=>{var r;if(s===void 0){let o=(r=t.originalKey)!==null&&r!==void 0?r:t.key,n=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:K(F({},t),{key:o});return i!=null&&(n.finisher=function(l){i(l,o)}),n}{let o=t.constructor;e!==void 0&&Object.defineProperty(t,s,e(s)),i?.(o,s)}};function Je(i,e){return O({descriptor:t=>{let s={get(){var r,o;return(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){let r=typeof t=="symbol"?Symbol():"__"+t;s.get=function(){var o,n;return this[r]===void 0&&(this[r]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&n!==void 0?n:null),this[r]}}return s}})}var Ae,hs=((Ae=window.HTMLSlotElement)===null||Ae===void 0?void 0:Ae.prototype.assignedElements)!=null?(i,e)=>i.assignedElements(e):(i,e)=>i.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var Ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oe=i=>(...e)=>({_$litDirective$:i,values:e}),H=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Ze="important",yt=" !"+Ze,ne=oe(class extends H{constructor(i){var e;if(super(i),i.type!==Ge.ATTRIBUTE||i.name!=="style"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{let s=i[t];return s==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[e]){let{style:t}=i.element;if(this.ht===void 0){this.ht=new Set;for(let s in e)this.ht.add(s);return this.render(e)}this.ht.forEach(s=>{e[s]==null&&(this.ht.delete(s),s.includes("-")?t.removeProperty(s):t[s]="")});for(let s in e){let r=e[s];if(r!=null){this.ht.add(s);let o=typeof r=="string"&&r.endsWith(yt);s.includes("-")||o?t.setProperty(s,o?r.slice(0,-11):r,o?Ze:""):t[s]=r}}return S}});var et=i=>i??d;var x=i=>typeof i=="string",ae=i=>typeof i=="function";var f=i=>JSON.parse(JSON.stringify(i)),L=(i,e)=>{for(let[t,s]of Object.entries(e)){let r="{"+t+"}";for(;i.includes(r);)i=i.replace(r,s)}return i};console.assert(L("abc",{a:"x"})==="abc"),console.assert(L("{a}bc",{})==="{a}bc"),console.assert(L("{a}bc",{p:"q"})==="{a}bc"),console.assert(L("{a}bc",{a:"x"})==="xbc"),console.assert(L("{a}bc{a}bc",{a:"x"})==="xbcxbc"),console.assert(L("{a}{a}{b}",{a:"x",b:"y"})==="xxy");var tt=he`
  :host {
    display: block;
    position: relative;
    --light-color: #f0d9b5;
    --dark-color: #b58863;
    --highlight-color: yellow;
  }

  [part~='board'] {
    border: 2px solid #404040;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: repeat(8, 12.5%);
  }

  [part~='square'] {
    position: relative;

    /* disable any native browser highlighting */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  [part~='piece'],
  .piece-image {
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  [part~='spare-pieces'] {
    display: grid;
    position: relative;
    padding: 0 2px;
    grid-template-columns: repeat(8, 12.5%);
  }

  [part~='dragged-piece'] {
    display: none;
    position: absolute;
  }

  [part~='white'] {
    background-color: var(--light-color);
    color: var(--dark-color);
  }

  [part~='black'] {
    background-color: var(--dark-color);
    color: var(--light-color);
  }

  [part~='highlight'] {
    box-shadow: inset 0 0 3px 3px var(--highlight-color);
  }

  [part~='notation'] {
    cursor: default;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    position: absolute;
  }

  [part~='alpha'] {
    bottom: 1px;
    right: 3px;
  }

  [part~='numeric'] {
    top: 2px;
    left: 2px;
  }
`;var G=!0,le="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",N="abcdefgh".split(""),st=["wK","wQ","wR","wB","wN","wP"],it=["bK","bQ","bR","bB","bN","bP"],rt=i=>i.charCodeAt(0)%2^i.charCodeAt(1)%2?"white":"black",m=i=>x(i)&&i.search(/^[a-h][1-8]$/)!==-1,ot=i=>{if(!x(i))return!1;let e=i.split("-");return e.length!==2?!1:m(e[0])&&m(e[1])};G&&(console.assert(m("a1")),console.assert(m("e2")),console.assert(!m("D2")),console.assert(!m("g9")),console.assert(!m("a")),console.assert(!m(!0)),console.assert(!m(null)),console.assert(!m({})));var k=i=>x(i)&&i.search(/^[bw][KQRNBP]$/)!==-1;G&&(console.assert(k("bP")),console.assert(k("bK")),console.assert(k("wK")),console.assert(k("wR")),console.assert(!k("WR")),console.assert(!k("Wr")),console.assert(!k("a")),console.assert(!k(!0)),console.assert(!k(null)),console.assert(!k({})));var _t=i=>i.replace(/11111111/g,"8").replace(/1111111/g,"7").replace(/111111/g,"6").replace(/11111/g,"5").replace(/1111/g,"4").replace(/111/g,"3").replace(/11/g,"2"),Pt=i=>i.replace(/8/g,"11111111").replace(/7/g,"1111111").replace(/6/g,"111111").replace(/5/g,"11111").replace(/4/g,"1111").replace(/3/g,"111").replace(/2/g,"11"),b=i=>{if(!x(i))return!1;i=i.replace(/ .+$/,""),i=Pt(i);let e=i.split("/");if(e.length!==8)return!1;for(let t=0;t<8;t++)if(e[t].length!==8||e[t].search(/[^kqrnbpKQRNBP1]/)!==-1)return!1;return!0};G&&(console.assert(b(le)),console.assert(b("8/8/8/8/8/8/8/8")),console.assert(b("r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R")),console.assert(b("3r3r/1p4pp/2nb1k2/pP3p2/8/PB2PN2/p4PPP/R4RK1 b - - 0 1")),console.assert(!b("3r3z/1p4pp/2nb1k2/pP3p2/8/PB2PN2/p4PPP/R4RK1 b - - 0 1")),console.assert(!b("anbqkbnr/8/8/8/8/8/PPPPPPPP/8")),console.assert(!b("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/")),console.assert(!b("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBN")),console.assert(!b("888888/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR")),console.assert(!b("888888/pppppppp/74/8/8/8/PPPPPPPP/RNBQKBNR")),console.assert(!b({})));var $=i=>{if(typeof i!="object"||i===null)return!1;for(let[e,t]of Object.entries(i))if(!m(e)||!k(t))return!1;return!0};G&&(console.assert($({})),console.assert($({e2:"wP"})),console.assert($({e2:"wP",d2:"wP"})),console.assert(!$({e2:"BP"})),console.assert(!$({y2:"wP"})),console.assert(!$(null)),console.assert(!$(void 0)),console.assert(!$(1)),console.assert(!$("start")),console.assert(!$(le)));var bt=i=>i.toLowerCase()===i?"b"+i.toUpperCase():"w"+i.toUpperCase(),$t=i=>{let e=i.split("");return e[0]==="w"?e[1].toUpperCase():e[1].toLowerCase()},Ee=i=>{if(!b(i))return!1;i=i.replace(/ .+$/,"");let e=i.split("/"),t={},s=8;for(let r=0;r<8;r++){let o=e[r].split(""),n=0;for(let l=0;l<o.length;l++)if(o[l].search(/[1-8]/)!==-1){let a=parseInt(o[l],10);n=n+a}else{let a=N[n]+s;t[a]=bt(o[l]),n=n+1}s=s-1}return t},nt=Ee(le),q=i=>{if(!$(i))return!1;let e="",t=8;for(let s=0;s<8;s++){for(let r=0;r<8;r++){let o=N[r]+t;i.hasOwnProperty(o)?e=e+$t(i[o]):e=e+"1"}s!==7&&(e=e+"/"),t=t-1}return e=_t(e),e};G&&(console.assert(q(nt)===le),console.assert(q({})==="8/8/8/8/8/8/8/8"),console.assert(q({a2:"wP",b2:"bP"})==="8/8/8/8/8/8/Pp6/8"));var Le=i=>i==null?{}:(x(i)&&i.toLowerCase()==="start"&&(i=f(nt)),b(i)&&(i=Ee(i)),i),Ct=(i,e)=>{let t=i.split(""),s=N.indexOf(t[0])+1,r=parseInt(t[1],10),o=e.split(""),n=N.indexOf(o[0])+1,l=parseInt(o[1],10),a=Math.abs(s-n),c=Math.abs(r-l);return a>=c?a:c},St=i=>{let e=[];for(let s=0;s<8;s++)for(let r=0;r<8;r++){let o=N[s]+(r+1);i!==o&&e.push({square:o,distance:Ct(i,o)})}e.sort(function(s,r){return s.distance-r.distance});let t=[];for(let s=0;s<e.length;s++)t.push(e[s].square);return t},at=(i,e,t)=>{let s=St(t);for(let r=0;r<s.length;r++){let o=s[r];if(i.hasOwnProperty(o)&&i[o]===e)return o}return!1},lt=(i,e)=>{let t=f(i);for(let s in e){if(!e.hasOwnProperty(s)||!t.hasOwnProperty(s))continue;let r=t[s];delete t[s],t[e[s]]=r}return t};var xe=(i,e)=>{B(C` <svg class="piece-image" viewBox="0 0 45 45">${kt[i]}</svg> `,e)},kt={bB:P`
    <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;"> 
        <path
          d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />
        <path
          d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
        <path
          d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
      </g>
      <path
        d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
        style="fill:none; stroke:#ffffff; stroke-linejoin:miter;" />
    </g>
  `,wB:P`
    <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;"> 
        <path
          d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />
        <path
          d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />
        <path
          d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />
      </g>
      <path
        d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
    </g>
  `,bK:P`
    <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 22.5,11.63 L 22.5,6"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;"
        id="path6570" />
      <path
        d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
        style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;" />
      <path
        d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
        style="fill:#000000; stroke:#000000;" />
      <path
        d="M 20,8 L 25,8"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
      <path
        d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"
        style="fill:none; stroke:#ffffff;" />
      <path
        d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"
        style="fill:none; stroke:#ffffff;" />
    </g>
  `,wK:P`
    <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 22.5,11.63 L 22.5,6"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
      <path
        d="M 20,8 L 25,8"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
      <path
        d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
        style="fill:#ffffff; stroke:#000000; stroke-linecap:butt; stroke-linejoin:miter;" />
      <path
        d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
        style="fill:#ffffff; stroke:#000000;" />
      <path
        d="M 11.5,30 C 17,27 27,27 32.5,30"
        style="fill:none; stroke:#000000;" />
      <path
        d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
        style="fill:none; stroke:#000000;" />
      <path
        d="M 11.5,37 C 17,34 27,34 32.5,37"
        style="fill:none; stroke:#000000;" />
    </g>
  `,bN:P`
    <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
        style="fill:#000000; stroke:#000000;" />
      <path
        d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
        style="fill:#000000; stroke:#000000;" />
      <path
        d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
        style="fill:#ffffff; stroke:#ffffff;" />
      <path
        d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
        transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
        style="fill:#ffffff; stroke:#ffffff;" />
      <path
        d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
        style="fill:#ffffff; stroke:none;" />
    </g>
  `,wN:P`
    <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
        style="fill:#ffffff; stroke:#000000;" />
      <path
        d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
        style="fill:#ffffff; stroke:#000000;" />
      <path
        d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
        style="fill:#000000; stroke:#000000;" />
      <path
        d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
        transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
        style="fill:#000000; stroke:#000000;" />
    </g>
  `,bP:P`
    <path
      d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
      style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
  `,wP:P`
    <path
      d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
      style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" />
  `,bQ:P`
    <g style="opacity:1; fill:000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <g style="fill:#000000; stroke:none;">
        <circle cx="6"    cy="12" r="2.75" />
        <circle cx="14"   cy="9"  r="2.75" />
        <circle cx="22.5" cy="8"  r="2.75" />
        <circle cx="31"   cy="9"  r="2.75" />
        <circle cx="39"   cy="12" r="2.75" />
      </g>
      <path
        d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
        style="stroke-linecap:butt; stroke:#000000;" />
      <path
        d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
        style="stroke-linecap:butt;" />
      <path
        d="M 11,38.5 A 35,35 1 0 0 34,38.5"
        style="fill:none; stroke:#000000; stroke-linecap:butt;" />
      <path
        d="M 11,29 A 35,35 1 0 1 34,29"
        style="fill:none; stroke:#ffffff;" />
      <path
        d="M 12.5,31.5 L 32.5,31.5"
        style="fill:none; stroke:#ffffff;" />
      <path
        d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
        style="fill:none; stroke:#ffffff;" />
      <path
        d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
        style="fill:none; stroke:#ffffff;" />
    </g>
  `,wQ:P`
    <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(-1,-1)" />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(15.5,-5.5)" />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(32,-1)" />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(7,-4.5)" />
      <path
        d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
        transform="translate(24,-4)" />
      <path
        d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 11.5,30 C 15,29 30,29 33.5,30"
        style="fill:none;" />
      <path
        d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"
        style="fill:none;" />
    </g>
  `,bR:P`
    <g style="opacity:1; fill:000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
        style="stroke-linecap:butt;stroke-linejoin:miter;" />
      <path
        d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 12,35.5 L 33,35.5 L 33,35.5"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
      <path
        d="M 13,31.5 L 32,31.5"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
      <path
        d="M 14,29.5 L 31,29.5"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
      <path
        d="M 14,16.5 L 31,16.5"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
      <path
        d="M 11,14 L 34,14"
        style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
    </g>
  `,wR:P`
    <g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
      <path
        d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
        style="stroke-linecap:butt;" />
      <path
        d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
        style="stroke-linecap:butt;" />
      <path
        d="M 34,14 L 31,17 L 14,17 L 11,14" />
      <path
        d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
        style="stroke-linecap:butt; stroke-linejoin:miter;" />
      <path
        d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
      <path
        d="M 11,14 L 34,14"
        style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
    </g>
  `};var _=function(i,e,t,s){var r=arguments.length,o=r<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,s);else for(var l=i.length-1;l>=0;l--)(n=i[l])&&(o=(r<3?n(o):r>3?n(e,t,o):n(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o},wt=200,At=200,Et=60,Lt=30,xt=100;function Z(i){if(i?.state!=="dragging")throw new Error(`unexpected drag state ${JSON.stringify(i)}`)}var I=i=>typeof i=="number"?i:i==="fast"?200:i==="slow"?600:parseInt(i,10),ct=i=>`square-${i}`,dt=i=>`spare-piece-${i}`,qe=class extends H{render(e,t){return d}update(e,[t,s]){return ae(s)?s(t,e.element):e.element.replaceChildren(),S}},qt=oe(qe),g=class extends E{constructor(){super(...arguments),this.hideNotation=!1,this.orientation="white",this.draggablePieces=!1,this.dropOffBoard="snapback",this.renderPiece=(e,t)=>{let s;x(this.pieceTheme)?s=L(this.pieceTheme,{piece:e}):ae(this.pieceTheme)&&(s=this.pieceTheme(e)),s===void 0?xe(e,t):B(C`<img class="piece-image" src=${s} />`,t)},this.moveSpeed=At,this.snapbackSpeed=Et,this.snapSpeed=Lt,this.trashSpeed=xt,this.appearSpeed=wt,this.sparePieces=!1,this._highlightedSquares=new Set,this._animations=new Map,this._currentPosition={},this._mousemoveWindow=e=>{var t;if(((t=this._dragState)===null||t===void 0?void 0:t.state)!=="dragging")return;e.preventDefault();let s=e instanceof MouseEvent?e:e.changedTouches[0];this._updateDraggedPiece(s.clientX,s.clientY)},this._mouseupWindow=e=>{var t;if(((t=this._dragState)===null||t===void 0?void 0:t.state)!=="dragging")return;let s=e instanceof MouseEvent?e:e.changedTouches[0],r=this._isXYOnSquare(s.clientX,s.clientY);this._stopDraggedPiece(r)}}get position(){return this._currentPosition}set position(e){let t=this._currentPosition;this._setCurrentPosition(e),this.requestUpdate("position",t)}get showNotation(){return!this.hideNotation}set showNotation(e){this.hideNotation=!e}get _squareSize(){return this.offsetWidth/8}_getSquareElement(e){return this.shadowRoot.getElementById(ct(e))}_getSparePieceElement(e){return this.shadowRoot.getElementById(dt(e))}render(){return C`
      <div part="spare-pieces">
        ${this._renderSparePieces(this.orientation==="white"?"black":"white")}
      </div>
      ${this._renderBoard()}
      <div part="spare-pieces">
        ${this._renderSparePieces(this.orientation==="white"?"white":"black")}
      </div>
      <div
        id="dragged-pieces"
        style=${ne({width:`${this._squareSize}px`,height:`${this._squareSize}px`})}
      >
        ${this._renderDraggedPiece()}
      </div>
    `}_renderSparePieces(e){return this.sparePieces?C`
      <div></div>
      ${(e==="black"?it:st).map(s=>C`
            <div
              id="spare-${s}"
              @mousedown=${this._mousedownSparePiece}
              @touchstart=${this._mousedownSparePiece}
            >
              ${this._renderPiece(s,{},!1,dt(s))}
            </div>
          `)}
      <div></div>
    `:d}_renderDraggedPiece(){var e,t;let s={height:`${this._squareSize}px`,width:`${this._squareSize}px`},r=this._dragState;if(r!==void 0){s.display="block";let o=this.getBoundingClientRect();if(r.state==="dragging"){let{x:n,y:l}=r;Object.assign(s,{top:`${l-o.top-this._squareSize/2}px`,left:`${n-o.left-this._squareSize/2}px`})}else if(r.state==="snapback"){let{source:n}=r,a=this._getSquareElement(n).getBoundingClientRect();Object.assign(s,{transitionProperty:"top, left",transitionDuration:`${I(this.snapbackSpeed)}ms`,top:`${a.top-o.top}px`,left:`${a.left-o.left}px`})}else if(r.state==="trash"){let{x:n,y:l}=r;Object.assign(s,{transitionProperty:"opacity",transitionDuration:`${I(this.trashSpeed)}ms`,opacity:"0",top:`${l-o.top-this._squareSize/2}px`,left:`${n-o.left-this._squareSize/2}px`})}else if(r.state==="snap"){let l=this._getSquareElement(r.location).getBoundingClientRect();Object.assign(s,{transitionProperty:"top, left",transitionDuration:`${I(this.snapSpeed)}ms`,top:`${l.top-o.top}px`,left:`${l.left-o.left}px`})}}return this._renderPiece((t=(e=this._dragState)===null||e===void 0?void 0:e.piece)!==null&&t!==void 0?t:"",s,!1,void 0,"dragged-piece")}_renderBoard(){var e;let t=[],s=this.orientation==="black";for(let o=0;o<8;o++)for(let n=0;n<8;n++){let l=N[s?7-n:n],a=s?o+1:8-o,c=`${l}${a}`,p=rt(c),h=this._currentPosition[c],u=c===((e=this._dragState)===null||e===void 0?void 0:e.source),v=this._animations.get(c),ce=u||this._highlightedSquares.has(c)?"highlight":"",z=this._getAnimationStyles(h,v);!h&&v?.type==="clear"&&(h=v.piece),t.push(C`
          <div
            class="square"
            id=${ct(c)}
            data-square=${c}
            part="square ${c} ${p} ${ce}"
            @mousedown=${this._mousedownSquare}
            @mouseenter=${this._mouseenterSquare}
            @mouseleave=${this._mouseleaveSquare}
            @touchstart=${this._mousedownSquare}
          >
            ${this.showNotation&&o===7?C`<div part="notation alpha">${l}</div>`:d}
            ${this.showNotation&&n===0?C`<div part="notation numeric">${a}</div>`:d}
            ${this._renderPiece(h,z,u)}
          </div>
        `)}let r={width:this._squareSize*8+"px",height:this._squareSize*8+"px"};return C`<div part="board" style=${ne(r)}>${t}</div>`}_renderPiece(e,t,s,r,o){if(e===void 0)return d;let n=Object.assign({opacity:"1",transitionProperty:"",transitionDuration:"0ms"},t);return(s||e==="")&&(n.display="none"),e===""?d:(ae(this.renderPiece)||this._error(8272,"invalid renderPiece."),C`
      <div
        id=${et(r)}
        part="piece ${o??""}"
        piece=${e}
        style=${ne(n)}
        ...=${qt(e,this.renderPiece)}
      ></div>
    `)}_getAnimationStyles(e,t){if(t){if(e&&(t.type==="move-start"||t.type==="add-start"&&this.draggablePieces)){let s=t.type==="move-start"?this._getSquareElement(t.source):this._getSparePieceElement(e),r=t.type==="move-start"?this._getSquareElement(t.destination):this._getSquareElement(t.square),o=s.getBoundingClientRect(),n=r.getBoundingClientRect();return{position:"absolute",left:`${o.left-n.left}px`,top:`${o.top-n.top}px`,width:`${this._squareSize}px`,height:`${this._squareSize}px`}}if(e&&(t.type==="move"||t.type==="add"&&this.draggablePieces))return{position:"absolute",transitionProperty:"top, left",transitionDuration:`${I(this.moveSpeed)}ms`,top:"0",left:"0",width:`${this._squareSize}px`,height:`${this._squareSize}px`};if(!e&&t.type==="clear")return e=t.piece,{transitionProperty:"opacity",transitionDuration:`${I(this.trashSpeed)}ms`,opacity:"0"};if(e&&t.type==="add-start")return{opacity:"0"};if(e&&t.type==="add")return{transitionProperty:"opacity",transitionDuration:`${I(this.appearSpeed)}ms`}}return{}}_mousedownSquare(e){if(!this.draggablePieces&&!this.sparePieces)return;let s=e.currentTarget.getAttribute("data-square");if(s===null||!this._currentPosition.hasOwnProperty(s))return;e.preventDefault();let r=e instanceof MouseEvent?e:e.changedTouches[0];this._beginDraggingPiece(s,this._currentPosition[s],r.clientX,r.clientY)}_mousedownSparePiece(e){if(!this.sparePieces)return;let r=e.currentTarget.querySelector("[part~=piece]").getAttribute("piece");e.preventDefault();let o=e instanceof MouseEvent?e:e.changedTouches[0];this._beginDraggingPiece("spare",r,o.clientX,o.clientY)}_mouseenterSquare(e){if(this._dragState!==void 0)return;let t=e.currentTarget.getAttribute("data-square");if(!m(t))return;let s=this._currentPosition.hasOwnProperty(t)&&this._currentPosition[t];this.dispatchEvent(new CustomEvent("mouseover-square",{bubbles:!0,detail:{square:t,piece:s,position:f(this._currentPosition),orientation:this.orientation}}))}_mouseleaveSquare(e){if(this._dragState!==void 0)return;let t=e.currentTarget.getAttribute("data-square");if(!m(t))return;let s=this._currentPosition.hasOwnProperty(t)&&this._currentPosition[t];this.dispatchEvent(new CustomEvent("mouseout-square",{bubbles:!0,detail:{square:t,piece:s,position:f(this._currentPosition),orientation:this.orientation}}))}setPosition(e,t=!0){if(e=Le(e),!$(e))throw this._error(6482,"Invalid value passed to the position method.",e);if(t){let s=this._calculateAnimations(this._currentPosition,e);this._doAnimations(s,this._currentPosition,e)}this._setCurrentPosition(e),this.requestUpdate()}fen(){return q(this._currentPosition)}start(e){this.setPosition("start",e)}clear(e){this.setPosition({},e)}move(...e){let t=!0,s={};for(let o of e){if(o===!1){t=!1;continue}if(!ot(o)){this._error(2826,"Invalid move passed to the move method.",o);continue}let[n,l]=o.split("-");s[n]=l}let r=lt(this._currentPosition,s);return this.setPosition(r,t),r}flip(){this.orientation=this.orientation==="white"?"black":"white"}resize(){this.requestUpdate()}firstUpdated(){this.requestUpdate(),window.ResizeObserver!==void 0&&new ResizeObserver(()=>{this.resize()}).observe(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("mousemove",this._mousemoveWindow),window.addEventListener("mouseup",this._mouseupWindow),window.addEventListener("touchmove",this._mousemoveWindow,{passive:!1}),window.addEventListener("touchend",this._mouseupWindow,{passive:!1})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this._mousemoveWindow),window.removeEventListener("mouseup",this._mouseupWindow),window.removeEventListener("touchmove",this._mousemoveWindow),window.removeEventListener("touchend",this._mouseupWindow)}_setCurrentPosition(e){let t=f(this._currentPosition),s=f(e),r=q(t),o=q(s);r!==o&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0,detail:{value:s,oldValue:t}})),this._currentPosition=e)}_isXYOnSquare(e,t){let r=this.shadowRoot.elementsFromPoint(e,t).find(n=>n.classList.contains("square"));return r===void 0?"offboard":r.getAttribute("data-square")}_highlightSquare(e,t=!0){t?this._highlightedSquares.add(e):this._highlightedSquares.delete(e),this.requestUpdate("_highlightedSquares")}async _snapbackDraggedPiece(){Z(this._dragState);let{source:e,piece:t}=this._dragState;return e==="spare"?this._trashDraggedPiece():(this._dragState={state:"snapback",piece:t,source:e},this.requestUpdate(),await new Promise(s=>setTimeout(s,0)),new Promise(s=>{let r=()=>{this._draggedPieceElement.removeEventListener("transitionend",r),s(),this.dispatchEvent(new CustomEvent("snapback-end",{bubbles:!0,detail:{piece:t,square:e,position:f(this._currentPosition),orientation:this.orientation}}))};this._draggedPieceElement.addEventListener("transitionend",r)}))}async _trashDraggedPiece(){Z(this._dragState);let{source:e,piece:t}=this._dragState,s=f(this._currentPosition);return delete s[e],this._setCurrentPosition(s),this._dragState={state:"trash",piece:t,x:this._dragState.x,y:this._dragState.y,source:this._dragState.source},this.requestUpdate(),await new Promise(r=>setTimeout(r,0)),new Promise(r=>{let o=()=>{this._draggedPieceElement.removeEventListener("transitionend",o),r()};this._draggedPieceElement.addEventListener("transitionend",o)})}async _dropDraggedPieceOnSquare(e){Z(this._dragState);let{source:t,piece:s}=this._dragState,r=f(this._currentPosition);return delete r[t],r[e]=s,this._setCurrentPosition(r),this._dragState={state:"snap",piece:s,location:e,source:e},this.requestUpdate(),await new Promise(o=>setTimeout(o,0)),new Promise(o=>{let n=()=>{this._draggedPieceElement.removeEventListener("transitionend",n),o(),this.dispatchEvent(new CustomEvent("snap-end",{bubbles:!0,detail:{source:t,square:e,piece:s}}))};this._draggedPieceElement.addEventListener("transitionend",n)})}_beginDraggingPiece(e,t,s,r){let o=new CustomEvent("drag-start",{bubbles:!0,cancelable:!0,detail:{source:e,piece:t,position:f(this._currentPosition),orientation:this.orientation}});this.dispatchEvent(o),!o.defaultPrevented&&(this._dragState={state:"dragging",x:s,y:r,piece:t,location:e==="spare"?"offboard":e,source:e},this.requestUpdate())}_updateDraggedPiece(e,t){Z(this._dragState),this._dragState.x=e,this._dragState.y=t,this.requestUpdate();let s=this._isXYOnSquare(e,t);s!==this._dragState.location&&(m(this._dragState.location)&&this._highlightSquare(this._dragState.location,!1),m(s)&&this._highlightSquare(s),this.dispatchEvent(new CustomEvent("drag-move",{bubbles:!0,detail:{newLocation:s,oldLocation:this._dragState.location,source:this._dragState.source,piece:this._dragState.piece,position:f(this._currentPosition),orientation:this.orientation}})),this._dragState.location=s)}async _stopDraggedPiece(e){Z(this._dragState);let{source:t,piece:s}=this._dragState,r="drop";e==="offboard"&&(r=this.dropOffBoard==="trash"?"trash":"snapback");let o=f(this._currentPosition),n=f(this._currentPosition);t==="spare"&&m(e)&&(o[e]=s),m(t)&&(delete o[t],m(e)&&(o[e]=s));let l=new CustomEvent("drop",{bubbles:!0,detail:{source:t,target:e,piece:s,newPosition:o,oldPosition:n,orientation:this.orientation,setAction(a){r=a}}});this.dispatchEvent(l),this._highlightedSquares.clear(),r==="snapback"?await this._snapbackDraggedPiece():r==="trash"?await this._trashDraggedPiece():r==="drop"&&await this._dropDraggedPieceOnSquare(e),this._dragState=void 0,this.requestUpdate()}_calculateAnimations(e,t){e=f(e),t=f(t);let s=[],r={};for(let o in t)t.hasOwnProperty(o)&&e.hasOwnProperty(o)&&e[o]===t[o]&&(delete e[o],delete t[o]);for(let o in t){if(!t.hasOwnProperty(o))continue;let n=at(e,t[o],o);n&&(s.push({type:"move",source:n,destination:o,piece:t[o]}),delete e[n],delete t[o],r[o]=!0)}for(let o in t)t.hasOwnProperty(o)&&(s.push({type:"add",square:o,piece:t[o]}),delete t[o]);for(let o in e)e.hasOwnProperty(o)&&(r.hasOwnProperty(o)||(s.push({type:"clear",square:o,piece:e[o]}),delete e[o]));return s}async _doAnimations(e,t,s){if(e.length===0)return;let r=0,o=()=>{r++,r===e.length&&(this.shadowRoot.removeEventListener("transitionend",o),this._animations.clear(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("move-end",{bubbles:!0,detail:{oldPosition:f(t),newPosition:f(s)}})))};this.shadowRoot.addEventListener("transitionend",o),this._animations.clear();for(let n of e)n.type==="add"||n.type==="add-start"?this._animations.set(n.square,Object.assign(Object.assign({},n),{type:"add-start"})):n.type==="move"||n.type==="move-start"?this._animations.set(n.destination,Object.assign(Object.assign({},n),{type:"move-start"})):this._animations.set(n.square,n);this.requestUpdate(),await new Promise(n=>setTimeout(n,0)),this._animations.clear();for(let n of e)n.type==="move"||n.type==="move-start"?this._animations.set(n.destination,n):this._animations.set(n.square,n);this.requestUpdate()}_error(e,t,s){let r=`Chessboard Error ${e} : ${t}`;return this.dispatchEvent(new ErrorEvent("error",{message:r})),new Error(r)}};g.styles=tt;_([y({converter:i=>Le(i)})],g.prototype,"position",null);_([y({attribute:"hide-notation",type:Boolean})],g.prototype,"hideNotation",void 0);_([y()],g.prototype,"orientation",void 0);_([y({attribute:"draggable-pieces",type:Boolean})],g.prototype,"draggablePieces",void 0);_([y({attribute:"drop-off-board"})],g.prototype,"dropOffBoard",void 0);_([y({attribute:"piece-theme"})],g.prototype,"pieceTheme",void 0);_([y({attribute:!1})],g.prototype,"renderPiece",void 0);_([y({attribute:"move-speed"})],g.prototype,"moveSpeed",void 0);_([y({attribute:"snapback-speed"})],g.prototype,"snapbackSpeed",void 0);_([y({attribute:"snap-speed"})],g.prototype,"snapSpeed",void 0);_([y({attribute:"trash-speed"})],g.prototype,"trashSpeed",void 0);_([y({attribute:"appear-speed"})],g.prototype,"appearSpeed",void 0);_([y({attribute:"spare-pieces",type:Boolean})],g.prototype,"sparePieces",void 0);_([Je('[part~="dragged-piece"]')],g.prototype,"_draggedPieceElement",void 0);g=_([Xe("chess-board")],g);export{N as COLUMNS,g as ChessBoardElement,le as START_FEN,nt as START_POSITION,it as blackPieces,lt as calculatePositionFromMoves,Ee as fenToObj,at as findClosestPiece,rt as getSquareColor,Le as normalizePozition,q as objToFen,xe as renderWikipediaSVGPiece,b as validFen,ot as validMove,k as validPieceCode,$ as validPositionObject,m as validSquare,st as whitePieces};
