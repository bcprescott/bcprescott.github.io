---
title: E-Commerce Re-Platform
category: Web Dev
heroImage: https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80
description: A complete architectural overhaul of a legacy retail system, migrating to a modern MACH stack to boost performance and scalability.
demoLink: "#"
repoLink: "#"
techStack:
  - React
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Node.js
  - PostgreSQL
projectType: Freelance Client Work
timeline: 3 Months (Aug - Oct 2024)
---

## Overview

This project involved a full-stack rebuild of a client's online store. The primary goal was to create a faster, more intuitive, and mobile-friendly shopping experience. We migrated from a monolithic architecture to a modern MACH (Microservices, API-first, Cloud-native, Headless) architecture, which provided greater flexibility and scalability for future growth.

## Key Features

- **Server-Side Rendering**: Integrated feature for optimal performance.
- **Secure Payments**: Robust processing via Stripe.
- **Admin Dashboard**: Custom CMS for inventory management.
- **Responsive Design**: Mobile-first approach.

## Technical Highlight

I implemented a custom hook for state management to handle complex cart logic without external heavy libraries.

```javascript
const useCartState = () => {
  // Initialize local state
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems(prev => [...prev, product]);
  };

  return { items, addItem };
};
```
