(()=>{"use strict";const e=function(){c(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const c=document.createElement("h2");c.textContent="Contact Us",n.appendChild(c);const d=document.createElement("input");d.type="text",d.placeholder="Enter Heading",n.appendChild(d);const o=document.createElement("input");o.type="text",o.placeholder="Enter Address",n.appendChild(o);const a=document.createElement("input");a.type="number",a.placeholder="Enter Phone Number",n.appendChild(a);const l=document.createElement("input");l.type="submit",l.value="submit",n.appendChild(l),t.appendChild(n),e.appendChild(t)})()},t=function(){c(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h2");n.textContent="Our Menu";const c=document.createElement("ul"),d=document.createElement("li");d.textContent="Dosa";const o=document.createElement("li");o.textContent="Idli";const a=document.createElement("li");a.textContent="puri",c.appendChild(d),c.appendChild(o),c.appendChild(a),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()};function n(){content.innerHTML=""}const c=()=>{const c=document.querySelector("#content"),o=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div");o.setAttribute("id","home-btn"),a.setAttribute("id","menu-btn"),l.setAttribute("id","contact-btn"),o.classList.add("tab"),a.classList.add("tab"),l.classList.add("tab"),o.textContent="Home",a.textContent="Menu",l.textContent="Contact",c.appendChild(o),c.appendChild(a),c.appendChild(l),o.addEventListener("click",(()=>{n(),d()})),a.addEventListener("click",(()=>{n(),t()})),l.addEventListener("click",(()=>{n(),e()}))},d=function(){c(),(()=>{const e=document.querySelector("#content");var t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h2");n.textContent="Home",t.appendChild(n);const c=document.createElement("img");c.src="../img1.jpeg",c.height="500",t.appendChild(c);const d=document.createElement("h1");d.textContent="Welcome to our Restaurant",t.appendChild(d);const o=document.createElement("p");o.textContent="we serve the best food in town",t.appendChild(o),e.appendChild(t)})()};d()})();