---
id: subscription
title: Gestion des abonnements
description: Gerez les abonnements de vos clients
---

import NavPath from '@site/src/components/NavPath';

# Gestion des abonnements

La gestion des abonnements est une fonctionnalité centrale qui assure un suivi structuré et efficace des clients de votre salle de sport. Elle vous permet d’inscrire des clients, de gérer leurs souscriptions et de suivre leurs paiements de manière claire et intuitive.

---

## **Ajouter un abonnement**

Pour ajouter un abonnement, procédez comme suit :

1. Accédez au formulaire d'ajout d'abonnements via le menu deroulant : <NavPath items={['ABONNEMENTS', 'NOUVEL ABONNEMENT']} />

2. Renseignez les informations suivantes :
   - **Informations du client** :
     - _Nom_
     - _Prénom_
     - _Genre_
     - _Téléphone_
     - _Date de naissance (facultatif)_
     - _Email (facultatif)_
     - _Adresse (facultatif)_
   - **Informations de l'abonnement** :
     - _Date de début_
     - _Nombre de mois_
     - _Forfait_ (cf. [Gestion des forfaits](package.md#gestion-des-forfaits))

   ![adding Form](/images/screenshots/subscription/add_form.png 'adding Form')

---

## **Modifier un abonnement**

1. Accédez à la liste des abonnements via le menu déroulant : <NavPath items={['ABONNEMENTS', "LISTE D'ABONNEMENTS"]} />

2. Cliquez sur le bouton correspondant à l'abonnement pour ouvrir le formulaire de modification.  
   ![edit subscription btn](/images/screenshots/subscription/edit_btn.png 'edit subscription btn')

3. Modifiez les informations souhaitées et cliquez sur **MODIFIER ABONNEMENT**.  
   ![edit subscription form](/images/screenshots/subscription/edit_form.png 'edit subscription form')

:::info

La modification d’un abonnement met à jour automatiquement les statistiques dans les tableaux de bord.

:::

---

## **Reconduire un abonnement**

1. Cliquez sur le bouton correspondant à l’abonnement à reconduire :  
   ![reconduct subscription btn](/images/screenshots/subscription/reconduct_btn.png 'reconduct subscription btn')

:::info
Ce bouton devient disponible une fois l’abonnement arrivé à son terme.

:::

2. Renseignez les informations du nouvel abonnement, puis confirmez la reconduction.  
   ![reconduct subscription form](/images/screenshots/subscription/reconduct_form.png 'reconduct subscription form')

---

## **Supprimer un abonnement**

1. Cliquez sur le bouton correspondant à l'abonnement pour accéder au formulaire de suppression :  
   ![delete subscription btn](/images/screenshots/subscription/delete_btn.png 'delete subscription btn')

2. Confirmez la suppression de l'abonnement une fois le formulaire ouvert
   ![delete subscription form](/images/screenshots/subscription/delete_form.png 'delete subscription form')

:::danger[Attention]

La suppression d’un abonnement est irréversible et met à jour automatiquement les statistiques dans les tableaux de bord.

:::
