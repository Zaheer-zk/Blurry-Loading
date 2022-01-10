const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const footer = document.querySelector('.footer')

let load = 0

let int = setInterval(blurry, 30) // to setInterval blurry func to 30 milliseconds

function blurry() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  footer.style.opacity = scale(load, 0, 100, 0, 1)
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
} // map 100 to 0 opacity
