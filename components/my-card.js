/**
 * MyCard - Custom Web Component
 * Framework-agnostic reusable card component
 */

class MyCard extends HTMLElement {
  constructor() {
    super();
    
    // Attach Shadow DOM untuk isolasi style
    this.attachShadow({ mode: 'open' });
    
    // Initial state
    this._title = '';
    this._theme = 'light';
  }
  
  /**
   * Lifecycle: Observed Attributes
   * Daftar attribute yang akan dimonitor perubahannya
   */
  static get observedAttributes() {
    return ['title', 'theme', 'description'];
  }
  
  /**
   * Lifecycle: Connected Callback
   * Dipanggil ketika element ditambahkan ke DOM
   */
  connectedCallback() {
    this._title = this.getAttribute('title') || 'Card Title';
    this._theme = this.getAttribute('theme') || 'light';
    
    this.render();
  }
  
  /**
   * Lifecycle: Attribute Changed Callback
   * Dipanggil ketika observed attribute berubah
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch(name) {
        case 'title':
          this._title = newValue;
          break;
        case 'theme':
          this._theme = newValue;
          break;
        case 'description':
          this._description = newValue;
          break;
      }
      
      // Re-render jika sudah connected
      if (this.shadowRoot.querySelector('.card')) {
        this.render();
      }
    }
  }
  
  /**
   * Lifecycle: Disconnected Callback
   * Dipanggil ketika element dihapus dari DOM
   * Berguna untuk cleanup (event listeners, timers, dll)
   */
  disconnectedCallback() {
    // Cleanup jika ada
    console.log('MyCard removed from DOM');
  }
  
  /**
   * Render method
   * Menggenerate HTML & CSS di Shadow DOM
   */
  render() {
    const description = this.getAttribute('description') || '';
    
    this.shadowRoot.innerHTML = `
      <style>
        /* Style terisolasi - tidak bocor keluar/masuk */
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .card {
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          background: var(--card-bg, #ffffff);
          color: var(--card-text, #333333);
        }
        
        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }
        
        /* Theme variants */
        .card.light {
          --card-bg: #ffffff;
          --card-text: #333333;
          --card-border: #e0e0e0;
        }
        
        .card.dark {
          --card-bg: #1a1a1a;
          --card-text: #ffffff;
          --card-border: #333333;
        }
        
        .card.primary {
          --card-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --card-text: #ffffff;
        }
        
        .card.success {
          --card-bg: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
          --card-text: #ffffff;
        }
        
        .card-header {
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--card-border, #e0e0e0);
        }
        
        .card-title {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: var(--card-text);
        }
        
        .card-description {
          margin: 0 0 16px 0;
          color: var(--card-text);
          opacity: 0.8;
          line-height: 1.6;
        }
        
        .card-content {
          color: var(--card-text);
        }
        
        /* Slot styling */
        ::slotted(*) {
          margin: 8px 0;
        }
        
        ::slotted(button) {
          margin-top: 16px;
        }
      </style>
      
      <div class="card ${this._theme}">
        <div class="card-header">
          <h2 class="card-title">${this._title}</h2>
        </div>
        
        ${description ? `<p class="card-description">${description}</p>` : ''}
        
        <div class="card-content">
          <!-- Named slot untuk konten spesifik -->
          <slot name="content"></slot>
          
          <!-- Default slot untuk konten umum -->
          <slot></slot>
        </div>
      </div>
    `;
  }
  
  /**
   * Public API - Method untuk update title dari JavaScript
   */
  setTitle(newTitle) {
    this.setAttribute('title', newTitle);
  }
  
  /**
   * Public API - Method untuk update theme
   */
  setTheme(newTheme) {
    this.setAttribute('theme', newTheme);
  }
}

// Register custom element
customElements.define('my-card', MyCard);

// Export untuk modular usage
export default MyCard;