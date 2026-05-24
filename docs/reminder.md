---
id: reminder
title: Système de notifications
description: Suivez les notfications envoyes aux clients
---

import NavPath from '@site/src/components/NavPath';

# Système de notifications

GYMAPP envoie automatiquement des notifications à vos adhérents pour les tenir informés de l'état de leurs prestations. Ces notifications sont envoyées par **Email** et **WhatsApp** selon les paramètres configurés pour votre salle.

---

## Types de notifications

| Type                      | Déclencheur                                                  | Canal            |
| ------------------------- | ------------------------------------------------------------ | ---------------- |
| Reçu de paiement          | Lors de l'ajout d'un abonnement, d'une séance ou d'une vente | Email            |
| Rappel d'expiration       | 3 jours avant la date d'expiration                           | Email & WhatsApp |
| Notification d'expiration | Le lendemain du jour de l'expiration                         | Email & WhatsApp |

---

## Activer / désactiver les notifications

### Désactivation globale

Vous pouvez activer ou désactiver globalement chaque type de notification depuis les paramètres de votre salle.

1. Accédez aux paramètres de notification via le menu deroulant: <NavPath items={['PARAMETRES']} />

2. Activez ou désactivez les options souhaitées :
   - _Autoriser l'envoi de reçus aux clients par Email_
   - _Autoriser l'envoi de rappels aux clients via Email_
   - _Autoriser l'envoi de rappels aux clients via WhatsApp_

:::warning

La désactivation s'applique à l'ensemble des clients de la salle.

:::

### Désactivation par client

Vous pouvez également désactiver les notifications pour un client spécifique sans impacter les autres adhérents.

1. Accédez à la fiche du client concerné (cf. [exemple](customer.md#modifier-les-informations-dun-client))
2. Ouvrez l’onglet Paramètres de notification.
3. Activez ou désactivez les canaux souhaités puis sauvegardez.

:::warning
La désactivation globale est prioritaire à la désactivation par client.
:::

## Historique de notifications

Toutes les notifications (type rappel) envoyées sont enregistrées afin de permettre un suivi complet des échanges avec les clients.
Vous pouvez accéder à la liste des notifications via le menu déroulant: <NavPath items={['ABONNEMENTS', 'HISTORIQUE DE NOTIFICATIONS']} />

![reminder historic](/images/screenshots/reminder/historic.png 'reminder historic')
