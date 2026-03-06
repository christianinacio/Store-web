import './style.css'
import { products } from './products';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1> Store online !!! </h1>
    <table>
      <thead>
        <tr>
        <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        ${products
          .map(p => `
            <tr>
              <td><a href="product.html?name=${encodeURIComponent(p.name)}">${p.name}</a></td>
            </tr>
          `)
          .join('')}
      </tbody>
    </table>
  </div>
`
;
