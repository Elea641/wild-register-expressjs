# Register avec ReactJS & ExpressJS

Ce projet démontre un processus d'inscription d'utilisateur en utilisant React et un backend Express.js avec intégration de base de données MySQL.

## Caractéristiques

- Inscription d'utilisateur : L'application propose un formulaire pour saisir l'e-mail, le mot de passe de l'utilisateur, et un commutateur pour définir le statut administrateur.
- Requêtes HTTP : L'application communique avec un serveur à l'aide de requêtes HTTP POST mises en œuvre via axios.
- Gestion d'état : Le hook useState de React est utilisé pour gérer les états des données de formulaire, des données d'utilisateur et du statut de chargement.
- Indicateur de chargement : Un spinner de chargement est affiché pendant la communication avec le serveur, fournissant un feedback à l'utilisateur sur le statut de chargement.

## Technologies Utilisées

- Frontend: React.js
- Backend: Node.js, Express.js
- Base de données: MySQL
- Gestion d'état : useState de React
- Client HTTP : axios
- Style : composants PrimeReact

## Pour Commencer

### Prérequis

Avant de commencer, assurez-vous d'avoir:

- Node.js installé
- Une instance MySQL en cours d'exécution

### Installation & Utilisation

1. Clonez ce dépôt: `git clone https://github.com/<your-username>/user-registration-app.git`
2. Naviguez jusqu'au dossier du projet: `cd wild-register-expressjs`
3. Installez les dépendances du projet dans le frontend et le backend: `npm install`
4. Créez un fichier `.env` dans le répertoire racine du backend et renseignez les configurations de base de données nécessaires (Se référer au fichier `.env.sample`)
5. Démarrez le serveur backend: `npm run dev`
6. Démarrez le serveur frontend: `npm start`
7. Visitez `http://localhost:3000` dans votre navigateur
