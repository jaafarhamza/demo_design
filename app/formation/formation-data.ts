export type FormationCategoryId = "fondamentaux" | "financement" | "pilotage";

export type LearningPath = {
  slug: string;
  title: string;
  image: string;
  level: "Debutant" | "Intermediaire" | "Avance";
  duration: string;
  format: string;
  learners: string;
  description: string;
  category: FormationCategoryId;
  progress: number;
  rating: string;
  outcomes: string[];
  milestones: string[];
};

export type FormationModule = {
  slug: string;
  title: string;
  image: string;
  duration: string;
  type: string;
  progress: number;
  category: FormationCategoryId;
};

export type CatalogueCategory = {
  id: FormationCategoryId;
  title: string;
  description: string;
  panelClass: string;
  tagClass: string;
  progressClass: string;
  defaultPathSlug: string;
};

export type FormationExpert = {
  name: string;
  role: string;
  region: string;
  rating: string;
  image: string;
  specialties: FormationCategoryId[];
  recommendation: string;
};

export type FeedbackComment = {
  id: string;
  pathSlug: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
};

export type ModuleStep = {
  id: number;
  title: string;
  objective: string;
  lessonDuration: string;
  quizTitle: string;
  quizQuestions: number;
  quizPassingScore: number;
};

export type ModuleCoursePlan = {
  overview: string;
  totalDuration: string;
  level: "Debutant" | "Intermediaire" | "Avance";
  instructor: string;
  steps: ModuleStep[];
  finalExam: {
    title: string;
    questions: number;
    duration: string;
    passingScore: number;
  };
};

export type ModuleFeedbackComment = {
  id: string;
  moduleSlug: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
};

export const learningPaths: LearningPath[] = [
  {
    slug: "lancement-projet-indh",
    title: "Parcours Lancement Projet INDH",
    image:
      "https://images.pexels.com/photos/8134161/pexels-photo-8134161.jpeg?auto=compress&cs=tinysrgb&w=1400",
    level: "Debutant",
    duration: "6 semaines",
    format: "Video + atelier",
    learners: "2 450 apprenants",
    description:
      "Un parcours complet pour transformer une idee en plan executable avec un accompagnement progressif.",
    category: "fondamentaux",
    progress: 72,
    rating: "4.8",
    outcomes: [
      "Structurer votre idee en projet viable",
      "Construire un business model coherent",
      "Preparer un plan d'action 90 jours",
    ],
    milestones: ["Diagnostic", "Business model", "Plan financier", "Execution terrain"],
  },
  {
    slug: "financement-dossier-indh",
    title: "Parcours Financement & Dossier",
    image:
      "https://images.pexels.com/photos/8284732/pexels-photo-8284732.jpeg?auto=compress&cs=tinysrgb&w=1400",
    level: "Intermediaire",
    duration: "4 semaines",
    format: "Cas pratiques",
    learners: "1 960 apprenants",
    description:
      "Structurez un dossier solide, maitrisez les criteres et augmentez vos chances de validation.",
    category: "financement",
    progress: 65,
    rating: "4.7",
    outcomes: [
      "Constituer un dossier complet et convaincant",
      "Defendre son projet a l'oral",
      "Anticiper les objections courantes",
    ],
    milestones: ["Eligibilite", "Pieces justificatives", "Simulation", "Pitch final"],
  },
  {
    slug: "pilotage-terrain-indh",
    title: "Parcours Pilotage Terrain",
    image:
      "https://images.pexels.com/photos/15141500/pexels-photo-15141500.jpeg?auto=compress&cs=tinysrgb&w=1400",
    level: "Avance",
    duration: "8 semaines",
    format: "Masterclass",
    learners: "1 180 apprenants",
    description:
      "Pilotez vos indicateurs, animez votre equipe et gardez le cap sur vos objectifs provinciaux.",
    category: "pilotage",
    progress: 58,
    rating: "4.9",
    outcomes: [
      "Mettre en place un tableau de bord actionnable",
      "Suivre les KPI de performance et d'impact",
      "Conduire des revues de pilotage efficaces",
    ],
    milestones: ["KPI", "Rituels hebdo", "Ajustements", "Scale-up"],
  },
  {
    slug: "marketing-local-indh",
    title: "Parcours Marketing Local",
    image:
      "https://images.pexels.com/photos/7693683/pexels-photo-7693683.jpeg?auto=compress&cs=tinysrgb&w=1400",
    level: "Debutant",
    duration: "5 semaines",
    format: "Projet guide",
    learners: "1 430 apprenants",
    description:
      "Mettez en place une strategie locale claire pour capter, convertir et fideliser vos clients.",
    category: "fondamentaux",
    progress: 69,
    rating: "4.6",
    outcomes: [
      "Identifier vos clients prioritaires",
      "Construire un plan de communication local",
      "Lancer des actions commerciales simples",
    ],
    milestones: ["Positionnement", "Canaux", "Campagnes", "Optimisation"],
  },
];

