"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue");function l(e,u){const n=t.ref(),a=t.computed(()=>({ariaDisabled:e.disabled||e.loading,disabled:e.disabled||e.loading,autofocus:e.autofocus,type:e.nativeType}));return{buttonRef:n,buttonAttrs:a,handleClick:i=>{u("click",i)}}}exports.default=l;
