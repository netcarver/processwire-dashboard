parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mZ0t":[function(require,module,exports) {
"use strict";function l(){Chart.defaults.global.animation.duration=0,Chart.defaults.global.aspectRatio=2.5,Chart.defaults.global.layout.padding=5,Chart.defaults.scale.gridLines.drawBorder=!1,Chart.defaults.scale.color="rgba(0, 0, 0, 0.07)",Chart.defaults.scale.zeroLineColor="rgba(0, 0, 0, 0.07)",Chart.defaults.scale.drawBorder=!1,Chart.defaults.scale.ticks.beginAtZero=!0,Chart.defaults.global.legend.position="bottom",Chart.defaults.global.legend.labels.fontColor="rgb(110, 110, 110)",Chart.defaults.global.legend.labels.usePointStyle=!0,Chart.defaults.global.legend.labels.boxWidth=4,Chart.defaults.global.tooltips.titleFontColor="rgb(53, 75, 96)",Chart.defaults.global.tooltips.backgroundColor="rgb(240, 243, 247)",Chart.defaults.global.tooltips.bodyFontColor="rgba(53, 75, 96, 0.6)",Chart.defaults.global.tooltips.displayColors=!1,Chart.defaults.global.tooltips.titleFontSize=14,Chart.defaults.global.tooltips.bodyFontSize=14,Chart.defaults.global.tooltips.cornerRadius=4,Chart.defaults.global.tooltips.xPadding=10,Chart.defaults.global.tooltips.yPadding=10,Chart.defaults.global.elements.line.backgroundColor="transparent",Chart.defaults.global.elements.line.clip=20,Chart.defaults.global.elements.line.borderWidth=2,Chart.defaults.doughnut.cutoutPercentage=75,Chart.defaults.global.elements.arc.borderWidth=4,Chart.defaults.global.elements.arc.borderColor="white",Chart.defaults.global.elements.arc.hoverBorderColor="white",Chart.defaults.global.elements.point.backgroundColor="white",Chart.defaults.global.elements.point.radius=3,Chart.defaults.global.elements.point.hoverRadius=4,Chart.defaults.global.elements.point.borderWidth=2,Chart.defaults.global.elements.point.hoverBorderWidth=2}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;
},{}],"o6QY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setDefaultColorTheme=exports.registerColorThemePlugin=exports.themes=exports.default=void 0;var r={dashboard:["rgb(23, 185, 120)","rgb(103, 114, 229)","rgb(219, 120, 221)","rgb(244, 190, 86)","rgb(35, 164, 240)"],airtable:["rgb(8, 157, 88)","rgb(168, 71, 189)","rgb(62, 134, 246)","rgb(217, 70, 55)","rgb(240, 181, 0)"],processwire:["rgb(37, 128, 230)","rgb(233, 53, 97)","rgb(69, 183, 151)","rgb(28, 40, 53)"],reminders:["rgb(92, 91, 231)","rgb(253, 71, 59)","rgb(252, 160, 11)","rgb(41, 209, 92)","rgb(211, 128, 246)"],workflow:["rgb(99, 142, 196)","rgb(68, 158, 135)","rgb(186, 101, 192)","rgb(222, 83, 87)","rgb(209, 151, 40)"]};exports.themes=r;var o=r.processwire,e=function(e){o=r[e]||o};exports.setDefaultColorTheme=e;var t=function(r,o){return r[o%r.length]},a={beforeUpdate:function(e){var a=r[e.config.theme]||o;switch(e.config.type){case"bar":e.data.datasets.forEach(function(r,o){r.borderColor||(r.borderColor=t(a,o),r.backgroundColor||(r.backgroundColor=r.borderColor))});break;case"doughnut":e.data.datasets.forEach(function(r){if(!r.backgroundColor){var o=r.data.map(function(r,o){return t(a,o)});r.backgroundColor=o}r.borderColor||(r.borderColor="white")});break;case"line":e.data.datasets.forEach(function(r,o){r.borderColor||(r.borderColor=t(a,o),r.backgroundColor||(r.pointHoverBackgroundColor=r.borderColor),r.pointHoverBackgroundColor||(r.pointHoverBackgroundColor=r.borderColor))})}}},b=function(){Chart.pluginService.register(a)};exports.registerColorThemePlugin=b;var g=r;exports.default=g;
},{}],"iPyw":[function(require,module,exports) {
"use strict";var e=a(require("./charts/chartjs-defaults")),t=require("./charts/color-themes");function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var a=$(e);if(!a.data("setup")){var r=a.data("chart"),n=a.data("theme"),u=a.data("default-theme");(0,t.setDefaultColorTheme)(u),r.theme=n;new Chart(a,r);a.attr("data-setup",!0)}}function n(e){e.find("canvas").each(function(e,t){r(t)})}(0,e.default)(),(0,t.registerColorThemePlugin)(),$(document).on("dashboard:panel",function(e,t){var a=t.panel,r=t.$element;"chart"===a&&n(r)});
},{"./charts/chartjs-defaults":"mZ0t","./charts/color-themes":"o6QY"}]},{},["iPyw"], null)