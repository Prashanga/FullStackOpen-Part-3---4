(this["webpackJsonppart-2d"]=this["webpackJsonppart-2d"]||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=(t(19),t(2)),l=function(e){var n=e.numbers,t=e.deleteHandleClick;return n.map((function(e,n){return r.a.createElement("p",{key:n},e.name,"    ",e.number," ",r.a.createElement("button",{onClick:function(){return t(e)}},"Delete"))}))},i=function(e){var n=e.value,t=e.onChangeHandler;return r.a.createElement("input",{type:"text",value:n,onChange:t})},m=function(e){return e.sMatch.map((function(e,n){return r.a.createElement("p",{key:n},e.name,"   ",e.number)}))},s=t(3),f=t.n(s),d="/api/persons",b=function(){return f.a.get(d).then((function(e){return e.data}))},h=function(e){return f.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},p=function(e){return f.a.post(d,e).then((function(e){return e.data}))},v=function(e){return f.a.put("".concat(d,"/append"),e).then((function(e){return e.data}))},E=function(e){var n=e.message,t=e.notificationType;return null===n?null:r.a.createElement("div",{className:t},n)},g=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),f=s[0],d=s[1],g=Object(a.useState)(null),w=Object(u.a)(g,2),O=w[0],j=w[1],C=Object(a.useState)(null),y=Object(u.a)(C,2),k=y[0],L=y[1],S=Object(a.useState)([]),T=Object(u.a)(S,2),H=T[0],x=T[1],D=Object(a.useState)([]),J=Object(u.a)(D,2),M=J[0],N=J[1];Object(a.useEffect)((function(){var e=b();e.then((function(e){return x(e)})),e.then((function(e){return N(e.map((function(e){return e.name.toLowerCase()})))}))}),[]);var B=Object(a.useState)(""),I=Object(u.a)(B,2),P=I[0],q=I[1],z=Object(a.useState)(""),A=Object(u.a)(z,2),F=A[0],G=A[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("p",null,"filter shown with",r.a.createElement(i,{value:t,onChangeHandler:function(e){var n=e.target.value;c(n);var t=H.filter((function(e){return-1!==e.name.toLowerCase().search(n.toLowerCase())}));d(t)}})),r.a.createElement("h2",null,"add a new"),r.a.createElement(E,{notificationType:"success",message:O}),r.a.createElement(E,{notificationType:"error",message:k}),r.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),-1===M.indexOf(P.toLocaleLowerCase()))?p({name:P,number:F}).then((function(e){x(H.concat(e)),N(M.concat(e.name.toLocaleLowerCase())),q(""),G(""),j("".concat(e.name," successfully added to the phonebook with id ").concat(e.id)),setTimeout((function(){j(null)}),5e3)})).catch((function(e){console.log("Error from frontend",e.response.data.error),L("".concat(e.response.data.error)),setTimeout((function(){L(null)}),5e3)})):window.confirm("".concat(P," is already added to phonebook, replace the old number with a new one?"))&&v({name:P,number:F}).then((function(e){x(H.map((function(n){return n.id===e.id?e:n}))),j("".concat(e.name,"'s contact number successfully changed to ").concat(e.number)),setTimeout((function(){j(null)}),5e3)})).catch((function(e){L("Contact already removed or is no longer present"),setTimeout((function(){L(null),x(H.filter((function(e){return e.name!==P}))),N(M.filter((function(e){return e!==P.toLowerCase()}))),q(""),G("")}),3e3)}))}},r.a.createElement("div",null,"name:",r.a.createElement(i,{value:P,onChangeHandler:function(e){return q(e.target.value)}})),r.a.createElement("div",null,"number:",r.a.createElement(i,{value:F,onChangeHandler:function(e){return G(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))),r.a.createElement("h2",null,"Numbers"),f.length>0?r.a.createElement(m,{sMatch:f}):r.a.createElement(l,{numbers:H,deleteHandleClick:function(e){window.confirm("Delete ".concat(e.name))&&h(e.id).then((function(n){var t=H.filter((function(n){return n.id!==e.id})),a=M.filter((function(n){return n!==e.name}));x(t),N(a),j("".concat(e.name," successfully deleted")),setTimeout((function(){j(null)}),5e3),console.log(n)})).catch((function(n){L("Contact already removed or is no longer present"),setTimeout((function(){L(null),x(H.filter((function(n){return n.id!==e.id}))),N(M.filter((function(n){return n!==e.name.toLowerCase()}))),q(""),G("")}),3e3)}))}}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5139bd18.chunk.js.map