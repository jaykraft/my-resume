document.addEventListener('DOMContentLoaded', () => {
    // ── Theme toggle with localStorage persistence ──────────
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon   = document.getElementById('theme-icon');
    const body        = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeIcon?.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle?.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        if (themeIcon) {
            themeIcon.classList.replace(
                isDark ? 'fa-moon' : 'fa-sun',
                isDark ? 'fa-sun'  : 'fa-moon'
            );
        }
    });

    // ── Mobile nav hamburger ────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('nav-links');

    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('open');
    });

    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ── Scroll spy (active nav link, main page only) ────────
    const sections   = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a[href*="#"]');

    if (sections.length && navAnchors.length) {
        const onScroll = () => {
            let current = '';
            sections.forEach(s => {
                if (window.scrollY >= s.offsetTop - 80) current = s.id;
            });
            navAnchors.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href').endsWith('#' + current));
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ── Active nav for sub-pages (contact, hobbies) ─────────
    const path = window.location.pathname.toLowerCase();
    document.querySelectorAll('.nav-links a:not([href*="#"])').forEach(a => {
        const href = (a.getAttribute('href') || '').split('?')[0].toLowerCase();
        if (href && path.endsWith(href.replace(/^\.\.\//, ''))) {
            a.classList.add('active');
        }
    });

    // ── Scroll-in animations ─────────────────────────────────
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.08 });

        document.querySelectorAll('.section').forEach(s => observer.observe(s));
    }
});
