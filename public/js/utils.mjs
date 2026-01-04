let DESKTOP_BREAKPOINT = 600
let resizeTimeout;

export function handleToggle(header, hamburger, body) {
  function toggleMobile() {
    header.classList.toggle("menu-open");
    body.classList.toggle(
      "no-scroll",
      header.classList.contains("menu-open")
    );
  }
  hamburger.addEventListener('click', toggleMobile)
}

export function handleResize(header, body){

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout)
        body.classList.add('no-transition')
        header.classList.remove('menu-open')
        body.classList.remove('no-scroll')

        resizeTimeout = setTimeout(() => {
            body.classList.remove("no-transition")
        }, 500);
    })

    if(window.innerWidth >= DESKTOP_BREAKPOINT){
        header.classList.remove('menu-open')
        body.classList.remove('no-scroll')
        body.classList.remove('no-transition')
    }
}