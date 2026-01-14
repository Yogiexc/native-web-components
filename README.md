# 🚀 Native Web Components

**Building reusable UI using native Web Components to explore framework-agnostic frontend development.**

## 📖 Overview

Project ini adalah eksplorasi mendalam tentang **Web Components API** - standar web platform untuk membuat komponen UI yang reusable, framework-agnostic, dan future-proof.

### Mengapa Web Components?

- ✅ **Framework-Agnostic**: Bisa dipakai di vanilla JS, React, Vue, Angular, atau framework apa pun
- ✅ **Zero Dependencies**: Tidak butuh library atau framework
- ✅ **Native Browser Support**: Built-in di semua browser modern
- ✅ **Encapsulation**: Shadow DOM mengisolasi style dan DOM
- ✅ **Future-Proof**: Standar web, bukan abstraksi framework
- ✅ **Small Bundle**: Tidak ada framework overhead

---

## 🏗️ Struktur Project

```
native-web-components/
├── index.html              # Demo page
├── README.md              # Dokumentasi ini
└── components/
    ├── my-card.js         # Custom card component
    ├── my-button.js       # Custom button component
    └── my-badge.js        # Custom badge component
```

---

## 🎯 Komponen yang Dibuat

### 1. `<my-card>` - Card Component

Komponen card yang customizable dengan berbagai theme dan slot untuk konten fleksibel.

**Attributes:**
- `title` - Judul card
- `theme` - Theme card (light, dark, primary, success)
- `description` - Deskripsi card

**Slots:**
- `content` - Named slot untuk konten utama
- Default slot - Untuk konten tambahan

**Contoh Penggunaan:**

```html
<my-card title="Hello World" theme="primary" description="My first card">
  <p slot="content">Konten utama card</p>
  <button>Action Button</button>
</my-card>
```

**JavaScript API:**

```javascript
const card = document.querySelector('my-card');
card.setTitle('New Title');
card.setTheme('dark');
```

---

### 2. `<my-button>` - Button Component

Button dengan berbagai variant dan size.

**Attributes:**
- `variant` - Style variant (primary, secondary, success, danger, outline)
- `size` - Ukuran button (small, medium, large)
- `disabled` - Disable button

**Events:**
- `my-click` - Custom event yang di-dispatch saat button diklik

**Contoh Penggunaan:**

```html
<my-button variant="primary" size="large">Click Me</my-button>

<script>
  document.querySelector('my-button').addEventListener('my-click', (e) => {
    console.log('Button clicked!', e.detail);
  });
</script>
```

---

### 3. `<my-badge>` - Badge Component

Small indicator untuk status atau label.

**Attributes:**
- `variant` - Color variant (default, primary, success, warning, danger, info)
- `pill` - Rounded pill style (boolean)

**Contoh Penggunaan:**

```html
<my-badge variant="success">Active</my-badge>
<my-badge variant="danger" pill>Critical</my-badge>
```

---

## 🔧 Cara Menggunakan

### 1. Clone atau Download Project

```bash
git clone <your-repo-url>
cd native-web-components
```

### 2. Buka di Browser

**Tidak butuh build tools!** Langsung buka `index.html` di browser:

```bash
# Option 1: Double click index.html

# Option 2: Gunakan local server (recommended)
npx serve .
# atau
python -m http.server 8000
```

### 3. Import Komponen di Project Lain

```html
<!-- Import komponen -->
<script type="module" src="./components/my-card.js"></script>

<!-- Gunakan komponen -->
<my-card title="My Card" theme="primary">
  <p>Card content here</p>
</my-card>
```

---

## 📚 Lifecycle Web Components

Web Components memiliki beberapa lifecycle methods penting:

### 1. **constructor()**
- Dipanggil saat instance dibuat
- Setup Shadow DOM di sini
- Jangan manipulasi attribute/children

```javascript
constructor() {
  super();
  this.attachShadow({ mode: 'open' });
}
```

### 2. **connectedCallback()**
- Dipanggil saat element ditambahkan ke DOM
- Tempat ideal untuk rendering dan setup
- Bisa dipanggil berkali-kali (misal: move element)

```javascript
connectedCallback() {
  this.render();
  this.setupEventListeners();
}
```

### 3. **disconnectedCallback()**
- Dipanggil saat element dihapus dari DOM
- Cleanup: remove event listeners, timers, dll

```javascript
disconnectedCallback() {
  this.cleanup();
}
```

### 4. **attributeChangedCallback()**
- Dipanggil saat observed attribute berubah
- Hanya untuk attribute yang ada di `observedAttributes`

```javascript
static get observedAttributes() {
  return ['title', 'theme'];
}

attributeChangedCallback(name, oldValue, newValue) {
  if (oldValue !== newValue) {
    this.render();
  }
}
```

### 5. **adoptedCallback()**
- Dipanggil saat element dipindah ke document baru
- Jarang digunakan

---

## 🎨 Shadow DOM - Encapsulation

Shadow DOM adalah fitur kunci Web Components yang menyediakan:

### Keuntungan Shadow DOM:

1. **Style Isolation**
   - Style dalam Shadow DOM tidak bocor keluar
   - Style luar tidak masuk ke Shadow DOM
   - Mencegah CSS conflicts

