/**
 * MyButton - Custom Web Component
 * Reusable button dengan berbagai variant
 */

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  static get observedAttributes() {
    return ['variant', 'size', 'disabled'];
  }
  
  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    const button = this.shadowRoot.querySelector('button');
    
    // Forward click event ke parent
    button.addEventListener('click', (e) => {
      if (!this.hasAttribute('disabled')) {
        this.dispatchEvent(new CustomEvent('my-click', {
          bubbles: true,
          composed: true,
          detail: { timestamp: Date.now() }
        }));
      }
    });
  }
  
  render() {
    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        
        button {
          font-family: inherit;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
          outline: none;
        }
        
        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        button:active:not(:disabled) {
          transform: translateY(0);
        }
        
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Variants */
        .primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .secondary {
          background: #6c757d;
          color: white;
        }
        
        .success {
          background: #28a745;
          color: white;
        }
        
        .danger {
          background: #dc3545;
          color: white;
        }
        
        .outline {
          background: transparent;
          border: 2px solid #667eea;
          color: #667eea;
        }
        
        /* Sizes */
        .small {
          padding: 8px 16px;
          font-size: 14px;
        }
        
        .medium {
          padding: 12px 24px;
          font-size: 16px;
        }
        
        .large {
          padding: 16px 32px;
          font-size: 18px;
        }
      </style>
      
      <button class="${variant} ${size}" ${disabled ? 'disabled' : ''}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);
export default MyButton;