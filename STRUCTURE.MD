```
native-web-components/
│
├── index.html              # Demo page
├── README.md               # Dokumentasi project
│
├── components/
│   ├── my-card.js         # Custom card component
│   ├── my-button.js       # Custom button component (bonus)
│   └── my-badge.js        # Custom badge component (bonus)
│
├── styles/
│   └── global.css         # Optional global styles
│
└── assets/
    └── demo-image.jpg     # Demo assets (optional)
```

**Penjelasan Struktur:**

- `index.html` - Entry point untuk demo semua komponen
- `components/` - Folder untuk semua Web Components
- `styles/` - Global styles yang tidak terisolasi (optional)
- `assets/` - Media files untuk demo

**Prinsip Organisasi:**
- Setiap komponen adalah file terpisah
- Komponen bersifat self-contained
- Mudah di-import ke project lain