2. **DOM Encapsulation**
   - DOM tree terisolasi
   - querySelector dari luar tidak bisa akses Shadow DOM
   - Proteksi dari manipulasi external

3. **Composition via Slots**
   - `<slot>` memungkinkan inject konten dari light DOM
   - Named slots untuk konten spesifik
   - Fleksibel seperti children di React

### Contoh Shadow DOM:

```javascript
class MyComponent extends HTMLElement {
  constructor() {
    super();
    // Attach Shadow DOM
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Style ini HANYA berlaku di komponen ini */
        p { color: blue; }
      </style>
      <p>Shadow DOM content</p>
      <slot></slot> <!-- Light DOM content masuk di sini -->
    `;
  }
}
```

---

## 💡 Kapan Menggunakan Web Components?

### ✅ Cocok Untuk:

1. **Design System / Component Library**
   - Digunakan lintas project dengan framework berbeda
   - Perlu portabilitas maksimal

2. **Micro Frontends**
   - Integrasi komponen dari team berbeda
   - Framework-agnostic architecture

3. **Simple Interactive Widgets**
   - Embeddable components (chat widget, feedback form)
   - Third-party integrations

4. **Progressive Enhancement**
   - Enhance HTML dengan custom elements
   - Graceful degradation

### ❌ Kurang Cocok Untuk:

1. **Complex State Management**
   - Tidak ada built-in reactivity
   - State management manual

2. **Large Applications**
   - Tidak ada routing, data flow patterns
   - Framework menyediakan ekosistem lengkap

3. **Rapid Development**
   - Lebih verbose dari framework modern
   - Tooling belum se-mature framework

4. **Team dengan Framework Expertise**
   - Jika team sudah expert di React/Vue, manfaatkan itu
   - Web Components lebih cocok untuk boundary antar sistem

---

## 🆚 Web Components vs Framework

| Aspek | Web Components | React/Vue/Angular |
|-------|----------------|-------------------|
| **Learning Curve** | Moderate (perlu pahami web fundamentals) | Varies (React: moderate, Vue: easy) |
| **Reactivity** | Manual (perlu implement sendiri) | Built-in (hooks, reactive data) |
| **Tooling** | Minimal, native browser | Rich ecosystem (DevTools, extensions) |
| **Bundle Size** | 0 KB (native) | 40-100+ KB (framework runtime) |
| **Portability** | ✅ Universal (bisa dipakai di mana saja) | ❌ Terikat ekosistem framework |
| **State Management** | Manual | Redux, Vuex, NgRx, dll |
| **Developer Experience** | Basic | Excellent (hot reload, TypeScript, dll) |
| **Performance** | Excellent (no overhead) | Good (virtual DOM overhead) |
| **Community** | Growing | Massive |
| **Job Market** | Niche | High demand |

---

## 🎓 Insight Setelah Membuat Web Components

### Hal yang Dipelajari:

1. **Web Platform is Powerful**
   - Browser sudah punya banyak API powerful
   - Tidak selalu butuh framework untuk UI reusable

2. **Encapsulation is King**
   - Shadow DOM benar-benar mengisolasi style
   - Mencegah CSS hell di large codebase

3. **Standards are Future-Proof**
   - Code ini akan jalan 10 tahun lagi tanpa breaking changes
   - Framework bisa berubah, web standards lebih stabil

4. **Trade-offs Jelas**
   - Lebih verbose, tapi lebih explicit
   - Tidak ada "magic", semua terlihat

### Kapan Gunakan Web Components vs Framework:

**Pilih Web Components jika:**
- Butuh portabilitas lintas framework
- Build component library universal
- Simple widgets / embeddable components
- Long-term maintenance tanpa framework lock-in

**Pilih Framework jika:**
- Build full application
- Butuh rich ecosystem (routing, state, dll)
- Team sudah expert di framework tertentu
- Rapid development prioritas

### Best of Both Worlds:

Framework modern bisa menggunakan Web Components:
- React: bisa render Web Components
- Vue: first-class Web Components support
- Angular: Angular Elements (convert to Web Components)

---

## 🚀 Next Steps

Untuk meningkatkan project ini:

1. **Add More Components**
   - Modal dialog
   - Tabs component
   - Form inputs (input, select, checkbox)

2. **State Management**
   - Implement simple state management pattern
   - Event-driven communication antar komponen

3. **TypeScript Support**
   - Add type definitions
   - Better developer experience

4. **Testing**
   - Unit tests dengan Web Test Runner
   - E2E tests dengan Playwright

5. **Build Tools (Optional)**
   - Bundler untuk production
   - Minification & optimization

6. **Accessibility**
   - ARIA attributes
   - Keyboard navigation
   - Screen reader support

---

## 📖 Resources

- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [web.dev - Building Components](https://web.dev/custom-elements-v1/)
- [Open Web Components](https://open-wc.org/)
- [Lit - Simple library untuk Web Components](https://lit.dev/)

---

## 📝 License

MIT License - Bebas digunakan untuk belajar dan produksi.

---

## 🙏 Contributing

Feel free to contribute! Web Components adalah masa depan web yang framework-agnostic.

**Web tanpa framework masih hidup & kuat! 🌐**