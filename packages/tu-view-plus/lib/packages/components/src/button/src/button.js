"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@tu-view-plus/utils"),u=require("../../../../../node_modules/.pnpm/@tu-view-plus_icons-vue@1.0.1/node_modules/@tu-view-plus/icons-vue/dist/index.js"),e=["default","primary","success","warning","info","danger","text",""],o=["button","submit","reset"],i=t.buildProps({disabled:Boolean,size:{type:String,values:t.SIZES,default:"medium"},type:{type:String,values:e,default:"default"},icon:{type:t.iconPropType},nativeType:{type:String,values:o,default:"button"},loading:Boolean,loadingIcon:{type:t.iconPropType,default:()=>u.Loading},text:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean}),s={click:n=>n instanceof MouseEvent};exports.buttonEmits=s;exports.buttonNativeTypes=o;exports.buttonProps=i;exports.buttonTypes=e;
