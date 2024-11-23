# Infinite Image Scroll - Défilement Infini d'Images

## 📱 Présentation
Une application web moderne de type réseau social permettant un défilement infini d'images, construite avec React, TypeScript et Tailwind CSS. L'application simule l'expérience d'un réseau social avec un chargement dynamique des images lors du défilement.

## ✨ Fonctionnalités

- **Défilement Infini**: Chargement automatique de nouvelles images lorsque l'utilisateur atteint le bas de la page
- **Interface Social Media**:
  - Affichage des images avec avatar et nom d'utilisateur
  - Compteurs de likes et commentaires
  - Boutons d'interaction (like, commentaire, partage)
- **Design Moderne**:
  - Animations fluides
  - Interface responsive
  - Thème clair et élégant
- **Performance**:
  - Chargement optimisé des images
  - Lazy loading intégré
  - Composants React optimisés

## 🛠️ Technologies Utilisées

- **React 18**: Bibliothèque UI moderne
- **TypeScript**: Typage statique pour un code plus robuste
- **Tailwind CSS**: Framework CSS utilitaire
- **React Intersection Observer**: Détection du défilement
- **Lucide React**: Icônes vectorielles modernes

## 🚀 Installation

1. Clonez le repository
```bash
git clone [url-du-repo]
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez le serveur de développement
```bash
npm run dev
```

## 📁 Structure du Projet

```
src/
├── components/         # Composants réutilisables
│   └── ImageCard.tsx  # Carte d'image avec interactions
├── hooks/             # Hooks personnalisés
│   └── useInfiniteScroll.ts  # Logique de défilement infini
├── App.tsx           # Composant principal
└── index.css         # Styles globaux
```

## 💡 Utilisation des Composants

### ImageCard
Composant principal pour l'affichage d'une image avec ses interactions :
```tsx
<ImageCard
  imageUrl="url-de-limage"
  likes={42}
  comments={10}
  username="utilisateur"
/>
```

### Hook useInfiniteScroll
Hook personnalisé gérant la logique de défilement infini :
```tsx
const { posts, loading, loadingRef } = useInfiniteScroll();
```

## 🔧 Configuration

Le projet utilise Vite comme outil de build et est configuré avec :
- TypeScript pour le typage statique
- ESLint pour le linting
- Tailwind CSS pour le styling
- Post CSS pour le processing CSS

## 📝 Personnalisation

### Images
Modifiez la liste des images dans `useInfiniteScroll.ts` :
```typescript
const IMAGES = [
  'url-image-1',
  'url-image-2',
  // ...
];
```

### Thème
Personnalisez les styles Tailwind dans `tailwind.config.js` :
```javascript
module.exports = {
  theme: {
    extend: {
      // Vos personnalisations
    }
  }
};
```

## 📈 Performances

- Utilisation du lazy loading pour les images
- Optimisation du rendu avec React
- Animations CSS optimisées
- Chargement progressif du contenu

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.