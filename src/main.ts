import './style.css'
import { products } from './products';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1> Store online !!! </h1>
    <table>
      <thead>
        <tr>
        <th>Nombre</th>
        <th>Precio</th>
        </tr>
      </thead>
    </table>
  </div>
`
;
