"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3804],{3804:(oe,K,b)=>{b.r(K),b.d(K,{ion_popover:()=>Q});var I=b(5861),f=b(1308),$=b(9658),j=b(7040),x=b(5730),O=b(4414),Z=b(2854),u=b(697),c=b(8834);b(3457);const R=(t,e,r)=>{const o=e.getBoundingClientRect(),i=o.height;let n=o.width;return"cover"===t&&r&&(n=r.getBoundingClientRect().width),{contentWidth:n,contentHeight:i}},re=(t,e,r)=>{let o=[];switch(e){case"hover":let i;o=[{eventName:"mouseenter",callback:(n=(0,I.Z)(function*(s){s.stopPropagation(),i&&clearTimeout(i),i=setTimeout(()=>{(0,x.r)(()=>{r.presentFromTrigger(s),i=void 0})},100)}),function(a){return n.apply(this,arguments)})},{eventName:"mouseleave",callback:n=>{i&&clearTimeout(i);const s=n.relatedTarget;!s||s.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}];break;case"context-menu":o=[{eventName:"contextmenu",callback:n=>{n.preventDefault(),r.presentFromTrigger(n)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}];break;default:o=[{eventName:"click",callback:n=>r.presentFromTrigger(n)},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}]}var n;return o.forEach(({eventName:i,callback:n})=>t.addEventListener(i,n)),t.setAttribute("data-ion-popover-trigger","true"),()=>{o.forEach(({eventName:i,callback:n})=>t.removeEventListener(i,n)),t.removeAttribute("data-ion-popover-trigger")}},B=(t,e)=>e&&"ION-ITEM"===e.tagName?t.findIndex(r=>r===e):-1,U=t=>{const r=(0,x.g)(t).querySelector("button");r&&(0,x.r)(()=>r.focus())},ae=t=>{const e=function(){var r=(0,I.Z)(function*(o){var i;const n=document.activeElement;let s=[];const a=null===(i=o.target)||void 0===i?void 0:i.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{s=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(p){}switch(o.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":o.preventDefault();const d=((t,e)=>t[B(t,e)+1])(s,n);void 0!==d&&U(d);break;case"ArrowUp":o.preventDefault();const w=((t,e)=>t[B(t,e)-1])(s,n);void 0!==w&&U(w);break;case"Home":o.preventDefault();const h=s[0];void 0!==h&&U(h);break;case"End":o.preventDefault();const v=s[s.length-1];void 0!==v&&U(v);break;case"ArrowRight":case" ":case"Enter":if(n&&(t=>t.hasAttribute("data-ion-popover-trigger"))(n)){const m=new CustomEvent("ionPopoverActivateTrigger");n.dispatchEvent(m)}}}});return function(i){return r.apply(this,arguments)}}();return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},G=(t,e,r,o,i,n,s,a,p,d,w)=>{var h;let v={top:0,left:0,width:0,height:0};if("event"===n){if(!w)return p;v={top:w.clientY,left:w.clientX,width:1,height:1}}else{const l=w,L=d||(null===(h=null==l?void 0:l.detail)||void 0===h?void 0:h.ionShadowTarget)||(null==l?void 0:l.target);if(!L)return p;const D=L.getBoundingClientRect();v={top:D.top,left:D.left,width:D.width,height:D.height}}const m=le(s,v,e,r,o,i,t),y=de(a,s,v,e,r),P=m.top+y.top,A=m.left+y.left,{arrowTop:g,arrowLeft:T}=pe(s,o,i,P,A,e,r,t),{originX:_,originY:E}=ce(s,a,t);return{top:P,left:A,referenceCoordinates:v,arrowTop:g,arrowLeft:T,originX:_,originY:E}},ce=(t,e,r)=>{switch(t){case"top":return{originX:H(e),originY:"bottom"};case"bottom":return{originX:H(e),originY:"top"};case"left":return{originX:"right",originY:V(e)};case"right":return{originX:"left",originY:V(e)};case"start":return{originX:r?"left":"right",originY:V(e)};case"end":return{originX:r?"right":"left",originY:V(e)}}},H=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},V=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},pe=(t,e,r,o,i,n,s,a)=>{const p={arrowTop:o+s/2-e/2,arrowLeft:i+n-e/2},d={arrowTop:o+s/2-e/2,arrowLeft:i-1.5*e};switch(t){case"top":return{arrowTop:o+s,arrowLeft:i+n/2-e/2};case"bottom":return{arrowTop:o-r,arrowLeft:i+n/2-e/2};case"left":return p;case"right":return d;case"start":return a?d:p;case"end":return a?p:d;default:return{arrowTop:0,arrowLeft:0}}},le=(t,e,r,o,i,n,s)=>{const a={top:e.top,left:e.left-r-i},p={top:e.top,left:e.left+e.width+i};switch(t){case"top":return{top:e.top-o-n,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+n,left:e.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},de=(t,e,r,o,i)=>{switch(t){case"center":return he(e,r,o,i);case"end":return fe(e,r,o,i);default:return{top:0,left:0}}},fe=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},he=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},J=(t,e,r,o,i,n,s,a,p,d,w,h,v=0,m=0,y=0)=>{let P=v;const A=m;let _,g=r,T=e,E=d,C=w,l=!1,L=!1;const D=h?h.top+h.height:n/2-a/2,S=h?h.height:0;let W=!1;return g<o+p?(g=o,l=!0,E="left"):s+o+g+p>i&&(L=!0,g=i-s-o,E="right"),D+S+a>n&&("top"===t||"bottom"===t)&&(D-a>0?(T=Math.max(12,D-a-S-(y-1)),P=T+a,C="bottom",W=!0):_=o),{top:T,left:g,bottom:_,originX:E,originY:C,checkSafeAreaLeft:l,checkSafeAreaRight:L,arrowTop:P,arrowLeft:A,addPopoverBottomClass:W}},me=(t,e)=>{var r;const{event:o,size:i,trigger:n,reference:s,side:a,align:p}=e,d=t.ownerDocument,w="rtl"===d.dir,h=d.defaultView.innerWidth,v=d.defaultView.innerHeight,m=(0,x.g)(t),y=m.querySelector(".popover-content"),P=m.querySelector(".popover-arrow"),A=n||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),{contentWidth:g,contentHeight:T}=R(i,y,A),{arrowWidth:_,arrowHeight:E}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:r}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:r}})(P),l=G(w,g,T,_,E,s,a,p,{top:v/2-T/2,left:h/2-g/2,originX:w?"right":"left",originY:"top"},n,o),L="cover"===i?0:5,D="cover"===i?0:25,{originX:S,originY:W,top:Y,left:M,bottom:z,checkSafeAreaLeft:F,checkSafeAreaRight:De,arrowTop:Ae,arrowLeft:Te,addPopoverBottomClass:Ee}=J(a,l.top,l.left,L,h,v,g,T,D,l.originX,l.originY,l.referenceCoordinates,l.arrowTop,l.arrowLeft,E),Ie=(0,c.c)(),ee=(0,c.c)(),te=(0,c.c)();return ee.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),te.addElement(m.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Ie.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===i&&t.style.setProperty("--width",`${g}px`),Ee&&t.classList.add("popover-bottom"),void 0!==z&&y.style.setProperty("bottom",`${z}px`);let q=`${M}px`;F&&(q=`${M}px + var(--ion-safe-area-left, 0)`),De&&(q=`${M}px - var(--ion-safe-area-right, 0)`),y.style.setProperty("top",`calc(${Y}px + var(--offset-y, 0))`),y.style.setProperty("left",`calc(${q} + var(--offset-x, 0))`),y.style.setProperty("transform-origin",`${W} ${S}`),null!==P&&(((t,e=!1,r,o)=>!(!r&&!o||"top"!==t&&"bottom"!==t&&e))(a,l.top!==Y||l.left!==M,o,n)?(P.style.setProperty("top",`calc(${Ae}px + var(--offset-y, 0))`),P.style.setProperty("left",`calc(${Te}px + var(--offset-x, 0))`)):P.style.setProperty("display","none"))}).addAnimation([ee,te])},ge=t=>{const e=(0,x.g)(t),r=e.querySelector(".popover-content"),o=e.querySelector(".popover-arrow"),i=(0,c.c)(),n=(0,c.c)(),s=(0,c.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([n,s])},xe=(t,e)=>{var r;const{event:o,size:i,trigger:n,reference:s,side:a,align:p}=e,d=t.ownerDocument,w="rtl"===d.dir,h=d.defaultView.innerWidth,v=d.defaultView.innerHeight,m=(0,x.g)(t),y=m.querySelector(".popover-content"),P=n||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),{contentWidth:A,contentHeight:g}=R(i,y,P),_=G(w,A,g,0,0,s,a,p,{top:v/2-g/2,left:h/2-A/2,originX:w?"right":"left",originY:"top"},n,o),E="cover"===i?0:12,{originX:C,originY:l,top:L,left:D,bottom:S}=J(a,_.top,_.left,E,h,v,A,g,0,_.originX,_.originY,_.referenceCoordinates),W=(0,c.c)(),Y=(0,c.c)(),M=(0,c.c)(),z=(0,c.c)(),F=(0,c.c)();return Y.addElement(m.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),M.addElement(m.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),z.addElement(y).beforeStyles({top:`calc(${L}px + var(--offset-y, 0px))`,left:`calc(${D}px + var(--offset-x, 0px))`,"transform-origin":`${l} ${C}`}).beforeAddWrite(()=>{void 0!==S&&y.style.setProperty("bottom",`${S}px`)}).fromTo("transform","scale(0.8)","scale(1)"),F.addElement(m.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===i&&t.style.setProperty("--width",`${A}px`),"bottom"===l&&t.classList.add("popover-bottom")}).addAnimation([Y,M,z,F])},we=t=>{const e=(0,x.g)(t),r=e.querySelector(".popover-content"),o=(0,c.c)(),i=(0,c.c)(),n=(0,c.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([i,n])},Q=class{constructor(t){(0,f.r)(this,t),this.didPresent=(0,f.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,f.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,f.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,f.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,f.e)(this,"didPresent",7),this.willPresentShorthand=(0,f.e)(this,"willPresent",7),this.willDismissShorthand=(0,f.e)(this,"willDismiss",7),this.didDismissShorthand=(0,f.e)(this,"didDismiss",7),this.ionMount=(0,f.e)(this,"ionMount",7),this.parentPopover=null,this.popoverIndex=_e++,this.coreDelegate=(0,j.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1,this.onBackdropTap=()=>{this.dismiss(void 0,O.B)},this.onLifecycle=e=>{const r=this.usersElement,o=ke[e.type];if(r&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(i)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:r,el:o,destroyTriggerInteraction:i}=this;i&&i();const n=this.triggerEl=void 0!==e?document.getElementById(e):null;!n||(this.destroyTriggerInteraction=re(n,r,o))},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:r}=this;e&&e(),this.destroyKeyboardInteraction=ae(r)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:r,triggerAction:o,triggerEl:i,el:n}=this;!r||!i||(e&&e(),this.destroyDismissInteraction=((t,e,r,o)=>{let i=[];const s=(0,x.g)(o).querySelector(".popover-content");return i="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==t&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==t?r.dismiss(void 0,void 0,!1):a.stopPropagation()}}],i.forEach(({eventName:a,callback:p})=>s.addEventListener(a,p)),()=>{i.forEach(({eventName:a,callback:p})=>s.removeEventListener(a,p))}})(i,o,n,r))}}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,O.e)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`ion-popover:not(#${this.popoverId})`),void 0===this.alignment&&(this.alignment="ios"===(0,$.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&(0,x.r)(()=>this.present()),t&&(0,x.a)(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)})}presentFromTrigger(t,e=!1){var r=this;return(0,I.Z)(function*(){r.focusDescendantOnPresent=e,yield r.present(t),r.focusDescendantOnPresent=!1})()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const r=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}present(t){var e=this;return(0,I.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const r=Object.assign(Object.assign({},e.componentProps),{popover:e.el}),{inline:o,delegate:i}=e.getDelegate(!0);return e.usersElement=yield(0,j.a)(i,e.el,e.component,["popover-viewport"],r,o),yield(0,u.e)(e.usersElement),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),e.ionMount.emit(),new Promise(n=>{(0,x.r)(()=>{(0,x.r)((0,I.Z)(function*(){e.currentTransition=(0,O.d)(e,"popoverEnter",me,xe,{event:t||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),yield e.currentTransition,e.currentTransition=void 0,e.focusDescendantOnPresent&&(0,O.j)(e.el,e.el),n()}))})})})()}dismiss(t,e,r=!0){var o=this;return(0,I.Z)(function*(){void 0!==o.currentTransition&&(yield o.currentTransition);const{destroyKeyboardInteraction:i,destroyDismissInteraction:n}=o;r&&o.parentPopover&&o.parentPopover.dismiss(t,e,r),o.currentTransition=(0,O.f)(o,t,e,"popoverLeave",ge,we,o.event);const s=yield o.currentTransition;if(s){i&&(i(),o.destroyKeyboardInteraction=void 0),n&&(n(),o.destroyDismissInteraction=void 0);const{delegate:a}=o.getDelegate();yield(0,j.d)(a,o.usersElement)}return o.currentTransition=void 0,s})()}getParentPopover(){var t=this;return(0,I.Z)(function*(){return t.parentPopover})()}onDidDismiss(){return(0,O.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,O.g)(this.el,"ionPopoverWillDismiss")}render(){const t=(0,$.b)(this),{onLifecycle:e,popoverId:r,parentPopover:o,dismissOnSelect:i,side:n,arrow:s,htmlAttributes:a}=this,p=(0,$.a)("desktop"),d=s&&!o;return(0,f.h)(f.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},a,{style:{zIndex:`${2e4+this.overlayIndex}`},id:r,class:Object.assign(Object.assign({},(0,Z.g)(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":p,[`popover-side-${n}`]:!0,"popover-nested":!!o}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!o&&(0,f.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,f.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:i?()=>this.dismiss():void 0},d&&(0,f.h)("div",{class:"popover-arrow",part:"arrow"}),(0,f.h)("div",{class:"popover-content",part:"content"},(0,f.h)("slot",null))))}get el(){return(0,f.i)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},ke={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};let _e=0;Q.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},2854:(oe,K,b)=>{b.d(K,{c:()=>$,g:()=>x,h:()=>f,o:()=>Z});var I=b(5861);const f=(u,c)=>null!==c.closest(u),$=(u,c)=>"string"==typeof u&&u.length>0?Object.assign({"ion-color":!0,[`ion-color-${u}`]:!0},c):c,x=u=>{const c={};return(u=>void 0!==u?(Array.isArray(u)?u:u.split(" ")).filter(k=>null!=k).map(k=>k.trim()).filter(k=>""!==k):[])(u).forEach(k=>c[k]=!0),c},O=/^[a-z][a-z0-9+\-.]*:/,Z=function(){var u=(0,I.Z)(function*(c,k,X,R){if(null!=c&&"#"!==c[0]&&!O.test(c)){const N=document.querySelector("ion-router");if(N)return null!=k&&k.preventDefault(),N.push(c,X,R)}return!1});return function(k,X,R,N){return u.apply(this,arguments)}}()}}]);