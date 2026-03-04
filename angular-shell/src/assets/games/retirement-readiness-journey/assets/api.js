import{r as c}from"./index.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(...t)=>t.filter((e,s,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,o)=>o?o.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=t=>{const e=_(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=c.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:r="",children:a,iconNode:n,...i},u)=>c.createElement("svg",{ref:u,...h,width:e,height:e,stroke:t,strokeWidth:o?Number(s)*24/Number(e):s,className:m("lucide",r),...!a&&!f(i)&&{"aria-hidden":"true"},...i},[...n.map(([p,d])=>c.createElement(p,d)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(t,e)=>{const s=c.forwardRef(({className:o,...r},a)=>c.createElement(b,{ref:a,iconNode:e,className:m(`lucide-${g(l(t))}`,`lucide-${t}`,o),...r}));return s.displayName=l(t),s};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],I=w("x",y),C=async t=>{const e="https://bjuat.bajajlife.com/BalicLmsUtil/whatsappInhouse",s=new URLSearchParams(window.location.search),o=s.get("userId")||"",r=s.get("gameId")||"",a={cust_name:t.name||t.fullName||"",mobile_no:t.mobile_no||t.contact_number||"",dob:"",gender:"M",pincode:"",email_id:t.email_id||"",life_goal_category:"",investment_amount:"",product_id:"",p_source:"Marketing Assist",p_data_source:"GAMIFICATION",pasa_amount:"",product_name:"",pasa_product:"",associated_rider:"",customer_app_product:"",p_data_medium:" GAMIFICATION ",utmSource:"",userId:o,gameID:r,remarks:`Game: ${r}${t.score!=null?` | Score: ${t.score}`:""} | ${t.summary_dtls||"Retirement Readiness Lead"}`,appointment_date:"",appointment_time:""};console.log("[API] Submitting lead to WhatsApp Inhouse API:",a);try{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),i=await n.json().catch(()=>({}));return{success:n.ok,...i}}catch(n){return console.error("LMS Submission Error:",n),{success:!1,error:n.message}}},L=async(t,e)=>{const s="https://bjuat.bajajlife.com/BalicLmsUtil/updateLeadNew",o={leadNo:t,tpa_user_id:"",miscObj1:{stringval1:"",stringval2:e.name||e.firstName||"",stringval3:e.lastName||"",stringval4:e.date||"",stringval5:e.time||"",stringval6:e.remarks||"Slot Booking via Game",stringval7:"GAMIFICATION",stringval9:e.mobile||""}};try{const r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),a=await r.json().catch(()=>({}));return{success:r.ok,...a}}catch(r){return console.error("updateLeadNew Submission Error:",r),{success:!1,error:r.message}}};export{I as X,w as c,C as s,L as u};
