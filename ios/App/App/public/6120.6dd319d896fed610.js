"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6120],{6120:(E,w,d)=>{d.r(w),d.d(w,{ion_toast:()=>T});var m=d(5861),o=d(9816),b=d(6406),v=d(3982),_=d(1178),p=d(6280),f=d(2854),r=d(2200),a=d(9397);d(3457);const y=(t,n)=>{const e=(0,r.c)(),i=(0,r.c)(),l=(0,a.g)(t).querySelector(".toast-wrapper");switch(i.addElement(l),n){case"top":i.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const g=Math.floor(t.clientHeight/2-l.clientHeight/2);l.style.top=`${g}px`,i.fromTo("opacity",.01,1);break;default:i.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return e.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(i)},k=(t,n)=>{const e=(0,r.c)(),i=(0,r.c)(),l=(0,a.g)(t).querySelector(".toast-wrapper");switch(i.addElement(l),n){case"top":i.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":i.fromTo("opacity",.99,0);break;default:i.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(i)},x=(t,n)=>{const e=(0,r.c)(),i=(0,r.c)(),l=(0,a.g)(t).querySelector(".toast-wrapper");switch(i.addElement(l),n){case"top":l.style.top="calc(8px + var(--ion-safe-area-top, 0px))",i.fromTo("opacity",.01,1);break;case"middle":const g=Math.floor(t.clientHeight/2-l.clientHeight/2);l.style.top=`${g}px`,i.fromTo("opacity",.01,1);break;default:l.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",i.fromTo("opacity",.01,1)}return e.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(i)},C=t=>{const n=(0,r.c)(),e=(0,r.c)(),s=(0,a.g)(t).querySelector(".toast-wrapper");return e.addElement(s).fromTo("opacity",.99,0),n.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(e)},T=class{constructor(t){(0,o.r)(this,t),this.didPresent=(0,o.d)(this,"ionToastDidPresent",7),this.willPresent=(0,o.d)(this,"ionToastWillPresent",7),this.willDismiss=(0,o.d)(this,"ionToastWillDismiss",7),this.didDismiss=(0,o.d)(this,"ionToastDidDismiss",7),this.didPresentShorthand=(0,o.d)(this,"didPresent",7),this.willPresentShorthand=(0,o.d)(this,"willPresent",7),this.willDismissShorthand=(0,o.d)(this,"willDismiss",7),this.didDismissShorthand=(0,o.d)(this,"didDismiss",7),this.delegateController=(0,p.d)(this),this.triggerController=(0,p.e)(),this.customHTMLEnabled=b.c.get("innerHTMLTemplatesEnabled",v.E),this.presented=!1,this.dispatchCancelHandler=n=>{if((0,p.i)(n.detail.role)){const i=this.getButtons().find(s=>"cancel"===s.role);this.callButtonHandler(i)}},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=b.c.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(t,n){!0===t&&!1===n?this.present():!1===t&&!0===n&&this.dismiss()}triggerChanged(){const{trigger:t,el:n,triggerController:e}=this;t&&e.addClickListener(n,t)}connectedCallback(){(0,p.j)(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}present(){var t=this;return(0,m.Z)(function*(){void 0!==t.currentTransition&&(yield t.currentTransition),yield t.delegateController.attachViewToDom(),t.currentTransition=(0,p.f)(t,"toastEnter",y,x,t.position),yield t.currentTransition,t.currentTransition=void 0,t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration))})()}dismiss(t,n){var e=this;return(0,m.Z)(function*(){e.durationTimeout&&clearTimeout(e.durationTimeout),e.currentTransition=(0,p.g)(e,t,n,"toastLeave",k,C,e.position);const i=yield e.currentTransition;return i&&e.delegateController.removeViewFromDom(),i})()}onDidDismiss(){return(0,p.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,p.h)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(n=>"string"==typeof n?{text:n}:n):[]}buttonClick(t){var n=this;return(0,m.Z)(function*(){const e=t.role;return(0,p.i)(e)||(yield n.callButtonHandler(t))?n.dismiss(void 0,e):Promise.resolve()})()}callButtonHandler(t){return(0,m.Z)(function*(){if(null!=t&&t.handler)try{if(!1===(yield(0,p.s)(t.handler)))return!1}catch(n){console.error(n)}return!0})()}renderButtons(t,n){if(0===t.length)return;const e=(0,b.b)(this);return(0,o.h)("div",{class:{"toast-button-group":!0,[`toast-button-group-${n}`]:!0}},t.map(s=>(0,o.h)("button",{type:"button",class:O(s),tabIndex:0,onClick:()=>this.buttonClick(s),part:"button"},(0,o.h)("div",{class:"toast-button-inner"},s.icon&&(0,o.h)("ion-icon",{"aria-hidden":"true",icon:s.icon,slot:void 0===s.text?"icon-only":void 0,class:"toast-button-icon"}),s.text),"md"===e&&(0,o.h)("ion-ripple-effect",{type:void 0!==s.icon&&void 0===s.text?"unbounded":"bounded"}))))}renderToastMessage(){const{customHTMLEnabled:t,message:n}=this;return t?(0,o.h)("div",{class:"toast-message",part:"message",innerHTML:(0,v.a)(n)}):(0,o.h)("div",{class:"toast-message",part:"message"},n)}render(){const{layout:t,el:n}=this,e=this.getButtons(),i=e.filter(g=>"start"===g.side),s=e.filter(g=>"start"!==g.side),l=(0,b.b)(this),u={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${t}`]:!0},h=e.length>0?"dialog":"status";return"stacked"===t&&i.length>0&&s.length>0&&(0,_.p)("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",n),(0,o.h)(o.H,Object.assign({"aria-live":"polite","aria-atomic":"true",role:h,tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,f.c)(this.color,Object.assign(Object.assign({[l]:!0},(0,f.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,o.h)("div",{class:u},(0,o.h)("div",{class:"toast-container",part:"container"},this.renderButtons(i,"start"),void 0!==this.icon&&(0,o.h)("ion-icon",{class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,o.h)("div",{class:"toast-content"},void 0!==this.header&&(0,o.h)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&this.renderToastMessage()),this.renderButtons(s,"end"))))}get el(){return(0,o.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},O=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},(0,f.g)(t.cssClass));T.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-icon{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-icon{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-baseline .toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-layout-stacked .toast-button-group-start{margin-right:8px;margin-top:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-stacked .toast-button-group-start{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-layout-baseline .toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-baseline .toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-layout-stacked .toast-button-group-end{margin-right:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-stacked .toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},2854:(E,w,d)=>{d.d(w,{c:()=>b,g:()=>_,h:()=>o,o:()=>f});var m=d(5861);const o=(r,a)=>null!==a.closest(r),b=(r,a)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},a):a,_=r=>{const a={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c):[])(r).forEach(c=>a[c]=!0),a},p=/^[a-z][a-z0-9+\-.]*:/,f=function(){var r=(0,m.Z)(function*(a,c,y,k){if(null!=a&&"#"!==a[0]&&!p.test(a)){const x=document.querySelector("ion-router");if(x)return null!=c&&c.preventDefault(),x.push(a,y,k)}return!1});return function(c,y,k,x){return r.apply(this,arguments)}}()}}]);