export const modules: FormationModule[] = [
  {
    slug: "business-plan-fondamentaux",
    title: "Construire son business plan",
    image:
      "https://images.pexels.com/photos/7433900/pexels-photo-7433900.jpeg?auto=compress&cs=tinysrgb&w=900",
    duration: "2h 30",
    type: "Video",
    progress: 82,
    category: "fondamentaux",
  },
  {
    slug: "modeliser-couts-marge",
    title: "Modeliser les couts et la marge",
    image:
      "https://images.pexels.com/photos/7693733/pexels-photo-7693733.jpeg?auto=compress&cs=tinysrgb&w=900",
    duration: "1h 45",
    type: "Atelier",
    progress: 64,
    category: "fondamentaux",
  },
  {
    slug: "preparation-dossier-indh",
    title: "Preparation du dossier INDH",
    image:
      "https://images.pexels.com/photos/3867849/pexels-photo-3867849.jpeg?auto=compress&cs=tinysrgb&w=900",
    duration: "2h 10",
    type: "Guide",
    progress: 75,
    category: "financement",
  },
  {
    slug: "negociation-presentation-orale",
    title: "Negociation et presentation orale",
    image:
      "https://images.pexels.com/photos/7652054/pexels-photo-7652054.jpeg?auto=compress&cs=tinysrgb&w=900",
    duration: "1h 20",
    type: "Live",
    progress: 58,
    category: "financement",
  },
  {
    slug: "suivi-kpi-tableau-bord",
    title: "Suivi KPI et tableau de bord",
    image:
      "https://images.pexels.com/photos/5265333/pexels-photo-5265333.jpeg?auto=compress&cs=tinysrgb&w=900",
    duration: "2h 55",
    type: "Masterclass",
    progress: 71,
    category: "pilotage",
  },
  {
    slug: "plan-action-90-jours",
    title: "Plan d'action 90 jours",
    image:
      "https://images.pexels.com/photos/9242832/pexels-photo-9242832.jpeg?auto=compress&cs=tinysrgb&w=900",
    duration: "1h 35",
    type: "Template",
    progress: 89,
    category: "pilotage",
  },
];

export const catalogueCategories: CatalogueCategory[] = [
  {
    id: "fondamentaux",
    title: "01 · Fondamentaux Projet",
    description: "Poser des bases solides: vision, modele economique et logique de rentabilite.",
    panelClass: "border-brand/35 bg-brand-50/70",
    tagClass: "border-brand/35 bg-brand/12 text-brand-emphasis",
    progressClass: "from-brand to-brand-700",
    defaultPathSlug: "lancement-projet-indh",
  },
  {
    id: "financement",
    title: "02 · Financement & Dossier",
    description: "Structurer votre dossier INDH, argumenter et presenter votre projet avec impact.",
    panelClass: "border-border/70 bg-surface/92",
    tagClass: "border-accent/35 bg-accent/12 text-accent-contrast",
    progressClass: "from-accent to-accent-700",
    defaultPathSlug: "financement-dossier-indh",
  },
  {
    id: "pilotage",
    title: "03 · Pilotage & Croissance",
    description: "Suivre les indicateurs, prioriser les actions et accelerer la croissance durable.",
    panelClass: "border-accent/35 bg-accent-50/65",
    tagClass: "border-brand/35 bg-brand/10 text-brand-emphasis",
    progressClass: "from-brand-600 to-accent-600",
    defaultPathSlug: "pilotage-terrain-indh",
  },
];

