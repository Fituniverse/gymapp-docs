---
id: session
title: Gestion des seances
description: Gerez les seances de vos clients
---

import NavPath from '@site/src/components/NavPath';

# Gestion des séances

La gestion des séances est une fonctionnalité centrale qui assure un suivi structuré et efficace des clients de votre salle de sport. Elle vous permet d’inscrire des clients, de gérer leurs séances et de suivre leurs paiements de manière claire et intuitive.

---

## **Ajouter un séance**

Pour ajouter un séance, procédez comme suit :

1. Accédez au formulaire d'ajout de séances via le menu deroulant: <NavPath items={['SEANCES', 'NOUVELLE SEANCE']} />
2. Renseignez les informations suivantes :
   - **Informations du client** :
     - _Nom_
     - _Prénom_
     - _Genre_
     - _Téléphone_
     - _Date de naissance (facultatif)_
     - _Email (facultatif)_
     - _Adresse (facultatif)_
   - **Informations de la séance** :
     - _Forfait_ (cf. [Gestion des forfaits](package.md#gestion-des-forfaits))
     - _La date et l'heure (ajouté automatiquement)_

   ![adding Form](/images/screenshots/session/add_form.png 'adding Form')

:::info

- La date et l’heure correspondent par défaut au moment de l’enregistrement de la séance, mais vous pouvez les modifier si nécessaire.
- La séance reste valable pendant toute la journée.
- **Un client ne peut avoir qu’une seule séance par jour**.

:::

---

## **Modifier une séance**

1. Accédez à la liste des séances via le menu déroulant : <NavPath items={['SEANCES', 'LISTE SEANCES']} />

2. Cliquez sur le bouton correspondant à la séance pour ouvrir le formulaire de modification.  
   ![edit session btn](/images/screenshots/session/edit_btn.png 'edit session btn')

3. Modifiez les informations souhaitées et sauvegardez les modifications  
   ![edit subscription form](/images/screenshots/session/edit_form.png 'edit subscription form')

:::warning

La modication du forfaut de séance met à jour automatiquement les statistiques dans les tableaux de bord.

:::

---

## **Reconduire une séance**

1. Cliquez sur le bouton correspondant à la séance à reconduire pour accéder au formulaire de reconduction :  
   ![reconduct subscription btn](/images/screenshots/session/reconduct_btn.png 'reconduct subscription btn')

:::info[Statuts]

- Les puces grises indiquent les séances expirées.
- Les puces jaunes indiquent qu’un client a souscrit une séance pour la journée en cours.
- Les puces vertes indiquent qu’un client dispose d’un abonnement en cours.

:::

2. Confirmez la reconduction de la séance une fois le formulaire ouvert
   ![reconduct session form](/images/screenshots/session/reconduct_form.png 'reconduct session form')

---

## **Supprimer une séance**

1. Cliquez sur le bouton correspondant à la séance à supprimer pour accéder au formulaire de suppression :  
   ![delete session btn](/images/screenshots/session/delete_btn.png 'delete session btn')

2. Confirmez la suppression une fois le formulaire ouvert :  
   ![delete session form](/images/screenshots/session/delete_form.png 'delete session form')

:::danger[Attention]

La suppression d’une séance est **irréversible** et met à jour automatiquement les statistiques dans les tableaux de bord.

:::

---
