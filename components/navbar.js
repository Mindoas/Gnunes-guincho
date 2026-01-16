class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: #111827;
          color: white;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #f59e0b;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
        
        .nav-links a:hover {
          color: #f59e0b;
        }
        
        .highlight {
          background-color: #f59e0b;
          color: black;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: bold;
        }
        
        .highlight:hover {
          background-color: #eab308;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #111827;
            padding: 1rem;
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
    `;
    
    // Add mobile menu toggle functionality
    const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      feather.replace();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.shadowRoot.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);