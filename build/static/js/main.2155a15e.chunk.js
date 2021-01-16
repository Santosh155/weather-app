(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),l=a.n(c),m=(a(20),a(21),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),s=a(3),u=a.n(s),i=a(14),o=a(2),p=a(15),h=a.n(p),d=Object(r.createContext)(),E=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"header__title"},"Weather Finder"))},_=function(e){return n.a.createElement("div",{className:"content"},e.children)},f=function(){var e=new Date;return n.a.createElement("div",{className:"date-time"},"".concat(e.toLocaleDateString()," - ").concat(e.toLocaleTimeString()))},w=function(){return n.a.createElement("div",{className:"tagline"},n.a.createElement("p",null,"Enter the name of the city to get started."))},v=function(){var e=Object(r.useContext)(d).api_call;return n.a.createElement("div",{className:"weather-search"},n.a.createElement("form",{onSubmit:e,className:"weather-search__form"},n.a.createElement("input",{autoComplete:"off",name:"userChoice",className:"weather-search__input",type:"text",placeholder:"Enter the temperature you like"}),n.a.createElement("input",{autoComplete:"off",name:"city",className:"weather-search__input",type:"text",placeholder:"Enter city"}),n.a.createElement("div",{className:"weather-search__submit"},n.a.createElement("button",{className:"weather-search__button"},"\u2192"))))},b=function(e){var t=e.city,a=e.temp,r=e.humidity,c=e.pressure;return n.a.createElement("div",{className:"weather-data"},n.a.createElement("p",{className:"weather__tagline"},"Weather forecast for ",n.a.createElement("span",{className:"weather-data__city"},t)),n.a.createElement("div",{className:"weather-data__box"},n.a.createElement("span",{className:"weather-data__property"},n.a.createElement("p",{className:"weather-data__title"},"Temperature"),n.a.createElement("p",{className:"weather-data__value"},a)),n.a.createElement("span",{className:"weather-data__property"},n.a.createElement("p",{className:"weather-data__title"},"Humidity"),n.a.createElement("p",{className:"weather-data__value"},r)),n.a.createElement("span",{className:"weather-data__property"},n.a.createElement("p",{className:"weather-data__title"},"Pressure"),n.a.createElement("p",{className:"weather-data__value"},c))))},N=function(){var e=Object(r.useContext)(d),t=e.weather,a=e.city,c=t.temp,l=t.humidity,m=t.pressure;return n.a.createElement(b,{temp:c,humidity:l,pressure:m,city:a})},y=function(e){var t=e.error;return n.a.createElement("div",{className:"error"},t)},j=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"Designed and developed by: Santosh"))},O=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(null),m=Object(o.a)(l,2),s=m[0],p=m[1],b=Object(r.useState)(null),O=Object(o.a)(b,2),g=O[0],S=O[1],x=Object(r.useState)(!1),C=Object(o.a)(x,2),k=C[0],D=C[1],P=Object(r.useState)(!1),J=Object(o.a)(P,2),L=J[0],T=J[1],W=Object(r.useState)(!1),q=Object(o.a)(W,2),B=q[0],F=q[1],H=Object(r.useState)(!1),I=Object(o.a)(H,2),z=I[0],A=I[1],G=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,n,l,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.elements.city.value,r=t.target.elements.userChoice.value,a){e.next=5;break}return e.abrupt("return",(S("Please enter the name of the city"),c(null)));case 5:return n="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat("429736441cf3572838aa10530929f7cd","&units=metric"),l=h.a.get(n),e.next=9,l;case 9:m=e.sent,console.log(m),S(null),c(m.data.main),p(m.data.name),console.log(m.data.main.temp),m.data.main.temp==r?A(!0):m.data.main.temp<=18?(D(!0),A(!1)):m.data.main.temp>=19&&m.data.main.temp<=24?(T(!0),A(!1)):m.data.main.temp>=25&&(F(!0),A(!1));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:(z?"userChoice":k&&"cold")||L&&"warm"||B&&"hot"||"main"},n.a.createElement(E,null),n.a.createElement(_,null,n.a.createElement(d.Provider,{value:{api_call:G,weather:a,city:s}},n.a.createElement(f,null),n.a.createElement(w,null),n.a.createElement(v,null),null!==g&&n.a.createElement("p",null,n.a.createElement(y,{error:g})),null!==a&&n.a.createElement(N,null)),n.a.createElement(j,null)))},g=function(){return n.a.createElement(m,null,n.a.createElement(O,null))};l.a.render(n.a.createElement(g,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2155a15e.chunk.js.map