import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const n=document.querySelector("button[data-start]");n.disabled=!0;const r=document.querySelector("input#datetime-picker"),f=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),h=document.querySelector("span[data-seconds]");let s;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s.getTime()<Date.now()?(n.disabled=!0,m.error({message:"Please choose a date in the future",position:"topRight",timeout:2e3})):n.disabled=!1}};l(r,y);n.addEventListener("click",D);function D(t){n.disabled=!0,r.disabled=!0;const o=setInterval(()=>{const e=s-Date.now();if(e<=0)return r.disabled=!1,clearInterval(o);const a=g(e);b(a)},1e3)}function b({days:t,hours:o,minutes:e,seconds:a}){f.textContent=String(t).padStart(2,0),p.textContent=String(o).padStart(2,0),S.textContent=String(e).padStart(2,0),h.textContent=String(a).padStart(2,0)}function g(t){const d=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:i,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map
