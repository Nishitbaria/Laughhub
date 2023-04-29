var V2=(A,B)=>()=>(B||A((B={exports:{}}).exports,B),B.exports);var deA=V2((GeA,xi)=>{function x2(A,B){for(var Q=0;Q<B.length;Q++){const e=B[Q];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in A)){const g=Object.getOwnPropertyDescriptor(e,t);g&&Object.defineProperty(A,t,g.get?g:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const g of t)if(g.type==="childList")for(const n of g.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function Q(t){const g={};return t.integrity&&(g.integrity=t.integrity),t.referrerPolicy&&(g.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?g.credentials="include":t.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function e(t){if(t.ep)return;t.ep=!0;const g=Q(t);fetch(t.href,g)}})();var d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function z2(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}function vg(A){if(A.__esModule)return A;var B=A.default;if(typeof B=="function"){var Q=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var g=Function.bind.apply(B,t);return new g}return B.apply(this,arguments)};Q.prototype=B.prototype}else Q={};return Object.defineProperty(Q,"__esModule",{value:!0}),Object.keys(A).forEach(function(e){var t=Object.getOwnPropertyDescriptor(A,e);Object.defineProperty(Q,e,t.get?t:{enumerable:!0,get:function(){return A[e]}})}),Q}var xC={},P2={get exports(){return xC},set exports(A){xC=A}},Mo={},b={},j2={get exports(){return b},set exports(A){b=A}},GA={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),K2=Symbol.for("react.portal"),q2=Symbol.for("react.fragment"),_2=Symbol.for("react.strict_mode"),$2=Symbol.for("react.profiler"),Ak=Symbol.for("react.provider"),Bk=Symbol.for("react.context"),Qk=Symbol.for("react.forward_ref"),ek=Symbol.for("react.suspense"),tk=Symbol.for("react.memo"),gk=Symbol.for("react.lazy"),S0=Symbol.iterator;function nk(A){return A===null||typeof A!="object"?null:(A=S0&&A[S0]||A["@@iterator"],typeof A=="function"?A:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,Wm={};function nE(A,B,Q){this.props=A,this.context=B,this.refs=Wm,this.updater=Q||Hm}nE.prototype.isReactComponent={};nE.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")};nE.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function Tm(){}Tm.prototype=nE.prototype;function vD(A,B,Q){this.props=A,this.context=B,this.refs=Wm,this.updater=Q||Hm}var ZD=vD.prototype=new Tm;ZD.constructor=vD;Om(ZD,nE.prototype);ZD.isPureReactComponent=!0;var L0=Array.isArray,Vm=Object.prototype.hasOwnProperty,SD={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function zm(A,B,Q){var e,t={},g=null,n=null;if(B!=null)for(e in B.ref!==void 0&&(n=B.ref),B.key!==void 0&&(g=""+B.key),B)Vm.call(B,e)&&!xm.hasOwnProperty(e)&&(t[e]=B[e]);var E=arguments.length-2;if(E===1)t.children=Q;else if(1<E){for(var C=Array(E),i=0;i<E;i++)C[i]=arguments[i+2];t.children=C}if(A&&A.defaultProps)for(e in E=A.defaultProps,E)t[e]===void 0&&(t[e]=E[e]);return{$$typeof:Gi,type:A,key:g,ref:n,props:t,_owner:SD.current}}function Ek(A,B){return{$$typeof:Gi,type:A.type,key:B,ref:A.ref,props:A.props,_owner:A._owner}}function LD(A){return typeof A=="object"&&A!==null&&A.$$typeof===Gi}function Ck(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Q){return B[Q]})}var X0=/\/+/g;function Xc(A,B){return typeof A=="object"&&A!==null&&A.key!=null?Ck(""+A.key):B.toString(36)}function ta(A,B,Q,e,t){var g=typeof A;(g==="undefined"||g==="boolean")&&(A=null);var n=!1;if(A===null)n=!0;else switch(g){case"string":case"number":n=!0;break;case"object":switch(A.$$typeof){case Gi:case K2:n=!0}}if(n)return n=A,t=t(n),A=e===""?"."+Xc(n,0):e,L0(t)?(Q="",A!=null&&(Q=A.replace(X0,"$&/")+"/"),ta(t,B,Q,"",function(i){return i})):t!=null&&(LD(t)&&(t=Ek(t,Q+(!t.key||n&&n.key===t.key?"":(""+t.key).replace(X0,"$&/")+"/")+A)),B.push(t)),1;if(n=0,e=e===""?".":e+":",L0(A))for(var E=0;E<A.length;E++){g=A[E];var C=e+Xc(g,E);n+=ta(g,B,Q,C,t)}else if(C=nk(A),typeof C=="function")for(A=C.call(A),E=0;!(g=A.next()).done;)g=g.value,C=e+Xc(g,E++),n+=ta(g,B,Q,C,t);else if(g==="object")throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return n}function dr(A,B,Q){if(A==null)return A;var e=[],t=0;return ta(A,e,"","",function(g){return B.call(Q,g,t++)}),e}function ik(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(Q){(A._status===0||A._status===-1)&&(A._status=1,A._result=Q)},function(Q){(A._status===0||A._status===-1)&&(A._status=2,A._result=Q)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var gQ={current:null},ga={transition:null},rk={ReactCurrentDispatcher:gQ,ReactCurrentBatchConfig:ga,ReactCurrentOwner:SD};GA.Children={map:dr,forEach:function(A,B,Q){dr(A,function(){B.apply(this,arguments)},Q)},count:function(A){var B=0;return dr(A,function(){B++}),B},toArray:function(A){return dr(A,function(B){return B})||[]},only:function(A){if(!LD(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};GA.Component=nE;GA.Fragment=q2;GA.Profiler=$2;GA.PureComponent=vD;GA.StrictMode=_2;GA.Suspense=ek;GA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rk;GA.cloneElement=function(A,B,Q){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var e=Om({},A.props),t=A.key,g=A.ref,n=A._owner;if(B!=null){if(B.ref!==void 0&&(g=B.ref,n=SD.current),B.key!==void 0&&(t=""+B.key),A.type&&A.type.defaultProps)var E=A.type.defaultProps;for(C in B)Vm.call(B,C)&&!xm.hasOwnProperty(C)&&(e[C]=B[C]===void 0&&E!==void 0?E[C]:B[C])}var C=arguments.length-2;if(C===1)e.children=Q;else if(1<C){E=Array(C);for(var i=0;i<C;i++)E[i]=arguments[i+2];e.children=E}return{$$typeof:Gi,type:A.type,key:t,ref:g,props:e,_owner:n}};GA.createContext=function(A){return A={$$typeof:Bk,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:Ak,_context:A},A.Consumer=A};GA.createElement=zm;GA.createFactory=function(A){var B=zm.bind(null,A);return B.type=A,B};GA.createRef=function(){return{current:null}};GA.forwardRef=function(A){return{$$typeof:Qk,render:A}};GA.isValidElement=LD;GA.lazy=function(A){return{$$typeof:gk,_payload:{_status:-1,_result:A},_init:ik}};GA.memo=function(A,B){return{$$typeof:tk,type:A,compare:B===void 0?null:B}};GA.startTransition=function(A){var B=ga.transition;ga.transition={};try{A()}finally{ga.transition=B}};GA.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};GA.useCallback=function(A,B){return gQ.current.useCallback(A,B)};GA.useContext=function(A){return gQ.current.useContext(A)};GA.useDebugValue=function(){};GA.useDeferredValue=function(A){return gQ.current.useDeferredValue(A)};GA.useEffect=function(A,B){return gQ.current.useEffect(A,B)};GA.useId=function(){return gQ.current.useId()};GA.useImperativeHandle=function(A,B,Q){return gQ.current.useImperativeHandle(A,B,Q)};GA.useInsertionEffect=function(A,B){return gQ.current.useInsertionEffect(A,B)};GA.useLayoutEffect=function(A,B){return gQ.current.useLayoutEffect(A,B)};GA.useMemo=function(A,B){return gQ.current.useMemo(A,B)};GA.useReducer=function(A,B,Q){return gQ.current.useReducer(A,B,Q)};GA.useRef=function(A){return gQ.current.useRef(A)};GA.useState=function(A){return gQ.current.useState(A)};GA.useSyncExternalStore=function(A,B,Q){return gQ.current.useSyncExternalStore(A,B,Q)};GA.useTransition=function(){return gQ.current.useTransition()};GA.version="18.2.0";(function(A){A.exports=GA})(j2);const eQ=z2(b),At=x2({__proto__:null,default:eQ},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ak=b,ok=Symbol.for("react.element"),Ik=Symbol.for("react.fragment"),sk=Object.prototype.hasOwnProperty,ck=ak.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lk={key:!0,ref:!0,__self:!0,__source:!0};function Pm(A,B,Q){var e,t={},g=null,n=null;Q!==void 0&&(g=""+Q),B.key!==void 0&&(g=""+B.key),B.ref!==void 0&&(n=B.ref);for(e in B)sk.call(B,e)&&!lk.hasOwnProperty(e)&&(t[e]=B[e]);if(A&&A.defaultProps)for(e in B=A.defaultProps,B)t[e]===void 0&&(t[e]=B[e]);return{$$typeof:ok,type:A,key:g,ref:n,props:t,_owner:ck.current}}Mo.Fragment=Ik;Mo.jsx=Pm;Mo.jsxs=Pm;(function(A){A.exports=Mo})(P2);const zC=xC.Fragment,x=xC.jsx,lA=xC.jsxs;var yw={},Nw={},wk={get exports(){return Nw},set exports(A){Nw=A}},YQ={},bw={},Fk={get exports(){return bw},set exports(A){bw=A}},jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function B(G,v){var S=G.length;G.push(v);A:for(;0<S;){var k=S-1>>>1,Z=G[k];if(0<t(Z,v))G[k]=v,G[S]=Z,S=k;else break A}}function Q(G){return G.length===0?null:G[0]}function e(G){if(G.length===0)return null;var v=G[0],S=G.pop();if(S!==v){G[0]=S;A:for(var k=0,Z=G.length,T=Z>>>1;k<T;){var O=2*(k+1)-1,eA=G[O],N=O+1,$=G[N];if(0>t(eA,S))N<Z&&0>t($,eA)?(G[k]=$,G[N]=S,k=N):(G[k]=eA,G[O]=S,k=O);else if(N<Z&&0>t($,S))G[k]=$,G[N]=S,k=N;else break A}}return v}function t(G,v){var S=G.sortIndex-v.sortIndex;return S!==0?S:G.id-v.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;A.unstable_now=function(){return g.now()}}else{var n=Date,E=n.now();A.unstable_now=function(){return n.now()-E}}var C=[],i=[],r=1,a=null,o=3,l=!1,I=!1,w=!1,U=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function s(G){for(var v=Q(i);v!==null;){if(v.callback===null)e(i);else if(v.startTime<=G)e(i),v.sortIndex=v.expirationTime,B(C,v);else break;v=Q(i)}}function u(G){if(w=!1,s(G),!I)if(Q(C)!==null)I=!0,q(f);else{var v=Q(i);v!==null&&y(u,v.startTime-G)}}function f(G,v){I=!1,w&&(w=!1,c(Y),Y=-1),l=!0;var S=o;try{for(s(v),a=Q(C);a!==null&&(!(a.expirationTime>v)||G&&!X());){var k=a.callback;if(typeof k=="function"){a.callback=null,o=a.priorityLevel;var Z=k(a.expirationTime<=v);v=A.unstable_now(),typeof Z=="function"?a.callback=Z:a===Q(C)&&e(C),s(v)}else e(C);a=Q(C)}if(a!==null)var T=!0;else{var O=Q(i);O!==null&&y(u,O.startTime-v),T=!1}return T}finally{a=null,o=S,l=!1}}var M=!1,h=null,Y=-1,m=5,L=-1;function X(){return!(A.unstable_now()-L<m)}function W(){if(h!==null){var G=A.unstable_now();L=G;var v=!0;try{v=h(!0,G)}finally{v?K():(M=!1,h=null)}}else M=!1}var K;if(typeof D=="function")K=function(){D(W)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,J=R.port2;R.port1.onmessage=W,K=function(){J.postMessage(null)}}else K=function(){U(W,0)};function q(G){h=G,M||(M=!0,K())}function y(G,v){Y=U(function(){G(A.unstable_now())},v)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(G){G.callback=null},A.unstable_continueExecution=function(){I||l||(I=!0,q(f))},A.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<G?Math.floor(1e3/G):5},A.unstable_getCurrentPriorityLevel=function(){return o},A.unstable_getFirstCallbackNode=function(){return Q(C)},A.unstable_next=function(G){switch(o){case 1:case 2:case 3:var v=3;break;default:v=o}var S=o;o=v;try{return G()}finally{o=S}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(G,v){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var S=o;o=G;try{return v()}finally{o=S}},A.unstable_scheduleCallback=function(G,v,S){var k=A.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?k+S:k):S=k,G){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=S+Z,G={id:r++,callback:v,priorityLevel:G,startTime:S,expirationTime:Z,sortIndex:-1},S>k?(G.sortIndex=S,B(i,G),Q(C)===null&&G===Q(i)&&(w?(c(Y),Y=-1):w=!0,y(u,S-k))):(G.sortIndex=Z,B(C,G),I||l||(I=!0,q(f))),G},A.unstable_shouldYield=X,A.unstable_wrapCallback=function(G){var v=o;return function(){var S=o;o=v;try{return G.apply(this,arguments)}finally{o=S}}}})(jm);(function(A){A.exports=jm})(Fk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km=b,RQ=bw;function tA(A){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+A,Q=1;Q<arguments.length;Q++)B+="&args[]="+encodeURIComponent(arguments[Q]);return"Minified React error #"+A+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qm=new Set,PC={};function Zg(A,B){Tn(A,B),Tn(A+"Capture",B)}function Tn(A,B){for(PC[A]=B,A=0;A<B.length;A++)qm.add(B[A])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jw=Object.prototype.hasOwnProperty,Dk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H0={},O0={};function uk(A){return Jw.call(O0,A)?!0:Jw.call(H0,A)?!1:Dk.test(A)?O0[A]=!0:(H0[A]=!0,!1)}function fk(A,B,Q,e){if(Q!==null&&Q.type===0)return!1;switch(typeof B){case"function":case"symbol":return!0;case"boolean":return e?!1:Q!==null?!Q.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function Uk(A,B,Q,e){if(B===null||typeof B>"u"||fk(A,B,Q,e))return!0;if(e)return!1;if(Q!==null)switch(Q.type){case 3:return!B;case 4:return B===!1;case 5:return isNaN(B);case 6:return isNaN(B)||1>B}return!1}function nQ(A,B,Q,e,t,g,n){this.acceptsBooleans=B===2||B===3||B===4,this.attributeName=e,this.attributeNamespace=t,this.mustUseProperty=Q,this.propertyName=A,this.type=B,this.sanitizeURL=g,this.removeEmptyString=n}var bB={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){bB[A]=new nQ(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var B=A[0];bB[B]=new nQ(B,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){bB[A]=new nQ(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){bB[A]=new nQ(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){bB[A]=new nQ(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){bB[A]=new nQ(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){bB[A]=new nQ(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){bB[A]=new nQ(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){bB[A]=new nQ(A,5,!1,A.toLowerCase(),null,!1,!1)});var XD=/[\-:]([a-z])/g;function HD(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var B=A.replace(XD,HD);bB[B]=new nQ(B,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var B=A.replace(XD,HD);bB[B]=new nQ(B,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var B=A.replace(XD,HD);bB[B]=new nQ(B,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){bB[A]=new nQ(A,1,!1,A.toLowerCase(),null,!1,!1)});bB.xlinkHref=new nQ("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){bB[A]=new nQ(A,1,!1,A.toLowerCase(),null,!0,!0)});function OD(A,B,Q,e){var t=bB.hasOwnProperty(B)?bB[B]:null;(t!==null?t.type!==0:e||!(2<B.length)||B[0]!=="o"&&B[0]!=="O"||B[1]!=="n"&&B[1]!=="N")&&(Uk(B,Q,t,e)&&(Q=null),e||t===null?uk(B)&&(Q===null?A.removeAttribute(B):A.setAttribute(B,""+Q)):t.mustUseProperty?A[t.propertyName]=Q===null?t.type===3?!1:"":Q:(B=t.attributeName,e=t.attributeNamespace,Q===null?A.removeAttribute(B):(t=t.type,Q=t===3||t===4&&Q===!0?"":""+Q,e?A.setAttributeNS(e,B,Q):A.setAttribute(B,Q))))}var Ct=Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mr=Symbol.for("react.element"),wn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),WD=Symbol.for("react.strict_mode"),kw=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),$m=Symbol.for("react.context"),TD=Symbol.for("react.forward_ref"),vw=Symbol.for("react.suspense"),Zw=Symbol.for("react.suspense_list"),VD=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),AY=Symbol.for("react.offscreen"),W0=Symbol.iterator;function PE(A){return A===null||typeof A!="object"?null:(A=W0&&A[W0]||A["@@iterator"],typeof A=="function"?A:null)}var QB=Object.assign,Hc;function wC(A){if(Hc===void 0)try{throw Error()}catch(Q){var B=Q.stack.trim().match(/\n( *(at )?)/);Hc=B&&B[1]||""}return`
`+Hc+A}var Oc=!1;function Wc(A,B){if(!A||Oc)return"";Oc=!0;var Q=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(B)if(B=function(){throw Error()},Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(i){var e=i}Reflect.construct(A,[],B)}else{try{B.call()}catch(i){e=i}A.call(B.prototype)}else{try{throw Error()}catch(i){e=i}A()}}catch(i){if(i&&e&&typeof i.stack=="string"){for(var t=i.stack.split(`
`),g=e.stack.split(`
`),n=t.length-1,E=g.length-1;1<=n&&0<=E&&t[n]!==g[E];)E--;for(;1<=n&&0<=E;n--,E--)if(t[n]!==g[E]){if(n!==1||E!==1)do if(n--,E--,0>E||t[n]!==g[E]){var C=`
`+t[n].replace(" at new "," at ");return A.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",A.displayName)),C}while(1<=n&&0<=E);break}}}finally{Oc=!1,Error.prepareStackTrace=Q}return(A=A?A.displayName||A.name:"")?wC(A):""}function dk(A){switch(A.tag){case 5:return wC(A.type);case 16:return wC("Lazy");case 13:return wC("Suspense");case 19:return wC("SuspenseList");case 0:case 2:case 15:return A=Wc(A.type,!1),A;case 11:return A=Wc(A.type.render,!1),A;case 1:return A=Wc(A.type,!0),A;default:return""}}function Sw(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case Fn:return"Fragment";case wn:return"Portal";case kw:return"Profiler";case WD:return"StrictMode";case vw:return"Suspense";case Zw:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case $m:return(A.displayName||"Context")+".Consumer";case _m:return(A._context.displayName||"Context")+".Provider";case TD:var B=A.render;return A=A.displayName,A||(A=B.displayName||B.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case VD:return B=A.displayName||null,B!==null?B:Sw(A.type)||"Memo";case Dt:B=A._payload,A=A._init;try{return Sw(A(B))}catch{}}return null}function Mk(A){var B=A.type;switch(A.tag){case 24:return"Cache";case 9:return(B.displayName||"Context")+".Consumer";case 10:return(B._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=B.render,A=A.displayName||A.name||"",B.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return B;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sw(B);case 8:return B===WD?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof B=="function")return B.displayName||B.name||null;if(typeof B=="string")return B}return null}function Tt(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function BY(A){var B=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(B==="checkbox"||B==="radio")}function hk(A){var B=BY(A)?"checked":"value",Q=Object.getOwnPropertyDescriptor(A.constructor.prototype,B),e=""+A[B];if(!A.hasOwnProperty(B)&&typeof Q<"u"&&typeof Q.get=="function"&&typeof Q.set=="function"){var t=Q.get,g=Q.set;return Object.defineProperty(A,B,{configurable:!0,get:function(){return t.call(this)},set:function(n){e=""+n,g.call(this,n)}}),Object.defineProperty(A,B,{enumerable:Q.enumerable}),{getValue:function(){return e},setValue:function(n){e=""+n},stopTracking:function(){A._valueTracker=null,delete A[B]}}}}function hr(A){A._valueTracker||(A._valueTracker=hk(A))}function QY(A){if(!A)return!1;var B=A._valueTracker;if(!B)return!0;var Q=B.getValue(),e="";return A&&(e=BY(A)?A.checked?"true":"false":A.value),A=e,A!==Q?(B.setValue(A),!0):!1}function Ra(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function Lw(A,B){var Q=B.checked;return QB({},B,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:Q??A._wrapperState.initialChecked})}function T0(A,B){var Q=B.defaultValue==null?"":B.defaultValue,e=B.checked!=null?B.checked:B.defaultChecked;Q=Tt(B.value!=null?B.value:Q),A._wrapperState={initialChecked:e,initialValue:Q,controlled:B.type==="checkbox"||B.type==="radio"?B.checked!=null:B.value!=null}}function eY(A,B){B=B.checked,B!=null&&OD(A,"checked",B,!1)}function Xw(A,B){eY(A,B);var Q=Tt(B.value),e=B.type;if(Q!=null)e==="number"?(Q===0&&A.value===""||A.value!=Q)&&(A.value=""+Q):A.value!==""+Q&&(A.value=""+Q);else if(e==="submit"||e==="reset"){A.removeAttribute("value");return}B.hasOwnProperty("value")?Hw(A,B.type,Q):B.hasOwnProperty("defaultValue")&&Hw(A,B.type,Tt(B.defaultValue)),B.checked==null&&B.defaultChecked!=null&&(A.defaultChecked=!!B.defaultChecked)}function V0(A,B,Q){if(B.hasOwnProperty("value")||B.hasOwnProperty("defaultValue")){var e=B.type;if(!(e!=="submit"&&e!=="reset"||B.value!==void 0&&B.value!==null))return;B=""+A._wrapperState.initialValue,Q||B===A.value||(A.value=B),A.defaultValue=B}Q=A.name,Q!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,Q!==""&&(A.name=Q)}function Hw(A,B,Q){(B!=="number"||Ra(A.ownerDocument)!==A)&&(Q==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+Q&&(A.defaultValue=""+Q))}var FC=Array.isArray;function kn(A,B,Q,e){if(A=A.options,B){B={};for(var t=0;t<Q.length;t++)B["$"+Q[t]]=!0;for(Q=0;Q<A.length;Q++)t=B.hasOwnProperty("$"+A[Q].value),A[Q].selected!==t&&(A[Q].selected=t),t&&e&&(A[Q].defaultSelected=!0)}else{for(Q=""+Tt(Q),B=null,t=0;t<A.length;t++){if(A[t].value===Q){A[t].selected=!0,e&&(A[t].defaultSelected=!0);return}B!==null||A[t].disabled||(B=A[t])}B!==null&&(B.selected=!0)}}function Ow(A,B){if(B.dangerouslySetInnerHTML!=null)throw Error(tA(91));return QB({},B,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function x0(A,B){var Q=B.value;if(Q==null){if(Q=B.children,B=B.defaultValue,Q!=null){if(B!=null)throw Error(tA(92));if(FC(Q)){if(1<Q.length)throw Error(tA(93));Q=Q[0]}B=Q}B==null&&(B=""),Q=B}A._wrapperState={initialValue:Tt(Q)}}function tY(A,B){var Q=Tt(B.value),e=Tt(B.defaultValue);Q!=null&&(Q=""+Q,Q!==A.value&&(A.value=Q),B.defaultValue==null&&A.defaultValue!==Q&&(A.defaultValue=Q)),e!=null&&(A.defaultValue=""+e)}function z0(A){var B=A.textContent;B===A._wrapperState.initialValue&&B!==""&&B!==null&&(A.value=B)}function gY(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ww(A,B){return A==null||A==="http://www.w3.org/1999/xhtml"?gY(B):A==="http://www.w3.org/2000/svg"&&B==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var Gr,nY=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(B,Q,e,t){MSApp.execUnsafeLocalFunction(function(){return A(B,Q,e,t)})}:A}(function(A,B){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=B;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+B.valueOf().toString()+"</svg>",B=Gr.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;B.firstChild;)A.appendChild(B.firstChild)}});function jC(A,B){if(B){var Q=A.firstChild;if(Q&&Q===A.lastChild&&Q.nodeType===3){Q.nodeValue=B;return}}A.textContent=B}var MC={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gk=["Webkit","ms","Moz","O"];Object.keys(MC).forEach(function(A){Gk.forEach(function(B){B=B+A.charAt(0).toUpperCase()+A.substring(1),MC[B]=MC[A]})});function EY(A,B,Q){return B==null||typeof B=="boolean"||B===""?"":Q||typeof B!="number"||B===0||MC.hasOwnProperty(A)&&MC[A]?(""+B).trim():B+"px"}function CY(A,B){A=A.style;for(var Q in B)if(B.hasOwnProperty(Q)){var e=Q.indexOf("--")===0,t=EY(Q,B[Q],e);Q==="float"&&(Q="cssFloat"),e?A.setProperty(Q,t):A[Q]=t}}var Rk=QB({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tw(A,B){if(B){if(Rk[A]&&(B.children!=null||B.dangerouslySetInnerHTML!=null))throw Error(tA(137,A));if(B.dangerouslySetInnerHTML!=null){if(B.children!=null)throw Error(tA(60));if(typeof B.dangerouslySetInnerHTML!="object"||!("__html"in B.dangerouslySetInnerHTML))throw Error(tA(61))}if(B.style!=null&&typeof B.style!="object")throw Error(tA(62))}}function Vw(A,B){if(A.indexOf("-")===-1)return typeof B.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xw=null;function xD(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var zw=null,vn=null,Zn=null;function P0(A){if(A=Yi(A)){if(typeof zw!="function")throw Error(tA(280));var B=A.stateNode;B&&(B=Yo(B),zw(A.stateNode,A.type,B))}}function iY(A){vn?Zn?Zn.push(A):Zn=[A]:vn=A}function rY(){if(vn){var A=vn,B=Zn;if(Zn=vn=null,P0(A),B)for(A=0;A<B.length;A++)P0(B[A])}}function aY(A,B){return A(B)}function oY(){}var Tc=!1;function IY(A,B,Q){if(Tc)return A(B,Q);Tc=!0;try{return aY(A,B,Q)}finally{Tc=!1,(vn!==null||Zn!==null)&&(oY(),rY())}}function KC(A,B){var Q=A.stateNode;if(Q===null)return null;var e=Yo(Q);if(e===null)return null;Q=e[B];A:switch(B){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(A=A.type,e=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!e;break A;default:A=!1}if(A)return null;if(Q&&typeof Q!="function")throw Error(tA(231,B,typeof Q));return Q}var Pw=!1;if(Bt)try{var jE={};Object.defineProperty(jE,"passive",{get:function(){Pw=!0}}),window.addEventListener("test",jE,jE),window.removeEventListener("test",jE,jE)}catch{Pw=!1}function mk(A,B,Q,e,t,g,n,E,C){var i=Array.prototype.slice.call(arguments,3);try{B.apply(Q,i)}catch(r){this.onError(r)}}var hC=!1,ma=null,Ya=!1,jw=null,Yk={onError:function(A){hC=!0,ma=A}};function pk(A,B,Q,e,t,g,n,E,C){hC=!1,ma=null,mk.apply(Yk,arguments)}function yk(A,B,Q,e,t,g,n,E,C){if(pk.apply(this,arguments),hC){if(hC){var i=ma;hC=!1,ma=null}else throw Error(tA(198));Ya||(Ya=!0,jw=i)}}function Sg(A){var B=A,Q=A;if(A.alternate)for(;B.return;)B=B.return;else{A=B;do B=A,B.flags&4098&&(Q=B.return),A=B.return;while(A)}return B.tag===3?Q:null}function sY(A){if(A.tag===13){var B=A.memoizedState;if(B===null&&(A=A.alternate,A!==null&&(B=A.memoizedState)),B!==null)return B.dehydrated}return null}function j0(A){if(Sg(A)!==A)throw Error(tA(188))}function Nk(A){var B=A.alternate;if(!B){if(B=Sg(A),B===null)throw Error(tA(188));return B!==A?null:A}for(var Q=A,e=B;;){var t=Q.return;if(t===null)break;var g=t.alternate;if(g===null){if(e=t.return,e!==null){Q=e;continue}break}if(t.child===g.child){for(g=t.child;g;){if(g===Q)return j0(t),A;if(g===e)return j0(t),B;g=g.sibling}throw Error(tA(188))}if(Q.return!==e.return)Q=t,e=g;else{for(var n=!1,E=t.child;E;){if(E===Q){n=!0,Q=t,e=g;break}if(E===e){n=!0,e=t,Q=g;break}E=E.sibling}if(!n){for(E=g.child;E;){if(E===Q){n=!0,Q=g,e=t;break}if(E===e){n=!0,e=g,Q=t;break}E=E.sibling}if(!n)throw Error(tA(189))}}if(Q.alternate!==e)throw Error(tA(190))}if(Q.tag!==3)throw Error(tA(188));return Q.stateNode.current===Q?A:B}function cY(A){return A=Nk(A),A!==null?lY(A):null}function lY(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var B=lY(A);if(B!==null)return B;A=A.sibling}return null}var wY=RQ.unstable_scheduleCallback,K0=RQ.unstable_cancelCallback,bk=RQ.unstable_shouldYield,Jk=RQ.unstable_requestPaint,EB=RQ.unstable_now,kk=RQ.unstable_getCurrentPriorityLevel,zD=RQ.unstable_ImmediatePriority,FY=RQ.unstable_UserBlockingPriority,pa=RQ.unstable_NormalPriority,vk=RQ.unstable_LowPriority,DY=RQ.unstable_IdlePriority,ho=null,me=null;function Zk(A){if(me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(ho,A,void 0,(A.current.flags&128)===128)}catch{}}var ee=Math.clz32?Math.clz32:Xk,Sk=Math.log,Lk=Math.LN2;function Xk(A){return A>>>=0,A===0?32:31-(Sk(A)/Lk|0)|0}var Rr=64,mr=4194304;function DC(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function ya(A,B){var Q=A.pendingLanes;if(Q===0)return 0;var e=0,t=A.suspendedLanes,g=A.pingedLanes,n=Q&268435455;if(n!==0){var E=n&~t;E!==0?e=DC(E):(g&=n,g!==0&&(e=DC(g)))}else n=Q&~t,n!==0?e=DC(n):g!==0&&(e=DC(g));if(e===0)return 0;if(B!==0&&B!==e&&!(B&t)&&(t=e&-e,g=B&-B,t>=g||t===16&&(g&4194240)!==0))return B;if(e&4&&(e|=Q&16),B=A.entangledLanes,B!==0)for(A=A.entanglements,B&=e;0<B;)Q=31-ee(B),t=1<<Q,e|=A[Q],B&=~t;return e}function Hk(A,B){switch(A){case 1:case 2:case 4:return B+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return B+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ok(A,B){for(var Q=A.suspendedLanes,e=A.pingedLanes,t=A.expirationTimes,g=A.pendingLanes;0<g;){var n=31-ee(g),E=1<<n,C=t[n];C===-1?(!(E&Q)||E&e)&&(t[n]=Hk(E,B)):C<=B&&(A.expiredLanes|=E),g&=~E}}function Kw(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function uY(){var A=Rr;return Rr<<=1,!(Rr&4194240)&&(Rr=64),A}function Vc(A){for(var B=[],Q=0;31>Q;Q++)B.push(A);return B}function Ri(A,B,Q){A.pendingLanes|=B,B!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,B=31-ee(B),A[B]=Q}function Wk(A,B){var Q=A.pendingLanes&~B;A.pendingLanes=B,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=B,A.mutableReadLanes&=B,A.entangledLanes&=B,B=A.entanglements;var e=A.eventTimes;for(A=A.expirationTimes;0<Q;){var t=31-ee(Q),g=1<<t;B[t]=0,e[t]=-1,A[t]=-1,Q&=~g}}function PD(A,B){var Q=A.entangledLanes|=B;for(A=A.entanglements;Q;){var e=31-ee(Q),t=1<<e;t&B|A[e]&B&&(A[e]|=B),Q&=~t}}var JA=0;function fY(A){return A&=-A,1<A?4<A?A&268435455?16:536870912:4:1}var UY,jD,dY,MY,hY,qw=!1,Yr=[],yt=null,Nt=null,bt=null,qC=new Map,_C=new Map,dt=[],Tk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function q0(A,B){switch(A){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":qC.delete(B.pointerId);break;case"gotpointercapture":case"lostpointercapture":_C.delete(B.pointerId)}}function KE(A,B,Q,e,t,g){return A===null||A.nativeEvent!==g?(A={blockedOn:B,domEventName:Q,eventSystemFlags:e,nativeEvent:g,targetContainers:[t]},B!==null&&(B=Yi(B),B!==null&&jD(B)),A):(A.eventSystemFlags|=e,B=A.targetContainers,t!==null&&B.indexOf(t)===-1&&B.push(t),A)}function Vk(A,B,Q,e,t){switch(B){case"focusin":return yt=KE(yt,A,B,Q,e,t),!0;case"dragenter":return Nt=KE(Nt,A,B,Q,e,t),!0;case"mouseover":return bt=KE(bt,A,B,Q,e,t),!0;case"pointerover":var g=t.pointerId;return qC.set(g,KE(qC.get(g)||null,A,B,Q,e,t)),!0;case"gotpointercapture":return g=t.pointerId,_C.set(g,KE(_C.get(g)||null,A,B,Q,e,t)),!0}return!1}function GY(A){var B=Dg(A.target);if(B!==null){var Q=Sg(B);if(Q!==null){if(B=Q.tag,B===13){if(B=sY(Q),B!==null){A.blockedOn=B,hY(A.priority,function(){dY(Q)});return}}else if(B===3&&Q.stateNode.current.memoizedState.isDehydrated){A.blockedOn=Q.tag===3?Q.stateNode.containerInfo:null;return}}}A.blockedOn=null}function na(A){if(A.blockedOn!==null)return!1;for(var B=A.targetContainers;0<B.length;){var Q=_w(A.domEventName,A.eventSystemFlags,B[0],A.nativeEvent);if(Q===null){Q=A.nativeEvent;var e=new Q.constructor(Q.type,Q);xw=e,Q.target.dispatchEvent(e),xw=null}else return B=Yi(Q),B!==null&&jD(B),A.blockedOn=Q,!1;B.shift()}return!0}function _0(A,B,Q){na(A)&&Q.delete(B)}function xk(){qw=!1,yt!==null&&na(yt)&&(yt=null),Nt!==null&&na(Nt)&&(Nt=null),bt!==null&&na(bt)&&(bt=null),qC.forEach(_0),_C.forEach(_0)}function qE(A,B){A.blockedOn===B&&(A.blockedOn=null,qw||(qw=!0,RQ.unstable_scheduleCallback(RQ.unstable_NormalPriority,xk)))}function $C(A){function B(t){return qE(t,A)}if(0<Yr.length){qE(Yr[0],A);for(var Q=1;Q<Yr.length;Q++){var e=Yr[Q];e.blockedOn===A&&(e.blockedOn=null)}}for(yt!==null&&qE(yt,A),Nt!==null&&qE(Nt,A),bt!==null&&qE(bt,A),qC.forEach(B),_C.forEach(B),Q=0;Q<dt.length;Q++)e=dt[Q],e.blockedOn===A&&(e.blockedOn=null);for(;0<dt.length&&(Q=dt[0],Q.blockedOn===null);)GY(Q),Q.blockedOn===null&&dt.shift()}var Sn=Ct.ReactCurrentBatchConfig,Na=!0;function zk(A,B,Q,e){var t=JA,g=Sn.transition;Sn.transition=null;try{JA=1,KD(A,B,Q,e)}finally{JA=t,Sn.transition=g}}function Pk(A,B,Q,e){var t=JA,g=Sn.transition;Sn.transition=null;try{JA=4,KD(A,B,Q,e)}finally{JA=t,Sn.transition=g}}function KD(A,B,Q,e){if(Na){var t=_w(A,B,Q,e);if(t===null)Bl(A,B,e,ba,Q),q0(A,e);else if(Vk(t,A,B,Q,e))e.stopPropagation();else if(q0(A,e),B&4&&-1<Tk.indexOf(A)){for(;t!==null;){var g=Yi(t);if(g!==null&&UY(g),g=_w(A,B,Q,e),g===null&&Bl(A,B,e,ba,Q),g===t)break;t=g}t!==null&&e.stopPropagation()}else Bl(A,B,e,null,Q)}}var ba=null;function _w(A,B,Q,e){if(ba=null,A=xD(e),A=Dg(A),A!==null)if(B=Sg(A),B===null)A=null;else if(Q=B.tag,Q===13){if(A=sY(B),A!==null)return A;A=null}else if(Q===3){if(B.stateNode.current.memoizedState.isDehydrated)return B.tag===3?B.stateNode.containerInfo:null;A=null}else B!==A&&(A=null);return ba=A,null}function RY(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kk()){case zD:return 1;case FY:return 4;case pa:case vk:return 16;case DY:return 536870912;default:return 16}default:return 16}}var Gt=null,qD=null,Ea=null;function mY(){if(Ea)return Ea;var A,B=qD,Q=B.length,e,t="value"in Gt?Gt.value:Gt.textContent,g=t.length;for(A=0;A<Q&&B[A]===t[A];A++);var n=Q-A;for(e=1;e<=n&&B[Q-e]===t[g-e];e++);return Ea=t.slice(A,1<e?1-e:void 0)}function Ca(A){var B=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&B===13&&(A=13)):A=B,A===10&&(A=13),32<=A||A===13?A:0}function pr(){return!0}function $0(){return!1}function pQ(A){function B(Q,e,t,g,n){this._reactName=Q,this._targetInst=t,this.type=e,this.nativeEvent=g,this.target=n,this.currentTarget=null;for(var E in A)A.hasOwnProperty(E)&&(Q=A[E],this[E]=Q?Q(g):g[E]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?pr:$0,this.isPropagationStopped=$0,this}return QB(B.prototype,{preventDefault:function(){this.defaultPrevented=!0;var Q=this.nativeEvent;Q&&(Q.preventDefault?Q.preventDefault():typeof Q.returnValue!="unknown"&&(Q.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var Q=this.nativeEvent;Q&&(Q.stopPropagation?Q.stopPropagation():typeof Q.cancelBubble!="unknown"&&(Q.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),B}var EE={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_D=pQ(EE),mi=QB({},EE,{view:0,detail:0}),jk=pQ(mi),xc,zc,_E,Go=QB({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$D,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==_E&&(_E&&A.type==="mousemove"?(xc=A.screenX-_E.screenX,zc=A.screenY-_E.screenY):zc=xc=0,_E=A),xc)},movementY:function(A){return"movementY"in A?A.movementY:zc}}),Ad=pQ(Go),Kk=QB({},Go,{dataTransfer:0}),qk=pQ(Kk),_k=QB({},mi,{relatedTarget:0}),Pc=pQ(_k),$k=QB({},EE,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=pQ($k),Bv=QB({},EE,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),Qv=pQ(Bv),ev=QB({},EE,{data:0}),Bd=pQ(ev),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(A){var B=this.nativeEvent;return B.getModifierState?B.getModifierState(A):(A=nv[A])?!!B[A]:!1}function $D(){return Ev}var Cv=QB({},mi,{key:function(A){if(A.key){var B=tv[A.key]||A.key;if(B!=="Unidentified")return B}return A.type==="keypress"?(A=Ca(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?gv[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$D,charCode:function(A){return A.type==="keypress"?Ca(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?Ca(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),iv=pQ(Cv),rv=QB({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=pQ(rv),av=QB({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$D}),ov=pQ(av),Iv=QB({},EE,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=pQ(Iv),cv=QB({},Go,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),lv=pQ(cv),wv=[9,13,27,32],Au=Bt&&"CompositionEvent"in window,GC=null;Bt&&"documentMode"in document&&(GC=document.documentMode);var Fv=Bt&&"TextEvent"in window&&!GC,YY=Bt&&(!Au||GC&&8<GC&&11>=GC),ed=String.fromCharCode(32),td=!1;function pY(A,B){switch(A){case"keyup":return wv.indexOf(B.keyCode)!==-1;case"keydown":return B.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yY(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Dn=!1;function Dv(A,B){switch(A){case"compositionend":return yY(B);case"keypress":return B.which!==32?null:(td=!0,ed);case"textInput":return A=B.data,A===ed&&td?null:A;default:return null}}function uv(A,B){if(Dn)return A==="compositionend"||!Au&&pY(A,B)?(A=mY(),Ea=qD=Gt=null,Dn=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(B.ctrlKey||B.altKey||B.metaKey)||B.ctrlKey&&B.altKey){if(B.char&&1<B.char.length)return B.char;if(B.which)return String.fromCharCode(B.which)}return null;case"compositionend":return YY&&B.locale!=="ko"?null:B.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(A){var B=A&&A.nodeName&&A.nodeName.toLowerCase();return B==="input"?!!fv[A.type]:B==="textarea"}function NY(A,B,Q,e){iY(e),B=Ja(B,"onChange"),0<B.length&&(Q=new _D("onChange","change",null,Q,e),A.push({event:Q,listeners:B}))}var RC=null,Ai=null;function Uv(A){WY(A,0)}function Ro(A){var B=Un(A);if(QY(B))return A}function dv(A,B){if(A==="change")return B}var bY=!1;if(Bt){var jc;if(Bt){var Kc="oninput"in document;if(!Kc){var nd=document.createElement("div");nd.setAttribute("oninput","return;"),Kc=typeof nd.oninput=="function"}jc=Kc}else jc=!1;bY=jc&&(!document.documentMode||9<document.documentMode)}function Ed(){RC&&(RC.detachEvent("onpropertychange",JY),Ai=RC=null)}function JY(A){if(A.propertyName==="value"&&Ro(Ai)){var B=[];NY(B,Ai,A,xD(A)),IY(Uv,B)}}function Mv(A,B,Q){A==="focusin"?(Ed(),RC=B,Ai=Q,RC.attachEvent("onpropertychange",JY)):A==="focusout"&&Ed()}function hv(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Ro(Ai)}function Gv(A,B){if(A==="click")return Ro(B)}function Rv(A,B){if(A==="input"||A==="change")return Ro(B)}function mv(A,B){return A===B&&(A!==0||1/A===1/B)||A!==A&&B!==B}var ge=typeof Object.is=="function"?Object.is:mv;function Bi(A,B){if(ge(A,B))return!0;if(typeof A!="object"||A===null||typeof B!="object"||B===null)return!1;var Q=Object.keys(A),e=Object.keys(B);if(Q.length!==e.length)return!1;for(e=0;e<Q.length;e++){var t=Q[e];if(!Jw.call(B,t)||!ge(A[t],B[t]))return!1}return!0}function Cd(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function id(A,B){var Q=Cd(A);A=0;for(var e;Q;){if(Q.nodeType===3){if(e=A+Q.textContent.length,A<=B&&e>=B)return{node:Q,offset:B-A};A=e}A:{for(;Q;){if(Q.nextSibling){Q=Q.nextSibling;break A}Q=Q.parentNode}Q=void 0}Q=Cd(Q)}}function kY(A,B){return A&&B?A===B?!0:A&&A.nodeType===3?!1:B&&B.nodeType===3?kY(A,B.parentNode):"contains"in A?A.contains(B):A.compareDocumentPosition?!!(A.compareDocumentPosition(B)&16):!1:!1}function vY(){for(var A=window,B=Ra();B instanceof A.HTMLIFrameElement;){try{var Q=typeof B.contentWindow.location.href=="string"}catch{Q=!1}if(Q)A=B.contentWindow;else break;B=Ra(A.document)}return B}function Bu(A){var B=A&&A.nodeName&&A.nodeName.toLowerCase();return B&&(B==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||B==="textarea"||A.contentEditable==="true")}function Yv(A){var B=vY(),Q=A.focusedElem,e=A.selectionRange;if(B!==Q&&Q&&Q.ownerDocument&&kY(Q.ownerDocument.documentElement,Q)){if(e!==null&&Bu(Q)){if(B=e.start,A=e.end,A===void 0&&(A=B),"selectionStart"in Q)Q.selectionStart=B,Q.selectionEnd=Math.min(A,Q.value.length);else if(A=(B=Q.ownerDocument||document)&&B.defaultView||window,A.getSelection){A=A.getSelection();var t=Q.textContent.length,g=Math.min(e.start,t);e=e.end===void 0?g:Math.min(e.end,t),!A.extend&&g>e&&(t=e,e=g,g=t),t=id(Q,g);var n=id(Q,e);t&&n&&(A.rangeCount!==1||A.anchorNode!==t.node||A.anchorOffset!==t.offset||A.focusNode!==n.node||A.focusOffset!==n.offset)&&(B=B.createRange(),B.setStart(t.node,t.offset),A.removeAllRanges(),g>e?(A.addRange(B),A.extend(n.node,n.offset)):(B.setEnd(n.node,n.offset),A.addRange(B)))}}for(B=[],A=Q;A=A.parentNode;)A.nodeType===1&&B.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof Q.focus=="function"&&Q.focus(),Q=0;Q<B.length;Q++)A=B[Q],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var pv=Bt&&"documentMode"in document&&11>=document.documentMode,un=null,$w=null,mC=null,AF=!1;function rd(A,B,Q){var e=Q.window===Q?Q.document:Q.nodeType===9?Q:Q.ownerDocument;AF||un==null||un!==Ra(e)||(e=un,"selectionStart"in e&&Bu(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),mC&&Bi(mC,e)||(mC=e,e=Ja($w,"onSelect"),0<e.length&&(B=new _D("onSelect","select",null,B,Q),A.push({event:B,listeners:e}),B.target=un)))}function yr(A,B){var Q={};return Q[A.toLowerCase()]=B.toLowerCase(),Q["Webkit"+A]="webkit"+B,Q["Moz"+A]="moz"+B,Q}var fn={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},qc={},ZY={};Bt&&(ZY=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function mo(A){if(qc[A])return qc[A];if(!fn[A])return A;var B=fn[A],Q;for(Q in B)if(B.hasOwnProperty(Q)&&Q in ZY)return qc[A]=B[Q];return A}var SY=mo("animationend"),LY=mo("animationiteration"),XY=mo("animationstart"),HY=mo("transitionend"),OY=new Map,ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(A,B){OY.set(A,B),Zg(B,[A])}for(var _c=0;_c<ad.length;_c++){var $c=ad[_c],yv=$c.toLowerCase(),Nv=$c[0].toUpperCase()+$c.slice(1);jt(yv,"on"+Nv)}jt(SY,"onAnimationEnd");jt(LY,"onAnimationIteration");jt(XY,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(HY,"onTransitionEnd");Tn("onMouseEnter",["mouseout","mouseover"]);Tn("onMouseLeave",["mouseout","mouseover"]);Tn("onPointerEnter",["pointerout","pointerover"]);Tn("onPointerLeave",["pointerout","pointerover"]);Zg("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zg("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zg("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zg("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zg("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zg("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uC="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(uC));function od(A,B,Q){var e=A.type||"unknown-event";A.currentTarget=Q,yk(e,B,void 0,A),A.currentTarget=null}function WY(A,B){B=(B&4)!==0;for(var Q=0;Q<A.length;Q++){var e=A[Q],t=e.event;e=e.listeners;A:{var g=void 0;if(B)for(var n=e.length-1;0<=n;n--){var E=e[n],C=E.instance,i=E.currentTarget;if(E=E.listener,C!==g&&t.isPropagationStopped())break A;od(t,E,i),g=C}else for(n=0;n<e.length;n++){if(E=e[n],C=E.instance,i=E.currentTarget,E=E.listener,C!==g&&t.isPropagationStopped())break A;od(t,E,i),g=C}}}if(Ya)throw A=jw,Ya=!1,jw=null,A}function WA(A,B){var Q=B[gF];Q===void 0&&(Q=B[gF]=new Set);var e=A+"__bubble";Q.has(e)||(TY(B,A,2,!1),Q.add(e))}function Al(A,B,Q){var e=0;B&&(e|=4),TY(Q,A,e,B)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function Qi(A){if(!A[Nr]){A[Nr]=!0,qm.forEach(function(Q){Q!=="selectionchange"&&(bv.has(Q)||Al(Q,!1,A),Al(Q,!0,A))});var B=A.nodeType===9?A:A.ownerDocument;B===null||B[Nr]||(B[Nr]=!0,Al("selectionchange",!1,B))}}function TY(A,B,Q,e){switch(RY(B)){case 1:var t=zk;break;case 4:t=Pk;break;default:t=KD}Q=t.bind(null,B,Q,A),t=void 0,!Pw||B!=="touchstart"&&B!=="touchmove"&&B!=="wheel"||(t=!0),e?t!==void 0?A.addEventListener(B,Q,{capture:!0,passive:t}):A.addEventListener(B,Q,!0):t!==void 0?A.addEventListener(B,Q,{passive:t}):A.addEventListener(B,Q,!1)}function Bl(A,B,Q,e,t){var g=e;if(!(B&1)&&!(B&2)&&e!==null)A:for(;;){if(e===null)return;var n=e.tag;if(n===3||n===4){var E=e.stateNode.containerInfo;if(E===t||E.nodeType===8&&E.parentNode===t)break;if(n===4)for(n=e.return;n!==null;){var C=n.tag;if((C===3||C===4)&&(C=n.stateNode.containerInfo,C===t||C.nodeType===8&&C.parentNode===t))return;n=n.return}for(;E!==null;){if(n=Dg(E),n===null)return;if(C=n.tag,C===5||C===6){e=g=n;continue A}E=E.parentNode}}e=e.return}IY(function(){var i=g,r=xD(Q),a=[];A:{var o=OY.get(A);if(o!==void 0){var l=_D,I=A;switch(A){case"keypress":if(Ca(Q)===0)break A;case"keydown":case"keyup":l=iv;break;case"focusin":I="focus",l=Pc;break;case"focusout":I="blur",l=Pc;break;case"beforeblur":case"afterblur":l=Pc;break;case"click":if(Q.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=qk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=ov;break;case SY:case LY:case XY:l=Av;break;case HY:l=sv;break;case"scroll":l=jk;break;case"wheel":l=lv;break;case"copy":case"cut":case"paste":l=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Qd}var w=(B&4)!==0,U=!w&&A==="scroll",c=w?o!==null?o+"Capture":null:o;w=[];for(var D=i,s;D!==null;){s=D;var u=s.stateNode;if(s.tag===5&&u!==null&&(s=u,c!==null&&(u=KC(D,c),u!=null&&w.push(ei(D,u,s)))),U)break;D=D.return}0<w.length&&(o=new l(o,I,null,Q,r),a.push({event:o,listeners:w}))}}if(!(B&7)){A:{if(o=A==="mouseover"||A==="pointerover",l=A==="mouseout"||A==="pointerout",o&&Q!==xw&&(I=Q.relatedTarget||Q.fromElement)&&(Dg(I)||I[Qt]))break A;if((l||o)&&(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,l?(I=Q.relatedTarget||Q.toElement,l=i,I=I?Dg(I):null,I!==null&&(U=Sg(I),I!==U||I.tag!==5&&I.tag!==6)&&(I=null)):(l=null,I=i),l!==I)){if(w=Ad,u="onMouseLeave",c="onMouseEnter",D="mouse",(A==="pointerout"||A==="pointerover")&&(w=Qd,u="onPointerLeave",c="onPointerEnter",D="pointer"),U=l==null?o:Un(l),s=I==null?o:Un(I),o=new w(u,D+"leave",l,Q,r),o.target=U,o.relatedTarget=s,u=null,Dg(r)===i&&(w=new w(c,D+"enter",I,Q,r),w.target=s,w.relatedTarget=U,u=w),U=u,l&&I)B:{for(w=l,c=I,D=0,s=w;s;s=en(s))D++;for(s=0,u=c;u;u=en(u))s++;for(;0<D-s;)w=en(w),D--;for(;0<s-D;)c=en(c),s--;for(;D--;){if(w===c||c!==null&&w===c.alternate)break B;w=en(w),c=en(c)}w=null}else w=null;l!==null&&Id(a,o,l,w,!1),I!==null&&U!==null&&Id(a,U,I,w,!0)}}A:{if(o=i?Un(i):window,l=o.nodeName&&o.nodeName.toLowerCase(),l==="select"||l==="input"&&o.type==="file")var f=dv;else if(gd(o))if(bY)f=Rv;else{f=hv;var M=Mv}else(l=o.nodeName)&&l.toLowerCase()==="input"&&(o.type==="checkbox"||o.type==="radio")&&(f=Gv);if(f&&(f=f(A,i))){NY(a,f,Q,r);break A}M&&M(A,o,i),A==="focusout"&&(M=o._wrapperState)&&M.controlled&&o.type==="number"&&Hw(o,"number",o.value)}switch(M=i?Un(i):window,A){case"focusin":(gd(M)||M.contentEditable==="true")&&(un=M,$w=i,mC=null);break;case"focusout":mC=$w=un=null;break;case"mousedown":AF=!0;break;case"contextmenu":case"mouseup":case"dragend":AF=!1,rd(a,Q,r);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":rd(a,Q,r)}var h;if(Au)A:{switch(A){case"compositionstart":var Y="onCompositionStart";break A;case"compositionend":Y="onCompositionEnd";break A;case"compositionupdate":Y="onCompositionUpdate";break A}Y=void 0}else Dn?pY(A,Q)&&(Y="onCompositionEnd"):A==="keydown"&&Q.keyCode===229&&(Y="onCompositionStart");Y&&(YY&&Q.locale!=="ko"&&(Dn||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Dn&&(h=mY()):(Gt=r,qD="value"in Gt?Gt.value:Gt.textContent,Dn=!0)),M=Ja(i,Y),0<M.length&&(Y=new Bd(Y,A,null,Q,r),a.push({event:Y,listeners:M}),h?Y.data=h:(h=yY(Q),h!==null&&(Y.data=h)))),(h=Fv?Dv(A,Q):uv(A,Q))&&(i=Ja(i,"onBeforeInput"),0<i.length&&(r=new Bd("onBeforeInput","beforeinput",null,Q,r),a.push({event:r,listeners:i}),r.data=h))}WY(a,B)})}function ei(A,B,Q){return{instance:A,listener:B,currentTarget:Q}}function Ja(A,B){for(var Q=B+"Capture",e=[];A!==null;){var t=A,g=t.stateNode;t.tag===5&&g!==null&&(t=g,g=KC(A,Q),g!=null&&e.unshift(ei(A,g,t)),g=KC(A,B),g!=null&&e.push(ei(A,g,t))),A=A.return}return e}function en(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function Id(A,B,Q,e,t){for(var g=B._reactName,n=[];Q!==null&&Q!==e;){var E=Q,C=E.alternate,i=E.stateNode;if(C!==null&&C===e)break;E.tag===5&&i!==null&&(E=i,t?(C=KC(Q,g),C!=null&&n.unshift(ei(Q,C,E))):t||(C=KC(Q,g),C!=null&&n.push(ei(Q,C,E)))),Q=Q.return}n.length!==0&&A.push({event:B,listeners:n})}var Jv=/\r\n?/g,kv=/\u0000|\uFFFD/g;function sd(A){return(typeof A=="string"?A:""+A).replace(Jv,`
`).replace(kv,"")}function br(A,B,Q){if(B=sd(B),sd(A)!==B&&Q)throw Error(tA(425))}function ka(){}var BF=null,QF=null;function eF(A,B){return A==="textarea"||A==="noscript"||typeof B.children=="string"||typeof B.children=="number"||typeof B.dangerouslySetInnerHTML=="object"&&B.dangerouslySetInnerHTML!==null&&B.dangerouslySetInnerHTML.__html!=null}var tF=typeof setTimeout=="function"?setTimeout:void 0,vv=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(A){return cd.resolve(null).then(A).catch(Sv)}:tF;function Sv(A){setTimeout(function(){throw A})}function Ql(A,B){var Q=B,e=0;do{var t=Q.nextSibling;if(A.removeChild(Q),t&&t.nodeType===8)if(Q=t.data,Q==="/$"){if(e===0){A.removeChild(t),$C(B);return}e--}else Q!=="$"&&Q!=="$?"&&Q!=="$!"||e++;Q=t}while(Q);$C(B)}function Jt(A){for(;A!=null;A=A.nextSibling){var B=A.nodeType;if(B===1||B===3)break;if(B===8){if(B=A.data,B==="$"||B==="$!"||B==="$?")break;if(B==="/$")return null}}return A}function ld(A){A=A.previousSibling;for(var B=0;A;){if(A.nodeType===8){var Q=A.data;if(Q==="$"||Q==="$!"||Q==="$?"){if(B===0)return A;B--}else Q==="/$"&&B++}A=A.previousSibling}return null}var CE=Math.random().toString(36).slice(2),he="__reactFiber$"+CE,ti="__reactProps$"+CE,Qt="__reactContainer$"+CE,gF="__reactEvents$"+CE,Lv="__reactListeners$"+CE,Xv="__reactHandles$"+CE;function Dg(A){var B=A[he];if(B)return B;for(var Q=A.parentNode;Q;){if(B=Q[Qt]||Q[he]){if(Q=B.alternate,B.child!==null||Q!==null&&Q.child!==null)for(A=ld(A);A!==null;){if(Q=A[he])return Q;A=ld(A)}return B}A=Q,Q=A.parentNode}return null}function Yi(A){return A=A[he]||A[Qt],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function Un(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(tA(33))}function Yo(A){return A[ti]||null}var nF=[],dn=-1;function Kt(A){return{current:A}}function VA(A){0>dn||(A.current=nF[dn],nF[dn]=null,dn--)}function LA(A,B){dn++,nF[dn]=A.current,A.current=B}var Vt={},xB=Kt(Vt),sQ=Kt(!1),Yg=Vt;function Vn(A,B){var Q=A.type.contextTypes;if(!Q)return Vt;var e=A.stateNode;if(e&&e.__reactInternalMemoizedUnmaskedChildContext===B)return e.__reactInternalMemoizedMaskedChildContext;var t={},g;for(g in Q)t[g]=B[g];return e&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=B,A.__reactInternalMemoizedMaskedChildContext=t),t}function cQ(A){return A=A.childContextTypes,A!=null}function va(){VA(sQ),VA(xB)}function wd(A,B,Q){if(xB.current!==Vt)throw Error(tA(168));LA(xB,B),LA(sQ,Q)}function VY(A,B,Q){var e=A.stateNode;if(B=B.childContextTypes,typeof e.getChildContext!="function")return Q;e=e.getChildContext();for(var t in e)if(!(t in B))throw Error(tA(108,Mk(A)||"Unknown",t));return QB({},Q,e)}function Za(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||Vt,Yg=xB.current,LA(xB,A),LA(sQ,sQ.current),!0}function Fd(A,B,Q){var e=A.stateNode;if(!e)throw Error(tA(169));Q?(A=VY(A,B,Yg),e.__reactInternalMemoizedMergedChildContext=A,VA(sQ),VA(xB),LA(xB,A)):VA(sQ),LA(sQ,Q)}var We=null,po=!1,el=!1;function xY(A){We===null?We=[A]:We.push(A)}function Hv(A){po=!0,xY(A)}function qt(){if(!el&&We!==null){el=!0;var A=0,B=JA;try{var Q=We;for(JA=1;A<Q.length;A++){var e=Q[A];do e=e(!0);while(e!==null)}We=null,po=!1}catch(t){throw We!==null&&(We=We.slice(A+1)),wY(zD,qt),t}finally{JA=B,el=!1}}return null}var Mn=[],hn=0,Sa=null,La=0,LQ=[],XQ=0,pg=null,ze=1,Pe="";function rg(A,B){Mn[hn++]=La,Mn[hn++]=Sa,Sa=A,La=B}function zY(A,B,Q){LQ[XQ++]=ze,LQ[XQ++]=Pe,LQ[XQ++]=pg,pg=A;var e=ze;A=Pe;var t=32-ee(e)-1;e&=~(1<<t),Q+=1;var g=32-ee(B)+t;if(30<g){var n=t-t%5;g=(e&(1<<n)-1).toString(32),e>>=n,t-=n,ze=1<<32-ee(B)+t|Q<<t|e,Pe=g+A}else ze=1<<g|Q<<t|e,Pe=A}function Qu(A){A.return!==null&&(rg(A,1),zY(A,1,0))}function eu(A){for(;A===Sa;)Sa=Mn[--hn],Mn[hn]=null,La=Mn[--hn],Mn[hn]=null;for(;A===pg;)pg=LQ[--XQ],LQ[XQ]=null,Pe=LQ[--XQ],LQ[XQ]=null,ze=LQ[--XQ],LQ[XQ]=null}var hQ=null,MQ=null,PA=!1,Be=null;function PY(A,B){var Q=HQ(5,null,null,0);Q.elementType="DELETED",Q.stateNode=B,Q.return=A,B=A.deletions,B===null?(A.deletions=[Q],A.flags|=16):B.push(Q)}function Dd(A,B){switch(A.tag){case 5:var Q=A.type;return B=B.nodeType!==1||Q.toLowerCase()!==B.nodeName.toLowerCase()?null:B,B!==null?(A.stateNode=B,hQ=A,MQ=Jt(B.firstChild),!0):!1;case 6:return B=A.pendingProps===""||B.nodeType!==3?null:B,B!==null?(A.stateNode=B,hQ=A,MQ=null,!0):!1;case 13:return B=B.nodeType!==8?null:B,B!==null?(Q=pg!==null?{id:ze,overflow:Pe}:null,A.memoizedState={dehydrated:B,treeContext:Q,retryLane:1073741824},Q=HQ(18,null,null,0),Q.stateNode=B,Q.return=A,A.child=Q,hQ=A,MQ=null,!0):!1;default:return!1}}function EF(A){return(A.mode&1)!==0&&(A.flags&128)===0}function CF(A){if(PA){var B=MQ;if(B){var Q=B;if(!Dd(A,B)){if(EF(A))throw Error(tA(418));B=Jt(Q.nextSibling);var e=hQ;B&&Dd(A,B)?PY(e,Q):(A.flags=A.flags&-4097|2,PA=!1,hQ=A)}}else{if(EF(A))throw Error(tA(418));A.flags=A.flags&-4097|2,PA=!1,hQ=A}}}function ud(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;hQ=A}function Jr(A){if(A!==hQ)return!1;if(!PA)return ud(A),PA=!0,!1;var B;if((B=A.tag!==3)&&!(B=A.tag!==5)&&(B=A.type,B=B!=="head"&&B!=="body"&&!eF(A.type,A.memoizedProps)),B&&(B=MQ)){if(EF(A))throw jY(),Error(tA(418));for(;B;)PY(A,B),B=Jt(B.nextSibling)}if(ud(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(tA(317));A:{for(A=A.nextSibling,B=0;A;){if(A.nodeType===8){var Q=A.data;if(Q==="/$"){if(B===0){MQ=Jt(A.nextSibling);break A}B--}else Q!=="$"&&Q!=="$!"&&Q!=="$?"||B++}A=A.nextSibling}MQ=null}}else MQ=hQ?Jt(A.stateNode.nextSibling):null;return!0}function jY(){for(var A=MQ;A;)A=Jt(A.nextSibling)}function xn(){MQ=hQ=null,PA=!1}function tu(A){Be===null?Be=[A]:Be.push(A)}var Ov=Ct.ReactCurrentBatchConfig;function $Q(A,B){if(A&&A.defaultProps){B=QB({},B),A=A.defaultProps;for(var Q in A)B[Q]===void 0&&(B[Q]=A[Q]);return B}return B}var Xa=Kt(null),Ha=null,Gn=null,gu=null;function nu(){gu=Gn=Ha=null}function Eu(A){var B=Xa.current;VA(Xa),A._currentValue=B}function iF(A,B,Q){for(;A!==null;){var e=A.alternate;if((A.childLanes&B)!==B?(A.childLanes|=B,e!==null&&(e.childLanes|=B)):e!==null&&(e.childLanes&B)!==B&&(e.childLanes|=B),A===Q)break;A=A.return}}function Ln(A,B){Ha=A,gu=Gn=null,A=A.dependencies,A!==null&&A.firstContext!==null&&(A.lanes&B&&(IQ=!0),A.firstContext=null)}function TQ(A){var B=A._currentValue;if(gu!==A)if(A={context:A,memoizedValue:B,next:null},Gn===null){if(Ha===null)throw Error(tA(308));Gn=A,Ha.dependencies={lanes:0,firstContext:A}}else Gn=Gn.next=A;return B}var ug=null;function Cu(A){ug===null?ug=[A]:ug.push(A)}function KY(A,B,Q,e){var t=B.interleaved;return t===null?(Q.next=Q,Cu(B)):(Q.next=t.next,t.next=Q),B.interleaved=Q,et(A,e)}function et(A,B){A.lanes|=B;var Q=A.alternate;for(Q!==null&&(Q.lanes|=B),Q=A,A=A.return;A!==null;)A.childLanes|=B,Q=A.alternate,Q!==null&&(Q.childLanes|=B),Q=A,A=A.return;return Q.tag===3?Q.stateNode:null}var ut=!1;function iu(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qY(A,B){A=A.updateQueue,B.updateQueue===A&&(B.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function Ke(A,B){return{eventTime:A,lane:B,tag:0,payload:null,callback:null,next:null}}function kt(A,B,Q){var e=A.updateQueue;if(e===null)return null;if(e=e.shared,pA&2){var t=e.pending;return t===null?B.next=B:(B.next=t.next,t.next=B),e.pending=B,et(A,Q)}return t=e.interleaved,t===null?(B.next=B,Cu(e)):(B.next=t.next,t.next=B),e.interleaved=B,et(A,Q)}function ia(A,B,Q){if(B=B.updateQueue,B!==null&&(B=B.shared,(Q&4194240)!==0)){var e=B.lanes;e&=A.pendingLanes,Q|=e,B.lanes=Q,PD(A,Q)}}function fd(A,B){var Q=A.updateQueue,e=A.alternate;if(e!==null&&(e=e.updateQueue,Q===e)){var t=null,g=null;if(Q=Q.firstBaseUpdate,Q!==null){do{var n={eventTime:Q.eventTime,lane:Q.lane,tag:Q.tag,payload:Q.payload,callback:Q.callback,next:null};g===null?t=g=n:g=g.next=n,Q=Q.next}while(Q!==null);g===null?t=g=B:g=g.next=B}else t=g=B;Q={baseState:e.baseState,firstBaseUpdate:t,lastBaseUpdate:g,shared:e.shared,effects:e.effects},A.updateQueue=Q;return}A=Q.lastBaseUpdate,A===null?Q.firstBaseUpdate=B:A.next=B,Q.lastBaseUpdate=B}function Oa(A,B,Q,e){var t=A.updateQueue;ut=!1;var g=t.firstBaseUpdate,n=t.lastBaseUpdate,E=t.shared.pending;if(E!==null){t.shared.pending=null;var C=E,i=C.next;C.next=null,n===null?g=i:n.next=i,n=C;var r=A.alternate;r!==null&&(r=r.updateQueue,E=r.lastBaseUpdate,E!==n&&(E===null?r.firstBaseUpdate=i:E.next=i,r.lastBaseUpdate=C))}if(g!==null){var a=t.baseState;n=0,r=i=C=null,E=g;do{var o=E.lane,l=E.eventTime;if((e&o)===o){r!==null&&(r=r.next={eventTime:l,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});A:{var I=A,w=E;switch(o=B,l=Q,w.tag){case 1:if(I=w.payload,typeof I=="function"){a=I.call(l,a,o);break A}a=I;break A;case 3:I.flags=I.flags&-65537|128;case 0:if(I=w.payload,o=typeof I=="function"?I.call(l,a,o):I,o==null)break A;a=QB({},a,o);break A;case 2:ut=!0}}E.callback!==null&&E.lane!==0&&(A.flags|=64,o=t.effects,o===null?t.effects=[E]:o.push(E))}else l={eventTime:l,lane:o,tag:E.tag,payload:E.payload,callback:E.callback,next:null},r===null?(i=r=l,C=a):r=r.next=l,n|=o;if(E=E.next,E===null){if(E=t.shared.pending,E===null)break;o=E,E=o.next,o.next=null,t.lastBaseUpdate=o,t.shared.pending=null}}while(1);if(r===null&&(C=a),t.baseState=C,t.firstBaseUpdate=i,t.lastBaseUpdate=r,B=t.shared.interleaved,B!==null){t=B;do n|=t.lane,t=t.next;while(t!==B)}else g===null&&(t.shared.lanes=0);Ng|=n,A.lanes=n,A.memoizedState=a}}function Ud(A,B,Q){if(A=B.effects,B.effects=null,A!==null)for(B=0;B<A.length;B++){var e=A[B],t=e.callback;if(t!==null){if(e.callback=null,e=Q,typeof t!="function")throw Error(tA(191,t));t.call(e)}}}var _Y=new Km.Component().refs;function rF(A,B,Q,e){B=A.memoizedState,Q=Q(e,B),Q=Q==null?B:QB({},B,Q),A.memoizedState=Q,A.lanes===0&&(A.updateQueue.baseState=Q)}var yo={isMounted:function(A){return(A=A._reactInternals)?Sg(A)===A:!1},enqueueSetState:function(A,B,Q){A=A._reactInternals;var e=tQ(),t=Zt(A),g=Ke(e,t);g.payload=B,Q!=null&&(g.callback=Q),B=kt(A,g,t),B!==null&&(te(B,A,t,e),ia(B,A,t))},enqueueReplaceState:function(A,B,Q){A=A._reactInternals;var e=tQ(),t=Zt(A),g=Ke(e,t);g.tag=1,g.payload=B,Q!=null&&(g.callback=Q),B=kt(A,g,t),B!==null&&(te(B,A,t,e),ia(B,A,t))},enqueueForceUpdate:function(A,B){A=A._reactInternals;var Q=tQ(),e=Zt(A),t=Ke(Q,e);t.tag=2,B!=null&&(t.callback=B),B=kt(A,t,e),B!==null&&(te(B,A,e,Q),ia(B,A,e))}};function dd(A,B,Q,e,t,g,n){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(e,g,n):B.prototype&&B.prototype.isPureReactComponent?!Bi(Q,e)||!Bi(t,g):!0}function $Y(A,B,Q){var e=!1,t=Vt,g=B.contextType;return typeof g=="object"&&g!==null?g=TQ(g):(t=cQ(B)?Yg:xB.current,e=B.contextTypes,g=(e=e!=null)?Vn(A,t):Vt),B=new B(Q,g),A.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=yo,A.stateNode=B,B._reactInternals=A,e&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=t,A.__reactInternalMemoizedMaskedChildContext=g),B}function Md(A,B,Q,e){A=B.state,typeof B.componentWillReceiveProps=="function"&&B.componentWillReceiveProps(Q,e),typeof B.UNSAFE_componentWillReceiveProps=="function"&&B.UNSAFE_componentWillReceiveProps(Q,e),B.state!==A&&yo.enqueueReplaceState(B,B.state,null)}function aF(A,B,Q,e){var t=A.stateNode;t.props=Q,t.state=A.memoizedState,t.refs=_Y,iu(A);var g=B.contextType;typeof g=="object"&&g!==null?t.context=TQ(g):(g=cQ(B)?Yg:xB.current,t.context=Vn(A,g)),t.state=A.memoizedState,g=B.getDerivedStateFromProps,typeof g=="function"&&(rF(A,B,g,Q),t.state=A.memoizedState),typeof B.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(B=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),B!==t.state&&yo.enqueueReplaceState(t,t.state,null),Oa(A,Q,t,e),t.state=A.memoizedState),typeof t.componentDidMount=="function"&&(A.flags|=4194308)}function $E(A,B,Q){if(A=Q.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(Q._owner){if(Q=Q._owner,Q){if(Q.tag!==1)throw Error(tA(309));var e=Q.stateNode}if(!e)throw Error(tA(147,A));var t=e,g=""+A;return B!==null&&B.ref!==null&&typeof B.ref=="function"&&B.ref._stringRef===g?B.ref:(B=function(n){var E=t.refs;E===_Y&&(E=t.refs={}),n===null?delete E[g]:E[g]=n},B._stringRef=g,B)}if(typeof A!="string")throw Error(tA(284));if(!Q._owner)throw Error(tA(290,A))}return A}function kr(A,B){throw A=Object.prototype.toString.call(B),Error(tA(31,A==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":A))}function hd(A){var B=A._init;return B(A._payload)}function Ap(A){function B(c,D){if(A){var s=c.deletions;s===null?(c.deletions=[D],c.flags|=16):s.push(D)}}function Q(c,D){if(!A)return null;for(;D!==null;)B(c,D),D=D.sibling;return null}function e(c,D){for(c=new Map;D!==null;)D.key!==null?c.set(D.key,D):c.set(D.index,D),D=D.sibling;return c}function t(c,D){return c=St(c,D),c.index=0,c.sibling=null,c}function g(c,D,s){return c.index=s,A?(s=c.alternate,s!==null?(s=s.index,s<D?(c.flags|=2,D):s):(c.flags|=2,D)):(c.flags|=1048576,D)}function n(c){return A&&c.alternate===null&&(c.flags|=2),c}function E(c,D,s,u){return D===null||D.tag!==6?(D=rl(s,c.mode,u),D.return=c,D):(D=t(D,s),D.return=c,D)}function C(c,D,s,u){var f=s.type;return f===Fn?r(c,D,s.props.children,u,s.key):D!==null&&(D.elementType===f||typeof f=="object"&&f!==null&&f.$$typeof===Dt&&hd(f)===D.type)?(u=t(D,s.props),u.ref=$E(c,D,s),u.return=c,u):(u=ca(s.type,s.key,s.props,null,c.mode,u),u.ref=$E(c,D,s),u.return=c,u)}function i(c,D,s,u){return D===null||D.tag!==4||D.stateNode.containerInfo!==s.containerInfo||D.stateNode.implementation!==s.implementation?(D=al(s,c.mode,u),D.return=c,D):(D=t(D,s.children||[]),D.return=c,D)}function r(c,D,s,u,f){return D===null||D.tag!==7?(D=hg(s,c.mode,u,f),D.return=c,D):(D=t(D,s),D.return=c,D)}function a(c,D,s){if(typeof D=="string"&&D!==""||typeof D=="number")return D=rl(""+D,c.mode,s),D.return=c,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Mr:return s=ca(D.type,D.key,D.props,null,c.mode,s),s.ref=$E(c,null,D),s.return=c,s;case wn:return D=al(D,c.mode,s),D.return=c,D;case Dt:var u=D._init;return a(c,u(D._payload),s)}if(FC(D)||PE(D))return D=hg(D,c.mode,s,null),D.return=c,D;kr(c,D)}return null}function o(c,D,s,u){var f=D!==null?D.key:null;if(typeof s=="string"&&s!==""||typeof s=="number")return f!==null?null:E(c,D,""+s,u);if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Mr:return s.key===f?C(c,D,s,u):null;case wn:return s.key===f?i(c,D,s,u):null;case Dt:return f=s._init,o(c,D,f(s._payload),u)}if(FC(s)||PE(s))return f!==null?null:r(c,D,s,u,null);kr(c,s)}return null}function l(c,D,s,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return c=c.get(s)||null,E(D,c,""+u,f);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Mr:return c=c.get(u.key===null?s:u.key)||null,C(D,c,u,f);case wn:return c=c.get(u.key===null?s:u.key)||null,i(D,c,u,f);case Dt:var M=u._init;return l(c,D,s,M(u._payload),f)}if(FC(u)||PE(u))return c=c.get(s)||null,r(D,c,u,f,null);kr(D,u)}return null}function I(c,D,s,u){for(var f=null,M=null,h=D,Y=D=0,m=null;h!==null&&Y<s.length;Y++){h.index>Y?(m=h,h=null):m=h.sibling;var L=o(c,h,s[Y],u);if(L===null){h===null&&(h=m);break}A&&h&&L.alternate===null&&B(c,h),D=g(L,D,Y),M===null?f=L:M.sibling=L,M=L,h=m}if(Y===s.length)return Q(c,h),PA&&rg(c,Y),f;if(h===null){for(;Y<s.length;Y++)h=a(c,s[Y],u),h!==null&&(D=g(h,D,Y),M===null?f=h:M.sibling=h,M=h);return PA&&rg(c,Y),f}for(h=e(c,h);Y<s.length;Y++)m=l(h,c,Y,s[Y],u),m!==null&&(A&&m.alternate!==null&&h.delete(m.key===null?Y:m.key),D=g(m,D,Y),M===null?f=m:M.sibling=m,M=m);return A&&h.forEach(function(X){return B(c,X)}),PA&&rg(c,Y),f}function w(c,D,s,u){var f=PE(s);if(typeof f!="function")throw Error(tA(150));if(s=f.call(s),s==null)throw Error(tA(151));for(var M=f=null,h=D,Y=D=0,m=null,L=s.next();h!==null&&!L.done;Y++,L=s.next()){h.index>Y?(m=h,h=null):m=h.sibling;var X=o(c,h,L.value,u);if(X===null){h===null&&(h=m);break}A&&h&&X.alternate===null&&B(c,h),D=g(X,D,Y),M===null?f=X:M.sibling=X,M=X,h=m}if(L.done)return Q(c,h),PA&&rg(c,Y),f;if(h===null){for(;!L.done;Y++,L=s.next())L=a(c,L.value,u),L!==null&&(D=g(L,D,Y),M===null?f=L:M.sibling=L,M=L);return PA&&rg(c,Y),f}for(h=e(c,h);!L.done;Y++,L=s.next())L=l(h,c,Y,L.value,u),L!==null&&(A&&L.alternate!==null&&h.delete(L.key===null?Y:L.key),D=g(L,D,Y),M===null?f=L:M.sibling=L,M=L);return A&&h.forEach(function(W){return B(c,W)}),PA&&rg(c,Y),f}function U(c,D,s,u){if(typeof s=="object"&&s!==null&&s.type===Fn&&s.key===null&&(s=s.props.children),typeof s=="object"&&s!==null){switch(s.$$typeof){case Mr:A:{for(var f=s.key,M=D;M!==null;){if(M.key===f){if(f=s.type,f===Fn){if(M.tag===7){Q(c,M.sibling),D=t(M,s.props.children),D.return=c,c=D;break A}}else if(M.elementType===f||typeof f=="object"&&f!==null&&f.$$typeof===Dt&&hd(f)===M.type){Q(c,M.sibling),D=t(M,s.props),D.ref=$E(c,M,s),D.return=c,c=D;break A}Q(c,M);break}else B(c,M);M=M.sibling}s.type===Fn?(D=hg(s.props.children,c.mode,u,s.key),D.return=c,c=D):(u=ca(s.type,s.key,s.props,null,c.mode,u),u.ref=$E(c,D,s),u.return=c,c=u)}return n(c);case wn:A:{for(M=s.key;D!==null;){if(D.key===M)if(D.tag===4&&D.stateNode.containerInfo===s.containerInfo&&D.stateNode.implementation===s.implementation){Q(c,D.sibling),D=t(D,s.children||[]),D.return=c,c=D;break A}else{Q(c,D);break}else B(c,D);D=D.sibling}D=al(s,c.mode,u),D.return=c,c=D}return n(c);case Dt:return M=s._init,U(c,D,M(s._payload),u)}if(FC(s))return I(c,D,s,u);if(PE(s))return w(c,D,s,u);kr(c,s)}return typeof s=="string"&&s!==""||typeof s=="number"?(s=""+s,D!==null&&D.tag===6?(Q(c,D.sibling),D=t(D,s),D.return=c,c=D):(Q(c,D),D=rl(s,c.mode,u),D.return=c,c=D),n(c)):Q(c,D)}return U}var zn=Ap(!0),Bp=Ap(!1),pi={},Ye=Kt(pi),gi=Kt(pi),ni=Kt(pi);function fg(A){if(A===pi)throw Error(tA(174));return A}function ru(A,B){switch(LA(ni,B),LA(gi,A),LA(Ye,pi),A=B.nodeType,A){case 9:case 11:B=(B=B.documentElement)?B.namespaceURI:Ww(null,"");break;default:A=A===8?B.parentNode:B,B=A.namespaceURI||null,A=A.tagName,B=Ww(B,A)}VA(Ye),LA(Ye,B)}function Pn(){VA(Ye),VA(gi),VA(ni)}function Qp(A){fg(ni.current);var B=fg(Ye.current),Q=Ww(B,A.type);B!==Q&&(LA(gi,A),LA(Ye,Q))}function au(A){gi.current===A&&(VA(Ye),VA(gi))}var _A=Kt(0);function Wa(A){for(var B=A;B!==null;){if(B.tag===13){var Q=B.memoizedState;if(Q!==null&&(Q=Q.dehydrated,Q===null||Q.data==="$?"||Q.data==="$!"))return B}else if(B.tag===19&&B.memoizedProps.revealOrder!==void 0){if(B.flags&128)return B}else if(B.child!==null){B.child.return=B,B=B.child;continue}if(B===A)break;for(;B.sibling===null;){if(B.return===null||B.return===A)return null;B=B.return}B.sibling.return=B.return,B=B.sibling}return null}var tl=[];function ou(){for(var A=0;A<tl.length;A++)tl[A]._workInProgressVersionPrimary=null;tl.length=0}var ra=Ct.ReactCurrentDispatcher,gl=Ct.ReactCurrentBatchConfig,yg=0,BB=null,IB=null,fB=null,Ta=!1,YC=!1,Ei=0,Wv=0;function vB(){throw Error(tA(321))}function Iu(A,B){if(B===null)return!1;for(var Q=0;Q<B.length&&Q<A.length;Q++)if(!ge(A[Q],B[Q]))return!1;return!0}function su(A,B,Q,e,t,g){if(yg=g,BB=B,B.memoizedState=null,B.updateQueue=null,B.lanes=0,ra.current=A===null||A.memoizedState===null?zv:Pv,A=Q(e,t),YC){g=0;do{if(YC=!1,Ei=0,25<=g)throw Error(tA(301));g+=1,fB=IB=null,B.updateQueue=null,ra.current=jv,A=Q(e,t)}while(YC)}if(ra.current=Va,B=IB!==null&&IB.next!==null,yg=0,fB=IB=BB=null,Ta=!1,B)throw Error(tA(300));return A}function cu(){var A=Ei!==0;return Ei=0,A}function we(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fB===null?BB.memoizedState=fB=A:fB=fB.next=A,fB}function VQ(){if(IB===null){var A=BB.alternate;A=A!==null?A.memoizedState:null}else A=IB.next;var B=fB===null?BB.memoizedState:fB.next;if(B!==null)fB=B,IB=A;else{if(A===null)throw Error(tA(310));IB=A,A={memoizedState:IB.memoizedState,baseState:IB.baseState,baseQueue:IB.baseQueue,queue:IB.queue,next:null},fB===null?BB.memoizedState=fB=A:fB=fB.next=A}return fB}function Ci(A,B){return typeof B=="function"?B(A):B}function nl(A){var B=VQ(),Q=B.queue;if(Q===null)throw Error(tA(311));Q.lastRenderedReducer=A;var e=IB,t=e.baseQueue,g=Q.pending;if(g!==null){if(t!==null){var n=t.next;t.next=g.next,g.next=n}e.baseQueue=t=g,Q.pending=null}if(t!==null){g=t.next,e=e.baseState;var E=n=null,C=null,i=g;do{var r=i.lane;if((yg&r)===r)C!==null&&(C=C.next={lane:0,action:i.action,hasEagerState:i.hasEagerState,eagerState:i.eagerState,next:null}),e=i.hasEagerState?i.eagerState:A(e,i.action);else{var a={lane:r,action:i.action,hasEagerState:i.hasEagerState,eagerState:i.eagerState,next:null};C===null?(E=C=a,n=e):C=C.next=a,BB.lanes|=r,Ng|=r}i=i.next}while(i!==null&&i!==g);C===null?n=e:C.next=E,ge(e,B.memoizedState)||(IQ=!0),B.memoizedState=e,B.baseState=n,B.baseQueue=C,Q.lastRenderedState=e}if(A=Q.interleaved,A!==null){t=A;do g=t.lane,BB.lanes|=g,Ng|=g,t=t.next;while(t!==A)}else t===null&&(Q.lanes=0);return[B.memoizedState,Q.dispatch]}function El(A){var B=VQ(),Q=B.queue;if(Q===null)throw Error(tA(311));Q.lastRenderedReducer=A;var e=Q.dispatch,t=Q.pending,g=B.memoizedState;if(t!==null){Q.pending=null;var n=t=t.next;do g=A(g,n.action),n=n.next;while(n!==t);ge(g,B.memoizedState)||(IQ=!0),B.memoizedState=g,B.baseQueue===null&&(B.baseState=g),Q.lastRenderedState=g}return[g,e]}function ep(){}function tp(A,B){var Q=BB,e=VQ(),t=B(),g=!ge(e.memoizedState,t);if(g&&(e.memoizedState=t,IQ=!0),e=e.queue,lu(Ep.bind(null,Q,e,A),[A]),e.getSnapshot!==B||g||fB!==null&&fB.memoizedState.tag&1){if(Q.flags|=2048,ii(9,np.bind(null,Q,e,t,B),void 0,null),dB===null)throw Error(tA(349));yg&30||gp(Q,B,t)}return t}function gp(A,B,Q){A.flags|=16384,A={getSnapshot:B,value:Q},B=BB.updateQueue,B===null?(B={lastEffect:null,stores:null},BB.updateQueue=B,B.stores=[A]):(Q=B.stores,Q===null?B.stores=[A]:Q.push(A))}function np(A,B,Q,e){B.value=Q,B.getSnapshot=e,Cp(B)&&ip(A)}function Ep(A,B,Q){return Q(function(){Cp(B)&&ip(A)})}function Cp(A){var B=A.getSnapshot;A=A.value;try{var Q=B();return!ge(A,Q)}catch{return!0}}function ip(A){var B=et(A,1);B!==null&&te(B,A,1,-1)}function Gd(A){var B=we();return typeof A=="function"&&(A=A()),B.memoizedState=B.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:A},B.queue=A,A=A.dispatch=xv.bind(null,BB,A),[B.memoizedState,A]}function ii(A,B,Q,e){return A={tag:A,create:B,destroy:Q,deps:e,next:null},B=BB.updateQueue,B===null?(B={lastEffect:null,stores:null},BB.updateQueue=B,B.lastEffect=A.next=A):(Q=B.lastEffect,Q===null?B.lastEffect=A.next=A:(e=Q.next,Q.next=A,A.next=e,B.lastEffect=A)),A}function rp(){return VQ().memoizedState}function aa(A,B,Q,e){var t=we();BB.flags|=A,t.memoizedState=ii(1|B,Q,void 0,e===void 0?null:e)}function No(A,B,Q,e){var t=VQ();e=e===void 0?null:e;var g=void 0;if(IB!==null){var n=IB.memoizedState;if(g=n.destroy,e!==null&&Iu(e,n.deps)){t.memoizedState=ii(B,Q,g,e);return}}BB.flags|=A,t.memoizedState=ii(1|B,Q,g,e)}function Rd(A,B){return aa(8390656,8,A,B)}function lu(A,B){return No(2048,8,A,B)}function ap(A,B){return No(4,2,A,B)}function op(A,B){return No(4,4,A,B)}function Ip(A,B){if(typeof B=="function")return A=A(),B(A),function(){B(null)};if(B!=null)return A=A(),B.current=A,function(){B.current=null}}function sp(A,B,Q){return Q=Q!=null?Q.concat([A]):null,No(4,4,Ip.bind(null,B,A),Q)}function wu(){}function cp(A,B){var Q=VQ();B=B===void 0?null:B;var e=Q.memoizedState;return e!==null&&B!==null&&Iu(B,e[1])?e[0]:(Q.memoizedState=[A,B],A)}function lp(A,B){var Q=VQ();B=B===void 0?null:B;var e=Q.memoizedState;return e!==null&&B!==null&&Iu(B,e[1])?e[0]:(A=A(),Q.memoizedState=[A,B],A)}function wp(A,B,Q){return yg&21?(ge(Q,B)||(Q=uY(),BB.lanes|=Q,Ng|=Q,A.baseState=!0),B):(A.baseState&&(A.baseState=!1,IQ=!0),A.memoizedState=Q)}function Tv(A,B){var Q=JA;JA=Q!==0&&4>Q?Q:4,A(!0);var e=gl.transition;gl.transition={};try{A(!1),B()}finally{JA=Q,gl.transition=e}}function Fp(){return VQ().memoizedState}function Vv(A,B,Q){var e=Zt(A);if(Q={lane:e,action:Q,hasEagerState:!1,eagerState:null,next:null},Dp(A))up(B,Q);else if(Q=KY(A,B,Q,e),Q!==null){var t=tQ();te(Q,A,e,t),fp(Q,B,e)}}function xv(A,B,Q){var e=Zt(A),t={lane:e,action:Q,hasEagerState:!1,eagerState:null,next:null};if(Dp(A))up(B,t);else{var g=A.alternate;if(A.lanes===0&&(g===null||g.lanes===0)&&(g=B.lastRenderedReducer,g!==null))try{var n=B.lastRenderedState,E=g(n,Q);if(t.hasEagerState=!0,t.eagerState=E,ge(E,n)){var C=B.interleaved;C===null?(t.next=t,Cu(B)):(t.next=C.next,C.next=t),B.interleaved=t;return}}catch{}finally{}Q=KY(A,B,t,e),Q!==null&&(t=tQ(),te(Q,A,e,t),fp(Q,B,e))}}function Dp(A){var B=A.alternate;return A===BB||B!==null&&B===BB}function up(A,B){YC=Ta=!0;var Q=A.pending;Q===null?B.next=B:(B.next=Q.next,Q.next=B),A.pending=B}function fp(A,B,Q){if(Q&4194240){var e=B.lanes;e&=A.pendingLanes,Q|=e,B.lanes=Q,PD(A,Q)}}var Va={readContext:TQ,useCallback:vB,useContext:vB,useEffect:vB,useImperativeHandle:vB,useInsertionEffect:vB,useLayoutEffect:vB,useMemo:vB,useReducer:vB,useRef:vB,useState:vB,useDebugValue:vB,useDeferredValue:vB,useTransition:vB,useMutableSource:vB,useSyncExternalStore:vB,useId:vB,unstable_isNewReconciler:!1},zv={readContext:TQ,useCallback:function(A,B){return we().memoizedState=[A,B===void 0?null:B],A},useContext:TQ,useEffect:Rd,useImperativeHandle:function(A,B,Q){return Q=Q!=null?Q.concat([A]):null,aa(4194308,4,Ip.bind(null,B,A),Q)},useLayoutEffect:function(A,B){return aa(4194308,4,A,B)},useInsertionEffect:function(A,B){return aa(4,2,A,B)},useMemo:function(A,B){var Q=we();return B=B===void 0?null:B,A=A(),Q.memoizedState=[A,B],A},useReducer:function(A,B,Q){var e=we();return B=Q!==void 0?Q(B):B,e.memoizedState=e.baseState=B,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:B},e.queue=A,A=A.dispatch=Vv.bind(null,BB,A),[e.memoizedState,A]},useRef:function(A){var B=we();return A={current:A},B.memoizedState=A},useState:Gd,useDebugValue:wu,useDeferredValue:function(A){return we().memoizedState=A},useTransition:function(){var A=Gd(!1),B=A[0];return A=Tv.bind(null,A[1]),we().memoizedState=A,[B,A]},useMutableSource:function(){},useSyncExternalStore:function(A,B,Q){var e=BB,t=we();if(PA){if(Q===void 0)throw Error(tA(407));Q=Q()}else{if(Q=B(),dB===null)throw Error(tA(349));yg&30||gp(e,B,Q)}t.memoizedState=Q;var g={value:Q,getSnapshot:B};return t.queue=g,Rd(Ep.bind(null,e,g,A),[A]),e.flags|=2048,ii(9,np.bind(null,e,g,Q,B),void 0,null),Q},useId:function(){var A=we(),B=dB.identifierPrefix;if(PA){var Q=Pe,e=ze;Q=(e&~(1<<32-ee(e)-1)).toString(32)+Q,B=":"+B+"R"+Q,Q=Ei++,0<Q&&(B+="H"+Q.toString(32)),B+=":"}else Q=Wv++,B=":"+B+"r"+Q.toString(32)+":";return A.memoizedState=B},unstable_isNewReconciler:!1},Pv={readContext:TQ,useCallback:cp,useContext:TQ,useEffect:lu,useImperativeHandle:sp,useInsertionEffect:ap,useLayoutEffect:op,useMemo:lp,useReducer:nl,useRef:rp,useState:function(){return nl(Ci)},useDebugValue:wu,useDeferredValue:function(A){var B=VQ();return wp(B,IB.memoizedState,A)},useTransition:function(){var A=nl(Ci)[0],B=VQ().memoizedState;return[A,B]},useMutableSource:ep,useSyncExternalStore:tp,useId:Fp,unstable_isNewReconciler:!1},jv={readContext:TQ,useCallback:cp,useContext:TQ,useEffect:lu,useImperativeHandle:sp,useInsertionEffect:ap,useLayoutEffect:op,useMemo:lp,useReducer:El,useRef:rp,useState:function(){return El(Ci)},useDebugValue:wu,useDeferredValue:function(A){var B=VQ();return IB===null?B.memoizedState=A:wp(B,IB.memoizedState,A)},useTransition:function(){var A=El(Ci)[0],B=VQ().memoizedState;return[A,B]},useMutableSource:ep,useSyncExternalStore:tp,useId:Fp,unstable_isNewReconciler:!1};function jn(A,B){try{var Q="",e=B;do Q+=dk(e),e=e.return;while(e);var t=Q}catch(g){t=`
Error generating stack: `+g.message+`
`+g.stack}return{value:A,source:B,stack:t,digest:null}}function Cl(A,B,Q){return{value:A,source:null,stack:Q??null,digest:B??null}}function oF(A,B){try{console.error(B.value)}catch(Q){setTimeout(function(){throw Q})}}var Kv=typeof WeakMap=="function"?WeakMap:Map;function Up(A,B,Q){Q=Ke(-1,Q),Q.tag=3,Q.payload={element:null};var e=B.value;return Q.callback=function(){za||(za=!0,UF=e),oF(A,B)},Q}function dp(A,B,Q){Q=Ke(-1,Q),Q.tag=3;var e=A.type.getDerivedStateFromError;if(typeof e=="function"){var t=B.value;Q.payload=function(){return e(t)},Q.callback=function(){oF(A,B)}}var g=A.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(Q.callback=function(){oF(A,B),typeof e!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var n=B.stack;this.componentDidCatch(B.value,{componentStack:n!==null?n:""})}),Q}function md(A,B,Q){var e=A.pingCache;if(e===null){e=A.pingCache=new Kv;var t=new Set;e.set(B,t)}else t=e.get(B),t===void 0&&(t=new Set,e.set(B,t));t.has(Q)||(t.add(Q),A=rZ.bind(null,A,B,Q),B.then(A,A))}function Yd(A){do{var B;if((B=A.tag===13)&&(B=A.memoizedState,B=B!==null?B.dehydrated!==null:!0),B)return A;A=A.return}while(A!==null);return null}function pd(A,B,Q,e,t){return A.mode&1?(A.flags|=65536,A.lanes=t,A):(A===B?A.flags|=65536:(A.flags|=128,Q.flags|=131072,Q.flags&=-52805,Q.tag===1&&(Q.alternate===null?Q.tag=17:(B=Ke(-1,1),B.tag=2,kt(Q,B,1))),Q.lanes|=1),A)}var qv=Ct.ReactCurrentOwner,IQ=!1;function BQ(A,B,Q,e){B.child=A===null?Bp(B,null,Q,e):zn(B,A.child,Q,e)}function yd(A,B,Q,e,t){Q=Q.render;var g=B.ref;return Ln(B,t),e=su(A,B,Q,e,g,t),Q=cu(),A!==null&&!IQ?(B.updateQueue=A.updateQueue,B.flags&=-2053,A.lanes&=~t,tt(A,B,t)):(PA&&Q&&Qu(B),B.flags|=1,BQ(A,B,e,t),B.child)}function Nd(A,B,Q,e,t){if(A===null){var g=Q.type;return typeof g=="function"&&!hu(g)&&g.defaultProps===void 0&&Q.compare===null&&Q.defaultProps===void 0?(B.tag=15,B.type=g,Mp(A,B,g,e,t)):(A=ca(Q.type,null,e,B,B.mode,t),A.ref=B.ref,A.return=B,B.child=A)}if(g=A.child,!(A.lanes&t)){var n=g.memoizedProps;if(Q=Q.compare,Q=Q!==null?Q:Bi,Q(n,e)&&A.ref===B.ref)return tt(A,B,t)}return B.flags|=1,A=St(g,e),A.ref=B.ref,A.return=B,B.child=A}function Mp(A,B,Q,e,t){if(A!==null){var g=A.memoizedProps;if(Bi(g,e)&&A.ref===B.ref)if(IQ=!1,B.pendingProps=e=g,(A.lanes&t)!==0)A.flags&131072&&(IQ=!0);else return B.lanes=A.lanes,tt(A,B,t)}return IF(A,B,Q,e,t)}function hp(A,B,Q){var e=B.pendingProps,t=e.children,g=A!==null?A.memoizedState:null;if(e.mode==="hidden")if(!(B.mode&1))B.memoizedState={baseLanes:0,cachePool:null,transitions:null},LA(mn,UQ),UQ|=Q;else{if(!(Q&1073741824))return A=g!==null?g.baseLanes|Q:Q,B.lanes=B.childLanes=1073741824,B.memoizedState={baseLanes:A,cachePool:null,transitions:null},B.updateQueue=null,LA(mn,UQ),UQ|=A,null;B.memoizedState={baseLanes:0,cachePool:null,transitions:null},e=g!==null?g.baseLanes:Q,LA(mn,UQ),UQ|=e}else g!==null?(e=g.baseLanes|Q,B.memoizedState=null):e=Q,LA(mn,UQ),UQ|=e;return BQ(A,B,t,Q),B.child}function Gp(A,B){var Q=B.ref;(A===null&&Q!==null||A!==null&&A.ref!==Q)&&(B.flags|=512,B.flags|=2097152)}function IF(A,B,Q,e,t){var g=cQ(Q)?Yg:xB.current;return g=Vn(B,g),Ln(B,t),Q=su(A,B,Q,e,g,t),e=cu(),A!==null&&!IQ?(B.updateQueue=A.updateQueue,B.flags&=-2053,A.lanes&=~t,tt(A,B,t)):(PA&&e&&Qu(B),B.flags|=1,BQ(A,B,Q,t),B.child)}function bd(A,B,Q,e,t){if(cQ(Q)){var g=!0;Za(B)}else g=!1;if(Ln(B,t),B.stateNode===null)oa(A,B),$Y(B,Q,e),aF(B,Q,e,t),e=!0;else if(A===null){var n=B.stateNode,E=B.memoizedProps;n.props=E;var C=n.context,i=Q.contextType;typeof i=="object"&&i!==null?i=TQ(i):(i=cQ(Q)?Yg:xB.current,i=Vn(B,i));var r=Q.getDerivedStateFromProps,a=typeof r=="function"||typeof n.getSnapshotBeforeUpdate=="function";a||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(E!==e||C!==i)&&Md(B,n,e,i),ut=!1;var o=B.memoizedState;n.state=o,Oa(B,e,n,t),C=B.memoizedState,E!==e||o!==C||sQ.current||ut?(typeof r=="function"&&(rF(B,Q,r,e),C=B.memoizedState),(E=ut||dd(B,Q,E,e,o,C,i))?(a||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(B.flags|=4194308)):(typeof n.componentDidMount=="function"&&(B.flags|=4194308),B.memoizedProps=e,B.memoizedState=C),n.props=e,n.state=C,n.context=i,e=E):(typeof n.componentDidMount=="function"&&(B.flags|=4194308),e=!1)}else{n=B.stateNode,qY(A,B),E=B.memoizedProps,i=B.type===B.elementType?E:$Q(B.type,E),n.props=i,a=B.pendingProps,o=n.context,C=Q.contextType,typeof C=="object"&&C!==null?C=TQ(C):(C=cQ(Q)?Yg:xB.current,C=Vn(B,C));var l=Q.getDerivedStateFromProps;(r=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(E!==a||o!==C)&&Md(B,n,e,C),ut=!1,o=B.memoizedState,n.state=o,Oa(B,e,n,t);var I=B.memoizedState;E!==a||o!==I||sQ.current||ut?(typeof l=="function"&&(rF(B,Q,l,e),I=B.memoizedState),(i=ut||dd(B,Q,i,e,o,I,C)||!1)?(r||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,I,C),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,I,C)),typeof n.componentDidUpdate=="function"&&(B.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(B.flags|=1024)):(typeof n.componentDidUpdate!="function"||E===A.memoizedProps&&o===A.memoizedState||(B.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||E===A.memoizedProps&&o===A.memoizedState||(B.flags|=1024),B.memoizedProps=e,B.memoizedState=I),n.props=e,n.state=I,n.context=C,e=i):(typeof n.componentDidUpdate!="function"||E===A.memoizedProps&&o===A.memoizedState||(B.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||E===A.memoizedProps&&o===A.memoizedState||(B.flags|=1024),e=!1)}return sF(A,B,Q,e,g,t)}function sF(A,B,Q,e,t,g){Gp(A,B);var n=(B.flags&128)!==0;if(!e&&!n)return t&&Fd(B,Q,!1),tt(A,B,g);e=B.stateNode,qv.current=B;var E=n&&typeof Q.getDerivedStateFromError!="function"?null:e.render();return B.flags|=1,A!==null&&n?(B.child=zn(B,A.child,null,g),B.child=zn(B,null,E,g)):BQ(A,B,E,g),B.memoizedState=e.state,t&&Fd(B,Q,!0),B.child}function Rp(A){var B=A.stateNode;B.pendingContext?wd(A,B.pendingContext,B.pendingContext!==B.context):B.context&&wd(A,B.context,!1),ru(A,B.containerInfo)}function Jd(A,B,Q,e,t){return xn(),tu(t),B.flags|=256,BQ(A,B,Q,e),B.child}var cF={dehydrated:null,treeContext:null,retryLane:0};function lF(A){return{baseLanes:A,cachePool:null,transitions:null}}function mp(A,B,Q){var e=B.pendingProps,t=_A.current,g=!1,n=(B.flags&128)!==0,E;if((E=n)||(E=A!==null&&A.memoizedState===null?!1:(t&2)!==0),E?(g=!0,B.flags&=-129):(A===null||A.memoizedState!==null)&&(t|=1),LA(_A,t&1),A===null)return CF(B),A=B.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?(B.mode&1?A.data==="$!"?B.lanes=8:B.lanes=1073741824:B.lanes=1,null):(n=e.children,A=e.fallback,g?(e=B.mode,g=B.child,n={mode:"hidden",children:n},!(e&1)&&g!==null?(g.childLanes=0,g.pendingProps=n):g=ko(n,e,0,null),A=hg(A,e,Q,null),g.return=B,A.return=B,g.sibling=A,B.child=g,B.child.memoizedState=lF(Q),B.memoizedState=cF,A):Fu(B,n));if(t=A.memoizedState,t!==null&&(E=t.dehydrated,E!==null))return _v(A,B,n,e,E,t,Q);if(g){g=e.fallback,n=B.mode,t=A.child,E=t.sibling;var C={mode:"hidden",children:e.children};return!(n&1)&&B.child!==t?(e=B.child,e.childLanes=0,e.pendingProps=C,B.deletions=null):(e=St(t,C),e.subtreeFlags=t.subtreeFlags&14680064),E!==null?g=St(E,g):(g=hg(g,n,Q,null),g.flags|=2),g.return=B,e.return=B,e.sibling=g,B.child=e,e=g,g=B.child,n=A.child.memoizedState,n=n===null?lF(Q):{baseLanes:n.baseLanes|Q,cachePool:null,transitions:n.transitions},g.memoizedState=n,g.childLanes=A.childLanes&~Q,B.memoizedState=cF,e}return g=A.child,A=g.sibling,e=St(g,{mode:"visible",children:e.children}),!(B.mode&1)&&(e.lanes=Q),e.return=B,e.sibling=null,A!==null&&(Q=B.deletions,Q===null?(B.deletions=[A],B.flags|=16):Q.push(A)),B.child=e,B.memoizedState=null,e}function Fu(A,B){return B=ko({mode:"visible",children:B},A.mode,0,null),B.return=A,A.child=B}function vr(A,B,Q,e){return e!==null&&tu(e),zn(B,A.child,null,Q),A=Fu(B,B.pendingProps.children),A.flags|=2,B.memoizedState=null,A}function _v(A,B,Q,e,t,g,n){if(Q)return B.flags&256?(B.flags&=-257,e=Cl(Error(tA(422))),vr(A,B,n,e)):B.memoizedState!==null?(B.child=A.child,B.flags|=128,null):(g=e.fallback,t=B.mode,e=ko({mode:"visible",children:e.children},t,0,null),g=hg(g,t,n,null),g.flags|=2,e.return=B,g.return=B,e.sibling=g,B.child=e,B.mode&1&&zn(B,A.child,null,n),B.child.memoizedState=lF(n),B.memoizedState=cF,g);if(!(B.mode&1))return vr(A,B,n,null);if(t.data==="$!"){if(e=t.nextSibling&&t.nextSibling.dataset,e)var E=e.dgst;return e=E,g=Error(tA(419)),e=Cl(g,e,void 0),vr(A,B,n,e)}if(E=(n&A.childLanes)!==0,IQ||E){if(e=dB,e!==null){switch(n&-n){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(e.suspendedLanes|n)?0:t,t!==0&&t!==g.retryLane&&(g.retryLane=t,et(A,t),te(e,A,t,-1))}return Mu(),e=Cl(Error(tA(421))),vr(A,B,n,e)}return t.data==="$?"?(B.flags|=128,B.child=A.child,B=aZ.bind(null,A),t._reactRetry=B,null):(A=g.treeContext,MQ=Jt(t.nextSibling),hQ=B,PA=!0,Be=null,A!==null&&(LQ[XQ++]=ze,LQ[XQ++]=Pe,LQ[XQ++]=pg,ze=A.id,Pe=A.overflow,pg=B),B=Fu(B,e.children),B.flags|=4096,B)}function kd(A,B,Q){A.lanes|=B;var e=A.alternate;e!==null&&(e.lanes|=B),iF(A.return,B,Q)}function il(A,B,Q,e,t){var g=A.memoizedState;g===null?A.memoizedState={isBackwards:B,rendering:null,renderingStartTime:0,last:e,tail:Q,tailMode:t}:(g.isBackwards=B,g.rendering=null,g.renderingStartTime=0,g.last=e,g.tail=Q,g.tailMode=t)}function Yp(A,B,Q){var e=B.pendingProps,t=e.revealOrder,g=e.tail;if(BQ(A,B,e.children,Q),e=_A.current,e&2)e=e&1|2,B.flags|=128;else{if(A!==null&&A.flags&128)A:for(A=B.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&kd(A,Q,B);else if(A.tag===19)kd(A,Q,B);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===B)break A;for(;A.sibling===null;){if(A.return===null||A.return===B)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}e&=1}if(LA(_A,e),!(B.mode&1))B.memoizedState=null;else switch(t){case"forwards":for(Q=B.child,t=null;Q!==null;)A=Q.alternate,A!==null&&Wa(A)===null&&(t=Q),Q=Q.sibling;Q=t,Q===null?(t=B.child,B.child=null):(t=Q.sibling,Q.sibling=null),il(B,!1,t,Q,g);break;case"backwards":for(Q=null,t=B.child,B.child=null;t!==null;){if(A=t.alternate,A!==null&&Wa(A)===null){B.child=t;break}A=t.sibling,t.sibling=Q,Q=t,t=A}il(B,!0,Q,null,g);break;case"together":il(B,!1,null,null,void 0);break;default:B.memoizedState=null}return B.child}function oa(A,B){!(B.mode&1)&&A!==null&&(A.alternate=null,B.alternate=null,B.flags|=2)}function tt(A,B,Q){if(A!==null&&(B.dependencies=A.dependencies),Ng|=B.lanes,!(Q&B.childLanes))return null;if(A!==null&&B.child!==A.child)throw Error(tA(153));if(B.child!==null){for(A=B.child,Q=St(A,A.pendingProps),B.child=Q,Q.return=B;A.sibling!==null;)A=A.sibling,Q=Q.sibling=St(A,A.pendingProps),Q.return=B;Q.sibling=null}return B.child}function $v(A,B,Q){switch(B.tag){case 3:Rp(B),xn();break;case 5:Qp(B);break;case 1:cQ(B.type)&&Za(B);break;case 4:ru(B,B.stateNode.containerInfo);break;case 10:var e=B.type._context,t=B.memoizedProps.value;LA(Xa,e._currentValue),e._currentValue=t;break;case 13:if(e=B.memoizedState,e!==null)return e.dehydrated!==null?(LA(_A,_A.current&1),B.flags|=128,null):Q&B.child.childLanes?mp(A,B,Q):(LA(_A,_A.current&1),A=tt(A,B,Q),A!==null?A.sibling:null);LA(_A,_A.current&1);break;case 19:if(e=(Q&B.childLanes)!==0,A.flags&128){if(e)return Yp(A,B,Q);B.flags|=128}if(t=B.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),LA(_A,_A.current),e)break;return null;case 22:case 23:return B.lanes=0,hp(A,B,Q)}return tt(A,B,Q)}var pp,wF,yp,Np;pp=function(A,B){for(var Q=B.child;Q!==null;){if(Q.tag===5||Q.tag===6)A.appendChild(Q.stateNode);else if(Q.tag!==4&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===B)break;for(;Q.sibling===null;){if(Q.return===null||Q.return===B)return;Q=Q.return}Q.sibling.return=Q.return,Q=Q.sibling}};wF=function(){};yp=function(A,B,Q,e){var t=A.memoizedProps;if(t!==e){A=B.stateNode,fg(Ye.current);var g=null;switch(Q){case"input":t=Lw(A,t),e=Lw(A,e),g=[];break;case"select":t=QB({},t,{value:void 0}),e=QB({},e,{value:void 0}),g=[];break;case"textarea":t=Ow(A,t),e=Ow(A,e),g=[];break;default:typeof t.onClick!="function"&&typeof e.onClick=="function"&&(A.onclick=ka)}Tw(Q,e);var n;Q=null;for(i in t)if(!e.hasOwnProperty(i)&&t.hasOwnProperty(i)&&t[i]!=null)if(i==="style"){var E=t[i];for(n in E)E.hasOwnProperty(n)&&(Q||(Q={}),Q[n]="")}else i!=="dangerouslySetInnerHTML"&&i!=="children"&&i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(PC.hasOwnProperty(i)?g||(g=[]):(g=g||[]).push(i,null));for(i in e){var C=e[i];if(E=t!=null?t[i]:void 0,e.hasOwnProperty(i)&&C!==E&&(C!=null||E!=null))if(i==="style")if(E){for(n in E)!E.hasOwnProperty(n)||C&&C.hasOwnProperty(n)||(Q||(Q={}),Q[n]="");for(n in C)C.hasOwnProperty(n)&&E[n]!==C[n]&&(Q||(Q={}),Q[n]=C[n])}else Q||(g||(g=[]),g.push(i,Q)),Q=C;else i==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,E=E?E.__html:void 0,C!=null&&E!==C&&(g=g||[]).push(i,C)):i==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push(i,""+C):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&(PC.hasOwnProperty(i)?(C!=null&&i==="onScroll"&&WA("scroll",A),g||E===C||(g=[])):(g=g||[]).push(i,C))}Q&&(g=g||[]).push("style",Q);var i=g;(B.updateQueue=i)&&(B.flags|=4)}};Np=function(A,B,Q,e){Q!==e&&(B.flags|=4)};function AC(A,B){if(!PA)switch(A.tailMode){case"hidden":B=A.tail;for(var Q=null;B!==null;)B.alternate!==null&&(Q=B),B=B.sibling;Q===null?A.tail=null:Q.sibling=null;break;case"collapsed":Q=A.tail;for(var e=null;Q!==null;)Q.alternate!==null&&(e=Q),Q=Q.sibling;e===null?B||A.tail===null?A.tail=null:A.tail.sibling=null:e.sibling=null}}function ZB(A){var B=A.alternate!==null&&A.alternate.child===A.child,Q=0,e=0;if(B)for(var t=A.child;t!==null;)Q|=t.lanes|t.childLanes,e|=t.subtreeFlags&14680064,e|=t.flags&14680064,t.return=A,t=t.sibling;else for(t=A.child;t!==null;)Q|=t.lanes|t.childLanes,e|=t.subtreeFlags,e|=t.flags,t.return=A,t=t.sibling;return A.subtreeFlags|=e,A.childLanes=Q,B}function AZ(A,B,Q){var e=B.pendingProps;switch(eu(B),B.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ZB(B),null;case 1:return cQ(B.type)&&va(),ZB(B),null;case 3:return e=B.stateNode,Pn(),VA(sQ),VA(xB),ou(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(A===null||A.child===null)&&(Jr(B)?B.flags|=4:A===null||A.memoizedState.isDehydrated&&!(B.flags&256)||(B.flags|=1024,Be!==null&&(hF(Be),Be=null))),wF(A,B),ZB(B),null;case 5:au(B);var t=fg(ni.current);if(Q=B.type,A!==null&&B.stateNode!=null)yp(A,B,Q,e,t),A.ref!==B.ref&&(B.flags|=512,B.flags|=2097152);else{if(!e){if(B.stateNode===null)throw Error(tA(166));return ZB(B),null}if(A=fg(Ye.current),Jr(B)){e=B.stateNode,Q=B.type;var g=B.memoizedProps;switch(e[he]=B,e[ti]=g,A=(B.mode&1)!==0,Q){case"dialog":WA("cancel",e),WA("close",e);break;case"iframe":case"object":case"embed":WA("load",e);break;case"video":case"audio":for(t=0;t<uC.length;t++)WA(uC[t],e);break;case"source":WA("error",e);break;case"img":case"image":case"link":WA("error",e),WA("load",e);break;case"details":WA("toggle",e);break;case"input":T0(e,g),WA("invalid",e);break;case"select":e._wrapperState={wasMultiple:!!g.multiple},WA("invalid",e);break;case"textarea":x0(e,g),WA("invalid",e)}Tw(Q,g),t=null;for(var n in g)if(g.hasOwnProperty(n)){var E=g[n];n==="children"?typeof E=="string"?e.textContent!==E&&(g.suppressHydrationWarning!==!0&&br(e.textContent,E,A),t=["children",E]):typeof E=="number"&&e.textContent!==""+E&&(g.suppressHydrationWarning!==!0&&br(e.textContent,E,A),t=["children",""+E]):PC.hasOwnProperty(n)&&E!=null&&n==="onScroll"&&WA("scroll",e)}switch(Q){case"input":hr(e),V0(e,g,!0);break;case"textarea":hr(e),z0(e);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(e.onclick=ka)}e=t,B.updateQueue=e,e!==null&&(B.flags|=4)}else{n=t.nodeType===9?t:t.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=gY(Q)),A==="http://www.w3.org/1999/xhtml"?Q==="script"?(A=n.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof e.is=="string"?A=n.createElement(Q,{is:e.is}):(A=n.createElement(Q),Q==="select"&&(n=A,e.multiple?n.multiple=!0:e.size&&(n.size=e.size))):A=n.createElementNS(A,Q),A[he]=B,A[ti]=e,pp(A,B,!1,!1),B.stateNode=A;A:{switch(n=Vw(Q,e),Q){case"dialog":WA("cancel",A),WA("close",A),t=e;break;case"iframe":case"object":case"embed":WA("load",A),t=e;break;case"video":case"audio":for(t=0;t<uC.length;t++)WA(uC[t],A);t=e;break;case"source":WA("error",A),t=e;break;case"img":case"image":case"link":WA("error",A),WA("load",A),t=e;break;case"details":WA("toggle",A),t=e;break;case"input":T0(A,e),t=Lw(A,e),WA("invalid",A);break;case"option":t=e;break;case"select":A._wrapperState={wasMultiple:!!e.multiple},t=QB({},e,{value:void 0}),WA("invalid",A);break;case"textarea":x0(A,e),t=Ow(A,e),WA("invalid",A);break;default:t=e}Tw(Q,t),E=t;for(g in E)if(E.hasOwnProperty(g)){var C=E[g];g==="style"?CY(A,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&nY(A,C)):g==="children"?typeof C=="string"?(Q!=="textarea"||C!=="")&&jC(A,C):typeof C=="number"&&jC(A,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(PC.hasOwnProperty(g)?C!=null&&g==="onScroll"&&WA("scroll",A):C!=null&&OD(A,g,C,n))}switch(Q){case"input":hr(A),V0(A,e,!1);break;case"textarea":hr(A),z0(A);break;case"option":e.value!=null&&A.setAttribute("value",""+Tt(e.value));break;case"select":A.multiple=!!e.multiple,g=e.value,g!=null?kn(A,!!e.multiple,g,!1):e.defaultValue!=null&&kn(A,!!e.multiple,e.defaultValue,!0);break;default:typeof t.onClick=="function"&&(A.onclick=ka)}switch(Q){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break A;case"img":e=!0;break A;default:e=!1}}e&&(B.flags|=4)}B.ref!==null&&(B.flags|=512,B.flags|=2097152)}return ZB(B),null;case 6:if(A&&B.stateNode!=null)Np(A,B,A.memoizedProps,e);else{if(typeof e!="string"&&B.stateNode===null)throw Error(tA(166));if(Q=fg(ni.current),fg(Ye.current),Jr(B)){if(e=B.stateNode,Q=B.memoizedProps,e[he]=B,(g=e.nodeValue!==Q)&&(A=hQ,A!==null))switch(A.tag){case 3:br(e.nodeValue,Q,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&br(e.nodeValue,Q,(A.mode&1)!==0)}g&&(B.flags|=4)}else e=(Q.nodeType===9?Q:Q.ownerDocument).createTextNode(e),e[he]=B,B.stateNode=e}return ZB(B),null;case 13:if(VA(_A),e=B.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(PA&&MQ!==null&&B.mode&1&&!(B.flags&128))jY(),xn(),B.flags|=98560,g=!1;else if(g=Jr(B),e!==null&&e.dehydrated!==null){if(A===null){if(!g)throw Error(tA(318));if(g=B.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(tA(317));g[he]=B}else xn(),!(B.flags&128)&&(B.memoizedState=null),B.flags|=4;ZB(B),g=!1}else Be!==null&&(hF(Be),Be=null),g=!0;if(!g)return B.flags&65536?B:null}return B.flags&128?(B.lanes=Q,B):(e=e!==null,e!==(A!==null&&A.memoizedState!==null)&&e&&(B.child.flags|=8192,B.mode&1&&(A===null||_A.current&1?cB===0&&(cB=3):Mu())),B.updateQueue!==null&&(B.flags|=4),ZB(B),null);case 4:return Pn(),wF(A,B),A===null&&Qi(B.stateNode.containerInfo),ZB(B),null;case 10:return Eu(B.type._context),ZB(B),null;case 17:return cQ(B.type)&&va(),ZB(B),null;case 19:if(VA(_A),g=B.memoizedState,g===null)return ZB(B),null;if(e=(B.flags&128)!==0,n=g.rendering,n===null)if(e)AC(g,!1);else{if(cB!==0||A!==null&&A.flags&128)for(A=B.child;A!==null;){if(n=Wa(A),n!==null){for(B.flags|=128,AC(g,!1),e=n.updateQueue,e!==null&&(B.updateQueue=e,B.flags|=4),B.subtreeFlags=0,e=Q,Q=B.child;Q!==null;)g=Q,A=e,g.flags&=14680066,n=g.alternate,n===null?(g.childLanes=0,g.lanes=A,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=n.childLanes,g.lanes=n.lanes,g.child=n.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=n.memoizedProps,g.memoizedState=n.memoizedState,g.updateQueue=n.updateQueue,g.type=n.type,A=n.dependencies,g.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),Q=Q.sibling;return LA(_A,_A.current&1|2),B.child}A=A.sibling}g.tail!==null&&EB()>Kn&&(B.flags|=128,e=!0,AC(g,!1),B.lanes=4194304)}else{if(!e)if(A=Wa(n),A!==null){if(B.flags|=128,e=!0,Q=A.updateQueue,Q!==null&&(B.updateQueue=Q,B.flags|=4),AC(g,!0),g.tail===null&&g.tailMode==="hidden"&&!n.alternate&&!PA)return ZB(B),null}else 2*EB()-g.renderingStartTime>Kn&&Q!==1073741824&&(B.flags|=128,e=!0,AC(g,!1),B.lanes=4194304);g.isBackwards?(n.sibling=B.child,B.child=n):(Q=g.last,Q!==null?Q.sibling=n:B.child=n,g.last=n)}return g.tail!==null?(B=g.tail,g.rendering=B,g.tail=B.sibling,g.renderingStartTime=EB(),B.sibling=null,Q=_A.current,LA(_A,e?Q&1|2:Q&1),B):(ZB(B),null);case 22:case 23:return du(),e=B.memoizedState!==null,A!==null&&A.memoizedState!==null!==e&&(B.flags|=8192),e&&B.mode&1?UQ&1073741824&&(ZB(B),B.subtreeFlags&6&&(B.flags|=8192)):ZB(B),null;case 24:return null;case 25:return null}throw Error(tA(156,B.tag))}function BZ(A,B){switch(eu(B),B.tag){case 1:return cQ(B.type)&&va(),A=B.flags,A&65536?(B.flags=A&-65537|128,B):null;case 3:return Pn(),VA(sQ),VA(xB),ou(),A=B.flags,A&65536&&!(A&128)?(B.flags=A&-65537|128,B):null;case 5:return au(B),null;case 13:if(VA(_A),A=B.memoizedState,A!==null&&A.dehydrated!==null){if(B.alternate===null)throw Error(tA(340));xn()}return A=B.flags,A&65536?(B.flags=A&-65537|128,B):null;case 19:return VA(_A),null;case 4:return Pn(),null;case 10:return Eu(B.type._context),null;case 22:case 23:return du(),null;case 24:return null;default:return null}}var Zr=!1,VB=!1,QZ=typeof WeakSet=="function"?WeakSet:Set,aA=null;function Rn(A,B){var Q=A.ref;if(Q!==null)if(typeof Q=="function")try{Q(null)}catch(e){tB(A,B,e)}else Q.current=null}function FF(A,B,Q){try{Q()}catch(e){tB(A,B,e)}}var vd=!1;function eZ(A,B){if(BF=Na,A=vY(),Bu(A)){if("selectionStart"in A)var Q={start:A.selectionStart,end:A.selectionEnd};else A:{Q=(Q=A.ownerDocument)&&Q.defaultView||window;var e=Q.getSelection&&Q.getSelection();if(e&&e.rangeCount!==0){Q=e.anchorNode;var t=e.anchorOffset,g=e.focusNode;e=e.focusOffset;try{Q.nodeType,g.nodeType}catch{Q=null;break A}var n=0,E=-1,C=-1,i=0,r=0,a=A,o=null;B:for(;;){for(var l;a!==Q||t!==0&&a.nodeType!==3||(E=n+t),a!==g||e!==0&&a.nodeType!==3||(C=n+e),a.nodeType===3&&(n+=a.nodeValue.length),(l=a.firstChild)!==null;)o=a,a=l;for(;;){if(a===A)break B;if(o===Q&&++i===t&&(E=n),o===g&&++r===e&&(C=n),(l=a.nextSibling)!==null)break;a=o,o=a.parentNode}a=l}Q=E===-1||C===-1?null:{start:E,end:C}}else Q=null}Q=Q||{start:0,end:0}}else Q=null;for(QF={focusedElem:A,selectionRange:Q},Na=!1,aA=B;aA!==null;)if(B=aA,A=B.child,(B.subtreeFlags&1028)!==0&&A!==null)A.return=B,aA=A;else for(;aA!==null;){B=aA;try{var I=B.alternate;if(B.flags&1024)switch(B.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var w=I.memoizedProps,U=I.memoizedState,c=B.stateNode,D=c.getSnapshotBeforeUpdate(B.elementType===B.type?w:$Q(B.type,w),U);c.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var s=B.stateNode.containerInfo;s.nodeType===1?s.textContent="":s.nodeType===9&&s.documentElement&&s.removeChild(s.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(tA(163))}}catch(u){tB(B,B.return,u)}if(A=B.sibling,A!==null){A.return=B.return,aA=A;break}aA=B.return}return I=vd,vd=!1,I}function pC(A,B,Q){var e=B.updateQueue;if(e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&A)===A){var g=t.destroy;t.destroy=void 0,g!==void 0&&FF(B,Q,g)}t=t.next}while(t!==e)}}function bo(A,B){if(B=B.updateQueue,B=B!==null?B.lastEffect:null,B!==null){var Q=B=B.next;do{if((Q.tag&A)===A){var e=Q.create;Q.destroy=e()}Q=Q.next}while(Q!==B)}}function DF(A){var B=A.ref;if(B!==null){var Q=A.stateNode;switch(A.tag){case 5:A=Q;break;default:A=Q}typeof B=="function"?B(A):B.current=A}}function bp(A){var B=A.alternate;B!==null&&(A.alternate=null,bp(B)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(B=A.stateNode,B!==null&&(delete B[he],delete B[ti],delete B[gF],delete B[Lv],delete B[Xv])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function Jp(A){return A.tag===5||A.tag===3||A.tag===4}function Zd(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||Jp(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function uF(A,B,Q){var e=A.tag;if(e===5||e===6)A=A.stateNode,B?Q.nodeType===8?Q.parentNode.insertBefore(A,B):Q.insertBefore(A,B):(Q.nodeType===8?(B=Q.parentNode,B.insertBefore(A,Q)):(B=Q,B.appendChild(A)),Q=Q._reactRootContainer,Q!=null||B.onclick!==null||(B.onclick=ka));else if(e!==4&&(A=A.child,A!==null))for(uF(A,B,Q),A=A.sibling;A!==null;)uF(A,B,Q),A=A.sibling}function fF(A,B,Q){var e=A.tag;if(e===5||e===6)A=A.stateNode,B?Q.insertBefore(A,B):Q.appendChild(A);else if(e!==4&&(A=A.child,A!==null))for(fF(A,B,Q),A=A.sibling;A!==null;)fF(A,B,Q),A=A.sibling}var pB=null,Ae=!1;function It(A,B,Q){for(Q=Q.child;Q!==null;)kp(A,B,Q),Q=Q.sibling}function kp(A,B,Q){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(ho,Q)}catch{}switch(Q.tag){case 5:VB||Rn(Q,B);case 6:var e=pB,t=Ae;pB=null,It(A,B,Q),pB=e,Ae=t,pB!==null&&(Ae?(A=pB,Q=Q.stateNode,A.nodeType===8?A.parentNode.removeChild(Q):A.removeChild(Q)):pB.removeChild(Q.stateNode));break;case 18:pB!==null&&(Ae?(A=pB,Q=Q.stateNode,A.nodeType===8?Ql(A.parentNode,Q):A.nodeType===1&&Ql(A,Q),$C(A)):Ql(pB,Q.stateNode));break;case 4:e=pB,t=Ae,pB=Q.stateNode.containerInfo,Ae=!0,It(A,B,Q),pB=e,Ae=t;break;case 0:case 11:case 14:case 15:if(!VB&&(e=Q.updateQueue,e!==null&&(e=e.lastEffect,e!==null))){t=e=e.next;do{var g=t,n=g.destroy;g=g.tag,n!==void 0&&(g&2||g&4)&&FF(Q,B,n),t=t.next}while(t!==e)}It(A,B,Q);break;case 1:if(!VB&&(Rn(Q,B),e=Q.stateNode,typeof e.componentWillUnmount=="function"))try{e.props=Q.memoizedProps,e.state=Q.memoizedState,e.componentWillUnmount()}catch(E){tB(Q,B,E)}It(A,B,Q);break;case 21:It(A,B,Q);break;case 22:Q.mode&1?(VB=(e=VB)||Q.memoizedState!==null,It(A,B,Q),VB=e):It(A,B,Q);break;default:It(A,B,Q)}}function Sd(A){var B=A.updateQueue;if(B!==null){A.updateQueue=null;var Q=A.stateNode;Q===null&&(Q=A.stateNode=new QZ),B.forEach(function(e){var t=oZ.bind(null,A,e);Q.has(e)||(Q.add(e),e.then(t,t))})}}function jQ(A,B){var Q=B.deletions;if(Q!==null)for(var e=0;e<Q.length;e++){var t=Q[e];try{var g=A,n=B,E=n;A:for(;E!==null;){switch(E.tag){case 5:pB=E.stateNode,Ae=!1;break A;case 3:pB=E.stateNode.containerInfo,Ae=!0;break A;case 4:pB=E.stateNode.containerInfo,Ae=!0;break A}E=E.return}if(pB===null)throw Error(tA(160));kp(g,n,t),pB=null,Ae=!1;var C=t.alternate;C!==null&&(C.return=null),t.return=null}catch(i){tB(t,B,i)}}if(B.subtreeFlags&12854)for(B=B.child;B!==null;)vp(B,A),B=B.sibling}function vp(A,B){var Q=A.alternate,e=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if(jQ(B,A),se(A),e&4){try{pC(3,A,A.return),bo(3,A)}catch(w){tB(A,A.return,w)}try{pC(5,A,A.return)}catch(w){tB(A,A.return,w)}}break;case 1:jQ(B,A),se(A),e&512&&Q!==null&&Rn(Q,Q.return);break;case 5:if(jQ(B,A),se(A),e&512&&Q!==null&&Rn(Q,Q.return),A.flags&32){var t=A.stateNode;try{jC(t,"")}catch(w){tB(A,A.return,w)}}if(e&4&&(t=A.stateNode,t!=null)){var g=A.memoizedProps,n=Q!==null?Q.memoizedProps:g,E=A.type,C=A.updateQueue;if(A.updateQueue=null,C!==null)try{E==="input"&&g.type==="radio"&&g.name!=null&&eY(t,g),Vw(E,n);var i=Vw(E,g);for(n=0;n<C.length;n+=2){var r=C[n],a=C[n+1];r==="style"?CY(t,a):r==="dangerouslySetInnerHTML"?nY(t,a):r==="children"?jC(t,a):OD(t,r,a,i)}switch(E){case"input":Xw(t,g);break;case"textarea":tY(t,g);break;case"select":var o=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!g.multiple;var l=g.value;l!=null?kn(t,!!g.multiple,l,!1):o!==!!g.multiple&&(g.defaultValue!=null?kn(t,!!g.multiple,g.defaultValue,!0):kn(t,!!g.multiple,g.multiple?[]:"",!1))}t[ti]=g}catch(w){tB(A,A.return,w)}}break;case 6:if(jQ(B,A),se(A),e&4){if(A.stateNode===null)throw Error(tA(162));t=A.stateNode,g=A.memoizedProps;try{t.nodeValue=g}catch(w){tB(A,A.return,w)}}break;case 3:if(jQ(B,A),se(A),e&4&&Q!==null&&Q.memoizedState.isDehydrated)try{$C(B.containerInfo)}catch(w){tB(A,A.return,w)}break;case 4:jQ(B,A),se(A);break;case 13:jQ(B,A),se(A),t=A.child,t.flags&8192&&(g=t.memoizedState!==null,t.stateNode.isHidden=g,!g||t.alternate!==null&&t.alternate.memoizedState!==null||(fu=EB())),e&4&&Sd(A);break;case 22:if(r=Q!==null&&Q.memoizedState!==null,A.mode&1?(VB=(i=VB)||r,jQ(B,A),VB=i):jQ(B,A),se(A),e&8192){if(i=A.memoizedState!==null,(A.stateNode.isHidden=i)&&!r&&A.mode&1)for(aA=A,r=A.child;r!==null;){for(a=aA=r;aA!==null;){switch(o=aA,l=o.child,o.tag){case 0:case 11:case 14:case 15:pC(4,o,o.return);break;case 1:Rn(o,o.return);var I=o.stateNode;if(typeof I.componentWillUnmount=="function"){e=o,Q=o.return;try{B=e,I.props=B.memoizedProps,I.state=B.memoizedState,I.componentWillUnmount()}catch(w){tB(e,Q,w)}}break;case 5:Rn(o,o.return);break;case 22:if(o.memoizedState!==null){Xd(a);continue}}l!==null?(l.return=o,aA=l):Xd(a)}r=r.sibling}A:for(r=null,a=A;;){if(a.tag===5){if(r===null){r=a;try{t=a.stateNode,i?(g=t.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(E=a.stateNode,C=a.memoizedProps.style,n=C!=null&&C.hasOwnProperty("display")?C.display:null,E.style.display=EY("display",n))}catch(w){tB(A,A.return,w)}}}else if(a.tag===6){if(r===null)try{a.stateNode.nodeValue=i?"":a.memoizedProps}catch(w){tB(A,A.return,w)}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===A)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===A)break A;for(;a.sibling===null;){if(a.return===null||a.return===A)break A;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}}break;case 19:jQ(B,A),se(A),e&4&&Sd(A);break;case 21:break;default:jQ(B,A),se(A)}}function se(A){var B=A.flags;if(B&2){try{A:{for(var Q=A.return;Q!==null;){if(Jp(Q)){var e=Q;break A}Q=Q.return}throw Error(tA(160))}switch(e.tag){case 5:var t=e.stateNode;e.flags&32&&(jC(t,""),e.flags&=-33);var g=Zd(A);fF(A,g,t);break;case 3:case 4:var n=e.stateNode.containerInfo,E=Zd(A);uF(A,E,n);break;default:throw Error(tA(161))}}catch(C){tB(A,A.return,C)}A.flags&=-3}B&4096&&(A.flags&=-4097)}function tZ(A,B,Q){aA=A,Zp(A)}function Zp(A,B,Q){for(var e=(A.mode&1)!==0;aA!==null;){var t=aA,g=t.child;if(t.tag===22&&e){var n=t.memoizedState!==null||Zr;if(!n){var E=t.alternate,C=E!==null&&E.memoizedState!==null||VB;E=Zr;var i=VB;if(Zr=n,(VB=C)&&!i)for(aA=t;aA!==null;)n=aA,C=n.child,n.tag===22&&n.memoizedState!==null?Hd(t):C!==null?(C.return=n,aA=C):Hd(t);for(;g!==null;)aA=g,Zp(g),g=g.sibling;aA=t,Zr=E,VB=i}Ld(A)}else t.subtreeFlags&8772&&g!==null?(g.return=t,aA=g):Ld(A)}}function Ld(A){for(;aA!==null;){var B=aA;if(B.flags&8772){var Q=B.alternate;try{if(B.flags&8772)switch(B.tag){case 0:case 11:case 15:VB||bo(5,B);break;case 1:var e=B.stateNode;if(B.flags&4&&!VB)if(Q===null)e.componentDidMount();else{var t=B.elementType===B.type?Q.memoizedProps:$Q(B.type,Q.memoizedProps);e.componentDidUpdate(t,Q.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}var g=B.updateQueue;g!==null&&Ud(B,g,e);break;case 3:var n=B.updateQueue;if(n!==null){if(Q=null,B.child!==null)switch(B.child.tag){case 5:Q=B.child.stateNode;break;case 1:Q=B.child.stateNode}Ud(B,n,Q)}break;case 5:var E=B.stateNode;if(Q===null&&B.flags&4){Q=E;var C=B.memoizedProps;switch(B.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&Q.focus();break;case"img":C.src&&(Q.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(B.memoizedState===null){var i=B.alternate;if(i!==null){var r=i.memoizedState;if(r!==null){var a=r.dehydrated;a!==null&&$C(a)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(tA(163))}VB||B.flags&512&&DF(B)}catch(o){tB(B,B.return,o)}}if(B===A){aA=null;break}if(Q=B.sibling,Q!==null){Q.return=B.return,aA=Q;break}aA=B.return}}function Xd(A){for(;aA!==null;){var B=aA;if(B===A){aA=null;break}var Q=B.sibling;if(Q!==null){Q.return=B.return,aA=Q;break}aA=B.return}}function Hd(A){for(;aA!==null;){var B=aA;try{switch(B.tag){case 0:case 11:case 15:var Q=B.return;try{bo(4,B)}catch(C){tB(B,Q,C)}break;case 1:var e=B.stateNode;if(typeof e.componentDidMount=="function"){var t=B.return;try{e.componentDidMount()}catch(C){tB(B,t,C)}}var g=B.return;try{DF(B)}catch(C){tB(B,g,C)}break;case 5:var n=B.return;try{DF(B)}catch(C){tB(B,n,C)}}}catch(C){tB(B,B.return,C)}if(B===A){aA=null;break}var E=B.sibling;if(E!==null){E.return=B.return,aA=E;break}aA=B.return}}var gZ=Math.ceil,xa=Ct.ReactCurrentDispatcher,Du=Ct.ReactCurrentOwner,OQ=Ct.ReactCurrentBatchConfig,pA=0,dB=null,aB=null,NB=0,UQ=0,mn=Kt(0),cB=0,ri=null,Ng=0,Jo=0,uu=0,yC=null,oQ=null,fu=0,Kn=1/0,Oe=null,za=!1,UF=null,vt=null,Sr=!1,Rt=null,Pa=0,NC=0,dF=null,Ia=-1,sa=0;function tQ(){return pA&6?EB():Ia!==-1?Ia:Ia=EB()}function Zt(A){return A.mode&1?pA&2&&NB!==0?NB&-NB:Ov.transition!==null?(sa===0&&(sa=uY()),sa):(A=JA,A!==0||(A=window.event,A=A===void 0?16:RY(A.type)),A):1}function te(A,B,Q,e){if(50<NC)throw NC=0,dF=null,Error(tA(185));Ri(A,Q,e),(!(pA&2)||A!==dB)&&(A===dB&&(!(pA&2)&&(Jo|=Q),cB===4&&Mt(A,NB)),lQ(A,e),Q===1&&pA===0&&!(B.mode&1)&&(Kn=EB()+500,po&&qt()))}function lQ(A,B){var Q=A.callbackNode;Ok(A,B);var e=ya(A,A===dB?NB:0);if(e===0)Q!==null&&K0(Q),A.callbackNode=null,A.callbackPriority=0;else if(B=e&-e,A.callbackPriority!==B){if(Q!=null&&K0(Q),B===1)A.tag===0?Hv(Od.bind(null,A)):xY(Od.bind(null,A)),Zv(function(){!(pA&6)&&qt()}),Q=null;else{switch(fY(e)){case 1:Q=zD;break;case 4:Q=FY;break;case 16:Q=pa;break;case 536870912:Q=DY;break;default:Q=pa}Q=Vp(Q,Sp.bind(null,A))}A.callbackPriority=B,A.callbackNode=Q}}function Sp(A,B){if(Ia=-1,sa=0,pA&6)throw Error(tA(327));var Q=A.callbackNode;if(Xn()&&A.callbackNode!==Q)return null;var e=ya(A,A===dB?NB:0);if(e===0)return null;if(e&30||e&A.expiredLanes||B)B=ja(A,e);else{B=e;var t=pA;pA|=2;var g=Xp();(dB!==A||NB!==B)&&(Oe=null,Kn=EB()+500,Mg(A,B));do try{CZ();break}catch(E){Lp(A,E)}while(1);nu(),xa.current=g,pA=t,aB!==null?B=0:(dB=null,NB=0,B=cB)}if(B!==0){if(B===2&&(t=Kw(A),t!==0&&(e=t,B=MF(A,t))),B===1)throw Q=ri,Mg(A,0),Mt(A,e),lQ(A,EB()),Q;if(B===6)Mt(A,e);else{if(t=A.current.alternate,!(e&30)&&!nZ(t)&&(B=ja(A,e),B===2&&(g=Kw(A),g!==0&&(e=g,B=MF(A,g))),B===1))throw Q=ri,Mg(A,0),Mt(A,e),lQ(A,EB()),Q;switch(A.finishedWork=t,A.finishedLanes=e,B){case 0:case 1:throw Error(tA(345));case 2:ag(A,oQ,Oe);break;case 3:if(Mt(A,e),(e&130023424)===e&&(B=fu+500-EB(),10<B)){if(ya(A,0)!==0)break;if(t=A.suspendedLanes,(t&e)!==e){tQ(),A.pingedLanes|=A.suspendedLanes&t;break}A.timeoutHandle=tF(ag.bind(null,A,oQ,Oe),B);break}ag(A,oQ,Oe);break;case 4:if(Mt(A,e),(e&4194240)===e)break;for(B=A.eventTimes,t=-1;0<e;){var n=31-ee(e);g=1<<n,n=B[n],n>t&&(t=n),e&=~g}if(e=t,e=EB()-e,e=(120>e?120:480>e?480:1080>e?1080:1920>e?1920:3e3>e?3e3:4320>e?4320:1960*gZ(e/1960))-e,10<e){A.timeoutHandle=tF(ag.bind(null,A,oQ,Oe),e);break}ag(A,oQ,Oe);break;case 5:ag(A,oQ,Oe);break;default:throw Error(tA(329))}}}return lQ(A,EB()),A.callbackNode===Q?Sp.bind(null,A):null}function MF(A,B){var Q=yC;return A.current.memoizedState.isDehydrated&&(Mg(A,B).flags|=256),A=ja(A,B),A!==2&&(B=oQ,oQ=Q,B!==null&&hF(B)),A}function hF(A){oQ===null?oQ=A:oQ.push.apply(oQ,A)}function nZ(A){for(var B=A;;){if(B.flags&16384){var Q=B.updateQueue;if(Q!==null&&(Q=Q.stores,Q!==null))for(var e=0;e<Q.length;e++){var t=Q[e],g=t.getSnapshot;t=t.value;try{if(!ge(g(),t))return!1}catch{return!1}}}if(Q=B.child,B.subtreeFlags&16384&&Q!==null)Q.return=B,B=Q;else{if(B===A)break;for(;B.sibling===null;){if(B.return===null||B.return===A)return!0;B=B.return}B.sibling.return=B.return,B=B.sibling}}return!0}function Mt(A,B){for(B&=~uu,B&=~Jo,A.suspendedLanes|=B,A.pingedLanes&=~B,A=A.expirationTimes;0<B;){var Q=31-ee(B),e=1<<Q;A[Q]=-1,B&=~e}}function Od(A){if(pA&6)throw Error(tA(327));Xn();var B=ya(A,0);if(!(B&1))return lQ(A,EB()),null;var Q=ja(A,B);if(A.tag!==0&&Q===2){var e=Kw(A);e!==0&&(B=e,Q=MF(A,e))}if(Q===1)throw Q=ri,Mg(A,0),Mt(A,B),lQ(A,EB()),Q;if(Q===6)throw Error(tA(345));return A.finishedWork=A.current.alternate,A.finishedLanes=B,ag(A,oQ,Oe),lQ(A,EB()),null}function Uu(A,B){var Q=pA;pA|=1;try{return A(B)}finally{pA=Q,pA===0&&(Kn=EB()+500,po&&qt())}}function bg(A){Rt!==null&&Rt.tag===0&&!(pA&6)&&Xn();var B=pA;pA|=1;var Q=OQ.transition,e=JA;try{if(OQ.transition=null,JA=1,A)return A()}finally{JA=e,OQ.transition=Q,pA=B,!(pA&6)&&qt()}}function du(){UQ=mn.current,VA(mn)}function Mg(A,B){A.finishedWork=null,A.finishedLanes=0;var Q=A.timeoutHandle;if(Q!==-1&&(A.timeoutHandle=-1,vv(Q)),aB!==null)for(Q=aB.return;Q!==null;){var e=Q;switch(eu(e),e.tag){case 1:e=e.type.childContextTypes,e!=null&&va();break;case 3:Pn(),VA(sQ),VA(xB),ou();break;case 5:au(e);break;case 4:Pn();break;case 13:VA(_A);break;case 19:VA(_A);break;case 10:Eu(e.type._context);break;case 22:case 23:du()}Q=Q.return}if(dB=A,aB=A=St(A.current,null),NB=UQ=B,cB=0,ri=null,uu=Jo=Ng=0,oQ=yC=null,ug!==null){for(B=0;B<ug.length;B++)if(Q=ug[B],e=Q.interleaved,e!==null){Q.interleaved=null;var t=e.next,g=Q.pending;if(g!==null){var n=g.next;g.next=t,e.next=n}Q.pending=e}ug=null}return A}function Lp(A,B){do{var Q=aB;try{if(nu(),ra.current=Va,Ta){for(var e=BB.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ta=!1}if(yg=0,fB=IB=BB=null,YC=!1,Ei=0,Du.current=null,Q===null||Q.return===null){cB=1,ri=B,aB=null;break}A:{var g=A,n=Q.return,E=Q,C=B;if(B=NB,E.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var i=C,r=E,a=r.tag;if(!(r.mode&1)&&(a===0||a===11||a===15)){var o=r.alternate;o?(r.updateQueue=o.updateQueue,r.memoizedState=o.memoizedState,r.lanes=o.lanes):(r.updateQueue=null,r.memoizedState=null)}var l=Yd(n);if(l!==null){l.flags&=-257,pd(l,n,E,g,B),l.mode&1&&md(g,i,B),B=l,C=i;var I=B.updateQueue;if(I===null){var w=new Set;w.add(C),B.updateQueue=w}else I.add(C);break A}else{if(!(B&1)){md(g,i,B),Mu();break A}C=Error(tA(426))}}else if(PA&&E.mode&1){var U=Yd(n);if(U!==null){!(U.flags&65536)&&(U.flags|=256),pd(U,n,E,g,B),tu(jn(C,E));break A}}g=C=jn(C,E),cB!==4&&(cB=2),yC===null?yC=[g]:yC.push(g),g=n;do{switch(g.tag){case 3:g.flags|=65536,B&=-B,g.lanes|=B;var c=Up(g,C,B);fd(g,c);break A;case 1:E=C;var D=g.type,s=g.stateNode;if(!(g.flags&128)&&(typeof D.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(vt===null||!vt.has(s)))){g.flags|=65536,B&=-B,g.lanes|=B;var u=dp(g,E,B);fd(g,u);break A}}g=g.return}while(g!==null)}Op(Q)}catch(f){B=f,aB===Q&&Q!==null&&(aB=Q=Q.return);continue}break}while(1)}function Xp(){var A=xa.current;return xa.current=Va,A===null?Va:A}function Mu(){(cB===0||cB===3||cB===2)&&(cB=4),dB===null||!(Ng&268435455)&&!(Jo&268435455)||Mt(dB,NB)}function ja(A,B){var Q=pA;pA|=2;var e=Xp();(dB!==A||NB!==B)&&(Oe=null,Mg(A,B));do try{EZ();break}catch(t){Lp(A,t)}while(1);if(nu(),pA=Q,xa.current=e,aB!==null)throw Error(tA(261));return dB=null,NB=0,cB}function EZ(){for(;aB!==null;)Hp(aB)}function CZ(){for(;aB!==null&&!bk();)Hp(aB)}function Hp(A){var B=Tp(A.alternate,A,UQ);A.memoizedProps=A.pendingProps,B===null?Op(A):aB=B,Du.current=null}function Op(A){var B=A;do{var Q=B.alternate;if(A=B.return,B.flags&32768){if(Q=BZ(Q,B),Q!==null){Q.flags&=32767,aB=Q;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{cB=6,aB=null;return}}else if(Q=AZ(Q,B,UQ),Q!==null){aB=Q;return}if(B=B.sibling,B!==null){aB=B;return}aB=B=A}while(B!==null);cB===0&&(cB=5)}function ag(A,B,Q){var e=JA,t=OQ.transition;try{OQ.transition=null,JA=1,iZ(A,B,Q,e)}finally{OQ.transition=t,JA=e}return null}function iZ(A,B,Q,e){do Xn();while(Rt!==null);if(pA&6)throw Error(tA(327));Q=A.finishedWork;var t=A.finishedLanes;if(Q===null)return null;if(A.finishedWork=null,A.finishedLanes=0,Q===A.current)throw Error(tA(177));A.callbackNode=null,A.callbackPriority=0;var g=Q.lanes|Q.childLanes;if(Wk(A,g),A===dB&&(aB=dB=null,NB=0),!(Q.subtreeFlags&2064)&&!(Q.flags&2064)||Sr||(Sr=!0,Vp(pa,function(){return Xn(),null})),g=(Q.flags&15990)!==0,Q.subtreeFlags&15990||g){g=OQ.transition,OQ.transition=null;var n=JA;JA=1;var E=pA;pA|=4,Du.current=null,eZ(A,Q),vp(Q,A),Yv(QF),Na=!!BF,QF=BF=null,A.current=Q,tZ(Q),Jk(),pA=E,JA=n,OQ.transition=g}else A.current=Q;if(Sr&&(Sr=!1,Rt=A,Pa=t),g=A.pendingLanes,g===0&&(vt=null),Zk(Q.stateNode),lQ(A,EB()),B!==null)for(e=A.onRecoverableError,Q=0;Q<B.length;Q++)t=B[Q],e(t.value,{componentStack:t.stack,digest:t.digest});if(za)throw za=!1,A=UF,UF=null,A;return Pa&1&&A.tag!==0&&Xn(),g=A.pendingLanes,g&1?A===dF?NC++:(NC=0,dF=A):NC=0,qt(),null}function Xn(){if(Rt!==null){var A=fY(Pa),B=OQ.transition,Q=JA;try{if(OQ.transition=null,JA=16>A?16:A,Rt===null)var e=!1;else{if(A=Rt,Rt=null,Pa=0,pA&6)throw Error(tA(331));var t=pA;for(pA|=4,aA=A.current;aA!==null;){var g=aA,n=g.child;if(aA.flags&16){var E=g.deletions;if(E!==null){for(var C=0;C<E.length;C++){var i=E[C];for(aA=i;aA!==null;){var r=aA;switch(r.tag){case 0:case 11:case 15:pC(8,r,g)}var a=r.child;if(a!==null)a.return=r,aA=a;else for(;aA!==null;){r=aA;var o=r.sibling,l=r.return;if(bp(r),r===i){aA=null;break}if(o!==null){o.return=l,aA=o;break}aA=l}}}var I=g.alternate;if(I!==null){var w=I.child;if(w!==null){I.child=null;do{var U=w.sibling;w.sibling=null,w=U}while(w!==null)}}aA=g}}if(g.subtreeFlags&2064&&n!==null)n.return=g,aA=n;else A:for(;aA!==null;){if(g=aA,g.flags&2048)switch(g.tag){case 0:case 11:case 15:pC(9,g,g.return)}var c=g.sibling;if(c!==null){c.return=g.return,aA=c;break A}aA=g.return}}var D=A.current;for(aA=D;aA!==null;){n=aA;var s=n.child;if(n.subtreeFlags&2064&&s!==null)s.return=n,aA=s;else A:for(n=D;aA!==null;){if(E=aA,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:bo(9,E)}}catch(f){tB(E,E.return,f)}if(E===n){aA=null;break A}var u=E.sibling;if(u!==null){u.return=E.return,aA=u;break A}aA=E.return}}if(pA=t,qt(),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(ho,A)}catch{}e=!0}return e}finally{JA=Q,OQ.transition=B}}return!1}function Wd(A,B,Q){B=jn(Q,B),B=Up(A,B,1),A=kt(A,B,1),B=tQ(),A!==null&&(Ri(A,1,B),lQ(A,B))}function tB(A,B,Q){if(A.tag===3)Wd(A,A,Q);else for(;B!==null;){if(B.tag===3){Wd(B,A,Q);break}else if(B.tag===1){var e=B.stateNode;if(typeof B.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(vt===null||!vt.has(e))){A=jn(Q,A),A=dp(B,A,1),B=kt(B,A,1),A=tQ(),B!==null&&(Ri(B,1,A),lQ(B,A));break}}B=B.return}}function rZ(A,B,Q){var e=A.pingCache;e!==null&&e.delete(B),B=tQ(),A.pingedLanes|=A.suspendedLanes&Q,dB===A&&(NB&Q)===Q&&(cB===4||cB===3&&(NB&130023424)===NB&&500>EB()-fu?Mg(A,0):uu|=Q),lQ(A,B)}function Wp(A,B){B===0&&(A.mode&1?(B=mr,mr<<=1,!(mr&130023424)&&(mr=4194304)):B=1);var Q=tQ();A=et(A,B),A!==null&&(Ri(A,B,Q),lQ(A,Q))}function aZ(A){var B=A.memoizedState,Q=0;B!==null&&(Q=B.retryLane),Wp(A,Q)}function oZ(A,B){var Q=0;switch(A.tag){case 13:var e=A.stateNode,t=A.memoizedState;t!==null&&(Q=t.retryLane);break;case 19:e=A.stateNode;break;default:throw Error(tA(314))}e!==null&&e.delete(B),Wp(A,Q)}var Tp;Tp=function(A,B,Q){if(A!==null)if(A.memoizedProps!==B.pendingProps||sQ.current)IQ=!0;else{if(!(A.lanes&Q)&&!(B.flags&128))return IQ=!1,$v(A,B,Q);IQ=!!(A.flags&131072)}else IQ=!1,PA&&B.flags&1048576&&zY(B,La,B.index);switch(B.lanes=0,B.tag){case 2:var e=B.type;oa(A,B),A=B.pendingProps;var t=Vn(B,xB.current);Ln(B,Q),t=su(null,B,e,A,t,Q);var g=cu();return B.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(B.tag=1,B.memoizedState=null,B.updateQueue=null,cQ(e)?(g=!0,Za(B)):g=!1,B.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,iu(B),t.updater=yo,B.stateNode=t,t._reactInternals=B,aF(B,e,A,Q),B=sF(null,B,e,!0,g,Q)):(B.tag=0,PA&&g&&Qu(B),BQ(null,B,t,Q),B=B.child),B;case 16:e=B.elementType;A:{switch(oa(A,B),A=B.pendingProps,t=e._init,e=t(e._payload),B.type=e,t=B.tag=sZ(e),A=$Q(e,A),t){case 0:B=IF(null,B,e,A,Q);break A;case 1:B=bd(null,B,e,A,Q);break A;case 11:B=yd(null,B,e,A,Q);break A;case 14:B=Nd(null,B,e,$Q(e.type,A),Q);break A}throw Error(tA(306,e,""))}return B;case 0:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:$Q(e,t),IF(A,B,e,t,Q);case 1:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:$Q(e,t),bd(A,B,e,t,Q);case 3:A:{if(Rp(B),A===null)throw Error(tA(387));e=B.pendingProps,g=B.memoizedState,t=g.element,qY(A,B),Oa(B,e,null,Q);var n=B.memoizedState;if(e=n.element,g.isDehydrated)if(g={element:e,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},B.updateQueue.baseState=g,B.memoizedState=g,B.flags&256){t=jn(Error(tA(423)),B),B=Jd(A,B,e,Q,t);break A}else if(e!==t){t=jn(Error(tA(424)),B),B=Jd(A,B,e,Q,t);break A}else for(MQ=Jt(B.stateNode.containerInfo.firstChild),hQ=B,PA=!0,Be=null,Q=Bp(B,null,e,Q),B.child=Q;Q;)Q.flags=Q.flags&-3|4096,Q=Q.sibling;else{if(xn(),e===t){B=tt(A,B,Q);break A}BQ(A,B,e,Q)}B=B.child}return B;case 5:return Qp(B),A===null&&CF(B),e=B.type,t=B.pendingProps,g=A!==null?A.memoizedProps:null,n=t.children,eF(e,t)?n=null:g!==null&&eF(e,g)&&(B.flags|=32),Gp(A,B),BQ(A,B,n,Q),B.child;case 6:return A===null&&CF(B),null;case 13:return mp(A,B,Q);case 4:return ru(B,B.stateNode.containerInfo),e=B.pendingProps,A===null?B.child=zn(B,null,e,Q):BQ(A,B,e,Q),B.child;case 11:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:$Q(e,t),yd(A,B,e,t,Q);case 7:return BQ(A,B,B.pendingProps,Q),B.child;case 8:return BQ(A,B,B.pendingProps.children,Q),B.child;case 12:return BQ(A,B,B.pendingProps.children,Q),B.child;case 10:A:{if(e=B.type._context,t=B.pendingProps,g=B.memoizedProps,n=t.value,LA(Xa,e._currentValue),e._currentValue=n,g!==null)if(ge(g.value,n)){if(g.children===t.children&&!sQ.current){B=tt(A,B,Q);break A}}else for(g=B.child,g!==null&&(g.return=B);g!==null;){var E=g.dependencies;if(E!==null){n=g.child;for(var C=E.firstContext;C!==null;){if(C.context===e){if(g.tag===1){C=Ke(-1,Q&-Q),C.tag=2;var i=g.updateQueue;if(i!==null){i=i.shared;var r=i.pending;r===null?C.next=C:(C.next=r.next,r.next=C),i.pending=C}}g.lanes|=Q,C=g.alternate,C!==null&&(C.lanes|=Q),iF(g.return,Q,B),E.lanes|=Q;break}C=C.next}}else if(g.tag===10)n=g.type===B.type?null:g.child;else if(g.tag===18){if(n=g.return,n===null)throw Error(tA(341));n.lanes|=Q,E=n.alternate,E!==null&&(E.lanes|=Q),iF(n,Q,B),n=g.sibling}else n=g.child;if(n!==null)n.return=g;else for(n=g;n!==null;){if(n===B){n=null;break}if(g=n.sibling,g!==null){g.return=n.return,n=g;break}n=n.return}g=n}BQ(A,B,t.children,Q),B=B.child}return B;case 9:return t=B.type,e=B.pendingProps.children,Ln(B,Q),t=TQ(t),e=e(t),B.flags|=1,BQ(A,B,e,Q),B.child;case 14:return e=B.type,t=$Q(e,B.pendingProps),t=$Q(e.type,t),Nd(A,B,e,t,Q);case 15:return Mp(A,B,B.type,B.pendingProps,Q);case 17:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:$Q(e,t),oa(A,B),B.tag=1,cQ(e)?(A=!0,Za(B)):A=!1,Ln(B,Q),$Y(B,e,t),aF(B,e,t,Q),sF(null,B,e,!0,A,Q);case 19:return Yp(A,B,Q);case 22:return hp(A,B,Q)}throw Error(tA(156,B.tag))};function Vp(A,B){return wY(A,B)}function IZ(A,B,Q,e){this.tag=A,this.key=Q,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=B,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function HQ(A,B,Q,e){return new IZ(A,B,Q,e)}function hu(A){return A=A.prototype,!(!A||!A.isReactComponent)}function sZ(A){if(typeof A=="function")return hu(A)?1:0;if(A!=null){if(A=A.$$typeof,A===TD)return 11;if(A===VD)return 14}return 2}function St(A,B){var Q=A.alternate;return Q===null?(Q=HQ(A.tag,B,A.key,A.mode),Q.elementType=A.elementType,Q.type=A.type,Q.stateNode=A.stateNode,Q.alternate=A,A.alternate=Q):(Q.pendingProps=B,Q.type=A.type,Q.flags=0,Q.subtreeFlags=0,Q.deletions=null),Q.flags=A.flags&14680064,Q.childLanes=A.childLanes,Q.lanes=A.lanes,Q.child=A.child,Q.memoizedProps=A.memoizedProps,Q.memoizedState=A.memoizedState,Q.updateQueue=A.updateQueue,B=A.dependencies,Q.dependencies=B===null?null:{lanes:B.lanes,firstContext:B.firstContext},Q.sibling=A.sibling,Q.index=A.index,Q.ref=A.ref,Q}function ca(A,B,Q,e,t,g){var n=2;if(e=A,typeof A=="function")hu(A)&&(n=1);else if(typeof A=="string")n=5;else A:switch(A){case Fn:return hg(Q.children,t,g,B);case WD:n=8,t|=8;break;case kw:return A=HQ(12,Q,B,t|2),A.elementType=kw,A.lanes=g,A;case vw:return A=HQ(13,Q,B,t),A.elementType=vw,A.lanes=g,A;case Zw:return A=HQ(19,Q,B,t),A.elementType=Zw,A.lanes=g,A;case AY:return ko(Q,t,g,B);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case _m:n=10;break A;case $m:n=9;break A;case TD:n=11;break A;case VD:n=14;break A;case Dt:n=16,e=null;break A}throw Error(tA(130,A==null?A:typeof A,""))}return B=HQ(n,Q,B,t),B.elementType=A,B.type=e,B.lanes=g,B}function hg(A,B,Q,e){return A=HQ(7,A,e,B),A.lanes=Q,A}function ko(A,B,Q,e){return A=HQ(22,A,e,B),A.elementType=AY,A.lanes=Q,A.stateNode={isHidden:!1},A}function rl(A,B,Q){return A=HQ(6,A,null,B),A.lanes=Q,A}function al(A,B,Q){return B=HQ(4,A.children!==null?A.children:[],A.key,B),B.lanes=Q,B.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},B}function cZ(A,B,Q,e,t){this.tag=B,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=e,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Gu(A,B,Q,e,t,g,n,E,C){return A=new cZ(A,B,Q,E,C),B===1?(B=1,g===!0&&(B|=8)):B=0,g=HQ(3,null,null,B),A.current=g,g.stateNode=A,g.memoizedState={element:e,isDehydrated:Q,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(g),A}function lZ(A,B,Q){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:e==null?null:""+e,children:A,containerInfo:B,implementation:Q}}function xp(A){if(!A)return Vt;A=A._reactInternals;A:{if(Sg(A)!==A||A.tag!==1)throw Error(tA(170));var B=A;do{switch(B.tag){case 3:B=B.stateNode.context;break A;case 1:if(cQ(B.type)){B=B.stateNode.__reactInternalMemoizedMergedChildContext;break A}}B=B.return}while(B!==null);throw Error(tA(171))}if(A.tag===1){var Q=A.type;if(cQ(Q))return VY(A,Q,B)}return B}function zp(A,B,Q,e,t,g,n,E,C){return A=Gu(Q,e,!0,A,t,g,n,E,C),A.context=xp(null),Q=A.current,e=tQ(),t=Zt(Q),g=Ke(e,t),g.callback=B??null,kt(Q,g,t),A.current.lanes=t,Ri(A,t,e),lQ(A,e),A}function vo(A,B,Q,e){var t=B.current,g=tQ(),n=Zt(t);return Q=xp(Q),B.context===null?B.context=Q:B.pendingContext=Q,B=Ke(g,n),B.payload={element:A},e=e===void 0?null:e,e!==null&&(B.callback=e),A=kt(t,B,n),A!==null&&(te(A,t,n,g),ia(A,t,n)),n}function Ka(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function Td(A,B){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var Q=A.retryLane;A.retryLane=Q!==0&&Q<B?Q:B}}function Ru(A,B){Td(A,B),(A=A.alternate)&&Td(A,B)}function wZ(){return null}var Pp=typeof reportError=="function"?reportError:function(A){console.error(A)};function mu(A){this._internalRoot=A}Zo.prototype.render=mu.prototype.render=function(A){var B=this._internalRoot;if(B===null)throw Error(tA(409));vo(A,B,null,null)};Zo.prototype.unmount=mu.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var B=A.containerInfo;bg(function(){vo(null,A,null,null)}),B[Qt]=null}};function Zo(A){this._internalRoot=A}Zo.prototype.unstable_scheduleHydration=function(A){if(A){var B=MY();A={blockedOn:null,target:A,priority:B};for(var Q=0;Q<dt.length&&B!==0&&B<dt[Q].priority;Q++);dt.splice(Q,0,A),Q===0&&GY(A)}};function Yu(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function So(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function Vd(){}function FZ(A,B,Q,e,t){if(t){if(typeof e=="function"){var g=e;e=function(){var i=Ka(n);g.call(i)}}var n=zp(B,e,A,0,null,!1,!1,"",Vd);return A._reactRootContainer=n,A[Qt]=n.current,Qi(A.nodeType===8?A.parentNode:A),bg(),n}for(;t=A.lastChild;)A.removeChild(t);if(typeof e=="function"){var E=e;e=function(){var i=Ka(C);E.call(i)}}var C=Gu(A,0,!1,null,null,!1,!1,"",Vd);return A._reactRootContainer=C,A[Qt]=C.current,Qi(A.nodeType===8?A.parentNode:A),bg(function(){vo(B,C,Q,e)}),C}function Lo(A,B,Q,e,t){var g=Q._reactRootContainer;if(g){var n=g;if(typeof t=="function"){var E=t;t=function(){var C=Ka(n);E.call(C)}}vo(B,n,A,t)}else n=FZ(Q,B,A,t,e);return Ka(n)}UY=function(A){switch(A.tag){case 3:var B=A.stateNode;if(B.current.memoizedState.isDehydrated){var Q=DC(B.pendingLanes);Q!==0&&(PD(B,Q|1),lQ(B,EB()),!(pA&6)&&(Kn=EB()+500,qt()))}break;case 13:bg(function(){var e=et(A,1);if(e!==null){var t=tQ();te(e,A,1,t)}}),Ru(A,1)}};jD=function(A){if(A.tag===13){var B=et(A,134217728);if(B!==null){var Q=tQ();te(B,A,134217728,Q)}Ru(A,134217728)}};dY=function(A){if(A.tag===13){var B=Zt(A),Q=et(A,B);if(Q!==null){var e=tQ();te(Q,A,B,e)}Ru(A,B)}};MY=function(){return JA};hY=function(A,B){var Q=JA;try{return JA=A,B()}finally{JA=Q}};zw=function(A,B,Q){switch(B){case"input":if(Xw(A,Q),B=Q.name,Q.type==="radio"&&B!=null){for(Q=A;Q.parentNode;)Q=Q.parentNode;for(Q=Q.querySelectorAll("input[name="+JSON.stringify(""+B)+'][type="radio"]'),B=0;B<Q.length;B++){var e=Q[B];if(e!==A&&e.form===A.form){var t=Yo(e);if(!t)throw Error(tA(90));QY(e),Xw(e,t)}}}break;case"textarea":tY(A,Q);break;case"select":B=Q.value,B!=null&&kn(A,!!Q.multiple,B,!1)}};aY=Uu;oY=bg;var DZ={usingClientEntryPoint:!1,Events:[Yi,Un,Yo,iY,rY,Uu]},BC={findFiberByHostInstance:Dg,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uZ={bundleType:BC.bundleType,version:BC.version,rendererPackageName:BC.rendererPackageName,rendererConfig:BC.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=cY(A),A===null?null:A.stateNode},findFiberByHostInstance:BC.findFiberByHostInstance||wZ,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{ho=Lr.inject(uZ),me=Lr}catch{}}YQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DZ;YQ.createPortal=function(A,B){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(B))throw Error(tA(200));return lZ(A,B,null,Q)};YQ.createRoot=function(A,B){if(!Yu(A))throw Error(tA(299));var Q=!1,e="",t=Pp;return B!=null&&(B.unstable_strictMode===!0&&(Q=!0),B.identifierPrefix!==void 0&&(e=B.identifierPrefix),B.onRecoverableError!==void 0&&(t=B.onRecoverableError)),B=Gu(A,1,!1,null,null,Q,!1,e,t),A[Qt]=B.current,Qi(A.nodeType===8?A.parentNode:A),new mu(B)};YQ.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var B=A._reactInternals;if(B===void 0)throw typeof A.render=="function"?Error(tA(188)):(A=Object.keys(A).join(","),Error(tA(268,A)));return A=cY(B),A=A===null?null:A.stateNode,A};YQ.flushSync=function(A){return bg(A)};YQ.hydrate=function(A,B,Q){if(!So(B))throw Error(tA(200));return Lo(null,A,B,!0,Q)};YQ.hydrateRoot=function(A,B,Q){if(!Yu(A))throw Error(tA(405));var e=Q!=null&&Q.hydratedSources||null,t=!1,g="",n=Pp;if(Q!=null&&(Q.unstable_strictMode===!0&&(t=!0),Q.identifierPrefix!==void 0&&(g=Q.identifierPrefix),Q.onRecoverableError!==void 0&&(n=Q.onRecoverableError)),B=zp(B,null,A,1,Q??null,t,!1,g,n),A[Qt]=B.current,Qi(A),e)for(A=0;A<e.length;A++)Q=e[A],t=Q._getVersion,t=t(Q._source),B.mutableSourceEagerHydrationData==null?B.mutableSourceEagerHydrationData=[Q,t]:B.mutableSourceEagerHydrationData.push(Q,t);return new Zo(B)};YQ.render=function(A,B,Q){if(!So(B))throw Error(tA(200));return Lo(null,A,B,!1,Q)};YQ.unmountComponentAtNode=function(A){if(!So(A))throw Error(tA(40));return A._reactRootContainer?(bg(function(){Lo(null,null,A,!1,function(){A._reactRootContainer=null,A[Qt]=null})}),!0):!1};YQ.unstable_batchedUpdates=Uu;YQ.unstable_renderSubtreeIntoContainer=function(A,B,Q,e){if(!So(Q))throw Error(tA(200));if(A==null||A._reactInternals===void 0)throw Error(tA(38));return Lo(A,B,Q,!1,e)};YQ.version="18.2.0-next-9e3b772b8-20220608";(function(A){function B(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B)}catch(Q){console.error(Q)}}B(),A.exports=YQ})(wk);var xd=Nw;yw.createRoot=xd.createRoot,yw.hydrateRoot=xd.hydrateRoot;function jp(A,B){return function(){return A.apply(B,arguments)}}const{toString:fZ}=Object.prototype,{getPrototypeOf:pu}=Object,Xo=(A=>B=>{const Q=fZ.call(B);return A[Q]||(A[Q]=Q.slice(8,-1).toLowerCase())})(Object.create(null)),it=A=>(A=A.toLowerCase(),B=>Xo(B)===A),Ho=A=>B=>typeof B===A,{isArray:iE}=Array,ai=Ho("undefined");function UZ(A){return A!==null&&!ai(A)&&A.constructor!==null&&!ai(A.constructor)&&gt(A.constructor.isBuffer)&&A.constructor.isBuffer(A)}const Kp=it("ArrayBuffer");function dZ(A){let B;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?B=ArrayBuffer.isView(A):B=A&&A.buffer&&Kp(A.buffer),B}const MZ=Ho("string"),gt=Ho("function"),qp=Ho("number"),yu=A=>A!==null&&typeof A=="object",hZ=A=>A===!0||A===!1,la=A=>{if(Xo(A)!=="object")return!1;const B=pu(A);return(B===null||B===Object.prototype||Object.getPrototypeOf(B)===null)&&!(Symbol.toStringTag in A)&&!(Symbol.iterator in A)},GZ=it("Date"),RZ=it("File"),mZ=it("Blob"),YZ=it("FileList"),pZ=A=>yu(A)&&gt(A.pipe),yZ=A=>{let B;return A&&(typeof FormData=="function"&&A instanceof FormData||gt(A.append)&&((B=Xo(A))==="formdata"||B==="object"&&gt(A.toString)&&A.toString()==="[object FormData]"))},NZ=it("URLSearchParams"),bZ=A=>A.trim?A.trim():A.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function yi(A,B,{allOwnKeys:Q=!1}={}){if(A===null||typeof A>"u")return;let e,t;if(typeof A!="object"&&(A=[A]),iE(A))for(e=0,t=A.length;e<t;e++)B.call(null,A[e],e,A);else{const g=Q?Object.getOwnPropertyNames(A):Object.keys(A),n=g.length;let E;for(e=0;e<n;e++)E=g[e],B.call(null,A[E],E,A)}}function _p(A,B){B=B.toLowerCase();const Q=Object.keys(A);let e=Q.length,t;for(;e-- >0;)if(t=Q[e],B===t.toLowerCase())return t;return null}const $p=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ay=A=>!ai(A)&&A!==$p;function GF(){const{caseless:A}=Ay(this)&&this||{},B={},Q=(e,t)=>{const g=A&&_p(B,t)||t;la(B[g])&&la(e)?B[g]=GF(B[g],e):la(e)?B[g]=GF({},e):iE(e)?B[g]=e.slice():B[g]=e};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&yi(arguments[e],Q);return B}const JZ=(A,B,Q,{allOwnKeys:e}={})=>(yi(B,(t,g)=>{Q&&gt(t)?A[g]=jp(t,Q):A[g]=t},{allOwnKeys:e}),A),kZ=A=>(A.charCodeAt(0)===65279&&(A=A.slice(1)),A),vZ=(A,B,Q,e)=>{A.prototype=Object.create(B.prototype,e),A.prototype.constructor=A,Object.defineProperty(A,"super",{value:B.prototype}),Q&&Object.assign(A.prototype,Q)},ZZ=(A,B,Q,e)=>{let t,g,n;const E={};if(B=B||{},A==null)return B;do{for(t=Object.getOwnPropertyNames(A),g=t.length;g-- >0;)n=t[g],(!e||e(n,A,B))&&!E[n]&&(B[n]=A[n],E[n]=!0);A=Q!==!1&&pu(A)}while(A&&(!Q||Q(A,B))&&A!==Object.prototype);return B},SZ=(A,B,Q)=>{A=String(A),(Q===void 0||Q>A.length)&&(Q=A.length),Q-=B.length;const e=A.indexOf(B,Q);return e!==-1&&e===Q},LZ=A=>{if(!A)return null;if(iE(A))return A;let B=A.length;if(!qp(B))return null;const Q=new Array(B);for(;B-- >0;)Q[B]=A[B];return Q},XZ=(A=>B=>A&&B instanceof A)(typeof Uint8Array<"u"&&pu(Uint8Array)),HZ=(A,B)=>{const e=(A&&A[Symbol.iterator]).call(A);let t;for(;(t=e.next())&&!t.done;){const g=t.value;B.call(A,g[0],g[1])}},OZ=(A,B)=>{let Q;const e=[];for(;(Q=A.exec(B))!==null;)e.push(Q);return e},WZ=it("HTMLFormElement"),TZ=A=>A.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(Q,e,t){return e.toUpperCase()+t}),zd=(({hasOwnProperty:A})=>(B,Q)=>A.call(B,Q))(Object.prototype),VZ=it("RegExp"),By=(A,B)=>{const Q=Object.getOwnPropertyDescriptors(A),e={};yi(Q,(t,g)=>{B(t,g,A)!==!1&&(e[g]=t)}),Object.defineProperties(A,e)},xZ=A=>{By(A,(B,Q)=>{if(gt(A)&&["arguments","caller","callee"].indexOf(Q)!==-1)return!1;const e=A[Q];if(gt(e)){if(B.enumerable=!1,"writable"in B){B.writable=!1;return}B.set||(B.set=()=>{throw Error("Can not rewrite read-only method '"+Q+"'")})}})},zZ=(A,B)=>{const Q={},e=t=>{t.forEach(g=>{Q[g]=!0})};return iE(A)?e(A):e(String(A).split(B)),Q},PZ=()=>{},jZ=(A,B)=>(A=+A,Number.isFinite(A)?A:B),ol="abcdefghijklmnopqrstuvwxyz",Pd="0123456789",Qy={DIGIT:Pd,ALPHA:ol,ALPHA_DIGIT:ol+ol.toUpperCase()+Pd},KZ=(A=16,B=Qy.ALPHA_DIGIT)=>{let Q="";const{length:e}=B;for(;A--;)Q+=B[Math.random()*e|0];return Q};function qZ(A){return!!(A&&gt(A.append)&&A[Symbol.toStringTag]==="FormData"&&A[Symbol.iterator])}const _Z=A=>{const B=new Array(10),Q=(e,t)=>{if(yu(e)){if(B.indexOf(e)>=0)return;if(!("toJSON"in e)){B[t]=e;const g=iE(e)?[]:{};return yi(e,(n,E)=>{const C=Q(n,t+1);!ai(C)&&(g[E]=C)}),B[t]=void 0,g}}return e};return Q(A,0)},j={isArray:iE,isArrayBuffer:Kp,isBuffer:UZ,isFormData:yZ,isArrayBufferView:dZ,isString:MZ,isNumber:qp,isBoolean:hZ,isObject:yu,isPlainObject:la,isUndefined:ai,isDate:GZ,isFile:RZ,isBlob:mZ,isRegExp:VZ,isFunction:gt,isStream:pZ,isURLSearchParams:NZ,isTypedArray:XZ,isFileList:YZ,forEach:yi,merge:GF,extend:JZ,trim:bZ,stripBOM:kZ,inherits:vZ,toFlatObject:ZZ,kindOf:Xo,kindOfTest:it,endsWith:SZ,toArray:LZ,forEachEntry:HZ,matchAll:OZ,isHTMLForm:WZ,hasOwnProperty:zd,hasOwnProp:zd,reduceDescriptors:By,freezeMethods:xZ,toObjectSet:zZ,toCamelCase:TZ,noop:PZ,toFiniteNumber:jZ,findKey:_p,global:$p,isContextDefined:Ay,ALPHABET:Qy,generateString:KZ,isSpecCompliantForm:qZ,toJSONObject:_Z};function YA(A,B,Q,e,t){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=A,this.name="AxiosError",B&&(this.code=B),Q&&(this.config=Q),e&&(this.request=e),t&&(this.response=t)}j.inherits(YA,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ey=YA.prototype,ty={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(A=>{ty[A]={value:A}});Object.defineProperties(YA,ty);Object.defineProperty(ey,"isAxiosError",{value:!0});YA.from=(A,B,Q,e,t,g)=>{const n=Object.create(ey);return j.toFlatObject(A,n,function(C){return C!==Error.prototype},E=>E!=="isAxiosError"),YA.call(n,A.message,B,Q,e,t),n.cause=A,n.name=A.name,g&&Object.assign(n,g),n};const $Z=null;function RF(A){return j.isPlainObject(A)||j.isArray(A)}function gy(A){return j.endsWith(A,"[]")?A.slice(0,-2):A}function jd(A,B,Q){return A?A.concat(B).map(function(t,g){return t=gy(t),!Q&&g?"["+t+"]":t}).join(Q?".":""):B}function AS(A){return j.isArray(A)&&!A.some(RF)}const BS=j.toFlatObject(j,{},null,function(B){return/^is[A-Z]/.test(B)});function Oo(A,B,Q){if(!j.isObject(A))throw new TypeError("target must be an object");B=B||new FormData,Q=j.toFlatObject(Q,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,U){return!j.isUndefined(U[w])});const e=Q.metaTokens,t=Q.visitor||r,g=Q.dots,n=Q.indexes,C=(Q.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(B);if(!j.isFunction(t))throw new TypeError("visitor must be a function");function i(I){if(I===null)return"";if(j.isDate(I))return I.toISOString();if(!C&&j.isBlob(I))throw new YA("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(I)||j.isTypedArray(I)?C&&typeof Blob=="function"?new Blob([I]):Buffer.from(I):I}function r(I,w,U){let c=I;if(I&&!U&&typeof I=="object"){if(j.endsWith(w,"{}"))w=e?w:w.slice(0,-2),I=JSON.stringify(I);else if(j.isArray(I)&&AS(I)||(j.isFileList(I)||j.endsWith(w,"[]"))&&(c=j.toArray(I)))return w=gy(w),c.forEach(function(s,u){!(j.isUndefined(s)||s===null)&&B.append(n===!0?jd([w],u,g):n===null?w:w+"[]",i(s))}),!1}return RF(I)?!0:(B.append(jd(U,w,g),i(I)),!1)}const a=[],o=Object.assign(BS,{defaultVisitor:r,convertValue:i,isVisitable:RF});function l(I,w){if(!j.isUndefined(I)){if(a.indexOf(I)!==-1)throw Error("Circular reference detected in "+w.join("."));a.push(I),j.forEach(I,function(c,D){(!(j.isUndefined(c)||c===null)&&t.call(B,c,j.isString(D)?D.trim():D,w,o))===!0&&l(c,w?w.concat(D):[D])}),a.pop()}}if(!j.isObject(A))throw new TypeError("data must be an object");return l(A),B}function Kd(A){const B={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(A).replace(/[!'()~]|%20|%00/g,function(e){return B[e]})}function Nu(A,B){this._pairs=[],A&&Oo(A,this,B)}const ny=Nu.prototype;ny.append=function(B,Q){this._pairs.push([B,Q])};ny.toString=function(B){const Q=B?function(e){return B.call(this,e,Kd)}:Kd;return this._pairs.map(function(t){return Q(t[0])+"="+Q(t[1])},"").join("&")};function QS(A){return encodeURIComponent(A).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ey(A,B,Q){if(!B)return A;const e=Q&&Q.encode||QS,t=Q&&Q.serialize;let g;if(t?g=t(B,Q):g=j.isURLSearchParams(B)?B.toString():new Nu(B,Q).toString(e),g){const n=A.indexOf("#");n!==-1&&(A=A.slice(0,n)),A+=(A.indexOf("?")===-1?"?":"&")+g}return A}class eS{constructor(){this.handlers=[]}use(B,Q,e){return this.handlers.push({fulfilled:B,rejected:Q,synchronous:e?e.synchronous:!1,runWhen:e?e.runWhen:null}),this.handlers.length-1}eject(B){this.handlers[B]&&(this.handlers[B]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(B){j.forEach(this.handlers,function(e){e!==null&&B(e)})}}const qd=eS,Cy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tS=typeof URLSearchParams<"u"?URLSearchParams:Nu,gS=typeof FormData<"u"?FormData:null,nS=typeof Blob<"u"?Blob:null,ES=(()=>{let A;return typeof navigator<"u"&&((A=navigator.product)==="ReactNative"||A==="NativeScript"||A==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),CS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ge={isBrowser:!0,classes:{URLSearchParams:tS,FormData:gS,Blob:nS},isStandardBrowserEnv:ES,isStandardBrowserWebWorkerEnv:CS,protocols:["http","https","file","blob","url","data"]};function iS(A,B){return Oo(A,new Ge.classes.URLSearchParams,Object.assign({visitor:function(Q,e,t,g){return Ge.isNode&&j.isBuffer(Q)?(this.append(e,Q.toString("base64")),!1):g.defaultVisitor.apply(this,arguments)}},B))}function rS(A){return j.matchAll(/\w+|\[(\w*)]/g,A).map(B=>B[0]==="[]"?"":B[1]||B[0])}function aS(A){const B={},Q=Object.keys(A);let e;const t=Q.length;let g;for(e=0;e<t;e++)g=Q[e],B[g]=A[g];return B}function iy(A){function B(Q,e,t,g){let n=Q[g++];const E=Number.isFinite(+n),C=g>=Q.length;return n=!n&&j.isArray(t)?t.length:n,C?(j.hasOwnProp(t,n)?t[n]=[t[n],e]:t[n]=e,!E):((!t[n]||!j.isObject(t[n]))&&(t[n]=[]),B(Q,e,t[n],g)&&j.isArray(t[n])&&(t[n]=aS(t[n])),!E)}if(j.isFormData(A)&&j.isFunction(A.entries)){const Q={};return j.forEachEntry(A,(e,t)=>{B(rS(e),t,Q,0)}),Q}return null}const oS={"Content-Type":void 0};function IS(A,B,Q){if(j.isString(A))try{return(B||JSON.parse)(A),j.trim(A)}catch(e){if(e.name!=="SyntaxError")throw e}return(Q||JSON.stringify)(A)}const Wo={transitional:Cy,adapter:["xhr","http"],transformRequest:[function(B,Q){const e=Q.getContentType()||"",t=e.indexOf("application/json")>-1,g=j.isObject(B);if(g&&j.isHTMLForm(B)&&(B=new FormData(B)),j.isFormData(B))return t&&t?JSON.stringify(iy(B)):B;if(j.isArrayBuffer(B)||j.isBuffer(B)||j.isStream(B)||j.isFile(B)||j.isBlob(B))return B;if(j.isArrayBufferView(B))return B.buffer;if(j.isURLSearchParams(B))return Q.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),B.toString();let E;if(g){if(e.indexOf("application/x-www-form-urlencoded")>-1)return iS(B,this.formSerializer).toString();if((E=j.isFileList(B))||e.indexOf("multipart/form-data")>-1){const C=this.env&&this.env.FormData;return Oo(E?{"files[]":B}:B,C&&new C,this.formSerializer)}}return g||t?(Q.setContentType("application/json",!1),IS(B)):B}],transformResponse:[function(B){const Q=this.transitional||Wo.transitional,e=Q&&Q.forcedJSONParsing,t=this.responseType==="json";if(B&&j.isString(B)&&(e&&!this.responseType||t)){const n=!(Q&&Q.silentJSONParsing)&&t;try{return JSON.parse(B)}catch(E){if(n)throw E.name==="SyntaxError"?YA.from(E,YA.ERR_BAD_RESPONSE,this,null,this.response):E}}return B}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ge.classes.FormData,Blob:Ge.classes.Blob},validateStatus:function(B){return B>=200&&B<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],function(B){Wo.headers[B]={}});j.forEach(["post","put","patch"],function(B){Wo.headers[B]=j.merge(oS)});const bu=Wo,sS=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cS=A=>{const B={};let Q,e,t;return A&&A.split(`
`).forEach(function(n){t=n.indexOf(":"),Q=n.substring(0,t).trim().toLowerCase(),e=n.substring(t+1).trim(),!(!Q||B[Q]&&sS[Q])&&(Q==="set-cookie"?B[Q]?B[Q].push(e):B[Q]=[e]:B[Q]=B[Q]?B[Q]+", "+e:e)}),B},_d=Symbol("internals");function QC(A){return A&&String(A).trim().toLowerCase()}function wa(A){return A===!1||A==null?A:j.isArray(A)?A.map(wa):String(A)}function lS(A){const B=Object.create(null),Q=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let e;for(;e=Q.exec(A);)B[e[1]]=e[2];return B}const wS=A=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(A.trim());function Il(A,B,Q,e,t){if(j.isFunction(e))return e.call(this,B,Q);if(t&&(B=Q),!!j.isString(B)){if(j.isString(e))return B.indexOf(e)!==-1;if(j.isRegExp(e))return e.test(B)}}function FS(A){return A.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(B,Q,e)=>Q.toUpperCase()+e)}function DS(A,B){const Q=j.toCamelCase(" "+B);["get","set","has"].forEach(e=>{Object.defineProperty(A,e+Q,{value:function(t,g,n){return this[e].call(this,B,t,g,n)},configurable:!0})})}class To{constructor(B){B&&this.set(B)}set(B,Q,e){const t=this;function g(E,C,i){const r=QC(C);if(!r)throw new Error("header name must be a non-empty string");const a=j.findKey(t,r);(!a||t[a]===void 0||i===!0||i===void 0&&t[a]!==!1)&&(t[a||C]=wa(E))}const n=(E,C)=>j.forEach(E,(i,r)=>g(i,r,C));return j.isPlainObject(B)||B instanceof this.constructor?n(B,Q):j.isString(B)&&(B=B.trim())&&!wS(B)?n(cS(B),Q):B!=null&&g(Q,B,e),this}get(B,Q){if(B=QC(B),B){const e=j.findKey(this,B);if(e){const t=this[e];if(!Q)return t;if(Q===!0)return lS(t);if(j.isFunction(Q))return Q.call(this,t,e);if(j.isRegExp(Q))return Q.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(B,Q){if(B=QC(B),B){const e=j.findKey(this,B);return!!(e&&this[e]!==void 0&&(!Q||Il(this,this[e],e,Q)))}return!1}delete(B,Q){const e=this;let t=!1;function g(n){if(n=QC(n),n){const E=j.findKey(e,n);E&&(!Q||Il(e,e[E],E,Q))&&(delete e[E],t=!0)}}return j.isArray(B)?B.forEach(g):g(B),t}clear(B){const Q=Object.keys(this);let e=Q.length,t=!1;for(;e--;){const g=Q[e];(!B||Il(this,this[g],g,B,!0))&&(delete this[g],t=!0)}return t}normalize(B){const Q=this,e={};return j.forEach(this,(t,g)=>{const n=j.findKey(e,g);if(n){Q[n]=wa(t),delete Q[g];return}const E=B?FS(g):String(g).trim();E!==g&&delete Q[g],Q[E]=wa(t),e[E]=!0}),this}concat(...B){return this.constructor.concat(this,...B)}toJSON(B){const Q=Object.create(null);return j.forEach(this,(e,t)=>{e!=null&&e!==!1&&(Q[t]=B&&j.isArray(e)?e.join(", "):e)}),Q}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([B,Q])=>B+": "+Q).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(B){return B instanceof this?B:new this(B)}static concat(B,...Q){const e=new this(B);return Q.forEach(t=>e.set(t)),e}static accessor(B){const e=(this[_d]=this[_d]={accessors:{}}).accessors,t=this.prototype;function g(n){const E=QC(n);e[E]||(DS(t,n),e[E]=!0)}return j.isArray(B)?B.forEach(g):g(B),this}}To.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.freezeMethods(To.prototype);j.freezeMethods(To);const qe=To;function sl(A,B){const Q=this||bu,e=B||Q,t=qe.from(e.headers);let g=e.data;return j.forEach(A,function(E){g=E.call(Q,g,t.normalize(),B?B.status:void 0)}),t.normalize(),g}function ry(A){return!!(A&&A.__CANCEL__)}function Ni(A,B,Q){YA.call(this,A??"canceled",YA.ERR_CANCELED,B,Q),this.name="CanceledError"}j.inherits(Ni,YA,{__CANCEL__:!0});function uS(A,B,Q){const e=Q.config.validateStatus;!Q.status||!e||e(Q.status)?A(Q):B(new YA("Request failed with status code "+Q.status,[YA.ERR_BAD_REQUEST,YA.ERR_BAD_RESPONSE][Math.floor(Q.status/100)-4],Q.config,Q.request,Q))}const fS=Ge.isStandardBrowserEnv?function(){return{write:function(Q,e,t,g,n,E){const C=[];C.push(Q+"="+encodeURIComponent(e)),j.isNumber(t)&&C.push("expires="+new Date(t).toGMTString()),j.isString(g)&&C.push("path="+g),j.isString(n)&&C.push("domain="+n),E===!0&&C.push("secure"),document.cookie=C.join("; ")},read:function(Q){const e=document.cookie.match(new RegExp("(^|;\\s*)("+Q+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(Q){this.write(Q,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function US(A){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(A)}function dS(A,B){return B?A.replace(/\/+$/,"")+"/"+B.replace(/^\/+/,""):A}function ay(A,B){return A&&!US(B)?dS(A,B):B}const MS=Ge.isStandardBrowserEnv?function(){const B=/(msie|trident)/i.test(navigator.userAgent),Q=document.createElement("a");let e;function t(g){let n=g;return B&&(Q.setAttribute("href",n),n=Q.href),Q.setAttribute("href",n),{href:Q.href,protocol:Q.protocol?Q.protocol.replace(/:$/,""):"",host:Q.host,search:Q.search?Q.search.replace(/^\?/,""):"",hash:Q.hash?Q.hash.replace(/^#/,""):"",hostname:Q.hostname,port:Q.port,pathname:Q.pathname.charAt(0)==="/"?Q.pathname:"/"+Q.pathname}}return e=t(window.location.href),function(n){const E=j.isString(n)?t(n):n;return E.protocol===e.protocol&&E.host===e.host}}():function(){return function(){return!0}}();function hS(A){const B=/^([-+\w]{1,25})(:?\/\/|:)/.exec(A);return B&&B[1]||""}function GS(A,B){A=A||10;const Q=new Array(A),e=new Array(A);let t=0,g=0,n;return B=B!==void 0?B:1e3,function(C){const i=Date.now(),r=e[g];n||(n=i),Q[t]=C,e[t]=i;let a=g,o=0;for(;a!==t;)o+=Q[a++],a=a%A;if(t=(t+1)%A,t===g&&(g=(g+1)%A),i-n<B)return;const l=r&&i-r;return l?Math.round(o*1e3/l):void 0}}function $d(A,B){let Q=0;const e=GS(50,250);return t=>{const g=t.loaded,n=t.lengthComputable?t.total:void 0,E=g-Q,C=e(E),i=g<=n;Q=g;const r={loaded:g,total:n,progress:n?g/n:void 0,bytes:E,rate:C||void 0,estimated:C&&n&&i?(n-g)/C:void 0,event:t};r[B?"download":"upload"]=!0,A(r)}}const RS=typeof XMLHttpRequest<"u",mS=RS&&function(A){return new Promise(function(Q,e){let t=A.data;const g=qe.from(A.headers).normalize(),n=A.responseType;let E;function C(){A.cancelToken&&A.cancelToken.unsubscribe(E),A.signal&&A.signal.removeEventListener("abort",E)}j.isFormData(t)&&(Ge.isStandardBrowserEnv||Ge.isStandardBrowserWebWorkerEnv)&&g.setContentType(!1);let i=new XMLHttpRequest;if(A.auth){const l=A.auth.username||"",I=A.auth.password?unescape(encodeURIComponent(A.auth.password)):"";g.set("Authorization","Basic "+btoa(l+":"+I))}const r=ay(A.baseURL,A.url);i.open(A.method.toUpperCase(),Ey(r,A.params,A.paramsSerializer),!0),i.timeout=A.timeout;function a(){if(!i)return;const l=qe.from("getAllResponseHeaders"in i&&i.getAllResponseHeaders()),w={data:!n||n==="text"||n==="json"?i.responseText:i.response,status:i.status,statusText:i.statusText,headers:l,config:A,request:i};uS(function(c){Q(c),C()},function(c){e(c),C()},w),i=null}if("onloadend"in i?i.onloadend=a:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(a)},i.onabort=function(){i&&(e(new YA("Request aborted",YA.ECONNABORTED,A,i)),i=null)},i.onerror=function(){e(new YA("Network Error",YA.ERR_NETWORK,A,i)),i=null},i.ontimeout=function(){let I=A.timeout?"timeout of "+A.timeout+"ms exceeded":"timeout exceeded";const w=A.transitional||Cy;A.timeoutErrorMessage&&(I=A.timeoutErrorMessage),e(new YA(I,w.clarifyTimeoutError?YA.ETIMEDOUT:YA.ECONNABORTED,A,i)),i=null},Ge.isStandardBrowserEnv){const l=(A.withCredentials||MS(r))&&A.xsrfCookieName&&fS.read(A.xsrfCookieName);l&&g.set(A.xsrfHeaderName,l)}t===void 0&&g.setContentType(null),"setRequestHeader"in i&&j.forEach(g.toJSON(),function(I,w){i.setRequestHeader(w,I)}),j.isUndefined(A.withCredentials)||(i.withCredentials=!!A.withCredentials),n&&n!=="json"&&(i.responseType=A.responseType),typeof A.onDownloadProgress=="function"&&i.addEventListener("progress",$d(A.onDownloadProgress,!0)),typeof A.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",$d(A.onUploadProgress)),(A.cancelToken||A.signal)&&(E=l=>{i&&(e(!l||l.type?new Ni(null,A,i):l),i.abort(),i=null)},A.cancelToken&&A.cancelToken.subscribe(E),A.signal&&(A.signal.aborted?E():A.signal.addEventListener("abort",E)));const o=hS(r);if(o&&Ge.protocols.indexOf(o)===-1){e(new YA("Unsupported protocol "+o+":",YA.ERR_BAD_REQUEST,A));return}i.send(t||null)})},Fa={http:$Z,xhr:mS};j.forEach(Fa,(A,B)=>{if(A){try{Object.defineProperty(A,"name",{value:B})}catch{}Object.defineProperty(A,"adapterName",{value:B})}});const YS={getAdapter:A=>{A=j.isArray(A)?A:[A];const{length:B}=A;let Q,e;for(let t=0;t<B&&(Q=A[t],!(e=j.isString(Q)?Fa[Q.toLowerCase()]:Q));t++);if(!e)throw e===!1?new YA(`Adapter ${Q} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(j.hasOwnProp(Fa,Q)?`Adapter '${Q}' is not available in the build`:`Unknown adapter '${Q}'`);if(!j.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Fa};function cl(A){if(A.cancelToken&&A.cancelToken.throwIfRequested(),A.signal&&A.signal.aborted)throw new Ni(null,A)}function AM(A){return cl(A),A.headers=qe.from(A.headers),A.data=sl.call(A,A.transformRequest),["post","put","patch"].indexOf(A.method)!==-1&&A.headers.setContentType("application/x-www-form-urlencoded",!1),YS.getAdapter(A.adapter||bu.adapter)(A).then(function(e){return cl(A),e.data=sl.call(A,A.transformResponse,e),e.headers=qe.from(e.headers),e},function(e){return ry(e)||(cl(A),e&&e.response&&(e.response.data=sl.call(A,A.transformResponse,e.response),e.response.headers=qe.from(e.response.headers))),Promise.reject(e)})}const BM=A=>A instanceof qe?A.toJSON():A;function qn(A,B){B=B||{};const Q={};function e(i,r,a){return j.isPlainObject(i)&&j.isPlainObject(r)?j.merge.call({caseless:a},i,r):j.isPlainObject(r)?j.merge({},r):j.isArray(r)?r.slice():r}function t(i,r,a){if(j.isUndefined(r)){if(!j.isUndefined(i))return e(void 0,i,a)}else return e(i,r,a)}function g(i,r){if(!j.isUndefined(r))return e(void 0,r)}function n(i,r){if(j.isUndefined(r)){if(!j.isUndefined(i))return e(void 0,i)}else return e(void 0,r)}function E(i,r,a){if(a in B)return e(i,r);if(a in A)return e(void 0,i)}const C={url:g,method:g,data:g,baseURL:n,transformRequest:n,transformResponse:n,paramsSerializer:n,timeout:n,timeoutMessage:n,withCredentials:n,adapter:n,responseType:n,xsrfCookieName:n,xsrfHeaderName:n,onUploadProgress:n,onDownloadProgress:n,decompress:n,maxContentLength:n,maxBodyLength:n,beforeRedirect:n,transport:n,httpAgent:n,httpsAgent:n,cancelToken:n,socketPath:n,responseEncoding:n,validateStatus:E,headers:(i,r)=>t(BM(i),BM(r),!0)};return j.forEach(Object.keys(A).concat(Object.keys(B)),function(r){const a=C[r]||t,o=a(A[r],B[r],r);j.isUndefined(o)&&a!==E||(Q[r]=o)}),Q}const oy="1.3.6",Ju={};["object","boolean","number","function","string","symbol"].forEach((A,B)=>{Ju[A]=function(e){return typeof e===A||"a"+(B<1?"n ":" ")+A}});const QM={};Ju.transitional=function(B,Q,e){function t(g,n){return"[Axios v"+oy+"] Transitional option '"+g+"'"+n+(e?". "+e:"")}return(g,n,E)=>{if(B===!1)throw new YA(t(n," has been removed"+(Q?" in "+Q:"")),YA.ERR_DEPRECATED);return Q&&!QM[n]&&(QM[n]=!0,console.warn(t(n," has been deprecated since v"+Q+" and will be removed in the near future"))),B?B(g,n,E):!0}};function pS(A,B,Q){if(typeof A!="object")throw new YA("options must be an object",YA.ERR_BAD_OPTION_VALUE);const e=Object.keys(A);let t=e.length;for(;t-- >0;){const g=e[t],n=B[g];if(n){const E=A[g],C=E===void 0||n(E,g,A);if(C!==!0)throw new YA("option "+g+" must be "+C,YA.ERR_BAD_OPTION_VALUE);continue}if(Q!==!0)throw new YA("Unknown option "+g,YA.ERR_BAD_OPTION)}}const mF={assertOptions:pS,validators:Ju},st=mF.validators;class qa{constructor(B){this.defaults=B,this.interceptors={request:new qd,response:new qd}}request(B,Q){typeof B=="string"?(Q=Q||{},Q.url=B):Q=B||{},Q=qn(this.defaults,Q);const{transitional:e,paramsSerializer:t,headers:g}=Q;e!==void 0&&mF.assertOptions(e,{silentJSONParsing:st.transitional(st.boolean),forcedJSONParsing:st.transitional(st.boolean),clarifyTimeoutError:st.transitional(st.boolean)},!1),t!=null&&(j.isFunction(t)?Q.paramsSerializer={serialize:t}:mF.assertOptions(t,{encode:st.function,serialize:st.function},!0)),Q.method=(Q.method||this.defaults.method||"get").toLowerCase();let n;n=g&&j.merge(g.common,g[Q.method]),n&&j.forEach(["delete","get","head","post","put","patch","common"],I=>{delete g[I]}),Q.headers=qe.concat(n,g);const E=[];let C=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(Q)===!1||(C=C&&w.synchronous,E.unshift(w.fulfilled,w.rejected))});const i=[];this.interceptors.response.forEach(function(w){i.push(w.fulfilled,w.rejected)});let r,a=0,o;if(!C){const I=[AM.bind(this),void 0];for(I.unshift.apply(I,E),I.push.apply(I,i),o=I.length,r=Promise.resolve(Q);a<o;)r=r.then(I[a++],I[a++]);return r}o=E.length;let l=Q;for(a=0;a<o;){const I=E[a++],w=E[a++];try{l=I(l)}catch(U){w.call(this,U);break}}try{r=AM.call(this,l)}catch(I){return Promise.reject(I)}for(a=0,o=i.length;a<o;)r=r.then(i[a++],i[a++]);return r}getUri(B){B=qn(this.defaults,B);const Q=ay(B.baseURL,B.url);return Ey(Q,B.params,B.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(B){qa.prototype[B]=function(Q,e){return this.request(qn(e||{},{method:B,url:Q,data:(e||{}).data}))}});j.forEach(["post","put","patch"],function(B){function Q(e){return function(g,n,E){return this.request(qn(E||{},{method:B,headers:e?{"Content-Type":"multipart/form-data"}:{},url:g,data:n}))}}qa.prototype[B]=Q(),qa.prototype[B+"Form"]=Q(!0)});const Da=qa;class ku{constructor(B){if(typeof B!="function")throw new TypeError("executor must be a function.");let Q;this.promise=new Promise(function(g){Q=g});const e=this;this.promise.then(t=>{if(!e._listeners)return;let g=e._listeners.length;for(;g-- >0;)e._listeners[g](t);e._listeners=null}),this.promise.then=t=>{let g;const n=new Promise(E=>{e.subscribe(E),g=E}).then(t);return n.cancel=function(){e.unsubscribe(g)},n},B(function(g,n,E){e.reason||(e.reason=new Ni(g,n,E),Q(e.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(B){if(this.reason){B(this.reason);return}this._listeners?this._listeners.push(B):this._listeners=[B]}unsubscribe(B){if(!this._listeners)return;const Q=this._listeners.indexOf(B);Q!==-1&&this._listeners.splice(Q,1)}static source(){let B;return{token:new ku(function(t){B=t}),cancel:B}}}const yS=ku;function NS(A){return function(Q){return A.apply(null,Q)}}function bS(A){return j.isObject(A)&&A.isAxiosError===!0}const YF={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(YF).forEach(([A,B])=>{YF[B]=A});const JS=YF;function Iy(A){const B=new Da(A),Q=jp(Da.prototype.request,B);return j.extend(Q,Da.prototype,B,{allOwnKeys:!0}),j.extend(Q,B,null,{allOwnKeys:!0}),Q.create=function(t){return Iy(qn(A,t))},Q}const wB=Iy(bu);wB.Axios=Da;wB.CanceledError=Ni;wB.CancelToken=yS;wB.isCancel=ry;wB.VERSION=oy;wB.toFormData=Oo;wB.AxiosError=YA;wB.Cancel=wB.CanceledError;wB.all=function(B){return Promise.all(B)};wB.spread=NS;wB.isAxiosError=bS;wB.mergeConfig=qn;wB.AxiosHeaders=qe;wB.formToJSON=A=>iy(j.isHTMLForm(A)?new FormData(A):A);wB.HttpStatusCode=JS;wB.default=wB;const bC=wB;var rE={},EQ={},aE={},vu={};(function(A){var B=d&&d.__spreadArray||function(e,t,g){if(g||arguments.length===2)for(var n=0,E=t.length,C;n<E;n++)(C||!(n in t))&&(C||(C=Array.prototype.slice.call(t,0,n)),C[n]=t[n]);return e.concat(C||Array.prototype.slice.call(t))};Object.defineProperty(A,"__esModule",{value:!0}),A.Logger=A.LogLevel=void 0;var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR"})(Q=A.LogLevel||(A.LogLevel={})),A.Logger={ENABLED:typeof window<"u"&&typeof location<"u"&&location.search.indexOf("giphy-debug")!==-1,LEVEL:0,PREFIX:"GiphyJS",debug:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];A.Logger.ENABLED&&A.Logger.LEVEL<=Q.DEBUG&&console.debug.apply(console,B([A.Logger.PREFIX],e,!1))},info:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];A.Logger.ENABLED&&A.Logger.LEVEL<=Q.INFO&&console.info.apply(console,B([A.Logger.PREFIX],e,!1))},warn:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];A.Logger.ENABLED&&A.Logger.LEVEL<=Q.WARN&&console.warn.apply(console,B([A.Logger.PREFIX],e,!1))},error:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];A.Logger.ENABLED&&A.Logger.LEVEL<=Q.ERROR&&console.error.apply(console,B([A.Logger.PREFIX],e,!1))}}})(vu);Object.defineProperty(aE,"__esModule",{value:!0});aE.setRenditionScaleUpMaxPixels=void 0;var kS=vu,vS=function(A,B,Q){var e=1/0,t;return Q.forEach(function(g){var n=g.width/A,E=g.height/B,C=n*E,i=Math.abs(1-C);i<e&&(e=i,t=g)}),t},sy=50,ZS=function(A){kS.Logger.debug("@giphy/js-util set rendition selection scale up max pixels to ".concat(A)),sy=A};aE.setRenditionScaleUpMaxPixels=ZS;function SS(A,B,Q,e){e===void 0&&(e=sy);var t=A[0],g=A.filter(function(n){return n.width*n.height>t.width*t.height&&(t=n),B-n.width<=e&&Q-n.height<=e});return g.length===0?t:vS(B,Q,g)}aE.default=SS;var dQ={};Object.defineProperty(dQ,"__esModule",{value:!0});dQ.pick=dQ.without=dQ.take=dQ.forEach=dQ.mapValues=void 0;function LS(A,B){if(Array.isArray(A))throw"This map is just for objects, just use array.map for arrays";return Object.keys(A).reduce(function(Q,e){return Q[e]=B(A[e],e),Q},{})}dQ.mapValues=LS;function XS(A,B){if(Array.isArray(A))throw"This map is just for objects, just use array.forEach for arrays";return Object.keys(A).forEach(function(Q){B(A[Q],Q)})}dQ.forEach=XS;function HS(A,B){return B===void 0&&(B=0),A.slice(0,B)}dQ.take=HS;function OS(A,B){return A.filter(function(Q){return B.indexOf(Q)===-1})}dQ.without=OS;function WS(A,B){var Q={};return B.forEach(function(e){A[e]!==void 0&&(Q[e]=A[e])}),Q}dQ.pick=WS;var Zu={},_a=d&&d.__assign||function(){return _a=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},_a.apply(this,arguments)};Object.defineProperty(Zu,"__esModule",{value:!0});var TS=function(A){var B=0,Q=0,e=A.offsetWidth,t=A.offsetHeight;do B+=A.offsetLeft,Q+=A.offsetTop,A=A.offsetParent;while(A);var g={left:B,top:Q,width:e,height:t,right:B+e,bottom:Q+t,x:B,y:Q};return _a(_a({},g),{toJSON:function(){return JSON.stringify(g)}})};Zu.default=TS;var Su={},Xr,VS=new Uint8Array(16);function cy(){if(!Xr&&(Xr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Xr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Xr(VS)}const xS=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Vo(A){return typeof A=="string"&&xS.test(A)}var YB=[];for(var ll=0;ll<256;++ll)YB.push((ll+256).toString(16).substr(1));function xo(A){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,Q=(YB[A[B+0]]+YB[A[B+1]]+YB[A[B+2]]+YB[A[B+3]]+"-"+YB[A[B+4]]+YB[A[B+5]]+"-"+YB[A[B+6]]+YB[A[B+7]]+"-"+YB[A[B+8]]+YB[A[B+9]]+"-"+YB[A[B+10]]+YB[A[B+11]]+YB[A[B+12]]+YB[A[B+13]]+YB[A[B+14]]+YB[A[B+15]]).toLowerCase();if(!Vo(Q))throw TypeError("Stringified UUID is invalid");return Q}var eM,wl,Fl=0,Dl=0;function zS(A,B,Q){var e=B&&Q||0,t=B||new Array(16);A=A||{};var g=A.node||eM,n=A.clockseq!==void 0?A.clockseq:wl;if(g==null||n==null){var E=A.random||(A.rng||cy)();g==null&&(g=eM=[E[0]|1,E[1],E[2],E[3],E[4],E[5]]),n==null&&(n=wl=(E[6]<<8|E[7])&16383)}var C=A.msecs!==void 0?A.msecs:Date.now(),i=A.nsecs!==void 0?A.nsecs:Dl+1,r=C-Fl+(i-Dl)/1e4;if(r<0&&A.clockseq===void 0&&(n=n+1&16383),(r<0||C>Fl)&&A.nsecs===void 0&&(i=0),i>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Fl=C,Dl=i,wl=n,C+=122192928e5;var a=((C&268435455)*1e4+i)%4294967296;t[e++]=a>>>24&255,t[e++]=a>>>16&255,t[e++]=a>>>8&255,t[e++]=a&255;var o=C/4294967296*1e4&268435455;t[e++]=o>>>8&255,t[e++]=o&255,t[e++]=o>>>24&15|16,t[e++]=o>>>16&255,t[e++]=n>>>8|128,t[e++]=n&255;for(var l=0;l<6;++l)t[e+l]=g[l];return B||xo(t)}function ly(A){if(!Vo(A))throw TypeError("Invalid UUID");var B,Q=new Uint8Array(16);return Q[0]=(B=parseInt(A.slice(0,8),16))>>>24,Q[1]=B>>>16&255,Q[2]=B>>>8&255,Q[3]=B&255,Q[4]=(B=parseInt(A.slice(9,13),16))>>>8,Q[5]=B&255,Q[6]=(B=parseInt(A.slice(14,18),16))>>>8,Q[7]=B&255,Q[8]=(B=parseInt(A.slice(19,23),16))>>>8,Q[9]=B&255,Q[10]=(B=parseInt(A.slice(24,36),16))/1099511627776&255,Q[11]=B/4294967296&255,Q[12]=B>>>24&255,Q[13]=B>>>16&255,Q[14]=B>>>8&255,Q[15]=B&255,Q}function PS(A){A=unescape(encodeURIComponent(A));for(var B=[],Q=0;Q<A.length;++Q)B.push(A.charCodeAt(Q));return B}var jS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",KS="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function wy(A,B,Q){function e(t,g,n,E){if(typeof t=="string"&&(t=PS(t)),typeof g=="string"&&(g=ly(g)),g.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var C=new Uint8Array(16+t.length);if(C.set(g),C.set(t,g.length),C=Q(C),C[6]=C[6]&15|B,C[8]=C[8]&63|128,n){E=E||0;for(var i=0;i<16;++i)n[E+i]=C[i];return n}return xo(C)}try{e.name=A}catch{}return e.DNS=jS,e.URL=KS,e}function qS(A){if(typeof A=="string"){var B=unescape(encodeURIComponent(A));A=new Uint8Array(B.length);for(var Q=0;Q<B.length;++Q)A[Q]=B.charCodeAt(Q)}return _S($S(AL(A),A.length*8))}function _S(A){for(var B=[],Q=A.length*32,e="0123456789abcdef",t=0;t<Q;t+=8){var g=A[t>>5]>>>t%32&255,n=parseInt(e.charAt(g>>>4&15)+e.charAt(g&15),16);B.push(n)}return B}function Fy(A){return(A+64>>>9<<4)+14+1}function $S(A,B){A[B>>5]|=128<<B%32,A[Fy(B)-1]=B;for(var Q=1732584193,e=-271733879,t=-1732584194,g=271733878,n=0;n<A.length;n+=16){var E=Q,C=e,i=t,r=g;Q=SB(Q,e,t,g,A[n],7,-680876936),g=SB(g,Q,e,t,A[n+1],12,-389564586),t=SB(t,g,Q,e,A[n+2],17,606105819),e=SB(e,t,g,Q,A[n+3],22,-1044525330),Q=SB(Q,e,t,g,A[n+4],7,-176418897),g=SB(g,Q,e,t,A[n+5],12,1200080426),t=SB(t,g,Q,e,A[n+6],17,-1473231341),e=SB(e,t,g,Q,A[n+7],22,-45705983),Q=SB(Q,e,t,g,A[n+8],7,1770035416),g=SB(g,Q,e,t,A[n+9],12,-1958414417),t=SB(t,g,Q,e,A[n+10],17,-42063),e=SB(e,t,g,Q,A[n+11],22,-1990404162),Q=SB(Q,e,t,g,A[n+12],7,1804603682),g=SB(g,Q,e,t,A[n+13],12,-40341101),t=SB(t,g,Q,e,A[n+14],17,-1502002290),e=SB(e,t,g,Q,A[n+15],22,1236535329),Q=LB(Q,e,t,g,A[n+1],5,-165796510),g=LB(g,Q,e,t,A[n+6],9,-1069501632),t=LB(t,g,Q,e,A[n+11],14,643717713),e=LB(e,t,g,Q,A[n],20,-373897302),Q=LB(Q,e,t,g,A[n+5],5,-701558691),g=LB(g,Q,e,t,A[n+10],9,38016083),t=LB(t,g,Q,e,A[n+15],14,-660478335),e=LB(e,t,g,Q,A[n+4],20,-405537848),Q=LB(Q,e,t,g,A[n+9],5,568446438),g=LB(g,Q,e,t,A[n+14],9,-1019803690),t=LB(t,g,Q,e,A[n+3],14,-187363961),e=LB(e,t,g,Q,A[n+8],20,1163531501),Q=LB(Q,e,t,g,A[n+13],5,-1444681467),g=LB(g,Q,e,t,A[n+2],9,-51403784),t=LB(t,g,Q,e,A[n+7],14,1735328473),e=LB(e,t,g,Q,A[n+12],20,-1926607734),Q=XB(Q,e,t,g,A[n+5],4,-378558),g=XB(g,Q,e,t,A[n+8],11,-2022574463),t=XB(t,g,Q,e,A[n+11],16,1839030562),e=XB(e,t,g,Q,A[n+14],23,-35309556),Q=XB(Q,e,t,g,A[n+1],4,-1530992060),g=XB(g,Q,e,t,A[n+4],11,1272893353),t=XB(t,g,Q,e,A[n+7],16,-155497632),e=XB(e,t,g,Q,A[n+10],23,-1094730640),Q=XB(Q,e,t,g,A[n+13],4,681279174),g=XB(g,Q,e,t,A[n],11,-358537222),t=XB(t,g,Q,e,A[n+3],16,-722521979),e=XB(e,t,g,Q,A[n+6],23,76029189),Q=XB(Q,e,t,g,A[n+9],4,-640364487),g=XB(g,Q,e,t,A[n+12],11,-421815835),t=XB(t,g,Q,e,A[n+15],16,530742520),e=XB(e,t,g,Q,A[n+2],23,-995338651),Q=HB(Q,e,t,g,A[n],6,-198630844),g=HB(g,Q,e,t,A[n+7],10,1126891415),t=HB(t,g,Q,e,A[n+14],15,-1416354905),e=HB(e,t,g,Q,A[n+5],21,-57434055),Q=HB(Q,e,t,g,A[n+12],6,1700485571),g=HB(g,Q,e,t,A[n+3],10,-1894986606),t=HB(t,g,Q,e,A[n+10],15,-1051523),e=HB(e,t,g,Q,A[n+1],21,-2054922799),Q=HB(Q,e,t,g,A[n+8],6,1873313359),g=HB(g,Q,e,t,A[n+15],10,-30611744),t=HB(t,g,Q,e,A[n+6],15,-1560198380),e=HB(e,t,g,Q,A[n+13],21,1309151649),Q=HB(Q,e,t,g,A[n+4],6,-145523070),g=HB(g,Q,e,t,A[n+11],10,-1120210379),t=HB(t,g,Q,e,A[n+2],15,718787259),e=HB(e,t,g,Q,A[n+9],21,-343485551),Q=mt(Q,E),e=mt(e,C),t=mt(t,i),g=mt(g,r)}return[Q,e,t,g]}function AL(A){if(A.length===0)return[];for(var B=A.length*8,Q=new Uint32Array(Fy(B)),e=0;e<B;e+=8)Q[e>>5]|=(A[e/8]&255)<<e%32;return Q}function mt(A,B){var Q=(A&65535)+(B&65535),e=(A>>16)+(B>>16)+(Q>>16);return e<<16|Q&65535}function BL(A,B){return A<<B|A>>>32-B}function zo(A,B,Q,e,t,g){return mt(BL(mt(mt(B,A),mt(e,g)),t),Q)}function SB(A,B,Q,e,t,g,n){return zo(B&Q|~B&e,A,B,t,g,n)}function LB(A,B,Q,e,t,g,n){return zo(B&e|Q&~e,A,B,t,g,n)}function XB(A,B,Q,e,t,g,n){return zo(B^Q^e,A,B,t,g,n)}function HB(A,B,Q,e,t,g,n){return zo(Q^(B|~e),A,B,t,g,n)}var QL=wy("v3",48,qS);const eL=QL;function tL(A,B,Q){A=A||{};var e=A.random||(A.rng||cy)();if(e[6]=e[6]&15|64,e[8]=e[8]&63|128,B){Q=Q||0;for(var t=0;t<16;++t)B[Q+t]=e[t];return B}return xo(e)}function gL(A,B,Q,e){switch(A){case 0:return B&Q^~B&e;case 1:return B^Q^e;case 2:return B&Q^B&e^Q&e;case 3:return B^Q^e}}function ul(A,B){return A<<B|A>>>32-B}function nL(A){var B=[1518500249,1859775393,2400959708,3395469782],Q=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof A=="string"){var e=unescape(encodeURIComponent(A));A=[];for(var t=0;t<e.length;++t)A.push(e.charCodeAt(t))}else Array.isArray(A)||(A=Array.prototype.slice.call(A));A.push(128);for(var g=A.length/4+2,n=Math.ceil(g/16),E=new Array(n),C=0;C<n;++C){for(var i=new Uint32Array(16),r=0;r<16;++r)i[r]=A[C*64+r*4]<<24|A[C*64+r*4+1]<<16|A[C*64+r*4+2]<<8|A[C*64+r*4+3];E[C]=i}E[n-1][14]=(A.length-1)*8/Math.pow(2,32),E[n-1][14]=Math.floor(E[n-1][14]),E[n-1][15]=(A.length-1)*8&4294967295;for(var a=0;a<n;++a){for(var o=new Uint32Array(80),l=0;l<16;++l)o[l]=E[a][l];for(var I=16;I<80;++I)o[I]=ul(o[I-3]^o[I-8]^o[I-14]^o[I-16],1);for(var w=Q[0],U=Q[1],c=Q[2],D=Q[3],s=Q[4],u=0;u<80;++u){var f=Math.floor(u/20),M=ul(w,5)+gL(f,U,c,D)+s+B[f]+o[u]>>>0;s=D,D=c,c=ul(U,30)>>>0,U=w,w=M}Q[0]=Q[0]+w>>>0,Q[1]=Q[1]+U>>>0,Q[2]=Q[2]+c>>>0,Q[3]=Q[3]+D>>>0,Q[4]=Q[4]+s>>>0}return[Q[0]>>24&255,Q[0]>>16&255,Q[0]>>8&255,Q[0]&255,Q[1]>>24&255,Q[1]>>16&255,Q[1]>>8&255,Q[1]&255,Q[2]>>24&255,Q[2]>>16&255,Q[2]>>8&255,Q[2]&255,Q[3]>>24&255,Q[3]>>16&255,Q[3]>>8&255,Q[3]&255,Q[4]>>24&255,Q[4]>>16&255,Q[4]>>8&255,Q[4]&255]}var EL=wy("v5",80,nL);const CL=EL,iL="00000000-0000-0000-0000-000000000000";function rL(A){if(!Vo(A))throw TypeError("Invalid UUID");return parseInt(A.substr(14,1),16)}const aL=Object.freeze(Object.defineProperty({__proto__:null,NIL:iL,parse:ly,stringify:xo,v1:zS,v3:eL,v4:tL,v5:CL,validate:Vo,version:rL},Symbol.toStringTag,{value:"Module"})),oL=vg(aL);Object.defineProperty(Su,"__esModule",{value:!0});var IL=oL,Eg="",Dy=16,sL=function(){for(var A="",B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",Q=B.length,e=0;e<Dy;e++)A+=B.charAt(Math.floor(Math.random()*Q));return A},cL=function(){if(!Eg){try{Eg=sessionStorage.getItem("giphyPingbackId")}catch{}if(!Eg){var A=new Date().getTime().toString(16);try{Eg="".concat(A).concat((0,IL.v4)().replace(/-/g,"")).substring(0,Dy)}catch{Eg=sL()}try{sessionStorage.setItem("giphyPingbackId",Eg)}catch{}}}return Eg};Su.default=cL;var uy={},Lu={};(function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.checkIfWebP=A.SUPPORTS_WEBP=void 0,A.SUPPORTS_WEBP=null,A.checkIfWebP=new Promise(function(B){typeof Image>"u"&&B(!1);var Q=new Image;Q.onload=function(){A.SUPPORTS_WEBP=!0,B(A.SUPPORTS_WEBP)},Q.onerror=function(){A.SUPPORTS_WEBP=!1,B(A.SUPPORTS_WEBP)},Q.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"})})(Lu);(function(A){var B=d&&d.__assign||function(){return B=Object.assign||function(I){for(var w,U=1,c=arguments.length;U<c;U++){w=arguments[U];for(var D in w)Object.prototype.hasOwnProperty.call(w,D)&&(I[D]=w[D])}return I},B.apply(this,arguments)},Q=d&&d.__importDefault||function(I){return I&&I.__esModule?I:{default:I}};Object.defineProperty(A,"__esModule",{value:!0}),A.getAltText=A.getGifWidth=A.getGifHeight=A.getBestRenditionUrl=A.getBestRendition=A.getBestVideo=A.getSpecificRendition=void 0;var e=Q(aE),t=dQ,g=Lu,n=function(I,w,U,c){var D=I.images,s=I.is_sticker;if(U===void 0&&(U=!1),c===void 0&&(c=!1),!D||!w)return"";U=U&&!c;var u=D["".concat(w).concat(U?"_still":"")];if(u){if(s||U)return u.url;var f=g.SUPPORTS_WEBP&&u.webp;return c?u.mp4:f||u.url}return""};A.getSpecificRendition=n;var E=function(I,w,U){var c=I==null?void 0:I.assets;if(c){c=B({},c),delete c.source;var D=Object.values(c).sort(function(s,u){return s.width-u.width});return(0,e.default)(D,w,U)}};A.getBestVideo=E;var C=function(I,w,U){return I==="video"&&U&&U.previews&&!Object.keys(w).length?U.previews:w},i=function(I,w,U,c){var D=(0,t.pick)(I,["original","fixed_width","fixed_height","fixed_width_small","fixed_height_small"]),s=Object.entries(D).map(function(u){var f=u[0],M=u[1];return B({renditionName:f},M)});return(0,e.default)(s,w,U,c)};A.getBestRendition=i;var r=function(I,w,U,c){var D=I.images,s=I.video,u=I.type;if(c===void 0&&(c={isStill:!1,useVideo:!1}),!w||!U||!D)return"";var f=c.useVideo,M=c.isStill,h=c.scaleUpMaxPixels,Y=C(u,D,s),m=(0,A.getBestRendition)(Y,w,U,h).renditionName,L="".concat(m).concat(M&&!f?"_still":""),X=Y[L],W=f?X.mp4:g.SUPPORTS_WEBP&&X.webp?X.webp:X.url;return W||""};A.getBestRenditionUrl=r;var a=function(I,w){var U=I.images,c=U.fixed_width;if(c){var D=c.width,s=c.height,u=D/s;return Math.round(w/u)}return 0};A.getGifHeight=a;var o=function(I,w){var U=I.images,c=U.fixed_width;if(c){var D=c.width,s=c.height,u=D/s;return Math.round(w*u)}return 0};A.getGifWidth=o;var l=function(I){var w=I.alt_text,U=I.user,c=I.tags,D=c===void 0?[]:c,s=I.is_sticker,u=s===void 0?!1:s,f=I.title,M=f===void 0?"":f;if(w)return w;if(M)return M;var h=U&&U.username||"",Y=(0,t.take)((0,t.without)(D,["transparent"]),h?4:5);return"".concat(h?"".concat(h," "):"").concat(Y.join(" ")," ").concat(u?"Sticker":"GIF")};A.getAltText=l})(uy);var fy={};(function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.appendGiphySDKRequestParam=A.appendGiphySDKRequestHeader=A.getGiphySDKRequestHeaders=void 0;var B=(typeof window<"u"?window:d)||{};B._GIPHY_SDK_HEADERS_=B._GIPHY_SDK_HEADERS_||(B.Headers?new B.Headers({"X-GIPHY-SDK-PLATFORM":"web"}):void 0);var Q=function(){return B._GIPHY_SDK_HEADERS_};A.getGiphySDKRequestHeaders=Q;var e=function(g,n){var E;return(E=(0,A.getGiphySDKRequestHeaders)())===null||E===void 0?void 0:E.set(g,n)};A.appendGiphySDKRequestHeader=e;var t=function(g,n){var E;return(E=(0,A.getGiphySDKRequestHeaders)())===null||E===void 0?void 0:E.set(g,n)};A.appendGiphySDKRequestParam=t})(fy);(function(A){var B=d&&d.__createBinding||(Object.create?function(i,r,a,o){o===void 0&&(o=a);var l=Object.getOwnPropertyDescriptor(r,a);(!l||("get"in l?!r.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(i,o,l)}:function(i,r,a,o){o===void 0&&(o=a),i[o]=r[a]}),Q=d&&d.__exportStar||function(i,r){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(r,a)&&B(r,i,a)},e=d&&d.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(A,"__esModule",{value:!0}),A.checkIfWebP=A.getSpecificRendition=A.getGifWidth=A.getGifHeight=A.getBestVideo=A.getBestRenditionUrl=A.getBestRendition=A.getAltText=A.getPingbackId=A.getClientRect=A.setRenditionScaleUpMaxPixels=A.bestfit=void 0;var t=aE;Object.defineProperty(A,"bestfit",{enumerable:!0,get:function(){return e(t).default}}),Object.defineProperty(A,"setRenditionScaleUpMaxPixels",{enumerable:!0,get:function(){return t.setRenditionScaleUpMaxPixels}}),Q(dQ,A);var g=Zu;Object.defineProperty(A,"getClientRect",{enumerable:!0,get:function(){return e(g).default}});var n=Su;Object.defineProperty(A,"getPingbackId",{enumerable:!0,get:function(){return e(n).default}});var E=uy;Object.defineProperty(A,"getAltText",{enumerable:!0,get:function(){return E.getAltText}}),Object.defineProperty(A,"getBestRendition",{enumerable:!0,get:function(){return E.getBestRendition}}),Object.defineProperty(A,"getBestRenditionUrl",{enumerable:!0,get:function(){return E.getBestRenditionUrl}}),Object.defineProperty(A,"getBestVideo",{enumerable:!0,get:function(){return E.getBestVideo}}),Object.defineProperty(A,"getGifHeight",{enumerable:!0,get:function(){return E.getGifHeight}}),Object.defineProperty(A,"getGifWidth",{enumerable:!0,get:function(){return E.getGifWidth}}),Object.defineProperty(A,"getSpecificRendition",{enumerable:!0,get:function(){return E.getSpecificRendition}}),Q(vu,A),Q(fy,A);var C=Lu;Object.defineProperty(A,"checkIfWebP",{enumerable:!0,get:function(){return C.checkIfWebP}})})(EQ);var bi={},lL=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var B={},Q=Symbol("test"),e=Object(Q);if(typeof Q=="string"||Object.prototype.toString.call(Q)!=="[object Symbol]"||Object.prototype.toString.call(e)!=="[object Symbol]")return!1;var t=42;B[Q]=t;for(Q in B)return!1;if(typeof Object.keys=="function"&&Object.keys(B).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(B).length!==0)return!1;var g=Object.getOwnPropertySymbols(B);if(g.length!==1||g[0]!==Q||!Object.prototype.propertyIsEnumerable.call(B,Q))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var n=Object.getOwnPropertyDescriptor(B,Q);if(n.value!==t||n.enumerable!==!0)return!1}return!0},tM=typeof Symbol<"u"&&Symbol,wL=lL,FL=function(){return typeof tM!="function"||typeof Symbol!="function"||typeof tM("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:wL()},DL="Function.prototype.bind called on incompatible ",fl=Array.prototype.slice,uL=Object.prototype.toString,fL="[object Function]",UL=function(B){var Q=this;if(typeof Q!="function"||uL.call(Q)!==fL)throw new TypeError(DL+Q);for(var e=fl.call(arguments,1),t,g=function(){if(this instanceof t){var r=Q.apply(this,e.concat(fl.call(arguments)));return Object(r)===r?r:this}else return Q.apply(B,e.concat(fl.call(arguments)))},n=Math.max(0,Q.length-e.length),E=[],C=0;C<n;C++)E.push("$"+C);if(t=Function("binder","return function ("+E.join(",")+"){ return binder.apply(this,arguments); }")(g),Q.prototype){var i=function(){};i.prototype=Q.prototype,t.prototype=new i,i.prototype=null}return t},dL=UL,Xu=Function.prototype.bind||dL,ML=Xu,hL=ML.call(Function.call,Object.prototype.hasOwnProperty),hA,_n=SyntaxError,Uy=Function,Hn=TypeError,Ul=function(A){try{return Uy('"use strict"; return ('+A+").constructor;")()}catch{}},Gg=Object.getOwnPropertyDescriptor;if(Gg)try{Gg({},"")}catch{Gg=null}var dl=function(){throw new Hn},GL=Gg?function(){try{return arguments.callee,dl}catch{try{return Gg(arguments,"callee").get}catch{return dl}}}():dl,tn=FL(),De=Object.getPrototypeOf||function(A){return A.__proto__},cn={},RL=typeof Uint8Array>"u"?hA:De(Uint8Array),Rg={"%AggregateError%":typeof AggregateError>"u"?hA:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?hA:ArrayBuffer,"%ArrayIteratorPrototype%":tn?De([][Symbol.iterator]()):hA,"%AsyncFromSyncIteratorPrototype%":hA,"%AsyncFunction%":cn,"%AsyncGenerator%":cn,"%AsyncGeneratorFunction%":cn,"%AsyncIteratorPrototype%":cn,"%Atomics%":typeof Atomics>"u"?hA:Atomics,"%BigInt%":typeof BigInt>"u"?hA:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?hA:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?hA:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?hA:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?hA:Float32Array,"%Float64Array%":typeof Float64Array>"u"?hA:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?hA:FinalizationRegistry,"%Function%":Uy,"%GeneratorFunction%":cn,"%Int8Array%":typeof Int8Array>"u"?hA:Int8Array,"%Int16Array%":typeof Int16Array>"u"?hA:Int16Array,"%Int32Array%":typeof Int32Array>"u"?hA:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":tn?De(De([][Symbol.iterator]())):hA,"%JSON%":typeof JSON=="object"?JSON:hA,"%Map%":typeof Map>"u"?hA:Map,"%MapIteratorPrototype%":typeof Map>"u"||!tn?hA:De(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?hA:Promise,"%Proxy%":typeof Proxy>"u"?hA:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?hA:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?hA:Set,"%SetIteratorPrototype%":typeof Set>"u"||!tn?hA:De(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?hA:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":tn?De(""[Symbol.iterator]()):hA,"%Symbol%":tn?Symbol:hA,"%SyntaxError%":_n,"%ThrowTypeError%":GL,"%TypedArray%":RL,"%TypeError%":Hn,"%Uint8Array%":typeof Uint8Array>"u"?hA:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?hA:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?hA:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?hA:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?hA:WeakMap,"%WeakRef%":typeof WeakRef>"u"?hA:WeakRef,"%WeakSet%":typeof WeakSet>"u"?hA:WeakSet};try{null.error}catch(A){var mL=De(De(A));Rg["%Error.prototype%"]=mL}var YL=function A(B){var Q;if(B==="%AsyncFunction%")Q=Ul("async function () {}");else if(B==="%GeneratorFunction%")Q=Ul("function* () {}");else if(B==="%AsyncGeneratorFunction%")Q=Ul("async function* () {}");else if(B==="%AsyncGenerator%"){var e=A("%AsyncGeneratorFunction%");e&&(Q=e.prototype)}else if(B==="%AsyncIteratorPrototype%"){var t=A("%AsyncGenerator%");t&&(Q=De(t.prototype))}return Rg[B]=Q,Q},gM={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Ji=Xu,$a=hL,pL=Ji.call(Function.call,Array.prototype.concat),yL=Ji.call(Function.apply,Array.prototype.splice),nM=Ji.call(Function.call,String.prototype.replace),Ao=Ji.call(Function.call,String.prototype.slice),NL=Ji.call(Function.call,RegExp.prototype.exec),bL=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,JL=/\\(\\)?/g,kL=function(B){var Q=Ao(B,0,1),e=Ao(B,-1);if(Q==="%"&&e!=="%")throw new _n("invalid intrinsic syntax, expected closing `%`");if(e==="%"&&Q!=="%")throw new _n("invalid intrinsic syntax, expected opening `%`");var t=[];return nM(B,bL,function(g,n,E,C){t[t.length]=E?nM(C,JL,"$1"):n||g}),t},vL=function(B,Q){var e=B,t;if($a(gM,e)&&(t=gM[e],e="%"+t[0]+"%"),$a(Rg,e)){var g=Rg[e];if(g===cn&&(g=YL(e)),typeof g>"u"&&!Q)throw new Hn("intrinsic "+B+" exists, but is not available. Please file an issue!");return{alias:t,name:e,value:g}}throw new _n("intrinsic "+B+" does not exist!")},Hu=function(B,Q){if(typeof B!="string"||B.length===0)throw new Hn("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof Q!="boolean")throw new Hn('"allowMissing" argument must be a boolean');if(NL(/^%?[^%]*%?$/,B)===null)throw new _n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var e=kL(B),t=e.length>0?e[0]:"",g=vL("%"+t+"%",Q),n=g.name,E=g.value,C=!1,i=g.alias;i&&(t=i[0],yL(e,pL([0,1],i)));for(var r=1,a=!0;r<e.length;r+=1){var o=e[r],l=Ao(o,0,1),I=Ao(o,-1);if((l==='"'||l==="'"||l==="`"||I==='"'||I==="'"||I==="`")&&l!==I)throw new _n("property names with quotes must have matching quotes");if((o==="constructor"||!a)&&(C=!0),t+="."+o,n="%"+t+"%",$a(Rg,n))E=Rg[n];else if(E!=null){if(!(o in E)){if(!Q)throw new Hn("base intrinsic for "+B+" exists, but the property is not available.");return}if(Gg&&r+1>=e.length){var w=Gg(E,o);a=!!w,a&&"get"in w&&!("originalValue"in w.get)?E=w.get:E=E[o]}else a=$a(E,o),E=E[o];a&&!C&&(Rg[n]=E)}}return E},pF={},ZL={get exports(){return pF},set exports(A){pF=A}};(function(A){var B=Xu,Q=Hu,e=Q("%Function.prototype.apply%"),t=Q("%Function.prototype.call%"),g=Q("%Reflect.apply%",!0)||B.call(t,e),n=Q("%Object.getOwnPropertyDescriptor%",!0),E=Q("%Object.defineProperty%",!0),C=Q("%Math.max%");if(E)try{E({},"a",{value:1})}catch{E=null}A.exports=function(a){var o=g(B,t,arguments);if(n&&E){var l=n(o,"length");l.configurable&&E(o,"length",{value:1+C(0,a.length-(arguments.length-1))})}return o};var i=function(){return g(B,e,arguments)};E?E(A.exports,"apply",{value:i}):A.exports.apply=i})(ZL);var dy=Hu,My=pF,SL=My(dy("String.prototype.indexOf")),LL=function(B,Q){var e=dy(B,!!Q);return typeof e=="function"&&SL(B,".prototype.")>-1?My(e):e};const XL={},HL=Object.freeze(Object.defineProperty({__proto__:null,default:XL},Symbol.toStringTag,{value:"Module"})),OL=vg(HL);var Ou=typeof Map=="function"&&Map.prototype,Ml=Object.getOwnPropertyDescriptor&&Ou?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Bo=Ou&&Ml&&typeof Ml.get=="function"?Ml.get:null,EM=Ou&&Map.prototype.forEach,Wu=typeof Set=="function"&&Set.prototype,hl=Object.getOwnPropertyDescriptor&&Wu?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Qo=Wu&&hl&&typeof hl.get=="function"?hl.get:null,CM=Wu&&Set.prototype.forEach,WL=typeof WeakMap=="function"&&WeakMap.prototype,JC=WL?WeakMap.prototype.has:null,TL=typeof WeakSet=="function"&&WeakSet.prototype,kC=TL?WeakSet.prototype.has:null,VL=typeof WeakRef=="function"&&WeakRef.prototype,iM=VL?WeakRef.prototype.deref:null,xL=Boolean.prototype.valueOf,zL=Object.prototype.toString,PL=Function.prototype.toString,jL=String.prototype.match,Tu=String.prototype.slice,Yt=String.prototype.replace,KL=String.prototype.toUpperCase,rM=String.prototype.toLowerCase,hy=RegExp.prototype.test,aM=Array.prototype.concat,ue=Array.prototype.join,qL=Array.prototype.slice,oM=Math.floor,yF=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Gl=Object.getOwnPropertySymbols,NF=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,$n=typeof Symbol=="function"&&typeof Symbol.iterator=="object",zB=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===$n||"symbol")?Symbol.toStringTag:null,Gy=Object.prototype.propertyIsEnumerable,IM=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(A){return A.__proto__}:null);function sM(A,B){if(A===1/0||A===-1/0||A!==A||A&&A>-1e3&&A<1e3||hy.call(/e/,B))return B;var Q=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof A=="number"){var e=A<0?-oM(-A):oM(A);if(e!==A){var t=String(e),g=Tu.call(B,t.length+1);return Yt.call(t,Q,"$&_")+"."+Yt.call(Yt.call(g,/([0-9]{3})/g,"$&_"),/_$/,"")}}return Yt.call(B,Q,"$&_")}var bF=OL,cM=bF.custom,lM=my(cM)?cM:null,_L=function A(B,Q,e,t){var g=Q||{};if(ft(g,"quoteStyle")&&g.quoteStyle!=="single"&&g.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(ft(g,"maxStringLength")&&(typeof g.maxStringLength=="number"?g.maxStringLength<0&&g.maxStringLength!==1/0:g.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var n=ft(g,"customInspect")?g.customInspect:!0;if(typeof n!="boolean"&&n!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(ft(g,"indent")&&g.indent!==null&&g.indent!=="	"&&!(parseInt(g.indent,10)===g.indent&&g.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(ft(g,"numericSeparator")&&typeof g.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var E=g.numericSeparator;if(typeof B>"u")return"undefined";if(B===null)return"null";if(typeof B=="boolean")return B?"true":"false";if(typeof B=="string")return py(B,g);if(typeof B=="number"){if(B===0)return 1/0/B>0?"0":"-0";var C=String(B);return E?sM(B,C):C}if(typeof B=="bigint"){var i=String(B)+"n";return E?sM(B,i):i}var r=typeof g.depth>"u"?5:g.depth;if(typeof e>"u"&&(e=0),e>=r&&r>0&&typeof B=="object")return JF(B)?"[Array]":"[Object]";var a=lX(g,e);if(typeof t>"u")t=[];else if(Yy(t,B)>=0)return"[Circular]";function o(K,R,J){if(R&&(t=qL.call(t),t.push(R)),J){var q={depth:g.depth};return ft(g,"quoteStyle")&&(q.quoteStyle=g.quoteStyle),A(K,q,e+1,t)}return A(K,g,e+1,t)}if(typeof B=="function"&&!wM(B)){var l=EX(B),I=Hr(B,o);return"[Function"+(l?": "+l:" (anonymous)")+"]"+(I.length>0?" { "+ue.call(I,", ")+" }":"")}if(my(B)){var w=$n?Yt.call(String(B),/^(Symbol\(.*\))_[^)]*$/,"$1"):NF.call(B);return typeof B=="object"&&!$n?eC(w):w}if(IX(B)){for(var U="<"+rM.call(String(B.nodeName)),c=B.attributes||[],D=0;D<c.length;D++)U+=" "+c[D].name+"="+Ry($L(c[D].value),"double",g);return U+=">",B.childNodes&&B.childNodes.length&&(U+="..."),U+="</"+rM.call(String(B.nodeName))+">",U}if(JF(B)){if(B.length===0)return"[]";var s=Hr(B,o);return a&&!cX(s)?"["+kF(s,a)+"]":"[ "+ue.call(s,", ")+" ]"}if(BX(B)){var u=Hr(B,o);return!("cause"in Error.prototype)&&"cause"in B&&!Gy.call(B,"cause")?"{ ["+String(B)+"] "+ue.call(aM.call("[cause]: "+o(B.cause),u),", ")+" }":u.length===0?"["+String(B)+"]":"{ ["+String(B)+"] "+ue.call(u,", ")+" }"}if(typeof B=="object"&&n){if(lM&&typeof B[lM]=="function"&&bF)return bF(B,{depth:r-e});if(n!=="symbol"&&typeof B.inspect=="function")return B.inspect()}if(CX(B)){var f=[];return EM&&EM.call(B,function(K,R){f.push(o(R,B,!0)+" => "+o(K,B))}),FM("Map",Bo.call(B),f,a)}if(aX(B)){var M=[];return CM&&CM.call(B,function(K){M.push(o(K,B))}),FM("Set",Qo.call(B),M,a)}if(iX(B))return Rl("WeakMap");if(oX(B))return Rl("WeakSet");if(rX(B))return Rl("WeakRef");if(eX(B))return eC(o(Number(B)));if(gX(B))return eC(o(yF.call(B)));if(tX(B))return eC(xL.call(B));if(QX(B))return eC(o(String(B)));if(!AX(B)&&!wM(B)){var h=Hr(B,o),Y=IM?IM(B)===Object.prototype:B instanceof Object||B.constructor===Object,m=B instanceof Object?"":"null prototype",L=!Y&&zB&&Object(B)===B&&zB in B?Tu.call(_t(B),8,-1):m?"Object":"",X=Y||typeof B.constructor!="function"?"":B.constructor.name?B.constructor.name+" ":"",W=X+(L||m?"["+ue.call(aM.call([],L||[],m||[]),": ")+"] ":"");return h.length===0?W+"{}":a?W+"{"+kF(h,a)+"}":W+"{ "+ue.call(h,", ")+" }"}return String(B)};function Ry(A,B,Q){var e=(Q.quoteStyle||B)==="double"?'"':"'";return e+A+e}function $L(A){return Yt.call(String(A),/"/g,"&quot;")}function JF(A){return _t(A)==="[object Array]"&&(!zB||!(typeof A=="object"&&zB in A))}function AX(A){return _t(A)==="[object Date]"&&(!zB||!(typeof A=="object"&&zB in A))}function wM(A){return _t(A)==="[object RegExp]"&&(!zB||!(typeof A=="object"&&zB in A))}function BX(A){return _t(A)==="[object Error]"&&(!zB||!(typeof A=="object"&&zB in A))}function QX(A){return _t(A)==="[object String]"&&(!zB||!(typeof A=="object"&&zB in A))}function eX(A){return _t(A)==="[object Number]"&&(!zB||!(typeof A=="object"&&zB in A))}function tX(A){return _t(A)==="[object Boolean]"&&(!zB||!(typeof A=="object"&&zB in A))}function my(A){if($n)return A&&typeof A=="object"&&A instanceof Symbol;if(typeof A=="symbol")return!0;if(!A||typeof A!="object"||!NF)return!1;try{return NF.call(A),!0}catch{}return!1}function gX(A){if(!A||typeof A!="object"||!yF)return!1;try{return yF.call(A),!0}catch{}return!1}var nX=Object.prototype.hasOwnProperty||function(A){return A in this};function ft(A,B){return nX.call(A,B)}function _t(A){return zL.call(A)}function EX(A){if(A.name)return A.name;var B=jL.call(PL.call(A),/^function\s*([\w$]+)/);return B?B[1]:null}function Yy(A,B){if(A.indexOf)return A.indexOf(B);for(var Q=0,e=A.length;Q<e;Q++)if(A[Q]===B)return Q;return-1}function CX(A){if(!Bo||!A||typeof A!="object")return!1;try{Bo.call(A);try{Qo.call(A)}catch{return!0}return A instanceof Map}catch{}return!1}function iX(A){if(!JC||!A||typeof A!="object")return!1;try{JC.call(A,JC);try{kC.call(A,kC)}catch{return!0}return A instanceof WeakMap}catch{}return!1}function rX(A){if(!iM||!A||typeof A!="object")return!1;try{return iM.call(A),!0}catch{}return!1}function aX(A){if(!Qo||!A||typeof A!="object")return!1;try{Qo.call(A);try{Bo.call(A)}catch{return!0}return A instanceof Set}catch{}return!1}function oX(A){if(!kC||!A||typeof A!="object")return!1;try{kC.call(A,kC);try{JC.call(A,JC)}catch{return!0}return A instanceof WeakSet}catch{}return!1}function IX(A){return!A||typeof A!="object"?!1:typeof HTMLElement<"u"&&A instanceof HTMLElement?!0:typeof A.nodeName=="string"&&typeof A.getAttribute=="function"}function py(A,B){if(A.length>B.maxStringLength){var Q=A.length-B.maxStringLength,e="... "+Q+" more character"+(Q>1?"s":"");return py(Tu.call(A,0,B.maxStringLength),B)+e}var t=Yt.call(Yt.call(A,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,sX);return Ry(t,"single",B)}function sX(A){var B=A.charCodeAt(0),Q={8:"b",9:"t",10:"n",12:"f",13:"r"}[B];return Q?"\\"+Q:"\\x"+(B<16?"0":"")+KL.call(B.toString(16))}function eC(A){return"Object("+A+")"}function Rl(A){return A+" { ? }"}function FM(A,B,Q,e){var t=e?kF(Q,e):ue.call(Q,", ");return A+" ("+B+") {"+t+"}"}function cX(A){for(var B=0;B<A.length;B++)if(Yy(A[B],`
`)>=0)return!1;return!0}function lX(A,B){var Q;if(A.indent==="	")Q="	";else if(typeof A.indent=="number"&&A.indent>0)Q=ue.call(Array(A.indent+1)," ");else return null;return{base:Q,prev:ue.call(Array(B+1),Q)}}function kF(A,B){if(A.length===0)return"";var Q=`
`+B.prev+B.base;return Q+ue.call(A,","+Q)+`
`+B.prev}function Hr(A,B){var Q=JF(A),e=[];if(Q){e.length=A.length;for(var t=0;t<A.length;t++)e[t]=ft(A,t)?B(A[t],A):""}var g=typeof Gl=="function"?Gl(A):[],n;if($n){n={};for(var E=0;E<g.length;E++)n["$"+g[E]]=g[E]}for(var C in A)ft(A,C)&&(Q&&String(Number(C))===C&&C<A.length||$n&&n["$"+C]instanceof Symbol||(hy.call(/[^\w$]/,C)?e.push(B(C,A)+": "+B(A[C],A)):e.push(C+": "+B(A[C],A))));if(typeof Gl=="function")for(var i=0;i<g.length;i++)Gy.call(A,g[i])&&e.push("["+B(g[i])+"]: "+B(A[g[i]],A));return e}var Vu=Hu,oE=LL,wX=_L,FX=Vu("%TypeError%"),Or=Vu("%WeakMap%",!0),Wr=Vu("%Map%",!0),DX=oE("WeakMap.prototype.get",!0),uX=oE("WeakMap.prototype.set",!0),fX=oE("WeakMap.prototype.has",!0),UX=oE("Map.prototype.get",!0),dX=oE("Map.prototype.set",!0),MX=oE("Map.prototype.has",!0),xu=function(A,B){for(var Q=A,e;(e=Q.next)!==null;Q=e)if(e.key===B)return Q.next=e.next,e.next=A.next,A.next=e,e},hX=function(A,B){var Q=xu(A,B);return Q&&Q.value},GX=function(A,B,Q){var e=xu(A,B);e?e.value=Q:A.next={key:B,next:A.next,value:Q}},RX=function(A,B){return!!xu(A,B)},mX=function(){var B,Q,e,t={assert:function(g){if(!t.has(g))throw new FX("Side channel does not contain "+wX(g))},get:function(g){if(Or&&g&&(typeof g=="object"||typeof g=="function")){if(B)return DX(B,g)}else if(Wr){if(Q)return UX(Q,g)}else if(e)return hX(e,g)},has:function(g){if(Or&&g&&(typeof g=="object"||typeof g=="function")){if(B)return fX(B,g)}else if(Wr){if(Q)return MX(Q,g)}else if(e)return RX(e,g);return!1},set:function(g,n){Or&&g&&(typeof g=="object"||typeof g=="function")?(B||(B=new Or),uX(B,g,n)):Wr?(Q||(Q=new Wr),dX(Q,g,n)):(e||(e={key:{},next:null}),GX(e,g,n))}};return t},YX=String.prototype.replace,pX=/%20/g,ml={RFC1738:"RFC1738",RFC3986:"RFC3986"},zu={default:ml.RFC3986,formatters:{RFC1738:function(A){return YX.call(A,pX,"+")},RFC3986:function(A){return String(A)}},RFC1738:ml.RFC1738,RFC3986:ml.RFC3986},yX=zu,Yl=Object.prototype.hasOwnProperty,lg=Array.isArray,ce=function(){for(var A=[],B=0;B<256;++B)A.push("%"+((B<16?"0":"")+B.toString(16)).toUpperCase());return A}(),NX=function(B){for(;B.length>1;){var Q=B.pop(),e=Q.obj[Q.prop];if(lg(e)){for(var t=[],g=0;g<e.length;++g)typeof e[g]<"u"&&t.push(e[g]);Q.obj[Q.prop]=t}}},yy=function(B,Q){for(var e=Q&&Q.plainObjects?Object.create(null):{},t=0;t<B.length;++t)typeof B[t]<"u"&&(e[t]=B[t]);return e},bX=function A(B,Q,e){if(!Q)return B;if(typeof Q!="object"){if(lg(B))B.push(Q);else if(B&&typeof B=="object")(e&&(e.plainObjects||e.allowPrototypes)||!Yl.call(Object.prototype,Q))&&(B[Q]=!0);else return[B,Q];return B}if(!B||typeof B!="object")return[B].concat(Q);var t=B;return lg(B)&&!lg(Q)&&(t=yy(B,e)),lg(B)&&lg(Q)?(Q.forEach(function(g,n){if(Yl.call(B,n)){var E=B[n];E&&typeof E=="object"&&g&&typeof g=="object"?B[n]=A(E,g,e):B.push(g)}else B[n]=g}),B):Object.keys(Q).reduce(function(g,n){var E=Q[n];return Yl.call(g,n)?g[n]=A(g[n],E,e):g[n]=E,g},t)},JX=function(B,Q){return Object.keys(Q).reduce(function(e,t){return e[t]=Q[t],e},B)},kX=function(A,B,Q){var e=A.replace(/\+/g," ");if(Q==="iso-8859-1")return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch{return e}},vX=function(B,Q,e,t,g){if(B.length===0)return B;var n=B;if(typeof B=="symbol"?n=Symbol.prototype.toString.call(B):typeof B!="string"&&(n=String(B)),e==="iso-8859-1")return escape(n).replace(/%u[0-9a-f]{4}/gi,function(r){return"%26%23"+parseInt(r.slice(2),16)+"%3B"});for(var E="",C=0;C<n.length;++C){var i=n.charCodeAt(C);if(i===45||i===46||i===95||i===126||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||g===yX.RFC1738&&(i===40||i===41)){E+=n.charAt(C);continue}if(i<128){E=E+ce[i];continue}if(i<2048){E=E+(ce[192|i>>6]+ce[128|i&63]);continue}if(i<55296||i>=57344){E=E+(ce[224|i>>12]+ce[128|i>>6&63]+ce[128|i&63]);continue}C+=1,i=65536+((i&1023)<<10|n.charCodeAt(C)&1023),E+=ce[240|i>>18]+ce[128|i>>12&63]+ce[128|i>>6&63]+ce[128|i&63]}return E},ZX=function(B){for(var Q=[{obj:{o:B},prop:"o"}],e=[],t=0;t<Q.length;++t)for(var g=Q[t],n=g.obj[g.prop],E=Object.keys(n),C=0;C<E.length;++C){var i=E[C],r=n[i];typeof r=="object"&&r!==null&&e.indexOf(r)===-1&&(Q.push({obj:n,prop:i}),e.push(r))}return NX(Q),B},SX=function(B){return Object.prototype.toString.call(B)==="[object RegExp]"},LX=function(B){return!B||typeof B!="object"?!1:!!(B.constructor&&B.constructor.isBuffer&&B.constructor.isBuffer(B))},XX=function(B,Q){return[].concat(B,Q)},HX=function(B,Q){if(lg(B)){for(var e=[],t=0;t<B.length;t+=1)e.push(Q(B[t]));return e}return Q(B)},Ny={arrayToObject:yy,assign:JX,combine:XX,compact:ZX,decode:kX,encode:vX,isBuffer:LX,isRegExp:SX,maybeMap:HX,merge:bX},by=mX,ua=Ny,vC=zu,OX=Object.prototype.hasOwnProperty,DM={brackets:function(B){return B+"[]"},comma:"comma",indices:function(B,Q){return B+"["+Q+"]"},repeat:function(B){return B}},Te=Array.isArray,WX=Array.prototype.push,Jy=function(A,B){WX.apply(A,Te(B)?B:[B])},TX=Date.prototype.toISOString,uM=vC.default,TB={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:ua.encode,encodeValuesOnly:!1,format:uM,formatter:vC.formatters[uM],indices:!1,serializeDate:function(B){return TX.call(B)},skipNulls:!1,strictNullHandling:!1},VX=function(B){return typeof B=="string"||typeof B=="number"||typeof B=="boolean"||typeof B=="symbol"||typeof B=="bigint"},pl={},xX=function A(B,Q,e,t,g,n,E,C,i,r,a,o,l,I,w,U){for(var c=B,D=U,s=0,u=!1;(D=D.get(pl))!==void 0&&!u;){var f=D.get(B);if(s+=1,typeof f<"u"){if(f===s)throw new RangeError("Cyclic object value");u=!0}typeof D.get(pl)>"u"&&(s=0)}if(typeof C=="function"?c=C(Q,c):c instanceof Date?c=a(c):e==="comma"&&Te(c)&&(c=ua.maybeMap(c,function(q){return q instanceof Date?a(q):q})),c===null){if(g)return E&&!I?E(Q,TB.encoder,w,"key",o):Q;c=""}if(VX(c)||ua.isBuffer(c)){if(E){var M=I?Q:E(Q,TB.encoder,w,"key",o);return[l(M)+"="+l(E(c,TB.encoder,w,"value",o))]}return[l(Q)+"="+l(String(c))]}var h=[];if(typeof c>"u")return h;var Y;if(e==="comma"&&Te(c))I&&E&&(c=ua.maybeMap(c,E)),Y=[{value:c.length>0?c.join(",")||null:void 0}];else if(Te(C))Y=C;else{var m=Object.keys(c);Y=i?m.sort(i):m}for(var L=t&&Te(c)&&c.length===1?Q+"[]":Q,X=0;X<Y.length;++X){var W=Y[X],K=typeof W=="object"&&typeof W.value<"u"?W.value:c[W];if(!(n&&K===null)){var R=Te(c)?typeof e=="function"?e(L,W):L:L+(r?"."+W:"["+W+"]");U.set(B,s);var J=by();J.set(pl,U),Jy(h,A(K,R,e,t,g,n,e==="comma"&&I&&Te(c)?null:E,C,i,r,a,o,l,I,w,J))}}return h},zX=function(B){if(!B)return TB;if(B.encoder!==null&&typeof B.encoder<"u"&&typeof B.encoder!="function")throw new TypeError("Encoder has to be a function.");var Q=B.charset||TB.charset;if(typeof B.charset<"u"&&B.charset!=="utf-8"&&B.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=vC.default;if(typeof B.format<"u"){if(!OX.call(vC.formatters,B.format))throw new TypeError("Unknown format option provided.");e=B.format}var t=vC.formatters[e],g=TB.filter;return(typeof B.filter=="function"||Te(B.filter))&&(g=B.filter),{addQueryPrefix:typeof B.addQueryPrefix=="boolean"?B.addQueryPrefix:TB.addQueryPrefix,allowDots:typeof B.allowDots>"u"?TB.allowDots:!!B.allowDots,charset:Q,charsetSentinel:typeof B.charsetSentinel=="boolean"?B.charsetSentinel:TB.charsetSentinel,delimiter:typeof B.delimiter>"u"?TB.delimiter:B.delimiter,encode:typeof B.encode=="boolean"?B.encode:TB.encode,encoder:typeof B.encoder=="function"?B.encoder:TB.encoder,encodeValuesOnly:typeof B.encodeValuesOnly=="boolean"?B.encodeValuesOnly:TB.encodeValuesOnly,filter:g,format:e,formatter:t,serializeDate:typeof B.serializeDate=="function"?B.serializeDate:TB.serializeDate,skipNulls:typeof B.skipNulls=="boolean"?B.skipNulls:TB.skipNulls,sort:typeof B.sort=="function"?B.sort:null,strictNullHandling:typeof B.strictNullHandling=="boolean"?B.strictNullHandling:TB.strictNullHandling}},PX=function(A,B){var Q=A,e=zX(B),t,g;typeof e.filter=="function"?(g=e.filter,Q=g("",Q)):Te(e.filter)&&(g=e.filter,t=g);var n=[];if(typeof Q!="object"||Q===null)return"";var E;B&&B.arrayFormat in DM?E=B.arrayFormat:B&&"indices"in B?E=B.indices?"indices":"repeat":E="indices";var C=DM[E];if(B&&"commaRoundTrip"in B&&typeof B.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var i=C==="comma"&&B&&B.commaRoundTrip;t||(t=Object.keys(Q)),e.sort&&t.sort(e.sort);for(var r=by(),a=0;a<t.length;++a){var o=t[a];e.skipNulls&&Q[o]===null||Jy(n,xX(Q[o],o,C,i,e.strictNullHandling,e.skipNulls,e.encode?e.encoder:null,e.filter,e.sort,e.allowDots,e.serializeDate,e.format,e.formatter,e.encodeValuesOnly,e.charset,r))}var l=n.join(e.delimiter),I=e.addQueryPrefix===!0?"?":"";return e.charsetSentinel&&(e.charset==="iso-8859-1"?I+="utf8=%26%2310003%3B&":I+="utf8=%E2%9C%93&"),l.length>0?I+l:""},AE=Ny,vF=Object.prototype.hasOwnProperty,jX=Array.isArray,DB={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:AE.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},KX=function(A){return A.replace(/&#(\d+);/g,function(B,Q){return String.fromCharCode(parseInt(Q,10))})},ky=function(A,B){return A&&typeof A=="string"&&B.comma&&A.indexOf(",")>-1?A.split(","):A},qX="utf8=%26%2310003%3B",_X="utf8=%E2%9C%93",$X=function(B,Q){var e={},t=Q.ignoreQueryPrefix?B.replace(/^\?/,""):B,g=Q.parameterLimit===1/0?void 0:Q.parameterLimit,n=t.split(Q.delimiter,g),E=-1,C,i=Q.charset;if(Q.charsetSentinel)for(C=0;C<n.length;++C)n[C].indexOf("utf8=")===0&&(n[C]===_X?i="utf-8":n[C]===qX&&(i="iso-8859-1"),E=C,C=n.length);for(C=0;C<n.length;++C)if(C!==E){var r=n[C],a=r.indexOf("]="),o=a===-1?r.indexOf("="):a+1,l,I;o===-1?(l=Q.decoder(r,DB.decoder,i,"key"),I=Q.strictNullHandling?null:""):(l=Q.decoder(r.slice(0,o),DB.decoder,i,"key"),I=AE.maybeMap(ky(r.slice(o+1),Q),function(w){return Q.decoder(w,DB.decoder,i,"value")})),I&&Q.interpretNumericEntities&&i==="iso-8859-1"&&(I=KX(I)),r.indexOf("[]=")>-1&&(I=jX(I)?[I]:I),vF.call(e,l)?e[l]=AE.combine(e[l],I):e[l]=I}return e},A1=function(A,B,Q,e){for(var t=e?B:ky(B,Q),g=A.length-1;g>=0;--g){var n,E=A[g];if(E==="[]"&&Q.parseArrays)n=[].concat(t);else{n=Q.plainObjects?Object.create(null):{};var C=E.charAt(0)==="["&&E.charAt(E.length-1)==="]"?E.slice(1,-1):E,i=parseInt(C,10);!Q.parseArrays&&C===""?n={0:t}:!isNaN(i)&&E!==C&&String(i)===C&&i>=0&&Q.parseArrays&&i<=Q.arrayLimit?(n=[],n[i]=t):C!=="__proto__"&&(n[C]=t)}t=n}return t},B1=function(B,Q,e,t){if(B){var g=e.allowDots?B.replace(/\.([^.[]+)/g,"[$1]"):B,n=/(\[[^[\]]*])/,E=/(\[[^[\]]*])/g,C=e.depth>0&&n.exec(g),i=C?g.slice(0,C.index):g,r=[];if(i){if(!e.plainObjects&&vF.call(Object.prototype,i)&&!e.allowPrototypes)return;r.push(i)}for(var a=0;e.depth>0&&(C=E.exec(g))!==null&&a<e.depth;){if(a+=1,!e.plainObjects&&vF.call(Object.prototype,C[1].slice(1,-1))&&!e.allowPrototypes)return;r.push(C[1])}return C&&r.push("["+g.slice(C.index)+"]"),A1(r,Q,e,t)}},Q1=function(B){if(!B)return DB;if(B.decoder!==null&&B.decoder!==void 0&&typeof B.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof B.charset<"u"&&B.charset!=="utf-8"&&B.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var Q=typeof B.charset>"u"?DB.charset:B.charset;return{allowDots:typeof B.allowDots>"u"?DB.allowDots:!!B.allowDots,allowPrototypes:typeof B.allowPrototypes=="boolean"?B.allowPrototypes:DB.allowPrototypes,allowSparse:typeof B.allowSparse=="boolean"?B.allowSparse:DB.allowSparse,arrayLimit:typeof B.arrayLimit=="number"?B.arrayLimit:DB.arrayLimit,charset:Q,charsetSentinel:typeof B.charsetSentinel=="boolean"?B.charsetSentinel:DB.charsetSentinel,comma:typeof B.comma=="boolean"?B.comma:DB.comma,decoder:typeof B.decoder=="function"?B.decoder:DB.decoder,delimiter:typeof B.delimiter=="string"||AE.isRegExp(B.delimiter)?B.delimiter:DB.delimiter,depth:typeof B.depth=="number"||B.depth===!1?+B.depth:DB.depth,ignoreQueryPrefix:B.ignoreQueryPrefix===!0,interpretNumericEntities:typeof B.interpretNumericEntities=="boolean"?B.interpretNumericEntities:DB.interpretNumericEntities,parameterLimit:typeof B.parameterLimit=="number"?B.parameterLimit:DB.parameterLimit,parseArrays:B.parseArrays!==!1,plainObjects:typeof B.plainObjects=="boolean"?B.plainObjects:DB.plainObjects,strictNullHandling:typeof B.strictNullHandling=="boolean"?B.strictNullHandling:DB.strictNullHandling}},e1=function(A,B){var Q=Q1(B);if(A===""||A===null||typeof A>"u")return Q.plainObjects?Object.create(null):{};for(var e=typeof A=="string"?$X(A,Q):A,t=Q.plainObjects?Object.create(null):{},g=Object.keys(e),n=0;n<g.length;++n){var E=g[n],C=B1(E,e[E],Q,typeof A=="string");t=AE.merge(t,C,Q)}return Q.allowSparse===!0?t:AE.compact(t)},t1=PX,g1=e1,n1=zu,E1={formats:n1,parse:g1,stringify:t1},vy={};(function(A){var B=d&&d.__assign||function(){return B=Object.assign||function(E){for(var C,i=1,r=arguments.length;i<r;i++){C=arguments[i];for(var a in C)Object.prototype.hasOwnProperty.call(C,a)&&(E[a]=C[a])}return E},B.apply(this,arguments)};Object.defineProperty(A,"__esModule",{value:!0}),A.normalizeGifs=A.normalizeGif=A.USER_BOOL_PROPS=A.BOOL_PROPS=void 0,A.BOOL_PROPS=["is_anonymous","is_community","is_featured","is_hidden","is_indexable","is_preserve_size","is_realtime","is_removed","is_sticker","is_dynamic"],A.USER_BOOL_PROPS=["suppress_chrome","is_public","is_verified"];var Q=function(E){return function(C){return E[C]=!!E[C]}},e=function(E){return typeof E=="string"?E:E.text},t=function(E){var C=B({},E);C.id=String(C.id),C.tags=(C.tags||[]).map(e),A.BOOL_PROPS.forEach(Q(C)),Object.keys(C.images||{}).forEach(function(a){var o=C.images[a];o.width=parseInt(o.width),o.height=parseInt(o.height)});var i=C.user;if(i){var r=B({},i);A.USER_BOOL_PROPS.forEach(Q(r)),C.user=r}return C},g=function(E){return E.data=t(E.data),E};A.normalizeGif=g;var n=function(E){return E.data=E.data.map(function(C){return t(C)}),E};A.normalizeGifs=n})(vy);var Pu={},xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.setServerUrl=xt.serverUrl=void 0;var C1=(typeof window<"u"?window:d)||{};xt.serverUrl=C1.GIPHY_API_URL||"https://api.giphy.com/v1/";var i1=function(A){xt.serverUrl=A};xt.setServerUrl=i1;var Po={},r1=d&&d.__extends||function(){var A=function(B,Q){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&(e[g]=t[g])},A(B,Q)};return function(B,Q){if(typeof Q!="function"&&Q!==null)throw new TypeError("Class extends value "+String(Q)+" is not a constructor or null");A(B,Q);function e(){this.constructor=B}B.prototype=Q===null?Object.create(Q):(e.prototype=Q.prototype,new e)}}();Object.defineProperty(Po,"__esModule",{value:!0});var a1=function(A){r1(B,A);function B(Q,e,t,g){t===void 0&&(t=0),g===void 0&&(g="");var n=A.call(this,Q)||this;return n.url=e,n.status=t,n.statusText=g,n}return B}(Error);Po.default=a1;(function(A){var B=d&&d.__awaiter||function(o,l,I,w){function U(c){return c instanceof I?c:new I(function(D){D(c)})}return new(I||(I=Promise))(function(c,D){function s(M){try{f(w.next(M))}catch(h){D(h)}}function u(M){try{f(w.throw(M))}catch(h){D(h)}}function f(M){M.done?c(M.value):U(M.value).then(s,u)}f((w=w.apply(o,l||[])).next())})},Q=d&&d.__generator||function(o,l){var I={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},w,U,c,D;return D={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(D[Symbol.iterator]=function(){return this}),D;function s(f){return function(M){return u([f,M])}}function u(f){if(w)throw new TypeError("Generator is already executing.");for(;I;)try{if(w=1,U&&(c=f[0]&2?U.return:f[0]?U.throw||((c=U.return)&&c.call(U),0):U.next)&&!(c=c.call(U,f[1])).done)return c;switch(U=0,c&&(f=[f[0]&2,c.value]),f[0]){case 0:case 1:c=f;break;case 4:return I.label++,{value:f[1],done:!1};case 5:I.label++,U=f[1],f=[0];continue;case 7:f=I.ops.pop(),I.trys.pop();continue;default:if(c=I.trys,!(c=c.length>0&&c[c.length-1])&&(f[0]===6||f[0]===2)){I=0;continue}if(f[0]===3&&(!c||f[1]>c[0]&&f[1]<c[3])){I.label=f[1];break}if(f[0]===6&&I.label<c[1]){I.label=c[1],c=f;break}if(c&&I.label<c[2]){I.label=c[2],I.ops.push(f);break}c[2]&&I.ops.pop(),I.trys.pop();continue}f=l.call(o,I)}catch(M){f=[6,M],U=0}finally{w=c=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},e=d&&d.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(A,"__esModule",{value:!0}),A.DEFAULT_ERROR=A.ERROR_PREFIX=void 0;var t=xt,g=e(Po);A.ERROR_PREFIX="@giphy/js-fetch-api: ",A.DEFAULT_ERROR="Error fetching";var n=function(o){return o},E={},C=6e4,i=6e3,r=function(){var o=Date.now();Object.keys(E).forEach(function(l){var I=E[l].isError?i:C;o-E[l].ts>=I&&delete E[l]})};function a(o,l){var I=this;l===void 0&&(l={});var w=l.apiVersion,U=w===void 0?1:w,c=l.noCache,D=c===void 0?!1:c,s=l.normalizer,u=s===void 0?n:s,f=t.serverUrl.replace(/\/v\d+\/$/,"/v".concat(U,"/"));if(r(),!E[o]||D){var M="".concat(f).concat(o),h=function(){return B(I,void 0,void 0,function(){var Y,m,X,L,X,W,K;return Q(this,function(R){switch(R.label){case 0:return R.trys.push([0,9,,10]),[4,fetch(M,{method:"get"})];case 1:return m=R.sent(),m.ok?[4,m.json()]:[3,3];case 2:if(X=R.sent(),!((K=X.meta)===null||K===void 0)&&K.response_id)return[2,u(X)];throw{message:"synthetic response"};case 3:L=A.DEFAULT_ERROR,R.label=4;case 4:return R.trys.push([4,6,,7]),[4,m.json()];case 5:return X=R.sent(),X.message&&(L=X.message),[3,7];case 6:return R.sent(),[3,7];case 7:E[o]&&(E[o].isError=!0),Y=new g.default("".concat(A.ERROR_PREFIX).concat(L),M,m.status,m.statusText),R.label=8;case 8:return[3,10];case 9:return W=R.sent(),Y=new g.default(W.message,M),E[o]&&(E[o].isError=!0),[3,10];case 10:throw Y}})})};E[o]={request:h(),ts:Date.now()}}return E[o].request}A.default=a})(Pu);var SQ=d&&d.__assign||function(){return SQ=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},SQ.apply(this,arguments)},Zy=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(bi,"__esModule",{value:!0});bi.GiphyFetch=void 0;var o1=EQ,I1=Zy(E1),KQ=vy,aQ=Zy(Pu),yl=function(A){return A&&A.type?A.type:"gifs"},Sy=function(){function A(B){var Q=this;this.getQS=function(e){return e===void 0&&(e={}),I1.default.stringify(SQ(SQ({},e),{api_key:Q.apiKey,pingback_id:(0,o1.getPingbackId)()}))},this.apiKey=B}return A.prototype.categories=function(B){return(0,aQ.default)("gifs/categories?".concat(this.getQS(B)))},A.prototype.gif=function(B){return(0,aQ.default)("gifs/".concat(B,"?").concat(this.getQS()),{normalizer:KQ.normalizeGif})},A.prototype.gifs=function(B,Q){return Array.isArray(B)?(0,aQ.default)("gifs?".concat(this.getQS({ids:B.join(",")})),{normalizer:KQ.normalizeGifs}):(0,aQ.default)("gifs/categories/".concat(B,"/").concat(Q,"?").concat(this.getQS()),{normalizer:KQ.normalizeGifs})},A.prototype.emoji=function(B){return(0,aQ.default)("emoji?".concat(this.getQS(B)),{normalizer:KQ.normalizeGifs})},A.prototype.emojiDefaultVariations=function(B){return(0,aQ.default)("emoji?".concat(this.getQS(B)),{apiVersion:2,normalizer:KQ.normalizeGifs})},A.prototype.emojiVariations=function(B){return(0,aQ.default)("emoji/".concat(B,"/variations?").concat(this.getQS()),{apiVersion:2,normalizer:KQ.normalizeGifs})},A.prototype.animate=function(B,Q){Q===void 0&&(Q={});var e=this.getQS(SQ(SQ({},Q),{m:B}));return(0,aQ.default)("text/animate?".concat(e),{normalizer:KQ.normalizeGifs})},A.prototype.search=function(B,Q){Q===void 0&&(Q={});var e=Q.channel?"@".concat(Q.channel," ").concat(B):B,t;Q.type==="text"&&(t=!0);var g=this.getQS(SQ(SQ({rating:"pg-13"},Q),{q:e,excludeDynamicResults:t}));return(0,aQ.default)("".concat(yl(Q),"/search?").concat(g),{normalizer:KQ.normalizeGifs})},A.prototype.subcategories=function(B,Q){return(0,aQ.default)("gifs/categories/".concat(B,"?").concat(this.getQS(Q)))},A.prototype.trending=function(B){return B===void 0&&(B={}),(0,aQ.default)("".concat(yl(B),"/trending?").concat(this.getQS(SQ({rating:"pg-13"},B))),{normalizer:KQ.normalizeGifs})},A.prototype.random=function(B){return(0,aQ.default)("".concat(yl(B),"/random?").concat(this.getQS(SQ({rating:"pg-13"},B))),{noCache:!0,normalizer:KQ.normalizeGif})},A.prototype.related=function(B,Q){return(0,aQ.default)("".concat((Q==null?void 0:Q.type)==="stickers"?"stickers":"gifs","/related?").concat(this.getQS(SQ({gif_id:B,rating:"pg-13"},Q))),{normalizer:KQ.normalizeGifs})},A.prototype.channels=function(B,Q){return Q===void 0&&(Q={}),(0,aQ.default)("channels/search?".concat(this.getQS(SQ({q:B,rating:"pg-13"},Q))))},A}();bi.GiphyFetch=Sy;bi.default=Sy;var Ly={};Object.defineProperty(Ly,"__esModule",{value:!0});var jo={},s1=d&&d.__awaiter||function(A,B,Q,e){function t(g){return g instanceof Q?g:new Q(function(n){n(g)})}return new(Q||(Q=Promise))(function(g,n){function E(r){try{i(e.next(r))}catch(a){n(a)}}function C(r){try{i(e.throw(r))}catch(a){n(a)}}function i(r){r.done?g(r.value):t(r.value).then(E,C)}i((e=e.apply(A,B||[])).next())})},c1=d&&d.__generator||function(A,B){var Q={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},e,t,g,n;return n={next:E(0),throw:E(1),return:E(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function E(i){return function(r){return C([i,r])}}function C(i){if(e)throw new TypeError("Generator is already executing.");for(;Q;)try{if(e=1,t&&(g=i[0]&2?t.return:i[0]?t.throw||((g=t.return)&&g.call(t),0):t.next)&&!(g=g.call(t,i[1])).done)return g;switch(t=0,g&&(i=[i[0]&2,g.value]),i[0]){case 0:case 1:g=i;break;case 4:return Q.label++,{value:i[1],done:!1};case 5:Q.label++,t=i[1],i=[0];continue;case 7:i=Q.ops.pop(),Q.trys.pop();continue;default:if(g=Q.trys,!(g=g.length>0&&g[g.length-1])&&(i[0]===6||i[0]===2)){Q=0;continue}if(i[0]===3&&(!g||i[1]>g[0]&&i[1]<g[3])){Q.label=i[1];break}if(i[0]===6&&Q.label<g[1]){Q.label=g[1],g=i;break}if(g&&Q.label<g[2]){Q.label=g[2],Q.ops.push(i);break}g[2]&&Q.ops.pop(),Q.trys.pop();continue}i=B.call(A,Q)}catch(r){i=[6,r],t=0}finally{e=g=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},fM=d&&d.__spreadArray||function(A,B,Q){if(Q||arguments.length===2)for(var e=0,t=B.length,g;e<t;e++)(g||!(e in B))&&(g||(g=Array.prototype.slice.call(B,0,e)),g[e]=B[e]);return A.concat(g||Array.prototype.slice.call(B))};Object.defineProperty(jo,"__esModule",{value:!0});jo.gifPaginator=void 0;var l1=function(A,B){B===void 0&&(B=[]);var Q=fM([],B,!0),e=B.map(function(n){return n.id}),t=B.length,g=!1;return function(){return s1(void 0,void 0,void 0,function(){var n,E,C;return c1(this,function(i){switch(i.label){case 0:return g?[2,Q]:[4,A(t)];case 1:return n=i.sent(),E=n.pagination,C=n.data,t=E.count+E.offset,g=t===E.total_count,C.forEach(function(r){var a=r.id;e.includes(a)||(Q.push(r),e.push(a))}),[2,fM([],Q,!0)]}})})}};jo.gifPaginator=l1;var Xy={};Object.defineProperty(Xy,"__esModule",{value:!0});const w1={clean:"rm -rf ./dist",dev:"parcel public/test.html",docs:"typedoc src/index.ts",prepublish:"npm run clean && tsc",build:"tsc",test:"jest --config ./jestconfig.js","test:watch":"jest --config ./jestconfig.js --watchAll"},F1="@giphy/js-fetch-api",D1="4.8.1",u1="dist/index.js",f1="Javascript API to fetch gifs and stickers from the GIPHY API.",U1="https://github.com/Giphy/giphy-js/tree/master/packages/fetch-api",d1="dist/index.d.ts",M1=["dist/**/*","src/**/*"],h1="MIT",G1={access:"public"},R1={"@giphy/js-types":"^4.4.0","@giphy/js-util":"^4.3.0",qs:"^6.9.4"},m1={"@types/qs":"^6.9.4","jest-fetch-mock":"^3.0.3","parcel-bundler":"latest",typedoc:"^0.20.36","typedoc-thunder-theme":"^0.0.2",typescript:"^4.7.3"},Y1="dc692291b1a2a0ba79bad5298896b75ab2b21e83",p1={scripts:w1,name:F1,version:D1,main:u1,description:f1,homepage:U1,types:d1,files:M1,license:h1,publishConfig:G1,dependencies:R1,devDependencies:m1,gitHead:Y1};(function(A){var B=d&&d.__createBinding||(Object.create?function(o,l,I,w){w===void 0&&(w=I);var U=Object.getOwnPropertyDescriptor(l,I);(!U||("get"in U?!l.__esModule:U.writable||U.configurable))&&(U={enumerable:!0,get:function(){return l[I]}}),Object.defineProperty(o,w,U)}:function(o,l,I,w){w===void 0&&(w=I),o[w]=l[I]}),Q=d&&d.__exportStar||function(o,l){for(var I in o)I!=="default"&&!Object.prototype.hasOwnProperty.call(l,I)&&B(l,o,I)},e=d&&d.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},t;Object.defineProperty(A,"__esModule",{value:!0}),A.request=A.gifPaginator=A.FetchError=A.setServerUrl=A.serverUrl=A.GiphyFetch=void 0;var g=EQ,n=bi;Object.defineProperty(A,"GiphyFetch",{enumerable:!0,get:function(){return e(n).default}});var E=xt;Object.defineProperty(A,"serverUrl",{enumerable:!0,get:function(){return E.serverUrl}}),Object.defineProperty(A,"setServerUrl",{enumerable:!0,get:function(){return E.setServerUrl}});var C=Po;Object.defineProperty(A,"FetchError",{enumerable:!0,get:function(){return e(C).default}}),Q(Ly,A);var i=jo;Object.defineProperty(A,"gifPaginator",{enumerable:!0,get:function(){return i.gifPaginator}});var r=Pu;Object.defineProperty(A,"request",{enumerable:!0,get:function(){return e(r).default}}),Q(Xy,A);var a=p1.version;!((t=(0,g.getGiphySDKRequestHeaders)())===null||t===void 0)&&t.get("X-GIPHY-SDK-NAME")||((0,g.appendGiphySDKRequestHeader)("X-GIPHY-SDK-NAME","FetchAPI"),(0,g.appendGiphySDKRequestHeader)("X-GIPHY-SDK-VERSION",a))})(rE);var y1={};(function(){if(typeof window!="object")return;if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});return}function A(s){try{return s.defaultView&&s.defaultView.frameElement||null}catch{return null}}var B=function(s){for(var u=s,f=A(u);f;)u=f.ownerDocument,f=A(u);return u}(window.document),Q=[],e=null,t=null;function g(s){this.time=s.time,this.target=s.target,this.rootBounds=I(s.rootBounds),this.boundingClientRect=I(s.boundingClientRect),this.intersectionRect=I(s.intersectionRect||l()),this.isIntersecting=!!s.intersectionRect;var u=this.boundingClientRect,f=u.width*u.height,M=this.intersectionRect,h=M.width*M.height;f?this.intersectionRatio=Number((h/f).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0}function n(s,u){var f=u||{};if(typeof s!="function")throw new Error("callback must be a function");if(f.root&&f.root.nodeType!=1&&f.root.nodeType!=9)throw new Error("root must be a Document or Element");this._checkForIntersections=C(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=s,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(f.rootMargin),this.thresholds=this._initThresholds(f.threshold),this.root=f.root||null,this.rootMargin=this._rootMarginValues.map(function(M){return M.value+M.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}n.prototype.THROTTLE_TIMEOUT=100,n.prototype.POLL_INTERVAL=null,n.prototype.USE_MUTATION_OBSERVER=!0,n._setupCrossOriginUpdater=function(){return e||(e=function(s,u){!s||!u?t=l():t=w(s,u),Q.forEach(function(f){f._checkForIntersections()})}),e},n._resetCrossOriginUpdater=function(){e=null,t=null},n.prototype.observe=function(s){var u=this._observationTargets.some(function(f){return f.element==s});if(!u){if(!(s&&s.nodeType==1))throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:s,entry:null}),this._monitorIntersections(s.ownerDocument),this._checkForIntersections()}},n.prototype.unobserve=function(s){this._observationTargets=this._observationTargets.filter(function(u){return u.element!=s}),this._unmonitorIntersections(s.ownerDocument),this._observationTargets.length==0&&this._unregisterInstance()},n.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},n.prototype.takeRecords=function(){var s=this._queuedEntries.slice();return this._queuedEntries=[],s},n.prototype._initThresholds=function(s){var u=s||[0];return Array.isArray(u)||(u=[u]),u.sort().filter(function(f,M,h){if(typeof f!="number"||isNaN(f)||f<0||f>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return f!==h[M-1]})},n.prototype._parseRootMargin=function(s){var u=s||"0px",f=u.split(/\s+/).map(function(M){var h=/^(-?\d*\.?\d+)(px|%)$/.exec(M);if(!h)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(h[1]),unit:h[2]}});return f[1]=f[1]||f[0],f[2]=f[2]||f[0],f[3]=f[3]||f[1],f},n.prototype._monitorIntersections=function(s){var u=s.defaultView;if(u&&this._monitoringDocuments.indexOf(s)==-1){var f=this._checkForIntersections,M=null,h=null;this.POLL_INTERVAL?M=u.setInterval(f,this.POLL_INTERVAL):(i(u,"resize",f,!0),i(s,"scroll",f,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in u&&(h=new u.MutationObserver(f),h.observe(s,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))),this._monitoringDocuments.push(s),this._monitoringUnsubscribes.push(function(){var L=s.defaultView;L&&(M&&L.clearInterval(M),r(L,"resize",f,!0)),r(s,"scroll",f,!0),h&&h.disconnect()});var Y=this.root&&(this.root.ownerDocument||this.root)||B;if(s!=Y){var m=A(s);m&&this._monitorIntersections(m.ownerDocument)}}},n.prototype._unmonitorIntersections=function(s){var u=this._monitoringDocuments.indexOf(s);if(u!=-1){var f=this.root&&(this.root.ownerDocument||this.root)||B,M=this._observationTargets.some(function(m){var L=m.element.ownerDocument;if(L==s)return!0;for(;L&&L!=f;){var X=A(L);if(L=X&&X.ownerDocument,L==s)return!0}return!1});if(!M){var h=this._monitoringUnsubscribes[u];if(this._monitoringDocuments.splice(u,1),this._monitoringUnsubscribes.splice(u,1),h(),s!=f){var Y=A(s);Y&&this._unmonitorIntersections(Y.ownerDocument)}}}},n.prototype._unmonitorAllIntersections=function(){var s=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var u=0;u<s.length;u++)s[u]()},n.prototype._checkForIntersections=function(){if(!(!this.root&&e&&!t)){var s=this._rootIsInDom(),u=s?this._getRootRect():l();this._observationTargets.forEach(function(f){var M=f.element,h=o(M),Y=this._rootContainsTarget(M),m=f.entry,L=s&&Y&&this._computeTargetAndRootIntersection(M,h,u),X=null;this._rootContainsTarget(M)?(!e||this.root)&&(X=u):X=l();var W=f.entry=new g({time:E(),target:M,boundingClientRect:h,rootBounds:X,intersectionRect:L});m?s&&Y?this._hasCrossedThreshold(m,W)&&this._queuedEntries.push(W):m&&m.isIntersecting&&this._queuedEntries.push(W):this._queuedEntries.push(W)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},n.prototype._computeTargetAndRootIntersection=function(s,u,f){if(window.getComputedStyle(s).display!="none"){for(var M=u,h=c(s),Y=!1;!Y&&h;){var m=null,L=h.nodeType==1?window.getComputedStyle(h):{};if(L.display=="none")return null;if(h==this.root||h.nodeType==9)if(Y=!0,h==this.root||h==B)e&&!this.root?!t||t.width==0&&t.height==0?(h=null,m=null,M=null):m=t:m=f;else{var X=c(h),W=X&&o(X),K=X&&this._computeTargetAndRootIntersection(X,W,f);W&&K?(h=X,m=w(W,K)):(h=null,M=null)}else{var R=h.ownerDocument;h!=R.body&&h!=R.documentElement&&L.overflow!="visible"&&(m=o(h))}if(m&&(M=a(m,M)),!M)break;h=h&&c(h)}return M}},n.prototype._getRootRect=function(){var s;if(this.root&&!D(this.root))s=o(this.root);else{var u=D(this.root)?this.root:B,f=u.documentElement,M=u.body;s={top:0,left:0,right:f.clientWidth||M.clientWidth,width:f.clientWidth||M.clientWidth,bottom:f.clientHeight||M.clientHeight,height:f.clientHeight||M.clientHeight}}return this._expandRectByRootMargin(s)},n.prototype._expandRectByRootMargin=function(s){var u=this._rootMarginValues.map(function(M,h){return M.unit=="px"?M.value:M.value*(h%2?s.width:s.height)/100}),f={top:s.top-u[0],right:s.right+u[1],bottom:s.bottom+u[2],left:s.left-u[3]};return f.width=f.right-f.left,f.height=f.bottom-f.top,f},n.prototype._hasCrossedThreshold=function(s,u){var f=s&&s.isIntersecting?s.intersectionRatio||0:-1,M=u.isIntersecting?u.intersectionRatio||0:-1;if(f!==M)for(var h=0;h<this.thresholds.length;h++){var Y=this.thresholds[h];if(Y==f||Y==M||Y<f!=Y<M)return!0}},n.prototype._rootIsInDom=function(){return!this.root||U(B,this.root)},n.prototype._rootContainsTarget=function(s){var u=this.root&&(this.root.ownerDocument||this.root)||B;return U(u,s)&&(!this.root||u==s.ownerDocument)},n.prototype._registerInstance=function(){Q.indexOf(this)<0&&Q.push(this)},n.prototype._unregisterInstance=function(){var s=Q.indexOf(this);s!=-1&&Q.splice(s,1)};function E(){return window.performance&&performance.now&&performance.now()}function C(s,u){var f=null;return function(){f||(f=setTimeout(function(){s(),f=null},u))}}function i(s,u,f,M){typeof s.addEventListener=="function"?s.addEventListener(u,f,M||!1):typeof s.attachEvent=="function"&&s.attachEvent("on"+u,f)}function r(s,u,f,M){typeof s.removeEventListener=="function"?s.removeEventListener(u,f,M||!1):typeof s.detachEvent=="function"&&s.detachEvent("on"+u,f)}function a(s,u){var f=Math.max(s.top,u.top),M=Math.min(s.bottom,u.bottom),h=Math.max(s.left,u.left),Y=Math.min(s.right,u.right),m=Y-h,L=M-f;return m>=0&&L>=0&&{top:f,bottom:M,left:h,right:Y,width:m,height:L}||null}function o(s){var u;try{u=s.getBoundingClientRect()}catch{}return u?(u.width&&u.height||(u={top:u.top,right:u.right,bottom:u.bottom,left:u.left,width:u.right-u.left,height:u.bottom-u.top}),u):l()}function l(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function I(s){return!s||"x"in s?s:{top:s.top,y:s.top,bottom:s.bottom,left:s.left,x:s.left,right:s.right,width:s.width,height:s.height}}function w(s,u){var f=u.top-s.top,M=u.left-s.left;return{top:f,left:M,height:u.height,width:u.width,bottom:f+u.height,right:M+u.width}}function U(s,u){for(var f=u;f;){if(f==s)return!0;f=c(f)}return!1}function c(s){var u=s.parentNode;return s.nodeType==9&&s!=B?A(s):(u&&u.assignedSlot&&(u=u.assignedSlot.parentNode),u&&u.nodeType==11&&u.host?u.host:u)}function D(s){return s&&s.nodeType===9}window.IntersectionObserver=n,window.IntersectionObserverEntry=g})();var Ko={};function NA(){return NA=Object.assign?Object.assign.bind():function(A){for(var B=1;B<arguments.length;B++){var Q=arguments[B];for(var e in Q)Object.prototype.hasOwnProperty.call(Q,e)&&(A[e]=Q[e])}return A},NA.apply(this,arguments)}function Hy(A){var B=Object.create(null);return function(Q){return B[Q]===void 0&&(B[Q]=A(Q)),B[Q]}}var N1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,b1=Hy(function(A){return N1.test(A)||A.charCodeAt(0)===111&&A.charCodeAt(1)===110&&A.charCodeAt(2)<91});function J1(A){if(A.sheet)return A.sheet;for(var B=0;B<document.styleSheets.length;B++)if(document.styleSheets[B].ownerNode===A)return document.styleSheets[B]}function k1(A){var B=document.createElement("style");return B.setAttribute("data-emotion",A.key),A.nonce!==void 0&&B.setAttribute("nonce",A.nonce),B.appendChild(document.createTextNode("")),B.setAttribute("data-s",""),B}var v1=function(){function A(Q){var e=this;this._insertTag=function(t){var g;e.tags.length===0?e.insertionPoint?g=e.insertionPoint.nextSibling:e.prepend?g=e.container.firstChild:g=e.before:g=e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,g),e.tags.push(t)},this.isSpeedy=Q.speedy===void 0?!0:Q.speedy,this.tags=[],this.ctr=0,this.nonce=Q.nonce,this.key=Q.key,this.container=Q.container,this.prepend=Q.prepend,this.insertionPoint=Q.insertionPoint,this.before=null}var B=A.prototype;return B.hydrate=function(e){e.forEach(this._insertTag)},B.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(k1(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var g=J1(t);try{g.insertRule(e,g.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},B.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},A}(),OB="-ms-",eo="-moz-",yA="-webkit-",Oy="comm",ju="rule",Ku="decl",Z1="@import",Wy="@keyframes",S1=Math.abs,qo=String.fromCharCode,L1=Object.assign;function X1(A,B){return yB(A,0)^45?(((B<<2^yB(A,0))<<2^yB(A,1))<<2^yB(A,2))<<2^yB(A,3):0}function Ty(A){return A.trim()}function H1(A,B){return(A=B.exec(A))?A[0]:A}function bA(A,B,Q){return A.replace(B,Q)}function ZF(A,B){return A.indexOf(B)}function yB(A,B){return A.charCodeAt(B)|0}function oi(A,B,Q){return A.slice(B,Q)}function fe(A){return A.length}function qu(A){return A.length}function Tr(A,B){return B.push(A),A}function O1(A,B){return A.map(B).join("")}var _o=1,BE=1,Vy=0,wQ=0,rB=0,IE="";function $o(A,B,Q,e,t,g,n){return{value:A,root:B,parent:Q,type:e,props:t,children:g,line:_o,column:BE,length:n,return:""}}function tC(A,B){return L1($o("",null,null,"",null,null,0),A,{length:-A.length},B)}function W1(){return rB}function T1(){return rB=wQ>0?yB(IE,--wQ):0,BE--,rB===10&&(BE=1,_o--),rB}function GQ(){return rB=wQ<Vy?yB(IE,wQ++):0,BE++,rB===10&&(BE=1,_o++),rB}function pe(){return yB(IE,wQ)}function fa(){return wQ}function ki(A,B){return oi(IE,A,B)}function Ii(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xy(A){return _o=BE=1,Vy=fe(IE=A),wQ=0,[]}function zy(A){return IE="",A}function Ua(A){return Ty(ki(wQ-1,SF(A===91?A+2:A===40?A+1:A)))}function V1(A){for(;(rB=pe())&&rB<33;)GQ();return Ii(A)>2||Ii(rB)>3?"":" "}function x1(A,B){for(;--B&&GQ()&&!(rB<48||rB>102||rB>57&&rB<65||rB>70&&rB<97););return ki(A,fa()+(B<6&&pe()==32&&GQ()==32))}function SF(A){for(;GQ();)switch(rB){case A:return wQ;case 34:case 39:A!==34&&A!==39&&SF(rB);break;case 40:A===41&&SF(A);break;case 92:GQ();break}return wQ}function z1(A,B){for(;GQ()&&A+rB!==47+10;)if(A+rB===42+42&&pe()===47)break;return"/*"+ki(B,wQ-1)+"*"+qo(A===47?A:GQ())}function P1(A){for(;!Ii(pe());)GQ();return ki(A,wQ)}function j1(A){return zy(da("",null,null,null,[""],A=xy(A),0,[0],A))}function da(A,B,Q,e,t,g,n,E,C){for(var i=0,r=0,a=n,o=0,l=0,I=0,w=1,U=1,c=1,D=0,s="",u=t,f=g,M=e,h=s;U;)switch(I=D,D=GQ()){case 40:if(I!=108&&yB(h,a-1)==58){ZF(h+=bA(Ua(D),"&","&\f"),"&\f")!=-1&&(c=-1);break}case 34:case 39:case 91:h+=Ua(D);break;case 9:case 10:case 13:case 32:h+=V1(I);break;case 92:h+=x1(fa()-1,7);continue;case 47:switch(pe()){case 42:case 47:Tr(K1(z1(GQ(),fa()),B,Q),C);break;default:h+="/"}break;case 123*w:E[i++]=fe(h)*c;case 125*w:case 59:case 0:switch(D){case 0:case 125:U=0;case 59+r:l>0&&fe(h)-a&&Tr(l>32?dM(h+";",e,Q,a-1):dM(bA(h," ","")+";",e,Q,a-2),C);break;case 59:h+=";";default:if(Tr(M=UM(h,B,Q,i,r,t,E,s,u=[],f=[],a),g),D===123)if(r===0)da(h,B,M,M,u,g,a,E,f);else switch(o===99&&yB(h,3)===110?100:o){case 100:case 109:case 115:da(A,M,M,e&&Tr(UM(A,M,M,0,0,t,E,s,t,u=[],a),f),t,f,a,E,e?u:f);break;default:da(h,M,M,M,[""],f,0,E,f)}}i=r=l=0,w=c=1,s=h="",a=n;break;case 58:a=1+fe(h),l=I;default:if(w<1){if(D==123)--w;else if(D==125&&w++==0&&T1()==125)continue}switch(h+=qo(D),D*w){case 38:c=r>0?1:(h+="\f",-1);break;case 44:E[i++]=(fe(h)-1)*c,c=1;break;case 64:pe()===45&&(h+=Ua(GQ())),o=pe(),r=a=fe(s=h+=P1(fa())),D++;break;case 45:I===45&&fe(h)==2&&(w=0)}}return g}function UM(A,B,Q,e,t,g,n,E,C,i,r){for(var a=t-1,o=t===0?g:[""],l=qu(o),I=0,w=0,U=0;I<e;++I)for(var c=0,D=oi(A,a+1,a=S1(w=n[I])),s=A;c<l;++c)(s=Ty(w>0?o[c]+" "+D:bA(D,/&\f/g,o[c])))&&(C[U++]=s);return $o(A,B,Q,t===0?ju:E,C,i,r)}function K1(A,B,Q){return $o(A,B,Q,Oy,qo(W1()),oi(A,2,-2),0)}function dM(A,B,Q,e){return $o(A,B,Q,Ku,oi(A,0,e),oi(A,e+1,-1),e)}function On(A,B){for(var Q="",e=qu(A),t=0;t<e;t++)Q+=B(A[t],t,A,B)||"";return Q}function q1(A,B,Q,e){switch(A.type){case Z1:case Ku:return A.return=A.return||A.value;case Oy:return"";case Wy:return A.return=A.value+"{"+On(A.children,e)+"}";case ju:A.value=A.props.join(",")}return fe(Q=On(A.children,e))?A.return=A.value+"{"+Q+"}":""}function _1(A){var B=qu(A);return function(Q,e,t,g){for(var n="",E=0;E<B;E++)n+=A[E](Q,e,t,g)||"";return n}}function $1(A){return function(B){B.root||(B=B.return)&&A(B)}}var AH=function(B,Q,e){for(var t=0,g=0;t=g,g=pe(),t===38&&g===12&&(Q[e]=1),!Ii(g);)GQ();return ki(B,wQ)},BH=function(B,Q){var e=-1,t=44;do switch(Ii(t)){case 0:t===38&&pe()===12&&(Q[e]=1),B[e]+=AH(wQ-1,Q,e);break;case 2:B[e]+=Ua(t);break;case 4:if(t===44){B[++e]=pe()===58?"&\f":"",Q[e]=B[e].length;break}default:B[e]+=qo(t)}while(t=GQ());return B},QH=function(B,Q){return zy(BH(xy(B),Q))},MM=new WeakMap,eH=function(B){if(!(B.type!=="rule"||!B.parent||B.length<1)){for(var Q=B.value,e=B.parent,t=B.column===e.column&&B.line===e.line;e.type!=="rule";)if(e=e.parent,!e)return;if(!(B.props.length===1&&Q.charCodeAt(0)!==58&&!MM.get(e))&&!t){MM.set(B,!0);for(var g=[],n=QH(Q,g),E=e.props,C=0,i=0;C<n.length;C++)for(var r=0;r<E.length;r++,i++)B.props[i]=g[C]?n[C].replace(/&\f/g,E[r]):E[r]+" "+n[C]}}},tH=function(B){if(B.type==="decl"){var Q=B.value;Q.charCodeAt(0)===108&&Q.charCodeAt(2)===98&&(B.return="",B.value="")}};function Py(A,B){switch(X1(A,B)){case 5103:return yA+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return yA+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return yA+A+eo+A+OB+A+A;case 6828:case 4268:return yA+A+OB+A+A;case 6165:return yA+A+OB+"flex-"+A+A;case 5187:return yA+A+bA(A,/(\w+).+(:[^]+)/,yA+"box-$1$2"+OB+"flex-$1$2")+A;case 5443:return yA+A+OB+"flex-item-"+bA(A,/flex-|-self/,"")+A;case 4675:return yA+A+OB+"flex-line-pack"+bA(A,/align-content|flex-|-self/,"")+A;case 5548:return yA+A+OB+bA(A,"shrink","negative")+A;case 5292:return yA+A+OB+bA(A,"basis","preferred-size")+A;case 6060:return yA+"box-"+bA(A,"-grow","")+yA+A+OB+bA(A,"grow","positive")+A;case 4554:return yA+bA(A,/([^-])(transform)/g,"$1"+yA+"$2")+A;case 6187:return bA(bA(bA(A,/(zoom-|grab)/,yA+"$1"),/(image-set)/,yA+"$1"),A,"")+A;case 5495:case 3959:return bA(A,/(image-set\([^]*)/,yA+"$1$`$1");case 4968:return bA(bA(A,/(.+:)(flex-)?(.*)/,yA+"box-pack:$3"+OB+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+yA+A+A;case 4095:case 3583:case 4068:case 2532:return bA(A,/(.+)-inline(.+)/,yA+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fe(A)-1-B>6)switch(yB(A,B+1)){case 109:if(yB(A,B+4)!==45)break;case 102:return bA(A,/(.+:)(.+)-([^]+)/,"$1"+yA+"$2-$3$1"+eo+(yB(A,B+3)==108?"$3":"$2-$3"))+A;case 115:return~ZF(A,"stretch")?Py(bA(A,"stretch","fill-available"),B)+A:A}break;case 4949:if(yB(A,B+1)!==115)break;case 6444:switch(yB(A,fe(A)-3-(~ZF(A,"!important")&&10))){case 107:return bA(A,":",":"+yA)+A;case 101:return bA(A,/(.+:)([^;!]+)(;|!.+)?/,"$1"+yA+(yB(A,14)===45?"inline-":"")+"box$3$1"+yA+"$2$3$1"+OB+"$2box$3")+A}break;case 5936:switch(yB(A,B+11)){case 114:return yA+A+OB+bA(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return yA+A+OB+bA(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return yA+A+OB+bA(A,/[svh]\w+-[tblr]{2}/,"lr")+A}return yA+A+OB+A+A}return A}var gH=function(B,Q,e,t){if(B.length>-1&&!B.return)switch(B.type){case Ku:B.return=Py(B.value,B.length);break;case Wy:return On([tC(B,{value:bA(B.value,"@","@"+yA)})],t);case ju:if(B.length)return O1(B.props,function(g){switch(H1(g,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return On([tC(B,{props:[bA(g,/:(read-\w+)/,":"+eo+"$1")]})],t);case"::placeholder":return On([tC(B,{props:[bA(g,/:(plac\w+)/,":"+yA+"input-$1")]}),tC(B,{props:[bA(g,/:(plac\w+)/,":"+eo+"$1")]}),tC(B,{props:[bA(g,/:(plac\w+)/,OB+"input-$1")]})],t)}return""})}},nH=[gH],EH=function(B){var Q=B.key;if(Q==="css"){var e=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(e,function(w){var U=w.getAttribute("data-emotion");U.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var t=B.stylisPlugins||nH,g={},n,E=[];n=B.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+Q+' "]'),function(w){for(var U=w.getAttribute("data-emotion").split(" "),c=1;c<U.length;c++)g[U[c]]=!0;E.push(w)});var C,i=[eH,tH];{var r,a=[q1,$1(function(w){r.insert(w)})],o=_1(i.concat(t,a)),l=function(U){return On(j1(U),o)};C=function(U,c,D,s){r=D,l(U?U+"{"+c.styles+"}":c.styles),s&&(I.inserted[c.name]=!0)}}var I={key:Q,sheet:new v1({key:Q,container:n,nonce:B.nonce,speedy:B.speedy,prepend:B.prepend,insertionPoint:B.insertionPoint}),nonce:B.nonce,inserted:g,registered:{},insert:C};return I.sheet.hydrate(E),I},hM=function(B){var Q=new WeakMap;return function(e){if(Q.has(e))return Q.get(e);var t=B(e);return Q.set(e,t),t}},LF={},CH={get exports(){return LF},set exports(A){LF=A}},kA={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MB=typeof Symbol=="function"&&Symbol.for,_u=MB?Symbol.for("react.element"):60103,$u=MB?Symbol.for("react.portal"):60106,AI=MB?Symbol.for("react.fragment"):60107,BI=MB?Symbol.for("react.strict_mode"):60108,QI=MB?Symbol.for("react.profiler"):60114,eI=MB?Symbol.for("react.provider"):60109,tI=MB?Symbol.for("react.context"):60110,Af=MB?Symbol.for("react.async_mode"):60111,gI=MB?Symbol.for("react.concurrent_mode"):60111,nI=MB?Symbol.for("react.forward_ref"):60112,EI=MB?Symbol.for("react.suspense"):60113,iH=MB?Symbol.for("react.suspense_list"):60120,CI=MB?Symbol.for("react.memo"):60115,iI=MB?Symbol.for("react.lazy"):60116,rH=MB?Symbol.for("react.block"):60121,aH=MB?Symbol.for("react.fundamental"):60117,oH=MB?Symbol.for("react.responder"):60118,IH=MB?Symbol.for("react.scope"):60119;function yQ(A){if(typeof A=="object"&&A!==null){var B=A.$$typeof;switch(B){case _u:switch(A=A.type,A){case Af:case gI:case AI:case QI:case BI:case EI:return A;default:switch(A=A&&A.$$typeof,A){case tI:case nI:case iI:case CI:case eI:return A;default:return B}}case $u:return B}}}function jy(A){return yQ(A)===gI}kA.AsyncMode=Af;kA.ConcurrentMode=gI;kA.ContextConsumer=tI;kA.ContextProvider=eI;kA.Element=_u;kA.ForwardRef=nI;kA.Fragment=AI;kA.Lazy=iI;kA.Memo=CI;kA.Portal=$u;kA.Profiler=QI;kA.StrictMode=BI;kA.Suspense=EI;kA.isAsyncMode=function(A){return jy(A)||yQ(A)===Af};kA.isConcurrentMode=jy;kA.isContextConsumer=function(A){return yQ(A)===tI};kA.isContextProvider=function(A){return yQ(A)===eI};kA.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===_u};kA.isForwardRef=function(A){return yQ(A)===nI};kA.isFragment=function(A){return yQ(A)===AI};kA.isLazy=function(A){return yQ(A)===iI};kA.isMemo=function(A){return yQ(A)===CI};kA.isPortal=function(A){return yQ(A)===$u};kA.isProfiler=function(A){return yQ(A)===QI};kA.isStrictMode=function(A){return yQ(A)===BI};kA.isSuspense=function(A){return yQ(A)===EI};kA.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===AI||A===gI||A===QI||A===BI||A===EI||A===iH||typeof A=="object"&&A!==null&&(A.$$typeof===iI||A.$$typeof===CI||A.$$typeof===eI||A.$$typeof===tI||A.$$typeof===nI||A.$$typeof===aH||A.$$typeof===oH||A.$$typeof===IH||A.$$typeof===rH)};kA.typeOf=yQ;(function(A){A.exports=kA})(CH);var Bf=LF,sH={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cH={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lH={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ky={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qf={};Qf[Bf.ForwardRef]=lH;Qf[Bf.Memo]=Ky;function GM(A){return Bf.isMemo(A)?Ky:Qf[A.$$typeof]||sH}var wH=Object.defineProperty,FH=Object.getOwnPropertyNames,RM=Object.getOwnPropertySymbols,DH=Object.getOwnPropertyDescriptor,uH=Object.getPrototypeOf,mM=Object.prototype;function qy(A,B,Q){if(typeof B!="string"){if(mM){var e=uH(B);e&&e!==mM&&qy(A,e,Q)}var t=FH(B);RM&&(t=t.concat(RM(B)));for(var g=GM(A),n=GM(B),E=0;E<t.length;++E){var C=t[E];if(!cH[C]&&!(Q&&Q[C])&&!(n&&n[C])&&!(g&&g[C])){var i=DH(B,C);try{wH(A,C,i)}catch{}}}}return A}var fH=qy,UH=function(A,B){return fH(A,B)};const dH=UH;var MH=!0;function ef(A,B,Q){var e="";return Q.split(" ").forEach(function(t){A[t]!==void 0?B.push(A[t]+";"):e+=t+" "}),e}var rI=function(B,Q,e){var t=B.key+"-"+Q.name;(e===!1||MH===!1)&&B.registered[t]===void 0&&(B.registered[t]=Q.styles)},aI=function(B,Q,e){rI(B,Q,e);var t=B.key+"-"+Q.name;if(B.inserted[Q.name]===void 0){var g=Q;do B.insert(Q===g?"."+t:"",g,B.sheet,!0),g=g.next;while(g!==void 0)}};function hH(A){for(var B=0,Q,e=0,t=A.length;t>=4;++e,t-=4)Q=A.charCodeAt(e)&255|(A.charCodeAt(++e)&255)<<8|(A.charCodeAt(++e)&255)<<16|(A.charCodeAt(++e)&255)<<24,Q=(Q&65535)*1540483477+((Q>>>16)*59797<<16),Q^=Q>>>24,B=(Q&65535)*1540483477+((Q>>>16)*59797<<16)^(B&65535)*1540483477+((B>>>16)*59797<<16);switch(t){case 3:B^=(A.charCodeAt(e+2)&255)<<16;case 2:B^=(A.charCodeAt(e+1)&255)<<8;case 1:B^=A.charCodeAt(e)&255,B=(B&65535)*1540483477+((B>>>16)*59797<<16)}return B^=B>>>13,B=(B&65535)*1540483477+((B>>>16)*59797<<16),((B^B>>>15)>>>0).toString(36)}var GH={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},RH=/[A-Z]|^ms/g,mH=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_y=function(B){return B.charCodeAt(1)===45},YM=function(B){return B!=null&&typeof B!="boolean"},Nl=Hy(function(A){return _y(A)?A:A.replace(RH,"-$&").toLowerCase()}),pM=function(B,Q){switch(B){case"animation":case"animationName":if(typeof Q=="string")return Q.replace(mH,function(e,t,g){return Ue={name:t,styles:g,next:Ue},t})}return GH[B]!==1&&!_y(B)&&typeof Q=="number"&&Q!==0?Q+"px":Q};function si(A,B,Q){if(Q==null)return"";if(Q.__emotion_styles!==void 0)return Q;switch(typeof Q){case"boolean":return"";case"object":{if(Q.anim===1)return Ue={name:Q.name,styles:Q.styles,next:Ue},Q.name;if(Q.styles!==void 0){var e=Q.next;if(e!==void 0)for(;e!==void 0;)Ue={name:e.name,styles:e.styles,next:Ue},e=e.next;var t=Q.styles+";";return t}return YH(A,B,Q)}case"function":{if(A!==void 0){var g=Ue,n=Q(A);return Ue=g,si(A,B,n)}break}}if(B==null)return Q;var E=B[Q];return E!==void 0?E:Q}function YH(A,B,Q){var e="";if(Array.isArray(Q))for(var t=0;t<Q.length;t++)e+=si(A,B,Q[t])+";";else for(var g in Q){var n=Q[g];if(typeof n!="object")B!=null&&B[n]!==void 0?e+=g+"{"+B[n]+"}":YM(n)&&(e+=Nl(g)+":"+pM(g,n)+";");else if(Array.isArray(n)&&typeof n[0]=="string"&&(B==null||B[n[0]]===void 0))for(var E=0;E<n.length;E++)YM(n[E])&&(e+=Nl(g)+":"+pM(g,n[E])+";");else{var C=si(A,B,n);switch(g){case"animation":case"animationName":{e+=Nl(g)+":"+C+";";break}default:e+=g+"{"+C+"}"}}}return e}var yM=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ue,vi=function(B,Q,e){if(B.length===1&&typeof B[0]=="object"&&B[0]!==null&&B[0].styles!==void 0)return B[0];var t=!0,g="";Ue=void 0;var n=B[0];n==null||n.raw===void 0?(t=!1,g+=si(e,Q,n)):g+=n[0];for(var E=1;E<B.length;E++)g+=si(e,Q,B[E]),t&&(g+=n[E]);yM.lastIndex=0;for(var C="",i;(i=yM.exec(g))!==null;)C+="-"+i[1];var r=hH(g)+C;return{name:r,styles:g,next:Ue}},tf={}.hasOwnProperty,gf=b.createContext(typeof HTMLElement<"u"?EH({key:"css"}):null),pH=gf.Provider,yH=function(){return b.useContext(gf)},Zi=function(B){return b.forwardRef(function(Q,e){var t=b.useContext(gf);return B(Q,t,e)})},nt=b.createContext({}),NH=function(){return b.useContext(nt)},bH=function(B,Q){if(typeof Q=="function"){var e=Q(B);return e}return NA({},B,Q)},JH=hM(function(A){return hM(function(B){return bH(A,B)})}),kH=function(B){var Q=b.useContext(nt);return B.theme!==Q&&(Q=JH(Q)(B.theme)),b.createElement(nt.Provider,{value:Q},B.children)};function vH(A){var B=A.displayName||A.name||"Component",Q=function(g,n){var E=b.useContext(nt);return b.createElement(A,NA({theme:E,ref:n},g))},e=b.forwardRef(Q);return e.displayName="WithTheme("+B+")",dH(e,A)}var ZH=At["useInsertionEffect"]?At["useInsertionEffect"]:function(B){B()};function $y(A){ZH(A)}var XF="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",SH=function(B,Q){var e={};for(var t in Q)tf.call(Q,t)&&(e[t]=Q[t]);return e[XF]=B,e},LH=function(B){var Q=B.cache,e=B.serialized,t=B.isStringTag;return rI(Q,e,t),$y(function(){return aI(Q,e,t)}),null},XH=Zi(function(A,B,Q){var e=A.css;typeof e=="string"&&B.registered[e]!==void 0&&(e=B.registered[e]);var t=A[XF],g=[e],n="";typeof A.className=="string"?n=ef(B.registered,g,A.className):A.className!=null&&(n=A.className+" ");var E=vi(g,void 0,b.useContext(nt));n+=B.key+"-"+E.name;var C={};for(var i in A)tf.call(A,i)&&i!=="css"&&i!==XF&&(C[i]=A[i]);return C.ref=Q,C.className=n,b.createElement(b.Fragment,null,b.createElement(LH,{cache:B,serialized:E,isStringTag:typeof t=="string"}),b.createElement(t,C))}),NM=function(B,Q){var e=arguments;if(Q==null||!tf.call(Q,"css"))return b.createElement.apply(void 0,e);var t=e.length,g=new Array(t);g[0]=XH,g[1]=SH(B,Q);for(var n=2;n<t;n++)g[n]=e[n];return b.createElement.apply(null,g)},bM=At["useInsertionEffect"]?At["useInsertionEffect"]:b.useLayoutEffect,HH=Zi(function(A,B){var Q=A.styles,e=vi([Q],void 0,b.useContext(nt)),t=b.useRef();return bM(function(){var g=B.key+"-global",n=new B.sheet.constructor({key:g,nonce:B.sheet.nonce,container:B.sheet.container,speedy:B.sheet.isSpeedy}),E=!1,C=document.querySelector('style[data-emotion="'+g+" "+e.name+'"]');return B.sheet.tags.length&&(n.before=B.sheet.tags[0]),C!==null&&(E=!0,C.setAttribute("data-emotion",g),n.hydrate([C])),t.current=[n,E],function(){n.flush()}},[B]),bM(function(){var g=t.current,n=g[0],E=g[1];if(E){g[1]=!1;return}if(e.next!==void 0&&aI(B,e.next,!0),n.tags.length){var C=n.tags[n.tags.length-1].nextElementSibling;n.before=C,n.flush()}B.insert("",e,n,!1)},[B,e.name]),null});function AN(){for(var A=arguments.length,B=new Array(A),Q=0;Q<A;Q++)B[Q]=arguments[Q];return vi(B)}var OH=function(){var B=AN.apply(void 0,arguments),Q="animation-"+B.name;return{name:Q,styles:"@keyframes "+Q+"{"+B.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},WH=function A(B){for(var Q=B.length,e=0,t="";e<Q;e++){var g=B[e];if(g!=null){var n=void 0;switch(typeof g){case"boolean":break;case"object":{if(Array.isArray(g))n=A(g);else{n="";for(var E in g)g[E]&&E&&(n&&(n+=" "),n+=E)}break}default:n=g}n&&(t&&(t+=" "),t+=n)}}return t};function TH(A,B,Q){var e=[],t=ef(A,e,Q);return e.length<2?Q:t+B(e)}var VH=function(B){var Q=B.cache,e=B.serializedArr;return $y(function(){for(var t=0;t<e.length;t++)aI(Q,e[t],!1)}),null},xH=Zi(function(A,B){var Q=!1,e=[],t=function(){for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=vi(r,B.registered);return e.push(o),rI(B,o,!1),B.key+"-"+o.name},g=function(){for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return TH(B.registered,t,WH(r))},n={css:t,cx:g,theme:b.useContext(nt)},E=A.children(n);return Q=!0,b.createElement(b.Fragment,null,b.createElement(VH,{cache:B,serializedArr:e}),E)});const zH=Object.freeze(Object.defineProperty({__proto__:null,CacheProvider:pH,ClassNames:xH,Global:HH,ThemeContext:nt,ThemeProvider:kH,__unsafe_useEmotionCache:yH,createElement:NM,css:AN,jsx:NM,keyframes:OH,useTheme:NH,withEmotionCache:Zi,withTheme:vH},Symbol.toStringTag,{value:"Module"}));var PH=b1,jH=function(B){return B!=="theme"},JM=function(B){return typeof B=="string"&&B.charCodeAt(0)>96?PH:jH},kM=function(B,Q,e){var t;if(Q){var g=Q.shouldForwardProp;t=B.__emotion_forwardProp&&g?function(n){return B.__emotion_forwardProp(n)&&g(n)}:g}return typeof t!="function"&&e&&(t=B.__emotion_forwardProp),t},KH=At["useInsertionEffect"]?At["useInsertionEffect"]:function(B){B()};function qH(A){KH(A)}var _H=function(B){var Q=B.cache,e=B.serialized,t=B.isStringTag;return rI(Q,e,t),qH(function(){return aI(Q,e,t)}),null},$H=function A(B,Q){var e=B.__emotion_real===B,t=e&&B.__emotion_base||B,g,n;Q!==void 0&&(g=Q.label,n=Q.target);var E=kM(B,Q,e),C=E||JM(t),i=!C("as");return function(){var r=arguments,a=e&&B.__emotion_styles!==void 0?B.__emotion_styles.slice(0):[];if(g!==void 0&&a.push("label:"+g+";"),r[0]==null||r[0].raw===void 0)a.push.apply(a,r);else{a.push(r[0][0]);for(var o=r.length,l=1;l<o;l++)a.push(r[l],r[0][l])}var I=Zi(function(w,U,c){var D=i&&w.as||t,s="",u=[],f=w;if(w.theme==null){f={};for(var M in w)f[M]=w[M];f.theme=b.useContext(nt)}typeof w.className=="string"?s=ef(U.registered,u,w.className):w.className!=null&&(s=w.className+" ");var h=vi(a.concat(u),U.registered,f);s+=U.key+"-"+h.name,n!==void 0&&(s+=" "+n);var Y=i&&E===void 0?JM(D):C,m={};for(var L in w)i&&L==="as"||Y(L)&&(m[L]=w[L]);return m.className=s,m.ref=c,b.createElement(b.Fragment,null,b.createElement(_H,{cache:U,serialized:h,isStringTag:typeof D=="string"}),b.createElement(D,m))});return I.displayName=g!==void 0?g:"Styled("+(typeof t=="string"?t:t.displayName||t.name||"Component")+")",I.defaultProps=B.defaultProps,I.__emotion_real=I,I.__emotion_base=t,I.__emotion_styles=a,I.__emotion_forwardProp=E,Object.defineProperty(I,"toString",{value:function(){return"."+n}}),I.withComponent=function(w,U){return A(w,NA({},Q,U,{shouldForwardProp:kM(I,U,!0)})).apply(void 0,a)},I}},AO=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],HF=$H.bind();AO.forEach(function(A){HF[A]=HF(A)});const BO=Object.freeze(Object.defineProperty({__proto__:null,default:HF},Symbol.toStringTag,{value:"Module"})),oB=vg(BO);var sE={},QO=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},eO=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),tO=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),gO=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&eO(B,A,Q);return tO(B,A),B},nO=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(sE,"__esModule",{value:!0});var EO=nO(oB),vM=gO(b),CO=function(A){var B,Q;if(!A)return"";var e=(Q=(B=A==null?void 0:A.split("."))===null||B===void 0?void 0:B.pop())===null||Q===void 0?void 0:Q.toLowerCase();return A.replace(".".concat(e),"/80h.".concat(e))},iO=EO.default.img(ZM||(ZM=QO([`
    object-fit: cover;
    width: 32px;
    height: 32px;
    margin-right: 8px;
`],[`
    object-fit: cover;
    width: 32px;
    height: 32px;
    margin-right: 8px;
`]))),rO=function(A){var B=A.user,Q=A.className,e=Q===void 0?"":Q,t=(0,vM.useRef)(Math.floor(Math.random()*5)+1),g=B.avatar_url?CO(B.avatar_url):"https://media.giphy.com/avatars/default".concat(t.current,".gif");return vM.default.createElement(iO,{src:g,className:e})};sE.default=rO;var ZM,nf={},Lg={},be={},Ef={};(function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.gifOverlayColor=A.dimColor=A.secondaryCTA=A.primaryCTADisabled=A.primaryCTA=A.deleteColor=A.errorColor=A.smsColor=A.redditColor=A.instagramColor=A.tumblrColor=A.pinterestColor=A.twitterColor=A.facebookColor=A.giphyPink=A.giphyIndigo=A.giphyLightBlue=A.giphyAqua=A.giphyYellow=A.giphyRed=A.giphyPurple=A.giphyGreen=A.giphyBlue=A.giphyWhite=A.giphyWhiteSmoke=A.giphyLightestGrey=A.giphyLightGrey=A.giphyLightCharcoal=A.giphyCharcoal=A.giphyDarkCharcoal=A.giphyDarkGrey=A.giphyDarkestGrey=A.giphyBlack=void 0,A.giphyBlack="#121212",A.giphyDarkestGrey="#212121",A.giphyDarkGrey="#2e2e2e",A.giphyDarkCharcoal="#3e3e3e",A.giphyCharcoal="#4a4a4a",A.giphyLightCharcoal="#5c5c5c",A.giphyLightGrey="#a6a6a6",A.giphyLightestGrey="#d8d8d8",A.giphyWhiteSmoke="#ececec",A.giphyWhite="#ffffff",A.giphyBlue="#00ccff",A.giphyGreen="#00ff99",A.giphyPurple="#9933ff",A.giphyRed="#ff6666",A.giphyYellow="#fff35c",A.giphyAqua="#00e6cc",A.giphyLightBlue="#3191ff",A.giphyIndigo="#6157ff",A.giphyPink="#e646b6",A.facebookColor="#3894fc",A.twitterColor="#00ccff",A.pinterestColor="#e54cb5",A.tumblrColor="#529ecc",A.instagramColor="#c23c8d",A.redditColor="#fc6669",A.smsColor="#00ff99",A.errorColor=A.giphyRed,A.deleteColor=A.giphyRed,A.primaryCTA=A.giphyIndigo,A.primaryCTADisabled="#241F74",A.secondaryCTA=A.giphyCharcoal,A.dimColor="rgba(0, 0, 0, 0.8)",A.gifOverlayColor="rgba(0, 0, 0, 0.4)"})(Ef);var Cf={};function aO(A){if(A.sheet)return A.sheet;for(var B=0;B<document.styleSheets.length;B++)if(document.styleSheets[B].ownerNode===A)return document.styleSheets[B]}function oO(A){var B=document.createElement("style");return B.setAttribute("data-emotion",A.key),A.nonce!==void 0&&B.setAttribute("nonce",A.nonce),B.appendChild(document.createTextNode("")),B}var IO=function(){function A(Q){this.isSpeedy=Q.speedy===void 0?!0:Q.speedy,this.tags=[],this.ctr=0,this.nonce=Q.nonce,this.key=Q.key,this.container=Q.container,this.before=null}var B=A.prototype;return B.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)===0){var t=oO(this),g;this.tags.length===0?g=this.before:g=this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(t,g),this.tags.push(t)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var E=aO(n);try{var C=e.charCodeAt(1)===105&&e.charCodeAt(0)===64;E.insertRule(e,C?0:E.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(e));this.ctr++},B.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},A}();function sO(A){function B(Z,T,O,eA,N){for(var $=0,z=0,nA=0,EA=0,IA,rA,QA=0,wA=0,BA,cA=BA=IA=0,oA=0,ZA=0,XA=0,HA=0,CQ=O.length,JB=CQ-1,MA,CA="",DA="",SA="",DQ="",vA;oA<CQ;){if(rA=O.charCodeAt(oA),oA===JB&&z+EA+nA+$!==0&&(z!==0&&(rA=z===47?10:47),EA=nA=$=0,CQ++,JB++),z+EA+nA+$===0){if(oA===JB&&(0<ZA&&(CA=CA.replace(o,"")),0<CA.trim().length)){switch(rA){case 32:case 9:case 59:case 13:case 10:break;default:CA+=O.charAt(oA)}rA=59}switch(rA){case 123:for(CA=CA.trim(),IA=CA.charCodeAt(0),BA=1,HA=++oA;oA<CQ;){switch(rA=O.charCodeAt(oA)){case 123:BA++;break;case 125:BA--;break;case 47:switch(rA=O.charCodeAt(oA+1)){case 42:case 47:A:{for(cA=oA+1;cA<JB;++cA)switch(O.charCodeAt(cA)){case 47:if(rA===42&&O.charCodeAt(cA-1)===42&&oA+2!==cA){oA=cA+1;break A}break;case 10:if(rA===47){oA=cA+1;break A}}oA=cA}}break;case 91:rA++;case 40:rA++;case 34:case 39:for(;oA++<JB&&O.charCodeAt(oA)!==rA;);}if(BA===0)break;oA++}switch(BA=O.substring(HA,oA),IA===0&&(IA=(CA=CA.replace(a,"").trim()).charCodeAt(0)),IA){case 64:switch(0<ZA&&(CA=CA.replace(o,"")),rA=CA.charCodeAt(1),rA){case 100:case 109:case 115:case 45:ZA=T;break;default:ZA=q}if(BA=B(T,ZA,BA,rA,N+1),HA=BA.length,0<G&&(ZA=Q(q,CA,XA),vA=E(3,BA,ZA,T,K,W,HA,rA,N,eA),CA=ZA.join(""),vA!==void 0&&(HA=(BA=vA.trim()).length)===0&&(rA=0,BA="")),0<HA)switch(rA){case 115:CA=CA.replace(M,n);case 100:case 109:case 45:BA=CA+"{"+BA+"}";break;case 107:CA=CA.replace(D,"$1 $2"),BA=CA+"{"+BA+"}",BA=J===1||J===2&&g("@"+BA,3)?"@-webkit-"+BA+"@"+BA:"@"+BA;break;default:BA=CA+BA,eA===112&&(BA=(DA+=BA,""))}else BA="";break;default:BA=B(T,Q(T,CA,XA),BA,eA,N+1)}SA+=BA,BA=XA=ZA=cA=IA=0,CA="",rA=O.charCodeAt(++oA);break;case 125:case 59:if(CA=(0<ZA?CA.replace(o,""):CA).trim(),1<(HA=CA.length))switch(cA===0&&(IA=CA.charCodeAt(0),IA===45||96<IA&&123>IA)&&(HA=(CA=CA.replace(" ",":")).length),0<G&&(vA=E(1,CA,T,Z,K,W,DA.length,eA,N,eA))!==void 0&&(HA=(CA=vA.trim()).length)===0&&(CA="\0\0"),IA=CA.charCodeAt(0),rA=CA.charCodeAt(1),IA){case 0:break;case 64:if(rA===105||rA===99){DQ+=CA+O.charAt(oA);break}default:CA.charCodeAt(HA-1)!==58&&(DA+=t(CA,IA,rA,CA.charCodeAt(2)))}XA=ZA=cA=IA=0,CA="",rA=O.charCodeAt(++oA)}}switch(rA){case 13:case 10:z===47?z=0:1+IA===0&&eA!==107&&0<CA.length&&(ZA=1,CA+="\0"),0<G*S&&E(0,CA,T,Z,K,W,DA.length,eA,N,eA),W=1,K++;break;case 59:case 125:if(z+EA+nA+$===0){W++;break}default:switch(W++,MA=O.charAt(oA),rA){case 9:case 32:if(EA+$+z===0)switch(QA){case 44:case 58:case 9:case 32:MA="";break;default:rA!==32&&(MA=" ")}break;case 0:MA="\\0";break;case 12:MA="\\f";break;case 11:MA="\\v";break;case 38:EA+z+$===0&&(ZA=XA=1,MA="\f"+MA);break;case 108:if(EA+z+$+R===0&&0<cA)switch(oA-cA){case 2:QA===112&&O.charCodeAt(oA-3)===58&&(R=QA);case 8:wA===111&&(R=wA)}break;case 58:EA+z+$===0&&(cA=oA);break;case 44:z+nA+EA+$===0&&(ZA=1,MA+="\r");break;case 34:case 39:z===0&&(EA=EA===rA?0:EA===0?rA:EA);break;case 91:EA+z+nA===0&&$++;break;case 93:EA+z+nA===0&&$--;break;case 41:EA+z+$===0&&nA--;break;case 40:if(EA+z+$===0){if(IA===0)switch(2*QA+3*wA){case 533:break;default:IA=1}nA++}break;case 64:z+nA+EA+$+cA+BA===0&&(BA=1);break;case 42:case 47:if(!(0<EA+$+nA))switch(z){case 0:switch(2*rA+3*O.charCodeAt(oA+1)){case 235:z=47;break;case 220:HA=oA,z=42}break;case 42:rA===47&&QA===42&&HA+2!==oA&&(O.charCodeAt(HA+2)===33&&(DA+=O.substring(HA,oA+1)),MA="",z=0)}}z===0&&(CA+=MA)}wA=QA,QA=rA,oA++}if(HA=DA.length,0<HA){if(ZA=T,0<G&&(vA=E(2,DA,ZA,Z,K,W,HA,eA,N,eA),vA!==void 0&&(DA=vA).length===0))return DQ+DA+SA;if(DA=ZA.join(",")+"{"+DA+"}",J*R!==0){switch(J!==2||g(DA,2)||(R=0),R){case 111:DA=DA.replace(u,":-moz-$1")+DA;break;case 112:DA=DA.replace(s,"::-webkit-input-$1")+DA.replace(s,"::-moz-$1")+DA.replace(s,":-ms-input-$1")+DA}R=0}}return DQ+DA+SA}function Q(Z,T,O){var eA=T.trim().split(U);T=eA;var N=eA.length,$=Z.length;switch($){case 0:case 1:var z=0;for(Z=$===0?"":Z[0]+" ";z<N;++z)T[z]=e(Z,T[z],O).trim();break;default:var nA=z=0;for(T=[];z<N;++z)for(var EA=0;EA<$;++EA)T[nA++]=e(Z[EA]+" ",eA[z],O).trim()}return T}function e(Z,T,O){var eA=T.charCodeAt(0);switch(33>eA&&(eA=(T=T.trim()).charCodeAt(0)),eA){case 38:return T.replace(c,"$1"+Z.trim());case 58:return Z.trim()+T.replace(c,"$1"+Z.trim());default:if(0<1*O&&0<T.indexOf("\f"))return T.replace(c,(Z.charCodeAt(0)===58?"":"$1")+Z.trim())}return Z+T}function t(Z,T,O,eA){var N=Z+";",$=2*T+3*O+4*eA;if($===944){Z=N.indexOf(":",9)+1;var z=N.substring(Z,N.length-1).trim();return z=N.substring(0,Z).trim()+z+";",J===1||J===2&&g(z,1)?"-webkit-"+z+z:z}if(J===0||J===2&&!g(N,1))return N;switch($){case 1015:return N.charCodeAt(10)===97?"-webkit-"+N+N:N;case 951:return N.charCodeAt(3)===116?"-webkit-"+N+N:N;case 963:return N.charCodeAt(5)===110?"-webkit-"+N+N:N;case 1009:if(N.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+N+N;case 978:return"-webkit-"+N+"-moz-"+N+N;case 1019:case 983:return"-webkit-"+N+"-moz-"+N+"-ms-"+N+N;case 883:if(N.charCodeAt(8)===45)return"-webkit-"+N+N;if(0<N.indexOf("image-set(",11))return N.replace(X,"$1-webkit-$2")+N;break;case 932:if(N.charCodeAt(4)===45)switch(N.charCodeAt(5)){case 103:return"-webkit-box-"+N.replace("-grow","")+"-webkit-"+N+"-ms-"+N.replace("grow","positive")+N;case 115:return"-webkit-"+N+"-ms-"+N.replace("shrink","negative")+N;case 98:return"-webkit-"+N+"-ms-"+N.replace("basis","preferred-size")+N}return"-webkit-"+N+"-ms-"+N+N;case 964:return"-webkit-"+N+"-ms-flex-"+N+N;case 1023:if(N.charCodeAt(8)!==99)break;return z=N.substring(N.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+N+"-ms-flex-pack"+z+N;case 1005:return I.test(N)?N.replace(l,":-webkit-")+N.replace(l,":-moz-")+N:N;case 1e3:switch(z=N.substring(13).trim(),T=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt(T)){case 226:z=N.replace(f,"tb");break;case 232:z=N.replace(f,"tb-rl");break;case 220:z=N.replace(f,"lr");break;default:return N}return"-webkit-"+N+"-ms-"+z+N;case 1017:if(N.indexOf("sticky",9)===-1)break;case 975:switch(T=(N=Z).length-10,z=(N.charCodeAt(T)===33?N.substring(0,T):N).substring(Z.indexOf(":",7)+1).trim(),$=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:N=N.replace(z,"-webkit-"+z)+";"+N;break;case 207:case 102:N=N.replace(z,"-webkit-"+(102<$?"inline-":"")+"box")+";"+N.replace(z,"-webkit-"+z)+";"+N.replace(z,"-ms-"+z+"box")+";"+N}return N+";";case 938:if(N.charCodeAt(5)===45)switch(N.charCodeAt(6)){case 105:return z=N.replace("-items",""),"-webkit-"+N+"-webkit-box-"+z+"-ms-flex-"+z+N;case 115:return"-webkit-"+N+"-ms-flex-item-"+N.replace(Y,"")+N;default:return"-webkit-"+N+"-ms-flex-line-pack"+N.replace("align-content","").replace(Y,"")+N}break;case 973:case 989:if(N.charCodeAt(3)!==45||N.charCodeAt(4)===122)break;case 931:case 953:if(L.test(Z)===!0)return(z=Z.substring(Z.indexOf(":")+1)).charCodeAt(0)===115?t(Z.replace("stretch","fill-available"),T,O,eA).replace(":fill-available",":stretch"):N.replace(z,"-webkit-"+z)+N.replace(z,"-moz-"+z.replace("fill-",""))+N;break;case 962:if(N="-webkit-"+N+(N.charCodeAt(5)===102?"-ms-"+N:"")+N,O+eA===211&&N.charCodeAt(13)===105&&0<N.indexOf("transform",10))return N.substring(0,N.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+N}return N}function g(Z,T){var O=Z.indexOf(T===1?":":"{"),eA=Z.substring(0,T!==3?O:10);return O=Z.substring(O+1,Z.length-1),v(T!==2?eA:eA.replace(m,"$1"),O,T)}function n(Z,T){var O=t(T,T.charCodeAt(0),T.charCodeAt(1),T.charCodeAt(2));return O!==T+";"?O.replace(h," or ($1)").substring(4):"("+T+")"}function E(Z,T,O,eA,N,$,z,nA,EA,IA){for(var rA=0,QA=T,wA;rA<G;++rA)switch(wA=y[rA].call(r,Z,QA,O,eA,N,$,z,nA,EA,IA)){case void 0:case!1:case!0:case null:break;default:QA=wA}if(QA!==T)return QA}function C(Z){switch(Z){case void 0:case null:G=y.length=0;break;default:if(typeof Z=="function")y[G++]=Z;else if(typeof Z=="object")for(var T=0,O=Z.length;T<O;++T)C(Z[T]);else S=!!Z|0}return C}function i(Z){return Z=Z.prefix,Z!==void 0&&(v=null,Z?typeof Z!="function"?J=1:(J=2,v=Z):J=0),i}function r(Z,T){var O=Z;if(33>O.charCodeAt(0)&&(O=O.trim()),k=O,O=[k],0<G){var eA=E(-1,T,O,O,K,W,0,0,0,0);eA!==void 0&&typeof eA=="string"&&(T=eA)}var N=B(q,O,T,0,0);return 0<G&&(eA=E(-2,N,O,O,K,W,N.length,0,0,0),eA!==void 0&&(N=eA)),k="",R=0,W=K=1,N}var a=/^\0+/g,o=/[\0\r\f]/g,l=/: */g,I=/zoo|gra/,w=/([,: ])(transform)/g,U=/,\r+?/g,c=/([\t\r\n ])*\f?&/g,D=/@(k\w+)\s*(\S*)\s*/,s=/::(place)/g,u=/:(read-only)/g,f=/[svh]\w+-[tblr]{2}/,M=/\(\s*(.*)\s*\)/g,h=/([\s\S]*?);/g,Y=/-self|flex-/g,m=/[^]*?(:[rp][el]a[\w-]+)[^]*/,L=/stretch|:\s*\w+\-(?:conte|avail)/,X=/([^-])(image-set\()/,W=1,K=1,R=0,J=1,q=[],y=[],G=0,v=null,S=0,k="";return r.use=C,r.set=i,A!==void 0&&i(A),r}var OF="/*|*/",cO=OF+"}";function lO(A){A&&to.current.insert(A+"}")}var to={current:null},wO=function(B,Q,e,t,g,n,E,C,i,r){switch(B){case 1:{switch(Q.charCodeAt(0)){case 64:return to.current.insert(Q+";"),"";case 108:if(Q.charCodeAt(2)===98)return""}break}case 2:{if(C===0)return Q+OF;break}case 3:switch(C){case 102:case 112:return to.current.insert(e[0]+Q),"";default:return Q+(r===0?OF:"")}case-2:Q.split(cO).forEach(lO)}},FO=function(B){B===void 0&&(B={});var Q=B.key||"css",e;B.prefix!==void 0&&(e={prefix:B.prefix});var t=new sO(e),g={},n;{n=B.container||document.head;var E=document.querySelectorAll("style[data-emotion-"+Q+"]");Array.prototype.forEach.call(E,function(r){var a=r.getAttribute("data-emotion-"+Q);a.split(" ").forEach(function(o){g[o]=!0}),r.parentNode!==n&&n.appendChild(r)})}var C;t.use(B.stylisPlugins)(wO),C=function(a,o,l,I){var w=o.name;to.current=l,t(a,o.styles),I&&(i.inserted[w]=!0)};var i={key:Q,sheet:new IO({key:Q,container:n,nonce:B.nonce,speedy:B.speedy}),nonce:B.nonce,inserted:g,registered:{},insert:C};return i};function DO(A){for(var B=0,Q,e=0,t=A.length;t>=4;++e,t-=4)Q=A.charCodeAt(e)&255|(A.charCodeAt(++e)&255)<<8|(A.charCodeAt(++e)&255)<<16|(A.charCodeAt(++e)&255)<<24,Q=(Q&65535)*1540483477+((Q>>>16)*59797<<16),Q^=Q>>>24,B=(Q&65535)*1540483477+((Q>>>16)*59797<<16)^(B&65535)*1540483477+((B>>>16)*59797<<16);switch(t){case 3:B^=(A.charCodeAt(e+2)&255)<<16;case 2:B^=(A.charCodeAt(e+1)&255)<<8;case 1:B^=A.charCodeAt(e)&255,B=(B&65535)*1540483477+((B>>>16)*59797<<16)}return B^=B>>>13,B=(B&65535)*1540483477+((B>>>16)*59797<<16),((B^B>>>15)>>>0).toString(36)}var uO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function fO(A){var B={};return function(Q){return B[Q]===void 0&&(B[Q]=A(Q)),B[Q]}}var UO=/[A-Z]|^ms/g,dO=/_EMO_([^_]+?)_([^]*?)_EMO_/g,BN=function(B){return B.charCodeAt(1)===45},SM=function(B){return B!=null&&typeof B!="boolean"},bl=fO(function(A){return BN(A)?A:A.replace(UO,"-$&").toLowerCase()}),LM=function(B,Q){switch(B){case"animation":case"animationName":if(typeof Q=="string")return Q.replace(dO,function(e,t,g){return de={name:t,styles:g,next:de},t})}return uO[B]!==1&&!BN(B)&&typeof Q=="number"&&Q!==0?Q+"px":Q};function ci(A,B,Q,e){if(Q==null)return"";if(Q.__emotion_styles!==void 0)return Q;switch(typeof Q){case"boolean":return"";case"object":{if(Q.anim===1)return de={name:Q.name,styles:Q.styles,next:de},Q.name;if(Q.styles!==void 0){var t=Q.next;if(t!==void 0)for(;t!==void 0;)de={name:t.name,styles:t.styles,next:de},t=t.next;var g=Q.styles+";";return g}return MO(A,B,Q)}case"function":{if(A!==void 0){var n=de,E=Q(A);return de=n,ci(A,B,E,e)}break}}if(B==null)return Q;var C=B[Q];return C!==void 0&&!e?C:Q}function MO(A,B,Q){var e="";if(Array.isArray(Q))for(var t=0;t<Q.length;t++)e+=ci(A,B,Q[t],!1);else for(var g in Q){var n=Q[g];if(typeof n!="object")B!=null&&B[n]!==void 0?e+=g+"{"+B[n]+"}":SM(n)&&(e+=bl(g)+":"+LM(g,n)+";");else if(Array.isArray(n)&&typeof n[0]=="string"&&(B==null||B[n[0]]===void 0))for(var E=0;E<n.length;E++)SM(n[E])&&(e+=bl(g)+":"+LM(g,n[E])+";");else{var C=ci(A,B,n,!1);switch(g){case"animation":case"animationName":{e+=bl(g)+":"+C+";";break}default:e+=g+"{"+C+"}"}}}return e}var XM=/label:\s*([^\s;\n{]+)\s*;/g,de,Jl=function(B,Q,e){if(B.length===1&&typeof B[0]=="object"&&B[0]!==null&&B[0].styles!==void 0)return B[0];var t=!0,g="";de=void 0;var n=B[0];n==null||n.raw===void 0?(t=!1,g+=ci(e,Q,n,!1)):g+=n[0];for(var E=1;E<B.length;E++)g+=ci(e,Q,B[E],g.charCodeAt(g.length-1)===46),t&&(g+=n[E]);XM.lastIndex=0;for(var C="",i;(i=XM.exec(g))!==null;)C+="-"+i[1];var r=DO(g)+C;return{name:r,styles:g,next:de}},hO=!0;function QN(A,B,Q){var e="";return Q.split(" ").forEach(function(t){A[t]!==void 0?B.push(A[t]):e+=t+" "}),e}var GO=function(B,Q,e){var t=B.key+"-"+Q.name;if((e===!1||hO===!1)&&B.registered[t]===void 0&&(B.registered[t]=Q.styles),B.inserted[Q.name]===void 0){var g=Q;do B.insert("."+t,g,B.sheet,!0),g=g.next;while(g!==void 0)}};function HM(A,B){if(A.inserted[B.name]===void 0)return A.insert("",B,A.sheet,!0)}function OM(A,B,Q){var e=[],t=QN(A,e,Q);return e.length<2?Q:t+B(e)}var RO=function(B){var Q=FO(B);Q.sheet.speedy=function(E){this.isSpeedy=E},Q.compat=!0;var e=function(){for(var C=arguments.length,i=new Array(C),r=0;r<C;r++)i[r]=arguments[r];var a=Jl(i,Q.registered,void 0);return GO(Q,a,!1),Q.key+"-"+a.name},t=function(){for(var C=arguments.length,i=new Array(C),r=0;r<C;r++)i[r]=arguments[r];var a=Jl(i,Q.registered),o="animation-"+a.name;return HM(Q,{name:a.name,styles:"@keyframes "+o+"{"+a.styles+"}"}),o},g=function(){for(var C=arguments.length,i=new Array(C),r=0;r<C;r++)i[r]=arguments[r];var a=Jl(i,Q.registered);HM(Q,a)},n=function(){for(var C=arguments.length,i=new Array(C),r=0;r<C;r++)i[r]=arguments[r];return OM(Q.registered,e,mO(i))};return{css:e,cx:n,injectGlobal:g,keyframes:t,hydrate:function(C){C.forEach(function(i){Q.inserted[i]=!0})},flush:function(){Q.registered={},Q.inserted={},Q.sheet.flush()},sheet:Q.sheet,cache:Q,getRegisteredStyles:QN.bind(null,Q.registered),merge:OM.bind(null,Q.registered,e)}},mO=function A(B){for(var Q="",e=0;e<B.length;e++){var t=B[e];if(t!=null){var g=void 0;switch(typeof t){case"boolean":break;case"object":{if(Array.isArray(t))g=A(t);else{g="";for(var n in t)t[n]&&n&&(g&&(g+=" "),g+=n)}break}default:g=t}g&&(Q&&(Q+=" "),Q+=g)}}return Q},Je=RO(),YO=Je.flush,pO=Je.hydrate,yO=Je.cx,NO=Je.merge,bO=Je.getRegisteredStyles,JO=Je.injectGlobal,kO=Je.keyframes,vO=Je.css,ZO=Je.sheet,SO=Je.cache;const LO=Object.freeze(Object.defineProperty({__proto__:null,cache:SO,css:vO,cx:yO,flush:YO,getRegisteredStyles:bO,hydrate:pO,injectGlobal:JO,keyframes:kO,merge:NO,sheet:ZO},Symbol.toStringTag,{value:"Module"})),eN=vg(LO);var tN=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A};Object.defineProperty(Cf,"__esModule",{value:!0});var gN=eN,gC=Ef,XO=(0,gN.keyframes)(TM||(TM=tN([`
     to {
    transform: scale(1.75) translateY(-20px);
  }
`],[`
     to {
    transform: scale(1.75) translateY(-20px);
  }
`]))),WM=37,HO=(0,gN.css)(VM||(VM=tN([`
    display: flex;
    align-items: center;
    height: `,`px;
    padding-top: 15px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    animation: pulse 0.8s ease-in-out 0s infinite alternate backwards;
    div {
        display: inline-block;
        height: 10px;
        width: 10px;
        margin: `,`px 10px 10px 10px;
        position: relative;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
        animation: `,` cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.75s infinite alternate;
        &:nth-child(5n + 1) {
            background: `,`;
            animation-delay: 0;
        }
        &:nth-child(5n + 2) {
            background: `,`;
            animation-delay: calc(0s + (0.1s * 1));
        }
        &:nth-child(5n + 3) {
            background: `,`;
            animation-delay: calc(0s + (0.1s * 2));
        }
        &:nth-child(5n + 4) {
            background: `,`;
            animation-delay: calc(0s + (0.1s * 3));
        }
        &:nth-child(5n + 5) {
            background: `,`;
            animation-delay: calc(0s + (0.1s * 4));
        }
    }
`],[`
    display: flex;
    align-items: center;
    height: `,`px;
    padding-top: 15px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    animation: pulse 0.8s ease-in-out 0s infinite alternate backwards;
    div {
        display: inline-block;
        height: 10px;
        width: 10px;
        margin: `,`px 10px 10px 10px;
        position: relative;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
        animation: `,` cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.75s infinite alternate;
        &:nth-child(5n + 1) {
            background: `,`;
            animation-delay: 0;
        }
        &:nth-child(5n + 2) {
            background: `,`;
            animation-delay: calc(0s + (0.1s * 1));
        }
        &:nth-child(5n + 3) {
            background: `,`;
            animation-delay: calc(0s + (0.1s * 2));
        }
        &:nth-child(5n + 4) {
            background: `,`;
            animation-delay: calc(0s + (0.1s * 3));
        }
        &:nth-child(5n + 5) {
            background: `,`;
            animation-delay: calc(0s + (0.1s * 4));
        }
    }
`])),WM,WM,XO,gC.giphyGreen,gC.giphyBlue,gC.giphyPurple,gC.giphyRed,gC.giphyYellow);Cf.default=HO;var TM,VM,nN={};(function(A){var B=d&&d.__makeTemplateObject||function(M,h){return Object.defineProperty?Object.defineProperty(M,"raw",{value:h}):M.raw=h,M};Object.defineProperty(A,"__esModule",{value:!0}),A.css=A.fontSize=A.fontFamily=A.addFonts=void 0;var Q=eN,e=function(){return(0,Q.injectGlobal)(l||(l=B([`
@font-face {
    font-family: 'interface';
    font-style: normal;
    font-weight: normal;
    src: url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_Rg.woff2') format('woff2'),
        url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_Rg.woff') format('woff');
}

@font-face {
    font-family: 'interface';
    font-style: normal;
    font-weight: bold;
    src: url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_Bd.woff2') format('woff2'),
        url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_Bd.woff') format('woff');
}
@font-face {
    font-family: 'interface';
    font-style: normal;
    font-weight: 900;
    src: url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_XBd.woff') format('woff');
}
@font-face {
    font-family: 'nexablack'; 
    font-style: normal;
    font-weight: normal;
    src: url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/nexa_black-webfont.woff2') format('woff2'),
        url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/nexa_black-webfont.woff') format('woff');
}
@font-face {
    font-family: 'SSStandard'; 
    font-style: normal;
    font-weight: normal;
    src:  url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/ss-standard.woff') format('woff');
}
@font-face {
    font-family: 'SSSocial'; 
    font-style: normal;
    font-weight: normal;
    src:  url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/ss-social.woff') format('woff');
}
`],[`
@font-face {
    font-family: 'interface';
    font-style: normal;
    font-weight: normal;
    src: url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_Rg.woff2') format('woff2'),
        url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_Rg.woff') format('woff');
}

@font-face {
    font-family: 'interface';
    font-style: normal;
    font-weight: bold;
    src: url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_Bd.woff2') format('woff2'),
        url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_Bd.woff') format('woff');
}
@font-face {
    font-family: 'interface';
    font-style: normal;
    font-weight: 900;
    src: url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/InterFace_W_XBd.woff') format('woff');
}
@font-face {
    font-family: 'nexablack'; 
    font-style: normal;
    font-weight: normal;
    src: url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/nexa_black-webfont.woff2') format('woff2'),
        url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/nexa_black-webfont.woff') format('woff');
}
@font-face {
    font-family: 'SSStandard'; 
    font-style: normal;
    font-weight: normal;
    src:  url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/ss-standard.woff') format('woff');
}
@font-face {
    font-family: 'SSSocial'; 
    font-style: normal;
    font-weight: normal;
    src:  url('https://s3.amazonaws.com/giphyscripts/react-giphy-brand/fonts/ss-social.woff') format('woff');
}
`])))};A.addFonts=e;try{({}).GIPHY_SDK_NO_FONTS||(0,A.addFonts)()}catch{(0,A.addFonts)()}A.fontFamily={title:"'nexablack', sans-serif",body:"interface, Helvetica Neue, helvetica, sans-serif;"},A.fontSize={titleSmall:"20px",title:"26px",titleLarge:"36px",subheader:"16px",subheaderSmall:"12px"};var t=(0,Q.css)(I||(I=B([`
    font-family: `,`;
    -webkit-font-smoothing: antialiased;
`],[`
    font-family: `,`;
    -webkit-font-smoothing: antialiased;
`])),A.fontFamily.title),g=(0,Q.cx)((0,Q.css)(w||(w=B([`
        font-size: `,`;
    `],[`
        font-size: `,`;
    `])),A.fontSize.title),t),n=(0,Q.cx)((0,Q.css)(U||(U=B([`
        font-size: `,`;
    `],[`
        font-size: `,`;
    `])),A.fontSize.titleLarge),t),E=(0,Q.cx)((0,Q.css)(c||(c=B([`
        font-size: `,`;
    `],[`
        font-size: `,`;
    `])),A.fontSize.titleSmall),t),C=(0,Q.css)(D||(D=B([`
    font-family: `,`;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
`],[`
    font-family: `,`;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
`])),A.fontFamily.body),i=(0,Q.cx)((0,Q.css)(s||(s=B([`
        font-size: `,`;
    `],[`
        font-size: `,`;
    `])),A.fontSize.subheader),C),r=(0,Q.cx)((0,Q.css)(u||(u=B([`
        font-size: `,`;
    `],[`
        font-size: `,`;
    `])),A.fontSize.subheaderSmall),C),a=(0,Q.css)(f||(f=B([`
    font-family: `,`;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
`],[`
    font-family: `,`;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
`])),A.fontFamily.body),o={sectionHeader:a,subheaderSmall:r,subheader:i,titleLarge:n,titleSmall:E,title:g};A.css=o;var l,I,w,U,c,D,s,u,f})(nN);(function(A){var B=d&&d.__createBinding||(Object.create?function(g,n,E,C){C===void 0&&(C=E);var i=Object.getOwnPropertyDescriptor(n,E);(!i||("get"in i?!n.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return n[E]}}),Object.defineProperty(g,C,i)}:function(g,n,E,C){C===void 0&&(C=E),g[C]=n[E]}),Q=d&&d.__exportStar||function(g,n){for(var E in g)E!=="default"&&!Object.prototype.hasOwnProperty.call(n,E)&&B(n,g,E)},e=d&&d.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(A,"__esModule",{value:!0}),A.loader=void 0,Q(Ef,A);var t=Cf;Object.defineProperty(A,"loader",{enumerable:!0,get:function(){return e(t).default}}),Q(nN,A)})(be);var OO=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Lg,"__esModule",{value:!0});var WO=be,ct=OO(b),li=function(A){var B=A.className,Q=B===void 0?"":B,e=A.size,t=e===void 0?17:e,g=A.fill,n=g===void 0?"#15CDFF":g;return ct.default.createElement("svg",{className:[li.className,Q].join(" "),height:t,width:"19px",viewBox:"0 0 19 17"},ct.default.createElement("path",{className:li.checkMarkClassName,d:"M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z",fill:WO.giphyBlack,transform:"translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "}),ct.default.createElement("g",{transform:"translate(-532.000000, -466.000000)",fill:n},ct.default.createElement("g",{transform:"translate(141.000000, 235.000000)"},ct.default.createElement("g",{transform:"translate(264.000000, 0.000000)"},ct.default.createElement("g",{transform:"translate(10.000000, 224.000000)"},ct.default.createElement("g",{transform:"translate(114.000000, 2.500000)"},ct.default.createElement("path",{d:"M15.112432,4.80769231 L16.8814194,6.87556817 L19.4157673,7.90116318 L19.6184416,10.6028916 L21.0594951,12.9065042 L19.6184416,15.2101168 L19.4157673,17.9118452 L16.8814194,18.9374402 L15.112432,21.0053161 L12.4528245,20.3611511 L9.79321699,21.0053161 L8.02422954,18.9374402 L5.48988167,17.9118452 L5.28720734,15.2101168 L3.84615385,12.9065042 L5.28720734,10.6028916 L5.48988167,7.90116318 L8.02422954,6.87556817 L9.79321699,4.80769231 L12.4528245,5.4518573 L15.112432,4.80769231 Z M17.8163503,10.8991009 L15.9282384,9.01098901 L11.5681538,13.3696923 L9.68115218,11.4818515 L7.81302031,13.3499833 L9.7011322,15.2380952 L11.5892441,17.1262071 L17.8163503,10.8991009 Z"})))))))};li.className="giphy-verified-badge";li.checkMarkClassName="giphy-verified-checkmark";Lg.default=li;(function(A){var B=d&&d.__makeTemplateObject||function(o,l){return Object.defineProperty?Object.defineProperty(o,"raw",{value:l}):o.raw=l,o},Q=d&&d.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(A,"__esModule",{value:!0}),A.Username=void 0;var e=Q(oB),t=Q(b),g=Q(Lg);A.Username=e.default.div(i||(i=B([`
    color: white;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
`],[`
    color: white;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
`])));var n=(0,e.default)(g.default)(r||(r=B([`
    margin-left: 4px;
    flex-shrink: 0;
`],[`
    margin-left: 4px;
    flex-shrink: 0;
`]))),E=e.default.div(a||(a=B([`
    display: flex;
    align-items: center;
    min-width: 0;
`],[`
    display: flex;
    align-items: center;
    min-width: 0;
`]))),C=function(o){var l=o.user,I=l.display_name,w=l.username;return t.default.createElement(E,null,t.default.createElement(A.Username,null,I||"@".concat(w)),l.is_verified?t.default.createElement(n,{size:14}):null)};A.default=C;var i,r,a})(nf);var EN=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},oI=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Ko,"__esModule",{value:!0});var CN=oI(oB),kl=oI(b),TO=oI(sE),VO=oI(nf),xO=CN.default.div(xM||(xM=EN([`
    display: flex;
    align-items: center;
    font-family: interface, helvetica, arial;
`],[`
    display: flex;
    align-items: center;
    font-family: interface, helvetica, arial;
`]))),zO=(0,CN.default)(TO.default)(zM||(zM=EN([`
    flex-shrink: 0;
`],[`
    flex-shrink: 0;
`]))),rf=function(A){var B=A.gif,Q=A.className,e=A.onClick,t=B.user;return!(t!=null&&t.username)&&!(t!=null&&t.display_name)?null:kl.default.createElement(xO,{className:[rf.className,Q].join(" "),onClick:function(g){if(g.preventDefault(),g.stopPropagation(),e)e(B);else{var n=t.profile_url;n&&window.open(n,"_blank")}}},kl.default.createElement(zO,{user:t}),kl.default.createElement(VO.default,{user:B.user}))};rf.className="giphy-attribution";Ko.default=rf;var xM,zM,II={},af=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},PO=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),jO=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),KO=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&PO(B,A,Q);return jO(B,A),B},iN=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(II,"__esModule",{value:!0});var of=iN(oB),Vr=KO(b),qO=iN(Ko),_O=of.default.div(PM||(PM=af([`
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
    cursor: default;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;
    pointer-events: none;
`],[`
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
    cursor: default;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;
    pointer-events: none;
`]))),$O=(0,of.default)(qO.default)(jM||(jM=af([`
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
`],[`
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
`]))),AW=of.default.div(KM||(KM=af([`
    transition: opacity 150ms ease-in;
`],[`
    transition: opacity 150ms ease-in;
`]))),BW=function(A){var B=A.gif,Q=A.isHovered,e=A.onClick,t=(0,Vr.useRef)(Q);return Q&&(t.current=!0),B.user&&t.current?Vr.default.createElement(AW,{style:{opacity:Q?1:0}},Vr.default.createElement(_O,null),Vr.default.createElement($O,{gif:B,onClick:e})):null};II.default=BW;var PM,jM,KM,If={},cE={};Object.defineProperty(cE,"__esModule",{value:!0});function WF(A,B,Q,e){var t,g=!1,n=0;function E(){t&&clearTimeout(t)}function C(){E(),g=!0}typeof B!="boolean"&&(e=Q,Q=B,B=void 0);function i(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];var l=this,I=Date.now()-n;if(g)return;function w(){n=Date.now(),Q.apply(l,a)}function U(){t=void 0}e&&!t&&w(),E(),e===void 0&&I>A?w():B!==!0&&(t=setTimeout(e?U:w,e===void 0?A-I:A))}return i.cancel=C,i}function QW(A,B,Q){return Q===void 0?WF(A,B,!1):WF(A,Q,B!==!1)}cE.debounce=QW;cE.throttle=WF;var sI={},eW=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),tW=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),gW=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&eW(B,A,Q);return tW(B,A),B};Object.defineProperty(sI,"__esModule",{value:!0});var vl=gW(b),nW=function(A){var B=A.children,Q=A.className,e=A.onVisibleChange,t=A.config,g=(0,vl.useRef)(null);return(0,vl.useEffect)(function(){var n;return g.current&&(n=new IntersectionObserver(function(E){var C=E[0];e&&e(C.isIntersecting)},t),n.observe(g.current)),function(){return n==null?void 0:n.disconnect()}},[e,g,t]),vl.default.createElement("div",{ref:g,className:Q},B)};sI.default=nW;var Si={};const $t=vg(zH);var Lt={},cI={},sf={},wg=d&&d.__assign||function(){return wg=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},wg.apply(this,arguments)};Object.defineProperty(sf,"__esModule",{value:!0});var qM=EQ,EW=function(A,B,Q){var e,t=(0,qM.pick)(A,[Q]),g=(0,qM.pick)(B,[Q]);return t[Q]&&g[Q]?wg(wg(wg({},A),B),(e={},e[Q]=t[Q]+", "+g[Q],e)):wg(wg({},A),B)};sf.default=EW;var cf={},lI={};Object.defineProperty(lI,"__esModule",{value:!0});lI.default=(typeof window<"u"?window:d)||{};var wI={},CW=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(wI,"__esModule",{value:!0});wI.sendPingback=void 0;var Zl=EQ,Sl=CW(lI),iW=(Sl.default===null||Sl.default===void 0?void 0:Sl.default.GIPHY_PINGBACK_URL)||"https://pingback.giphy.com",rW="".concat(iW,"/v2/pingback?apikey=l0HlIwPWyBBUDAUgM"),aW=function(A){var B=(0,Zl.getGiphySDKRequestHeaders)();return B==null||B.set("Content-Type","application/json"),Zl.Logger.debug("Pingback session",A),A.length?fetch(rW,{method:"POST",body:JSON.stringify({events:A}),headers:B}).catch(function(Q){Zl.Logger.warn("pingbacks failing to post ".concat(Q))}):new Promise(function(Q){return Q()})};wI.sendPingback=aW;var oW=d&&d.__spreadArray||function(A,B,Q){if(Q||arguments.length===2)for(var e=0,t=B.length,g;e<t;e++)(g||!(e in B))&&(g||(g=Array.prototype.slice.call(B,0,e)),g[e]=B[e]);return A.concat(g||Array.prototype.slice.call(B))},IW=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}},Ll;Object.defineProperty(cf,"__esModule",{value:!0});var TF=EQ,sW=cE,VF=IW(lI),cW=wI,xF=[];VF.default.giphyRandomId=(0,TF.getPingbackId)();var xr="";function lf(){var A=oW([],xF,!0);xF=[],(0,cW.sendPingback)(A)}var lW=(0,sW.debounce)(1e3,lf);(Ll=VF.default.addEventListener)===null||Ll===void 0||Ll.call(VF.default,"beforeunload",lf);var wW=function(A){var B=A.userId,Q=A.eventType,e=A.actionType,t=A.attributes,g=A.queueEvents,n=g===void 0?!0:g,E=A.analyticsResponsePayload;xr=B?String(B):xr;var C={ts:Date.now(),attributes:t,action_type:e,user_id:(0,TF.getPingbackId)(),analytics_response_payload:E};xr&&(C.logged_in_user_id=xr),C.analytics_response_payload&&(C.analytics_response_payload="".concat(C.analytics_response_payload).concat(TF.Logger.ENABLED?"&mode=verification":"")),Q&&(C.event_type=Q),xF.push(C),n?lW():lf()};cf.default=wW;var rN={};Object.defineProperty(rN,"__esModule",{value:!0});(function(A){var B=d&&d.__createBinding||(Object.create?function(n,E,C,i){i===void 0&&(i=C);var r=Object.getOwnPropertyDescriptor(E,C);(!r||("get"in r?!E.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return E[C]}}),Object.defineProperty(n,i,r)}:function(n,E,C,i){i===void 0&&(i=C),n[i]=E[C]}),Q=d&&d.__exportStar||function(n,E){for(var C in n)C!=="default"&&!Object.prototype.hasOwnProperty.call(E,C)&&B(E,n,C)},e=d&&d.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(A,"__esModule",{value:!0}),A.pingback=A.mergeAttributes=void 0;var t=sf;Object.defineProperty(A,"mergeAttributes",{enumerable:!0,get:function(){return e(t).default}});var g=cf;Object.defineProperty(A,"pingback",{enumerable:!0,get:function(){return e(g).default}}),Q(rN,A)})(cI);var go=d&&d.__assign||function(){return go=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},go.apply(this,arguments)};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.onGifHover=Lt.onGifClick=Lt.onGifSeen=void 0;var aN=cI,FW=EQ,oN=function(A){return function(B,Q,e,t){t===void 0&&(t={}),B.analytics_response_payload&&(0,aN.pingback)({analyticsResponsePayload:B.analytics_response_payload,userId:Q,actionType:A,attributes:go({position:JSON.stringify((0,FW.getClientRect)(e))},t)})}},DW=function(A,B,Q,e){e===void 0&&(e={}),A.analytics_response_payload&&(0,aN.pingback)({analyticsResponsePayload:A.analytics_response_payload,userId:B,actionType:"SEEN",attributes:go({position:JSON.stringify(Q)},e)})};Lt.onGifSeen=DW;Lt.onGifClick=oN("CLICK");Lt.onGifHover=oN("HOVER");var lE={};(function(A){var B=d&&d.__createBinding||(Object.create?function(E,C,i,r){r===void 0&&(r=i);var a=Object.getOwnPropertyDescriptor(C,i);(!a||("get"in a?!C.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return C[i]}}),Object.defineProperty(E,r,a)}:function(E,C,i,r){r===void 0&&(r=i),E[r]=C[i]}),Q=d&&d.__setModuleDefault||(Object.create?function(E,C){Object.defineProperty(E,"default",{enumerable:!0,value:C})}:function(E,C){E.default=C}),e=d&&d.__importStar||function(E){if(E&&E.__esModule)return E;var C={};if(E!=null)for(var i in E)i!=="default"&&Object.prototype.hasOwnProperty.call(E,i)&&B(C,E,i);return Q(C,E),C};Object.defineProperty(A,"__esModule",{value:!0}),A.PingbackContext=void 0;var t=cI,g=e(b);A.PingbackContext=(0,g.createContext)({});var n=function(E){var C=E.attributes,i=E.children,r=(0,g.useContext)(A.PingbackContext).attributes,a=r===void 0?{}:r;return g.default.createElement(A.PingbackContext.Provider,{value:{attributes:(0,t.mergeAttributes)(a,C,"layout_type")}},i)};A.default=n})(lE);(function(A){var B=d&&d.__makeTemplateObject||function(X,W){return Object.defineProperty?Object.defineProperty(X,"raw",{value:W}):X.raw=W,X},Q=d&&d.__assign||function(){return Q=Object.assign||function(X){for(var W,K=1,R=arguments.length;K<R;K++){W=arguments[K];for(var J in W)Object.prototype.hasOwnProperty.call(W,J)&&(X[J]=W[J])}return X},Q.apply(this,arguments)},e=d&&d.__createBinding||(Object.create?function(X,W,K,R){R===void 0&&(R=K);var J=Object.getOwnPropertyDescriptor(W,K);(!J||("get"in J?!W.__esModule:J.writable||J.configurable))&&(J={enumerable:!0,get:function(){return W[K]}}),Object.defineProperty(X,R,J)}:function(X,W,K,R){R===void 0&&(R=K),X[R]=W[K]}),t=d&&d.__setModuleDefault||(Object.create?function(X,W){Object.defineProperty(X,"default",{enumerable:!0,value:W})}:function(X,W){X.default=W}),g=d&&d.__importStar||function(X){if(X&&X.__esModule)return X;var W={};if(X!=null)for(var K in X)K!=="default"&&Object.prototype.hasOwnProperty.call(X,K)&&e(W,X,K);return t(W,X),W},n=d&&d.__importDefault||function(X){return X&&X.__esModule?X:{default:X}};Object.defineProperty(A,"__esModule",{value:!0}),A.getColor=A.GRID_COLORS=void 0;var E=$t,C=n(oB),i=be,r=EQ,a=g(b),o=g(Lt),l=n(II),I=n(Lg),w=lE,U=C.default.div(L||(L=B([`
    display: block;
    &:focus {
        outline: unset;
    }
    `,`
    img {
        display: block;
    }
    .`,` {
        g {
            fill: white;
        }
    }
    .`,` {
        opacity: 0;
    }
`],[`
    display: block;
    &:focus {
        outline: unset;
    }
    `,`
    img {
        display: block;
    }
    .`,` {
        g {
            fill: white;
        }
    }
    .`,` {
        opacity: 0;
    }
`])),function(X){return X.borderRadius&&(0,E.css)(m||(m=B([`
            border-radius: `,`px;
            overflow: hidden;
        `],[`
            border-radius: `,`px;
            overflow: hidden;
        `])),X.borderRadius)},I.default.className,I.default.checkMarkClassName);A.GRID_COLORS=[i.giphyBlue,i.giphyGreen,i.giphyPurple,i.giphyRed,i.giphyYellow];var c=function(){return A.GRID_COLORS[Math.round(Math.random()*(A.GRID_COLORS.length-1))]};A.getColor=c;var D=200,s=function(X){return a.default.createElement(U,Q({as:X.href?"a":"div"},X))},u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",f=!!(typeof window<"u"&&window.document&&window.document.createElement),M=function(){},h=function(X){var W=X.children,K=(0,a.useState)(!1),R=K[0],J=K[1];return(0,a.useEffect)(function(){J(!0)},[]),R?a.default.createElement(a.default.Fragment,null,W):null},Y=function(X){var W=X.gif,K=X.width,R=X.height,J=X.onGifRightClick,q=J===void 0?M:J,y=X.className,G=y===void 0?"":y,v=X.onGifClick,S=v===void 0?M:v,k=X.onGifKeyPress,Z=k===void 0?M:k,T=X.onGifSeen,O=T===void 0?M:T,eA=X.onGifVisible,N=eA===void 0?M:eA,$=X.user,z=$===void 0?{}:$,nA=X.backgroundColor,EA=X.overlay,IA=X.hideAttribution,rA=IA===void 0?!1:IA,QA=X.noLink,wA=QA===void 0?!1:QA,BA=X.borderRadius,cA=BA===void 0?4:BA,oA=X.style,ZA=X.tabIndex,XA=(0,a.useState)(!1),HA=XA[0],CQ=XA[1],JB=(0,a.useState)(!1),MA=JB[0],CA=JB[1],DA=(0,a.useState)(!f),SA=DA[0],DQ=DA[1],vA=(0,a.useState)(""),iQ=vA[0],ne=vA[1],Wg=(0,a.useRef)((0,A.getColor)()),rt=(0,a.useRef)(null),mE=(0,a.useRef)(null),uQ=(0,a.useRef)(),hB=(0,a.useRef)(),xQ=(0,a.useRef)(),Tg=(0,a.useRef)(M),ve=(0,a.useContext)(w.PingbackContext).attributes,NQ=EA;!NQ&&!rA&&(NQ=l.default);var YE=function(OA){clearTimeout(xQ.current),OA.persist(),CA(!0),xQ.current=window.setTimeout(function(){o.onGifHover(W,z==null?void 0:z.id,OA.target,ve)},D)},pE=function(){clearTimeout(xQ.current),CA(!1)},yE=function(OA){o.onGifClick(W,z==null?void 0:z.id,OA.target,ve),S(W,OA)},NE=function(OA){Z(W,OA)};Tg.current=function(OA){CQ(!0),r.Logger.debug("GIF ".concat(W.id," seen. ").concat(W.title)),o.onGifSeen(W,z==null?void 0:z.id,OA.boundingClientRect,ve),O==null||O(W,OA.boundingClientRect),hB.current&&hB.current.disconnect()};var Vg=function(){hB.current||(hB.current=new IntersectionObserver(function(OA){var Ce=OA[0];Ce.isIntersecting&&Tg.current(Ce)},{threshold:[.99]})),!HA&&rt.current&&hB.current&&hB.current.observe(rt.current)},KI=function(OA){Vg(),N(W,OA),ne(Y.imgLoadedClassName)};(0,a.useEffect)(function(){var OA,Ce;!((OA=mE.current)===null||OA===void 0)&&OA.complete&&(Vg(),N(W)),(Ce=hB.current)===null||Ce===void 0||Ce.disconnect(),CQ(!1)},[W.id]),(0,a.useEffect)(function(){return uQ.current=new IntersectionObserver(function(OA){var Ce=OA[0],tr=Ce.isIntersecting;DQ(tr),!tr&&hB.current&&hB.current.disconnect()}),uQ.current.observe(rt.current),function(){uQ.current&&uQ.current.disconnect(),hB.current&&hB.current.disconnect(),xQ.current&&clearTimeout(xQ.current)}},[]);var Ee=R||(0,r.getGifHeight)(W,K),Qr=(0,r.getBestRendition)(W.images,K,Ee),at=W.images[Qr.renditionName],er=nA||(W.is_sticker?"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4AQMAAACSSKldAAAABlBMVEUhIiIWFhYoSqvJAAAAGElEQVQY02MAAv7///8PWxqIPwDZw5UGABtgwz2xhFKxAAAAAElFTkSuQmCC') 0 0":Wg.current);return a.default.createElement(s,{href:wA?void 0:W.url,"data-giphy-id":W.id,"data-giphy-is-sticker":W.is_sticker,style:Q({width:K,height:Ee},oA),borderRadius:cA,className:[Y.className,G].join(" "),onMouseOver:YE,onMouseLeave:pE,onClick:yE,onContextMenu:function(OA){return q(W,OA)},onKeyPress:NE,tabIndex:ZA},a.default.createElement("div",{style:{width:K,height:Ee,position:"relative"},ref:rt},a.default.createElement("picture",null,a.default.createElement("source",{type:"image/webp",srcSet:SA?at.webp:u,suppressHydrationWarning:!0}),a.default.createElement("img",{ref:mE,suppressHydrationWarning:!0,className:[Y.imgClassName,iQ].join(" "),src:SA?at.url:u,style:{background:er},width:K,height:Ee,alt:(0,r.getAltText)(W),onLoad:SA?KI:function(){}})),NQ&&a.default.createElement(h,null,SA&&a.default.createElement(NQ,{gif:W,isHovered:MA,width:K,height:Ee}))))};Y.className="giphy-gif",Y.imgClassName="giphy-gif-img",Y.imgLoadedClassName="giphy-img-loaded",A.default=Y;var m,L})(Si);var FI=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},uW=d&&d.__extends||function(){var A=function(B,Q){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&(e[g]=t[g])},A(B,Q)};return function(B,Q){if(typeof Q!="function"&&Q!==null)throw new TypeError("Class extends value "+String(Q)+" is not a constructor or null");A(B,Q);function e(){this.constructor=B}B.prototype=Q===null?Object.create(Q):(e.prototype=Q.prototype,new e)}}(),no=d&&d.__assign||function(){return no=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},no.apply(this,arguments)},fW=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),UW=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),dW=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&fW(B,A,Q);return UW(B,A),B},MW=d&&d.__awaiter||function(A,B,Q,e){function t(g){return g instanceof Q?g:new Q(function(n){n(g)})}return new(Q||(Q=Promise))(function(g,n){function E(r){try{i(e.next(r))}catch(a){n(a)}}function C(r){try{i(e.throw(r))}catch(a){n(a)}}function i(r){r.done?g(r.value):t(r.value).then(E,C)}i((e=e.apply(A,B||[])).next())})},hW=d&&d.__generator||function(A,B){var Q={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},e,t,g,n;return n={next:E(0),throw:E(1),return:E(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function E(i){return function(r){return C([i,r])}}function C(i){if(e)throw new TypeError("Generator is already executing.");for(;n&&(n=0,i[0]&&(Q=0)),Q;)try{if(e=1,t&&(g=i[0]&2?t.return:i[0]?t.throw||((g=t.return)&&g.call(t),0):t.next)&&!(g=g.call(t,i[1])).done)return g;switch(t=0,g&&(i=[i[0]&2,g.value]),i[0]){case 0:case 1:g=i;break;case 4:return Q.label++,{value:i[1],done:!1};case 5:Q.label++,t=i[1],i=[0];continue;case 7:i=Q.ops.pop(),Q.trys.pop();continue;default:if(g=Q.trys,!(g=g.length>0&&g[g.length-1])&&(i[0]===6||i[0]===2)){Q=0;continue}if(i[0]===3&&(!g||i[1]>g[0]&&i[1]<g[3])){Q.label=i[1];break}if(i[0]===6&&Q.label<g[1]){Q.label=g[1],g=i;break}if(g&&Q.label<g[2]){Q.label=g[2],Q.ops.push(i);break}g[2]&&Q.ops.pop(),Q.trys.pop();continue}i=B.call(A,Q)}catch(r){i=[6,r],t=0}finally{e=g=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},DI=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(If,"__esModule",{value:!0});var uI=DI(oB),GW=rE,RW=EQ,gn=dW(b),mW=cE,YW=DI(sI),_M=DI(Si),pW=DI(lE),yW=uI.default.div($M||($M=FI([`
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
`],[`
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
`]))),NW=(0,uI.default)(_M.default)(Ah||(Ah=FI([`
    position: relative;
    display: inline-block;
    list-style: none;
    margin-left: `,`px;
    /* make sure gifs are fully visible with a scrollbar */
    margin-bottom: 1px;

    &:first-of-type {
        margin-left: 0;
    }
    .`,` {
        position: absolute;
        top: 0;
        left: 0;
    }
`],[`
    position: relative;
    display: inline-block;
    list-style: none;
    margin-left: `,`px;
    /* make sure gifs are fully visible with a scrollbar */
    margin-bottom: 1px;

    &:first-of-type {
        margin-left: 0;
    }
    .`,` {
        position: absolute;
        top: 0;
        left: 0;
    }
`])),function(A){return A.ml},_M.default.imgClassName),bW=(0,uI.default)(YW.default)(Bh||(Bh=FI([`
    display: inline-block;
`],[`
    display: inline-block;
`]))),JW=uI.default.div(Qh||(Qh=FI([`
    width: 30px;
    display: inline-block;
    opacity: `,`;
    height: `,`px;
`],[`
    width: 30px;
    display: inline-block;
    opacity: `,`;
    height: `,`px;
`])),function(A){return A.isFirstLoad?0:1},function(A){return A.height}),kW=Object.freeze({gutter:6,user:{},initialGifs:[]}),vW=Object.freeze({isFetching:!1,gifs:[],isLoaderVisible:!1,isDoneFetching:!1}),ZW=function(A){uW(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.state=no(no({},vW),{gifs:Q.props.initialGifs||[]}),Q.unmounted=!1,Q.paginator=(0,GW.gifPaginator)(Q.props.fetchGifs,Q.state.gifs),Q.onLoaderVisible=function(e){Q.unmounted||Q.setState({isLoaderVisible:e},Q.onFetch)},Q.onFetch=(0,mW.debounce)(100,function(){return MW(Q,void 0,void 0,function(){var e,t,g,n,E,C;return hW(this,function(i){switch(i.label){case 0:if(this.unmounted)return[2];if(e=this.state,t=e.isFetching,g=e.isLoaderVisible,n=e.gifs,!(!t&&g))return[3,5];this.setState({isFetching:!0}),E=void 0,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.paginator()];case 2:return E=i.sent(),[3,4];case 3:return i.sent(),this.setState({isFetching:!1}),[3,4];case 4:E&&(n.length===E.length?this.setState({isDoneFetching:!0}):(this.setState({gifs:E,isFetching:!1}),C=this.props.onGifsFetched,C&&C(E),this.onFetch())),i.label=5;case 5:return[2]}})})}),Q}return B.prototype.componentDidMount=function(){this.unmounted=!1,this.onFetch()},B.prototype.componentWillUnmount=function(){this.unmounted=!0},B.prototype.render=function(){var Q=this.props,e=Q.onGifVisible,t=Q.onGifRightClick,g=Q.gifHeight,n=Q.gifWidth,E=Q.gutter,C=Q.className,i=C===void 0?B.className:C,r=Q.onGifSeen,a=Q.onGifClick,o=Q.onGifKeyPress,l=Q.user,I=Q.overlay,w=Q.hideAttribution,U=Q.noLink,c=Q.noResultsMessage,D=Q.backgroundColor,s=Q.borderRadius,u=Q.tabIndex,f=u===void 0?0:u,M=Q.loaderConfig,h=this.state,Y=h.gifs,m=h.isDoneFetching,L=!m,X=Y.length===0;return gn.default.createElement(pW.default,{attributes:{layout_type:"CAROUSEL"}},gn.default.createElement(yW,{className:i},Y.map(function(W){return gn.default.createElement(NW,{gif:W,key:W.id,tabIndex:f,width:n||(0,RW.getGifWidth)(W,g),height:g,onGifClick:a,onGifKeyPress:o,onGifSeen:r,onGifVisible:e,onGifRightClick:t,user:l,ml:E,overlay:I,hideAttribution:w,noLink:U,borderRadius:s,backgroundColor:D})}),!L&&Y.length===0&&c,L&&gn.default.createElement(bW,{onVisibleChange:this.onLoaderVisible,config:M},gn.default.createElement(JW,{isFirstLoad:X,height:g}))))},B.className="giphy-carousel",B.defaultProps=kW,B}(gn.PureComponent);If.default=ZW;var $M,Ah,Bh,Qh,wf={},fI={},SW=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},IN=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(fI,"__esModule",{value:!0});var LW=IN(oB),Xl=be,eh=IN(b),XW=LW.default.div(th||(th=SW([`
    color: `,`;
    display: flex;
    justify-content: center;
    margin: 30px 0;
    font-family: `,`;
    font-size: 16px;
    font-weight: 600;
    a {
        color: `,`;
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
`],[`
    color: `,`;
    display: flex;
    justify-content: center;
    margin: 30px 0;
    font-family: `,`;
    font-size: 16px;
    font-weight: 600;
    a {
        color: `,`;
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
`])),Xl.giphyLightGrey,Xl.fontFamily.body,Xl.giphyBlue),HW=function(A){var B=A.onClick;return eh.default.createElement(XW,null,"Error loading GIFs. ",eh.default.createElement("a",{onClick:B},"Try again?"))};fI.default=HW;var th,UI={},Ff=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},sN=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(UI,"__esModule",{value:!0});var OW=$t,cN=sN(oB),nC=be,nn=sN(b),WW=(0,OW.keyframes)(gh||(gh=Ff([`
     to {
    transform: scale(1.75) translateY(-20px);
  }
`],[`
     to {
    transform: scale(1.75) translateY(-20px);
  }
`]))),lN=37,TW=cN.default.div(nh||(nh=Ff([`
    display: flex;
    align-items: center;
    height: `,`px;
    padding-top: 15px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    animation: pulse 0.8s ease-in-out 0s infinite alternate backwards;
`],[`
    display: flex;
    align-items: center;
    height: `,`px;
    padding-top: 15px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    animation: pulse 0.8s ease-in-out 0s infinite alternate backwards;
`])),lN),EC=cN.default.div(Eh||(Eh=Ff([`
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: `,`px 10px 10px 10px;
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    animation: `,` cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.75s infinite alternate;
    background: `,`;
    animation-delay: `,`;
`],[`
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: `,`px 10px 10px 10px;
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    animation: `,` cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.75s infinite alternate;
    background: `,`;
    animation-delay: `,`;
`])),lN,WW,function(A){return A.color},function(A){return A.delay}),VW=function(A){var B=A.className,Q=B===void 0?"":B;return nn.default.createElement(TW,{className:Q},nn.default.createElement(EC,{color:nC.giphyGreen,delay:"0"}),nn.default.createElement(EC,{color:nC.giphyBlue,delay:".1s"}),nn.default.createElement(EC,{color:nC.giphyPurple,delay:".2s"}),nn.default.createElement(EC,{color:nC.giphyRed,delay:".3s"}),nn.default.createElement(EC,{color:nC.giphyYellow,delay:".4s"}))};UI.default=VW;var gh,nh,Eh,Df={},xW=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),zW=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),PW=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&xW(B,A,Q);return zW(B,A),B};Object.defineProperty(Df,"__esModule",{value:!0});var Ma=PW(b);function jW(A,B){return B===void 0&&(B=[]),Array.apply(null,Array(A)).map(function(Q,e){return B[e]||0})}var KW=function(A){var B=A.columns,Q=A.gutter,e=A.useTransform,t=e===void 0?!0:e,g=A.itemWidth,n=A.itemHeights,E=A.children,C=A.columnOffsets,i=C===void 0?[]:C,r={};function a(){var o,l=jW(B,i),I=Ma.default.Children.map(E,function(w,U){var c={position:"absolute"};o=l.indexOf(Math.min.apply(Math,l));var D="".concat(l[o],"px"),s="".concat(o*g+o*Q,"px");t?c.transform="translate3d(".concat(s,", ").concat(D,", 0)"):(c.top=D,c.left=s);var u=n[U];return u&&(l[o]+=u+Q),Ma.default.cloneElement(w,{style:c})});return r.position="relative",r.width="".concat(B*g+(B-1)*Q,"px"),r.height="".concat(Math.max.apply(Math,l)-Q,"px"),I}return Ma.default.createElement("div",{style:r},a())};Df.default=(0,Ma.memo)(KW);var qW=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},_W=d&&d.__extends||function(){var A=function(B,Q){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var g in t)Object.prototype.hasOwnProperty.call(t,g)&&(e[g]=t[g])},A(B,Q)};return function(B,Q){if(typeof Q!="function"&&Q!==null)throw new TypeError("Class extends value "+String(Q)+" is not a constructor or null");A(B,Q);function e(){this.constructor=B}B.prototype=Q===null?Object.create(Q):(e.prototype=Q.prototype,new e)}}(),Eo=d&&d.__assign||function(){return Eo=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},Eo.apply(this,arguments)},$W=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),A9=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),B9=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&$W(B,A,Q);return A9(B,A),B},Ch=d&&d.__awaiter||function(A,B,Q,e){function t(g){return g instanceof Q?g:new Q(function(n){n(g)})}return new(Q||(Q=Promise))(function(g,n){function E(r){try{i(e.next(r))}catch(a){n(a)}}function C(r){try{i(e.throw(r))}catch(a){n(a)}}function i(r){r.done?g(r.value):t(r.value).then(E,C)}i((e=e.apply(A,B||[])).next())})},ih=d&&d.__generator||function(A,B){var Q={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},e,t,g,n;return n={next:E(0),throw:E(1),return:E(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function E(i){return function(r){return C([i,r])}}function C(i){if(e)throw new TypeError("Generator is already executing.");for(;n&&(n=0,i[0]&&(Q=0)),Q;)try{if(e=1,t&&(g=i[0]&2?t.return:i[0]?t.throw||((g=t.return)&&g.call(t),0):t.next)&&!(g=g.call(t,i[1])).done)return g;switch(t=0,g&&(i=[i[0]&2,g.value]),i[0]){case 0:case 1:g=i;break;case 4:return Q.label++,{value:i[1],done:!1};case 5:Q.label++,t=i[1],i=[0];continue;case 7:i=Q.ops.pop(),Q.trys.pop();continue;default:if(g=Q.trys,!(g=g.length>0&&g[g.length-1])&&(i[0]===6||i[0]===2)){Q=0;continue}if(i[0]===3&&(!g||i[1]>g[0]&&i[1]<g[3])){Q.label=i[1];break}if(i[0]===6&&Q.label<g[1]){Q.label=g[1],g=i;break}if(g&&Q.label<g[2]){Q.label=g[2],Q.ops.push(i);break}g[2]&&Q.ops.pop(),Q.trys.pop();continue}i=B.call(A,Q)}catch(r){i=[6,r],t=0}finally{e=g=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},Xg=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(wf,"__esModule",{value:!0});var Q9=Xg(oB),e9=rE,t9=EQ,Le=B9(b),g9=cE,n9=Xg(sI),E9=Xg(fI),C9=Xg(Si),i9=Xg(UI),r9=Xg(Df),a9=Xg(lE),o9=Q9.default.div(rh||(rh=qW([`
    opacity: `,`;
`],[`
    opacity: `,`;
`])),function(A){return A.isFirstLoad?0:1}),I9=Object.freeze({gutter:6,user:{},initialGifs:[]}),s9=Object.freeze({isFetching:!1,isError:!1,gifWidth:0,gifs:[],isLoaderVisible:!1,isDoneFetching:!1}),c9=function(A){_W(B,A);function B(){var Q=A!==null&&A.apply(this,arguments)||this;return Q.state=Eo(Eo({},s9),{gifs:Q.props.initialGifs||[]}),Q.unmounted=!1,Q.paginator=(0,e9.gifPaginator)(Q.props.fetchGifs,Q.state.gifs),Q.onLoaderVisible=function(e){Q.unmounted||Q.setState({isLoaderVisible:e},Q.onFetch)},Q.fetchGifs=(0,g9.debounce)(B.fetchDebounce,function(e){return Ch(Q,void 0,void 0,function(){var t,g,n,E;return ih(this,function(C){switch(C.label){case 0:return C.trys.push([0,2,,3]),[4,this.paginator()];case 1:return t=C.sent(),this.unmounted?[2]:[3,3];case 2:return g=C.sent(),this.unmounted?[2]:(this.setState({isFetching:!1,isError:!0}),n=this.props.onGifsFetchError,n&&n(g),[3,3]);case 3:return t&&(e===t.length?this.setState({isDoneFetching:!0}):(this.setState({gifs:t,isFetching:!1}),E=this.props.onGifsFetched,E&&E(t),this.onFetch())),[2]}})})}),Q.onFetch=function(){return Ch(Q,void 0,void 0,function(){var e,t,g,n;return ih(this,function(E){return this.unmounted?[2]:(e=this.state,t=e.isFetching,g=e.isLoaderVisible,n=e.gifs,!t&&g&&(this.setState({isFetching:!0,isError:!1}),this.fetchGifs(n.length)),[2])})})},Q}return B.prototype.componentDidMount=function(){this.unmounted=!1,this.onFetch()},B.prototype.componentWillUnmount=function(){this.unmounted=!0},B.prototype.render=function(){var Q=this.props,e=Q.onGifVisible,t=Q.onGifRightClick,g=Q.className,n=g===void 0?B.className:g,E=Q.onGifSeen,C=Q.onGifClick,i=Q.onGifKeyPress,r=Q.user,a=Q.overlay,o=Q.hideAttribution,l=Q.noLink,I=Q.borderRadius,w=Q.noResultsMessage,U=Q.columns,c=Q.width,D=Q.gutter,s=Q.useTransform,u=Q.columnOffsets,f=Q.backgroundColor,M=Q.loaderConfig,h=Q.tabIndex,Y=h===void 0?0:h,m=Q.layoutType,L=m===void 0?"GRID":m,X=Q.loader,W=X===void 0?i9.default:X,K=this.state,R=K.gifWidth,J=K.gifs,q=K.isError,y=K.isDoneFetching,G=!y,v=J.length===0,S=J.map(function(k){return(0,t9.getGifHeight)(k,R)});return Le.default.createElement(a9.default,{attributes:{layout_type:L}},Le.default.createElement("div",{className:n,style:{width:c}},Le.default.createElement(r9.default,{itemHeights:S,useTransform:s,itemWidth:R,columns:U,gutter:D,columnOffsets:u},J.map(function(k){return Le.default.createElement(C9.default,{gif:k,tabIndex:Y,key:k.id,width:R,onGifClick:C,onGifKeyPress:i,onGifSeen:E,onGifVisible:e,onGifRightClick:t,user:r,overlay:a,backgroundColor:f,hideAttribution:o,noLink:l,borderRadius:I})})),!G&&J.length===0&&w,q?Le.default.createElement(E9.default,{onClick:this.onFetch}):G&&Le.default.createElement(n9.default,{onVisibleChange:this.onLoaderVisible,config:M},Le.default.createElement(o9,{isFirstLoad:v},Le.default.createElement(W,{className:B.loaderClassName})))))},B.className="giphy-grid",B.loaderClassName="loader",B.fetchDebounce=250,B.defaultProps=I9,B.getDerivedStateFromProps=function(Q,e){var t=Q.columns,g=Q.gutter,n=Q.width,E=g*(t-1),C=Math.floor((n-E)/t);return e.gifWidth!==C?{gifWidth:C}:null},B}(Le.PureComponent);wf.default=c9;var rh,uf={},ff={},Jg={},l9={get exports(){return Jg},set exports(A){Jg=A}};(function(A){var B,Q,e,t,g,n,E,C,i,r,a,o,l,I,w,U,c,D,s,u,f,M,h,Y,m,L,X,W,K;(function(R){var J=typeof d=="object"?d:typeof self=="object"?self:typeof this=="object"?this:{};R(q(J,q(A.exports)));function q(y,G){return y!==J&&(typeof Object.create=="function"?Object.defineProperty(y,"__esModule",{value:!0}):y.__esModule=!0),function(v,S){return y[v]=G?G(v,S):S}}})(function(R){var J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,G){y.__proto__=G}||function(y,G){for(var v in G)Object.prototype.hasOwnProperty.call(G,v)&&(y[v]=G[v])};B=function(y,G){if(typeof G!="function"&&G!==null)throw new TypeError("Class extends value "+String(G)+" is not a constructor or null");J(y,G);function v(){this.constructor=y}y.prototype=G===null?Object.create(G):(v.prototype=G.prototype,new v)},Q=Object.assign||function(y){for(var G,v=1,S=arguments.length;v<S;v++){G=arguments[v];for(var k in G)Object.prototype.hasOwnProperty.call(G,k)&&(y[k]=G[k])}return y},e=function(y,G){var v={};for(var S in y)Object.prototype.hasOwnProperty.call(y,S)&&G.indexOf(S)<0&&(v[S]=y[S]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,S=Object.getOwnPropertySymbols(y);k<S.length;k++)G.indexOf(S[k])<0&&Object.prototype.propertyIsEnumerable.call(y,S[k])&&(v[S[k]]=y[S[k]]);return v},t=function(y,G,v,S){var k=arguments.length,Z=k<3?G:S===null?S=Object.getOwnPropertyDescriptor(G,v):S,T;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Z=Reflect.decorate(y,G,v,S);else for(var O=y.length-1;O>=0;O--)(T=y[O])&&(Z=(k<3?T(Z):k>3?T(G,v,Z):T(G,v))||Z);return k>3&&Z&&Object.defineProperty(G,v,Z),Z},g=function(y,G){return function(v,S){G(v,S,y)}},n=function(y,G,v,S,k,Z){function T(wA){if(wA!==void 0&&typeof wA!="function")throw new TypeError("Function expected");return wA}for(var O=S.kind,eA=O==="getter"?"get":O==="setter"?"set":"value",N=!G&&y?S.static?y:y.prototype:null,$=G||(N?Object.getOwnPropertyDescriptor(N,S.name):{}),z,nA=!1,EA=v.length-1;EA>=0;EA--){var IA={};for(var rA in S)IA[rA]=rA==="access"?{}:S[rA];for(var rA in S.access)IA.access[rA]=S.access[rA];IA.addInitializer=function(wA){if(nA)throw new TypeError("Cannot add initializers after decoration has completed");Z.push(T(wA||null))};var QA=(0,v[EA])(O==="accessor"?{get:$.get,set:$.set}:$[eA],IA);if(O==="accessor"){if(QA===void 0)continue;if(QA===null||typeof QA!="object")throw new TypeError("Object expected");(z=T(QA.get))&&($.get=z),(z=T(QA.set))&&($.set=z),(z=T(QA.init))&&k.push(z)}else(z=T(QA))&&(O==="field"?k.push(z):$[eA]=z)}N&&Object.defineProperty(N,S.name,$),nA=!0},E=function(y,G,v){for(var S=arguments.length>2,k=0;k<G.length;k++)v=S?G[k].call(y,v):G[k].call(y);return S?v:void 0},C=function(y){return typeof y=="symbol"?y:"".concat(y)},i=function(y,G,v){return typeof G=="symbol"&&(G=G.description?"[".concat(G.description,"]"):""),Object.defineProperty(y,"name",{configurable:!0,value:v?"".concat(v," ",G):G})},r=function(y,G){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(y,G)},a=function(y,G,v,S){function k(Z){return Z instanceof v?Z:new v(function(T){T(Z)})}return new(v||(v=Promise))(function(Z,T){function O($){try{N(S.next($))}catch(z){T(z)}}function eA($){try{N(S.throw($))}catch(z){T(z)}}function N($){$.done?Z($.value):k($.value).then(O,eA)}N((S=S.apply(y,G||[])).next())})},o=function(y,G){var v={label:0,sent:function(){if(Z[0]&1)throw Z[1];return Z[1]},trys:[],ops:[]},S,k,Z,T;return T={next:O(0),throw:O(1),return:O(2)},typeof Symbol=="function"&&(T[Symbol.iterator]=function(){return this}),T;function O(N){return function($){return eA([N,$])}}function eA(N){if(S)throw new TypeError("Generator is already executing.");for(;T&&(T=0,N[0]&&(v=0)),v;)try{if(S=1,k&&(Z=N[0]&2?k.return:N[0]?k.throw||((Z=k.return)&&Z.call(k),0):k.next)&&!(Z=Z.call(k,N[1])).done)return Z;switch(k=0,Z&&(N=[N[0]&2,Z.value]),N[0]){case 0:case 1:Z=N;break;case 4:return v.label++,{value:N[1],done:!1};case 5:v.label++,k=N[1],N=[0];continue;case 7:N=v.ops.pop(),v.trys.pop();continue;default:if(Z=v.trys,!(Z=Z.length>0&&Z[Z.length-1])&&(N[0]===6||N[0]===2)){v=0;continue}if(N[0]===3&&(!Z||N[1]>Z[0]&&N[1]<Z[3])){v.label=N[1];break}if(N[0]===6&&v.label<Z[1]){v.label=Z[1],Z=N;break}if(Z&&v.label<Z[2]){v.label=Z[2],v.ops.push(N);break}Z[2]&&v.ops.pop(),v.trys.pop();continue}N=G.call(y,v)}catch($){N=[6,$],k=0}finally{S=Z=0}if(N[0]&5)throw N[1];return{value:N[0]?N[1]:void 0,done:!0}}},l=function(y,G){for(var v in y)v!=="default"&&!Object.prototype.hasOwnProperty.call(G,v)&&K(G,y,v)},K=Object.create?function(y,G,v,S){S===void 0&&(S=v);var k=Object.getOwnPropertyDescriptor(G,v);(!k||("get"in k?!G.__esModule:k.writable||k.configurable))&&(k={enumerable:!0,get:function(){return G[v]}}),Object.defineProperty(y,S,k)}:function(y,G,v,S){S===void 0&&(S=v),y[S]=G[v]},I=function(y){var G=typeof Symbol=="function"&&Symbol.iterator,v=G&&y[G],S=0;if(v)return v.call(y);if(y&&typeof y.length=="number")return{next:function(){return y&&S>=y.length&&(y=void 0),{value:y&&y[S++],done:!y}}};throw new TypeError(G?"Object is not iterable.":"Symbol.iterator is not defined.")},w=function(y,G){var v=typeof Symbol=="function"&&y[Symbol.iterator];if(!v)return y;var S=v.call(y),k,Z=[],T;try{for(;(G===void 0||G-- >0)&&!(k=S.next()).done;)Z.push(k.value)}catch(O){T={error:O}}finally{try{k&&!k.done&&(v=S.return)&&v.call(S)}finally{if(T)throw T.error}}return Z},U=function(){for(var y=[],G=0;G<arguments.length;G++)y=y.concat(w(arguments[G]));return y},c=function(){for(var y=0,G=0,v=arguments.length;G<v;G++)y+=arguments[G].length;for(var S=Array(y),k=0,G=0;G<v;G++)for(var Z=arguments[G],T=0,O=Z.length;T<O;T++,k++)S[k]=Z[T];return S},D=function(y,G,v){if(v||arguments.length===2)for(var S=0,k=G.length,Z;S<k;S++)(Z||!(S in G))&&(Z||(Z=Array.prototype.slice.call(G,0,S)),Z[S]=G[S]);return y.concat(Z||Array.prototype.slice.call(G))},s=function(y){return this instanceof s?(this.v=y,this):new s(y)},u=function(y,G,v){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var S=v.apply(y,G||[]),k,Z=[];return k={},T("next"),T("throw"),T("return"),k[Symbol.asyncIterator]=function(){return this},k;function T(nA){S[nA]&&(k[nA]=function(EA){return new Promise(function(IA,rA){Z.push([nA,EA,IA,rA])>1||O(nA,EA)})})}function O(nA,EA){try{eA(S[nA](EA))}catch(IA){z(Z[0][3],IA)}}function eA(nA){nA.value instanceof s?Promise.resolve(nA.value.v).then(N,$):z(Z[0][2],nA)}function N(nA){O("next",nA)}function $(nA){O("throw",nA)}function z(nA,EA){nA(EA),Z.shift(),Z.length&&O(Z[0][0],Z[0][1])}},f=function(y){var G,v;return G={},S("next"),S("throw",function(k){throw k}),S("return"),G[Symbol.iterator]=function(){return this},G;function S(k,Z){G[k]=y[k]?function(T){return(v=!v)?{value:s(y[k](T)),done:!1}:Z?Z(T):T}:Z}},M=function(y){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var G=y[Symbol.asyncIterator],v;return G?G.call(y):(y=typeof I=="function"?I(y):y[Symbol.iterator](),v={},S("next"),S("throw"),S("return"),v[Symbol.asyncIterator]=function(){return this},v);function S(Z){v[Z]=y[Z]&&function(T){return new Promise(function(O,eA){T=y[Z](T),k(O,eA,T.done,T.value)})}}function k(Z,T,O,eA){Promise.resolve(eA).then(function(N){Z({value:N,done:O})},T)}},h=function(y,G){return Object.defineProperty?Object.defineProperty(y,"raw",{value:G}):y.raw=G,y};var q=Object.create?function(y,G){Object.defineProperty(y,"default",{enumerable:!0,value:G})}:function(y,G){y.default=G};Y=function(y){if(y&&y.__esModule)return y;var G={};if(y!=null)for(var v in y)v!=="default"&&Object.prototype.hasOwnProperty.call(y,v)&&K(G,y,v);return q(G,y),G},m=function(y){return y&&y.__esModule?y:{default:y}},L=function(y,G,v,S){if(v==="a"&&!S)throw new TypeError("Private accessor was defined without a getter");if(typeof G=="function"?y!==G||!S:!G.has(y))throw new TypeError("Cannot read private member from an object whose class did not declare it");return v==="m"?S:v==="a"?S.call(y):S?S.value:G.get(y)},X=function(y,G,v,S,k){if(S==="m")throw new TypeError("Private method is not writable");if(S==="a"&&!k)throw new TypeError("Private accessor was defined without a setter");if(typeof G=="function"?y!==G||!k:!G.has(y))throw new TypeError("Cannot write private member to an object whose class did not declare it");return S==="a"?k.call(y,v):k?k.value=v:G.set(y,v),v},W=function(y,G){if(G===null||typeof G!="object"&&typeof G!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof y=="function"?G===y:y.has(G)},R("__extends",B),R("__assign",Q),R("__rest",e),R("__decorate",t),R("__param",g),R("__esDecorate",n),R("__runInitializers",E),R("__propKey",C),R("__setFunctionName",i),R("__metadata",r),R("__awaiter",a),R("__generator",o),R("__exportStar",l),R("__createBinding",K),R("__values",I),R("__read",w),R("__spread",U),R("__spreadArrays",c),R("__spreadArray",D),R("__await",s),R("__asyncGenerator",u),R("__asyncDelegator",f),R("__asyncValues",M),R("__makeTemplateObject",h),R("__importStar",Y),R("__importDefault",m),R("__classPrivateFieldGet",L),R("__classPrivateFieldSet",X),R("__classPrivateFieldIn",W)})})(l9);var dI={};Object.defineProperty(dI,"__esModule",{value:!0});var lt=b;function w9(A,B){B===void 0&&(B=0);var Q=lt.useRef(!1),e=lt.useRef(),t=lt.useRef(A),g=lt.useCallback(function(){return Q.current},[]),n=lt.useCallback(function(){Q.current=!1,e.current&&clearTimeout(e.current),e.current=setTimeout(function(){Q.current=!0,t.current()},B)},[B]),E=lt.useCallback(function(){Q.current=null,e.current&&clearTimeout(e.current)},[]);return lt.useEffect(function(){t.current=A},[A]),lt.useEffect(function(){return n(),E},[B]),[g,E,n]}dI.default=w9;Object.defineProperty(ff,"__esModule",{value:!0});var F9=Jg,D9=b,u9=F9.__importDefault(dI);function f9(A,B,Q){B===void 0&&(B=0),Q===void 0&&(Q=[]);var e=u9.default(A,B),t=e[0],g=e[1],n=e[2];return D9.useEffect(n,Q),[t,g]}ff.default=f9;var Uf={},Ag={},Ne={},Hl=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},zF=d&&d.__assign||function(){return zF=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},zF.apply(this,arguments)};Object.defineProperty(Ne,"__esModule",{value:!0});Ne.getSize=Ne.initTheme=void 0;var Ol=$t,U9=function(A){return zF({mode:"light",searchbarHeight:42,smallSearchbarHeight:35,condensedMediaQuery:A!=null&&A.condensedMode?"max-width: 99999px":"max-width: 480px",hideCancelButton:!1},A)};Ne.initTheme=U9;var d9=function(A,B){return B===void 0&&(B=!1),(0,Ol.css)(Ih||(Ih=Hl([`
    height: `,`px;
    `,`;
    @media (`,`) {
        height: `,`px;
        `,`;
    }
`],[`
    height: `,`px;
    `,`;
    @media (`,`) {
        height: `,`px;
        `,`;
    }
`])),A.searchbarHeight,B&&(0,Ol.css)(ah||(ah=Hl([`
        width: `,`px;
    `],[`
        width: `,`px;
    `])),A.searchbarHeight),A.condensedMediaQuery,A.smallSearchbarHeight,B&&(0,Ol.css)(oh||(oh=Hl([`
            width: `,`px;
        `],[`
            width: `,`px;
        `])),A.smallSearchbarHeight))};Ne.getSize=d9;var ah,oh,Ih;(function(A){var B=d&&d.__assign||function(){return B=Object.assign||function(c){for(var D,s=1,u=arguments.length;s<u;s++){D=arguments[s];for(var f in D)Object.prototype.hasOwnProperty.call(D,f)&&(c[f]=D[f])}return c},B.apply(this,arguments)},Q=d&&d.__createBinding||(Object.create?function(c,D,s,u){u===void 0&&(u=s);var f=Object.getOwnPropertyDescriptor(D,s);(!f||("get"in f?!D.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return D[s]}}),Object.defineProperty(c,u,f)}:function(c,D,s,u){u===void 0&&(u=s),c[u]=D[s]}),e=d&&d.__setModuleDefault||(Object.create?function(c,D){Object.defineProperty(c,"default",{enumerable:!0,value:D})}:function(c,D){c.default=D}),t=d&&d.__importStar||function(c){if(c&&c.__esModule)return c;var D={};if(c!=null)for(var s in c)s!=="default"&&Object.prototype.hasOwnProperty.call(c,s)&&Q(D,c,s);return e(D,c),D},g=d&&d.__awaiter||function(c,D,s,u){function f(M){return M instanceof s?M:new s(function(h){h(M)})}return new(s||(s=Promise))(function(M,h){function Y(X){try{L(u.next(X))}catch(W){h(W)}}function m(X){try{L(u.throw(X))}catch(W){h(W)}}function L(X){X.done?M(X.value):f(X.value).then(Y,m)}L((u=u.apply(c,D||[])).next())})},n=d&&d.__generator||function(c,D){var s={label:0,sent:function(){if(M[0]&1)throw M[1];return M[1]},trys:[],ops:[]},u,f,M,h;return h={next:Y(0),throw:Y(1),return:Y(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function Y(L){return function(X){return m([L,X])}}function m(L){if(u)throw new TypeError("Generator is already executing.");for(;h&&(h=0,L[0]&&(s=0)),s;)try{if(u=1,f&&(M=L[0]&2?f.return:L[0]?f.throw||((M=f.return)&&M.call(f),0):f.next)&&!(M=M.call(f,L[1])).done)return M;switch(f=0,M&&(L=[L[0]&2,M.value]),L[0]){case 0:case 1:M=L;break;case 4:return s.label++,{value:L[1],done:!1};case 5:s.label++,f=L[1],L=[0];continue;case 7:L=s.ops.pop(),s.trys.pop();continue;default:if(M=s.trys,!(M=M.length>0&&M[M.length-1])&&(L[0]===6||L[0]===2)){s=0;continue}if(L[0]===3&&(!M||L[1]>M[0]&&L[1]<M[3])){s.label=L[1];break}if(L[0]===6&&s.label<M[1]){s.label=M[1],M=L;break}if(M&&s.label<M[2]){s.label=M[2],s.ops.push(L);break}M[2]&&s.ops.pop(),s.trys.pop();continue}L=D.call(c,s)}catch(X){L=[6,X],f=0}finally{u=M=0}if(L[0]&5)throw L[1];return{value:L[0]?L[1]:void 0,done:!0}}},E=d&&d.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(A,"__esModule",{value:!0}),A._SearchContext=A.SearchContext=void 0;var C=$t,i=rE,r=EQ,a=t(b),o=E(lE),l=Ne;A.SearchContext=(0,a.createContext)({}),A._SearchContext=(0,a.createContext)({});var I=[],w={data:[],pagination:{total_count:0,count:0,offset:0},meta:{status:200,msg:"OK",response_id:""}},U=function(c){var D,s,u=c.children,f=c.options,M=f===void 0?{}:f,h=c.apiKey,Y=c.theme,m=c.initialTerm,L=m===void 0?"":m,X=c.initialChannel,W=c.shouldDefaultToTrending,K=W===void 0?!0:W,R=c.shouldFetchChannels,J=R===void 0?!0:R,q=(0,a.useMemo)(function(){return new i.GiphyFetch(h)},[h]),y=(0,a.useState)([]),G=y[0],v=y[1],S=(0,a.useState)(L),k=S[0],Z=S[1],T=(0,a.useState)(L),O=T[0],eA=T[1],N=(0,a.useState)(!1),$=N[0],z=N[1],nA=(0,a.useState)(X),EA=nA[0],IA=nA[1],rA=(0,a.useCallback)(function(MA){Z(""),IA(MA)},[]),QA=(0,a.useState)([]),wA=QA[0],BA=QA[1],cA=(0,a.useState)(!1),oA=cA[0],ZA=cA[1],XA=[k,M.type,((D=EA==null?void 0:EA.user)===null||D===void 0?void 0:D.username)||""].filter(function(MA){return!!MA}).join(" / "),HA=(0,a.useCallback)(function(MA){return g(void 0,void 0,void 0,function(){var CA,DA;return n(this,function(SA){switch(SA.label){case 0:return z(!0),CA=w,k?[4,q.search(k,B(B({},M),{offset:MA,channel:(DA=EA==null?void 0:EA.user)===null||DA===void 0?void 0:DA.username}))]:[3,2];case 1:return CA=SA.sent(),[3,4];case 2:return K?[4,q.trending(B(B({},M),{offset:MA}))]:[3,4];case 3:CA=SA.sent(),SA.label=4;case 4:return z(!1),[2,CA]}})})},[(s=EA==null?void 0:EA.user)===null||s===void 0?void 0:s.username,q,M,k,K]),CQ=(0,a.useCallback)(function(MA){return g(void 0,void 0,void 0,function(){var CA,DA;return n(this,function(SA){switch(SA.label){case 0:return CA=M.limit||50,[4,q.animate(k,{offset:MA,limit:CA})];case 1:return DA=SA.sent(),DA.pagination||(DA.pagination={count:CA,total_count:CA,offset:MA}),[2,DA]}})})},[q,M.limit,k]),JB=(0,a.useCallback)(function(MA){return g(void 0,void 0,void 0,function(){var CA,DA;return n(this,function(SA){switch(SA.label){case 0:return CA=k.indexOf("@")===0?k.split(" ")[0]:k,[4,q.channels(CA,{offset:MA})];case 1:return DA=SA.sent(),[2,DA.data]}})})},[q,k]);return(0,a.useEffect)(function(){var MA=function(){return g(void 0,void 0,void 0,function(){var CA,DA,SA,DQ;return n(this,function(vA){switch(vA.label){case 0:CA=[],vA.label=1;case 1:return vA.trys.push([1,3,,4]),[4,(0,i.request)("trending/searches?api_key=".concat(h))];case 2:return DA=vA.sent().data,SA=DA===void 0?[]:DA,CA=SA,[3,4];case 3:return DQ=vA.sent(),r.Logger.warn("Trending searches request failed: ".concat(DQ)),[3,4];case 4:return BA(CA),[2]}})})};MA()},[h]),(0,a.useEffect)(function(){var MA=G.find(function(CA){var DA=CA.slug;return k.indexOf("@".concat(DA," "))===0});MA&&IA(MA)},[k,G,IA]),(0,a.useEffect)(function(){if(J){var MA=function(){return g(void 0,void 0,void 0,function(){var CA;return n(this,function(DA){switch(DA.label){case 0:return[4,JB(0)];case 1:return CA=DA.sent(),v(CA||I),[2]}})})};!EA&&k.replace("@","")&&MA()}},[k,EA]),a.default.createElement(A.SearchContext.Provider,{value:{activeChannel:EA,setChannels:v,currentChannels:G,setActiveChannel:rA,fetchChannelSearch:JB,term:k,trendingSearches:wA,setSearch:eA,fetchGifs:HA,fetchAnimatedText:CQ,searchKey:XA,isFetching:$,isFocused:oA}},a.default.createElement(A._SearchContext.Provider,{value:{setIsFocused:ZA,_setSearch:Z,_inputValOverride:O}},a.default.createElement(C.ThemeProvider,{theme:(0,l.initTheme)(Y)},a.default.createElement(o.default,{attributes:{layout_type:"SEARCH"}},u))))};A.default=U})(Ag);var sh=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},M9=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),h9=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),G9=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&M9(B,A,Q);return h9(B,A),B},R9=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Uf,"__esModule",{value:!0});var m9=$t,Y9=R9(oB),le=G9(b),p9=Ag,y9=Y9.default.svg(lh||(lh=sh([`
    position: relative;
    right: 10px;
    margin-left: 5px;
    cursor: pointer;
    `,`;
`],[`
    position: relative;
    right: 10px;
    margin-left: 5px;
    cursor: pointer;
    `,`;
`])),function(A){return A.theme.hideCancelButton&&(0,m9.css)(ch||(ch=sh([`
            display: none;
        `],[`
            display: none;
        `])))}),df=function(A){var B=A.width,Q=B===void 0?17:B,e=A.height,t=e===void 0?17:e,g=A.setCleared,n=(0,le.useContext)(p9.SearchContext),E=n.term,C=n.setActiveChannel,i=n.activeChannel;return E||i?le.default.createElement(y9,{className:df.className,width:Q,height:t,viewBox:"0 0 17 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg",onClick:function(r){r.stopPropagation(),r.preventDefault(),g(!0),C(void 0)}},le.default.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:"0.582730817"},le.default.createElement("g",{transform:"translate(-300.000000, -150.000000)",fill:"#8E8E93",fillRule:"nonzero"},le.default.createElement("g",{transform:"translate(0.000000, 135.000000)"},le.default.createElement("g",null,le.default.createElement("g",null,le.default.createElement("g",{transform:"translate(11.000000, 13.000000)"},le.default.createElement("g",{transform:"translate(289.000000, 2.000000)"},le.default.createElement("path",{d:"M8.5,0 C3.805875,0 0,3.805875 0,8.5 C0,13.194125 3.805875,17 8.5,17 C13.194125,17 17,13.194125 17,8.5 C17,3.805875 13.194125,0 8.5,0 Z M9.50158333,8.5 C9.50158333,8.5 11.7250417,10.7234583 11.834125,10.8325417 C12.1110833,11.1095 12.1110833,11.557875 11.834125,11.834125 C11.5571667,12.1110833 11.1087917,12.1110833 10.8325417,11.834125 C10.7234583,11.72575 8.5,9.50158333 8.5,9.50158333 C8.5,9.50158333 6.27654167,11.7250417 6.16745833,11.834125 C5.8905,12.1110833 5.442125,12.1110833 5.165875,11.834125 C4.88891667,11.5571667 4.88891667,11.1087917 5.165875,10.8325417 C5.27425,10.7234583 7.49841667,8.5 7.49841667,8.5 C7.49841667,8.5 5.27495833,6.27654167 5.165875,6.16745833 C4.88891667,5.8905 4.88891667,5.442125 5.165875,5.165875 C5.44283333,4.88891667 5.89120833,4.88891667 6.16745833,5.165875 C6.27654167,5.27425 8.5,7.49841667 8.5,7.49841667 C8.5,7.49841667 10.7234583,5.27495833 10.8325417,5.165875 C11.1095,4.88891667 11.557875,4.88891667 11.834125,5.165875 C12.1110833,5.44283333 12.1110833,5.89120833 11.834125,6.16745833 C11.72575,6.27654167 9.50158333,8.5 9.50158333,8.5 Z",opacity:"0.75"}))))))))):null};df.className="giphy-search-bar-cancel";Uf.default=df;var ch,lh,Mf={},MI=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},N9=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),b9=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),J9=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&N9(B,A,Q);return b9(B,A),B},hf=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Mf,"__esModule",{value:!0});var k9=$t,Gf=hf(oB),Co=be,En=J9(b),v9=hf(sE),Z9=hf(Lg),S9=Ag,wN=6,PF=function(A){return A.searchbarHeight-wN*2},wh=function(A){return A.smallSearchbarHeight-3*2},Fh=function(A){return(0,k9.keyframes)(Dh||(Dh=MI([`
to {
    width: `,`px;
}
`],[`
to {
    width: `,`px;
}
`])),A)},L9=(0,Gf.default)(v9.default)(uh||(uh=MI([`
    height: `,`px;
    margin: 0;
    width: 0;
    animation: `,` 100ms ease-in-out forwards;
    @media (`,`) {
        height: `,`px;
        animation: `,` 100ms ease-in-out forwards;
    }
`],[`
    height: `,`px;
    margin: 0;
    width: 0;
    animation: `,` 100ms ease-in-out forwards;
    @media (`,`) {
        height: `,`px;
        animation: `,` 100ms ease-in-out forwards;
    }
`])),function(A){return PF(A.theme)},function(A){return Fh(PF(A.theme))},function(A){return A.theme.condensedMediaQuery},function(A){return wh(A.theme)},function(A){return Fh(wh(A.theme))}),X9=Gf.default.div(fh||(fh=MI([`
    background: `,`;
    display: flex;
    align-items: center;
    padding-left: `,`px;
`],[`
    background: `,`;
    display: flex;
    align-items: center;
    padding-left: `,`px;
`])),function(A){return A.theme.mode==="dark"?Co.giphyCharcoal:Co.giphyWhite},wN),H9=Gf.default.div(Uh||(Uh=MI([`
    background: `,`;
    display: flex;
    padding: 0 4px;
    color: `,`;
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    font-weight: 600;
    font-size: 12px;
    align-items: center;
    height: `,`px;
    @media (`,`) {
        display: none;
    }
`],[`
    background: `,`;
    display: flex;
    padding: 0 4px;
    color: `,`;
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    font-weight: 600;
    font-size: 12px;
    align-items: center;
    height: `,`px;
    @media (`,`) {
        display: none;
    }
`])),Co.giphyWhiteSmoke,Co.giphyDarkCharcoal,function(A){return PF(A.theme)},function(A){return A.theme.condensedMediaQuery}),O9=function(A){var B=A.className,Q=B===void 0?"":B,e=(0,En.useContext)(S9.SearchContext).activeChannel;return e?En.default.createElement(X9,{className:Q},En.default.createElement(L9,{user:e.user}),En.default.createElement(H9,{key:e.id},En.default.createElement("div",null,"@",e.user.username),e.user.is_verified&&En.default.createElement(Z9.default,{size:14}))):null};Mf.default=O9;var Dh,uh,fh,Uh,Rf={},mf={},zr={},Pr={},dh;function W9(){if(dh)return Pr;dh=1,Object.defineProperty(Pr,"__esModule",{value:!0});var A=b,B=function(Q){A.useEffect(Q,[])};return Pr.default=B,Pr}var Mh;function T9(){if(Mh)return zr;Mh=1,Object.defineProperty(zr,"__esModule",{value:!0});var A=Jg,B=b,Q=A.__importDefault(W9()),e=function(t){var g=B.useRef(t);g.current=t,Q.default(function(){return function(){return g.current()}})};return zr.default=e,zr}Object.defineProperty(mf,"__esModule",{value:!0});var V9=Jg,CC=b,x9=V9.__importDefault(T9()),z9=function(A,B){B===void 0&&(B=200);var Q=CC.useState(A),e=Q[0],t=Q[1],g=CC.useRef(),n=CC.useRef(null),E=CC.useRef(0);return CC.useEffect(function(){if(g.current)n.current=A,E.current=!0;else{t(A);var C=function(){E.current?(E.current=!1,t(n.current),g.current=setTimeout(C,B)):g.current=void 0};g.current=setTimeout(C,B)}},[A]),x9.default(function(){g.current&&clearTimeout(g.current)}),e};mf.default=z9;var Yf={},P9=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Yf,"__esModule",{value:!0});var qQ=P9(b),j9=function(A){var B=A.className,Q=B===void 0?"":B;return qQ.default.createElement("svg",{viewBox:"0 0 30 30",version:"1.1",className:Q},qQ.default.createElement("defs",null,qQ.default.createElement("path",{d:"M11.5482521,20.4090671 L4.24727698,28.2009189 C3.68084207,28.8054377 2.73159653,28.8363108 2.12707771,28.2698759 C1.5225589,27.703441 1.4916858,26.7541954 2.0581207,26.1496766 L9.40599838,18.3077689 C7.95982241,16.4371424 7.0978836,14.0789715 7.0978836,11.5181818 C7.0978836,5.44914339 11.9392549,0.518181818 17.9252787,0.518181818 C23.9113026,0.518181818 28.7526738,5.44914339 28.7526738,11.5181818 C28.7526738,17.5872202 23.9113026,22.5181818 17.9252787,22.5181818 C15.539851,22.5181818 13.3361963,21.7351359 11.5482521,20.4090671 Z M17.9252787,19.5181818 C22.242011,19.5181818 25.7526738,15.9425536 25.7526738,11.5181818 C25.7526738,7.09381 22.242011,3.51818182 17.9252787,3.51818182 C13.6085464,3.51818182 10.0978836,7.09381 10.0978836,11.5181818 C10.0978836,15.9425536 13.6085464,19.5181818 17.9252787,19.5181818 Z",id:"giphy-search-icon-path-1"})),qQ.default.createElement("g",{id:"search",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},qQ.default.createElement("g",{id:"icons/search"},qQ.default.createElement("mask",{id:"giphy-search-icon-mask-2",fill:"white"},qQ.default.createElement("use",{xlinkHref:"#giphy-search-icon-path-1"})),qQ.default.createElement("use",{id:"Mask",fill:"#FFFFFF",fillRule:"nonzero",xlinkHref:"#giphy-search-icon-path-1"}),qQ.default.createElement("g",{mask:"url(#giphy-search-icon-mask-2)"},qQ.default.createElement("g",{transform:"translate(0.250000, 0.250000)"},qQ.default.createElement("g",null))))))};Yf.default=j9;var Bg=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},K9=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),q9=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),_9=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&K9(B,A,Q);return q9(B,A),B},pf=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Rf,"__esModule",{value:!0});var yf=$t,Li=pf(oB),Cn=_9(b),$9=pf(mf),AT=Ag,BT=pf(Yf),QT=Ne,eT="2s",Wl="#9933FF",hh="#FF6666",FN="cubic-bezier(0.920, 0.240, 0.185, 0.730)",tT=(0,yf.keyframes)(Gh||(Gh=Bg([`
    0% {
      transform: rotate(34deg) translate(-10px, 80px);
    };
    
    100% {
      transform: rotate(34deg) translate(-10px, -20px);
    }
`],[`
    0% {
      transform: rotate(34deg) translate(-10px, 80px);
    };
    
    100% {
      transform: rotate(34deg) translate(-10px, -20px);
    }
`]))),gT=(0,yf.keyframes)(Rh||(Rh=Bg([`
    0% { 
      transform: translate(0px, 0px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(10px, -17px);
      opacity: 0;
    }
`],[`
    0% { 
      transform: translate(0px, 0px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(10px, -17px);
      opacity: 0;
    }
`]))),nT=(0,yf.keyframes)(mh||(mh=Bg([`
    0% {
      opacity: 0;
      transform: translateX(-400%);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(0);
    }
`],[`
    0% {
      opacity: 0;
      transform: translateX(-400%);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(0);
    }
`]))),ET=Li.default.div(Yh||(Yh=Bg([`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
        display: none;
    }
    `,`
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
        display: none;
    }
    `,`
`])),function(A){return(0,QT.getSize)(A.theme,!0)}),CT=Li.default.div(ph||(ph=Bg([`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(45deg, `," 0%, ",` 100%);
    border-radius: 4px;
    overflow: hidden;
    &:before {
        animation: `," ",` linear 0s infinite;
        background-image: linear-gradient(45deg, `," 0%, "," 50%, ",` 100%);
        background-size: 400%;
        background-position: 0% 100%;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 400%;
    }
`],[`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(45deg, `," 0%, ",` 100%);
    border-radius: 4px;
    overflow: hidden;
    &:before {
        animation: `," ",` linear 0s infinite;
        background-image: linear-gradient(45deg, `," 0%, "," 50%, ",` 100%);
        background-size: 400%;
        background-position: 0% 100%;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 400%;
    }
`])),Wl,hh,nT,eT,Wl,hh,Wl),iT=Li.default.div(yh||(yh=Bg([`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    &::after {
        content: '+';
        color: white;
        font-family: 'SS Standard';
        font-size: 8px;
        position: absolute;
        top: 65%;
        left: 66%;
        animation: `," 1s ",` 0s 1 forwards;
    }
`],[`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    &::after {
        content: '+';
        color: white;
        font-family: 'SS Standard';
        font-size: 8px;
        position: absolute;
        top: 65%;
        left: 66%;
        animation: `," 1s ",` 0s 1 forwards;
    }
`])),gT,FN),rT=Li.default.div(Nh||(Nh=Bg([`
    position: absolute;
    width: 200%;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(34deg) translate(-10px, -20px);
    animation: `," 1s ",` 0s 1;
    filter: blur(1px);
`],[`
    position: absolute;
    width: 200%;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(34deg) translate(-10px, -20px);
    animation: `," 1s ",` 0s 1;
    filter: blur(1px);
`])),tT,FN),aT=(0,Li.default)(BT.default)(bh||(bh=Bg([`
    z-index: 1;
    display: flex;
    width: 60%;
    height: 60%;
`],[`
    z-index: 1;
    display: flex;
    width: 60%;
    height: 60%;
`]))),oT=function(){var A=(0,Cn.useContext)(AT.SearchContext).isFetching,B=(0,$9.default)(A,1e3);return Cn.default.createElement(ET,null,Cn.default.createElement(CT,null),Cn.default.createElement(aT,null),B&&Cn.default.createElement(iT,null,Cn.default.createElement(rT,null)))};Rf.default=oT;var Gh,Rh,mh,Yh,ph,yh,Nh,bh,jF=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},IT=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),sT=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),cT=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&IT(B,A,Q);return sT(B,A),B},Xi=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(uf,"__esModule",{value:!0});var lT=$t,DN=Xi(oB),Cg=be,WB=cT(b),wT=Xi(ff),FT=Xi(Uf),Jh=Ag,DT=Xi(Mf),uT=Xi(Rf),fT=Ne;function UT(A){var B=(0,WB.useRef)(A);return(0,WB.useEffect)(function(){B.current=A}),B.current}var dT=500,MT=DN.default.div(kh||(kh=jF([`
    display: flex;
    background: white;
    align-items: center;
    border-radius: 4px;
    `,`
`],[`
    display: flex;
    background: white;
    align-items: center;
    border-radius: 4px;
    `,`
`])),function(A){return(0,fT.getSize)(A.theme)}),hT=DN.default.input(Zh||(Zh=jF([`
    background: `,`;
    box-sizing: border-box;
    border: 0;
    appearance: none;
    font-weight: normal;
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    outline: 0;
    font-size: 15px;
    padding: 0 10px;
    border-radius: 0;
    text-overflow: ellipsis;
    color: `,`;
    &::placeholder {
        color: `,`;
    }
    min-width: 150px;
    flex: 1;
    `,`
`],[`
    background: `,`;
    box-sizing: border-box;
    border: 0;
    appearance: none;
    font-weight: normal;
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    outline: 0;
    font-size: 15px;
    padding: 0 10px;
    border-radius: 0;
    text-overflow: ellipsis;
    color: `,`;
    &::placeholder {
        color: `,`;
    }
    min-width: 150px;
    flex: 1;
    `,`
`])),function(A){return A.theme.mode==="dark"?Cg.giphyCharcoal:Cg.giphyWhite},function(A){return A.theme.mode==="dark"?Cg.giphyWhite:Cg.giphyBlack},function(A){return A.theme.mode==="dark",Cg.giphyLightGrey},function(A){return A.isUsernameSearch&&(0,lT.css)(vh||(vh=jF([`
            color: `,`;
        `],[`
            color: `,`;
        `])),Cg.giphyIndigo)}),Nf=function(A){var B=A.className,Q=A.placeholder,e=Q===void 0?"Search GIPHY":Q,t=A.clear,g=t===void 0?!1:t,n=A.autoFocus,E=A.searchDebounce,C=E===void 0?dT:E,i=A.onEnter,r=(0,WB.useContext)(Jh.SearchContext),a=r.activeChannel,o=r.setActiveChannel,l=r.term,I=r.setChannels,w=(0,WB.useContext)(Jh._SearchContext),U=w.setIsFocused,c=w._inputValOverride,D=w._setSearch,s=(0,WB.useState)(l),u=s[0],f=s[1];(0,wT.default)(function(){return D(u)},C,[u]);var M=(0,WB.useRef)(null),h=UT(a),Y=(0,WB.useState)(g),m=Y[0],L=Y[1];(0,WB.useEffect)(function(){var K;n&&((K=M.current)===null||K===void 0||K.focus())},[n]),(0,WB.useEffect)(function(){var K;a&&!h&&((K=M.current)===null||K===void 0||K.focus(),f(u===" "?"":u.replace(/@?\w*\s?/,"")))},[u,a,h]),(0,WB.useEffect)(function(){L(g)},[g]),(0,WB.useEffect)(function(){f(c)},[c,f]);var X=function(K){var R=K.keyCode||K.key;switch(R){case 27:case"Escape":o(void 0),I([]);break;case 13:case"Enter":i==null||i(u);break}},W=function(K){var R=K.keyCode||K.key;switch(R){case 8:case"Backspace":u===""&&(o(void 0),I([]));break}};return WB.default.createElement(MT,{className:[Nf.className,B].join(" ")},WB.default.createElement(DT.default,null),WB.default.createElement(hT,{isUsernameSearch:l.indexOf("@")===0,onChange:function(K){var R=K.target.value;(!m||R!=="")&&(L(!1),f(R))},onFocus:function(){U(!0)},onBlur:function(){U(!1)},value:m?"":u,placeholder:a?"Search ".concat(a.display_name):e,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",ref:M,onKeyUp:X,onKeyDown:W}),WB.default.createElement(FT.default,{setCleared:function(){return f("")}}),WB.default.createElement(uT.default,null))};Nf.className="giphy-search-bar";uf.default=Nf;var kh,vh,Zh,bf={},QE={},Jf={},GT=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Jf,"__esModule",{value:!0});var iC=GT(b),RT=function(A){var B=A.size,Q=B===void 0?18:B,e=A.className;return iC.default.createElement("svg",{width:Q,height:Q,viewBox:"0 0 18 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:e},iC.default.createElement("g",{id:"trending",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},iC.default.createElement("g",null,iC.default.createElement("rect",{id:"Rectangle",stroke:"#979797",fill:"#D8D8D8",opacity:"0",x:"0.5",y:"0.5",width:"17",height:"17"}),iC.default.createElement("path",{d:"M12.6093329,3.12057664 L15.156896,3.12057664 L9.64199318,9.04253019 L6.88133868,6.8175119 C6.7544587,6.67603813 6.56616874,6.60087259 6.38404017,6.61897279 C6.2490402,6.63288422 6.11891631,6.69661171 6.02063992,6.79697337 C2.21226835,10.5943119 0.308082561,12.4929812 0.308082561,12.4929812 C0.308082561,12.4929812 0.527106106,12.8074292 0.710953088,13.0215425 C0.833517743,13.1642848 0.975497751,13.3098497 1.13689311,13.4582373 L6.47329888,8.13191205 L9.16381134,10.2953038 C9.40800276,10.5710787 9.68933701,10.7021044 10.019278,10.4570223 L16.0239805,4.04474473 C16.0239805,5.87956383 16.0239805,6.79697337 16.0239805,6.79697337 C16.0239805,6.79697337 16.4320205,6.79697337 17.2481004,6.79697337 L17.2481004,1.80604505 C14.1555887,1.80604505 12.6093329,1.80604505 12.6093329,1.80604505 C12.6093329,1.80604505 12.6093329,2.24422225 12.6093329,3.12057664 Z",id:"Shape",stroke:"#00CCFF",strokeWidth:"0.4",fill:"#00CCFF",fillRule:"nonzero",transform:"translate(8.778091, 7.632141) rotate(-2.000000) translate(-8.778091, -7.632141) "}))))};Jf.default=RT;var hI=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},mT=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),YT=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),pT=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&mT(B,A,Q);return YT(B,A),B},GI=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(QE,"__esModule",{value:!0});QE.TrendingSearchPill=QE.ChannelPill=void 0;var uN=be,ht=pT(b),yT=GI(sE),NT=GI(Lg),fN=Ag,bT=Ne,JT=GI(Jf),RI=GI(oB),UN=9,kT=RI.default.div(Sh||(Sh=hI([`
    background: `,`;
    display: flex;
    padding-right: 4px;
    align-items: center;
    margin-right: `,`px;
    cursor: pointer;
`],[`
    background: `,`;
    display: flex;
    padding-right: 4px;
    align-items: center;
    margin-right: `,`px;
    cursor: pointer;
`])),uN.giphyDarkestGrey,UN),vT=RI.default.div(Lh||(Lh=hI([`
    background: `,`;
    display: flex;
    padding: 14px;
    align-items: center;
    margin-right: `,`px;
    white-space: nowrap;
    cursor: pointer;
    font-style: italic;
    border-radius: 20px;
`],[`
    background: `,`;
    display: flex;
    padding: 14px;
    align-items: center;
    margin-right: `,`px;
    white-space: nowrap;
    cursor: pointer;
    font-style: italic;
    border-radius: 20px;
`])),uN.giphyDarkestGrey,UN),ZT=(0,RI.default)(yT.default)(Xh||(Xh=hI([`
    `,`
`],[`
    `,`
`])),function(A){return(0,bT.getSize)(A.theme,!0)}),ST=(0,RI.default)(JT.default)(Hh||(Hh=hI([`
    margin-right: 2px;
`],[`
    margin-right: 2px;
`]))),LT=function(A){var B=A.channel,Q=(0,ht.useContext)(fN.SearchContext).setActiveChannel;return ht.default.createElement(kT,{key:B.id,onClick:function(){return Q(B)}},ht.default.createElement(ZT,{user:B.user}),ht.default.createElement("div",null,"@",B.user.username),B.user.is_verified&&ht.default.createElement(NT.default,{size:14}))};QE.ChannelPill=LT;var XT=function(A){var B=A.trendingSearch,Q=(0,ht.useContext)(fN.SearchContext).setSearch;return ht.default.createElement(vT,{key:B,onClick:function(){return Q(B)}},ht.default.createElement(ST,{size:16}),B)};QE.TrendingSearchPill=XT;var Sh,Lh,Xh,Hh,HT=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},OT=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),WT=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),TT=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&OT(B,A,Q);return WT(B,A),B},VT=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(bf,"__esModule",{value:!0});var xT=VT(oB),jr=TT(b),zT=Ag,PT=Ne,Oh=QE,jT=xT.default.div(Wh||(Wh=HT([`
    display: flex;
    color: white;
    flex-direction: row;
    font-family: 'interface';
    font-weight: 600;
    font-size: 14px;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
    `,`
`],[`
    display: flex;
    color: white;
    flex-direction: row;
    font-family: 'interface';
    font-weight: 600;
    font-size: 14px;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
    `,`
`])),function(A){return(0,PT.getSize)(A.theme)}),kf=function(){var A=(0,jr.useContext)(zT.SearchContext),B=A.trendingSearches,Q=A.currentChannels;return jr.default.createElement(jT,{className:kf.className},Q.length>0?Q.map(function(e){return jr.default.createElement(Oh.ChannelPill,{key:e.id,channel:e})}):B.map(function(e){return jr.default.createElement(Oh.TrendingSearchPill,{key:e,trendingSearch:e})}))};kf.className="giphy-suggestion-bar";bf.default=kf;var Wh,mI={},vf={},Zf={},KT=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Zf,"__esModule",{value:!0});var rn=KT(b),qT=function(A){var B=A.onClick;return rn.default.createElement("svg",{width:"66px",height:"13px",viewBox:"0 0 66 13",onClick:B},rn.default.createElement("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},rn.default.createElement("g",{transform:"translate(-1060.000000, -462.000000)",fill:"#FFFFFF",fillRule:"nonzero"},rn.default.createElement("g",{transform:"translate(931.000000, 286.375671)"},rn.default.createElement("g",{transform:"translate(86.000000, 136.124329)"},rn.default.createElement("path",{d:"M47.968,49.1962322 C49.588,49.1962322 51.052,48.6202322 51.58,47.5522322 L51.58,43.8202322 L47.476,43.8202322 L47.476,45.6802322 L49.6,45.6802322 L49.6,46.7602322 C49.12,47.1082322 48.424,47.1922322 47.98,47.1922322 C46.288,47.1922322 45.724,45.8602322 45.724,44.7802322 C45.724,43.1362322 46.612,42.3202322 47.98,42.3202322 C48.544,42.3202322 49.288,42.4762322 49.9,43.0522322 L51.28,41.6842322 C50.176,40.5682322 49.144,40.3282322 47.98,40.3282322 C44.824,40.3282322 43.384,42.5842322 43.384,44.7802322 C43.384,46.9762322 44.644,49.1962322 47.968,49.1962322 Z M54.928,48.9682322 L54.928,40.5682322 L52.564,40.5682322 L52.564,48.9682322 L54.928,48.9682322 Z M58.648,48.9682322 L58.648,46.7002322 L60.352,46.7002322 C62.596,46.6762322 63.724,45.3442322 63.724,43.6282322 C63.724,41.9842322 62.608,40.5682322 60.352,40.5682322 L56.272,40.5682322 L56.272,48.9682322 L58.648,48.9682322 Z M60.352,44.6962322 L58.648,44.6962322 L58.648,42.6082322 L60.352,42.6082322 C61,42.6082322 61.348,43.1122322 61.348,43.6642322 C61.348,44.2162322 61.012,44.6962322 60.352,44.6962322 Z M66.796,48.9802322 L66.796,45.8002322 L69.82,45.8002322 L69.82,48.9802322 L72.172,48.9802322 L72.172,40.5802322 L69.82,40.5802322 L69.82,43.7722322 L66.796,43.7722322 L66.796,40.5802322 L64.42,40.5802322 L64.42,48.9802322 L66.796,48.9802322 Z M78.16,48.9682322 L78.16,45.6202322 L81.496,40.6762322 L81.496,40.5682322 L78.82,40.5682322 L77.008,43.4482322 L75.268,40.5682322 L72.592,40.5682322 L72.592,40.6642322 L75.784,45.6202322 L75.784,48.9682322 L78.16,48.9682322 Z M87.796,49.1362322 C88.972,49.1362322 90.088,48.7402322 90.952,47.8882322 L90.028,46.9642322 C89.44,47.5522322 88.576,47.8762322 87.796,47.8762322 C85.624,47.8762322 84.712,46.3522322 84.7,44.8162322 C84.688,43.2682322 85.66,41.6962322 87.796,41.6962322 C88.576,41.6962322 89.368,41.9722322 89.968,42.5602322 L90.868,41.6962322 C90.016,40.8442322 88.924,40.4242322 87.796,40.4242322 C84.796,40.4242322 83.356,42.6202322 83.3679256,44.8282322 C83.38,47.0362322 84.748,49.1362322 87.796,49.1362322 Z M93.028,48.9682322 L93.028,40.5802322 L91.792,40.5802322 L91.792,48.9682322 L93.028,48.9682322 Z M94.252,41.3122322 C94.252,42.3322322 95.788,42.3322322 95.788,41.3122322 C95.788,40.3042322 94.252,40.3042322 94.252,41.3122322 Z M95.632,48.9682322 L95.632,43.0282322 L94.396,43.0282322 L94.396,48.9682322 L95.632,48.9682322 Z M98.188,51.7162322 L98.188,48.1042322 C98.632,48.8362322 99.556,49.1002322 100.276,49.1002322 C102.112,49.1002322 103.264,47.8042322 103.264,46.0162322 C103.264,44.2282322 102.04,42.9442322 100.276,42.9322322 C99.484,42.9322322 98.644,43.2922322 98.188,44.0122322 L98.116,43.0522322 L96.952,43.0522322 L96.952,51.7162322 L98.188,51.7162322 Z M100.156,47.9002322 C99.076,47.9002322 98.296,47.0722322 98.296,46.0162322 C98.296,44.9602322 99.016,44.1322322 100.156,44.1322322 C101.284,44.1322322 102.028,44.9002322 102.028,46.0162322 C102.028,47.1202322 101.236,47.9002322 100.156,47.9002322 Z M106.456,49.1482322 C107.992,49.1482322 108.964,48.3802322 108.976,47.2762322 C108.988,45.7522322 107.56,45.5122322 106.468,45.4162322 C105.712,45.3442322 105.196,45.1522322 105.184,44.6602322 C105.184,44.1922322 105.688,43.9402322 106.444,43.9522322 C107.032,43.9522322 107.536,44.0722322 108.004,44.5042322 L108.7,43.6882322 C108.04,43.1002322 107.332,42.8962322 106.42,42.8962322 C105.316,42.8962322 103.96,43.3882322 103.96,44.6962322 C103.972,46.0042322 105.256,46.3642322 106.372,46.4722322 C107.248,46.5562322 107.752,46.7602322 107.74,47.2882322 C107.728,47.8402322 107.068,48.0562322 106.48,48.0562322 C105.784,48.0442322 104.956,47.7922322 104.404,47.1802322 L103.756,48.0562322 C104.536,48.9322322 105.496,49.1482322 106.456,49.1482322 Z",id:"GIPHYClips"}))))))};Zf.default=qT;var Sf=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},Hi=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(vf,"__esModule",{value:!0});var Lf=Hi(oB),rC=Hi(b),_T=Hi(sE),$T=Hi(nf),AV=Hi(Zf),BV=Lf.default.div(Th||(Th=Sf([`
    display: flex;
    align-items: center;
    font-family: interface, helvetica, arial;
    cursor: pointer;
`],[`
    display: flex;
    align-items: center;
    font-family: interface, helvetica, arial;
    cursor: pointer;
`]))),QV=(0,Lf.default)(_T.default)(Vh||(Vh=Sf([`
    flex-shrink: 0;
`],[`
    flex-shrink: 0;
`]))),eV=Lf.default.div(xh||(xh=Sf([`
    display: flex;
    flex-direction: column;
`],[`
    display: flex;
    flex-direction: column;
`]))),Xf=function(A){var B=A.gif,Q=A.className,e=A.onClick,t=B.user;return!(t!=null&&t.username)&&!(t!=null&&t.display_name)?null:rC.default.createElement(BV,{className:[Xf.className,Q].join(" "),onClick:function(g){if(g.preventDefault(),g.stopPropagation(),e)e(B);else{var n=t.profile_url;n&&window.open(n,"_blank")}}},rC.default.createElement(QV,{user:t}),rC.default.createElement(eV,null,rC.default.createElement(AV.default,{onClick:function(g){g.preventDefault(),g.stopPropagation(),e?e(B):B.url&&window.open(B.url,"_blank")}}),rC.default.createElement($T.default,{user:t})))};Xf.className="giphy-attribution";vf.default=Xf;var Th,Vh,xh,YI={};(function(A){var B=d&&d.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(A,"__esModule",{value:!0}),A.VolumeOffIcon=A.VolumeOnIcon=A.VolumeSize=void 0;var Q=B(b);A.VolumeSize=25;var e=function(g){var n=g.size,E=n===void 0?A.VolumeSize:n,C=g.onClick,i=C===void 0?function(){}:C;return Q.default.createElement("svg",{width:E,height:E,viewBox:"0 0 26 23",onClick:i},Q.default.createElement("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},Q.default.createElement("g",{transform:"translate(1.000000, 0.000000)",fill:"#FFF",fillRule:"nonzero"},Q.default.createElement("path",{d:"M11.9625091,0.572584405 L11.9625091,22.2272644 C11.9625091,22.4856644 11.8466091,22.6635044 11.6151891,22.7611644 C11.3480491,22.8413444 11.1390491,22.7968844 10.9878091,22.6277844 L4.8732291,15.9143244 L0.573909096,15.9143244 C0.413549096,15.9143244 0.277509096,15.8588444 0.166549096,15.7475044 C0.0573082348,15.6406091 -0.00292164572,15.4933347 -1.77635684e-15,15.3405244 L-1.77635684e-15,7.45058441 C-1.77635684e-15,7.29022441 0.0555890961,7.15456441 0.167309096,7.04322441 C0.278269096,6.93226441 0.414309096,6.87640441 0.573909096,6.87640441 L4.8732291,6.87640441 L10.9874291,0.172064405 C11.1390491,0.00296440549 11.3484291,-0.0414955945 11.6151891,0.0386844055 C11.8466091,0.136344405 11.9621291,0.314564405 11.9621291,0.572584405 L11.9625091,0.572584405 Z"}),Q.default.createElement("path",{d:"M15.7579491,16.0914044 L14.6798891,13.6594044 C15.5739159,13.2635547 16.1503537,12.3776671 16.1501091,11.3999244 C16.150386,10.4242626 15.5763999,9.53983269 14.6852091,9.14272441 L15.7697291,6.71376441 C17.6193585,7.53872062 18.810518,9.37466359 18.8101092,11.3999244 C18.8105521,13.4298903 17.6139475,15.2691931 15.7579491,16.0914044 L15.7579491,16.0914044 Z"}),Q.default.createElement("path",{d:"M18.3647491,20.2619044 L17.2863091,17.8299044 C19.8302925,16.7031661 21.4705725,14.1822599 21.4701091,11.3999244 C21.4701091,8.59818441 19.8167291,6.09892441 17.3022691,4.97678441 L18.3864091,2.54782441 C21.8804724,4.10607079 24.1307363,7.57414217 24.1301093,11.3999244 C24.1308375,15.2343934 21.8705556,18.7086904 18.3647491,20.2619044 Z"}))))};A.VolumeOnIcon=e;var t=function(g){var n=g.size,E=n===void 0?A.VolumeSize:n,C=g.onClick,i=C===void 0?function(){}:C;return Q.default.createElement("svg",{onClick:i,height:E,width:E,viewBox:"0 0 26 23",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Q.default.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},Q.default.createElement("g",{id:"Group",transform:"translate(1.000000, 0.000000)",fill:"#FFFFFF",fillRule:"nonzero"},Q.default.createElement("path",{d:"M11.9625091,0.572584405 L11.9625091,22.2272644 C11.9625091,22.4856644 11.8466091,22.6635044 11.6151891,22.7611644 C11.3480491,22.8413444 11.1390491,22.7968844 10.9878091,22.6277844 L4.8732291,15.9143244 L0.573909096,15.9143244 C0.413549096,15.9143244 0.277509096,15.8588444 0.166549096,15.7475044 C0.0573082348,15.6406091 -0.00292164572,15.4933347 0,15.3405244 L0,7.45058441 C0,7.29022441 0.0555890961,7.15456441 0.167309096,7.04322441 C0.278269096,6.93226441 0.414309096,6.87640441 0.573909096,6.87640441 L4.8732291,6.87640441 L10.9874291,0.172064405 C11.1390491,0.00296440549 11.3484291,-0.0414955945 11.6151891,0.0386844055 C11.8466091,0.136344405 11.9621291,0.314564405 11.9621291,0.572584405 L11.9625091,0.572584405 Z",id:"Path"})),Q.default.createElement("g",{id:"Group",transform:"translate(14.887009, 6.947630)",fill:"#FFFFFF",fillRule:"nonzero"},Q.default.createElement("path",{d:"M7.88199149,6.27905236 C7.94693088,6.35707599 7.94693088,6.47033309 7.88199149,6.54835671 L6.54835671,7.88199149 C6.47033309,7.94693088 6.35707599,7.94693088 6.27905236,7.88199149 L3.96534802,5.56828715 L1.65164367,7.88199149 C1.57362004,7.94693088 1.46036294,7.94693088 1.38233932,7.88199149 L0.0487045381,6.54835671 C-0.016234846,6.47033309 -0.016234846,6.35707599 0.0487045381,6.27905236 L2.36240889,3.96534802 L0.0487045381,1.65164367 C-0.016234846,1.57362004 -0.016234846,1.46036294 0.0487045381,1.38233932 L1.38233932,0.0487045381 C1.46036294,-0.016234846 1.57362004,-0.016234846 1.65164367,0.0487045381 L3.96534802,2.36240889 L6.27905236,0.0487045381 C6.35707599,-0.016234846 6.47033309,-0.016234846 6.54835671,0.0487045381 L7.88199149,1.38233932 C7.94693088,1.46036294 7.94693088,1.57362004 7.88199149,1.65164367 L5.56828715,3.96534802 L7.88199149,6.27905236 Z",id:"Shape"}))))};A.VolumeOffIcon=t})(YI);var Hf={},Of={},Kr={},fQ={},zh;function tV(){if(zh)return fQ;zh=1,Object.defineProperty(fQ,"__esModule",{value:!0}),fQ.isNavigator=fQ.isBrowser=fQ.off=fQ.on=fQ.noop=void 0;var A=function(){};fQ.noop=A;function B(e){for(var t=[],g=1;g<arguments.length;g++)t[g-1]=arguments[g];e&&e.addEventListener&&e.addEventListener.apply(e,t)}fQ.on=B;function Q(e){for(var t=[],g=1;g<arguments.length;g++)t[g-1]=arguments[g];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}return fQ.off=Q,fQ.isBrowser=typeof window<"u",fQ.isNavigator=typeof navigator<"u",fQ}var Ph;function gV(){if(Ph)return Kr;Ph=1,Object.defineProperty(Kr,"__esModule",{value:!0});var A=b,B=tV(),Q=B.isBrowser?A.useLayoutEffect:A.useEffect;return Kr.default=Q,Kr}Object.defineProperty(Of,"__esModule",{value:!0});var nV=Jg,EV=b,CV=nV.__importDefault(gV()),iV=function(A,B){A===void 0&&(A=1e12),B===void 0&&(B=0);var Q=EV.useState(0),e=Q[0],t=Q[1];return CV.default(function(){var g,n,E,C=function(){var o=Math.min(1,(Date.now()-E)/A);t(o),i()},i=function(){g=requestAnimationFrame(C)},r=function(){n=setTimeout(function(){cancelAnimationFrame(g),t(1)},A),E=Date.now(),i()},a=setTimeout(r,B);return function(){clearTimeout(n),clearTimeout(a),cancelAnimationFrame(g)}},[A,B]),e};Of.default=iV;var rV=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},Wf=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Hf,"__esModule",{value:!0});var aV=Wf(oB),oV=be,IV=Wf(b),sV=Wf(Of),cV=aV.default.div(jh||(jh=rV([`
    background: `,`;
    height: `,`px;
    position: absolute;
    width: 5px;
    bottom: 0;
    left: 0;
    opacity: 0.95;
`],[`
    background: `,`;
    height: `,`px;
    position: absolute;
    width: 5px;
    bottom: 0;
    left: 0;
    opacity: 0.95;
`])),oV.giphyWhite,function(A){return A.barHeight}),lV=function(A){var B=A.videoEl;(0,sV.default)(2147483647,100);var Q=(B==null?void 0:B.currentTime)||0,e=(B==null?void 0:B.duration)||0,t=Q/e,g=Math.round(t*100),n=5;return(B==null?void 0:B.height)<200?n=3:(B==null?void 0:B.height)<300&&(n=4),g=e<10&&g>98?100:g,IV.default.createElement(cV,{style:{width:"".concat(g,"%")},barHeight:n,className:"hide-in-percy"})};Hf.default=lV;var jh,Tf={},eE={};Object.defineProperty(eE,"__esModule",{value:!0});eE.shouldFireQuartile=eE.getErrorMessage=void 0;var wV=function(A,B){switch(B===void 0&&(B=""),A){case 1:return"Aborted. The fetching process for the media resource was aborted by the user agent at the user's request.";case 2:return"Network Error. A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";case 3:return"Decode Error. An error of some description occurred while decoding the media resource, after the resource was established to be usable.";case 4:return'Can not play a video of type "'.concat(B.split(".").pop(),'" on this platform.');default:return""}};eE.getErrorMessage=wV;var FV=function(A,B,Q,e,t){var g=t+A;return!e.has(g)&&Q>0&&B>Q*A?(e.add(g),!0):!1};eE.shouldFireQuartile=FV;var DV=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),uV=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),fV=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&DV(B,A,Q);return uV(B,A),B},UV=d&&d.__awaiter||function(A,B,Q,e){function t(g){return g instanceof Q?g:new Q(function(n){n(g)})}return new(Q||(Q=Promise))(function(g,n){function E(r){try{i(e.next(r))}catch(a){n(a)}}function C(r){try{i(e.throw(r))}catch(a){n(a)}}function i(r){r.done?g(r.value):t(r.value).then(E,C)}i((e=e.apply(A,B||[])).next())})},dV=d&&d.__generator||function(A,B){var Q={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},e,t,g,n;return n={next:E(0),throw:E(1),return:E(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function E(i){return function(r){return C([i,r])}}function C(i){if(e)throw new TypeError("Generator is already executing.");for(;n&&(n=0,i[0]&&(Q=0)),Q;)try{if(e=1,t&&(g=i[0]&2?t.return:i[0]?t.throw||((g=t.return)&&g.call(t),0):t.next)&&!(g=g.call(t,i[1])).done)return g;switch(t=0,g&&(i=[i[0]&2,g.value]),i[0]){case 0:case 1:g=i;break;case 4:return Q.label++,{value:i[1],done:!1};case 5:Q.label++,t=i[1],i=[0];continue;case 7:i=Q.ops.pop(),Q.trys.pop();continue;default:if(g=Q.trys,!(g=g.length>0&&g[g.length-1])&&(i[0]===6||i[0]===2)){Q=0;continue}if(i[0]===3&&(!g||i[1]>g[0]&&i[1]<g[3])){Q.label=i[1];break}if(i[0]===6&&Q.label<g[1]){Q.label=g[1],g=i;break}if(g&&Q.label<g[2]){Q.label=g[2],Q.ops.push(i);break}g[2]&&Q.ops.pop(),Q.trys.pop();continue}i=B.call(A,Q)}catch(r){i=[6,r],t=0}finally{e=g=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(Tf,"__esModule",{value:!0});var MV=cI,Tl=EQ,zA=fV(b),Kh=eE,hV=[.25,.5,.75],dN="giphy-video",GV={EMPTY:0,IDLE:1,LOADING:2,NO_SOURCE:3},MN=function(A){var B,Q,e,t=A.muted,g=A.ccEnabled,n=g===void 0?!1:g,E=A.ccLanguage,C=E===void 0?"en":E,i=A.loop,r=i===void 0?!0:i,a=A.onStateChange,o=A.onTimeUpdate,l=A.onCanPlay,I=A.onFirstPlay,w=A.onWaiting,U=A.onMuted,c=A.onError,D=A.onEnded,s=A.onLoop,u=A.onQuartile,f=A.onEndFullscreen,M=A.setVideoEl,h=A.gif,Y=A.width,m=A.height,L=A.volume,X=L===void 0?.7:L,W=A.className,K=W===void 0?dN:W,R=m||(0,Tl.getGifHeight)(h,Y),J=(0,zA.useState)((0,Tl.getBestVideo)(h.video,Y,R)),q=J[0],y=J[1],G=(0,zA.useRef)(0);q||console.warn("GiphyJS No video content for id: ".concat(h.id));var v=(0,zA.useRef)(Date.now()),S=(0,zA.useRef)(!1),k=(0,zA.useRef)(0),Z=(0,zA.useRef)(0),T=(0,zA.useRef)(new Set);(0,zA.useEffect)(function(){v.current=Date.now(),S.current=!1,k.current=1,Z.current=0,T.current=new Set},[h.id]);var O=(0,zA.useRef)(null);(0,zA.useEffect)(function(){var BA=(0,Tl.getBestVideo)(h.video,Y,R);O.current&&(q!=null&&q.url)&&BA.url!==q.url&&(q.url.indexOf(String(h.id))!==-1&&(G.current=O.current.currentTime),y(BA))},[Y,m,h.video,R,q==null?void 0:q.url,h.id]),(0,zA.useEffect)(function(){O.current&&(q!=null&&q.url)&&G.current&&(O.current.currentTime=G.current,G.current=0)},[q==null?void 0:q.url,G]);var eA=(0,zA.useCallback)(function(){var BA,cA=O.current,oA=(BA=cA==null?void 0:cA.error)===null||BA===void 0?void 0:BA.code;if(oA&&(cA!=null&&cA.src)){var ZA=(0,Kh.getErrorMessage)(oA,cA==null?void 0:cA.src);console.error(ZA),c==null||c(oA)}},[c]),N=(0,zA.useCallback)(function(){a==null||a("playing"),S.current||(S.current=!0,h.analytics_response_payload&&(0,MV.pingback)({actionType:"START",analyticsResponsePayload:h.analytics_response_payload}),I==null||I(Date.now()-v.current))},[I,a,h]),$=(0,zA.useCallback)(function(){return a==null?void 0:a("paused")},[a]),z=(0,zA.useCallback)(function(){var BA=O.current;if(BA){var cA=BA.currentTime;hV.some(function(oA){return(0,Kh.shouldFireQuartile)(oA,cA,BA.duration,T.current,k.current)?(u==null||u(oA),!0):!1}),o==null||o(cA||0)}},[u,o]),nA=(0,zA.useCallback)(function(){return l==null?void 0:l()},[l]),EA=(0,zA.useCallback)(function(){var BA=O.current;(BA==null?void 0:BA.currentTime)!==0&&(BA==null?void 0:BA.networkState)!==GV.IDLE&&(w==null||w(++Z.current))},[w]),IA=(0,zA.useCallback)(function(){S.current&&(r&&O.current&&O.current.play(),s==null||s(k.current),k.current=k.current+1,D==null||D())},[D,r,s]),rA=(0,zA.useCallback)(function(){return f==null?void 0:f()},[f]),QA=(0,zA.useCallback)(function(BA){return UV(void 0,void 0,void 0,function(){var cA;return dV(this,function(oA){switch(oA.label){case 0:if(!BA)return[3,4];if(cA=BA.play(),cA===void 0)return[3,4];oA.label=1;case 1:return oA.trys.push([1,3,,4]),[4,cA];case 2:return oA.sent(),U==null||U(!1),[3,4];case 3:return oA.sent(),BA.muted=!0,U==null||U(!0),BA.play(),[3,4];case 4:return[2]}})})},[U]);(0,zA.useEffect)(function(){var BA=O.current;BA&&(QA(BA),M==null||M(BA),isNaN(X)||(BA.volume=X))},[]),(0,zA.useEffect)(function(){var BA=O.current;return BA&&(BA.addEventListener("play",N),BA.addEventListener("pause",$),BA.addEventListener("error",eA),BA.addEventListener("timeupdate",z),BA.addEventListener("canplay",nA),BA.addEventListener("ended",IA),BA.addEventListener("waiting",EA),BA.addEventListener("webkitendfullscreen",rA)),function(){BA&&(BA.removeEventListener("play",N),BA.removeEventListener("pause",$),BA.removeEventListener("error",eA),BA.removeEventListener("timeupdate",z),BA.removeEventListener("canplay",nA),BA.removeEventListener("ended",IA),BA.removeEventListener("waiting",EA),BA.removeEventListener("webkitendfullscreen",rA))}},[N,$,eA,z,nA,IA,EA,rA]);var wA=(e=(Q=(B=h.video)===null||B===void 0?void 0:B.captions)===null||Q===void 0?void 0:Q[C])===null||e===void 0?void 0:e.vtt;return q!=null&&q.url?zA.default.createElement("video",{crossOrigin:"anonymous",draggable:!0,className:K,width:Y,height:R,muted:t,autoPlay:!0,playsInline:!0,ref:O,src:q==null?void 0:q.url,"data-giphy-id":h.id},n&&wA&&zA.default.createElement("track",{label:"English",kind:"subtitles",srcLang:C,src:wA,default:!0})):null};MN.className=dN;Tf.default=MN;var wE=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},wi=d&&d.__assign||function(){return wi=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},wi.apply(this,arguments)},RV=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),mV=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),YV=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&RV(B,A,Q);return mV(B,A),B},Oi=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(mI,"__esModule",{value:!0});var FE=Oi(oB),hN=EQ,eB=YV(b),pV=Oi(dI),yV=Oi(vf),qh=YI,NV=Oi(Hf),GN=Oi(Tf),bV=FE.default.div(_h||(_h=wE([`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    font-family: interface, helvetica, arial;
    -webkit-font-smoothing: antialiased;
`],[`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    font-family: interface, helvetica, arial;
    -webkit-font-smoothing: antialiased;
`]))),JV=FE.default.div($h||($h=wE([`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
`]))),kV=FE.default.div(AG||(AG=wE([`
    position: absolute;
    top: 10px;
    right: 10px;
    left: 10px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    opacity: `,`;
    transition: opacity ease-out 250ms;
    align-items: flex-start;
`],[`
    position: absolute;
    top: 10px;
    right: 10px;
    left: 10px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    opacity: `,`;
    transition: opacity ease-out 250ms;
    align-items: flex-start;
`])),function(A){return A.isHovered?1:0}),vV=FE.default.div(BG||(BG=wE([`
    font-size: 22px;
    color: white;
    margin-bottom: 5px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
`],[`
    font-size: 22px;
    color: white;
    margin-bottom: 5px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
`]))),ZV=FE.default.div(QG||(QG=wE([`
    position: relative;
    min-width: 0;
`],[`
    position: relative;
    min-width: 0;
`]))),SV=FE.default.div(eG||(eG=wE([`
    &:before {
        background: linear-gradient(rgba(18, 18, 18, 0.6), rgba(0, 0, 0, 0));
        content: '';
        height: `,`px;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &:after {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
        content: '';
        height: `,`px;
        left: 0;
        pointer-events: none;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`],[`
    &:before {
        background: linear-gradient(rgba(18, 18, 18, 0.6), rgba(0, 0, 0, 0));
        content: '';
        height: `,`px;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &:after {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
        content: '';
        height: `,`px;
        left: 0;
        pointer-events: none;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`])),function(A){return A.isLargePlayer?125:75},function(A){return A.isLargePlayer?125:75}),LV=300,XV=4e3,HV=function(A){var B=A.width,Q=A.hideMute,e=A.hideAttribution,t=A.hideProgressBar,g=A.className,n=A.persistentControls,E=A.gif,C=A.overlay,i=(0,eB.useState)(!1),r=i[0],a=i[1],o=(0,eB.useState)(null),l=o[0],I=o[1],w=(0,eB.useState)(A.muted),U=w[0],c=w[1],D=(0,eB.useState)(!1),s=D[0],u=D[1],f=A.setVideoEl,M=A.onMuted,h=A.onUserMuted,Y=A.height||(0,hN.getGifHeight)(E,B),m=(0,pV.default)(function(){a(!1)},XV),L=m[1],X=m[2],W=(0,eB.useCallback)(function(y){M==null||M(y),u(y)},[u,M]),K=(0,eB.useCallback)(function(y){f==null||f(y),I(y)},[f,I]),R=function(){s?(u(!1),c(!1)):c(!U)};(0,eB.useEffect)(function(){c(A.muted)},[A.muted]);var J=n||r,q=Y>=LV;return(0,eB.useEffect)(function(){return J?X():L(),function(){return L()}},[J,L,X]),eB.default.createElement(bV,{className:g,style:{width:B,height:Y},onMouseOver:function(){return a(!0)},onMouseLeave:function(){return a(!1)},onMouseMove:function(){a(!0),X()},onClick:function(y){h==null||h(!(U||s)),l==null||l.play(),y.preventDefault(),R()}},eB.default.createElement(GN.default,wi({},A,{onMuted:W,setVideoEl:K,muted:U})),J&&eB.default.createElement(SV,{isLargePlayer:q}),eB.default.createElement(kV,{isHovered:J},eB.default.createElement(ZV,null,q&&eB.default.createElement(vV,{onClick:function(y){y.preventDefault(),y.stopPropagation(),window.open(E.url,"_blank")}},E.title),l&&!e?eB.default.createElement(yV.default,{gif:E}):null),!Q&&eB.default.createElement(JV,null,U||s?eB.default.createElement(qh.VolumeOffIcon,null):eB.default.createElement(qh.VolumeOnIcon,null))),J&&!t&&l?eB.default.createElement(NV.default,{videoEl:l}):null,C&&eB.default.createElement(C,{gif:E,isHovered:r,width:B,height:Y}))},OV=function(A){return A.overlay&&!A.controls&&console.warn("".concat(hN.Logger.PREFIX,": Overlays only work when controls are enabled")),A.controls?eB.default.createElement(HV,wi({},A)):eB.default.createElement(GN.default,wi({},A))};mI.default=OV;var _h,$h,AG,BG,QG,eG,RN={};(function(A){var B=d&&d.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(A,"__esModule",{value:!0}),A.PauseIcon=A.PlayIcon=A.PlayPauseSize=void 0;var Q=B(b);A.PlayPauseSize=25;var e=function(g){var n=g.size,E=n===void 0?A.PlayPauseSize:n;return Q.default.createElement("svg",{height:E,viewBox:"15.39 10.84 18.21 24",width:E,xmlns:"http://www.w3.org/2000/svg"},Q.default.createElement("g",{fillRule:"evenodd",fill:"none"},Q.default.createElement("path",{fill:"#fff",d:"M15.836 10.842c.135 0 .27.04.404.12L33.444 22.86c.107.087.161.19.161.311 0 .12-.054.224-.161.31-11.649 7.575-17.528 11.362-17.64 11.362a.632.632 0 0 1-.41-.13l.025-23.75a.804.804 0 0 1 .417-.12z"})))};A.PlayIcon=e;var t=function(g){var n=g.size,E=n===void 0?A.PlayPauseSize:n;return Q.default.createElement("svg",{height:E,viewBox:"0.92 0.92 23.54 24",width:E,xmlns:"http://www.w3.org/2000/svg"},Q.default.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},Q.default.createElement("g",{id:"Group",transform:"translate(0.916948, 0.916948)",fill:"#FFFFFF",fillRule:"nonzero"},Q.default.createElement("path",{d:"M0,23.2 L0,0.8 C0,0.3581722 0.3581722,0 0.8,0 L8.2,0 C8.64182776,0 9,0.3581722 9,0.8 L9,23.2 C9,23.6418278 8.64182776,24 8.2,24 L0.8,24 C0.3581722,24 0,23.6418278 0,23.2 Z",id:"Path"}),Q.default.createElement("path",{d:"M14.5408163,23.2 L14.5408163,0.8 C14.5408163,0.3581722 14.8989886,0 15.3408163,0 L22.7408163,0 C23.1826441,0 23.5408163,0.3581722 23.5408163,0.8 L23.5408163,23.2 C23.5408163,23.6418278 23.1826441,24 22.7408163,24 L15.3408163,24 C14.8989886,24 14.5408163,23.6418278 14.5408163,23.2 Z",id:"Path"}))))};A.PauseIcon=t})(RN);var Vf={},xf=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},KF=d&&d.__assign||function(){return KF=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},KF.apply(this,arguments)},WV=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),TV=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),VV=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&WV(B,A,Q);return TV(B,A),B},mN=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(Vf,"__esModule",{value:!0});var zf=mN(oB),Ve=VV(b),xV=mN(mI),tG=YI,zV=zf.default.div(gG||(gG=xf([`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
`],[`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
`]))),PV=(0,zf.default)(xV.default)(nG||(nG=xf([`
    height: 100%;
    display: inline-block;
    object-fit: fill;
    pointer-events: none;
    background: rgb(0, 0, 0, 0);
`],[`
    height: 100%;
    display: inline-block;
    object-fit: fill;
    pointer-events: none;
    background: rgb(0, 0, 0, 0);
`]))),jV=zf.default.div(EG||(EG=xf([`
    position: absolute;
    top: 6px;
    right: 6px;
    cursor: pointer;
    opacity: `,`;
    transition: opacity ease-out 800ms;
`],[`
    position: absolute;
    top: 6px;
    right: 6px;
    cursor: pointer;
    opacity: `,`;
    transition: opacity ease-out 800ms;
`])),function(A){return A.isHovered?1:.8}),YN="giphy-video-overlay-button",KV=function(A){var B=A.muted,Q=A.toggleMute,e=A.mutedByBrowser,t=A.isHovered;return Ve.default.createElement(jV,{className:YN,onClick:function(g){g.preventDefault(),g.stopPropagation(),Q()},isHovered:t},B||e||!t?Ve.default.createElement(tG.VolumeOffIcon,null):Ve.default.createElement(tG.VolumeOnIcon,null))},pN=function(A){var B=A.gif,Q=A.isHovered,e=A.hideMuteButton,t=A.width,g=A.height,n=A.className,E=A.muted,C=E===void 0?!1:E,i=A.onUserMuted,r=(0,Ve.useState)(C),a=r[0],o=r[1],l=(0,Ve.useState)(!1),I=l[0],w=l[1],U=function(){I?(w(!1),o(!1)):(i==null||i(!a),o(!a))};(0,Ve.useEffect)(function(){o(C)},[C,o]);var c={toggleMute:U,muted:a,mutedByBrowser:I};return Ve.default.createElement(zV,{className:n},Q&&Ve.default.createElement(PV,{gif:B,key:B.id,loop:!0,controls:!0,hideAttribution:!0,hideMute:!0,persistentControls:!0,muted:a,width:t,height:g,onMuted:w}),!e&&Ve.default.createElement(KV,KF({},c,{isHovered:Q})))};pN.imgClassName=YN;Vf.default=pN;var gG,nG,EG,pI={},Pf={},qr={},CG;function qV(){if(CG)return qr;CG=1,Object.defineProperty(qr,"__esModule",{value:!0});var A=b;function B(){var Q=A.useRef(!1),e=A.useCallback(function(){return Q.current},[]);return A.useEffect(function(){return Q.current=!0,function(){Q.current=!1}},[]),e}return qr.default=B,qr}Object.defineProperty(Pf,"__esModule",{value:!0});var qF=Jg,Vl=b,_V=qF.__importDefault(qV());function $V(A,B,Q){B===void 0&&(B=[]),Q===void 0&&(Q={loading:!1});var e=Vl.useRef(0),t=_V.default(),g=Vl.useState(Q),n=g[0],E=g[1],C=Vl.useCallback(function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];var a=++e.current;return n.loading||E(function(o){return qF.__assign(qF.__assign({},o),{loading:!0})}),A.apply(void 0,i).then(function(o){return t()&&a===e.current&&E({value:o,loading:!1}),o},function(o){return t()&&a===e.current&&E({error:o,loading:!1}),o})},B);return[n,C]}Pf.default=$V;var jf={};Object.defineProperty(jf,"__esModule",{value:!0});var A8=b,B8=function(A){var B=A8.useRef(A);return B.current=A,B};jf.default=B8;var Wi=d&&d.__makeTemplateObject||function(A,B){return Object.defineProperty?Object.defineProperty(A,"raw",{value:B}):A.raw=B,A},Yn=d&&d.__assign||function(){return Yn=Object.assign||function(A){for(var B,Q=1,e=arguments.length;Q<e;Q++){B=arguments[Q];for(var t in B)Object.prototype.hasOwnProperty.call(B,t)&&(A[t]=B[t])}return A},Yn.apply(this,arguments)},Q8=d&&d.__createBinding||(Object.create?function(A,B,Q,e){e===void 0&&(e=Q);var t=Object.getOwnPropertyDescriptor(B,Q);(!t||("get"in t?!B.__esModule:t.writable||t.configurable))&&(t={enumerable:!0,get:function(){return B[Q]}}),Object.defineProperty(A,e,t)}:function(A,B,Q,e){e===void 0&&(e=Q),A[e]=B[Q]}),e8=d&&d.__setModuleDefault||(Object.create?function(A,B){Object.defineProperty(A,"default",{enumerable:!0,value:B})}:function(A,B){A.default=B}),t8=d&&d.__importStar||function(A){if(A&&A.__esModule)return A;var B={};if(A!=null)for(var Q in A)Q!=="default"&&Object.prototype.hasOwnProperty.call(A,Q)&&Q8(B,A,Q);return e8(B,A),B},g8=d&&d.__awaiter||function(A,B,Q,e){function t(g){return g instanceof Q?g:new Q(function(n){n(g)})}return new(Q||(Q=Promise))(function(g,n){function E(r){try{i(e.next(r))}catch(a){n(a)}}function C(r){try{i(e.throw(r))}catch(a){n(a)}}function i(r){r.done?g(r.value):t(r.value).then(E,C)}i((e=e.apply(A,B||[])).next())})},n8=d&&d.__generator||function(A,B){var Q={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},e,t,g,n;return n={next:E(0),throw:E(1),return:E(2)},typeof Symbol=="function"&&(n[Symbol.iterator]=function(){return this}),n;function E(i){return function(r){return C([i,r])}}function C(i){if(e)throw new TypeError("Generator is already executing.");for(;n&&(n=0,i[0]&&(Q=0)),Q;)try{if(e=1,t&&(g=i[0]&2?t.return:i[0]?t.throw||((g=t.return)&&g.call(t),0):t.next)&&!(g=g.call(t,i[1])).done)return g;switch(t=0,g&&(i=[i[0]&2,g.value]),i[0]){case 0:case 1:g=i;break;case 4:return Q.label++,{value:i[1],done:!1};case 5:Q.label++,t=i[1],i=[0];continue;case 7:i=Q.ops.pop(),Q.trys.pop();continue;default:if(g=Q.trys,!(g=g.length>0&&g[g.length-1])&&(i[0]===6||i[0]===2)){Q=0;continue}if(i[0]===3&&(!g||i[1]>g[0]&&i[1]<g[3])){Q.label=i[1];break}if(i[0]===6&&Q.label<g[1]){Q.label=g[1],g=i;break}if(g&&Q.label<g[2]){Q.label=g[2],Q.ops.push(i);break}g[2]&&Q.ops.pop(),Q.trys.pop();continue}i=B.call(A,Q)}catch(r){i=[6,r],t=0}finally{e=g=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},E8=d&&d.__rest||function(A,B){var Q={};for(var e in A)Object.prototype.hasOwnProperty.call(A,e)&&B.indexOf(e)<0&&(Q[e]=A[e]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(A);t<e.length;t++)B.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(A,e[t])&&(Q[e[t]]=A[e[t]]);return Q},Ti=d&&d.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(pI,"__esModule",{value:!0});pI.EmojiVariationsList=void 0;var _Q=t8(b),Vi=Ti(oB),C8=Ti(Pf),iG=Ti(jf),yN=be,i8=EQ,r8=Ti(fI),rG=Ti(Si),a8=yN.giphyDarkGrey,o8=yN.giphyCharcoal,I8=.75,s8=Vi.default.div(oG||(oG=Wi([`
    align-items: center;
    background-color: `,`;
    border-radius: 16px;
    display: flex;
    max-width: fit-content;
    overflow: hidden;
    padding: 4px 5px 5px 6px;
`],[`
    align-items: center;
    background-color: `,`;
    border-radius: 16px;
    display: flex;
    max-width: fit-content;
    overflow: hidden;
    padding: 4px 5px 5px 6px;
`])),function(A){var B=A.backgroundColor;return B}),c8=Vi.default.div(IG||(IG=Wi([`
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch;
`],[`
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch;
`]))),l8=Vi.default.div(sG||(sG=Wi([`
    display: inline-flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
    width: `,`;
`],[`
    display: inline-flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
    width: `,`;
`])),function(A){var B=A.width;return"".concat(B,"px")}),w8=Vi.default.div(cG||(cG=Wi([`
    background-color: `,`;
    box-sizing: border-box;
    height: `,`;
    margin: `,`;
    width: 2px;
`],[`
    background-color: `,`;
    box-sizing: border-box;
    height: `,`;
    margin: `,`;
    width: 2px;
`])),function(A){var B=A.color;return B},function(A){var B=A.gifHeight;return"".concat(Math.round(B*I8),"px")},function(A){var B=A.gutter;return"0 ".concat(B,"px")}),aG=(0,Vi.default)(rG.default)(lG||(lG=Wi([`
    display: inline-block;
    flex-shrink: 0;
    list-style: none;
    /* make sure gifs are fully visible with a scrollbar */
    margin-bottom: 1px;
    position: relative;

    .`,` {
        position: absolute;
        top: 0;
        left: 0;
    }
`],[`
    display: inline-block;
    flex-shrink: 0;
    list-style: none;
    /* make sure gifs are fully visible with a scrollbar */
    margin-bottom: 1px;
    position: relative;

    .`,` {
        position: absolute;
        top: 0;
        left: 0;
    }
`])),rG.default.imgClassName);function Qe(A){var B=this,Q,e=A.backgroundColor,t=e===void 0?a8:e,g=A.className,n=A.dividerColor,E=n===void 0?o8:n,C=A.fetchVariations,i=A.gif,r=A.gifHeight,a=A.GifProps,o=a===void 0?{}:a,l=A.gifWidth,I=A.gutter,w=I===void 0?6:I,U=A.hideAttribution,c=A.loader,D=A.noLink,s=A.onGifClick,u=A.onGifKeyPress,f=A.onGifRightClick,M=A.onGifSeen,h=A.onGifVisible,Y=A.onVariationsFetched,m=A.overlay,L=A.tabIndex,X=L===void 0?0:L,W=A.user,K=E8(A,["backgroundColor","className","dividerColor","fetchVariations","gif","gifHeight","GifProps","gifWidth","gutter","hideAttribution","loader","noLink","onGifClick","onGifKeyPress","onGifRightClick","onGifSeen","onGifVisible","onVariationsFetched","overlay","tabIndex","user"]),R=(Q=i.variation_count)!==null&&Q!==void 0?Q:0,J=l||(0,i8.getGifWidth)(i,r),q=R*J+Math.max(0,R-1)*w,y=(0,iG.default)(C),G=(0,iG.default)(Y),v=(0,C8.default)(function(){return g8(B,void 0,void 0,function(){var O,eA,N;return n8(this,function($){switch($.label){case 0:return[4,y.current(i.id)];case 1:return O=$.sent(),eA=(N=O==null?void 0:O.data)!==null&&N!==void 0?N:[],G.current&&G.current(eA),[2,eA]}})})},[i],{loading:!0,value:[]}),S=v[0],k=v[1];(0,_Q.useEffect)(function(){k()},[k]);var Z=Yn({backgroundColor:"transparent",height:r,hideAttribution:U,noLink:D,onGifClick:s,onGifKeyPress:u,onGifRightClick:f,onGifSeen:M,onGifVisible:h,overlay:m,tabIndex:X,user:W,width:J},o),T=function(){var O;return S.loading?c?_Q.default.createElement(c,{className:Qe.loaderClassName}):null:S.error?_Q.default.createElement(r8.default,{onClick:k}):_Q.default.createElement(_Q.default.Fragment,null,((O=S.value)!==null&&O!==void 0?O:[]).map(function(eA){return _Q.default.createElement(aG,Yn({},Z,{key:eA.id,gif:eA}))}))};return _Q.default.createElement(s8,Yn({backgroundColor:t,className:[Qe.className,g].join(" ")},K),_Q.default.createElement(aG,Yn({},Z,{gif:i})),R?_Q.default.createElement(w8,{className:Qe.dividerClassName,color:E,gifHeight:r,gutter:w}):null,_Q.default.createElement(c8,{className:Qe.variationsViewportClassName},_Q.default.createElement(l8,{className:Qe.variationsContainerClassName,width:q},T())))}pI.EmojiVariationsList=Qe;Qe.className="giphy-emoji-variations-list";Qe.dividerClassName="giphy-emoji-variations-divider";Qe.loaderClassName="giphy-emoji-variations-loader";Qe.variationsViewportClassName="giphy-emoji-variations-viewport";Qe.variationsContainerClassName="giphy-emoji-variations-container";var oG,IG,sG,cG,lG;const F8={clean:"rm -rf ./dist",types:"tsc ./src/index.tsx -d --emitDeclarationOnly -declarationDir ./dist",dev:"start-storybook -p 5001",build:"tsc",prepublish:"npm run clean && tsc","deploy-storybook":"storybook-to-ghpages",snapshot:"NODE_ENV=PERCY build-storybook && percy storybook ./storybook-static","cy:run":"percy exec -- cypress run --component -b chrome","cy:open":"cypress open --component -b chrome","cy:verify":"cypress verify","cy:info":"cypress info"},D8={"@babel/core":"^7.18.6","@cypress/react":"^7.0.1","@percy/cli":"^1.16.0","@percy/cypress":"^3.1.2","@percy/storybook":"4.3.4","@storybook/addon-actions":"^6.5.13","@storybook/addon-info":"^5.3.21","@storybook/addon-knobs":"^6.4.0","@storybook/addon-viewport":"6.5.13","@storybook/addons":"^6.5.13","@storybook/react":"^6.5.13","@storybook/storybook-deployer":"^2.8.16","@storybook/testing-react":"^1.3.0","@types/react":"^18.0.25","@types/react-dom":"^18.0.9","@types/storybook__react":"^5.2.1","@types/throttle-debounce":"^2.1.0","awesome-typescript-loader":"^5.2.1","babel-loader":"^8.2.5",cypress:"^11.2.0","fetch-mock":"^9.11.0","parcel-bundler":"latest",react:"^18.2.0","react-dom":"^18.2.0","storybook-addon-jsx":"^7.3.14","ts-loader":"^9.3.1",typescript:"^4.7.4",webpack:"^5.74.0"},u8="@giphy/react-components",f8="6.8.1",U8="A lightweight set of components, focused on easy-of-use and performance.",d8="https://github.com/Giphy/giphy-js/tree/master/packages/react-components",M8="dist/index.js",h8="dist/index.d.ts",G8=["dist/**/*","src/**/*"],R8="giannif",m8="MIT",Y8={access:"public"},p8={react:"16.10.2 - 18"},y8={foreachasync:"5.1.3"},N8={"@emotion/react":"11.9.3","@emotion/styled":"11.9.3","@giphy/js-analytics":"^4.2.0","@giphy/js-brand":"^2.2.2","@giphy/js-fetch-api":"^4.8.1","@giphy/js-types":"^4.4.0","@giphy/js-util":"^4.3.0","intersection-observer":"^0.12.2","react-use":"17.4.0","throttle-debounce":"^3.0.1"},b8="dc692291b1a2a0ba79bad5298896b75ab2b21e83",J8={scripts:F8,devDependencies:D8,name:u8,version:f8,description:U8,homepage:d8,main:M8,types:h8,files:G8,author:R8,license:m8,publishConfig:Y8,peerDependencies:p8,resolutions:y8,dependencies:N8,gitHead:b8};(function(A){var B=d&&d.__createBinding||(Object.create?function(u,f,M,h){h===void 0&&(h=M);var Y=Object.getOwnPropertyDescriptor(f,M);(!Y||("get"in Y?!f.__esModule:Y.writable||Y.configurable))&&(Y={enumerable:!0,get:function(){return f[M]}}),Object.defineProperty(u,h,Y)}:function(u,f,M,h){h===void 0&&(h=M),u[h]=f[M]}),Q=d&&d.__exportStar||function(u,f){for(var M in u)M!=="default"&&!Object.prototype.hasOwnProperty.call(f,M)&&B(f,u,M)},e=d&&d.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(A,"__esModule",{value:!0}),A.EmojiVariationsList=A.VideoOverlay=A.Video=A.SuggestionBar=A.SearchContext=A.SearchContextManager=A.SearchBar=A.PingbackContext=A.Loader=A.Grid=A.Gif=A.Carousel=A.VerifiedBadge=A.AttributionOverlay=A.Attribution=void 0;var t=EQ,g=Ko;Object.defineProperty(A,"Attribution",{enumerable:!0,get:function(){return e(g).default}});var n=II;Object.defineProperty(A,"AttributionOverlay",{enumerable:!0,get:function(){return e(n).default}});var E=Lg;Object.defineProperty(A,"VerifiedBadge",{enumerable:!0,get:function(){return e(E).default}});var C=If;Object.defineProperty(A,"Carousel",{enumerable:!0,get:function(){return e(C).default}});var i=Si;Object.defineProperty(A,"Gif",{enumerable:!0,get:function(){return e(i).default}});var r=wf;Object.defineProperty(A,"Grid",{enumerable:!0,get:function(){return e(r).default}});var a=UI;Object.defineProperty(A,"Loader",{enumerable:!0,get:function(){return e(a).default}});var o=lE;Object.defineProperty(A,"PingbackContext",{enumerable:!0,get:function(){return o.PingbackContext}});var l=uf;Object.defineProperty(A,"SearchBar",{enumerable:!0,get:function(){return e(l).default}});var I=Ag;Object.defineProperty(A,"SearchContextManager",{enumerable:!0,get:function(){return e(I).default}}),Object.defineProperty(A,"SearchContext",{enumerable:!0,get:function(){return I.SearchContext}});var w=bf;Object.defineProperty(A,"SuggestionBar",{enumerable:!0,get:function(){return e(w).default}});var U=mI;Object.defineProperty(A,"Video",{enumerable:!0,get:function(){return e(U).default}}),Q(RN,A),Q(YI,A);var c=Vf;Object.defineProperty(A,"VideoOverlay",{enumerable:!0,get:function(){return e(c).default}});var D=pI;Object.defineProperty(A,"EmojiVariationsList",{enumerable:!0,get:function(){return D.EmojiVariationsList}});var s=J8.version;(0,t.appendGiphySDKRequestHeader)("X-GIPHY-SDK-NAME","ReactSDK"),(0,t.appendGiphySDKRequestHeader)("X-GIPHY-SDK-VERSION",s)})(y1);var io={},k8={get exports(){return io},set exports(A){io=A}};(function(A,B){(function(Q,e){A.exports=e()})(d,function(){(function(g){function n(){return new Promise(function(o,l){var I="wss://javascript.info/article/websocket/chat/ws";console.log("[WS]: Start testing"),console.log("[WS]: Connecting to "+I);try{var w=new WebSocket(I);w.onopen=function(U){var c="test-msg";console.log("[WS]: Connection established"),console.log("[WS]: Sending data to socket, msg: "+c),w.send(c)},w.onmessage=function(U){console.log("[WS]: Data received from server: "+U.data),console.log("[WS]: Finish testing - OK"),o()},w.onerror=function(U){console.log("[WS]: ",U.message),console.log("[WS]: Finish testing - ERROR"),l()}}catch(U){console.log("[WS]: ",U),l()}})}function E(){return new Promise(function(o,l){if(console.log("[WebWorker]: Start testing"),typeof Worker<"u"){console.log("[WebWorker]: Has Web Worker support");try{var I=new Worker(window.URL.createObjectURL(new Blob(["onmessage = function(e) {console.log('[WebWorker]: Message received from main script');var workerResult = e.data[0];console.log('[WebWorker]: Posting message back to main script');postMessage(workerResult);}"])));I.onmessage=function(w){console.log("[WebWorker]: Message received from worker: ",w.data),console.log("[WebWorker]: Finish testing - OK"),o()},I.onerror=function(w){console.error("[WebWorker]: Finish testing - ERROR"),l()},I.postMessage(["test-msg"])}catch{console.error("[WebWorker]: Finish testing - ERROR"),l()}}else console.log("[WebWorker]: No Web Worker support"),l()})}function C(){return new Promise(function(o,l){console.log("[ORIGN]: Start testing");var I=window.location.protocol,w=window.location.hostname;I==="https:"||I==="file:"||I==="http:"&&(w.indexOf("localhost")>-1||w.indexOf("127.0.0.1")>-1)?(console.log("[ORIGN]: Secure"),console.log("[ORIGN]: Finish testing - OK"),o()):(console.log("[ORIGN]: Not secure"),console.log("[ORIGN]: Finish testing - ERROR"),l())})}function i(){return new Promise(function(o,l){console.log("[AUDIO CONTEXT]: Start testing");var I=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,w=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;I&&w?(console.log("[AUDIO CONTEXT]: Audio supported"),console.log("[AUDIO CONTEXT]: Finish testing - OK"),o()):(console.log("[AUDIO CONTEXT]: Audio NOT supported"),console.log("[AUDIO CONTEXT DETAILS]:",r()),console.log("[AUDIO CONTEXT]: Finish testing - ERROR"),l())})}function r(){var o="";return o+="getUserMedia: ",o+=navigator.getUserMedia?"1":"0",o+=", ",o+="mediaDevices: ",o+=navigator.mediaDevices?"1":"0",o+=", ",o+="mediaDevices.getUserMedia: ",o+=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?"1":"0",o+=", ",o+="webkitGUM: ",o+=navigator.webkitGetUserMedia?"1":"0",o+=", ",o+="mozGUM: ",o+=navigator.mozGetUserMedia?"1":"0",o+=", ",o+="msGUM: ",o+=navigator.msGetUserMedia?"1":"0",o+=`
`,o+=`window: 
`,o+="AudioContext: ",o+=window.AudioContext?"1":"0",o+=", ",o+="webkitAC: ",o+=window.webkitAudioContext?"1":"0",o+=", ",o+="mozAC: ",o+=window.mozAudioContext?"1":"0",o+=`
`,o+="userAgent: ",o+=navigator.userAgent,o}function a(){var o=this,l=Object.keys(this);function I(w){return o[w]()}return l=l.filter(w=>w!=="run"&&w!=="getAudioDebugInfo"),l.reduce((w,U)=>w.then(()=>I(U)),Promise.resolve())}g.alanDiagnostic={testSocket:n,testWorker:E,testOrignSecure:C,testAudioContext:i,getAudioDebugInfo:r,run:a}})(window),function(g){var n="studio.alan.app",E={baseURL:"wss://"+(n.indexOf("$")===0||n===""?window.location.hostname:n),codec:"opus",version:"2.0.45",platform:"web"};function C(){var I=this;this._worker=new Worker(window.URL.createObjectURL(new Blob([`(function(ns) {
    'use strict';

    var SENT_TS    = 1;
    var REMOTE_TS  = 2;
    var TIMESTAMP  = 3;
    var AUDIO_DATA = 4;
    var JSON_DATA  = 5;

    AlanFrame.fields = [
        propUint64(SENT_TS,   'sentTs'),
        propUint64(REMOTE_TS, 'remoteTs'),
        propUint64(TIMESTAMP, 'timestamp'),
        propBytes(AUDIO_DATA, 'audioData'),
        propJson(JSON_DATA,   'jsonData'),
    ];

    function AlanFrameProp(type, name, sizeF, readF, writeF) {
        this.type   = type;
        this.name   = name;
        this.sizeF  = sizeF;
        this.writeF = writeF;
        this.readF  = readF;
    }

    function fixedSize(size) {
        return function() {
            return size;
        }
    }

    function bufferSize(buffer) {
        return 4 + byteLength(buffer);
    }

    function writeUIntN(uint8array, value, nBytes, offset) {
        for (var i = 0; i < nBytes; i++ ) {
            uint8array[offset + i] = 0xFF & value;
            value /= 256;
        }
    }

    function readUIntN(uint8array, nBytes, offset) {
        var r = 0;
        for (var i = nBytes - 1; i >= 0; i-- ) {
            r *= 256;
            r += 0xFF & uint8array[offset + i];
        }
        return r;
    }

    function writeUInt64(uint8array, value, offset) {
        writeUIntN(uint8array, value, 8, offset);
    }

    function readUInt64(uint8array, offset) {
        return readUIntN(uint8array, 8, offset);
    }

    function writeUInt32(uint8array, value, offset) {
        writeUIntN(uint8array, value, 4, offset);
    }

    function readUInt32(uint8array, offset) {
        return readUIntN(uint8array, 4, offset);
    }

    function writeBuffer(uint8array, buffer, offset) {
        buffer = toUint8(buffer);
        writeUInt32(uint8array, buffer.length, offset);
        for (var i = 0; i < buffer.length; i++ ) {
            uint8array[offset + 4 + i] = buffer[i];
        }
    }

    function readBuffer(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('buffer too big');
        }
        return uint8array.subarray(offset + 4, offset + 4 + size);
    }

    function readUTF8(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('string too big');
        }
        return String.fromCharCode.apply(null, uint8array.slice(offset + 4, offset + 4 + size));
    }

    function writeUTF8(uint8array, string, offset) {
        writeUInt32(uint8array, string.length, offset);
        for (var i = 0; i < string.length; i++ ) {
            uint8array[offset + 4 + i] = string.charCodeAt(i);
        }
    }

    function sizeUTF8(string) {
        return 4 + string.length;
    }

    function propUint32(type, name) {
        return new AlanFrameProp(type, name, fixedSize(4), readUInt32, writeUInt32);
    }

    function propUint64(type, name) {
        return new AlanFrameProp(type, name, fixedSize(8), readUInt64, writeUInt64);
    }

    function propBytes(type, name) {
        return new AlanFrameProp(type, name, bufferSize, readBuffer, writeBuffer);
    }

    function propJson(type, name) {
        return new AlanFrameProp(type, name, sizeUTF8, readUTF8, writeUTF8);
    }

    AlanFrame.fieldByType = function(type) {
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var frame = AlanFrame.fields[i];
            if (frame.type === type) {
                return frame;
            }
        }
        throw new Error('invalid field: ' + type);
    };

    function AlanFrame() {
        this.version = 1;
    }

    AlanFrame.prototype.write = function() {
        var result = new Uint8Array(this.writeSize());
        var offset = 1;
        result[0]  = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                result[offset++] = field.type;
                field.writeF(result, value, offset);
                offset += field.sizeF(value);
            }
        }
        return result.buffer;
    };

    /**
     * @returns UInt8Array
     */
    AlanFrame.prototype.writeSize = function() {
        var size = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                size += 1 + field.sizeF(value);
            }
        }
        return size;
    };

    AlanFrame.prototype.toString = function() {
        var first = true, str = '';
        for (var k in this) {
            if (this.hasOwnProperty(k)) {
                if (first) {
                    str += k + ' = ';
                    first = false;
                } else {
                    str += ', ' + k + ' = ';
                }
                var v = this[k];
                if (typeof(v) === 'object') {
                    str += 'bytes[' + byteLength(v) + ']';
                } else {
                    str += v;
                }
            }
        }
        return str;
    };

    function byteLength(b) {
        if (b instanceof Uint8Array) {
            return b.length;
        }
        if (b instanceof ArrayBuffer) {
            return b.byteLength;
        }
    }

    function toArrayBuffer(buffer) {
        if (buffer instanceof ArrayBuffer) {
            return buffer;
        }
        return buffer.buffer;
    }

    function toUint8(buffer) {
        if (buffer instanceof Uint8Array) {
            return buffer;
        }
        if (buffer instanceof ArrayBuffer) {
            return new Uint8Array(buffer);
        }
        throw new Error('invalid buffer type');
    }

    function parse(uint8array) {
        uint8array = toUint8(uint8array);
        var r = new AlanFrame();
        var offset = 0;
        r.version = uint8array[offset++];
        while (offset < uint8array.length) {
            var frame = AlanFrame.fieldByType(uint8array[offset++]);
            r[frame.name] = frame.readF(uint8array, offset);
            offset += frame.sizeF(r[frame.name]);
        }
        return r;
    }

    ns.create = function() {
        return new AlanFrame();
    };

    ns.parse = parse;

})(typeof(window)            !== 'undefined' ? (function() {window.alanFrame = {}; return window.alanFrame; })() :
   typeof(WorkerGlobalScope) !== 'undefined' ? (function() {alanFrame = {}; return alanFrame; })() :
   exports);


'use strict';



var ALAN_OFF       = 'off';
var ALAN_SPEAKING  = 'speaking';
var ALAN_LISTENING = 'listening';

function ConnectionImpl(config, auth, mode) {
    var _this = this;
    this._config = config;
    this._auth = auth;
    this._mode = mode;
    this._projectId = config.projectId;
    this._url = config.url;
    this._connected = false;
    this._authorized = false;
    this._dialogId = null;
    this._callId = 1;
    this._callSent = {};
    this._callWait = [];
    this._failed = false;
    this._closed = false;
    this._reconnectTimeout = 100;
    this._cleanups = [];
    this._format = null;
    this._formatSent = false;
    this._frameQueue = [];
    this._remoteSentTs = 0;
    this._remoteRecvTs = 0;
    this._rtt = 25;
    this._rttAlpha = 1./16;
    this._alanState = ALAN_OFF;
    this._sendTimer = setInterval(_this._flushQueue.bind(_this), 50);
    this._visualState = {};
    this._addCleanup(function() {clearInterval(_this._sendTimer);});
    this._connect();
    console.log('Alan: connection created');
}

ConnectionImpl.prototype._addCleanup = function(f) {
    this._cleanups.push(f);
};

ConnectionImpl.prototype._onConnectStatus = function(s) {
    console.log('Alan: connection status - ' + s);
    this._fire('connectStatus', s);
};

ConnectionImpl.prototype._fire = function(event, object) {
    if (event === 'options') {
        if (object.versions) {
            object.versions['alanbase:web'] = this._config.version;
        }
    }
    postMessage(['fireEvent', event, object]);
};

ConnectionImpl.prototype._connect = function() {
    var _this = this;
    if (this._socket) {
        console.error('socket is already connected');
        return;
    }
    console.log('Alan: connecting - ' + getConnectionDetails(this._url));
    this._socket = new WebSocket(this._url);
    this._socket.binaryType = 'arraybuffer';
    this._socket.onopen = function(e) {
        console.info('Alan: connected');
        _this._connected = true;
        _this._reconnectTimeout = 100;
        _this._fire('connection', {status: 'connected'});
        if (_this._auth) {
            _this._fire('connection', {status: 'authorizing'});
            _this._callAuth();
        } else {
            _this._callWait.forEach(function(c) {  _this._sendCall(c); });
            _this._callWait = [];
        }
    };
    this._socket.onmessage = function(msg) {
        if (msg.data instanceof ArrayBuffer) {
            var f = alanFrame.parse(msg.data);
            if (f.sentTs > 0) {
                _this._remoteSentTs = f.sentTs;
                _this._remoteRecvTs = Date.now();
            } else {
                _this._remoteSentTs = null;
                _this._remoteRecvTs = null;
            }
            var rtt = 0;
            if (f.remoteTs) {
                rtt = Date.now() - f.remoteTs;
            }
            _this._rtt = _this._rttAlpha * rtt  + (1 - _this._rttAlpha) * _this._rtt;
            var uint8 = new Uint8Array(f.audioData);
            var frame = [];
            var batch = 10000;
            for (var offset = 0; offset < uint8.byteLength; offset += batch) {
                var b = uint8.subarray(offset, Math.min(uint8.byteLength, offset + batch));
                let a = String.fromCharCode.apply(null, b);
                frame.push(a);
            }
            frame = frame.join('');
            postMessage(['alanAudio', 'playFrame', frame]);
        } else if (typeof(msg.data) === 'string') {
            msg = JSON.parse(msg.data);
            if (msg.i) {
                var c = _this._callSent[msg.i];
                delete _this._callSent[msg.i];
                if (c && c.callback) {
                    c.callback(msg.e, msg.r);
                }
            } else if (msg.e) {
                if (msg.e === 'text') {
                    postMessage(['alanAudio', 'playText', msg.p]);
                } else if (msg.e === 'afterText') {
                    postMessage(['alanAudio', 'playAfterText', msg.p]);
                } else if (msg.e === 'showPopup') {
                    postMessage(['alanAudio', 'showPopup', msg.p]);
                } else if (msg.e === 'command') {
                    postMessage(['alanAudio', 'playCommand', msg.p]);
                } else if (msg.e === 'inactivity') {
                    postMessage(['alanAudio', 'stop']);
                } else {
                    _this._fire(msg.e, msg.p);
                }
            }
        } else {
            console.error('invalid message type');
        }
    };
    this._socket.onerror = function(evt) {
        console.error('Alan: connection closed due to error: ', evt);
    };
    this._socket.onclose = function(evt) {
        console.info('Alan: connection closed');
        _this._connected = false;
        _this._authorized = false;
        _this._socket = null;
        _this._onConnectStatus('disconnected');
        if (!_this._failed && _this._reconnectTimeout && !_this._closed) {
            console.log('Alan: reconnecting in %s ms.', _this._reconnectTimeout);
            _this._reConnect = setTimeout(_this._connect.bind(_this), _this._reconnectTimeout);
            if (_this._reconnectTimeout < 3000) {
                _this._reconnectTimeout *= 2;
            } else {
                _this._reconnectTimeout += 500;
            }
            _this._reconnectTimeout = Math.min(7000, _this._reconnectTimeout);
        }
    };
    this._addCleanup(function() {
        if (this._socket) {
            this._socket.close();
            this._socket = null;
        }
    });
};

ConnectionImpl.prototype._callAuth = function() {
    var _this = this;
    var callback = function(err, r) {
        if (!err && r.status === 'authorized') {
            _this._authorized = true;
            _this._formatSent = false;
            if (r.dialogId) {
                postMessage(['setDialogId', r.dialogId]);
                _this._dialogId = r.dialogId;
            }
            _this._onAuthorized();
            _this._onConnectStatus('authorized');
        } else if (err === 'auth-failed') {
            _this._onConnectStatus('auth-failed');
            if (_this._socket) {
                _this._socket.close();
                _this._socket = null;
                _this._failed = true;
            }
        } else {
            _this._onConnectStatus('invalid-auth-response');
            console.log('Alan: invalid auth response', err, r);
        }
    };
    var authParam = this._auth;
    authParam.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (this._dialogId) {
        authParam.dialogId = this._dialogId;
    }
    authParam.mode = this._mode;
    this._sendCall({cid: this._callId++, method: '_auth_', callback: callback, param: authParam});
    return this;
};

ConnectionImpl.prototype._sendCall = function(call) {
    this._sendFormatIfNeeded(false);
    this._socket.send(JSON.stringify({i: call.cid, m: call.method, p: call.param}));
    if (call.callback) {
        this._callSent[call.cid] = call;
    }
};

ConnectionImpl.prototype._onAuthorized = function() {
    var _this = this;
    this._callWait.forEach(function(c) {
        _this._sendCall(c);
    });
    this._callWait = [];
};

ConnectionImpl.prototype.close = function() {
    for (var i = 0; i < this._cleanups.length; i++ ) {
        this._cleanups[i]();
    }
    this._cleanups = [];
    this._closed = true;
    
    if (this._socket && (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING)) {
        this._socket.close();
        this._socket = null;
    }
    console.log('Alan: closed connection to: ' + getConnectionDetails(this._url));
    //close(); TODO: delete it!
};

ConnectionImpl.prototype.call = function(cid, method, param) {
    var call = {cid: cid, method: method, param: param, callback: function(err, obj) {
        if (cid) {
            postMessage(['callback', cid, err, obj]);
        }
    }};
    if (this._authorized || this._connected && !this._auth) {
        this._sendCall(call);
    } else {
        this._callWait.push(call);
    }
};

ConnectionImpl.prototype.setVisual = function(state) {
    this._visualState = state;
    this.call(null, '_visual_', state);
};

ConnectionImpl.prototype._sendFrame = function(frame) {
    if (!this._socket) {
        console.error('sendFrame to closed socket');
        return;
    }
    frame.sentTs = Date.now();
    if (this._remoteSentTs > 0 && this._remoteRecvTs > 0) {
        frame.remoteTs = this._remoteSentTs + Date.now() - this._remoteRecvTs;
    }
    this._socket.send(frame.write());
};

ConnectionImpl.prototype._listen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'listen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_LISTENING;
};

ConnectionImpl.prototype._stopListen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'stopListen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_OFF;
};

ConnectionImpl.prototype._onAudioFormat = function(format) {
    this._formatSent = false;
    this._format = format;
};

ConnectionImpl.prototype._onMicFrame = function(sampleRate, frame) {
    if (this._alanState === ALAN_SPEAKING) {
        return;
    }
    if (this._alanState === ALAN_OFF) {
        this._listen();
    }
    if (this._alanState !== ALAN_LISTENING) {
        console.error('invalid alan state: ' + this._alanState);
        return;
    }
    this._sendFormatIfNeeded(true);
    var f = alanFrame.create();
    f.audioData = frame;
    this._frameQueue.push(f);
};

ConnectionImpl.prototype._sendFormatIfNeeded = function(inQueue) {
    if (!this._format || this._formatSent) {
        return;
    }
    this._formatSent = true;
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({format: this._format});
    if (inQueue) {
        this._frameQueue.push(f);
    } else {
        this._sendFrame(f);
    }
};

ConnectionImpl.prototype._flushQueue = function() {
    if (!this._socket || !this._connected) {
        var d = 0;
        while (this._frameQueue.length > 100 && !this._frameQueue[0].jsonData) {
            this._frameQueue.shift();
            d++;
        }
        if (d > 0) {
            console.error('dropped: %s, frames', d);
        }
        return;
    }
    while (this._frameQueue.length > 0 && this._socket && this._socket.bufferedAmount < 64 * 1024) {
        this._sendFrame(this._frameQueue.shift());
    }
};

function getConnectionDetails(url){
    var urlParts = url.split('/');
    var projectId = urlParts[4];
    var environment = urlParts[5];
    var host = urlParts[2];

    if (projectId && environment && host) {
        return ' (ProjectID: ' + projectId + ', environment: ' + environment + ', host: ' + host + ')';
    }

    return url;
}

function connectProject(config, auth, mode) {
    var c = new ConnectionImpl(config, auth, mode);
    c.onAudioEvent = function(event, arg1, arg2) {
        if (event === 'format') {
            c._onAudioFormat(arg1);
        } else if (event === 'frame') {
            c._onMicFrame(arg1, arg2);
        } else if (event === 'micStop' || event === 'playStart') {
            c._stopListen();
        } else {
            console.error('unknown audio event: ' + event, arg1, arg2);
        }
    };
    return c;
}

var factories = {
    connectProject: connectProject,
};

var currentConnect = null;

onmessage = function(e) {
    var name = e.data[0];
    try {
        if (!currentConnect) {
            currentConnect = factories[name].apply(null, e.data.slice(1, e.data.length));
        } else {
            currentConnect[name].apply(currentConnect, e.data.slice(1, e.data.length));
        }
    } catch(e) {
        console.error('error calling: ' + name, e);
    }
};
`]),{type:"text/javascript"})),this._worker.onmessage=function(w){if(w.data[0]==="fireEvent"){I._fire(w.data[1],w.data[2]);return}if(w.data[0]==="alanAudio"){if(w.data[1]==="playText"){alanAudio.playText(w.data[2]);return}if(w.data[1]==="playAfterText"){alanAudio.playAfterText(w.data[2]);return}if(w.data[1]==="playAudio"||w.data[1]==="playFrame"){alanAudio.playAudio(w.data[2]);return}if(w.data[1]==="playEvent"||w.data[1]==="playCommand"){alanAudio.playEvent(w.data[2]);return}if(w.data[1]==="showPopup"){alanAudio.showPopup(w.data[2]);return}if(w.data[1]==="stop"){alanAudio.stop();return}}if(w.data[0]==="callback"){I._callback[w.data[1]](w.data[2],w.data[3]),delete I._callback[w.data[1]];return}if(w.data[0]==="setDialogId"){I._dialogId=w.data[1];return}console.error("invalid event",w.data)},this._worker.onerror=function(w){console.error("error in worker: "+w.filename+":"+w.lineno+" - "+w.message)},this._handlers={},this._cleanups=[],this._callback={},this._callIds=1,this._config={}}C.prototype.on=function(I,w){var U=this._handlers[I];U||(U=[],this._handlers[I]=U),U.push(w)},C.prototype.off=function(I,w){var U=this._handlers[I];if(U){var c=U.indexOf(w);c>=0&&U.splice(c,1)}},C.prototype.getSettings=function(){return{server:E.baseURL,projectId:this._config.projectId,dialogId:this._dialogId}},C.prototype.setVisual=function(I){this._worker.postMessage(["setVisual",I])},C.prototype.call=function(I,w,U){var c=null;U&&(c=this._callIds++,this._callback[c]=U),this._worker.postMessage(["call",c,I,w])},C.prototype.close=function(){console.log("closing connection to: "+this._url),this._cleanups.forEach(function(I){I()}),this._worker.postMessage(["close"]),this._worker.terminate()},C.prototype._fire=function(I,w){var U=this._handlers[I];if(U)for(var c=0;c<U.length;c++)U[c](w)},C.prototype._addCleanup=function(I){this._cleanups.push(I)};function i(I,w){var U={};for(var c in w)U[c]=w[c];for(var c in I)U[c]=I[c];return!w||w&&w.platform==null?U.platform=E.platform:U.platform=E.platform+":"+w.platform,!w||w&&w.platformVersion==null?U.platformVersion=E.version:U.platformVersion=E.version+":"+w.platformVersion,w&&w.appName&&(U.appName=w.appName),U}function r(I){return I.match(/^[A-Z0-9]{64}\/(prod|stage|testing)$/gi)}function a(I,w,U,c,D){var s=new C;if(U&&(E.baseURL="wss://"+U),s._config.projectId=I,s._config.codec=E.codec,s._config.version=E.version,s._config.url=E.baseURL+"/ws_project/"+I,!r(I))throw new Error("Wrong projectId was provided");s._worker.postMessage(["connectProject",s._config,i(w,D),c]);function u(h,Y){alanAudio.on(h,Y),s._addCleanup(function(){alanAudio.off(h,Y)})}function f(h){function Y(m,L){h==="frame"&&alanAudio.isPlaying()||s._worker.postMessage(["onAudioEvent",h,m,L])}u(h,Y)}function M(h){function Y(m){s._fire(h,m)}u(h,Y)}return f("frame"),f("micStop"),f("playStart"),M("text"),M("command"),s._worker.postMessage(["onAudioEvent","format",alanAudio.getFormat()]),s}function o(I,w,U,c,D){var s=new C;if(U&&(E.baseURL="wss://"+U),s._config.projectId=I,s._config.codec=E.codec,s._config.version=E.version,s._config.url=E.baseURL+"/ws_project/"+I,!r(I))throw new Error("Wrong projectId was provided");s._worker.postMessage(["connectProject",s._config,i(w,D),c]);function u(h,Y){alanAudio.on(h,Y),s._addCleanup(function(){alanAudio.off(h,Y)})}function f(h){function Y(m,L){h==="frame"&&alanAudio.isPlaying()||s._worker.postMessage(["onAudioEvent",h,m,L])}u(h,Y)}function M(h){function Y(m){s._fire(h,m)}u(h,Y)}return f("frame"),f("micStop"),f("playStart"),M("text"),M("command"),s}function l(I,w){var U=new C;return w&&(E.baseURL="wss://"+w),U._config.version=E.version,U._config.url=E.baseURL+"/ws_tutor",U._worker.postMessage(["connectProject",U._config,I]),U}g.alanSDKVersion=E.version,g.alan={sdkVersion:E.version,diagnostic:g.alanDiagnostic,projectTest:o,project:a,tutor:l}}(window),function(g){var n="playIdle",E="playActive",C="playStopped",i="micIdle",r="micActive",a="micStopped",o="audioRunning",l={bufferLength:4096,sampleRate:16e3,encoderApplication:2048,encodePCM:!1,micTimeout:4e3},I=new Worker(window.URL.createObjectURL(new Blob([`

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// \`/\` should be present at the end if \`scriptDirectory\` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js


  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // 'WebAssembly.Function' constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === 'function') {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ('\0asm')
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import 'e' 'f' (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export 'f' (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at 'e.f'), that it reroutes to an export (at 'f')
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module['preloadedImages'] = {}; // maps url to image data
Module['preloadedAudios'] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = 'file://';

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw 'sync fetching of the wasm failed: you can preload it to Module[wasmBinary] manually, or emcc.py will do that for you when generating HTML (but not JS)';
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw 'failed to load wasm binary file at ' + wasmBinaryFile;
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary(wasmBinaryFile);
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.indexOf('imported Memory') >= 0 ||
        str.indexOf('memory import') >= 0) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  receiveInstance(result[0], result[1]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[wd_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function _abort() {
      abort();
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('OOM');
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_close(fd) {
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9+/=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  'abort': _abort,
  'emscripten_memcpy_big': _emscripten_memcpy_big,
  'emscripten_resize_heap': _emscripten_resize_heap,
  'fd_close': _fd_close,
  'fd_seek': _fd_seek,
  'fd_write': _fd_write,
  'setTempRet0': _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module['___wasm_call_ctors'] = asm['__wasm_call_ctors']

/** @type {function(...*):?} */
var _opus_encoder_create = Module['_opus_encoder_create'] = asm['opus_encoder_create']

/** @type {function(...*):?} */
var _opus_encode_float = Module['_opus_encode_float'] = asm['opus_encode_float']

/** @type {function(...*):?} */
var _opus_encoder_ctl = Module['_opus_encoder_ctl'] = asm['opus_encoder_ctl']

/** @type {function(...*):?} */
var _opus_encoder_destroy = Module['_opus_encoder_destroy'] = asm['opus_encoder_destroy']

/** @type {function(...*):?} */
var _speex_resampler_init = Module['_speex_resampler_init'] = asm['speex_resampler_init']

/** @type {function(...*):?} */
var _speex_resampler_destroy = Module['_speex_resampler_destroy'] = asm['speex_resampler_destroy']

/** @type {function(...*):?} */
var _speex_resampler_process_interleaved_float = Module['_speex_resampler_process_interleaved_float'] = asm['speex_resampler_process_interleaved_float']

/** @type {function(...*):?} */
var ___errno_location = Module['___errno_location'] = asm['__errno_location']

/** @type {function(...*):?} */
var stackSave = Module['stackSave'] = asm['stackSave']

/** @type {function(...*):?} */
var stackRestore = Module['stackRestore'] = asm['stackRestore']

/** @type {function(...*):?} */
var stackAlloc = Module['stackAlloc'] = asm['stackAlloc']

/** @type {function(...*):?} */
var _malloc = Module['_malloc'] = asm['malloc']

/** @type {function(...*):?} */
var _free = Module['_free'] = asm['free']

/** @type {function(...*):?} */
var dynCall_jiji = Module['dynCall_jiji'] = asm['dynCall_jiji']





// === Auto-generated postamble setup entry stuff ===



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = 'ExitStatus';
  this.message = 'Program terminated with exit(' + status + ')';
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();





'use strict';

const OggOpusEncoder = function( config, Module ){
  if ( !Module ) {
    throw new Error('Module with exports required to initialize an encoder instance');
  }

  this.config = Object.assign({ 
    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)
                              // 2049 = Full Band Audio (Highest fidelity)
                              // 2051 = Restricted Low Delay (Lowest latency)
    encoderFrameSize: 20, // Specified in ms.
    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled
    maxFramesPerPage: 40, // Tradeoff latency with overhead
    numberOfChannels: 1,
    originalSampleRate: 44100,
    resampleQuality: 3,  // Value between 0 and 10 inclusive. 10 being highest quality.
    serial: Math.floor(Math.random() * 4294967296),
    encodeRaw: true,
    encodePCM: false,
  }, config );

  this._opus_encoder_create = Module._opus_encoder_create;
  this._opus_encoder_destroy = Module._opus_encoder_destroy;
  this._opus_encoder_ctl = Module._opus_encoder_ctl;
  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
  this._speex_resampler_init = Module._speex_resampler_init;
  this._speex_resampler_destroy = Module._speex_resampler_destroy;
  this._opus_encode_float = Module._opus_encode_float;
  this._free = Module._free;
  this._malloc = Module._malloc;
  this.HEAPU8 = Module.HEAPU8;
  this.HEAP32 = Module.HEAP32;
  this.HEAPF32 = Module.HEAPF32;

  this.pageIndex = 0;
  this.granulePosition = 0;
  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data
  this.segmentDataIndex = 0;
  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments
  this.segmentTableIndex = 0;
  this.framesInPage = 0;

  this.initChecksumTable();
  this.initCodec();
  this.initResampler();

  //print(\`config = \${JSON.stringify(this.config)}\`);

  if ( this.config.numberOfChannels === 1 ) {
    this.interleave = function( buffers ) { return buffers[0]; };
  }
};

OggOpusEncoder.prototype.encode = function( buffers ) {
    // Determine bufferLength dynamically
    if ( !this.bufferLength ) {
        this.bufferLength = buffers[0].length;
        this.interleavedBuffers = new Float32Array( this.bufferLength * this.config.numberOfChannels );
    }

    var samples = this.interleave(buffers);
    if (this.config.encodePCM) {
        var buff = samples.subarray(0, samples.length).slice(0, samples.length).buffer
        var page = new Uint8Array(buff);
        return [{message: 'page', page: page}];
    }

    var sampleIndex = 0;
    var exportPages = [];

    while ( sampleIndex < samples.length ) {
        var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );
        this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );
        sampleIndex += lengthToCopy;
        this.resampleBufferIndex += lengthToCopy;

        if ( this.resampleBufferIndex === this.resampleBufferLength ) {
            this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );
            var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );
            if (this.config.encodeRaw) {
                this.resampleBufferIndex = 0;
                if (packetLength > 0) {
                    var page = this.encoderOutputBuffer.subarray(0, packetLength).slice(0, packetLength);
                    exportPages.push({message: 'page', page: page});
                }
            } else {
                exportPages.concat(this.segmentPacket( packetLength ));
                this.resampleBufferIndex = 0;

                this.framesInPage++;
                if ( this.framesInPage >= this.config.maxFramesPerPage ) {
                    exportPages.push( this.generatePage() );
                }
            }
        }
    }
    return exportPages;
};

OggOpusEncoder.prototype.destroy = function() {
  if ( this.encoder ) {
    this._free(this.encoderSamplesPerChannelPointer);
    delete this.encoderSamplesPerChannelPointer;
    this._free(this.encoderBufferPointer);
    delete this.encoderBufferPointer;
    this._free(this.encoderOutputPointer);
    delete this.encoderOutputPointer;
    this._free(this.resampleSamplesPerChannelPointer);
    delete this.resampleSamplesPerChannelPointer;
    this._free(this.resampleBufferPointer);
    delete this.resampleBufferPointer;
    this._speex_resampler_destroy(this.resampler);
    delete this.resampler;
    this._opus_encoder_destroy(this.encoder);
    delete this.encoder;
  }
};

OggOpusEncoder.prototype.flush = function() {
  if (this.config.encodeRaw) {
    this.resampleBufferIndex = 0;	  
    return [];
  }
  var exportPage;
  if ( this.framesInPage ) {
    exportPage = this.generatePage();
  }
  // discard any pending data in resample buffer (only a few ms worth)
  this.resampleBufferIndex = 0;
  return exportPage;
};

OggOpusEncoder.prototype.encodeFinalFrame = function() {
  const exportPages = [];

  // Encode the data remaining in the resample buffer.
  if ( this.resampleBufferIndex > 0 ) {
    const dataToFill = (this.resampleBufferLength - this.resampleBufferIndex) / this.config.numberOfChannels;
    const numBuffers = Math.ceil(dataToFill / this.bufferLength);

    for ( var i = 0; i < numBuffers; i++ ) { 
      var finalFrameBuffers = [];
      for ( var j = 0; j < this.config.numberOfChannels; j++ ) {
        finalFrameBuffers.push( new Float32Array( this.bufferLength ));
      }
      exportPages.concat(this.encode( finalFrameBuffers ));
    }
  }
  if (this.config.encodeRaw) {
	return exportPages;
  }

  this.headerType += 4;
  exportPages.push(this.generatePage());
  return exportPages;
};

OggOpusEncoder.prototype.getChecksum = function( data ){
  var checksum = 0;
  for ( var i = 0; i < data.length; i++ ) {
    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];
  }
  return checksum >>> 0;
};

OggOpusEncoder.prototype.generateCommentPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'
  segmentDataView.setUint32( 8, 10, true ); // Vendor Length
  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'
  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'
  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'
  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 26;
  this.headerType = 0;
  return this.generatePage();
};

OggOpusEncoder.prototype.generateIdPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'
  segmentDataView.setUint8( 8, 1, true ); // Version
  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count
  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)
  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate
  segmentDataView.setUint16( 16, 0, true ); // output gain
  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 19;
  this.headerType = 2;
  return this.generatePage();
};

OggOpusEncoder.prototype.generatePage = function(){
  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;
  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );
  var pageBufferView = new DataView( pageBuffer );
  var page = new Uint8Array( pageBuffer );

  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'
  pageBufferView.setUint8( 4, 0, true ); // Version
  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream

  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer
  // Javascript Number maximum value is 53 bits or 2^53 - 1 
  pageBufferView.setUint32( 6, granulePosition, true );
  if (granulePosition < 0) {
    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );
  }
  else {
    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );
  }

  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number
  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number
  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.
  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table
  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data
  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum

  var exportPage = { message: 'page', page: page, samplePosition: this.granulePosition };
  this.segmentTableIndex = 0;
  this.segmentDataIndex = 0;
  this.framesInPage = 0;
  if ( granulePosition > 0 ) {
    this.lastPositiveGranulePosition = granulePosition;
  }

  return exportPage;
};

OggOpusEncoder.prototype.initChecksumTable = function(){
  this.checksumTable = [];
  for ( var i = 0; i < 256; i++ ) {
    var r = i << 24;
    for ( var j = 0; j < 8; j++ ) {
      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);
    }
    this.checksumTable[i] = (r & 0xffffffff);
  }
};

OggOpusEncoder.prototype.setOpusControl = function( control, value ){
  var location = this._malloc( 4 );
  this.HEAP32[ location >> 2 ] = value;
  this._opus_encoder_ctl( this.encoder, control, location );
  this._free( location );
};

OggOpusEncoder.prototype.initCodec = function() {
  var errLocation = this._malloc( 4 );
  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );
  this._free( errLocation );

  if ( this.config.encoderBitRate ) {
    this.setOpusControl( 4002, this.config.encoderBitRate );
  }

  if ( this.config.encoderComplexity ) {
    this.setOpusControl( 4010, this.config.encoderComplexity );
  }

  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;
  this.encoderSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;

  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;
  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample
  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );

  this.encoderOutputMaxLength = 4000;
  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );
  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );
};

OggOpusEncoder.prototype.initResampler = function() {
  var errLocation = this._malloc( 4 );
  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );
  this._free( errLocation );

  this.resampleBufferIndex = 0;
  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;
  this.resampleSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;

  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;
  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample
  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );
};

OggOpusEncoder.prototype.interleave = function( buffers ) {
  for ( var i = 0; i < this.bufferLength; i++ ) {
    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {
      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];
    }
  }

  return this.interleavedBuffers;
};

OggOpusEncoder.prototype.segmentPacket = function( packetLength ) {
  var packetIndex = 0;
  var exportPages = [];

  while ( packetLength >= 0 ) {

    if ( this.segmentTableIndex === 255 ) {
      exportPages.push( this.generatePage() );
      this.headerType = 1;
    }

    var segmentLength = Math.min( packetLength, 255 );
    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;
    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );
    this.segmentDataIndex += segmentLength;
    packetIndex += segmentLength;
    packetLength -= 255;
  }

  this.granulePosition += ( 48 * this.config.encoderFrameSize );
  if ( this.segmentTableIndex === 255 ) {
    exportPages.push( this.generatePage() );
    this.headerType = 0;
  }

  return exportPages;
};

var print = ()=> {};

// Run in AudioWorkletGlobal scope
if (typeof registerProcessor === 'function') {

  class EncoderWorklet extends AudioWorkletProcessor {

    constructor(){
      super();
      print = (text)=> {
          this.port.postMessage( {message: 'print', text: text} );
      };
      this.continueProcess = true;
      this.port.onmessage = ({ data }) => {
        if (this.encoder) {
          switch( data['command'] ){
            case 'getHeaderPages':
			  if (!this.encoder.config.encodeRaw) {
			    this.postPage(this.encoder.generateIdPage());
	            this.postPage(this.encoder.generateCommentPage());
			  }
              break;

            case 'done':
              this.encoder.encodeFinalFrame().forEach(pageData => this.postPage(pageData));
              this.encoder.destroy();
              delete this.encoder;
              this.port.postMessage( {message: 'done'} );
              break;

            case 'flush':
              this.postPage(this.encoder.flush());
              this.port.postMessage( {message: 'flushed'} );
              break;

            default:
              // Ignore any unknown commands and continue recieving commands
          }
        }

        switch( data['command'] ){

          case 'close':
            this.continueProcess = false;
            break;

          case 'init':
            this.encoder = new OggOpusEncoder( data, Module );
            this.port.postMessage( {message: 'ready'} );
            break;

          default:
            // Ignore any unknown commands and continue recieving commands
        }
      }
    }

    process(inputs) {
      if (this.encoder && inputs[0] && inputs[0].length && inputs[0][0] && inputs[0][0].length){
        this.encoder.encode( inputs[0] ).forEach(pageData => this.postPage(pageData));
      }
      return this.continueProcess;
    }

    postPage(pageData) {
      if (pageData) {
        this.port.postMessage( pageData, [pageData.page.buffer] );
      }
    }
  }

  registerProcessor('encoder-worklet', EncoderWorklet);
}

// run in scriptProcessor worker scope
else {
  var encoder;
  var postPageGlobal = (pageData) => {
    if (pageData) {
      postMessage( pageData, [pageData.page.buffer] );
    }
  }
    print = (text)=> {
        postMessage({message: 'print', text: text} );
    };

  onmessage = ({ data }) => {
    if (encoder) {
      switch( data['command'] ){

        case 'encode':
          encoder.encode( data['buffers'] ).forEach(pageData => postPageGlobal(pageData));
          break;

        case 'getHeaderPages':
          postPageGlobal(encoder.generateIdPage());
          postPageGlobal(encoder.generateCommentPage());
          break;

        case 'done':
          encoder.encodeFinalFrame().forEach(pageData => postPageGlobal(pageData));
          encoder.destroy();
          encoder = null;
          postMessage( {message: 'done'} );
          break;

        case 'flush':
          postPageGlobal(encoder.flush());
          postMessage( {message: 'flushed'} );
          break;

        default:
          // Ignore any unknown commands and continue recieving commands
      }
    }

    switch( data['command'] ){

      case 'close':
        close();
        break;

      case 'init':
        encoder = new OggOpusEncoder( data, Module );
        postMessage( {message: 'ready'} );
        break;

      default:
        // Ignore any unknown commands and continue recieving commands
    }
  };
}


// Exports for unit testing.
var module = module || {};
module.exports = {
  Module: Module,
  OggOpusEncoder: OggOpusEncoder
};

`]),{type:"text/javascript"})),w={},U=a,c=C,D=[],s=null,u=null,f=window.AudioContext||window.webkitAudioContext,M=null,h=!1,Y=!!document.documentMode,m=!Y&&!!window.StyleMedia,L=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),X=navigator.userAgent.match(/safari/i)&&navigator.vendor.match(/apple/i)&&navigator.maxTouchPoints;m||L?u=new f({sampleRate:l.sampleRate}):u=new f,u.resume().then(()=>nA(o));var W=null,K=null,R=u.createGain(),J=u.createGain();J.gain.value=1;var q=null,y=u.createScriptProcessor(l.bufferLength,1,1);y.onaudioprocess=({inputBuffer:QA})=>S(QA),y.connect(u.destination),I.start&&I.start();var G=({data:QA})=>{switch(QA.message){case"ready":console.log("Alan: audio worker initialized");break;case"page":nA("frame",l.sampleRate,QA.page);break;case"done":I.removeEventListener("message",G);break;case"print":console.log("AUDIO-WORKER",QA.text);break}};I.addEventListener("message",G),I.postMessage({command:"init",originalSampleRate:u.sampleRate,encoderSampleRate:l.sampleRate,encoderApplication:l.encoderApplication,encodePCM:l.encodePCM});function v(){return K?Promise.resolve(K):navigator.mediaDevices.getUserMedia({audio:!0}).then(QA=>{nA("micAllowed"),W=QA,K=u.createMediaStreamSource(QA),K.connect(R),R.connect(y)})}function S(QA){if(!(U!==r||c===E||h)){var wA=[QA.getChannelData(0)];I.postMessage({command:"encode",buffers:wA})}}function k(){c=n,$(!0)}function Z(){return s||(s=document.createElement("audio"),s.addEventListener("ended",function(){k()}),document.body.appendChild(s),s.setAttribute("autoplay","true"),s)}function T(QA){for(var wA=window.atob(QA),BA=wA.length,cA=new Uint8Array(BA),oA=0;oA<BA;oA++)cA[oA]=wA.charCodeAt(oA);return cA.buffer}function O(QA){if(X){const BA="data:audio/mpeg;base64,";QA.startsWith(BA)&&(QA=QA.substring(BA.length));var wA=T(QA);u.decodeAudioData(wA,cA=>{q=u.createBufferSource(),q.addEventListener("ended",oA=>k()),q.connect(R),q.connect(J),J.connect(u.destination),q.loop=!1,q.buffer=cA,q.start(0)},cA=>console.error(`Error with decoding audio data: ${cA.err}`))}else Z().setAttribute("src",QA)}function eA(){X?q&&q.stop():s&&(s.pause(),s.currentTime=0,s.src="")}function N(){X||Z().setAttribute("src",""),z()}function $(QA){if(u.state!=="suspended"&&(QA&&!D.length&&N(),!(!D.length||c===E))){for(;D.length&&c!==E;){var wA=D.shift();wA.event?nA("command",wA.event):wA.text?nA("text",wA.text):wA.afterText?nA("afterText",wA.afterText):wA.popup?nA("popup",wA.popup):wA.audio?c===n&&(c=E,nA("playStart"),O(wA.audio)):console.error("invalid queue item")}QA&&c!==E&&z()}}function z(){nA("playStop")}function nA(QA,wA,BA){var cA=w[QA];if(cA)for(var oA=0;oA<cA.length;oA++)cA[oA](wA,BA)}g.getFormat=function(){return{send:{codec:"opus",sampleRate:16e3},recv:{codec:"mp3;base64",sampleRate:16e3}}},g.isAudioRunning=function(){return u&&u.state==="running"},g.isPlaying=function(){return c===E},g.playText=function(QA){QA&&QA.ctx&&QA.ctx.opts&&QA.ctx.opts.force===!0?nA("text",QA):u.resume().then(()=>{D.push({text:QA}),$()})},g.playAfterText=function(QA){u.resume().then(()=>{D.push({afterText:QA}),$()})},g.playCommand=function(QA){u.resume().then(()=>{D.push({event:QA}),$()})},g.showPopup=function(QA){QA.popup.force?nA("popup",QA):u.resume().then(()=>{D.push({popup:QA}),$()})},g.playEvent=function(QA){g.playCommand(QA)},g.playAudio=function(QA){u.resume().then(()=>{D.push({audio:QA}),$()})},g.on=function(QA,wA){var BA=w[QA];BA==null?w[QA]=[wA]:BA.push(wA)},g.off=function(QA,wA){var BA=w[QA];if(BA){var cA=BA.indexOf(wA);cA>=0&&BA.splice(cA,1)}},g.resumeAudioCtx=function(){u.resume()};var EA=!1;function IA(QA){EA=QA}g.isMicAllowed=function(){return EA},g.start=function(QA){M&&(clearTimeout(M),M=null),Z().setAttribute("src",""),c=n,v().then(()=>{U=r,nA("micStart")}).then(()=>{IA(!0),X||u.resume()}).catch(wA=>{nA("micFail",wA)}),QA&&(QA(),QA=null)},g.stop=function(){K&&(U=i),M&&(clearTimeout(M),M=null),M=setTimeout(rA,l.micTimeout),nA("micStop"),c=C,D=[],eA()},g.skipExternalSounds=function(QA){h=QA};function rA(){console.log("stopping the mic."),U=a,K&&(K.disconnect(),K=null),R.disconnect(),W&&(W.getTracks?W.getTracks().forEach(QA=>QA.stop()):W.stop(),W=null)}}(typeof window<"u"?function(){return window.alanAudio={},window.alanAudio}():B);var Q=this&&this.__assign||function(){return Q=Object.assign||function(g){for(var n,E=1,C=arguments.length;E<C;E++){n=arguments[E];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(g[i]=n[i])}return g},Q.apply(this,arguments)},e=this&&this.__awaiter||function(g,n,E,C){function i(r){return r instanceof E?r:new E(function(a){a(r)})}return new(E||(E=Promise))(function(r,a){function o(w){try{I(C.next(w))}catch(U){a(U)}}function l(w){try{I(C.throw(w))}catch(U){a(U)}}function I(w){w.done?r(w.value):i(w.value).then(o,l)}I((C=C.apply(g,n||[])).next())})},t=this&&this.__generator||function(g,n){var E={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},C,i,r,a;return a={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(I){return function(w){return l([I,w])}}function l(I){if(C)throw new TypeError("Generator is already executing.");for(;E;)try{if(C=1,i&&(r=I[0]&2?i.return:I[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,I[1])).done)return r;switch(i=0,r&&(I=[I[0]&2,r.value]),I[0]){case 0:case 1:r=I;break;case 4:return E.label++,{value:I[1],done:!1};case 5:E.label++,i=I[1],I=[0];continue;case 7:I=E.ops.pop(),E.trys.pop();continue;default:if(r=E.trys,!(r=r.length>0&&r[r.length-1])&&(I[0]===6||I[0]===2)){E=0;continue}if(I[0]===3&&(!r||I[1]>r[0]&&I[1]<r[3])){E.label=I[1];break}if(I[0]===6&&E.label<r[1]){E.label=r[1],r=I;break}if(r&&E.label<r[2]){E.label=r[2],E.ops.push(I);break}r[2]&&E.ops.pop(),E.trys.pop();continue}I=n.call(g,E)}catch(w){I=[6,w],i=0}finally{C=r=0}if(I[0]&5)throw I[1];return{value:I[0]?I[1]:void 0,done:!0}}};return function(g){var n="1.8.43";window.alanBtn&&console.warn("Alan: the Alan Button source code has already added (v."+n+")");var E="Alan voice assistant",C=null,i,r=null,a,o=!0,l=!1,I=!0,w=[],U=null,c=!1;try{localStorage.getItem("test"),c=!0}catch{c=!1}var D=!1;try{sessionStorage.getItem("test"),D=!0}catch{D=!1}function s(m){return m?"1":"0"}function u(){return`
        Debug Info:
        alanBtn: v.`.concat(n,`
        alanSDK: v.`).concat(window.alanSDKVersion,`
        projectId: `).concat(C||"unknown",`
        deviceId: `).concat(f(),`
        navigator: 
        getUserMedia: `).concat(s(navigator.getUserMedia),`, 
        mediaDevices: `).concat(s(navigator.mediaDevices),`, 
        mediaDevices.getUserMedia: `).concat(s(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),`,
        webkitGUM: `).concat(s(navigator.webkitGetUserMedia),`,
        mozGUM: `).concat(s(navigator.mozGetUserMedia),`,
        msGUM: `).concat(s(navigator.msGetUserMedia),`,
        window:
        AudioContext: `).concat(s(window.AudioContext),`,
        webkitAC: `).concat(s(window.webkitAudioContext),`,
        mozAC: `).concat(s(window.mozAudioContext),`,
        userAgent: `).concat(navigator.userAgent,`
        `)}function f(){if(C){var m="alan-btn-uuid-"+C;return c&&(i=localStorage.getItem(m)),i||(i=M(),c&&localStorage.setItem(m,i)),i}}function M(){function m(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return m()+m()+"-"+m()+"-"+m()+"-"+m()+"-"+m()+m()+m()}var h;(function(m){m.Request="request",m.Response="response"})(h||(h={}));function Y(m){m=m||{};var L=!0,X=!1,W=!0,K=!1,R=!1,J=!1,q=!1,y=!0,G;if(m.mode==="tutor"?(G="tutor",K=!0):m.mode==="demo"?G="demo":G="component",console.log("Alan: v."+n),window.tutorProject&&!ot()&&a){if(C===m.key)return a;throw new Error("The Alan Button instance has already been created. There cannot be two Alan Button instances created at the same time connected to the different projects.")}a={version:n,setVisualState:function(F){L||window.tutorProject&&window.tutorProject.setVisual(F)},callProjectApi:function(F,p,H){var AA="script::";if(!L){if(!F)throw new Error("Function name for callProjectApi must be provided");window.tutorProject&&(F.indexOf(AA)===0?window.tutorProject.call(F,p,H):window.tutorProject.call(AA+F,p,H))}},playText:function(F){L||window.tutorProject&&window.tutorProject.call("play",{text:F})},playCommand:function(F){L||dA.playCommand({data:F})},activate:function(){return HE()},deactivate:function(){Fr()},isActive:function(){return vA},sendText:function(F){D0(F)},callClientApi:function(F,p,H){console.error(`The "callClientApi" method is deprecated. Please use the "callProjectApi: instead.

See more info here: https://alan.app/docs/client-api/methods/common-api/?highlight=callprojectapi#callprojectapi`),!L&&window.tutorProject&&window.tutorProject.call(F,p,H)},setAuthData:function(F){console.error(`The "setAuthData" method is deprecated. Please use the "authData" property when you create the Alan Button.

See more info here:  https://alan.app/docs/server-api/sending-data/authdata/?highlight=authdata`),!L&&window.tutorProject&&(window.tutorProject.close(),window.tutorProject=window.alan.project(m.key,zU(F),m.host),window.tutorProject.on("connectStatus",TE),window.tutorProject.on("options",WE))},setOptions:function(F){WE(F)},setPreviewState:function(F){mB(F)},remove:function(){dA.stop(),window.tutorProject.close(),window.tutorProject.off("scripts",w0),window.tutorProject.off("text",o0),window.tutorProject.off("parsed",Es),dA.off("command",l0),dA.off("afterText",I0),iA.innerHTML="",a=null,ot()||(window.tutorProject=null)},stop:function(){dA.stop()},updateButtonState:function(F){TE(F)},sendEvent:S},document.addEventListener("click",v);function v(){dA.resumeAudioCtx(),document.removeEventListener("click",v)}function S(F,p){var H=p?{name:F,value:p}:{name:F};k(H)}function k(F){window.tutorProject?window.tutorProject.call("clientEvent",F):setTimeout(function(){return k(F)},3e3)}m.host&&""+m.host,(m.position==="absolute"||m.pinned)&&(K=!0),m.position==="absolute"&&(R=!0);var Z={default:"ONLINE",offline:"OFFLINE",disconnected:"CONNECTING",listening:"LISTEN",understood:"PROCESS",intermediate:"PROCESS",speaking:"REPLY"},T="default",O="listening",eA="speaking",N="intermediate",$="understood",z="disconnected",nA="offline",EA="lowVolume",IA="permissionDenied",rA="noVoiceSupport",QA="notSecureOrigin",wA="Microphone access is blocked in your browser settings. Enable it to allow the voice assistant using your microphone",BA="Your browser doesn’t support voice input. If you think your browser supports voice input, please send the Debug info below to support@alan.app. "+u(),cA='Audio is allowed only on a secure connection: make sure your connection protocol is under HTTPS, HTTP on localhost or file. A connection over the file protocol may not work in some browsers, e.g., in Safari. Now you are running with "'+window.location.protocol+'" protocol and "'+window.location.hostname+'" hostname',oA="Low volume level",ZA="You're offline",XA=null,HA="browser-does-not-support-voice-input",CQ="microphone-access-blocked",JB="preview-mode",MA="btn-is-disabled",CA="no-alan-audio-instance-was-provided",DA=z,SA=null,DQ=!1,vA=!1,iQ=!1,ne=!1,Wg=!1,rt=!0,mE=3e4,uQ,hB=[0,0],xQ=!1,Tg=!1,ve=!1,NQ=null,YE=0,pE,yE=300,NE=0,Vg=0,KI=yE+"ms",Ee=!0;function Qr(){uQ=PU(function(){DQ?uQ():(dA.stop(),J=!0)},mE)}Qr();var at="",er="",OA="";Bs()||(at="alan-pulsating 2s ease-in-out infinite",er="alan-mic-pulsating 1.4s ease-in-out infinite",OA="alan-triangle-mic-pulsating 1.2s ease-in-out infinite");var Ce="alan-text-chat-pulsating 2s ease-in-out infinite",tr="alan-gradient 3s ease-in-out infinite",t2="disconnected-loader-animation 2s linear infinite",dA=window.alanAudio,iA=m.rootEl||document.createElement("div"),g2=document.getElementsByTagName("body")[0],FA=document.createElement("div"),NU="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH9SURBVHgB7dvvUcIwGMfxByfADdjAEdQN3EA2YATcAJ2AEXADdALcgG4AGzwm13DQkNKWQBvK93OXF4W0Z36mf5IUEQAAAAAAAAAAgPOo6ocpS91bmfIuOM2ENHJhlVnbOoIwF1CVleCYCWas9U0kEQ+SjibXuDdJxEASYbtVg+rbwWDwKAm41QDFBJjE357SKXyTCDASAUYiwEgEGIkAIxFgJAKMRICRWgvQTRZs3IzLxef2rn38zmlxqmoT+L6Rpse/ltbGk36j/bFsKJRTqvZva6zc2TXQtHfofbSV+rYVx2pNmwFm3vbI2/6R+r4rjvUnLWkzQL9Rz972l9T3WXGsTPrGTsN794FloM5Uq00D+/kLUb28Cw8DYbwE6k1LgrOPKJNA/dBaykj6SItrvdZaAzcAzZc3bTBzVyYl9YZ6vJK3kL6yPS7QW+ZyJhvW3fS+HdPAWaDRiyYNdz1vecl/xs0oOe12p3Plxd+d2mX7t/482MnKlutt9i48CnydSf5M+Cv7xxFb78mUsSnDkn1ezeAjk3uh+Y0i1JOaWuu9vi/jTueZns/u29kwLhma98Z5g+CWpjwLirT4/Oezn01S63HJvNrhs4kdbqfyKoePKf1IBBiJACMRYCQCjESAkVIO8HDhKBM0o/tZFzsTzY9sAAAAAAAAAABAjH+9EqX09fBHaQAAAABJRU5ErkJggg==",n2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAACw9JREFUeAHtnWusHVUVx1t5CVatj8rDB20pPgBJQbAmGJIStLFJRW1DWiXaVKG8Ykz0g4lRI6mPL34yihg0BD9IMDGgQaNJtSIGEilig2hViBaoiFUQRVGR+vvTc5vL7bln9pmzXzPnv5Lde87MmrX2/u01a/bM3me6YIHFBEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABEzABHIRWJjLUU1+9u/f/1zqs5KylLKYcgTl5ZRVlOdTcsl+HD1E+RHluoULF/4tl+Na/ExdABJ8i4C/jjIs0A5j+5spr6HkFgXiVoLw4dyOS/p7TknnhXyvxu+w4FN1/ke5lfKAvmQWZeCrMvss7m6qApDstwzixzdQ12VxO+XpBr0Uu8+kjjpBpkamJgDpWA03zgrs2f+gd3ugbmy1y6jr1PTL1DSUKDmZ8qIxomU3uk+NoR9LdTmG1sYyVrudqQjAQUZ5w5idoeD7yZjHxFK/hDofHstYzXamIgDpgNdR5rvxGNU/97Pz36MUEu07AbvrE9muymzvA3CQSc5oSV13xTtaHjvpYVuou55X9lp6H4D03mmUYyboRT2S+ccEx7c99CUcuKntwV05rtcBSAY5ko7QjMckoscxOyYxMMGx76UNbYYOE7jMe2ivAxCUCj4F4aSyFwOPTmqkxfEKvve1OK4zh/Q2AMkcR9MLuvzGkh/HMjSmnY20RZfjXkpvA5DeOpMS81HGI9j7U4Eo0I3I+wv4zeKylwE4GDfp0UtsKfVc8F20qWkKMXZbs9jrZQBCTg+dU7RN40DdFecWZfKtuZ3m8Jeik3LUe14fZAqt79O0WwrRQoWfpjAcYHMtbVsaoNcpld4FIPTPpmjhQSp5HMP3pTI+wq766ooR+zu5q1cBSIZYQi8sy9ATd2TwMczFatqYYmw7zFeWbb0KQIgp++WQJ3DyyxyOhvi4csi2zm7qTQCSGTSB/4qMPbEzo6/ZrlbRVt1k9UJ6E4D0Rq7sN9PxT/Lhrpkvmf/2ZizYiwAkI5xIABybOQjkbhdFd8a55XTafG5upyn8dT4A6Qjd8ebOfjN9cS8fvjfzJfPfywdtz+w2rrvOByA4TqK8OC6WIGvKfBoHfoVSYun+CvyuoXRaOh2AZADVP/SHRrE7ard+SE55EMM3xTYeaO9SGMSc7w50G0+t0wEIBv2A/AXxcARb0hrB2Tcg1/K9xNJ93fVfEFzrChU7G4CDM7/U44h7yXwHV0nzeR99e0Oh/v0ALI4q5Htit50NQFp+CmWSpfZt4Wm8d/eQg69n28GgHLI/1aYlGL4wlfHUdjsZgJzxWuXc9odGkzK9h4z3z7lG2KYXC3197vZM3zfDZFEmX1HddDIAIXA6pcRlR29M+MWIHvgG+0os3X8hfi8aUa9qd3UuADnTtUL49YWI7iLTzXuzMciMXy1Ut3fDRkvROiWdC0Do6tJ7RAHKmnq7J8Dvt9B5OEAvtorGw1tiG01tr1MBOBjn6OajhNxNhtMleKQMdPRwuoRsgFGJKcnWbe1UANJK/dDosNatbX+gbjo07RYqt6D4h1DliHq6Obs4or3kpjoTgJzZGmjrwXMJuYvMpscvQYKuXulxdZByfKV1sHpVfLNpLHYmAGm+ptxSLrWfj7Ce7f16vp0jtm9vedwIk0G7dIW4LEizAqVOBCBntH6YrUUHJeROMpqm3sYSjtFihS+OdVA85bfArNTVYqxWdCIAaVGp5VaP4ft3YxGdpUwQ3s7Xn8/alPPj5TmdtfVVfQByJh9H40qNaXa2yX5zOqNUFjwHdivn1KW6r9UHIMTeWIjaX/B7/6S+CWDNG982qZ2Wx1e/dL/qAOQMfiXglQFLiMZ+sZbbf6lEA/B5BgzPKeQ7yG21AQi4kkvtHyH4oj3Hw9Zv6I3vB/VIfCW9db/E04OgllQbgNR+GeWlQa2Ir/Sz+CYXXINNPR/MLa/F4fm5nYb6qzIAOWNVr1J3vnvJWA+FAgzVw+YedL8dqh9ZT0v3S8wgNTajygCk1q+maOajhKTIfjPtuJYPjfPJM8oR/56IrXUR7UUzVV0ADs5UzfmWkD1kqmQvoRzYvrFEw/CppfuaK65KqgtA6Gi1S6nVvXdm6J3r8KHFDblFTxM25Hba5K+quyPOUK3z20RZQtENiBaf5qqjFpr+kTKO6DGNluJrmX5w8NLOSzhGJbc8isMLqGuJE2BoW3N17lDnczfSMeex7fOU6p/gz6073zXl9h4691dD9j1rE+18Hhtupix+1o48X75MHTUWrUKqCUA6RTcd6sRlVZBpV4k9HLaSDlamGSm09yIUPjRSKc1Ore5RFlTmLi41jQE/Bo0uB586U3PWH9eHAPkmOn8O0IutovH15thG29qrIgOSDY6nAfdRjm7bkIqO01jyZDLMA011ot3vREcnXm5RHZUF9+V2PNdfLRnwE1SsD8EnvkdRPqkPAfIddPRumdyiOlaxdL94BiQLLAeGVhzrDrgvoim3U8kwu5saRPvXoPPpJr0E+5/C5gbqWOIEONicGjLgVdSmT8EnuJr22qYPAfIDdH4boBdb5XAMXhrb6Lj2igYgZ/9pVHjTuJXuiP562tf48iQykJ4lllq0uoY6rijJs2gA0nBdekrXIRV/DW8+G2KcILwNvV0hupF1VMeiS/eLdT5n3ioa//bIQGszpx8HrQ6sVKkseC511JWoiBQLQFr7mSItzu80NAvupGp35K/eMx6vLOS3zOWPM+58GnxeqUZn9qv/1+MdgT5LZcGzqKOuSNmlVAacluw306Hb6OBG1owFNY+8feagzH+vyOzvGXeNUGJXio7Q0/+zY9ut3N6p1E9zvyFyNUpPhyhG1jmFvgkdr0ZznTUAB1lgW7Tad8vQp2j/kU1VJgv+Hp1bmvQS7df/PZI1JrI6A5qygBacTqMspdFbAxt+DXqaqcgty3C4NqdTPQfKIoOzX1NuauS0ipb7n0SWe6IJALw+gs7GJr0E+/dicz11/G8C24eYzJkBL8b7NAef4B9LCV0D+DV0n9RBmeUE/GmcnkWyZEDO5mNojZZbHZelVXU70ULQ5WSYvzZVE26apdjSpJdgv15LouVayU+AXBnwgzTIwXcgUrTy+6MHPjb+ez0af2/Uiq+g1+FtjG/2UIvJMyBnsYJcYx/9yMhygMC/+PMyMoyWx48U+G1GocRMxWP4fSt1TPpIKEcG1F2vgw8Is0SLb9806/uojzewc98ohUT7FmN3eSLbB83mCECdSZZDCWic1SiDcVipt2slv/wnD0AAPgjlmxpJT5fCrXDRLwCDBF29U+bmIOV4Sjvwq6FTUkk+BlTtGccs4s/nKOsp03wzomds36V8mM59nL9jCRzfxgEXUlZQdBlPIcrMP6R8gTpW8wP2FA21TRMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARMwARPoC4H/A+Gj/yJlPcQaAAAAAElFTkSuQmCC",E2=`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjMuNzQ5Mzk5NDZlLTMxJSIgeDI9IjIuODYwODIwMDklIiB5Mj0iOTcuMTM5MTc5OSUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjEyIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDAwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBbGFuLUJ1dHRvbi0vLUFuaW1hdGlvbi0vLWJ1dHRvbi1pbm5lci1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTQwLjEwMDU0MjIsOSBMNDAuMTAwNTQyMiw5IEM1MC4wNzA0NzUxLDkgNTkuMTUxNjIzNSwxNC43MzM3OTM4IDYzLjQzODA5OCwyMy43MzUyMjE0IEw3MC40MjIwMjY3LDM4LjQwMTE5NyBDNzUuMTcxMDE0NSw0OC4zNzM4ODQ0IDcwLjkzNjM2OTMsNjAuMzA4MTYwMSA2MC45NjM2ODE5LDY1LjA1NzE0NzggQzU4LjI3NzU5NDksNjYuMzM2MjYwOCA1NS4zMzk5NzQ0LDY3IDUyLjM2NDg3ODksNjcgTDI3LjgzNjIwNTQsNjcgQzE2Ljc5MDUxMDQsNjcgNy44MzYyMDU0Myw1OC4wNDU2OTUgNy44MzYyMDU0Myw0NyBDNy44MzYyMDU0Myw0NC4wMjQ5MDQ1IDguNDk5OTQ0NTksNDEuMDg3Mjg0IDkuNzc5MDU3NiwzOC40MDExOTcgTDE2Ljc2Mjk4NjQsMjMuNzM1MjIxNCBDMjEuMDQ5NDYwOCwxNC43MzM3OTM4IDMwLjEzMDYwOTIsOSA0MC4xMDA1NDIyLDkgWiIgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg==
`,C2=`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1pbm5lci1zaGFwZS1zcGVha2luZyBiYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMy43NDkzOTk0NmUtMzElIiB4Mj0iMi44NjA4MjAwOSUiIHkyPSI5Ny4xMzkxNzk5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMTIiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjA0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLWlubmVyLXNoYXBlLXNwZWFraW5nLWJhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgaWQ9ImlubmVyLWJnIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBjeD0iNDAiIGN5PSI0MCIgcj0iMzIiPjwvY2lyY2xlPgogICAgPC9nPgo8L3N2Zz4=
`}),lr(kE,{height:"100%",top:"0%",altText:" no voice support icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIuSURBVHgB7dvxUYMwFAbwpxMwAhvoBtVJygZ1A92gI1Qn6AjoBO0GsEG7wfPlgCtNA7xASzX5fnf5oyThLp+BQDiJAAAAAAAAAAAAAAAAxmHmDyk5n+ykLAn6SUhpHVaXwrQhcBsIr5FTLGSwb1IOmpkj9RnrxXE5+1x+fH7Pwyw0+PKSLLpCrGeq1oFiwNWiUGhCZE8UC22I7IliogmRPVFshkJkTxSjvhDZE8WqJ0QEqNURIgL0MTVEgmkhElTGhkix4WqzoNlYWFp1k1fhvvMHgc9n2cFRPzXAou/8t/JAM7EH/SD66ocM9bfrb+WR7kTGm1iHjqR3HDjXbOYMsLR+p9bvPentr3iuSeYM0B7Uwvr9RXqfA+cqKTRyma2sdSB3tMlZJ7X62Ru3Qa7CiSOIF6uN9pmw4NMuTjYUcDAcM8wEkTjaZdasytm9AfHsOL6lUJkZx5c2yr7a2ZlSyGSAa8egt5qBK0JU/TH+Na7uha4QzLHBm7+0ee8Iz/Sf/XlwtjeRtnq2mVU4dVSXUr6l/NDpccS0e5KSSekKybR9lReQkmLAV9hU7ZiFKcWCq8t5zeOtWfndOWhczcYN6+VSFq2+RfQhGnUYWUeY5ph5m0k6+iHENjs9RXuE2OYbYN3HFeKOYjQmwLrfRYgUo7EB1n2bEM03khXd0F0epDXs0Obaovd1ty39UCDAif5ygO0PRyWBH64eqJuFAP9kAwAAAAAAAAAAAAAAU/wC52820szaQtwAAAAASUVORK5CYII="}),lr(Pg,{height:"100%",top:"0%",altText:" offline icon",src:`data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjEgKDY3MDQ4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5BbGFuIEJ1dHRvbiAvIEFuaW1hdGlvbiAvIGJ1dHRvbi1uby1uZXR3b3JrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkFsYW4tQnV0dG9uLS8tQW5pbWF0aW9uLS8tYnV0dG9uLW5vLW5ldHdvcmsiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMS4wMDAwMDAsIDIyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzMsMiBDMzQuNjU2ODU0MiwyIDM2LDMuMzQzMTQ1NzUgMzYsNSBMMzYsMjkgQzM2LDMwLjY1Njg1NDIgMzQuNjU2ODU0MiwzMiAzMywzMiBDMzEuMzQzMTQ1OCwzMiAzMCwzMC42NTY4NTQyIDMwLDI5IEwzMCw1IEMzMCwzLjM0MzE0NTc1IDMxLjM0MzE0NTgsMiAzMywyIFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIzLDggQzI0LjY1Njg1NDIsOCAyNiw5LjM0MzE0NTc1IDI2LDExIEwyNiwyOSBDMjYsMzAuNjU2ODU0MiAyNC42NTY4NTQyLDMyIDIzLDMyIEMyMS4zNDMxNDU4LDMyIDIwLDMwLjY1Njg1NDIgMjAsMjkgTDIwLDExIEMyMCw5LjM0MzE0NTc1IDIxLjM0MzE0NTgsOCAyMyw4IFoiIGlkPSJTaGFwZSIgZmlsbC1vcGFjaXR5PSIwLjYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLDE2IEMxNC42NTY4NTQyLDE2IDE2LDE3LjM0MzE0NTggMTYsMTkgTDE2LDI5IEMxNiwzMC42NTY4NTQyIDE0LjY1Njg1NDIsMzIgMTMsMzIgQzExLjM0MzE0NTgsMzIgMTAsMzAuNjU2ODU0MiAxMCwyOSBMMTAsMTkgQzEwLDE3LjM0MzE0NTggMTEuMzQzMTQ1OCwxNiAxMywxNiBaIiBpZD0iU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC44Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zLDIyIEM0LjY1Njg1NDI1LDIyIDYsMjMuMzQzMTQ1OCA2LDI1IEw2LDI5IEM2LDMwLjY1Njg1NDIgNC42NTY4NTQyNSwzMiAzLDMyIEMxLjM0MzE0NTc1LDMyIDIuMDI5MDYxMjVlLTE2LDMwLjY1Njg1NDIgMCwyOSBMMCwyNSBDLTIuMDI5MDYxMjVlLTE2LDIzLjM0MzE0NTggMS4zNDMxNDU3NSwyMiAzLDIyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44MSwxLjI3IEwzNi43MywzMi4xOSBDMzcuNDMxNDAxNiwzMi44OTE0MDE2IDM3LjQzMTQwMTYsMzQuMDI4NTk4NCAzNi43MywzNC43MyBDMzYuMDI4NTk4NCwzNS40MzE0MDE2IDM0Ljg5MTQwMTYsMzUuNDMxNDAxNiAzNC4xOSwzNC43MyBMMy4yNywzLjgxIEMyLjU2ODU5ODM3LDMuMTA4NTk4MzcgMi41Njg1OTgzNywxLjk3MTQwMTYzIDMuMjcsMS4yNyBDMy45NzE0MDE2MywwLjU2ODU5ODM2OCA1LjEwODU5ODM3LDAuNTY4NTk4MzY4IDUuODEsMS4yNyBaIiBpZD0iUGF0aCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=
`});var wr={idle:{background:{color:["rgb(34, 203, 255)","rgb(25, 149, 255)"]},hover:{color:["rgba(0, 70, 255, 0.95)","rgba(0, 156,  255, 0.95)"]}},listen:{background:{color:["rgba(0, 70, 255, 0.95)","rgba(0, 156,  255, 0.95)"]},hover:{color:["rgba(0, 70, 255, 0.95)","rgb(0, 70, 255)"]}},process:{background:{color:["rgba(0, 255, 205, 0.95)","rgba(0, 115, 255, 0.95)"]},hover:{color:["rgb(0, 115, 255)","rgba(0, 115, 255, 0.95)"]}},reply:{background:{color:["rgba(122, 40, 255, 0.95)","rgba(61, 122, 255, 0.95)"]},hover:{color:["rgba(122, 40, 255, 0.95)","rgb(122, 40, 255)"]}},textChat:{background:{color:["#1eb6e5","#1995ff"],angle:45},hover:{color:["#1ba3ce","#1686e5"],angle:45},shadow:{color:["#6693bc","#b3c9de"]}}};qB.style.transform="rotate(-315deg)",_B.style.transform="rotate(-45deg)",TU([qB,_B]);function TU(F){for(var p=0;p<F.length;p++){var H=F[p];H.style.height=CB/2+"px",H.style.maxHeight=CB/2+"px",H.style.minHeight=CB/2+"px",H.style.minWidth=CB+"px",H.style.width=CB+"px",H.style.maxWidth=CB+"px",H.style.top="calc(100%/2 - "+CB/2/2+"px)",H.style.filter="blur("+CB/10+"px)",H.style.left=0,H.style.zIndex=$I,H.style.position="absolute",H.style.transition=Se,H.style.opacity=".5",H.style.borderRadius="100px",H.classList.add("alanBtn-oval-bg-default")}}var VU="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNzczNDUgNy4wMDAwM0wxMy44Mzk4IDAuOTMzNjA0QzE0LjA1MzQgMC43MjAwMjIgMTQuMDUzNCAwLjM3Mzc0MSAxMy44Mzk4IDAuMTYwMTg2QzEzLjYyNjMgLTAuMDUzMzY4MSAxMy4yOCAtMC4wNTMzOTU1IDEzLjA2NjQgMC4xNjAxODZMNyA2LjIyNjYxTDAuOTMzNjA0IDAuMTYwMTg2QzAuNzIwMDIyIC0wLjA1MzM5NTUgMC4zNzM3NDEgLTAuMDUzMzk1NSAwLjE2MDE4NiAwLjE2MDE4NkMtMC4wNTMzNjgxIDAuMzczNzY4IC0wLjA1MzM5NTUgMC43MjAwNDkgMC4xNjAxODYgMC45MzM2MDRMNi4yMjY1OSA3TDAuMTYwMTg2IDEzLjA2NjRDLTAuMDUzMzk1NSAxMy4yOCAtMC4wNTMzOTU1IDEzLjYyNjMgMC4xNjAxODYgMTMuODM5OEMwLjI2Njk2NCAxMy45NDY2IDAuNDA2OTM2IDE0IDAuNTQ2OTA5IDE0QzAuNjg2ODgxIDE0IDAuODI2ODI3IDEzLjk0NjYgMC45MzM2MzEgMTMuODM5OEw3IDcuNzczNDVMMTMuMDY2NCAxMy44Mzk4QzEzLjE3MzIgMTMuOTQ2NiAxMy4zMTMyIDE0IDEzLjQ1MzEgMTRDMTMuNTkzMSAxNCAxMy43MzMgMTMuOTQ2NiAxMy44Mzk4IDEzLjgzOThDMTQuMDUzNCAxMy42MjYzIDE0LjA1MzQgMTMuMjggMTMuODM5OCAxMy4wNjY0TDcuNzczNDUgNy4wMDAwM1oiIGZpbGw9IiNCQkNGRTciLz4KPC9zdmc+Cg==";Ze.classList.add("alanBtn-bg-default"),re.classList.add("alanBtn-bg-listening"),ae.classList.add("alanBtn-bg-speaking"),oe.classList.add("alanBtn-bg-intermediate"),Ie.classList.add("alanBtn-bg-understood"),VE(Ze),VE(re),VE(ae),VE(oe),VE(Ie);var Kg="1",I2="0";Ze.style.opacity=Kg;var xU=[xA,RA,gB,Pg,eg,kE,JE,gr,nr,Er,Cr,ir,rr,ar,or,Ir];for(PQ=0;PQ<xU.length;PQ++)xU[PQ].setAttribute("draggable","false");_g([re,ae,oe,Ie]),FA.appendChild(qB),FA.appendChild(_B),FA.appendChild(Ze),FA.appendChild(re),FA.appendChild(ae),FA.appendChild(oe),FA.appendChild(Ie),FA.appendChild(gB),FA.appendChild(RA),FA.appendChild(xA),FA.appendChild(zg),FA.appendChild(eg),FA.appendChild(kE),FA.appendChild(Pg),FA.classList.add("alanBtn"),kQ()&&iA.classList.add("mobile"),es();function _(F){return".alan-"+qg()+(F?"":" ")}function es(F){var p,H,AA,gA,uA,sA,jA,nB,KA,qA,kB,FB,vQ,$g,rs,as,os,Is,ss,cs,ls,ws,Fs,Ds,us,fs,Us,ds,Ms,hs,Gs,Rs,ms,Ys,ps,ys,Ns,bs,Js,ks,vs,Zs,Ss,Ls,Xs,Hs,Os,Ws,Ts,Vs,xs,zs,Ps,js,Ks,qs,_s,$s,Ac,Bc,Qc,ec,tc,gc,nc,Ec,Cc,ic,rc,ac,oc,Ic,sc,cc,lc,wc,Fc,Dc,uc,fc,Uc,dc,Mc,hc,Gc,Rc,mc,Yc,pc,yc,Nc,bc,An,V="",Jc=qg(),Bn;m.shadowDOM?Bn=m.shadowDOM.getElementById("alan-stylesheet-"+Jc):Bn=document.getElementById("alan-stylesheet-"+Jc),Bn&&(Bn.disabled=!0,Bn.parentNode.removeChild(Bn)),An=document.createElement("style"),An.setAttribute("id","alan-stylesheet-"+Jc),An.type="text/css",V+=".alanBtn-root * {  box-sizing: border-box; font-family: Helvetica, Arial, sans-serif; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}";var gg=kQ()?":active":":hover";kQ()||(V+=_()+".alanBtn{transform: scale(1);"+Se+";} .alanBtn"+gg+"{transform: scale(1.11111);transition:"+Se+";}.alanBtn:focus {transform: scale(1);"+Se+";  border: solid 3px #50e3c2;  outline: none;  }"),V+=_()+".alanBtn-recognised-text-holder { position:fixed; transform: translateY("+(ne?"-":"")+"50%); max-width:236px; font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px;  min-height: 40px;  color: #000; font-weight: normal; background-color: #fff; border-radius:10px; box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.35); display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack: activate;-ms-flex-pack: start;justify-content: start;}",V+=_()+" .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__left-side { text-align: left;}",V+=_()+" .alanBtn-recognised-text-holder.alan-btn-lib__with-text.alan-btn-lib__right-side { text-align: right;}",V+=_()+" .alanBtn-recognised-text-holder .alanBtn-recognised-text-content:not(:empty) {padding: 10px;}",V+=_(!0)+".alanBtn-recognised-text-holder-long  { font-size: 12px!important;line-height: 1.4!important;}  ",V+=_(!0)+".alanBtn-recognised-text-holder-super-long  { font-size: 11px!important;line-height: 1.4!important;}  ",V+=_()+".alanBtn-text-appearing {  animation: text-holder-appear 800ms ease-in-out forwards;  }",V+=_()+".alanBtn-text-disappearing {  animation: text-holder-disappear 800ms ease-in-out forwards;    }",V+=_()+".alanBtn-text-disappearing-immediately {  animation: none; opactity: 0;   }",V+=_()+".alan-btn-disabled {  pointer-events: none;  opacity: .5;  transition: all .2s ease-in-out;  }",V+=_()+`.shadow-appear {  opacity: 1 !important;  }
`,V+=_()+".shadow-disappear {  opacity: 0 !important;  transition: all .1s linear !important;  }",V+=_(!0)+".alan-btn-offline .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",V+=_(!0)+".alan-btn-offline .alanBtn"+gg+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",V+=_(!0)+".alan-btn-no-voice-support .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",V+=_(!0)+".alan-btn-no-voice-support .alanBtn"+gg+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",V+=_(!0)+".alan-btn-permission-denied .alanBtn .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145));}",V+=_(!0)+".alan-btn-permission-denied .alanBtn"+gg+" .alanBtn-bg-default {  background-image: linear-gradient(122deg,rgb(78,98,126),rgb(91,116,145))!important;}",V+=_()+".triangleMicIconBg {background-image:url("+E2+"); pointer-events: none;}",V+=_()+".circleMicIconBg {background-image:url("+C2+"); pointer-events: none;}",V+=_()+" img {pointer-events: none;}",V+=_()+""+gg+" .triangleMicIconBg-default {opacity:0!important;}",V+=_()+".alan-overlay-for-alert {position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 99;background: rgba(0, 0, 0, 0.57);opacity: 0;-webkit-animation: alan-fade-in 0.5s 0.2s forwards;-moz-animation: alan-fade-in 0.5s 0.2s forwards;-o-animation: alan-fade-in 0.5s 0.2s forwards;animation: alan-fade-in 0.5s 0.2s forwards;}",V+=_()+".alan-alert-popup {border-radius:10px; box-shadow: 0px 5px 14px rgba(3, 3, 3, 0.25);padding:12px;padding-right:24px;text-align: center;width: 220px;background: rgb(255 255 255);position: fixed;left: 50%;transform: translateX(-50%);top: 10%;    color: #000;font-size: 14px;line-height: 18px;}",V+=_()+'.alan-alert-popup__close-btn {background:url("'+VU+'") no-repeat center;cursor:pointer; background-size:100% 100%;position: absolute;top: 12px;right: 12px;width: 14px;height: 14px;}',V+=_()+`.alan-btn__chat-holder {
                position: fixed;
                height:  `.concat(((gA=(AA=(H=F==null?void 0:F.chatOptions)===null||H===void 0?void 0:H.textChat)===null||AA===void 0?void 0:AA.popup)===null||gA===void 0?void 0:gA.height)||"100",`%;
                min-height: `).concat(((jA=(sA=(uA=F==null?void 0:F.chatOptions)===null||uA===void 0?void 0:uA.textChat)===null||sA===void 0?void 0:sA.popup)===null||jA===void 0?void 0:jA.minHeight)||"400",`px;
                max-height: `).concat(((qA=(KA=(nB=F==null?void 0:F.chatOptions)===null||nB===void 0?void 0:nB.textChat)===null||KA===void 0?void 0:KA.popup)===null||qA===void 0?void 0:qA.maxHeight)||"1200",`px;
                width: 346px;
                min-width: 346px;
                max-width: 346px;
                display: none;
            }`),V+=".mobile"+_()+`.alan-btn__chat-holder {
                position: fixed; 
                height: 100%;
                min-height: 100%;
                max-height: 100%;
                width: 100vw;
                min-width: 100vw;
                max-width: 100vw;
                display: none;
                top: 0;
                bottom:0;
                left:0;
                right:0;
                border-radius: 0px;
            }`,V+=_()+`.alan-btn__chat {
                height: 100%;
                position: relative;
                overflow: hidden;
                display: flex;
                width: 100%;
                min-width: 100%;
                max-width: 100%;
                flex: 2;
                position: relative;
                flex-direction: column;
                background-color: `.concat(((vQ=(FB=(kB=F==null?void 0:F.chatOptions)===null||kB===void 0?void 0:kB.textChat)===null||FB===void 0?void 0:FB.popup)===null||vQ===void 0?void 0:vQ.backgroundColor)||"#FFFFFF",`;
                box-shadow: 0px 5px 44px rgba(0, 0, 0, 0.15);
                border-radius: 8px;
            }`),V+=".mobile"+_()+`.alan-btn__chat {
                border-radius: 0px;
            }`,V+=_()+`.alan-btn__chat-textarea-holder {
                width: 100%;
                height: 76px;
                max-height: 76px;
                min-height: 76px;
                box-shadow: 0px 5px 44px rgba(0, 0, 0, 0.15);
            }`,V+=_()+`.alan-btn__chat-messages-empty-block {
                flex: 1 1 auto;
            }`,V+=_()+`.alan-btn__chat-messages {
                width: 100%;
                height: calc(100% - 136px);
                max-height: calc(100% - 136px);
                min-height: calc(100% - 136px);
                overflow-y: scroll;
                overflow-x: hidden;
                padding: 20px 12px;
                display: flex;
                flex-shrink: 0;
                flex-direction: column;
            }`,V+=_()+`.alan-btn__chat-header {
                width: 100%;
                height: 60px;
                max-height: 60px;
                min-height: 60px;
                line-height: 60px;
                box-shadow: 0px 5px 44px rgb(0 0 0 / 15%);
                color: #0f2029;
                padding: 0px 12px;
                font-size: `.concat(((as=(rs=($g=F==null?void 0:F.chatOptions)===null||$g===void 0?void 0:$g.textChat)===null||rs===void 0?void 0:rs.header)===null||as===void 0?void 0:as.fontSize)||20,`px;
                background-color: `).concat(((ss=(Is=(os=F==null?void 0:F.chatOptions)===null||os===void 0?void 0:os.textChat)===null||Is===void 0?void 0:Is.header)===null||ss===void 0?void 0:ss.backgroundColor)||"#FFFFFF",`;
                color: `).concat(((ws=(ls=(cs=F==null?void 0:F.chatOptions)===null||cs===void 0?void 0:cs.textChat)===null||ls===void 0?void 0:ls.header)===null||ws===void 0?void 0:ws.color)||"#000000",`;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-right: 24px;
            }`),V+=_()+`.alan-btn__close-chat-btn {
                position: absolute;
                right: 12px;
                top: 0;
                height: 60px;
                display: flex;
                align-items: center;
                cursor: pointer;
                pointer-events: all;
            }`,V+=_()+`.alan-btn__close-chat-btn svg path {
                fill: `.concat(((Us=(fs=(us=(Ds=(Fs=F==null?void 0:F.chatOptions)===null||Fs===void 0?void 0:Fs.textChat)===null||Ds===void 0?void 0:Ds.popup)===null||us===void 0?void 0:us.icons)===null||fs===void 0?void 0:fs.default)===null||Us===void 0?void 0:Us.fill)||"#C8C8CC",`;
            }`),V+=_()+`.alan-btn__close-chat-btn:hover svg path {
                fill: `.concat(((Rs=(Gs=(hs=(Ms=(ds=F==null?void 0:F.chatOptions)===null||ds===void 0?void 0:ds.textChat)===null||Ms===void 0?void 0:Ms.popup)===null||hs===void 0?void 0:hs.icons)===null||Gs===void 0?void 0:Gs.hover)===null||Rs===void 0?void 0:Rs.fill)||"#007AFF",`;
            }`),V+=_()+`.alan-btn__chat-messages::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }`,V+=_()+`.alan-btn__chat-messages::-webkit-scrollbar-thumb {
                border-radius: 3px;
                background-color: rgba(224, 224, 224, 0.795);
                transition: background-color 300ms ease-in-out;
            }`,V+=_()+`.alan-btn__chat-messages::-webkit-scrollbar-thumb:hover {
                background-color: rgba(230, 230, 230, 0.856);
                transition: background-color 300ms ease-in-out;
            }`,V+=_()+`.alan-btn__chat-messages::-webkit-scrollbar-track {
                border-radius: 3px;
                background: transparent;
            }`,V+=_()+`.alan-btn__chat-textarea {
                position: absolute;
                left: 8px;
                bottom: 8px;
                width: calc(100% - 16px);
                border-radius: 6px;
                border: 1px solid #C8C8CC;
                background: #fff;
                overflow-y: auto;
                outline: none;
                resize: none;
                font-size: 13px;
                line-height: 1.25;
                text-align: left;
                color: #0f2029;
                padding: 12px 48px 12px 12px;
                -webkit-user-select: text;
                -khtml-user-select: text;
                -moz-user-select: text;
                -ms-user-select: text;
                user-select: text;
                transition: opacity 300ms ease-in-out;
            }`,V+=_()+`.alan-btn__chat-holder.alan-text-chat__voice-enabled .alan-btn__chat-send-btn {
                right: 56px;
            }`,V+=_()+`.alan-btn__chat-holder.alan-text-chat__voice-enabled .alan-btn__chat-textarea {
                padding: 12px 92px 12px 12px;
            }`,V+=_()+`.alan-btn__chat.active .alan-btn__chat-textarea {
                opacity: 0.2;
                transition: opacity 300ms ease-in-out;
                pointer-events: none;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }`,V+=_()+`.alan-btn__chat.active .alan-btn__chat-send-btn {
                opacity: 0.2;
                pointer-events: none;
                transition: opacity 300ms ease-in-out;
            }`,V+=_()+`.alan-btn__chat-send-btn {
                position: absolute;
                transition: opacity 300ms ease-in-out;
                right: 12px;
                bottom: 16px;
                min-width: 40px;
                width: 40px;
                max-width: 40px;
                height: 40px;
                max-height: 40px;
                min-height: 40px;
                display: flex;
                flex-direction: row;
                cursor: pointer;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Chrome/Safari/Opera */
                -khtml-user-select: none; /* Konqueror */
                -moz-user-select: none; /* Firefox */
                -ms-user-select: none; /* IE/Edge */
                user-select: none;
            }`,V+=_()+`.alan-btn__chat-send-btn svg {
                width: 22px;
                position: relative;
                left: 2px;
            }`,V+=_()+`.alan-btn__chat-send-btn svg path {
                fill: `.concat(((Ns=(ys=(ps=(Ys=(ms=F==null?void 0:F.chatOptions)===null||ms===void 0?void 0:ms.textChat)===null||Ys===void 0?void 0:Ys.popup)===null||ps===void 0?void 0:ps.icons)===null||ys===void 0?void 0:ys.default)===null||Ns===void 0?void 0:Ns.fill)||"#C8C8CC",`;
            }`),kQ()||(V+=_()+`.alan-btn__chat-send-btn:hover svg path {
                    fill: `.concat(((Zs=(vs=(ks=(Js=(bs=F==null?void 0:F.chatOptions)===null||bs===void 0?void 0:bs.textChat)===null||Js===void 0?void 0:Js.popup)===null||ks===void 0?void 0:ks.icons)===null||vs===void 0?void 0:vs.hover)===null||Zs===void 0?void 0:Zs.fill)||"#007AFF",`;
                }`)),V+=_()+`.alan-btn__chat-mic-btn {
                position: absolute;
                right: 12px;
                bottom: 16px;
                min-width: 40px;
                width: 40px;
                max-width: 40px;
                height: 40px;
                max-height: 40px;
                min-height: 40px;
                display: flex;
                flex-direction: row;
                cursor: pointer;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
            }`,V+=_()+`.alan-btn__chat-mic-btn.active::before {
                content: '';
                position: absolute;
                z-index: -1;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                background-color:  `.concat(((Os=(Hs=(Xs=(Ls=(Ss=F==null?void 0:F.chatOptions)===null||Ss===void 0?void 0:Ss.textChat)===null||Ls===void 0?void 0:Ls.popup)===null||Xs===void 0?void 0:Xs.icons)===null||Hs===void 0?void 0:Hs.default)===null||Os===void 0?void 0:Os.fill)||"#C8C8CC",`;
                opacity: 0.3;
                border-radius: 50%;
            }`),V+=_()+`.alan-btn__chat-notifications-bubble {
                position: absolute;
                right: 4px;
                top: -4px;
                height: 20px;
                width: 20px;
                background-color:  `.concat(((Vs=(Ts=(Ws=F==null?void 0:F.chatOptions)===null||Ws===void 0?void 0:Ws.textChat)===null||Ts===void 0?void 0:Ts.notifications)===null||Vs===void 0?void 0:Vs.backgroundColor)||"rgba(208, 2, 27, 1)",`;
                color:  `).concat(((Ps=(zs=(xs=F==null?void 0:F.chatOptions)===null||xs===void 0?void 0:xs.textChat)===null||zs===void 0?void 0:zs.notifications)===null||Ps===void 0?void 0:Ps.color)||"rgba(255, 255, 255, 1)",`;
                border-radius: 50%;
                z-index: `).concat(zQ+1,`;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 10px;
            }`),V+=_()+`.alan-btn__chat-notifications-bubble:empty {
                display: none;
            }`,kQ()||(V+=_()+`.alan-btn__chat-mic-btn.active:hover::before {
                opacity: 0.35;
            }`),V+=_()+`.alan-btn__chat-mic-btn svg {
                width: 22px;
            }`,V+=_()+`.alan-btn__chat-mic-btn svg path {
                fill: `.concat((($s=(_s=(qs=(Ks=(js=F==null?void 0:F.chatOptions)===null||js===void 0?void 0:js.textChat)===null||Ks===void 0?void 0:Ks.popup)===null||qs===void 0?void 0:qs.icons)===null||_s===void 0?void 0:_s.default)===null||$s===void 0?void 0:$s.fill)||"#C8C8CC",`;
            }`),kQ()||(V+=_()+`.alan-btn__chat-mic-btn:hover svg path {
                fill: `.concat(((tc=(ec=(Qc=(Bc=(Ac=F==null?void 0:F.chatOptions)===null||Ac===void 0?void 0:Ac.textChat)===null||Bc===void 0?void 0:Bc.popup)===null||Qc===void 0?void 0:Qc.icons)===null||ec===void 0?void 0:ec.hover)===null||tc===void 0?void 0:tc.fill)||"#007AFF",`;
            }`)),V+=_()+`.alan-text-chat__animated-btn-bars {
                height:40px;
                width:40px;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                background: `.concat(((ic=(Cc=(Ec=(nc=(gc=F==null?void 0:F.chatOptions)===null||gc===void 0?void 0:gc.textChat)===null||nc===void 0?void 0:nc.popup)===null||Ec===void 0?void 0:Ec.icons)===null||Cc===void 0?void 0:Cc.hover)===null||ic===void 0?void 0:ic.fill)||"#007AFF",`;
                display:none;
            }`),V+=_()+`.alan-btn__chat-mic-btn.active .alan-text-chat__animated-btn-bars  {
                display: flex;
            }`,V+=_()+`.alan-btn__chat-mic-btn.active svg  {
                display: none;
            }`,V+=_()+`.alan-text-chat__bar {
                background: #ffffff;
                bottom: 1px;
                height: 3px;
                width: 2px;
                margin: 0px 1px;
                border-radius: 5px;
            }`,V+=_()+`.alan-text-chat__bar-1 {
                animation: alan-btn__sound-bar-1 0ms -1200ms linear infinite alternate;
            }`,V+=_()+`.alan-text-chat__bar-2 {
                animation: alan-btn__sound-bar-2 0ms -1200ms linear infinite alternate;
            }`,V+=_()+`.alan-text-chat__bar-3 {
                animation: alan-btn__sound-bar-3 0ms -1200ms linear infinite alternate;
            }`,V+=_()+RB("alan-btn__sound-bar-1",`
            0% {
      
                height: 3px; 
            }
            100% {
                  
                height: 10px;        
            }`),V+=_()+RB("alan-btn__sound-bar-2",`
            0% {
      
                height: 8px; 
            }
            100% {
                  
                height: 15px;        
            }`),V+=_()+RB("alan-btn__sound-bar-3",`
            0% {
      
                height: 12px; 
            }
            100% {
                  
                height: 28px;        
            }`),V+=_()+".alan-text-chat__bar:nth-child(1)  { animation-duration: 474ms; }",V+=_()+".alan-text-chat__bar:nth-child(2)  { animation-duration: 433ms; }",V+=_()+".alan-text-chat__bar:nth-child(3)  { animation-duration: 407ms; }",V+=_()+".alan-text-chat__bar:nth-child(4)  { animation-duration: 458ms; }",V+=_()+".alan-text-chat__bar:nth-child(5)  { animation-duration: 400ms; }",V+=_()+".alan-text-chat__bar:nth-child(6)  { animation-duration: 427ms; }",V+=_()+`.alan-btn__chat-request {
                margin-bottom: 16px;
                max-width: 100%;
                padding: 9px;
                line-height: 1.46;
                display: block;
                float: right;
                clear: both;
                border-radius: 16px 16px 0 16px;
                position: relative;
                background-color: `.concat(((Ic=(oc=(ac=(rc=F==null?void 0:F.chatOptions)===null||rc===void 0?void 0:rc.textChat)===null||ac===void 0?void 0:ac.bubbles)===null||oc===void 0?void 0:oc.request)===null||Ic===void 0?void 0:Ic.backgroundColor)||"#0078FF",`;
                color: `).concat(((wc=(lc=(cc=(sc=F==null?void 0:F.chatOptions)===null||sc===void 0?void 0:sc.textChat)===null||cc===void 0?void 0:cc.bubbles)===null||lc===void 0?void 0:lc.request)===null||wc===void 0?void 0:wc.color)||"#ffffff",`;
                font-size: `).concat(((fc=(uc=(Dc=(Fc=F==null?void 0:F.chatOptions)===null||Fc===void 0?void 0:Fc.textChat)===null||Dc===void 0?void 0:Dc.bubbles)===null||uc===void 0?void 0:uc.request)===null||fc===void 0?void 0:fc.fontSize)||"14",`px;
                word-break: break-word;
                text-align: right;
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`),V+=_()+`.alan-btn__chat-request * {
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`,V+=_()+`.alan-btn__chat-response {
                margin-bottom: 16px;
                max-width: 100%;
                padding: 9px;
                line-height: 1.46;
                display: block;
                float: left;
                clear: both;
                border-radius: 0 16px 16px 16px;
                position: relative;
                background-color: `.concat(((hc=(Mc=(dc=(Uc=F==null?void 0:F.chatOptions)===null||Uc===void 0?void 0:Uc.textChat)===null||dc===void 0?void 0:dc.bubbles)===null||Mc===void 0?void 0:Mc.response)===null||hc===void 0?void 0:hc.backgroundColor)||"#E9E9EB",`;
                color: `).concat(((Yc=(mc=(Rc=(Gc=F==null?void 0:F.chatOptions)===null||Gc===void 0?void 0:Gc.textChat)===null||Rc===void 0?void 0:Rc.bubbles)===null||mc===void 0?void 0:mc.response)===null||Yc===void 0?void 0:Yc.color)||"#0f2029",`;
                font-size: `).concat(((bc=(Nc=(yc=(pc=F==null?void 0:F.chatOptions)===null||pc===void 0?void 0:pc.textChat)===null||yc===void 0?void 0:yc.bubbles)===null||Nc===void 0?void 0:Nc.response)===null||bc===void 0?void 0:bc.fontSize)||"14",`px;
                word-break: break-word;
                text-align: left;
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`),V+=_()+`.alan-btn__chat-response * {
                -webkit-touch-callout: text; /* iOS Safari */
                -webkit-user-select: text; /* Chrome/Safari/Opera */
                -khtml-user-select: text; /* Konqueror */
                -moz-user-select: text; /* Firefox */
                -ms-user-select: text; /* IE/Edge */
                user-select: text;
            }`,V+=_(!0)+`.text-chat-is-opened .alanBtn {
                display: none;
            }`,V+=_(!0)+`.text-chat-is-opened .alanBtn-recognised-text-holder {
                display: none;
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1195 2.47218C13.5523 2.03918 13.5502 1.33489 13.1193 0.904189L13.0217 0.806586C12.5887 0.373581 11.8875 0.372614 11.4537 0.806392L7.1601 5.1C7.05127 5.20902 6.87582 5.21 6.76583 5.1L2.47222 0.806392C2.03922 0.373581 1.33493 0.375712 0.904226 0.806586L0.806624 0.904189C0.373619 1.33719 0.372652 2.03841 0.80643 2.47218L5.10004 6.76579C5.20906 6.87462 5.21003 7.05007 5.10004 7.16006L0.80643 11.4537C0.373619 11.8867 0.375751 12.591 0.806624 13.0217L0.904226 13.1193C1.33723 13.5523 2.03844 13.5532 2.47222 13.1195L6.76583 8.82585C6.87466 8.71683 7.05011 8.71586 7.1601 8.82585L11.4537 13.1195C11.8867 13.5523 12.591 13.5501 13.0217 13.1193L13.1193 13.0217C13.5523 12.5887 13.5533 11.8874 13.1195 11.4537L8.82589 7.16006C8.71687 7.05123 8.7159 6.87578 8.82589 6.76579L13.1195 2.47218Z" fill="white"/>
</svg>
`,FB.classList.add("alan-btn__close-chat-btn"),nB.appendChild(FB),FB.addEventListener("click",Y2),gA=document.createElement("div"),gA.id="textarea-holder",gA.classList.add("alan-btn__chat-textarea-holder"),uA=document.createElement("textarea"),uA.id="chatTextarea",uA.setAttribute("rows","2"),uA.classList.add("alan-btn__chat-textarea"),uA.addEventListener("keydown",R2),jA=document.createElement("div"),jA.id="chat-send-btn",jA.classList.add("alan-btn__chat-send-btn"),jA.addEventListener("click",u0),jA.innerHTML=`
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0297638 24.7941L2.2258 15.2839C2.31247 14.8792 2.65916 14.5612 3.09273 14.5034L15.3735 13.2314C15.7202 13.2026 15.7202 12.6822 15.3735 12.6243L3.09273 11.4391C2.65937 11.4102 2.31249 11.0923 2.2258 10.6876L0.0297638 1.20624C-0.172404 0.396854 0.694524 -0.267944 1.44571 0.107737L25.4582 12.1328C26.1806 12.5087 26.1806 13.5493 25.4582 13.925L1.44571 25.8923C0.694473 26.2679 -0.172404 25.6031 0.0297638 24.7938V24.7941Z" fill="#007AFF"/>
</svg>`,gA.appendChild(uA),gA.appendChild(jA),AA.appendChild(nB),AA.appendChild(qA),AA.appendChild(gA),bQ.appendChild(AA),bQ.classList.add("alan-btn__chat-holder")}if(KA){var vQ=((F=U==null?void 0:U.header)===null||F===void 0?void 0:F.label)||"Alan Virtual Assistant";KA.innerText=vQ,KA.setAttribute("title",vQ)}I?(uA.setAttribute("placeholder","Type here or use your mic with button..."),bQ.classList.add("alan-text-chat__voice-enabled"),sA||(sA=document.createElement("div"),sA.classList.add("alan-btn__chat-mic-btn"),sA.id="chat-mic-btn",sA.addEventListener("click",function(){$U()}),sA.innerHTML=`
                <svg width="41" height="56" viewBox="0 0 41 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2564 26.3571C29.2564 31.2186 25.3614 35.1429 20.5 35.1429C15.6386 35.1429 11.7143 31.2186 11.7143 26.3571V8.78571C11.7143 3.92429 15.6386 0 20.5 0C25.3614 0 29.2857 3.92429 29.2857 8.78571L29.2564 26.3571ZM20.5 41.2929C28.5829 41.2929 36.0214 35.1429 36.0214 26.3571H41C41 36.3729 33.0343 44.6314 23.4286 46.0371V55.6429H17.5714V46.0371C7.96571 44.6021 0 36.3436 0 26.3571H4.97857C4.97857 35.1429 12.4171 41.2929 20.5 41.2929Z" fill="#2C9EFF"/>
                </svg>
                <div class="alan-text-chat__animated-btn-bars">
                    <div class="alan-text-chat__bar alan-text-chat__bar-1"></div>
                    <div class="alan-text-chat__bar alan-text-chat__bar-2"></div>
                    <div class="alan-text-chat__bar alan-text-chat__bar-3"></div>
                    <div class="alan-text-chat__bar alan-text-chat__bar-3"></div>
                    <div class="alan-text-chat__bar alan-text-chat__bar-2"></div>
                    <div class="alan-text-chat__bar alan-text-chat__bar-1"></div>
`,space:" "}}function sC(A,B){for(var Q="",e=0;e<B;e++)Q+="  ";return Q+A}function Ui(A,B,Q){Q===void 0&&(Q={});var e="";if(!B)return e;var t=Q,g=t.indent,n=g===void 0?0:g,E=B.fallbacks;Q.format===!1&&(n=-1/0);var C=DE(Q),i=C.linebreak,r=C.space;if(A&&n++,E)if(Array.isArray(E))for(var a=0;a<E.length;a++){var o=E[a];for(var l in o){var I=o[l];I!=null&&(e&&(e+=i),e+=sC(l+":"+r+mg(I)+";",n))}}else for(var w in E){var U=E[w];U!=null&&(e&&(e+=i),e+=sC(w+":"+r+mg(U)+";",n))}for(var c in B){var D=B[c];D!=null&&c!=="fallbacks"&&(e&&(e+=i),e+=sC(c+":"+r+mg(D)+";",n))}return!e&&!Q.allowEmpty||!A?e:(n--,e&&(e=""+i+e+i),sC(""+A+r+"{"+e,n)+sC("}",n))}var pP=/([[\].#*$><+~=|^:(),"'`\s])/g,bR=typeof CSS<"u"&&CSS.escape,uU=function(A){return bR?bR(A):A.replace(pP,"\\$1")},oJ=function(){function A(Q,e,t){this.type="style",this.isProcessed=!1;var g=t.sheet,n=t.Renderer;this.key=Q,this.options=t,this.style=e,g?this.renderer=g.renderer:n&&(this.renderer=new n)}var B=A.prototype;return B.prop=function(e,t,g){if(t===void 0)return this.style[e];var n=g?g.force:!1;if(!n&&this.style[e]===t)return this;var E=t;(!g||g.process!==!1)&&(E=this.options.jss.plugins.onChangeValue(t,e,this));var C=E==null||E===!1,i=e in this.style;if(C&&!i&&!n)return this;var r=C&&i;if(r?delete this.style[e]:this.style[e]=E,this.renderable&&this.renderer)return r?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,E),this;var a=this.options.sheet;return a&&a.attached,this},A}(),cD=function(A){aJ(B,A);function B(e,t,g){var n;n=A.call(this,e,t,g)||this;var E=g.selector,C=g.scoped,i=g.sheet,r=g.generateId;return E?n.selectorText=E:C!==!1&&(n.id=r(yR(yR(n)),i),n.selectorText="."+uU(n.id)),n}var Q=B.prototype;return Q.applyTo=function(t){var g=this.renderer;if(g){var n=this.toJSON();for(var E in n)g.setProperty(t,E,n[E])}return this},Q.toJSON=function(){var t={};for(var g in this.style){var n=this.style[g];typeof n!="object"?t[g]=n:Array.isArray(n)&&(t[g]=mg(n))}return t},Q.toString=function(t){var g=this.options.sheet,n=g?g.options.link:!1,E=n?NA({},t,{allowEmpty:!0}):t;return Ui(this.selectorText,this.style,E)},rJ(B,[{key:"selector",set:function(t){if(t!==this.selectorText){this.selectorText=t;var g=this.renderer,n=this.renderable;if(!(!n||!g)){var E=g.setSelector(n,t);E||g.replaceRule(n,this)}}},get:function(){return this.selectorText}}]),B}(oJ),yP={onCreateRule:function(B,Q,e){return B[0]==="@"||e.parent&&e.parent.type==="keyframes"?null:new cD(B,Q,e)}},Ew={indent:1,children:!0},NP=/@([\w-]+)/,bP=function(){function A(Q,e,t){this.type="conditional",this.isProcessed=!1,this.key=Q;var g=Q.match(NP);this.at=g?g[1]:"unknown",this.query=t.name||"@"+this.at,this.options=t,this.rules=new HI(NA({},t,{parent:this}));for(var n in e)this.rules.add(n,e[n]);this.rules.process()}var B=A.prototype;return B.getRule=function(e){return this.rules.get(e)},B.indexOf=function(e){return this.rules.indexOf(e)},B.addRule=function(e,t,g){var n=this.rules.add(e,t,g);return n?(this.options.jss.plugins.onProcessRule(n),n):null},B.replaceRule=function(e,t,g){var n=this.rules.replace(e,t,g);return n&&this.options.jss.plugins.onProcessRule(n),n},B.toString=function(e){e===void 0&&(e=Ew);var t=DE(e),g=t.linebreak;if(e.indent==null&&(e.indent=Ew.indent),e.children==null&&(e.children=Ew.children),e.children===!1)return this.query+" {}";var n=this.rules.toString(e);return n?this.query+" {"+g+n+g+"}":""},A}(),JP=/@container|@media|@supports\s+/,kP={onCreateRule:function(B,Q,e){return JP.test(B)?new bP(B,Q,e):null}},Cw={indent:1,children:!0},vP=/@keyframes\s+([\w-]+)/,lD=function(){function A(Q,e,t){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var g=Q.match(vP);g&&g[1]?this.name=g[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=t;var n=t.scoped,E=t.sheet,C=t.generateId;this.id=n===!1?this.name:uU(C(this,E)),this.rules=new HI(NA({},t,{parent:this}));for(var i in e)this.rules.add(i,e[i],NA({},t,{parent:this}));this.rules.process()}var B=A.prototype;return B.toString=function(e){e===void 0&&(e=Cw);var t=DE(e),g=t.linebreak;if(e.indent==null&&(e.indent=Cw.indent),e.children==null&&(e.children=Cw.children),e.children===!1)return this.at+" "+this.id+" {}";var n=this.rules.toString(e);return n&&(n=""+g+n+g),this.at+" "+this.id+" {"+n+"}"},A}(),ZP=/@keyframes\s+/,SP=/\$([\w-]+)/g,wD=function(B,Q){return typeof B=="string"?B.replace(SP,function(e,t){return t in Q?Q[t]:e}):B},JR=function(B,Q,e){var t=B[Q],g=wD(t,e);g!==t&&(B[Q]=g)},LP={onCreateRule:function(B,Q,e){return typeof B=="string"&&ZP.test(B)?new lD(B,Q,e):null},onProcessStyle:function(B,Q,e){return Q.type!=="style"||!e||("animation-name"in B&&JR(B,"animation-name",e.keyframes),"animation"in B&&JR(B,"animation",e.keyframes)),B},onChangeValue:function(B,Q,e){var t=e.options.sheet;if(!t)return B;switch(Q){case"animation":return wD(B,t.keyframes);case"animation-name":return wD(B,t.keyframes);default:return B}}},XP=function(A){aJ(B,A);function B(){return A.apply(this,arguments)||this}var Q=B.prototype;return Q.toString=function(t){var g=this.options.sheet,n=g?g.options.link:!1,E=n?NA({},t,{allowEmpty:!0}):t;return Ui(this.key,this.style,E)},B}(oJ),HP={onCreateRule:function(B,Q,e){return e.parent&&e.parent.type==="keyframes"?new XP(B,Q,e):null}},OP=function(){function A(Q,e,t){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=Q,this.style=e,this.options=t}var B=A.prototype;return B.toString=function(e){var t=DE(e),g=t.linebreak;if(Array.isArray(this.style)){for(var n="",E=0;E<this.style.length;E++)n+=Ui(this.at,this.style[E]),this.style[E+1]&&(n+=g);return n}return Ui(this.at,this.style,e)},A}(),WP=/@font-face/,TP={onCreateRule:function(B,Q,e){return WP.test(B)?new OP(B,Q,e):null}},VP=function(){function A(Q,e,t){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=Q,this.style=e,this.options=t}var B=A.prototype;return B.toString=function(e){return Ui(this.key,this.style,e)},A}(),xP={onCreateRule:function(B,Q,e){return B==="@viewport"||B==="@-ms-viewport"?new VP(B,Q,e):null}},zP=function(){function A(Q,e,t){this.type="simple",this.isProcessed=!1,this.key=Q,this.value=e,this.options=t}var B=A.prototype;return B.toString=function(e){if(Array.isArray(this.value)){for(var t="",g=0;g<this.value.length;g++)t+=this.key+" "+this.value[g]+";",this.value[g+1]&&(t+=`
`,B},rj=function(){function A(Q){this.getPropertyValue=$P,this.setProperty=Aj,this.removeProperty=Bj,this.setSelector=Qj,this.hasInsertedRules=!1,this.cssRules=[],Q&&WC.add(Q),this.sheet=Q;var e=this.sheet?this.sheet.options:{},t=e.media,g=e.meta,n=e.element;this.element=n||ij(),this.element.setAttribute("data-jss",""),t&&this.element.setAttribute("media",t),g&&this.element.setAttribute("data-meta",g);var E=Cj();E&&this.element.setAttribute("nonce",E)}var B=A.prototype;return B.attach=function(){if(!(this.element.parentNode||!this.sheet)){Ej(this.element,this.sheet.options);var e=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}},B.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},B.deploy=function(){var e=this.sheet;if(e){if(e.options.link){this.insertRules(e.rules);return}this.element.textContent=`
`+e.toString()+`
`}},B.insertRules=function(e,t){for(var g=0;g<e.index.length;g++)this.insertRule(e.index[g],g,t)},B.insertRule=function(e,t,g){if(g===void 0&&(g=this.element.sheet),e.rules){var n=e,E=g;if(e.type==="conditional"||e.type==="keyframes"){var C=XR(g,t);if(E=LR(g,n.toString({children:!1}),C),E===!1)return!1;this.refCssRule(e,C,E)}return this.insertRules(n.rules,E),E}var i=e.toString();if(!i)return!1;var r=XR(g,t),a=LR(g,i,r);return a===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(e,r,a),a)},B.refCssRule=function(e,t,g){e.renderable=g,e.options.parent instanceof IJ&&this.cssRules.splice(t,0,g)},B.deleteRule=function(e){var t=this.element.sheet,g=this.indexOf(e);return g===-1?!1:(t.deleteRule(g),this.cssRules.splice(g,1),!0)},B.indexOf=function(e){return this.cssRules.indexOf(e)},B.replaceRule=function(e,t){var g=this.indexOf(e);return g===-1?!1:(this.element.sheet.deleteRule(g),this.cssRules.splice(g,1),this.insertRule(t,g))},B.getRules=function(){return this.element.sheet.cssRules},A}(),aj=0,oj=function(){function A(Q){this.id=aj++,this.version="10.10.0",this.plugins=new qP,this.options={id:{minify:!1},createGenerateId:SR,Renderer:$i?rj:null,plugins:[]},this.generateId=SR({minify:!1});for(var e=0;e<kR.length;e++)this.plugins.use(kR[e],{queue:"internal"});this.setup(Q)}var B=A.prototype;return B.setup=function(e){return e===void 0&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=NA({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),e.insertionPoint!=null&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this},B.createStyleSheet=function(e,t){t===void 0&&(t={});var g=t,n=g.index;typeof n!="number"&&(n=WC.index===0?0:WC.index+1);var E=new IJ(e,NA({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:n}));return this.plugins.onProcessSheet(E),E},B.removeStyleSheet=function(e){return e.detach(),WC.remove(e),this},B.createRule=function(e,t,g){if(t===void 0&&(t={}),g===void 0&&(g={}),typeof e=="object")return this.createRule(void 0,e,t);var n=NA({},g,{name:e,jss:this,Renderer:this.options.Renderer});n.generateId||(n.generateId=this.generateId),n.classes||(n.classes={}),n.keyframes||(n.keyframes={});var E=DU(e,t,n);return E&&this.plugins.onProcessRule(E),E},B.use=function(){for(var e=this,t=arguments.length,g=new Array(t),n=0;n<t;n++)g[n]=arguments[n];return g.forEach(function(E){e.plugins.use(E)}),this},A}(),lJ=function(B){return new oj(B)},fU=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function wJ(A){var B=null;for(var Q in A){var e=A[Q],t=typeof e;if(t==="function")B||(B={}),B[Q]=e;else if(t==="object"&&e!==null&&!Array.isArray(e)){var g=wJ(e);g&&(B||(B={}),B[Q]=g)}}return B}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT