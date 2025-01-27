(()=>{function e(e){const t=document.getElementById("log");t.querySelectorAll("p").length>7&&t.firstElementChild.remove();const n=document.createElement("p");n.textContent=e,t.append(n)}function t(e,t){document.getElementById("trial").textContent=new Array(e).fill(t).join("")}let n=null,r=0;const u=["Press the 'Start' button.","You have a secret number between 0 & 999.","If the secret number is less than 100, it will have a leading zero.","Guess each digit of the secret number.","'x right numbers' means you guessed x correct numbers, regardless of their positions.","'x right places' means you guessed x numbers in their correct positions.","You have 7 chances to guess it."],o=document.getElementById("start"),a=document.getElementById("guess-form"),i=document.getElementById("first-digit"),c=document.getElementById("second-digit"),l=document.getElementById("third-digit"),s=document.getElementById("info"),d=document.getElementById("popup"),g=document.getElementById("popup-content"),m=document.getElementById("ok");o.addEventListener("click",(()=>{document.getElementById("log").innerHTML="",n=function(){let e=Math.floor(1e3*Math.random());const t=[];for(let n=0;n<3;n++){const n=e%10;t.unshift(n.toString()),e-=n,e/=10}return t}(),r=7,t(r,"💜"),i.value="",c.value="",l.value="",e("Secret number generated!")})),a.addEventListener("submit",(function(u){if(u.preventDefault(),null===n)document.getElementById("log").innerHTML="",t(),e("Press Start Button");else{const u=[i.value,c.value,l.value],o=function(e,t){const n={isGuessed:!1,rightNumber:0,rightPlace:0};for(let r=0;r<3;r++)t.includes(e[r])&&n.rightNumber++,t[r]===e[r]&&n.rightPlace++;return n}(u,n);3===o.rightNumber&&3===o.rightPlace?(t(r,"🏆"),e(`You're correct, the secret number is ${u.join("")}!`),n=null):(r--,t(r,"💜"),r>0?e(`${u.join("")} : ${o.rightNumber} right numbers and ${o.rightPlace} right places.`):(t(1,"💩"),e(`Game Over, the secret number is ${n.join("")}.`),n=null))}u.target.reset()})),s.addEventListener("click",(()=>{d.style.display="block",g.innerHTML="",u.forEach((e=>{const t=document.createElement("li");t.classList="text-info",t.textContent=e,g.append(t)}))})),m.addEventListener("click",(()=>{d.style.display="none"})),i.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^0-9]/g,""),""!==e.target.value&&c.focus()})),c.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^0-9]/g,""),""!==e.target.value&&l.focus()})),l.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^0-9]/g,"")})),i.addEventListener("keydown",(function(e){"Backspace"===e.key&&""===e.target.value&&i.focus()})),c.addEventListener("keydown",(function(e){"Backspace"===e.key&&""===e.target.value&&i.focus()})),l.addEventListener("keydown",(function(e){"Backspace"===e.key&&""===e.target.value&&c.focus()}))})();