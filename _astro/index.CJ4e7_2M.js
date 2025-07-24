function a(e,s,n){let t=new Set(s).add(void 0);return e.listen((i,l,u)=>{t.has(u)&&n(i,l,u)})}function d(e,s,n){let t=a(e,s,n);return n(e.value),t}export{a as l,d as s};
