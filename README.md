# Site Vitrine - Charlotte Aubert (Ostéopathe Paris 16)

Bienvenue sur le nouveau site vitrine conçu pour **Charlotte Aubert, Ostéopathe D.O. à Paris 16**.

Ce site a été conçu sur mesure en **HTML5 / CSS3 / JavaScript pur**, sans dépendance, sans framework lourd et sans abonnement CMS.

---

## 🚀 Pourquoi ce site surpasse l'ancien site Wix

1. **Ultra-rapide (< 50 Ko contre > 1 Mo) :** Le code se charge instantanément sur mobile en 4G/5G, offrant un score de performance proche de 100/100 sur Google PageSpeed.
2. **SEO Local optimisé pour Paris 16 :**
   * Données structurées `MedicalBusiness` propres et conformes pour Google Maps et la recherche locale.
   * Suppression définitive des textes microscopiques et du code obsolète (Google+).
   * Adresse normalisée : **12 bis Rue Pergolèse, 75116 Paris**.
3. **Structure multi-pages experte sans cannibalisation :**
   * `index.html` : Vue d'ensemble, réassurance, avis et prise de RDV.
   * `bebe-pediatrie.html` : Plagiocéphalie, coliques, succion, sommeil.
   * `femme-adulte.html` : Grossesse, post-partum, ATM / mâchoire, stress.
   * `deroulement-tarifs.html` : Approche biodynamique/tissulaire, tarifs (80 €) et mutuelle.
   * `cabinet-contact.html` : Accès Porte Maillot, poussettes, Moisson et formulaire.
4. **Ergonomie Mobile & Conversion :**
   * Barre fixe en bas d'écran sur smartphone avec accès direct à **Doctolib** et appel téléphonique immédiat.
   * Menus accordéons pour répondre aux questions des jeunes parents sans les noyer sous du texte.

---

## 📂 Structure des Fichiers

```
site-osteopathe/
├── index.html                  # Page d'accueil principale
├── bebe-pediatrie.html         # Page spécialité bébé, coliques, plagiocéphalie, succion
├── femme-adulte.html           # Page spécialité femme enceinte, post-partum, mâchoire ATM
├── deroulement-tarifs.html      # Méthode, déroulement d'une séance, tarifs & mutuelles
├── cabinet-contact.html        # Accès, métros Porte Maillot/Argentine, horaires, contact
├── css/
│   └── style.css               # Feuille de style unique et modulaire
├── js/
│   └── main.js                 # Menu burger mobile et accordéons FAQ
└── README.md                   # Ce guide
```

---

## 🛠️ Comment visualiser le site

Il suffit de double-cliquer sur le fichier `index.html` pour l'ouvrir directement dans n'importe quel navigateur (Chrome, Safari, Edge, Firefox).

Si vous souhaitez le tester avec un serveur local :
* Avec Python : `python -m http.server 8000` (puis ouvrir `http://localhost:8000`)
* Ou avec l'extension **Live Server** de VS Code.

---

## ✏️ Comment personnaliser facilement les textes et photos

### 1. Remplacer ou ajouter une photo
Placez vos photos dans un dossier `assets/` (par exemple `assets/portrait.jpg` ou `assets/cabinet.jpg`), puis dans le code HTML, remplacez simplement les chemins d'images correspondants.

### 2. Mettre à jour vos coordonnées ou vos liens
Tous les fichiers HTML sont en texte brut clair et commenté :
* **Lien Doctolib :** recherchez `https://www.doctolib.fr/osteopathe/paris/charlotte-aubert` pour le modifier si besoin.
* **Téléphone :** recherchez `06 30 18 89 38` pour le remplacer sur l'ensemble des pages.

---

## 🌐 Comment mettre le site en ligne (Hébergement)

Ce site statique peut être hébergé très facilement et souvent **gratuitement** :
* **Cloudflare Pages / Netlify / Vercel :** Il suffit de glisser-déposer le dossier `site-osteopathe` pour qu'il soit en ligne en 30 secondes avec certificat SSL (HTTPS) gratuit.
* **Hébergeur classique (OVH, O2Switch, Hostinger) :** Déposez les fichiers dans le dossier `www` ou `public_html` via FTP (FileZilla).

### Déploiement automatique sur Cloudflare Pages

Le workflow GitHub Actions `.github/workflows/deploy-cloudflare-pages.yml` publie le site sur Cloudflare Pages à chaque push sur `main`. Il n'y a pas de commande de build : les fichiers HTML, CSS et JavaScript sont publiés directement depuis la racine du dépôt.

Pour l'activer :

1. Créez un projet **Pages** nommé `site-aubert-paris16` dans le tableau de bord Cloudflare (Workers & Pages). Le nom doit correspondre à celui utilisé par le workflow.
2. Créez un jeton API Cloudflare autorisé à déployer sur Cloudflare Pages.
3. Dans GitHub, ouvrez **Settings → Secrets and variables → Actions → New repository secret** et ajoutez :
   * `CLOUDFLARE_API_TOKEN` : le jeton API créé à l'étape précédente.
   * `CLOUDFLARE_ACCOUNT_ID` : l'identifiant du compte Cloudflare, disponible dans le tableau de bord.
4. Envoyez vos changements sur la branche `main`. Le déploiement est également lançable manuellement depuis l'onglet **Actions** du dépôt.

Configurez ensuite votre domaine personnalisé dans les paramètres du projet Pages Cloudflare.
