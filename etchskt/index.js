const body = document.querySelector("body");
const container = document.createElement('div');
container.classList.add('container')
body.appendChild(container)


for (let i = 1; i <= 16 * 16; i++) {
  let item = document.createElement('div');
  item.classList.add('grid')
  container.appendChild(item);
  
  // container.appendChild(item)
}