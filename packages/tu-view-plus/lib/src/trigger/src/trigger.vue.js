"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("vue"),he=require("./triggerProps.js"),Re=require("../../only-client/index.js"),U=require("../../resize-observer/index.js"),g=require("@tu-view-plus/hooks"),m=require("@tu-view-plus/utils"),H=require("./constant.js"),h=require("./utils.js");require("../style/trigger.css");const we=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"],ge=o.defineComponent({name:"TuTrigger",props:he.triggerProps,setup(n,{emit:p,slots:r,attrs:l}){const{popupContainer:X}=o.toRefs(n),Y=o.computed(()=>m.omit(l,we)),f=o.computed(()=>[].concat(n.trigger)),O=new Set,i=o.inject(H.triggerInjectionKey,void 0),{children:E,firstElement:y}=g.useFirstElement(),R=o.ref(),B=o.ref(n.defaultPopupVisible),P=o.ref(n.position),W=o.ref({}),x=o.ref({}),I=o.ref({}),J=o.ref(),s=o.ref({top:0,left:0}),u=o.computed(()=>n.popupVisible??B.value),M=g.useNamespace("popup"),{teleportContainer:Q,containerRef:k}=g.useTeleportContainer({popupContainer:X,visible:u,documentContainer:!0}),{zIndex:Z}=g.usePopupManager("popup",{visible:u});let T=0,v=!1;const ee=()=>{T&&(window.clearTimeout(T),T=0)},z=e=>{if(n.alignPoint){const{pageX:t,pageY:c}=e;s.value={top:c,left:t}}},w=()=>{if(!y.value||!R.value||!k.value)return;const e=k.value.getBoundingClientRect(),t=n.alignPoint?{top:s.value.top,bottom:s.value.top,left:s.value.left,right:s.value.left,scrollTop:s.value.top,scrollBottom:s.value.top,scrollLeft:s.value.left,scrollRight:s.value.left,width:0,height:0}:h.getElementScrollRect(y.value,e),c=()=>h.getElementScrollRect(R.value,e),F=c(),{style:C,position:V}=h.getPopupStyle(n.position,e,t,F,{offset:n.popupOffset,translate:n.popupTranslate,customStyle:n.popupStyle,autoFitPosition:n.autoFitPosition});n.autoFitTransformOrigin&&(x.value={transformOrigin:h.getTransformOrigin(V)}),n.autoFitPopupMinWidth?C.minWidth=`${t.width}px`:n.autoFitPopupWidth&&(C.width=`${t.width}px`),P.value!==V&&(P.value=V),W.value=C,n.showArrow&&o.nextTick(()=>{I.value=h.getArrowStyle(V,t,c(),{customStyle:n.arrowStyle})})},d=(e,t)=>{if(e===u.value&&T===0)return;const c=()=>{B.value=e,p("update:popupVisible",e),p("popupVisibleChange",e),e&&o.nextTick(()=>{w()})};t?(ee(),e!==u.value&&(T=window.setTimeout(c,t))):c()},ne=e=>{var t;(t=l.onClick)==null||t.call(l,e),!(n.disabled||u.value&&!n.clickToClose)&&(f.value.includes("click")?(z(e),d(!u.value)):f.value.includes("contextMenu")&&u.value&&d(!1))},_=e=>{var t;(t=l.onMouseenter)==null||t.call(l,e),!(n.disabled||!f.value.includes("hover"))&&(z(e),d(!0,n.mouseEnterDelay))},j=e=>{i==null||i.onMouseenter(e),_(e)},$=e=>{var t;(t=l.onMouseleave)==null||t.call(l,e),!(n.disabled||!f.value.includes("hover"))&&d(!1,n.mouseLeaveDelay)},G=e=>{i==null||i.onMouseleave(e),$(e)},oe=e=>{var t;(t=l.onFocusin)==null||t.call(l,e),!(n.disabled||!f.value.includes("focus"))&&d(!0,n.focusDelay)},te=e=>{var t;(t=l.onFocusout)==null||t.call(l,e),!(n.disabled||!f.value.includes("focus"))&&n.blurToClose&&d(!1)},ue=e=>{var t;(t=l.onContextmenu)==null||t.call(l,e),!(n.disabled||!f.value.includes("contextMenu")||u.value&&!n.clickToClose)&&(z(e),d(!u.value),e.preventDefault())},le=e=>{O.add(e),i==null||i.addChildRef(e)},ie=e=>{O.delete(e),i==null||i.removeChildRef(e)};o.provide(H.triggerInjectionKey,o.reactive({onMouseenter:j,onMouseleave:G,addChildRef:le,removeChildRef:ie}));const N=()=>{m.off(document.documentElement,"mousedown",A),v=!1},L=g.usePickSlots(r,"content"),ae=o.computed(()=>{var e;return n.hideEmpty&&m.isEmptyChildren((e=L.value)==null?void 0:e.call(L))}),A=e=>{var t,c,F;if(!((t=y.value)!=null&&t.contains(e.target)||(c=R.value)!=null&&c.contains(e.target))){for(const C of O)if((F=C.value)!=null&&F.contains(e.target))return;N(),d(!1)}},S=m.throttleByRaf(()=>{u.value&&w()}),q=()=>{u.value&&w()},ce=()=>{q(),p("resize")},se=e=>{n.preventFocus&&e.preventDefault()};i==null||i.addChildRef(R);const de=o.computed(()=>u.value?n.openedClass:void 0);let a;o.watch(u,e=>{if(n.clickOutsideToClose&&(!e&&v?N():e&&!v&&(m.on(document.documentElement,"mousedown",A),v=!0)),n.updateAtScroll){if(e){a=h.getScrollElements(y.value);for(const t of a)t.addEventListener("scroll",S)}else if(a){for(const t of a)t.removeEventListener("scroll",S);a=void 0}}e&&(D.value=!0)}),o.watch(()=>[n.autoFitPopupWidth,n.autoFitPopupMinWidth],()=>{u.value&&w()});const{createResizeObserver:re,destroyResizeObserver:fe}=g.useResizeObserver({elementRef:k,onResize:q});o.onMounted(()=>{if(re(),u.value&&(w(),n.clickOutsideToClose&&!v&&(m.on(document.documentElement,"mousedown",A),v=!0),n.updateAtScroll)){a=h.getScrollElements(y.value);for(const e of a)e.addEventListener("scroll",S)}}),o.onUpdated(()=>{u.value&&w()}),o.onDeactivated(()=>{d(!1)}),o.onBeforeUnmount(()=>{if(i==null||i.removeChildRef(R),fe(),v&&N(),a){for(const e of a)e.removeEventListener("scroll",S);a=void 0}});const D=o.ref(u.value),b=o.ref(!1),K=()=>{b.value=!0},ve=()=>{b.value=!1,u.value&&p("show")},me=()=>{b.value=!1,u.value||(D.value=!1,p("hide"))};return()=>{var e;return E.value=((e=r.default)==null?void 0:e.call(r))??[],m.mergeFirstChild(E.value,{class:de.value,onClick:ne,onMouseenter:_,onMouseleave:$,onFocusin:oe,onFocusout:te,onContextmenu:ue}),o.createVNode(o.Fragment,null,[n.autoFixPosition?o.createVNode(U.TuResizeObserver,{onResize:ce},{default:()=>[E.value]}):E.value,o.createVNode(Re.TuOnlyClient,null,{default:()=>[o.createVNode(o.Teleport,{to:Q.value,disabled:!n.renderToBody},{default:()=>[(!n.unmountOnClose||u.value||D.value)&&!ae.value&&o.createVNode(U.TuResizeObserver,{onResize:q},{default:()=>[o.createVNode("div",o.mergeProps({ref:R,class:[M.b(),M.m(P.value)],style:{...W.value,zIndex:Z.value,pointerEvents:b.value?"none":"auto"},"trigger-placement":P.value,onMouseenter:j,onMouseleave:G,onMousedown:se},Y.value),[o.createVNode(o.Transition,{name:n.animationName,duration:n.duration,appear:!0,onBeforeEnter:K,onAfterEnter:ve,onBeforeLeave:K,onAfterLeave:me},{default:()=>{var t;return[o.withDirectives(o.createVNode("div",{class:M.e("wrapper"),style:x.value},[o.createVNode("div",{class:[M.e("content"),n.contentClass],style:n.contentStyle},[(t=r.content)==null?void 0:t.call(r)]),n.showArrow&&o.createVNode("div",{ref:J,class:[M.e("arrow"),n.arrowClass],style:I.value},null)]),[[o.vShow,u.value]])]}})])]})]})]})])}}});exports.default=ge;