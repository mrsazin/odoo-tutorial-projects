# Awesome OWL

This module demonstrates how to use the **Odoo Web Library (OWL)** framework — Odoo’s modern JavaScript frontend engine — introduced in Odoo 14 and used extensively in Odoo 18’s web client.

It was developed as part of the [Odoo 18 Developer Tutorial: Discover OWL Components](https://www.odoo.com/documentation/18.0/developer/tutorials/discover_js_framework/01_owl_components.html).

---

## 🧠 Purpose

The goal of this module is to illustrate:
- How to create an **OWL component** with its own state and template.
- How to register it as an Odoo client action.
- How OWL’s reactivity, rendering, and event system work in practice.

This serves as the foundation for building interactive and reactive frontend features in Odoo.

---

## ⚙️ Key Features

- A simple **Click Counter** component written in OWL.
- Demonstrates:
  - `Component` class usage (`setup()` method and `state` object)
  - Template rendering with t- directives (`t-esc`, `t-on-click`, etc.)
  - Reactivity and automatic UI updates
- Registered as a **client action** accessible from the Odoo interface.



