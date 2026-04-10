import './style.css'
import { products } from './products';

const numColumns = Math.ceil(products.length / 6);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h1> Store online !!! </h1>
    </div>
    <div style="display: grid; grid-template-columns: repeat(${numColumns}, 1fr); gap: 20px; padding: 20px;">
      ${products
        .map(p => `
          <div style="border: 1px solid #ccc; padding: 15px; border-radius: 8px;">
            <a href="product.html?name=${encodeURIComponent(p.name)}" style="text-decoration: none; color: inherit;">
              <div style="font-size: 2em; margin-bottom: 10px;">${p.icon}</div>
              <div style="font-weight: bold; margin-bottom: 8px;">${p.name}</div>
              <div style="color: #27ae60; font-size: 1.2em;">$${p.price}</div>
            </a>
          </div>
        `)
        .join('')}
    </div>
    <a href="contact.html" style="padding: 10px 20px; background-color: #3498db; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Contacto</a>
  </div>
`;

