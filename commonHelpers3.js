import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as m}from"./assets/vendor-78be7656.js";const t=document.querySelector(".feedback-form"),c=m(e=>{const a={};new FormData(t).forEach((r,s)=>{a[s]=r}),localStorage.setItem("feedback-form-state",JSON.stringify(a))},500),n=e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()};t.addEventListener("input",c);t.addEventListener("submit",n);const o=JSON.parse(localStorage.getItem("feedback-form-state"));if(o){const{email:e,message:a}=o;t.elements.email.value=e,t.elements.message.value=a}
//# sourceMappingURL=commonHelpers3.js.map