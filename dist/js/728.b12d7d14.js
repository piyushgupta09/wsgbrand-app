"use strict";(self["webpackChunkwsgbrand_app_v1"]=self["webpackChunkwsgbrand_app_v1"]||[]).push([[728],{5500:function(e,t,r){r.d(t,{c:function(){return p}});var n=r(4108),s=r(9096);const o={key:0},a={class:"text-danger small mb-3 pulse"},i=(0,n.QD)("i",{class:"bi bi-exclamation-triangle text-inherit mx-2"},null,-1);function c(e,t,r,c,d,l){return l.errors?((0,n.Wz)(),(0,n.An)("div",o,[(0,n.QD)("div",a,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(l.errors,((e,t)=>((0,n.Wz)(),(0,n.An)("p",{key:t,class:"mb-1"},[i,((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(e,((e,t)=>((0,n.Wz)(),(0,n.An)("span",{key:t,class:"me-2"},(0,s.WA)(e)+".",1)))),128))])))),128))])])):(0,n.g1)("",!0)}var d={name:"FormErrors",computed:{errors(){const e=this.$store.getters.errors;return!!(e&&Object.keys(e).length>0)&&e}}},l=r(4100);const u=(0,l.c)(d,[["render",c]]);var p=u},8728:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(4108),s=r(9096),o=r(7764);const a={class:"card border-0 shadow mx-auto"},i={class:"card-body p-4"},c=(0,n.QD)("p",{class:"fs-5 text-center"},"Account Verification",-1),d={class:"text-muted mb-3"},l={class:"form-floating mb-3"},u=(0,n.QD)("label",{for:"inputOtpcode"},"Enter OTP",-1),p=(0,n.QD)("span",{class:"text-primary"},"Resend Otp",-1),m={class:"d-flex"},f=(0,n.QD)("span",{class:"pe-1"},"Need to create new account?",-1);function b(e,t,r,b,v,h){const y=(0,n.E1)("FormErrors"),g=(0,n.E1)("submit-button"),Q=(0,n.E1)("router-link");return(0,n.Wz)(),(0,n.An)("div",a,[(0,n.QD)("div",i,[c,(0,n.QD)("div",d,[(0,n.mY)(" A new verification OTP has been sent to "),(0,n.QD)("strong",null,(0,s.WA)(h.useremail),1),(0,n.mY)(", please check and enter the verification OTP code below. "),(0,n.QD)("form",{onSubmit:t[1]||(t[1]=(0,o.Y7)(((...e)=>h.verifyOtpCode&&h.verifyOtpCode(...e)),["prevent"])),class:"my-3"},[(0,n.QD)("div",l,[(0,n.wt)((0,n.QD)("input",{type:"number",id:"inputOtpcode",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>v.otpcode=e),placeholder:"Enter OTP Code"},null,512),[[o.Og,v.otpcode]]),u]),(0,n.K2)(y),(0,n.K2)(g,{class:"brand-btn-p fw-bold font-title w-100"},{default:(0,n.Ql)((()=>[(0,n.mY)(" Submit OTP for verification ")])),_:1})],32)]),(0,n.QD)("form",{onSubmit:t[2]||(t[2]=(0,o.Y7)(((...e)=>h.resendVerificationCode&&h.resendVerificationCode(...e)),["prevent"]))},[(0,n.K2)(g,{class:"text-start ps-0 w-100"},{default:(0,n.Ql)((()=>[(0,n.mY)(" Having issues! "),p])),_:1})],32),(0,n.QD)("div",m,[f,(0,n.K2)(Q,{to:{name:"Register"}},{default:(0,n.Ql)((()=>[(0,n.mY)("Click here")])),_:1})])])])}var v=r(5500);const h=["disabled"],y={key:0,class:"spinner-border spinner-border-sm mx-2",role:"status","aria-hidden":"true"};function g(e,t,r,o,a,i){return(0,n.Wz)(),(0,n.An)("button",{type:"submit",class:(0,s.WN)(["btn",r.styles]),disabled:i.isLoading},[i.isLoading?((0,n.Wz)(),(0,n.An)("span",y)):(0,n.g1)("",!0),(0,n.oF)(e.$slots,"default")],10,h)}var Q={name:"SubmitButton",props:{styles:{type:String,default:"button"}},computed:{isLoading(){return this.$store.getters.loading}}},D=r(4100);const O=(0,D.c)(Q,[["render",g]]);var k=O,w={components:{FormErrors:v.c,SubmitButton:k},name:"VerifyEmail",data(){return{otpcode:""}},computed:{useremail(){return this.$store.getters["authy/useremail"]}},methods:{resendVerificationCode(){this.$store.dispatch("authy/resendVerificationCode")},verifyOtpCode(){this.$store.dispatch("authy/verifyOtpCode",this.otpcode)}}};const A=(0,D.c)(w,[["render",b]]);var C=A}}]);
//# sourceMappingURL=728.b12d7d14.js.map