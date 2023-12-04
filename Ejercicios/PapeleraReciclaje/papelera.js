const trash = document.querySelector('.trash')

trash.addEventListener(
  'click',
  e => {
    // if (e.target === trash) {
    trash.style.backgroundImage =
      "url('https://cdn.icon-icons.com/icons2/125/PNG/128/recycle_bin_empty_20184.png')"
    // }
    setTimeout(() => alert('La papelera se ha vaciado'), 300)
  },
  false
)

// document.addEventListener('contextmenu', e => {return false}, false)

document.oncontextmenu = () => false
