// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    { type: 'doc', id: 'register', label: 'Inscription' },
    { type: 'doc', id: 'login', label: 'Connexion' },
    { type: 'doc', id: 'manager', label: 'Gestion des managers' },
    { type: 'doc', id: 'customer', label: 'Gestion des clients' },
    { type: 'doc', id: 'subscription', label: 'Gestion des abonnements' },
    { type: 'doc', id: 'session', label: 'Gestion des séances' },
    { type: 'doc', id: 'package', label: 'Gestion des forfaits' },
    { type: 'doc', id: 'product', label: 'Gestion des stocks' },
    { type: 'doc', id: 'sale', label: 'Gestion des ventes' },
    { type: 'doc', id: 'payment', label: 'Gestion des paiements' },
    { type: 'doc', id: 'invoice', label: 'Gestion des factures' },
    { type: 'doc', id: 'event', label: 'Gestion des événements' },
    { type: 'doc', id: 'trash', label: 'Corbeille' },
    { type: 'doc', id: 'gym', label: 'Gym' },
  ],
};

export default sidebars;