export const roadmap = [
  {
    week: "Semaine 1",
    title: "Diagnostic du projet et objectifs",
    detail: "Clarifier la proposition de valeur, les ressources et les priorites d'execution.",
  },
  {
    week: "Semaine 2",
    title: "Structuration business model",
    detail: "Definir segments clients, offre, canaux et mecanisme de revenus durable.",
  },
  {
    week: "Semaine 3",
    title: "Plan financier simplifie",
    detail: "Estimer couts, cash-flow, seuil de rentabilite et besoins de financement.",
  },
  {
    week: "Semaine 4",
    title: "Dossier INDH et preuves terrain",
    detail: "Assembler les documents cles et prevoir les justificatifs utiles a la validation.",
  },
];

export const testimonials = [
  {
    name: "Khadija R.",
    role: "Cooperative artisanale - Fes",
    quote:
      "Le parcours m'a aidee a passer d'une idee generale a un plan concret en moins de deux mois.",
  },
  {
    name: "Younes B.",
    role: "Auto-entrepreneur - Casablanca",
    quote:
      "Les modules financiers sont clairs et appliques. J'ai enfin un tableau de bord pour piloter mon activite.",
  },
];

export const formationExperts: FormationExpert[] = [
  {
    name: "Salma Idrissi",
    role: "Experte financement INDH",
    region: "Rabat-Sale-Kenitra",
    rating: "4.8",
    image:
      "https://images.pexels.com/photos/7652054/pexels-photo-7652054.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialties: ["financement"],
    recommendation:
      "Concentrez-vous sur la coherence entre votre objectif social, votre budget et vos indicateurs d'impact.",
  },
  {
    name: "Yassine El Amrani",
    role: "Consultant montage de projet",
    region: "Casablanca-Settat",
    rating: "4.9",
    image:
      "https://images.pexels.com/photos/3867849/pexels-photo-3867849.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialties: ["fondamentaux", "financement"],
    recommendation:
      "Validez rapidement vos hypotheses terrain avant d'investir dans des ressources importantes.",
  },
  {
    name: "Omar Chraibi",
    role: "Expert suivi et KPI",
    region: "Tanger-Tetouan-Al Hoceima",
    rating: "4.8",
    image:
      "https://images.pexels.com/photos/8134161/pexels-photo-8134161.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialties: ["pilotage"],
    recommendation:
      "Mettez en place 3 KPI essentiels et tenez un rituel hebdomadaire de revue pour rester agile.",
  },
  {
    name: "Nora Boussouf",
    role: "Formatrice ESS cooperative",
    region: "Souss-Massa",
    rating: "4.7",
    image:
      "https://images.pexels.com/photos/8284732/pexels-photo-8284732.jpeg?auto=compress&cs=tinysrgb&w=600",
    specialties: ["fondamentaux", "pilotage"],
    recommendation:
      "Appuyez-vous sur la dynamique collective de votre equipe pour augmenter la regularite d'execution.",
  },
];

