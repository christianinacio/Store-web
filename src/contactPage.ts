import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="max-width: 600px; margin: 40px auto; padding: 20px;">
    <a href="index.html" style="display: inline-block; margin-bottom: 20px; padding: 10px 20px; background-color: #3498db; color: white; text-decoration: none; border-radius: 5px;">← Volver</a>
    
    <h1>Contacto</h1>
    
    <form style="display: flex; flex-direction: column; gap: 15px;">
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Nombre:</label>
        <input type="text" placeholder="Tu nombre" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Email:</label>
        <input type="email" placeholder="Tu email" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;">
      </div>
      
      <div>
        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Mensaje:</label>
        <textarea placeholder="Tu mensaje" rows="6" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-family: Arial;"></textarea>
      </div>
      
      <button type="submit" style="padding: 12px; background-color: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1em; font-weight: bold;">Enviar Mensaje</button>
    </form>
  </div>
`;
