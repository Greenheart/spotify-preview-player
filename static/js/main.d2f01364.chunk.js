(this["webpackJsonpspotify-preview-player"]=this["webpackJsonpspotify-preview-player"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),l=(a(9),a(3)),c=(a(10),function(){var e=Object(n.useState)("0dINQNECUzmrGu6hYRiNPx"),t=Object(l.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"uri-input"},r.a.createElement("label",{htmlFor:"spotify-uri"},"Enter a Spotify URI to preview:"),r.a.createElement("input",{type:"text",name:"spotify-uri",id:"spotify-uri",autoFocus:!0,onChange:function(e){var t=e.target.value,a=t.split("spotify:track:");a&&2===a.length?i(a[1]):console.log("invalid song ID",t,a)}})),a?r.a.createElement("iframe",{title:"Spotify Song Preview for track: "+a,src:"https://open.spotify.com/embed/track/"+a,width:"300",height:"380",frameBorder:"0",allowTransparency:!0,allow:"encrypted-media"}):null)});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.d2f01364.chunk.js.map