export const feedbackComments: FeedbackComment[] = [
  {
    id: "fb-1",
    pathSlug: "lancement-projet-indh",
    author: "Amina L.",
    role: "Porteuse de projet - Fes",
    rating: 5,
    date: "il y a 3 jours",
    comment:
      "Le parcours est clair et tres pratique. Les modules m'ont aidee a structurer mon projet pas a pas.",
  },
  {
    id: "fb-2",
    pathSlug: "lancement-projet-indh",
    author: "Rachid M.",
    role: "Association locale - Marrakech",
    rating: 4,
    date: "il y a 1 semaine",
    comment:
      "Tres bonne base pour demarrer rapidement. Les templates fournis font gagner beaucoup de temps.",
  },
  {
    id: "fb-3",
    pathSlug: "financement-dossier-indh",
    author: "Nawal H.",
    role: "Cooperative agricole - Rabat",
    rating: 5,
    date: "il y a 2 jours",
    comment:
      "J'ai compris comment presenter le dossier avec plus de precision. Les cas reels sont excellents.",
  },
  {
    id: "fb-4",
    pathSlug: "pilotage-terrain-indh",
    author: "Kamal B.",
    role: "Auto-entrepreneur - Casablanca",
    rating: 4,
    date: "il y a 5 jours",
    comment:
      "Le module KPI m'a permis de suivre mon activite de facon concrete et de mieux prioriser.",
  },
  {
    id: "fb-5",
    pathSlug: "marketing-local-indh",
    author: "Sara T.",
    role: "Porteuse de projet - Agadir",
    rating: 5,
    date: "il y a 4 jours",
    comment:
      "Les exercices sont simples et applicables immediatement. J'ai lance ma premiere campagne locale.",
  },
];

