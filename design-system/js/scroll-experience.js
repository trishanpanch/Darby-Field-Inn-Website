(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.querySelector('nav');
  const navInner = nav?.querySelector('.site-nav-inner') || nav?.firstElementChild;
  const desktopNav = nav?.querySelector('.site-nav-desktop');
  const revealTargets = Array.from(document.querySelectorAll('section:not(.hero), .card-grid-item, .group'))
    .filter(Boolean);
  const parallaxTargets = Array.from(document.querySelectorAll('[data-scroll-parallax]'));
  const progressTrack = document.createElement('div');
  const progressThumb = document.createElement('div');
  let mobileToggle = null;
  let mobilePanel = null;

  if (nav) {
    nav.classList.add('site-nav');
    nav.querySelectorAll('a, span').forEach((element) => {
      element.classList.add('site-nav-color');
    });
  }

  const setMobileOpen = (isOpen) => {
    if (!nav || !mobileToggle) {
      return;
    }

    nav.classList.toggle('site-nav-mobile-open', isOpen);
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    const icon = mobileToggle.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = isOpen ? 'close' : 'menu';
    }
  };

  if (nav && navInner && desktopNav) {
    mobileToggle = document.createElement('button');
    mobileToggle.type = 'button';
    mobileToggle.className = 'site-nav-mobile-toggle';
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
    mobileToggle.innerHTML = '<span class="material-symbols-outlined site-nav-color">menu</span>';

    mobilePanel = document.createElement('div');
    mobilePanel.className = 'site-nav-mobile-panel';

    desktopNav.querySelectorAll('a, button').forEach((node) => {
      const clone = node.cloneNode(true);
      clone.classList.add('site-nav-mobile-item');
      mobilePanel.appendChild(clone);
    });

    navInner.appendChild(mobileToggle);
    nav.appendChild(mobilePanel);

    mobilePanel.querySelectorAll('a, button').forEach((element) => {
      element.addEventListener('click', () => setMobileOpen(false));
    });

    mobileToggle.addEventListener('click', () => {
      setMobileOpen(!nav.classList.contains('site-nav-mobile-open'));
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    });
  }

  progressTrack.className = 'scroll-progress-track';
  progressThumb.className = 'scroll-progress-thumb';
  progressTrack.appendChild(progressThumb);

  if (!prefersReducedMotion) {
    document.body.appendChild(progressTrack);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add('is-visible', 'reveal-on-scroll');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -12% 0px',
    }
  );

  revealTargets.forEach((node, index) => {
    node.classList.add('reveal-on-scroll');
    node.style.setProperty('--reveal-delay', `${Math.min(index * 0.06, 0.36)}s`);
    observer.observe(node);
  });

  const clamp01 = (value) => Math.min(1, Math.max(0, value));

  const updateProgress = () => {
    const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = clamp01(window.scrollY / total);
    progressThumb.style.transform = `scaleX(${ratio})`;
  };

  const updateNav = () => {
    if (!nav) {
      return;
    }
    if (window.scrollY > 24) {
      nav.classList.remove('site-nav-initial');
      nav.classList.add('site-nav-scrolled');
    } else {
      nav.classList.add('site-nav-initial');
      nav.classList.remove('site-nav-scrolled');
    }
  };

  const updateParallax = () => {
    parallaxTargets.forEach((element) => {
      const speed = Number.parseFloat(element.getAttribute('data-scroll-speed') || '0.18');
      const bounds = element.getBoundingClientRect();
      const travel = window.innerHeight + bounds.height;
      const progress = (window.innerHeight - bounds.top) / travel;
      const translateY = (progress - 0.5) * speed * 24;
      element.style.transform = `translateY(${translateY.toFixed(2)}px)`;
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (!prefersReducedMotion) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          updateParallax();
          updateNav();
          ticking = false;
        });
      }
      ticking = true;
      return;
    }

    updateNav();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    updateProgress();
    if (window.innerWidth >= 768) {
      setMobileOpen(false);
    }
  }, { passive: true });

  updateProgress();
  updateNav();
  if (!prefersReducedMotion) {
    updateParallax();
  }
})();
