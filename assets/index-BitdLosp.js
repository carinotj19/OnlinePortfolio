(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var vd={exports:{}},Vo={};var qg;function $S(){if(qg)return Vo;qg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=i,Vo.jsxs=i,Vo}var Yg;function eM(){return Yg||(Yg=1,vd.exports=$S()),vd.exports}var m=eM(),xd={exports:{}},at={};var Zg;function tM(){if(Zg)return at;Zg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(L,Z,xe){this.props=L,this.context=Z,this.refs=y,this.updater=xe||T}M.prototype.isReactComponent={},M.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function D(){}D.prototype=M.prototype;function P(L,Z,xe){this.props=L,this.context=Z,this.refs=y,this.updater=xe||T}var B=P.prototype=new D;B.constructor=P,w(B,M.prototype),B.isPureReactComponent=!0;var k=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function F(L,Z,xe){var ye=xe.ref;return{$$typeof:r,type:L,key:Z,ref:ye!==void 0?ye:null,props:xe}}function K(L,Z){return F(L.type,Z,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function J(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xe){return Z[xe]})}var fe=/\/+/g;function me(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?J(""+L.key):Z.toString(36)}function X(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(O,O):(L.status="pending",L.then(function(Z){L.status==="pending"&&(L.status="fulfilled",L.value=Z)},function(Z){L.status==="pending"&&(L.status="rejected",L.reason=Z)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function U(L,Z,xe,ye,Re){var se=typeof L;(se==="undefined"||se==="boolean")&&(L=null);var Me=!1;if(L===null)Me=!0;else switch(se){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(L.$$typeof){case r:case t:Me=!0;break;case S:return Me=L._init,U(Me(L._payload),Z,xe,ye,Re)}}if(Me)return Re=Re(L),Me=ye===""?"."+me(L,0):ye,k(Re)?(xe="",Me!=null&&(xe=Me.replace(fe,"$&/")+"/"),U(Re,Z,xe,"",function(Je){return Je})):Re!=null&&(G(Re)&&(Re=K(Re,xe+(Re.key==null||L&&L.key===Re.key?"":(""+Re.key).replace(fe,"$&/")+"/")+Me)),Z.push(Re)),1;Me=0;var Ee=ye===""?".":ye+":";if(k(L))for(var Fe=0;Fe<L.length;Fe++)ye=L[Fe],se=Ee+me(ye,Fe),Me+=U(ye,Z,xe,se,Re);else if(Fe=E(L),typeof Fe=="function")for(L=Fe.call(L),Fe=0;!(ye=L.next()).done;)ye=ye.value,se=Ee+me(ye,Fe++),Me+=U(ye,Z,xe,se,Re);else if(se==="object"){if(typeof L.then=="function")return U(X(L),Z,xe,ye,Re);throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Me}function I(L,Z,xe){if(L==null)return L;var ye=[],Re=0;return U(L,ye,"","",function(se){return Z.call(xe,se,Re++)}),ye}function ee(L){if(L._status===-1){var Z=L._result;Z=Z(),Z.then(function(xe){(L._status===0||L._status===-1)&&(L._status=1,L._result=xe)},function(xe){(L._status===0||L._status===-1)&&(L._status=2,L._result=xe)}),L._status===-1&&(L._status=0,L._result=Z)}if(L._status===1)return L._result.default;throw L._result}var ce=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Se={map:I,forEach:function(L,Z,xe){I(L,function(){Z.apply(this,arguments)},xe)},count:function(L){var Z=0;return I(L,function(){Z++}),Z},toArray:function(L){return I(L,function(Z){return Z})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return at.Activity=x,at.Children=Se,at.Component=M,at.Fragment=i,at.Profiler=l,at.PureComponent=P,at.StrictMode=s,at.Suspense=g,at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,at.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},at.cache=function(L){return function(){return L.apply(null,arguments)}},at.cacheSignal=function(){return null},at.cloneElement=function(L,Z,xe){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ye=w({},L.props),Re=L.key;if(Z!=null)for(se in Z.key!==void 0&&(Re=""+Z.key),Z)!A.call(Z,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&Z.ref===void 0||(ye[se]=Z[se]);var se=arguments.length-2;if(se===1)ye.children=xe;else if(1<se){for(var Me=Array(se),Ee=0;Ee<se;Ee++)Me[Ee]=arguments[Ee+2];ye.children=Me}return F(L.type,Re,ye)},at.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},at.createElement=function(L,Z,xe){var ye,Re={},se=null;if(Z!=null)for(ye in Z.key!==void 0&&(se=""+Z.key),Z)A.call(Z,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Re[ye]=Z[ye]);var Me=arguments.length-2;if(Me===1)Re.children=xe;else if(1<Me){for(var Ee=Array(Me),Fe=0;Fe<Me;Fe++)Ee[Fe]=arguments[Fe+2];Re.children=Ee}if(L&&L.defaultProps)for(ye in Me=L.defaultProps,Me)Re[ye]===void 0&&(Re[ye]=Me[ye]);return F(L,se,Re)},at.createRef=function(){return{current:null}},at.forwardRef=function(L){return{$$typeof:p,render:L}},at.isValidElement=G,at.lazy=function(L){return{$$typeof:S,_payload:{_status:-1,_result:L},_init:ee}},at.memo=function(L,Z){return{$$typeof:h,type:L,compare:Z===void 0?null:Z}},at.startTransition=function(L){var Z=z.T,xe={};z.T=xe;try{var ye=L(),Re=z.S;Re!==null&&Re(xe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(O,ce)}catch(se){ce(se)}finally{Z!==null&&xe.types!==null&&(Z.types=xe.types),z.T=Z}},at.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},at.use=function(L){return z.H.use(L)},at.useActionState=function(L,Z,xe){return z.H.useActionState(L,Z,xe)},at.useCallback=function(L,Z){return z.H.useCallback(L,Z)},at.useContext=function(L){return z.H.useContext(L)},at.useDebugValue=function(){},at.useDeferredValue=function(L,Z){return z.H.useDeferredValue(L,Z)},at.useEffect=function(L,Z){return z.H.useEffect(L,Z)},at.useEffectEvent=function(L){return z.H.useEffectEvent(L)},at.useId=function(){return z.H.useId()},at.useImperativeHandle=function(L,Z,xe){return z.H.useImperativeHandle(L,Z,xe)},at.useInsertionEffect=function(L,Z){return z.H.useInsertionEffect(L,Z)},at.useLayoutEffect=function(L,Z){return z.H.useLayoutEffect(L,Z)},at.useMemo=function(L,Z){return z.H.useMemo(L,Z)},at.useOptimistic=function(L,Z){return z.H.useOptimistic(L,Z)},at.useReducer=function(L,Z,xe){return z.H.useReducer(L,Z,xe)},at.useRef=function(L){return z.H.useRef(L)},at.useState=function(L){return z.H.useState(L)},at.useSyncExternalStore=function(L,Z,xe){return z.H.useSyncExternalStore(L,Z,xe)},at.useTransition=function(){return z.H.useTransition()},at.version="19.2.5",at}var Kg;function Zh(){return Kg||(Kg=1,xd.exports=tM()),xd.exports}var Pr=Zh(),Sd={exports:{}},jo={},Md={exports:{}},yd={};var Qg;function nM(){return Qg||(Qg=1,(function(r){function t(U,I){var ee=U.length;U.push(I);e:for(;0<ee;){var ce=ee-1>>>1,Se=U[ce];if(0<l(Se,I))U[ce]=I,U[ee]=Se,ee=ce;else break e}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var I=U[0],ee=U.pop();if(ee!==I){U[0]=ee;e:for(var ce=0,Se=U.length,L=Se>>>1;ce<L;){var Z=2*(ce+1)-1,xe=U[Z],ye=Z+1,Re=U[ye];if(0>l(xe,ee))ye<Se&&0>l(Re,xe)?(U[ce]=Re,U[ye]=ee,ce=ye):(U[ce]=xe,U[Z]=ee,ce=Z);else if(ye<Se&&0>l(Re,ee))U[ce]=Re,U[ye]=ee,ce=ye;else break e}}return I}function l(U,I){var ee=U.sortIndex-I.sortIndex;return ee!==0?ee:U.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var g=[],h=[],S=1,x=null,_=3,E=!1,T=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function B(U){for(var I=i(h);I!==null;){if(I.callback===null)s(h);else if(I.startTime<=U)s(h),I.sortIndex=I.expirationTime,t(g,I);else break;I=i(h)}}function k(U){if(w=!1,B(U),!T)if(i(g)!==null)T=!0,O||(O=!0,J());else{var I=i(h);I!==null&&X(k,I.startTime-U)}}var O=!1,z=-1,A=5,F=-1;function K(){return y?!0:!(r.unstable_now()-F<A)}function G(){if(y=!1,O){var U=r.unstable_now();F=U;var I=!0;try{e:{T=!1,w&&(w=!1,D(z),z=-1),E=!0;var ee=_;try{t:{for(B(U),x=i(g);x!==null&&!(x.expirationTime>U&&K());){var ce=x.callback;if(typeof ce=="function"){x.callback=null,_=x.priorityLevel;var Se=ce(x.expirationTime<=U);if(U=r.unstable_now(),typeof Se=="function"){x.callback=Se,B(U),I=!0;break t}x===i(g)&&s(g),B(U)}else s(g);x=i(g)}if(x!==null)I=!0;else{var L=i(h);L!==null&&X(k,L.startTime-U),I=!1}}break e}finally{x=null,_=ee,E=!1}I=void 0}}finally{I?J():O=!1}}}var J;if(typeof P=="function")J=function(){P(G)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,me=fe.port2;fe.port1.onmessage=G,J=function(){me.postMessage(null)}}else J=function(){M(G,0)};function X(U,I){z=M(function(){U(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(U){switch(_){case 1:case 2:case 3:var I=3;break;default:I=_}var ee=_;_=I;try{return U()}finally{_=ee}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=_;_=U;try{return I()}finally{_=ee}},r.unstable_scheduleCallback=function(U,I,ee){var ce=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ce+ee:ce):ee=ce,U){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ee+Se,U={id:S++,callback:I,priorityLevel:U,startTime:ee,expirationTime:Se,sortIndex:-1},ee>ce?(U.sortIndex=ee,t(h,U),i(g)===null&&U===i(h)&&(w?(D(z),z=-1):w=!0,X(k,ee-ce))):(U.sortIndex=Se,t(g,U),T||E||(T=!0,O||(O=!0,J()))),U},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(U){var I=_;return function(){var ee=_;_=I;try{return U.apply(this,arguments)}finally{_=ee}}}})(yd)),yd}var Jg;function iM(){return Jg||(Jg=1,Md.exports=nM()),Md.exports}var Ed={exports:{}},Un={};var $g;function aM(){if($g)return Un;$g=1;var r=Zh();function t(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,h,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:g,containerInfo:h,implementation:S}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(g,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(g,h,null,S)},Un.flushSync=function(g){var h=d.T,S=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=h,s.p=S,s.d.f()}},Un.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(g,h))},Un.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Un.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?s.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:E}):S==="script"&&s.d.X(g,{crossOrigin:x,integrity:_,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Un.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);s.d.M(g,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(g)},Un.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin);s.d.L(g,S,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Un.preloadModule=function(g,h){if(typeof g=="string")if(h){var S=p(h.as,h.crossOrigin);s.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(g)},Un.requestFormReset=function(g){s.d.r(g)},Un.unstable_batchedUpdates=function(g,h){return g(h)},Un.useFormState=function(g,h,S){return d.H.useFormState(g,h,S)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.5",Un}var e_;function sM(){if(e_)return Ed.exports;e_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ed.exports=aM(),Ed.exports}var t_;function rM(){if(t_)return jo;t_=1;var r=iM(),t=Zh(),i=sM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),e;if(f===o)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,o=f;break}if(C===o){v=!0,o=u,a=f;break}C=C.sibling}if(!v){for(C=f.child;C;){if(C===a){v=!0,a=f,o=u;break}if(C===o){v=!0,o=f,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case O:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case P:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case B:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case A:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var X=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ce=[],Se=-1;function L(e){return{current:e}}function Z(e){0>Se||(e.current=ce[Se],ce[Se]=null,Se--)}function xe(e,n){Se++,ce[Se]=e.current,e.current=n}var ye=L(null),Re=L(null),se=L(null),Me=L(null);function Ee(e,n){switch(xe(se,n),xe(Re,e),xe(ye,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=gg(n),e=_g(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(ye),xe(ye,e)}function Fe(){Z(ye),Z(Re),Z(se)}function Je(e){e.memoizedState!==null&&xe(Me,e);var n=ye.current,a=_g(n,e.type);n!==a&&(xe(Re,e),xe(ye,a))}function Ze(e){Re.current===e&&(Z(ye),Z(Re)),Me.current===e&&(Z(Me),zo._currentValue=ee)}var Nt,rt;function dt(e){if(Nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Nt=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+rt}var bt=!1;function ct(e,n){if(!e||bt)return"";bt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var oe=le}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(le){oe=le}e.call(ve.prototype)}}else{try{throw Error()}catch(le){oe=le}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&oe&&typeof le.stack=="string")return[le.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],C=f[1];if(v&&C){var H=v.split(`
`),ne=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ne.length)for(o=H.length-1,u=ne.length-1;1<=o&&0<=u&&H[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ne[u]){var he=`
`+H[o].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=o&&0<=u);break}}}finally{bt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?dt(a):""}function an(e,n){switch(e.tag){case 26:case 27:case 5:return dt(e.type);case 16:return dt("Lazy");case 13:return e.child!==n&&n!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return ct(e.type,!1);case 11:return ct(e.type.render,!1);case 1:return ct(e.type,!0);case 31:return dt("Activity");default:return""}}function Wt(e){try{var n="",a=null;do n+=an(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var En=Object.prototype.hasOwnProperty,W=r.unstable_scheduleCallback,$t=r.unstable_cancelCallback,ht=r.unstable_shouldYield,It=r.unstable_requestPaint,Ce=r.unstable_now,Zt=r.unstable_getCurrentPriorityLevel,N=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,_e=r.unstable_LowPriority,Te=r.unstable_IdlePriority,we=r.log,Le=r.unstable_setDisableYieldValue,ue=null,de=null;function Oe(e){if(typeof we=="function"&&Le(e),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ue,e)}catch{}}var Pe=Math.clz32?Math.clz32:nt,De=Math.log,Ne=Math.LN2;function nt(e){return e>>>=0,e===0?32:31-(De(e)/Ne|0)|0}var it=256,pt=262144,V=4194304;function Ae(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pe(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Ae(o):(v&=C,v!==0?u=Ae(v):a||(a=C&~e,a!==0&&(u=Ae(a))))):(C=o&~f,C!==0?u=Ae(C):v!==0?u=Ae(v):a||(a=o&~e,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function We(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function tt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function en(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,H=e.expirationTimes,ne=e.hiddenUpdates;for(a=v&~a;0<a;){var he=31-Pe(a),ve=1<<he;C[he]=0,H[he]=-1;var oe=ne[he];if(oe!==null)for(ne[he]=null,he=0;he<oe.length;he++){var le=oe[he];le!==null&&(le.lane&=-536870913)}a&=~ve}o!==0&&Ct(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Ct(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ui(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Qn(e,n){var a=n&-n;return a=(a&42)!==0?1:os(a),(a&(e.suspendedLanes|n))!==0?0:a}function os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kr(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:Hg(e.type))}function Qr(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Nn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Nn,bn="__reactProps$"+Nn,Yi="__reactContainer$"+Nn,Ea="__reactEvents$"+Nn,ol="__reactListeners$"+Nn,Is="__reactHandles$"+Nn,Jr="__reactResources$"+Nn,ba="__reactMarker$"+Nn;function $r(e){delete e[sn],delete e[bn],delete e[Ea],delete e[ol],delete e[Is]}function Ta(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Yi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=bg(e);e!==null;){if(a=e[sn])return a;e=bg(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[sn]||e[Yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ls(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ra(e){var n=e[Jr];return n||(n=e[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(e){e[ba]=!0}var ll=new Set,R={};function q(e,n){re(e,n),re(e+"Capture",n)}function re(e,n){for(R[e]=n,e=0;e<n.length;e++)ll.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},ze={};function Ve(e){return En.call(ze,e)?!0:En.call(ae,e)?!1:ie.test(e)?ze[e]=!0:(ae[e]=!0,!1)}function Be(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ke(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function je(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ke(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ot(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Tt(e){if(!e._valueTracker){var n=ot(e)?"checked":"value";e._valueTracker=Ye(e,n,""+e[n])}}function Kt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ot(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Lt=/[\n"\\]/g;function Ot(e){return e.replace(Lt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(e,n,a,o,u,f,v,C){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ke(n)):e.value!==""+Ke(n)&&(e.value=""+Ke(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?mt(e,v,Ke(n)):a!=null?mt(e,v,Ke(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Ke(C):e.removeAttribute("name")}function Dn(e,n,a,o,u,f,v,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Tt(e);return}a=a!=null?""+Ke(a):"",n=n!=null?""+Ke(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Tt(e)}function mt(e,n,a){n==="number"&&kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _n(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ke(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Jn(e,n,a){if(n!=null&&(n=""+Ke(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ke(a):""}function bi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(X(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ke(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Tt(e)}function $n(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Pt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qt(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Pt.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ti(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Qt(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Qt(e,f,n[f])}function Dt(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cs(e){return Ca.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Gs=null;function mp(e){var n=Aa(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ge(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Kt(o)}break e;case"textarea":Jn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(e,!!a.multiple,n,!1)}}}var gu=!1;function gp(e,n,a){if(gu)return e(n,a);gu=!0;try{var o=e(n);return o}finally{if(gu=!1,(Hs!==null||Gs!==null)&&(Zl(),Hs&&(n=Hs,e=Gs,Gs=Hs=null,mp(n),e)))for(n=0;n<e.length;n++)mp(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(Ki)try{var to={};Object.defineProperty(to,"passive",{get:function(){_u=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{_u=!1}var wa=null,vu=null,cl=null;function _p(){if(cl)return cl;var e,n=vu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function vp(){return!1}function Vn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:vp,this.isPropagationStopped=vp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Vn(us),no=x({},us,{view:0,detail:0}),Qv=Vn(no),xu,Su,io,hl=x({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(xu=e.screenX-io.screenX,Su=e.screenY-io.screenY):Su=xu=0,io=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),xp=Vn(hl),Jv=x({},hl,{dataTransfer:0}),$v=Vn(Jv),ex=x({},no,{relatedTarget:0}),Mu=Vn(ex),tx=x({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=Vn(tx),ix=x({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ax=Vn(ix),sx=x({},us,{data:0}),Sp=Vn(sx),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lx[e])?!!n[e]:!1}function yu(){return cx}var ux=x({},no,{key:function(e){if(e.key){var n=rx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ox[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fx=Vn(ux),dx=x({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Vn(dx),hx=x({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),px=Vn(hx),mx=x({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=Vn(mx),_x=x({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=Vn(_x),xx=x({},us,{newState:0,oldState:0}),Sx=Vn(xx),Mx=[9,13,27,32],Eu=Ki&&"CompositionEvent"in window,ao=null;Ki&&"documentMode"in document&&(ao=document.documentMode);var yx=Ki&&"TextEvent"in window&&!ao,yp=Ki&&(!Eu||ao&&8<ao&&11>=ao),Ep=" ",bp=!1;function Tp(e,n){switch(e){case"keyup":return Mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vs=!1;function Ex(e,n){switch(e){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(bp=!0,Ep);case"textInput":return e=n.data,e===Ep&&bp?null:e;default:return null}}function bx(e,n){if(Vs)return e==="compositionend"||!Eu&&Tp(e,n)?(e=_p(),cl=vu=wa=null,Vs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Tx[e.type]:n==="textarea"}function Cp(e,n,a,o){Hs?Gs?Gs.push(o):Gs=[o]:Hs=o,n=nc(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var so=null,ro=null;function Ax(e){ug(e,0)}function pl(e){var n=ls(e);if(Kt(n))return e}function wp(e,n){if(e==="change")return n}var Np=!1;if(Ki){var bu;if(Ki){var Tu="oninput"in document;if(!Tu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Tu=typeof Dp.oninput=="function"}bu=Tu}else bu=!1;Np=bu&&(!document.documentMode||9<document.documentMode)}function Up(){so&&(so.detachEvent("onpropertychange",Lp),ro=so=null)}function Lp(e){if(e.propertyName==="value"&&pl(ro)){var n=[];Cp(n,ro,e,mu(e)),gp(Ax,n)}}function Rx(e,n,a){e==="focusin"?(Up(),so=n,ro=a,so.attachEvent("onpropertychange",Lp)):e==="focusout"&&Up()}function Cx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(ro)}function wx(e,n){if(e==="click")return pl(n)}function Nx(e,n){if(e==="input"||e==="change")return pl(n)}function Dx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ei=typeof Object.is=="function"?Object.is:Dx;function oo(e,n){if(ei(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!En.call(n,u)||!ei(e[u],n[u]))return!1}return!0}function Op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pp(e,n){var a=Op(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Op(a)}}function Bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Fp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=kt(e.document)}return n}function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ux=Ki&&"documentMode"in document&&11>=document.documentMode,js=null,Ru=null,lo=null,Cu=!1;function zp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||js==null||js!==kt(o)||(o=js,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=nc(Ru,"onSelect"),0<o.length&&(n=new dl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=js)))}function fs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ks={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},wu={},Ip={};Ki&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function ds(e){if(wu[e])return wu[e];if(!ks[e])return e;var n=ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ip)return wu[e]=n[a];return e}var Hp=ds("animationend"),Gp=ds("animationiteration"),Vp=ds("animationstart"),Lx=ds("transitionrun"),Ox=ds("transitionstart"),Px=ds("transitioncancel"),jp=ds("transitionend"),kp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function Ai(e,n){kp.set(e,n),q(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Xs=0,Du=0;function gl(){for(var e=Xs,n=Du=Xs=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Xp(a,u,f)}}function _l(e,n,a,o){fi[Xs++]=e,fi[Xs++]=n,fi[Xs++]=a,fi[Xs++]=o,Du|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Uu(e,n,a,o){return _l(e,n,a,o),vl(e)}function hs(e,n){return _l(e,null,null,n),vl(e)}function Xp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pe(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Do)throw Do=0,Vf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ws={};function Bx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new Bx(e,n,a,o)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Wp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Lu(e)&&(v=1);else if(typeof e=="string")v=GS(e,a,ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=ti(31,a,n,u),e.elementType=F,e.lanes=f,e;case w:return ps(a.children,u,f,n);case y:v=8,u|=24;break;case M:return e=ti(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case k:return e=ti(13,a,n,u),e.elementType=k,e.lanes=f,e;case O:return e=ti(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:v=10;break e;case D:v=9;break e;case B:v=11;break e;case z:v=14;break e;case A:v=16,o=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ps(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Ou(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function qp(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Pu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Yp=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Yp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Wt(n)},Yp.set(e,n),n)}return{value:e,source:n,stack:Wt(n)}}var qs=[],Ys=0,Sl=null,co=0,hi=[],pi=0,Na=null,Bi=1,Fi="";function Ji(e,n){qs[Ys++]=co,qs[Ys++]=Sl,Sl=e,co=n}function Zp(e,n,a){hi[pi++]=Bi,hi[pi++]=Fi,hi[pi++]=Na,Na=e;var o=Bi;e=Fi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var f=32-Pe(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Bi=1<<32-Pe(n)+u|a<<u|o,Fi=f+e}else Bi=1<<f|a<<u|o,Fi=e}function Bu(e){e.return!==null&&(Ji(e,1),Zp(e,1,0))}function Fu(e){for(;e===Sl;)Sl=qs[--Ys],qs[Ys]=null,co=qs[--Ys],qs[Ys]=null;for(;e===Na;)Na=hi[--pi],hi[pi]=null,Fi=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null}function Kp(e,n){hi[pi++]=Bi,hi[pi++]=Fi,hi[pi++]=Na,Bi=n.id,Fi=n.overflow,Na=e}var Tn=null,qt=null,Mt=!1,Da=null,mi=!1,zu=Error(s(519));function Ua(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(di(n,e)),zu}function Qp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[bn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)_t(Lo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||pg(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Ua(e,!0)}function Jp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Tn=Tn.return}}function Zs(e){if(e!==Tn)return!1;if(!Mt)return Jp(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||id(e.type,e.memoizedProps)),a=!a),a&&qt&&Ua(e),Jp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qt=Eg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qt=Eg(e)}else n===27?(n=qt,Wa(e.type)?(e=ld,ld=null,qt=e):qt=n):qt=Tn?_i(e.stateNode.nextSibling):null;return!0}function ms(){qt=Tn=null,Mt=!1}function Iu(){var e=Da;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Da=null),e}function uo(e){Da===null?Da=[e]:Da.push(e)}var Hu=L(null),gs=null,$i=null;function La(e,n,a){xe(Hu,n._currentValue),n._currentValue=a}function ea(e){e._currentValue=Hu.current,Z(Hu)}function Gu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Vu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Gu(f.return,a,e),o||(v=null);break e}f=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Gu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ks(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;ei(u.pendingProps.value,v.value)||(e!==null?e.push(C):e=[C])}}else if(u===Me.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}u=u.return}e!==null&&Vu(n,e,a,o),n.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){gs=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return $p(gs,e)}function yl(e,n){return gs===null&&_s(e),$p(e,n)}function $p(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var Fx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},zx=r.unstable_scheduleCallback,Ix=r.unstable_NormalPriority,dn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new Fx,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&zx(Ix,function(){e.controller.abort()})}var ho=null,ku=0,Qs=0,Js=null;function Hx(e,n){if(ho===null){var a=ho=[];ku=0,Qs=Yf(),Js={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ku++,n.then(em,em),n}function em(){if(--ku===0&&ho!==null){Js!==null&&(Js.status="fulfilled");var e=ho;ho=null,Qs=0,Js=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Gx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var tm=U.S;U.S=function(e,n){z0=Ce(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hx(e,n),tm!==null&&tm(e,n)};var vs=L(null);function Xu(){var e=vs.current;return e!==null?e:Xt.pooledCache}function El(e,n){n===null?xe(vs,vs.current):xe(vs,n.pool)}function nm(){var e=Xu();return e===null?null:{parent:dn._currentValue,pool:e}}var $s=Error(s(460)),Wu=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function im(e){return e=e.status,e==="fulfilled"||e==="rejected"}function am(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rm(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rm(e),e}throw Ss=n,$s}}function xs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,$s):a}}var Ss=null;function sm(){if(Ss===null)throw Error(s(459));var e=Ss;return Ss=null,e}function rm(e){if(e===$s||e===bl)throw Error(s(483))}var er=null,po=0;function Al(e){var n=po;return po+=1,er===null&&(er=[]),am(er,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function om(e){function n(Y,j){if(e){var te=Y.deletions;te===null?(Y.deletions=[j],Y.flags|=16):te.push(j)}}function a(Y,j){if(!e)return null;for(;j!==null;)n(Y,j),j=j.sibling;return null}function o(Y){for(var j=new Map;Y!==null;)Y.key!==null?j.set(Y.key,Y):j.set(Y.index,Y),Y=Y.sibling;return j}function u(Y,j){return Y=Qi(Y,j),Y.index=0,Y.sibling=null,Y}function f(Y,j,te){return Y.index=te,e?(te=Y.alternate,te!==null?(te=te.index,te<j?(Y.flags|=67108866,j):te):(Y.flags|=67108866,j)):(Y.flags|=1048576,j)}function v(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function C(Y,j,te,ge){return j===null||j.tag!==6?(j=Ou(te,Y.mode,ge),j.return=Y,j):(j=u(j,te),j.return=Y,j)}function H(Y,j,te,ge){var Qe=te.type;return Qe===w?he(Y,j,te.props.children,ge,te.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===A&&xs(Qe)===j.type)?(j=u(j,te.props),mo(j,te),j.return=Y,j):(j=xl(te.type,te.key,te.props,null,Y.mode,ge),mo(j,te),j.return=Y,j)}function ne(Y,j,te,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=Pu(te,Y.mode,ge),j.return=Y,j):(j=u(j,te.children||[]),j.return=Y,j)}function he(Y,j,te,ge,Qe){return j===null||j.tag!==7?(j=ps(te,Y.mode,ge,Qe),j.return=Y,j):(j=u(j,te),j.return=Y,j)}function ve(Y,j,te){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ou(""+j,Y.mode,te),j.return=Y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case E:return te=xl(j.type,j.key,j.props,null,Y.mode,te),mo(te,j),te.return=Y,te;case T:return j=Pu(j,Y.mode,te),j.return=Y,j;case A:return j=xs(j),ve(Y,j,te)}if(X(j)||J(j))return j=ps(j,Y.mode,te,null),j.return=Y,j;if(typeof j.then=="function")return ve(Y,Al(j),te);if(j.$$typeof===P)return ve(Y,yl(Y,j),te);Rl(Y,j)}return null}function oe(Y,j,te,ge){var Qe=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Qe!==null?null:C(Y,j,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case E:return te.key===Qe?H(Y,j,te,ge):null;case T:return te.key===Qe?ne(Y,j,te,ge):null;case A:return te=xs(te),oe(Y,j,te,ge)}if(X(te)||J(te))return Qe!==null?null:he(Y,j,te,ge,null);if(typeof te.then=="function")return oe(Y,j,Al(te),ge);if(te.$$typeof===P)return oe(Y,j,yl(Y,te),ge);Rl(Y,te)}return null}function le(Y,j,te,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(te)||null,C(j,Y,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case E:return Y=Y.get(ge.key===null?te:ge.key)||null,H(j,Y,ge,Qe);case T:return Y=Y.get(ge.key===null?te:ge.key)||null,ne(j,Y,ge,Qe);case A:return ge=xs(ge),le(Y,j,te,ge,Qe)}if(X(ge)||J(ge))return Y=Y.get(te)||null,he(j,Y,ge,Qe,null);if(typeof ge.then=="function")return le(Y,j,te,Al(ge),Qe);if(ge.$$typeof===P)return le(Y,j,te,yl(j,ge),Qe);Rl(j,ge)}return null}function Xe(Y,j,te,ge){for(var Qe=null,At=null,qe=j,ut=j=0,xt=null;qe!==null&&ut<te.length;ut++){qe.index>ut?(xt=qe,qe=null):xt=qe.sibling;var Rt=oe(Y,qe,te[ut],ge);if(Rt===null){qe===null&&(qe=xt);break}e&&qe&&Rt.alternate===null&&n(Y,qe),j=f(Rt,j,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt,qe=xt}if(ut===te.length)return a(Y,qe),Mt&&Ji(Y,ut),Qe;if(qe===null){for(;ut<te.length;ut++)qe=ve(Y,te[ut],ge),qe!==null&&(j=f(qe,j,ut),At===null?Qe=qe:At.sibling=qe,At=qe);return Mt&&Ji(Y,ut),Qe}for(qe=o(qe);ut<te.length;ut++)xt=le(qe,Y,ut,te[ut],ge),xt!==null&&(e&&xt.alternate!==null&&qe.delete(xt.key===null?ut:xt.key),j=f(xt,j,ut),At===null?Qe=xt:At.sibling=xt,At=xt);return e&&qe.forEach(function(Qa){return n(Y,Qa)}),Mt&&Ji(Y,ut),Qe}function $e(Y,j,te,ge){if(te==null)throw Error(s(151));for(var Qe=null,At=null,qe=j,ut=j=0,xt=null,Rt=te.next();qe!==null&&!Rt.done;ut++,Rt=te.next()){qe.index>ut?(xt=qe,qe=null):xt=qe.sibling;var Qa=oe(Y,qe,Rt.value,ge);if(Qa===null){qe===null&&(qe=xt);break}e&&qe&&Qa.alternate===null&&n(Y,qe),j=f(Qa,j,ut),At===null?Qe=Qa:At.sibling=Qa,At=Qa,qe=xt}if(Rt.done)return a(Y,qe),Mt&&Ji(Y,ut),Qe;if(qe===null){for(;!Rt.done;ut++,Rt=te.next())Rt=ve(Y,Rt.value,ge),Rt!==null&&(j=f(Rt,j,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return Mt&&Ji(Y,ut),Qe}for(qe=o(qe);!Rt.done;ut++,Rt=te.next())Rt=le(qe,Y,ut,Rt.value,ge),Rt!==null&&(e&&Rt.alternate!==null&&qe.delete(Rt.key===null?ut:Rt.key),j=f(Rt,j,ut),At===null?Qe=Rt:At.sibling=Rt,At=Rt);return e&&qe.forEach(function(JS){return n(Y,JS)}),Mt&&Ji(Y,ut),Qe}function Vt(Y,j,te,ge){if(typeof te=="object"&&te!==null&&te.type===w&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case E:e:{for(var Qe=te.key;j!==null;){if(j.key===Qe){if(Qe=te.type,Qe===w){if(j.tag===7){a(Y,j.sibling),ge=u(j,te.props.children),ge.return=Y,Y=ge;break e}}else if(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===A&&xs(Qe)===j.type){a(Y,j.sibling),ge=u(j,te.props),mo(ge,te),ge.return=Y,Y=ge;break e}a(Y,j);break}else n(Y,j);j=j.sibling}te.type===w?(ge=ps(te.props.children,Y.mode,ge,te.key),ge.return=Y,Y=ge):(ge=xl(te.type,te.key,te.props,null,Y.mode,ge),mo(ge,te),ge.return=Y,Y=ge)}return v(Y);case T:e:{for(Qe=te.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){a(Y,j.sibling),ge=u(j,te.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,j);break}else n(Y,j);j=j.sibling}ge=Pu(te,Y.mode,ge),ge.return=Y,Y=ge}return v(Y);case A:return te=xs(te),Vt(Y,j,te,ge)}if(X(te))return Xe(Y,j,te,ge);if(J(te)){if(Qe=J(te),typeof Qe!="function")throw Error(s(150));return te=Qe.call(te),$e(Y,j,te,ge)}if(typeof te.then=="function")return Vt(Y,j,Al(te),ge);if(te.$$typeof===P)return Vt(Y,j,yl(Y,te),ge);Rl(Y,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,j!==null&&j.tag===6?(a(Y,j.sibling),ge=u(j,te),ge.return=Y,Y=ge):(a(Y,j),ge=Ou(te,Y.mode,ge),ge.return=Y,Y=ge),v(Y)):a(Y,j)}return function(Y,j,te,ge){try{po=0;var Qe=Vt(Y,j,te,ge);return er=null,Qe}catch(qe){if(qe===$s||qe===bl)throw qe;var At=ti(29,qe,null,Y.mode);return At.lanes=ge,At.return=Y,At}}}var Ms=om(!0),lm=om(!1),Oa=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),Xp(e,null,a),n}return _l(e,o,n,a),vl(e)}function go(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ui(e,a)}}function Zu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ku=!1;function _o(){if(Ku){var e=Js;if(e!==null)throw e}}function vo(e,n,a,o){Ku=!1;var u=e.updateQueue;Oa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,ne=H.next;H.next=null,v===null?f=ne:v.next=ne,v=H;var he=e.alternate;he!==null&&(he=he.updateQueue,C=he.lastBaseUpdate,C!==v&&(C===null?he.firstBaseUpdate=ne:C.next=ne,he.lastBaseUpdate=H))}if(f!==null){var ve=u.baseState;v=0,he=ne=H=null,C=f;do{var oe=C.lane&-536870913,le=oe!==C.lane;if(le?(vt&oe)===oe:(o&oe)===oe){oe!==0&&oe===Qs&&(Ku=!0),he!==null&&(he=he.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Xe=e,$e=C;oe=n;var Vt=a;switch($e.tag){case 1:if(Xe=$e.payload,typeof Xe=="function"){ve=Xe.call(Vt,ve,oe);break e}ve=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=$e.payload,oe=typeof Xe=="function"?Xe.call(Vt,ve,oe):Xe,oe==null)break e;ve=x({},ve,oe);break e;case 2:Oa=!0}}oe=C.callback,oe!==null&&(e.flags|=64,le&&(e.flags|=8192),le=u.callbacks,le===null?u.callbacks=[oe]:le.push(oe))}else le={lane:oe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},he===null?(ne=he=le,H=ve):he=he.next=le,v|=oe;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;le=C,C=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);he===null&&(H=ve),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),Ga|=v,e.lanes=v,e.memoizedState=ve}}function cm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function um(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cm(a[e],n)}var tr=L(null),Cl=L(0);function fm(e,n){e=ca,xe(Cl,e),xe(tr,n),ca=e|n.baseLanes}function Qu(){xe(Cl,ca),xe(tr,tr.current)}function Ju(){ca=Cl.current,Z(tr),Z(Cl)}var ni=L(null),gi=null;function Fa(e){var n=e.alternate;xe(rn,rn.current&1),xe(ni,e),gi===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(gi=e)}function $u(e){xe(rn,rn.current),xe(ni,e),gi===null&&(gi=e)}function dm(e){e.tag===22?(xe(rn,rn.current),xe(ni,e),gi===null&&(gi=e)):za()}function za(){xe(rn,rn.current),xe(ni,ni.current)}function ii(e){Z(ni),gi===e&&(gi=null),Z(rn)}var rn=L(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rd(a)||od(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,lt=null,Ht=null,hn=null,Nl=!1,nr=!1,ys=!1,Dl=0,xo=0,ir=null,Vx=0;function tn(){throw Error(s(321))}function ef(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ei(e[a],n[a]))return!1;return!0}function tf(e,n,a,o,u,f){return ta=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Zm:_f,ys=!1,f=a(o,u),ys=!1,nr&&(f=pm(n,a,o,u)),hm(e),f}function hm(e){U.H=yo;var n=Ht!==null&&Ht.next!==null;if(ta=0,hn=Ht=lt=null,Nl=!1,xo=0,ir=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Ml(e)&&(pn=!0))}function pm(e,n,a,o){lt=e;var u=0;do{if(nr&&(ir=null),xo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,hn=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Km,f=n(a,o)}while(nr);return f}function jx(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?So(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(lt.flags|=1024),n}function nf(){var e=Dl!==0;return Dl=0,e}function af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function sf(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}ta=0,hn=Ht=lt=null,nr=!1,xo=Dl=0,ir=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?lt.memoizedState=hn=e:hn=hn.next=e,hn}function on(){if(Ht===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=hn===null?lt.memoizedState:hn.next;if(n!==null)hn=n,Ht=e;else{if(e===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},hn===null?lt.memoizedState=hn=e:hn=hn.next=e}return hn}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var n=xo;return xo+=1,ir===null&&(ir=[]),e=am(ir,e,n),n=lt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Zm:_f),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===P)return An(e)}throw Error(s(438,String(e)))}function rf(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=K;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=on();return of(n,Ht,e)}function of(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=v=null,H=null,ne=n,he=!1;do{var ve=ne.lane&-536870913;if(ve!==ne.lane?(vt&ve)===ve:(ta&ve)===ve){var oe=ne.revertLane;if(oe===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ve===Qs&&(he=!0);else if((ta&oe)===oe){ne=ne.next,oe===Qs&&(he=!0);continue}else ve={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=ve,v=f):H=H.next=ve,lt.lanes|=oe,Ga|=oe;ve=ne.action,ys&&a(f,ve),f=ne.hasEagerState?ne.eagerState:a(f,ve)}else oe={lane:ve,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=oe,v=f):H=H.next=oe,lt.lanes|=ve,Ga|=ve;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?v=f:H.next=C,!ei(f,e.memoizedState)&&(pn=!0,he&&(a=Js,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function lf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);ei(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function mm(e,n,a){var o=lt,u=on(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ei((Ht||u).memoizedState,a);if(v&&(u.memoizedState=a,pn=!0),u=u.queue,ff(vm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,ar(9,{destroy:void 0},_m.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));f||(ta&127)!==0||gm(o,n,a)}return a}function gm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Ul(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _m(e,n,a,o){n.value=a,n.getSnapshot=o,xm(n)&&Sm(e)}function vm(e,n,a){return a(function(){xm(n)&&Sm(e)})}function xm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ei(e,a)}catch{return!0}}function Sm(e){var n=hs(e,2);n!==null&&qn(n,e,2)}function cf(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),ys){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function Mm(e,n,a,o){return e.baseState=a,of(e,Ht,typeof o=="function"?o:na)}function kx(e,n,a,o,u){if(Fl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,ym(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ym(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=U.T,v={};U.T=v;try{var C=a(u,o),H=U.S;H!==null&&H(v,C),Em(e,n,C)}catch(ne){uf(e,n,ne)}finally{f!==null&&v.types!==null&&(f.types=v.types),U.T=f}}else try{f=a(u,o),Em(e,n,f)}catch(ne){uf(e,n,ne)}}function Em(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bm(e,n,o)},function(o){return uf(e,n,o)}):bm(e,n,a)}function bm(e,n,a){n.status="fulfilled",n.value=a,Tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,ym(e,a)))}function uf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Tm(n),n=n.next;while(n!==o)}e.action=null}function Tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Am(e,n){return n}function Rm(e,n){if(Mt){var a=Xt.formState;if(a!==null){e:{var o=lt;if(Mt){if(qt){t:{for(var u=qt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=_i(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qt=_i(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},a.queue=o,a=Wm.bind(null,lt,o),o.dispatch=a,o=cf(!1),f=gf.bind(null,lt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=kx.bind(null,lt,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Cm(e){var n=on();return wm(n,Ht,e)}function wm(e,n,a){if(n=of(e,n,Am)[0],e=Ol(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(v){throw v===$s?bl:v}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,ar(9,{destroy:void 0},Xx.bind(null,u,a),null)),[o,f,e]}function Xx(e,n){e.action=n}function Nm(e){var n=on(),a=Ht;if(a!==null)return wm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ar(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Ul(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Dm(){return on().memoizedState}function Pl(e,n,a,o){var u=zn();lt.flags|=e,u.memoizedState=ar(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;Ht!==null&&o!==null&&ef(o,Ht.memoizedState.deps)?u.memoizedState=ar(n,f,a,o):(lt.flags|=e,u.memoizedState=ar(1|n,f,a,o))}function Um(e,n){Pl(8390656,8,e,n)}function ff(e,n){Bl(2048,8,e,n)}function Wx(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Ul(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Lm(e){var n=on().memoizedState;return Wx({ref:n,nextImpl:e}),function(){if((wt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Om(e,n){return Bl(4,2,e,n)}function Pm(e,n){return Bl(4,4,e,n)}function Bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fm(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,Bm.bind(null,n,e),a)}function df(){}function zm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Im(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=e(),ys){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function hf(e,n,a){return a===void 0||(ta&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=H0(),lt.lanes|=e,Ga|=e,a)}function Hm(e,n,a,o){return ei(a,n)?a:tr.current!==null?(e=hf(e,a,o),ei(e,n)||(pn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(vt&261930)===0?(pn=!0,e.memoizedState=a):(e=H0(),lt.lanes|=e,Ga|=e,n)}function Gm(e,n,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var v=U.T,C={};U.T=C,gf(e,!1,n,a);try{var H=u(),ne=U.S;if(ne!==null&&ne(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=Gx(H,o);Mo(e,n,he,ri(e))}else Mo(e,n,o,ri(e))}catch(ve){Mo(e,n,{then:function(){},status:"rejected",reason:ve},ri())}finally{I.p=f,v!==null&&C.types!==null&&(v.types=C.types),U.T=v}}function qx(){}function pf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Vm(e).queue;Gm(e,u,n,ee,a===null?qx:function(){return jm(e),a(o)})}function Vm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function jm(e){var n=Vm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},ri())}function mf(){return An(zo)}function km(){return on().memoizedState}function Xm(){return on().memoizedState}function Yx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();e=Pa(a);var o=Ba(n,e,a);o!==null&&(qn(o,n,a),go(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function Zx(e,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?qm(n,a):(a=Uu(e,n,a,o),a!==null&&(qn(a,e,o),Ym(a,n,o)))}function Wm(e,n,a){var o=ri();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))qm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,C=f(v,a);if(u.hasEagerState=!0,u.eagerState=C,ei(C,v))return _l(e,n,u,0),Xt===null&&gl(),!1}catch{}if(a=Uu(e,n,u,o),a!==null)return qn(a,e,o),Ym(a,n,o),!0}return!1}function gf(e,n,a,o){if(o={lane:2,revertLane:Yf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(s(479))}else n=Uu(e,a,o,2),n!==null&&qn(n,e,2)}function Fl(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function qm(e,n){nr=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ym(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ui(e,a)}}var yo={readContext:An,use:Ll,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};yo.useEffectEvent=tn;var Zm={readContext:An,use:Ll,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(ys){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(ys){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Zx.bind(null,lt,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=cf(e);var n=e.queue,a=Wm.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:df,useDeferredValue:function(e,n){var a=zn();return hf(a,e,n)},useTransition:function(){var e=cf(!1);return e=Gm.bind(null,lt,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=lt,u=zn();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(vt&127)!==0||gm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Um(vm.bind(null,o,f,e),[e]),o.flags|=2048,ar(9,{destroy:void 0},_m.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=Xt.identifierPrefix;if(Mt){var a=Fi,o=Bi;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Vx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:mf,useFormState:Rm,useActionState:Rm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:rf,useCacheRefresh:function(){return zn().memoizedState=Yx.bind(null,lt)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((wt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},_f={readContext:An,use:Ll,useCallback:zm,useContext:An,useEffect:ff,useImperativeHandle:Fm,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Im,useReducer:Ol,useRef:Dm,useState:function(){return Ol(na)},useDebugValue:df,useDeferredValue:function(e,n){var a=on();return Hm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Ol(na)[0],n=on().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:mm,useId:km,useHostTransitionStatus:mf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,n){var a=on();return Mm(a,Ht,e,n)},useMemoCache:rf,useCacheRefresh:Xm};_f.useEffectEvent=Lm;var Km={readContext:An,use:Ll,useCallback:zm,useContext:An,useEffect:ff,useImperativeHandle:Fm,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Im,useReducer:lf,useRef:Dm,useState:function(){return lf(na)},useDebugValue:df,useDeferredValue:function(e,n){var a=on();return Ht===null?hf(a,e,n):Hm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=lf(na)[0],n=on().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:mm,useId:km,useHostTransitionStatus:mf,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=on();return Ht!==null?Mm(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:Xm};Km.useEffectEvent=Lm;function vf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(qn(n,e,o),go(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ri(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(qn(n,e,o),go(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ri(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(e,o,a),n!==null&&(qn(n,e,a),go(n,e,a))}};function Qm(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function Jm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&xf.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function $m(e){ml(e)}function e0(e){console.error(e)}function t0(e){ml(e)}function zl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function n0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Sf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(e,n)},a}function i0(e){return e=Pa(e),e.tag=3,e}function a0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){n0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){n0(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Kx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=ni.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?Kl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(e,o,u)),!1}throw Error(s(435,a.tag))}return Xf(e,o,u),Kl(),!1}if(Mt)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==zu&&(e=Error(s(422),{cause:o}),uo(di(e,a)))):(o!==zu&&(n=Error(s(423),{cause:o}),uo(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Sf(e.stateNode,o,u),Zu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),No===null?No=[f]:No.push(f),nn!==4&&(nn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Sf(a.stateNode,o,e),Zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=i0(u),a0(u,e,a,o),Zu(a,u),!1}a=a.return}while(a!==null);return!1}var Mf=Error(s(461)),pn=!1;function Rn(e,n,a,o){n.child=e===null?lm(n,null,a,o):Ms(n,e.child,a,o)}function s0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var C in o)C!=="ref"&&(v[C]=o[C])}else v=o;return _s(n),o=tf(e,n,a,v,f,u),C=nf(),e!==null&&!pn?(af(e,n,u),ia(e,n,u)):(Mt&&C&&Bu(n),n.flags|=1,Rn(e,n,o,u),n.child)}function r0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,o0(e,n,f,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!wf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(v,o)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(f,o),e.ref=n.ref,e.return=n,n.child=e}function o0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(oo(f,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=f,wf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return yf(e,n,a,o,u)}function l0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return c0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,f!==null?f.cachePool:null),f!==null?fm(n,f):Qu(),dm(n);else return o=n.lanes=536870912,c0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(El(n,f.cachePool),fm(n,f),za(),n.memoizedState=null):(e!==null&&El(n,null),Qu(),za());return Rn(e,n,u,a),n.child}function Eo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function c0(e,n,a,o,u){var f=Xu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&El(n,null),Qu(),dm(n),e!==null&&Ks(e,n,o,!0),n.childLanes=u,null}function Il(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function u0(e,n,a){return Ms(n,e.child,null,a),e=Il(n,n.pendingProps),e.flags|=2,ii(n),n.memoizedState=null,e}function Qx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(o.mode==="hidden")return e=Il(n,o),n.lanes=536870912,Eo(null,e);if($u(n),(e=qt)?(e=yg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=qp(e),a.return=n,n.child=a,Tn=n,qt=null)):e=null,e===null)throw Ua(n);return n.lanes=536870912,null}return Il(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if($u(n),u)if(n.flags&256)n.flags&=-257,n=u0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Ks(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(o=Xt,o!==null&&(v=Qn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,hs(e,v),qn(o,e,v),Mf;Kl(),n=u0(e,n,a)}else e=f.treeContext,qt=_i(v.nextSibling),Tn=n,Mt=!0,Da=null,mi=!1,e!==null&&Kp(n,e),n=Il(n,o),n.flags|=4096;return n}return e=Qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function yf(e,n,a,o,u){return _s(n),a=tf(e,n,a,o,void 0,u),o=nf(),e!==null&&!pn?(af(e,n,u),ia(e,n,u)):(Mt&&o&&Bu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function f0(e,n,a,o,u,f){return _s(n),n.updateQueue=null,a=pm(n,o,a,u),hm(e),o=nf(),e!==null&&!pn?(af(e,n,f),ia(e,n,f)):(Mt&&o&&Bu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function d0(e,n,a,o,u){if(_s(n),n.stateNode===null){var f=Ws,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},qu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):Ws,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(vf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&xf.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,H=Es(a,C);f.props=H;var ne=f.context,he=a.contextType;v=Ws,typeof he=="object"&&he!==null&&(v=An(he));var ve=a.getDerivedStateFromProps;he=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ne!==v)&&Jm(n,f,o,v),Oa=!1;var oe=n.memoizedState;f.state=oe,vo(n,o,f,u),_o(),ne=n.memoizedState,C||oe!==ne||Oa?(typeof ve=="function"&&(vf(n,a,ve,o),ne=n.memoizedState),(H=Oa||Qm(n,a,H,o,oe,ne,v))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),f.props=o,f.state=ne,f.context=v,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Yu(e,n),v=n.memoizedProps,he=Es(a,v),f.props=he,ve=n.pendingProps,oe=f.context,ne=a.contextType,H=Ws,typeof ne=="object"&&ne!==null&&(H=An(ne)),C=a.getDerivedStateFromProps,(ne=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ve||oe!==H)&&Jm(n,f,o,H),Oa=!1,oe=n.memoizedState,f.state=oe,vo(n,o,f,u),_o();var le=n.memoizedState;v!==ve||oe!==le||Oa||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof C=="function"&&(vf(n,a,C,o),le=n.memoizedState),(he=Oa||Qm(n,a,he,o,oe,le,H)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=H,o=he):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Hl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ia(e,n,u),e}function h0(e,n,a,o){return ms(),n.flags|=256,Rn(e,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bf(e){return{baseLanes:e,cachePool:nm()}}function Tf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=si),e}function p0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(u?Fa(n):za(),(e=qt)?(e=yg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=qp(e),a.return=n,n.child=a,Tn=n,qt=null)):e=null,e===null)throw Ua(n);return od(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(za(),u=n.mode,C=Gl({mode:"hidden",children:C},u),o=ps(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(e,v,a),n.memoizedState=Ef,Eo(null,o)):(Fa(n),Af(n,C))}var H=e.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=Rf(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),C=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),C=ps(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=bf(a),o.childLanes=Tf(e,v,a),n.memoizedState=Ef,n=Eo(null,o));else if(Fa(n),od(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var ne=v.dgst;v=ne,o=Error(s(419)),o.stack="",o.digest=v,uo({value:o,source:null,stack:null}),n=Rf(e,n,a)}else if(pn||Ks(e,n,a,!1),v=(a&e.childLanes)!==0,pn||v){if(v=Xt,v!==null&&(o=Qn(v,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,hs(e,o),qn(v,e,o),Mf;rd(C)||Kl(),n=Rf(e,n,a)}else rd(C)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,qt=_i(C.nextSibling),Tn=n,Mt=!0,Da=null,mi=!1,e!==null&&Kp(n,e),n=Af(n,o.children),n.flags|=4096);return n}return u?(za(),C=o.fallback,u=n.mode,H=e.child,ne=H.sibling,o=Qi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ne!==null?C=Qi(ne,C):(C=ps(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Eo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=bf(a):(u=C.cachePool,u!==null?(H=dn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=nm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Tf(e,v,a),n.memoizedState=Ef,Eo(e.child,o)):(Fa(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Af(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Rf(e,n,a){return Ms(n,e.child,null,a),e=Af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function m0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Gu(e.return,n,a)}function Cf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function g0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=rn.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,xe(rn,v),Rn(e,n,o,a),o=Mt?co:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&m0(e,a,n);else if(e.tag===19)m0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Cf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Cf(n,!0,a,null,f,o);break;case"together":Cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function Jx(e,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),La(n,dn,e.memoizedState.cache),ms();break;case 27:case 5:Je(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$u(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?p0(e,n,a):(Fa(n),e=ia(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ks(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return g0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(rn,rn.current),o)break;return null;case 22:return n.lanes=0,l0(e,n,a,n.pendingProps);case 24:La(n,dn,e.memoizedState.cache)}return ia(e,n,a)}function _0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!wf(e,a)&&(n.flags&128)===0)return pn=!1,Jx(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Mt&&(n.flags&1048576)!==0&&Zp(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=xs(n.elementType),n.type=e,typeof e=="function")Lu(e)?(o=Es(e,o),n.tag=1,n=d0(null,n,e,o,a)):(n.tag=0,n=yf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===B){n.tag=11,n=s0(null,n,e,o,a);break e}else if(u===z){n.tag=14,n=r0(null,n,e,o,a);break e}}throw n=me(e)||e,Error(s(306,n,""))}}return n;case 0:return yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Es(o,n.pendingProps),d0(e,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Yu(e,n),vo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,La(n,dn,o),o!==f.cache&&Vu(n,[dn],a,!0),_o(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=h0(e,n,o,a);break e}else if(o!==u){u=di(Error(s(424)),n),uo(u),n=h0(e,n,o,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qt=_i(e.firstChild),Tn=n,Mt=!0,Da=null,mi=!0,a=lm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),o===u){n=ia(e,n,a);break e}Rn(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=Cg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,o=ic(se.current).createElement(a),o[sn]=n,o[bn]=e,Cn(o,a,e),fn(o),n.stateNode=o):n.memoizedState=Cg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Je(n),e===null&&Mt&&(o=n.stateNode=Tg(n.type,n.pendingProps,se.current),Tn=n,mi=!0,u=qt,Wa(n.type)?(ld=u,qt=_i(o.firstChild)):qt=u),Rn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((u=o=qt)&&(o=CS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Tn=n,qt=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Ua(n)),Je(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,id(u,f)?o=null:v!==null&&id(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(e,n,jx,null,null,a),zo._currentValue=u),Hl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Mt&&((e=a=qt)&&(a=wS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Tn=n,qt=null,e=!0):e=!1),e||Ua(n)),null;case 13:return p0(e,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return s0(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,_s(n),u=An(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return r0(e,n,n.type,n.pendingProps,a);case 15:return o0(e,n,n.type,n.pendingProps,a);case 19:return g0(e,n,a);case 31:return Qx(e,n,a);case 22:return l0(e,n,a,n.pendingProps);case 24:return _s(n),o=An(dn),e===null?(u=Xu(),u===null&&(u=Xt,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},qu(n),La(n,dn,u)):((e.lanes&a)!==0&&(Yu(e,n),vo(n,null,null,a),_o()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,dn,o)):(o=f.cache,La(n,dn,o),o!==u.cache&&Vu(n,[dn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function Nf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(k0())e.flags|=8192;else throw Ss=Tl,Wu}else e.flags&=-16777217}function v0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lg(n))if(k0())e.flags|=8192;else throw Ss=Tl,Wu}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?be():536870912,e.lanes|=n,lr|=n)}function bo(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Yt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function $x(e,n,a){var o=n.pendingProps;switch(Fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(dn),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zs(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Iu())),Yt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(aa(n),f!==null?(Yt(n),v0(n,f)):(Yt(n),Nf(n,u,null,o,a))):f?f!==e.memoizedState?(aa(n),Yt(n),v0(n,f)):(Yt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&aa(n),Yt(n),Nf(n,u,e,o,a)),null;case 27:if(Ze(n),a=se.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}e=ye.current,Zs(n)?Qp(n):(e=Tg(u,o,a),n.stateNode=e,aa(n))}return Yt(n),null;case 5:if(Ze(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}if(f=ye.current,Zs(n))Qp(n);else{var v=ic(se.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[sn]=n,f[bn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&aa(n)}}return Yt(n),Nf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=se.current,Zs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||pg(e.nodeValue,a)),e||Ua(n,!0)}else e=ic(e).createTextNode(o),e[sn]=n,n.stateNode=e}return Yt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Zs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Yt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Yt(n),null);case 4:return Fe(),e===null&&Jf(n.stateNode.containerInfo),Yt(n),null;case 10:return ea(n.type),Yt(n),null;case 19:if(Z(rn),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,bo(o,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Wp(a,e),a=a.sibling;return xe(rn,rn.current&1|2),Mt&&Ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Ce()>ql&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(e=wl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return Yt(n),null}else 2*Ce()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ce(),e.sibling=null,a=rn.current,xe(rn,u?a&1|2:a&1),Mt&&Ji(n,o.treeForkCount),e):(Yt(n),null);case 22:case 23:return ii(n),Ju(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Z(vs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(dn),Yt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function eS(e,n){switch(Fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ea(dn),Fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ze(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ms()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(rn),null;case 4:return Fe(),null;case 10:return ea(n.type),null;case 22:case 23:return ii(n),Ju(),e!==null&&Z(vs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ea(dn),null;case 25:return null;default:return null}}function x0(e,n){switch(Fu(n),n.tag){case 3:ea(dn),Fe();break;case 26:case 27:case 5:Ze(n);break;case 4:Fe();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Z(rn);break;case 10:ea(n.type);break;case 22:case 23:ii(n),Ju(),e!==null&&Z(vs);break;case 24:ea(dn)}}function To(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(C){Ft(n,n.return,C)}}function Ia(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var H=a,ne=C;try{ne()}catch(he){Ft(u,H,he)}}}o=o.next}while(o!==f)}}catch(he){Ft(n,n.return,he)}}function S0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{um(n,a)}catch(o){Ft(e,e.return,o)}}}function M0(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(e,n,o)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ft(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(e,n,u)}else a.current=null}function y0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(e,e.return,u)}}function Df(e,n,a){try{var o=e.stateNode;yS(o,e.type,a,n),o[bn]=n}catch(u){Ft(e,e.return,u)}}function E0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Uf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||E0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Lf(e,n,a),e=e.sibling;e!==null;)Lf(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function b0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[sn]=e,n[bn]=a}catch(f){Ft(e,e.return,f)}}var sa=!1,mn=!1,Of=!1,T0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function tS(e,n){if(e=e.containerInfo,td=uc,e=Fp(e),Au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,C=-1,H=-1,ne=0,he=0,ve=e,oe=null;t:for(;;){for(var le;ve!==a||u!==0&&ve.nodeType!==3||(C=v+u),ve!==f||o!==0&&ve.nodeType!==3||(H=v+o),ve.nodeType===3&&(v+=ve.nodeValue.length),(le=ve.firstChild)!==null;)oe=ve,ve=le;for(;;){if(ve===e)break t;if(oe===a&&++ne===u&&(C=v),oe===f&&++he===o&&(H=v),(le=ve.nextSibling)!==null)break;ve=oe,oe=ve.parentNode}ve=le}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:e,selectionRange:a},uc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xe=Es(a.type,u);e=o.getSnapshotBeforeUpdate(Xe,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($e){Ft(a,a.return,$e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)sd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function A0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),o&4&&To(5,a);break;case 1:if(oa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ft(a,a.return,v)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ft(a,a.return,v)}}o&64&&S0(a),o&512&&Ao(a,a.return);break;case 3:if(oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{um(e,n)}catch(v){Ft(a,a.return,v)}}break;case 27:n===null&&o&4&&b0(a);case 26:case 5:oa(e,a),n===null&&o&4&&y0(a),o&512&&Ao(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),o&4&&w0(e,a);break;case 13:oa(e,a),o&4&&N0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=uS.bind(null,a),NS(e,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||mn,u=sa;var f=mn;sa=o,(mn=n)&&!f?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,mn=f}break;case 30:break;default:oa(e,a)}}function R0(e){var n=e.alternate;n!==null&&(e.alternate=null,R0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&$r(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,jn=!1;function ra(e,n,a){for(a=a.child;a!==null;)C0(e,n,a),a=a.sibling}function C0(e,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:mn||zi(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||zi(a,n);var o=Jt,u=jn;Wa(a.type)&&(Jt=a.stateNode,jn=!1),ra(e,n,a),Po(a.stateNode),Jt=o,jn=u;break;case 5:mn||zi(a,n);case 6:if(o=Jt,u=jn,Jt=null,ra(e,n,a),Jt=o,jn=u,Jt!==null)if(jn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Jt!==null&&(jn?(e=Jt,Sg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gr(e)):Sg(Jt,a.stateNode));break;case 4:o=Jt,u=jn,Jt=a.stateNode.containerInfo,jn=!0,ra(e,n,a),Jt=o,jn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),mn||Ia(4,a,n),ra(e,n,a);break;case 1:mn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&M0(a,n,o)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,ra(e,n,a),mn=o;break;default:ra(e,n,a)}}function w0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gr(e)}catch(a){Ft(n,n.return,a)}}}function N0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gr(e)}catch(a){Ft(n,n.return,a)}}function nS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new T0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new T0),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=nS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=fS.bind(null,e,o);o.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,C=v;e:for(;C!==null;){switch(C.tag){case 27:if(Wa(C.type)){Jt=C.stateNode,jn=!1;break e}break;case 5:Jt=C.stateNode,jn=!1;break e;case 3:case 4:Jt=C.stateNode.containerInfo,jn=!0;break e}C=C.return}if(Jt===null)throw Error(s(160));C0(f,v,u),Jt=null,jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)D0(n,e),n=n.sibling}var Ri=null;function D0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),o&4&&(Ia(3,e,e.return),To(3,e),Ia(5,e,e.return));break;case 1:kn(n,e),Xn(e),o&512&&(mn||a===null||zi(a,a.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(kn(n,e),Xn(e),o&512&&(mn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ba]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[sn]=e,fn(f),o=f;break e;case"link":var v=Dg("link","href",u).get(o+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(f=v[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=Dg("meta","content",u).get(o+(a.content||""))){for(C=0;C<v.length;C++)if(f=v[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[sn]=e,fn(f),o=f}e.stateNode=o}else Ug(u,e.type,e.stateNode);else e.stateNode=Ng(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ug(u,e.type,e.stateNode):Ng(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Df(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),o&512&&(mn||a===null||zi(a,a.return)),a!==null&&o&4&&Df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),o&512&&(mn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{$n(u,"")}catch(Xe){Ft(e,e.return,Xe)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Df(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Of=!0);break;case 6:if(kn(n,e),Xn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xe){Ft(e,e.return,Xe)}}break;case 3:if(rc=null,u=Ri,Ri=ac(n.containerInfo),kn(n,e),Ri=u,Xn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Xe){Ft(e,e.return,Xe)}Of&&(Of=!1,U0(e));break;case 4:o=Ri,Ri=ac(e.stateNode.containerInfo),kn(n,e),Xn(e),Ri=o;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=Ce()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ne=sa,he=mn;if(sa=ne||u,mn=he||H,kn(n,e),mn=he,sa=ne,Xn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||sa||mn||bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=H.stateNode;var ve=H.memoizedProps.style,oe=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;C.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Xe){Ft(H,H.return,Xe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Xe){Ft(H,H.return,Xe)}}}else if(n.tag===18){if(a===null){H=n;try{var le=H.stateNode;u?Mg(le,!0):Mg(H.stateNode,!1)}catch(Xe){Ft(H,H.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:kn(n,e),Xn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(E0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Uf(e);jl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&($n(v,""),a.flags&=-33);var C=Uf(e);jl(e,C,v);break;case 3:case 4:var H=a.stateNode.containerInfo,ne=Uf(e);Lf(e,ne,H);break;default:throw Error(s(161))}}catch(he){Ft(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function U0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;U0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A0(e,n.alternate,n),n=n.sibling}function bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),bs(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&M0(n,n.return,a),bs(n);break;case 27:Po(n.stateNode);case 26:case 5:zi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),To(4,f);break;case 1:if(la(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Ft(o,o.return,ne)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)cm(H[u],C)}catch(ne){Ft(o,o.return,ne)}}a&&v&64&&S0(f),Ao(f,f.return);break;case 27:b0(f);case 26:case 5:la(u,f,a),a&&o===null&&v&4&&y0(f),Ao(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&v&4&&w0(u,f);break;case 13:la(u,f,a),a&&v&4&&N0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),Ao(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function Bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)L0(e,n,a,o),n=n.sibling}function L0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&To(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,C=f.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ft(n,n.return,H)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):Ro(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,sr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Pf(v,n);break;case 24:Ci(e,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ci(e,n,a,o)}}function sr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,C=a,H=o,ne=v.flags;switch(v.tag){case 0:case 11:case 15:sr(f,v,C,H,u),To(8,v);break;case 23:break;case 22:var he=v.stateNode;v.memoizedState!==null?he._visibility&2?sr(f,v,C,H,u):Ro(f,v):(he._visibility|=2,sr(f,v,C,H,u)),u&&ne&2048&&Pf(v.alternate,v);break;case 24:sr(f,v,C,H,u),u&&ne&2048&&Bf(v.alternate,v);break;default:sr(f,v,C,H,u)}n=n.sibling}}function Ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Pf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Bf(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function rr(e,n,a){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)O0(e,n,a),e=e.sibling}function O0(e,n,a){switch(e.tag){case 26:rr(e,n,a),e.flags&Co&&e.memoizedState!==null&&VS(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:rr(e,n,a);break;case 3:case 4:var o=Ri;Ri=ac(e.stateNode.containerInfo),rr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,rr(e,n,a),Co=o):rr(e,n,a));break;default:rr(e,n,a)}}function P0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function wo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,F0(o,e)}P0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)B0(e),e=e.sibling}function B0(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):wo(e);break;default:wo(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,F0(o,e)}P0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function F0(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(R0(o),o===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var iS={getCacheForType:function(e){var n=An(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(dn).controller.signal}},aS=typeof WeakMap=="function"?WeakMap:Map,wt=0,Xt=null,gt=null,vt=0,Bt=0,ai=null,Ha=!1,or=!1,Ff=!1,ca=0,nn=0,Ga=0,Ts=0,zf=0,si=0,lr=0,No=null,Wn=null,If=!1,Wl=0,z0=0,ql=1/0,Yl=null,Va=null,vn=0,ja=null,cr=null,ua=0,Hf=0,Gf=null,I0=null,Do=0,Vf=null;function ri(){return(wt&2)!==0&&vt!==0?vt&-vt:U.T!==null?Yf():Kr()}function H0(){if(si===0)if((vt&536870912)===0||Mt){var e=pt;pt<<=1,(pt&3932160)===0&&(pt=262144),si=e}else si=536870912;return e=ni.current,e!==null&&(e.flags|=32),si}function qn(e,n,a){(e===Xt&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)&&(ur(e,0),ka(e,vt,si,!1)),tt(e,a),((wt&2)===0||e!==Xt)&&(e===Xt&&((wt&2)===0&&(Ts|=a),nn===4&&ka(e,vt,si,!1)),Ii(e))}function G0(e,n,a){if((wt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ie(e,n),u=o?oS(e,n):kf(e,n,!0),f=o;do{if(u===0){or&&!o&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!sS(a)){u=kf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var C=e;u=No;var H=C.current.memoizedState.isDehydrated;if(H&&(ur(C,v).flags|=256),v=kf(C,v,!1),v!==2){if(Ff&&!H){C.errorRecoveryDisabledLanes|=f,Ts|=f,u=4;break e}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ur(e,0),ka(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,si,!Ha);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Wl+300-Ce(),10<u)){if(ka(o,n,si,!Ha),pe(o,0,!0)!==0)break e;ua=n,o.timeoutHandle=vg(V0.bind(null,o,a,Wn,Yl,If,n,si,Ts,lr,Ha,f,"Throttled",-0,0),u);break e}V0(o,a,Wn,Yl,If,n,si,Ts,lr,Ha,f,null,-0,0)}}break}while(!0);Ii(e)}function V0(e,n,a,o,u,f,v,C,H,ne,he,ve,oe,le){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},O0(n,f,ve);var Xe=(f&62914560)===f?Wl-Ce():(f&4194048)===f?z0-Ce():0;if(Xe=jS(ve,Xe),Xe!==null){ua=f,e.cancelPendingCommit=Xe(K0.bind(null,e,n,f,a,o,u,v,C,H,he,ve,null,oe,le)),ka(e,f,v,!ne);return}}K0(e,n,f,a,o,u,v,C,H)}function sS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,o){n&=~zf,n&=~Ts,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pe(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Ct(e,a,n)}function Zl(){return(wt&6)===0?(Uo(0),!1):!0}function jf(){if(gt!==null){if(Bt===0)var e=gt.return;else e=gt,$i=gs=null,sf(e),er=null,po=0,e=gt;for(;e!==null;)x0(e.alternate,e),e=e.return;gt=null}}function ur(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,TS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,jf(),Xt=e,gt=a=Qi(e.current,null),vt=n,Bt=0,ai=null,Ha=!1,or=Ie(e,n),Ff=!1,lr=si=zf=Ts=Ga=nn=0,Wn=No=null,If=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pe(o),f=1<<u;n|=e[u],o&=~f}return ca=n,gl(),a}function j0(e,n){lt=null,U.H=yo,n===$s||n===bl?(n=sm(),Bt=3):n===Wu?(n=sm(),Bt=4):Bt=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,gt===null&&(nn=1,zl(e,di(n,e.current)))}function k0(){var e=ni.current;return e===null?!0:(vt&4194048)===vt?gi===null:(vt&62914560)===vt||(vt&536870912)!==0?e===gi:!1}function X0(){var e=U.H;return U.H=yo,e===null?yo:e}function W0(){var e=U.A;return U.A=iS,e}function Kl(){nn=4,Ha||(vt&4194048)!==vt&&ni.current!==null||(or=!0),(Ga&134217727)===0&&(Ts&134217727)===0||Xt===null||ka(Xt,vt,si,!1)}function kf(e,n,a){var o=wt;wt|=2;var u=X0(),f=W0();(Xt!==e||vt!==n)&&(Yl=null,ur(e,n)),n=!1;var v=nn;e:do try{if(Bt!==0&&gt!==null){var C=gt,H=ai;switch(Bt){case 8:jf(),v=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var ne=Bt;if(Bt=0,ai=null,fr(e,C,H,ne),a&&or){v=0;break e}break;default:ne=Bt,Bt=0,ai=null,fr(e,C,H,ne)}}rS(),v=nn;break}catch(he){j0(e,he)}while(!0);return n&&e.shellSuspendCounter++,$i=gs=null,wt=o,U.H=u,U.A=f,gt===null&&(Xt=null,vt=0,gl()),v}function rS(){for(;gt!==null;)q0(gt)}function oS(e,n){var a=wt;wt|=2;var o=X0(),u=W0();Xt!==e||vt!==n?(Yl=null,ql=Ce()+500,ur(e,n)):or=Ie(e,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var f=ai;t:switch(Bt){case 1:Bt=0,ai=null,fr(e,n,f,1);break;case 2:case 9:if(im(f)){Bt=0,ai=null,Y0(n);break}n=function(){Bt!==2&&Bt!==9||Xt!==e||(Bt=7),Ii(e)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:im(f)?(Bt=0,ai=null,Y0(n)):(Bt=0,ai=null,fr(e,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var C=gt;if(v?Lg(v):C.stateNode.complete){Bt=0,ai=null;var H=C.sibling;if(H!==null)gt=H;else{var ne=C.return;ne!==null?(gt=ne,Ql(ne)):gt=null}break t}}Bt=0,ai=null,fr(e,n,f,5);break;case 6:Bt=0,ai=null,fr(e,n,f,6);break;case 8:jf(),nn=6;break e;default:throw Error(s(462))}}lS();break}catch(he){j0(e,he)}while(!0);return $i=gs=null,U.H=o,U.A=u,wt=a,gt!==null?0:(Xt=null,vt=0,gl(),nn)}function lS(){for(;gt!==null&&!ht();)q0(gt)}function q0(e){var n=_0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?Ql(e):gt=n}function Y0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=f0(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=f0(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:sf(n);default:x0(a,n),n=gt=Wp(n,ca),n=_0(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?Ql(e):gt=n}function fr(e,n,a,o){$i=gs=null,sf(n),er=null,po=0;var u=n.return;try{if(Kx(e,u,n,a,vt)){nn=1,zl(e,di(a,e.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;nn=1,zl(e,di(a,e.current)),gt=null;return}n.flags&32768?(Mt||o===1?e=!0:or||(vt&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Z0(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){Z0(n,Ha);return}e=n.return;var a=$x(n.alternate,n,ca);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);nn===0&&(nn=5)}function Z0(e,n){do{var a=eS(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);nn=6,gt=null}function K0(e,n,a,o,u,f,v,C,H){e.cancelPendingCommit=null;do Jl();while(vn!==0);if((wt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Du,en(e,a,f,v,C,H),e===Xt&&(gt=Xt=null,vt=0),cr=n,ja=e,ua=a,Hf=f,Gf=u,I0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dS(Q,function(){return tg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=I.p,I.p=2,v=wt,wt|=4;try{tS(e,n,a)}finally{wt=v,I.p=u,U.T=o}}vn=1,Q0(),J0(),$0()}}function Q0(){if(vn===1){vn=0;var e=ja,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=wt;wt|=4;try{D0(n,e);var f=nd,v=Fp(e.containerInfo),C=f.focusedElem,H=f.selectionRange;if(v!==C&&C&&C.ownerDocument&&Bp(C.ownerDocument.documentElement,C)){if(H!==null&&Au(C)){var ne=H.start,he=H.end;if(he===void 0&&(he=ne),"selectionStart"in C)C.selectionStart=ne,C.selectionEnd=Math.min(he,C.value.length);else{var ve=C.ownerDocument||document,oe=ve&&ve.defaultView||window;if(oe.getSelection){var le=oe.getSelection(),Xe=C.textContent.length,$e=Math.min(H.start,Xe),Vt=H.end===void 0?$e:Math.min(H.end,Xe);!le.extend&&$e>Vt&&(v=Vt,Vt=$e,$e=v);var Y=Pp(C,$e),j=Pp(C,Vt);if(Y&&j&&(le.rangeCount!==1||le.anchorNode!==Y.node||le.anchorOffset!==Y.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var te=ve.createRange();te.setStart(Y.node,Y.offset),le.removeAllRanges(),$e>Vt?(le.addRange(te),le.extend(j.node,j.offset)):(te.setEnd(j.node,j.offset),le.addRange(te))}}}}for(ve=[],le=C;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ve.length;C++){var ge=ve[C];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}uc=!!td,nd=td=null}finally{wt=u,I.p=o,U.T=a}}e.current=n,vn=2}}function J0(){if(vn===2){vn=0;var e=ja,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=wt;wt|=4;try{A0(e,n.alternate,n)}finally{wt=u,I.p=o,U.T=a}}vn=3}}function $0(){if(vn===4||vn===3){vn=0,It();var e=ja,n=cr,a=ua,o=I0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,cr=ja=null,eg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),Zr(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=I.p,I.p=2,U.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var C=o[v];f(C.value,{componentStack:C.stack})}}finally{U.T=n,I.p=u}}(ua&3)!==0&&Jl(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Vf?Do++:(Do=0,Vf=e):Do=0,Uo(0)}}function eg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fo(n)))}function Jl(){return Q0(),J0(),$0(),tg()}function tg(){if(vn!==5)return!1;var e=ja,n=Hf;Hf=0;var a=Zr(ua),o=U.T,u=I.p;try{I.p=32>a?32:a,U.T=null,a=Gf,Gf=null;var f=ja,v=ua;if(vn=0,cr=ja=null,ua=0,(wt&6)!==0)throw Error(s(331));var C=wt;if(wt|=4,B0(f.current),L0(f,f.current,v,a),wt=C,Uo(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{I.p=u,U.T=o,eg(e,n)}}function ng(e,n,a){n=di(a,n),n=Sf(e.stateNode,n,2),e=Ba(e,n,2),e!==null&&(tt(e,2),Ii(e))}function Ft(e,n,a){if(e.tag===3)ng(e,e,a);else for(;n!==null;){if(n.tag===3){ng(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=di(a,e),a=i0(2),o=Ba(n,a,2),o!==null&&(a0(a,o,n,e),tt(o,2),Ii(o));break}}n=n.return}}function Xf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new aS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ff=!0,u.add(a),e=cS.bind(null,e,n,a),n.then(e,e))}function cS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(vt&a)===a&&(nn===4||nn===3&&(vt&62914560)===vt&&300>Ce()-Wl?(wt&2)===0&&ur(e,0):zf|=a,lr===vt&&(lr=0)),Ii(e)}function ig(e,n){n===0&&(n=be()),e=hs(e,n),e!==null&&(tt(e,n),Ii(e))}function uS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ig(e,a)}function fS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ig(e,a)}function dS(e,n){return W(e,n)}var $l=null,dr=null,Wf=!1,ec=!1,qf=!1,Xa=0;function Ii(e){e!==dr&&e.next===null&&(dr===null?$l=dr=e:dr=dr.next=e),ec=!0,Wf||(Wf=!0,pS())}function Uo(e,n){if(!qf&&ec){qf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=u&~(v&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,og(o,f))}else f=vt,f=pe(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ie(o,f)||(a=!0,og(o,f));o=o.next}while(a);qf=!1}}function hS(){ag()}function ag(){ec=Wf=!1;var e=0;Xa!==0&&bS()&&(e=Xa);for(var n=Ce(),a=null,o=$l;o!==null;){var u=o.next,f=sg(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(dr=a)):(a=o,(e!==0||(f&3)!==0)&&(ec=!0)),o=u}vn!==0&&vn!==5||Uo(e),Xa!==0&&(Xa=0)}function sg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Pe(f),C=1<<v,H=u[v];H===-1?((C&a)===0||(C&o)!==0)&&(u[v]=Ue(C,n)):H<=n&&(e.expiredLanes|=C),f&=~C}if(n=Xt,a=vt,a=pe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&$t(o),Zr(a)){case 2:case 8:a=b;break;case 32:a=Q;break;case 268435456:a=Te;break;default:a=Q}return o=rg.bind(null,e),a=W(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&$t(o),e.callbackPriority=2,e.callbackNode=null,2}function rg(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=vt;return o=pe(e,e===Xt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(G0(e,o,n),sg(e,Ce()),e.callbackNode!=null&&e.callbackNode===a?rg.bind(null,e):null)}function og(e,n){if(Jl())return null;G0(e,n,!0)}function pS(){AS(function(){(wt&6)!==0?W(N,hS):ag()})}function Yf(){if(Xa===0){var e=Qs;e===0&&(e=it,it<<=1,(it&261888)===0&&(it=256)),Xa=e}return Xa}function lg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cs(""+e)}function cg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function mS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=lg((u[bn]||null).action),v=o.submitter;v&&(n=(n=v[bn]||null)?lg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var C=new dl("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var H=v?cg(u,v):new FormData(u);pf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(C.preventDefault(),H=v?cg(u,v):new FormData(u),pf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Zf=0;Zf<Nu.length;Zf++){var Kf=Nu[Zf],gS=Kf.toLowerCase(),_S=Kf[0].toUpperCase()+Kf.slice(1);Ai(gS,"on"+_S)}Ai(Hp,"onAnimationEnd"),Ai(Gp,"onAnimationIteration"),Ai(Vp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Lx,"onTransitionRun"),Ai(Ox,"onTransitionStart"),Ai(Px,"onTransitionCancel"),Ai(jp,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function ug(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var C=o[v],H=C.instance,ne=C.currentTarget;if(C=C.listener,H!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ne;try{f(u)}catch(he){ml(he)}u.currentTarget=null,f=H}else for(v=0;v<o.length;v++){if(C=o[v],H=C.instance,ne=C.currentTarget,C=C.listener,H!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ne;try{f(u)}catch(he){ml(he)}u.currentTarget=null,f=H}}}}function _t(e,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var o=e+"__bubble";a.has(o)||(fg(n,e,2,!1),a.add(o))}function Qf(e,n,a){var o=0;n&&(o|=4),fg(a,e,o,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[tc]){e[tc]=!0,ll.forEach(function(a){a!=="selectionchange"&&(vS.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tc]||(n[tc]=!0,Qf("selectionchange",!1,n))}}function fg(e,n,a,o){switch(Hg(n)){case 2:var u=WS;break;case 8:u=qS;break;default:u=hd}a=u.bind(null,n,a,e),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function $f(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var C=o.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=o.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=Ta(C),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){o=f=v;continue e}C=C.parentNode}}o=o.return}gp(function(){var ne=f,he=mu(a),ve=[];e:{var oe=kp.get(e);if(oe!==void 0){var le=dl,Xe=e;switch(e){case"keypress":if(ul(a)===0)break e;case"keydown":case"keyup":le=fx;break;case"focusin":Xe="focus",le=Mu;break;case"focusout":Xe="blur",le=Mu;break;case"beforeblur":case"afterblur":le=Mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=px;break;case Hp:case Gp:case Vp:le=nx;break;case jp:le=gx;break;case"scroll":case"scrollend":le=Qv;break;case"wheel":le=vx;break;case"copy":case"cut":case"paste":le=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Mp;break;case"toggle":case"beforetoggle":le=Sx}var $e=(n&4)!==0,Vt=!$e&&(e==="scroll"||e==="scrollend"),Y=$e?oe!==null?oe+"Capture":null:oe;$e=[];for(var j=ne,te;j!==null;){var ge=j;if(te=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||te===null||Y===null||(ge=eo(j,Y),ge!=null&&$e.push(Oo(j,ge,te))),Vt)break;j=j.return}0<$e.length&&(oe=new le(oe,Xe,null,a,he),ve.push({event:oe,listeners:$e}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",oe&&a!==pu&&(Xe=a.relatedTarget||a.fromElement)&&(Ta(Xe)||Xe[Yi]))break e;if((le||oe)&&(oe=he.window===he?he:(oe=he.ownerDocument)?oe.defaultView||oe.parentWindow:window,le?(Xe=a.relatedTarget||a.toElement,le=ne,Xe=Xe?Ta(Xe):null,Xe!==null&&(Vt=c(Xe),$e=Xe.tag,Xe!==Vt||$e!==5&&$e!==27&&$e!==6)&&(Xe=null)):(le=null,Xe=ne),le!==Xe)){if($e=xp,ge="onMouseLeave",Y="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&($e=Mp,ge="onPointerLeave",Y="onPointerEnter",j="pointer"),Vt=le==null?oe:ls(le),te=Xe==null?oe:ls(Xe),oe=new $e(ge,j+"leave",le,a,he),oe.target=Vt,oe.relatedTarget=te,ge=null,Ta(he)===ne&&($e=new $e(Y,j+"enter",Xe,a,he),$e.target=te,$e.relatedTarget=Vt,ge=$e),Vt=ge,le&&Xe)t:{for($e=xS,Y=le,j=Xe,te=0,ge=Y;ge;ge=$e(ge))te++;ge=0;for(var Qe=j;Qe;Qe=$e(Qe))ge++;for(;0<te-ge;)Y=$e(Y),te--;for(;0<ge-te;)j=$e(j),ge--;for(;te--;){if(Y===j||j!==null&&Y===j.alternate){$e=Y;break t}Y=$e(Y),j=$e(j)}$e=null}else $e=null;le!==null&&dg(ve,oe,le,$e,!1),Xe!==null&&Vt!==null&&dg(ve,Vt,Xe,$e,!0)}}e:{if(oe=ne?ls(ne):window,le=oe.nodeName&&oe.nodeName.toLowerCase(),le==="select"||le==="input"&&oe.type==="file")var At=wp;else if(Rp(oe))if(Np)At=Nx;else{At=Cx;var qe=Rx}else le=oe.nodeName,!le||le.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ne&&Dt(ne.elementType)&&(At=wp):At=wx;if(At&&(At=At(e,ne))){Cp(ve,At,a,he);break e}qe&&qe(e,oe,ne),e==="focusout"&&ne&&oe.type==="number"&&ne.memoizedProps.value!=null&&mt(oe,"number",oe.value)}switch(qe=ne?ls(ne):window,e){case"focusin":(Rp(qe)||qe.contentEditable==="true")&&(js=qe,Ru=ne,lo=null);break;case"focusout":lo=Ru=js=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,zp(ve,a,he);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":zp(ve,a,he)}var ut;if(Eu)e:{switch(e){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Vs?Tp(e,a)&&(xt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(yp&&a.locale!=="ko"&&(Vs||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Vs&&(ut=_p()):(wa=he,vu="value"in wa?wa.value:wa.textContent,Vs=!0)),qe=nc(ne,xt),0<qe.length&&(xt=new Sp(xt,e,null,a,he),ve.push({event:xt,listeners:qe}),ut?xt.data=ut:(ut=Ap(a),ut!==null&&(xt.data=ut)))),(ut=yx?Ex(e,a):bx(e,a))&&(xt=nc(ne,"onBeforeInput"),0<xt.length&&(qe=new Sp("onBeforeInput","beforeinput",null,a,he),ve.push({event:qe,listeners:xt}),qe.data=ut)),mS(ve,e,ne,a,he)}ug(ve,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(e,a),u!=null&&o.unshift(Oo(e,u,f)),u=eo(e,n),u!=null&&o.push(Oo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function xS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dg(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var C=a,H=C.alternate,ne=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||ne===null||(H=ne,u?(ne=eo(a,f),ne!=null&&v.unshift(Oo(a,ne,H))):u||(ne=eo(a,f),ne!=null&&v.push(Oo(a,ne,H)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var SS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function hg(e){return(typeof e=="string"?e:""+e).replace(SS,`
`).replace(MS,"")}function pg(e,n){return n=hg(n),hg(e)===n}function Gt(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||$n(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&$n(e,""+o);break;case"className":ke(e,"class",o);break;case"tabIndex":ke(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,a,o);break;case"style":Ti(e,o,f);break;case"data":if(n!=="object"){ke(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",u.name,u,null),Gt(e,n,"formEncType",u.formEncType,u,null),Gt(e,n,"formMethod",u.formMethod,u,null),Gt(e,n,"formTarget",u.formTarget,u,null)):(Gt(e,n,"encType",u.encType,u,null),Gt(e,n,"method",u.method,u,null),Gt(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"onScroll":o!=null&&_t("scroll",e);break;case"onScrollEnd":o!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=cs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_t("beforetoggle",e),_t("toggle",e),Be(e,"popover",o);break;case"xlinkActuate":je(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pi.get(a)||a,Be(e,a,o))}}function ed(e,n,a,o,u,f){switch(a){case"style":Ti(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?$n(e,o):(typeof o=="number"||typeof o=="bigint")&&$n(e,""+o);break;case"onScroll":o!=null&&_t("scroll",e);break;case"onScrollEnd":o!=null&&_t("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Be(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,f,v,a,null)}}u&&Gt(e,n,"srcSet",a.srcSet,a,null),o&&Gt(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var C=f=v=u=null,H=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":v=he;break;case"checked":H=he;break;case"defaultChecked":ne=he;break;case"value":f=he;break;case"defaultValue":C=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:Gt(e,n,o,he,a,null)}}Dn(e,f,C,H,ne,v,u,!1);return;case"select":_t("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":v=C;break;case"multiple":o=C;default:Gt(e,n,u,C,a,null)}n=f,a=v,e.multiple=!!o,n!=null?_n(e,!!o,n,!1):a!=null&&_n(e,!!o,a,!0);return;case"textarea":_t("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Gt(e,n,v,C,a,null)}bi(e,o,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Gt(e,n,H,o,a,null));return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)_t(Lo[o],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Gt(e,n,ne,o,a,null)}return;default:if(Dt(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&ed(e,n,he,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Gt(e,n,C,o,a,null))}function yS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,C=null,H=null,ne=null,he=null;for(le in a){var ve=a[le];if(a.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=ve;default:o.hasOwnProperty(le)||Gt(e,n,le,null,o,ve)}}for(var oe in o){var le=o[oe];if(ve=a[oe],o.hasOwnProperty(oe)&&(le!=null||ve!=null))switch(oe){case"type":f=le;break;case"name":u=le;break;case"checked":ne=le;break;case"defaultChecked":he=le;break;case"value":v=le;break;case"defaultValue":C=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ve&&Gt(e,n,oe,le,o,ve)}}Ge(e,v,C,H,ne,he,f,u);return;case"select":le=v=C=oe=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(f)||Gt(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":oe=f;break;case"defaultValue":C=f;break;case"multiple":v=f;default:f!==H&&Gt(e,n,u,f,o,H)}n=C,a=v,o=le,oe!=null?_n(e,!!a,oe,!1):!!o!=!!a&&(n!=null?_n(e,!!a,n,!0):_n(e,!!a,a?[]:"",!1));return;case"textarea":le=oe=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Gt(e,n,C,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":oe=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Gt(e,n,v,u,o,f)}Jn(e,oe,le);return;case"option":for(var Xe in a)oe=a[Xe],a.hasOwnProperty(Xe)&&oe!=null&&!o.hasOwnProperty(Xe)&&(Xe==="selected"?e.selected=!1:Gt(e,n,Xe,null,o,oe));for(H in o)oe=o[H],le=a[H],o.hasOwnProperty(H)&&oe!==le&&(oe!=null||le!=null)&&(H==="selected"?e.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":Gt(e,n,H,oe,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)oe=a[$e],a.hasOwnProperty($e)&&oe!=null&&!o.hasOwnProperty($e)&&Gt(e,n,$e,null,o,oe);for(ne in o)if(oe=o[ne],le=a[ne],o.hasOwnProperty(ne)&&oe!==le&&(oe!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Gt(e,n,ne,oe,o,le)}return;default:if(Dt(n)){for(var Vt in a)oe=a[Vt],a.hasOwnProperty(Vt)&&oe!==void 0&&!o.hasOwnProperty(Vt)&&ed(e,n,Vt,void 0,o,oe);for(he in o)oe=o[he],le=a[he],!o.hasOwnProperty(he)||oe===le||oe===void 0&&le===void 0||ed(e,n,he,oe,o,le);return}}for(var Y in a)oe=a[Y],a.hasOwnProperty(Y)&&oe!=null&&!o.hasOwnProperty(Y)&&Gt(e,n,Y,null,o,oe);for(ve in o)oe=o[ve],le=a[ve],!o.hasOwnProperty(ve)||oe===le||oe==null&&le==null||Gt(e,n,ve,oe,o,le)}function mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ES(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,C=u.duration;if(f&&C&&mg(v)){for(v=0,C=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ne=H.startTime;if(ne>C)break;var he=H.transferSize,ve=H.initiatorType;he&&mg(ve)&&(H=H.responseEnd,v+=he*(H<C?1:(C-ne)/(H-ne)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var td=null,nd=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _g(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function id(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function bS(){var e=window.event;return e&&e.type==="popstate"?e===ad?!1:(ad=e,!0):(ad=null,!1)}var vg=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(e){return xg.resolve(null).then(e).catch(RS)}:vg;function RS(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function Sg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),gr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var v=f.nextSibling,C=f.nodeName;f[ba]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Po(e.ownerDocument.body);a=u}while(a);gr(n)}function Mg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function sd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),$r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function CS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ba])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function wS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function yg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function rd(e){return e.data==="$?"||e.data==="$~"}function od(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function NS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ld=null;function Eg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function bg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Tg(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$r(e)}var vi=new Map,Ag=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=I.d;I.d={f:DS,r:US,D:LS,C:OS,L:PS,m:BS,X:zS,S:FS,M:IS};function DS(){var e=fa.f(),n=Zl();return e||n}function US(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?jm(n):fa.r(e)}var hr=typeof document>"u"?null:document;function Rg(e,n,a){var o=hr;if(o&&typeof n=="string"&&n){var u=Ot(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ag.has(u)||(Ag.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),fn(n),o.head.appendChild(n)))}}function LS(e){fa.D(e),Rg("dns-prefetch",e,null)}function OS(e,n){fa.C(e,n),Rg("preconnect",e,n)}function PS(e,n,a){fa.L(e,n,a);var o=hr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ot(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ot(a.imageSizes)+'"]')):u+='[href="'+Ot(e)+'"]';var f=u;switch(n){case"style":f=pr(e);break;case"script":f=mr(e)}vi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(f))||n==="script"&&o.querySelector(Fo(f))||(n=o.createElement("link"),Cn(n,"link",e),fn(n),o.head.appendChild(n)))}}function BS(e,n){fa.m(e,n);var a=hr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ot(o)+'"][href="'+Ot(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(e)}if(!vi.has(f)&&(e=x({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(f)))return}o=a.createElement("link"),Cn(o,"link",e),fn(o),a.head.appendChild(o)}}}function FS(e,n,a){fa.S(e,n,a);var o=hr;if(o&&e){var u=Ra(o).hoistableStyles,f=pr(e);n=n||"default";var v=u.get(f);if(!v){var C={loading:0,preload:null};if(v=o.querySelector(Bo(f)))C.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&cd(e,a);var H=v=o.createElement("link");fn(H),Cn(H,"link",e),H._p=new Promise(function(ne,he){H.onload=ne,H.onerror=he}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,sc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(f,v)}}}function zS(e,n){fa.X(e,n);var a=hr;if(a&&e){var o=Ra(a).hoistableScripts,u=mr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=x({src:e,async:!0},n),(n=vi.get(u))&&ud(e,n),f=a.createElement("script"),fn(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function IS(e,n){fa.M(e,n);var a=hr;if(a&&e){var o=Ra(a).hoistableScripts,u=mr(e),f=o.get(u);f||(f=a.querySelector(Fo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&ud(e,n),f=a.createElement("script"),fn(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Cg(e,n,a,o){var u=(u=se.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=pr(a.href);var f=Ra(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Bo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||HS(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function pr(e){return'href="'+Ot(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function wg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function HS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),fn(n),e.head.appendChild(n))}function mr(e){return'[src="'+Ot(e)+'"]'}function Fo(e){return"script[async]"+e}function Ng(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(o)return n.instance=o,fn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),fn(o),Cn(o,"style",u),sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=pr(a.href);var f=e.querySelector(Bo(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;o=wg(a),(u=vi.get(u))&&cd(o,u),f=(e.ownerDocument||e).createElement("link"),fn(f);var v=f;return v._p=new Promise(function(C,H){v.onload=C,v.onerror=H}),Cn(f,"link",o),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=mr(a.src),(u=e.querySelector(Fo(f)))?(n.instance=u,fn(u),u):(o=a,(u=vi.get(f))&&(o=x({},a),ud(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),fn(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,e));return n.instance}function sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var C=o[v];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function cd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ud(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function Dg(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ba]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var C=o.get(v);C?C.push(f):o.set(v,[f])}}return o}function Ug(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function GS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function VS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(o.href),f=n.querySelector(Bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,fn(f);return}f=n.ownerDocument||n,o=wg(o),(u=vi.get(u))&&cd(o,u),f=f.createElement("link"),fn(f);var v=f;v._p=new Promise(function(C,H){v.onload=C,v.onerror=H}),Cn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var fd=0;function jS(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&fd===0&&(fd=62500*ES());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>fd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(kS,e),lc=null,oc.call(e))}function kS(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var zo={$$typeof:P,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function XS(e,n,a,o,u,f,v,C,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Og(e,n,a,o,u,f,v,C,H,ne,he,ve){return e=new XS(e,n,a,v,H,ne,he,ve,C),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},qu(f),e}function Pg(e){return e?(e=Ws,e):Ws}function Bg(e,n,a,o,u,f){u=Pg(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(e,o,n),a!==null&&(qn(a,e,n),go(a,e,n))}function Fg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function dd(e,n){Fg(e,n),(e=e.alternate)&&Fg(e,n)}function zg(e){if(e.tag===13||e.tag===31){var n=hs(e,67108864);n!==null&&qn(n,e,67108864),dd(e,67108864)}}function Ig(e){if(e.tag===13||e.tag===31){var n=ri();n=os(n);var a=hs(e,n);a!==null&&qn(a,e,n),dd(e,n)}}var uc=!0;function WS(e,n,a,o){var u=U.T;U.T=null;var f=I.p;try{I.p=2,hd(e,n,a,o)}finally{I.p=f,U.T=u}}function qS(e,n,a,o){var u=U.T;U.T=null;var f=I.p;try{I.p=8,hd(e,n,a,o)}finally{I.p=f,U.T=u}}function hd(e,n,a,o){if(uc){var u=pd(o);if(u===null)$f(e,n,o,fc,a),Gg(e,o);else if(ZS(u,e,n,a,o))o.stopPropagation();else if(Gg(e,o),n&4&&-1<YS.indexOf(e)){for(;u!==null;){var f=Aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ae(f.pendingLanes);if(v!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var H=1<<31-Pe(v);C.entanglements[1]|=H,v&=~H}Ii(f),(wt&6)===0&&(ql=Ce()+500,Uo(0))}}break;case 31:case 13:C=hs(f,2),C!==null&&qn(C,f,2),Zl(),dd(f,2)}if(f=pd(o),f===null&&$f(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else $f(e,n,o,null,a)}}function pd(e){return e=mu(e),md(e)}var fc=null;function md(e){if(fc=null,e=Ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function Hg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zt()){case N:return 2;case b:return 8;case Q:case _e:return 32;case Te:return 268435456;default:return 32}default:return 32}}var gd=!1,qa=null,Ya=null,Za=null,Io=new Map,Ho=new Map,Ka=[],YS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gg(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&zg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ZS(e,n,a,o,u){switch(n){case"focusin":return qa=Go(qa,e,n,a,o,u),!0;case"dragenter":return Ya=Go(Ya,e,n,a,o,u),!0;case"mouseover":return Za=Go(Za,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Io.set(f,Go(Io.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Go(Ho.get(f)||null,e,n,a,o,u)),!0}return!1}function Vg(e){var n=Ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Qr(e.priority,function(){Ig(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Qr(e.priority,function(){Ig(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=Aa(a),n!==null&&zg(n),e.blockedOn=a,!1;n.shift()}return!0}function jg(e,n,a){dc(e)&&a.delete(n)}function KS(){gd=!1,qa!==null&&dc(qa)&&(qa=null),Ya!==null&&dc(Ya)&&(Ya=null),Za!==null&&dc(Za)&&(Za=null),Io.forEach(jg),Ho.forEach(jg)}function hc(e,n){e.blockedOn===n&&(e.blockedOn=null,gd||(gd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,KS)))}var pc=null;function kg(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(md(o||a)===null)continue;break}var f=Aa(a);f!==null&&(e.splice(n,3),n-=3,pf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function gr(e){function n(H){return hc(H,e)}qa!==null&&hc(qa,e),Ya!==null&&hc(Ya,e),Za!==null&&hc(Za,e),Io.forEach(n),Ho.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Vg(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[bn]||null;if(typeof f=="function")v||kg(a);else if(v){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[bn]||null)C=v.formAction;else if(md(u)!==null)continue}else C=v.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),kg(a)}}}function Xg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(e){this._internalRoot=e}mc.prototype.render=_d.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();Bg(a,o,e,n,null,null)},mc.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bg(e.current,2,null,e,null,null),Zl(),n[Yi]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&Vg(e)}};var Wg=t.version;if(Wg!=="19.2.5")throw Error(s(527,Wg,"19.2.5"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var QS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ue=gc.inject(QS),de=gc}catch{}}return jo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=$m,f=e0,v=t0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Og(e,1,!1,null,null,a,o,null,u,f,v,Xg),e[Yi]=n.current,Jf(e),new _d(n)},jo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=$m,v=e0,C=t0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Og(e,1,!0,n,a??null,o,u,H,f,v,C,Xg),n.context=Pg(null),a=n.current,o=ri(),o=os(o),u=Pa(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,tt(n,a),Ii(n),e[Yi]=n.current,Jf(e),new mc(n)},jo.version="19.2.5",jo}var n_;function oM(){if(n_)return Sd.exports;n_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Sd.exports=rM(),Sd.exports}var lM=oM();const Kh="184",cM=0,i_=1,uM=2,Yc=1,fM=2,Qo=3,rs=0,Zn=1,_a=2,xa=0,Br=1,eu=2,a_=3,s_=4,dM=5,Ds=100,hM=101,pM=102,mM=103,gM=104,_M=200,vM=201,xM=202,SM=203,ah=204,sh=205,MM=206,yM=207,EM=208,bM=209,TM=210,AM=211,RM=212,CM=213,wM=214,rh=0,oh=1,lh=2,Ir=3,ch=4,uh=5,fh=6,dh=7,pv=0,NM=1,DM=2,Xi=0,mv=1,gv=2,_v=3,vv=4,xv=5,Sv=6,Mv=7,yv=300,Ps=301,Hr=302,bd=303,Td=304,uu=306,hh=1e3,va=1001,ph=1002,wn=1003,UM=1004,_c=1005,Bn=1006,Ad=1007,Ls=1008,Mi=1009,Ev=1010,bv=1011,nl=1012,Qh=1013,qi=1014,ji=1015,Ma=1016,Jh=1017,$h=1018,il=1020,Tv=35902,Av=35899,Rv=1021,Cv=1022,Ui=1023,ya=1026,Os=1027,wv=1028,ep=1029,Bs=1030,tp=1031,np=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,mh=35840,gh=35841,_h=35842,vh=35843,xh=36196,Sh=37492,Mh=37496,yh=37488,Eh=37489,tu=37490,bh=37491,Th=37808,Ah=37809,Rh=37810,Ch=37811,wh=37812,Nh=37813,Dh=37814,Uh=37815,Lh=37816,Oh=37817,Ph=37818,Bh=37819,Fh=37820,zh=37821,Ih=36492,Hh=36494,Gh=36495,Vh=36283,jh=36284,nu=36285,kh=36286,LM=3200,r_=0,OM=1,as="",Yn="srgb",iu="srgb-linear",au="linear",zt="srgb",_r=7680,o_=519,PM=512,BM=513,FM=514,ip=515,zM=516,IM=517,ap=518,HM=519,l_=35044,c_="300 es",ki=2e3,su=2001;function GM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function VM(){const r=ru("canvas");return r.style.display="block",r}const u_={};function f_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Nv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function et(...r){r=Nv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Et(...r){r=Nv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Xh(...r){const t=r.join(" ");t in u_||(u_[t]=!0,et(...r))}function jM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const kM={[rh]:oh,[lh]:fh,[ch]:dh,[Ir]:uh,[oh]:rh,[fh]:lh,[dh]:ch,[uh]:Ir};class zs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let d_=1234567;const Fr=Math.PI/180,al=180/Math.PI;function jr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function St(r,t,i){return Math.max(t,Math.min(i,r))}function sp(r,t){return(r%t+t)%t}function XM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function WM(r,t,i){return r!==t?(i-r)/(t-r):0}function tl(r,t,i){return(1-i)*r+i*t}function qM(r,t,i,s){return tl(r,t,1-Math.exp(-i*s))}function YM(r,t=1){return t-Math.abs(sp(r,t*2)-t)}function ZM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function KM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function QM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function JM(r,t){return r+Math.random()*(t-r)}function $M(r){return r*(.5-Math.random())}function ey(r){r!==void 0&&(d_=r);let t=d_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ty(r){return r*Fr}function ny(r){return r*al}function iy(r){return(r&r-1)===0&&r!==0}function ay(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ry(r,t,i,s,l){const c=Math.cos,d=Math.sin,p=c(i/2),g=d(i/2),h=c((t+s)/2),S=d((t+s)/2),x=c((t-s)/2),_=d((t-s)/2),E=c((s-t)/2),T=d((s-t)/2);switch(l){case"XYX":r.set(p*S,g*x,g*_,p*h);break;case"YZY":r.set(g*_,p*S,g*x,p*h);break;case"ZXZ":r.set(g*x,g*_,p*S,p*h);break;case"XZX":r.set(p*S,g*T,g*E,p*h);break;case"YXY":r.set(g*E,p*S,g*T,p*h);break;case"ZYZ":r.set(g*T,g*E,p*S,p*h);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const h_={DEG2RAD:Fr,RAD2DEG:al,generateUUID:jr,clamp:St,euclideanModulo:sp,mapLinear:XM,inverseLerp:WM,lerp:tl,damp:qM,pingpong:YM,smoothstep:ZM,smootherstep:KM,randInt:QM,randFloat:JM,randFloatSpread:$M,seededRandom:ey,degToRad:ty,radToDeg:ny,isPowerOfTwo:iy,ceilPowerOfTwo:ay,floorPowerOfTwo:sy,setQuaternionFromProperEuler:ry,normalize:In,denormalize:Lr},up=class up{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};up.prototype.isVector2=!0;let jt=up;class kr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let g=s[l+0],h=s[l+1],S=s[l+2],x=s[l+3],_=c[d+0],E=c[d+1],T=c[d+2],w=c[d+3];if(x!==w||g!==_||h!==E||S!==T){let y=g*_+h*E+S*T+x*w;y<0&&(_=-_,E=-E,T=-T,w=-w,y=-y);let M=1-p;if(y<.9995){const D=Math.acos(y),P=Math.sin(D);M=Math.sin(M*D)/P,p=Math.sin(p*D)/P,g=g*M+_*p,h=h*M+E*p,S=S*M+T*p,x=x*M+w*p}else{g=g*M+_*p,h=h*M+E*p,S=S*M+T*p,x=x*M+w*p;const D=1/Math.sqrt(g*g+h*h+S*S+x*x);g*=D,h*=D,S*=D,x*=D}}t[i]=g,t[i+1]=h,t[i+2]=S,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],g=s[l+1],h=s[l+2],S=s[l+3],x=c[d],_=c[d+1],E=c[d+2],T=c[d+3];return t[i]=p*T+S*x+g*E-h*_,t[i+1]=g*T+S*_+h*x-p*E,t[i+2]=h*T+S*E+p*_-g*x,t[i+3]=S*T-p*x-g*_-h*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,g=Math.sin,h=p(s/2),S=p(l/2),x=p(c/2),_=g(s/2),E=g(l/2),T=g(c/2);switch(d){case"XYZ":this._x=_*S*x+h*E*T,this._y=h*E*x-_*S*T,this._z=h*S*T+_*E*x,this._w=h*S*x-_*E*T;break;case"YXZ":this._x=_*S*x+h*E*T,this._y=h*E*x-_*S*T,this._z=h*S*T-_*E*x,this._w=h*S*x+_*E*T;break;case"ZXY":this._x=_*S*x-h*E*T,this._y=h*E*x+_*S*T,this._z=h*S*T+_*E*x,this._w=h*S*x-_*E*T;break;case"ZYX":this._x=_*S*x-h*E*T,this._y=h*E*x+_*S*T,this._z=h*S*T-_*E*x,this._w=h*S*x+_*E*T;break;case"YZX":this._x=_*S*x+h*E*T,this._y=h*E*x+_*S*T,this._z=h*S*T-_*E*x,this._w=h*S*x-_*E*T;break;case"XZY":this._x=_*S*x-h*E*T,this._y=h*E*x-_*S*T,this._z=h*S*T+_*E*x,this._w=h*S*x+_*E*T;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],g=i[9],h=i[2],S=i[6],x=i[10],_=s+p+x;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(S-g)*E,this._y=(c-h)*E,this._z=(d-l)*E}else if(s>p&&s>x){const E=2*Math.sqrt(1+s-p-x);this._w=(S-g)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+h)/E}else if(p>x){const E=2*Math.sqrt(1+p-s-x);this._w=(c-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(g+S)/E}else{const E=2*Math.sqrt(1+x-s-p);this._w=(d-l)/E,this._x=(c+h)/E,this._y=(g+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,g=i._y,h=i._z,S=i._w;return this._x=s*S+d*p+l*h-c*g,this._y=l*S+d*g+c*p-s*h,this._z=c*S+d*h+s*g-l*p,this._w=d*S-s*p-l*g-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let g=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);g=Math.sin(g*h)/S,i=Math.sin(i*h)/S,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fp=class fp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(p_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(p_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,g=t.w,h=2*(d*l-p*s),S=2*(p*i-c*l),x=2*(c*s-d*i);return this.x=i+g*h+d*x-p*S,this.y=s+g*S+p*h-c*x,this.z=l+g*x+c*S-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,g=i.z;return this.x=l*g-c*p,this.y=c*d-s*g,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Rd.copy(this).projectOnVector(t),this.sub(Rd)}reflect(t){return this.sub(Rd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(St(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fp.prototype.isVector3=!0;let $=fp;const Rd=new $,p_=new kr,dp=class dp{constructor(t,i,s,l,c,d,p,g,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,g,h)}set(t,i,s,l,c,d,p,g,h){const S=this.elements;return S[0]=t,S[1]=l,S[2]=p,S[3]=i,S[4]=c,S[5]=g,S[6]=s,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],g=s[6],h=s[1],S=s[4],x=s[7],_=s[2],E=s[5],T=s[8],w=l[0],y=l[3],M=l[6],D=l[1],P=l[4],B=l[7],k=l[2],O=l[5],z=l[8];return c[0]=d*w+p*D+g*k,c[3]=d*y+p*P+g*O,c[6]=d*M+p*B+g*z,c[1]=h*w+S*D+x*k,c[4]=h*y+S*P+x*O,c[7]=h*M+S*B+x*z,c[2]=_*w+E*D+T*k,c[5]=_*y+E*P+T*O,c[8]=_*M+E*B+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],g=t[6],h=t[7],S=t[8];return i*d*S-i*p*h-s*c*S+s*p*g+l*c*h-l*d*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],g=t[6],h=t[7],S=t[8],x=S*d-p*h,_=p*g-S*c,E=h*c-d*g,T=i*x+s*_+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=x*w,t[1]=(l*h-S*s)*w,t[2]=(p*s-l*d)*w,t[3]=_*w,t[4]=(S*i-l*g)*w,t[5]=(l*c-p*i)*w,t[6]=E*w,t[7]=(s*g-h*i)*w,t[8]=(d*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const g=Math.cos(c),h=Math.sin(c);return this.set(s*g,s*h,-s*(g*d+h*p)+d+t,-l*h,l*g,-l*(-h*d+g*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Cd.makeScale(t,i)),this}rotate(t){return this.premultiply(Cd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Cd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let st=dp;const Cd=new st,m_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){const r={enabled:!0,workingColorSpace:iu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===zt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===zt&&(l.r=zr(l.r),l.g=zr(l.g),l.b=zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[iu]:{primaries:t,whitePoint:s,transfer:au,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:t,whitePoint:s,transfer:zt,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),r}const yt=oy();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vr;class ly{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{vr===void 0&&(vr=ru("canvas")),vr.width=t.width,vr.height=t.height;const l=vr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ru("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:t.width,height:t.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cy=0;class rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(wd(l[d].image)):c.push(wd(l[d]))}else c=wd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function wd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ly.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let uy=0;const Nd=new $;class Fn extends zs{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=va,l=va,c=Bn,d=Ls,p=Ui,g=Mi,h=Fn.DEFAULT_ANISOTROPY,S=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=jr(),this.name="",this.source=new rp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=g,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){et(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){et(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hh:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hh:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=yv;Fn.DEFAULT_ANISOTROPY=1;const hp=class hp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const g=t.elements,h=g[0],S=g[4],x=g[8],_=g[1],E=g[5],T=g[9],w=g[2],y=g[6],M=g[10];if(Math.abs(S-_)<.01&&Math.abs(x-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+_)<.1&&Math.abs(x+w)<.1&&Math.abs(T+y)<.1&&Math.abs(h+E+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,B=(E+1)/2,k=(M+1)/2,O=(S+_)/4,z=(x+w)/4,A=(T+y)/4;return P>B&&P>k?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=O/s,c=z/s):B>k?B<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(B),s=O/l,c=A/l):k<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),s=z/c,l=A/c),this.set(s,l,c,i),this}let D=Math.sqrt((y-T)*(y-T)+(x-w)*(x-w)+(_-S)*(_-S));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(x-w)/D,this.z=(_-S)/D,this.w=Math.acos((h+E+M-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hp.prototype.isVector4=!0;let cn=hp;class fy extends zs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Fn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new rp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends fy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Dv extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dy extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(t,i,s,l,c,d,p,g,h,S,x,_,E,T,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,g,h,S,x,_,E,T,w,y)}set(t,i,s,l,c,d,p,g,h,S,x,_,E,T,w,y){const M=this.elements;return M[0]=t,M[4]=i,M[8]=s,M[12]=l,M[1]=c,M[5]=d,M[9]=p,M[13]=g,M[2]=h,M[6]=S,M[10]=x,M[14]=_,M[3]=E,M[7]=T,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/xr.setFromMatrixColumn(t,0).length(),c=1/xr.setFromMatrixColumn(t,1).length(),d=1/xr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),g=Math.cos(l),h=Math.sin(l),S=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=d*S,E=d*x,T=p*S,w=p*x;i[0]=g*S,i[4]=-g*x,i[8]=h,i[1]=E+T*h,i[5]=_-w*h,i[9]=-p*g,i[2]=w-_*h,i[6]=T+E*h,i[10]=d*g}else if(t.order==="YXZ"){const _=g*S,E=g*x,T=h*S,w=h*x;i[0]=_+w*p,i[4]=T*p-E,i[8]=d*h,i[1]=d*x,i[5]=d*S,i[9]=-p,i[2]=E*p-T,i[6]=w+_*p,i[10]=d*g}else if(t.order==="ZXY"){const _=g*S,E=g*x,T=h*S,w=h*x;i[0]=_-w*p,i[4]=-d*x,i[8]=T+E*p,i[1]=E+T*p,i[5]=d*S,i[9]=w-_*p,i[2]=-d*h,i[6]=p,i[10]=d*g}else if(t.order==="ZYX"){const _=d*S,E=d*x,T=p*S,w=p*x;i[0]=g*S,i[4]=T*h-E,i[8]=_*h+w,i[1]=g*x,i[5]=w*h+_,i[9]=E*h-T,i[2]=-h,i[6]=p*g,i[10]=d*g}else if(t.order==="YZX"){const _=d*g,E=d*h,T=p*g,w=p*h;i[0]=g*S,i[4]=w-_*x,i[8]=T*x+E,i[1]=x,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=E*x+T,i[10]=_-w*x}else if(t.order==="XZY"){const _=d*g,E=d*h,T=p*g,w=p*h;i[0]=g*S,i[4]=-x,i[8]=h*S,i[1]=_*x+w,i[5]=d*S,i[9]=E*x-T,i[2]=T*x-E,i[6]=p*S,i[10]=w*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hy,t,py)}lookAt(t,i,s){const l=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Ja.crossVectors(s,oi),Ja.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Ja.crossVectors(s,oi)),Ja.normalize(),vc.crossVectors(oi,Ja),l[0]=Ja.x,l[4]=vc.x,l[8]=oi.x,l[1]=Ja.y,l[5]=vc.y,l[9]=oi.y,l[2]=Ja.z,l[6]=vc.z,l[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],g=s[8],h=s[12],S=s[1],x=s[5],_=s[9],E=s[13],T=s[2],w=s[6],y=s[10],M=s[14],D=s[3],P=s[7],B=s[11],k=s[15],O=l[0],z=l[4],A=l[8],F=l[12],K=l[1],G=l[5],J=l[9],fe=l[13],me=l[2],X=l[6],U=l[10],I=l[14],ee=l[3],ce=l[7],Se=l[11],L=l[15];return c[0]=d*O+p*K+g*me+h*ee,c[4]=d*z+p*G+g*X+h*ce,c[8]=d*A+p*J+g*U+h*Se,c[12]=d*F+p*fe+g*I+h*L,c[1]=S*O+x*K+_*me+E*ee,c[5]=S*z+x*G+_*X+E*ce,c[9]=S*A+x*J+_*U+E*Se,c[13]=S*F+x*fe+_*I+E*L,c[2]=T*O+w*K+y*me+M*ee,c[6]=T*z+w*G+y*X+M*ce,c[10]=T*A+w*J+y*U+M*Se,c[14]=T*F+w*fe+y*I+M*L,c[3]=D*O+P*K+B*me+k*ee,c[7]=D*z+P*G+B*X+k*ce,c[11]=D*A+P*J+B*U+k*Se,c[15]=D*F+P*fe+B*I+k*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],g=t[9],h=t[13],S=t[2],x=t[6],_=t[10],E=t[14],T=t[3],w=t[7],y=t[11],M=t[15],D=g*E-h*_,P=p*E-h*x,B=p*_-g*x,k=d*E-h*S,O=d*_-g*S,z=d*x-p*S;return i*(w*D-y*P+M*B)-s*(T*D-y*k+M*O)+l*(T*P-w*k+M*z)-c*(T*B-w*O+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],g=t[6],h=t[7],S=t[8],x=t[9],_=t[10],E=t[11],T=t[12],w=t[13],y=t[14],M=t[15],D=i*p-s*d,P=i*g-l*d,B=i*h-c*d,k=s*g-l*p,O=s*h-c*p,z=l*h-c*g,A=S*w-x*T,F=S*y-_*T,K=S*M-E*T,G=x*y-_*w,J=x*M-E*w,fe=_*M-E*y,me=D*fe-P*J+B*G+k*K-O*F+z*A;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/me;return t[0]=(p*fe-g*J+h*G)*X,t[1]=(l*J-s*fe-c*G)*X,t[2]=(w*z-y*O+M*k)*X,t[3]=(_*O-x*z-E*k)*X,t[4]=(g*K-d*fe-h*F)*X,t[5]=(i*fe-l*K+c*F)*X,t[6]=(y*B-T*z-M*P)*X,t[7]=(S*z-_*B+E*P)*X,t[8]=(d*J-p*K+h*A)*X,t[9]=(s*K-i*J-c*A)*X,t[10]=(T*O-w*B+M*D)*X,t[11]=(x*B-S*O-E*D)*X,t[12]=(p*F-d*G-g*A)*X,t[13]=(i*G-s*F+l*A)*X,t[14]=(w*P-T*k-y*D)*X,t[15]=(S*k-x*P+_*D)*X,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,g=t.z,h=c*d,S=c*p;return this.set(h*d+s,h*p-l*g,h*g+l*p,0,h*p+l*g,S*p+s,S*g-l*d,0,h*g-l*p,S*g+l*d,c*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,g=i._w,h=c+c,S=d+d,x=p+p,_=c*h,E=c*S,T=c*x,w=d*S,y=d*x,M=p*x,D=g*h,P=g*S,B=g*x,k=s.x,O=s.y,z=s.z;return l[0]=(1-(w+M))*k,l[1]=(E+B)*k,l[2]=(T-P)*k,l[3]=0,l[4]=(E-B)*O,l[5]=(1-(_+M))*O,l[6]=(y+D)*O,l[7]=0,l[8]=(T+P)*z,l[9]=(y-D)*z,l[10]=(1-(_+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=xr.set(l[0],l[1],l[2]).length();const p=xr.set(l[4],l[5],l[6]).length(),g=xr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),wi.copy(this);const h=1/d,S=1/p,x=1/g;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=S,wi.elements[5]*=S,wi.elements[6]*=S,wi.elements[8]*=x,wi.elements[9]*=x,wi.elements[10]*=x,i.setFromRotationMatrix(wi),s.x=d,s.y=p,s.z=g,this}makePerspective(t,i,s,l,c,d,p=ki,g=!1){const h=this.elements,S=2*c/(i-t),x=2*c/(s-l),_=(i+t)/(i-t),E=(s+l)/(s-l);let T,w;if(g)T=c/(d-c),w=d*c/(d-c);else if(p===ki)T=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(p===su)T=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=ki,g=!1){const h=this.elements,S=2/(i-t),x=2/(s-l),_=-(i+t)/(i-t),E=-(s+l)/(s-l);let T,w;if(g)T=1/(d-c),w=d/(d-c);else if(p===ki)T=-2/(d-c),w=-(d+c)/(d-c);else if(p===su)T=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=x,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=T,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};cu.prototype.isMatrix4=!0;let un=cu;const xr=new $,wi=new un,hy=new $(0,0,0),py=new $(1,1,1),Ja=new $,vc=new $,oi=new $,__=new un,v_=new kr;class Fs{constructor(t=0,i=0,s=0,l=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],g=l[1],h=l[5],S=l[9],x=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(g,h)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-S,E),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return __.makeRotationFromQuaternion(t),this.setFromRotationMatrix(__,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return v_.setFromEuler(this),this.setFromQuaternion(v_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class Uv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let my=0;const x_=new $,Sr=new kr,da=new un,xc=new $,ko=new $,gy=new $,_y=new kr,S_=new $(1,0,0),M_=new $(0,1,0),y_=new $(0,0,1),E_={type:"added"},vy={type:"removed"},Mr={type:"childadded",child:null},Dd={type:"childremoved",child:null};class Gn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new $,i=new Fs,s=new kr,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new un},normalMatrix:{value:new st}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(t,i){return Sr.setFromAxisAngle(t,i),this.quaternion.premultiply(Sr),this}rotateX(t){return this.rotateOnAxis(S_,t)}rotateY(t){return this.rotateOnAxis(M_,t)}rotateZ(t){return this.rotateOnAxis(y_,t)}translateOnAxis(t,i){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(S_,t)}translateY(t){return this.translateOnAxis(M_,t)}translateZ(t){return this.translateOnAxis(y_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xc.copy(t):xc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(ko,xc,this.up):da.lookAt(xc,ko,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(da),this.quaternion.premultiply(Sr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Et("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vy),Dd.child=t,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,_y,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let h=0,S=g.length;h<S;h++){const x=g[h];c(t.shapes,x)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,h=this.material.length;g<h;g++)p.push(c(t.materials,this.material[g]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(c(t.animations,g))}}if(i){const p=d(t.geometries),g=d(t.materials),h=d(t.textures),S=d(t.images),x=d(t.shapes),_=d(t.skeletons),E=d(t.animations),T=d(t.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),h.length>0&&(s.textures=h),S.length>0&&(s.images=S),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(p){const g=[];for(const h in p){const S=p[h];delete S.metadata,g.push(S)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new $(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jo extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class Ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,g=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),M=this._getHandJoint(h,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const S=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=S.position.distanceTo(x.position),E=.02,T=.005;h.inputState.pinching&&_>E+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&_<=E-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Jo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Ld(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ut{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,yt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=yt.workingColorSpace){return this.r=t,this.g=i,this.b=s,yt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=yt.workingColorSpace){if(t=sp(t,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ld(d,c,t+1/3),this.g=Ld(d,c,t),this.b=Ld(d,c,t-1/3)}return yt.colorSpaceToWorking(this,l),this}setStyle(t,i=Yn){function s(c){c!==void 0&&parseFloat(c)<1&&et("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:et("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);et("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Yn){const s=Lv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):et("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Yn){return yt.workingToColorSpace(On.copy(this),t),Math.round(St(On.r*255,0,255))*65536+Math.round(St(On.g*255,0,255))*256+Math.round(St(On.b*255,0,255))}getHexString(t=Yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=yt.workingColorSpace){yt.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let g,h;const S=(p+d)/2;if(p===d)g=0,h=0;else{const x=d-p;switch(h=S<=.5?x/(d+p):x/(2-d-p),d){case s:g=(l-c)/x+(l<c?6:0);break;case l:g=(c-s)/x+2;break;case c:g=(s-l)/x+4;break}g/=6}return t.h=g,t.s=h,t.l=S,t}getRGB(t,i=yt.workingColorSpace){return yt.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=Yn){yt.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,l=On.b;return t!==Yn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(Sc);const s=tl($a.h,Sc.h,i),l=tl($a.s,Sc.s,i),c=tl($a.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ut;Ut.NAMES=Lv;class b_ extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new $,ha=new $,Od=new $,pa=new $,yr=new $,Er=new $,T_=new $,Pd=new $,Bd=new $,Fd=new $,zd=new cn,Id=new cn,Hd=new cn;class yi{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),ha.subVectors(s,i),Od.subVectors(t,i);const d=Ni.dot(Ni),p=Ni.dot(ha),g=Ni.dot(Od),h=ha.dot(ha),S=ha.dot(Od),x=d*h-p*p;if(x===0)return c.set(0,0,0),null;const _=1/x,E=(h*g-p*S)*_,T=(d*S-p*g)*_;return c.set(1-E-T,T,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,d,p,g){return this.getBarycoord(t,i,s,l,pa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,pa.x),g.addScaledVector(d,pa.y),g.addScaledVector(p,pa.z),g)}static getInterpolatedAttribute(t,i,s,l,c,d){return zd.setScalar(0),Id.setScalar(0),Hd.setScalar(0),zd.fromBufferAttribute(t,i),Id.fromBufferAttribute(t,s),Hd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(zd,c.x),d.addScaledVector(Id,c.y),d.addScaledVector(Hd,c.z),d}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),ha.subVectors(t,i),Ni.cross(ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ni.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;yr.subVectors(l,s),Er.subVectors(c,s),Pd.subVectors(t,s);const g=yr.dot(Pd),h=Er.dot(Pd);if(g<=0&&h<=0)return i.copy(s);Bd.subVectors(t,l);const S=yr.dot(Bd),x=Er.dot(Bd);if(S>=0&&x<=S)return i.copy(l);const _=g*x-S*h;if(_<=0&&g>=0&&S<=0)return d=g/(g-S),i.copy(s).addScaledVector(yr,d);Fd.subVectors(t,c);const E=yr.dot(Fd),T=Er.dot(Fd);if(T>=0&&E<=T)return i.copy(c);const w=E*h-g*T;if(w<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Er,p);const y=S*T-E*x;if(y<=0&&x-S>=0&&E-T>=0)return T_.subVectors(c,l),p=(x-S)/(x-S+(E-T)),i.copy(l).addScaledVector(T_,p);const M=1/(y+w+_);return d=w*M,p=_*M,i.copy(s).addScaledVector(yr,d).addScaledVector(Er,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class sl{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xo),yc.subVectors(this.max,Xo),br.subVectors(t.a,Xo),Tr.subVectors(t.b,Xo),Ar.subVectors(t.c,Xo),es.subVectors(Tr,br),ts.subVectors(Ar,Tr),As.subVectors(br,Ar);let i=[0,-es.z,es.y,0,-ts.z,ts.y,0,-As.z,As.y,es.z,0,-es.x,ts.z,0,-ts.x,As.z,0,-As.x,-es.y,es.x,0,-ts.y,ts.x,0,-As.y,As.x,0];return!Gd(i,br,Tr,Ar,yc)||(i=[1,0,0,0,1,0,0,0,1],!Gd(i,br,Tr,Ar,yc))?!1:(Ec.crossVectors(es,ts),i=[Ec.x,Ec.y,Ec.z],Gd(i,br,Tr,Ar,yc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new $,new $,new $,new $,new $,new $,new $,new $],Di=new $,Mc=new sl,br=new $,Tr=new $,Ar=new $,es=new $,ts=new $,As=new $,Xo=new $,yc=new $,Ec=new $,Rs=new $;function Gd(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Rs.fromArray(r,c);const p=l.x*Math.abs(Rs.x)+l.y*Math.abs(Rs.y)+l.z*Math.abs(Rs.z),g=t.dot(Rs),h=i.dot(Rs),S=s.dot(Rs);if(Math.max(-Math.max(g,h,S),Math.min(g,h,S))>p)return!1}return!0}const gn=new $,bc=new jt;let Sy=0;class Li extends zs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=l_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Lr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lr(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lr(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lr(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==l_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ov extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Pv extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ci extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}const My=new sl,Wo=new $,Vd=new $;class rl{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):My.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wo.subVectors(t,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wo.copy(t.center).add(Vd)),this.expandByPoint(Wo.copy(t.center).sub(Vd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let yy=0;const xi=new un,jd=new Gn,Rr=new $,li=new sl,qo=new sl,yn=new $;class Kn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(GM(t)?Pv:Ov)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new st().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return jd.lookAt(t),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ci(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];qo.setFromBufferAttribute(p),this.morphTargetsRelative?(yn.addVectors(li.min,qo.min),li.expandByPoint(yn),yn.addVectors(li.max,qo.max),li.expandByPoint(yn)):(li.expandByPoint(qo.min),li.expandByPoint(qo.max))}li.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],g=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)yn.fromBufferAttribute(p,h),g&&(Rr.fromBufferAttribute(t,h),yn.add(Rr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],g=[];for(let A=0;A<s.count;A++)p[A]=new $,g[A]=new $;const h=new $,S=new $,x=new $,_=new jt,E=new jt,T=new jt,w=new $,y=new $;function M(A,F,K){h.fromBufferAttribute(s,A),S.fromBufferAttribute(s,F),x.fromBufferAttribute(s,K),_.fromBufferAttribute(c,A),E.fromBufferAttribute(c,F),T.fromBufferAttribute(c,K),S.sub(h),x.sub(h),E.sub(_),T.sub(_);const G=1/(E.x*T.y-T.x*E.y);isFinite(G)&&(w.copy(S).multiplyScalar(T.y).addScaledVector(x,-E.y).multiplyScalar(G),y.copy(x).multiplyScalar(E.x).addScaledVector(S,-T.x).multiplyScalar(G),p[A].add(w),p[F].add(w),p[K].add(w),g[A].add(y),g[F].add(y),g[K].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let A=0,F=D.length;A<F;++A){const K=D[A],G=K.start,J=K.count;for(let fe=G,me=G+J;fe<me;fe+=3)M(t.getX(fe+0),t.getX(fe+1),t.getX(fe+2))}const P=new $,B=new $,k=new $,O=new $;function z(A){k.fromBufferAttribute(l,A),O.copy(k);const F=p[A];P.copy(F),P.sub(k.multiplyScalar(k.dot(F))).normalize(),B.crossVectors(O,F);const G=B.dot(g[A])<0?-1:1;d.setXYZW(A,P.x,P.y,P.z,G)}for(let A=0,F=D.length;A<F;++A){const K=D[A],G=K.start,J=K.count;for(let fe=G,me=G+J;fe<me;fe+=3)z(t.getX(fe+0)),z(t.getX(fe+1)),z(t.getX(fe+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new $,c=new $,d=new $,p=new $,g=new $,h=new $,S=new $,x=new $;if(t)for(let _=0,E=t.count;_<E;_+=3){const T=t.getX(_+0),w=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),S.subVectors(d,c),x.subVectors(l,c),S.cross(x),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),h.fromBufferAttribute(s,y),p.add(S),g.add(S),h.add(S),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(w,g.x,g.y,g.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,c),x.subVectors(l,c),S.cross(x),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(p,g){const h=p.array,S=p.itemSize,x=p.normalized,_=new h.constructor(g.length*S);let E=0,T=0;for(let w=0,y=g.length;w<y;w++){p.isInterleavedBufferAttribute?E=g[w]*p.data.stride+p.offset:E=g[w]*S;for(let M=0;M<S;M++)_[T++]=h[E++]}return new Li(_,S,x)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Kn,s=this.index.array,l=this.attributes;for(const p in l){const g=l[p],h=t(g,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const g=[],h=c[p];for(let S=0,x=h.length;S<x;S++){const _=h[S],E=t(_,s);g.push(E)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,g=d.length;p<g;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const h in g)g[h]!==void 0&&(t[h]=g[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const h=s[g];t.data.attributes[g]=h.toJSON(t.data)}const l={};let c=!1;for(const g in this.morphAttributes){const h=this.morphAttributes[g],S=[];for(let x=0,_=h.length;x<_;x++){const E=h[x];S.push(E.toJSON(t.data))}S.length>0&&(l[g]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const c=t.morphAttributes;for(const h in c){const S=[],x=c[h];for(let _=0,E=x.length;_<E;_++)S.push(x[_].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,S=d.length;h<S;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ey=0;class Xr extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=Br,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=sh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){et(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){et(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ah&&(s.blendSrc=this.blendSrc),this.blendDst!==sh&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const g=c[p];delete g.metadata,d.push(g)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ga=new $,kd=new $,Tc=new $,ns=new $,Xd=new $,Ac=new $,Wd=new $;class op{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){kd.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),ns.copy(this.origin).sub(kd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Tc),p=ns.dot(this.direction),g=-ns.dot(Tc),h=ns.lengthSq(),S=Math.abs(1-d*d);let x,_,E,T;if(S>0)if(x=d*g-p,_=d*p-g,T=c*S,x>=0)if(_>=-T)if(_<=T){const w=1/S;x*=w,_*=w,E=x*(x+d*_+2*p)+_*(d*x+_+2*g)+h}else _=c,x=Math.max(0,-(d*_+p)),E=-x*x+_*(_+2*g)+h;else _=-c,x=Math.max(0,-(d*_+p)),E=-x*x+_*(_+2*g)+h;else _<=-T?(x=Math.max(0,-(-d*c+p)),_=x>0?-c:Math.min(Math.max(-c,-g),c),E=-x*x+_*(_+2*g)+h):_<=T?(x=0,_=Math.min(Math.max(-c,-g),c),E=_*(_+2*g)+h):(x=Math.max(0,-(d*c+p)),_=x>0?c:Math.min(Math.max(-c,-g),c),E=-x*x+_*(_+2*g)+h);else _=d>0?-c:c,x=Math.max(0,-(d*_+p)),E=-x*x+_*(_+2*g)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(kd).addScaledVector(Tc,_),E}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,g=s+d;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,g;const h=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(s=(t.min.x-_.x)*h,l=(t.max.x-_.x)*h):(s=(t.max.x-_.x)*h,l=(t.min.x-_.x)*h),S>=0?(c=(t.min.y-_.y)*S,d=(t.max.y-_.y)*S):(c=(t.max.y-_.y)*S,d=(t.min.y-_.y)*S),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(p=(t.min.z-_.z)*x,g=(t.max.z-_.z)*x):(p=(t.max.z-_.z)*x,g=(t.min.z-_.z)*x),s>g||p>l)||((p>s||s!==s)&&(s=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){Xd.subVectors(i,t),Ac.subVectors(s,t),Wd.crossVectors(Xd,Ac);let d=this.direction.dot(Wd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ns.subVectors(this.origin,t);const g=p*this.direction.dot(Ac.crossVectors(ns,Ac));if(g<0)return null;const h=p*this.direction.dot(Xd.cross(ns));if(h<0||g+h>d)return null;const S=-p*ns.dot(Wd);return S<0?null:this.at(S/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fu extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const A_=new un,Cs=new op,Rc=new rl,R_=new $,Cc=new $,wc=new $,Nc=new $,qd=new $,Dc=new $,C_=new $,Uc=new $;class Ei extends Gn{constructor(t=new Kn,i=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Dc.set(0,0,0);for(let g=0,h=c.length;g<h;g++){const S=p[g],x=c[g];S!==0&&(qd.fromBufferAttribute(x,t),d?Dc.addScaledVector(qd,S):Dc.addScaledVector(qd.sub(i),S))}i.add(Dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),Cs.copy(t.ray).recast(t.near),!(Rc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Rc,R_)===null||Cs.origin.distanceToSquared(R_)>(t.far-t.near)**2))&&(A_.copy(c).invert(),Cs.copy(t.ray).applyMatrix4(A_),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Cs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,g=c.attributes.position,h=c.attributes.uv,S=c.attributes.uv1,x=c.attributes.normal,_=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,w=_.length;T<w;T++){const y=_[T],M=d[y.materialIndex],D=Math.max(y.start,E.start),P=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let B=D,k=P;B<k;B+=3){const O=p.getX(B),z=p.getX(B+1),A=p.getX(B+2);l=Lc(this,M,t,s,h,S,x,O,z,A),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(p.count,E.start+E.count);for(let y=T,M=w;y<M;y+=3){const D=p.getX(y),P=p.getX(y+1),B=p.getX(y+2);l=Lc(this,d,t,s,h,S,x,D,P,B),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let T=0,w=_.length;T<w;T++){const y=_[T],M=d[y.materialIndex],D=Math.max(y.start,E.start),P=Math.min(g.count,Math.min(y.start+y.count,E.start+E.count));for(let B=D,k=P;B<k;B+=3){const O=B,z=B+1,A=B+2;l=Lc(this,M,t,s,h,S,x,O,z,A),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(g.count,E.start+E.count);for(let y=T,M=w;y<M;y+=3){const D=y,P=y+1,B=y+2;l=Lc(this,d,t,s,h,S,x,D,P,B),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function by(r,t,i,s,l,c,d,p){let g;if(t.side===Zn?g=s.intersectTriangle(d,c,l,!0,p):g=s.intersectTriangle(l,c,d,t.side===rs,p),g===null)return null;Uc.copy(p),Uc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Uc);return h<i.near||h>i.far?null:{distance:h,point:Uc.clone(),object:r}}function Lc(r,t,i,s,l,c,d,p,g,h){r.getVertexPosition(p,Cc),r.getVertexPosition(g,wc),r.getVertexPosition(h,Nc);const S=by(r,t,i,s,Cc,wc,Nc,C_);if(S){const x=new $;yi.getBarycoord(C_,Cc,wc,Nc,x),l&&(S.uv=yi.getInterpolatedAttribute(l,p,g,h,x,new jt)),c&&(S.uv1=yi.getInterpolatedAttribute(c,p,g,h,x,new jt)),d&&(S.normal=yi.getInterpolatedAttribute(d,p,g,h,x,new $),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:p,b:g,c:h,normal:new $,materialIndex:0};yi.getNormal(Cc,wc,Nc,_.normal),S.face=_,S.barycoord=x}return S}class Ty extends Fn{constructor(t=null,i=1,s=1,l,c,d,p,g,h=wn,S=wn,x,_){super(null,d,p,g,h,S,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new $,Ay=new $,Ry=new st;class Ns{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Yd.subVectors(s,i).cross(Ay.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Yd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Ry.getNormalMatrix(t),l=this.coplanarPoint(Yd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new rl,Cy=new jt(.5,.5),Oc=new $;class Bv{constructor(t=new Ns,i=new Ns,s=new Ns,l=new Ns,c=new Ns,d=new Ns){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],g=c[2],h=c[3],S=c[4],x=c[5],_=c[6],E=c[7],T=c[8],w=c[9],y=c[10],M=c[11],D=c[12],P=c[13],B=c[14],k=c[15];if(l[0].setComponents(h-d,E-S,M-T,k-D).normalize(),l[1].setComponents(h+d,E+S,M+T,k+D).normalize(),l[2].setComponents(h+p,E+x,M+w,k+P).normalize(),l[3].setComponents(h-p,E-x,M-w,k-P).normalize(),s)l[4].setComponents(g,_,y,B).normalize(),l[5].setComponents(h-g,E-_,M-y,k-B).normalize();else if(l[4].setComponents(h-g,E-_,M-y,k-B).normalize(),i===ki)l[5].setComponents(h+g,E+_,M+y,k+B).normalize();else if(i===su)l[5].setComponents(g,_,y,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=Cy.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lp extends Xr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ou=new $,lu=new $,w_=new un,Yo=new op,Pc=new rl,Zd=new $,N_=new $;class wy extends Gn{constructor(t=new Kn,i=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);t.setAttribute("lineDistance",new ci(s,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;w_.copy(l).invert(),Yo.copy(t.ray).applyMatrix4(w_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,h=this.isLineSegments?2:1,S=s.index,_=s.attributes.position;if(S!==null){const E=Math.max(0,d.start),T=Math.min(S.count,d.start+d.count);for(let w=E,y=T-1;w<y;w+=h){const M=S.getX(w),D=S.getX(w+1),P=Bc(this,t,Yo,g,M,D,w);P&&i.push(P)}if(this.isLineLoop){const w=S.getX(T-1),y=S.getX(E),M=Bc(this,t,Yo,g,w,y,T-1);M&&i.push(M)}}else{const E=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let w=E,y=T-1;w<y;w+=h){const M=Bc(this,t,Yo,g,w,w+1,w);M&&i.push(M)}if(this.isLineLoop){const w=Bc(this,t,Yo,g,T-1,E,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Bc(r,t,i,s,l,c,d){const p=r.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),lu.fromBufferAttribute(p,c),i.distanceSqToSegment(ou,lu,Zd,N_)>s)return;Zd.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Zd);if(!(h<t.near||h>t.far))return{distance:h,point:N_.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const D_=new $,U_=new $;class Fv extends wy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)D_.fromBufferAttribute(i,l),U_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+D_.distanceTo(U_);t.setAttribute("lineDistance",new ci(s,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zv extends Xr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const L_=new un,Wh=new op,Fc=new rl,zc=new $;class Ny extends Gn{constructor(t=new Kn,i=new zv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,t.ray.intersectsSphere(Fc)===!1)return;L_.copy(l).invert(),Wh.copy(t.ray).applyMatrix4(L_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,h=s.index,x=s.attributes.position;if(h!==null){const _=Math.max(0,d.start),E=Math.min(h.count,d.start+d.count);for(let T=_,w=E;T<w;T++){const y=h.getX(T);zc.fromBufferAttribute(x,y),O_(zc,y,g,l,t,i,this)}}else{const _=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let T=_,w=E;T<w;T++)zc.fromBufferAttribute(x,T),O_(zc,T,g,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function O_(r,t,i,s,l,c,d){const p=Wh.distanceSqToPoint(r);if(p<i){const g=new $;Wh.closestPointToPoint(r,g),g.applyMatrix4(s);const h=l.ray.origin.distanceTo(g);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Iv extends Fn{constructor(t=[],i=Ps,s,l,c,d,p,g,h,S){super(t,i,s,l,c,d,p,g,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dy extends Fn{constructor(t,i,s,l,c,d,p,g,h){super(t,i,s,l,c,d,p,g,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gr extends Fn{constructor(t,i,s=qi,l,c,d,p=wn,g=wn,h,S=ya,x=1){if(S!==ya&&S!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,c,d,p,g,S,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Uy extends Gr{constructor(t,i=qi,s=Ps,l,c,d=wn,p=wn,g,h=ya){const S={width:t,height:t,depth:1},x=[S,S,S,S,S,S];super(t,t,i,s,l,c,d,p,g,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hv extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wr extends Kn{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const g=[],h=[],S=[],x=[];let _=0,E=0;T("z","y","x",-1,-1,s,i,t,d,c,0),T("z","y","x",1,-1,s,i,-t,d,c,1),T("x","z","y",1,1,t,s,i,l,d,2),T("x","z","y",1,-1,t,s,-i,l,d,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new ci(h,3)),this.setAttribute("normal",new ci(S,3)),this.setAttribute("uv",new ci(x,2));function T(w,y,M,D,P,B,k,O,z,A,F){const K=B/z,G=k/A,J=B/2,fe=k/2,me=O/2,X=z+1,U=A+1;let I=0,ee=0;const ce=new $;for(let Se=0;Se<U;Se++){const L=Se*G-fe;for(let Z=0;Z<X;Z++){const xe=Z*K-J;ce[w]=xe*D,ce[y]=L*P,ce[M]=me,h.push(ce.x,ce.y,ce.z),ce[w]=0,ce[y]=0,ce[M]=O>0?1:-1,S.push(ce.x,ce.y,ce.z),x.push(Z/z),x.push(1-Se/A),I+=1}}for(let Se=0;Se<A;Se++)for(let L=0;L<z;L++){const Z=_+L+X*Se,xe=_+L+X*(Se+1),ye=_+(L+1)+X*(Se+1),Re=_+(L+1)+X*Se;g.push(Z,xe,Re),g.push(xe,ye,Re),ee+=6}p.addGroup(E,ee,F),E+=ee,_+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Ic=new $,Hc=new $,Kd=new $,Gc=new yi;class Ly extends Kn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Fr*i),d=t.getIndex(),p=t.getAttribute("position"),g=d?d.count:p.count,h=[0,0,0],S=["a","b","c"],x=new Array(3),_={},E=[];for(let T=0;T<g;T+=3){d?(h[0]=d.getX(T),h[1]=d.getX(T+1),h[2]=d.getX(T+2)):(h[0]=T,h[1]=T+1,h[2]=T+2);const{a:w,b:y,c:M}=Gc;if(w.fromBufferAttribute(p,h[0]),y.fromBufferAttribute(p,h[1]),M.fromBufferAttribute(p,h[2]),Gc.getNormal(Kd),x[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,x[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,x[2]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let D=0;D<3;D++){const P=(D+1)%3,B=x[D],k=x[P],O=Gc[S[D]],z=Gc[S[P]],A=`${B}_${k}`,F=`${k}_${B}`;F in _&&_[F]?(Kd.dot(_[F].normal)<=c&&(E.push(O.x,O.y,O.z),E.push(z.x,z.y,z.z)),_[F]=null):A in _||(_[A]={index0:h[D],index1:h[P],normal:Kd.clone()})}}for(const T in _)if(_[T]){const{index0:w,index1:y}=_[T];Ic.fromBufferAttribute(p,w),Hc.fromBufferAttribute(p,y),E.push(Ic.x,Ic.y,Ic.z),E.push(Hc.x,Hc.y,Hc.z)}this.setAttribute("position",new ci(E,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class qr extends Kn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),g=Math.floor(l),h=p+1,S=g+1,x=t/p,_=i/g,E=[],T=[],w=[],y=[];for(let M=0;M<S;M++){const D=M*_-d;for(let P=0;P<h;P++){const B=P*x-c;T.push(B,-D,0),w.push(0,0,1),y.push(P/p),y.push(1-M/g)}}for(let M=0;M<g;M++)for(let D=0;D<p;D++){const P=D+h*M,B=D+h*(M+1),k=D+1+h*(M+1),O=D+1+h*M;E.push(P,B,O),E.push(B,k,O)}this.setIndex(E),this.setAttribute("position",new ci(T,3)),this.setAttribute("normal",new ci(w,3)),this.setAttribute("uv",new ci(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.widthSegments,t.heightSegments)}}function Vr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(P_(l))l.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(P_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Vr(r[i]);for(const l in s)t[l]=s[l]}return t}function P_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Oy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Gv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:yt.workingColorSpace}const Py={clone:Vr,merge:Hn};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=Fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=Oy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class zy extends Oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Iy extends Xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hy extends Xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vc=new $,jc=new kr,Hi=new $;class Vv extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vc,jc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,jc,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Vc,jc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,jc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new $,B_=new jt,F_=new jt;class Si extends Vv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,B_,F_),i.subVectors(F_,B_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Fr*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/g,i-=d.offsetY*s/h,l*=d.width/g,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cp extends Vv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=S*this.view.offsetY,g=p-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cr=-90,wr=1;class Gy extends Gn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Cr,wr,t,i);l.layers=this.layers,this.add(l);const c=new Si(Cr,wr,t,i);c.layers=this.layers,this.add(c);const d=new Si(Cr,wr,t,i);d.layers=this.layers,this.add(d);const p=new Si(Cr,wr,t,i);p.layers=this.layers,this.add(p);const g=new Si(Cr,wr,t,i);g.layers=this.layers,this.add(g);const h=new Si(Cr,wr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,g]=i;for(const h of i)this.remove(h);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===su)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,g,h,S]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(x,_,E),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Vy extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class jy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,et("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const pp=class pp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};pp.prototype.isMatrix2=!0;let z_=pp;function I_(r,t,i,s){const l=ky(s);switch(i){case Rv:return r*t;case wv:return r*t/l.components*l.byteLength;case ep:return r*t/l.components*l.byteLength;case Bs:return r*t*2/l.components*l.byteLength;case tp:return r*t*2/l.components*l.byteLength;case Cv:return r*t*3/l.components*l.byteLength;case Ui:return r*t*4/l.components*l.byteLength;case np:return r*t*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gh:case vh:return Math.max(r,16)*Math.max(t,8)/4;case mh:case _h:return Math.max(r,8)*Math.max(t,8)/2;case xh:case Sh:case yh:case Eh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mh:case tu:case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ih:case Hh:case Gh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Vh:case jh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case nu:case kh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ky(r){switch(r){case Mi:case Ev:return{byteLength:1,components:1};case nl:case bv:case Ma:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case qi:case Qh:case ji:return{byteLength:4,components:1};case Tv:case Av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);function jv(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Xy(r){const t=new WeakMap;function i(p,g){const h=p.array,S=p.usage,x=h.byteLength,_=r.createBuffer();r.bindBuffer(g,_),r.bufferData(g,h,S),p.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,g,h){const S=g.array,x=g.updateRanges;if(r.bindBuffer(h,p),x.length===0)r.bufferSubData(h,0,S);else{x.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<x.length;E++){const T=x[_],w=x[E];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++_,x[_]=w)}x.length=_+1;for(let E=0,T=x.length;E<T;E++){const w=x[E];r.bufferSubData(h,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=t.get(p);g&&(r.deleteBuffer(g.buffer),t.delete(p))}function d(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=t.get(p);(!S||S.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,g));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,g),h.version=p.version}}return{get:l,remove:c,update:d}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,t1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,s1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,z1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,DE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$E=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_b=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Wy,alphahash_pars_fragment:qy,alphamap_fragment:Yy,alphamap_pars_fragment:Zy,alphatest_fragment:Ky,alphatest_pars_fragment:Qy,aomap_fragment:Jy,aomap_pars_fragment:$y,batching_pars_vertex:e1,batching_vertex:t1,begin_vertex:n1,beginnormal_vertex:i1,bsdfs:a1,iridescence_fragment:s1,bumpmap_pars_fragment:r1,clipping_planes_fragment:o1,clipping_planes_pars_fragment:l1,clipping_planes_pars_vertex:c1,clipping_planes_vertex:u1,color_fragment:f1,color_pars_fragment:d1,color_pars_vertex:h1,color_vertex:p1,common:m1,cube_uv_reflection_fragment:g1,defaultnormal_vertex:_1,displacementmap_pars_vertex:v1,displacementmap_vertex:x1,emissivemap_fragment:S1,emissivemap_pars_fragment:M1,colorspace_fragment:y1,colorspace_pars_fragment:E1,envmap_fragment:b1,envmap_common_pars_fragment:T1,envmap_pars_fragment:A1,envmap_pars_vertex:R1,envmap_physical_pars_fragment:z1,envmap_vertex:C1,fog_vertex:w1,fog_pars_vertex:N1,fog_fragment:D1,fog_pars_fragment:U1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:O1,lights_lambert_fragment:P1,lights_lambert_pars_fragment:B1,lights_pars_begin:F1,lights_toon_fragment:I1,lights_toon_pars_fragment:H1,lights_phong_fragment:G1,lights_phong_pars_fragment:V1,lights_physical_fragment:j1,lights_physical_pars_fragment:k1,lights_fragment_begin:X1,lights_fragment_maps:W1,lights_fragment_end:q1,lightprobes_pars_fragment:Y1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:J1,map_fragment:$1,map_pars_fragment:eE,map_particle_fragment:tE,map_particle_pars_fragment:nE,metalnessmap_fragment:iE,metalnessmap_pars_fragment:aE,morphinstance_vertex:sE,morphcolor_vertex:rE,morphnormal_vertex:oE,morphtarget_pars_vertex:lE,morphtarget_vertex:cE,normal_fragment_begin:uE,normal_fragment_maps:fE,normal_pars_fragment:dE,normal_pars_vertex:hE,normal_vertex:pE,normalmap_pars_fragment:mE,clearcoat_normal_fragment_begin:gE,clearcoat_normal_fragment_maps:_E,clearcoat_pars_fragment:vE,iridescence_pars_fragment:xE,opaque_fragment:SE,packing:ME,premultiplied_alpha_fragment:yE,project_vertex:EE,dithering_fragment:bE,dithering_pars_fragment:TE,roughnessmap_fragment:AE,roughnessmap_pars_fragment:RE,shadowmap_pars_fragment:CE,shadowmap_pars_vertex:wE,shadowmap_vertex:NE,shadowmask_pars_fragment:DE,skinbase_vertex:UE,skinning_pars_vertex:LE,skinning_vertex:OE,skinnormal_vertex:PE,specularmap_fragment:BE,specularmap_pars_fragment:FE,tonemapping_fragment:zE,tonemapping_pars_fragment:IE,transmission_fragment:HE,transmission_pars_fragment:GE,uv_pars_fragment:VE,uv_pars_vertex:jE,uv_vertex:kE,worldpos_vertex:XE,background_vert:WE,background_frag:qE,backgroundCube_vert:YE,backgroundCube_frag:ZE,cube_vert:KE,cube_frag:QE,depth_vert:JE,depth_frag:$E,distance_vert:eb,distance_frag:tb,equirect_vert:nb,equirect_frag:ib,linedashed_vert:ab,linedashed_frag:sb,meshbasic_vert:rb,meshbasic_frag:ob,meshlambert_vert:lb,meshlambert_frag:cb,meshmatcap_vert:ub,meshmatcap_frag:fb,meshnormal_vert:db,meshnormal_frag:hb,meshphong_vert:pb,meshphong_frag:mb,meshphysical_vert:gb,meshphysical_frag:_b,meshtoon_vert:vb,meshtoon_frag:xb,points_vert:Sb,points_frag:Mb,shadow_vert:yb,shadow_frag:Eb,sprite_vert:bb,sprite_frag:Tb},He={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vi={basic:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Hn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Hn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Hn([He.points,He.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Hn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Hn([He.common,He.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Hn([He.sprite,He.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Hn([He.common,He.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Hn([He.lights,He.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Vi.physical={uniforms:Hn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const kc={r:0,b:0,g:0},Ab=new un,kv=new st;kv.set(-1,0,0,0,1,0,0,0,1);function Rb(r,t,i,s,l,c){const d=new Ut(0);let p=l===!0?0:1,g,h,S=null,x=0,_=null;function E(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const B=D.backgroundBlurriness>0;P=t.get(P,B)}return P}function T(D){let P=!1;const B=E(D);B===null?y(d,p):B&&B.isColor&&(y(B,1),P=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(D,P){const B=E(P);B&&(B.isCubeTexture||B.mapping===uu)?(h===void 0&&(h=new Ei(new Wr(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Vr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=B,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ab.makeRotationFromEuler(P.backgroundRotation)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(kv),h.material.toneMapped=yt.getTransfer(B.colorSpace)!==zt,(S!==B||x!==B.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,S=B,x=B.version,_=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):B&&B.isTexture&&(g===void 0&&(g=new Ei(new qr(2,2),new Oi({name:"BackgroundMaterial",uniforms:Vr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=B,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.toneMapped=yt.getTransfer(B.colorSpace)!==zt,B.matrixAutoUpdate===!0&&B.updateMatrix(),g.material.uniforms.uvTransform.value.copy(B.matrix),(S!==B||x!==B.version||_!==r.toneMapping)&&(g.material.needsUpdate=!0,S=B,x=B.version,_=r.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function y(D,P){D.getRGB(kc,Gv(r)),i.buffers.color.setClear(kc.r,kc.g,kc.b,P,c)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(d,p)},render:T,addToRenderList:w,dispose:M}}function Cb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,d=!1;function p(G,J,fe,me,X){let U=!1;const I=x(G,me,fe,J);c!==I&&(c=I,h(c.object)),U=E(G,me,fe,X),U&&T(G,me,fe,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,B(G,J,fe,me),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function g(){return r.createVertexArray()}function h(G){return r.bindVertexArray(G)}function S(G){return r.deleteVertexArray(G)}function x(G,J,fe,me){const X=me.wireframe===!0;let U=s[J.id];U===void 0&&(U={},s[J.id]=U);const I=G.isInstancedMesh===!0?G.id:0;let ee=U[I];ee===void 0&&(ee={},U[I]=ee);let ce=ee[fe.id];ce===void 0&&(ce={},ee[fe.id]=ce);let Se=ce[X];return Se===void 0&&(Se=_(g()),ce[X]=Se),Se}function _(G){const J=[],fe=[],me=[];for(let X=0;X<i;X++)J[X]=0,fe[X]=0,me[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:fe,attributeDivisors:me,object:G,attributes:{},index:null}}function E(G,J,fe,me){const X=c.attributes,U=J.attributes;let I=0;const ee=fe.getAttributes();for(const ce in ee)if(ee[ce].location>=0){const L=X[ce];let Z=U[ce];if(Z===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),L===void 0||L.attribute!==Z||Z&&L.data!==Z.data)return!0;I++}return c.attributesNum!==I||c.index!==me}function T(G,J,fe,me){const X={},U=J.attributes;let I=0;const ee=fe.getAttributes();for(const ce in ee)if(ee[ce].location>=0){let L=U[ce];L===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(L=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(L=G.instanceColor));const Z={};Z.attribute=L,L&&L.data&&(Z.data=L.data),X[ce]=Z,I++}c.attributes=X,c.attributesNum=I,c.index=me}function w(){const G=c.newAttributes;for(let J=0,fe=G.length;J<fe;J++)G[J]=0}function y(G){M(G,0)}function M(G,J){const fe=c.newAttributes,me=c.enabledAttributes,X=c.attributeDivisors;fe[G]=1,me[G]===0&&(r.enableVertexAttribArray(G),me[G]=1),X[G]!==J&&(r.vertexAttribDivisor(G,J),X[G]=J)}function D(){const G=c.newAttributes,J=c.enabledAttributes;for(let fe=0,me=J.length;fe<me;fe++)J[fe]!==G[fe]&&(r.disableVertexAttribArray(fe),J[fe]=0)}function P(G,J,fe,me,X,U,I){I===!0?r.vertexAttribIPointer(G,J,fe,X,U):r.vertexAttribPointer(G,J,fe,me,X,U)}function B(G,J,fe,me){w();const X=me.attributes,U=fe.getAttributes(),I=J.defaultAttributeValues;for(const ee in U){const ce=U[ee];if(ce.location>=0){let Se=X[ee];if(Se===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),Se!==void 0){const L=Se.normalized,Z=Se.itemSize,xe=t.get(Se);if(xe===void 0)continue;const ye=xe.buffer,Re=xe.type,se=xe.bytesPerElement,Me=Re===r.INT||Re===r.UNSIGNED_INT||Se.gpuType===Qh;if(Se.isInterleavedBufferAttribute){const Ee=Se.data,Fe=Ee.stride,Je=Se.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ze=0;Ze<ce.locationSize;Ze++)M(ce.location+Ze,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ze=0;Ze<ce.locationSize;Ze++)y(ce.location+Ze);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ze=0;Ze<ce.locationSize;Ze++)P(ce.location+Ze,Z/ce.locationSize,Re,L,Fe*se,(Je+Z/ce.locationSize*Ze)*se,Me)}else{if(Se.isInstancedBufferAttribute){for(let Ee=0;Ee<ce.locationSize;Ee++)M(ce.location+Ee,Se.meshPerAttribute);G.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ee=0;Ee<ce.locationSize;Ee++)y(ce.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ee=0;Ee<ce.locationSize;Ee++)P(ce.location+Ee,Z/ce.locationSize,Re,L,Z*se,Z/ce.locationSize*Ee*se,Me)}}else if(I!==void 0){const L=I[ee];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(ce.location,L);break;case 3:r.vertexAttrib3fv(ce.location,L);break;case 4:r.vertexAttrib4fv(ce.location,L);break;default:r.vertexAttrib1fv(ce.location,L)}}}}D()}function k(){F();for(const G in s){const J=s[G];for(const fe in J){const me=J[fe];for(const X in me){const U=me[X];for(const I in U)S(U[I].object),delete U[I];delete me[X]}}delete s[G]}}function O(G){if(s[G.id]===void 0)return;const J=s[G.id];for(const fe in J){const me=J[fe];for(const X in me){const U=me[X];for(const I in U)S(U[I].object),delete U[I];delete me[X]}}delete s[G.id]}function z(G){for(const J in s){const fe=s[J];for(const me in fe){const X=fe[me];if(X[G.id]===void 0)continue;const U=X[G.id];for(const I in U)S(U[I].object),delete U[I];delete X[G.id]}}}function A(G){for(const J in s){const fe=s[J],me=G.isInstancedMesh===!0?G.id:0,X=fe[me];if(X!==void 0){for(const U in X){const I=X[U];for(const ee in I)S(I[ee].object),delete I[ee];delete X[U]}delete fe[me],Object.keys(fe).length===0&&delete s[J]}}}function F(){K(),d=!0,c!==l&&(c=l,h(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:F,resetDefaultState:K,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:D}}function wb(r,t,i){let s;function l(g){s=g}function c(g,h){r.drawArrays(s,g,h),i.update(h,s,1)}function d(g,h,S){S!==0&&(r.drawArraysInstanced(s,g,h,S),i.update(h,s,S))}function p(g,h,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,h,0,S);let _=0;for(let E=0;E<S;E++)_+=h[E];i.update(_,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function Nb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ui&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const A=z===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Mi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ji&&!A)}function g(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=g(h);S!==h&&(et("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),M=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),B=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:B,maxSamples:k,samples:O}}function Db(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Ns,p=new st,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const E=x.length!==0||_||s!==0||l;return l=_,s=x.length,E},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=S(x,_,0)},this.setState=function(x,_,E){const T=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,M=r.get(x);if(!l||T===null||T.length===0||c&&!y)c?S(null):h();else{const D=c?0:s,P=D*4;let B=M.clippingState||null;g.value=B,B=S(T,_,P,E);for(let k=0;k!==P;++k)B[k]=i[k];M.clippingState=B,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function h(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(x,_,E,T){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=g.value,T!==!0||y===null){const M=E+w*4,D=_.matrixWorldInverse;p.getNormalMatrix(D),(y===null||y.length<M)&&(y=new Float32Array(M));for(let P=0,B=E;P!==w;++P,B+=4)d.copy(x[P]).applyMatrix4(D,p),d.normal.toArray(y,B),y[B+3]=d.constant}g.value=y,g.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}const ss=4,H_=[.125,.215,.35,.446,.526,.582],Us=20,Ub=256,Zo=new cp,G_=new Ut;let Qd=null,Jd=0,$d=0,eh=!1;const Lb=new $;class V_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=Lb}=c;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,l,g,p),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qd,Jd,$d),this._renderer.xr.enabled=eh,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ps||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ma,format:Ui,colorSpace:iu,depthBuffer:!1},l=j_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ob(c)),this._blurMaterial=Bb(c,t,i),this._ggxMaterial=Pb(c,t,i)}return l}_compileMaterial(t){const i=new Ei(new Kn,t);this._renderer.compile(i,Zo)}_sceneToCubeUV(t,i,s,l,c){const g=new Si(90,1,i,s),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,E=x.toneMapping;x.getClearColor(G_),x.toneMapping=Xi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ei(new Wr,new fu({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,M=!0):(y.color.copy(G_),M=!0);for(let P=0;P<6;P++){const B=P%3;B===0?(g.up.set(0,h[P],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+S[P],c.y,c.z)):B===1?(g.up.set(0,0,h[P]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+S[P],c.z)):(g.up.set(0,h[P],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+S[P]));const k=this._cubeSize;Nr(l,B*k,P>2?k:0,k,k),x.setRenderTarget(l),M&&x.render(w,g),x.render(t,g)}x.toneMapping=E,x.autoClear=_,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ps||t.mapping===Hr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=X_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const g=this._cubeSize;Nr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,Zo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const g=d.uniforms,h=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-S*S),_=0+h*1.25,E=x*_,{_lodMax:T}=this,w=this._sizeLods[s],y=3*w*(s>T-ss?s-T+ss:0),M=4*(this._cubeSize-w);g.envMap.value=t.texture,g.roughness.value=E,g.mipInt.value=T-i,Nr(c,y,M,3*w,2*w),l.setRenderTarget(c),l.render(p,Zo),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=T-s,Nr(t,y,M,3*w,2*w),l.setRenderTarget(t),l.render(p,Zo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const g=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=h;const _=h.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Us-1),w=c/T,y=isFinite(c)?1+Math.floor(S*w):Us;y>Us&&et(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const M=[];let D=0;for(let z=0;z<Us;++z){const A=z/w,F=Math.exp(-A*A/2);M.push(F),z===0?D+=F:z<y&&(D+=2*F)}for(let z=0;z<M.length;z++)M[z]=M[z]/D;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=M,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=T,_.mipInt.value=P-s;const B=this._sizeLods[l],k=3*B*(l>P-ss?l-P+ss:0),O=4*(this._cubeSize-B);Nr(i,k,O,3*B,2*B),g.setRenderTarget(i),g.render(x,Zo)}}function Ob(r){const t=[],i=[],s=[];let l=r;const c=r-ss+1+H_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let g=1/p;d>r-ss?g=H_[d-r+ss-1]:d===0&&(g=0),i.push(g);const h=1/(p-2),S=-h,x=1+h,_=[S,S,x,S,x,x,S,S,x,x,S,x],E=6,T=6,w=3,y=2,M=1,D=new Float32Array(w*T*E),P=new Float32Array(y*T*E),B=new Float32Array(M*T*E);for(let O=0;O<E;O++){const z=O%3*2/3-1,A=O>2?0:-1,F=[z,A,0,z+2/3,A,0,z+2/3,A+1,0,z,A,0,z+2/3,A+1,0,z,A+1,0];D.set(F,w*T*O),P.set(_,y*T*O);const K=[O,O,O,O,O,O];B.set(K,M*T*O)}const k=new Kn;k.setAttribute("position",new Li(D,w)),k.setAttribute("uv",new Li(P,y)),k.setAttribute("faceIndex",new Li(B,M)),s.push(new Ei(k,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function j_(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Pb(r,t,i){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ub,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Bb(r,t,i){const s=new Float32Array(Us),l=new $(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function k_(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function X_(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Iv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Wr(5,5,5),c=new Oi({name:"CubemapFromEquirect",uniforms:Vr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:xa});c.uniforms.tEquirect.value=i;const d=new Ei(l,c),p=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Bn),new Gy(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function Fb(r){let t=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?d(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===bd||E===Td)if(t.has(_)){const T=t.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const w=new Xv(T.height);return w.fromEquirectangularTexture(r,_),t.set(_,w),_.addEventListener("dispose",h),p(w.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const E=_.mapping,T=E===bd||E===Td,w=E===Ps||E===Hr;if(T||w){let y=i.get(_);const M=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return s===null&&(s=new V_(r)),y=T?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const D=_.image;return T&&D&&D.height>0||w&&D&&g(D)?(s===null&&(s=new V_(r)),y=T?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",S),y.texture):null}}}return _}function p(_,E){return E===bd?_.mapping=Ps:E===Td&&(_.mapping=Hr),_}function g(_){let E=0;const T=6;for(let w=0;w<T;w++)_[w]!==void 0&&E++;return E===T}function h(_){const E=_.target;E.removeEventListener("dispose",h);const T=t.get(E);T!==void 0&&(t.delete(E),T.dispose())}function S(_){const E=_.target;E.removeEventListener("dispose",S);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function zb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xh("WebGLRenderer: "+s+" extension not supported."),l}}}function Ib(r,t,i,s){const l={},c=new WeakMap;function d(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const T in _.attributes)t.remove(_.attributes[T]);_.removeEventListener("dispose",d),delete l[_.id];const E=c.get(_);E&&(t.remove(E),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function g(x){const _=x.attributes;for(const E in _)t.update(_[E],r.ARRAY_BUFFER)}function h(x){const _=[],E=x.index,T=x.attributes.position;let w=0;if(T===void 0)return;if(E!==null){const D=E.array;w=E.version;for(let P=0,B=D.length;P<B;P+=3){const k=D[P+0],O=D[P+1],z=D[P+2];_.push(k,O,O,z,z,k)}}else{const D=T.array;w=T.version;for(let P=0,B=D.length/3-1;P<B;P+=3){const k=P+0,O=P+1,z=P+2;_.push(k,O,O,z,z,k)}}const y=new(T.count>=65535?Pv:Ov)(_,1);y.version=w;const M=c.get(x);M&&t.remove(M),c.set(x,y)}function S(x){const _=c.get(x);if(_){const E=x.index;E!==null&&_.version<E.version&&h(x)}else h(x);return c.get(x)}return{get:p,update:g,getWireframeAttribute:S}}function Hb(r,t,i){let s;function l(x){s=x}let c,d;function p(x){c=x.type,d=x.bytesPerElement}function g(x,_){r.drawElements(s,_,c,x*d),i.update(_,s,1)}function h(x,_,E){E!==0&&(r.drawElementsInstanced(s,_,c,x*d,E),i.update(_,s,E))}function S(x,_,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,c,x,0,E);let w=0;for(let y=0;y<E;y++)w+=_[y];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=h,this.renderMultiDraw=S}function Gb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Et("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Vb(r,t,i){const s=new WeakMap,l=new cn;function c(d,p,g){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let _=s.get(p);if(_===void 0||_.count!==x){let K=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",K)};var E=K;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let B=0;T===!0&&(B=1),w===!0&&(B=2),y===!0&&(B=3);let k=p.attributes.position.count*B,O=1;k>t.maxTextureSize&&(O=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const z=new Float32Array(k*O*4*x),A=new Dv(z,k,O,x);A.type=ji,A.needsUpdate=!0;const F=B*4;for(let G=0;G<x;G++){const J=M[G],fe=D[G],me=P[G],X=k*O*4*G;for(let U=0;U<J.count;U++){const I=U*F;T===!0&&(l.fromBufferAttribute(J,U),z[X+I+0]=l.x,z[X+I+1]=l.y,z[X+I+2]=l.z,z[X+I+3]=0),w===!0&&(l.fromBufferAttribute(fe,U),z[X+I+4]=l.x,z[X+I+5]=l.y,z[X+I+6]=l.z,z[X+I+7]=0),y===!0&&(l.fromBufferAttribute(me,U),z[X+I+8]=l.x,z[X+I+9]=l.y,z[X+I+10]=l.z,z[X+I+11]=me.itemSize===4?l.w:1)}}_={count:x,texture:A,size:new jt(k,O)},s.set(p,_),p.addEventListener("dispose",K)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const w=p.morphTargetsRelative?1:1-T;g.getUniforms().setValue(r,"morphTargetBaseInfluence",w),g.getUniforms().setValue(r,"morphTargetInfluences",h)}g.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function jb(r,t,i,s,l){let c=new WeakMap;function d(h){const S=l.render.frame,x=h.geometry,_=t.get(h,x);if(c.get(_)!==S&&(t.update(_),c.set(_,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",g)===!1&&h.addEventListener("dispose",g),c.get(h)!==S&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,S))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==S&&(E.update(),c.set(E,S))}return _}function p(){c=new WeakMap}function g(h){const S=h.target;S.removeEventListener("dispose",g),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const kb={[mv]:"LINEAR_TONE_MAPPING",[gv]:"REINHARD_TONE_MAPPING",[_v]:"CINEON_TONE_MAPPING",[vv]:"ACES_FILMIC_TONE_MAPPING",[Sv]:"AGX_TONE_MAPPING",[Mv]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function Xb(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Gr(t,i):void 0}),d=new Wi(t,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),p=new Kn;p.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ci([0,2,0,0,2,0],2));const g=new zy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ei(p,g),S=new cp(-1,1,1,-1,0,1);let x=null,_=null,E=!1,T,w=null,y=[],M=!1;this.setSize=function(D,P){c.setSize(D,P),d.setSize(D,P);for(let B=0;B<y.length;B++){const k=y[B];k.setSize&&k.setSize(D,P)}},this.setEffects=function(D){y=D,M=y.length>0&&y[0].isRenderPass===!0;const P=c.width,B=c.height;for(let k=0;k<y.length;k++){const O=y[k];O.setSize&&O.setSize(P,B)}},this.begin=function(D,P){if(E||D.toneMapping===Xi&&y.length===0)return!1;if(w=P,P!==null){const B=P.width,k=P.height;(c.width!==B||c.height!==k)&&this.setSize(B,k)}return M===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Xi,!0},this.hasRenderPass=function(){return M},this.end=function(D,P){D.toneMapping=T,E=!0;let B=c,k=d;for(let O=0;O<y.length;O++){const z=y[O];if(z.enabled!==!1&&(z.render(D,k,B,P),z.needsSwap!==!1)){const A=B;B=k,k=A}}if(x!==D.outputColorSpace||_!==D.toneMapping){x=D.outputColorSpace,_=D.toneMapping,g.defines={},yt.getTransfer(x)===zt&&(g.defines.SRGB_TRANSFER="");const O=kb[_];O&&(g.defines[O]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=B.texture,D.setRenderTarget(w),D.render(h,S),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),g.dispose()}}const Wv=new Fn,qh=new Gr(1,1),qv=new Dv,Yv=new dy,Zv=new Iv,W_=[],q_=[],Y_=new Float32Array(16),Z_=new Float32Array(9),K_=new Float32Array(4);function Yr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=W_[l];if(c===void 0&&(c=new Float32Array(l),W_[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,r[d].toArray(c,p)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hu(r,t){let i=q_[t];i===void 0&&(i=new Int32Array(t),q_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Wb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function qb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function Yb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function Zb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function Kb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;K_.set(s),r.uniformMatrix2fv(this.addr,!1,K_),Sn(i,s)}}function Qb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;Z_.set(s),r.uniformMatrix3fv(this.addr,!1,Z_),Sn(i,s)}}function Jb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;Y_.set(s),r.uniformMatrix4fv(this.addr,!1,Y_),Sn(i,s)}}function $b(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function eT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function tT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function nT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function iT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function oT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(qh.compareFunction=i.isReversedDepthBuffer()?ap:ip,c=qh):c=Wv,i.setTexture2D(t||c,l)}function lT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Yv,l)}function cT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Zv,l)}function uT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||qv,l)}function fT(r){switch(r){case 5126:return Wb;case 35664:return qb;case 35665:return Yb;case 35666:return Zb;case 35674:return Kb;case 35675:return Qb;case 35676:return Jb;case 5124:case 35670:return $b;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return aT;case 36295:return sT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}function dT(r,t){r.uniform1fv(this.addr,t)}function hT(r,t){const i=Yr(t,this.size,2);r.uniform2fv(this.addr,i)}function pT(r,t){const i=Yr(t,this.size,3);r.uniform3fv(this.addr,i)}function mT(r,t){const i=Yr(t,this.size,4);r.uniform4fv(this.addr,i)}function gT(r,t){const i=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function _T(r,t){const i=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function vT(r,t){const i=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function xT(r,t){r.uniform1iv(this.addr,t)}function ST(r,t){r.uniform2iv(this.addr,t)}function MT(r,t){r.uniform3iv(this.addr,t)}function yT(r,t){r.uniform4iv(this.addr,t)}function ET(r,t){r.uniform1uiv(this.addr,t)}function bT(r,t){r.uniform2uiv(this.addr,t)}function TT(r,t){r.uniform3uiv(this.addr,t)}function AT(r,t){r.uniform4uiv(this.addr,t)}function RT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=qh:d=Wv;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function CT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Yv,c[d])}function wT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Zv,c[d])}function NT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||qv,c[d])}function DT(r){switch(r){case 5126:return dT;case 35664:return hT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return vT;case 5124:case 35670:return xT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return yT;case 5125:return ET;case 36294:return bT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return NT}}class UT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=fT(i.type)}}class LT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DT(i.type)}}class OT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const th=/(\w+)(\])?(\[|\.)?/g;function Q_(r,t){r.seq.push(t),r.map[t.id]=t}function PT(r,t,i){const s=r.name,l=s.length;for(th.lastIndex=0;;){const c=th.exec(s),d=th.lastIndex;let p=c[1];const g=c[2]==="]",h=c[3];if(g&&(p=p|0),h===void 0||h==="["&&d+2===l){Q_(i,h===void 0?new UT(p,r,t):new LT(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new OT(p),Q_(i,x)),i=x}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),g=t.getUniformLocation(i,p.name);PT(p,g,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],g=s[p.id];g.needsUpdate!==!1&&p.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function J_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const BT=37297;let FT=0;function zT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const $_=new st;function IT(r){yt._getMatrix($_,yt.workingColorSpace,r);const t=`mat3( ${$_.elements.map(i=>i.toFixed(4))} )`;switch(yt.getTransfer(r)){case au:return[t,"LinearTransferOETF"];case zt:return[t,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ev(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+zT(r.getShaderSource(t),p)}else return c}function HT(r,t){const i=IT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const GT={[mv]:"Linear",[gv]:"Reinhard",[_v]:"Cineon",[vv]:"ACESFilmic",[Sv]:"AgX",[Mv]:"Neutral",[xv]:"Custom"};function VT(r,t){const i=GT[t];return i===void 0?(et("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new $;function jT(){yt.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function XT(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function WT(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:p}}return i}function $o(r){return r!==""}function tv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(r){return r.replace(qT,ZT)}const YT=new Map;function ZT(r,t){let i=ft[t];if(i===void 0){const s=YT.get(t);if(s!==void 0)i=ft[s],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Yh(i)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iv(r){return r.replace(KT,QT)}function QT(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function av(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const JT={[Yc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function $T(r){return JT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eA={[Ps]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function tA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":eA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const nA={[Hr]:"ENVMAP_MODE_REFRACTION"};function iA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":nA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aA={[pv]:"ENVMAP_BLENDING_MULTIPLY",[NM]:"ENVMAP_BLENDING_MIX",[DM]:"ENVMAP_BLENDING_ADD"};function sA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":aA[r.combine]||"ENVMAP_BLENDING_NONE"}function rA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function oA(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const g=$T(i),h=tA(i),S=iA(i),x=sA(i),_=rA(i),E=kT(i),T=XT(c),w=l.createProgram();let y,M,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter($o).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter($o).join(`
`),M.length>0&&(M+=`
`)):(y=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),M=[av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Xi?VT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,HT("linearToOutputTexel",i.outputColorSpace),jT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),d=Yh(d),d=tv(d,i),d=nv(d,i),p=Yh(p),p=tv(p,i),p=nv(p,i),d=iv(d),p=iv(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=D+y+d,B=D+M+p,k=J_(l,l.VERTEX_SHADER,P),O=J_(l,l.FRAGMENT_SHADER,B);l.attachShader(w,k),l.attachShader(w,O),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(G){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",fe=l.getShaderInfoLog(k)||"",me=l.getShaderInfoLog(O)||"",X=J.trim(),U=fe.trim(),I=me.trim();let ee=!0,ce=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,k,O);else{const Se=ev(l,k,"vertex"),L=ev(l,O,"fragment");Et("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+Se+`
`+L)}else X!==""?et("WebGLProgram: Program Info Log:",X):(U===""||I==="")&&(ce=!1);ce&&(G.diagnostics={runnable:ee,programLog:X,vertexShader:{log:U,prefix:y},fragmentShader:{log:I,prefix:M}})}l.deleteShader(k),l.deleteShader(O),A=new $c(l,w),F=WT(l,w)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let F;this.getAttributes=function(){return F===void 0&&z(this),F};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(w,BT)),K},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=FT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=O,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new uA(t),i.set(t,s)),s}}class uA{constructor(t){this.id=lA++,this.code=t,this.usedTimes=0}}function fA(r){return r===Bs||r===tu||r===nu}function dA(r,t,i,s,l,c){const d=new Uv,p=new cA,g=new Set,h=[],S=new Map,x=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return g.add(A),A===0?"uv":`uv${A}`}function w(A,F,K,G,J,fe){const me=G.fog,X=J.geometry,U=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,I=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ee=t.get(A.envMap||U,I),ce=ee&&ee.mapping===uu?ee.image.height:null,Se=E[A.type];A.precision!==null&&(_=s.getMaxPrecision(A.precision),_!==A.precision&&et("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Z=L!==void 0?L.length:0;let xe=0;X.morphAttributes.position!==void 0&&(xe=1),X.morphAttributes.normal!==void 0&&(xe=2),X.morphAttributes.color!==void 0&&(xe=3);let ye,Re,se,Me;if(Se){const tt=Vi[Se];ye=tt.vertexShader,Re=tt.fragmentShader}else ye=A.vertexShader,Re=A.fragmentShader,p.update(A),se=p.getVertexShaderID(A),Me=p.getFragmentShaderID(A);const Ee=r.getRenderTarget(),Fe=r.state.buffers.depth.getReversed(),Je=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,Nt=!!A.map,rt=!!A.matcap,dt=!!ee,bt=!!A.aoMap,ct=!!A.lightMap,an=!!A.bumpMap,Wt=!!A.normalMap,En=!!A.displacementMap,W=!!A.emissiveMap,$t=!!A.metalnessMap,ht=!!A.roughnessMap,It=A.anisotropy>0,Ce=A.clearcoat>0,Zt=A.dispersion>0,N=A.iridescence>0,b=A.sheen>0,Q=A.transmission>0,_e=It&&!!A.anisotropyMap,Te=Ce&&!!A.clearcoatMap,we=Ce&&!!A.clearcoatNormalMap,Le=Ce&&!!A.clearcoatRoughnessMap,ue=N&&!!A.iridescenceMap,de=N&&!!A.iridescenceThicknessMap,Oe=b&&!!A.sheenColorMap,Pe=b&&!!A.sheenRoughnessMap,De=!!A.specularMap,Ne=!!A.specularColorMap,nt=!!A.specularIntensityMap,it=Q&&!!A.transmissionMap,pt=Q&&!!A.thicknessMap,V=!!A.gradientMap,Ae=!!A.alphaMap,pe=A.alphaTest>0,Ie=!!A.alphaHash,Ue=!!A.extensions;let be=Xi;A.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=r.toneMapping);const We={shaderID:Se,shaderType:A.type,shaderName:A.name,vertexShader:ye,fragmentShader:Re,defines:A.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:Je,instancingColor:Je&&J.instanceColor!==null,instancingMorph:Je&&J.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Nt,matcap:rt,envMap:dt,envMapMode:dt&&ee.mapping,envMapCubeUVHeight:ce,aoMap:bt,lightMap:ct,bumpMap:an,normalMap:Wt,displacementMap:En,emissiveMap:W,normalMapObjectSpace:Wt&&A.normalMapType===OM,normalMapTangentSpace:Wt&&A.normalMapType===r_,packedNormalMap:Wt&&A.normalMapType===r_&&fA(A.normalMap.format),metalnessMap:$t,roughnessMap:ht,anisotropy:It,anisotropyMap:_e,clearcoat:Ce,clearcoatMap:Te,clearcoatNormalMap:we,clearcoatRoughnessMap:Le,dispersion:Zt,iridescence:N,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:b,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Ne,specularIntensityMap:nt,transmission:Q,transmissionMap:it,thicknessMap:pt,gradientMap:V,opaque:A.transparent===!1&&A.blending===Br&&A.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:Ie,combine:A.combine,mapUv:Nt&&T(A.map.channel),aoMapUv:bt&&T(A.aoMap.channel),lightMapUv:ct&&T(A.lightMap.channel),bumpMapUv:an&&T(A.bumpMap.channel),normalMapUv:Wt&&T(A.normalMap.channel),displacementMapUv:En&&T(A.displacementMap.channel),emissiveMapUv:W&&T(A.emissiveMap.channel),metalnessMapUv:$t&&T(A.metalnessMap.channel),roughnessMapUv:ht&&T(A.roughnessMap.channel),anisotropyMapUv:_e&&T(A.anisotropyMap.channel),clearcoatMapUv:Te&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(A.sheenRoughnessMap.channel),specularMapUv:De&&T(A.specularMap.channel),specularColorMapUv:Ne&&T(A.specularColorMap.channel),specularIntensityMapUv:nt&&T(A.specularIntensityMap.channel),transmissionMapUv:it&&T(A.transmissionMap.channel),thicknessMapUv:pt&&T(A.thicknessMap.channel),alphaMapUv:Ae&&T(A.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Wt||It),vertexNormals:!!X.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!X.attributes.uv&&(Nt||Ae),fog:!!me,useFog:A.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||X.attributes.normal===void 0&&Wt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Fe,skinning:J.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:xe,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:Nt&&A.map.isVideoTexture===!0&&yt.getTransfer(A.map.colorSpace)===zt,decodeVideoTextureEmissive:W&&A.emissiveMap.isVideoTexture===!0&&yt.getTransfer(A.emissiveMap.colorSpace)===zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===_a,flipSided:A.side===Zn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ue&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&A.extensions.multiDraw===!0||Ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return We.vertexUv1s=g.has(1),We.vertexUv2s=g.has(2),We.vertexUv3s=g.has(3),g.clear(),We}function y(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const K in A.defines)F.push(K),F.push(A.defines[K]);return A.isRawShaderMaterial===!1&&(M(F,A),D(F,A),F.push(r.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function M(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function D(A,F){d.disableAll(),F.instancing&&d.enable(0),F.instancingColor&&d.enable(1),F.instancingMorph&&d.enable(2),F.matcap&&d.enable(3),F.envMap&&d.enable(4),F.normalMapObjectSpace&&d.enable(5),F.normalMapTangentSpace&&d.enable(6),F.clearcoat&&d.enable(7),F.iridescence&&d.enable(8),F.alphaTest&&d.enable(9),F.vertexColors&&d.enable(10),F.vertexAlphas&&d.enable(11),F.vertexUv1s&&d.enable(12),F.vertexUv2s&&d.enable(13),F.vertexUv3s&&d.enable(14),F.vertexTangents&&d.enable(15),F.anisotropy&&d.enable(16),F.alphaHash&&d.enable(17),F.batching&&d.enable(18),F.dispersion&&d.enable(19),F.batchingColor&&d.enable(20),F.gradientMap&&d.enable(21),F.packedNormalMap&&d.enable(22),F.vertexNormals&&d.enable(23),A.push(d.mask),d.disableAll(),F.fog&&d.enable(0),F.useFog&&d.enable(1),F.flatShading&&d.enable(2),F.logarithmicDepthBuffer&&d.enable(3),F.reversedDepthBuffer&&d.enable(4),F.skinning&&d.enable(5),F.morphTargets&&d.enable(6),F.morphNormals&&d.enable(7),F.morphColors&&d.enable(8),F.premultipliedAlpha&&d.enable(9),F.shadowMapEnabled&&d.enable(10),F.doubleSided&&d.enable(11),F.flipSided&&d.enable(12),F.useDepthPacking&&d.enable(13),F.dithering&&d.enable(14),F.transmission&&d.enable(15),F.sheen&&d.enable(16),F.opaque&&d.enable(17),F.pointsUvs&&d.enable(18),F.decodeVideoTexture&&d.enable(19),F.decodeVideoTextureEmissive&&d.enable(20),F.alphaToCoverage&&d.enable(21),F.numLightProbeGrids>0&&d.enable(22),A.push(d.mask)}function P(A){const F=E[A.type];let K;if(F){const G=Vi[F];K=Py.clone(G.uniforms)}else K=A.uniforms;return K}function B(A,F){let K=S.get(F);return K!==void 0?++K.usedTimes:(K=new oA(r,F,A,l),h.push(K),S.set(F,K)),K}function k(A){if(--A.usedTimes===0){const F=h.indexOf(A);h[F]=h[h.length-1],h.pop(),S.delete(A.cacheKey),A.destroy()}}function O(A){p.remove(A)}function z(){p.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:P,acquireProgram:B,releaseProgram:k,releaseShaderCache:O,programs:h,dispose:z}}function hA(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,g){r.get(d)[p]=g}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function pA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function sv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,T,w,y,M){let D=r[t];return D===void 0?(D={id:_.id,object:_,geometry:E,material:T,materialVariant:d(_),groupOrder:w,renderOrder:_.renderOrder,z:y,group:M},r[t]=D):(D.id=_.id,D.object=_,D.geometry=E,D.material=T,D.materialVariant=d(_),D.groupOrder=w,D.renderOrder=_.renderOrder,D.z=y,D.group=M),t++,D}function g(_,E,T,w,y,M){const D=p(_,E,T,w,y,M);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function h(_,E,T,w,y,M){const D=p(_,E,T,w,y,M);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function S(_,E){i.length>1&&i.sort(_||pA),s.length>1&&s.sort(E||sv),l.length>1&&l.sort(E||sv)}function x(){for(let _=t,E=r.length;_<E;_++){const T=r[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:h,finish:x,sort:S}}function mA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new rv,r.set(s,[d])):l>=c.length?(d=new rv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function gA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Ut};break;case"SpotLight":i={position:new $,direction:new $,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=i,i}}}function _A(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let vA=0;function xA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function SA(r){const t=new gA,i=_A(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new $);const l=new $,c=new un,d=new un;function p(h){let S=0,x=0,_=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let E=0,T=0,w=0,y=0,M=0,D=0,P=0,B=0,k=0,O=0,z=0;h.sort(xA);for(let F=0,K=h.length;F<K;F++){const G=h[F],J=G.color,fe=G.intensity,me=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Bs?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=J.r*fe,x+=J.g*fe,_+=J.b*fe;else if(G.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(G.sh.coefficients[U],fe);z++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const I=G.shadow,ee=i.get(G);ee.shadowIntensity=I.intensity,ee.shadowBias=I.bias,ee.shadowNormalBias=I.normalBias,ee.shadowRadius=I.radius,ee.shadowMapSize=I.mapSize,s.directionalShadow[E]=ee,s.directionalShadowMap[E]=X,s.directionalShadowMatrix[E]=G.shadow.matrix,D++}s.directional[E]=U,E++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(J).multiplyScalar(fe),U.distance=me,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,s.spot[w]=U;const I=G.shadow;if(G.map&&(s.spotLightMap[k]=G.map,k++,I.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[w]=I.matrix,G.castShadow){const ee=i.get(G);ee.shadowIntensity=I.intensity,ee.shadowBias=I.bias,ee.shadowNormalBias=I.normalBias,ee.shadowRadius=I.radius,ee.shadowMapSize=I.mapSize,s.spotShadow[w]=ee,s.spotShadowMap[w]=X,B++}w++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(J).multiplyScalar(fe),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=U,y++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const I=G.shadow,ee=i.get(G);ee.shadowIntensity=I.intensity,ee.shadowBias=I.bias,ee.shadowNormalBias=I.normalBias,ee.shadowRadius=I.radius,ee.shadowMapSize=I.mapSize,ee.shadowCameraNear=I.camera.near,ee.shadowCameraFar=I.camera.far,s.pointShadow[T]=ee,s.pointShadowMap[T]=X,s.pointShadowMatrix[T]=G.shadow.matrix,P++}s.point[T]=U,T++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar(fe),U.groundColor.copy(G.groundColor).multiplyScalar(fe),s.hemi[M]=U,M++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=x,s.ambient[2]=_;const A=s.hash;(A.directionalLength!==E||A.pointLength!==T||A.spotLength!==w||A.rectAreaLength!==y||A.hemiLength!==M||A.numDirectionalShadows!==D||A.numPointShadows!==P||A.numSpotShadows!==B||A.numSpotMaps!==k||A.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=y,s.point.length=T,s.hemi.length=M,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=B+k-O,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=z,A.directionalLength=E,A.pointLength=T,A.spotLength=w,A.rectAreaLength=y,A.hemiLength=M,A.numDirectionalShadows=D,A.numPointShadows=P,A.numSpotShadows=B,A.numSpotMaps=k,A.numLightProbes=z,s.version=vA++)}function g(h,S){let x=0,_=0,E=0,T=0,w=0;const y=S.matrixWorldInverse;for(let M=0,D=h.length;M<D;M++){const P=h[M];if(P.isDirectionalLight){const B=s.directional[x];B.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(y),x++}else if(P.isSpotLight){const B=s.spot[E];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(y),B.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(y),E++}else if(P.isRectAreaLight){const B=s.rectArea[T];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(y),d.identity(),c.copy(P.matrixWorld),c.premultiply(y),d.extractRotation(c),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),B.halfWidth.applyMatrix4(d),B.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const B=s.point[_];B.position.setFromMatrixPosition(P.matrixWorld),B.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const B=s.hemi[w];B.direction.setFromMatrixPosition(P.matrixWorld),B.direction.transformDirection(y),w++}}}return{setup:p,setupView:g,state:s}}function ov(r){const t=new SA(r),i=[],s=[],l=[];function c(_){x.camera=_,i.length=0,s.length=0,l.length=0}function d(_){i.push(_)}function p(_){s.push(_)}function g(_){l.push(_)}function h(){t.setup(i)}function S(_){t.setupView(i,_)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:g}}function MA(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new ov(r),t.set(l,[p])):c>=d.length?(p=new ov(r),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],TA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],lv=new un,Ko=new $,nh=new $;function AA(r,t,i){let s=new Bv;const l=new jt,c=new jt,d=new cn,p=new Iy,g=new Hy,h={},S=i.maxTextureSize,x={[rs]:Zn,[Zn]:rs,[_a]:_a},_=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:yA,fragmentShader:EA}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new Kn;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ei(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let M=this.type;this.render=function(O,z,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===fM&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yc);const F=r.getRenderTarget(),K=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),J=r.state;J.setBlending(xa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const fe=M!==this.type;fe&&z.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(X=>X.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,X=O.length;me<X;me++){const U=O[me],I=U.shadow;if(I===void 0){et("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ee=I.getFrameExtents();l.multiply(ee),c.copy(I.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/ee.x),l.x=c.x*ee.x,I.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/ee.y),l.y=c.y*ee.y,I.mapSize.y=c.y));const ce=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ce,I.map===null||fe===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Qo){if(U.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Wi(l.x,l.y,{format:Bs,type:Ma,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new Gr(l.x,l.y,ji),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=ya,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn}else U.isPointLight?(I.map=new Xv(l.x),I.map.depthTexture=new Uy(l.x,qi)):(I.map=new Wi(l.x,l.y),I.map.depthTexture=new Gr(l.x,l.y,qi)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=ya,this.type===Yc?(I.map.depthTexture.compareFunction=ce?ap:ip,I.map.depthTexture.minFilter=Bn,I.map.depthTexture.magFilter=Bn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn);I.camera.updateProjectionMatrix()}const Se=I.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Se;L++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,L),r.clear();else{L===0&&(r.setRenderTarget(I.map),r.clear());const Z=I.getViewport(L);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),J.viewport(d)}if(U.isPointLight){const Z=I.camera,xe=I.matrix,ye=U.distance||Z.far;ye!==Z.far&&(Z.far=ye,Z.updateProjectionMatrix()),Ko.setFromMatrixPosition(U.matrixWorld),Z.position.copy(Ko),nh.copy(Z.position),nh.add(bA[L]),Z.up.copy(TA[L]),Z.lookAt(nh),Z.updateMatrixWorld(),xe.makeTranslation(-Ko.x,-Ko.y,-Ko.z),lv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),I._frustum.setFromProjectionMatrix(lv,Z.coordinateSystem,Z.reversedDepth)}else I.updateMatrices(U);s=I.getFrustum(),B(z,A,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===Qo&&D(I,A),I.needsUpdate=!1}M=this.type,y.needsUpdate=!1,r.setRenderTarget(F,K,G)};function D(O,z){const A=t.update(w);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Wi(l.x,l.y,{format:Bs,type:Ma})),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(z,null,A,_,w,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(z,null,A,E,w,null)}function P(O,z,A,F){let K=null;const G=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)K=G;else if(K=A.isPointLight===!0?g:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=K.uuid,fe=z.uuid;let me=h[J];me===void 0&&(me={},h[J]=me);let X=me[fe];X===void 0&&(X=K.clone(),me[fe]=X,z.addEventListener("dispose",k)),K=X}if(K.visible=z.visible,K.wireframe=z.wireframe,F===Qo?K.side=z.shadowSide!==null?z.shadowSide:z.side:K.side=z.shadowSide!==null?z.shadowSide:x[z.side],K.alphaMap=z.alphaMap,K.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,K.map=z.map,K.clipShadows=z.clipShadows,K.clippingPlanes=z.clippingPlanes,K.clipIntersection=z.clipIntersection,K.displacementMap=z.displacementMap,K.displacementScale=z.displacementScale,K.displacementBias=z.displacementBias,K.wireframeLinewidth=z.wireframeLinewidth,K.linewidth=z.linewidth,A.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const J=r.properties.get(K);J.light=A}return K}function B(O,z,A,F,K){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&K===Qo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);const fe=t.update(O),me=O.material;if(Array.isArray(me)){const X=fe.groups;for(let U=0,I=X.length;U<I;U++){const ee=X[U],ce=me[ee.materialIndex];if(ce&&ce.visible){const Se=P(O,ce,F,K);O.onBeforeShadow(r,O,z,A,fe,Se,ee),r.renderBufferDirect(A,null,fe,Se,O,ee),O.onAfterShadow(r,O,z,A,fe,Se,ee)}}}else if(me.visible){const X=P(O,me,F,K);O.onBeforeShadow(r,O,z,A,fe,X,null),r.renderBufferDirect(A,null,fe,X,O,null),O.onAfterShadow(r,O,z,A,fe,X,null)}}const J=O.children;for(let fe=0,me=J.length;fe<me;fe++)B(J[fe],z,A,F,K)}function k(O){O.target.removeEventListener("dispose",k);for(const A in h){const F=h[A],K=O.target.uuid;K in F&&(F[K].dispose(),delete F[K])}}}function RA(r,t){function i(){let V=!1;const Ae=new cn;let pe=null;const Ie=new cn(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!V&&(r.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,be,We,tt,en){en===!0&&(Ue*=tt,be*=tt,We*=tt),Ae.set(Ue,be,We,tt),Ie.equals(Ae)===!1&&(r.clearColor(Ue,be,We,tt),Ie.copy(Ae))},reset:function(){V=!1,pe=null,Ie.set(-1,0,0,0)}}}function s(){let V=!1,Ae=!1,pe=null,Ie=null,Ue=null;return{setReversed:function(be){if(Ae!==be){const We=t.get("EXT_clip_control");be?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=be;const tt=Ue;Ue=null,this.setClear(tt)}},getReversed:function(){return Ae},setTest:function(be){be?Ee(r.DEPTH_TEST):Fe(r.DEPTH_TEST)},setMask:function(be){pe!==be&&!V&&(r.depthMask(be),pe=be)},setFunc:function(be){if(Ae&&(be=kM[be]),Ie!==be){switch(be){case rh:r.depthFunc(r.NEVER);break;case oh:r.depthFunc(r.ALWAYS);break;case lh:r.depthFunc(r.LESS);break;case Ir:r.depthFunc(r.LEQUAL);break;case ch:r.depthFunc(r.EQUAL);break;case uh:r.depthFunc(r.GEQUAL);break;case fh:r.depthFunc(r.GREATER);break;case dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=be}},setLocked:function(be){V=be},setClear:function(be){Ue!==be&&(Ue=be,Ae&&(be=1-be),r.clearDepth(be))},reset:function(){V=!1,pe=null,Ie=null,Ue=null,Ae=!1}}}function l(){let V=!1,Ae=null,pe=null,Ie=null,Ue=null,be=null,We=null,tt=null,en=null;return{setTest:function(Ct){V||(Ct?Ee(r.STENCIL_TEST):Fe(r.STENCIL_TEST))},setMask:function(Ct){Ae!==Ct&&!V&&(r.stencilMask(Ct),Ae=Ct)},setFunc:function(Ct,ui,Qn){(pe!==Ct||Ie!==ui||Ue!==Qn)&&(r.stencilFunc(Ct,ui,Qn),pe=Ct,Ie=ui,Ue=Qn)},setOp:function(Ct,ui,Qn){(be!==Ct||We!==ui||tt!==Qn)&&(r.stencilOp(Ct,ui,Qn),be=Ct,We=ui,tt=Qn)},setLocked:function(Ct){V=Ct},setClear:function(Ct){en!==Ct&&(r.clearStencil(Ct),en=Ct)},reset:function(){V=!1,Ae=null,pe=null,Ie=null,Ue=null,be=null,We=null,tt=null,en=null}}}const c=new i,d=new s,p=new l,g=new WeakMap,h=new WeakMap;let S={},x={},_={},E=new WeakMap,T=[],w=null,y=!1,M=null,D=null,P=null,B=null,k=null,O=null,z=null,A=new Ut(0,0,0),F=0,K=!1,G=null,J=null,fe=null,me=null,X=null;const U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,ee=0;const ce=r.getParameter(r.VERSION);ce.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ce)[1]),I=ee>=1):ce.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),I=ee>=2);let Se=null,L={};const Z=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),ye=new cn().fromArray(Z),Re=new cn().fromArray(xe);function se(V,Ae,pe,Ie){const Ue=new Uint8Array(4),be=r.createTexture();r.bindTexture(V,be),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<pe;We++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Ae+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return be}const Me={};Me[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ee(r.DEPTH_TEST),d.setFunc(Ir),an(!1),Wt(i_),Ee(r.CULL_FACE),bt(xa);function Ee(V){S[V]!==!0&&(r.enable(V),S[V]=!0)}function Fe(V){S[V]!==!1&&(r.disable(V),S[V]=!1)}function Je(V,Ae){return _[V]!==Ae?(r.bindFramebuffer(V,Ae),_[V]=Ae,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ae),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ze(V,Ae){let pe=T,Ie=!1;if(V){pe=E.get(Ae),pe===void 0&&(pe=[],E.set(Ae,pe));const Ue=V.textures;if(pe.length!==Ue.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let be=0,We=Ue.length;be<We;be++)pe[be]=r.COLOR_ATTACHMENT0+be;pe.length=Ue.length,Ie=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(pe)}function Nt(V){return w!==V?(r.useProgram(V),w=V,!0):!1}const rt={[Ds]:r.FUNC_ADD,[hM]:r.FUNC_SUBTRACT,[pM]:r.FUNC_REVERSE_SUBTRACT};rt[mM]=r.MIN,rt[gM]=r.MAX;const dt={[_M]:r.ZERO,[vM]:r.ONE,[xM]:r.SRC_COLOR,[ah]:r.SRC_ALPHA,[TM]:r.SRC_ALPHA_SATURATE,[EM]:r.DST_COLOR,[MM]:r.DST_ALPHA,[SM]:r.ONE_MINUS_SRC_COLOR,[sh]:r.ONE_MINUS_SRC_ALPHA,[bM]:r.ONE_MINUS_DST_COLOR,[yM]:r.ONE_MINUS_DST_ALPHA,[AM]:r.CONSTANT_COLOR,[RM]:r.ONE_MINUS_CONSTANT_COLOR,[CM]:r.CONSTANT_ALPHA,[wM]:r.ONE_MINUS_CONSTANT_ALPHA};function bt(V,Ae,pe,Ie,Ue,be,We,tt,en,Ct){if(V===xa){y===!0&&(Fe(r.BLEND),y=!1);return}if(y===!1&&(Ee(r.BLEND),y=!0),V!==dM){if(V!==M||Ct!==K){if((D!==Ds||k!==Ds)&&(r.blendEquation(r.FUNC_ADD),D=Ds,k=Ds),Ct)switch(V){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eu:r.blendFunc(r.ONE,r.ONE);break;case a_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case s_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Et("WebGLState: Invalid blending: ",V);break}else switch(V){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case a_:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s_:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",V);break}P=null,B=null,O=null,z=null,A.set(0,0,0),F=0,M=V,K=Ct}return}Ue=Ue||Ae,be=be||pe,We=We||Ie,(Ae!==D||Ue!==k)&&(r.blendEquationSeparate(rt[Ae],rt[Ue]),D=Ae,k=Ue),(pe!==P||Ie!==B||be!==O||We!==z)&&(r.blendFuncSeparate(dt[pe],dt[Ie],dt[be],dt[We]),P=pe,B=Ie,O=be,z=We),(tt.equals(A)===!1||en!==F)&&(r.blendColor(tt.r,tt.g,tt.b,en),A.copy(tt),F=en),M=V,K=!1}function ct(V,Ae){V.side===_a?Fe(r.CULL_FACE):Ee(r.CULL_FACE);let pe=V.side===Zn;Ae&&(pe=!pe),an(pe),V.blending===Br&&V.transparent===!1?bt(xa):bt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ie=V.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),W(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function an(V){G!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),G=V)}function Wt(V){V!==cM?(Ee(r.CULL_FACE),V!==J&&(V===i_?r.cullFace(r.BACK):V===uM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Fe(r.CULL_FACE),J=V}function En(V){V!==fe&&(I&&r.lineWidth(V),fe=V)}function W(V,Ae,pe){V?(Ee(r.POLYGON_OFFSET_FILL),(me!==Ae||X!==pe)&&(me=Ae,X=pe,d.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,pe))):Fe(r.POLYGON_OFFSET_FILL)}function $t(V){V?Ee(r.SCISSOR_TEST):Fe(r.SCISSOR_TEST)}function ht(V){V===void 0&&(V=r.TEXTURE0+U-1),Se!==V&&(r.activeTexture(V),Se=V)}function It(V,Ae,pe){pe===void 0&&(Se===null?pe=r.TEXTURE0+U-1:pe=Se);let Ie=L[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},L[pe]=Ie),(Ie.type!==V||Ie.texture!==Ae)&&(Se!==pe&&(r.activeTexture(pe),Se=pe),r.bindTexture(V,Ae||Me[V]),Ie.type=V,Ie.texture=Ae)}function Ce(){const V=L[Se];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Zt(){try{r.compressedTexImage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function b(){try{r.texSubImage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function Q(){try{r.texSubImage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function _e(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function Te(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function we(){try{r.texStorage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function Le(){try{r.texStorage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function ue(){try{r.texImage2D(...arguments)}catch(V){Et("WebGLState:",V)}}function de(){try{r.texImage3D(...arguments)}catch(V){Et("WebGLState:",V)}}function Oe(V){return x[V]!==void 0?x[V]:r.getParameter(V)}function Pe(V,Ae){x[V]!==Ae&&(r.pixelStorei(V,Ae),x[V]=Ae)}function De(V){ye.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ye.copy(V))}function Ne(V){Re.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Re.copy(V))}function nt(V,Ae){let pe=h.get(Ae);pe===void 0&&(pe=new WeakMap,h.set(Ae,pe));let Ie=pe.get(V);Ie===void 0&&(Ie=r.getUniformBlockIndex(Ae,V.name),pe.set(V,Ie))}function it(V,Ae){const Ie=h.get(Ae).get(V);g.get(Ae)!==Ie&&(r.uniformBlockBinding(Ae,Ie,V.__bindingPointIndex),g.set(Ae,Ie))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),S={},x={},Se=null,L={},_={},E=new WeakMap,T=[],w=null,y=!1,M=null,D=null,P=null,B=null,k=null,O=null,z=null,A=new Ut(0,0,0),F=0,K=!1,G=null,J=null,fe=null,me=null,X=null,ye.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ee,disable:Fe,bindFramebuffer:Je,drawBuffers:Ze,useProgram:Nt,setBlending:bt,setMaterial:ct,setFlipSided:an,setCullFace:Wt,setLineWidth:En,setPolygonOffset:W,setScissorTest:$t,activeTexture:ht,bindTexture:It,unbindTexture:Ce,compressedTexImage2D:Zt,compressedTexImage3D:N,texImage2D:ue,texImage3D:de,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:we,texStorage3D:Le,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:_e,compressedTexSubImage3D:Te,scissor:De,viewport:Ne,reset:pt}}function CA(r,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new jt,S=new WeakMap,x=new Set;let _;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,b){return T?new OffscreenCanvas(N,b):ru("canvas")}function y(N,b,Q){let _e=1;const Te=Zt(N);if((Te.width>Q||Te.height>Q)&&(_e=Q/Math.max(Te.width,Te.height)),_e<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const we=Math.floor(_e*Te.width),Le=Math.floor(_e*Te.height);_===void 0&&(_=w(we,Le));const ue=b?w(we,Le):_;return ue.width=we,ue.height=Le,ue.getContext("2d").drawImage(N,0,0,we,Le),et("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+we+"x"+Le+")."),ue}else return"data"in N&&et("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),N;return N}function M(N){return N.generateMipmaps}function D(N){r.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function B(N,b,Q,_e,Te,we=!1){if(N!==null){if(r[N]!==void 0)return r[N];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Le;_e&&(Le=t.get("EXT_texture_norm16"),Le||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=b;if(b===r.RED&&(Q===r.FLOAT&&(ue=r.R32F),Q===r.HALF_FLOAT&&(ue=r.R16F),Q===r.UNSIGNED_BYTE&&(ue=r.R8),Q===r.UNSIGNED_SHORT&&Le&&(ue=Le.R16_EXT),Q===r.SHORT&&Le&&(ue=Le.R16_SNORM_EXT)),b===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.R8UI),Q===r.UNSIGNED_SHORT&&(ue=r.R16UI),Q===r.UNSIGNED_INT&&(ue=r.R32UI),Q===r.BYTE&&(ue=r.R8I),Q===r.SHORT&&(ue=r.R16I),Q===r.INT&&(ue=r.R32I)),b===r.RG&&(Q===r.FLOAT&&(ue=r.RG32F),Q===r.HALF_FLOAT&&(ue=r.RG16F),Q===r.UNSIGNED_BYTE&&(ue=r.RG8),Q===r.UNSIGNED_SHORT&&Le&&(ue=Le.RG16_EXT),Q===r.SHORT&&Le&&(ue=Le.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RG16UI),Q===r.UNSIGNED_INT&&(ue=r.RG32UI),Q===r.BYTE&&(ue=r.RG8I),Q===r.SHORT&&(ue=r.RG16I),Q===r.INT&&(ue=r.RG32I)),b===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),Q===r.UNSIGNED_INT&&(ue=r.RGB32UI),Q===r.BYTE&&(ue=r.RGB8I),Q===r.SHORT&&(ue=r.RGB16I),Q===r.INT&&(ue=r.RGB32I)),b===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ue=r.RGBA32UI),Q===r.BYTE&&(ue=r.RGBA8I),Q===r.SHORT&&(ue=r.RGBA16I),Q===r.INT&&(ue=r.RGBA32I)),b===r.RGB&&(Q===r.UNSIGNED_SHORT&&Le&&(ue=Le.RGB16_EXT),Q===r.SHORT&&Le&&(ue=Le.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ue=r.R11F_G11F_B10F)),b===r.RGBA){const de=we?au:yt.getTransfer(Te);Q===r.FLOAT&&(ue=r.RGBA32F),Q===r.HALF_FLOAT&&(ue=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ue=de===zt?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Le&&(ue=Le.RGBA16_EXT),Q===r.SHORT&&Le&&(ue=Le.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ue}function k(N,b){let Q;return N?b===null||b===qi||b===il?Q=r.DEPTH24_STENCIL8:b===ji?Q=r.DEPTH32F_STENCIL8:b===nl&&(Q=r.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===il?Q=r.DEPTH_COMPONENT24:b===ji?Q=r.DEPTH_COMPONENT32F:b===nl&&(Q=r.DEPTH_COMPONENT16),Q}function O(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function z(N){const b=N.target;b.removeEventListener("dispose",z),F(b),b.isVideoTexture&&S.delete(b),b.isHTMLTexture&&x.delete(b)}function A(N){const b=N.target;b.removeEventListener("dispose",A),G(b)}function F(N){const b=s.get(N);if(b.__webglInit===void 0)return;const Q=N.source,_e=E.get(Q);if(_e){const Te=_e[b.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&K(N),Object.keys(_e).length===0&&E.delete(Q)}s.remove(N)}function K(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const Q=N.source,_e=E.get(Q);delete _e[b.__cacheKey],d.memory.textures--}function G(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(b.__webglFramebuffer[_e]))for(let Te=0;Te<b.__webglFramebuffer[_e].length;Te++)r.deleteFramebuffer(b.__webglFramebuffer[_e][Te]);else r.deleteFramebuffer(b.__webglFramebuffer[_e]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[_e])}else{if(Array.isArray(b.__webglFramebuffer))for(let _e=0;_e<b.__webglFramebuffer.length;_e++)r.deleteFramebuffer(b.__webglFramebuffer[_e]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _e=0;_e<b.__webglColorRenderbuffer.length;_e++)b.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[_e]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=N.textures;for(let _e=0,Te=Q.length;_e<Te;_e++){const we=s.get(Q[_e]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),d.memory.textures--),s.remove(Q[_e])}s.remove(N)}let J=0;function fe(){J=0}function me(){return J}function X(N){J=N}function U(){const N=J;return N>=l.maxTextures&&et("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),J+=1,N}function I(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ee(N,b){const Q=s.get(N);if(N.isVideoTexture&&It(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){const _e=N.image;if(_e===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(Q,N,b);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+b)}function ce(N,b){const Q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Fe(Q,N,b);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+b)}function Se(N,b){const Q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Fe(Q,N,b);return}i.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+b)}function L(N,b){const Q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Q.__version!==N.version){Je(Q,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+b)}const Z={[hh]:r.REPEAT,[va]:r.CLAMP_TO_EDGE,[ph]:r.MIRRORED_REPEAT},xe={[wn]:r.NEAREST,[UM]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Ad]:r.LINEAR_MIPMAP_NEAREST,[Ls]:r.LINEAR_MIPMAP_LINEAR},ye={[PM]:r.NEVER,[HM]:r.ALWAYS,[BM]:r.LESS,[ip]:r.LEQUAL,[FM]:r.EQUAL,[ap]:r.GEQUAL,[zM]:r.GREATER,[IM]:r.NOTEQUAL};function Re(N,b){if(b.type===ji&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Ad||b.magFilter===_c||b.magFilter===Ls||b.minFilter===Bn||b.minFilter===Ad||b.minFilter===_c||b.minFilter===Ls)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Z[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Z[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Z[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,xe[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==_c&&b.minFilter!==Ls||b.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function se(N,b){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",z));const _e=b.source;let Te=E.get(_e);Te===void 0&&(Te={},E.set(_e,Te));const we=I(b);if(we!==N.__cacheKey){Te[we]===void 0&&(Te[we]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Te[we].usedTimes++;const Le=Te[N.__cacheKey];Le!==void 0&&(Te[N.__cacheKey].usedTimes--,Le.usedTimes===0&&K(b)),N.__cacheKey=we,N.__webglTexture=Te[we].texture}return Q}function Me(N,b,Q){return Math.floor(Math.floor(N/Q)/b)}function Ee(N,b,Q,_e){const we=N.updateRanges;if(we.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Q,_e,b.data);else{we.sort((Pe,De)=>Pe.start-De.start);let Le=0;for(let Pe=1;Pe<we.length;Pe++){const De=we[Le],Ne=we[Pe],nt=De.start+De.count,it=Me(Ne.start,b.width,4),pt=Me(De.start,b.width,4);Ne.start<=nt+1&&it===pt&&Me(Ne.start+Ne.count-1,b.width,4)===it?De.count=Math.max(De.count,Ne.start+Ne.count-De.start):(++Le,we[Le]=Ne)}we.length=Le+1;const ue=i.getParameter(r.UNPACK_ROW_LENGTH),de=i.getParameter(r.UNPACK_SKIP_PIXELS),Oe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Pe=0,De=we.length;Pe<De;Pe++){const Ne=we[Pe],nt=Math.floor(Ne.start/4),it=Math.ceil(Ne.count/4),pt=nt%b.width,V=Math.floor(nt/b.width),Ae=it,pe=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),i.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,pt,V,Ae,pe,Q,_e,b.data)}N.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ue),i.pixelStorei(r.UNPACK_SKIP_PIXELS,de),i.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function Fe(N,b,Q){let _e=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=r.TEXTURE_3D);const Te=se(N,b),we=b.source;i.bindTexture(_e,N.__webglTexture,r.TEXTURE0+Q);const Le=s.get(we);if(we.version!==Le.__version||Te===!0){if(i.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const pe=yt.getPrimaries(yt.workingColorSpace),Ie=b.colorSpace===as?null:yt.getPrimaries(b.colorSpace),Ue=b.colorSpace===as||pe===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let de=y(b.image,!1,l.maxTextureSize);de=Ce(b,de);const Oe=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type);let De=B(b.internalFormat,Oe,Pe,b.normalized,b.colorSpace,b.isVideoTexture);Re(_e,b);let Ne;const nt=b.mipmaps,it=b.isVideoTexture!==!0,pt=Le.__version===void 0||Te===!0,V=we.dataReady,Ae=O(b,de);if(b.isDepthTexture)De=k(b.format===Os,b.type),pt&&(it?i.texStorage2D(r.TEXTURE_2D,1,De,de.width,de.height):i.texImage2D(r.TEXTURE_2D,0,De,de.width,de.height,0,Oe,Pe,null));else if(b.isDataTexture)if(nt.length>0){it&&pt&&i.texStorage2D(r.TEXTURE_2D,Ae,De,nt[0].width,nt[0].height);for(let pe=0,Ie=nt.length;pe<Ie;pe++)Ne=nt[pe],it?V&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Pe,Ne.data):i.texImage2D(r.TEXTURE_2D,pe,De,Ne.width,Ne.height,0,Oe,Pe,Ne.data);b.generateMipmaps=!1}else it?(pt&&i.texStorage2D(r.TEXTURE_2D,Ae,De,de.width,de.height),V&&Ee(b,de,Oe,Pe)):i.texImage2D(r.TEXTURE_2D,0,De,de.width,de.height,0,Oe,Pe,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){it&&pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,De,nt[0].width,nt[0].height,de.depth);for(let pe=0,Ie=nt.length;pe<Ie;pe++)if(Ne=nt[pe],b.format!==Ui)if(Oe!==null)if(it){if(V)if(b.layerUpdates.size>0){const Ue=I_(Ne.width,Ne.height,b.format,b.type);for(const be of b.layerUpdates){const We=Ne.data.subarray(be*Ue/Ne.data.BYTES_PER_ELEMENT,(be+1)*Ue/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,be,Ne.width,Ne.height,1,Oe,We)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Ne.width,Ne.height,de.depth,Oe,Ne.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,De,Ne.width,Ne.height,de.depth,0,Ne.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Ne.width,Ne.height,de.depth,Oe,Pe,Ne.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pe,De,Ne.width,Ne.height,de.depth,0,Oe,Pe,Ne.data)}else{it&&pt&&i.texStorage2D(r.TEXTURE_2D,Ae,De,nt[0].width,nt[0].height);for(let pe=0,Ie=nt.length;pe<Ie;pe++)Ne=nt[pe],b.format!==Ui?Oe!==null?it?V&&i.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Ne.data):i.compressedTexImage2D(r.TEXTURE_2D,pe,De,Ne.width,Ne.height,0,Ne.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Ne.width,Ne.height,Oe,Pe,Ne.data):i.texImage2D(r.TEXTURE_2D,pe,De,Ne.width,Ne.height,0,Oe,Pe,Ne.data)}else if(b.isDataArrayTexture)if(it){if(pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,De,de.width,de.height,de.depth),V)if(b.layerUpdates.size>0){const pe=I_(de.width,de.height,b.format,b.type);for(const Ie of b.layerUpdates){const Ue=de.data.subarray(Ie*pe/de.data.BYTES_PER_ELEMENT,(Ie+1)*pe/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ie,de.width,de.height,1,Oe,Pe,Ue)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Oe,Pe,de.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,De,de.width,de.height,de.depth,0,Oe,Pe,de.data);else if(b.isData3DTexture)it?(pt&&i.texStorage3D(r.TEXTURE_3D,Ae,De,de.width,de.height,de.depth),V&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Oe,Pe,de.data)):i.texImage3D(r.TEXTURE_3D,0,De,de.width,de.height,de.depth,0,Oe,Pe,de.data);else if(b.isFramebufferTexture){if(pt)if(it)i.texStorage2D(r.TEXTURE_2D,Ae,De,de.width,de.height);else{let pe=de.width,Ie=de.height;for(let Ue=0;Ue<Ae;Ue++)i.texImage2D(r.TEXTURE_2D,Ue,De,pe,Ie,0,Oe,Pe,null),pe>>=1,Ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),de.parentNode!==pe){pe.appendChild(de),x.add(b),pe.onpaint=tt=>{const en=tt.changedElements;for(const Ct of x)en.includes(Ct.image)&&(Ct.needsUpdate=!0)},pe.requestPaint();return}const Ie=0,Ue=r.RGBA,be=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ie,Ue,be,We,de),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&pt){const pe=Zt(nt[0]);i.texStorage2D(r.TEXTURE_2D,Ae,De,pe.width,pe.height)}for(let pe=0,Ie=nt.length;pe<Ie;pe++)Ne=nt[pe],it?V&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Oe,Pe,Ne):i.texImage2D(r.TEXTURE_2D,pe,De,Oe,Pe,Ne);b.generateMipmaps=!1}else if(it){if(pt){const pe=Zt(de);i.texStorage2D(r.TEXTURE_2D,Ae,De,pe.width,pe.height)}V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,de)}else i.texImage2D(r.TEXTURE_2D,0,De,Oe,Pe,de);M(b)&&D(_e),Le.__version=we.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Je(N,b,Q){if(b.image.length!==6)return;const _e=se(N,b),Te=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Q);const we=s.get(Te);if(Te.version!==we.__version||_e===!0){i.activeTexture(r.TEXTURE0+Q);const Le=yt.getPrimaries(yt.workingColorSpace),ue=b.colorSpace===as?null:yt.getPrimaries(b.colorSpace),de=b.colorSpace===as||Le===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,Pe=b.image[0]&&b.image[0].isDataTexture,De=[];for(let be=0;be<6;be++)!Oe&&!Pe?De[be]=y(b.image[be],!0,l.maxCubemapSize):De[be]=Pe?b.image[be].image:b.image[be],De[be]=Ce(b,De[be]);const Ne=De[0],nt=c.convert(b.format,b.colorSpace),it=c.convert(b.type),pt=B(b.internalFormat,nt,it,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,Ae=we.__version===void 0||_e===!0,pe=Te.dataReady;let Ie=O(b,Ne);Re(r.TEXTURE_CUBE_MAP,b);let Ue;if(Oe){V&&Ae&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,Ne.width,Ne.height);for(let be=0;be<6;be++){Ue=De[be].mipmaps;for(let We=0;We<Ue.length;We++){const tt=Ue[We];b.format!==Ui?nt!==null?V?pe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,tt.width,tt.height,nt,tt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,pt,tt.width,tt.height,0,tt.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,tt.width,tt.height,nt,it,tt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,pt,tt.width,tt.height,0,nt,it,tt.data)}}}else{if(Ue=b.mipmaps,V&&Ae){Ue.length>0&&Ie++;const be=Zt(De[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,pt,be.width,be.height)}for(let be=0;be<6;be++)if(Pe){V?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,De[be].width,De[be].height,nt,it,De[be].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pt,De[be].width,De[be].height,0,nt,it,De[be].data);for(let We=0;We<Ue.length;We++){const en=Ue[We].image[be].image;V?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,en.width,en.height,nt,it,en.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,pt,en.width,en.height,0,nt,it,en.data)}}else{V?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,nt,it,De[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pt,nt,it,De[be]);for(let We=0;We<Ue.length;We++){const tt=Ue[We];V?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,nt,it,tt.image[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,pt,nt,it,tt.image[be])}}}M(b)&&D(r.TEXTURE_CUBE_MAP),we.__version=Te.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ze(N,b,Q,_e,Te,we){const Le=c.convert(Q.format,Q.colorSpace),ue=c.convert(Q.type),de=B(Q.internalFormat,Le,ue,Q.normalized,Q.colorSpace),Oe=s.get(b),Pe=s.get(Q);if(Pe.__renderTarget=b,!Oe.__hasExternalTextures){const De=Math.max(1,b.width>>we),Ne=Math.max(1,b.height>>we);Te===r.TEXTURE_3D||Te===r.TEXTURE_2D_ARRAY?i.texImage3D(Te,we,de,De,Ne,b.depth,0,Le,ue,null):i.texImage2D(Te,we,de,De,Ne,0,Le,ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),ht(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Te,Pe.__webglTexture,0,$t(b)):(Te===r.TEXTURE_2D||Te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Te,Pe.__webglTexture,we),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(N,b,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const _e=b.depthTexture,Te=_e&&_e.isDepthTexture?_e.type:null,we=k(b.stencilBuffer,Te),Le=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t(b),we,b.width,b.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t(b),we,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,we,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,N)}else{const _e=b.textures;for(let Te=0;Te<_e.length;Te++){const we=_e[Te],Le=c.convert(we.format,we.colorSpace),ue=c.convert(we.type),de=B(we.internalFormat,Le,ue,we.normalized,we.colorSpace);ht(b)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t(b),de,b.width,b.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t(b),de,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,de,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function rt(N,b,Q){const _e=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=s.get(b.depthTexture);if(Te.__renderTarget=b,(!Te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_e){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),Te.__webglTexture===void 0){Te.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Te.__webglTexture),Re(r.TEXTURE_CUBE_MAP,b.depthTexture);const Oe=c.convert(b.depthTexture.format),Pe=c.convert(b.depthTexture.type);let De;b.depthTexture.format===ya?De=r.DEPTH_COMPONENT24:b.depthTexture.format===Os&&(De=r.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,De,b.width,b.height,0,Oe,Pe,null)}}else ee(b.depthTexture,0);const we=Te.__webglTexture,Le=$t(b),ue=_e?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,de=b.depthTexture.format===Os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ya)ht(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,we,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,we,0);else if(b.depthTexture.format===Os)ht(b)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,ue,we,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,de,ue,we,0);else throw new Error("Unknown depthTexture format")}function dt(N){const b=s.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const _e=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_e){const Te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_e.removeEventListener("dispose",Te)};_e.addEventListener("dispose",Te),b.__depthDisposeCallback=Te}b.__boundDepthTexture=_e}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let _e=0;_e<6;_e++)rt(b.__webglFramebuffer[_e],N,_e);else{const _e=N.texture.mipmaps;_e&&_e.length>0?rt(b.__webglFramebuffer[0],N,0):rt(b.__webglFramebuffer,N,0)}else if(Q){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]===void 0)b.__webglDepthbuffer[_e]=r.createRenderbuffer(),Nt(b.__webglDepthbuffer[_e],N,!1);else{const Te=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,we)}}else{const _e=N.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Nt(b.__webglDepthbuffer,N,!1);else{const Te=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,we)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(N,b,Q){const _e=s.get(N);b!==void 0&&Ze(_e.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&dt(N)}function ct(N){const b=N.texture,Q=s.get(N),_e=s.get(b);N.addEventListener("dispose",A);const Te=N.textures,we=N.isWebGLCubeRenderTarget===!0,Le=Te.length>1;if(Le||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=b.version,d.memory.textures++),we){Q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[ue]=[];for(let de=0;de<b.mipmaps.length;de++)Q.__webglFramebuffer[ue][de]=r.createFramebuffer()}else Q.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)Q.__webglFramebuffer[ue]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ue=0,de=Te.length;ue<de;ue++){const Oe=s.get(Te[ue]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),d.memory.textures++)}if(N.samples>0&&ht(N)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ue=0;ue<Te.length;ue++){const de=Te[ue];Q.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ue]);const Oe=c.convert(de.format,de.colorSpace),Pe=c.convert(de.type),De=B(de.internalFormat,Oe,Pe,de.normalized,de.colorSpace,N.isXRRenderTarget===!0),Ne=$t(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,De,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(Q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),Re(r.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Ze(Q.__webglFramebuffer[ue][de],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else Ze(Q.__webglFramebuffer[ue],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);M(b)&&D(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ue=0,de=Te.length;ue<de;ue++){const Oe=Te[ue],Pe=s.get(Oe);let De=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(De,Pe.__webglTexture),Re(De,Oe),Ze(Q.__webglFramebuffer,N,Oe,r.COLOR_ATTACHMENT0+ue,De,0),M(Oe)&&D(De)}i.unbindTexture()}else{let ue=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ue=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ue,_e.__webglTexture),Re(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Ze(Q.__webglFramebuffer[de],N,b,r.COLOR_ATTACHMENT0,ue,de);else Ze(Q.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,ue,0);M(b)&&D(ue),i.unbindTexture()}N.depthBuffer&&dt(N)}function an(N){const b=N.textures;for(let Q=0,_e=b.length;Q<_e;Q++){const Te=b[Q];if(M(Te)){const we=P(N),Le=s.get(Te).__webglTexture;i.bindTexture(we,Le),D(we),i.unbindTexture()}}}const Wt=[],En=[];function W(N){if(N.samples>0){if(ht(N)===!1){const b=N.textures,Q=N.width,_e=N.height;let Te=r.COLOR_BUFFER_BIT;const we=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(N),ue=b.length>1;if(ue)for(let Oe=0;Oe<b.length;Oe++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const de=N.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Te|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Te|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,Q,_e,0,0,Q,_e,Te,r.NEAREST),g===!0&&(Wt.length=0,En.length=0,Wt.push(r.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Wt.push(we),En.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,En)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Wt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let Oe=0;Oe<b.length;Oe++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&g){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function $t(N){return Math.min(l.maxSamples,N.samples)}function ht(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(N){const b=d.render.frame;S.get(N)!==b&&(S.set(N,b),N.update())}function Ce(N,b){const Q=N.colorSpace,_e=N.format,Te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==iu&&Q!==as&&(yt.getTransfer(Q)===zt?(_e!==Ui||Te!==Mi)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Q)),b}function Zt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=fe,this.getTextureUnits=me,this.setTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=ce,this.setTexture3D=Se,this.setTextureCube=L,this.rebindTextures=bt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function wA(r,t){function i(s,l=as){let c;const d=yt.getTransfer(l);if(s===Mi)return r.UNSIGNED_BYTE;if(s===Jh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===$h)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Tv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Av)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ev)return r.BYTE;if(s===bv)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===Qh)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===Rv)return r.ALPHA;if(s===Cv)return r.RGB;if(s===Ui)return r.RGBA;if(s===ya)return r.DEPTH_COMPONENT;if(s===Os)return r.DEPTH_STENCIL;if(s===wv)return r.RED;if(s===ep)return r.RED_INTEGER;if(s===Bs)return r.RG;if(s===tp)return r.RG_INTEGER;if(s===np)return r.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(d===zt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mh||s===gh||s===_h||s===vh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_h)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xh||s===Sh||s===Mh||s===yh||s===Eh||s===tu||s===bh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===xh||s===Sh)return d===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Mh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===yh)return c.COMPRESSED_R11_EAC;if(s===Eh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===tu)return c.COMPRESSED_RG11_EAC;if(s===bh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Th||s===Ah||s===Rh||s===Ch||s===wh||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh||s===Ph||s===Bh||s===Fh||s===zh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Th)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ah)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ch)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Uh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Oh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ph)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zh)return d===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ih||s===Hh||s===Gh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ih)return d===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vh||s===jh||s===nu||s===kh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Hv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Oi({vertexShader:NA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new qr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LA extends zs{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",g=1,h=null,S=null,x=null,_=null,E=null,T=null;const w=typeof XRWebGLBinding<"u",y=new UA,M={},D=i.getContextAttributes();let P=null,B=null;const k=[],O=[],z=new jt;let A=null;const F=new Si;F.viewport=new cn;const K=new Si;K.viewport=new cn;const G=[F,K],J=new Vy;let fe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Me=k[se];return Me===void 0&&(Me=new Ud,k[se]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(se){let Me=k[se];return Me===void 0&&(Me=new Ud,k[se]=Me),Me.getGripSpace()},this.getHand=function(se){let Me=k[se];return Me===void 0&&(Me=new Ud,k[se]=Me),Me.getHandSpace()};function X(se){const Me=O.indexOf(se.inputSource);if(Me===-1)return;const Ee=k[Me];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,h||d),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function U(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",I);for(let se=0;se<k.length;se++){const Me=O[se];Me!==null&&(O[se]=null,k[se].disconnect(Me))}fe=null,me=null,y.reset();for(const se in M)delete M[se];t.setRenderTarget(P),E=null,_=null,x=null,l=null,B=null,Re.stop(),s.isPresenting=!1,t.setPixelRatio(A),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,s.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",U),l.addEventListener("inputsourceschange",I),D.xrCompatible!==!0&&await i.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Fe=null,Je=null;D.depth&&(Je=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=D.stencil?Os:ya,Fe=D.stencil?il:qi);const Ze={colorFormat:i.RGBA8,depthFormat:Je,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(Ze),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),B=new Wi(_.textureWidth,_.textureHeight,{format:Ui,type:Mi,depthTexture:new Gr(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),B=new Wi(E.framebufferWidth,E.framebufferHeight,{format:Ui,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(g),h=null,d=await l.requestReferenceSpace(p),Re.setContext(l),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(se){for(let Me=0;Me<se.removed.length;Me++){const Ee=se.removed[Me],Fe=O.indexOf(Ee);Fe>=0&&(O[Fe]=null,k[Fe].disconnect(Ee))}for(let Me=0;Me<se.added.length;Me++){const Ee=se.added[Me];let Fe=O.indexOf(Ee);if(Fe===-1){for(let Ze=0;Ze<k.length;Ze++)if(Ze>=O.length){O.push(Ee),Fe=Ze;break}else if(O[Ze]===null){O[Ze]=Ee,Fe=Ze;break}if(Fe===-1)break}const Je=k[Fe];Je&&Je.connect(Ee)}}const ee=new $,ce=new $;function Se(se,Me,Ee){ee.setFromMatrixPosition(Me.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const Fe=ee.distanceTo(ce),Je=Me.projectionMatrix.elements,Ze=Ee.projectionMatrix.elements,Nt=Je[14]/(Je[10]-1),rt=Je[14]/(Je[10]+1),dt=(Je[9]+1)/Je[5],bt=(Je[9]-1)/Je[5],ct=(Je[8]-1)/Je[0],an=(Ze[8]+1)/Ze[0],Wt=Nt*ct,En=Nt*an,W=Fe/(-ct+an),$t=W*-ct;if(Me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX($t),se.translateZ(W),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Je[10]===-1)se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const ht=Nt+W,It=rt+W,Ce=Wt-$t,Zt=En+(Fe-$t),N=dt*rt/It*ht,b=bt*rt/It*ht;se.projectionMatrix.makePerspective(Ce,Zt,N,b,ht,It),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function L(se,Me){Me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Me=se.near,Ee=se.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),J.near=K.near=F.near=Me,J.far=K.far=F.far=Ee,(fe!==J.near||me!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),fe=J.near,me=J.far),J.layers.mask=se.layers.mask|6,F.layers.mask=J.layers.mask&-5,K.layers.mask=J.layers.mask&-3;const Fe=se.parent,Je=J.cameras;L(J,Fe);for(let Ze=0;Ze<Je.length;Ze++)L(Je[Ze],Fe);Je.length===2?Se(J,F,K):J.projectionMatrix.copy(F.projectionMatrix),Z(se,J,Fe)};function Z(se,Me,Ee){Ee===null?se.matrix.copy(Me.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(Me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=al*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&E===null))return g},this.setFoveation=function(se){g=se,_!==null&&(_.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(se){return M[se]};let xe=null;function ye(se,Me){if(S=Me.getViewerPose(h||d),T=Me,S!==null){const Ee=S.views;E!==null&&(t.setRenderTargetFramebuffer(B,E.framebuffer),t.setRenderTarget(B));let Fe=!1;Ee.length!==J.cameras.length&&(J.cameras.length=0,Fe=!0);for(let rt=0;rt<Ee.length;rt++){const dt=Ee[rt];let bt=null;if(E!==null)bt=E.getViewport(dt);else{const an=x.getViewSubImage(_,dt);bt=an.viewport,rt===0&&(t.setRenderTargetTextures(B,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(B))}let ct=G[rt];ct===void 0&&(ct=new Si,ct.layers.enable(rt),ct.viewport=new cn,G[rt]=ct),ct.matrix.fromArray(dt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(dt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(bt.x,bt.y,bt.width,bt.height),rt===0&&(J.matrix.copy(ct.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Fe===!0&&J.cameras.push(ct)}const Je=l.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const rt=x.getDepthInformation(Ee[0]);rt&&rt.isValid&&rt.texture&&y.init(rt,l.renderState)}if(Je&&Je.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let rt=0;rt<Ee.length;rt++){const dt=Ee[rt].camera;if(dt){let bt=M[dt];bt||(bt=new Hv,M[dt]=bt);const ct=x.getCameraImage(dt);bt.sourceTexture=ct}}}}for(let Ee=0;Ee<k.length;Ee++){const Fe=O[Ee],Je=k[Ee];Fe!==null&&Je!==void 0&&Je.update(Fe,Me,h||d)}xe&&xe(se,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),T=null}const Re=new jv;Re.setAnimationLoop(ye),this.setAnimationLoop=function(se){xe=se},this.dispose=function(){}}}const OA=new un,Kv=new st;Kv.set(-1,0,0,0,1,0,0,0,1);function PA(r,t){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function s(y,M){M.color.getRGB(y.fogColor.value,Gv(r)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function l(y,M,D,P,B){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),x(y,M)):M.isMeshPhongMaterial?(c(y,M),S(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),_(y,M),M.isMeshPhysicalMaterial&&E(y,M,B)):M.isMeshMatcapMaterial?(c(y,M),T(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(d(y,M),M.isLineDashedMaterial&&p(y,M)):M.isPointsMaterial?g(y,M,D,P):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Zn&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Zn&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const D=t.get(M),P=D.envMap,B=D.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(B)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Kv),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function p(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function g(y,M,D,P){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*D,y.scale.value=P*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function S(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function x(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function _(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function E(y,M,D){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Zn&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const D=t.get(M).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function BA(r,t,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(D,P){const B=P.program;s.uniformBlockBinding(D,B)}function h(D,P){let B=l[D.id];B===void 0&&(T(D),B=S(D),l[D.id]=B,D.addEventListener("dispose",y));const k=P.program;s.updateUBOMapping(D,k);const O=t.render.frame;c[D.id]!==O&&(_(D),c[D.id]=O)}function S(D){const P=x();D.__bindingPointIndex=P;const B=r.createBuffer(),k=D.__size,O=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,B),r.bufferData(r.UNIFORM_BUFFER,k,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,B),B}function x(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const P=l[D.id],B=D.uniforms,k=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let O=0,z=B.length;O<z;O++){const A=Array.isArray(B[O])?B[O]:[B[O]];for(let F=0,K=A.length;F<K;F++){const G=A[F];if(E(G,O,F,k)===!0){const J=G.__offset,fe=Array.isArray(G.value)?G.value:[G.value];let me=0;for(let X=0;X<fe.length;X++){const U=fe[X],I=w(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,J+me,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):ArrayBuffer.isView(U)?G.__data.set(new U.constructor(U.buffer,U.byteOffset,G.__data.length)):(U.toArray(G.__data,me),me+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(D,P,B,k){const O=D.value,z=P+"_"+B;if(k[z]===void 0)return typeof O=="number"||typeof O=="boolean"?k[z]=O:ArrayBuffer.isView(O)?k[z]=O.slice():k[z]=O.clone(),!0;{const A=k[z];if(typeof O=="number"||typeof O=="boolean"){if(A!==O)return k[z]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(A.equals(O)===!1)return A.copy(O),!0}}return!1}function T(D){const P=D.uniforms;let B=0;const k=16;for(let z=0,A=P.length;z<A;z++){const F=Array.isArray(P[z])?P[z]:[P[z]];for(let K=0,G=F.length;K<G;K++){const J=F[K],fe=Array.isArray(J.value)?J.value:[J.value];for(let me=0,X=fe.length;me<X;me++){const U=fe[me],I=w(U),ee=B%k,ce=ee%I.boundary,Se=ee+ce;B+=ce,Se!==0&&k-Se<I.storage&&(B+=k-Se),J.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=B,B+=I.storage}}}const O=B%k;return O>0&&(B+=k-O),D.__size=B,D.__cache={},this}function w(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(P.boundary=16,P.storage=D.byteLength):et("WebGLRenderer: Unsupported uniform value type.",D),P}function y(D){const P=D.target;P.removeEventListener("dispose",y);const B=d.indexOf(P.__bindingPointIndex);d.splice(B,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function M(){for(const D in l)r.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:g,update:h,dispose:M}}const FA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function zA(){return Gi===null&&(Gi=new Ty(FA,16,16,Bs,Ma),Gi.name="DFG_LUT",Gi.minFilter=Bn,Gi.magFilter=Bn,Gi.wrapS=va,Gi.wrapT=va,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class IA{constructor(t={}){const{canvas:i=VM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:E=Mi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const w=E,y=new Set([np,tp,ep]),M=new Set([Mi,qi,nl,il,Jh,$h]),D=new Uint32Array(4),P=new Int32Array(4),B=new $;let k=null,O=null;const z=[],A=[];let F=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let G=!1,J=null;this._outputColorSpace=Yn;let fe=0,me=0,X=null,U=-1,I=null;const ee=new cn,ce=new cn;let Se=null;const L=new Ut(0);let Z=0,xe=i.width,ye=i.height,Re=1,se=null,Me=null;const Ee=new cn(0,0,xe,ye),Fe=new cn(0,0,xe,ye);let Je=!1;const Ze=new Bv;let Nt=!1,rt=!1;const dt=new un,bt=new $,ct=new cn,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function En(){return X===null?Re:1}let W=s;function $t(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kh}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",tt,!1),W===null){const q="webgl2";if(W=$t(q,R),W===null)throw $t(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Et("WebGLRenderer: "+R.message),R}let ht,It,Ce,Zt,N,b,Q,_e,Te,we,Le,ue,de,Oe,Pe,De,Ne,nt,it,pt,V,Ae,pe;function Ie(){ht=new zb(W),ht.init(),V=new wA(W,ht),It=new Nb(W,ht,t,V),Ce=new RA(W,ht),It.reversedDepthBuffer&&_&&Ce.buffers.depth.setReversed(!0),Zt=new Gb(W),N=new hA,b=new CA(W,ht,Ce,N,It,V,Zt),Q=new Fb(K),_e=new Xy(W),Ae=new Cb(W,_e),Te=new Ib(W,_e,Zt,Ae),we=new jb(W,Te,_e,Ae,Zt),nt=new Vb(W,It,b),Pe=new Db(N),Le=new dA(K,Q,ht,It,Ae,Pe),ue=new PA(K,N),de=new mA,Oe=new MA(ht),Ne=new Rb(K,Q,Ce,we,T,g),De=new AA(K,we,It),pe=new BA(W,Zt,It,Ce),it=new wb(W,ht,Zt),pt=new Hb(W,ht,Zt),Zt.programs=Le.programs,K.capabilities=It,K.extensions=ht,K.properties=N,K.renderLists=de,K.shadowMap=De,K.state=Ce,K.info=Zt}Ie(),w!==Mi&&(F=new Xb(w,i.width,i.height,l,c));const Ue=new LA(K,W);this.xr=Ue,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(R){R!==void 0&&(Re=R,this.setSize(xe,ye,!1))},this.getSize=function(R){return R.set(xe,ye)},this.setSize=function(R,q,re=!0){if(Ue.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=R,ye=q,i.width=Math.floor(R*Re),i.height=Math.floor(q*Re),re===!0&&(i.style.width=R+"px",i.style.height=q+"px"),F!==null&&F.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(xe*Re,ye*Re).floor()},this.setDrawingBufferSize=function(R,q,re){xe=R,ye=q,Re=re,i.width=Math.floor(R*re),i.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(w===Mi){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){et("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ee)},this.getViewport=function(R){return R.copy(Ee)},this.setViewport=function(R,q,re,ie){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,q,re,ie),Ce.viewport(ee.copy(Ee).multiplyScalar(Re).round())},this.getScissor=function(R){return R.copy(Fe)},this.setScissor=function(R,q,re,ie){R.isVector4?Fe.set(R.x,R.y,R.z,R.w):Fe.set(R,q,re,ie),Ce.scissor(ce.copy(Fe).multiplyScalar(Re).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(R){Ce.setScissorTest(Je=R)},this.setOpaqueSort=function(R){se=R},this.setTransparentSort=function(R){Me=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,re=!0){let ie=0;if(R){let ae=!1;if(X!==null){const ze=X.texture.format;ae=y.has(ze)}if(ae){const ze=X.texture.type,Ve=M.has(ze),Be=Ne.getClearColor(),ke=Ne.getClearAlpha(),je=Be.r,Ke=Be.g,ot=Be.b;Ve?(D[0]=je,D[1]=Ke,D[2]=ot,D[3]=ke,W.clearBufferuiv(W.COLOR,0,D)):(P[0]=je,P[1]=Ke,P[2]=ot,P[3]=ke,W.clearBufferiv(W.COLOR,0,P))}else ie|=W.COLOR_BUFFER_BIT}q&&(ie|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),J=R},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),Ne.dispose(),de.dispose(),Oe.dispose(),N.dispose(),Q.dispose(),we.dispose(),Ae.dispose(),pe.dispose(),Le.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Kr),Ue.removeEventListener("sessionend",Qr),Nn.stop()};function be(R){R.preventDefault(),f_("WebGLRenderer: Context Lost."),G=!0}function We(){f_("WebGLRenderer: Context Restored."),G=!1;const R=Zt.autoReset,q=De.enabled,re=De.autoUpdate,ie=De.needsUpdate,ae=De.type;Ie(),Zt.autoReset=R,De.enabled=q,De.autoUpdate=re,De.needsUpdate=ie,De.type=ae}function tt(R){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function en(R){const q=R.target;q.removeEventListener("dispose",en),Ct(q)}function Ct(R){ui(R),N.remove(R)}function ui(R){const q=N.get(R).programs;q!==void 0&&(q.forEach(function(re){Le.releaseProgram(re)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,ie,ae,ze){q===null&&(q=an);const Ve=ae.isMesh&&ae.matrixWorld.determinant()<0,Be=Ta(R,q,re,ie,ae);Ce.setMaterial(ie,Ve);let ke=re.index,je=1;if(ie.wireframe===!0){if(ke=Te.getWireframeAttribute(re),ke===void 0)return;je=2}const Ke=re.drawRange,ot=re.attributes.position;let Ye=Ke.start*je,Tt=(Ke.start+Ke.count)*je;ze!==null&&(Ye=Math.max(Ye,ze.start*je),Tt=Math.min(Tt,(ze.start+ze.count)*je)),ke!==null?(Ye=Math.max(Ye,0),Tt=Math.min(Tt,ke.count)):ot!=null&&(Ye=Math.max(Ye,0),Tt=Math.min(Tt,ot.count));const Kt=Tt-Ye;if(Kt<0||Kt===1/0)return;Ae.setup(ae,ie,Be,re,ke);let kt,Lt=it;if(ke!==null&&(kt=_e.get(ke),Lt=pt,Lt.setIndex(kt)),ae.isMesh)ie.wireframe===!0?(Ce.setLineWidth(ie.wireframeLinewidth*En()),Lt.setMode(W.LINES)):Lt.setMode(W.TRIANGLES);else if(ae.isLine){let Ot=ie.linewidth;Ot===void 0&&(Ot=1),Ce.setLineWidth(Ot*En()),ae.isLineSegments?Lt.setMode(W.LINES):ae.isLineLoop?Lt.setMode(W.LINE_LOOP):Lt.setMode(W.LINE_STRIP)}else ae.isPoints?Lt.setMode(W.POINTS):ae.isSprite&&Lt.setMode(W.TRIANGLES);if(ae.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Lt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Ot=ae._multiDrawStarts,Ge=ae._multiDrawCounts,Dn=ae._multiDrawCount,mt=ke?_e.get(ke).bytesPerElement:1,_n=N.get(ie).currentProgram.getUniforms();for(let Jn=0;Jn<Dn;Jn++)_n.setValue(W,"_gl_DrawID",Jn),Lt.render(Ot[Jn]/mt,Ge[Jn])}else if(ae.isInstancedMesh)Lt.renderInstances(Ye,Kt,ae.count);else if(re.isInstancedBufferGeometry){const Ot=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ge=Math.min(re.instanceCount,Ot);Lt.renderInstances(Ye,Kt,Ge)}else Lt.render(Ye,Kt)};function Qn(R,q,re){R.transparent===!0&&R.side===_a&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Is(R,q,re),R.side=rs,R.needsUpdate=!0,Is(R,q,re),R.side=_a):Is(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),O=Oe.get(re),O.init(q),A.push(O),re.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(O.pushLight(ae),ae.castShadow&&O.pushShadow(ae))}),R!==re&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(O.pushLight(ae),ae.castShadow&&O.pushShadow(ae))}),O.setupLights();const ie=new Set;return R.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const ze=ae.material;if(ze)if(Array.isArray(ze))for(let Ve=0;Ve<ze.length;Ve++){const Be=ze[Ve];Qn(Be,re,ae),ie.add(Be)}else Qn(ze,re,ae),ie.add(ze)}),O=A.pop(),ie},this.compileAsync=function(R,q,re=null){const ie=this.compile(R,q,re);return new Promise(ae=>{function ze(){if(ie.forEach(function(Ve){N.get(Ve).currentProgram.isReady()&&ie.delete(Ve)}),ie.size===0){ae(R);return}setTimeout(ze,10)}ht.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let os=null;function Zr(R){os&&os(R)}function Kr(){Nn.stop()}function Qr(){Nn.start()}const Nn=new jv;Nn.setAnimationLoop(Zr),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(R){os=R,Ue.setAnimationLoop(R),R===null?Nn.stop():Nn.start()},Ue.addEventListener("sessionstart",Kr),Ue.addEventListener("sessionend",Qr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;J!==null&&J.renderStart(R,q);const re=Ue.enabled===!0&&Ue.isPresenting===!0,ie=F!==null&&(X===null||re)&&F.begin(K,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(q),q=Ue.getCamera()),R.isScene===!0&&R.onBeforeRender(K,R,q,X),O=Oe.get(R,A.length),O.init(q),O.state.textureUnits=b.getTextureUnits(),A.push(O),dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ze.setFromProjectionMatrix(dt,ki,q.reversedDepth),rt=this.localClippingEnabled,Nt=Pe.init(this.clippingPlanes,rt),k=de.get(R,z.length),k.init(),z.push(k),Ue.enabled===!0&&Ue.isPresenting===!0){const Ve=K.xr.getDepthSensingMesh();Ve!==null&&sn(Ve,q,-1/0,K.sortObjects)}sn(R,q,0,K.sortObjects),k.finish(),K.sortObjects===!0&&k.sort(se,Me),Wt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Wt&&Ne.addToRenderList(k,R),this.info.render.frame++,Nt===!0&&Pe.beginShadows();const ae=O.state.shadowsArray;if(De.render(ae,R,q),Nt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&F.hasRenderPass())===!1){const Ve=k.opaque,Be=k.transmissive;if(O.setupLights(),q.isArrayCamera){const ke=q.cameras;if(Be.length>0)for(let je=0,Ke=ke.length;je<Ke;je++){const ot=ke[je];Yi(Ve,Be,R,ot)}Wt&&Ne.render(R);for(let je=0,Ke=ke.length;je<Ke;je++){const ot=ke[je];bn(k,R,ot,ot.viewport)}}else Be.length>0&&Yi(Ve,Be,R,q),Wt&&Ne.render(R),bn(k,R,q)}X!==null&&me===0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),ie&&F.end(K),R.isScene===!0&&R.onAfterRender(K,R,q),Ae.resetDefaultState(),U=-1,I=null,A.pop(),A.length>0?(O=A[A.length-1],b.setTextureUnits(O.state.textureUnits),Nt===!0&&Pe.setGlobalState(K.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?k=z[z.length-1]:k=null,J!==null&&J.renderEnd()};function sn(R,q,re,ie){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLightProbeGrid)O.pushLightProbeGrid(R);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ze.intersectsSprite(R)){ie&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(dt);const Ve=we.update(R),Be=R.material;Be.visible&&k.push(R,Ve,Be,re,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ze.intersectsObject(R))){const Ve=we.update(R),Be=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ct.copy(Ve.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(dt)),Array.isArray(Be)){const ke=Ve.groups;for(let je=0,Ke=ke.length;je<Ke;je++){const ot=ke[je],Ye=Be[ot.materialIndex];Ye&&Ye.visible&&k.push(R,Ve,Ye,re,ct.z,ot)}}else Be.visible&&k.push(R,Ve,Be,re,ct.z,null)}}const ze=R.children;for(let Ve=0,Be=ze.length;Ve<Be;Ve++)sn(ze[Ve],q,re,ie)}function bn(R,q,re,ie){const{opaque:ae,transmissive:ze,transparent:Ve}=R;O.setupLightsView(re),Nt===!0&&Pe.setGlobalState(K.clippingPlanes,re),ie&&Ce.viewport(ee.copy(ie)),ae.length>0&&Ea(ae,q,re),ze.length>0&&Ea(ze,q,re),Ve.length>0&&Ea(Ve,q,re),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Yi(R,q,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ie.id]===void 0){const Ye=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ie.id]=new Wi(1,1,{generateMipmaps:!0,type:Ye?Ma:Mi,minFilter:Ls,samples:Math.max(4,It.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const ze=O.state.transmissionRenderTarget[ie.id],Ve=ie.viewport||ee;ze.setSize(Ve.z*K.transmissionResolutionScale,Ve.w*K.transmissionResolutionScale);const Be=K.getRenderTarget(),ke=K.getActiveCubeFace(),je=K.getActiveMipmapLevel();K.setRenderTarget(ze),K.getClearColor(L),Z=K.getClearAlpha(),Z<1&&K.setClearColor(16777215,.5),K.clear(),Wt&&Ne.render(re);const Ke=K.toneMapping;K.toneMapping=Xi;const ot=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),O.setupLightsView(ie),Nt===!0&&Pe.setGlobalState(K.clippingPlanes,ie),Ea(R,re,ie),b.updateMultisampleRenderTarget(ze),b.updateRenderTargetMipmap(ze),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Tt=0,Kt=q.length;Tt<Kt;Tt++){const kt=q[Tt],{object:Lt,geometry:Ot,material:Ge,group:Dn}=kt;if(Ge.side===_a&&Lt.layers.test(ie.layers)){const mt=Ge.side;Ge.side=Zn,Ge.needsUpdate=!0,ol(Lt,re,ie,Ot,Ge,Dn),Ge.side=mt,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(b.updateMultisampleRenderTarget(ze),b.updateRenderTargetMipmap(ze))}K.setRenderTarget(Be,ke,je),K.setClearColor(L,Z),ot!==void 0&&(ie.viewport=ot),K.toneMapping=Ke}function Ea(R,q,re){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,ze=R.length;ae<ze;ae++){const Ve=R[ae],{object:Be,geometry:ke,group:je}=Ve;let Ke=Ve.material;Ke.allowOverride===!0&&ie!==null&&(Ke=ie),Be.layers.test(re.layers)&&ol(Be,q,re,ke,Ke,je)}}function ol(R,q,re,ie,ae,ze){R.onBeforeRender(K,q,re,ie,ae,ze),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(K,q,re,ie,R,ze),ae.transparent===!0&&ae.side===_a&&ae.forceSinglePass===!1?(ae.side=Zn,ae.needsUpdate=!0,K.renderBufferDirect(re,q,ie,ae,R,ze),ae.side=rs,ae.needsUpdate=!0,K.renderBufferDirect(re,q,ie,ae,R,ze),ae.side=_a):K.renderBufferDirect(re,q,ie,ae,R,ze),R.onAfterRender(K,q,re,ie,ae,ze)}function Is(R,q,re){q.isScene!==!0&&(q=an);const ie=N.get(R),ae=O.state.lights,ze=O.state.shadowsArray,Ve=ae.state.version,Be=Le.getParameters(R,ae.state,ze,q,re,O.state.lightProbeGridArray),ke=Le.getProgramCacheKey(Be);let je=ie.programs;ie.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const Ke=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ie.envMap=Q.get(R.envMap||ie.environment,Ke),ie.envMapRotation=ie.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",en),je=new Map,ie.programs=je);let ot=je.get(ke);if(ot!==void 0){if(ie.currentProgram===ot&&ie.lightsStateVersion===Ve)return ba(R,Be),ot}else Be.uniforms=Le.getUniforms(R),J!==null&&R.isNodeMaterial&&J.build(R,re,Be),R.onBeforeCompile(Be,K),ot=Le.acquireProgram(Be,ke),je.set(ke,ot),ie.uniforms=Be.uniforms;const Ye=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Pe.uniform),ba(R,Be),ie.needsLights=ls(R),ie.lightsStateVersion=Ve,ie.needsLights&&(Ye.ambientLightColor.value=ae.state.ambient,Ye.lightProbe.value=ae.state.probe,Ye.directionalLights.value=ae.state.directional,Ye.directionalLightShadows.value=ae.state.directionalShadow,Ye.spotLights.value=ae.state.spot,Ye.spotLightShadows.value=ae.state.spotShadow,Ye.rectAreaLights.value=ae.state.rectArea,Ye.ltc_1.value=ae.state.rectAreaLTC1,Ye.ltc_2.value=ae.state.rectAreaLTC2,Ye.pointLights.value=ae.state.point,Ye.pointLightShadows.value=ae.state.pointShadow,Ye.hemisphereLights.value=ae.state.hemi,Ye.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ae.state.spotLightMatrix,Ye.spotLightMap.value=ae.state.spotLightMap,Ye.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=O.state.lightProbeGridArray.length>0,ie.currentProgram=ot,ie.uniformsList=null,ot}function Jr(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=$c.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ba(R,q){const re=N.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function $r(R,q){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;B.setFromMatrixPosition(q.matrixWorld);for(let re=0,ie=R.length;re<ie;re++){const ae=R[re];if(ae.texture!==null&&ae.boundingBox.containsPoint(B))return ae}return null}function Ta(R,q,re,ie,ae){q.isScene!==!0&&(q=an),b.resetTextureUnits();const ze=q.fog,Ve=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Be=X===null?K.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:yt.workingColorSpace,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,je=Q.get(ie.envMap||Ve,ke),Ke=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ye=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,Kt=!!re.morphAttributes.color;let kt=Xi;ie.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(kt=K.toneMapping);const Lt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0,Ge=N.get(ie),Dn=O.state.lights;if(Nt===!0&&(rt===!0||R!==I)){const Dt=R===I&&ie.id===U;Pe.setState(ie,R,Dt)}let mt=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Dn.state.version||Ge.outputColorSpace!==Be||ae.isBatchedMesh&&Ge.batching===!1||!ae.isBatchedMesh&&Ge.batching===!0||ae.isBatchedMesh&&Ge.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ge.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ge.instancing===!1||!ae.isInstancedMesh&&Ge.instancing===!0||ae.isSkinnedMesh&&Ge.skinning===!1||!ae.isSkinnedMesh&&Ge.skinning===!0||ae.isInstancedMesh&&Ge.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ge.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ge.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ge.instancingMorph===!1&&ae.morphTexture!==null||Ge.envMap!==je||ie.fog===!0&&Ge.fog!==ze||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Ke||Ge.vertexTangents!==ot||Ge.morphTargets!==Ye||Ge.morphNormals!==Tt||Ge.morphColors!==Kt||Ge.toneMapping!==kt||Ge.morphTargetsCount!==Ot||!!Ge.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Ge.__version=ie.version);let _n=Ge.currentProgram;mt===!0&&(_n=Is(ie,q,ae),J&&ie.isNodeMaterial&&J.onUpdateProgram(ie,_n,Ge));let Jn=!1,bi=!1,$n=!1;const Pt=_n.getUniforms(),Qt=Ge.uniforms;if(Ce.useProgram(_n.program)&&(Jn=!0,bi=!0,$n=!0),ie.id!==U&&(U=ie.id,bi=!0),Ge.needsLights){const Dt=$r(O.state.lightProbeGridArray,ae);Ge.lightProbeGrid!==Dt&&(Ge.lightProbeGrid=Dt,bi=!0)}if(Jn||I!==R){Ce.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pt.setValue(W,"projectionMatrix",R.projectionMatrix),Pt.setValue(W,"viewMatrix",R.matrixWorldInverse);const Pi=Pt.map.cameraPosition;Pi!==void 0&&Pi.setValue(W,bt.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&Pt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),I!==R&&(I=R,bi=!0,$n=!0)}if(Ge.needsLights&&(Dn.state.directionalShadowMap.length>0&&Pt.setValue(W,"directionalShadowMap",Dn.state.directionalShadowMap,b),Dn.state.spotShadowMap.length>0&&Pt.setValue(W,"spotShadowMap",Dn.state.spotShadowMap,b),Dn.state.pointShadowMap.length>0&&Pt.setValue(W,"pointShadowMap",Dn.state.pointShadowMap,b)),ae.isSkinnedMesh){Pt.setOptional(W,ae,"bindMatrix"),Pt.setOptional(W,ae,"bindMatrixInverse");const Dt=ae.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Pt.setValue(W,"boneTexture",Dt.boneTexture,b))}ae.isBatchedMesh&&(Pt.setOptional(W,ae,"batchingTexture"),Pt.setValue(W,"batchingTexture",ae._matricesTexture,b),Pt.setOptional(W,ae,"batchingIdTexture"),Pt.setValue(W,"batchingIdTexture",ae._indirectTexture,b),Pt.setOptional(W,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Pt.setValue(W,"batchingColorTexture",ae._colorsTexture,b));const Ti=re.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&nt.update(ae,re,_n),(bi||Ge.receiveShadow!==ae.receiveShadow)&&(Ge.receiveShadow=ae.receiveShadow,Pt.setValue(W,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Qt.envMapIntensity.value=q.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=zA()),bi){if(Pt.setValue(W,"toneMappingExposure",K.toneMappingExposure),Ge.needsLights&&Aa(Qt,$n),ze&&ie.fog===!0&&ue.refreshFogUniforms(Qt,ze),ue.refreshMaterialUniforms(Qt,ie,Re,ye,O.state.transmissionRenderTarget[R.id]),Ge.needsLights&&Ge.lightProbeGrid){const Dt=Ge.lightProbeGrid;Qt.probesSH.value=Dt.texture,Qt.probesMin.value.copy(Dt.boundingBox.min),Qt.probesMax.value.copy(Dt.boundingBox.max),Qt.probesResolution.value.copy(Dt.resolution)}$c.upload(W,Jr(Ge),Qt,b)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&($c.upload(W,Jr(Ge),Qt,b),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(W,"center",ae.center),Pt.setValue(W,"modelViewMatrix",ae.modelViewMatrix),Pt.setValue(W,"normalMatrix",ae.normalMatrix),Pt.setValue(W,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Dt=ie.uniformsGroups;for(let Pi=0,Ca=Dt.length;Pi<Ca;Pi++){const cs=Dt[Pi];pe.update(cs,_n),pe.bind(cs,_n)}}return _n}function Aa(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ls(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,re){const ie=N.get(R);ie.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=q,N.get(R.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:re,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const re=N.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const Ra=W.createFramebuffer();this.setRenderTarget=function(R,q=0,re=0){X=R,fe=q,me=re;let ie=null,ae=!1,ze=!1;if(R){const Be=N.get(R);if(Be.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(W.FRAMEBUFFER,Be.__webglFramebuffer),ee.copy(R.viewport),ce.copy(R.scissor),Se=R.scissorTest,Ce.viewport(ee),Ce.scissor(ce),Ce.setScissorTest(Se),U=-1;return}else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(Be.__hasExternalTextures)b.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(Be.__boundDepthTexture!==Ke){if(Ke!==null&&N.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ze=!0);const je=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[q])?ie=je[q][re]:ie=je[q],ae=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?ie=N.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?ie=je[re]:ie=je,ee.copy(R.viewport),ce.copy(R.scissor),Se=R.scissorTest}else ee.copy(Ee).multiplyScalar(Re).floor(),ce.copy(Fe).multiplyScalar(Re).floor(),Se=Je;if(re!==0&&(ie=Ra),Ce.bindFramebuffer(W.FRAMEBUFFER,ie)&&Ce.drawBuffers(R,ie),Ce.viewport(ee),Ce.scissor(ce),Ce.setScissorTest(Se),ae){const Be=N.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,re)}else if(ze){const Be=q;for(let ke=0;ke<R.textures.length;ke++){const je=N.get(R.textures[ke]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+ke,je.__webglTexture,re,Be)}}else if(R!==null&&re!==0){const Be=N.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Be.__webglTexture,re)}U=-1},this.readRenderTargetPixels=function(R,q,re,ie,ae,ze,Ve,Be=0){if(!(R&&R.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke){Ce.bindFramebuffer(W.FRAMEBUFFER,ke);try{const je=R.textures[Be],Ke=je.format,ot=je.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),!It.textureFormatReadable(Ke)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ie&&re>=0&&re<=R.height-ae&&W.readPixels(q,re,ie,ae,V.convert(Ke),V.convert(ot),ze)}finally{const je=X!==null?N.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(W.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,q,re,ie,ae,ze,Ve,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke)if(q>=0&&q<=R.width-ie&&re>=0&&re<=R.height-ae){Ce.bindFramebuffer(W.FRAMEBUFFER,ke);const je=R.textures[Be],Ke=je.format,ot=je.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),!It.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.bufferData(W.PIXEL_PACK_BUFFER,ze.byteLength,W.STREAM_READ),W.readPixels(q,re,ie,ae,V.convert(Ke),V.convert(ot),0);const Tt=X!==null?N.get(X).__webglFramebuffer:null;Ce.bindFramebuffer(W.FRAMEBUFFER,Tt);const Kt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await jM(W,Kt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ze),W.deleteBuffer(Ye),W.deleteSync(Kt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,re=0){const ie=Math.pow(2,-re),ae=Math.floor(R.image.width*ie),ze=Math.floor(R.image.height*ie),Ve=q!==null?q.x:0,Be=q!==null?q.y:0;b.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,re,0,0,Ve,Be,ae,ze),Ce.unbindTexture()};const fn=W.createFramebuffer(),ll=W.createFramebuffer();this.copyTextureToTexture=function(R,q,re=null,ie=null,ae=0,ze=0){let Ve,Be,ke,je,Ke,ot,Ye,Tt,Kt;const kt=R.isCompressedTexture?R.mipmaps[ze]:R.image;if(re!==null)Ve=re.max.x-re.min.x,Be=re.max.y-re.min.y,ke=re.isBox3?re.max.z-re.min.z:1,je=re.min.x,Ke=re.min.y,ot=re.isBox3?re.min.z:0;else{const Qt=Math.pow(2,-ae);Ve=Math.floor(kt.width*Qt),Be=Math.floor(kt.height*Qt),R.isDataArrayTexture?ke=kt.depth:R.isData3DTexture?ke=Math.floor(kt.depth*Qt):ke=1,je=0,Ke=0,ot=0}ie!==null?(Ye=ie.x,Tt=ie.y,Kt=ie.z):(Ye=0,Tt=0,Kt=0);const Lt=V.convert(q.format),Ot=V.convert(q.type);let Ge;q.isData3DTexture?(b.setTexture3D(q,0),Ge=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(b.setTexture2DArray(q,0),Ge=W.TEXTURE_2D_ARRAY):(b.setTexture2D(q,0),Ge=W.TEXTURE_2D),Ce.activeTexture(W.TEXTURE0),Ce.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),Ce.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ce.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const Dn=Ce.getParameter(W.UNPACK_ROW_LENGTH),mt=Ce.getParameter(W.UNPACK_IMAGE_HEIGHT),_n=Ce.getParameter(W.UNPACK_SKIP_PIXELS),Jn=Ce.getParameter(W.UNPACK_SKIP_ROWS),bi=Ce.getParameter(W.UNPACK_SKIP_IMAGES);Ce.pixelStorei(W.UNPACK_ROW_LENGTH,kt.width),Ce.pixelStorei(W.UNPACK_IMAGE_HEIGHT,kt.height),Ce.pixelStorei(W.UNPACK_SKIP_PIXELS,je),Ce.pixelStorei(W.UNPACK_SKIP_ROWS,Ke),Ce.pixelStorei(W.UNPACK_SKIP_IMAGES,ot);const $n=R.isDataArrayTexture||R.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Qt=N.get(R),Ti=N.get(q),Dt=N.get(Qt.__renderTarget),Pi=N.get(Ti.__renderTarget);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ca=0;Ca<ke;Ca++)$n&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,N.get(R).__webglTexture,ae,ot+Ca),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,N.get(q).__webglTexture,ze,Kt+Ca)),W.blitFramebuffer(je,Ke,Ve,Be,Ye,Tt,Ve,Be,W.DEPTH_BUFFER_BIT,W.NEAREST);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ae!==0||R.isRenderTargetTexture||N.has(R)){const Qt=N.get(R),Ti=N.get(q);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,fn),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,ll);for(let Dt=0;Dt<ke;Dt++)$n?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qt.__webglTexture,ae,ot+Dt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qt.__webglTexture,ae),Pt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ti.__webglTexture,ze,Kt+Dt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ti.__webglTexture,ze),ae!==0?W.blitFramebuffer(je,Ke,Ve,Be,Ye,Tt,Ve,Be,W.COLOR_BUFFER_BIT,W.NEAREST):Pt?W.copyTexSubImage3D(Ge,ze,Ye,Tt,Kt+Dt,je,Ke,Ve,Be):W.copyTexSubImage2D(Ge,ze,Ye,Tt,je,Ke,Ve,Be);Ce.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Pt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(Ge,ze,Ye,Tt,Kt,Ve,Be,ke,Lt,Ot,kt.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(Ge,ze,Ye,Tt,Kt,Ve,Be,ke,Lt,kt.data):W.texSubImage3D(Ge,ze,Ye,Tt,Kt,Ve,Be,ke,Lt,Ot,kt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ze,Ye,Tt,Ve,Be,Lt,Ot,kt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ze,Ye,Tt,kt.width,kt.height,Lt,kt.data):W.texSubImage2D(W.TEXTURE_2D,ze,Ye,Tt,Ve,Be,Lt,Ot,kt);Ce.pixelStorei(W.UNPACK_ROW_LENGTH,Dn),Ce.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt),Ce.pixelStorei(W.UNPACK_SKIP_PIXELS,_n),Ce.pixelStorei(W.UNPACK_SKIP_ROWS,Jn),Ce.pixelStorei(W.UNPACK_SKIP_IMAGES,bi),ze===0&&q.generateMipmaps&&W.generateMipmap(Ge),Ce.unbindTexture()},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),Ce.unbindTexture()},this.resetState=function(){fe=0,me=0,X=null,Ce.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(t),i.unpackColorSpace=yt._getUnpackColorSpace()}}const HA=9400098,GA=13923902,VA=15779930,jA=7295776;function cv(r){r.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(s=>{s.map&&s.map.dispose(),s.dispose()})})}function kA(r,t,i){const s=new Float32Array(r*3),l=new Float32Array(r);for(let d=0;d<r;d+=1){const p=Math.random()*Math.PI*2,g=Math.random()*.38,h=Math.random();s[d*3]=Math.cos(p)*g,s[d*3+1]=t+(i-t)*h,s[d*3+2]=Math.sin(p)*g,l[d]=h}const c=new Kn;return c.setAttribute("position",new Li(s,3)),{seeds:l,points:new Ny(c,new zv({color:GA,size:.035,transparent:!0,opacity:.72,depthWrite:!1,blending:eu}))}}function XA(r,t,i,s){const l=[],c=r/2,d=t/2;for(let g=0;g<=i;g+=1){const h=-c+r/i*g,S=-d+t/i*g;l.push(h,s,-d,h,s,d),l.push(-c,s,S,c,s,S)}const p=new Kn;return p.setAttribute("position",new ci(l,3)),new Fv(p,new lp({color:jA,transparent:!0,opacity:.28,depthWrite:!1}))}function WA(){const r=document.createElement("canvas");r.width=128,r.height=128;const t=r.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(212,168,32,0.32)"),i.addColorStop(.46,"rgba(212,168,32,0.12)"),i.addColorStop(1,"rgba(212,168,32,0)"),t.fillStyle=i,t.fillRect(0,0,128,128);const s=new Dy(r);s.colorSpace=Yn;const l=new Ei(new qr(2.8,2.8),new fu({map:s,transparent:!0,opacity:.8,depthWrite:!1,blending:eu}));return l.rotation.x=-Math.PI/2,l}function uv(r,t,i){const s=i.getBoundingClientRect(),l=Math.max(1,s.width),c=Math.max(1,s.height);r.setSize(l,c,!1),t.aspect=l/c,t.updateProjectionMatrix()}const fv=[8,17,26,2,11,20];function qA(){const r=Pr.useRef(null),t=Pr.useRef(null);return Pr.useEffect(()=>{const i=r.current,s=t.current;if(!i||!s)return;const l=new IA({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.outputColorSpace=Yn,l.autoClear=!1;const c=new b_,d=new Si(42,1,.1,100),p=new $(4.2,3.7,6.3),g=new $(3.2,2.9,4.85),h=new $(0,0,0),S=new $(0,0,0),x=new $;d.position.copy(p),d.lookAt(S);const _=new Jo;_.rotation.x=.4,_.position.y=.45,c.add(_);const E=[],T={current:null},w=.62,y=.68;for(let ee=-1;ee<=1;ee+=1)for(let ce=-1;ce<=1;ce+=1)for(let Se=-1;Se<=1;Se+=1){const L=Math.abs(ee)===1&&Math.abs(ce)===1&&Math.abs(Se)===1,Z=L?VA:HA,xe=L?.18:.105,ye=new Wr(w,w,w),Re=new Ly(ye),se=new fu({color:Z,transparent:!0,opacity:xe,depthWrite:!1}),Me=new lp({color:Z,transparent:!0,opacity:L?.82:.52}),Ee=new Ei(ye,se);Ee.position.set(ee*y,ce*y,Se*y),_.add(Ee);const Fe=new Fv(Re,Me);Fe.position.copy(Ee.position),_.add(Fe),E.push({fill:Ee,edge:Fe,fillMaterial:se,edgeMaterial:Me,fillBase:xe,edgeBase:L?.82:.52})}const M=-1.28,D=-.58,P=XA(3.2,2.6,8,M+.01);c.add(P);const B=WA();B.position.y=M+.02,c.add(B);const k=kA(130,M+.04,D);c.add(k.points);const O=new b_,z=new cp(-1,1,1,-1,0,1),A=new Oi({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTime:{value:0},uOpacity:{value:.18}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uOpacity;

        void main() {
          float scan = smoothstep(0.45, 0.5, abs(fract(vUv.y * 96.0) - 0.5));
          float alpha = scan * uOpacity * 0.42;
          vec3 brass = vec3(0.83, 0.66, 0.13);
          vec3 copper = vec3(0.83, 0.46, 0.24);
          gl_FragColor = vec4(mix(brass, copper, 0.18), alpha);
        }
      `});O.add(new Ei(new qr(2,2),A)),uv(l,d,s);const F=new ResizeObserver(()=>uv(l,d,s));F.observe(s);const K=new jy;let G=0,J=.7,fe=0,me=1,X=0;const U=ee=>{const ce=ee.detail?.cubeIndex;T.current=Number.isInteger(ce)?fv[ce%fv.length]:null};window.addEventListener("projects-hologram-focus",U);const I=()=>{const ee=K.getElapsedTime(),ce=T.current;if(X+=((ce===null?0:1)-X)*.08,ce===null)h.set(0,0,0);else{const ye=E[ce]?.fill;ye&&(ye.getWorldPosition(x),h.copy(x))}S.lerp(h,.08),d.position.lerpVectors(p,g,X),d.lookAt(S),_.rotation.x=.4,_.rotation.y+=h_.lerp(.0015,55e-5,X),ee>J&&(fe=ee+.12+Math.random()*.12,me=.45+Math.random()*.35,J=ee+1.1+Math.random()*2.6);const Se=ee<fe?me+Math.random()*.18:1;E.forEach(({fill:ye,edge:Re,fillMaterial:se,edgeMaterial:Me,fillBase:Ee,edgeBase:Fe},Je)=>{const Ze=ce!==null&&Je===ce,Nt=ce===null||Ze?1:.42,rt=Ze?1+X*.65:1;se.opacity=Ee*Se*Nt*rt,Me.opacity=Fe*Se*Nt*rt;const dt=Ze?1.34:1,bt=h_.lerp(ye.scale.x,dt,.1);ye.scale.setScalar(bt),Re.scale.setScalar(bt)});const L=Math.min(1,ee/1.8),Z=Math.max(0,1-Math.max(0,ee-1.3)/1.25),xe=k.points.geometry.attributes.position.array;for(let ye=0;ye<k.seeds.length;ye+=1){const Re=(k.seeds[ye]+L)%1;xe[ye*3+1]=M+.04+(D-M)*Re}k.points.geometry.attributes.position.needsUpdate=!0,k.points.material.opacity=.72*Z,A.uniforms.uOpacity.value=.105+Math.sin(ee*2.2)*.018,l.clear(),l.render(c,d),l.clearDepth(),l.render(O,z),G=requestAnimationFrame(I)};return I(),()=>{cancelAnimationFrame(G),F.disconnect(),window.removeEventListener("projects-hologram-focus",U),cv(c),cv(O),l.dispose()}},[]),m.jsx("div",{ref:t,className:"projects-hologram","aria-hidden":"true",children:m.jsx("canvas",{ref:r})})}function Or({x:r,y:t,size:i="small",duration:s="8s",reverse:l=!1,opacity:c=1,rotationOffset:d=0}){const p=i==="big"?40:24,g=i==="big"?10:8,h=Array.from({length:g},(T,w)=>360/g*w),S=Math.max(13,p*.36),x=Math.max(12,p*.3),_=Math.max(13,p*.44),E=l?d-360:d+360;return m.jsx("g",{transform:`translate(${r} ${t})`,opacity:c,children:m.jsx("g",{children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:d,to:E,dur:s,repeatCount:"indefinite"}),h.map(T=>m.jsxs("g",{transform:`rotate(${T})`,children:[m.jsx("rect",{x:-S/2,y:-p-x*.42,width:S,height:x,rx:"1",className:"create-cog-tooth"}),m.jsx("rect",{x:-S/2+2,y:-p-x*.42,width:Math.max(3,S*.28),height:x*.72,rx:"1",className:"create-cog-tooth-highlight"})]},T)),m.jsx("circle",{r:p*.9,className:"create-cog-body"}),m.jsx("circle",{r:p*.68,className:"create-cog-inner-ring"}),m.jsx("path",{d:`M${-p*.52} ${-p*.16} H${p*.5} M${-p*.45} ${p*.16} H${p*.56} M${-p*.16} ${-p*.52} V${p*.5} M${p*.16} ${-p*.45} V${p*.56}`,className:"create-cog-grain"}),m.jsx("path",{d:`M${-p*.66} ${-p*.28} L${-p*.28} ${-p*.66} M${p*.28} ${p*.66} L${p*.66} ${p*.28}`,className:"create-cog-edge-shade"}),m.jsx("rect",{x:-_/2,y:-_/2,width:_,height:_,rx:"2",transform:"rotate(45)",className:"create-cog-socket-shadow"}),m.jsx("rect",{x:-_/2+2,y:-_/2+2,width:_-4,height:_-4,rx:"1",transform:"rotate(45)",className:"create-cog-socket"})]})})})}function YA({x:r=0,y:t=0,scale:i=1}){return m.jsx("g",{className:"andesite-casing-face",transform:`translate(${r} ${t})`,"aria-hidden":"true",children:m.jsxs("g",{transform:`scale(${i})`,children:[m.jsx("rect",{x:"-20",y:"-20",width:"40",height:"40",rx:"2",className:"andesite-casing-shadow"}),m.jsx("rect",{x:"-20",y:"-20",width:"40",height:"40",rx:"2",className:"andesite-casing-frame"}),m.jsx("rect",{x:"-15",y:"-15",width:"30",height:"30",rx:"1",className:"andesite-casing-inner-frame"}),m.jsx("rect",{x:"-11",y:"-11",width:"22",height:"22",rx:"1",className:"andesite-casing-wood-base"}),m.jsx("rect",{x:"-9",y:"-9",width:"5",height:"18",className:"andesite-casing-plank dark"}),m.jsx("rect",{x:"-3",y:"-9",width:"6",height:"18",className:"andesite-casing-plank mid"}),m.jsx("rect",{x:"4",y:"-9",width:"5",height:"18",className:"andesite-casing-plank light"}),m.jsx("path",{d:"M-4 -9 V9 M4 -9 V9 M-11 -11 H11 M-11 11 H11",className:"andesite-casing-cuts"})]})})}function el({x:r,y:t,reverse:i=!1}){return m.jsx("g",{transform:`translate(${r} ${t})`,className:"belt-shaft",children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0",to:i?"-360":"360",dur:"2.2s",repeatCount:"indefinite"}),m.jsx("rect",{x:"-10",y:"-10",width:"20",height:"20",rx:"1",className:"shaft-socket-shadow"}),m.jsx("rect",{x:"-6",y:"-6",width:"12",height:"12",rx:"1",className:"shaft-socket"})]})})}function ZA({x:r,y1:t,y2:i}){const s=i-t;return m.jsxs("g",{className:"vertical-drive-shaft",transform:`translate(${r} ${t})`,"aria-hidden":"true",children:[m.jsx("defs",{children:m.jsxs("linearGradient",{id:"vertical-shaft-left-to-right-face",x1:"-18",y1:"0",x2:"18",y2:"0",gradientUnits:"userSpaceOnUse",children:[m.jsx("stop",{offset:"0",stopColor:"#30342f"}),m.jsx("stop",{offset:"0.45",stopColor:"#7f8378"}),m.jsx("stop",{offset:"1",stopColor:"#30342f"}),m.jsx("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"-18 0;18 0",dur:"1.1s",repeatCount:"indefinite"})]})}),m.jsx("rect",{x:"-10",y:"-2",width:"20",height:s+4,rx:"2",className:"vertical-shaft-shadow"}),m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"scale",values:"1 1;0.42 1;1 1;0.42 1;1 1",keyTimes:"0;0.25;0.5;0.75;1",dur:"1.1s",repeatCount:"indefinite"}),m.jsx("rect",{x:"-9",y:"0",width:"18",height:s,rx:"2",className:"vertical-shaft-body"}),m.jsx("rect",{x:"-9",y:"0",width:"18",height:s,rx:"2",className:"vertical-shaft-rotating-face",fill:"url(#vertical-shaft-left-to-right-face)"}),m.jsx("path",{d:`M0 3 V${s-3}`,className:"vertical-shaft-core-lines"}),m.jsx("rect",{x:"-9",y:"0",width:"18",height:s,rx:"2",className:"vertical-shaft-edge"})]})]})}function KA({x:r,y1:t,y2:i}){const l=i-t,c=[{x:-6,y:l-18,length:58,bend:5,delay:"0s",opacity:.54},{x:3,y:l-54,length:48,bend:-4,delay:"0.18s",opacity:.66},{x:-2,y:l-94,length:54,bend:4,delay:"0.36s",opacity:.5},{x:6,y:l-138,length:46,bend:-5,delay:"0.54s",opacity:.46}];return m.jsxs("g",{className:"vertical-shaft-wind-overlay",transform:`translate(${r} ${t})`,opacity:"0","aria-hidden":"true",children:[m.jsx("animate",{attributeName:"opacity",values:"0;0;1;0.85;0;0",keyTimes:"0;0.2;0.24;0.66;0.7;1",dur:"10s",repeatCount:"indefinite"}),m.jsx("defs",{children:m.jsx("clipPath",{id:"vertical-shaft-wind-clip",children:m.jsx("rect",{x:"-18",y:"-28",width:"36",height:l+56,rx:"5"})})}),m.jsx("g",{className:"vertical-shaft-wind",clipPath:"url(#vertical-shaft-wind-clip)",children:c.map(d=>m.jsxs("path",{d:`M${d.x} ${d.y+d.length} C${d.x+d.bend} ${d.y+d.length*.7} ${d.x-d.bend} ${d.y+d.length*.34} ${d.x} ${d.y}`,className:"vertical-shaft-wind-stream",opacity:d.opacity,children:[m.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 26;0 -46",dur:"1.15s",begin:d.delay,repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"opacity",values:"0;0.85;0.55;0",keyTimes:"0;0.22;0.58;1",dur:"1.15s",begin:d.delay,repeatCount:"indefinite"})]},`${d.x}-${d.y}`))})]})}function QA({x:r,y:t}){return m.jsx("g",{className:"mechanical-fan",transform:`translate(${r} ${t})`,"aria-hidden":"true",children:m.jsxs("g",{className:"mechanical-fan-rotor",children:[m.jsx("animate",{attributeName:"opacity",values:"0;0;0.82;0.68;0;0",keyTimes:"0;0.17;0.2;0.66;0.7;1",dur:"10s",repeatCount:"indefinite"}),m.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 12;0 12;0 0;0 -2;0 8;0 8",keyTimes:"0;0.17;0.2;0.66;0.7;1",dur:"10s",repeatCount:"indefinite",additive:"sum"}),m.jsx("animateTransform",{attributeName:"transform",type:"scale",values:"0.54;0.54;1;1;0.72;0.72",keyTimes:"0;0.17;0.2;0.66;0.7;1",dur:"10s",repeatCount:"indefinite",additive:"sum"}),m.jsxs("g",{transform:"translate(0 2)",children:[m.jsx("ellipse",{cx:"0",cy:"0",rx:"34",ry:"9",className:"mechanical-fan-rim-shadow"}),m.jsx("g",{transform:"scale(1 0.3)",children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0",to:"-1440",dur:"0.72s",repeatCount:"indefinite"}),m.jsx("ellipse",{cx:"0",cy:"-15",rx:"5",ry:"20",className:"mechanical-fan-blade"}),m.jsx("ellipse",{cx:"0",cy:"15",rx:"5",ry:"20",className:"mechanical-fan-blade"}),m.jsx("ellipse",{cx:"-15",cy:"0",rx:"20",ry:"5",className:"mechanical-fan-blade"}),m.jsx("ellipse",{cx:"15",cy:"0",rx:"20",ry:"5",className:"mechanical-fan-blade"}),m.jsx("circle",{r:"8",className:"mechanical-fan-hub"})]})}),m.jsx("ellipse",{cx:"0",cy:"0",rx:"34",ry:"9",className:"mechanical-fan-rim"}),m.jsx("ellipse",{cx:"0",cy:"0",rx:"8",ry:"3.2",className:"mechanical-fan-hub-cap"})]})]})})}function JA(){const r=Array.from({length:16},(c,d)=>d),t=`
    M86 462
    L476 462
    C490 462 504 473 504 486
    C504 499 490 510 476 510
    L86 510
    C72 510 58 499 58 486
    C58 473 72 462 86 462
    Z
  `,i=`
    M90 478
    L472 478
    C480 478 486 482 486 486
    C486 490 480 494 472 494
    L90 494
    C82 494 76 490 76 486
    C76 482 82 478 90 478
    Z
  `;return m.jsxs("g",{className:"mechanical-belt-side",children:[m.jsxs("defs",{children:[m.jsxs("mask",{id:"mechanical-belt-top-mask",maskUnits:"userSpaceOnUse",children:[m.jsx("rect",{x:"0",y:"430",width:"580",height:"110",fill:"black"}),m.jsx("path",{d:`
    M86 462
    L476 462
    C490 462 504 473 504 486
    L486 486
    C486 482 480 478 472 478
    L90 478
    C82 478 76 482 76 486
    L58 486
    C58 473 72 462 86 462
    Z
  `,fill:"white"})]}),m.jsxs("mask",{id:"mechanical-belt-bottom-mask",maskUnits:"userSpaceOnUse",children:[m.jsx("rect",{x:"0",y:"430",width:"580",height:"110",fill:"black"}),m.jsx("path",{d:`
    M76 486
    C76 490 82 494 90 494
    L472 494
    C480 494 486 490 486 486
    L504 486
    C504 499 490 510 476 510
    L86 510
    C72 510 58 499 58 486
    Z
  `,fill:"white"})]})]}),m.jsx("path",{d:`${t} ${i}`,fillRule:"evenodd",className:"mechanical-belt-side-shadow"}),m.jsx("path",{d:`${t} ${i}`,fillRule:"evenodd",className:"mechanical-belt-side-body"}),m.jsx("path",{d:t,className:"mechanical-belt-side-outer-edge"}),m.jsx("path",{d:i,className:"mechanical-belt-side-inner-edge"}),m.jsx("path",{d:"M88 466 H474",className:"mechanical-belt-side-highlight"}),m.jsx("g",{mask:"url(#mechanical-belt-top-mask)",children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"-36 0;0 0",dur:"1.1s",repeatCount:"indefinite"}),r.map(c=>m.jsx("path",{d:`M${50+c*36} 456 L${74+c*36} 516`,className:"mechanical-belt-side-rib"},c))]})}),m.jsx("g",{mask:"url(#mechanical-belt-bottom-mask)",children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0;-36 0",dur:"1.1s",repeatCount:"indefinite"}),r.map(c=>m.jsx("path",{d:`M${50+c*36} 456 L${74+c*36} 516`,className:"mechanical-belt-side-rib"},c))]})})]})}function $A(){const r=Array.from({length:16},(c,d)=>d),t=`
    M118 248
    L492 248
    C506 248 520 259 520 272
    C520 285 506 296 492 296
    L118 296
    C104 296 90 285 90 272
    C90 259 104 248 118 248
    Z
  `,i=`
    M122 264
    L488 264
    C496 264 502 268 502 272
    C502 276 496 280 488 280
    L122 280
    C114 280 108 276 108 272
    C108 268 114 264 122 264
    Z
  `;return m.jsxs("g",{className:"mechanical-belt-side top-return-belt",children:[m.jsxs("defs",{children:[m.jsxs("mask",{id:"top-return-belt-top-mask",maskUnits:"userSpaceOnUse",children:[m.jsx("rect",{x:"0",y:"214",width:"580",height:"110",fill:"black"}),m.jsx("path",{d:`
    M118 248
    L492 248
    C506 248 520 259 520 272
    L502 272
    C502 268 496 264 488 264
    L122 264
    C114 264 108 268 108 272
    L90 272
    C90 259 104 248 118 248
    Z
  `,fill:"white"})]}),m.jsxs("mask",{id:"top-return-belt-bottom-mask",maskUnits:"userSpaceOnUse",children:[m.jsx("rect",{x:"0",y:"214",width:"580",height:"110",fill:"black"}),m.jsx("path",{d:`
    M108 272
    C108 276 114 280 122 280
    L488 280
    C496 280 502 276 502 272
    L520 272
    C520 285 506 296 492 296
    L118 296
    C104 296 90 285 90 272
    Z
  `,fill:"white"})]})]}),m.jsx("path",{d:`${t} ${i}`,fillRule:"evenodd",className:"mechanical-belt-side-shadow"}),m.jsx("path",{d:`${t} ${i}`,fillRule:"evenodd",className:"mechanical-belt-side-body"}),m.jsx("path",{d:t,className:"mechanical-belt-side-outer-edge"}),m.jsx("path",{d:i,className:"mechanical-belt-side-inner-edge"}),m.jsx("path",{d:"M120 252 H490",className:"mechanical-belt-side-highlight"}),m.jsx("g",{mask:"url(#top-return-belt-top-mask)",children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0;-36 0",dur:"1.1s",repeatCount:"indefinite"}),r.map(c=>m.jsx("path",{d:`M${50+c*36} 242 L${74+c*36} 302`,className:"mechanical-belt-side-rib"},c))]})}),m.jsx("g",{mask:"url(#top-return-belt-bottom-mask)",children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"-36 0;0 0",dur:"1.1s",repeatCount:"indefinite"}),r.map(c=>m.jsx("path",{d:`M${50+c*36} 242 L${74+c*36} 302`,className:"mechanical-belt-side-rib"},c))]})})]})}function e2(){const r=Array.from({length:7},(c,d)=>d),t=`
    M486 462
    L522 462
    C536 462 550 473 550 486
    C550 499 536 510 522 510
    L486 510
    C472 510 458 499 458 486
    C458 473 472 462 486 462
    Z
  `,i=`
    M490 478
    L518 478
    C526 478 532 482 532 486
    C532 490 526 494 518 494
    L490 494
    C482 494 476 490 476 486
    C476 482 482 478 490 478
    Z
  `;return m.jsxs("g",{className:"mechanical-belt-side casing-top-transfer-belt","aria-hidden":"true",children:[m.jsxs("defs",{children:[m.jsxs("mask",{id:"casing-top-belt-top-mask",maskUnits:"userSpaceOnUse",children:[m.jsx("rect",{x:"448",y:"450",width:"152",height:"74",fill:"black"}),m.jsx("path",{d:`
    M486 462
    L522 462
    C536 462 550 473 550 486
    L532 486
    C532 482 526 478 518 478
    L490 478
    C482 478 476 482 476 486
    L458 486
    C458 473 472 462 486 462
    Z
  `,fill:"white"})]}),m.jsxs("mask",{id:"casing-top-belt-bottom-mask",maskUnits:"userSpaceOnUse",children:[m.jsx("rect",{x:"448",y:"450",width:"152",height:"74",fill:"black"}),m.jsx("path",{d:`
    M476 486
    C476 490 482 494 490 494
    L518 494
    C526 494 532 490 532 486
    L550 486
    C550 499 536 510 522 510
    L486 510
    C472 510 458 499 458 486
    Z
  `,fill:"white"})]})]}),m.jsx("path",{d:`${t} ${i}`,fillRule:"evenodd",className:"mechanical-belt-side-shadow"}),m.jsx("path",{d:`${t} ${i}`,fillRule:"evenodd",className:"mechanical-belt-side-body"}),m.jsx("path",{d:t,className:"mechanical-belt-side-outer-edge"}),m.jsx("path",{d:i,className:"mechanical-belt-side-inner-edge"}),m.jsx("path",{d:"M488 470 H520",className:"mechanical-belt-side-highlight"}),m.jsx("g",{mask:"url(#casing-top-belt-top-mask)",children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"-20 0;0 0",dur:"0.8s",repeatCount:"indefinite"}),r.map(c=>m.jsx("path",{d:`M${450+c*20} 456 L${466+c*20} 516`,className:"mechanical-belt-side-rib"},c))]})}),m.jsx("g",{mask:"url(#casing-top-belt-bottom-mask)",children:m.jsxs("g",{children:[m.jsx("animateTransform",{attributeName:"transform",type:"translate",values:"0 0;-20 0",dur:"0.8s",repeatCount:"indefinite"}),r.map(c=>m.jsx("path",{d:`M${450+c*20} 456 L${466+c*20} 516`,className:"mechanical-belt-side-rib"},c))]})}),m.jsx(el,{x:522,y:486})]})}function t2(){return m.jsxs("g",{className:"workshop-module circulating-module","aria-hidden":"true",children:[m.jsx("animateMotion",{path:"M58 388 C58 408 58 424 58 430 L430 430 C468 430 497 408 497 376 L497 220 L140 220",keyPoints:"0;0.041;0.408;0.494;0.648;1;1",keyTimes:"0;0.033;0.326;0.395;0.518;0.8;1",calcMode:"linear",dur:"10s",repeatCount:"indefinite"}),m.jsx("animate",{attributeName:"opacity",values:"1;1;0;0",keyTimes:"0;0.8;0.801;1",dur:"10s",repeatCount:"indefinite"}),m.jsx("rect",{x:"3",y:"4",width:"54",height:"28",rx:"3",className:"circulating-module-shadow"}),m.jsx("rect",{x:"0",y:"0",width:"54",height:"28",rx:"3",className:"circulating-module-body"}),m.jsx("path",{d:"M8 8 H46 M8 20 H46 M27 3 V25",className:"workshop-module-cuts"}),m.jsx("rect",{x:"7",y:"-6",width:"40",height:"8",rx:"2",className:"workshop-brass-cap"}),m.jsx("text",{x:"27",y:"18",textAnchor:"middle",fontFamily:"JetBrains Mono",fontSize:"8.5",fill:"var(--text)",children:"UI"})]})}function dv({x:r,y:t}){return m.jsxs("g",{className:"workshop-chute",transform:`translate(${r} ${t})`,"aria-hidden":"true",children:[m.jsx("rect",{x:"0",y:"0",width:"60",height:"48",className:"workshop-chute-body"}),m.jsx("rect",{x:"11",y:"48",width:"38",height:"22",className:"workshop-chute-neck"}),m.jsx("path",{d:"M8 15 H52 M8 31 H52",className:"workshop-chute-cuts"}),m.jsx("path",{d:"M0 0 V48 H60 V0 M11 48 H49",className:"workshop-chute-edges"})]})}function n2(){return m.jsxs("g",{className:"workshop-chute-stack",children:[m.jsx(dv,{x:51,y:252}),m.jsx(dv,{x:51,y:322})]})}function i2({x:r,y:t,scale:i=1}){return m.jsxs("g",{className:"wooden-barrel",transform:`translate(${r} ${t}) scale(${i})`,"aria-hidden":"true",children:[m.jsx("rect",{x:"0",y:"0",width:"44",height:"44",className:"wooden-barrel-frame"}),m.jsx("rect",{x:"4",y:"4",width:"36",height:"36",className:"wooden-barrel-face"}),m.jsx("path",{d:"M12 8 H32 V12 H36 V32 H32 V36 H12 V32 H8 V12 H12 Z",className:"wooden-barrel-head"}),m.jsx("rect",{x:"12",y:"8",width:"8",height:"4",className:"wooden-barrel-pixel light"}),m.jsx("rect",{x:"28",y:"12",width:"4",height:"20",className:"wooden-barrel-pixel shade"}),m.jsx("rect",{x:"12",y:"32",width:"20",height:"4",className:"wooden-barrel-pixel shade"}),m.jsx("rect",{x:"18",y:"14",width:"4",height:"16",className:"wooden-barrel-seam"}),m.jsx("path",{d:"M12 8 H32 M8 12 V32 M32 36 H12 M36 12 V32",className:"wooden-barrel-cuts"}),m.jsx("rect",{x:"10",y:"18",width:"7",height:"8",className:"wooden-barrel-latch"}),m.jsx("rect",{x:"12",y:"19",width:"3",height:"6",className:"wooden-barrel-latch-highlight"})]})}function a2({x:r,y:t,scale:i=1}){return m.jsxs("g",{className:"andesite-funnel",transform:`translate(${r} ${t}) scale(${i})`,"aria-hidden":"true",children:[m.jsx("rect",{x:"0",y:"0",width:"18",height:"8",className:"andesite-funnel-top"}),m.jsxs("g",{transform:"translate(0 8)",children:[m.jsx("rect",{x:"0",y:"0",width:"18",height:"44",className:"andesite-funnel-body"}),m.jsx("rect",{x:"3",y:"10",width:"3",height:"30",className:"andesite-funnel-stripe dark"}),m.jsx("rect",{x:"8",y:"10",width:"3",height:"30",className:"andesite-funnel-stripe mid"}),m.jsx("rect",{x:"13",y:"10",width:"3",height:"30",className:"andesite-funnel-stripe light"}),m.jsx("path",{d:"M0 0 H18 M0 0 V44 M18 0 V44 M0 44 H18",className:"andesite-funnel-edges"})]})]})}function hv({x:r,y:t,width:i,height:s,label:l,cogSize:c="big",reverse:d=!1,duration:p="7s",rotationOffset:g=0}){return m.jsxs("g",{className:"cogwheel",children:[m.jsx(Or,{x:r+i/2,y:t+s/2,size:c,duration:p,reverse:d,rotationOffset:g}),m.jsx("text",{x:r+i/2,y:t+s+20,textAnchor:"middle",fontFamily:"JetBrains Mono",fontSize:"8.5",fill:"var(--brass)",opacity:"0.72",children:l})]})}function s2(){return m.jsxs("g",{className:"create-contraption workshop-contraption",children:[m.jsx("rect",{x:"74",y:"86",width:"462",height:"382",rx:"6",className:"workshop-backplate"}),m.jsx("path",{d:"M85 272 V430 H505 V272 H85",className:"workshop-loop-guide"}),m.jsxs("g",{className:"workshop-powertrain",transform:"translate(21 0)",children:[m.jsx(hv,{x:128,y:162,width:126,height:116,label:"COMPONENTS",cogSize:"big",reverse:!0,duration:"8s",rotationOffset:9}),m.jsx(Or,{x:243,y:168,size:"small",duration:"6.4s",rotationOffset:22.5,opacity:"0.9"}),m.jsx(Or,{x:295,y:168,size:"small",duration:"6.4s",reverse:!0,opacity:"0.9"}),m.jsx(Or,{x:347,y:168,size:"small",duration:"6.4s",rotationOffset:22.5,opacity:"0.9"}),m.jsx(hv,{x:340,y:166,width:118,height:108,label:"ROUTING",cogSize:"big",reverse:!0,duration:"8s",rotationOffset:27}),m.jsx(Or,{x:451,y:272,size:"small",duration:"6.4s",rotationOffset:22.5,opacity:"0.88"}),m.jsx(Or,{x:503,y:272,size:"small",duration:"6.4s",reverse:!0,opacity:"0.86"})]}),m.jsx(ZA,{x:524,y1:272,y2:486}),m.jsxs("g",{className:"workshop-conveyor",children:[m.jsx(YA,{x:524,y:486,scale:1.45}),m.jsx(e2,{}),m.jsx(JA,{}),m.jsx(el,{x:86,y:486}),m.jsx(el,{x:476,y:486})]}),m.jsxs("g",{className:"workshop-top-return",transform:"translate(32 0)",children:[m.jsx($A,{}),m.jsx(el,{x:118,y:272,reverse:!0}),m.jsx(el,{x:492,y:272,reverse:!0}),m.jsx(i2,{x:13.8,y:178,scale:1.595}),m.jsx(a2,{x:84,y:178,scale:1.35})]}),m.jsx(KA,{x:524,y1:272,y2:486}),m.jsx(t2,{}),m.jsx(n2,{}),m.jsx(QA,{x:524,y:538}),m.jsx("rect",{x:"88",y:"570",width:"170",height:"17",rx:"2",fill:"var(--brass)",opacity:"0.12"}),m.jsx("text",{x:"173",y:"582",textAnchor:"middle",fontFamily:"JetBrains Mono",fontSize:"8.5",fill:"var(--brass)",opacity:"0.72",children:"MODULAR FRONTEND"}),m.jsx("rect",{x:"358",y:"570",width:"166",height:"17",rx:"2",fill:"var(--copper)",opacity:"0.12"}),m.jsx("text",{x:"441",y:"582",textAnchor:"middle",fontFamily:"JetBrains Mono",fontSize:"8.5",fill:"var(--copper)",opacity:"0.7",children:"ASSEMBLED SYSTEMS"})]})}function r2(){if(typeof window>"u")return"light";const r=window.localStorage.getItem("theme");return r==="dark"||r==="light"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ln({name:r,size:t=16,className:i="",strokeWidth:s=1.8,title:l,style:c}){const d={gear:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}),m.jsx("path",{d:"M19.4 15a1.7 1.7 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.82-.33 1.7 1.7 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.68 15a1.7 1.7 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.68a1.7 1.7 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.51 1.7 1.7 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1Z"})]}),sun:m.jsxs(m.Fragment,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"4"}),m.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"})]}),moon:m.jsx("path",{d:"M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z"}),arrowDown:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M12 5v14"}),m.jsx("path",{d:"m6 13 6 6 6-6"})]}),externalLink:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M7 17 17 7"}),m.jsx("path",{d:"M9 7h8v8"})]}),download:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M12 3v12"}),m.jsx("path",{d:"m7 10 5 5 5-5"}),m.jsx("path",{d:"M5 21h14"})]}),github:m.jsx("path",{d:"M9 19c-4 1.2-4-2-5.6-2.4M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.3 5.5-6A4.6 4.6 0 0 0 18.7 7a4.3 4.3 0 0 0-.1-3.5s-1.1-.3-3.6 1.3a12.2 12.2 0 0 0-6 0C6.5 3.2 5.4 3.5 5.4 3.5A4.3 4.3 0 0 0 5.3 7 4.6 4.6 0 0 0 4 10.5c0 4.7 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"}),linkedin:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M16 8a5 5 0 0 1 5 5v6h-4v-6a1 1 0 0 0-2 0v6h-4V8h4v1.3A4 4 0 0 1 16 8Z"}),m.jsx("rect",{x:"3",y:"8",width:"4",height:"11",rx:"1"}),m.jsx("circle",{cx:"5",cy:"4.5",r:"2"})]}),mail:m.jsxs(m.Fragment,{children:[m.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),m.jsx("path",{d:"m3 7 9 6 9-6"})]}),package:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"m21 8-9-5-9 5 9 5 9-5Z"}),m.jsx("path",{d:"M3 8v8l9 5 9-5V8"}),m.jsx("path",{d:"M12 13v8"})]}),paw:m.jsxs(m.Fragment,{children:[m.jsx("circle",{cx:"7",cy:"8",r:"1.8"}),m.jsx("circle",{cx:"12",cy:"6",r:"1.8"}),m.jsx("circle",{cx:"17",cy:"8",r:"1.8"}),m.jsx("circle",{cx:"8.5",cy:"13",r:"1.6"}),m.jsx("circle",{cx:"15.5",cy:"13",r:"1.6"}),m.jsx("path",{d:"M8 18c0-2.4 1.8-4 4-4s4 1.6 4 4c0 1.3-.9 2-2 2h-4c-1.1 0-2-.7-2-2Z"})]}),cart:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M3 4h2l2.3 10.5A2 2 0 0 0 9.3 16H18a2 2 0 0 0 1.9-1.4L21 8H6"}),m.jsx("circle",{cx:"9",cy:"20",r:"1.5"}),m.jsx("circle",{cx:"18",cy:"20",r:"1.5"})]}),brain:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5.2A3.5 3.5 0 0 0 7.5 18H9V4Z"}),m.jsx("path",{d:"M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5.2A3.5 3.5 0 0 1 16.5 18H15V4Z"}),m.jsx("path",{d:"M9 8H7.5M15 8h1.5M9 12H7M15 12h2M9 16H7.5M15 16h1.5"})]}),globe:m.jsxs(m.Fragment,{children:[m.jsx("circle",{cx:"12",cy:"12",r:"9"}),m.jsx("path",{d:"M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"})]}),plus:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M12 5v14"}),m.jsx("path",{d:"M5 12h14"})]}),code:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"m8 8-4 4 4 4"}),m.jsx("path",{d:"m16 8 4 4-4 4"}),m.jsx("path",{d:"m14 5-4 14"})]}),layers:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"m12 3 9 5-9 5-9-5 9-5Z"}),m.jsx("path",{d:"m3 12 9 5 9-5"}),m.jsx("path",{d:"m3 16 9 5 9-5"})]}),database:m.jsxs(m.Fragment,{children:[m.jsx("ellipse",{cx:"12",cy:"5",rx:"7",ry:"3"}),m.jsx("path",{d:"M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"}),m.jsx("path",{d:"M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"})]}),cloud:m.jsx("path",{d:"M17.5 19H8a5 5 0 1 1 .9-9.9A6.5 6.5 0 0 1 21 12.4 3.8 3.8 0 0 1 17.5 19Z"}),tool:m.jsxs(m.Fragment,{children:[m.jsx("path",{d:"M14.7 6.3a4 4 0 0 0 3 5.3l-8.5 8.5a2 2 0 0 1-2.8-2.8l8.5-8.5a4 4 0 0 0 5.3-3l-2.5 2.5-2.5-2.5 2.5-2.5a4 4 0 0 0-3 3Z"}),m.jsx("path",{d:"M6.5 17.5 4 20"})]})};return m.jsxs("svg",{className:`ui-icon ${i}`.trim(),width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:s,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":l?void 0:!0,role:l?"img":void 0,style:c,children:[l&&m.jsx("title",{children:l}),d[r]||d.tool]})}function ih({className:r="",reverse:t=!1,color:i="var(--brass)"}){return m.jsxs("div",{className:`cog-divider ${r}`.trim(),children:[m.jsx("div",{className:"cog-divider-line"}),m.jsx(ln,{name:"gear",size:22,className:t?"cog-icon-r":"cog-icon",style:{color:i}}),m.jsx("div",{className:"cog-divider-line"})]})}function Dr({icon:r}){return m.jsxs("div",{className:"project-icon-row",children:[m.jsx("div",{className:"project-glyph",children:m.jsx(ln,{name:r})}),m.jsx("span",{className:"proj-link",children:m.jsx(ln,{name:"externalLink",size:17})})]})}function Wc({icon:r,reverse:t=!1,duration:i="8s",children:s}){return m.jsxs("div",{className:"skill-group-head",children:[m.jsx(ln,{name:r,size:14,className:t?"spinning-ccw":"spinning-cw",style:{"--dur":i}}),m.jsx("span",{children:s})]})}function Pn({icon:r="tool",level:t=70,children:i}){const s=Math.max(1,Math.min(5,Math.round(t/20)));return m.jsx("div",{className:"skill-item",children:m.jsxs("div",{className:"skill-item-main",children:[m.jsx(ln,{name:r,className:"skill-cog"}),m.jsx("span",{children:i}),m.jsx("span",{className:"skill-rating","aria-label":`${s} out of 5 proficiency`,children:Array.from({length:5},(l,c)=>m.jsx("span",{className:c<s?"filled":""},c))})]})})}function qc(r){typeof window>"u"||window.dispatchEvent(new CustomEvent("projects-hologram-focus",{detail:{cubeIndex:r}}))}function Ur(r){return{onMouseEnter:()=>qc(r),onFocus:()=>qc(r),onMouseLeave:()=>qc(null),onBlur:()=>qc(null)}}function o2(){const[r,t]=Pr.useState(r2);Pr.useEffect(()=>{document.documentElement.setAttribute("data-theme",r),window.localStorage.setItem("theme",r)},[r]);const i=()=>{t(s=>s==="dark"?"light":"dark")};return m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"schematic-bg"}),m.jsxs("nav",{children:[m.jsxs("a",{className:"nav-logo",href:"#",children:[m.jsx(ln,{name:"gear",className:"nav-gear-sm"}),"TJ Cariño"]}),m.jsxs("ul",{className:"nav-links",children:[m.jsx("li",{children:m.jsx("a",{href:"#about",children:"about"})}),m.jsx("li",{children:m.jsx("a",{href:"#experience",children:"experience"})}),m.jsx("li",{children:m.jsx("a",{href:"#projects",children:"projects"})}),m.jsx("li",{children:m.jsx("a",{href:"#skills",children:"skills"})}),m.jsx("li",{children:m.jsx("a",{href:"#contact",children:"contact"})})]}),m.jsxs("div",{className:"nav-right",children:[m.jsx("button",{className:"theme-toggle",onClick:i,"aria-label":`Switch to ${r==="dark"?"light":"dark"} theme`,title:`Switch to ${r==="dark"?"light":"dark"} theme`,children:m.jsx(ln,{name:r==="dark"?"moon":"sun",size:15})}),m.jsx("a",{className:"btn-hire",href:"mailto:carinotj19@gmail.com",children:"Hire Me"})]})]}),m.jsxs("section",{id:"hero",children:[m.jsx("div",{className:"hero-machinery",children:m.jsx("svg",{viewBox:"0 0 600 700",width:"100%",height:"100%",style:{position:"absolute",top:"0",right:"0"},fill:"none",xmlns:"http://www.w3.org/2000/svg",children:m.jsx(s2,{})})}),m.jsxs("p",{className:"hero-eyebrow",children:[m.jsx("span",{className:"eyebrow-line"}),"available for opportunities"]}),m.jsxs("h1",{className:"hero-name",children:["TJ",m.jsx("br",{}),m.jsx("span",{className:"hero-name-accent",children:"Cariño"})]}),m.jsxs("p",{className:"hero-title",children:[m.jsx(ln,{name:"gear",size:14,className:"hero-title-icon"}),"Frontend Developer · Full-Stack Builder"]}),m.jsx("p",{className:"hero-sub",children:"Crafting fast, responsive web experiences from pixel-perfect UI to full-stack platforms. Baguio City, Philippines."}),m.jsxs("div",{className:"hero-actions",children:[m.jsxs("a",{className:"btn-primary",href:"#projects",children:["View My Work ",m.jsx(ln,{name:"arrowDown",size:15,className:"btn-icon"})]}),m.jsxs("a",{className:"btn-ghost",href:"https://github.com/carinotj19",target:"_blank",rel:"noreferrer",children:[m.jsx(ln,{name:"github",size:15,className:"btn-icon"}),"GitHub"]})]}),m.jsxs("div",{className:"hero-stats",children:[m.jsxs("div",{className:"stat",children:[m.jsx("div",{className:"stat-val",children:"4+"}),m.jsx("div",{className:"stat-label",children:"yrs experience"})]}),m.jsxs("div",{className:"stat",children:[m.jsx("div",{className:"stat-val",children:"300+"}),m.jsx("div",{className:"stat-label",children:"sites managed"})]}),m.jsxs("div",{className:"stat",children:[m.jsx("div",{className:"stat-val",children:"1K+"}),m.jsx("div",{className:"stat-label",children:"tickets / month"})]}),m.jsxs("div",{className:"stat",children:[m.jsx("div",{className:"stat-val",children:"30"}),m.jsx("div",{className:"stat-label",children:"public repos"})]})]})]}),m.jsx(ih,{className:"hero-divider"}),m.jsx("section",{id:"about",children:m.jsxs("div",{className:"about-grid",children:[m.jsxs("div",{className:"about-text",children:[m.jsx("p",{className:"section-label",children:"about me"}),m.jsxs("h2",{className:"section-title",children:["The Contraption",m.jsx("br",{}),"Behind the Code"]}),m.jsx("p",{children:"I'm a frontend-focused developer with a strong eye for UI and a knack for solving production problems at scale. I thrive in ticket-driven environments and love making complex systems feel simple."}),m.jsxs("p",{children:["Currently working remotely as a ",m.jsx("strong",{children:"Frontend Developer at Pixel Motion"}),", managing 300+ WordPress sites and resolving up to 1,100 support tickets per month. Previously built full-stack platforms at ",m.jsx("strong",{children:"Atis Software"})," in Amsterdam."]}),m.jsxs("p",{children:["Finishing my ",m.jsx("strong",{children:"B.S. in Computer Science"})," at the University of the Cordilleras (August 2025) and open to new opportunities — full-time or freelance."]}),m.jsxs("div",{className:"badge-list",children:[m.jsx("span",{className:"badge",children:"React"}),m.jsx("span",{className:"badge",children:"WordPress"}),m.jsx("span",{className:"badge",children:"JavaScript"}),m.jsx("span",{className:"badge",children:"PHP"}),m.jsx("span",{className:"badge",children:"Docker"}),m.jsx("span",{className:"badge",children:"AWS"}),m.jsx("span",{className:"badge",children:"Three.js"}),m.jsx("span",{className:"badge",children:"MongoDB"})]})]}),m.jsxs("div",{className:"about-stack",children:[m.jsxs("div",{className:"about-plate",children:[m.jsxs("div",{className:"plate-header",children:[m.jsx(ln,{name:"gear",size:13}),"OPERATOR MANIFEST"]}),m.jsxs("div",{className:"plate-row",children:[m.jsx("div",{className:"plate-key",children:"Location"}),m.jsx("div",{className:"plate-val",children:"Baguio City, Philippines"})]}),m.jsxs("div",{className:"plate-row",children:[m.jsx("div",{className:"plate-key",children:"Degree"}),m.jsx("div",{className:"plate-val",children:"B.S. Computer Science — Univ. of the Cordilleras"})]}),m.jsxs("div",{className:"plate-row",children:[m.jsx("div",{className:"plate-key",children:"Email"}),m.jsx("div",{className:"plate-val",children:m.jsx("a",{href:"mailto:carinotj19@gmail.com",children:"carinotj19@gmail.com"})})]}),m.jsxs("div",{className:"plate-row",children:[m.jsx("div",{className:"plate-key",children:"GitHub"}),m.jsx("div",{className:"plate-val",children:m.jsx("a",{href:"https://github.com/carinotj19",target:"_blank",rel:"noreferrer",children:"carinotj19"})})]}),m.jsxs("div",{className:"plate-row",children:[m.jsx("div",{className:"plate-key",children:"Status"}),m.jsxs("div",{className:"plate-val",children:[m.jsx("span",{className:"status-dot"}),"Open to opportunities"]})]}),m.jsxs("div",{className:"plate-row",children:[m.jsx("div",{className:"plate-key",children:"Phone"}),m.jsx("div",{className:"plate-val",children:"(+63) 968-758-3783"})]})]}),m.jsxs("div",{className:"parameters-panel",children:[m.jsxs("div",{className:"plate-header",children:[m.jsx(ln,{name:"tool",size:13}),"WORKING PARAMETERS"]}),m.jsxs("div",{className:"parameter-grid",children:[m.jsxs("div",{className:"parameter-item",children:[m.jsx(ln,{name:"globe",size:15}),m.jsx("span",{children:"Remote-ready"})]}),m.jsxs("div",{className:"parameter-item",children:[m.jsx(ln,{name:"code",size:15}),m.jsx("span",{children:"Frontend-focused"})]}),m.jsxs("div",{className:"parameter-item",children:[m.jsx(ln,{name:"mail",size:15}),m.jsx("span",{children:"Full-time / freelance"})]})]}),m.jsx("div",{className:"parameter-actions",children:m.jsxs("a",{className:"cv-download",href:"/OnlinePortfolio/TJ-Carino-CV.pdf",download:!0,children:[m.jsx(ln,{name:"download",size:15}),"Download CV"]})})]})]})]})}),m.jsx(ih,{className:"experience-divider",reverse:!0,color:"var(--copper)"}),m.jsxs("section",{id:"experience",style:{maxWidth:"1100px",margin:"0 auto"},children:[m.jsx("p",{className:"section-label",children:"experience"}),m.jsx("h2",{className:"section-title",children:"The Workshop Log"}),m.jsxs("div",{className:"exp-item",children:[m.jsxs("div",{className:"exp-date",children:[m.jsx("span",{children:"Apr 2024"}),m.jsx("span",{children:"Present"}),m.jsx("small",{children:"Remote"})]}),m.jsx("div",{className:"exp-pipe",children:m.jsx("div",{className:"exp-pip"})}),m.jsxs("div",{className:"exp-card",children:[m.jsx("div",{className:"exp-company",children:"Pixel Motion · Costa Mesa, CA — Remote"}),m.jsx("div",{className:"exp-role",children:"Frontend Developer"}),m.jsx("div",{className:"exp-type",children:"Production Support"}),m.jsxs("div",{className:"exp-metrics",children:[m.jsx("span",{children:"300+ sites"}),m.jsx("span",{children:"900-1,100 tickets / month"}),m.jsx("span",{children:"ACF layouts"})]}),m.jsxs("ul",{className:"exp-impact",children:[m.jsx("li",{children:"Maintained a high-volume WordPress portfolio across multiple client sites."}),m.jsx("li",{children:"Built responsive pages from Figma designs with flexible ACF layouts."}),m.jsx("li",{children:"Resolved production support and development tickets while keeping deployments moving."})]}),m.jsxs("div",{className:"exp-tags",children:[m.jsx("span",{className:"tag",children:"WordPress"}),m.jsx("span",{className:"tag",children:"HTML/CSS"}),m.jsx("span",{className:"tag",children:"JavaScript"}),m.jsx("span",{className:"tag",children:"jQuery"}),m.jsx("span",{className:"tag",children:"ACF"}),m.jsx("span",{className:"tag",children:"Figma"})]})]})]}),m.jsxs("div",{className:"exp-item",children:[m.jsxs("div",{className:"exp-date",children:[m.jsx("span",{children:"Dec 2022"}),m.jsx("span",{children:"Dec 2023"}),m.jsx("small",{children:"Remote"})]}),m.jsx("div",{className:"exp-pipe",children:m.jsx("div",{className:"exp-pip"})}),m.jsxs("div",{className:"exp-card",children:[m.jsx("div",{className:"exp-company",children:"Atis Software · Amsterdam, Netherlands — Remote"}),m.jsx("div",{className:"exp-role",children:"Junior Software Developer"}),m.jsx("div",{className:"exp-type",children:"Full-stack Build"}),m.jsxs("div",{className:"exp-metrics",children:[m.jsx("span",{children:"React platform"}),m.jsx("span",{children:"REST APIs"}),m.jsx("span",{children:"VPS deployment"})]}),m.jsxs("ul",{className:"exp-impact",children:[m.jsx("li",{children:"Designed and deployed a full-stack web platform using React and Strapi."}),m.jsx("li",{children:"Built API flows and managed server deployment with CapRover and Docker."}),m.jsx("li",{children:"Integrated AWS S3 storage and SES transactional email."})]}),m.jsxs("div",{className:"exp-tags",children:[m.jsx("span",{className:"tag",children:"React"}),m.jsx("span",{className:"tag",children:"Strapi"}),m.jsx("span",{className:"tag",children:"Docker"}),m.jsx("span",{className:"tag",children:"AWS S3"}),m.jsx("span",{className:"tag",children:"AWS SES"}),m.jsx("span",{className:"tag",children:"REST API"})]})]})]}),m.jsxs("div",{className:"exp-item",children:[m.jsxs("div",{className:"exp-date",children:[m.jsx("span",{children:"Mar 2020"}),m.jsx("span",{children:"Nov 2021"}),m.jsx("small",{children:"On-site"})]}),m.jsx("div",{className:"exp-pipe",children:m.jsx("div",{className:"exp-pip"})}),m.jsxs("div",{className:"exp-card",children:[m.jsx("div",{className:"exp-company",children:"CriminTech · Baguio City, Philippines — On-site"}),m.jsx("div",{className:"exp-role",children:"WordPress Developer"}),m.jsx("div",{className:"exp-type",children:"Learning Platform"}),m.jsxs("div",{className:"exp-metrics",children:[m.jsx("span",{children:"LMS workflows"}),m.jsx("span",{children:"Course modules"}),m.jsx("span",{children:"Plugin work"})]}),m.jsxs("ul",{className:"exp-impact",children:[m.jsx("li",{children:"Developed and maintained a WordPress e-learning platform for criminology students."}),m.jsx("li",{children:"Supported course modules, quizzes, progress tracking, and grading workflows."}),m.jsx("li",{children:"Integrated third-party services for video delivery and learning operations."})]}),m.jsxs("div",{className:"exp-tags",children:[m.jsx("span",{className:"tag",children:"WordPress"}),m.jsx("span",{className:"tag",children:"PHP"}),m.jsx("span",{className:"tag",children:"LMS"}),m.jsx("span",{className:"tag",children:"Plugin Dev"})]})]})]})]}),m.jsx(ih,{className:"projects-divider"}),m.jsxs("section",{id:"projects",children:[m.jsx(qA,{}),m.jsx("p",{className:"section-label",children:"projects"}),m.jsx("h2",{className:"section-title",children:"The Assembly Floor"}),m.jsxs("div",{className:"projects-grid",children:[m.jsxs("a",{className:"project-card",href:"https://github.com/carinotj19/CabKit3D",target:"_blank",rel:"noreferrer",...Ur(0),children:[m.jsx(Dr,{icon:"package"}),m.jsx("div",{className:"project-title",children:"CabKit3D"}),m.jsx("div",{className:"project-desc",children:"Web-based 3D cabinet configurator with real-time customization, exploded/turntable views, live pricing, and deterministic SKU JSON & BOM CSV export."}),m.jsxs("div",{className:"project-tags",children:[m.jsx("span",{className:"tag",children:"React"}),m.jsx("span",{className:"tag",children:"Three.js"}),m.jsx("span",{className:"tag",children:"Vite"}),m.jsx("span",{className:"tag",children:"3D"})]})]}),m.jsxs("a",{className:"project-card",href:"https://github.com/carinotj19/ShelterSync",target:"_blank",rel:"noreferrer",...Ur(1),children:[m.jsx(Dr,{icon:"paw"}),m.jsx("div",{className:"project-title",children:"ShelterSync"}),m.jsx("div",{className:"project-desc",children:"Full-stack MERN pet adoption platform enabling shelters and adopters to manage listings, adoption requests, and workflows via RESTful APIs."}),m.jsxs("div",{className:"project-tags",children:[m.jsx("span",{className:"tag",children:"React"}),m.jsx("span",{className:"tag",children:"Node.js"}),m.jsx("span",{className:"tag",children:"MongoDB"}),m.jsx("span",{className:"tag",children:"Express"})]})]}),m.jsxs("a",{className:"project-card",href:"https://github.com/carinotj19/BMart",target:"_blank",rel:"noreferrer",...Ur(2),children:[m.jsx(Dr,{icon:"cart"}),m.jsx("div",{className:"project-title",children:"BMart"}),m.jsx("div",{className:"project-desc",children:"Android grocery ordering app built in Kotlin with multi-vendor support, in-app messaging, and payment integration."}),m.jsxs("div",{className:"project-tags",children:[m.jsx("span",{className:"tag",children:"Kotlin"}),m.jsx("span",{className:"tag",children:"Android"}),m.jsx("span",{className:"tag",children:"Mobile"})]})]}),m.jsxs("a",{className:"project-card",href:"https://github.com/carinotj19/BrainyBox",target:"_blank",rel:"noreferrer",...Ur(3),children:[m.jsx(Dr,{icon:"brain"}),m.jsx("div",{className:"project-title",children:"BrainyBox"}),m.jsx("div",{className:"project-desc",children:"React + Tailwind trivia app pulling live questions from Open Trivia DB. Customizable categories, difficulty, and real-time scoring."}),m.jsxs("div",{className:"project-tags",children:[m.jsx("span",{className:"tag",children:"React"}),m.jsx("span",{className:"tag",children:"Tailwind"}),m.jsx("span",{className:"tag",children:"Open Trivia API"})]})]}),m.jsxs("a",{className:"project-card",href:"https://github.com/carinotj19/OnlinePortfolio",target:"_blank",rel:"noreferrer",...Ur(4),children:[m.jsx(Dr,{icon:"globe"}),m.jsx("div",{className:"project-title",children:"Online Portfolio"}),m.jsx("div",{className:"project-desc",children:"Previous portfolio iteration — source code open on GitHub for reference and inspiration."}),m.jsxs("div",{className:"project-tags",children:[m.jsx("span",{className:"tag",children:"JavaScript"}),m.jsx("span",{className:"tag",children:"HTML/CSS"})]})]}),m.jsxs("a",{className:"project-card",href:"https://github.com/carinotj19?tab=repositories",target:"_blank",rel:"noreferrer",style:{borderStyle:"dashed"},...Ur(5),children:[m.jsx(Dr,{icon:"plus"}),m.jsx("div",{className:"project-title",children:"More on GitHub"}),m.jsx("div",{className:"project-desc",children:"30+ public repositories covering experiments, coursework, and side projects."}),m.jsx("div",{className:"project-tags",children:m.jsx("span",{className:"tag",children:"30+ repos"})})]})]})]}),m.jsxs("section",{id:"skills",style:{maxWidth:"1100px",margin:"0 auto"},children:[m.jsx(ln,{name:"gear",className:"skills-bg-gear"}),m.jsx("p",{className:"section-label",children:"skills"}),m.jsx("h2",{className:"section-title",children:"Components & Alloys"}),m.jsxs("div",{className:"skills-grid",children:[m.jsxs("div",{className:"skill-group",children:[m.jsx(Wc,{icon:"code",duration:"8s",children:"Languages"}),m.jsxs("div",{className:"skill-body",children:[m.jsx(Pn,{icon:"code",level:92,children:"JavaScript (ES6+)"}),m.jsx(Pn,{icon:"code",level:62,children:"PHP"}),m.jsx(Pn,{icon:"code",level:90,children:"HTML5 & CSS3"}),m.jsx(Pn,{icon:"database",level:62,children:"SQL"})]})]}),m.jsxs("div",{className:"skill-group skill-group-featured",children:[m.jsx(Wc,{icon:"layers",reverse:!0,duration:"10s",children:"Frameworks"}),m.jsxs("div",{className:"skill-body",children:[m.jsx(Pn,{icon:"layers",level:88,children:"React"}),m.jsx(Pn,{icon:"layers",level:62,children:"Three.js / R3F"}),m.jsx(Pn,{icon:"layers",level:82,children:"jQuery"}),m.jsx(Pn,{icon:"layers",level:64,children:"Tailwind CSS"})]})]}),m.jsxs("div",{className:"skill-group",children:[m.jsx(Wc,{icon:"database",duration:"14s",children:"Backend & CMS"}),m.jsxs("div",{className:"skill-body",children:[m.jsx(Pn,{icon:"database",level:64,children:"Node.js / Express"}),m.jsx(Pn,{icon:"database",level:74,children:"Strapi CMS"}),m.jsx(Pn,{icon:"database",level:94,children:"WordPress / ACF"}),m.jsx(Pn,{icon:"database",level:64,children:"MySQL & Mongo"})]})]}),m.jsxs("div",{className:"skill-group",children:[m.jsx(Wc,{icon:"cloud",reverse:!0,duration:"7s",children:"DevOps & Cloud"}),m.jsxs("div",{className:"skill-body",children:[m.jsx(Pn,{icon:"github",level:88,children:"Git & GitHub"}),m.jsx(Pn,{icon:"tool",level:64,children:"Docker"}),m.jsx(Pn,{icon:"cloud",level:44,children:"AWS S3 & SES"}),m.jsx(Pn,{icon:"tool",level:44,children:"CapRover CI/CD"})]})]})]})]}),m.jsx("section",{id:"contact",style:{background:"var(--surface)",borderTop:"2px solid var(--border)"},children:m.jsxs("div",{className:"contact-inner",children:[m.jsx("span",{className:"contact-crosshair","aria-hidden":"true"}),m.jsx("p",{className:"section-label",style:{justifyContent:"center"},children:"contact"}),m.jsxs("h2",{className:"contact-title",children:["Let's Build",m.jsx("br",{}),m.jsx("span",{children:"Something."})]}),m.jsx("p",{className:"contact-sub",children:"Open to full-time roles, contract work, and interesting freelance projects. All messages welcome — the gears are always turning."}),m.jsxs("div",{className:"contact-links",children:[m.jsxs("a",{className:"contact-link contact-link-primary",href:"mailto:carinotj19@gmail.com",children:[m.jsx(ln,{name:"mail",size:16}),"Email Me"]}),m.jsxs("a",{className:"contact-link contact-link-secondary",href:"https://github.com/carinotj19",target:"_blank",rel:"noreferrer",children:[m.jsx(ln,{name:"github",size:14}),"GitHub"]}),m.jsxs("a",{className:"contact-link contact-link-secondary",href:"https://www.linkedin.com/in/tj-carino",target:"_blank",rel:"noreferrer",children:[m.jsx(ln,{name:"linkedin",size:14}),"LinkedIn"]})]})]})}),m.jsxs("footer",{children:[m.jsx("span",{children:"© 2025 TJ Cariño — Baguio City, Philippines"}),m.jsxs("span",{className:"footer-status",children:[m.jsx(ln,{name:"gear",size:12,className:"footer-gear"}),"Still spinning"]})]})]})}lM.createRoot(document.getElementById("root")).render(m.jsx(Pr.StrictMode,{children:m.jsx(o2,{})}));