export const moduleCoursePlans: Record<string, ModuleCoursePlan> = {
  "business-plan-fondamentaux": {
    overview:
      "Passez de l'idee initiale a un business plan complet avec checkpoints et quiz a chaque etape.",
    totalDuration: "3h 40",
    level: "Debutant",
    instructor: "Yassine El Amrani",
    steps: [
      {
        id: 1,
        title: "Poser la proposition de valeur",
        objective: "Identifier clairement le probleme client et la solution proposee.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 1: proposition de valeur",
        quizQuestions: 8,
        quizPassingScore: 70,
      },
      {
        id: 2,
        title: "Analyser le marche cible",
        objective: "Segmenter la clientele et valider la demande locale.",
        lessonDuration: "40 min",
        quizTitle: "Quiz 2: analyse de marche",
        quizQuestions: 10,
        quizPassingScore: 70,
      },
      {
        id: 3,
        title: "Structurer les revenus et couts",
        objective: "Definir les sources de revenus et la structure de couts.",
        lessonDuration: "50 min",
        quizTitle: "Quiz 3: revenus et couts",
        quizQuestions: 12,
        quizPassingScore: 75,
      },
      {
        id: 4,
        title: "Synthese du business plan",
        objective: "Assembler toutes les sections dans un document coherent.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 4: synthese du plan",
        quizQuestions: 9,
        quizPassingScore: 75,
      },
    ],
    finalExam: {
      title: "Examen final: Business plan complet",
      questions: 20,
      duration: "35 min",
      passingScore: 80,
    },
  },
  "modeliser-couts-marge": {
    overview:
      "Comprendre la rentabilite de votre projet en modelisant les couts, marges et seuil de rentabilite.",
    totalDuration: "2h 50",
    level: "Debutant",
    instructor: "Nora Boussouf",
    steps: [
      {
        id: 1,
        title: "Identifier les couts fixes et variables",
        objective: "Classer les couts pour mieux piloter les depenses.",
        lessonDuration: "30 min",
        quizTitle: "Quiz 1: typologie des couts",
        quizQuestions: 7,
        quizPassingScore: 70,
      },
      {
        id: 2,
        title: "Calculer la marge brute",
        objective: "Mesurer la rentabilite de chaque offre.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 2: marge brute",
        quizQuestions: 8,
        quizPassingScore: 70,
      },
      {
        id: 3,
        title: "Estimer le seuil de rentabilite",
        objective: "Determiner quand le projet couvre ses charges.",
        lessonDuration: "40 min",
        quizTitle: "Quiz 3: seuil de rentabilite",
        quizQuestions: 10,
        quizPassingScore: 75,
      },
      {
        id: 4,
        title: "Construire un plan de marge",
        objective: "Optimiser la marge avec des scenarios simples.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 4: plan de marge",
        quizQuestions: 9,
        quizPassingScore: 75,
      },
    ],
    finalExam: {
      title: "Examen final: Modele financier simplifie",
      questions: 18,
      duration: "30 min",
      passingScore: 80,
    },
  },
  "preparation-dossier-indh": {
    overview:
      "Constituez un dossier INDH solide avec une logique de preuve, d'impact et de faisabilite.",
    totalDuration: "3h 20",
    level: "Intermediaire",
    instructor: "Salma Idrissi",
    steps: [
      {
        id: 1,
        title: "Verifier l'eligibilite",
        objective: "Aligner le projet avec les criteres INDH.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 1: eligibilite",
        quizQuestions: 8,
        quizPassingScore: 70,
      },
      {
        id: 2,
        title: "Assembler les documents requis",
        objective: "Preparer toutes les pieces administratives.",
        lessonDuration: "40 min",
        quizTitle: "Quiz 2: documents",
        quizQuestions: 10,
        quizPassingScore: 75,
      },
      {
        id: 3,
        title: "Renseigner le formulaire projet",
        objective: "Presenter le projet avec clarte et coherences.",
        lessonDuration: "45 min",
        quizTitle: "Quiz 3: formulaire",
        quizQuestions: 10,
        quizPassingScore: 75,
      },
      {
        id: 4,
        title: "Preparer la soutenance",
        objective: "Defendre le dossier avec une argumentation solide.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 4: soutenance",
        quizQuestions: 9,
        quizPassingScore: 80,
      },
    ],
    finalExam: {
      title: "Examen final: Dossier complet et soutenance",
      questions: 20,
      duration: "35 min",
      passingScore: 80,
    },
  },
  "negociation-presentation-orale": {
    overview:
      "Renforcez votre impact a l'oral pour presenter et negocier votre projet devant les parties prenantes.",
    totalDuration: "2h 20",
    level: "Intermediaire",
    instructor: "Yassine El Amrani",
    steps: [
      {
        id: 1,
        title: "Structurer un pitch de 3 minutes",
        objective: "Construire un message clair et memorisable.",
        lessonDuration: "30 min",
        quizTitle: "Quiz 1: structure du pitch",
        quizQuestions: 7,
        quizPassingScore: 70,
      },
      {
        id: 2,
        title: "Gerer les objections",
        objective: "Repondre avec confiance aux questions difficiles.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 2: objections",
        quizQuestions: 8,
        quizPassingScore: 75,
      },
      {
        id: 3,
        title: "Negocier sans perdre l'objectif",
        objective: "Concilier flexibilite et priorites du projet.",
        lessonDuration: "30 min",
        quizTitle: "Quiz 3: negociation",
        quizQuestions: 8,
        quizPassingScore: 75,
      },
      {
        id: 4,
        title: "Simulation finale",
        objective: "S'entrainer a l'oral avec grille d'evaluation.",
        lessonDuration: "25 min",
        quizTitle: "Quiz 4: simulation orale",
        quizQuestions: 7,
        quizPassingScore: 80,
      },
    ],
    finalExam: {
      title: "Examen final: Pitch + negociations",
      questions: 15,
      duration: "25 min",
      passingScore: 80,
    },
  },
  "suivi-kpi-tableau-bord": {
    overview:
      "Pilotez votre projet par les donnees avec des KPI actionnables et des revues regulieres.",
    totalDuration: "3h 05",
    level: "Avance",
    instructor: "Omar Chraibi",
    steps: [
      {
        id: 1,
        title: "Choisir les bons KPI",
        objective: "Selectionner des indicateurs pertinents et mesurables.",
        lessonDuration: "40 min",
        quizTitle: "Quiz 1: selection des KPI",
        quizQuestions: 9,
        quizPassingScore: 70,
      },
      {
        id: 2,
        title: "Construire un tableau de bord",
        objective: "Visualiser l'etat du projet en un coup d'oeil.",
        lessonDuration: "45 min",
        quizTitle: "Quiz 2: dashboard",
        quizQuestions: 10,
        quizPassingScore: 75,
      },
      {
        id: 3,
        title: "Analyser les ecarts",
        objective: "Identifier les causes de sous-performance et agir vite.",
        lessonDuration: "40 min",
        quizTitle: "Quiz 3: analyse des ecarts",
        quizQuestions: 9,
        quizPassingScore: 75,
      },
      {
        id: 4,
        title: "Conduire une revue hebdomadaire",
        objective: "Animer une routine de pilotage orientee decisions.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 4: revue de pilotage",
        quizQuestions: 8,
        quizPassingScore: 80,
      },
    ],
    finalExam: {
      title: "Examen final: Pilotage et KPI",
      questions: 22,
      duration: "40 min",
      passingScore: 80,
    },
  },
  "plan-action-90-jours": {
    overview:
      "Transformez votre strategie en execution concrete avec un plan d'action 90 jours.",
    totalDuration: "2h 35",
    level: "Avance",
    instructor: "Nora Boussouf",
    steps: [
      {
        id: 1,
        title: "Definir les priorites trimestrielles",
        objective: "Selectionner les actions a plus fort impact.",
        lessonDuration: "30 min",
        quizTitle: "Quiz 1: priorisation",
        quizQuestions: 8,
        quizPassingScore: 70,
      },
      {
        id: 2,
        title: "Planifier en sprints",
        objective: "Decouper les objectifs en cycles courts realistes.",
        lessonDuration: "35 min",
        quizTitle: "Quiz 2: planning sprint",
        quizQuestions: 8,
        quizPassingScore: 75,
      },
      {
        id: 3,
        title: "Affecter responsabilites et ressources",
        objective: "Assurer une execution claire et accountable.",
        lessonDuration: "30 min",
        quizTitle: "Quiz 3: responsabilites",
        quizQuestions: 7,
        quizPassingScore: 75,
      },
      {
        id: 4,
        title: "Mesurer les resultats a 90 jours",
        objective: "Evaluer les objectifs atteints et ajuster le plan suivant.",
        lessonDuration: "25 min",
        quizTitle: "Quiz 4: bilan 90 jours",
        quizQuestions: 7,
        quizPassingScore: 80,
      },
    ],
    finalExam: {
      title: "Examen final: Plan 90 jours",
      questions: 16,
      duration: "25 min",
      passingScore: 80,
    },
  },
};

