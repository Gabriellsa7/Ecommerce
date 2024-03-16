import{l as x,c as a,s as c}from"./utilidades-61a55346.js";const o=x("carrinho")??{};function y(){document.getElementById("carrinho").classList.add("right-[0]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function C(){document.getElementById("carrinho").classList.remove("right-[0]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function b(){Object.keys(o).length!==0&&(window.location.href=window.location.origin+"/checkout.html")}function v(){const t=document.getElementById("fechar-carrinho"),e=document.getElementById("abrir-carrinho"),n=document.getElementById("finalizar-compra");t.addEventListener("click",C),e.addEventListener("click",y),n.addEventListener("click",b)}function m(t){delete o[t],c("carrinho",o),i(),h()}function u(t){o[t]++,c("carrinho",o),i(),f(t)}function $(t){if(o[t]===1){m(t);return}o[t]--,c("carrinho",o),i(),f(t)}function f(t){document.getElementById(`quantidade-${t}`).innerText=o[t]}function g(t){const e=a.find(d=>d.id===t),n=document.getElementById("produtos-carrinho"),r=document.createElement("article"),p=["flex","bg-slate-100","rounded-lg","p-1","relative"];for(const d of p)r.classList.add(d);const E=`<button class="absolute top-0 right-2" id="remover-item-${e.id}"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
      <img class="h-24 rounded-lg" src="./assets/img/${e.imagem}" alt="Carrinho:${e.nome}">
      <div class="p-2 flex flex-col justify-between"> <!--py === padding na vertical & px === padding na horizontal -->
        <p class="text-slate-900 text-sm">${e.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${e.preco}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <button id="decrementarProduto-${e.id}">-</button>
        <p class="ml-2" id='quantidade-${e.id}'>${o[e.id]}</p>
        <button id='incrementarProduto-${e.id}' class="ml-2">+</button>
      </div>
    `;r.innerHTML=E,n.appendChild(r),document.getElementById(`decrementarProduto-${e.id}`).addEventListener("click",()=>$(e.id)),document.getElementById(`incrementarProduto-${e.id}`).addEventListener("click",()=>u(e.id)),document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>m(e.id))}function h(){const t=document.getElementById("produtos-carrinho");t.innerHTML=" ";for(const e in o)g(e)}function B(t){if(t in o){u(t);return}o[t]=1,i(),c("carrinho",o),g(t)}function i(){const t=document.getElementById("preco-total");let e=0;for(const n in o)e+=a.find(r=>r.id===n).preco*o[n];t.innerText=`Total: $${e}`}function L(){for(const t of a){const e=`<div class='border-solid shadow-xl shadow-slate-400 rounded-lg w-48 m-2 flex flex-col p-2 justify-between group ${t.feminino?"feminino ":"masculino"}' id="card-produto-${t.id}">
        <img 
            src="./assets/img/${t.imagem}" 
            alt="Produto 1 do Ecommerce" 
            class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${t.marca}</p>
        <p class='text-sm'>${t.nome}</p>
        <p class='text-sm'>$${t.preco}</p>
        <button id='adicionar-${t.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200 '><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;document.getElementById("container-produto").innerHTML+=e}for(const t of a)document.getElementById(`adicionar-${t.id}`).addEventListener("click",()=>B(t.id))}const s=document.getElementById("container-produto");function l(){const t=Array.from(s.getElementsByClassName("hidden"));for(const e of t)e.classList.remove("hidden")}function I(){l();const t=Array.from(s.getElementsByClassName("masculino"));for(const e of t)e.classList.add("hidden")}function k(){l();const t=Array.from(s.getElementsByClassName("feminino"));for(const e of t)e.classList.add("hidden")}function P(){document.getElementById("exibir-todos").addEventListener("click",l),document.getElementById("exibir-masculinas").addEventListener("click",k),document.getElementById("exibir-femininos").addEventListener("click",I)}L();v();h();i();P();
