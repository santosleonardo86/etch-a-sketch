const form = document.querySelector('.ctn-enter-grid')
const input = document.querySelector('.grid-input');
const ok = document.querySelector('.btn-ok');
const normal = document.querySelector('.btn-normal');
const rainbow = document.querySelector('.btn-rainbow');
const eraser = document.querySelector('.btn-eraser');
const clear = document.querySelector('.btn-clear');
const container = document.querySelector('.ctn-divs');

function randomRgbColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return [r, g, b]
}

function etch() {
  ok.addEventListener('click', () => {
    if (container.innerHTML === '') {
      for (let i = 0; i < input.value ** 2; i++) {
        let div = document.createElement('div');
        div.className = 'div';
        container.appendChild(div);
        div.style.flexBasis = `calc(100% / (${input.value}))`

        normal.addEventListener('click', () => {
          div.addEventListener('mouseover', () => {
            div.style.background = '#000';
          })
        })

        rainbow.addEventListener('click', () => {
          div.addEventListener('mouseover', () => {
            div.style.background = `rgb(${randomRgbColor()})`
            return false;
          })
        })

        eraser.addEventListener('click', () => {
          div.addEventListener('mouseover', () => {
            div.style.background = '#fff';
          })
        })

        clear.addEventListener('click', () => {
          div.style.background = '#fff';
        })
      }
    }

    else {
      container.innerHTML = ''

      for (let i = 0; i < input.value ** 2; i++) {
        let div = document.createElement('div');
        div.className = 'div';
        container.appendChild(div);
        div.style.flexBasis = `calc(100% / (${input.value}))`

        normal.addEventListener('click', () => {
          div.addEventListener('mouseover', () => {
            div.style.background = '#000';
          })
        })

        rainbow.addEventListener('click', () => {
          div.addEventListener('mouseover', () => {
            div.style.background = `rgb(${randomRgbColor()})`
          })
        })

        eraser.addEventListener('click', () => {
          div.addEventListener('mouseover', () => {
            div.style.background = '#fff';
          })
        })

        clear.addEventListener('click', () => {
          div.style.background = '#fff';
        })
      }
    }
  })
}



etch()