export const moduleFeedbackComments: ModuleFeedbackComment[] = [
  {
    id: "mfb-1",
    moduleSlug: "business-plan-fondamentaux",
    author: "Hajar M.",
    role: "Porteuse de projet - Taza",
    rating: 5,
    date: "il y a 2 jours",
    comment:
      "Le rythme est excellent et les quiz m'ont aidee a verifier chaque etape avant de continuer.",
  },
  {
    id: "mfb-2",
    moduleSlug: "modeliser-couts-marge",
    author: "Soufiane A.",
    role: "Auto-entrepreneur - Meknes",
    rating: 4,
    date: "il y a 5 jours",
    comment:
      "Les exemples de marge sont tres concrets. J'ai ajuste mes prix grace au module.",
  },
  {
    id: "mfb-3",
    moduleSlug: "preparation-dossier-indh",
    author: "Nadia K.",
    role: "Cooperative - Rabat",
    rating: 5,
    date: "il y a 3 jours",
    comment:
      "Le quiz apres chaque etape est parfait pour retenir les pieces necessaires du dossier.",
  },
  {
    id: "mfb-4",
    moduleSlug: "negociation-presentation-orale",
    author: "Hamza E.",
    role: "Association locale - Oujda",
    rating: 4,
    date: "il y a 1 semaine",
    comment:
      "Les simulations orales sont utiles. J'ai gagne en assurance pour presenter mon projet.",
  },
  {
    id: "mfb-5",
    moduleSlug: "suivi-kpi-tableau-bord",
    author: "Fatima Z.",
    role: "Porteuse de projet - Agadir",
    rating: 5,
    date: "il y a 4 jours",
    comment:
      "Module tres pratique, je suis maintenant mes KPI chaque semaine avec une vraie methode.",
  },
  {
    id: "mfb-6",
    moduleSlug: "plan-action-90-jours",
    author: "Ayoub L.",
    role: "Jeune entrepreneur - Casablanca",
    rating: 4,
    date: "il y a 6 jours",
    comment:
      "Le plan 90 jours est simple a suivre et les quiz m'ont force a rester rigoureux.",
  },
];
