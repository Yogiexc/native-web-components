# Contributing to Native Web Components

Thank you for your interest in contributing! 🎉

This is a learning project focused on exploring Web Components API and framework-agnostic frontend development.

## 🎯 Project Goals

- Build reusable UI components using Web Components
- Maintain zero dependencies (no frameworks)
- Follow web standards and best practices
- Keep code simple and educational
- Make it accessible for learners

## 🤝 How to Contribute

### 1. Fork & Clone

```bash
# Fork this repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/native-web-components.git
cd native-web-components
```

### 2. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 3. Make Your Changes

Follow these guidelines:

#### For New Components:
- Create file in `components/` directory
- Follow existing component structure
- Use Shadow DOM for style encapsulation
- Implement all lifecycle methods
- Add JSDoc comments
- Use semantic HTML
- Ensure accessibility

#### Code Style:
- Use ES6+ JavaScript
- 2 spaces indentation
- Descriptive variable names
- Comment complex logic
- Keep functions small and focused

#### Example Component Structure:

```javascript
/**
 * MyComponent - Brief description
 * Detailed description of what it does
 */
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  static get observedAttributes() {
    return ['prop1', 'prop2'];
  }
  
  connectedCallback() {
    this.render();
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    // Handle changes
  }
  
  disconnectedCallback() {
    // Cleanup
  }
  
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Scoped styles */
      </style>
      <div>
        <!-- Component markup -->
      </div>
    `;
  }
}

customElements.define('my-component', MyComponent);
export default MyComponent;
```

### 4. Test Your Changes

```bash
# Run local server
npx serve .

# Test in multiple browsers:
# - Chrome
# - Firefox
# - Safari
# - Edge
```

**Test checklist:**
- [ ] Component renders correctly
- [ ] Attributes work as expected
- [ ] Slots accept content properly
- [ ] Events are dispatched correctly
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Works in all modern browsers

### 5. Update Documentation

If you add a new component:
- Add usage example to README.md
- Update index.html with demo
- Add JSDoc comments in code
- Document all props/attributes
- Document events if any

### 6. Commit Your Changes

```bash
# Add your changes
git add .

# Commit with descriptive message
git commit -m "Add: new tooltip component with positioning"
# or
git commit -m "Fix: card shadow DOM style isolation"
# or
git commit -m "Docs: improve button component examples"
```

**Commit Message Format:**
- `Add:` for new features
- `Fix:` for bug fixes
- `Docs:` for documentation
- `Style:` for formatting changes
- `Refactor:` for code refactoring
- `Test:` for adding tests

### 7. Push & Create PR

```bash
# Push to your fork
git push origin feature/your-feature-name

# Then create Pull Request on GitHub
```

**PR Description Template:**

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New component
- [ ] Bug fix
- [ ] Documentation
- [ ] Enhancement

## Demo
Screenshot or GIF if applicable

## Checklist
- [ ] Code follows project style
- [ ] Tested in multiple browsers
- [ ] Documentation updated
- [ ] No console errors
- [ ] Accessible (keyboard, screen readers)
```

## 🎨 Component Ideas

Looking for contribution ideas? Here are some components to build:

### Basic Components:
- [ ] `<my-input>` - Input field with validation
- [ ] `<my-checkbox>` - Custom checkbox
- [ ] `<my-radio>` - Radio button group
- [ ] `<my-select>` - Dropdown select
- [ ] `<my-textarea>` - Text area with character count

### Layout Components:
- [ ] `<my-container>` - Responsive container
- [ ] `<my-grid>` - Grid layout
- [ ] `<my-flex>` - Flex layout

### Interactive Components:
- [ ] `<my-modal>` - Modal dialog
- [ ] `<my-tabs>` - Tab navigation
- [ ] `<my-accordion>` - Accordion/collapse
- [ ] `<my-dropdown>` - Dropdown menu
- [ ] `<my-tooltip>` - Tooltip
- [ ] `<my-toast>` - Toast notification

### Data Display:
- [ ] `<my-table>` - Data table
- [ ] `<my-list>` - List with variants
- [ ] `<my-avatar>` - User avatar
- [ ] `<my-progress>` - Progress bar
- [ ] `<my-spinner>` - Loading spinner

## 🐛 Reporting Bugs

Found a bug? Please open an issue with:

1. **Description** - What went wrong?
2. **Steps to Reproduce** - How to trigger the bug?
3. **Expected Behavior** - What should happen?
4. **Actual Behavior** - What actually happens?
5. **Browser/OS** - Where does it occur?
6. **Screenshots** - If applicable

## 💡 Suggesting Features

Have an idea? Open an issue with:

1. **Feature Description** - What do you want?
2. **Use Case** - Why is it useful?
3. **Possible Implementation** - How could it work?
4. **Alternatives** - Other ways to achieve it?

## 📝 Code Review Process

1. Maintainer reviews your PR
2. May request changes or improvements
3. Once approved, PR will be merged
4. Your contribution is live! 🎉

## ❓ Questions?

Feel free to:
- Open an issue for questions
- Discuss in PR comments
- Reach out to maintainers

## 📜 Code of Conduct

- Be respectful and inclusive
- Help others learn
- Give constructive feedback
- Focus on the code, not the person
- Have fun learning! 🚀

---

**Thank you for contributing to Native Web Components!** 

Every contribution, no matter how small, helps make this project better for everyone learning Web Components.

Happy coding! 💻✨