---
id: manager
title: Gestion des administrateurs
description: Gerez les administrateurs de votre salle
---

import NavPath from '@site/src/components/NavPath';
import ActionButton from '@site/src/components/ActionButton';

# Gestion des managers

La gestion des managers est une étape essentielle pour organiser et superviser les activités de votre salle de sport. En tant que super-utilisateur, vous avez la possibilité d'ajouter, de modifier ou de supprimer des comptes au profit de managers.

Cette gestion, à la fois simplifiée et centralisée, vous permet d’attribuer des droits spécifiques à chaque manager en fonction de leurs responsabilités.

---

## Ajouter un manager

Vous pouvez ajouter un ou plusieurs managers pour optimiser la gestion de votre salle. Voici comment procéder :

1. Accédez au formumaire d'ajout de manager via le menu déroulant : <NavPath items={['MANAGERS', 'AJOUTER UN MANAGER']} />

2. Renseignez les données personnelles suivantes :
   - _Nom et prénoms_
   - _Email_
   - _Nom d'utilisateur_
   - _Numéro de téléphone_
   - _Date de naissance (facultatif)_
   - _Statut Administrateur_

   ![add manager form](/images/screenshots/manager/add_form.png 'add manager form')

:::info

- Le nombre de managers actifs dépend des limites de votre forfait. Veuillez en tenir compte lors de l’ajout d’un nouveau manager.
- Le mot de passe par défaut est password. Par mesure de sécurité, il est recommandé de le modifier dès la première connexion. Les étapes sont détaillées dans la section [Réinitialisation de mot de passe](./login#réinitialiser-le-mot-de-passe).
- L’activation des privilèges **Administrateur** donne un accès complet à l’application. Sinon, les permissions et rôles doivent être configurés manuellement.

:::

---

## Attribuer des rôles et des permissions

L'attribution de rôles et permissions permet de personnaliser l'accès aux données et fonctionnalités en fonction des responsabilités de chaque manager.

1. Accédez à la liste des managers via le menu déroulant : <NavPath items={['MANAGERS', 'LISTE DES MANAGERS']} />

2. Cliquez sur <ActionButton type="key" /> pour accéder au formulaire de définition des rôles et permissions :
   ![List manager](/images/screenshots/manager/list.png 'List manager')

3. Choisissez les rôles et permissions requis pour le manager :

![Permission](/images/screenshots/manager/permission.png 'Permission')

---

## Modifier les informations d'un manager

1. Cliquez sur <ActionButton type="edit" /> pour accéder au formulaire de modification :
   ![List manager](/images/screenshots/manager/list.png 'List manager')

2. Modifiez et sauvegardez les informations :
   ![update manager](/images/screenshots/manager/update.png 'update manager')

---

## Désactiver / réactiver un compte manager

1. Cliquez sur <ActionButton type="status" /> pour accéder au formulaire de désactivation / réactivation :
   ![List manager](/images/screenshots/manager/list.png 'List manager')

2. Confirmez la modification de status du compte:
   ![update manager](/images/screenshots/manager/activate.png 'update manager')

:::warning

Le nombre de managers actifs est limité par votre forfait. Veuillez en tenir compte lors de l'activation d'un manager.

:::

---

## Voir son profil

Vous pouvez consulter les informations de votre propre compte à tout moment.

1. Accédez à votre profil :<NavPath items={['COMPTE', 'PROFIL']} />

   Vous y trouverez vos informations personnelles que vous pouvez modifier:
   - _Nom et prénoms_
   - _Email_
   - _Nom d'utilisateur_
   - _Numéro de téléphone_
   - _Date de naissance_

   ![Manager profile](/images/screenshots/manager/profile.png 'Manager profile')

---

## Voir ses permissions

Vous pouvez consulter les rôles et permissions qui vous ont été attribués par le super-utilisateur.

1. Accédez à vos permissions : <NavPath items={['COMPTE', 'MES PERMISSIONS']} />

   Vous y trouverez la liste des permissions actives sur votre compte :

   ![Manager permissions](/images/screenshots/manager/perm.png 'Manager permissions')

:::info

Les permissions sont configurées par l'adminstrateur. Si vous pensez avoir besoin d'accès supplémentaires, contactez votre administrateur.

:::
