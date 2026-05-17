---
id: login
title: Prise en main
description: Connectez-vous a votre espace GymApp
---

import NavPath from '@site/src/components/NavPath';
import ActionButton from '@site/src/components/ActionButton';

# Accéder à votre espace GYMAPP

Après avoir enregistré votre salle de sport et créé un super-utilisateur, vous pouvez vous connecter à votre espace GymApp pour profiter pleinement des fonctionnalités de l'application.

---

## Se connecter

**1. Accéder au formulaire de connexion**

Pour commencer, cliquez sur l'un des boutons **SE CONNECTER** disponibles sur la page d'accueil (_voir exemple ci-dessous_).

![Get-started](/images/screenshots/register/hero.png 'Get-started button')

**2. Renseignez vos identifiants de connexion.**  
Saisissez les informations suivantes :

- _Nom d'utilisateur ou adresse email_
- _Mot de passe_

![Login Form](/images/screenshots/login/login.png 'Login Form')

---

## Réinitialiser le mot de passe

Si vous avez oublié votre mot de passe, suivez les étapes ci-dessous pour le réinitialiser.

1. Saisissez votre email de récupération

   Cliquez sur le lien **_Mot de passe oublié ?_**. Vous serez redirigé vers un formulaire où vous devrez entrer l'adresse email associée à votre compte.

![Email Validation](/images/screenshots/login/email-validation.png 'Email Validation')

2. Consultez votre boîte email

   Un email contenant un lien de réinitialisation vous sera envoyé (_voir exemple ci-dessous_).

![Password mail](/images/screenshots/login/pwd-mail.png 'Password mail')

:::warning

Le lien est valide pendant **24 heures** après sa réception.

:::

3. Définissez un nouveau mot de passe

   En cliquant sur le lien de réinitialisation, vous serez redirigé vers une page où vous pourrez définir un nouveau mot de passe (_voir exemple ci-dessous_).

![Reset Form](/images/screenshots/login/reset.png 'Reset Form')

Une fois le nouveau mot de passe enregistré, vous pourrez vous connecter via [l'interface de connexion](#se-connecter).

---

## Se déconnecter

Pour vous déconnecter, cliquez sur <NavPath items={['COMPTE', 'DECONNEXION']} /> disponible dans le menu utilisateur en haut à droite de l'interface.

:::warning
La session expire automatiquement après **10 heures d'inactivité**.
:::

---

## Gérer les appareils connectés

Vous pouvez consulter et gérer tous les appareils actuellement connectés à votre compte.

1. Accédez à la liste des appareils <NavPath items={['COMPTE', 'MES APPAREILS']} />

2. Identifiez votre session actuelle

   L'appareil depuis lequel vous êtes connecté est identifié par le badge **Session actuelle**.

![Devices list](/images/screenshots/login/devices.png 'Devices list')

3. Déconnecter un appareil

Cliquez sur le bouton **Déconnexion** en face de l'appareil à déconnecter.

:::warning
Si vous déconnectez votre **session actuelle**, vous serez automatiquement redirigé vers la page de connexion.
:::
