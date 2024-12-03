System.register(["./index-legacy-BMy144I-.js","./useTerms-legacy-BHcJ9mSR.js"],(function(e,r){"use strict";var o,t,n,i;return{setters:[e=>{o=e.j,t=e.r},e=>{n=e.u,i=e.c}],execute:function(){function r(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=s(e))&&(t&&(t+=" "),t+=r);return t}function s(e){if("string"==typeof e)return e;for(var r,o="",t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(o&&(o+=" "),o+=r);return o}e("Component",(function(){const{unit:e}=n(),[r,i]=t.useState(0),[s,l]=t.useState("uk");return e?o.jsxs("div",{className:"w-screen h-screen p-10 flex flex-col",children:[o.jsx("div",{className:"text-pri-1 text-2xl font-bold",children:e.name}),o.jsxs("div",{className:"mt-6 h-full flex",children:[o.jsx(D,{word:e.words[r],isActive:!0,playingType:s,size:"large",onClickAudio:e=>l(e),className:"grow-0 mb-10 flex-1 flex items-center justify-center"},`word-${e.words[r].id}-${r}`),o.jsx("div",{className:"h-full overflow-y-auto flex flex-col gap-6 ml-6 w-[240px] shrink-0",children:e.words.map(((e,t)=>o.jsx(D,{word:e,onClick:()=>i(t),isActive:r===t,playingType:s,onClickAudio:e=>l(e)},e.id)))})]})]}):null}));var l="-";function a(e){var r=function(e){var r=e.theme,o=e.prefix,t={nextPart:new Map,validators:[]},n=function(e,r){return r?e.map((function(e){return[e[0],e[1].map((function(e){return"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((function(e){var o=e[0],t=e[1];return[r+o,t]}))):e}))]})):e}(Object.entries(e.classGroups),o);return n.forEach((function(e){var o=e[0];u(e[1],t,o,r)})),t}(e),o=e.conflictingClassGroups,t=e.conflictingClassGroupModifiers,n=void 0===t?{}:t;return{getClassGroupId:function(e){var o=e.split(l);return""===o[0]&&1!==o.length&&o.shift(),c(o,r)||function(e){if(d.test(e)){var r=d.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){var t=o[e]||[];return r&&n[e]?[].concat(t,n[e]):t}}}function c(e,r){if(0===e.length)return r.classGroupId;var o=e[0],t=r.nextPart.get(o),n=t?c(e.slice(1),t):void 0;if(n)return n;if(0!==r.validators.length){var i=e.join(l);return r.validators.find((function(e){return(0,e.validator)(i)}))?.classGroupId}}var d=/^\[(.+)\]$/;function u(e,r,o,t){e.forEach((function(e){if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void u(e(t),r,o,t):void r.validators.push({validator:e,classGroupId:o});Object.entries(e).forEach((function(e){var n=e[0];u(e[1],p(r,n),o,t)}))}else(""===e?r:p(r,e)).classGroupId=o}))}function p(e,r){var o=e;return r.split(l).forEach((function(e){o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)})),o}function f(e){if(e<1)return{get:function(){},set:function(){}};var r=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++r>e&&(r=0,t=o,o=new Map)}return{get:function(e){var r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set:function(e,r){o.has(e)?o.set(e,r):n(e,r)}}}var b="!";function m(e){var r=e.separator||":",o=1===r.length,t=r[0],n=r.length;return function(e){for(var i,s=[],l=0,a=0,c=0;c<e.length;c++){var d=e[c];if(0===l){if(d===t&&(o||e.slice(c,c+n)===r)){s.push(e.slice(a,c)),a=c+n;continue}if("/"===d){i=c;continue}}"["===d?l++:"]"===d&&l--}var u=0===s.length?e:e.substring(a),p=u.startsWith(b);return{modifiers:s,hasImportantModifier:p,baseClassName:p?u.substring(1):u,maybePostfixModifierPosition:i&&i>a?i-a:void 0}}}var g=/\s+/;function x(){for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];var n,i,s,l=function(e){var r=o[0],t=o.slice(1).reduce((function(e,r){return r(e)}),r());return n=function(e){return{cache:f(e.cacheSize),splitModifiers:m(e),...a(e)}}(t),i=n.cache.get,s=n.cache.set,l=c,c(e)};function c(e){var r=i(e);if(r)return r;var o=function(e,r){var o=r.splitModifiers,t=r.getClassGroupId,n=r.getConflictingClassGroupIds,i=new Set;return e.trim().split(g).map((function(e){var r=o(e),n=r.modifiers,i=r.hasImportantModifier,s=r.baseClassName,l=r.maybePostfixModifierPosition,a=t(l?s.substring(0,l):s),c=Boolean(l);if(!a){if(!l)return{isTailwindClass:!1,originalClassName:e};if(!(a=t(s)))return{isTailwindClass:!1,originalClassName:e};c=!1}var d=function(e){if(e.length<=1)return e;var r=[],o=[];return e.forEach((function(e){"["===e[0]?(r.push.apply(r,o.sort().concat([e])),o=[]):o.push(e)})),r.push.apply(r,o.sort()),r}(n).join(":");return{isTailwindClass:!0,modifierId:i?d+b:d,classGroupId:a,originalClassName:e,hasPostfixModifier:c}})).reverse().filter((function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,o=e.classGroupId,t=e.hasPostfixModifier,s=r+o;return!i.has(s)&&(i.add(s),n(o,t).forEach((function(e){return i.add(r+e)})),!0)})).reverse().map((function(e){return e.originalClassName})).join(" ")}(e,n);return s(e,o),o}return function(){return l(r.apply(null,arguments))}}function h(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var v=/^\[(?:([a-z-]+):)?(.+)\]$/i,y=/^\d+\/\d+$/,w=new Set(["px","full","screen"]),k=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,j=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function z(e){return S(e)||w.has(e)||y.test(e)||N(e)}function N(e){return R(e,"length",V)}function M(e){return R(e,"size",O)}function G(e){return R(e,"position",O)}function P(e){return R(e,"url",B)}function I(e){return R(e,"number",S)}function S(e){return!Number.isNaN(Number(e))}function L(e){return e.endsWith("%")&&S(e.slice(0,-1))}function T(e){return q(e)||R(e,"number",q)}function W(e){return v.test(e)}function $(){return!0}function E(e){return k.test(e)}function A(e){return R(e,"",F)}function R(e,r,o){var t=v.exec(e);return!!t&&(t[1]?t[1]===r:o(t[2]))}function V(e){return j.test(e)}function O(){return!1}function B(e){return e.startsWith("url(")}function q(e){return Number.isInteger(Number(e))}function F(e){return C.test(e)}function Z(){var e=h("colors"),r=h("spacing"),o=h("blur"),t=h("brightness"),n=h("borderColor"),i=h("borderRadius"),s=h("borderSpacing"),l=h("borderWidth"),a=h("contrast"),c=h("grayscale"),d=h("hueRotate"),u=h("invert"),p=h("gap"),f=h("gradientColorStops"),b=h("gradientColorStopPositions"),m=h("inset"),g=h("margin"),x=h("opacity"),v=h("padding"),y=h("saturate"),w=h("scale"),k=h("sepia"),j=h("skew"),C=h("space"),R=h("translate"),V=function(){return["auto",W,r]},O=function(){return[W,r]},B=function(){return["",z]},q=function(){return["auto",S,W]},F=function(){return["","0",W]},Z=function(){return[S,I]},U=function(){return[S,W]};return{cacheSize:500,theme:{colors:[$],spacing:[z],blur:["none","",E,W],brightness:Z(),borderColor:[e],borderRadius:["none","","full",E,W],borderSpacing:O(),borderWidth:B(),contrast:Z(),grayscale:F(),hueRotate:U(),invert:F(),gap:O(),gradientColorStops:[e],gradientColorStopPositions:[L,N],inset:V(),margin:V(),opacity:Z(),padding:O(),saturate:Z(),scale:Z(),sepia:F(),skew:U(),space:O(),translate:O()},classGroups:{aspect:[{aspect:["auto","square","video",W]}],container:["container"],columns:[{columns:[E]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[W])}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",T]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",W]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",T]}],"grid-cols":[{"grid-cols":[$]}],"col-start-end":[{col:["auto",{span:["full",T]},W]}],"col-start":[{"col-start":q()}],"col-end":[{"col-end":q()}],"grid-rows":[{"grid-rows":[$]}],"row-start-end":[{row:["auto",{span:[T]},W]}],"row-start":[{"row-start":q()}],"row-end":[{"row-end":q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",W]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",W]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal"].concat(["start","end","center","between","around","evenly","stretch"])}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(["start","end","center","between","around","evenly","stretch"],["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(["start","end","center","between","around","evenly","stretch"],["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",W,r]}],"min-w":[{"min-w":["min","max","fit",W,z]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[E]},E,W]}],h:[{h:[W,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",W,z]}],"max-h":[{"max-h":[W,r,"min","max","fit"]}],"font-size":[{text:["base",E,N]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[$]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",W]}],"line-clamp":[{"line-clamp":["none",S,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",W,z]}],"list-image":[{"list-image":["none",W]}],"list-style-type":[{list:["none","disc","decimal",W]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(["solid","dashed","dotted","double","none"],["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",z]}],"underline-offset":[{"underline-offset":["auto",W,z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",W]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",W]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[G])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",M]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},P]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[].concat(["solid","dashed","dotted","double","none"],["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(["solid","dashed","dotted","double","none"])}],"outline-offset":[{"outline-offset":[W,z]}],"outline-w":[{outline:[z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",E,A]}],"shadow-color":[{shadow:[$]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",E,W]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",W]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",W]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",W]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[T,W]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",W]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",W]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",W]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,I]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var U=x(Z);const _=({className:e,style:r,isPlaying:t,onClick:n,speed:i=700,color:s="currentColor"})=>t?o.jsxs("svg",{viewBox:"0 0 36 36",fill:"none",className:U("h-9 w-9",e),onClick:n,style:r,children:[o.jsx("circle",{cx:"14.8927",cy:"17.8184",r:"5.37199",fill:s}),o.jsx("circle",{cx:"7.37199",cy:"17.8184",r:"5.37199",fill:s}),o.jsx("path",{d:"M7.37207 12.4696L15.0843 7.82559C16.4173 7.02291 18.116 7.98293 18.116 9.53894V17.8184V26.0978C18.116 27.6538 16.4173 28.6138 15.0843 27.8112L7.37207 23.1671V12.4696Z",fill:s}),o.jsx("path",{d:"M24.0813 21.0179C25.922 19.1773 25.922 16.193 24.0813 14.3523",stroke:s,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("animate",{attributeName:"opacity",values:"0;1;1;1;0;",dur:`${i}ms`,begin:"0ms",fill:"freeze",repeatCount:"indefinite"})}),o.jsx("path",{d:"M28.1323 25.5527C32.4775 21.2075 32.4775 14.1625 28.1323 9.81732",stroke:s,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("animate",{attributeName:"opacity",values:"0;0;1;0;0;",dur:`${i}ms`,begin:"0ms",fill:"freeze",repeatCount:"indefinite"})})]}):o.jsxs("svg",{viewBox:"0 0 36 36",fill:"none",className:U("h-9 w-9",e),onClick:n,style:r,children:[o.jsx("circle",{cx:"14.8927",cy:"17.8184",r:"5.37199",fill:s}),o.jsx("circle",{cx:"7.37199",cy:"17.8184",r:"5.37199",fill:s}),o.jsx("path",{d:"M7.37207 12.4696L15.0843 7.82559C16.4173 7.02291 18.116 7.98293 18.116 9.53894V17.8184V26.0978C18.116 27.6538 16.4173 28.6138 15.0843 27.8112L7.37207 23.1671V12.4696Z",fill:s}),o.jsx("path",{d:"M24.0813 21.0179C25.922 19.1773 25.922 16.193 24.0813 14.3523",stroke:s,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M28.1323 25.5527C32.4775 21.2075 32.4775 14.1625 28.1323 9.81732",stroke:s,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]}),D=({className:e,word:r,onClick:n,onClickAudio:s,isActive:l=!1,playingType:a="uk",size:c="small"})=>{const{id:d,imgUrl:u,text:p}=r,f=t.useRef(null),b=t.useRef(null);return t.useEffect((()=>{l&&f.current&&"uk"===a?f.current.play():l&&b.current&&"us"===a&&b.current.play()}),[l,a]),o.jsxs("div",{className:U(i("bg-white-1 border-2 rounded-lg flex flex-col p-6 shrink-0",e)),onClick:n,children:[o.jsx("img",{src:u,alt:"",className:i("self-center shrink-0",{"w-[160px] h-[160px]":"small"===c,"w-[260px] h-[260px]":"large"===c})}),o.jsx("div",{className:"flex items-center justify-center mt-6",children:o.jsx("span",{className:"text-3xl text-aux-1 font-bold",children:p})}),"large"!==c?null:o.jsxs("div",{className:i("flex items-center gap-2"),children:[o.jsxs("div",{className:"flex items-center",children:[o.jsxs("span",{className:"text-sm text-purple-1",children:["uk /",r.pronunciations.uk,"/"]}),r.audios?.uk&&o.jsxs(o.Fragment,{children:[o.jsx("audio",{src:r.audios.uk,ref:f}),o.jsx(_,{isPlaying:"uk"===a&&!f.current?.paused,className:"w-8 h-8 text-pri-2 ml-1",onClick:()=>s?.("uk")})]})]}),o.jsxs("div",{className:"flex items-center",children:[o.jsxs("span",{className:"text-sm text-blue-1",children:["us /",r.pronunciations.us,"/"]}),r.audios?.uk&&o.jsxs(o.Fragment,{children:[o.jsx("audio",{src:r.audios.us,ref:b}),o.jsx(_,{isPlaying:"us"===a&&!b.current?.paused,className:"w-8 h-8 text-pri-2 ml-1",onClick:()=>s?.("us")})]})]})]})]},d)}}}}));
//# sourceMappingURL=index-legacy-CjVioJi1.js.map
