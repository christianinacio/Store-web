import { products } from './products';

const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const app = document.querySelector<HTMLDivElement>('#app')!;

if (name) {
  const product = products.find(p => p.name === name);
  if (product) {
    app.innerHTML = `
      <div>
        <h1>${product.name}</h1>
        <p>Precio: ${product.price}</p>
        <a href="/">Volver a la lista</a>
      </div>
    `;
  } else {
    app.innerHTML = `<p>Producto "${name}" no encontrado. <a href="/">Volver</a></p>`;
  }
} else {
  app.innerHTML = `<p>No se especificó ningún producto. <a href="/">Volver</a></p>`;
}
