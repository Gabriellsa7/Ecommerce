import{l as d,d as n}from"./utilidades-61a55346.js";function r(o){const i=`<p class='text-xl text-bold my-4' >${new Date(o.dataPedido).toLocaleDateString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</p>
      <section id='container-pedidos-${o.dataPedido}' class='bg-slate-300 p-3 rounded-md' ></section>
      `,e=document.getElementsByTagName("main")[0];e.innerHTML+=i;for(const t in o.pedido)n(t,`container-pedidos-${o.dataPedido}`,o.pedido[t])}function s(){const o=d("historico");for(const i of o)r(i)}s();
