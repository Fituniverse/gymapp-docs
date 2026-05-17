---
id: product
title: Gestion des stocks
description: Gerez les produits de votre salle
---

import NavPath from '@site/src/components/NavPath';
import ActionButton from '@site/src/components/ActionButton';

# Gestion des stocks

La gestion des stocks est une fonctionnalité essentielle pour garantir une organisation optimale des ressources de votre salle de sport. Elle vous permet de suivre, en temps réel, l'état des articles disponibles (équipements, accessoires, produits à vendre, etc.), d’anticiper les besoins en réapprovisionnement et de minimiser les pertes.

Grâce à cette fonctionnalité, vous pouvez enregistrer de nouveaux articles, mettre à jour les quantités et suivre l’historique des mouvements de stock. Cela vous offre une visibilité complète sur les ressources de votre salle de sport et améliore l’efficacité opérationnelle globale.

---

## Ajouter un article

Pour ajouter un article, procédez comme suit :

1. Accédez au formulaire d'ajout d'articles via le menu déroulant : <NavPath items={['STOCK', 'NOUVEL ARTICLE']} />

2. Renseignez les informations suivantes :
   - **Informations requises** :
     - _Nom_
     - _Prix unitaire_
     - _Quantité_
   - **Informations facultatives** :
     - _Catégorie_ (cf. [Gestion des catégories](#gestion-des-catégories-darticles))
     - _Dimensions_
     - _Poids_
     - _Marque_
     - _Couleur_
     - _Description_

   ![Formulaire d'ajout](/images/screenshots/product/add.png 'adding Form')

---

## Voir les détails d'un article

1. Accédez à la liste des articles via le menu déroulant : <NavPath items={['STOCK', "LISTE D'ARTICLES"]} />

2. Cliquez sur <ActionButton type="info" /> pour voir les détails de l'article :  
   ![Bouton détails article](/images/screenshots/product/list.png 'info product btn')

   Une fenêtre contenant les informations relatives à l'article s'ouvrira :  
   ![Fenêtre détails article](/images/screenshots/product/details.png 'info product popup')

---

## Modifier un article

1. Cliquez sur <ActionButton type="edit" /> pour ouvrir le formulaire de modification :  
   ![Bouton modifier article](/images/screenshots/product/list.png 'edit product btn')

2. Modifiez les informations souhaitées et sauvegardez :  
   ![Formulaire de modification](/images/screenshots/product/edit.png 'edit product form')

---

## Mettre à jour les quantités

Pour mettre à jour les quantités de plusieurs articles en même temps :

1. Sélectionnez les lignes des articles concernés à l’aide des cases à cocher.
2. Modifiez les valeurs dans les colonnes **Quantité** des articles sélectionnés.
3. Sauvegardez les modifications en cliquant sur **SAUVEGARDER** :

   ![Modification groupée](/images/screenshots/product/list_bulk.png 'bulk edit')

:::info

Vous pouvez sélectionner toutes les lignes en cochant la case située dans l’en-tête du tableau.

:::

---

## Supprimer un article

1. Cliquez sur <ActionButton type="delete" /> pour ouvrir le formulaire de suppression :  
   ![Bouton supprimer article](/images/screenshots/product/list.png 'delete product btn')

2. Confirmez la suppression de l'article une fois le formulaire ouvert:  
   ![Formulaire de suppression](/images/screenshots/product/delete.png 'delete product form')

:::danger[Attention]

- Si l'article a déja été vendu, Il sera déplacé vers la corbeille pour des raisons de tracabilité. Vous pouvez toujours le [restaurer](trash.md#restaurer-un-article) plus tard.
- Si l'article n'a pas encore été vendu, il sera supprimé **définitivement**.

:::

---

# Gestion des catégories d'articles

La gestion des catégories permet d’organiser vos articles de manière structurée et cohérente. En classant les équipements, accessoires et produits selon des catégories spécifiques, vous facilitez leur recherche et leur suivi au quotidien. Cette fonctionnalité optimise également la gestion des stocks en offrant une meilleure visibilité sur les besoins et les performances de chaque type de produit.

---

## Ajouter une catégorie

Pour ajouter une catégorie, procédez comme suit :

1. Accédez à la liste des catégories via le menu déroulant : <NavPath items={['STOCK', "CATEGORIES"]} />

2. Cliquez sur le bouton **AJOUTER** :  
   ![Bouton ajouter catégorie](/images/screenshots/product/category.png 'category add btn')

3. Renseignez les informations suivantes :
   - _Nom_
   - _Description_ (facultatif)

   ![Formulaire d'ajout de catégorie](/images/screenshots/product/category_add.png 'category add btn')

---

## Modifier une catégorie

1. Cliquez sur <ActionButton type="edit" /> pour ouvrir le formulaire de modification :  
   ![Bouton modifier catégorie](/images/screenshots/product/category.png 'edit product category btn')

2. Modifiez les informations nécessaires et sauvegardez:  
   ![Formulaire de modification de catégorie](/images/screenshots/product/category_edit.png 'edit category form')

---

## Supprimer une catégorie

1. Cliquez sur <ActionButton type="delete" /> pour ouvrir le formulaire de suppression :  
   ![Bouton supprimer catégorie](/images/screenshots/product/category.png 'delete category btn')

2. Confirmez la suppression une fois le formulaire ouvert :  
   ![Formulaire de suppression de catégorie](/images/screenshots/product/category_delete.png 'delete category form')

:::danger[Attention]

La suppression d'une catégorie est **irréversible**.

:::
