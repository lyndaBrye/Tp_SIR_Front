# Application de Réservation de Billets de Concert

Ce projet est une application web permettant de gérer et de réserver des billets pour des concerts. Les utilisateurs peuvent consulter les concerts à venir, réserver des billets et générer des billets au format PDF après l'achat.

## Fonctionnalités

- **Gestion des utilisateurs** : Affichage de la liste des utilisateurs avec leurs informations.
- **Liste des concerts** : Affichage des concerts à venir avec des détails tels que l'artiste, la date, le lieu et le prix.
- **Réservation de billets** : Réserver des billets pour un concert sélectionné.
- **Génération de billets PDF** : Génération et téléchargement d'un billet PDF après une réservation réussie.
- **Design responsive** : Optimisé pour les appareils de bureau et mobiles.

## Technologies utilisées

- **Frontend** : Angular
- **Langages** : TypeScript, HTML, CSS
- **Bibliothèques** :
  - `jsPDF` pour la génération de PDF
  - `html2canvas` pour le rendu HTML en canvas
- **Style** : Tailwind CSS
- **Gestionnaire de paquets** : npm

## Structure du projet

- `src/app/components/` : Contient les composants Angular de l'application.
  - `user-list/` : Affiche la liste des utilisateurs (`user-list.component.html`).
  - `concert-list/` : Affiche la liste des concerts (`concert-list.component.html`).
  - `ticket-modal/` : Gère la réservation de billets et la génération de PDF (`ticket-modal.component.html` et `ticket-modal.component.ts`).
- `src/app/services/` : Contient les services pour la gestion des utilisateurs et des concerts.
- `src/app/models/` : Contient les modèles de données pour l'application.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/lyndaBrye/Tp_SIR_Front
