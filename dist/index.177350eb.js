let e=!1,t=document.querySelector("body"),n=document.querySelector(".svg-icon"),o=document.querySelector(".navbuttons");n.addEventListener("click",(function(){0==e?(o.style="display: block;",e=!0):1==e&&(o.style="display: none;",e=!1)}));const a=function(e){switch(e=Number(this.id)){case 0:window.location.href="test.html";break;case 1:window.location.href="about.html";break;case 2:window.location.href="logs.html";break;case 3:window.location.href="contact.html";break;default:console.log("nav handler broke")}console.log(e)};t.addEventListener("load",function(){let e,t,n,o=document.querySelector(".navbuttons"),c=document.querySelector("#mobile");for(let s=0;s<4;s++){switch(s){case 0:e="Home",n=`<button class="navbtn" id="${t=s}"><span>${e}<span></button>`,o.insertAdjacentHTML("beforeend",n),c.insertAdjacentHTML("beforeend",n);break;case 1:e="About",n=`<button class="navbtn" id="${t=s}"><span>${e}<span></button>`,o.insertAdjacentHTML("beforeend",n),c.insertAdjacentHTML("beforeend",n);break;case 2:e="Logs",n=`<button class="navbtn" id="${t=s}"><span>${e}<span></button>`,o.insertAdjacentHTML("beforeend",n),c.insertAdjacentHTML("beforeend",n);break;case 3:e="Contact",n=`<button class="navbtn" id="${t=s}"><span>${e}<span></button>`,o.insertAdjacentHTML("beforeend",n),c.insertAdjacentHTML("beforeend",n);break;default:console.log(`switch broke at ${s}`)}document.querySelectorAll("button")[s].addEventListener("click",a)}}());
//# sourceMappingURL=index.177350eb.js.map
