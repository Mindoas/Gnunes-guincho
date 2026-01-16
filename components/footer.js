class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #111827;
          color: white;
          padding: 3rem 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #f59e0b;
          margin-bottom: 1rem;
          display: block;
        }
        
        .footer-about p {
          color: #9ca3af;
          margin-bottom: 1rem;
        }
        
        .footer-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: #f59e0b;
        }
        
        .contact-info {
          color: #9ca3af;
        }
        
        .contact-info p {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        
        .contact-info i {
          margin-right: 0.5rem;
          color: #f59e0b;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          color: white;
          background-color: #374151;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        
        .social-links a:hover {
          background-color: #f59e0b;
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }
        
        .highlight {
          color: #f59e0b;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-about">
              <span class="footer-logo">GUINCHO AVARÉ <span class="text-white">24H</span></span>
              <p>Serviço de guincho e reboque disponível 24 horas por dia em Avaré e região. Atendimento rápido e profissional para todas as emergências.</p>
            </div>
            
            <div class="footer-contact">
              <h3 class="footer-title">Contato <span class="highlight">24 Horas</span></h3>
              <div class="contact-info">
                <p><i data-feather="phone"></i> (14) 98809-9022</p>
                <p><i data-feather="map-pin"></i> Avaré, SP e Região</p>
              </div>
              <a href="https://wa.me/5514988099022" class="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-full text-sm transition duration-300 inline-flex items-center mt-4">
                <i data-feather="message-circle" class="mr-2"></i> WhatsApp
              </a>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Auto Socorro Guincho Gnunes - Avaré 24 horas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);