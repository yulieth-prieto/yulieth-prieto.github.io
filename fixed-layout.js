// Este script deja fija la foto y la columna de contacto al hacer scroll
// y mantiene la proporción de la foto

window.addEventListener('DOMContentLoaded', function () {
  // Fija la foto en la side-column
  const sideColumn = document.querySelector('.side-column');
  if (sideColumn) {
    sideColumn.style.position = 'sticky';
    sideColumn.style.top = '0';
    sideColumn.style.alignSelf = 'flex-start';
    sideColumn.style.height = '100vh';
    sideColumn.style.zIndex = '2';
    sideColumn.style.background = '#fff';
    // Ajusta la foto para que sea proporcional
    const photo = sideColumn.querySelector('.photo');
    if (photo) {
      photo.style.height = 'auto';
      photo.style.width = '100%';
      photo.style.display = 'flex';
      photo.style.justifyContent = 'center';
      photo.style.alignItems = 'flex-start';
      const img = photo.querySelector('img');
      if (img) {
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.maxHeight = '100vh'; // Ajusta el valor según prefieras
        img.style.objectFit = 'cover';
        img.style.display = 'block';
      }
    }
  }

  // Fija la columna de contacto en main-column
  const contactColumn = document.querySelector('.contact-column');
  if (contactColumn) {
    contactColumn.style.position = 'sticky';
    contactColumn.style.top = '0';
    contactColumn.style.alignSelf = 'flex-start';
    contactColumn.style.zIndex = '2';
    contactColumn.style.background = '#fff';
  }
});
