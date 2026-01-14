/**
 * MyBadge - Custom Web Component
 * Small status/label indicator
 */

class MyBadge extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  static get observedAttributes() {
    return ['variant', 'pill'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.shadowRoot.querySelector('.badge')) {
      this.render();
    }
  }
  
  render() {
    const variant = this.getAttribute('variant') || 'default';
    const pill = this.hasAttribute('pill');
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        
        .badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .badge.pill {
          border-radius: 50px;
        }
        
        .default {
          background: #e9ecef;
          color: #495057;
        }
        
        .primary {
          background: #667eea;
          color: white;
        }
        
        .success {
          background: #28a745;
          color: white;
        }
        
        .warning {
          background: #ffc107;
          color: #212529;
        }
        
        .danger {
          background: #dc3545;
          color: white;
        }
        
        .info {
          background: #17a2b8;
          color: white;
        }
      </style>
      
      <span class="badge ${variant} ${pill ? 'pill' : ''}">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('my-badge', MyBadge);
export default MyBadge;