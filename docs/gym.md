---
id: gym
title: Gestion de la salle
description: Gerez les informations de votre salle de sport
---

import NavPath from '@site/src/components/NavPath';

# Gestion de la salle

Gérez les informations de votre salle de sport depuis votre espace GYMAPP.

---

## Modifier les informations de la salle

Vous pouvez mettre à jour les informations de votre salle de sport à tout moment.

1. Accédez au formulaire de modification via le menu déroulant : <NavPath items={['GYM']} />

2. Modifiez les informations souhaitées et enregistrez :

   ![Gym edit form](/images/screenshots/gym/edit.png 'Gym edit form')

   :::info

   Ces informations apparaîtront sur les reçus destinés aux clients.

   :::

---

## Configurer les paramètres de la salle

Vous pouvez définir les paramètres globaux de votre salle de sport depuis l'interface de configuration.

1. Accédez aux paramètres : <NavPath items={['PARAMETRES']} />

2. Configurez les paramètres selon vos besoins et enregistrez :

   **Paramètres de notification**
   - _Autoriser l'envoi de reçus aux clients par Email_
   - _Autoriser l'envoi de rappels aux clients via Email_
   - _Autoriser l'envoi de rappels aux clients via Whatsapp_

   :::info

   La désactivation d'une notification est globale — elle s'applique à l'ensemble des clients de la salle.

   :::

   **Paramètres régionaux**
   - _Pays_
   - _Fuseau horaire_
   - _Indicatif téléphonique_
   - _Devise_
   - _Plateforme de paiement_
   - _Devise de paiement (GYMAPP)_

   :::info

   Le fuseau horaire, l'indicatif et la devise sont automatiquement renseignés en fonction du pays sélectionné.

   :::

   **Paramètres d'ouverture**
   - _Heure d'ouverture_
   - _Heure de fermeture_

   ![Gym settings](/images/screenshots/gym/setting.png 'Gym settings')

   :::warning

   En dehors des horaires d'ouverture définis, l'ajout de séances ne sera pas autorisé.

   :::
