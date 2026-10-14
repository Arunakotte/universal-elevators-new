/**
 * Universal Elevators Bangalore — Interactive Frontend Script
 * Modern, accessible, zero-dependency vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Header & Scroll Top ---
  const header = document.querySelector('.header');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (header) {
      if (scrollPos > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollPos > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 2. Mobile Navigation Drawer ---
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const drawerClose = document.querySelector('.drawer-close');

  function openDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerOverlay) drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // --- 3. FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close other FAQs
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        if (isOpen) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // --- 4. Project Gallery Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  if (filterBtns.length > 0 && projectItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 20);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // --- 5. Contact Form Simulation & WhatsApp Dispatch ---
  const contactForms = document.querySelectorAll('form.contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]')?.value || 'Customer';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const service = form.querySelector('[name="service"]')?.value || 'Elevator Enquiry';
      const message = form.querySelector('[name="message"]')?.value || '';

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.innerHTML = `<span>Sending Enquiry...</span>`;
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        // Construct WhatsApp message text
        const waText = encodeURIComponent(
          `*New Website Enquiry - Universal Elevators Bangalore*\n\n` +
          `*Name:* ${name}\n` +
          `*Phone:* ${phone}\n` +
          `*Email:* ${email}\n` +
          `*Service Required:* ${service}\n` +
          `*Notes:* ${message}\n\n` +
          `Please provide a quotation / call back.`
        );

        // Success state
        form.innerHTML = `
          <div style="text-align: center; padding: 30px 10px;">
            <div style="width: 56px; height: 56px; background: rgba(37, 211, 102, 0.15); color: #25D366; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h4 style="font-size: 1.3rem; color: #0A2540; margin-bottom: 8px;">Thank You, ${name}!</h4>
            <p style="color: #64748B; font-size: 0.95rem; margin-bottom: 24px;">Your enquiry has been received. Our Bangalore engineering team will contact you promptly on <strong>${phone}</strong>.</p>
            <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
              <a href="https://wa.me/919844541114?text=${waText}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
                Open in WhatsApp Directly
              </a>
              <button type="button" class="btn btn-outline btn-sm" onclick="location.reload()">Send Another</button>
            </div>
          </div>
        `;
      }, 700);
    });
  });

  // --- 6. Set Active Nav Link Automatically ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
