
  document.querySelectorAll('.offcanvas a.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const offcanvas = document.querySelector('.offcanvas.show');
      if (offcanvas) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        bsOffcanvas.hide();
      }
    });
  });

