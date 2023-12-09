const Drawer = {
  init({ burger, navbar, content }) {
    const toggleDrawer = (event) => {
      event.stopPropagation();
      navbar.classList.toggle('nav-active');
      burger.classList.toggle('toggle-burger');
      const isOpen = navbar.classList.contains('nav-active');
      burger.setAttribute('aria-label', isOpen ? 'Tutup Navigasi' : 'Buka Navigasi');
      navbar.setAttribute('aria-expanded', isOpen.toString());
    };

    burger.setAttribute('tabindex', '0');
    burger.addEventListener('click', toggleDrawer);
    burger.addEventListener('keydown', (e) => {
      if (['Enter', ' '].includes(e.key)) {
        e.preventDefault();
        toggleDrawer(e);
      }
    });

    if (Array.isArray(content)) {
      content.forEach((link) => {
        link.addEventListener('keydown', (e) => {
          if (['Enter', ' '].includes(e.key)) {
            e.preventDefault();
            link.click();
          }
        });
      });
    }
  },
};

export default Drawer;
