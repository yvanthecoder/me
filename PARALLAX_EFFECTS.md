# Effets Parallax et Animations Ajoutés

## Bibliothèque Utilisée
- **framer-motion** : Bibliothèque moderne et performante pour les animations React

## Effets Implémentés

### 1. Section Hero (Page d'Accueil)
- **Entrée animée** : Logo avec rotation et scale animation
- **Texte en cascade** : Titre, sous-titre et description apparaissent séquentiellement
- **Background parallax** : Bulles de couleur qui se déplacent au scroll
- **Hover effects** :
  - Logo qui tourne à 360° au survol
  - Tags technologiques qui grossissent et montent
  - Bouton CTA avec scale et lift effect
- **Scroll indicator** : Flèche animée en bounce continu

### 2. Sections avec AnimatedSection Component
- **Fade-in + Slide-up** : Toutes les sections apparaissent en fondu avec un glissement vers le haut
- **Barres de titre animées** : Les barres sous les titres s'animent de 0 à leur largeur finale
- **Réactivation au scroll** : Les animations se rejouent quand on scroll (once: false)

### 3. Cartes Flottantes (FloatingCard Component)
Appliqué à toutes les cartes :
- **Experience cards** (Dassault, LaMater, Saint Jean)
- **AI Projects** (Skin Cancer, NLP Chatbot)
- **Mobile & Web Projects** (Sport Connect, LePhénix, Note-Moi, ARWM)
- **Academic Projects** (Deep Learning, Travel App, DjopFlix, Tetris)

Effets des cartes :
- **Apparition progressive** : Fade-in avec slide-up et délais échelonnés
- **Hover lift** : Monte de -10px au survol
- **Shadow enhancement** : Ombre amplifiée au hover
- **Smooth transitions** : Toutes les transitions sont fluides (0.3-0.8s)

### 4. Section Contact
- **Boutons animés** : Tous les liens sociaux ont :
  - Scale effect au hover (1.05x)
  - Lift effect (-5px)
  - Tap effect (scale 0.95x)

### 5. Effets Globaux
- **Smooth scroll progress** : Barre de progression avec spring physics
- **Viewport triggers** : Animations déclenchées quand 30% de l'élément est visible
- **Spring animations** : Physics-based pour des mouvements naturels
- **Stagger animations** : Délais progressifs pour créer des cascades visuelles

## Performance
- Utilisation de `useSpring` pour des animations optimisées
- `useInView` pour ne déclencher les animations que quand visible
- GPU acceleration automatique avec framer-motion
- Pas de re-renders inutiles

## Expérience Utilisateur
- Portfolio **hautement réactif** et **engageant**
- Feedback visuel immédiat sur chaque interaction
- Animations fluides qui guident l'œil
- Effet "wow" garanti à chaque scroll

## Comment Personnaliser
- Modifier les `delay` dans FloatingCard pour changer les temps d'apparition
- Ajuster les valeurs dans `whileHover` pour plus/moins d'effet
- Changer `amount: 0.3` dans useInView pour déclencher plus tôt/tard
- Modifier `duration` pour des animations plus rapides/lentes
