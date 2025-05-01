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


## Lancement de l'application Frontend

Pour démarrer l'application en local :

```bash
npm install
ng serve
```

L'application sera accessible à l’adresse : [http://localhost:4200](http://localhost:4200)

---

## 🔐 Authentification et Rôles Utilisateurs

Dans cette application, nous considérons que les utilisateurs sont **déjà inscrits sur la plateforme**. Lors de la connexion, chaque utilisateur doit renseigner :

- son **identifiant (e-mail)**,
- son **mot de passe**,
- et **sélectionner son type de profil** : `Organisateur` ou `Utilisateur`.

Une fois connecté, l’utilisateur est redirigé vers un tableau de bord personnalisé en fonction de son rôle :

### 👤 Utilisateur
Un utilisateur peut :
- consulter la **liste des concerts disponibles**,
- **réserver un billet** pour un concert sélectionné,
- **télécharger un billet** au format PDF après réservation.

### 🎤 Organisateur
Un organisateur possède des fonctionnalités supplémentaires :
- accéder à un espace personnel pour **créer un nouveau concert**,
- **gérer les concerts** qu’il a organisés (modification, suppression, consultation),
- et également **réserver ses propres billets**, tout comme un utilisateur classique.

Cette séparation claire des rôles permet d’offrir une expérience personnalisée et intuitive à chaque type d’utilisateur.


