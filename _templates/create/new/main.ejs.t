---
to: src/components/main.js
inject: true
after:
skip_if:
---

export { default as Lui<%= h.capitalize(name) %> } from '../components/lui<%= h.capitalize(name) %>/lui-<%= name %>.vue'