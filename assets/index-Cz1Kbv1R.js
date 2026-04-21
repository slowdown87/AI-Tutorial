function qc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function bc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cs={exports:{}},pl={},ks={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),ed=Symbol.for("react.portal"),td=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),id=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),sd=Symbol.for("react.memo"),ud=Symbol.for("react.lazy"),la=Symbol.iterator;function cd(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var Ss={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Es=Object.assign,Ns={};function fn(e,t,n){this.props=e,this.context=t,this.refs=Ns,this.updater=n||Ss}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zs(){}zs.prototype=fn.prototype;function lo(e,t,n){this.props=e,this.context=t,this.refs=Ns,this.updater=n||Ss}var io=lo.prototype=new zs;io.constructor=lo;Es(io,fn.prototype);io.isPureReactComponent=!0;var ia=Array.isArray,Ls=Object.prototype.hasOwnProperty,oo={current:null},Ps={key:!0,ref:!0,__self:!0,__source:!0};function js(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ls.call(t,r)&&!Ps.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:lr,type:e,key:i,ref:o,props:l,_owner:oo.current}}function dd(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ao(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function fd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oa=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fd(""+e.key):t.toString(36)}function zr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case lr:case ed:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ml(o,0):r,ia(l)?(n="",e!=null&&(n=e.replace(oa,"$&/")+"/"),zr(l,t,n,"",function(c){return c})):l!=null&&(ao(l)&&(l=dd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(oa,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",ia(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ml(i,a);o+=zr(i,t,n,s,l)}else if(s=cd(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ml(i,a++),o+=zr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function fr(e,t,n){if(e==null)return e;var r=[],l=0;return zr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function pd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Lr={transition:null},md={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:oo};function Ts(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:fr,forEach:function(e,t,n){fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fr(e,function(){t++}),t},toArray:function(e){return fr(e,function(t){return t})||[]},only:function(e){if(!ao(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=fn;j.Fragment=td;j.Profiler=rd;j.PureComponent=lo;j.StrictMode=nd;j.Suspense=ad;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=md;j.act=Ts;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Es({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=oo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ls.call(t,s)&&!Ps.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:lr,type:e.type,key:l,ref:i,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ld,_context:e},e.Consumer=e};j.createElement=js;j.createFactory=function(e){var t=js.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:od,render:e}};j.isValidElement=ao;j.lazy=function(e){return{$$typeof:ud,_payload:{_status:-1,_result:e},_init:pd}};j.memo=function(e,t){return{$$typeof:sd,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=t}};j.unstable_act=Ts;j.useCallback=function(e,t){return ce.current.useCallback(e,t)};j.useContext=function(e){return ce.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};j.useEffect=function(e,t){return ce.current.useEffect(e,t)};j.useId=function(){return ce.current.useId()};j.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ce.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};j.useRef=function(e){return ce.current.useRef(e)};j.useState=function(e){return ce.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ce.current.useTransition()};j.version="18.3.1";ks.exports=j;var x=ks.exports;const Ms=bc(x),hd=qc({__proto__:null,default:Ms},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=x,vd=Symbol.for("react.element"),yd=Symbol.for("react.fragment"),Id=Object.prototype.hasOwnProperty,Ad=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_d={key:!0,ref:!0,__self:!0,__source:!0};function Rs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Id.call(t,r)&&!_d.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:vd,type:e,key:i,ref:o,props:l,_owner:Ad.current}}pl.Fragment=yd;pl.jsx=Rs;pl.jsxs=Rs;Cs.exports=pl;var g=Cs.exports,ai={},Os={exports:{}},_e={},Ds={exports:{}},Fs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,L){var P=S.length;S.push(L);e:for(;0<P;){var Q=P-1>>>1,Z=S[Q];if(0<l(Z,L))S[Q]=L,S[P]=Z,P=Q;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var L=S[0],P=S.pop();if(P!==L){S[0]=P;e:for(var Q=0,Z=S.length,cr=Z>>>1;Q<cr;){var _t=2*(Q+1)-1,Tl=S[_t],wt=_t+1,dr=S[wt];if(0>l(Tl,P))wt<Z&&0>l(dr,Tl)?(S[Q]=dr,S[wt]=P,Q=wt):(S[Q]=Tl,S[_t]=P,Q=_t);else if(wt<Z&&0>l(dr,P))S[Q]=dr,S[wt]=P,Q=wt;else break e}}return L}function l(S,L){var P=S.sortIndex-L.sortIndex;return P!==0?P:S.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],m=1,p=null,h=3,y=!1,I=!1,A=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(S){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=S)r(c),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(c)}}function v(S){if(A=!1,d(S),!I)if(n(s)!==null)I=!0,Pl(w);else{var L=n(c);L!==null&&jl(v,L.startTime-S)}}function w(S,L){I=!1,A&&(A=!1,f(z),z=-1),y=!0;var P=h;try{for(d(L),p=n(s);p!==null&&(!(p.expirationTime>L)||S&&!ze());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,h=p.priorityLevel;var Z=Q(p.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(s)&&r(s),d(L)}else r(s);p=n(s)}if(p!==null)var cr=!0;else{var _t=n(c);_t!==null&&jl(v,_t.startTime-L),cr=!1}return cr}finally{p=null,h=P,y=!1}}var E=!1,N=null,z=-1,H=5,T=-1;function ze(){return!(e.unstable_now()-T<H)}function gn(){if(N!==null){var S=e.unstable_now();T=S;var L=!0;try{L=N(!0,S)}finally{L?vn():(E=!1,N=null)}}else E=!1}var vn;if(typeof u=="function")vn=function(){u(gn)};else if(typeof MessageChannel<"u"){var ra=new MessageChannel,Zc=ra.port2;ra.port1.onmessage=gn,vn=function(){Zc.postMessage(null)}}else vn=function(){C(gn,0)};function Pl(S){N=S,E||(E=!0,vn())}function jl(S,L){z=C(function(){S(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){I||y||(I=!0,Pl(w))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var P=h;h=L;try{return S()}finally{h=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,L){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var P=h;h=S;try{return L()}finally{h=P}},e.unstable_scheduleCallback=function(S,L,P){var Q=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Q+P:Q):P=Q,S){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,S={id:m++,callback:L,priorityLevel:S,startTime:P,expirationTime:Z,sortIndex:-1},P>Q?(S.sortIndex=P,t(c,S),n(s)===null&&S===n(c)&&(A?(f(z),z=-1):A=!0,jl(v,P-Q))):(S.sortIndex=Z,t(s,S),I||y||(I=!0,Pl(w))),S},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(S){var L=h;return function(){var P=h;h=L;try{return S.apply(this,arguments)}finally{h=P}}}})(Fs);Ds.exports=Fs;var wd=Ds.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=x,Ae=wd;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Us=new Set,Un={};function Ot(e,t){ln(e,t),ln(e+"Capture",t)}function ln(e,t){for(Un[e]=t,e=0;e<t.length;e++)Us.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=Object.prototype.hasOwnProperty,Cd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aa={},sa={};function kd(e){return si.call(sa,e)?!0:si.call(aa,e)?!1:Cd.test(e)?sa[e]=!0:(aa[e]=!0,!1)}function Sd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ed(e,t,n,r){if(t===null||typeof t>"u"||Sd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var so=/[\-:]([a-z])/g;function uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(so,uo);ne[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(so,uo);ne[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(so,uo);ne[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function co(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ed(t,n,l,r)&&(n=null),r||l===null?kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),$t=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),fo=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),$s=Symbol.for("react.provider"),Bs=Symbol.for("react.context"),po=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),di=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),Ws=Symbol.for("react.offscreen"),ua=Symbol.iterator;function yn(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Rl;function Sn(e){if(Rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rl=t&&t[1]||""}return`
`+Rl+e}var Ol=!1;function Dl(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Nd(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function fi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case $t:return"Portal";case ui:return"Profiler";case fo:return"StrictMode";case ci:return"Suspense";case di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bs:return(e.displayName||"Context")+".Consumer";case $s:return(e._context.displayName||"Context")+".Provider";case po:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mo:return t=e.displayName||null,t!==null?t:fi(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return fi(e(t))}catch{}}return null}function zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fi(t);case 8:return t===fo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ld(e){var t=Vs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=Ld(e))}function Hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pi(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ca(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qs(e,t){t=t.checked,t!=null&&co(e,"checked",t,!1)}function mi(e,t){Qs(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hi(e,t.type,n):t.hasOwnProperty("defaultValue")&&hi(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function da(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hi(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(En(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function Gs(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ks(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,Xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pd=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Pd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Js(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ys(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var jd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yi(e,t){if(t){if(jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,bt=null,en=null;function ma(e){if(e=ar(e)){if(typeof _i!="function")throw Error(_(280));var t=e.stateNode;t&&(t=yl(t),_i(e.stateNode,e.type,t))}}function Zs(e){bt?en?en.push(e):en=[e]:bt=e}function qs(){if(bt){var e=bt,t=en;if(en=bt=null,ma(e),t)for(e=0;e<t.length;e++)ma(t[e])}}function bs(e,t){return e(t)}function eu(){}var Fl=!1;function tu(e,t,n){if(Fl)return e(t,n);Fl=!0;try{return bs(e,t,n)}finally{Fl=!1,(bt!==null||en!==null)&&(eu(),qs())}}function Bn(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var wi=!1;if(Ke)try{var In={};Object.defineProperty(In,"passive",{get:function(){wi=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{wi=!1}function Td(e,t,n,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Pn=!1,Wr=null,Vr=!1,xi=null,Md={onError:function(e){Pn=!0,Wr=e}};function Rd(e,t,n,r,l,i,o,a,s){Pn=!1,Wr=null,Td.apply(Md,arguments)}function Od(e,t,n,r,l,i,o,a,s){if(Rd.apply(this,arguments),Pn){if(Pn){var c=Wr;Pn=!1,Wr=null}else throw Error(_(198));Vr||(Vr=!0,xi=c)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ha(e){if(Dt(e)!==e)throw Error(_(188))}function Dd(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ha(l),e;if(i===r)return ha(l),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function ru(e){return e=Dd(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lu(e);if(t!==null)return t;e=e.sibling}return null}var iu=Ae.unstable_scheduleCallback,ga=Ae.unstable_cancelCallback,Fd=Ae.unstable_shouldYield,Ud=Ae.unstable_requestPaint,G=Ae.unstable_now,$d=Ae.unstable_getCurrentPriorityLevel,go=Ae.unstable_ImmediatePriority,ou=Ae.unstable_UserBlockingPriority,Hr=Ae.unstable_NormalPriority,Bd=Ae.unstable_LowPriority,au=Ae.unstable_IdlePriority,ml=null,$e=null;function Wd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Qd,Vd=Math.log,Hd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Vd(e)/Hd|0)|0}var gr=64,vr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=Nn(a):(i&=o,i!==0&&(r=Nn(i)))}else o=n&~l,o!==0?r=Nn(o):i!==0&&(r=Nn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function Gd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Me(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=Gd(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function su(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function Xd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function vo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cu,yo,du,fu,pu,ki=!1,yr=[],ot=null,at=null,st=null,Wn=new Map,Vn=new Map,tt=[],Yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function An(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ar(t),t!==null&&yo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Jd(e,t,n,r,l){switch(t){case"focusin":return ot=An(ot,e,t,n,r,l),!0;case"dragenter":return at=An(at,e,t,n,r,l),!0;case"mouseover":return st=An(st,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Wn.set(i,An(Wn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Vn.set(i,An(Vn.get(i)||null,e,t,n,r,l)),!0}return!1}function mu(e){var t=kt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=nu(n),t!==null){e.blockedOn=t,pu(e.priority,function(){du(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ai=r,n.target.dispatchEvent(r),Ai=null}else return t=ar(n),t!==null&&yo(t),e.blockedOn=n,!1;t.shift()}return!0}function ya(e,t,n){Pr(e)&&n.delete(t)}function Zd(){ki=!1,ot!==null&&Pr(ot)&&(ot=null),at!==null&&Pr(at)&&(at=null),st!==null&&Pr(st)&&(st=null),Wn.forEach(ya),Vn.forEach(ya)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,ki||(ki=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,Zd)))}function Hn(e){function t(l){return _n(l,e)}if(0<yr.length){_n(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&_n(ot,e),at!==null&&_n(at,e),st!==null&&_n(st,e),Wn.forEach(t),Vn.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)mu(n),n.blockedOn===null&&tt.shift()}var tn=Ze.ReactCurrentBatchConfig,Gr=!0;function qd(e,t,n,r){var l=R,i=tn.transition;tn.transition=null;try{R=1,Io(e,t,n,r)}finally{R=l,tn.transition=i}}function bd(e,t,n,r){var l=R,i=tn.transition;tn.transition=null;try{R=4,Io(e,t,n,r)}finally{R=l,tn.transition=i}}function Io(e,t,n,r){if(Gr){var l=Si(e,t,n,r);if(l===null)Yl(e,t,r,Kr,n),va(e,r);else if(Jd(l,e,t,n,r))r.stopPropagation();else if(va(e,r),t&4&&-1<Yd.indexOf(e)){for(;l!==null;){var i=ar(l);if(i!==null&&cu(i),i=Si(e,t,n,r),i===null&&Yl(e,t,r,Kr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var Kr=null;function Si(e,t,n,r){if(Kr=null,e=ho(r),e=kt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($d()){case go:return 1;case ou:return 4;case Hr:case Bd:return 16;case au:return 536870912;default:return 16}default:return 16}}var rt=null,Ao=null,jr=null;function gu(){if(jr)return jr;var e,t=Ao,n=t.length,r,l="value"in rt?rt.value:rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return jr=l.slice(e,1<r?1-r:void 0)}function Tr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Ia(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ir:Ia,this.isPropagationStopped=Ia,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_o=we(pn),or=W({},pn,{view:0,detail:0}),ef=we(or),$l,Bl,wn,hl=W({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&e.type==="mousemove"?($l=e.screenX-wn.screenX,Bl=e.screenY-wn.screenY):Bl=$l=0,wn=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),Aa=we(hl),tf=W({},hl,{dataTransfer:0}),nf=we(tf),rf=W({},or,{relatedTarget:0}),Wl=we(rf),lf=W({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),of=we(lf),af=W({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sf=we(af),uf=W({},pn,{data:0}),_a=we(uf),cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},df={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ff[e])?!!t[e]:!1}function wo(){return pf}var mf=W({},or,{key:function(e){if(e.key){var t=cf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?df[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hf=we(mf),gf=W({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=we(gf),vf=W({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),yf=we(vf),If=W({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Af=we(If),_f=W({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wf=we(_f),xf=[9,13,27,32],xo=Ke&&"CompositionEvent"in window,jn=null;Ke&&"documentMode"in document&&(jn=document.documentMode);var Cf=Ke&&"TextEvent"in window&&!jn,vu=Ke&&(!xo||jn&&8<jn&&11>=jn),xa=" ",Ca=!1;function yu(e,t){switch(e){case"keyup":return xf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function kf(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(Ca=!0,xa);case"textInput":return e=t.data,e===xa&&Ca?null:e;default:return null}}function Sf(e,t){if(Wt)return e==="compositionend"||!xo&&yu(e,t)?(e=gu(),jr=Ao=rt=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vu&&t.locale!=="ko"?null:t.data;default:return null}}var Ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ef[e.type]:t==="textarea"}function Au(e,t,n,r){Zs(r),t=Xr(t,"onChange"),0<t.length&&(n=new _o("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,Qn=null;function Nf(e){Pu(e,0)}function gl(e){var t=Qt(e);if(Hs(t))return e}function zf(e,t){if(e==="change")return t}var _u=!1;if(Ke){var Vl;if(Ke){var Hl="oninput"in document;if(!Hl){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Hl=typeof Sa.oninput=="function"}Vl=Hl}else Vl=!1;_u=Vl&&(!document.documentMode||9<document.documentMode)}function Ea(){Tn&&(Tn.detachEvent("onpropertychange",wu),Qn=Tn=null)}function wu(e){if(e.propertyName==="value"&&gl(Qn)){var t=[];Au(t,Qn,e,ho(e)),tu(Nf,t)}}function Lf(e,t,n){e==="focusin"?(Ea(),Tn=t,Qn=n,Tn.attachEvent("onpropertychange",wu)):e==="focusout"&&Ea()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Qn)}function jf(e,t){if(e==="click")return gl(t)}function Tf(e,t){if(e==="input"||e==="change")return gl(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Mf;function Gn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!si.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function xu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rf(e){var t=Cu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xu(n.ownerDocument.documentElement,n)){if(r!==null&&Co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=za(n,i);var o=za(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Of=Ke&&"documentMode"in document&&11>=document.documentMode,Vt=null,Ei=null,Mn=null,Ni=!1;function La(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ni||Vt==null||Vt!==Br(r)||(r=Vt,"selectionStart"in r&&Co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Gn(Mn,r)||(Mn=r,r=Xr(Ei,"onSelect"),0<r.length&&(t=new _o("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Ql={},ku={};Ke&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function vl(e){if(Ql[e])return Ql[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ku)return Ql[e]=t[n];return e}var Su=vl("animationend"),Eu=vl("animationiteration"),Nu=vl("animationstart"),zu=vl("transitionend"),Lu=new Map,Pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Lu.set(e,t),Ot(t,[e])}for(var Gl=0;Gl<Pa.length;Gl++){var Kl=Pa[Gl],Df=Kl.toLowerCase(),Ff=Kl[0].toUpperCase()+Kl.slice(1);vt(Df,"on"+Ff)}vt(Su,"onAnimationEnd");vt(Eu,"onAnimationIteration");vt(Nu,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(zu,"onTransitionEnd");ln("onMouseEnter",["mouseout","mouseover"]);ln("onMouseLeave",["mouseout","mouseover"]);ln("onPointerEnter",["pointerout","pointerover"]);ln("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));function ja(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Od(r,t,void 0,e),e.currentTarget=null}function Pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;ja(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;ja(l,a,c),i=s}}}if(Vr)throw e=xi,Vr=!1,xi=null,e}function D(e,t){var n=t[Ti];n===void 0&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(ju(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),ju(n,e,r,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[_r]){e[_r]=!0,Us.forEach(function(n){n!=="selectionchange"&&(Uf.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,Xl("selectionchange",!1,t))}}function ju(e,t,n,r){switch(hu(t)){case 1:var l=qd;break;case 4:l=bd;break;default:l=Io}n=l.bind(null,t,n,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=kt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}tu(function(){var c=i,m=ho(n),p=[];e:{var h=Lu.get(e);if(h!==void 0){var y=_o,I=e;switch(e){case"keypress":if(Tr(n)===0)break e;case"keydown":case"keyup":y=hf;break;case"focusin":I="focus",y=Wl;break;case"focusout":I="blur",y=Wl;break;case"beforeblur":case"afterblur":y=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=yf;break;case Su:case Eu:case Nu:y=of;break;case zu:y=Af;break;case"scroll":y=ef;break;case"wheel":y=wf;break;case"copy":case"cut":case"paste":y=sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wa}var A=(t&4)!==0,C=!A&&e==="scroll",f=A?h!==null?h+"Capture":null:h;A=[];for(var u=c,d;u!==null;){d=u;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Bn(u,f),v!=null&&A.push(Xn(u,v,d)))),C)break;u=u.return}0<A.length&&(h=new y(h,I,null,n,m),p.push({event:h,listeners:A}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Ai&&(I=n.relatedTarget||n.fromElement)&&(kt(I)||I[Xe]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(I=n.relatedTarget||n.toElement,y=c,I=I?kt(I):null,I!==null&&(C=Dt(I),I!==C||I.tag!==5&&I.tag!==6)&&(I=null)):(y=null,I=c),y!==I)){if(A=Aa,v="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(A=wa,v="onPointerLeave",f="onPointerEnter",u="pointer"),C=y==null?h:Qt(y),d=I==null?h:Qt(I),h=new A(v,u+"leave",y,n,m),h.target=C,h.relatedTarget=d,v=null,kt(m)===c&&(A=new A(f,u+"enter",I,n,m),A.target=d,A.relatedTarget=C,v=A),C=v,y&&I)t:{for(A=y,f=I,u=0,d=A;d;d=Ut(d))u++;for(d=0,v=f;v;v=Ut(v))d++;for(;0<u-d;)A=Ut(A),u--;for(;0<d-u;)f=Ut(f),d--;for(;u--;){if(A===f||f!==null&&A===f.alternate)break t;A=Ut(A),f=Ut(f)}A=null}else A=null;y!==null&&Ta(p,h,y,A,!1),I!==null&&C!==null&&Ta(p,C,I,A,!0)}}e:{if(h=c?Qt(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var w=zf;else if(ka(h))if(_u)w=Tf;else{w=Pf;var E=Lf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=jf);if(w&&(w=w(e,c))){Au(p,w,n,m);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&hi(h,"number",h.value)}switch(E=c?Qt(c):window,e){case"focusin":(ka(E)||E.contentEditable==="true")&&(Vt=E,Ei=c,Mn=null);break;case"focusout":Mn=Ei=Vt=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,La(p,n,m);break;case"selectionchange":if(Of)break;case"keydown":case"keyup":La(p,n,m)}var N;if(xo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Wt?yu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(vu&&n.locale!=="ko"&&(Wt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Wt&&(N=gu()):(rt=m,Ao="value"in rt?rt.value:rt.textContent,Wt=!0)),E=Xr(c,z),0<E.length&&(z=new _a(z,e,null,n,m),p.push({event:z,listeners:E}),N?z.data=N:(N=Iu(n),N!==null&&(z.data=N)))),(N=Cf?kf(e,n):Sf(e,n))&&(c=Xr(c,"onBeforeInput"),0<c.length&&(m=new _a("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=N))}Pu(p,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Bn(e,n),i!=null&&r.unshift(Xn(e,i,l)),i=Bn(e,t),i!=null&&r.push(Xn(e,i,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ta(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Bn(n,i),s!=null&&o.unshift(Xn(n,s,a))):l||(s=Bn(n,i),s!=null&&o.push(Xn(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $f=/\r\n?/g,Bf=/\u0000|\uFFFD/g;function Ma(e){return(typeof e=="string"?e:""+e).replace($f,`
`).replace(Bf,"")}function wr(e,t,n){if(t=Ma(t),Ma(e)!==t&&n)throw Error(_(425))}function Yr(){}var zi=null,Li=null;function Pi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,Wf=typeof clearTimeout=="function"?clearTimeout:void 0,Ra=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ra<"u"?function(e){return Ra.resolve(null).then(e).catch(Hf)}:ji;function Hf(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Hn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+mn,Yn="__reactProps$"+mn,Xe="__reactContainer$"+mn,Ti="__reactEvents$"+mn,Qf="__reactListeners$"+mn,Gf="__reactHandles$"+mn;function kt(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oa(e);e!==null;){if(n=e[Ue])return n;e=Oa(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Ue]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function yl(e){return e[Yn]||null}var Mi=[],Gt=-1;function yt(e){return{current:e}}function F(e){0>Gt||(e.current=Mi[Gt],Mi[Gt]=null,Gt--)}function O(e,t){Gt++,Mi[Gt]=e.current,e.current=t}var gt={},oe=yt(gt),me=yt(!1),Pt=gt;function on(e,t){var n=e.type.contextTypes;if(!n)return gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Jr(){F(me),F(oe)}function Da(e,t,n){if(oe.current!==gt)throw Error(_(168));O(oe,t),O(me,n)}function Tu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(_(108,zd(e)||"Unknown",l));return W({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,Pt=oe.current,O(oe,e),O(me,me.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Tu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,F(me),F(oe),O(oe,e)):F(me),O(me,n)}var Ve=null,Il=!1,Zl=!1;function Mu(e){Ve===null?Ve=[e]:Ve.push(e)}function Kf(e){Il=!0,Mu(e)}function It(){if(!Zl&&Ve!==null){Zl=!0;var e=0,t=R;try{var n=Ve;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,Il=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),iu(go,It),l}finally{R=t,Zl=!1}}return null}var Kt=[],Xt=0,qr=null,br=0,xe=[],Ce=0,jt=null,He=1,Qe="";function xt(e,t){Kt[Xt++]=br,Kt[Xt++]=qr,qr=e,br=t}function Ru(e,t,n){xe[Ce++]=He,xe[Ce++]=Qe,xe[Ce++]=jt,jt=e;var r=He;e=Qe;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Me(t)+l|n<<l|r,Qe=i+e}else He=1<<i|n<<l|r,Qe=e}function ko(e){e.return!==null&&(xt(e,1),Ru(e,1,0))}function So(e){for(;e===qr;)qr=Kt[--Xt],Kt[Xt]=null,br=Kt[--Xt],Kt[Xt]=null;for(;e===jt;)jt=xe[--Ce],xe[Ce]=null,Qe=xe[--Ce],xe[Ce]=null,He=xe[--Ce],xe[Ce]=null}var Ie=null,ye=null,U=!1,Te=null;function Ou(e,t){var n=ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ua(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,ye=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:He,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,ye=null,!0):!1;default:return!1}}function Ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oi(e){if(U){var t=ye;if(t){var n=t;if(!Ua(e,t)){if(Ri(e))throw Error(_(418));t=ut(n.nextSibling);var r=Ie;t&&Ua(e,t)?Ou(r,n):(e.flags=e.flags&-4097|2,U=!1,Ie=e)}}else{if(Ri(e))throw Error(_(418));e.flags=e.flags&-4097|2,U=!1,Ie=e}}}function $a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function xr(e){if(e!==Ie)return!1;if(!U)return $a(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pi(e.type,e.memoizedProps)),t&&(t=ye)){if(Ri(e))throw Du(),Error(_(418));for(;t;)Ou(e,t),t=ut(t.nextSibling)}if($a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=Ie?ut(e.stateNode.nextSibling):null;return!0}function Du(){for(var e=ye;e;)e=ut(e.nextSibling)}function an(){ye=Ie=null,U=!1}function Eo(e){Te===null?Te=[e]:Te.push(e)}var Xf=Ze.ReactCurrentBatchConfig;function xn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ba(e){var t=e._init;return t(e._payload)}function Fu(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=pt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,v){return u===null||u.tag!==6?(u=li(d,f.mode,v),u.return=f,u):(u=l(u,d),u.return=f,u)}function s(f,u,d,v){var w=d.type;return w===Bt?m(f,u,d.props.children,v,d.key):u!==null&&(u.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===be&&Ba(w)===u.type)?(v=l(u,d.props),v.ref=xn(f,u,d),v.return=f,v):(v=$r(d.type,d.key,d.props,null,f.mode,v),v.ref=xn(f,u,d),v.return=f,v)}function c(f,u,d,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=ii(d,f.mode,v),u.return=f,u):(u=l(u,d.children||[]),u.return=f,u)}function m(f,u,d,v,w){return u===null||u.tag!==7?(u=zt(d,f.mode,v,w),u.return=f,u):(u=l(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=li(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case pr:return d=$r(u.type,u.key,u.props,null,f.mode,d),d.ref=xn(f,null,u),d.return=f,d;case $t:return u=ii(u,f.mode,d),u.return=f,u;case be:var v=u._init;return p(f,v(u._payload),d)}if(En(u)||yn(u))return u=zt(u,f.mode,d,null),u.return=f,u;Cr(f,u)}return null}function h(f,u,d,v){var w=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:a(f,u,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pr:return d.key===w?s(f,u,d,v):null;case $t:return d.key===w?c(f,u,d,v):null;case be:return w=d._init,h(f,u,w(d._payload),v)}if(En(d)||yn(d))return w!==null?null:m(f,u,d,v,null);Cr(f,d)}return null}function y(f,u,d,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,a(u,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pr:return f=f.get(v.key===null?d:v.key)||null,s(u,f,v,w);case $t:return f=f.get(v.key===null?d:v.key)||null,c(u,f,v,w);case be:var E=v._init;return y(f,u,d,E(v._payload),w)}if(En(v)||yn(v))return f=f.get(d)||null,m(u,f,v,w,null);Cr(u,v)}return null}function I(f,u,d,v){for(var w=null,E=null,N=u,z=u=0,H=null;N!==null&&z<d.length;z++){N.index>z?(H=N,N=null):H=N.sibling;var T=h(f,N,d[z],v);if(T===null){N===null&&(N=H);break}e&&N&&T.alternate===null&&t(f,N),u=i(T,u,z),E===null?w=T:E.sibling=T,E=T,N=H}if(z===d.length)return n(f,N),U&&xt(f,z),w;if(N===null){for(;z<d.length;z++)N=p(f,d[z],v),N!==null&&(u=i(N,u,z),E===null?w=N:E.sibling=N,E=N);return U&&xt(f,z),w}for(N=r(f,N);z<d.length;z++)H=y(N,f,z,d[z],v),H!==null&&(e&&H.alternate!==null&&N.delete(H.key===null?z:H.key),u=i(H,u,z),E===null?w=H:E.sibling=H,E=H);return e&&N.forEach(function(ze){return t(f,ze)}),U&&xt(f,z),w}function A(f,u,d,v){var w=yn(d);if(typeof w!="function")throw Error(_(150));if(d=w.call(d),d==null)throw Error(_(151));for(var E=w=null,N=u,z=u=0,H=null,T=d.next();N!==null&&!T.done;z++,T=d.next()){N.index>z?(H=N,N=null):H=N.sibling;var ze=h(f,N,T.value,v);if(ze===null){N===null&&(N=H);break}e&&N&&ze.alternate===null&&t(f,N),u=i(ze,u,z),E===null?w=ze:E.sibling=ze,E=ze,N=H}if(T.done)return n(f,N),U&&xt(f,z),w;if(N===null){for(;!T.done;z++,T=d.next())T=p(f,T.value,v),T!==null&&(u=i(T,u,z),E===null?w=T:E.sibling=T,E=T);return U&&xt(f,z),w}for(N=r(f,N);!T.done;z++,T=d.next())T=y(N,f,z,T.value,v),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?z:T.key),u=i(T,u,z),E===null?w=T:E.sibling=T,E=T);return e&&N.forEach(function(gn){return t(f,gn)}),U&&xt(f,z),w}function C(f,u,d,v){if(typeof d=="object"&&d!==null&&d.type===Bt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case pr:e:{for(var w=d.key,E=u;E!==null;){if(E.key===w){if(w=d.type,w===Bt){if(E.tag===7){n(f,E.sibling),u=l(E,d.props.children),u.return=f,f=u;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===be&&Ba(w)===E.type){n(f,E.sibling),u=l(E,d.props),u.ref=xn(f,E,d),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}d.type===Bt?(u=zt(d.props.children,f.mode,v,d.key),u.return=f,f=u):(v=$r(d.type,d.key,d.props,null,f.mode,v),v.ref=xn(f,u,d),v.return=f,f=v)}return o(f);case $t:e:{for(E=d.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=l(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ii(d,f.mode,v),u.return=f,f=u}return o(f);case be:return E=d._init,C(f,u,E(d._payload),v)}if(En(d))return I(f,u,d,v);if(yn(d))return A(f,u,d,v);Cr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,d),u.return=f,f=u):(n(f,u),u=li(d,f.mode,v),u.return=f,f=u),o(f)):n(f,u)}return C}var sn=Fu(!0),Uu=Fu(!1),el=yt(null),tl=null,Yt=null,No=null;function zo(){No=Yt=tl=null}function Lo(e){var t=el.current;F(el),e._currentValue=t}function Di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){tl=e,No=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(tl===null)throw Error(_(308));Yt=e,tl.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var St=null;function Po(e){St===null?St=[e]:St.push(e)}function $u(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Po(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,Po(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Mr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vo(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,r){var l=e.updateQueue;et=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(i!==null){var p=l.baseState;o=0,m=c=s=null,a=i;do{var h=a.lane,y=a.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=e,A=a;switch(h=t,y=n,A.tag){case 1:if(I=A.payload,typeof I=="function"){p=I.call(y,p,h);break e}p=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=A.payload,h=typeof I=="function"?I.call(y,p,h):I,h==null)break e;p=W({},p,h);break e;case 2:et=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=y,s=p):m=m.next=y,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(m===null&&(s=p),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mt|=o,e.lanes=o,e.memoizedState=p}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(_(191,l));l.call(r)}}}var sr={},Be=yt(sr),Jn=yt(sr),Zn=yt(sr);function Et(e){if(e===sr)throw Error(_(174));return e}function To(e,t){switch(O(Zn,t),O(Jn,e),O(Be,sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vi(t,e)}F(Be),O(Be,t)}function un(){F(Be),F(Jn),F(Zn)}function Wu(e){Et(Zn.current);var t=Et(Be.current),n=vi(t,e.type);t!==n&&(O(Jn,e),O(Be,n))}function Mo(e){Jn.current===e&&(F(Be),F(Jn))}var $=yt(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function Ro(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var Rr=Ze.ReactCurrentDispatcher,bl=Ze.ReactCurrentBatchConfig,Tt=0,B=null,Y=null,q=null,ll=!1,Rn=!1,qn=0,Yf=0;function re(){throw Error(_(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,l,i){if(Tt=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rr.current=e===null||e.memoizedState===null?bf:ep,e=n(r,l),Rn){i=0;do{if(Rn=!1,qn=0,25<=i)throw Error(_(301));i+=1,q=Y=null,t.updateQueue=null,Rr.current=tp,e=n(r,l)}while(Rn)}if(Rr.current=il,t=Y!==null&&Y.next!==null,Tt=0,q=Y=B=null,ll=!1,t)throw Error(_(300));return e}function Fo(){var e=qn!==0;return qn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?B.memoizedState=q=e:q=q.next=e,q}function Ne(){if(Y===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?B.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(_(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?B.memoizedState=q=e:q=q.next=e}return q}function bn(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=Ne(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var m=c.lane;if((Tt&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,o=r):s=s.next=p,B.lanes|=m,Mt|=m}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,Oe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,Mt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=Ne(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Oe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Vu(){}function Hu(e,t){var n=B,r=Ne(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,Uo(Ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,er(9,Gu.bind(null,n,r,l,t),void 0,null),b===null)throw Error(_(349));Tt&30||Qu(n,t,l)}return l}function Qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gu(e,t,n,r){t.value=n,t.getSnapshot=r,Xu(t)&&Yu(e)}function Ku(e,t,n){return n(function(){Xu(t)&&Yu(e)})}function Xu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function Yu(e){var t=Ye(e,1);t!==null&&Re(t,e,1,-1)}function Ha(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bn,lastRenderedState:e},t.queue=e,e=e.dispatch=qf.bind(null,B,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ju(){return Ne().memoizedState}function Or(e,t,n,r){var l=Fe();B.flags|=e,l.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var l=Ne();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&Oo(r,o.deps)){l.memoizedState=er(t,n,i,r);return}}B.flags|=e,l.memoizedState=er(1|t,n,i,r)}function Qa(e,t){return Or(8390656,8,e,t)}function Uo(e,t){return Al(2048,8,e,t)}function Zu(e,t){return Al(4,2,e,t)}function qu(e,t){return Al(4,4,e,t)}function bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ec(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,bu.bind(null,t,e),n)}function $o(){}function tc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rc(e,t,n){return Tt&21?(Oe(n,t)||(n=su(),B.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Jf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{R=n,bl.transition=r}}function lc(){return Ne().memoizedState}function Zf(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ic(e))oc(t,n);else if(n=$u(e,t,n,r),n!==null){var l=ue();Re(n,e,r,l),ac(n,t,r)}}function qf(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ic(e))oc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Oe(a,o)){var s=t.interleaved;s===null?(l.next=l,Po(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=$u(e,t,l,r),n!==null&&(l=ue(),Re(n,e,r,l),ac(n,t,r))}}function ic(e){var t=e.alternate;return e===B||t!==null&&t===B}function oc(e,t){Rn=ll=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ac(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vo(e,n)}}var il={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},bf={readContext:Ee,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Or(4194308,4,e,t)},useInsertionEffect:function(e,t){return Or(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ha,useDebugValue:$o,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ha(!1),t=e[0];return e=Jf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Fe();if(U){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),b===null)throw Error(_(349));Tt&30||Qu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Qa(Ku.bind(null,r,i,e),[e]),r.flags|=2048,er(9,Gu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=b.identifierPrefix;if(U){var n=Qe,r=He;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ep={readContext:Ee,useCallback:tc,useContext:Ee,useEffect:Uo,useImperativeHandle:ec,useInsertionEffect:Zu,useLayoutEffect:qu,useMemo:nc,useReducer:ei,useRef:Ju,useState:function(){return ei(bn)},useDebugValue:$o,useDeferredValue:function(e){var t=Ne();return rc(t,Y.memoizedState,e)},useTransition:function(){var e=ei(bn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:Hu,useId:lc,unstable_isNewReconciler:!1},tp={readContext:Ee,useCallback:tc,useContext:Ee,useEffect:Uo,useImperativeHandle:ec,useInsertionEffect:Zu,useLayoutEffect:qu,useMemo:nc,useReducer:ti,useRef:Ju,useState:function(){return ti(bn)},useDebugValue:$o,useDeferredValue:function(e){var t=Ne();return Y===null?t.memoizedState=e:rc(t,Y.memoizedState,e)},useTransition:function(){var e=ti(bn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:Hu,useId:lc,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),i=Ge(r,l);i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(Re(t,e,l,r),Mr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=ft(e),i=Ge(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ct(e,i,l),t!==null&&(Re(t,e,l,r),Mr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=ft(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=ct(e,l,r),t!==null&&(Re(t,e,r,n),Mr(t,e,r))}};function Ga(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Gn(n,r)||!Gn(l,i):!0}function sc(e,t,n){var r=!1,l=gt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=he(t)?Pt:oe.current,r=t.contextTypes,i=(r=r!=null)?on(e,l):gt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ka(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function Ui(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},jo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=he(t)?Pt:oe.current,l.context=on(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&_l.enqueueReplaceState(l,l.state,null),nl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=Nd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var np=typeof WeakMap=="function"?WeakMap:Map;function uc(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,Ji=r),$i(e,t)},n}function cc(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){$i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$i(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Xa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new np;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=gp.bind(null,e,t,n),t.then(e,e))}function Ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ja(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var rp=Ze.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?Uu(t,null,n,r):sn(t,e.child,n,r)}function Za(e,t,n,r,l){n=n.render;var i=t.ref;return nn(t,l),r=Do(e,t,n,r,i,l),n=Fo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(U&&n&&ko(t),t.flags|=1,se(e,t,r,l),t.child)}function qa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Xo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,dc(e,t,i,r,l)):(e=$r(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gn,n(o,r)&&e.ref===t.ref)return Je(e,t,l)}return t.flags|=1,e=pt(i,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Gn(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,l)}return Bi(e,t,n,r,l)}function fc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Zt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Zt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Zt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Zt,ve),ve|=r;return se(e,t,l,n),t.child}function pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bi(e,t,n,r,l){var i=he(n)?Pt:oe.current;return i=on(t,i),nn(t,l),n=Do(e,t,n,r,i,l),r=Fo(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Je(e,t,l)):(U&&r&&ko(t),t.flags|=1,se(e,t,n,l),t.child)}function ba(e,t,n,r,l){if(he(n)){var i=!0;Zr(t)}else i=!1;if(nn(t,l),t.stateNode===null)Dr(e,t),sc(t,n,r),Ui(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=he(n)?Pt:oe.current,c=on(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ka(t,o,r,c),et=!1;var h=t.memoizedState;o.state=h,nl(t,r,o,l),s=t.memoizedState,a!==r||h!==s||me.current||et?(typeof m=="function"&&(Fi(t,n,m,r),s=t.memoizedState),(a=et||Ga(t,n,a,r,h,s,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Bu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Pe(t.type,a),o.props=c,p=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ee(s):(s=he(n)?Pt:oe.current,s=on(t,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==s)&&Ka(t,o,r,s),et=!1,h=t.memoizedState,o.state=h,nl(t,r,o,l);var I=t.memoizedState;a!==p||h!==I||me.current||et?(typeof y=="function"&&(Fi(t,n,y,r),I=t.memoizedState),(c=et||Ga(t,n,c,r,h,I,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),o.props=r,o.state=I,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wi(e,t,n,r,i,l)}function Wi(e,t,n,r,l,i){pc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Fa(t,n,!1),Je(e,t,i);r=t.stateNode,rp.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=sn(t,e.child,null,i),t.child=sn(t,null,a,i)):se(e,t,a,i),t.memoizedState=r.state,l&&Fa(t,n,!0),t.child}function mc(e){var t=e.stateNode;t.pendingContext?Da(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Da(e,t.context,!1),To(e,t.containerInfo)}function es(e,t,n,r,l){return an(),Eo(l),t.flags|=256,se(e,t,n,r),t.child}var Vi={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function hc(e,t,n){var r=t.pendingProps,l=$.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O($,l&1),e===null)return Oi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Cl(o,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hi(n),t.memoizedState=Vi,e):Bo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return lp(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=pt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=pt(a,i):(i=zt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Hi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Vi,r}return i=e.child,e=i.sibling,r=pt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bo(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&Eo(r),sn(t,e.child,null,n),e=Bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(_(422))),kr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Cl({mode:"visible",children:r.children},l,0,null),i=zt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&sn(t,e.child,null,o),t.child.memoizedState=Hi(o),t.memoizedState=Vi,i);if(!(t.mode&1))return kr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(_(419)),r=ni(i,r,void 0),kr(e,t,o,r)}if(a=(o&e.childLanes)!==0,pe||a){if(r=b,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Re(r,e,l,-1))}return Ko(),r=ni(Error(_(421))),kr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=vp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=ut(l.nextSibling),Ie=t,U=!0,Te=null,e!==null&&(xe[Ce++]=He,xe[Ce++]=Qe,xe[Ce++]=jt,He=e.id,Qe=e.overflow,jt=t),t=Bo(t,r.children),t.flags|=4096,t)}function ts(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Di(e.return,t,n)}function ri(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function gc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ts(e,n,t);else if(e.tag===19)ts(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ri(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&rl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ri(t,!0,n,null,i);break;case"together":ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ip(e,t,n){switch(t.tag){case 3:mc(t),an();break;case 5:Wu(t);break;case 1:he(t.type)&&Zr(t);break;case 4:To(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(el,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O($,$.current&1),t.flags|=128,null):n&t.child.childLanes?hc(e,t,n):(O($,$.current&1),e=Je(e,t,n),e!==null?e.sibling:null);O($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,fc(e,t,n)}return Je(e,t,n)}var vc,Qi,yc,Ic;vc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qi=function(){};yc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et(Be.current);var i=null;switch(n){case"input":l=pi(e,l),r=pi(e,r),i=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":l=gi(e,l),r=gi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}yi(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Un.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Un.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&D("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function op(e,t,n){var r=t.pendingProps;switch(So(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return he(t.type)&&Jr(),le(t),null;case 3:return r=t.stateNode,un(),F(me),F(oe),Ro(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(bi(Te),Te=null))),Qi(e,t),le(t),null;case 5:Mo(t);var l=Et(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)yc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return le(t),null}if(e=Et(Be.current),xr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ue]=t,r[Yn]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<zn.length;l++)D(zn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":ca(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":fa(r,i),D("invalid",r)}yi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&wr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&wr(r.textContent,a,e),l=["children",""+a]):Un.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":mr(r),da(r,i,!0);break;case"textarea":mr(r),pa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ks(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Yn]=r,vc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ii(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<zn.length;l++)D(zn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":ca(e,r),l=pi(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),D("invalid",e);break;case"textarea":fa(e,r),l=gi(e,r),D("invalid",e);break;default:l=r}yi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Js(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Xs(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&$n(e,s):typeof s=="number"&&$n(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Un.hasOwnProperty(i)?s!=null&&i==="onScroll"&&D("scroll",e):s!=null&&co(e,i,s,o))}switch(n){case"input":mr(e),da(e,r,!1);break;case"textarea":mr(e),pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Et(Zn.current),Et(Be.current),xr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(i=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return le(t),null;case 13:if(F($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ye!==null&&t.mode&1&&!(t.flags&128))Du(),an(),t.flags|=98560,i=!1;else if(i=xr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Ue]=t}else an(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Te!==null&&(bi(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?J===0&&(J=3):Ko())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return un(),Qi(e,t),e===null&&Kn(t.stateNode.containerInfo),le(t),null;case 10:return Lo(t.type._context),le(t),null;case 17:return he(t.type)&&Jr(),le(t),null;case 19:if(F($),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Cn(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=rl(e),o!==null){for(t.flags|=128,Cn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>dn&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304)}else{if(!r)if(e=rl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return le(t),null}else 2*G()-i.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=$.current,O($,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function ap(e,t){switch(So(t),t.tag){case 1:return he(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),F(me),F(oe),Ro(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mo(t),null;case 13:if(F($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F($),null;case 4:return un(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return Go(),null;case 24:return null;default:return null}}var Sr=!1,ie=!1,sp=typeof WeakSet=="function"?WeakSet:Set,k=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Gi(e,t,n){try{n()}catch(r){V(e,t,r)}}var ns=!1;function up(e,t){if(zi=Gr,e=Cu(),Co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,m=0,p=e,h=null;t:for(;;){for(var y;p!==n||l!==0&&p.nodeType!==3||(a=o+l),p!==i||r!==0&&p.nodeType!==3||(s=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++c===l&&(a=o),h===i&&++m===r&&(s=o),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},Gr=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var I=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var A=I.memoizedProps,C=I.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?A:Pe(t.type,A),C);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return I=ns,ns=!1,I}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Gi(t,n,i)}l=l.next}while(l!==r)}}function wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ac(e){var t=e.alternate;t!==null&&(e.alternate=null,Ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Yn],delete t[Ti],delete t[Qf],delete t[Gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}var ee=null,je=!1;function qe(e,t,n){for(n=n.child;n!==null;)wc(e,t,n),n=n.sibling}function wc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:ie||Jt(n,t);case 6:var r=ee,l=je;ee=null,qe(e,t,n),ee=r,je=l,ee!==null&&(je?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(je?(e=ee,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Hn(e)):Jl(ee,n.stateNode));break;case 4:r=ee,l=je,ee=n.stateNode.containerInfo,je=!0,qe(e,t,n),ee=r,je=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Gi(n,t,o),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!ie&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,qe(e,t,n),ie=r):qe(e,t,n);break;default:qe(e,t,n)}}function ls(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),t.forEach(function(r){var l=yp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,je=!1;break e;case 3:ee=a.stateNode.containerInfo,je=!0;break e;case 4:ee=a.stateNode.containerInfo,je=!0;break e}a=a.return}if(ee===null)throw Error(_(160));wc(i,o,l),ee=null,je=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xc(t,e),t=t.sibling}function xc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),De(e),r&4){try{On(3,e,e.return),wl(3,e)}catch(A){V(e,e.return,A)}try{On(5,e,e.return)}catch(A){V(e,e.return,A)}}break;case 1:Le(t,e),De(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Le(t,e),De(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var l=e.stateNode;try{$n(l,"")}catch(A){V(e,e.return,A)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qs(l,i),Ii(a,o);var c=Ii(a,i);for(o=0;o<s.length;o+=2){var m=s[o],p=s[o+1];m==="style"?Js(l,p):m==="dangerouslySetInnerHTML"?Xs(l,p):m==="children"?$n(l,p):co(l,m,p,c)}switch(a){case"input":mi(l,i);break;case"textarea":Gs(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?qt(l,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?qt(l,!!i.multiple,i.defaultValue,!0):qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Yn]=i}catch(A){V(e,e.return,A)}}break;case 6:if(Le(t,e),De(e),r&4){if(e.stateNode===null)throw Error(_(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(A){V(e,e.return,A)}}break;case 3:if(Le(t,e),De(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(A){V(e,e.return,A)}break;case 4:Le(t,e),De(e);break;case 13:Le(t,e),De(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ho=G())),r&4&&ls(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||m,Le(t,e),ie=c):Le(t,e),De(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(k=e,m=e.child;m!==null;){for(p=k=m;k!==null;){switch(h=k,y=h.child,h.tag){case 0:case 11:case 14:case 15:On(4,h,h.return);break;case 1:Jt(h,h.return);var I=h.stateNode;if(typeof I.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(A){V(r,n,A)}}break;case 5:Jt(h,h.return);break;case 22:if(h.memoizedState!==null){os(p);continue}}y!==null?(y.return=h,k=y):os(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{l=p.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ys("display",o))}catch(A){V(e,e.return,A)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(A){V(e,e.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Le(t,e),De(e),r&4&&ls(e);break;case 21:break;default:Le(t,e),De(e)}}function De(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_c(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($n(l,""),r.flags&=-33);var i=rs(e);Yi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=rs(e);Xi(e,a,o);break;default:throw Error(_(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cp(e,t,n){k=e,Cc(e)}function Cc(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Sr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ie;a=Sr;var c=ie;if(Sr=o,(ie=s)&&!c)for(k=l;k!==null;)o=k,s=o.child,o.tag===22&&o.memoizedState!==null?as(l):s!==null?(s.return=o,k=s):as(l);for(;i!==null;)k=i,Cc(i),i=i.sibling;k=l,Sr=a,ie=c}is(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):is(e)}}function is(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Va(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Hn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ie||t.flags&512&&Ki(t)}catch(h){V(t,t.return,h)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function os(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function as(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wl(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){V(t,l,s)}}var i=t.return;try{Ki(t)}catch(s){V(t,i,s)}break;case 5:var o=t.return;try{Ki(t)}catch(s){V(t,o,s)}}}catch(s){V(t,t.return,s)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var dp=Math.ceil,ol=Ze.ReactCurrentDispatcher,Wo=Ze.ReactCurrentOwner,Se=Ze.ReactCurrentBatchConfig,M=0,b=null,K=null,te=0,ve=0,Zt=yt(0),J=0,tr=null,Mt=0,xl=0,Vo=0,Dn=null,fe=null,Ho=0,dn=1/0,We=null,al=!1,Ji=null,dt=null,Er=!1,lt=null,sl=0,Fn=0,Zi=null,Fr=-1,Ur=0;function ue(){return M&6?G():Fr!==-1?Fr:Fr=G()}function ft(e){return e.mode&1?M&2&&te!==0?te&-te:Xf.transition!==null?(Ur===0&&(Ur=su()),Ur):(e=R,e!==0||(e=window.event,e=e===void 0?16:hu(e.type)),e):1}function Re(e,t,n,r){if(50<Fn)throw Fn=0,Zi=null,Error(_(185));ir(e,n,r),(!(M&2)||e!==b)&&(e===b&&(!(M&2)&&(xl|=n),J===4&&nt(e,te)),ge(e,r),n===1&&M===0&&!(t.mode&1)&&(dn=G()+500,Il&&It()))}function ge(e,t){var n=e.callbackNode;Kd(e,t);var r=Qr(e,e===b?te:0);if(r===0)n!==null&&ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ga(n),t===1)e.tag===0?Kf(ss.bind(null,e)):Mu(ss.bind(null,e)),Vf(function(){!(M&6)&&It()}),n=null;else{switch(uu(r)){case 1:n=go;break;case 4:n=ou;break;case 16:n=Hr;break;case 536870912:n=au;break;default:n=Hr}n=jc(n,kc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kc(e,t){if(Fr=-1,Ur=0,M&6)throw Error(_(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Qr(e,e===b?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ul(e,r);else{t=r;var l=M;M|=2;var i=Ec();(b!==e||te!==t)&&(We=null,dn=G()+500,Nt(e,t));do try{mp();break}catch(a){Sc(e,a)}while(!0);zo(),ol.current=i,M=l,K!==null?t=0:(b=null,te=0,t=J)}if(t!==0){if(t===2&&(l=Ci(e),l!==0&&(r=l,t=qi(e,l))),t===1)throw n=tr,Nt(e,0),nt(e,r),ge(e,G()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!fp(l)&&(t=ul(e,r),t===2&&(i=Ci(e),i!==0&&(r=i,t=qi(e,i))),t===1))throw n=tr,Nt(e,0),nt(e,r),ge(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Ct(e,fe,We);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Ho+500-G(),10<t)){if(Qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ji(Ct.bind(null,e,fe,We),t);break}Ct(e,fe,We);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Me(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dp(r/1960))-r,10<r){e.timeoutHandle=ji(Ct.bind(null,e,fe,We),r);break}Ct(e,fe,We);break;case 5:Ct(e,fe,We);break;default:throw Error(_(329))}}}return ge(e,G()),e.callbackNode===n?kc.bind(null,e):null}function qi(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=ul(e,t),e!==2&&(t=fe,fe=n,t!==null&&bi(t)),e}function bi(e){fe===null?fe=e:fe.push.apply(fe,e)}function fp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Vo,t&=~xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function ss(e){if(M&6)throw Error(_(327));rn();var t=Qr(e,0);if(!(t&1))return ge(e,G()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var r=Ci(e);r!==0&&(t=r,n=qi(e,r))}if(n===1)throw n=tr,Nt(e,0),nt(e,t),ge(e,G()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ct(e,fe,We),ge(e,G()),null}function Qo(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(dn=G()+500,Il&&It())}}function Rt(e){lt!==null&&lt.tag===0&&!(M&6)&&rn();var t=M;M|=1;var n=Se.transition,r=R;try{if(Se.transition=null,R=1,e)return e()}finally{R=r,Se.transition=n,M=t,!(M&6)&&It()}}function Go(){ve=Zt.current,F(Zt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wf(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(So(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:un(),F(me),F(oe),Ro();break;case 5:Mo(r);break;case 4:un();break;case 13:F($);break;case 19:F($);break;case 10:Lo(r.type._context);break;case 22:case 23:Go()}n=n.return}if(b=e,K=e=pt(e.current,null),te=ve=t,J=0,tr=null,Vo=xl=Mt=0,fe=Dn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function Sc(e,t){do{var n=K;try{if(zo(),Rr.current=il,ll){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ll=!1}if(Tt=0,q=Y=B=null,Rn=!1,qn=0,Wo.current=null,n===null||n.return===null){J=1,tr=t,K=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=te,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ya(o);if(y!==null){y.flags&=-257,Ja(y,o,a,i,t),y.mode&1&&Xa(i,c,t),t=y,s=c;var I=t.updateQueue;if(I===null){var A=new Set;A.add(s),t.updateQueue=A}else I.add(s);break e}else{if(!(t&1)){Xa(i,c,t),Ko();break e}s=Error(_(426))}}else if(U&&a.mode&1){var C=Ya(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ja(C,o,a,i,t),Eo(cn(s,a));break e}}i=s=cn(s,a),J!==4&&(J=2),Dn===null?Dn=[i]:Dn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=uc(i,s,t);Wa(i,f);break e;case 1:a=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(dt===null||!dt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=cc(i,a,t);Wa(i,v);break e}}i=i.return}while(i!==null)}zc(n)}catch(w){t=w,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Ec(){var e=ol.current;return ol.current=il,e===null?il:e}function Ko(){(J===0||J===3||J===2)&&(J=4),b===null||!(Mt&268435455)&&!(xl&268435455)||nt(b,te)}function ul(e,t){var n=M;M|=2;var r=Ec();(b!==e||te!==t)&&(We=null,Nt(e,t));do try{pp();break}catch(l){Sc(e,l)}while(!0);if(zo(),M=n,ol.current=r,K!==null)throw Error(_(261));return b=null,te=0,J}function pp(){for(;K!==null;)Nc(K)}function mp(){for(;K!==null&&!Fd();)Nc(K)}function Nc(e){var t=Pc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?zc(e):K=t,Wo.current=null}function zc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ap(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(n=op(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);J===0&&(J=5)}function Ct(e,t,n){var r=R,l=Se.transition;try{Se.transition=null,R=1,hp(e,t,n,r)}finally{Se.transition=l,R=r}return null}function hp(e,t,n,r){do rn();while(lt!==null);if(M&6)throw Error(_(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Xd(e,i),e===b&&(K=b=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Er||(Er=!0,jc(Hr,function(){return rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var o=R;R=1;var a=M;M|=4,Wo.current=null,up(e,n),xc(n,e),Rf(Li),Gr=!!zi,Li=zi=null,e.current=n,cp(n),Ud(),M=a,R=o,Se.transition=i}else e.current=n;if(Er&&(Er=!1,lt=e,sl=l),i=e.pendingLanes,i===0&&(dt=null),Wd(n.stateNode),ge(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(al)throw al=!1,e=Ji,Ji=null,e;return sl&1&&e.tag!==0&&rn(),i=e.pendingLanes,i&1?e===Zi?Fn++:(Fn=0,Zi=e):Fn=0,It(),null}function rn(){if(lt!==null){var e=uu(sl),t=Se.transition,n=R;try{if(Se.transition=null,R=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,sl=0,M&6)throw Error(_(331));var l=M;for(M|=4,k=e.current;k!==null;){var i=k,o=i.child;if(k.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(k=c;k!==null;){var m=k;switch(m.tag){case 0:case 11:case 15:On(8,m,i)}var p=m.child;if(p!==null)p.return=m,k=p;else for(;k!==null;){m=k;var h=m.sibling,y=m.return;if(Ac(m),m===c){k=null;break}if(h!==null){h.return=y,k=h;break}k=y}}}var I=i.alternate;if(I!==null){var A=I.child;if(A!==null){I.child=null;do{var C=A.sibling;A.sibling=null,A=C}while(A!==null)}}k=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:On(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,k=f;break e}k=i.return}}var u=e.current;for(k=u;k!==null;){o=k;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,k=d;else e:for(o=u;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(w){V(a,a.return,w)}if(a===o){k=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,k=v;break e}k=a.return}}if(M=l,It(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ml,e)}catch{}r=!0}return r}finally{R=n,Se.transition=t}}return!1}function us(e,t,n){t=cn(n,t),t=uc(e,t,1),e=ct(e,t,1),t=ue(),e!==null&&(ir(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)us(e,e,n);else for(;t!==null;){if(t.tag===3){us(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=cn(n,e),e=cc(t,e,1),t=ct(t,e,1),e=ue(),t!==null&&(ir(t,1,e),ge(t,e));break}}t=t.return}}function gp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(te&n)===n&&(J===4||J===3&&(te&130023424)===te&&500>G()-Ho?Nt(e,0):Vo|=n),ge(e,t)}function Lc(e,t){t===0&&(e.mode&1?(t=vr,vr<<=1,!(vr&130023424)&&(vr=4194304)):t=1);var n=ue();e=Ye(e,t),e!==null&&(ir(e,t,n),ge(e,n))}function vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lc(e,n)}function yp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Lc(e,n)}var Pc;Pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,ip(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&Ru(t,br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var l=on(t,oe.current);nn(t,n),l=Do(null,t,r,e,l,n);var i=Fo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Zr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,jo(t),l.updater=_l,t.stateNode=l,l._reactInternals=t,Ui(t,r,e,n),t=Wi(null,t,r,!0,i,n)):(t.tag=0,U&&i&&ko(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ap(r),e=Pe(r,e),l){case 0:t=Bi(null,t,r,e,n);break e;case 1:t=ba(null,t,r,e,n);break e;case 11:t=Za(null,t,r,e,n);break e;case 14:t=qa(null,t,r,Pe(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Bi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),ba(e,t,r,l,n);case 3:e:{if(mc(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Bu(e,t),nl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=cn(Error(_(423)),t),t=es(e,t,r,n,l);break e}else if(r!==l){l=cn(Error(_(424)),t),t=es(e,t,r,n,l);break e}else for(ye=ut(t.stateNode.containerInfo.firstChild),Ie=t,U=!0,Te=null,n=Uu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(an(),r===l){t=Je(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return Wu(t),e===null&&Oi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Pi(r,l)?o=null:i!==null&&Pi(r,i)&&(t.flags|=32),pc(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Oi(t),null;case 13:return hc(e,t,n);case 4:return To(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Za(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(el,r._currentValue),r._currentValue=o,i!==null)if(Oe(i.value,o)){if(i.children===l.children&&!me.current){t=Je(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ge(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Di(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Di(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,nn(t,n),l=Ee(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),qa(e,t,r,l,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Dr(e,t),t.tag=1,he(r)?(e=!0,Zr(t)):e=!1,nn(t,n),sc(t,r,l),Ui(t,r,l,n),Wi(null,t,r,!0,e,n);case 19:return gc(e,t,n);case 22:return fc(e,t,n)}throw Error(_(156,t.tag))};function jc(e,t){return iu(e,t)}function Ip(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,t,n,r){return new Ip(e,t,n,r)}function Xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ap(e){if(typeof e=="function")return Xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===po)return 11;if(e===mo)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bt:return zt(n.children,l,i,t);case fo:o=8,l|=8;break;case ui:return e=ke(12,n,t,l|2),e.elementType=ui,e.lanes=i,e;case ci:return e=ke(13,n,t,l),e.elementType=ci,e.lanes=i,e;case di:return e=ke(19,n,t,l),e.elementType=di,e.lanes=i,e;case Ws:return Cl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $s:o=10;break e;case Bs:o=9;break e;case po:o=11;break e;case mo:o=14;break e;case be:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=ke(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=ke(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=ke(22,e,r,t),e.elementType=Ws,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return e=ke(6,e,null,t),e.lanes=n,e}function ii(e,t,n){return t=ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Yo(e,t,n,r,l,i,o,a,s){return e=new _p(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(i),e}function wp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$t,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tc(e){if(!e)return gt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(he(n))return Tu(e,n,t)}return t}function Mc(e,t,n,r,l,i,o,a,s){return e=Yo(n,r,!0,e,l,i,o,a,s),e.context=Tc(null),n=e.current,r=ue(),l=ft(n),i=Ge(r,l),i.callback=t??null,ct(n,i,l),e.current.lanes=l,ir(e,l,r),ge(e,r),e}function kl(e,t,n,r){var l=t.current,i=ue(),o=ft(l);return n=Tc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(l,t,o),e!==null&&(Re(e,l,o,i),Mr(e,l,o)),o}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jo(e,t){cs(e,t),(e=e.alternate)&&cs(e,t)}function xp(){return null}var Rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zo(e){this._internalRoot=e}Sl.prototype.render=Zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));kl(e,t,null,null)};Sl.prototype.unmount=Zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){kl(null,e,null,null)}),t[Xe]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=fu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&mu(e)}};function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ds(){}function Cp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=cl(o);i.call(c)}}var o=Mc(t,r,e,0,null,!1,!1,"",ds);return e._reactRootContainer=o,e[Xe]=o.current,Kn(e.nodeType===8?e.parentNode:e),Rt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=cl(s);a.call(c)}}var s=Yo(e,0,!1,null,null,!1,!1,"",ds);return e._reactRootContainer=s,e[Xe]=s.current,Kn(e.nodeType===8?e.parentNode:e),Rt(function(){kl(t,s,n,r)}),s}function Nl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=cl(o);a.call(s)}}kl(t,o,e,l)}else o=Cp(n,t,e,l,r);return cl(o)}cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(vo(t,n|1),ge(t,G()),!(M&6)&&(dn=G()+500,It()))}break;case 13:Rt(function(){var r=Ye(e,1);if(r!==null){var l=ue();Re(r,e,1,l)}}),Jo(e,1)}};yo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ue();Re(t,e,134217728,n)}Jo(e,134217728)}};du=function(e){if(e.tag===13){var t=ft(e),n=Ye(e,t);if(n!==null){var r=ue();Re(n,e,t,r)}Jo(e,t)}};fu=function(){return R};pu=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};_i=function(e,t,n){switch(t){case"input":if(mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=yl(r);if(!l)throw Error(_(90));Hs(r),mi(r,l)}}}break;case"textarea":Gs(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};bs=Qo;eu=Rt;var kp={usingClientEntryPoint:!1,Events:[ar,Qt,yl,Zs,qs,Qo]},kn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sp={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ru(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||xp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{ml=Nr.inject(Sp),$e=Nr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kp;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qo(t))throw Error(_(200));return wp(e,t,null,n)};_e.createRoot=function(e,t){if(!qo(e))throw Error(_(299));var n=!1,r="",l=Rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Yo(e,1,!1,null,null,n,!1,r,l),e[Xe]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Zo(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=ru(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Rt(e)};_e.hydrate=function(e,t,n){if(!El(t))throw Error(_(200));return Nl(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!qo(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Rc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Mc(t,null,e,1,n??null,l,!1,i,o),e[Xe]=t.current,Kn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Sl(t)};_e.render=function(e,t,n){if(!El(t))throw Error(_(200));return Nl(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!El(e))throw Error(_(40));return e._reactRootContainer?(Rt(function(){Nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};_e.unstable_batchedUpdates=Qo;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Nl(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function Oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc)}catch(e){console.error(e)}}Oc(),Os.exports=_e;var Ep=Os.exports,fs=Ep;ai.createRoot=fs.createRoot,ai.hydrateRoot=fs.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}var it;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(it||(it={}));const ps="popstate";function Np(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:a}=r.location;return eo("",{pathname:i,search:o,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:dl(l)}return Lp(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zp(){return Math.random().toString(36).substr(2,8)}function ms(e,t){return{usr:e.state,key:e.key,idx:t}}function eo(e,t,n,r){return n===void 0&&(n=null),nr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||zp()})}function dl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a=it.Pop,s=null,c=m();c==null&&(c=0,o.replaceState(nr({},o.state,{idx:c}),""));function m(){return(o.state||{idx:null}).idx}function p(){a=it.Pop;let C=m(),f=C==null?null:C-c;c=C,s&&s({action:a,location:A.location,delta:f})}function h(C,f){a=it.Push;let u=eo(A.location,C,f);c=m()+1;let d=ms(u,c),v=A.createHref(u);try{o.pushState(d,"",v)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;l.location.assign(v)}i&&s&&s({action:a,location:A.location,delta:1})}function y(C,f){a=it.Replace;let u=eo(A.location,C,f);c=m();let d=ms(u,c),v=A.createHref(u);o.replaceState(d,"",v),i&&s&&s({action:a,location:A.location,delta:0})}function I(C){let f=l.location.origin!=="null"?l.location.origin:l.location.href,u=typeof C=="string"?C:dl(C);return u=u.replace(/ $/,"%20"),X(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let A={get action(){return a},get location(){return e(l,o)},listen(C){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(ps,p),s=C,()=>{l.removeEventListener(ps,p),s=null}},createHref(C){return t(l,C)},createURL:I,encodeLocation(C){let f=I(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(C){return o.go(C)}};return A}var hs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hs||(hs={}));function Pp(e,t,n){return n===void 0&&(n="/"),jp(e,t,n)}function jp(e,t,n,r){let l=typeof t=="string"?hn(t):t,i=ea(l.pathname||"/",n);if(i==null)return null;let o=Dc(e);Tp(o);let a=null;for(let s=0;a==null&&s<o.length;++s){let c=Qp(i);a=Wp(o[s],c)}return a}function Dc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(X(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=mt([r,s.relativePath]),m=n.concat(s);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dc(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:$p(c,i.index),routesMeta:m})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let s of Fc(i.path))l(i,o,s)}),t}function Fc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Fc(r.join("/")),a=[];return a.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Tp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Bp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Mp=/^:[\w-]+$/,Rp=3,Op=2,Dp=1,Fp=10,Up=-2,gs=e=>e==="*";function $p(e,t){let n=e.split("/"),r=n.length;return n.some(gs)&&(r+=Up),t&&(r+=Op),n.filter(l=>!gs(l)).reduce((l,i)=>l+(Mp.test(i)?Rp:i===""?Dp:Fp),r)}function Bp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Wp(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",p=Vp({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},m),h=s.route;if(!p)return null;Object.assign(l,p.params),o.push({params:l,pathname:mt([i,p.pathname]),pathnameBase:Jp(mt([i,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(i=mt([i,p.pathnameBase]))}return o}function Vp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,m,p)=>{let{paramName:h,isOptional:y}=m;if(h==="*"){let A=a[p]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const I=a[p];return y&&!I?c[h]=void 0:c[h]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Hp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Qp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ea(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kp=e=>Gp.test(e);function Xp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?hn(e):e,i;if(n)if(Kp(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),bo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=vs(n.substring(1),"/"):i=vs(n,t)}else i=t;return{pathname:i,search:Zp(r),hash:qp(l)}}function vs(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function oi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Uc(e,t){let n=Yp(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $c(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=hn(e):(l=nr({},e),X(!l.pathname||!l.pathname.includes("?"),oi("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),oi("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),oi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),p-=1;l.pathname=h.join("/")}a=p>=0?t[p]:"/"}let s=Xp(l,a),c=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||m)&&(s.pathname+="/"),s}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),Jp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,qp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function bp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bc=["post","put","patch","delete"];new Set(Bc);const e0=["get",...Bc];new Set(e0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rr.apply(this,arguments)}const ta=x.createContext(null),t0=x.createContext(null),Ft=x.createContext(null),zl=x.createContext(null),At=x.createContext({outlet:null,matches:[],isDataRoute:!1}),Wc=x.createContext(null);function n0(e,t){let{relative:n}=t===void 0?{}:t;ur()||X(!1);let{basename:r,navigator:l}=x.useContext(Ft),{hash:i,pathname:o,search:a}=Qc(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:mt([r,o])),l.createHref({pathname:s,search:a,hash:i})}function ur(){return x.useContext(zl)!=null}function Ll(){return ur()||X(!1),x.useContext(zl).location}function Vc(e){x.useContext(Ft).static||x.useLayoutEffect(e)}function Hc(){let{isDataRoute:e}=x.useContext(At);return e?g0():r0()}function r0(){ur()||X(!1);let e=x.useContext(ta),{basename:t,future:n,navigator:r}=x.useContext(Ft),{matches:l}=x.useContext(At),{pathname:i}=Ll(),o=JSON.stringify(Uc(l,n.v7_relativeSplatPath)),a=x.useRef(!1);return Vc(()=>{a.current=!0}),x.useCallback(function(c,m){if(m===void 0&&(m={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=$c(c,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:mt([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,o,i,e])}function l0(){let{matches:e}=x.useContext(At),t=e[e.length-1];return t?t.params:{}}function Qc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(Ft),{matches:l}=x.useContext(At),{pathname:i}=Ll(),o=JSON.stringify(Uc(l,r.v7_relativeSplatPath));return x.useMemo(()=>$c(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function i0(e,t){return o0(e,t)}function o0(e,t,n,r){ur()||X(!1);let{navigator:l}=x.useContext(Ft),{matches:i}=x.useContext(At),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=Ll(),m;if(t){var p;let C=typeof t=="string"?hn(t):t;s==="/"||(p=C.pathname)!=null&&p.startsWith(s)||X(!1),m=C}else m=c;let h=m.pathname||"/",y=h;if(s!=="/"){let C=s.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let I=Pp(e,{pathname:y}),A=d0(I&&I.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:mt([s,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:mt([s,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return t&&A?x.createElement(zl.Provider,{value:{location:rr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:it.Pop}},A):A}function a0(){let e=h0(),t=bp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:l},n):null,null)}const s0=x.createElement(a0,null);class u0 extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(At.Provider,{value:this.props.routeContext},x.createElement(Wc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function c0(e){let{routeContext:t,match:n,children:r}=e,l=x.useContext(ta);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(At.Provider,{value:t},r)}function d0(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let m=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);m>=0||X(!1),o=o.slice(0,Math.min(o.length,m+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=m),p.route.id){let{loaderData:h,errors:y}=n,I=p.route.loader&&h[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||I){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((m,p,h)=>{let y,I=!1,A=null,C=null;n&&(y=a&&p.route.id?a[p.route.id]:void 0,A=p.route.errorElement||s0,s&&(c<0&&h===0?(v0("route-fallback"),I=!0,C=null):c===h&&(I=!0,C=p.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,h+1)),u=()=>{let d;return y?d=A:I?d=C:p.route.Component?d=x.createElement(p.route.Component,null):p.route.element?d=p.route.element:d=m,x.createElement(c0,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:d})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?x.createElement(u0,{location:n.location,revalidation:n.revalidation,component:A,error:y,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var Gc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gc||{}),Kc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Kc||{});function f0(e){let t=x.useContext(ta);return t||X(!1),t}function p0(e){let t=x.useContext(t0);return t||X(!1),t}function m0(e){let t=x.useContext(At);return t||X(!1),t}function Xc(e){let t=m0(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function h0(){var e;let t=x.useContext(Wc),n=p0(),r=Xc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function g0(){let{router:e}=f0(Gc.UseNavigateStable),t=Xc(Kc.UseNavigateStable),n=x.useRef(!1);return Vc(()=>{n.current=!0}),x.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,rr({fromRouteId:t},i)))},[e,t])}const ys={};function v0(e,t,n){ys[e]||(ys[e]=!0)}function y0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function to(e){X(!1)}function I0(e){let{basename:t="/",children:n=null,location:r,navigationType:l=it.Pop,navigator:i,static:o=!1,future:a}=e;ur()&&X(!1);let s=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:s,navigator:i,static:o,future:rr({v7_relativeSplatPath:!1},a)}),[s,a,i,o]);typeof r=="string"&&(r=hn(r));let{pathname:m="/",search:p="",hash:h="",state:y=null,key:I="default"}=r,A=x.useMemo(()=>{let C=ea(m,s);return C==null?null:{location:{pathname:C,search:p,hash:h,state:y,key:I},navigationType:l}},[s,m,p,h,y,I,l]);return A==null?null:x.createElement(Ft.Provider,{value:c},x.createElement(zl.Provider,{children:n,value:A}))}function A0(e){let{children:t,location:n}=e;return i0(no(t),n)}new Promise(()=>{});function no(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,l)=>{if(!x.isValidElement(r))return;let i=[...t,l];if(r.type===x.Fragment){n.push.apply(n,no(r.props.children,i));return}r.type!==to&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=no(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}function _0(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function w0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function x0(e,t){return e.button===0&&(!t||t==="_self")&&!w0(e)}const C0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],k0="6";try{window.__reactRouterVersion=k0}catch{}const S0="startTransition",Is=hd[S0];function E0(e){let{basename:t,children:n,future:r,window:l}=e,i=x.useRef();i.current==null&&(i.current=Np({window:l,v5Compat:!0}));let o=i.current,[a,s]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},m=x.useCallback(p=>{c&&Is?Is(()=>s(p)):s(p)},[s,c]);return x.useLayoutEffect(()=>o.listen(m),[o,m]),x.useEffect(()=>y0(r),[r]),x.createElement(I0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const N0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lt=x.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:a,target:s,to:c,preventScrollReset:m,viewTransition:p}=t,h=_0(t,C0),{basename:y}=x.useContext(Ft),I,A=!1;if(typeof c=="string"&&z0.test(c)&&(I=c,N0))try{let d=new URL(window.location.href),v=c.startsWith("//")?new URL(d.protocol+c):new URL(c),w=ea(v.pathname,y);v.origin===d.origin&&w!=null?c=w+v.search+v.hash:A=!0}catch{}let C=n0(c,{relative:l}),f=L0(c,{replace:o,state:a,target:s,preventScrollReset:m,relative:l,viewTransition:p});function u(d){r&&r(d),d.defaultPrevented||f(d)}return x.createElement("a",ro({},h,{href:I||C,onClick:A||i?r:u,ref:n,target:s}))});var As;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(As||(As={}));var _s;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_s||(_s={}));function L0(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:a}=t===void 0?{}:t,s=Hc(),c=Ll(),m=Qc(e,{relative:o});return x.useCallback(p=>{if(x0(p,n)){p.preventDefault();let h=r!==void 0?r:dl(c)===dl(m);s(e,{replace:h,state:l,preventScrollReset:i,relative:o,viewTransition:a})}},[c,s,m,r,l,n,e,i,o,a])}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ae=(e,t)=>{const n=x.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:s,...c},m)=>x.createElement("svg",{ref:m,...P0,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${j0(e)}`,a].join(" "),...c},[...t.map(([p,h])=>x.createElement(p,h)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=ae("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=ae("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=ae("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=ae("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=ae("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=ae("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=ae("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=ae("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=ae("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=ae("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=ae("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=ae("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ae("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=ae("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ae("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ae("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),H0=()=>g.jsx("header",{className:"bg-white shadow-sm sticky top-0 z-10",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"flex items-center justify-between h-16",children:[g.jsxs(Lt,{to:"/",className:"flex items-center space-x-2",children:[g.jsx(na,{className:"h-8 w-8 text-primary-600"}),g.jsx("span",{className:"text-xl font-bold text-gray-900",children:"AI零基础教程"})]}),g.jsxs("nav",{className:"hidden md:flex items-center space-x-6",children:[g.jsx(Lt,{to:"/",className:"text-gray-600 hover:text-primary-600 font-medium",children:"首页"}),g.jsx(Lt,{to:"/chapter/1",className:"text-gray-600 hover:text-primary-600 font-medium",children:"开始学习"})]})]})})}),Q0=()=>g.jsx("footer",{className:"bg-gray-900 text-white mt-16",children:g.jsx("div",{className:"container py-12",children:g.jsxs("div",{className:"text-center",children:[g.jsx("h3",{className:"text-2xl font-bold mb-4",children:"AI零基础教程"}),g.jsx("p",{className:"text-gray-400 mb-6",children:"让每个人都能轻松掌握AI工具，提高工作效率"}),g.jsx("div",{className:"text-gray-500 text-sm",children:"© 2024 AI零基础教程. 保留所有权利。"})]})})}),G0={brain:na,"message-square":$0,edit:B0,"book-open":Yc},K0=({chapter:e})=>{const t=G0[e.icon]||na;return g.jsx(Lt,{to:`/chapter/${e.id}`,className:"card group",children:g.jsxs("div",{className:"flex items-start space-x-4",children:[g.jsx("div",{className:"flex-shrink-0",children:g.jsx("div",{className:"w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors",children:g.jsx(t,{className:"h-6 w-6 text-primary-600"})})}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors",children:e.title}),g.jsx("p",{className:"mt-1 text-gray-600",children:e.description}),g.jsxs("div",{className:"mt-3 flex items-center text-primary-600 font-medium text-sm",children:[g.jsx("span",{children:"开始学习"}),g.jsx(Jc,{className:"h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"})]})]})]})})},X0={id:1,title:"AI入门 - 了解AI是什么",description:"从基础开始，认识AI的发展历史、概念和应用领域",icon:"brain",sections:[{id:"1-1",title:"1.1 AI简介与发展历史",content:`
## 什么是AI？

**AI（人工智能）** 是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的系统。简单来说，AI就是让计算机像人一样思考和学习的技术。

![AI概念图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20illustration%20of%20artificial%20intelligence%20concept%2C%20showing%20a%20computer%20with%20human%20like%20brain%2C%20colorful%2C%20educational%2C%20cartoon%20style&image_size=landscape_16_9)

### AI的核心目标

AI的主要目标包括：

- **感知**：通过摄像头、麦克风等设备获取信息
- **理解**：分析和理解获取到的信息
- **学习**：从经验中学习和改进
- **推理**：基于已知信息做出决策
- **行动**：执行相应的操作

### AI发展简史

#### 1. 1950年代 - AI的诞生

**艾伦·图灵**（Alan Turing）是AI的奠基者之一，他在1950年提出了著名的**图灵测试**：如果一个人类无法通过对话区分计算机和人类，那么这台计算机就具有智能。

1956年，在**达特茅斯会议**上，约翰·麦卡锡（John McCarthy）首次提出了"人工智能"（Artificial Intelligence）这个术语，标志着AI作为一个学科的正式诞生。

![图灵测试示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20Turing%20test%2C%20showing%20a%20human%20talking%20to%20both%20a%20computer%20and%20another%20human%20behind%20curtains%2C%20educational%20style&image_size=landscape_16_9)

#### 2. 1960-1970年代 - 早期探索

这个时期，AI研究主要集中在**符号主义**方法上，开发了一些早期的**专家系统**。这些系统基于规则和逻辑，能够解决特定领域的问题。

同时，**自然语言处理**的研究也开始起步，虽然当时的系统只能处理非常简单的语言任务。

#### 3. 1980-1990年代 - AI冬天

由于早期AI系统的局限性，以及对AI能力的过高期望，导致了两次"**AI冬天**"。在这个时期，AI研究的资金大幅减少，发展陷入停滞。

主要原因包括：
- 计算能力不足
- 数据量有限
- 算法的局限性

#### 4. 2000年代 - 机器学习复兴

随着**互联网**的发展和**计算能力**的提升，AI开始复苏。这个时期的重点是**机器学习**，特别是**统计学习**方法。

**支持向量机**（SVM）、**随机森林**等算法开始在实际应用中取得成功。

#### 5. 2010年代至今 - 深度学习时代

2012年，**AlexNet**在ImageNet图像识别比赛中取得了革命性的突破，标志着**深度学习**时代的到来。

2017年，**Transformer**架构的提出为自然语言处理带来了巨大进步。

2022年，**ChatGPT**的发布让AI真正走进了普通人的生活，引发了全球AI热潮。

![深度学习示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20deep%20learning%20neural%20network%2C%20showing%20layers%20of%20neurons%20processing%20information%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 为什么现在AI这么火？

三个关键因素推动了AI的快速发展：

#### 1. 数据爆炸

- 互联网每天产生海量数据
- 社交媒体、电商平台积累了大量用户数据
- 传感器和IoT设备产生了丰富的环境数据

![数据时代](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20data%20explosion%2C%20showing%20big%20data%20cloud%20with%20various%20data%20sources%2C%20colorful%2C%20modern%20style&image_size=landscape_16_9)

#### 2. 计算能力提升

- **GPU**（图形处理器）的发展为深度学习提供了强大的计算支持
- **TPU**（张量处理器）进一步加速了AI模型的训练
- 云计算让普通开发者也能使用强大的计算资源

#### 3. 算法突破

- 深度学习算法的不断改进
- Transformer架构的发明
- 自监督学习方法的进步

### AI的分类

根据能力和应用范围，AI可以分为：

1. **弱人工智能（Narrow AI）**：只能执行特定任务的AI，如语音助手、图像识别等
2. **强人工智能（General AI）**：具有与人类相当的综合智能的AI（尚未实现）
3. **超人工智能（Super AI）**：比人类智能更强大的AI（理论概念）

### AI的基本原理概览

AI的核心原理是**模拟人类智能的某些方面**，主要包括以下关键技术：

- **机器学习**：让计算机从数据中学习规律
- **深度学习**：使用人工神经网络模拟人脑功能
- **自然语言处理**：让计算机理解和生成人类语言
- **计算机视觉**：让计算机理解图像和视频

这些技术的详细原理会在后续的具体工具章节中介绍，让我们先了解AI的基本分类。

---

💡 **小提示**：你不需要深入理解所有技术细节，只需要知道AI是如何工作的基本原理，这将帮助你更好地使用AI工具！

---

## 思考与讨论

### 1. 你认为AI最让你惊讶的能力是什么？

**示例想法**：
- "我最惊讶的是AI能够创作音乐！有一次我让AI根据我的喜好生成了一首钢琴曲，听起来完全像专业作曲家创作的。"
- "AI的翻译能力让我惊讶，它不仅能准确翻译，还能保持原文的风格和情感。"
- "最让我惊讶的是AI在医学影像诊断方面的能力，它能比人类医生更快地发现早期病变。"

### 2. 在你的生活中，你已经在使用哪些AI工具？

**生活中的AI工具例子**：
- **日常助手**：用Siri设置提醒，用小爱同学查天气
- **娱乐推荐**：抖音、Netflix根据我的喜好推荐内容
- **购物体验**：淘宝、京东的商品推荐，让我发现了很多喜欢的东西
- **出行导航**：高德地图的实时路况和路线推荐，帮我节省了很多时间
- **语言学习**：使用AI语言学习应用练习口语和听力

### 3. 你希望未来AI能为你解决什么问题？

**未来AI的可能性**：
- **智能家庭管理**：自动调节家居环境，预测我的需求
- **个性化教育**：根据我的学习进度和风格，定制专属学习计划
- **健康助手**：监测我的健康数据，提供预防建议
- **工作伙伴**：处理重复性工作，帮助我分析数据和生成报告
- **创意协作**：在设计、写作等创意工作中提供灵感和建议
        `},{id:"1-2",title:"1.2 AI是什么？不是什么？",content:`
## 正确认识AI

要想更好地使用AI，首先需要正确理解AI的本质和能力边界。

![AI本质示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20as%20a%20tool%20and%20assistant%2C%20with%20human%20working%20alongside%20AI%2C%20educational%2C%20friendly%20style&image_size=landscape_16_9)

### AI是什么？

#### 1. AI是强大的工具

AI本质上是一种**工具**，就像我们使用的其他工具一样，它的价值在于帮助我们完成任务。

- **效率提升**：AI可以处理大量重复性工作，比如数据分析、文档整理等
- **能力扩展**：AI可以做一些人类难以做到的事情，比如处理海量数据、识别模式等
- **辅助决策**：AI可以提供建议和参考，帮助我们做出更明智的选择

![AI工具示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20as%20a%20tool%20for%20various%20tasks%20like%20writing%2C%20analyzing%2C%20creating%2C%20educational%20style&image_size=landscape_16_9)

#### 2. AI是智能的助手

AI不仅仅是工具，更是我们的**智能助手**，它能够理解我们的需求并提供帮助。

- **内容创作**：帮你写邮件、报告、文章等
- **创意生成**：提供设计灵感、创意想法
- **问题解答**：回答各种问题，提供信息和建议
- **学习辅助**：帮助学习新知识，解释复杂概念

#### 3. AI是持续的学习者

AI的一个重要特点是它能够**从数据中学习**并不断改进。

- **模式识别**：从大量数据中发现规律和模式
- **自我改进**：通过反馈不断调整和优化
- **适应环境**：根据不同的使用场景调整自己的行为

### AI不是什么？

#### 1. AI不是万能的

尽管AI很强大，但它并不是无所不能的。

- **局限性**：AI只能在它训练过的领域表现良好
- **错误可能**：AI可能会产生错误或偏见
- **上下文理解**：AI对复杂上下文的理解有限
- **常识推理**：AI缺乏人类的常识和直觉

![AI局限性示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20limitations%2C%20with%20examples%20of%20areas%20where%20AI%20struggles%2C%20educational%20style&image_size=landscape_16_9)

#### 2. AI不是人类

AI虽然能够模拟人类的某些智能行为，但它本质上与人类不同。

- **意识缺失**：AI没有真正的自我意识
- **情感缺乏**：AI没有情感和主观感受
- **创造力有限**：AI的"创造力"基于现有数据
- **价值观**：AI没有内在的价值观和道德判断

#### 3. AI不是威胁

AI本身是中性的，它的影响取决于如何使用它。

- **工具本质**：AI就像一把刀，可以用来切菜也可以用来伤人
- **人类控制**：AI的发展和使用由人类控制
- **协作关系**：AI是人类的助手，不是替代品
- **共同进步**：人类和AI可以相互促进，共同发展

### AI的能力边界

了解AI的能力边界对于正确使用AI至关重要。

| AI擅长的任务 | AI不擅长的任务 |
|-------------|---------------|
| 数据处理和分析 | 创造性思维和创新 |
| 模式识别 | 情感理解和共情 |
| 重复性工作 | 道德判断和价值观决策 |
| 信息检索 | 常识推理和直觉判断 |
| 个性化推荐 | 跨领域知识迁移 |

![AI能力边界示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20capability%20boundaries%2C%20with%20what%20AI%20can%20and%20cannot%20do%2C%20educational%20style&image_size=landscape_16_9)

---

💡 **小提示**：理解AI的本质和能力边界，有助于你更有效地使用AI，知道什么时候该依赖AI，什么时候该依靠人类的判断。

---

## 思考与讨论

### 1. 你认为AI最适合帮你做什么？

**示例想法**：
- "我觉得AI最适合帮我整理和分析数据，这是我最头疼的工作。"
- "AI对我来说最有用的是帮助我生成创意内容，比如写作灵感和设计 ideas。"
- "我希望AI能帮我处理日常的重复性工作，让我有更多时间做更有意义的事情。"

### 2. 你认为AI在哪些方面还需要改进？

**示例想法**：
- "AI有时会产生错误信息，希望它的准确性能进一步提高。"
- "AI对上下文的理解还不够深入，经常会答非所问。"
- "AI的创造力还有限，希望它能产生更多真正原创的内容。"

### 3. 你如何看待AI与人类的关系？

**示例想法**：
- "我认为AI是人类的助手和合作伙伴，不是替代品。"
- "AI可以处理繁琐的工作，人类可以专注于更有创造性的任务。"
- "人类和AI各有所长，最好的方式是相互协作，发挥各自的优势。"
        `},{id:"1-3",title:"1.3 AI能为你做什么？",content:`
## AI的实际应用

AI已经渗透到我们生活的各个领域，为我们提供各种帮助。让我们来看看AI能为你做些什么。

![AI应用领域示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20various%20AI%20applications%20in%20different%20fields%2C%20colorful%20educational%20style&image_size=landscape_16_9)

### 📝 内容创作

AI可以成为你的创意伙伴，帮助你完成各种内容创作任务。

#### 写作助手
- **邮件撰写**：根据你的需求生成专业、得体的邮件
- **报告总结**：快速总结长文档，提取关键信息
- **文章创作**：生成博客文章、社交媒体内容
- **创意写作**：创作故事、诗歌、剧本等

#### 内容优化
- **语法检查**：纠正拼写和语法错误
- **风格调整**：根据不同场合调整写作风格
- **内容扩写**：将简短的想法扩展为完整的内容
- **多语言翻译**：支持多种语言之间的准确翻译

![AI写作助手示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20as%20a%20writing%20assistant%2C%20helping%20with%20email%2C%20report%2C%20article%20writing%2C%20educational%20style&image_size=landscape_16_9)

### 🎨 创意设计

AI在创意领域也能发挥重要作用，为你提供灵感和实际作品。

#### 图像生成
- **艺术创作**：根据描述生成各种风格的艺术作品
- **设计元素**：创建图标、插图、背景等设计元素
- **产品设计**：生成产品概念图和原型
- **时尚设计**：设计服装、配饰等

#### 多媒体创作
- **视频生成**：创建简短的视频内容
- **音乐创作**：根据风格生成原创音乐
- **动画制作**：创建简单的动画效果
- **3D建模**：生成基本的3D模型

### 💼 工作效率

AI可以帮助你提高工作效率，处理繁琐的任务，让你专注于更重要的工作。

#### 办公助手
- **日程管理**：智能安排会议和任务
- **文档处理**：自动分类和整理文档
- **数据整理**：处理和分析表格数据
- **会议助手**：记录会议内容，生成会议纪要

#### 业务支持
- **市场分析**：分析市场趋势和竞争对手
- **客户服务**：回答客户问题，提供支持
- **营销内容**：生成营销文案和广告内容
- **财务分析**：辅助财务报表和预算分析

![AI办公助手示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20as%20an%20office%20assistant%2C%20helping%20with%20scheduling%2C%20document%20processing%2C%20data%20analysis%2C%20educational%20style&image_size=landscape_16_9)

### 📚 学习辅助

AI可以成为你的私人导师，帮助你更有效地学习和掌握知识。

#### 学习助手
- **概念解释**：用简单易懂的方式解释复杂概念
- **习题解答**：提供解题思路和步骤
- **学习计划**：根据你的目标制定个性化学习计划
- **语言学习**：练习口语、听力和写作

#### 研究支持
- **文献综述**：整理和总结相关研究
- **论文写作**：辅助学术论文的撰写
- **资料检索**：帮助查找相关资料和信息
- **实验设计**：辅助实验方案的设计

### 🏠 日常生活

AI也可以融入你的日常生活，让生活更加便捷和有趣。

#### 生活助手
- **旅行规划**：根据你的偏好制定旅行计划
- **食谱推荐**：根据食材和口味推荐食谱
- **购物建议**：推荐适合的产品和优惠
- **健康管理**：提供健康建议和运动计划

#### 娱乐休闲
- **电影推荐**：根据你的喜好推荐电影和剧集
- **游戏助手**：提供游戏攻略和技巧
- **社交建议**：帮助制定社交活动计划
- **创意娱乐**：生成有趣的故事和游戏

![AI生活助手示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20as%20a%20daily%20life%20assistant%2C%20helping%20with%20travel%20planning%2C%20recipe%20recommendation%2C%20shopping%2C%20educational%20style&image_size=landscape_16_9)

### 🌍 行业应用

AI在各个行业都有广泛的应用，正在改变着我们的工作和生活方式。

| 行业 | AI应用 |
|------|--------|
| **医疗** | 疾病诊断、药物研发、患者管理 |
| **教育** | 个性化学习、智能辅导、自动评分 |
| **金融** | 风险评估、 fraud detection、投资分析 |
| **制造** | 质量控制、 predictive maintenance、自动化生产 |
| **交通** | 自动驾驶、交通优化、路线规划 |
| **零售** | 个性化推荐、库存管理、客户服务 |

---

💡 **小提示**：AI的应用领域还在不断扩展，几乎所有行业都可以从AI中受益。关键是要找到适合你需求的AI工具和应用方式。

---

## 思考与讨论

### 1. 你最希望AI在哪个领域为你提供帮助？

**示例想法**：
- "我最希望AI能在学习方面帮助我，特别是解释复杂的数学概念。"
- "我希望AI能帮我提高工作效率，处理那些繁琐的文档整理工作。"
- "我期待AI在创意方面给我灵感，帮助我设计出独特的作品。"

### 2. 你已经使用过哪些AI应用？体验如何？

**示例想法**：
- "我用过AI写作工具，它帮我快速完成了一份工作报告，节省了很多时间。"
- "我尝试过AI图像生成，效果很惊艳，给了我很多设计灵感。"
- "我使用过AI语音助手，它帮我设置提醒、查询信息，非常方便。"

### 3. 你认为未来AI还会在哪些方面为我们提供帮助？

**示例想法**：
- "我认为未来AI会在医疗健康方面发挥更大作用，帮助早期诊断和个性化治疗。"
- "AI可能会成为我们的个人生活顾问，帮助我们做出更明智的决策。"
- "我期待AI在教育领域的应用，为每个学生提供个性化的学习体验。"
        `},{id:"1-4",title:"1.4 AI的基本类型",content:`
## AI的基本类型

AI技术和工具种类繁多，不同类型的AI有不同的功能和应用场景。了解这些类型有助于你选择适合自己需求的AI工具。

![AI类型分类示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20types%20of%20AI%20tools%20and%20their%20categories%2C%20colorful%20educational%20style&image_size=landscape_16_9)

### 1. 大语言模型（LLM）

大语言模型是目前最受欢迎和广泛使用的AI类型之一，它们擅长理解和生成人类语言。

#### 核心特点
- **语言理解**：能够理解自然语言的含义和上下文
- **内容生成**：可以生成连贯、有逻辑的文本
- **知识储备**：包含大量的世界知识和信息
- **多任务能力**：可以执行多种语言相关的任务

#### 代表性工具
- **ChatGPT**：由OpenAI开发，功能全面的对话式AI
- **Claude**：由Anthropic开发，注重安全性和准确性
- **Gemini**：由Google开发，多模态能力强大
- **文心一言**：由百度开发，中文理解能力出色
- **通义千问**：由阿里巴巴开发，商业应用能力强

#### 主要用途
- **内容创作**：写作、编辑、翻译
- **知识问答**：回答问题、提供信息
- **编程辅助**：代码生成、调试
- **学习助手**：解释概念、辅导学习
- **创意生成**：提供灵感、创意想法

![大语言模型示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20large%20language%20model%20AI%20helping%20with%20writing%2C%20coding%2C%20and%20answering%20questions%2C%20educational%20style&image_size=landscape_16_9)

### 2. 图像生成工具

图像生成AI可以根据文字描述创建各种风格的图像，为创意设计提供强大支持。

#### 核心特点
- **文本到图像**：根据文字描述生成图像
- **风格多样**：支持多种艺术风格和视觉效果
- **创意生成**：可以创建独特的视觉内容
- **编辑能力**：可以修改和增强现有图像

#### 代表性工具
- **DALL·E 3**：由OpenAI开发，生成质量高
- **MidJourney**：生成艺术风格图像的佼佼者
- **Stable Diffusion**：开源模型，高度可定制
- **文心一格**：百度开发的中文图像生成工具
- **Adobe Firefly**：Adobe开发，设计专业度高

#### 主要用途
- **艺术创作**：生成绘画、插图、概念艺术
- **设计素材**：创建图标、背景、UI元素
- **营销内容**：设计海报、广告、社交媒体图片
- **产品设计**：生成产品概念图、包装设计
- **影视制作**：创建概念艺术、故事板

### 3. 语音工具

语音AI可以处理语音相关的任务，包括语音识别和语音合成。

#### 核心特点
- **语音识别**：将语音转换为文本
- **语音合成**：将文本转换为自然语音
- **声音克隆**：模仿特定人的声音
- **情感表达**：生成带有情感的语音

#### 代表性工具
- **Whisper**：OpenAI开发的语音识别系统
- **ElevenLabs**：高质量语音合成
- **百度语音识别**：中文语音识别能力强
- **Google Speech-to-Text**：多语言支持
- **Microsoft Azure Speech**：企业级语音服务

#### 主要用途
- ** transcription**：会议记录、采访转录
- **配音**：视频配音、有声书
- **语音助手**：智能音箱、手机助手
- **无障碍**：帮助视力障碍人士
- **语言学习**：发音练习、听力训练

![语音工具示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20voice%20AI%20tools%20for%20speech%20recognition%20and%20text-to-speech%2C%20educational%20style&image_size=landscape_16_9)

### 4. 视频工具

视频AI可以生成、编辑和增强视频内容，为视频创作提供新的可能性。

#### 核心特点
- **视频生成**：根据文字描述创建视频
- **视频编辑**：自动编辑和增强视频
- **内容转换**：图像或文本到视频的转换
- **特效添加**：自动添加特效和过渡

#### 代表性工具
- **Runway ML**：多功能视频AI工具
- **Pika**：生成高质量视频内容
- **Synthesia**：AI数字人视频
- **Descript**：AI辅助视频编辑
- **Adobe Premiere Pro (AI features)**：专业视频编辑软件的AI功能

#### 主要用途
- **短视频创作**：社交媒体、营销视频
- **演示视频**：产品演示、教程
- **动画制作**：简单动画、角色动画
- **视频修复**：增强老视频、修复瑕疵
- **内容翻译**：视频字幕和配音

### 5. 代码工具

代码AI可以帮助开发者编写、理解和优化代码，提高编程效率。

#### 核心特点
- **代码生成**：根据描述生成代码
- **代码补全**：智能补全代码片段
- **代码审查**：发现和修复代码问题
- **文档生成**：为代码生成文档
- **代码解释**：解释复杂代码的功能

#### 代表性工具
- **GitHub Copilot**：GitHub和OpenAI合作开发
- **Codeium**：免费的AI代码助手
- **Amazon CodeWhisperer**：AWS开发的代码工具
- **TabNine**：智能代码补全
- **Sourcegraph Cody**：代码理解和生成

#### 主要用途
- **快速原型**：快速生成代码原型
- **代码优化**：改进现有代码
- **学习编程**：帮助理解和学习新语言
- **调试**：帮助发现和修复bug
- **文档编写**：为代码生成文档

![代码工具示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20AI%20code%20tools%20helping%20with%20programming%2C%20coding%2C%20and%20debugging%2C%20educational%20style&image_size=landscape_16_9)

### 6. 办公辅助工具

办公AI工具集成在办公软件中，帮助提高办公效率。

#### 核心特点
- **文档处理**：智能处理和分析文档
- **会议管理**：会议记录和管理
- **邮件处理**：智能邮件管理
- **数据可视化**：自动生成图表和报告

#### 代表性工具
- **Microsoft Copilot**：Microsoft 365中的AI助手
- **Google Workspace AI**：Google办公套件的AI功能
- **Notion AI**：Notion中的AI助手
- **Slack AI**：团队协作中的AI功能
- **Asana AI**：项目管理中的AI辅助

#### 主要用途
- **文档创作**：快速生成文档和报告
- **会议助手**：记录会议内容，生成纪要
- **邮件管理**：智能分类和回复邮件
- **项目管理**：任务分配和进度跟踪
- **数据整理**：分析和可视化数据

### 7. 其他AI类型

除了以上主要类型，还有许多其他专业领域的AI工具：

- **推荐系统**：个性化内容推荐
- **搜索工具**：智能信息检索
- **医疗AI**：疾病诊断和医疗分析
- **教育AI**：个性化学习和辅导
- **金融AI**：风险评估和投资分析

---

💡 **小提示**：不同类型的AI工具可以相互配合使用，创造更强大的效果。例如，你可以用大语言模型生成内容，然后用图像生成工具为其创建配图。

---

## 思考与讨论

### 1. 你最感兴趣的AI工具类型是什么？为什么？

**示例想法**：
- "我最感兴趣的是大语言模型，因为它可以帮助我解决很多写作和学习上的问题。"
- "我对图像生成工具很感兴趣，因为我喜欢创作视觉内容，但自己的绘画能力有限。"
- "我对代码工具很感兴趣，因为它可以帮助我更高效地编程，节省时间。"

### 2. 你认为哪种AI工具最适合你的日常需求？

**示例想法**：
- "对我来说，办公辅助工具最实用，因为我每天都要处理大量文档和邮件。"
- "大语言模型对我最有帮助，因为我经常需要写各种内容。"
- "语音工具对我很重要，因为我开车时经常需要使用语音助手。"

### 3. 你期待未来会出现什么样的AI工具？

**示例想法**：
- "我期待未来有更智能的个人助手，能够理解我的需求并主动提供帮助。"
- "我希望看到更多跨领域的AI工具，能够同时处理多种任务。"
- "我期待AI工具在教育领域有更多应用，为每个学生提供个性化的学习体验。"
        `},{id:"1-5",title:"1.5 安全使用AI的原则",content:`
## 安全使用AI指南

随着AI的广泛应用，了解如何安全、负责任地使用AI变得越来越重要。遵循以下原则可以帮助你避免潜在的风险，充分发挥AI的价值。

![AI安全使用示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20safe%20AI%20usage%20principles%2C%20with%20shield%20and%20security%20icons%2C%20educational%20style&image_size=landscape_16_9)

### 🔒 保护个人隐私

保护个人隐私是使用AI时的首要原则。

#### 隐私保护措施
- **不分享敏感信息**：不要向AI输入身份证号、银行卡号、密码等个人敏感信息
- **谨慎上传文件**：避免上传包含个人信息的文件，如简历、合同等
- **了解数据使用政策**：在使用AI工具前，了解其数据使用和存储政策
- **使用隐私模式**：选择提供隐私保护功能的AI工具

#### 隐私风险示例
- **数据泄露**：如果AI服务提供商发生数据泄露，你的信息可能被泄露
- **数据训练**：你的输入可能被用于训练AI模型
- **第三方共享**：某些AI服务可能与第三方共享数据

![隐私保护示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20privacy%20protection%20when%20using%20AI%2C%20with%20person%20protecting%20personal%20data%2C%20educational%20style&image_size=landscape_16_9)

### ⚠️ 核实信息准确性

AI可能会产生错误信息或"幻觉"，因此需要对AI生成的内容进行核实。

#### 信息核实方法
- **多方验证**：重要信息要通过多个来源验证
- **检查事实**：对数据、统计数字等进行交叉检查
- **识别偏见**：注意AI可能存在的偏见和错误假设
- **保持怀疑**：不要盲目相信AI的所有输出

#### AI幻觉示例
- **虚构事实**：AI可能会编造不存在的人物、事件或数据
- **错误引用**：AI可能会错误引用来源或数据
- **过时信息**：AI的知识可能截止到某个时间点，不包含最新信息

### 📜 遵守法律法规

使用AI时必须遵守相关法律法规和伦理规范。

#### 法律合规要点
- **知识产权**：尊重他人的知识产权，不使用AI生成的内容侵犯他人版权
- **内容合法性**：不使用AI生成违法、暴力、色情等不良内容
- **平台条款**：遵守AI工具的使用条款和服务协议
- **隐私法规**：遵守当地的隐私保护法规

#### 常见法律风险
- **版权侵权**：未经许可使用受版权保护的材料
- **商标侵权**：使用AI生成包含他人商标的内容
- **诽谤风险**：生成可能损害他人名誉的内容
- **数据保护违规**：违反数据保护法规

### 🤝 负责任使用

负责任地使用AI是每个用户的责任。

#### 负责任使用原则
- **透明使用**：在使用AI生成的内容时，注明AI辅助创作
- **避免滥用**：不使用AI进行欺骗、误导或伤害他人
- **考虑影响**：思考AI使用可能带来的社会和伦理影响
- **持续学习**：了解AI的最新发展和最佳实践

#### 负责任使用示例
- **学术诚信**：在学术写作中注明AI的使用
- **内容创作**：明确标注AI辅助创作的内容
- **商业应用**：确保AI生成的内容符合商业道德

![负责任使用AI示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20responsible%20AI%20usage%2C%20with%20person%20using%20AI%20ethically%2C%20educational%20style&image_size=landscape_16_9)

### 💡 最佳实践

遵循以下最佳实践，让AI成为你的得力助手。

#### 使用AI的最佳实践
- **明确指令**：给AI清晰、具体的指令
- **迭代优化**：通过多次交互优化AI的输出
- **人类判断**：保留最终的决策权，不盲目依赖AI
- **持续学习**：不断学习新的AI工具和使用技巧
- **反馈改进**：向AI工具提供商提供反馈，帮助改进系统

#### 高效使用AI的技巧
- **分段处理**：将复杂任务分解为小步骤
- **提供上下文**：给AI足够的背景信息
- **指定格式**：明确要求AI输出的格式和结构
- **检查输出**：仔细检查AI生成的内容

### 🛡️ 应对AI风险

了解并应对可能的AI风险。

| 风险类型 | 表现形式 | 应对措施 |
|---------|---------|---------|
| **隐私风险** | 个人信息泄露 | 不输入敏感信息，使用隐私保护工具 |
| **信息错误** | 幻觉、错误信息 | 多方验证，保持怀疑态度 |
| **法律风险** | 版权侵权、违法内容 | 遵守法律法规，尊重知识产权 |
| **伦理风险** | 偏见、歧视内容 | 识别和避免使用有偏见的AI输出 |
| **依赖风险** | 过度依赖AI | 保持人类判断，将AI作为工具 |

---

💡 **小提示**：安全使用AI的核心是保持警惕和理性，将AI视为工具而非替代品，在享受AI带来便利的同时，也要注意潜在的风险。

---

## 思考与讨论

### 1. 你在使用AI时最担心的安全问题是什么？

**示例想法**：
- "我最担心的是隐私问题，害怕我的个人信息被滥用。"
- "我担心AI生成的信息不准确，特别是在重要决策时。"
- "我担心AI可能会产生有偏见或有害的内容。"

### 2. 你认为如何平衡AI的便利性和安全性？

**示例想法**：
- "我认为应该在使用AI时保持适度，只在安全的场景下使用。"
- "可以通过设置使用边界，明确什么可以让AI知道，什么不可以。"
- "重要的是要持续学习安全使用AI的知识，提高自己的判断力。"

### 3. 你希望未来的AI工具在安全方面有哪些改进？

**示例想法**：
- "我希望AI工具能更好地保护用户隐私，明确数据使用政策。"
- "希望AI能主动识别并标记可能不准确的信息。"
- "期待AI工具在设计时就考虑伦理因素，减少偏见和有害内容的产生。"

---

## 第一章完成！

恭喜你完成了第一章的学习！现在你已经对AI有了全面的认识，包括：

- **AI的基本概念**：了解了AI的定义、发展历史和核心原理
- **AI的本质**：理解了AI是什么，不是什么
- **AI的应用**：认识了AI在各个领域的应用
- **AI的类型**：了解了不同类型的AI工具及其用途
- **安全使用**：掌握了安全、负责任使用AI的原则

在下一章，我们将开始学习如何实际使用大语言模型，这是AI工具中最常用、最强大的类型之一！

---

### 章节回顾

**核心知识点**：
- AI是一种工具和助手，不是万能的，也不是人类
- AI有多种类型，各有不同的功能和应用场景
- 安全使用AI需要保护隐私、核实信息、遵守法律
- AI的应用领域非常广泛，几乎涵盖所有行业

**重要提醒**：
- 始终保持对AI输出的批判性思维
- 不要过度依赖AI，保留人类的判断能力
- 持续学习新的AI工具和使用技巧
- 负责任地使用AI，考虑其社会影响
        `}]},Y0={id:2,title:"大语言模型入门",description:"学习如何使用ChatGPT、Claude等主流大语言模型",icon:"message-square",sections:[{id:"2-1",title:"2.1 什么是大语言模型？",content:`
## 什么是大语言模型？

大语言模型（Large Language Models，简称LLMs）是目前最热门、最强大的AI技术之一。它们能够理解和生成人类语言，完成各种文字相关的任务。

![大语言模型示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20large%20language%20model%20with%20chat%20interface%20and%20AI%20brain%2C%20educational%20style&image_size=landscape_16_9)

### LLM的核心原理

大语言模型的工作原理可以理解为"预测下一个词"，这是一种自监督学习的方法。

#### 训练过程详解
- **数据收集**：模型训练前会收集海量的文本数据，包括书籍、网站、文章、对话等
- **预处理**：对数据进行清洗、分词、标记化等处理
- **模型架构**：使用Transformer架构，这是一种特别适合处理序列数据的神经网络
- **自监督学习**：通过"完形填空"的方式学习，预测被屏蔽的词
- **参数优化**：通过反向传播算法不断调整模型参数
- **规模扩展**：增加模型参数量和训练数据量

#### 工作原理详解
- **输入处理**：将输入文本转换为向量表示（词嵌入）
- **注意力机制**：计算每个词与其他词的关联程度
- **上下文理解**：理解整个输入的上下文含义
- **知识检索**：从模型内部"知识"中检索相关信息
- **生成策略**：使用不同的采样策略生成下一个词
- **连贯性保证**：确保生成的内容逻辑连贯

![LLM工作原理示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20LLM%20working%20principle%20with%20input%20processing%2C%20attention%20mechanism%2C%20and%20output%20generation%2C%20educational%20style&image_size=landscape_16_9)

### Transformer架构

Transformer是现代大语言模型的核心架构，由Google在2017年提出。

#### 关键组件
- **注意力层**：计算词与词之间的关联
- **前馈网络**：处理和转换特征
- **层归一化**：稳定训练过程
- **位置编码**：保留词的顺序信息

#### 优势
- **并行处理**：比传统RNN训练速度更快
- **长距离依赖**：更好地捕获长文本中的依赖关系
- **可扩展性**：易于扩展到更大的模型规模

### 模型规模与能力

大语言模型的能力与模型规模密切相关。

#### 规模因素
- **参数量**：从数亿到数千亿参数
- **训练数据**：从数十亿到数万亿tokens
- **计算资源**：需要大量GPU/TPU计算资源

#### 能力提升
- **语言理解**：理解更复杂的语言结构
- **知识存储**：存储更多世界知识
- **推理能力**：执行更复杂的推理任务
- **创造性**：生成更有创意的内容

### LLM能做什么

大语言模型的能力非常广泛，几乎涵盖所有文字相关的任务。

#### 文本生成
- **写作帮助**：写文章、邮件、报告、甚至小说
- **创意内容**：生成故事、诗歌、剧本等创意作品
- **内容扩展**：把简短的想法扩展成完整的内容

#### 理解与分析
- **信息总结**：把长文章总结成简短的摘要
- **问题回答**：回答各种领域的问题
- **内容解释**：用简单易懂的话解释复杂的概念

#### 实用工具
- **语言翻译**：在不同语言间翻译
- **代码辅助**：帮助写代码、解释代码
- **写作润色**：改进文章的表达和风格

![LLM能力展示示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20tasks%20LLM%20can%20do%2C%20like%20writing%2C%20coding%2C%20translating%2C%20educational%20style&image_size=landscape_16_9)

### LLM的工作方式

大语言模型通过对话的方式工作，就像和人聊天一样。

#### 交互模式
- **对话形式**：你问一句，模型答一句
- **上下文记忆**：好的LLM会记住之前的对话内容
- **多轮交流**：可以进行多轮对话，不断深入讨论

#### 输入技巧
- **清晰表达**：用清晰、具体的语言描述你的需求
- **提供细节**：给越多的背景信息，输出质量越高
- **明确要求**：说明你想要的格式、风格、长度等

### LLM的优势

相比其他工具，大语言模型有几个显著的优势。

#### 灵活性
- **多用途**：一个模型可以做很多不同的事情
- **自适应**：适应不同的风格和需求
- **即时响应**：随时随地快速回答和帮助

#### 易用性
- **自然交互**：用普通的自然语言交流
- **无需编程**：不需要写代码就能使用
- **快速上手**：几分钟就能学会基本使用

#### 能力广度
- **知识丰富**：了解很多领域的知识
- **跨文化**：支持多种语言和文化
- **持续发展**：技术还在不断进步

### 重要提醒

虽然LLM很强大，但也有一些需要注意的地方。

#### 能力边界
- **不是全知全能**：有些问题它可能不知道答案
- **可能出错**：有时会产生错误或不准确的信息
- **需要验证**：重要信息最好自己验证一下

#### 合理使用
- **作为助手**：把它当做助手，不是专家
- **保留判断**：保持自己的判断和决策能力
- **负责任**：负责任地使用AI的输出

---

💡 **小提示**：大语言模型最强大的地方在于它的通用性，你可以用它来做很多不同的事情。最好的学习方法就是多用、多试！

---

## 思考与讨论

### 1. 你对大语言模型最感兴趣的能力是什么？

**示例想法**：
- "我最感兴趣的是写作帮助，因为我经常需要写各种内容，但不擅长表达。"
- "我对代码辅助很感兴趣，希望AI能帮我更容易地学习编程。"
- "我希望用LLM来辅助学习，解释我不懂的概念。"

### 2. 你最想先用大语言模型来做什么？

**示例想法**：
- "我最想先用它来帮我写邮件，写一封好邮件对我来说有点困难。"
- "我想试试让它帮我总结文章，这样我可以更快地了解文章内容。"
- "我想让它帮我想一些创意想法，比如给朋友送什么礼物。"

### 3. 你觉得大语言模型最可能在哪方面改变你的生活或工作？

**示例想法**：
- "我觉得它会改变我写作的方式，让我能更快地产生高质量的内容。"
- "它可能会让我学习新知识的速度变快，因为可以随时问问题。"
- "我认为它能帮我处理一些重复性工作，让我有时间做更有意义的事。"
        `},{id:"2-2",title:"2.2 主流大语言模型介绍",content:`
## 主流大语言模型介绍

现在有很多优秀的大语言模型，各有特色。了解它们的特点可以帮助你选择最适合自己的工具。

![主流LLM比较示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20LLM%20logos%20and%20characters%2C%20like%20ChatGPT%2C%20Claude%2C%20Gemini%2C%20educational%20style&image_size=landscape_16_9)

### ChatGPT（OpenAI）

ChatGPT是最著名、使用最广泛的大语言模型之一。

#### 主要特点
- **用户友好**：界面简洁直观，非常容易上手
- **生态丰富**：有很多插件和集成选项
- **模型选择**：提供不同级别的模型（GPT-3.5、GPT-4等）
- **多模态**：可以处理图片、音频（需要高级版）

#### 优势
- **响应质量高**：输出质量普遍较好
- **功能全面**：能做很多不同的任务
- **更新频繁**：模型持续改进和更新

#### 适用场景
- 日常使用、学习、工作
- 内容创作和写作
- 编程辅助
- 多语言任务

### Claude（Anthropic）

Claude是Anthropic公司开发的模型，以安全性和可靠性著称。

#### 主要特点
- **对话自然**：对话风格更自然、流畅
- **长文本处理**：能处理特别长的文本
- **注重安全**：设计上更注重安全性和伦理
- **准确性**：某些任务上表现更准确

#### 优势
- **长文档处理**：处理长文档能力强
- **对话体验**：对话体验更像真人
- **安全性**：对敏感内容处理更谨慎

#### 适用场景
- 处理长文章和文档
- 需要长时间对话的场景
- 对安全性要求高的任务

### Gemini（Google）

Gemini是Google开发的模型，在多模态方面表现出色。

#### 主要特点
- **多模态**：能很好地处理图片、音频、视频
- **深度思考**：某些问题上有更深入的分析
- **搜索集成**：可以和Google搜索结合
- **实时信息**：能获取最新信息（需要高级版）

#### 优势
- **图像理解**：理解图片能力很强
- **技术问题**：技术相关问题回答较好
- **实时数据**：结合搜索提供最新信息

#### 适用场景
- 涉及图片、图表的任务
- 需要最新信息的场景
- 技术相关的问题

### 文心一言（百度）

文心一言是百度开发的中文大语言模型。

#### 主要特点
- **中文优势**：中文理解和生成能力出色
- **本地化**：对中国文化和语境理解好
- **多模态**：也支持图像等多种模态
- **应用广泛**：有丰富的中文应用场景

#### 优势
- **中文最佳**：中文处理能力强
- **文化适配**：对中国文化理解深刻
- **访问方便**：在国内访问体验好

#### 适用场景
- 中文内容创作
- 中文文化相关问题
- 中国市场商业应用

### 通义千问（阿里巴巴）

通义千问是阿里巴巴开发的大语言模型。

#### 主要特点
- **商业应用**：商业场景优化
- **集成丰富**：和阿里生态集成
- **多模态**：支持多种模态
- **工具集成**：有丰富的工具和插件

#### 优势
- **商业场景**：商业应用能力强
- **生态整合**：和阿里生态无缝集成
- **企业服务**：企业级服务支持

#### 适用场景
- 商业写作和分析
- 企业内外部沟通
- 电商相关任务

### 如何选择适合你的LLM

选择模型时可以考虑以下几个方面。

![LLM选择指南示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20decision%20tree%20for%20choosing%20LLM%2C%20educational%20style&image_size=landscape_16_9)

#### 考虑因素
- **主要用途**：你主要用它来做什么
- **语言需求**：主要用什么语言
- **预算情况**：是否愿意付费
- **使用习惯**：你习惯什么样的界面和交互

#### 选择建议
- **初学者**：从ChatGPT或Claude开始，界面友好
- **中文为主**：考虑文心一言或通义千问
- **多模态需求**：Gemini是很好的选择
- **商业应用**：通义千问或Claude可能更合适

#### 建议做法
- **多试几个**：不要只用一个，试试不同的模型
- **比较效果**：同一个任务，看看不同模型的效果
- **组合使用**：不同场景用不同的模型

---

💡 **小提示**：最好的选择方法是试用！每个模型都有免费版或试用版，你可以都试试，看看哪个最适合你的需求和习惯。

---

## 思考与讨论

### 1. 你最想先尝试哪个大语言模型？为什么？

**示例想法**：
- "我想先试试ChatGPT，因为听说它最有名，而且很多人在用。"
- "我对Claude感兴趣，因为听说它在长文档处理方面很强。"
- "我想试试文心一言，因为中文理解能力应该最好。"

### 2. 你觉得选择LLM时最重要的考虑因素是什么？

**示例想法**：
- "对我来说最重要的是中文处理能力，因为我主要用中文。"
- "我觉得易用性很重要，界面要是太复杂我可能学不会。"
- "我更看重准确性，特别是回答问题时不能错太多。"

### 3. 你觉得未来的大语言模型会有什么发展方向？

**示例想法**：
- "我觉得未来的LLM会更了解个人，提供更个性化的帮助。"
- "希望它们能处理更多类型的文件，不只是文字，还有图片、视频。"
- "我期待它们能更好地理解上下文，对话能更连贯、智能。"
        `},{id:"2-3",title:"2.3 注册与首次使用",content:`
## 注册与首次使用

让我们以ChatGPT为例，一步步学习如何注册和使用大语言模型。其他模型的注册流程类似，我们也会简要提到。

![首次使用LLM步骤示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20to%20register%20and%20use%20LLM%2C%20like%20signup%2C%20login%2C%20chat%2C%20educational%20style&image_size=landscape_16_9)

### 注册ChatGPT（示例）

让我们以最热门的ChatGPT为例，学习如何注册。

#### 准备工作
- **邮箱地址**：准备一个常用的邮箱
- **手机号**：可能需要手机号验证
- **稳定网络**：确保网络连接稳定

#### 注册步骤
1. **访问官网**：打开ChatGPT官网（https://chat.openai.com）
2. **点击注册**：找到"Sign Up"或"注册"按钮
3. **填写信息**：输入邮箱、设置密码
4. **验证邮箱**：去邮箱点击验证链接
5. **验证手机号**：输入手机号，接收验证码
6. **完善资料**：填写一些基本信息（可选）
7. **开始使用**：现在你可以开始使用了！

### 其他主流模型的注册方式

其他模型的注册流程类似，这里简要说明。

#### Claude（Anthropic）
- **官网**：https://claude.ai
- **方式**：邮箱注册，可能需要等待审核
- **特点**：界面简洁，专注对话

#### Gemini（Google）
- **官网**：https://gemini.google.com
- **方式**：Google账号直接登录
- **特点**：和Google生态集成

#### 文心一言（百度）
- **官网**：https://yiyan.baidu.com
- **方式**：百度账号登录
- **特点**：国内访问稳定

#### 通义千问（阿里巴巴）
- **官网**：https://tongyi.aliyun.com
- **方式**：淘宝/阿里云账号登录
- **特点**：和阿里生态集成

![不同LLM注册方式比较](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20comparing%20registration%20methods%20of%20different%20LLMs%2C%20educational%20style&image_size=landscape_16_9)

### 首次使用指南

完成注册后，让我们开始第一次对话！

#### 界面介绍
- **对话区域**：主要的聊天界面
- **输入框**：底部的输入框，用来打字
- **发送按钮**：输入后点击发送
- **历史记录**：左边显示之前的对话
- **新对话**：开始新的对话

#### 第一次对话
1. **打开网站**：访问ChatGPT官网
2. **登录账号**：用你的账号登录
3. **看到界面**：熟悉一下界面布局
4. **输入问题**：在输入框输入你的第一个问题
5. **点击发送**：发送，等待回复
6. **继续对话**：根据回复继续交流

### 第一个提示建议

第一次使用时，试试这些简单的例子！

#### 简单问候
- **示例**："你好！请介绍一下你自己。"
- **好处**：简单友好，开始轻松的对话

#### 询问帮助
- **示例**："我想了解一下你能帮我做什么？"
- **好处**：了解模型的能力范围

#### 简单任务
- **示例**："请帮我把这段简短的话扩展成一段完整的文字。"
- **好处**：体验模型的写作能力

### 常用功能介绍

了解一些常用功能，让你用起来更顺手。

#### 对话管理
- **新对话**：开始新的话题
- **历史记录**：查看之前的对话
- **重命名**：给对话起个名字方便查找
- **删除**：删除不需要的对话

#### 模型选择
- **不同版本**：有些服务提供多个模型选项
- **按需选择**：根据任务选择合适的模型
- **权衡考虑**：速度、质量、成本的权衡

#### 设置选项
- **界面语言**：有些可以切换语言
- **主题选择**：可能有亮色/暗色主题
- **偏好设置**：有些有个性化设置

![LLM常用功能界面](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20LLM%20interface%20with%20chat%20window%2C%20history%20sidebar%2C%20settings%2C%20educational%20style&image_size=landscape_16_9)

### 常见问题解答

第一次使用时可能会遇到这些问题。

#### 注册问题
- **收不到验证码**：检查邮箱垃圾箱，可能被当成垃圾邮件
- **手机号验证失败**：确认手机号是否正确，网络是否稳定
- **无法访问网站**：检查网络连接，尝试刷新页面

#### 使用问题
- **没有反应**：确认是否登录，检查网络连接
- **回复很慢**：可能是服务器繁忙，稍等一下或稍后再试
- **回复不符合预期**：试着更清晰地描述你的需求

#### 安全问题
- **保护隐私**：不要输入敏感信息（密码、身份证号等）
- **信息验证**：重要信息自己验证一下
- **合理使用**：负责任地使用AI工具

---

💡 **小提示**：第一次不用太紧张，就像和新朋友聊天一样！随便问点什么，慢慢熟悉它的能力和界面。有问题也可以直接问AI自己！

---

## 思考与讨论

### 1. 你注册LLM时可能遇到的最大问题是什么？

**示例想法**：
- "我担心网络访问可能有问题，网站可能打不开。"
- "我怕验证步骤太复杂，我操作不好。"
- "我担心账号安全问题，不知道会不会泄露隐私。"

### 2. 你最想问AI的第一个问题是什么？

**示例想法**：
- "我想先让它介绍一下自己，看看它怎么说。"
- "我想问它能帮我做什么，了解一下它的能力范围。"
- "我想问一个关于学习的问题，看看它回答得好不好。"

### 3. 你觉得学习使用LLM时最需要注意什么？

**示例想法**：
- "我觉得最重要的是多尝试，用多了自然就会了。"
- "我觉得应该注意不要太依赖它，自己也要思考。"
- "我觉得要注意保护自己的隐私，不要输入重要信息。"
        `},{id:"2-4",title:"2.4 基础功能演示",content:`
## 基础功能演示

现在你已经注册好了，让我们来看看LLM的一些基础功能！这些是最常用的，掌握后你就能完成很多任务。

![LLM基础功能演示示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20LLM%20functions%20like%20writing%2C%20question%20answering%2C%20summarizing%2C%20educational%20style&image_size=landscape_16_9)

### 功能一：回答问题

这是LLM最基本、最常用的功能。

#### 可以问什么
- **知识问题**：历史、科学、文化等知识
- **生活问题**：菜谱、旅行、购物建议
- **学习问题**：作业、考试、学习方法
- **技术问题**：软件、编程、工具使用

#### 提问技巧
- **具体描述**：问题越具体，回答越准确
- **提供背景**：给更多背景信息
- **明确要求**：说明你想要的回答形式

#### 示例对话
- **你**："请简单解释一下什么是光合作用？"
- **你**："我想做西红柿炒鸡蛋，能给我一个简单的做法吗？"

### 功能二：内容创作

LLM是出色的写作助手！

#### 可以创作什么
- **日常写作**：邮件、消息、便签
- **正式写作**：报告、文章、申请信
- **创意写作**：故事、诗歌、剧本
- **社交媒体**：朋友圈、微博内容

#### 写作技巧
- **说明目的**：告诉AI你写这个的目的
- **指定风格**：正式/非正式/幽默/专业等
- **描述受众**：写给谁看？
- **提供要点**：想要包含的要点

#### 示例对话
- **你**："帮我写一封感谢老师的邮件，要真诚但不要太长。"
- **你**："帮我写一个简短的朋友圈，分享我今天的好心情。"

### 功能三：内容改进和润色

写好后，可以让AI帮你优化！

#### 可以优化什么
- **语言润色**：让表达更优美、准确
- **风格调整**：从正式变轻松，或反之
- **长度调整**：缩短或加长
- **错误修正**：找语法错误和不通顺的地方

#### 优化技巧
- **说明需求**：具体说你想怎么改
- **指出重点**：什么部分是重点
- **保持原意**：提醒不要改变原意

#### 示例对话
- **你**："帮我把这段话改得更礼貌一些，但不要改变意思。"
- **你**："帮我把这个邮件缩短一点，但主要意思要保留。"

![内容改进功能示例](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20before%20and%20after%20content%20improvement%20with%20LLM%2C%20educational%20style&image_size=landscape_16_9)

### 功能四：摘要和总结

帮你快速了解长内容的要点！

#### 可以总结什么
- **文章**：新闻、博客、论文
- **对话记录**：会议记录、聊天记录
- **视频/音频**：需要先有文字稿
- **书籍**：章节或全书要点

#### 总结技巧
- **提供原文**：把需要总结的内容给AI
- **说明目的**：是用于学习、汇报还是分享
- **指定格式**：要点、段落、思维导图风格等

#### 示例对话
- **你**："帮我把这篇文章总结成3个要点。"
- **你**："帮我把这段会议记录总结一下，列出主要决定和待办事项。"

### 功能五：翻译和语言学习

LLM是很棒的语言助手！

#### 语言相关功能
- **多语翻译**：多种语言之间互译
- **语言学习**：语法、词汇、对话练习
- **文化解释**：解释文化差异和习惯
- **润色译文**：改进翻译结果

#### 使用技巧
- **明确方向**：从什么语言翻译成什么语言
- **说明场合**：正式/非正式/商务等
- **补充说明**：有些词有特殊含义

#### 示例对话
- **你**："帮我把这句话翻译成英语，要用于商务邮件。"
- **你**："帮我用简单的中文解释一下这个英语短语的意思和用法。"

### 功能六：思维导图和大纲

帮你理清思路，组织内容！

#### 可以生成什么
- **写作大纲**：文章、报告的结构
- **学习大纲**：课程、主题的学习框架
- **活动计划**：会议、旅行、项目计划
- **思维导图**：可视化整理思路

#### 提纲技巧
- **核心主题**：明确主题和目标
- **主要分支**：想要包含的主要部分
- **详细程度**：需要多详细的提纲

#### 示例对话
- **你**："帮我做一个'我的周末计划'的思维导图大纲。"
- **你**："帮我列一个关于'如何学习编程'的文章大纲。"

![思维导图功能示例](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20mind%20map%20created%20by%20LLM%2C%20showing%20branches%20and%20ideas%2C%20educational%20style&image_size=landscape_16_9)

### 更多基础功能

还有很多其他功能，等待你去发现！

#### 实用小功能
- **头脑风暴**：一起想点子
- **角色扮演**：扮演不同角色对话
- **模拟面试**：练习面试问答
- **决策帮助**：列出利弊帮助决策

#### 探索建议
- **多试不同的**：不要只用一个功能
- **组合使用**：多个功能组合起来用
- **分享经验**：和朋友分享好用的方法

---

💡 **小提示**：这些功能看起来很多，但别担心！你不需要一下子都会。从你最需要的那个开始，慢慢探索。用的多了，自然就熟练了！

---

## 思考与讨论

### 1. 你最想先试这些基础功能中的哪一个？

**示例想法**：
- "我最想先试内容创作，帮我写邮件，因为这是我最常用的。"
- "我想试试摘要总结，这样读文章能快一点。"
- "我对思维导图功能很感兴趣，帮助我理清思路。"

### 2. 你觉得哪个功能对你最有帮助？

**示例想法**：
- "对我来说内容改进和润色最有帮助，因为我写东西总是觉得不够好。"
- "我觉得回答问题的功能最有用，可以解决我很多疑问。"
- "翻译功能对我很重要，因为我经常需要用英语。"

### 3. 你能想到什么我们没提到的LLM用法吗？

**示例想法**：
- "我觉得可以用它来帮我想给朋友买什么生日礼物。"
- "也许可以让它帮我编一些睡前故事？"
- "或许能用它来帮我练习面试自我介绍？"
        `},{id:"2-5",title:"2.5 实践：写第一篇文章",content:`
## 实践：写第一篇文章

学习了这么多功能，让我们来做一个完整的实践！我们将用LLM来写一篇文章，完整走一遍流程。

![写作实践步骤示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20to%20write%20article%20with%20LLM%2C%20from%20outline%20to%20final%20draft%2C%20educational%20style&image_size=landscape_16_9)

### 实践项目介绍

我们选择一个简单但实用的题目来练习。

#### 题目选择
- **题目**："如何养成早起的好习惯"
- **目的**：实用、常见、容易有共鸣
- **读者**：想要养成好习惯的年轻人
- **风格**：亲切、实用、有具体建议

#### 为什么选这个
- **贴近生活**：很多人都关心这个话题
- **有话可说**：有很多具体建议可以写
- **结构清晰**：容易组织内容

### 第一步：确定大纲

不要一开始就让AI写完整文章，先做大纲！

#### 构思大纲
1. **引言**：早起的好处和重要性
2. **提前准备**：前一晚的准备工作
3. **早晨流程**：起床后做什么
4. **常见困难**：会遇到什么困难和如何克服
5. **循序渐进**：不要着急，一步步来
6. **总结鼓励**：总结要点，鼓励行动

#### 问AI的方式
- **示例**："我想写一篇关于如何养成早起习惯的文章，请帮我做一个大纲。"
- **补充**："文章面向年轻人，要亲切实用，要有具体建议。"

### 第二步：分段写作

根据大纲，一段一段来写。

#### 写引言
- **内容**：说明早起的好处，吸引读者兴趣
- **技巧**：用问题开头，分享一点好处，引出下文

#### 写主体部分
- **分段写**：每个部分单独写
- **具体内容**：要具体、可操作
- **提供例子**：给具体的做法或例子

#### 问AI的方式
- **示例**："根据大纲，帮我写引言部分。用亲切的语气，开头用一个问题，然后说几个早起的好处。"

### 第三步：优化和润色

初稿完成后，让AI帮你优化！

#### 检查内容
- **完整性**：要点都有了吗？
- **逻辑**：内容连贯吗？
- **读者友好**：好理解吗？

#### 优化润色
- **流畅度**：读起来顺吗？
- **语气**：语气合适吗？
- **文字**：有没有可以改进的表达？

#### 问AI的方式
- **示例**："帮我把这篇文章读一遍，看看有没有可以改进的地方。让内容更连贯，语气更亲切一些。"

![文章写作流程示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20article%20writing%20process%3A%20outline%20draft%20revise%20final%2C%20educational%20style&image_size=landscape_16_9)

### 第四步：添加标题和开头结尾

好文章需要好标题和好开头结尾！

#### 想几个标题
- **主标题**：主要的标题，吸引人
- **副标题**：补充说明文章内容
- **几个备选**：多想几个，选最好的

#### 开头结尾
- **开头**：吸引注意，说明文章会讲什么
- **结尾**：总结要点，给予鼓励，呼吁行动

#### 问AI的方式
- **示例**："帮我给这篇文章想5个吸引人的标题，适合朋友圈分享。"
- **示例**："帮我把开头改得更吸引人一些，让读者想继续读下去。"

### 第五步：最终检查和收尾

最后检查一遍，完成文章！

#### 通读检查
- **通读全文**：自己读一遍
- **检查错误**：有没有错别字或不通顺的地方
- **确保满意**：自己先满意了

#### 收尾工作
- **分段排版**：分成容易读的小段落
- **重点突出**：重要的地方可以加粗
- **可以配图**：如果是新媒体文章，可以想配图建议

### 完整示例对话

让我们看一个完整的对话示例！

#### 完整流程（简化版）
1. **你**："我想写一篇关于如何养成早起习惯的文章，请帮我做一个大纲。"
2. **AI**：[给出大纲]
3. **你**："根据这个大纲，帮我写引言部分，用亲切的语气。"
4. **AI**：[写出引言]
5. **你**："不错，继续写'提前准备'这一部分，要具体。"
6. **AI**：[写出这一部分]
7. **你**：[继续逐段完成...]
8. **你**："帮我给这篇文章想几个好标题。"
9. **AI**：[给出几个标题]
10. **你**："再帮我把全文润色一下，让它更流畅。"
11. **AI**：[润色后的全文]
12. **你**："太棒了！谢谢你！"

### 常见问题和技巧

实践过程中可能会遇到这些问题。

#### 常见问题
- **内容不符合预期**：试着更清晰地描述你的需求
- **写得太啰嗦**：提醒AI要简洁，或者写完后让它缩短
- **没有新意**：让AI多提供几个角度供你选择

#### 小技巧
- **分段写**：不要想一次性写完整篇文章
- **及时调整**：发现方向不对，及时调整
- **结合自己**：可以把自己的经验和想法加进去
- **多提要求**：一次不行，让AI再试一次或调整

![写作技巧小贴士](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20with%20writing%20tips%20for%20using%20LLM%2C%20friendly%20and%20educational%20style&image_size=landscape_16_9)

---

💡 **小提示**：用LLM写文章的秘诀是——不要把它当作者，把它当助手！最终的文章要融入你的想法和风格。你提供思路和方向，AI帮你组织语言和细化内容！

---

## 思考与讨论

### 1. 你第一次想用LLM写什么内容？

**示例想法**：
- "我想先用它来写工作邮件，因为这是我最需要的。"
- "我想试试写一个生日派对的邀请信。"
- "我想写一封信给好久不见的朋友，但不知道怎么开始。"

### 2. 你觉得用LLM写作时，最重要的是什么？

**示例想法**：
- "我觉得重要的是要有自己的想法，不能完全依赖AI。"
- "我认为分段写比较好，这样容易控制内容方向。"
- "我觉得多修改几次很重要，让AI多提供几个版本。"

### 3. 实践过程中你可能会遇到什么困难？

**示例想法**：
- "我可能不知道该怎么给AI描述我的需求。"
- "我担心写出来的东西不是我想要的风格。"
- "我可能会太依赖AI，忘记自己怎么写东西了。"

---

## 第二章完成！

恭喜你完成了第二章的学习！现在你已经：
- 了解了什么是大语言模型
- 认识了主流的LLM工具
- 学会了如何注册和开始使用
- 体验了LLM的基础功能
- 完成了第一次完整的写作实践

现在你已经掌握了LLM的基础用法！下一章我们将深入学习如何用AI进行更丰富的内容创作！
        `}]},J0={id:3,title:"AI写作与内容创作",description:"掌握AI辅助写作的各种技巧",icon:"edit",sections:[{id:"3-1",title:"3.1 写作原理与技巧",content:`
## 写作原理与技巧

AI写作的核心在于理解大语言模型如何处理和生成文本。了解这些原理将帮助你更有效地使用AI进行写作。

![AI写作原理示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20writing%20process%20with%20brain%20storming%2C%20drafting%2C%20and%20editing%2C%20educational%20style&image_size=landscape_16_9)

### LLM写作的基本原理

大语言模型在写作时遵循特定的工作原理。

#### 文本生成机制
- **自回归生成**：从左到右，一个词一个词地生成
- **概率预测**：基于上下文预测最可能的下一个词
- **注意力机制**：考虑整个上下文的关系
- **知识融合**：结合内部知识和输入指令

#### 理解指令的过程
- **指令解析**：理解用户的写作要求和目标
- **意图识别**：确定用户想要的内容类型和风格
- **约束处理**：考虑字数、格式、风格等约束
- **内容规划**：构建内容的整体结构

### 提示词工程基础

好的提示词是获得高质量写作的关键。

#### 提示词结构
- **指令**：明确告诉AI要做什么
- **上下文**：提供必要的背景信息
- **约束**：设定格式、风格、长度等要求
- **示例**：提供参考示例（可选）

#### 有效提示词的特点
- **具体明确**：详细描述需求
- **层次清晰**：结构合理，逻辑分明
- **风格一致**：保持语言风格统一
- **目标明确**：清楚说明预期结果

![提示词结构示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20engineering%20structure%20with%20instruction%2C%20context%2C%20constraints%2C%20and%20examples%2C%20educational%20style&image_size=landscape_16_9)

### AI写作的优势

使用AI写作有很多独特的优势。

#### 效率提升
- **速度快**：几秒内生成初稿
- **批量处理**：一次处理多个写作任务
- **24/7可用**：随时可以使用
- **减少重复**：处理重复性写作工作

#### 创意激发
- **灵感生成**：提供创意想法
- **多角度思考**：从不同角度思考问题
- **风格多样**：适应不同的写作风格
- **内容丰富**：提供丰富的内容素材

#### 质量保证
- **语法正确**：减少语法和拼写错误
- **结构合理**：提供清晰的结构
- **表达流畅**：提高表达的流畅度
- **信息准确**：基于知识生成内容

### 写作技巧与策略

掌握一些关键技巧可以让AI写作效果更好。

#### 准备阶段
- **明确目标**：清楚写作的目的和目标受众
- **收集资料**：准备相关的背景信息和资料
- **规划结构**：提前规划内容的结构
- **设定风格**：确定适合的写作风格

#### 执行阶段
- **分段写作**：分部分处理，不要一次性写完整篇
- **迭代优化**：通过多次对话逐步改进
- **提供反馈**：告诉AI哪些部分需要改进
- **保持控制**：保留最终的编辑权

#### 编辑阶段
- **内容审核**：检查内容的准确性和相关性
- **风格统一**：确保整体风格一致
- **逻辑连贯**：检查内容的逻辑连贯性
- **个人化**：添加个人的见解和风格

### 常见写作问题及解决

在使用AI写作时，可能会遇到一些常见问题。

#### 内容问题
- **内容空洞**：提供更具体的指令和例子
- **偏离主题**：明确主题范围和核心要点
- **信息错误**：提供准确的参考资料
- **缺乏深度**：要求AI提供更深入的分析

#### 风格问题
- **风格不符**：明确指定所需的风格
- **语言生硬**：要求更自然、流畅的表达
- **缺乏个性**：添加个人的语气和风格
- **重复内容**：要求AI避免重复表达

---

💡 **小提示**：AI写作的关键是找到人类创意与AI能力的平衡点。把AI当作写作助手，而不是替代者，你提供创意和方向，AI帮你实现和完善。

---

## 思考与讨论

### 1. 你最希望用AI帮助你写什么类型的内容？

**示例想法**：
- "我希望用AI帮我写工作邮件，这样可以更专业、更高效。"
- "我想让AI帮我写创意故事，激发我的写作灵感。"
- "我希望AI能帮我写学习笔记和总结，提高学习效率。"

### 2. 你认为AI写作的最大优势是什么？

**示例想法**：
- "我觉得最大的优势是速度快，能在短时间内生成大量内容。"
- "AI写作的创意性让我惊讶，它能提供很多我没想到的角度。"
- "对于修改和润色，AI做得非常好，能快速提升内容质量。"

### 3. 你担心AI写作会带来什么问题？

**示例想法**：
- "我担心过度依赖AI会让我自己的写作能力下降。"
- "我担心AI生成的内容可能缺乏个人特色和真实性。"
- "我担心如果大家都用AI写作，内容会变得同质化。"
        `},{id:"3-2",title:"3.2 写邮件",content:`
## 写邮件

邮件是现代职场和个人沟通中最常用的工具之一。AI可以帮助你写好各种类型的邮件。

![邮件写作示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20email%20writing%20with%20AI%20assistance%2C%20showing%20professional%20email%20interface%2C%20educational%20style&image_size=landscape_16_9)

### 邮件的基本结构

好的邮件都有清晰的结构。

#### 标准邮件结构
- **主题行**：简洁明了地概括邮件内容
- **称呼**：适当的问候语
- **正文**：核心内容，清晰分段
- **结尾**：礼貌的结束语
- **签名**：包含必要的联系信息

#### 不同类型邮件的结构
- **商务邮件**：正式、专业，结构完整
- **个人邮件**：轻松、自然，结构灵活
- **通知邮件**：简洁、直接，重点突出
- **请求邮件**：礼貌、明确，理由充分

### 常见邮件类型及AI写作技巧

不同类型的邮件需要不同的写作策略。

#### 商务邮件
- **特点**：正式、专业、简洁
- **技巧**：
  - 明确目的和需求
  - 使用专业但友好的语气
  - 清晰列出关键点
  - 提供必要的背景信息

#### 邮件示例：商务邮件
- **场景**：请求会议安排
- **提示词**："帮我写一封商务邮件，请求与客户安排下周二的会议。邮件要专业、礼貌，说明会议目的是讨论新产品合作。"

#### 感谢邮件
- **特点**：真诚、具体、及时
- **技巧**：
  - 具体说明感谢的原因
  - 提及具体的帮助或支持
  - 表达未来的合作意愿
  - 保持简洁，避免过度表达

#### 邮件示例：感谢邮件
- **场景**：感谢同事的帮助
- **提示词**："帮我写一封感谢邮件给同事李明，感谢他在项目中的大力支持，特别是在数据分析方面的帮助。邮件要真诚、具体。"

#### 跟进邮件
- **特点**：礼貌、提醒、明确
- **技巧**：
  - 友好地提醒之前的交流
  - 明确需要对方采取的行动
  - 提供必要的上下文
  - 设定合理的时间预期

#### 邮件示例：跟进邮件
- **场景**：跟进工作进展
- **提示词**："帮我写一封跟进邮件，询问上周讨论的项目进展情况。邮件要礼貌，表达对项目的重视，同时提醒对方需要在本周五前提供更新。"

![不同类型邮件示例](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20types%20of%20emails%20like%20business%2C%20thank%20you%2C%20follow%20up%2C%20educational%20style&image_size=landscape_16_9)

### 邮件写作的AI提示词技巧

使用AI写邮件时，掌握一些提示词技巧会更有效。

#### 有效的提示词结构
1. **目的说明**：明确邮件的目的
2. **背景信息**：提供必要的背景
3. **收件人**：说明收件人的身份
4. **风格要求**：指定邮件的风格
5. **具体内容**：列出需要包含的内容
6. **长度限制**：设定邮件的长度

#### 提示词示例
- **基础版**："帮我写一封商务邮件，邀请客户参加产品发布会。"
- **详细版**："帮我写一封正式的商务邮件，邀请ABC公司的张总参加我们下周三的新产品发布会。邮件要专业、礼貌，说明发布会的时间、地点和议程，强调这次发布会的重要性，并附上邀请函。"

### 邮件的个性化和优化

即使使用AI，也要确保邮件有个人特色。

#### 个性化技巧
- **添加个人细节**：提及与收件人的共同经历
- **使用具体例子**：具体说明相关事项
- **调整语气**：根据与收件人的关系调整语气
- **签名个性化**：使用个性化的签名

#### 优化步骤
1. **AI生成初稿**：让AI生成邮件初稿
2. **内容审核**：检查内容的准确性和相关性
3. **个性化调整**：添加个人元素和具体细节
4. **风格统一**：确保整体风格一致
5. **最终检查**：检查语法、格式和内容

### 常见邮件写作问题及解决

在写邮件时，可能会遇到一些常见问题。

#### 内容问题
- **内容冗长**：要求AI保持简洁
- **重点不突出**：明确指出核心要点
- **信息不足**：提供更多背景信息
- **逻辑不清**：要求AI重新组织内容

#### 风格问题
- **语气不当**：明确指定适合的语气
- **格式混乱**：要求AI使用标准格式
- **语言生硬**：要求更自然的表达
- **缺乏礼貌**：提醒AI保持礼貌和专业

---

💡 **小提示**：写邮件时，先明确目的和收件人，然后让AI生成初稿，最后进行个性化调整。这样既高效又能保持邮件的个人特色。

---

## 思考与讨论

### 1. 你最常写哪种类型的邮件？

**示例想法**：
- "我最常写工作相关的邮件，比如项目沟通和进度汇报。"
- "我经常写邀请邮件，邀请客户或合作伙伴参加活动。"
- "我需要写很多跟进邮件，确保项目按时推进。"

### 2. 你觉得写邮件时最大的挑战是什么？

**示例想法**：
- "我觉得最难的是把握语气，既专业又友好。"
- "我经常不知道如何组织邮件内容，让它清晰明了。"
- "我总是担心邮件写得太长，对方不愿意看。"

### 3. 你希望AI在写邮件时能帮你解决什么问题？

**示例想法**：
- "我希望AI能帮我快速生成邮件初稿，节省时间。"
- "我希望AI能帮我改善邮件的语言表达，让它更专业。"
- "我希望AI能给我一些邮件结构的建议，让内容更清晰。"
        `},{id:"3-3",title:"3.3 写报告与总结",content:`
## 写报告与总结

报告和总结是工作中常见的文档类型。AI可以帮助你快速生成结构清晰、内容详实的报告。

![报告写作示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20report%20writing%20with%20AI%20assistance%2C%20showing%20professional%20report%20document%2C%20educational%20style&image_size=landscape_16_9)

### 报告的基本结构

好的报告都有清晰的结构。

#### 标准报告结构
- **标题页**：标题、作者、日期、部门等
- **摘要**：报告的主要内容和结论
- **目录**：报告的结构和页码
- **引言**：背景、目的、范围
- **主体**：详细内容，分章节
- **结论**：主要发现和结论
- **建议**：基于结论的建议
- **附录**：支持材料、数据等

#### 不同类型报告的结构
- **项目报告**：重点在项目进展和成果
- **研究报告**：重点在研究方法和结果
- **分析报告**：重点在分析过程和结论
- **总结报告**：重点在总结和建议

### 报告写作的AI技巧

使用AI写报告时，掌握一些技巧会更有效。

#### 准备阶段
- **明确目的**：清楚报告的目的和目标读者
- **收集资料**：准备相关的数据和信息
- **规划结构**：确定报告的整体结构
- **设定风格**：确定适合的写作风格

#### 提示词策略
- **分节写作**：逐节生成报告内容
- **提供上下文**：给AI足够的背景信息
- **明确要求**：详细说明每部分的内容要求
- **参考示例**：提供类似报告的示例

#### 提示词示例
- **整体报告**："帮我写一份项目进展报告，包括项目背景、当前进展、遇到的问题和下一步计划。报告要专业、结构清晰。"
- **特定部分**："帮我写项目报告的结论部分，基于前面的内容，总结项目的主要成果和挑战。"

### 数据和分析的处理

报告中常常需要处理数据和分析。

#### 数据呈现
- **数据整理**：组织和整理数据
- **图表建议**：建议适合的数据可视化方式
- **数据分析**：分析数据中的趋势和模式
- **结果解释**：解释数据背后的含义

#### 分析技巧
- **提供数据**：给AI具体的数据
- **明确分析角度**：指定分析的重点和角度
- **要求洞察**：要求AI提供数据洞察
- **建议可视化**：建议适合的图表类型

![数据分析示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20data%20analysis%20in%20report%20with%20charts%20and%20insights%2C%20educational%20style&image_size=landscape_16_9)

### 报告的优化和完善

生成初稿后，需要对报告进行优化和完善。

#### 内容优化
- **逻辑检查**：检查内容的逻辑连贯性
- **信息准确性**：验证数据和信息的准确性
- **内容完整性**：确保所有必要内容都已包含
- **重点突出**：突出重要信息和结论

#### 格式优化
- **结构调整**：优化报告的整体结构
- **格式统一**：确保格式的一致性
- **视觉效果**：改善报告的视觉效果
- **可读性**：提高报告的可读性

#### 语言优化
- **专业表达**：使用专业、准确的语言
- **简洁表达**：保持语言简洁明了
- **一致风格**：保持语言风格的一致性
- **清晰表达**：确保表达清晰易懂

### 常见报告写作问题及解决

在写报告时，可能会遇到一些常见问题。

#### 内容问题
- **内容空洞**：提供更详细的信息和数据
- **逻辑混乱**：要求AI重新组织内容结构
- **信息不足**：提供更多背景信息和数据
- **重点不突出**：明确指出核心要点

#### 风格问题
- **语言不专业**：要求使用更专业的语言
- **表达不清晰**：要求更清晰的表达
- **结构不合理**：要求优化报告结构
- **格式不规范**：要求使用标准格式

### 实践案例：项目总结报告

让我们通过一个具体案例来学习如何用AI写报告。

#### 案例背景
- **项目**：新产品开发项目
- **时间**：6个月
- **目标**：开发并推出新产品
- **结果**：项目成功完成，产品已上线

#### AI写作流程
1. **生成大纲**："帮我为新产品开发项目写一个总结报告大纲。"
2. **生成摘要**："基于大纲，帮我写报告摘要，突出项目成果。"
3. **生成主体**："帮我写项目背景和目标部分。"
4. **生成分析**："帮我分析项目实施过程中的挑战和解决方案。"
5. **生成结论**："帮我写项目结论和建议部分。"
6. **整体优化**："帮我检查并优化整个报告，确保逻辑连贯，内容完整。"

---

💡 **小提示**：写报告时，先让AI生成大纲，然后分节写作，最后进行整体优化。这样可以确保报告结构清晰，内容完整。

---

## 思考与讨论

### 1. 你最常写哪种类型的报告？

**示例想法**：
- "我最常写项目进展报告，向领导汇报项目情况。"
- "我经常写市场分析报告，分析市场趋势和竞争情况。"
- "我需要写年度工作总结报告，总结一年的工作成果。"

### 2. 你觉得写报告时最大的挑战是什么？

**示例想法**：
- "我觉得最难的是组织大量信息，让报告结构清晰。"
- "我经常不知道如何有效地呈现数据和分析结果。"
- "我总是担心报告写得太长，重点不突出。"

### 3. 你希望AI在写报告时能帮你解决什么问题？

**示例想法**：
- "我希望AI能帮我快速整理和分析数据，生成数据洞察。"
- "我希望AI能帮我优化报告结构，让内容更有条理。"
- "我希望AI能帮我生成专业的表达，提高报告的质量。"
        `},{id:"3-4",title:"3.4 创意写作",content:`
## 创意写作

AI不仅可以写正式文档，还可以帮助你进行创意写作，如故事、诗歌、剧本等。

![创意写作示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20creative%20writing%20with%20AI%20assistance%2C%20showing%20writer%20and%20AI%20brainstorming%2C%20educational%20style&image_size=landscape_16_9)

### 创意写作的类型

AI可以帮助你创作各种类型的创意内容。

#### 故事创作
- **短篇故事**：情节紧凑，角色鲜明
- **微型小说**：短小精悍，寓意深刻
- **儿童故事**：生动有趣，富有教育意义
- **科幻故事**：想象力丰富，构思新颖

#### 诗歌创作
- **现代诗**：形式自由，情感真挚
- **古体诗**：格律严谨，语言优美
- **儿歌**：简洁明快，朗朗上口
- **俳句**：短小精悍，意境深远

#### 剧本创作
- **短剧**：短小精悍，情节集中
- **电影剧本**：结构完整，场景丰富
- **话剧剧本**：对话为主，冲突鲜明
- **小品剧本**：幽默风趣，贴近生活

#### 其他创意写作
- **歌词**：简洁明快，富有韵律
- **广告词**：简洁有力，吸引力强
- **演讲稿**：富有感染力，逻辑清晰
- **创意文案**：新颖独特，引人入胜

### 创意写作的AI技巧

使用AI进行创意写作时，掌握一些技巧会更有效。

#### 创意激发
- **头脑风暴**：让AI生成创意点子
- **创意扩展**：基于一个想法扩展创意
- **创意组合**：将不同元素组合成新创意
- **创意修改**：修改现有创意，产生新想法

#### 提示词策略
- **详细设定**：提供详细的背景和设定
- **风格指定**：明确指定作品的风格
- **角色设定**：详细描述角色的特点
- **情节要求**：设定情节的关键要素

#### 提示词示例
- **故事创作**："帮我写一个关于机器人和人类友谊的短篇故事，风格温馨感人，结局要有惊喜。"
- **诗歌创作**："帮我写一首关于秋天的现代诗，语言优美，富有画面感。"
- **剧本创作**："帮我写一个关于职场新人的小品剧本，幽默风趣，反映职场现实。"

### 创意写作的过程

创意写作是一个过程，需要不断的调整和完善。

#### 灵感阶段
- **创意生成**：使用AI生成创意点子
- **创意筛选**：选择最有潜力的创意
- **创意发展**：进一步发展和完善创意

#### 创作阶段
- **大纲生成**：让AI生成作品大纲
- **初稿写作**：基于大纲生成初稿
- **内容扩展**：扩展和丰富内容

#### 完善阶段
- **内容修改**：修改和完善内容
- **风格统一**：统一作品的风格
- **细节优化**：优化细节和描写
- **最终润色**：进行最终的润色和调整

![创意写作流程示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20creative%20writing%20process%20from%20idea%20to%20final%20draft%2C%20educational%20style&image_size=landscape_16_9)

### 创意写作的个性化

虽然AI可以生成创意内容，但加入个人特色很重要。

#### 个人元素
- **个人经历**：融入自己的经历和感受
- **独特视角**：提供独特的观察视角
- **个人风格**：保持个人的写作风格
- **情感表达**：加入真实的情感表达

#### 个性化技巧
- **混合创作**：AI生成初稿，自己进行修改
- **创意融合**：将AI的创意与自己的创意融合
- **风格调整**：调整AI生成内容的风格
- **细节添加**：添加个人的细节和描写

### 常见创意写作问题及解决

在使用AI进行创意写作时，可能会遇到一些问题。

#### 创意问题
- **创意平庸**：要求AI提供更独特的创意
- **情节老套**：要求AI设计更新颖的情节
- **角色扁平**：要求AI丰富角色的性格和背景
- **缺乏深度**：要求AI增加内容的深度和内涵

#### 风格问题
- **风格不符**：明确指定所需的风格
- **语言生硬**：要求更自然、流畅的表达
- **缺乏个性**：添加个人的风格和特色
- **情感不足**：要求AI增强情感表达

### 实践案例：故事创作

让我们通过一个具体案例来学习如何用AI进行创意写作。

#### 案例：科幻故事创作
- **主题**：未来世界的人与自然
- **风格**：既有科幻元素，又有人文关怀
- **长度**：短篇故事（1500字左右）

#### AI写作流程
1. **创意生成**："帮我生成5个关于未来世界人与自然关系的故事创意。"
2. **选择创意**：选择一个最有潜力的创意
3. **大纲生成**："基于这个创意，帮我写一个故事大纲。"
4. **初稿写作**："基于大纲，帮我写完整的故事初稿。"
5. **内容修改**："帮我修改故事，增强角色的情感表达。"
6. **最终润色**："帮我对故事进行最终润色，确保语言流畅，情节连贯。"

---

💡 **小提示**：创意写作时，不要完全依赖AI的创意，而是将AI作为创意伙伴。你提供方向和灵感，AI帮你扩展和完善，最终的创意作品应该融入你的个人风格和想法。

---

## 思考与讨论

### 1. 你最想尝试用AI创作哪种类型的创意内容？

**示例想法**：
- "我想尝试用AI写短篇故事，激发我的写作灵感。"
- "我想让AI帮我写一些诗歌，探索不同的诗歌风格。"
- "我想尝试用AI写剧本，看看它能创造什么有趣的情节。"

### 2. 你认为AI在创意写作中最大的优势是什么？

**示例想法**：
- "我觉得AI最大的优势是能快速生成大量创意点子，激发我的灵感。"
- "AI可以帮助我克服写作障碍，当我卡住时提供新的思路。"
- "AI可以尝试不同的风格和角度，让我看到更多可能性。"

### 3. 你担心AI创作会影响人类的创造力吗？

**示例想法**：
- "我认为AI只是工具，真正的创造力还是来自人类，AI只是辅助。"
- "我担心如果过度依赖AI，人类的创造力可能会下降。"
- "我认为AI和人类可以互补，AI提供灵感，人类提供深度和情感。"
        `},{id:"3-5",title:"3.5 内容改写与润色",content:`
## 内容改写与润色

AI不仅可以创作新内容，还可以帮助你改写和润色现有内容，提高内容质量。

![内容润色示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20content%20editing%20and%20polishing%20with%20AI%20assistance%2C%20educational%20style&image_size=landscape_16_9)

### 内容改写的类型

AI可以帮助你进行各种类型的内容改写。

#### 风格改写
- **正式转非正式**：将正式内容改为更轻松的风格
- **非正式转正式**：将口语化内容改为更正式的风格
- **学术转通俗**：将学术内容改为更通俗易懂的表达
- **专业转普及**：将专业内容改为更普及的表达

#### 长度调整
- **内容扩展**：将简短内容扩展为更详细的内容
- **内容缩短**：将冗长内容精简为更简洁的表达
- **摘要生成**：将长内容总结为简短摘要
- **重点提取**：提取内容中的关键信息

#### 结构优化
- **结构重组**：重新组织内容结构
- **逻辑调整**：调整内容的逻辑顺序
- **层次分明**：使内容层次更清晰
- **过渡自然**：改善内容的过渡和衔接

#### 语言优化
- **语法修正**：修正语法和拼写错误
- **表达优化**：优化语言表达
- **风格统一**：统一内容的语言风格
- **流畅度提升**：提高内容的流畅度

### 内容润色的技巧

使用AI进行内容润色时，掌握一些技巧会更有效。

#### 明确目标
- **确定目标**：明确润色的具体目标
- **了解受众**：考虑目标受众的需求
- **设定标准**：设定内容质量的标准
- **明确风格**：确定适合的语言风格

#### 有效提示词
- **具体要求**：明确说明润色的具体要求
- **提供上下文**：给AI足够的背景信息
- **参考示例**：提供润色的参考示例
- **比较效果**：要求AI提供润色前后的对比

#### 提示词示例
- **风格调整**："帮我把这篇学术论文的摘要改写成更通俗易懂的表达，适合普通读者阅读。"
- **内容精简**："帮我把这段内容精简到原来的一半，保持核心信息不变。"
- **语言优化**："帮我润色这段文字，提高语言表达的流畅度和专业性。"

### 内容改写的步骤

内容改写是一个系统的过程，需要有步骤地进行。

#### 分析阶段
- **内容分析**：分析原内容的结构和特点
- **问题识别**：识别需要改进的问题
- **目标设定**：设定改写的目标和标准

#### 改写阶段
- **整体改写**：对内容进行整体改写
- **细节调整**：调整具体的细节和表达
- **风格统一**：统一内容的风格和语气
- **逻辑优化**：优化内容的逻辑结构

#### 审核阶段
- **内容检查**：检查改写后的内容
- **对比分析**：与原文进行对比分析
- **效果评估**：评估改写的效果
- **最终调整**：进行最终的调整和完善

![内容改写流程示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20content%20rewriting%20process%20from%20analysis%20to%20final%20revision%2C%20educational%20style&image_size=landscape_16_9)

### 常见内容问题及解决

在改写和润色内容时，可能会遇到一些常见问题。

#### 内容问题
- **内容偏离**：要求AI保持原文的核心内容
- **信息丢失**：确保重要信息不被丢失
- **逻辑混乱**：要求AI重新组织内容逻辑
- **重点不突出**：要求AI突出核心信息

#### 风格问题
- **风格不符**：明确指定所需的风格
- **语言生硬**：要求更自然、流畅的表达
- **风格不统一**：要求保持风格的一致性
- **表达不准确**：要求更准确的表达

### 实践案例：邮件润色

让我们通过一个具体案例来学习如何用AI进行内容润色。

#### 案例：商务邮件润色
- **原始邮件**：简短、口语化的邮件
- **目标**：改为更专业、正式的商务邮件
- **要求**：保持核心信息不变，提高专业性

#### AI润色流程
1. **分析邮件**：分析原始邮件的内容和结构
2. **设定目标**：明确润色的目标和要求
3. **AI润色**："帮我润色这封邮件，使其更专业、正式，适合商务沟通。"
4. **内容检查**：检查润色后的邮件
5. **细节调整**：对润色结果进行必要的调整
6. **最终确认**：确认最终的润色结果

### 内容改写的最佳实践

掌握一些最佳实践可以让内容改写更有效。

#### 准备工作
- **明确目标**：清楚改写的目标和要求
- **了解受众**：考虑目标受众的需求和背景
- **收集资料**：准备相关的参考资料
- **设定标准**：设定改写的质量标准

#### 执行技巧
- **分段处理**：分部分进行改写
- **多次迭代**：通过多次对话逐步改进
- **比较效果**：比较不同的改写版本
- **保持控制**：保留最终的编辑权

#### 质量控制
- **内容一致性**：确保改写内容与原文一致
- **风格统一性**：保持风格的一致性
- **逻辑连贯性**：确保逻辑结构清晰
- **表达准确性**：确保表达准确无误

---

💡 **小提示**：内容改写时，先明确改写的目标和要求，然后让AI进行改写，最后进行人工审核和调整。这样可以确保改写后的内容既符合要求，又保持原文的核心信息。

---

## 思考与讨论

### 1. 你最常需要改写或润色哪种类型的内容？

**示例想法**：
- "我最常需要润色工作邮件，让它们更专业、得体。"
- "我经常需要改写学术论文，使其更通俗易懂。"
- "我需要润色我的简历和求职信，提高竞争力。"

### 2. 你觉得内容改写时最大的挑战是什么？

**示例想法**：
- "我觉得最难的是保持原文的核心信息，同时改善表达。"
- "我经常不知道如何调整内容的风格，使其适合不同的场合。"
- "我总是担心改写后的内容会失去原有的风格和特色。"

### 3. 你希望AI在内容改写时能帮你解决什么问题？

**示例想法**：
- "我希望AI能帮我快速改善内容的语言表达，提高专业性。"
- "我希望AI能帮我调整内容的结构，使其更清晰、有条理。"
- "我希望AI能帮我在保持原意的同时，使内容更简洁、有力。"
        `},{id:"3-6",title:"3.6 实践：完成一份完整的内容创作任务",content:`
## 实践：完成一份完整的内容创作任务

现在让我们通过一个完整的实践项目，综合运用前面学到的AI写作技巧，完成一份完整的内容创作任务。

![内容创作实践示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20complete%20content%20creation%20process%20with%20AI%20assistance%2C%20educational%20style&image_size=landscape_16_9)

### 实践项目介绍

我们选择一个实用的写作任务来练习。

#### 项目选择
- **主题**："如何在工作中有效使用AI工具"
- **类型**：实用指南文章
- **目标受众**：职场人士
- **长度**：1500-2000字
- **风格**：专业、实用、易懂

#### 项目目标
- 学习完整的AI写作流程
- 掌握不同写作技巧的综合运用
- 产出高质量的实用指南
- 体验从创意到完成的全过程

### 第一步：创意与大纲

开始任何写作任务前，先确定创意和大纲。

#### 创意生成
1. **头脑风暴**："帮我生成5个关于'如何在工作中有效使用AI工具'的文章创意。"
2. **创意评估**：评估每个创意的可行性和价值
3. **创意选择**：选择最适合的创意

#### 大纲制定
1. **生成大纲**："基于选定的创意，帮我制定一个详细的文章大纲。"
2. **大纲调整**：根据需要调整大纲结构
3. **确定章节**：明确每个章节的内容和重点

### 第二步：分段写作

按照大纲，分章节进行写作。

#### 引言部分
- **目标**：吸引读者，说明文章目的
- **提示词**："帮我写文章引言，介绍AI工具在工作中的重要性，吸引读者兴趣。"
- **要点**：AI在工作中的现状、本文的目的和内容概览

#### 主体部分
- **章节一**：AI工具的类型和特点
- **章节二**：AI工具在不同工作场景的应用
- **章节三**：使用AI工具的最佳实践
- **章节四**：避免AI工具使用的常见误区
- **提示词**："帮我写章节二，详细介绍AI工具在不同工作场景的具体应用。"

#### 结论部分
- **目标**：总结要点，提供行动建议
- **提示词**："帮我写文章结论，总结使用AI工具的关键要点，并提供具体的行动建议。"

### 第三步：内容优化

完成初稿后，进行内容优化。

#### 内容审核
- **完整性检查**：检查内容是否完整
- **逻辑检查**：检查内容的逻辑连贯性
- **信息准确性**：验证信息的准确性
- **重点突出**：确保重点内容突出

#### 语言优化
- **表达流畅**：提高语言表达的流畅度
- **风格统一**：统一文章的风格
- **专业表达**：使用专业、准确的语言
- **简洁表达**：保持语言简洁明了

#### 格式优化
- **结构调整**：优化文章结构
- **标题优化**：改进标题和小标题
- **排版调整**：改善文章的排版
- **视觉元素**：添加适当的视觉元素建议

![内容优化流程示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20content%20optimization%20process%20from%20draft%20to%20final%20version%2C%20educational%20style&image_size=landscape_16_9)

### 第四步：最终完善

进行最后的完善和检查。

#### 整体审阅
- **通读全文**：通读整个文章
- **细节检查**：检查细节问题
- **一致性检查**：检查内容的一致性
- **质量评估**：评估文章的整体质量

#### 最终调整
- **内容调整**：对内容进行必要的调整
- **语言润色**：进行最终的语言润色
- **格式完善**：完善文章的格式
- **标题优化**：优化文章标题

#### 完成确认
- **内容确认**：确认所有内容都已完成
- **质量确认**：确认文章质量达到要求
- **格式确认**：确认格式符合标准
- **最终定稿**：完成最终版本

### 完整实践流程示例

让我们看一个完整的实践流程示例。

#### 示例流程
1. **创意生成**："帮我生成关于AI工具在工作中应用的创意。"
2. **大纲制定**："基于创意，帮我制定文章大纲。"
3. **分段写作**："帮我写引言部分。"
4. **内容扩展**："帮我详细写AI工具类型部分。"
5. **案例添加**："帮我添加一些AI工具在工作中应用的具体案例。"
6. **内容优化**："帮我优化整个文章，提高流畅度和专业性。"
7. **标题优化**："帮我想一个吸引人的标题。"
8. **最终检查**："帮我检查文章的逻辑和完整性。"

### 常见问题及解决

在实践过程中，可能会遇到一些常见问题。

#### 创意问题
- **创意不足**：要求AI提供更多创意
- **创意不适合**：调整创意方向
- **创意不新颖**：要求AI提供更独特的创意

#### 内容问题
- **内容空洞**：要求AI提供更具体的内容
- **逻辑混乱**：要求AI重新组织内容
- **信息不足**：提供更多背景信息
- **重点不突出**：明确核心要点

#### 风格问题
- **风格不符**：明确指定所需风格
- **语言生硬**：要求更自然的表达
- **风格不统一**：要求统一风格
- **表达不专业**：要求更专业的表达

### 实践总结

通过这个实践项目，你将：

- **掌握完整的AI写作流程**：从创意到完成的全过程
- **学习综合运用写作技巧**：不同技巧的组合使用
- **提高内容创作能力**：通过实践提高写作水平
- **产出实用的内容**：完成一份有价值的实用指南

---

💡 **小提示**：实践是学习AI写作的最好方式。通过实际完成一个完整的写作任务，你会更深刻地理解AI写作的流程和技巧，并且能够将这些技能应用到实际工作中。

---

## 思考与讨论

### 1. 你最想完成什么样的内容创作任务？

**示例想法**：
- "我想写一篇关于如何使用AI提高工作效率的指南。"
- "我想为公司写一份AI工具使用手册。"
- "我想写一篇个人经验分享，介绍我如何使用AI工具。"

### 2. 你觉得完成一个完整的内容创作任务最大的挑战是什么？

**示例想法**：
- "我觉得最难的是保持内容的连贯性和逻辑性。"
- "我经常在写作过程中思路中断，不知道如何继续。"
- "我总是担心内容质量不够好，反复修改。"

### 3. 你会如何将学到的AI写作技巧应用到实际工作中？

**示例想法**：
- "我会用AI来快速生成邮件和报告的初稿，然后进行修改。"
- "我会用AI来帮助我整理和分析信息，生成数据洞察。"
- "我会用AI来激发创意，帮助我解决工作中的问题。"

---

## 第三章完成！

恭喜你完成了第三章的学习！现在你已经：
- 了解了AI写作的基本原理
- 掌握了写邮件的技巧
- 学会了写报告与总结的方法
- 体验了创意写作的乐趣
- 掌握了内容改写与润色的技巧
- 完成了一个完整的内容创作实践

现在你已经成为AI写作的高手！下一章我们将学习如何使用图像生成工具，为你的内容添加视觉元素。
        `}]},Z0={id:4,title:"图像生成工具入门",description:"学习如何使用DALL·E、MidJourney等图像生成工具",icon:"image",sections:[{id:"4-1",title:"4.1 什么是图像生成AI？",content:`
## 什么是图像生成AI？

图像生成AI是一种能够根据文字描述创建图像的人工智能技术。它可以将你的创意想法转化为视觉内容，为你的创作提供强大支持。

![图像生成AI示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20of%20image%20generation%20AI%20process%2C%20showing%20text%20input%20being%20converted%20to%20image%2C%20educational%20style&image_size=landscape_16_9)

### 图像生成的基本原理

图像生成AI使用深度学习技术，特别是生成对抗网络（GAN）和扩散模型。

#### 扩散模型原理
- **逐步去噪**：从随机噪声开始，逐步去除噪声生成图像
- **文本条件**：使用文本描述作为条件来引导图像生成
- ** latent空间**：在潜在空间中进行图像处理，提高生成质量
- **注意力机制**：关注文本描述中的重要部分

#### 模型训练过程
- **数据收集**：收集大量图像和对应描述的数据集
- **模型训练**：通过大量数据训练模型理解文本和图像的对应关系
- **参数优化**：不断调整模型参数以提高生成质量
- **评估改进**：通过人工和自动评估改进模型

![扩散模型原理示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20diffusion%20model%20process%20from%20noise%20to%20clear%20image%2C%20educational%20style&image_size=landscape_16_9)

### 图像生成的能力

现代图像生成AI已经具备令人惊叹的能力。

#### 内容生成能力
- **创意图像**：根据创意描述生成独特图像
- **风格转换**：将图像转换为不同艺术风格
- **场景创建**：创建不存在的场景和环境
- **人物生成**：生成逼真的人物图像

#### 技术能力
- **细节丰富**：生成具有丰富细节的高质量图像
- **多风格支持**：支持多种艺术风格和视觉效果
- **文本理解**：能够理解复杂的文本描述
- **组合能力**：能够组合不同元素创建新图像

### 图像生成的应用场景

图像生成AI在很多领域都有广泛的应用。

#### 创意设计
- **概念艺术**：为游戏、电影等创建概念艺术
- **品牌设计**：设计标志、包装等品牌元素
- **广告创意**：创建吸引人的广告图像
- **时尚设计**：设计服装、配饰等

#### 内容创作
- **社交媒体**：创建社交媒体配图
- **网站设计**：为网站创建视觉元素
- **教育材料**：创建教育插图和图表
- **故事板**：为视频和动画创建故事板

#### 个人使用
- **个人头像**：创建个性化头像
- **创意表达**：表达个人创意和想法
- **礼物制作**：创建个性化礼物
- **家居装饰**：设计家居装饰图案

![图像生成应用场景示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20applications%20of%20image%20generation%20AI%2C%20educational%20style&image_size=landscape_16_9)

---

💡 **小提示**：图像生成AI的效果很大程度上取决于你描述的详细程度。越详细、具体的描述，生成的图像越符合你的预期。

---

## 思考与讨论

### 1. 你最想使用图像生成AI来创建什么类型的图像？

**示例想法**：
- "我想创建一些独特的艺术作品，表达我的创意想法。"
- "我希望为我的社交媒体账号创建一些吸引人的配图。"
- "我想为我的小说创建一些角色和场景的插图。"

### 2. 你认为图像生成AI会如何改变创意行业？

**示例想法**：
- "我认为它会大大提高创意工作的效率，让设计师能够快速生成创意概念。"
- "它可能会让更多人能够参与创意创作，即使没有专业的设计技能。"
- "它会改变创意行业的工作流程，成为设计师的强大助手。"

### 3. 你担心图像生成AI会带来什么问题？

**示例想法**：
- "我担心版权问题，AI生成的图像可能会侵犯他人的知识产权。"
- "我担心会导致创意同质化，很多人使用类似的风格。"
- "我担心会取代一些创意工作者的工作。"
        `},{id:"4-2",title:"4.2 主流图像生成工具介绍",content:`
## 主流图像生成工具介绍

现在有很多优秀的图像生成工具，各有特色。了解它们的特点可以帮助你选择最适合自己的工具。

![主流图像生成工具比较](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20image%20generation%20tools%20logos%20and%20interfaces%2C%20educational%20style&image_size=landscape_16_9)

### DALL·E 3（OpenAI）

DALL·E 3是OpenAI开发的先进图像生成模型。

#### 主要特点
- **文本理解**：对复杂文本描述的理解能力强
- **细节丰富**：生成的图像细节丰富，质量高
- **创意性**：能够生成创意性强的图像
- **多风格**：支持多种艺术风格

#### 优势
- **与ChatGPT集成**：可以在ChatGPT中直接使用
- **操作简单**：用户界面友好，易于使用
- **生成速度**：生成速度相对较快
- **文本处理**：对文本描述的理解能力出色

#### 适用场景
- 创意设计和艺术创作
- 概念艺术和插图
- 广告和营销材料
- 个性化图像创作

### MidJourney

MidJourney以生成艺术风格的图像而闻名。

#### 主要特点
- **艺术风格**：擅长生成艺术风格的图像
- **创意性**：创意表现力强
- **风格多样**：支持多种艺术风格和美学
- **社区活跃**：有活跃的用户社区

#### 优势
- **艺术质量**：艺术表现力出色
- **风格多样性**：风格种类丰富
- **社区资源**：有大量用户分享的提示词和作品
- **持续更新**：模型不断更新和改进

#### 适用场景
- 艺术创作和设计
- 概念艺术和插画
- 创意项目和个人作品
- 艺术风格探索

### Stable Diffusion

Stable Diffusion是一个开源的图像生成模型。

#### 主要特点
- **开源免费**：完全开源，可以免费使用
- **高度可定制**：可以通过微调适应特定需求
- **本地部署**：可以在本地电脑上运行
- **社区支持**：有活跃的开发者社区

#### 优势
- **自由度高**：可以完全控制生成过程
- **无使用限制**：没有使用次数或商业化限制
- **可扩展性**：可以通过插件和扩展增强功能
- **学习资源**：有丰富的学习资源和教程

#### 适用场景
- 专业设计和创作
- 需要高度定制的项目
- 学术研究和实验
- 对成本敏感的用户

### 文心一格（百度）

文心一格是百度开发的中文图像生成工具。

#### 主要特点
- **中文理解**：对中文描述的理解能力强
- **本地化**：适合中国用户的使用习惯
- **多风格**：支持多种艺术风格
- **应用集成**：与百度生态集成

#### 优势
- **中文优化**：对中文提示词的理解更准确
- **访问稳定**：在国内访问稳定
- **文化适配**：对中国文化元素理解深刻
- **功能丰富**：提供多种图像生成功能

#### 适用场景
- 中文用户的创意创作
- 包含中国文化元素的设计
- 国内企业的营销和设计需求
- 需要稳定访问的用户

### Adobe Firefly

Adobe Firefly是Adobe开发的图像生成工具。

#### 主要特点
- **专业集成**：与Adobe Creative Cloud集成
- **商业安全**：专为商业用途设计，注重版权
- **风格一致性**：生成风格与Adobe产品一致
- **编辑能力**：与Adobe编辑工具无缝配合

#### 优势
- **专业品质**：生成质量符合专业设计标准
- **版权安全**：使用经过授权的训练数据
- **工作流集成**：与设计工作流无缝集成
- **品牌一致性**：有助于保持品牌视觉一致性

#### 适用场景
- 专业设计项目
- 商业营销材料
- 品牌视觉内容
- 需要版权保障的项目

### 如何选择适合你的图像生成工具

选择图像生成工具时可以考虑以下几个方面。

![图像生成工具选择指南](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20decision%20tree%20for%20choosing%20image%20generation%20tool%2C%20educational%20style&image_size=landscape_16_9)

#### 考虑因素
- **使用目的**：个人创作还是商业用途
- **技术水平**：是否有技术背景
- **预算情况**：是否愿意付费
- **风格偏好**：喜欢哪种艺术风格
- **语言需求**：主要使用什么语言

#### 选择建议
- **初学者**：从DALL·E 3或MidJourney开始
- **中文用户**：考虑文心一格
- **专业设计师**：考虑Adobe Firefly
- **技术爱好者**：尝试Stable Diffusion
- **预算有限**：使用Stable Diffusion的免费版本

#### 建议做法
- **多试几个**：不要只用一个，试试不同的模型
- **比较效果**：同一个任务，看看不同模型的效果
- **组合使用**：不同场景用不同的模型

---

💡 **小提示**：最好的选择方法是试用！大多数工具都有免费额度或试用版本，你可以都试试，看看哪个最适合你的需求和风格偏好。

---

## 思考与讨论

### 1. 你最想先尝试哪个图像生成工具？为什么？

**示例想法**：
- "我想先试试DALL·E 3，因为它与ChatGPT集成，使用方便。"
- "我对MidJourney感兴趣，因为听说它生成的艺术风格图像特别好。"
- "我想试试Stable Diffusion，因为它是开源的，可以免费使用。"

### 2. 你觉得选择图像生成工具时最重要的考虑因素是什么？

**示例想法**：
- "对我来说最重要的是生成质量，希望图像看起来专业、逼真。"
- "我更看重易用性，希望工具界面友好，容易上手。"
- "我觉得价格很重要，希望能找到性价比高的工具。"

### 3. 你期待未来的图像生成工具会有什么发展？

**示例想法**：
- "我希望未来的工具能更好地理解复杂的创意需求，生成更符合预期的图像。"
- "我期待能生成更高分辨率、更细节丰富的图像。"
- "我希望工具能更好地处理特定领域的图像，比如专业的产品设计或建筑设计。"
        `},{id:"4-3",title:"4.3 提示词工程基础",content:`
## 提示词工程基础

提示词是图像生成的关键，好的提示词可以大幅提高生成图像的质量和符合度。

![提示词工程示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20engineering%20for%20image%20generation%2C%20with%20text%20input%20and%20image%20output%2C%20educational%20style&image_size=landscape_16_9)

### 提示词的基本结构

一个好的提示词通常包含以下几个部分。

#### 主体描述
- **核心内容**：明确你想要生成的主体是什么
- **详细描述**：提供主体的详细特征
- **关系说明**：说明主体之间的关系

#### 风格设定
- **艺术风格**：指定图像的艺术风格
- **视觉效果**：描述视觉效果和氛围
- **色彩方案**：指定色彩风格和色调
- **构图方式**：描述画面的构图和视角

#### 技术参数
- **质量设置**：指定图像质量
- **细节程度**：描述细节的丰富程度
- **渲染风格**：指定渲染方式和技术

### 有效提示词的要素

要创建有效的提示词，需要注意以下要素。

#### 具体性
- **详细描述**：越详细越好，包括尺寸、颜色、材质等
- **避免模糊**：避免使用模糊的描述词
- **具体场景**：描述具体的场景和环境

#### 逻辑性
- **合理组合**：元素组合要合理，符合逻辑
- **上下文一致**：提示词内部要保持一致
- **符合常识**：描述要符合现实逻辑

#### 风格一致性
- **统一风格**：保持艺术风格的一致性
- **协调元素**：元素之间风格要协调
- **明确风格**：明确指定想要的风格

![有效提示词示例](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20example%20of%20good%20prompt%20vs%20bad%20prompt%20for%20image%20generation%2C%20educational%20style&image_size=landscape_16_9)

### 提示词示例分析

让我们分析一些有效的提示词示例。

#### 基础示例
- **简单提示词**："一只猫"
- **详细提示词**："一只橘色的短毛猫，坐在窗台上，阳光照在身上，周围有绿植，温暖的色调，现实主义风格，高清细节"

#### 风格示例
- **艺术风格**："星空下的森林，梵高风格，色彩丰富，笔触明显"
- **摄影风格**："城市街景，黄昏时分，金色 hour，写实摄影风格，8K高清"
- **插画风格**："童话故事场景，手绘插画风格，色彩明亮，充满想象力"

#### 场景示例
- **室内场景**："现代简约风格的客厅，白色沙发，木质茶几，落地窗前，阳光充足，干净整洁"
- **室外场景**："山间瀑布，周围是绿色的森林，彩虹，清新的空气，广角镜头"
- **幻想场景**："悬浮在空中的岛屿，有城堡和瀑布，云层环绕，魔法氛围，奇幻风格"

### 提示词优化技巧

优化提示词可以大幅提高生成效果。

#### 逐步优化
- **从简单开始**：先使用简单的提示词
- **逐步添加细节**：根据生成结果逐步添加细节
- **调整参数**：调整风格、质量等参数

#### 关键词技巧
- **使用专业术语**：使用艺术、摄影等领域的专业术语
- **添加修饰词**：使用形容词和副词增强描述
- **指定参考**：可以指定参考艺术家或作品

#### 负面提示词
- **排除元素**：使用负面提示词排除不想要的元素
- **避免问题**：指定要避免的问题，如模糊、变形等
- **提高质量**：通过负面提示词提高整体质量

### 常见提示词问题及解决

在使用提示词时，可能会遇到一些常见问题。

#### 生成结果不符
- **问题**：生成的图像与预期不符
- **解决**：更详细地描述主体和场景
- **示例**：添加更多细节，指定具体特征

#### 质量问题
- **问题**：生成的图像质量不高
- **解决**：添加质量相关的关键词
- **示例**：添加"高清"、"细节丰富"、"专业渲染"等

#### 风格不一致
- **问题**：生成的图像风格不一致
- **解决**：明确指定风格，保持风格一致性
- **示例**：明确指定艺术风格，避免混合多种风格

---

💡 **小提示**：提示词工程是一个需要练习的技能。多尝试不同的提示词，观察生成结果，不断调整和优化，你会逐渐掌握这门技巧。

---

## 思考与讨论

### 1. 你觉得写好提示词最重要的是什么？

**示例想法**：
- "我认为最重要的是详细程度，越详细的描述，生成的图像越符合预期。"
- "我觉得明确的风格设定很重要，这样可以确保生成的图像符合特定的美学要求。"
- "我认为逻辑一致性很重要，提示词内部要保持一致，这样生成的图像才会合理。"

### 2. 你最想尝试生成什么类型的图像？

**示例想法**：
- "我想生成一些科幻风格的场景，充满未来感。"
- "我希望生成一些艺术风格的肖像画，比如油画风格的自画像。"
- "我想为我的故事生成一些角色和场景的插图。"

### 3. 你觉得提示词工程有什么挑战？

**示例想法**：
- "我觉得挑战在于如何用文字准确描述我想象中的图像。"
- "有时候添加太多细节反而会导致生成结果不理想，需要找到平衡点。"
- "不同的工具对提示词的理解可能不同，需要针对不同工具调整提示词。"
        `},{id:"4-4",title:"4.4 实践：创建你的第一张AI图像",content:`
## 实践：创建你的第一张AI图像

现在让我们通过一个实际的例子，学习如何使用图像生成工具创建你的第一张AI图像。

![图像生成实践示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20to%20create%20AI%20image%2C%20from%20prompt%20to%20final%20image%2C%20educational%20style&image_size=landscape_16_9)

### 选择工具

首先，选择一个适合你的图像生成工具。

#### 工具选择建议
- **初学者**：选择DALL·E 3或MidJourney
- **中文用户**：考虑文心一格
- **预算有限**：使用Stable Diffusion的免费版本

### 实践项目：创建一个创意场景

让我们创建一个创意场景作为实践项目。

#### 项目目标
- 学习完整的图像生成流程
- 掌握提示词的基本结构
- 了解如何优化生成结果
- 完成一张创意图像

#### 场景选择
- **主题**："未来城市中的绿色空间"
- **风格**：科幻与自然结合
- **氛围**：和谐、充满希望

### 第一步：编写提示词

编写一个详细的提示词是成功的关键。

#### 基础提示词
- **核心内容**："未来城市中的绿色空间"
- **详细描述**："高楼大厦之间的垂直花园，植物茂密，阳光透过玻璃穹顶照射进来，人们在花园中休闲，悬浮的步行道，清洁能源装置"
- **风格设定**："科幻风格，明亮色调，未来感，细节丰富，高质量渲染"

#### 完整提示词
"未来城市中的绿色空间，高楼大厦之间的垂直花园，植物茂密，阳光透过玻璃穹顶照射进来，人们在花园中休闲，悬浮的步行道，清洁能源装置，科幻风格，明亮色调，未来感，细节丰富，高质量渲染，8K高清"

### 第二步：生成图像

使用你选择的工具生成图像。

#### 生成步骤
1. **打开工具**：访问你选择的图像生成工具
2. **输入提示词**：在输入框中粘贴你的提示词
3. **设置参数**：根据需要调整参数（如风格、尺寸等）
4. **点击生成**：开始生成图像
5. **等待结果**：等待工具生成图像

### 第三步：评估和优化

评估生成的图像，并根据需要进行优化。

#### 评估标准
- **符合度**：图像是否符合你的描述
- **质量**：图像的清晰度和细节
- **创意**：图像的创意表达
- **整体效果**：整体视觉效果是否满意

#### 优化策略
- **调整提示词**：根据生成结果调整提示词
- **修改参数**：调整风格、质量等参数
- **尝试变体**：生成多个变体选择最好的

### 第四步：保存和使用

保存你满意的图像，并考虑如何使用它。

#### 保存选项
- **下载**：下载图像到本地
- **分享**：分享到社交媒体或其他平台
- **编辑**：使用图像编辑工具进一步处理

#### 使用场景
- **个人创作**：用于个人创意项目
- **社交媒体**：作为社交媒体配图
- **设计元素**：作为设计项目的元素
- **灵感来源**：作为其他创意的灵感来源

### 实践案例：创建未来城市绿色空间

让我们通过一个具体的案例来学习。

#### 案例步骤
1. **选择工具**：使用DALL·E 3
2. **输入提示词**："未来城市中的绿色空间，高楼大厦之间的垂直花园，植物茂密，阳光透过玻璃穹顶照射进来，人们在花园中休闲，悬浮的步行道，清洁能源装置，科幻风格，明亮色调，未来感，细节丰富，高质量渲染，8K高清"
3. **生成图像**：点击生成按钮
4. **评估结果**：检查生成的图像
5. **优化调整**：如果需要，调整提示词再次生成
6. **保存使用**：保存满意的图像

### 常见问题及解决

在实践过程中，可能会遇到一些常见问题。

#### 生成结果不符合预期
- **问题**：生成的图像与描述不符
- **解决**：更详细地描述主体和场景，使用更具体的词汇
- **示例**：添加更多细节，明确指定元素之间的关系

#### 图像质量问题
- **问题**：图像模糊或细节不足
- **解决**：添加质量相关的关键词，调整参数
- **示例**：添加"高清"、"细节丰富"、"专业渲染"等

#### 生成失败
- **问题**：工具无法生成图像
- **解决**：检查提示词是否违反使用条款，尝试简化提示词
- **示例**：移除可能有问题的内容，简化描述

---

💡 **小提示**：不要期望第一次就能生成完美的图像。图像生成是一个迭代的过程，通过不断调整提示词和参数，你会逐渐获得更好的结果。

---

## 思考与讨论

### 1. 你最想创建什么样的AI图像？

**示例想法**：
- "我想创建一个科幻风格的未来城市景象。"
- "我希望生成一些艺术风格的个人肖像。"
- "我想为我的故事创作一些角色和场景的插图。"

### 2. 你觉得创建AI图像最困难的是什么？

**示例想法**：
- "我觉得最困难的是用文字准确描述我想象中的图像。"
- "有时候生成的图像与预期相差很大，需要多次尝试。"
- "选择合适的风格和参数需要经验和尝试。"

### 3. 你会如何使用生成的AI图像？

**示例想法**：
- "我会用它们作为社交媒体的配图。"
- "我想将它们用于我的创意项目，如小说或游戏设计。"
- "我会用它们来激发我的创意灵感，作为创作的起点。"
        `},{id:"4-5",title:"4.5 高级技巧与最佳实践",content:`
## 高级技巧与最佳实践

掌握一些高级技巧可以帮助你生成更高质量、更符合预期的图像。

![图像生成高级技巧示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20advanced%20image%20generation%20techniques%2C%20with%20professional%20tools%20and%20workflow%2C%20educational%20style&image_size=landscape_16_9)

### 高级提示词技巧

使用一些高级的提示词技巧可以大幅提高生成质量。

#### 参考图像
- **使用参考**：提供参考图像来指导生成
- **风格参考**：参考特定艺术家或作品的风格
- **构图参考**：参考特定的构图和布局
- **元素参考**：参考特定的元素和细节

#### 复合提示词
- **组合概念**：将不同概念组合成新的创意
- **对比元素**：使用对比元素创造视觉冲击
- **层次描述**：按层次描述场景和元素
- **情感引导**：通过描述情感和氛围引导生成

#### 技术参数优化
- **质量设置**：调整质量相关的参数
- **尺寸设置**：选择合适的图像尺寸
- **种子值**：使用种子值获得可重复的结果
- **迭代次数**：调整生成的迭代次数

### 风格控制技巧

控制生成图像的风格是高级用户的重要技能。

#### 风格指定
- **明确风格**：明确指定艺术风格或参考艺术家
- **风格混合**：混合多种风格创造独特效果
- **时期风格**：指定特定时期的艺术风格
- **地域风格**：指定特定地域的艺术风格

#### 视觉效果控制
- **光照效果**：指定光照类型和方向
- **色彩方案**：指定色彩风格和调色板
- **质感表现**：描述材质和纹理
- **氛围营造**：描述整体氛围和情绪

#### 构图控制
- **视角选择**：指定拍摄视角和角度
- **焦点设置**：指定画面的焦点和重点
- **景深效果**：控制景深和模糊效果
- **画面平衡**：调整画面的平衡和构图

![风格控制示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20art%20styles%20and%20visual%20effects%20in%20AI%20image%20generation%2C%20educational%20style&image_size=landscape_16_9)

### 专业领域应用

图像生成AI在不同专业领域有特定的应用技巧。

#### 设计领域
- **品牌设计**：创建品牌标志和视觉元素
- **产品设计**：生成产品概念图和原型
- **UI/UX设计**：创建界面设计和用户体验元素
- **包装设计**：设计产品包装和标签

#### 媒体领域
- **广告创意**：创建广告图像和视觉效果
- **内容创作**：为文章和社交媒体创建配图
- **影视制作**：创建概念艺术和故事板
- **游戏开发**：生成游戏角色和场景

#### 艺术领域
- **艺术创作**：创作独特的艺术作品
- **风格探索**：探索不同的艺术风格
- **创意表达**：表达个人创意和想法
- **艺术实验**：进行艺术形式的实验

### 最佳实践

遵循一些最佳实践可以帮助你获得更好的结果。

#### 工作流程优化
- **明确目标**：清楚你想要生成什么样的图像
- **收集参考**：收集相关的参考资料和灵感
- **迭代优化**：通过多次尝试逐步优化
- **记录成功**：记录成功的提示词和参数

#### 版权和伦理
- **尊重版权**：避免生成侵犯他人版权的内容
- **原创性**：添加自己的创意，避免直接复制
- **负责任使用**：负责任地使用生成的内容
- **透明标注**：在使用时标注AI生成的内容

#### 持续学习
- **关注更新**：关注模型和工具的更新
- **学习社区**：参与用户社区，学习他人的经验
- **实验探索**：不断实验和探索新的可能性
- **分享经验**：分享自己的经验和技巧

### 常见高级问题及解决

在使用高级技巧时，可能会遇到一些问题。

#### 风格不一致
- **问题**：生成的图像风格不一致
- **解决**：明确指定单一风格，避免混合过多风格
- **示例**：选择一种主要风格，作为主要参考

#### 复杂场景生成
- **问题**：复杂场景生成效果不理想
- **解决**：分解场景，逐步构建，使用参考图像
- **示例**：先生成场景的各个部分，再组合

#### 人物生成
- **问题**：人物生成可能出现比例或细节问题
- **解决**：使用更详细的描述，参考特定的人物特征
- **示例**：详细描述人物的特征、服装和姿态

---

💡 **小提示**：高级技巧需要实践和经验。不要害怕尝试不同的方法，通过不断练习，你会逐渐掌握这些技巧，生成越来越专业的图像。

---

## 思考与讨论

### 1. 你最想掌握哪种高级技巧？

**示例想法**：
- "我想掌握风格控制技巧，能够生成特定艺术风格的图像。"
- "我希望学会如何生成复杂的场景，包含多个元素。"
- "我想掌握人物生成的技巧，能够生成逼真的人物图像。"

### 2. 你认为图像生成AI在哪个领域最有潜力？

**示例想法**：
- "我认为在创意设计领域最有潜力，可以大大提高设计效率。"
- "我觉得在教育领域很有潜力，可以创建直观的教学材料。"
- "我认为在娱乐和媒体领域有很大潜力，可以创造丰富的内容。"

### 3. 你如何看待AI生成内容的版权问题？

**示例想法**：
- "我认为AI生成的内容应该有明确的版权归属，保护创作者的权益。"
- "我觉得应该在使用AI生成内容时明确标注，保持透明度。"
- "我认为需要建立新的版权规则来适应AI生成内容的特点。"
        `}]},q0={id:5,title:"AI辅助办公",description:"学习如何使用AI工具提高办公效率，自动化日常任务",icon:"briefcase",sections:[{id:"5-1",title:"5.1 办公自动化原理",content:`
## 办公自动化原理

办公自动化是指使用技术手段自动完成办公室中的各种任务，提高工作效率和质量。AI技术的加入，使得办公自动化达到了新的高度。

![办公自动化示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20office%20automation%20with%20AI%20tools%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 办公自动化的核心概念

#### 1. RPA（机器人流程自动化）

- **定义**：RPA是一种使用软件机器人自动执行重复性任务的技术
- **特点**：基于规则，模拟人类操作，不需要修改现有系统
- **应用**：数据录入、表单处理、报告生成等

#### 2. AI与RPA的结合

- **智能RPA**：结合AI技术的RPA系统，能够处理更复杂的任务
- **认知能力**：能够理解非结构化数据，如文档、邮件等
- **自适应能力**：能够从经验中学习，不断优化流程

#### 3. 工作流自动化

- **定义**：将多个任务和步骤自动化连接，形成完整的工作流程
- **特点**：端到端自动化，减少人工干预
- **应用**：审批流程、客户服务、项目管理等

![AI办公自动化示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20and%20RPA%20working%20together%20for%20office%20automation%2C%20educational%20style&image_size=landscape_16_9)

### 办公自动化的优势

#### 1. 提高效率

- **减少手动操作**：自动完成重复性任务
- **24/7工作**：机器人可以全天候工作
- **快速处理**：比人工处理速度更快

#### 2. 降低成本

- **减少人力成本**：减少对人工的依赖
- **降低错误率**：减少人为错误导致的成本
- **优化资源**：将人力集中在更有价值的任务上

#### 3. 提高质量

- **一致性**：每次执行都保持一致的质量
- **准确性**：减少人为错误
- **可追踪性**：所有操作都有记录，便于审计

### 常见的办公自动化场景

#### 1. 数据处理

- **数据录入**：自动从各种来源录入数据
- **数据整理**：自动整理和格式化数据
- **数据分析**：自动分析数据并生成报告

#### 2. 文档处理

- **文档生成**：自动生成标准化文档
- **文档分类**：自动分类和归档文档
- **文档提取**：从文档中提取关键信息

#### 3. 邮件处理

- **邮件分类**：自动分类和优先级排序
- **自动回复**：自动回复常见问题
- **邮件总结**：自动总结邮件内容

---

💡 **小提示**：办公自动化的关键是识别重复性、规则性的任务，然后使用合适的工具将其自动化。从简单的任务开始，逐步扩展到更复杂的流程。

---

## 思考与讨论

### 1. 你工作中最耗时的重复性任务是什么？

**示例想法**：
- "我每天需要处理大量的邮件，分类和回复占用了很多时间。"
- "我需要定期生成各种报告，数据收集和整理非常耗时。"
- "我需要手动录入大量数据到系统中，这个过程很枯燥。"

### 2. 你认为AI在办公自动化中的最大优势是什么？

**示例想法**：
- "我认为最大的优势是能够处理非结构化数据，如文档和邮件。"
- "AI可以从数据中学习，不断优化自动化流程。"
- "AI可以处理更复杂的任务，不仅仅是简单的规则执行。"

### 3. 你担心AI办公自动化会带来什么挑战？

**示例想法**：
- "我担心自动化会导致一些工作岗位的减少。"
- "我担心系统的可靠性和安全性问题。"
- "我担心学习和实施自动化系统的成本和时间。"
        `},{id:"5-2",title:"5.2 文档处理",content:`
## 文档处理

文档是办公中最常见的信息载体，AI工具可以帮助我们更高效地处理各种文档。

![文档处理示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20document%20processing%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 文档处理的常见任务

#### 1. 文档生成

- **模板化文档**：基于模板自动生成标准化文档
- **个性化文档**：根据不同需求生成个性化文档
- **多格式文档**：生成Word、PDF、PPT等不同格式的文档

#### 2. 文档分析

- **内容提取**：从文档中提取关键信息
- **情感分析**：分析文档的情感倾向
- **主题识别**：识别文档的主题和关键词

#### 3. 文档管理

- **文档分类**：自动分类文档到不同的文件夹
- **文档搜索**：智能搜索文档内容
- **文档版本控制**：管理文档的不同版本

### AI文档处理工具

#### 1. 大语言模型

- **功能**：生成、总结、分析文档内容
- **应用**：撰写报告、总结会议记录、生成邮件等
- **优势**：理解上下文，生成高质量内容

#### 2. OCR工具

- **功能**：识别扫描文档和图片中的文字
- **应用**：数字化纸质文档、提取图片中的文字
- **优势**：高精度识别，支持多种语言

#### 3. 文档智能分析工具

- **功能**：深度分析文档内容，提取结构化信息
- **应用**：合同分析、简历筛选、表单处理
- **优势**：处理复杂文档，提取关键信息

![AI文档分析示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20analyzing%20documents%20and%20extracting%20information%2C%20educational%20style&image_size=landscape_16_9)

### 文档处理最佳实践

#### 1. 文档生成

- **明确目标**：明确文档的目的和受众
- **提供模板**：使用标准化的模板
- **批量处理**：一次性生成多个文档

#### 2. 文档分析

- **明确需求**：明确需要从文档中提取的信息
- **验证结果**：人工验证AI提取的信息
- **持续优化**：根据反馈调整分析方法

#### 3. 文档管理

- **建立分类体系**：建立清晰的文档分类体系
- **使用标签**：为文档添加标签，便于搜索
- **定期整理**：定期整理和归档文档

---

💡 **小提示**：使用AI工具处理文档时，要注意数据安全和隐私保护。对于敏感文档，确保使用安全的工具和方法。

---

## 思考与讨论

### 1. 你最希望AI帮助你处理哪种类型的文档？

**示例想法**：
- "我希望AI能帮助我处理合同文档，提取关键条款和风险点。"
- "我希望AI能帮助我分析客户反馈文档，提取有价值的信息。"
- "我希望AI能帮助我生成标准化的报告和邮件。"

### 2. 你在文档处理中遇到的最大挑战是什么？

**示例想法**：
- "我经常需要处理大量非结构化的文档，提取信息非常耗时。"
- "不同格式的文档处理起来很麻烦，需要转换格式。"
- "文档中的专业术语和复杂内容难以自动处理。"

### 3. 你认为AI在文档处理方面还有哪些潜力？

**示例想法**：
- "我希望AI能更智能地理解文档的上下文和意图。"
- "我希望AI能自动生成更符合特定行业标准的文档。"
- "我希望AI能帮助我更有效地管理和组织文档库。"
        `},{id:"5-3",title:"5.3 会议助手",content:`
## 会议助手

会议是办公中不可或缺的一部分，AI工具可以帮助我们更高效地管理和参与会议。

![会议助手示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20meeting%20assistant%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### AI会议助手的功能

#### 1. 会议准备

- **议程生成**：根据会议主题自动生成议程
- **资料收集**：收集和整理与会议相关的资料
- **参会提醒**：提醒参会人员按时参加会议

#### 2. 会议记录

- **实时转录**：实时转录会议内容
- **要点提取**：自动提取会议要点和决策
- **行动项识别**：识别会议中的行动项和负责人

#### 3. 会议总结

- **会议摘要**：自动生成会议摘要
- **决策记录**：记录会议中的决策和结论
- **后续跟进**：跟踪行动项的执行情况

### 常见的AI会议助手工具

#### 1. 语音转文字工具

- **功能**：实时转录会议内容
- **应用**：会议记录、讲座记录
- **优势**：准确转录，支持多种语言

#### 2. 智能会议总结工具

- **功能**：自动总结会议内容，提取要点
- **应用**：生成会议纪要、决策记录
- **优势**：快速生成高质量总结

#### 3. 会议管理工具

- **功能**：管理会议议程、参会人员、行动项
- **应用**：会议规划、跟进管理
- **优势**：整合会议全流程管理

![AI会议记录示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20taking%20meeting%20notes%20and%20extracting%20action%20items%2C%20educational%20style&image_size=landscape_16_9)

### 会议助手使用最佳实践

#### 1. 会前准备

- **明确会议目标**：清晰定义会议的目的和期望结果
- **准备相关资料**：提前准备和分享会议资料
- **设置会议规则**：明确会议时长和讨论范围

#### 2. 会中使用

- **实时记录**：使用AI工具实时记录会议内容
- **互动参与**：专注于会议讨论，而不是记笔记
- **及时澄清**：对重要决策及时澄清和确认

#### 3. 会后跟进

- **快速分享**：及时分享会议纪要和行动项
- **跟踪执行**：跟踪行动项的执行情况
- **持续改进**：根据反馈优化会议流程

---

💡 **小提示**：使用AI会议助手时，要注意保护会议内容的隐私和安全。对于敏感会议，确保使用安全的工具和方法。

---

## 思考与讨论

### 1. 你在会议中最困扰的问题是什么？

**示例想法**：
- "我经常在会议中忙于记笔记，无法充分参与讨论。"
- "会议后整理会议纪要非常耗时。"
- "行动项的跟踪和执行情况不明确。"

### 2. 你认为AI会议助手最有价值的功能是什么？

**示例想法**：
- "我认为实时转录功能最有价值，可以让我专注于会议讨论。"
- "自动提取行动项和决策的功能非常有价值，可以确保重要事项不被遗漏。"
- "会议总结功能可以帮助我快速回顾会议内容，节省时间。"

### 3. 你担心AI会议助手会带来什么挑战？

**示例想法**：
- "我担心会议内容的隐私和安全问题。"
- "我担心AI可能会误解会议内容，导致记录不准确。"
- "我担心过度依赖AI会减少人与人之间的直接交流。"
        `},{id:"5-4",title:"5.4 数据分析",content:`
## 数据分析

数据分析是现代办公中的重要环节，AI工具可以帮助我们更高效地分析数据，发现 insights。

![数据分析示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20data%20analysis%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### AI数据分析的优势

#### 1. 处理大量数据

- **大数据处理**：处理传统方法难以处理的海量数据
- **多源数据整合**：整合来自不同来源的数据
- **实时分析**：实时分析数据，及时发现趋势

#### 2. 智能分析能力

- **模式识别**：自动识别数据中的模式和趋势
- **异常检测**：自动检测数据中的异常情况
- **预测分析**：基于历史数据预测未来趋势

#### 3. 可视化能力

- **自动可视化**：自动生成数据可视化图表
- **交互式分析**：支持交互式数据分析
- **个性化报表**：生成个性化的数据报表

### 常见的AI数据分析工具

#### 1. 智能数据分析平台

- **功能**：整合数据处理、分析和可视化
- **应用**：市场分析、业务决策、财务分析
- **优势**：用户友好，功能强大

#### 2. 大语言模型数据分析

- **功能**：使用自然语言分析数据，生成分析报告
- **应用**：数据解读、报告生成、决策支持
- **优势**：使用自然语言交互，降低技术门槛

#### 3. 专门领域分析工具

- **功能**：针对特定领域的数据分析
- **应用**：销售分析、客户分析、运营分析
- **优势**：针对特定领域优化，分析更精准

![AI数据分析示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20analyzing%20data%20and%20generating%20insights%2C%20educational%20style&image_size=landscape_16_9)

### 数据分析最佳实践

#### 1. 数据准备

- **数据清洗**：确保数据的质量和一致性
- **数据整合**：整合来自不同来源的数据
- **数据转换**：将数据转换为适合分析的格式

#### 2. 分析方法

- **明确目标**：明确分析的目标和问题
- **选择方法**：选择适合的分析方法和工具
- **多角度分析**：从不同角度分析数据，获得全面 insights

#### 3. 结果应用

- **数据驱动决策**：基于分析结果做出决策
- **持续监控**：持续监控数据变化，及时调整策略
- **知识共享**：分享分析结果和 insights 给相关人员

---

💡 **小提示**：数据分析的关键是要明确分析的目标和问题，选择合适的工具和方法，然后将分析结果转化为实际的行动和决策。

---

## 思考与讨论

### 1. 你在工作中最需要分析哪种类型的数据？

**示例想法**：
- "我需要分析销售数据，了解销售趋势和客户行为。"
- "我需要分析市场数据，了解市场趋势和竞争对手情况。"
- "我需要分析运营数据，优化业务流程和提高效率。"

### 2. 你认为AI在数据分析中的最大优势是什么？

**示例想法**：
- "我认为AI可以处理大量数据，发现人类难以发现的模式。"
- "AI可以快速分析数据，节省时间和人力。"
- "AI可以提供预测分析，帮助我们做出更明智的决策。"

### 3. 你在数据分析中遇到的最大挑战是什么？

**示例想法**：
- "数据质量和一致性是我遇到的最大挑战。"
- "分析工具的学习曲线较陡，使用起来不够直观。"
- "如何将分析结果转化为实际的行动和决策是一个挑战。"
        `},{id:"5-5",title:"5.5 实践：优化工作流程",content:`
## 实践：优化工作流程

现在让我们将所学的知识应用到实际工作中，优化一个具体的工作流程。

![工作流程优化示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20workflow%20optimization%20process%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 工作流程分析

首先，我们需要分析当前的工作流程，识别可以优化的环节。

#### 1. 选择一个工作流程

- **日常工作流**：选择一个你每天或每周都要执行的工作流程
- **痛点分析**：识别这个工作流程中的痛点和效率瓶颈
- **目标设定**：设定优化的目标和期望结果

#### 2. 流程分解

- **步骤分解**：将工作流程分解为具体的步骤
- **时间评估**：评估每个步骤的执行时间
- **自动化潜力**：评估每个步骤的自动化潜力

### 工作流程优化

基于分析结果，我们可以使用AI工具优化工作流程。

#### 1. 工具选择

- **自动化工具**：选择适合的自动化工具
- **AI工具**：选择适合的AI工具
- **集成方案**：设计工具之间的集成方案

#### 2. 流程重构

- **自动化步骤**：将可以自动化的步骤用AI工具替代
- **流程优化**：重新设计工作流程，消除冗余步骤
- **标准化**：标准化工作流程和输出格式

#### 3. 实施和测试

- **小规模测试**：在小范围内测试优化后的工作流程
- **反馈收集**：收集使用反馈
- **调整优化**：根据反馈调整工作流程

### 案例：客户反馈处理工作流

#### 1. 当前流程

1. 接收客户反馈邮件
2. 手动分类反馈内容
3. 手动提取关键信息
4. 分配给相关团队处理
5. 跟踪处理进度
6. 回复客户
7. 整理反馈数据

#### 2. 优化方案

1. **自动化邮件分类**：使用AI工具自动分类反馈内容
2. **智能信息提取**：使用AI工具自动提取关键信息
3. **自动分配任务**：根据反馈类型自动分配给相关团队
4. **进度跟踪**：使用项目管理工具跟踪处理进度
5. **自动回复生成**：使用AI工具生成标准化回复
6. **数据自动分析**：使用AI工具自动分析反馈数据

#### 3. 预期效果

- **时间节省**：减少50%的处理时间
- **准确性提高**：减少人为错误
- **数据价值**：更好地利用反馈数据
- **客户满意度**：更快的响应速度

![优化工作流程示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20before%20and%20after%20workflow%20optimization%2C%20educational%20style&image_size=landscape_16_9)

### 实施步骤

1. **评估当前流程**：详细记录当前工作流程的每个步骤
2. **识别优化机会**：识别可以自动化和改进的环节
3. **选择工具**：选择适合的AI和自动化工具
4. **设计新流程**：设计优化后的工作流程
5. **小规模测试**：在小范围内测试新流程
6. **全面实施**：在整个团队或组织中实施新流程
7. **持续改进**：定期评估和优化工作流程

---

💡 **小提示**：工作流程优化是一个持续的过程，需要不断评估和改进。从简单的优化开始，逐步扩展到更复杂的流程。

---

## 思考与讨论

### 1. 你最想优化哪个工作流程？

**示例想法**：
- "我最想优化客户服务流程，提高响应速度和质量。"
- "我最想优化数据分析流程，减少手动操作和提高分析效率。"
- "我最想优化文档管理流程，让文档查找和管理更高效。"

### 2. 你认为工作流程优化中最关键的是什么？

**示例想法**：
- "我认为最关键的是识别真正的痛点和瓶颈。"
- "选择适合的工具和技术非常重要。"
- "获得团队的支持和参与是成功的关键。"

### 3. 你希望未来AI在工作流程优化方面有哪些改进？

**示例想法**：
- "我希望AI能更智能地理解和优化工作流程。"
- "我希望看到更多低代码/无代码工具，让非技术人员也能优化工作流程。"
- "我希望AI能自动识别和建议工作流程的优化机会。"

---

## 第五章完成！

恭喜你完成了第五章的学习！现在你已经：

- **了解了办公自动化原理**：学习了RPA和AI在办公自动化中的应用
- **掌握了文档处理技巧**：学习了如何使用AI工具处理各种文档
- **学会了使用会议助手**：学习了如何使用AI工具管理和参与会议
- **掌握了数据分析方法**：学习了如何使用AI工具分析数据，发现 insights
- **实践了工作流程优化**：学习了如何使用AI工具优化工作流程

现在你已经成为办公效率的大师！通过使用AI工具，你可以更高效地完成各种办公任务，节省时间和精力，提高工作质量和效率。

---

### 章节回顾

**核心知识点**：
- AI可以显著提高办公自动化水平
- 文档处理是AI在办公中的重要应用领域
- AI会议助手可以帮助我们更高效地管理和参与会议
- AI可以帮助我们更深入地分析数据，发现 insights
- 工作流程优化需要系统分析和持续改进

**重要提醒**：
- 从简单的任务开始自动化，逐步扩展到更复杂的流程
- 注意数据安全和隐私保护
- 关注工具的集成和协同使用
- 持续评估和优化工作流程
- 平衡自动化和人工干预的关系
        `}]},b0={id:6,title:"AI学习与研究",description:"学习如何使用AI工具辅助学习和研究，提高学习效率和研究质量",icon:"graduation-cap",sections:[{id:"6-1",title:"6.1 学习原理",content:`
## 学习原理

学习是人类获取知识和技能的过程，AI工具可以帮助我们优化学习过程，提高学习效率和效果。

![学习原理示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisted%20learning%20principles%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 学习的基本原理

#### 1. 认知负荷理论

- **定义**：认知负荷理论研究人在学习过程中的认知负担
- **类型**：内在认知负荷、外在认知负荷、相关认知负荷
- **应用**：优化学习内容和方法，减少不必要的认知负担

#### 2. 建构主义学习理论

- **定义**：学习者通过构建自己的知识结构来学习
- **特点**：强调主动学习、情境学习、协作学习
- **应用**：创建适合学习者主动构建知识的学习环境

#### 3. 个性化学习理论

- **定义**：根据学习者的特点和需求定制学习内容和方法
- **特点**：自适应学习、差异化教学、个性化反馈
- **应用**：根据学习者的学习风格、进度和偏好调整学习内容

![个性化学习示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20personalized%20learning%20with%20AI%20assistance%2C%20educational%20style&image_size=landscape_16_9)

### AI在学习中的应用原理

#### 1. 个性化学习

- **数据收集**：收集学习者的学习数据和行为
- **分析处理**：分析学习者的学习风格、进度和偏好
- **内容调整**：根据分析结果调整学习内容和方法
- **反馈优化**：提供个性化的反馈和建议

#### 2. 智能辅导

- **问题理解**：理解学习者的问题和需求
- **知识检索**：检索相关的知识和信息
- **解答生成**：生成个性化的解答和解释
- **学习跟踪**：跟踪学习者的学习进度和理解程度

#### 3. 学习分析

- **数据收集**：收集学习者的学习数据
- **模式识别**：识别学习模式和趋势
- **洞察生成**：生成学习洞察和建议
- **预测分析**：预测学习结果和风险

---

💡 **小提示**：了解学习原理可以帮助你更好地使用AI工具辅助学习。不同的学习理论适用于不同的学习场景，选择适合自己的学习方法和工具。

---

## 思考与讨论

### 1. 你认为AI如何改变了传统的学习方式？

**示例想法**：
- "AI可以提供个性化的学习内容和反馈，适应不同学习者的需求。"
- "AI可以自动化一些重复性的学习任务，让学习者专注于更有创造性的思考。"
- "AI可以提供即时的学习反馈，帮助学习者及时调整学习策略。"

### 2. 你最喜欢的学习理论是什么？为什么？

**示例想法**：
- "我喜欢建构主义学习理论，因为它强调主动学习和知识构建，这符合我的学习风格。"
- "我喜欢个性化学习理论，因为每个人的学习方式都不同，个性化的学习体验更有效。"
- "我喜欢认知负荷理论，因为它帮助我理解如何优化学习内容，减少认知负担。"

### 3. 你如何将AI工具与学习原理结合起来？

**示例想法**：
- "我使用AI工具根据认知负荷理论优化学习内容，减少不必要的认知负担。"
- "我使用AI工具根据建构主义学习理论创建主动学习环境，促进知识构建。"
- "我使用AI工具根据个性化学习理论提供定制化的学习内容和反馈。"
        `},{id:"6-2",title:"6.2 知识获取",content:`
## 知识获取

知识获取是学习的基础，AI工具可以帮助我们更高效地获取和管理知识。

![知识获取示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisted%20knowledge%20acquisition%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 传统知识获取的挑战

#### 1. 信息过载

- **信息爆炸**：互联网上的信息呈指数级增长
- **信息噪声**：大量无关和低质量的信息
- **筛选困难**：难以从海量信息中筛选有价值的内容

#### 2. 知识碎片化

- **分散存储**：知识分散在不同的来源和格式中
- **缺乏联系**：知识之间缺乏有效的联系和整合
- **难以检索**：难以快速找到所需的知识

#### 3. 学习效率低

- **重复学习**：重复学习已经掌握的内容
- **进度缓慢**：学习进度受到时间和空间的限制
- **缺乏反馈**：缺乏及时和个性化的学习反馈

### AI辅助知识获取的方法

#### 1. 智能信息检索

- **自然语言搜索**：使用自然语言进行信息搜索
- **语义理解**：理解搜索查询的语义和意图
- **结果优化**：根据相关性和质量优化搜索结果
- **多源整合**：整合来自多个来源的信息

#### 2. 知识提取与整理

- **内容提取**：从各种来源提取有价值的内容
- **知识结构化**：将提取的内容组织成结构化的知识
- **知识关联**：建立知识之间的关联和联系
- **知识更新**：及时更新和补充知识

#### 3. 个性化知识推荐

- **兴趣分析**：分析学习者的兴趣和需求
- **内容推荐**：根据兴趣和需求推荐相关内容
- **学习路径**：推荐个性化的学习路径
- **资源匹配**：匹配适合学习者水平的资源

![智能知识获取示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20intelligent%20knowledge%20retrieval%20and%20organization%2C%20educational%20style&image_size=landscape_16_9)

### AI知识获取工具推荐

#### 1. 智能搜索工具

- **Perplexity AI**：基于大语言模型的智能搜索工具
- **You.com**：AI驱动的搜索引擎
- **Bard**：Google的AI搜索助手
- **Bing Chat**：Microsoft的AI搜索助手

#### 2. 知识管理工具

- **Notion AI**：集成AI功能的知识管理工具
- **Obsidian**：支持AI插件的知识管理工具
- **Roam Research**：支持AI功能的网络笔记工具
- **Evernote**：集成AI功能的笔记工具

#### 3. 内容学习平台

- **Coursera**：提供AI辅助学习功能的在线学习平台
- **edX**：提供AI辅助学习功能的在线学习平台
- **Khan Academy**：提供AI辅助学习功能的教育平台
- **Duolingo**：使用AI个性化语言学习的平台

---

💡 **小提示**：使用AI工具获取知识时，要注意信息的准确性和可靠性，同时要保持批判性思维，不要盲目接受AI提供的所有信息。

---

## 思考与讨论

### 1. 你在知识获取过程中遇到的最大挑战是什么？

**示例想法**：
- "我遇到的最大挑战是信息过载，难以从海量信息中筛选有价值的内容。"
- "我遇到的最大挑战是知识碎片化，难以将分散的知识整合起来。"
- "我遇到的最大挑战是学习效率低，学习进度受到时间和空间的限制。"

### 2. 你如何使用AI工具提高知识获取效率？

**示例想法**：
- "我使用AI智能搜索工具快速找到相关信息，减少信息搜索的时间。"
- "我使用AI知识管理工具整理和组织知识，建立知识之间的联系。"
- "我使用AI内容推荐工具获取个性化的学习内容，提高学习的针对性。"

### 3. 你认为AI在知识获取方面还有哪些潜力？

**示例想法**：
- "我认为AI可以更智能地理解用户的知识需求，提供更精准的信息。"
- "我认为AI可以帮助用户建立更完整的知识体系，填补知识 gaps。"
- "我认为AI可以提供更个性化的学习路径，适应不同用户的学习风格。"
        `},{id:"6-3",title:"6.3 概念理解",content:`
## 概念理解

概念理解是学习的核心，AI工具可以帮助我们更深入地理解复杂概念。

![概念理解示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisted%20concept%20understanding%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 概念理解的挑战

#### 1. 抽象概念

- **难以可视化**：抽象概念难以通过视觉方式理解
- **缺乏直观**：抽象概念缺乏直观的理解方式
- **理解难度**：抽象概念理解难度较高

#### 2. 复杂概念

- **多维度**：复杂概念包含多个维度和层面
- **关联性**：复杂概念与其他概念有复杂的关联
- **理解深度**：需要深入理解概念的本质和应用

#### 3. 专业概念

- **术语障碍**：专业概念包含大量专业术语
- **背景知识**：理解专业概念需要相关背景知识
- **应用场景**：专业概念需要在具体应用场景中理解

### AI辅助概念理解的方法

#### 1. 概念可视化

- **图形化展示**：将抽象概念转化为图形化展示
- **类比解释**：使用类比和比喻解释复杂概念
- **实例展示**：通过具体实例展示概念的应用
- **交互式学习**：通过交互式方式加深概念理解

#### 2. 概念分解

- **层次分解**：将复杂概念分解为层次化的子概念
- **关系映射**：映射概念之间的关系和联系
- **核心要素**：识别概念的核心要素和特征
- **应用场景**：展示概念在不同场景中的应用

#### 3. 概念关联

- **知识图谱**：建立概念之间的知识图谱
- **关联分析**：分析概念之间的关联和影响
- **跨领域连接**：连接不同领域的相关概念
- **概念演化**：展示概念的发展和演化过程

![概念理解方法示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20methods%20for%20concept%20understanding%20like%20visualization%20and%20decomposition%2C%20educational%20style&image_size=landscape_16_9)

### AI概念理解工具推荐

#### 1. 概念可视化工具

- **Tome**：AI驱动的演示和可视化工具
- **Beautiful.ai**：AI驱动的演示工具
- **Miro**：支持AI功能的协作白板工具
- **Lucidchart**：支持AI功能的图表工具

#### 2. 概念解释工具

- **ChatGPT**：可以解释复杂概念的大语言模型
- **Claude**：可以提供详细概念解释的AI助手
- **Perplexity AI**：可以提供上下文相关概念解释的工具
- **Bard**：Google的AI概念解释工具

#### 3. 知识图谱工具

- **Obsidian**：支持知识图谱功能的笔记工具
- **Roam Research**：支持知识图谱功能的网络笔记工具
- **Notion**：支持知识图谱功能的协作工具
- **Coggle**：支持概念图和思维导图的工具

---

💡 **小提示**：使用AI工具理解概念时，要多维度思考，结合多种解释和示例，以获得更全面的理解。同时，要将概念与实际应用场景结合起来，加深理解。

---

## 思考与讨论

### 1. 你在理解复杂概念时遇到的最大挑战是什么？

**示例想法**：
- "我遇到的最大挑战是抽象概念难以可视化，缺乏直观的理解方式。"
- "我遇到的最大挑战是复杂概念包含多个维度，难以全面理解。"
- "我遇到的最大挑战是专业概念包含大量专业术语，理解难度较高。"

### 2. 你如何使用AI工具帮助理解复杂概念？

**示例想法**：
- "我使用AI工具将抽象概念转化为图形化展示，帮助我可视化理解。"
- "我使用AI工具将复杂概念分解为层次化的子概念，逐步理解。"
- "我使用AI工具建立概念之间的关联，形成完整的知识网络。"

### 3. 你认为AI在概念理解方面还有哪些潜力？

**示例想法**：
- "我认为AI可以根据个人的学习风格和背景，提供个性化的概念解释。"
- "我认为AI可以创建更交互式的学习体验，通过模拟和实验帮助理解概念。"
- "我认为AI可以连接不同领域的概念，帮助形成跨学科的理解。"
        `},{id:"6-4",title:"6.4 研究辅助",content:`
## 研究辅助

AI工具可以成为研究的强大助手，帮助研究人员更高效地进行研究工作。

![研究辅助示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisted%20research%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 研究过程的挑战

#### 1. 文献综述

- **文献量大**：相关文献数量庞大，难以全面查阅
- **文献分散**：文献分散在不同的数据库和平台
- **内容筛选**：难以筛选出最相关和最有价值的文献
- **综述撰写**：撰写文献综述需要综合分析大量信息

#### 2. 研究设计

- **问题定义**：明确研究问题和研究目标
- **方法选择**：选择合适的研究方法和设计
- **变量控制**：控制研究变量和无关因素
- **可行性评估**：评估研究的可行性和资源需求

#### 3. 数据分析

- **数据收集**：收集和整理研究数据
- **数据清洗**：清洗和预处理数据
- **数据分析**：分析数据并提取 insights
- **结果解释**：解释分析结果并得出结论

#### 4. 论文写作

- **结构组织**：组织论文的结构和内容
- **文献引用**：正确引用和管理参考文献
- **语言表达**：清晰、准确地表达研究结果
- **格式规范**：遵循学术论文的格式规范

### AI辅助研究的方法

#### 1. 文献综述辅助

- **文献检索**：使用AI工具进行智能文献检索
- **文献分析**：分析文献内容和引用关系
- **综述生成**：辅助生成文献综述初稿
- **文献管理**：管理和组织参考文献

#### 2. 研究设计辅助

- **问题分析**：分析研究问题和研究目标
- **方法建议**：根据研究问题建议合适的研究方法
- **设计优化**：优化研究设计和实验方案
- **可行性评估**：评估研究的可行性和资源需求

#### 3. 数据分析辅助

- **数据处理**：辅助数据清洗和预处理
- **分析方法**：推荐合适的数据分析方法
- **结果分析**：辅助分析数据并提取 insights
- **可视化**：生成数据可视化和图表

#### 4. 论文写作辅助

- **结构建议**：建议论文的结构和组织
- **内容生成**：辅助生成论文的部分内容
- **语言润色**：润色和改进论文语言表达
- **引用管理**：管理和格式化参考文献

![AI研究辅助示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20assisting%20research%20process%20from%20literature%20review%20to%20paper%20writing%2C%20educational%20style&image_size=landscape_16_9)

### AI研究工具推荐

#### 1. 文献综述工具

- **ScholarAI**：AI驱动的学术文献搜索和分析工具
- **Semantic Scholar**：AI驱动的学术搜索引擎
- **ResearchRabbit**：AI辅助的文献发现和管理工具
- **Connected Papers**：AI辅助的文献关系分析工具

#### 2. 研究设计工具

- **ChatGPT**：可以辅助研究设计和方法选择
- **Claude**：可以提供详细的研究设计建议
- **Perplexity AI**：可以提供研究方法的相关信息
- **Bard**：Google的AI研究助手

#### 3. 数据分析工具

- **Python** (with AI libraries)：支持AI辅助数据分析的编程语言
- **R** (with AI packages)：支持AI辅助数据分析的统计语言
- **Tableau**：支持AI辅助数据可视化的工具
- **Power BI**：支持AI辅助数据分析的商业智能工具

#### 4. 论文写作工具

- **ChatGPT**：可以辅助论文写作和语言润色
- **Claude**：可以提供详细的论文写作建议
- **Grammarly**：AI驱动的写作辅助工具
- **Paperpal**：AI驱动的学术写作辅助工具

---

💡 **小提示**：使用AI工具辅助研究时，要保持学术诚信，正确引用和管理参考文献，同时要对AI生成的内容进行批判性评估和修改。

---

## 思考与讨论

### 1. 你在研究过程中遇到的最大挑战是什么？

**示例想法**：
- "我遇到的最大挑战是文献综述，需要查阅大量文献并综合分析。"
- "我遇到的最大挑战是研究设计，需要选择合适的研究方法和设计。"
- "我遇到的最大挑战是数据分析，需要处理和分析大量数据。"

### 2. 你如何使用AI工具辅助研究工作？

**示例想法**：
- "我使用AI工具进行智能文献检索，快速找到相关文献。"
- "我使用AI工具辅助数据分析，提取有价值的 insights。"
- "我使用AI工具辅助论文写作，提高写作效率和质量。"

### 3. 你认为AI在研究辅助方面还有哪些潜力？

**示例想法**：
- "我认为AI可以更智能地分析文献内容，发现文献之间的关联和趋势。"
- "我认为AI可以帮助设计更创新的研究方法和实验方案。"
- "我认为AI可以辅助跨学科研究，连接不同领域的知识和方法。"
        `},{id:"6-5",title:"6.5 实践：设计个性化学习计划",content:`
## 实践：设计个性化学习计划

现在让我们将所学的知识应用到实际中，设计一个个性化的学习计划。

![个性化学习计划示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20personalized%20learning%20plan%20design%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 个性化学习计划的要素

#### 1. 学习目标

- **长期目标**：设定长期的学习目标和愿景
- **短期目标**：设定短期的学习目标和里程碑
- **具体目标**：确保目标具体、可衡量、可实现、相关、有时限
- **优先级**：确定目标的优先级和重要性

#### 2. 学习内容

- **核心内容**：确定学习的核心内容和主题
- **辅助内容**：确定辅助学习的内容和资源
- **学习深度**：确定学习的深度和广度
- **内容组织**：组织学习内容的顺序和结构

#### 3. 学习方法

- **学习风格**：根据个人学习风格选择合适的学习方法
- **学习策略**：选择有效的学习策略和技巧
- **学习工具**：选择适合的学习工具和资源
- **学习环境**：创造有利于学习的环境和条件

#### 4. 学习时间

- **时间规划**：规划学习的时间和频率
- **时间分配**：分配不同内容的学习时间
- **时间管理**：管理学习时间，避免拖延和分心
- **进度跟踪**：跟踪学习进度和时间使用情况

#### 5. 学习评估

- **评估方法**：选择合适的学习评估方法
- **反馈机制**：建立有效的反馈机制
- **调整策略**：根据评估结果调整学习策略
- **成果展示**：展示学习成果和收获

### 使用AI设计个性化学习计划

#### 1. 自我评估

- **学习风格评估**：使用AI工具评估个人学习风格
- **知识水平评估**：评估当前的知识水平和技能
- **学习需求分析**：分析学习需求和目标
- **学习偏好分析**：分析学习偏好和习惯

#### 2. 计划设计

- **目标设定**：使用AI工具辅助设定学习目标
- **内容规划**：规划学习内容和资源
- **方法选择**：选择适合的学习方法和策略
- **时间安排**：安排学习时间和进度

#### 3. 计划执行

- **学习提醒**：使用AI工具设置学习提醒和任务
- **进度跟踪**：跟踪学习进度和完成情况
- **内容推荐**：根据学习进度推荐相关内容
- **问题解决**：使用AI工具解决学习中遇到的问题

#### 4. 计划评估

- **进度评估**：评估学习进度和效果
- **调整优化**：根据评估结果调整学习计划
- **成果总结**：总结学习成果和收获
- **未来规划**：规划未来的学习方向和目标

### 案例：学习AI提示词工程的个性化学习计划

#### 1. 学习目标

- **长期目标**：成为提示词工程专家，能够设计有效的AI提示词
- **短期目标**：掌握提示词的基本结构和技巧，能够设计基础的提示词
- **具体目标**：在3个月内完成提示词工程的系统学习，能够设计专业级的提示词

#### 2. 学习内容

- **核心内容**：提示词的结构、技巧、最佳实践
- **辅助内容**：AI模型的工作原理、不同模型的特点
- **学习深度**：从基础到高级，涵盖理论和实践
- **内容组织**：先学习基础概念，再学习高级技巧，最后进行实践应用

#### 3. 学习方法

- **学习风格**：结合视觉、听觉和实践学习
- **学习策略**：理论学习 + 实践练习 + 反馈优化
- **学习工具**：AI聊天工具、提示词库、在线课程
- **学习环境**：安静的学习空间，固定的学习时间

#### 4. 学习时间

- **时间规划**：每周学习10小时，持续3个月
- **时间分配**：理论学习40%，实践练习50%，反馈优化10%
- **时间管理**：使用番茄工作法，避免学习疲劳
- **进度跟踪**：每周评估学习进度，调整学习计划

#### 5. 学习评估

- **评估方法**：实践项目、提示词设计挑战、知识测试
- **反馈机制**：使用AI工具评估提示词效果，获取反馈
- **调整策略**：根据评估结果调整学习内容和方法
- **成果展示**：创建提示词库，分享学习成果

![学习计划执行示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20execution%20of%20personalized%20learning%20plan%2C%20educational%20style&image_size=landscape_16_9)

### 实施步骤

1. **自我评估**：使用AI工具评估学习风格和知识水平
2. **目标设定**：设定具体、可衡量的学习目标
3. **内容规划**：规划学习内容和资源
4. **方法选择**：选择适合的学习方法和策略
5. **时间安排**：安排学习时间和进度
6. **计划执行**：按照计划开始学习
7. **进度跟踪**：定期跟踪学习进度
8. **评估调整**：根据评估结果调整学习计划
9. **成果总结**：总结学习成果和收获
10. **未来规划**：规划未来的学习方向

---

💡 **小提示**：个性化学习计划应该根据个人的实际情况和需求进行调整，保持灵活性和适应性。同时，要保持学习的动力和兴趣，享受学习的过程。

---

## 思考与讨论

### 1. 你如何设定有效的学习目标？

**示例想法**：
- "我设定SMART目标，确保目标具体、可衡量、可实现、相关、有时限。"
- "我将长期目标分解为短期目标，逐步实现。"
- "我根据个人兴趣和职业需求设定学习目标，保持学习的动力。"

### 2. 你如何选择适合自己的学习方法？

**示例想法**：
- "我根据自己的学习风格选择学习方法，比如视觉学习、听觉学习或实践学习。"
- "我尝试不同的学习方法，找到最适合自己的方式。"
- "我结合多种学习方法，提高学习效果。"

### 3. 你如何保持学习的动力和兴趣？

**示例想法**：
- "我设定明确的学习目标和奖励机制，保持学习的动力。"
- "我选择自己感兴趣的学习内容，保持学习的兴趣。"
- "我与他人分享学习成果，获得反馈和鼓励。"

---

## 第六章完成！

恭喜你完成了第六章的学习！现在你已经：

- **了解了学习原理**：学习了认知负荷理论、建构主义学习理论和个性化学习理论
- **掌握了知识获取方法**：学习了如何使用AI工具更高效地获取和管理知识
- **学会了概念理解技巧**：学习了如何使用AI工具深入理解复杂概念
- **了解了研究辅助方法**：学习了如何使用AI工具辅助研究工作
- **实践了个性化学习计划设计**：学习了如何设计和执行个性化学习计划

现在你已经成为AI辅助学习的专家！通过使用AI工具，你可以更高效地获取知识、理解概念、辅助研究，实现个性化学习，提高学习效果和效率。

---

### 章节回顾

**核心知识点**：
- 学习原理为AI辅助学习提供了理论基础
- AI工具可以帮助我们更高效地获取和管理知识
- AI工具可以帮助我们更深入地理解复杂概念
- AI工具可以成为研究的强大助手
- 个性化学习计划可以提高学习效果和效率

**重要提醒**：
- 了解学习原理，选择适合自己的学习方法
- 批判性地使用AI工具获取的信息
- 多维度思考，结合多种解释理解概念
- 保持学术诚信，正确使用AI辅助研究
- 保持学习的动力和兴趣，享受学习的过程
        `}]},em={id:7,title:"进阶提示词技巧",description:"学习高级提示词工程技巧，提高AI工具的输出质量和效果",icon:"message-square",sections:[{id:"7-1",title:"7.1 提示词工程原理",content:`
## 提示词工程原理

提示词工程是设计和优化与AI模型交互的提示词，以获得更准确、更有用的输出。了解提示词工程的原理可以帮助你设计更有效的提示词。

![提示词工程原理示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20engineering%20principles%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 提示词的基本结构

#### 1. 指令（Instruction）

- **作用**：明确告诉AI你希望它做什么
- **要素**：任务类型、具体要求、期望输出
- **示例**："请总结以下内容的要点："

#### 2. 上下文（Context）

- **作用**：提供AI需要理解的背景信息
- **要素**：相关数据、背景知识、参考资料
- **示例**：一段需要总结的文本

#### 3. 输入数据（Input Data）

- **作用**：提供AI需要处理的数据
- **要素**：原始数据、待处理内容、查询
- **示例**：用户的问题或需要分析的文本

#### 4. 输出格式（Output Format）

- **作用**：指定AI输出的格式和结构
- **要素**：格式要求、结构规范、输出长度
- **示例**："请以列表形式输出"

### 提示词工程的核心原理

#### 1. 明确性原则

- **具体明确**：提示词应该具体明确，避免模糊和歧义
- **详细描述**：提供足够的细节和上下文
- **期望明确**：明确表达期望的输出结果

#### 2. 相关性原则

- **内容相关**：提示词内容应该与任务相关
- **信息充足**：提供足够的相关信息
- **避免无关**：避免包含与任务无关的信息

#### 3. 结构化原则

- **层次清晰**：提示词应该层次清晰，逻辑连贯
- **结构合理**：使用合理的结构组织信息
- **重点突出**：突出重要的信息和要求

#### 4. 适应性原则

- **模型适应**：根据不同模型的特点调整提示词
- **任务适应**：根据不同任务的要求调整提示词
- **场景适应**：根据具体场景调整提示词

![提示词结构示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20structure%20with%20instruction%2C%20context%2C%20input%2C%20and%20output%20format%2C%20educational%20style&image_size=landscape_16_9)

### 提示词工程的心理学基础

#### 1. 框架效应

- **定义**：同一信息的不同表述方式会影响决策和判断
- **应用**：通过不同的表述方式引导AI的输出
- **示例**："请纠正以下错误" vs "请改进以下内容"

#### 2. 锚定效应

- **定义**：人们会根据初始信息（锚点）调整后续判断
- **应用**：在提示词中设置合适的锚点，引导AI的思考方向
- **示例**：提供高质量的示例作为锚点

#### 3. 认知负荷理论

- **定义**：人的认知资源是有限的，过多的信息会导致认知负荷过重
- **应用**：优化提示词长度和复杂度，避免认知负荷过重
- **示例**：将复杂任务分解为多个简单步骤

#### 4. 预期理论

- **定义**：人们对结果的预期会影响行为和决策
- **应用**：在提示词中明确表达对输出质量的预期
- **示例**："请提供专业、详细的回答"

---

💡 **小提示**：提示词工程是一个需要实践和经验的技能。通过不断尝试和调整，你会逐渐掌握如何设计有效的提示词。记住，好的提示词应该清晰、具体、有针对性。

---

## 思考与讨论

### 1. 你认为提示词工程的核心是什么？

**示例想法**：
- "我认为提示词工程的核心是清晰地表达意图，让AI准确理解你的需求。"
- "我认为提示词工程的核心是提供足够的上下文和信息，帮助AI做出正确的判断。"
- "我认为提示词工程的核心是根据不同的任务和模型特点，设计适合的提示词结构。"

### 2. 你在设计提示词时遇到的最大挑战是什么？

**示例想法**：
- "我遇到的最大挑战是如何提供足够的上下文，同时避免信息过载。"
- "我遇到的最大挑战是如何让AI理解我的具体需求，避免产生误解。"
- "我遇到的最大挑战是如何根据不同的模型特点调整提示词。"

### 3. 你认为提示词工程未来会如何发展？

**示例想法**：
- "我认为未来会出现更智能的提示词生成工具，帮助用户自动生成有效的提示词。"
- "我认为未来的AI模型会对提示词的依赖减少，能够更好地理解用户的意图。"
- "我认为提示词工程会成为一种专业技能，有专门的提示词工程师角色。"
        `},{id:"7-2",title:"7.2 基础提示词结构",content:`
## 基础提示词结构

设计有效的提示词需要遵循一定的结构和规范。本节将介绍基础提示词的结构和设计方法。

![基础提示词结构示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20basic%20prompt%20structure%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 标准提示词结构

#### 1. 角色设定

- **作用**：设定AI的角色和身份
- **要素**：角色名称、专业背景、职责范围
- **示例**："你是一位专业的市场营销专家，拥有10年的数字营销经验。"

#### 2. 任务描述

- **作用**：明确AI需要完成的任务
- **要素**：任务类型、具体要求、期望结果
- **示例**："请为一款新上市的智能手表设计一个社交媒体营销方案。"

#### 3. 上下文信息

- **作用**：提供AI需要理解的背景信息
- **要素**：产品信息、目标受众、市场环境
- **示例**："目标受众是25-35岁的都市白领，他们注重健康和时尚。"

#### 4. 输出要求

- **作用**：指定AI输出的格式和要求
- **要素**：格式要求、内容要求、长度要求
- **示例**："请以结构化的方式输出，包括目标、策略、执行计划和效果评估。"

#### 5. 示例（可选）

- **作用**：提供参考示例，引导AI的输出风格和内容
- **要素**：输入示例、输出示例、风格示例
- **示例**："参考以下示例格式：
目标：提高品牌知名度
策略：社交媒体内容营销
执行计划：每周发布3篇内容
效果评估：通过互动率和转化率衡量"

### 不同类型任务的提示词结构

#### 1. 信息提取任务

- **结构**：角色设定 + 任务描述 + 待提取文本 + 提取要求
- **示例**：
> 你是一位专业的信息提取专家。请从以下文本中提取所有提到的产品名称和价格：
> 文本：我们的产品包括A手机（2999元）、B平板（1999元）和C耳机（999元）。
> 要求：以列表形式输出产品名称和价格。

#### 2. 内容生成任务

- **结构**：角色设定 + 任务描述 + 主题/关键词 + 生成要求
- **示例**：
> 你是一位专业的文案撰写专家。请为一家咖啡店撰写一条吸引人的广告语，主题是"环境舒适"。
> 要求：简短有力，富有创意，能突出咖啡店的环境特色。

#### 3. 问题回答任务

- **结构**：角色设定 + 任务描述 + 问题 + 回答要求
- **示例**：
> 你是一位专业的技术支持专家。请回答以下问题："如何重置路由器？"
> 要求：步骤清晰，语言简洁，适合非技术用户。

#### 4. 分析评价任务

- **结构**：角色设定 + 任务描述 + 分析对象 + 分析要求
- **示例**：
> 你是一位专业的市场分析专家。请分析以下产品的市场前景：智能手环。
> 要求：从市场需求、竞争情况、发展趋势等方面进行分析。

![不同类型提示词结构示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20prompt%20structures%20for%20various%20tasks%2C%20educational%20style&image_size=landscape_16_9)

### 提示词长度和复杂度

#### 1. 长度原则

- **适度原则**：提示词长度应该适度，既不能太短也不能太长
- **任务相关**：根据任务的复杂度调整提示词长度
- **模型限制**：考虑模型的上下文窗口限制

#### 2. 复杂度管理

- **分层设计**：将复杂任务分解为多个简单步骤
- **信息组织**：有条理地组织信息，提高可读性
- **重点突出**：突出重要信息，避免无关细节

#### 3. 优化技巧

- **简洁明了**：使用简洁明了的语言
- **结构清晰**：使用清晰的结构和格式
- **避免重复**：避免重复信息，提高效率

---

💡 **小提示**：设计提示词时，要根据具体任务和模型特点调整结构和长度。记住，好的提示词应该既包含足够的信息，又不会过于冗长和复杂。

---

## 思考与讨论

### 1. 你认为一个好的提示词应该包含哪些要素？

**示例想法**：
- "我认为一个好的提示词应该包含明确的任务描述、足够的上下文信息和具体的输出要求。"
- "我认为一个好的提示词应该包含角色设定，让AI以合适的身份回应。"
- "我认为一个好的提示词应该结构清晰，逻辑连贯，重点突出。"

### 2. 你如何根据不同的任务类型调整提示词结构？

**示例想法**：
- "对于信息提取任务，我会重点提供待提取的文本和具体的提取要求。"
- "对于内容生成任务，我会重点提供主题、关键词和生成风格要求。"
- "对于问题回答任务，我会重点提供问题背景和回答的详细程度要求。"

### 3. 你如何平衡提示词的长度和信息量？

**示例想法**：
- "我会根据任务的复杂度调整提示词长度，确保包含足够的信息，同时避免过于冗长。"
- "我会使用结构化的格式组织信息，提高信息传递效率。"
- "我会重点突出关键信息，避免包含与任务无关的细节。"
        `},{id:"7-3",title:"7.3 高级提示技巧",content:`
## 高级提示技巧

掌握高级提示技巧可以帮助你更有效地与AI模型交互，获得更优质的输出。本节将介绍一些高级提示技巧。

![高级提示技巧示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20advanced%20prompt%20techniques%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 1. 角色扮演

#### 原理

- **定义**：让AI扮演特定的角色，以该角色的身份回应
- **作用**：提高输出的专业性和针对性
- **适用场景**：专业咨询、创意写作、模拟对话

#### 技巧

- **具体角色**：设定具体、详细的角色背景
- **专业领域**：明确角色的专业领域和经验
- **语言风格**：要求AI使用符合角色的语言风格

#### 示例

> 你是一位专业的营养师，拥有10年的临床营养经验。请为一位想要减肥的25岁女性设计一个一周的饮食计划。
> 要求：包含每日三餐的具体食谱，营养均衡，适合日常执行。

### 2. 思维链（Chain of Thought）

#### 原理

- **定义**：引导AI逐步思考问题，展示思考过程
- **作用**：提高复杂问题的解决能力和推理能力
- **适用场景**：数学问题、逻辑推理、复杂分析

#### 技巧

- **引导思考**：明确要求AI展示思考过程
- **分解步骤**：将复杂问题分解为多个步骤
- **详细解释**：要求AI详细解释每一步的思考

#### 示例

> 请解决以下数学问题，并详细展示你的思考过程：
> 问题：一个商店打折，所有商品都降价20%。如果一件商品的原价是150元，那么打折后的价格是多少？
> 要求：详细展示每一步的计算过程和思考逻辑。

### 3. 对比学习

#### 原理

- **定义**：提供对比示例，让AI理解差异和偏好
- **作用**：帮助AI理解用户的偏好和期望
- **适用场景**：风格调整、内容优化、偏好学习

#### 技巧

- **提供对比**：提供多个对比示例
- **明确偏好**：明确表达对某种风格或结果的偏好
- **迭代优化**：通过多次对比逐步优化输出

#### 示例

> 请为一家咖啡店写两条广告语，一条强调环境舒适，一条强调咖啡品质。
> 要求：对比两条广告语的风格和重点，突出各自的特色。

### 4. 条件指令

#### 原理

- **定义**：设定条件，让AI根据条件生成输出
- **作用**：提高输出的针对性和灵活性
- **适用场景**：个性化推荐、情境响应、条件决策

#### 技巧

- **明确条件**：清晰设定条件和场景
- **提供选择**：给AI提供多个选项
- **逻辑推理**：要求AI基于条件进行逻辑推理

#### 示例

> 请根据以下条件，为一位顾客推荐菜品：
> 条件：
> - 顾客是一位素食者
> - 顾客喜欢辛辣食物
> - 顾客预算在50元以内
> 要求：推荐2-3道菜，并说明推荐理由。

### 5. 少样本学习（Few-shot Learning）

#### 原理

- **定义**：提供少量示例，让AI学习模式和风格
- **作用**：提高AI对特定任务的理解和执行能力
- **适用场景**：格式转换、风格模仿、模式学习

#### 技巧

- **提供示例**：提供2-3个高质量的示例
- **明确模式**：让AI识别示例中的模式和规律
- **保持一致性**：确保示例之间的一致性和代表性

#### 示例

> 请按照以下示例的格式，将中文句子翻译成英文：
> 示例1：
> 中文：我爱学习。
> 英文：I love learning.
> 示例2：
> 中文：今天天气很好。
> 英文：The weather is nice today.
> 请翻译：
> 中文：我喜欢人工智能。

![高级提示技巧应用示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20application%20of%20advanced%20prompt%20techniques%2C%20educational%20style&image_size=landscape_16_9)

### 6. 元提示（Meta Prompt）

#### 原理

- **定义**：设计一个通用的提示框架，用于指导AI的行为
- **作用**：提高提示词的一致性和可复用性
- **适用场景**：复杂任务、多步骤任务、标准化流程

#### 技巧

- **设定规则**：设定通用的规则和指导原则
- **明确流程**：明确任务的执行流程和步骤
- **提供模板**：提供可复用的提示模板

#### 示例

> 你是一个专业的任务助手，在执行任务时请遵循以下规则：
> 1. 仔细理解用户的需求和上下文
> 2. 分析任务的类型和要求
> 3. 制定详细的执行计划
> 4. 按照计划逐步执行任务
> 5. 检查输出的质量和完整性
> 现在请帮我规划一次周末旅行。

### 7. 约束提示

#### 原理

- **定义**：设定约束条件，限制AI的输出范围
- **作用**：提高输出的相关性和准确性
- **适用场景**：特定领域任务、格式要求严格的任务、内容敏感的任务

#### 技巧

- **明确约束**：清晰设定约束条件
- **边界定义**：明确输出的边界和范围
- **合规要求**：设定合规性和道德要求

#### 示例

> 请为一家科技公司写一条招聘广告，要求：
> 1. 长度不超过100字
> 2. 突出公司的创新文化
> 3. 不使用任何技术术语
> 4. 包含薪资范围（15-20K）

---

💡 **小提示**：高级提示技巧需要根据具体任务和模型特点灵活运用。通过组合使用不同的技巧，你可以获得更优质、更符合需求的输出。

---

## 思考与讨论

### 1. 你最常用的高级提示技巧是什么？为什么？

**示例想法**：
- "我最常用的是角色扮演技巧，因为它可以让AI以专业的身份回应，提高输出的质量。"
- "我最常用的是思维链技巧，因为它可以帮助AI解决复杂问题，展示思考过程。"
- "我最常用的是少样本学习技巧，因为它可以让AI快速学习特定的模式和风格。"

### 2. 你如何根据不同的AI模型调整提示技巧？

**示例想法**：
- "对于大型语言模型，我会使用更复杂的提示结构和高级技巧。"
- "对于小型模型，我会使用更简单、更直接的提示方式。"
- "对于特定领域的模型，我会使用更专业、更针对性的提示语言。"

### 3. 你认为未来提示词工程会如何发展？

**示例想法**：
- "我认为未来会出现更智能的提示词生成工具，帮助用户自动生成有效的提示词。"
- "我认为未来的AI模型会对提示词的依赖减少，能够更好地理解用户的意图。"
- "我认为提示词工程会成为一种专业技能，有专门的提示词工程师角色。"
        `},{id:"7-4",title:"7.4 领域特定提示",content:`
## 领域特定提示

不同领域的任务需要不同的提示策略。本节将介绍一些常见领域的特定提示技巧。

![领域特定提示示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20domain-specific%20prompt%20strategies%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 1. 学术研究领域

#### 特点

- **专业性强**：需要专业的学术语言和格式
- **准确性要求高**：需要准确的信息和引用
- **结构规范**：需要遵循学术论文的结构规范

#### 提示策略

- **角色设定**：设定学术专家角色
- **详细要求**：明确学术标准和格式要求
- **引用规范**：要求正确引用和参考文献

#### 示例

> 你是一位专业的学术研究人员，擅长人工智能领域的研究。请帮我撰写一篇关于大语言模型伦理问题的研究摘要。
> 要求：
> 1. 包含研究背景、方法、结果和结论
> 2. 使用学术语言，逻辑清晰
> 3. 长度控制在300字左右
> 4. 引用至少2篇相关文献

### 2. 创意写作领域

#### 特点

- **创造性强**：需要丰富的想象力和创造力
- **风格多样**：需要适应不同的写作风格
- **情感表达**：需要表达情感和氛围

#### 提示策略

- **风格设定**：明确写作风格和氛围
- **详细场景**：提供详细的场景和背景信息
- **角色刻画**：要求生动的角色刻画和情感表达

#### 示例

> 你是一位专业的科幻小说作家，擅长创作硬科幻作品。请帮我写一个关于未来人工智能与人类关系的短篇故事开头。
> 要求：
> 1. 设定在2050年的未来世界
> 2. 包含至少两个主要角色
> 3. 营造紧张而神秘的氛围
> 4. 开头部分要引人入胜，留下悬念

### 3. 商业营销领域

#### 特点

- **目标明确**：需要明确的营销目标和受众
- **说服力强**：需要有说服力的内容
- **转化导向**：需要促进目标受众的行动

#### 提示策略

- **目标设定**：明确营销目标和目标受众
- **价值主张**：突出产品或服务的价值主张
- **行动号召**：包含明确的行动号召

#### 示例

> 你是一位专业的市场营销专家，擅长数字营销。请帮我为一款新上市的智能手表设计一条社交媒体广告文案。
> 要求：
> 1. 目标受众是25-35岁的都市白领
> 2. 突出产品的健康监测和时尚设计特点
> 3. 语言生动有趣，符合社交媒体风格
> 4. 包含明确的购买链接和优惠信息

### 4. 技术开发领域

#### 特点

- **逻辑严谨**：需要严谨的逻辑和代码结构
- **技术准确**：需要准确的技术知识和代码
- **问题解决**：需要有效的问题解决思路

#### 提示策略

- **技术角色**：设定技术专家角色
- **具体问题**：详细描述技术问题和需求
- **代码规范**：要求符合技术规范和最佳实践

#### 示例

> 你是一位专业的Python开发者，擅长数据分析。请帮我写一个Python函数，用于计算一组数据的移动平均值。
> 要求：
> 1. 函数接受两个参数：数据列表和窗口大小
> 2. 处理边界情况，确保函数的鲁棒性
> 3. 包含详细的注释和文档字符串
> 4. 提供使用示例

### 5. 教育教学领域

#### 特点

- **易懂性**：需要通俗易懂的语言
- **结构化**：需要结构化的内容组织
- **互动性**：需要促进学习和思考

#### 提示策略

- **教师角色**：设定教育者角色
- **学习目标**：明确学习目标和内容范围
- **教学方法**：采用适合的教学方法和步骤

#### 示例

> 你是一位专业的数学教师，擅长初中数学教学。请帮我设计一个关于二次函数的教学计划。
> 要求：
> 1. 适合初中学生的认知水平
> 2. 包含概念讲解、例题分析和练习题目
> 3. 采用生动有趣的教学方法
> 4. 帮助学生理解二次函数的实际应用

![领域特定提示应用示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20application%20of%20domain-specific%20prompts%20in%20different%20fields%2C%20educational%20style&image_size=landscape_16_9)

### 6. 法律咨询领域

#### 特点

- **专业性强**：需要专业的法律知识和术语
- **准确性要求高**：需要准确的法律解释和建议
- **合规性**：需要符合法律法规要求

#### 提示策略

- **法律专家角色**：设定法律专家角色
- **具体问题**：详细描述法律问题和背景
- **法律依据**：要求引用相关法律法规

#### 示例

> 你是一位专业的律师，擅长劳动合同法。请帮我分析以下劳动合同问题：
> 问题：公司在员工试用期内无故解除劳动合同，员工是否可以要求赔偿？
> 要求：
> 1. 基于中国劳动合同法进行分析
> 2. 详细解释相关法律条款
> 3. 提供具体的法律建议
> 4. 说明可能的法律程序和注意事项

### 7. 医疗健康领域

#### 特点

- **专业性强**：需要专业的医学知识和术语
- **准确性要求高**：需要准确的健康信息和建议
- **负责任**：需要负责任的健康指导

#### 提示策略

- **医疗专家角色**：设定医疗专家角色
- **具体症状**：详细描述症状和健康问题
- **专业建议**：要求基于医学知识的专业建议

#### 示例

> 你是一位专业的营养师，擅长健康饮食指导。请帮我设计一个适合高血压患者的一周饮食计划。
> 要求：
> 1. 符合高血压患者的饮食原则（低盐、低脂、高纤维）
> 2. 包含每日三餐的具体食谱
> 3. 营养均衡，适合日常执行
> 4. 提供饮食建议和注意事项

---

💡 **小提示**：领域特定提示需要结合具体领域的专业知识和特点。在设计提示词时，要充分考虑领域的专业要求和规范，以获得更准确、更专业的输出。

---

## 思考与讨论

### 1. 你最常使用AI工具的领域是什么？你是如何设计提示词的？

**示例想法**：
- "我最常使用AI工具进行创意写作，我会设定具体的写作风格和场景，提供详细的背景信息。"
- "我最常使用AI工具进行技术开发，我会设定技术专家角色，详细描述技术问题和需求。"
- "我最常使用AI工具进行学术研究，我会设定学术专家角色，明确学术标准和格式要求。"

### 2. 你认为不同领域的提示词有什么共同特点？

**示例想法**：
- "我认为不同领域的提示词都需要清晰的任务描述和具体的输出要求。"
- "我认为不同领域的提示词都需要提供足够的上下文信息。"
- "我认为不同领域的提示词都需要根据具体领域的特点进行调整。"

### 3. 你如何学习和掌握不同领域的提示词技巧？

**示例想法**：
- "我会通过实践和尝试，不断调整和优化提示词。"
- "我会学习和参考领域专家的提示词设计方法。"
- "我会关注AI模型的更新和改进，调整提示词策略。"
        `},{id:"7-5",title:"7.5 实践：创建高效提示词模板",content:`
## 实践：创建高效提示词模板

创建高效的提示词模板可以帮助你更快速、更一致地与AI模型交互。本节将介绍如何创建和使用提示词模板。

![提示词模板示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20template%20creation%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 提示词模板的优势

#### 1. 一致性

- **输出一致**：确保AI输出的一致性和质量
- **风格统一**：保持统一的语言风格和格式
- **标准规范**：遵循行业或领域的标准规范

#### 2. 效率

- **节省时间**：减少重复设计提示词的时间
- **快速启动**：快速启动常见任务
- **批量处理**：便于批量处理类似任务

#### 3. 可维护性

- **易于更新**：便于更新和优化提示词
- **版本控制**：可以进行版本控制和管理
- **知识积累**：积累和分享提示词知识

### 提示词模板的结构

#### 1. 基本结构

- **角色设定**：AI的角色和身份
- **任务描述**：具体的任务和要求
- **上下文信息**：背景信息和相关数据
- **输出要求**：格式和内容要求
- **示例**：参考示例（可选）

#### 2. 变量部分

- **占位符**：使用占位符表示需要填充的内容
- **变量类型**：定义变量的类型和格式
- **默认值**：为变量设置默认值（可选）

#### 3. 注释部分

- **使用说明**：模板的使用方法和注意事项
- **变量解释**：变量的含义和填充要求
- **示例**：模板使用的示例

### 创建提示词模板的步骤

#### 1. 分析任务

- **任务类型**：分析任务的类型和特点
- **核心需求**：识别任务的核心需求和要求
- **输出格式**：确定期望的输出格式和结构

#### 2. 设计模板结构

- **基本结构**：设计模板的基本结构和组成部分
- **变量定义**：定义需要填充的变量和占位符
- **注释说明**：添加使用说明和注释

#### 3. 测试和优化

- **测试模板**：使用不同的输入测试模板
- **收集反馈**：收集使用反馈和建议
- **优化调整**：根据反馈优化和调整模板

#### 4. 存储和管理

- **组织存储**：有组织地存储和管理模板
- **版本控制**：进行版本控制和更新
- **分享协作**：与团队分享和协作使用

### 常见提示词模板示例

#### 1. 内容创作模板

'''
# 内容创作模板

## 角色设定
你是一位专业的内容创作者，擅长\${content_type}创作。

## 任务描述
请为\${target_audience}创作一篇关于\${topic}的\${content_type}。

## 上下文信息
- 主题：\${topic}
- 目标受众：\${target_audience}
- 核心信息：\${key_points}
- 风格要求：\${style_requirements}

## 输出要求
- 长度：\${length}
- 格式：\${format}
- 语言风格：\${language_style}
- 特殊要求：\${special_requirements}
'''

#### 2. 问题回答模板

'''
# 问题回答模板

## 角色设定
你是一位专业的\${domain}专家，拥有\${experience}经验。

## 任务描述
请回答以下关于\${topic}的问题：
\${question}

## 上下文信息
- 问题背景：\${background}
- 相关信息：\${relevant_info}
- 目标受众：\${audience}

## 输出要求
- 详细程度：\${detail_level}
- 格式：\${format}
- 语言风格：\${language_style}
- 特殊要求：\${special_requirements}
'''

#### 3. 分析评价模板

'''
# 分析评价模板

## 角色设定
你是一位专业的\${domain}分析师，擅长\${analysis_type}分析。

## 任务描述
请对\${subject}进行\${analysis_type}分析。

## 上下文信息
- 分析对象：\${subject}
- 分析目的：\${purpose}
- 相关数据：\${data}
- 背景信息：\${background}

## 输出要求
- 分析角度：\${angles}
- 输出格式：\${format}
- 详细程度：\${detail_level}
- 特殊要求：\${special_requirements}
'''

![提示词模板使用示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20template%20usage%20process%2C%20educational%20style&image_size=landscape_16_9)

### 提示词模板的使用技巧

#### 1. 灵活调整

- **根据任务调整**：根据具体任务调整模板内容
- **根据模型调整**：根据不同AI模型的特点调整模板
- **根据反馈调整**：根据AI的输出反馈调整模板

#### 2. 变量管理

- **清晰定义**：清晰定义变量的含义和要求
- **合理默认值**：为变量设置合理的默认值
- **验证输入**：验证变量输入的有效性

#### 3. 模板组合

- **模块化设计**：将模板设计为模块化结构
- **组合使用**：根据需要组合使用不同模板
- **扩展定制**：根据特殊需求扩展和定制模板

#### 4. 持续优化

- **收集反馈**：收集模板使用的反馈和效果
- **定期更新**：定期更新和优化模板
- **学习最佳实践**：学习和应用提示词工程的最佳实践

### 案例：创建内容创作提示词模板

#### 1. 分析任务

- **任务类型**：内容创作（博客文章）
- **核心需求**：创建高质量、有吸引力的博客文章
- **输出格式**：结构化的博客文章格式

#### 2. 设计模板

'''
# 博客文章创作模板

## 角色设定
你是一位专业的博客作者，擅长\${niche}领域的内容创作。

## 任务描述
请为\${target_audience}创作一篇关于\${topic}的博客文章。

## 上下文信息
- 主题：\${topic}
- 目标受众：\${target_audience}
- 核心要点：\${key_points}
- 风格要求：\${style}
- 参考资料：\${references}

## 输出要求
- 长度：\${word_count}字
- 格式：包含标题、引言、正文（至少3个小节）、结论
- 语言风格：\${language_style}
- 特殊要求：\${special_requirements}
'''

#### 3. 测试和优化

- **测试填充**：使用不同的主题和受众测试模板
- **收集反馈**：收集读者对生成内容的反馈
- **优化调整**：根据反馈调整模板结构和要求

#### 4. 存储和使用

- **组织存储**：将模板存储在知识库中
- **版本控制**：记录模板的更新历史
- **团队分享**：与团队成员分享和协作使用

---

💡 **小提示**：创建提示词模板是一个持续改进的过程。通过不断测试和优化，你可以创建出更有效的提示词模板，提高与AI模型交互的效率和质量。

---

## 思考与讨论

### 1. 你认为提示词模板的最大优势是什么？

**示例想法**：
- "我认为提示词模板的最大优势是提高效率，减少重复设计提示词的时间。"
- "我认为提示词模板的最大优势是确保输出的一致性和质量。"
- "我认为提示词模板的最大优势是便于团队协作和知识共享。"

### 2. 你如何设计适合自己需求的提示词模板？

**示例想法**：
- "我会分析自己的常见任务类型，设计相应的模板结构。"
- "我会根据不同任务的特点，定义合理的变量和占位符。"
- "我会通过实践测试和优化模板，提高其有效性。"

### 3. 你认为提示词模板未来会如何发展？

**示例想法**：
- "我认为未来会出现更智能的提示词模板生成工具，帮助用户自动创建和优化模板。"
- "我认为未来的AI模型会支持更复杂、更灵活的模板结构。"
- "我认为提示词模板会成为一种标准化的工具，被广泛应用于各种领域。"

---

## 第七章完成！

恭喜你完成了第七章的学习！现在你已经：

- **了解了提示词工程原理**：学习了提示词的基本结构和核心原理
- **掌握了基础提示词结构**：学习了标准提示词结构和不同任务的提示词设计方法
- **学会了高级提示技巧**：学习了角色扮演、思维链、对比学习等高级提示技巧
- **了解了领域特定提示**：学习了不同领域的提示词策略
- **实践了提示词模板创建**：学习了如何创建和使用高效的提示词模板

现在你已经成为提示词工程的专家！通过使用这些技巧和模板，你可以更有效地与AI模型交互，获得更优质、更符合需求的输出。

---

### 章节回顾

**核心知识点**：
- 提示词工程是设计和优化与AI模型交互的提示词
- 有效的提示词需要清晰的结构和明确的要求
- 高级提示技巧可以显著提高AI的输出质量
- 不同领域的任务需要不同的提示策略
- 提示词模板可以提高效率和一致性

**重要提醒**：
- 提示词工程是一个需要实践和经验的技能
- 根据具体任务和模型特点调整提示词策略
- 不断测试和优化提示词，提高其有效性
- 学习和应用提示词工程的最佳实践
- 分享和协作，共同提高提示词工程的水平
        `}]},tm={id:8,title:"AI工具整合与高级应用",description:"学习如何整合不同AI工具，构建个性化AI工作流，实现更高效的AI应用",icon:"zap",sections:[{id:"8-1",title:"8.1 AI工具的整合使用",content:`
## AI工具的整合使用

单一的AI工具虽然强大，但通过整合不同的AI工具，你可以创造出更强大的效果。本章将学习如何将不同的AI工具组合使用，发挥它们的最大价值。

![AI工具整合示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20integration%20of%20different%20AI%20tools%20working%20together%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 工具整合的优势

将不同的AI工具整合使用有很多优势。

#### 1. 功能互补

- **大语言模型**：擅长文字处理和知识问答
- **图像生成工具**：擅长创建视觉内容
- **语音工具**：擅长处理音频相关任务
- **视频工具**：擅长处理视频内容
- **代码工具**：擅长编程相关任务

通过整合这些工具，你可以完成更复杂的任务，如先使用大语言模型生成内容，然后用图像生成工具为其创建配图，最后用视频工具制作成视频。

#### 2. 效率提升

- **自动化工作流**：减少人工操作，提高效率
- **减少重复劳动**：避免在不同工具间重复输入相同的信息
- **快速迭代**：通过工具间的配合快速改进内容

#### 3. 创意增强

- **跨领域灵感**：不同工具的输出可以相互启发
- **多维度表达**：同一内容可以通过不同形式表达
- **创新组合**：创造出单一工具无法实现的效果

![工具整合优势示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20benefits%20of%20AI%20tool%20integration%20like%20efficiency%20and%20creativity%2C%20educational%20style&image_size=landscape_16_9)

### 常见的工具整合场景

以下是一些常见的AI工具整合使用场景。

#### 1. 内容创作工作流

**流程**：
1. 使用大语言模型生成内容大纲和初稿
2. 使用图像生成工具创建相关配图
3. 使用视频工具制作成视频内容
4. 使用语音工具为视频添加配音

**应用示例**：制作一个关于AI工具使用的教程视频

#### 2. 设计工作流

**流程**：
1. 使用大语言模型生成设计概念和创意
2. 使用图像生成工具创建设计草稿
3. 使用设计工具（如Adobe Firefly）优化图像
4. 使用大语言模型生成设计说明和文案

**应用示例**：设计一个产品宣传海报

#### 3. 研究工作流

**流程**：
1. 使用大语言模型生成研究问题和假设
2. 使用搜索工具收集相关资料
3. 使用大语言模型分析和总结资料
4. 使用数据可视化工具呈现研究结果

**应用示例**：进行市场趋势分析

### 工具整合的实施步骤

实施工具整合需要遵循一定的步骤。

#### 1. 明确目标

- **确定任务**：明确要完成的具体任务
- **设定目标**：设定任务的具体目标和要求
- **评估需求**：评估需要哪些AI工具来完成任务

#### 2. 选择工具

- **工具评估**：评估不同工具的特点和优势
- **工具选择**：选择最适合任务的工具组合
- **工具学习**：学习如何使用所选工具

#### 3. 设计工作流

- **流程设计**：设计工具使用的具体流程
- **顺序安排**：安排工具使用的最佳顺序
- **接口设计**：设计工具间的信息传递方式

#### 4. 执行和优化

- **执行工作流**：按照设计的流程执行任务
- **监控过程**：监控每个步骤的执行情况
- **优化调整**：根据执行结果调整工作流

![工具整合步骤示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20for%20AI%20tool%20integration%20from%20goal%20setting%20to%20execution%2C%20educational%20style&image_size=landscape_16_9)

### 工具整合的最佳实践

以下是一些工具整合的最佳实践。

#### 1. 从小规模开始

- **先尝试简单任务**：从简单的任务开始练习工具整合
- **逐步增加复杂度**：随着熟练度提高，逐步增加任务复杂度
- **记录经验**：记录成功和失败的经验，不断改进

#### 2. 建立标准流程

- **创建模板**：为常见任务创建标准化的工作流程模板
- **文档记录**：详细记录工作流程的每个步骤
- **版本控制**：对工作流程进行版本控制，便于改进

#### 3. 保持灵活性

- **适应变化**：根据任务需求调整工作流程
- **尝试新工具**：关注新出现的AI工具，及时更新工作流程
- **混合使用**：根据具体情况混合使用不同的工具组合

---

💡 **小提示**：工具整合的关键是理解每个工具的优势和局限性，然后根据任务需求选择最合适的工具组合。记住，工具是为任务服务的，不是为了使用工具而使用工具。

---

## 思考与讨论

### 1. 你最想整合哪些AI工具？为什么？

**示例想法**：
- "我想整合大语言模型和图像生成工具，这样可以快速创建图文并茂的内容。"
- "我想整合语音工具和视频工具，用于创建有声视频内容。"
- "我想整合代码工具和大语言模型，用于更高效地开发软件。"

### 2. 你认为工具整合中最大的挑战是什么？

**示例想法**：
- "我觉得最大的挑战是如何在不同工具间传递信息，确保信息的一致性。"
- "我担心工具整合会增加复杂性，反而降低效率。"
- "我觉得学习多个工具的使用方法需要时间和精力。"

### 3. 你希望未来AI工具在整合方面有哪些改进？

**示例想法**：
- "我希望未来的AI工具能提供更便捷的API接口，便于工具间的集成。"
- "我希望看到更多的集成平台，将多种AI工具整合在一个界面中。"
- "我希望AI工具能更智能地相互配合，自动完成一些整合任务。"
        `},{id:"8-2",title:"8.2 高级提示词工程",content:`
## 高级提示词工程

提示词是与AI工具交流的桥梁，好的提示词可以显著提高AI的输出质量。本章将学习高级提示词工程技巧，帮助你更有效地与AI工具交流。

![提示词工程示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20advanced%20prompt%20engineering%20with%20AI%20tools%2C%20educational%20style&image_size=landscape_16_9)

### 提示词的结构与组成

有效的提示词通常包含以下几个部分：

#### 1. 指令（Instruction）

- **明确任务**：清晰地告诉AI你希望它做什么
- **具体要求**：详细说明你对输出的要求
- **期望结果**：描述你期望的最终结果

#### 2. 上下文（Context）

- **背景信息**：提供必要的背景信息
- **相关数据**：提供与任务相关的数据
- **参考资料**：提供参考资料或示例

#### 3. 约束（Constraints）

- **格式要求**：指定输出的格式
- **风格要求**：指定输出的风格
- **长度要求**：指定输出的长度
- **内容限制**：指定内容的限制条件

#### 4. 示例（Examples）

- **输入输出示例**：提供输入和输出的示例
- **风格示例**：提供风格参考示例
- **结构示例**：提供结构参考示例

![提示词结构示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20structure%20with%20instruction%2C%20context%2C%20constraints%2C%20and%20examples%2C%20educational%20style&image_size=landscape_16_9)

### 高级提示词技巧

#### 1. 角色扮演

- **指定角色**：让AI扮演特定的角色，如专家、教师、顾问等
- **设定背景**：为角色设定具体的背景和专业领域
- **明确目标**：明确角色的任务和目标

**示例**：
> 你是一位专业的市场营销专家，拥有10年的数字营销经验。请为一款新上市的智能手表设计一个社交媒体营销方案，目标受众是25-35岁的都市白领。

#### 2. 思维链（Chain of Thought）

- **引导思考**：引导AI逐步思考问题
- **分解任务**：将复杂任务分解为多个步骤
- **展示过程**：让AI展示其思考过程

**示例**：
> 请解决以下数学问题，并详细展示你的思考过程：
> 一个商店打折，所有商品都降价20%。如果一件商品的原价是150元，那么打折后的价格是多少？

#### 3. 对比学习

- **提供对比**：提供对比示例，让AI理解差异
- **明确偏好**：明确表达你对某种风格或结果的偏好
- **迭代优化**：通过多次对比，逐步优化输出

**示例**：
> 请为一家咖啡店写两条广告语，一条强调环境舒适，一条强调咖啡品质。

#### 4. 条件指令

- **设定条件**：设定AI输出的条件
- **提供选择**：给AI提供多个选项，让它根据条件选择
- **逻辑推理**：要求AI基于条件进行逻辑推理

**示例**：
> 请根据以下条件，为一家餐厅推荐菜品：
> - 顾客是一位素食者
> - 顾客喜欢辛辣食物
> - 顾客预算在50元以内

### 提示词优化策略

#### 1. 迭代改进

- **分析反馈**：分析AI的输出，找出问题所在
- **调整提示词**：根据分析结果调整提示词
- **测试优化**：通过多次测试优化提示词

#### 2. 精确描述

- **具体细节**：提供具体的细节和要求
- **避免模糊**：避免使用模糊的描述和要求
- **明确边界**：明确任务的边界和限制

#### 3. 结构优化

- **层次清晰**：使用清晰的层次结构组织提示词
- **重点突出**：突出重要的要求和信息
- **逻辑连贯**：保持提示词的逻辑连贯性

![提示词优化示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20prompt%20optimization%20process%20with%20iterative%20improvement%2C%20educational%20style&image_size=landscape_16_9)

### 不同AI工具的提示词特点

不同类型的AI工具对提示词有不同的要求。

#### 1. 大语言模型

- **详细指令**：需要详细的指令和上下文
- **格式要求**：可以指定具体的输出格式
- **思考过程**：可以要求展示思考过程

#### 2. 图像生成工具

- **视觉描述**：需要详细的视觉描述
- **风格指定**：需要明确指定艺术风格
- **构图要求**：可以指定构图和视角

#### 3. 语音工具

- **语音特征**：需要描述语音的特征
- **情感要求**：需要指定语音的情感
- **语速节奏**：可以指定语速和节奏

#### 4. 视频工具

- **场景描述**：需要详细的场景描述
- **动作要求**：需要描述动作和情节
- **风格指定**：需要指定视频风格

---

💡 **小提示**：提示词工程是一个需要实践和经验的技能。通过不断尝试和调整，你会逐渐掌握如何编写有效的提示词。记住，好的提示词应该清晰、具体、有针对性。

---

## 思考与讨论

### 1. 你觉得编写好的提示词最重要的是什么？

**示例想法**：
- "我觉得最重要的是明确具体的要求，让AI知道你想要什么。"
- "我认为提供足够的上下文信息很重要，这样AI才能更好地理解任务。"
- "我觉得设定合适的角色和场景很重要，这样AI的输出会更符合预期。"

### 2. 你在编写提示词时遇到过什么困难？

**示例想法**：
- "我经常不知道如何详细描述我的需求，导致AI的输出不符合预期。"
- "我发现有时候提供太多信息反而会让AI混淆，不知道重点是什么。"
- "我在为图像生成工具编写提示词时，很难用文字准确描述我想要的视觉效果。"

### 3. 你有什么提示词编写的技巧可以分享？

**示例想法**：
- "我会先写出基本需求，然后逐步添加细节，直到AI的输出符合我的预期。"
- "我会使用角色扮演的方法，让AI以特定专家的身份回答问题，这样输出质量会更高。"
- "我会为复杂任务创建结构化的提示词，包括背景、目标、要求和示例。"
        `},{id:"8-3",title:"8.3 AI工具在专业领域的应用",content:`
## AI工具在专业领域的应用

AI工具在各个专业领域都有广泛的应用，本章将介绍AI工具在一些主要专业领域的应用案例和最佳实践。

![AI专业应用示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20applications%20in%20various%20professional%20fields%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 1. 教育领域

AI工具在教育领域有很多应用，可以帮助教师提高教学效率，帮助学生更好地学习。

#### 应用场景

- **个性化学习**：根据学生的学习进度和风格，定制个性化学习计划
- **智能辅导**：回答学生的问题，提供学习指导
- **自动评分**：自动批改作业和考试，减轻教师负担
- **内容生成**：生成教学材料和练习题目
- **学习分析**：分析学生的学习数据，提供改进建议

#### 工具推荐

- **大语言模型**：用于智能辅导和内容生成
- **教育AI平台**：如Coursera、Khan Academy的AI功能
- **自适应学习系统**：根据学生表现调整内容

#### 案例示例

**智能辅导系统**：
- **功能**：使用大语言模型创建智能辅导系统，回答学生的问题
- **优势**：24/7 availability，个性化回答，即时反馈
- **应用**：帮助学生解决作业问题，解释复杂概念

![教育领域AI应用示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20in%20education%20with%20personalized%20learning%20and%20intelligent%20tutoring%2C%20educational%20style&image_size=landscape_16_9)

### 2. 医疗健康领域

AI工具在医疗健康领域的应用正在改变医疗服务的提供方式。

#### 应用场景

- **疾病诊断**：辅助医生进行疾病诊断，提高诊断准确率
- **医学影像分析**：分析X光、CT、MRI等医学影像
- **药物研发**：加速药物研发过程，降低研发成本
- **患者管理**：管理患者信息，提供个性化治疗方案
- **健康监测**：监测患者健康状况，预测健康风险

#### 工具推荐

- **医疗AI平台**：如IBM Watson Health
- **医学影像AI**：如Arterys、Enlitic
- **健康监测AI**：如Apple Health、Fitbit

#### 案例示例

**医学影像分析**：
- **功能**：使用AI分析医学影像，识别异常情况
- **优势**：提高诊断速度和准确率，减少漏诊
- **应用**：检测肺癌、乳腺癌等疾病的早期迹象

### 3. 金融领域

AI工具在金融领域的应用正在改变金融服务的提供方式。

#### 应用场景

- **风险评估**：评估贷款和投资风险
- ** fraud detection**：检测欺诈行为和异常交易
- **投资分析**：分析市场趋势，提供投资建议
- **客户服务**：提供智能客户服务，回答客户问题
- **自动化交易**：执行自动化交易策略

#### 工具推荐

- **金融AI平台**：如Kensho、Ayasdi
- **交易AI**：如Quantopian、Numerai
- **风险评估AI**：如ZestFinance

#### 案例示例

**风险评估系统**：
- **功能**：使用AI评估贷款申请人的信用风险
- **优势**：更准确的风险评估，更快的审批流程
- **应用**：银行贷款审批，信用卡申请评估

### 4. 市场营销领域

AI工具在市场营销领域的应用正在改变营销策略的制定和执行方式。

#### 应用场景

- **市场分析**：分析市场趋势和竞争对手
- **客户分析**：分析客户行为和偏好
- **内容生成**：生成营销文案和广告内容
- **个性化营销**：提供个性化的营销内容和推荐
- **营销效果分析**：分析营销活动的效果

#### 工具推荐

- **营销AI平台**：如HubSpot、Marketo
- **内容生成AI**：如Jasper、Copy.ai
- **客户分析AI**：如Amplitude、Mixpanel

#### 案例示例

**个性化营销系统**：
- **功能**：使用AI分析客户数据，提供个性化的营销内容
- **优势**：提高营销效果，增加客户转化率
- **应用**：电商推荐系统，个性化邮件营销

![市场营销AI应用示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20in%20marketing%20with%20personalized%20content%20and%20customer%20analysis%2C%20educational%20style&image_size=landscape_16_9)

### 5. 创意产业

AI工具在创意产业的应用正在为创意工作者提供新的灵感和工具。

#### 应用场景

- **内容创作**：生成文章、故事、诗歌等内容
- **设计辅助**：辅助设计工作，提供设计灵感
- **音乐创作**：生成音乐和音效
- **视频制作**：辅助视频制作，生成视频内容
- **游戏开发**：辅助游戏设计和开发

#### 工具推荐

- **创意AI平台**：如MidJourney、DALL·E
- **音乐AI**：如AIVA、Amper Music
- **视频AI**：如Runway ML、Synthesia

#### 案例示例

**创意设计辅助**：
- **功能**：使用AI生成设计灵感和初步设计
- **优势**：提供新的创意方向，加速设计过程
- **应用**：品牌设计，产品设计，广告设计

### 6. 法律领域

AI工具在法律领域的应用正在改变法律服务的提供方式。

#### 应用场景

- **法律文书生成**：生成法律文书和合同
- **案例分析**：分析法律案例和判例
- **法律研究**：辅助法律研究和文献检索
- **合同审查**：审查合同条款，识别风险
- **法律咨询**：提供初步的法律咨询

#### 工具推荐

- **法律AI平台**：如Ross Intelligence、LawGeex
- **合同分析AI**：如Kira Systems、eBrevia
- **法律研究AI**：如Ravel Law、Fastcase

#### 案例示例

**合同审查系统**：
- **功能**：使用AI审查合同条款，识别潜在风险
- **优势**：提高审查速度和准确率，减少法律风险
- **应用**：企业合同审查，法律尽职调查

---

💡 **小提示**：在专业领域使用AI工具时，要确保遵守相关的法律法规和伦理规范。同时，AI工具应该作为专业人士的辅助工具，而不是替代品。

---

## 思考与讨论

### 1. 你所在的专业领域如何使用AI工具？

**示例想法**：
- "在教育领域，我们使用AI工具来辅助教学，如智能批改作业和个性化学习推荐。"
- "在市场营销领域，我们使用AI工具来分析客户数据和生成营销内容。"
- "在软件开发领域，我们使用AI代码工具来提高编程效率。"

### 2. 你认为AI工具在专业领域的最大优势是什么？

**示例想法**：
- "我认为最大的优势是提高效率，减少重复性工作，让专业人士可以专注于更有创造性的任务。"
- "AI工具可以处理大量数据，发现人类难以发现的模式和 insights。"
- "AI工具可以提供个性化的服务，满足不同用户的需求。"

### 3. 你担心AI工具在专业领域的应用会带来什么挑战？

**示例想法**：
- "我担心AI工具可能会导致一些专业人士失业，特别是那些从事重复性工作的人。"
- "我担心AI工具的准确性和可靠性，特别是在需要专业判断的领域。"
- "我担心AI工具可能会加剧数字鸿沟，那些能够使用AI工具的人会获得更多优势。"
        `},{id:"8-4",title:"8.4 构建个人AI工作流",content:`
## 构建个人AI工作流

构建个性化的AI工作流可以帮助你更高效地完成各种任务。本章将学习如何构建适合自己需求的AI工作流。

![AI工作流示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20personal%20AI%20workflow%20with%20different%20tools%20connected%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 工作流设计原则

设计个人AI工作流时，需要遵循以下原则：

#### 1. 明确目标

- **任务分析**：分析你需要完成的任务
- **目标设定**：设定明确的工作目标
- **需求评估**：评估完成任务所需的资源和工具

#### 2. 工具选择

- **工具评估**：评估不同AI工具的功能和特点
- **工具匹配**：选择最适合任务的AI工具
- **工具整合**：考虑工具之间的兼容性和整合方式

#### 3. 流程设计

- **步骤规划**：规划工作流的具体步骤
- **顺序安排**：安排步骤的最佳执行顺序
- **反馈机制**：设计反馈和调整机制

#### 4. 效率优化

- **自动化**：尽可能自动化重复任务
- **标准化**：标准化工作流程和输出格式
- **持续改进**：不断优化工作流程

![工作流设计原则示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20workflow%20design%20principles%20like%20goal%20setting%2C%20tool%20selection%2C%20and%20efficiency%20optimization%2C%20educational%20style&image_size=landscape_16_9)

### 常见的个人AI工作流

以下是一些常见的个人AI工作流示例：

#### 1. 内容创作工作流

**流程**：
1. 使用大语言模型生成内容大纲
2. 基于大纲生成详细内容
3. 使用AI工具进行内容优化和润色
4. 使用图像生成工具创建相关配图
5. 整合内容和图片，形成最终作品

**应用**：写作博客文章、社交媒体内容、报告等

#### 2. 学习辅助工作流

**流程**：
1. 使用大语言模型解释复杂概念
2. 生成学习笔记和总结
3. 创建练习题目和测试
4. 分析学习进度和薄弱环节
5. 调整学习计划

**应用**：学习新技能、备考、研究等

#### 3. 创意设计工作流

**流程**：
1. 使用大语言模型生成创意想法
2. 使用图像生成工具创建设计草稿
3. 优化和调整设计
4. 生成设计说明和文案
5. 整合设计和文案

**应用**：设计海报、社交媒体图片、产品概念等

#### 4. 工作效率工作流

**流程**：
1. 使用AI工具管理日程和任务
2. 自动生成邮件和文档
3. 分析和整理数据
4. 生成报告和总结
5. 优化工作流程

**应用**：日常办公、项目管理、数据分析等

### 工作流实施步骤

实施个人AI工作流需要以下步骤：

#### 1. 需求分析

- **任务清单**：列出你需要完成的任务
- **痛点分析**：分析完成任务的痛点和挑战
- **目标设定**：设定工作流的具体目标

#### 2. 工具选择

- **工具调研**：调研适合的AI工具
- **工具测试**：测试不同工具的效果
- **工具选择**：选择最适合的工具组合

#### 3. 流程设计

- **步骤规划**：设计工作流的具体步骤
- **流程图表**：创建工作流程图
- **文档记录**：记录工作流程的详细信息

#### 4. 实施和测试

- **小规模测试**：在小范围内测试工作流
- **反馈收集**：收集使用反馈
- **调整优化**：根据反馈调整工作流

#### 5. 持续改进

- **定期评估**：定期评估工作流的效果
- **工具更新**：及时更新和替换工具
- **流程优化**：不断优化工作流程

![工作流实施步骤示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20workflow%20implementation%20steps%20from%20needs%20analysis%20to%20continuous%20improvement%2C%20educational%20style&image_size=landscape_16_9)

### 工作流管理工具

以下是一些可以帮助你管理和自动化工作流的工具：

#### 1. 自动化平台

- **Zapier**：连接不同应用，创建自动化工作流
- **Make**：可视化创建复杂的工作流
- **IFTTT**：创建简单的条件触发工作流

#### 2. 项目管理工具

- **Notion**：整合笔记、任务和数据库
- **Todoist**：管理任务和项目
- **Asana**：团队协作和项目管理

#### 3. 内容管理工具

- **Airtable**：灵活的数据库和内容管理
- **Notion**：内容管理和知识库
- **Coda**：文档和数据的整合管理

### 最佳实践

以下是构建个人AI工作流的最佳实践：

#### 1. 从小开始

- **简化流程**：开始时设计简单的工作流
- **逐步扩展**：随着熟练度提高，逐步扩展工作流
- **关注重点**：优先解决最重要的任务

#### 2. 保持灵活性

- **适应变化**：根据需求变化调整工作流
- **尝试新工具**：不断尝试新的AI工具
- **混合使用**：根据具体情况混合使用不同工具

#### 3. 持续学习

- **工具学习**：不断学习新工具的使用技巧
- **流程优化**：不断优化工作流程
- **经验分享**：与他人分享经验和最佳实践

---

💡 **小提示**：构建个人AI工作流的关键是找到适合自己需求的工具和流程。不要盲目跟风，要根据自己的实际需求和工作习惯来设计工作流。

---

## 思考与讨论

### 1. 你最想构建什么样的AI工作流？

**示例想法**：
- "我想构建一个内容创作工作流，帮助我更高效地写博客和社交媒体内容。"
- "我想构建一个学习辅助工作流，帮助我更有效地学习新知识。"
- "我想构建一个工作效率工作流，帮助我更高效地完成日常办公任务。"

### 2. 你认为构建个人AI工作流最大的挑战是什么？

**示例想法**：
- "我觉得最大的挑战是选择适合自己的工具，因为市场上有太多AI工具了。"
- "我担心工具之间的整合问题，不知道如何让它们无缝协作。"
- "我觉得坚持使用和不断优化工作流是一个挑战，需要持续的努力。"

### 3. 你希望未来的AI工具在工作流方面有哪些改进？

**示例想法**：
- "我希望未来的AI工具能更智能地相互配合，自动完成一些整合任务。"
- "我希望看到更多的低代码/无代码工具，让非技术人员也能构建复杂的工作流。"
- "我希望AI工具能更好地理解用户的工作习惯，自动调整和优化工作流。"
        `},{id:"8-5",title:"8.5 未来AI发展趋势",content:`
## 未来AI发展趋势

了解AI的未来发展趋势可以帮助你更好地适应和利用AI技术。本章将探讨AI的未来发展方向和趋势。

![AI未来趋势示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20future%20AI%20trends%20and%20developments%2C%20futuristic%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 1. 多模态AI

多模态AI是指能够处理和理解多种类型数据的AI系统，如文本、图像、音频、视频等。

#### 发展趋势

- **跨模态理解**：AI将能够更好地理解不同模态数据之间的关系
- **多模态生成**：AI将能够生成包含多种模态的内容
- **统一模型**：使用单一模型处理多种模态数据

#### 应用场景

- **智能助手**：能够理解和响应多种形式的输入
- **内容创作**：生成包含文字、图像、音频的多媒体内容
- **教育**：提供多模态的学习体验

![多模态AI示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20multimodal%20AI%20processing%20text%2C%20images%2C%20audio%2C%20and%20video%2C%20educational%20style&image_size=landscape_16_9)

### 2. 个性化AI

个性化AI是指能够根据用户的个人特点和需求提供定制化服务的AI系统。

#### 发展趋势

- **个性化模型**：为每个用户创建个性化的AI模型
- **适应性学习**：AI能够不断学习用户的偏好和习惯
- **情境感知**：AI能够理解用户的上下文和情境

#### 应用场景

- **个人助手**：提供个性化的建议和服务
- **教育**：根据学生的学习风格提供个性化的学习内容
- **健康**：提供个性化的健康建议和监测

### 3. 边缘AI

边缘AI是指部署在边缘设备（如手机、物联网设备）上的AI系统，而不是依赖云服务器。

#### 发展趋势

- **本地处理**：AI处理将更多地在本地设备上进行
- **低延迟**：减少数据传输延迟，提高响应速度
- **隐私保护**：数据在本地处理，提高隐私安全性

#### 应用场景

- **智能设备**：智能家居、智能穿戴设备
- **自动驾驶**：实时处理传感器数据
- **工业物联网**：实时监控和分析

### 4. 可解释AI

可解释AI是指能够解释其决策过程和结果的AI系统，提高AI的透明度和可信度。

#### 发展趋势

- **决策解释**：AI能够解释其决策的原因和过程
- **透明度**：AI的工作原理和数据使用更加透明
- **可验证性**：AI的结果可以被验证和审计

#### 应用场景

- **医疗**：解释诊断结果和治疗建议
- **金融**：解释贷款审批和投资建议
- **法律**：解释法律决策和建议

![可解释AI示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20explainable%20AI%20with%20decision%20process%20visualization%2C%20educational%20style&image_size=landscape_16_9)

### 5. AI伦理与治理

随着AI的广泛应用，AI伦理和治理成为越来越重要的议题。

#### 发展趋势

- **伦理框架**：建立更完善的AI伦理框架
- **法规监管**：制定更严格的AI法规和监管措施
- **责任归属**：明确AI决策的责任归属

#### 应用场景

- **AI审计**：定期审计AI系统的行为和影响
- **伦理评估**：在AI开发和部署前进行伦理评估
- **合规性检查**：确保AI系统符合相关法规和标准

### 6. 量子AI

量子AI是指结合量子计算和AI技术的新兴领域，有望解决传统AI难以解决的问题。

#### 发展趋势

- **量子机器学习**：使用量子计算加速机器学习算法
- **量子神经网络**：开发基于量子计算的神经网络
- **量子优化**：使用量子计算优化AI模型

#### 应用场景

- **复杂问题解决**：解决传统AI难以解决的复杂问题
- **药物研发**：加速药物分子的设计和筛选
- **金融建模**：更准确地预测市场趋势

### 7. AI与人类协作

未来的AI将更多地与人类协作，而不是替代人类。

#### 发展趋势

- **人机协同**：AI和人类共同完成任务
- **增强智能**：AI增强人类的能力和决策
- **互补优势**：发挥AI和人类的各自优势

#### 应用场景

- **创意协作**：AI和人类共同创作内容
- **医疗诊断**：AI辅助医生进行诊断
- **教育**：AI辅助教师进行教学

---

💡 **小提示**：了解AI的未来发展趋势可以帮助你提前准备，适应未来的变化。同时，也要保持批判性思维，理性看待AI的发展，不要被炒作所误导。

---

## 思考与讨论

### 1. 你最期待未来AI在哪个方面的发展？

**示例想法**：
- "我最期待多模态AI的发展，希望AI能够更好地理解和处理多种类型的数据。"
- "我期待个性化AI的发展，希望AI能够更好地理解我的需求和偏好。"
- "我期待可解释AI的发展，希望AI的决策过程更加透明和可信。"

### 2. 你认为未来AI发展最大的挑战是什么？

**示例想法**：
- "我认为最大的挑战是AI伦理和治理，如何确保AI的发展符合人类的价值观和利益。"
- "我担心AI可能会加剧社会不平等，那些能够访问和使用AI的人会获得更多优势。"
- "我担心AI的安全性，特别是在关键领域如医疗、金融和交通中的应用。"

### 3. 你如何准备迎接AI的未来发展？

**示例想法**：
- "我会持续学习AI相关的知识和技能，保持对新技术的了解。"
- "我会尝试使用和适应新的AI工具，积累使用经验。"
- "我会关注AI伦理和社会影响，积极参与相关的讨论和决策。"

---

## 第八章完成！

恭喜你完成了第八章的学习！现在你已经：

- **了解了AI工具的整合使用**：学习如何将不同的AI工具组合使用，发挥它们的最大价值
- **掌握了高级提示词工程**：学习如何编写有效的提示词，提高AI的输出质量
- **了解了AI在专业领域的应用**：学习AI在教育、医疗、金融等领域的应用
- **学会了构建个人AI工作流**：学习如何设计和实施适合自己需求的AI工作流
- **了解了AI的未来发展趋势**：学习AI的未来发展方向和趋势

现在你已经成为AI工具的高级用户！通过整合不同的AI工具，构建个性化的工作流，你可以更高效地完成各种任务，发挥AI的最大价值。

---

### 章节回顾

**核心知识点**：
- AI工具整合可以创造出更强大的效果
- 好的提示词可以显著提高AI的输出质量
- AI在各个专业领域都有广泛的应用
- 构建个性化的AI工作流可以提高效率
- 了解AI的未来发展趋势有助于适应变化

**重要提醒**：
- 工具整合的关键是理解每个工具的优势和局限性
- 提示词工程需要实践和经验
- AI工具应该作为专业人士的辅助工具，而不是替代品
- 构建工作流要根据自己的实际需求和工作习惯
- 保持批判性思维，理性看待AI的发展
        `}]},nm={id:9,title:"AI时代的职业发展与未来准备",description:"学习如何在AI时代提升自己的竞争力，为未来的职业发展做好准备",icon:"trending-up",sections:[{id:"9-1",title:"9.1 AI对就业市场的影响",content:`
## AI对就业市场的影响

AI技术的快速发展正在改变就业市场的格局。本章将探讨AI对就业市场的影响，以及如何适应这些变化。

![AI就业影响示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20impact%20on%20job%20market%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### AI对就业的影响

AI对就业市场的影响是复杂的，既有挑战也有机遇。

#### 1. 就业替代

- **自动化风险**：AI可能会自动化一些重复性工作
- **影响行业**：客服、数据输入、制造业等行业可能受到较大影响
- **技能替代**：某些特定技能可能被AI取代

#### 2. 就业创造

- **新岗位产生**：AI将创造新的就业岗位
- **新兴行业**：AI相关的新兴行业将需要大量人才
- **技能升级**：现有岗位需要新的技能组合

#### 3. 就业转型

- **技能转型**：现有岗位的技能需求将发生变化
- **工作内容调整**：工作内容将更多地与AI协作
- **职业路径变化**：职业发展路径将更加多样化

![AI就业影响示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20AI%20job%20market%20impact%20with%20both%20challenges%20and%20opportunities%2C%20educational%20style&image_size=landscape_16_9)

### 受AI影响较大的行业

#### 1. 客服行业

- **影响**：AI聊天机器人将取代部分客服岗位
- **转型**：客服人员将更多地处理复杂问题和提供个性化服务
- **机会**：客服主管、AI训练师等新岗位

#### 2. 金融行业

- **影响**：AI将自动化部分金融分析和交易工作
- **转型**：金融专业人员将更多地关注战略决策和风险管理
- **机会**：金融科技专家、AI风控专家等新岗位

#### 3. 医疗行业

- **影响**：AI将辅助诊断和治疗决策
- **转型**：医生将更多地关注复杂病例和患者关怀
- **机会**：医疗AI专家、健康数据分析师等新岗位

#### 4. 教育行业

- **影响**：AI将辅助教学和个性化学习
- **转型**：教师将更多地关注学生的情感和社交发展
- **机会**：教育科技专家、AI教育设计师等新岗位

#### 5. 创意行业

- **影响**：AI将辅助创意内容生成
- **转型**：创意专业人员将更多地关注原创性和战略创意
- **机会**：AI创意总监、创意技术专家等新岗位

### 适应AI时代的就业策略

#### 1. 技能提升

- **技术技能**：学习AI相关技术和工具
- **软技能**：发展AI难以替代的软技能
- **复合技能**：培养跨领域的复合技能

#### 2. 职业规划

- **行业选择**：选择AI赋能的行业
- **岗位选择**：选择与AI协作的岗位
- **职业路径**：规划适应AI时代的职业路径

#### 3. 持续学习

- **终身学习**：建立终身学习的习惯
- **技能更新**：定期更新技能和知识
- **学习方法**：采用有效的学习方法

---

💡 **小提示**：AI对就业市场的影响是渐进的，不是突然的。重要的是保持学习能力和适应能力，而不是恐惧AI的发展。

---

## 思考与讨论

### 1. 你认为AI会对你所在的行业产生什么影响？

**示例想法**：
- "我在教育行业，我认为AI会辅助教学，减轻教师的负担，让教师有更多时间关注学生的个性化需求。"
- "我在金融行业，我认为AI会自动化一些重复性的分析工作，让我们有更多时间关注战略决策。"
- "我在创意行业，我认为AI会成为创意的辅助工具，帮助我们生成灵感和初步内容。"

### 2. 你认为哪些技能在AI时代会变得更加重要？

**示例想法**：
- "我认为创造性思维会变得更加重要，因为AI难以产生真正原创的创意。"
- "我认为情感智能会变得更加重要，因为AI缺乏人类的情感理解能力。"
- "我认为跨领域的复合技能会变得更加重要，因为AI往往专精于特定领域。"

### 3. 你计划如何适应AI时代的就业变化？

**示例想法**：
- "我计划学习AI相关的工具和技术，提升自己的技术能力。"
- "我计划发展自己的软技能，如沟通、协作和领导力。"
- "我计划保持开放的心态，积极拥抱AI带来的变化。"
        `},{id:"9-2",title:"9.2 培养AI时代的核心能力",content:`
## 培养AI时代的核心能力

在AI时代，某些核心能力将变得尤为重要。本章将探讨如何培养这些核心能力，以在AI时代保持竞争力。

![核心能力示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20core%20competencies%20for%20AI%20era%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 1. 创造性思维

创造性思维是AI难以复制的核心能力之一。

#### 培养方法

- **发散思维**：练习从多个角度思考问题
- **头脑风暴**：定期进行头脑风暴活动
- **跨领域学习**：学习不同领域的知识，激发创意
- **实践创作**：通过实践培养创造力

#### 应用场景

- **问题解决**：提出创新的解决方案
- **产品设计**：设计创新的产品和服务
- **营销策略**：制定创新的营销策略
- **流程优化**：优化工作流程和方法

### 2. 情感智能

情感智能是人类特有的能力，包括理解和管理自己的情绪，以及理解和影响他人的情绪。

#### 培养方法

- **自我觉察**：关注自己的情绪和反应
- **同理心**：练习理解他人的感受
- **情绪管理**：学习管理自己的情绪
- **社交技能**：提高沟通和人际关系能力

#### 应用场景

- **团队协作**：促进团队的有效协作
- **客户服务**：提供个性化的客户服务
- **领导力**：有效地领导和激励团队
- **冲突解决**：解决人际冲突

### 3. 批判性思维

批判性思维是评估信息、分析问题和做出合理决策的能力。

#### 培养方法

- **信息评估**：练习评估信息的准确性和可靠性
- **逻辑分析**：学习逻辑分析的方法
- **问题分解**：将复杂问题分解为简单部分
- **决策练习**：练习做出合理的决策

#### 应用场景

- **信息筛选**：从海量信息中筛选有价值的内容
- **问题分析**：分析复杂的问题和挑战
- **决策制定**：做出基于证据的决策
- **风险评估**：评估潜在的风险和机会

![批判性思维示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20critical%20thinking%20process%2C%20educational%20style&image_size=landscape_16_9)

### 4. 学习能力

在快速变化的AI时代，持续学习的能力变得至关重要。

#### 培养方法

- **学习策略**：学习有效的学习方法和策略
- **知识管理**：建立个人知识管理系统
- **学习习惯**：养成定期学习的习惯
- **实践应用**：将所学知识应用到实践中

#### 应用场景

- **技能更新**：及时更新自己的技能
- **知识拓展**：拓展自己的知识领域
- **适应变化**：适应快速变化的环境
- **创新应用**：创新地应用所学知识

### 5. 数字素养

数字素养是在数字环境中有效工作和生活的能力。

#### 培养方法

- **技术学习**：学习基本的数字技术和工具
- **信息管理**：学习管理和处理数字信息
- **在线协作**：学习在线协作的方法和工具
- **数字安全**：了解数字安全的最佳实践

#### 应用场景

- **工具使用**：有效使用各种数字工具
- **信息处理**：处理和分析数字信息
- **在线沟通**：进行有效的在线沟通
- **数字创作**：创建数字内容和产品

### 6. 跨领域协作能力

在AI时代，跨领域协作变得越来越重要。

#### 培养方法

- **跨领域学习**：学习不同领域的基础知识
- **团队协作**：参与跨领域的团队项目
- **沟通技巧**：提高跨领域沟通的能力
- **项目管理**：学习跨领域项目的管理方法

#### 应用场景

- **跨团队合作**：与不同团队的成员合作
- **跨学科项目**：参与跨学科的项目
- **创新合作**：与不同背景的人合作创新
- **问题解决**：解决需要多领域知识的问题

---

💡 **小提示**：培养核心能力需要时间和实践。重要的是持续努力，而不是期望一蹴而就。选择1-2个核心能力作为重点，逐步培养和提升。

---

## 思考与讨论

### 1. 你认为自己最需要培养哪些核心能力？

**示例想法**：
- "我认为我最需要培养创造性思维，因为我在创意行业工作，这对我的职业发展非常重要。"
- "我认为我最需要培养批判性思维，因为我需要在大量信息中做出正确的决策。"
- "我认为我最需要培养学习能力，因为技术变化很快，我需要不断更新自己的知识。"

### 2. 你计划如何培养这些核心能力？

**示例想法**：
- "我计划通过参加创意工作坊和阅读创意相关的书籍来培养创造性思维。"
- "我计划通过分析案例和参与讨论来培养批判性思维。"
- "我计划通过在线课程和实践项目来培养学习能力。"

### 3. 你认为在AI时代，哪些核心能力会变得越来越重要？

**示例想法**：
- "我认为创造性思维和情感智能会变得越来越重要，因为这些是AI难以复制的能力。"
- "我认为跨领域协作能力会变得越来越重要，因为复杂问题需要多领域的知识和技能。"
- "我认为学习能力会变得越来越重要，因为技术和知识更新的速度越来越快。"
        `},{id:"9-3",title:"9.3 构建个人品牌与专业网络",content:`
## 构建个人品牌与专业网络

在AI时代，个人品牌和专业网络变得越来越重要。本章将探讨如何构建个人品牌和专业网络，以提升自己的职业竞争力。

![个人品牌示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20personal%20branding%20and%20professional%20networking%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 个人品牌建设

个人品牌是你在专业领域的 reputation和形象，它可以帮助你在竞争中脱颖而出。

#### 1. 明确个人定位

- **核心优势**：识别自己的核心优势和专长
- **目标受众**：明确你的目标受众和客户
- **价值主张**：定义你的独特价值主张
- **个人风格**：发展自己独特的个人风格

#### 2. 内容创作

- **专业内容**：创建和分享专业相关的内容
- **内容平台**：选择适合的内容平台
- **内容质量**：确保内容的质量和价值
- **内容一致性**：保持内容创作的一致性

#### 3. 在线 presence

- **社交媒体**：建立专业的社交媒体 presence
- **专业网站**：创建个人专业网站或博客
- **在线 portfolio**：展示你的作品和成就
- **搜索引擎优化**：优化你的在线 presence

#### 4. 个人品牌维护

- **品牌一致性**：保持品牌形象的一致性
- **反馈回应**：及时回应反馈和互动
- **持续更新**：定期更新你的品牌内容
- **品牌演化**：根据职业发展调整品牌定位

![个人品牌建设示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20steps%20for%20personal%20branding%20from%20positioning%20to%20maintenance%2C%20educational%20style&image_size=landscape_16_9)

### 专业网络构建

专业网络是你在专业领域的人际关系网络，它可以为你提供机会和支持。

#### 1. 网络构建策略

- **目标设定**：设定网络构建的目标
- **网络类型**：识别不同类型的网络关系
- **优先级**：确定网络构建的优先级
- **时间投入**：合理分配网络构建的时间

#### 2. 网络拓展方法

- **行业活动**：参加行业会议和活动
- **专业社区**：加入专业社区和组织
- **在线网络**：利用在线平台拓展网络
- **引荐介绍**：通过现有网络获得引荐

#### 3. 关系维护

- **定期联系**：定期与网络成员保持联系
- **价值提供**：为网络成员提供价值
- **真诚互动**：建立真诚的人际关系
- **网络管理**：有效管理你的网络关系

#### 4. 网络利用

- **资源共享**：与网络成员共享资源和信息
- **合作机会**：寻找和创造合作机会
- **知识交流**：与网络成员交流知识和经验
- **职业发展**：利用网络促进职业发展

### 个人品牌与网络的整合

将个人品牌和专业网络整合起来，可以产生更大的效果。

#### 1. 品牌与网络的协同

- **品牌传播**：通过网络传播个人品牌
- **网络强化**：通过个人品牌强化网络关系
- **价值循环**：创造品牌和网络的价值循环

#### 2. 内容与网络的结合

- **内容分享**：通过网络分享你的内容
- **内容共创**：与网络成员共同创作内容
- **内容反馈**：通过网络获取内容反馈

#### 3. 线上与线下的整合

- **线上拓展**：通过线上平台拓展网络
- **线下深化**：通过线下活动深化关系
- **全渠道 presence**：保持线上线下的一致形象

---

💡 **小提示**：个人品牌和专业网络的构建是一个长期的过程，需要持续的努力和投入。重要的是保持真诚和一致性，而不是追求短期的效果。

---

## 思考与讨论

### 1. 你认为个人品牌对你的职业发展有什么重要性？

**示例想法**：
- "我认为个人品牌可以帮助我在竞争中脱颖而出，让潜在的雇主或客户更容易找到我。"
- "个人品牌可以帮助我建立专业 credibility，让别人更信任我的能力。"
- "个人品牌可以帮助我明确自己的职业定位，指导我的职业发展方向。"

### 2. 你计划如何构建和维护你的专业网络？

**示例想法**：
- "我计划通过参加行业会议和线上社区来拓展我的专业网络。"
- "我计划定期与网络成员保持联系，分享有价值的信息和资源。"
- "我计划通过为网络成员提供价值来建立真诚的关系。"

### 3. 你如何将个人品牌和专业网络整合起来？

**示例想法**：
- "我计划通过分享专业内容来建立个人品牌，同时通过内容吸引和连接专业网络成员。"
- "我计划通过网络成员的反馈来改进我的个人品牌定位和内容。"
- "我计划与网络成员合作创作内容，共同提升我们的品牌影响力。"
        `},{id:"9-4",title:"9.4 创业与创新机会",content:`
## 创业与创新机会

AI时代为创业和创新提供了许多新的机会。本章将探讨AI时代的创业和创新机会，以及如何把握这些机会。

![创业创新示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20entrepreneurship%20and%20innovation%20opportunities%20in%20AI%20era%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### AI时代的创业机会

#### 1. AI工具和服务

- **AI应用开发**：开发特定领域的AI应用
- **AI咨询服务**：为企业提供AI实施咨询
- **AI培训服务**：提供AI技能培训
- **AI工具集成**：帮助企业集成和使用AI工具

#### 2. 内容创作与媒体

- **AI辅助内容创作**：开发AI辅助内容创作工具
- **个性化内容**：提供基于AI的个性化内容服务
- **内容审核**：开发AI内容审核工具
- **媒体分析**：提供基于AI的媒体分析服务

#### 3. 教育科技

- **个性化学习**：开发基于AI的个性化学习平台
- **智能辅导**：提供AI智能辅导服务
- **教育内容生成**：开发AI教育内容生成工具
- **学习分析**：提供基于AI的学习分析服务

#### 4. 健康科技

- **健康监测**：开发基于AI的健康监测工具
- **医疗诊断辅助**：提供AI辅助医疗诊断服务
- **个性化健康**：提供基于AI的个性化健康建议
- **医疗研究**：开发AI辅助医疗研究工具

#### 5. 金融科技

- **智能投资**：开发基于AI的投资工具
- **风险评估**：提供AI风险评估服务
- ** fraud detection**：开发AI fraud detection工具
- **金融咨询**：提供基于AI的金融咨询服务

![创业机会示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20different%20AI%20startup%20opportunities%20in%20various%20industries%2C%20educational%20style&image_size=landscape_16_9)

### 创新策略

#### 1. 问题识别

- **痛点分析**：识别用户和市场的痛点
- **机会识别**：发现未被满足的需求
- **趋势分析**：分析技术和市场趋势
- **差距分析**：识别现有解决方案的差距

#### 2. 创新方法

- **设计思维**：使用设计思维方法进行创新
- **敏捷开发**：采用敏捷开发方法
- **快速原型**：快速创建和测试原型
- **用户反馈**：持续收集和整合用户反馈

#### 3. 技术应用

- **AI技术选择**：选择适合的AI技术
- **技术集成**：将AI技术与现有系统集成
- **技术评估**：评估技术的可行性和效果
- **技术迭代**：持续改进和更新技术

#### 4. 商业模式

- **价值主张**：明确产品或服务的价值主张
- **目标市场**：确定目标市场和客户
- ** revenue model**：设计 revenue model
- **成本结构**：分析和优化成本结构

### 创业准备

#### 1. 知识和技能

- **行业知识**：了解目标行业的知识和趋势
- **技术知识**：掌握必要的技术知识
- **商业知识**：了解基本的商业知识
- **管理技能**：培养管理和领导技能

#### 2. 资源准备

- **资金**：准备必要的启动资金
- **团队**：组建合适的团队
- **网络**：建立必要的专业网络
- **工具**：准备必要的工具和资源

#### 3. 风险管理

- **风险识别**：识别潜在的风险
- **风险评估**：评估风险的可能性和影响
- **风险 mitigation**：制定风险 mitigation策略
- **应急计划**：准备应急计划

#### 4. 市场进入

- **市场研究**：进行深入的市场研究
- **竞争分析**：分析竞争对手
- **定位策略**：制定市场定位策略
- ** launch plan**：制定市场 launch plan

---

💡 **小提示**：创业和创新需要勇气和毅力，同时也需要理性的分析和规划。重要的是找到一个你真正感兴趣的问题，并开发一个有价值的解决方案。

---

## 思考与讨论

### 1. 你认为AI时代最有潜力的创业领域是什么？

**示例想法**：
- "我认为教育科技是一个很有潜力的领域，AI可以个性化学习体验，提高教育效果。"
- "我认为健康科技是一个很有潜力的领域，AI可以帮助人们更好地管理健康，提高医疗效率。"
- "我认为内容创作工具是一个很有潜力的领域，AI可以帮助人们更高效地创建内容。"

### 2. 你有什么创新想法可以应用AI技术？

**示例想法**：
- "我想开发一个AI辅助的个性化学习平台，根据学生的学习风格和进度提供定制化的学习内容。"
- "我想开发一个AI健康助手，帮助人们监测健康数据，提供个性化的健康建议。"
- "我想开发一个AI内容创作工具，帮助创作者更高效地生成和优化内容。"

### 3. 你认为创业成功的关键因素是什么？

**示例想法**：
- "我认为创业成功的关键因素是解决一个真正的问题，提供有价值的解决方案。"
- "我认为创业成功的关键因素是团队，一个优秀的团队可以克服各种挑战。"
- "我认为创业成功的关键因素是执行力，能够快速将想法转化为实际产品和服务。"
        `},{id:"9-5",title:"9.5 终身学习与持续成长",content:`
## 终身学习与持续成长

在AI时代，终身学习和持续成长变得至关重要。本章将探讨如何建立终身学习的习惯，实现持续成长。

![终身学习示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20lifelong%20learning%20and%20continuous%20growth%2C%20colorful%2C%20educational%20style&image_size=landscape_16_9)

### 终身学习的重要性

#### 1. 适应技术变化

- **技术更新**：技术在不断更新和发展
- **技能需求**：技能需求在不断变化
- **竞争优势**：持续学习可以保持竞争优势
- **职业安全**：持续学习可以提高职业安全性

#### 2. 个人发展

- **自我实现**：学习可以促进自我实现
- **认知能力**：学习可以保持认知能力
- **适应能力**：学习可以提高适应能力
- **生活质量**：学习可以提高生活质量

#### 3. 社会贡献

- **知识分享**：学习可以促进知识分享
- **创新能力**：学习可以提高创新能力
- **社会进步**：学习可以推动社会进步
- **问题解决**：学习可以帮助解决社会问题

### 建立终身学习习惯

#### 1. 学习心态

- **成长 mindset**：培养成长 mindset，相信能力可以通过努力提高
- **好奇心**：保持好奇心，对新事物保持开放态度
- **学习意愿**：主动寻求学习机会
- **韧性**：在学习过程中保持韧性

#### 2. 学习策略

- **目标设定**：设定明确的学习目标
- **学习计划**：制定合理的学习计划
- **时间管理**：有效管理学习时间
- **学习方法**：选择适合自己的学习方法

#### 3. 学习资源

- **在线课程**：利用在线课程平台
- **书籍和文章**：阅读相关书籍和文章
- **专业社区**：加入专业社区和论坛
- **实践项目**：通过实践项目学习

#### 4. 学习环境

- **学习空间**：创建适合学习的空间
- **学习伙伴**：找到学习伙伴和导师
- **学习社区**：加入学习社区
- **学习工具**：使用有效的学习工具

![终身学习习惯示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=illustration%20showing%20habits%20for%20lifelong%20learning%20like%20mindset%2C%20strategies%2C%20and%20resources%2C%20educational%20style&image_size=landscape_16_9)

### 持续成长的方法

#### 1. 技能发展

- **核心技能**：发展核心技能
- **辅助技能**：发展辅助技能
- **软技能**：发展软技能
- **技术技能**：发展技术技能

#### 2. 知识拓展

- **专业知识**：深化专业知识
- **跨领域知识**：拓展跨领域知识
- **前沿知识**：了解前沿知识和趋势
- **实践知识**：积累实践知识

#### 3. 经验积累

- **项目经验**：积累项目经验
- **行业经验**：积累行业经验
- **领导经验**：积累领导经验
- **失败经验**：从失败中学习经验

#### 4. 反思与调整

- **定期反思**：定期反思学习和成长
- **自我评估**：评估自己的进步和不足
- **调整策略**：根据反馈调整学习策略
- **设定新目标**：不断设定新的学习和成长目标

### 学习资源推荐

#### 1. 在线学习平台

- **Coursera**：提供来自顶尖大学的课程
- **edX**：提供来自顶尖大学的课程
- **Udemy**：提供各种实用技能课程
- **LinkedIn Learning**：提供职业技能课程

#### 2. 专业社区

- **GitHub**：代码和项目分享平台
- **Stack Overflow**：编程问答社区
- **Reddit**：各种主题的社区
- **专业协会**：行业专业协会

#### 3. 内容平台

- **Medium**：专业文章平台
- **YouTube**：视频学习平台
- **Podcasts**：播客学习平台
- **Newsletters**：专业通讯

#### 4. 工具和应用

- **学习管理**：Notion, Evernote
- **知识管理**：Obsidian, Roam Research
- **技能练习**：各种技能练习应用
- **习惯养成**：习惯养成应用

---

💡 **小提示**：终身学习不是负担，而是一种生活方式。重要的是找到你感兴趣的领域，享受学习的过程，而不是仅仅为了功利目的而学习。

---

## 思考与讨论

### 1. 你认为终身学习对你的职业发展有什么重要性？

**示例想法**：
- "我认为终身学习可以帮助我适应快速变化的职场环境，保持竞争力。"
- "终身学习可以帮助我拓展知识和技能，为职业发展创造更多机会。"
- "终身学习可以帮助我保持好奇心和创造力，提高工作满意度。"

### 2. 你计划如何建立终身学习的习惯？

**示例想法**：
- "我计划每天抽出固定的时间学习，建立学习习惯。"
- "我计划设定明确的学习目标，保持学习的动力。"
- "我计划加入学习社区，与他人一起学习和成长。"

### 3. 你最喜欢的学习资源是什么？为什么？

**示例想法**：
- "我最喜欢在线课程平台，因为它们提供了灵活的学习方式和高质量的内容。"
- "我最喜欢专业书籍，因为它们提供了深入的知识和系统的学习。"
- "我最喜欢实践项目，因为它们让我能够将所学知识应用到实际中。"

---

## 第九章完成！

恭喜你完成了第九章的学习！现在你已经：

- **了解了AI对就业市场的影响**：学习了AI如何影响就业市场，以及如何适应这些变化
- **掌握了AI时代的核心能力**：学习了在AI时代重要的核心能力，以及如何培养这些能力
- **学会了构建个人品牌与专业网络**：学习了如何构建个人品牌和专业网络，提升职业竞争力
- **了解了创业与创新机会**：学习了AI时代的创业和创新机会，以及如何把握这些机会
- **学会了终身学习与持续成长**：学习了如何建立终身学习的习惯，实现持续成长

现在你已经为AI时代的职业发展做好了准备！通过培养核心能力，构建个人品牌和专业网络，把握创业和创新机会，以及建立终身学习的习惯，你可以在AI时代保持竞争力，实现职业成功。

---

### 章节回顾

**核心知识点**：
- AI对就业市场的影响是复杂的，既有挑战也有机遇
- 在AI时代，创造性思维、情感智能、批判性思维等核心能力变得尤为重要
- 个人品牌和专业网络可以帮助你在竞争中脱颖而出
- AI时代为创业和创新提供了许多新的机会
- 终身学习和持续成长是适应AI时代的关键

**重要提醒**：
- 保持开放的心态，积极拥抱AI带来的变化
- 专注于培养AI难以复制的核心能力
- 建立和维护专业网络，拓展职业机会
- 保持学习的习惯，不断更新知识和技能
- 寻找和把握AI时代的创业和创新机会
        `}]},fl=[X0,Y0,J0,Z0,q0,b0,em,tm,nm];function rm(e){return fl.find(t=>t.id===e)}const lm=()=>g.jsxs("div",{children:[g.jsx("section",{className:"bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20",children:g.jsx("div",{className:"container",children:g.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[g.jsx("h1",{className:"text-4xl md:text-5xl font-extrabold mb-6",children:"AI零基础教程"}),g.jsx("p",{className:"text-xl text-primary-100 mb-8",children:"从零开始，轻松学习AI工具使用方法，让AI成为你的得力助手"}),g.jsx("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:g.jsxs(Lt,{to:"/chapter/1",className:"inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors",children:["开始学习",g.jsx(T0,{className:"ml-2 h-5 w-5"})]})})]})})}),g.jsx("section",{className:"py-16",children:g.jsxs("div",{className:"container",children:[g.jsx("h2",{className:"text-3xl font-bold text-center text-gray-900 mb-12",children:"学习三步曲"}),g.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[g.jsxs("div",{className:"card text-center",children:[g.jsx("div",{className:"w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4",children:g.jsx(M0,{className:"h-8 w-8 text-primary-600"})}),g.jsx("h3",{className:"text-xl font-semibold mb-2",children:"1. 了解基础"}),g.jsx("p",{className:"text-gray-600",children:"认识AI是什么，了解它能做什么"})]}),g.jsxs("div",{className:"card text-center",children:[g.jsx("div",{className:"w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4",children:g.jsx(V0,{className:"h-8 w-8 text-success-500"})}),g.jsx("h3",{className:"text-xl font-semibold mb-2",children:"2. 动手实践"}),g.jsx("p",{className:"text-gray-600",children:"跟着教程，一步步实际操作"})]}),g.jsxs("div",{className:"card text-center",children:[g.jsx("div",{className:"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4",children:g.jsx(W0,{className:"h-8 w-8 text-purple-600"})}),g.jsx("h3",{className:"text-xl font-semibold mb-2",children:"3. 灵活运用"}),g.jsx("p",{className:"text-gray-600",children:"把学到的技巧应用到实际生活中"})]})]})]})}),g.jsx("section",{className:"py-16 bg-gray-100",children:g.jsxs("div",{className:"container",children:[g.jsx("h2",{className:"text-3xl font-bold text-center text-gray-900 mb-4",children:"教程章节"}),g.jsx("p",{className:"text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto",children:"从基础开始，循序渐进地学习AI工具使用"}),g.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:fl.map(e=>g.jsx(K0,{chapter:e},e.id))})]})})]}),im=()=>{const{id:e}=l0(),t=Hc(),n=parseInt(e||"1"),r=rm(n),[l,i]=x.useState(0),[o,a]=x.useState(!1),[s,c]=x.useState(!0);if(x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[l,n]),!r)return g.jsxs("div",{className:"container py-20 text-center",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"章节未找到"}),g.jsxs(Lt,{to:"/",className:"btn-primary inline-flex items-center",children:[g.jsx(ws,{className:"mr-2 h-4 w-4"}),"返回首页"]})]});const m=r.sections[l],p=l>0,h=l<r.sections.length-1,y=n>=fl.length,I=!h,A=()=>{p&&i(u=>u-1)},C=()=>{h?i(u=>u+1):y||(t(`/chapter/${n+1}`),i(0))},f=u=>u.split(`
`).map((d,v)=>{const w=d.match(/!\[(.*?)\]\((.*?)\)/);if(w){const E=w[1],N=w[2];return g.jsxs("div",{className:"my-6",children:[g.jsx("img",{src:N,alt:E,className:"w-full h-auto rounded-lg shadow-sm"}),g.jsx("p",{className:"text-sm text-gray-500 mt-2 text-center",children:E})]},v)}return d.startsWith("## ")?g.jsx("h2",{className:"text-2xl font-bold text-gray-900 mt-8 mb-4",children:d.slice(3)},v):d.startsWith("### ")?g.jsx("h3",{className:"text-xl font-semibold text-gray-800 mt-6 mb-3",children:d.slice(4)},v):d.startsWith("#### ")?g.jsx("h4",{className:"text-lg font-semibold text-gray-700 mt-4 mb-2",children:d.slice(5)},v):d.trim().startsWith("- ")||d.trim().startsWith("* ")?g.jsx("li",{className:"ml-6 mb-2 text-gray-700",children:d.trim().slice(2)},v):d.match(/^\d+\.\s/)?g.jsx("li",{className:"ml-6 mb-2 text-gray-700 list-decimal",children:d.trim().replace(/^\d+\.\s/,"")},v):d.trim()==="---"?g.jsx("hr",{className:"my-8 border-gray-200"},v):d.trim()?g.jsx("p",{className:"mb-4 text-gray-700 leading-relaxed",children:d},v):g.jsx("br",{},v)});return g.jsxs("div",{className:"min-h-screen bg-gray-50",children:[g.jsxs("div",{className:"lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-16 z-10",children:[g.jsx("h2",{className:"font-semibold text-gray-900 truncate",children:r.title}),g.jsx("button",{onClick:()=>a(!o),className:"p-2 rounded-md text-gray-600 hover:bg-gray-100",children:o?g.jsx(xs,{className:"h-6 w-6"}):g.jsx(U0,{className:"h-6 w-6"})})]}),g.jsxs("div",{className:"container flex flex-col lg:flex-row gap-6 py-8",children:[g.jsxs("aside",{className:`lg:w-72 flex-shrink-0 ${o?"fixed inset-0 bg-white z-50 p-4":"hidden lg:block"}`,children:[o&&g.jsx("div",{className:"flex justify-end mb-4",children:g.jsx("button",{onClick:()=>a(!1),className:"p-2 rounded-md text-gray-600 hover:bg-gray-100",children:g.jsx(xs,{className:"h-6 w-6"})})}),g.jsxs("div",{className:"lg:sticky lg:top-24",children:[g.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-4",children:"章节目录"}),g.jsx("nav",{className:"space-y-1",children:fl.map(u=>g.jsx("button",{onClick:()=>{t(`/chapter/${u.id}`),i(0),a(!1)},className:`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${u.id===n?"bg-primary-100 text-primary-700 font-medium":"text-gray-600 hover:bg-gray-100"}`,children:g.jsxs("div",{className:"flex items-center",children:[g.jsxs("span",{className:"mr-3",children:[u.id,"."]}),u.title]})},u.id))}),g.jsx("div",{className:"mt-8 pt-6 border-t border-gray-200",children:g.jsxs(Lt,{to:"/",className:"flex items-center text-gray-600 hover:text-primary-600 text-sm",children:[g.jsx(ws,{className:"h-4 w-4 mr-2"}),"返回首页"]})})]})]}),g.jsxs("main",{className:"flex-1",children:[g.jsxs("div",{className:"lg:hidden mb-6",children:[g.jsxs("button",{onClick:()=>c(!s),className:"w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-2",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(Yc,{className:"h-5 w-5 mr-2 text-primary-600"}),g.jsx("span",{className:"font-semibold text-gray-900",children:"小节目录"})]}),s?g.jsx(F0,{className:"h-5 w-5 text-gray-500"}):g.jsx(O0,{className:"h-5 w-5 text-gray-500"})]}),s&&g.jsx("div",{className:"bg-white rounded-xl shadow-sm p-4",children:g.jsx("div",{className:"space-y-1",children:r.sections.map((u,d)=>g.jsx("button",{onClick:()=>i(d),className:`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${d===l?"bg-primary-100 text-primary-700 font-medium":"text-gray-600 hover:bg-gray-100"}`,children:g.jsxs("div",{className:"flex items-center",children:[d<l?g.jsx(R0,{className:"h-4 w-4 mr-2 text-success-500"}):g.jsx("span",{className:"h-2 w-2 rounded-full bg-gray-300 mr-3"}),u.title]})},u.id))})})]}),g.jsxs("article",{className:"bg-white rounded-xl shadow-sm p-8",children:[g.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:m.title}),g.jsx("div",{className:"prose prose-gray max-w-none",children:f(m.content)}),g.jsxs("div",{className:"flex items-center justify-between mt-12 pt-8 border-t border-gray-200",children:[g.jsxs("button",{onClick:A,disabled:!p,className:`flex items-center px-4 py-2 rounded-lg ${p?"text-primary-600 hover:bg-primary-50":"text-gray-400 cursor-not-allowed"}`,children:[g.jsx(D0,{className:"h-5 w-5 mr-2"}),"上一节"]}),g.jsxs("button",{onClick:C,disabled:!h&&y,className:`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${h||!y?"bg-primary-600 text-white hover:bg-primary-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:[I&&!y?"下一章":"下一节",g.jsx(Jc,{className:"h-5 w-5 ml-2"})]})]})]})]})]})]})},om=()=>g.jsx(E0,{basename:"/AI-Tutorial",children:g.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col",children:[g.jsx(H0,{}),g.jsx("main",{className:"flex-grow",children:g.jsxs(A0,{children:[g.jsx(to,{path:"/",element:g.jsx(lm,{})}),g.jsx(to,{path:"/chapter/:id",element:g.jsx(im,{})})]})}),g.jsx(Q0,{})]})});ai.createRoot(document.getElementById("root")).render(g.jsx(Ms.StrictMode,{children:g.jsx(om,{})}));
