class CustomWhatsappButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .whatsapp-button {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 999;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }
        
        .whatsapp-button:hover {
          transform: scale(1.1);
          background-color: #128C7E;
        }
        
        .whatsapp-icon {
          color: white;
          width: 30px;
          height: 30px;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @media (max-width: 768px) {
          .whatsapp-button {
            width: 50px;
            height: 50px;
            bottom: 1.5rem;
            right: 1.5rem;
          }
          
          .whatsapp-icon {
            width: 25px;
            height: 25px;
          }
        }
      </style>
      
      <a href="https://wa.me/5514988099022" class="whatsapp-button pulse-animation">
        <img src="whatsapp-logo-png.png" alt="WhatsApp" class="whatsapp-icon">
      </a>
    `;
  }
}

customElements.define('custom-whatsapp-button', CustomWhatsappButton);