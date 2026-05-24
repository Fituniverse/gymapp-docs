---
id: presence
title: Gestion des présences
description: Gerez les présences de vos adhérents
---

import NavPath from '@site/src/components/NavPath';

# Gestion des présences

La gestion des présences est un élément essentiel pour assurer le suivi de la participation de vos adhérents aux activités proposées. Vous pouvez enregistrer les présences d'abonnements et de séances, consulter l'historique de chaque adhérent. Cette fonctionnalité vous permet de maintenir un suivi rigoureux des participations tout en offrant une vision claire de l'engagement de vos membres.

## Ajouter une présence

Vous pouvez enregistrer la présence d'un ou plusieurs adhérents pour une séance donnée. Voici comment procéder :

1. Accédez au profil d'un client (cf. [example](customer.md#accéder-aux-détails-dun-client)) et cliquez sur le bouton **PRESENCE** :
   ![presence btn](/images/screenshots/presence/customer.png 'presence btn')

2. Cliquez sur le bouton **MARQUER LA PRESENCE**, remplissez le formulaire puis sauvegardez:
   ![add form](/images/screenshots/presence/add.png 'add form')

   :::tip
   les présences liées aux séances sont ajoutées automatiquement à l'ajout des séances.

   :::

   :::warning

   L'ajout des présences est restreint aux horaires d'ouverture de la salle, Verifiez les paramètres de votre salle via le menu déroulant <NavPath items={['PARAMETRES']} />.

   :::

## Modifier / supprimer une présence

1. Cliquez sur la présence au niveau du calendrier pour ouvrir le formulaire de mofification / suppression :
   ![update form](/images/screenshots/presence/update.png 'update form')

2. Modifiez les informations puis sauvegardez ou supprimez la présence

   :::warning
   - Une présence associée à une séance ne peut pas être supprimée directement. Pour la retirer, vous devez supprimer la séance correspondante.
   - Une présence enregistrée via un scan QR Code ne peut pas être supprimée.

   :::

## Liste de présences

Vous pouvez consulter la liste de présences globale de la salle via le menu déroulant <NavPath items={['PRESENCES']} /> :

![presence list ](/images/screenshots/presence/list.png 'presence list')
