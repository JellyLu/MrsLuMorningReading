System.register(["./index-legacy-Bs1JUKG8.js"],(function(e,t){"use strict";var i,n,s;return{setters:[e=>{i=e.g,n=e.a,s=e.r}],execute:function(){const t="/MrsLuMorningReading/assets/ice-cream-DM8eZqXv.png",r=[{id:1,text:"ground",audio:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",imgUrl:"/MrsLuMorningReading/assets/ground-DLi_YBJp.png",sentences:[]},{id:2,text:"ice cream",audio:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",imgUrl:t,sentences:[]},{id:3,text:"ago",imgUrl:t,audio:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",sentences:[]}],o=[{id:1,name:"Module 1",description:"Module 1 1单元",imgUrl:"/MrsLuMorningReading/assets/term-9-module-1-CBvATkxT.png",units:[{id:1,name:"Unit 1 Did you come back yesterday",description:"Unit 1 Did you come back yesterday",words:[...r,...r,...r]},{id:2,name:"Unit 2 We bought ice creams",description:"Unit 2 We bought ice creams",words:r}]}],c=[{id:9,name:"外研版小学英语(三起)五年级上册",description:"简介：2014秋外研版小学英语(三起)五年级上册教学资源，关于外研版小学英语(三起)五年级上册的的单词、句式。",imgUrl:"/MrsLuMorningReading/assets/wy-3q-5-s-CiHVJJG9.png",sections:o},{id:10,name:"外研版小学英语(三起)五年级下册",description:"简介：2015春外研版小学英语(三起)五年级下册教学资源，关于外研版小学英语(三起)五年级下册的单词、句式。",imgUrl:"/MrsLuMorningReading/assets/wy-3q-5-x-CZQKyyax.jpg",sections:o}];var u,a={exports:{}},d=(u||(u=1,function(e){!function(){var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var o=i.apply(null,s);o&&e.push(o)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var c in s)t.call(s,c)&&s[c]&&e.push(c)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):window.classNames=i}()}(a)),a.exports);
/*!
      	Copyright (c) 2018 Jed Watson.
      	Licensed under the MIT License (MIT), see
      	http://jedwatson.github.io/classnames
      */e("c",i(d));const g=(e,t)=>{if(!e)return t;const i=parseInt(e);return isNaN(i)?t:i};e("u",(()=>{const{termId:e,sectionId:t,unitId:i}=n(),[r,o,u]=[e,t,i].map(g),a=s.useMemo((()=>c.find((e=>e.id===r))),[r]),d=s.useMemo((()=>a&&a.sections?a.sections:[]),[a]),m=d.find((e=>e.id===o)),p=s.useMemo((()=>m&&m.units?m.units:[]),[m]),w=p.find((e=>e.id===u));return console.log("======terms",c,"term",a,"sections",d,"section",m,"units",p,"unit",w),{terms:c,term:a,sections:d,section:m,units:p,unit:w}}))}}}));
//# sourceMappingURL=useTerms-legacy-B19-bhDM.js.map