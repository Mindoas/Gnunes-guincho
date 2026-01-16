class CustomTestimonials extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .testimonials-section {
          background-color: #f3f4f6;
          padding: 4rem 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #111827;
        }
        
        .highlight {
          color: #f59e0b;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .testimonial-card {
          background-color: white;
          border-radius: 0.5rem;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .testimonial-text {
          font-style: italic;
          margin-bottom: 1.5rem;
          color: #4b5563;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
        }
        
        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 1rem;
          object-fit: cover;
        }
        
        .author-info h4 {
          font-weight: bold;
          margin-bottom: 0.25rem;
          color: #111827;
        }
        
        .author-info p {
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .rating {
          color: #f59e0b;
          margin-top: 0.25rem;
        }
      </style>
      
      <section class="testimonials-section">
        <div class="container">
          <h2 class="section-title">CLIENTES SATISFEITOS <span class="highlight">24 HORAS</span></h2>
          
          <div class="testimonials-grid">
            <div class="testimonial-card">
              <p class="testimonial-text">"Atendimento rápido e profissional mesmo de madrugada. Resolveram meu problema em minutos!"</p>
              <div class="testimonial-author">
                <img src="http://static.photos/people/200x200/1" alt="Carlos Silva" class="author-avatar">
                <div class="author-info">
                  <h4>Carlos Silva</h4>
                  <p>Avaré, SP</p>
                  <div class="rating">
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="testimonial-card">
              <p class="testimonial-text">"Meu carro quebrou na estrada e em menos de 30 minutos estavam lá. Excelente serviço!"</p>
              <div class="testimonial-author">
                <img src="http://static.photos/people/200x200/2" alt="Ana Oliveira" class="author-avatar">
                <div class="author-info">
                  <h4>Ana Oliveira</h4>
                  <p>Cerqueira César, SP</p>
                  <div class="rating">
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                  </div>
                </div>
              </div>
            
            <div class="testimonial-card">
              <p class="testimonial-text">"Profissionais muito competentes e preço justo. Recomendo para todos em Avaré!"</p>
              <div class="testimonial-author">
                <img src="http://static.photos/people/200x200/3" alt="Roberto Santos" class="author-avatar">
                <div class="author-info">
                  <h4>Roberto Santos</h4>
                  <p>Avaré, SP</p>
                  <div class="rating">
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star" fill="currentColor"></i>
                    <i data-feather="star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('custom-testimonials', CustomTestimonials);