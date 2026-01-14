# 🌐 Native Web Components

<div align="center">

![Web Components](https://img.shields.io/badge/Web-Components-blueviolet?style=for-the-badge&logo=webcomponents.org)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![No Framework](https://img.shields.io/badge/Framework-None-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**Building reusable UI using native Web Components to explore framework-agnostic frontend development.**

[Live Demo](#-demo) • [Documentation](#-dokumentasi) • [Contributing](#-contributing)

</div>

---

## ✨ Highlights

```
🎯 Framework-Agnostic   → Bisa dipakai di React, Vue, Angular, atau vanilla JS
🔒 Shadow DOM Isolation → Style & DOM terisolasi sempurna
📦 Zero Dependencies    → Tidak ada node_modules, tidak ada build tools
🚀 Native Performance   → Langsung dirender browser, no framework overhead
🎨 Reusable Components  → Sekali buat, pakai di mana saja
🔮 Future-Proof         → Standar web yang stable, code tahan lama
```

---

## 🎯 Apa itu Web Components?

Web Components adalah **standar web platform** untuk membuat custom HTML elements yang reusable dengan encapsulation penuh.

### 🧩 Komponen Utama:

| Feature | Deskripsi |
|---------|-----------|
| **Custom Elements** | Mendefinisikan tag HTML kustom seperti `<my-card>` |
| **Shadow DOM** | Isolasi DOM dan CSS dari dokumen utama |
| **HTML Templates** | Template markup yang bisa digunakan kembali |
| **ES Modules** | Import/export komponen secara modular |

### 🆚 Web Components vs Framework

<table>
<tr>
<th>Aspek</th>
<th>Web Components</th>
<th>React/Vue/Angular</th>
</tr>
<tr>
<td><strong>Portabilitas</strong></td>
<td>✅ Universal, framework-agnostic</td>
<td>❌ Terikat ekosistem framework</td>
</tr>
<tr>
<td><strong>Dependencies</strong></td>
<td>✅ Zero (0 KB overhead)</td>
<td>❌ 40-100+ KB runtime</td>
</tr>
<tr>
<td><strong>Learning Curve</strong></td>
<td>⚠️ Perlu pahami web fundamentals</td>
<td>✅ Abstraksi yang mudah dipelajari</td>
</tr>
<tr>
<td><strong>Reactivity</strong></td>
<td>❌ Manual implementation</td>
<td>✅ Built-in reactive system</td>
</tr>
<tr>
<td><strong>Tooling</strong></td>
<td>⚠️ Minimal, masih berkembang</td>
<td>✅ Rich ecosystem & DevTools</td>
</tr>
<tr>
<td><strong>Use Case</strong></td>
<td>✅ Component libraries, widgets</td>
<td>✅ Full applications</td>
</tr>
</table>

---

## 🚀 Quick Start

### 📥 Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/native-web-components.git
cd native-web-components

# Langsung buka di browser (no build needed!)
open index.html

# Atau gunakan local server (recommended)
npx serve .
# Buka http://localhost:3000
```

### 💡 Usage

```html
<!-- 1. Import komponen -->
<script type="module" src="./components/my-card.js"></script>

<!-- 2. Gunakan seperti HTML biasa -->
<my-card title="Hello World" theme="primary">
  <p>Konten card di sini</p>
  <my-button variant="success">Click Me</my-button>
</my-card>
```

**That's it!** Tidak ada npm install, tidak ada webpack, tidak ada babel. Pure web standards. 🎉

---

## 📦 Components

### 🎴 `<my-card>` - Card Component

Komponen card yang fully customizable dengan berbagai theme.

**Props/Attributes:**
- `title` - Judul card
- `theme` - Theme variant: `light` | `dark` | `primary` | `success`
- `description` - Deskripsi card

**Slots:**
- `content` - Named slot untuk konten utama
- Default slot - Konten tambahan

**Example:**

```html
<my-card title="Product Card" theme="primary" description="Amazing product">
  <p slot="content">This is the main content area</p>
  <my-badge variant="success">New</my-badge>
</my-card>
```

**JavaScript API:**

```javascript
const card = document.querySelector('my-card');
card.setTitle('New Title');
card.setTheme('dark');
```

---

### 🔘 `<my-button>` - Button Component

Button dengan berbagai style dan size.

**Props/Attributes:**
- `variant` - Style: `primary` | `secondary` | `success` | `danger` | `outline`
- `size` - Ukuran: `small` | `medium` | `large`
- `disabled` - Boolean untuk disable button

**Events:**
- `my-click` - Custom event saat button diklik

**Example:**

```html
<my-button variant="primary" size="large">
  Click Me
</my-button>

<script>
  document.querySelector('my-button')
    .addEventListener('my-click', (e) => {
      console.log('Clicked!', e.detail);
    });
</script>
```

---

### 🏷️ `<my-badge>` - Badge Component

Small status indicator untuk labels dan status.

**Props/Attributes:**
- `variant` - Color: `default` | `primary` | `success` | `warning` | `danger` | `info`
- `pill` - Boolean untuk rounded pill style

**Example:**

```html
<my-badge variant="success">Active</my-badge>
<my-badge variant="danger" pill>Critical</my-badge>
```

---

## 🏗️ Project Structure

```
native-web-components/
│
├── 📄 index.html              # Demo & documentation page
├── 📘 README.md               # You are here
│
├── 🧩 components/
│   ├── my-card.js             # Card component
│   ├── my-button.js           # Button component
│   └── my-badge.js            # Badge component
│
├── 🎨 styles/
│   └── global.css             # Optional global styles
│
└── 📸 assets/
    └── screenshots/           # Demo screenshots
```

---

## 🎓 Web Components Lifecycle

Web Components memiliki lifecycle methods yang powerful:

### 1️⃣ **constructor()**

```javascript
constructor() {
  super(); // WAJIB
  this.attachShadow({ mode: 'open' }); // Setup Shadow DOM
}
```

- Dipanggil saat instance dibuat
- Setup Shadow DOM
- **JANGAN** akses attributes atau DOM

### 2️⃣ **connectedCallback()**

```javascript
connectedCallback() {
  this.render();
  this.setupEventListeners();
}
```

- Dipanggil saat element masuk ke DOM
- Tempat ideal untuk rendering
- Bisa dipanggil berkali-kali

### 3️⃣ **attributeChangedCallback()**

```javascript
static get observedAttributes() {
  return ['title', 'theme'];
}

attributeChangedCallback(name, oldValue, newValue) {
  if (oldValue !== newValue) {
    this.render(); // Re-render on change
  }
}
```

- Dipanggil saat observed attribute berubah
- Perfect untuk reactive updates

### 4️⃣ **disconnectedCallback()**

```javascript
disconnectedCallback() {
  this.cleanup(); // Remove listeners, clear timers
}
```

- Dipanggil saat element dihapus dari DOM
- Critical untuk prevent memory leaks

---

## 🎨 Shadow DOM Explained

Shadow DOM menciptakan encapsulation sempurna:

```
┌──────────────────────────────────────┐
│  Light DOM (Regular DOM)             │
│  <my-card title="Hello">             │
│    <p>User content</p>  ────┐        │
│  </my-card>                 │        │
└─────────────────────────────┼────────┘
                              │
            ┌─────────────────▼────────────┐
            │  Shadow DOM (Isolated)       │
            │                              │
            │  <style>                     │
            │    /* Isolated CSS */        │
            │  </style>                    │
            │                              │
            │  <div class="card">          │
            │    <h2>Hello</h2>            │
            │    <slot></slot> ◄───────────┘
            │  </div>                      │
            └──────────────────────────────┘
```

**Keuntungan:**
- ✅ CSS tidak bocor keluar
- ✅ External CSS tidak masuk
- ✅ DOM tree terisolasi
- ✅ Mencegah naming conflicts

---

## 💡 When to Use Web Components?

### ✅ Perfect For:

- 🎨 **Design Systems** - Component library lintas project
- 🏢 **Micro Frontends** - Komponen dari berbagai team/framework
- 🔌 **Embeddable Widgets** - Chat widgets, feedback forms
- 🌐 **Third-party Integrations** - Script yang di-embed di website lain
- 📚 **Long-term Projects** - Avoid framework lock-in

### ❌ Less Ideal For:

- 🏗️ **Full Applications** - Framework punya ecosystem lebih rich
- ⚡ **Rapid Prototyping** - Framework lebih concise & faster
- 🔄 **Complex State Management** - Framework punya built-in solutions
- 👥 **Framework-specific Teams** - Leverage existing expertise

---

## 🚦 Getting Started Guide

### Step 1: Clone & Explore

```bash
git clone https://github.com/YOUR_USERNAME/native-web-components.git
cd native-web-components
```

### Step 2: Run Locally

```bash
# Option A: Simple HTTP server
python -m http.server 8000

# Option B: Node.js server
npx serve .

# Option C: VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

### Step 3: Explore Components

Buka `http://localhost:8000` dan eksplorasi:
- 🎴 Interactive card demos
- 🔘 Button variants
- 🏷️ Badge styles
- 📝 Usage examples

### Step 4: Use in Your Project

```html
<!-- Copy komponen yang dibutuhkan -->
<script type="module" src="./components/my-card.js"></script>

<!-- Langsung pakai! -->
<my-card title="My First Card" theme="primary">
  <p>Hello Web Components!</p>
</my-card>
```

---

## 📚 Advanced Usage

### Dynamic Creation

```javascript
// Create element programmatically
const card = document.createElement('my-card');
card.setAttribute('title', 'Dynamic Card');
card.setAttribute('theme', 'success');

// Add content
const content = document.createElement('p');
content.textContent = 'Created with JavaScript!';
card.appendChild(content);

// Add to DOM
document.body.appendChild(card);
```

### Event Handling

```javascript
// Listen to custom events
document.querySelectorAll('my-button').forEach(btn => {
  btn.addEventListener('my-click', (e) => {
    console.log('Button clicked!', e.detail);
  });
});
```

### Reactive Updates

```javascript
const card = document.querySelector('my-card');

// Update via attribute (triggers attributeChangedCallback)
card.setAttribute('title', 'Updated Title');

// Or use public API
card.setTitle('Another Title');
card.setTheme('dark');
```

---

## 🎯 Learning Outcomes

Setelah mengerjakan project ini, kamu akan paham:

- ✅ **Web Components API** - Custom Elements, Shadow DOM, Slots
- ✅ **Component Lifecycle** - Constructor, callbacks, cleanup
- ✅ **Style Encapsulation** - Shadow DOM isolation
- ✅ **Reusability Patterns** - Framework-agnostic design
- ✅ **Web Standards** - Future-proof development
- ✅ **Progressive Enhancement** - Build on platform capabilities

---

## 🔮 Future Enhancements

Ideas untuk mengembangkan project ini:

- [ ] **More Components** - Modal, Tabs, Form inputs
- [ ] **State Management** - Simple event-driven state
- [ ] **TypeScript Support** - Type definitions untuk better DX
- [ ] **Testing** - Unit tests dengan Web Test Runner
- [ ] **Accessibility** - ARIA attributes, keyboard navigation
- [ ] **Theming System** - CSS custom properties untuk theming
- [ ] **Animation** - Smooth transitions & micro-interactions
- [ ] **Documentation Site** - Interactive component explorer

---

## 🤝 Contributing

Contributions are welcome! Ini adalah learning project, jadi:

1. 🍴 Fork repository
2. 🌿 Create feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open Pull Request

### Contribution Ideas:

- 🐛 Fix bugs atau improve existing components
- ✨ Add new components
- 📝 Improve documentation
- 🎨 Enhance styling & UX
- ♿ Add accessibility features
- ✅ Add tests

---

## 📖 Resources

### Official Documentation:
- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [web.dev Custom Elements](https://web.dev/custom-elements-v1/)
- [WHATWG HTML Standard](https://html.spec.whatwg.org/multipage/custom-elements.html)

### Libraries & Tools:
- [Lit](https://lit.dev/) - Simple library untuk Web Components
- [Open Web Components](https://open-wc.org/) - Guides, tools, dan best practices
- [Stencil](https://stenciljs.com/) - Compiler untuk Web Components

### Community:
- [WebComponents.org](https://www.webcomponents.org/)
- [Web Components Subreddit](https://www.reddit.com/r/webcomponents/)

---

## 📄 License

MIT License - Feel free to use for learning and production.

See [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by the web platform and open standards
- Built as part of frontend learning roadmap
- Thanks to all contributors and the web components community

---

<div align="center">

**🌐 Web tanpa framework masih hidup & kuat!**

Made with ❤️ for the future-proof web

[⬆ Back to Top](#-native-web-components)

</div>