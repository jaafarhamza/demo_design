import type { Locale } from "../i18n";

export type CourseTone = "brand" | "accent" | "neutral";

type LocalizedText = Record<Locale, string>;

type LocalizedLesson = {
  title: LocalizedText;
  duration: string;
};

type CourseSeed = {
  id: string;
  title: LocalizedText;
  category: Record<Locale, CourseCategory>;
  level: LocalizedText;
  duration: string;
  lessonsCount: number;
  description: LocalizedText;
  imageSrc: string;
  imageAlt: LocalizedText;
  tone: CourseTone;
  intro: LocalizedText;
  audience: LocalizedText;
  mentor: LocalizedText;
  outcomes: Record<Locale, string[]>;
  lessonPlan: LocalizedLesson[];
};

export type CourseCategory =
  | "Ideation"
  | "Gestion"
  | "Financement"
  | "Digital"
  | "Cooperative";

export type Course = {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  lessons: string;
  lessonsCount: number;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tone: CourseTone;
  intro: string;
  audience: string;
  mentor: string;
  outcomes: string[];
  lessonPlan: Array<{
    title: string;
    duration: string;
  }>;
};

const categoryLabels: Record<Locale, Record<"all" | CourseCategory, string>> = {
  fr: {
    all: "Tous",
    Ideation: "Ideation",
    Gestion: "Gestion",
    Financement: "Financement",
    Digital: "Digital",
    Cooperative: "Cooperative",
  },
  ar: {
    all: "الكل",
    Ideation: "الفكرة",
    Gestion: "التسيير",
    Financement: "التمويل",
    Digital: "الرقمي",
    Cooperative: "التعاونية",
  },
};

const levelLabels = {
  fr: {
    beginner: "Debutant",
    intermediate: "Intermediaire",
    advanced: "Avance",
    lessons: "lecons",
  },
  ar: {
    beginner: "مبتدئ",
    intermediate: "متوسط",
    advanced: "متقدم",
    lessons: "دروس",
  },
} as const;

const courseSeeds: CourseSeed[] = [
  {
    id: "lancer-son-projet",
    title: {
      fr: "Lancer son projet avec une feuille de route claire",
      ar: "أطلق مشروعك بخارطة طريق واضحة",
    },
    category: { fr: "Ideation", ar: "Ideation" },
    level: { fr: levelLabels.fr.beginner, ar: levelLabels.ar.beginner },
    duration: "18 min",
    lessonsCount: 8,
    description: {
      fr: "Un module video pour clarifier l'idee, identifier le besoin et poser les premiers objectifs.",
      ar: "وحدة فيديو لتوضيح الفكرة وتحديد الحاجة ووضع الأهداف الأولى.",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: {
      fr: "Personnes en atelier digital autour d'un ordinateur portable et de notes de travail",
      ar: "أشخاص في ورشة رقمية حول حاسوب محمول وملاحظات عمل",
    },
    tone: "brand",
    intro: {
      fr: "Ce cours pose une base claire pour passer d'une intention a une premiere structure de projet.",
      ar: "هذا الدرس يضع أساسا واضحا للانتقال من النية إلى أول هيكلة للمشروع.",
    },
    audience: {
      fr: "Jeunes entrepreneurs, auto-entrepreneurs et porteurs de projet en phase de demarrage.",
      ar: "رواد الأعمال الشباب والمقاولون الذاتيون وحاملو المشاريع في مرحلة الانطلاق.",
    },
    mentor: {
      fr: "Salma El Idrissi, experte en accompagnement entrepreneurial",
      ar: "سلمى الإدريسي، خبيرة في المواكبة المقاولاتية",
    },
    outcomes: {
      fr: [
        "Clarifier la proposition du projet",
        "Identifier les besoins et les priorites",
        "Passer vers le createur de projet avec plus de confiance",
      ],
      ar: [
        "توضيح عرض المشروع",
        "تحديد الحاجيات والأولويات",
        "الانتقال إلى أداة إنشاء المشروع بثقة أكبر",
      ],
    },
    lessonPlan: [
      {
        title: {
          fr: "Poser l'idee de depart",
          ar: "تحديد الفكرة الأساسية",
        },
        duration: "3 min",
      },
      {
        title: {
          fr: "Comprendre le besoin reel",
          ar: "فهم الحاجة الحقيقية",
        },
        duration: "2 min",
      },
      {
        title: {
          fr: "Definir une premiere cible",
          ar: "تحديد الفئة المستهدفة الأولى",
        },
        duration: "2 min",
      },
      {
        title: {
          fr: "Structurer la feuille de route",
          ar: "هيكلة خارطة الطريق",
        },
        duration: "4 min",
      },
      {
        title: {
          fr: "Preparer la suite du parcours",
          ar: "الاستعداد للمرحلة التالية من المسار",
        },
        duration: "7 min",
      },
    ],
  },
  {
    id: "budget-essentiel",
    title: {
      fr: "Construire un budget essentiel sans se perdre",
      ar: "بناء ميزانية أساسية دون تعقيد",
    },
    category: { fr: "Financement", ar: "Financement" },
    level: { fr: levelLabels.fr.intermediate, ar: levelLabels.ar.intermediate },
    duration: "24 min",
    lessonsCount: 10,
    description: {
      fr: "Comprendre les postes de depense, les besoins de demarrage et les premiers arbitrages utiles.",
      ar: "فهم بنود المصاريف واحتياجات الانطلاق وأولويات القرار الأولى.",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: {
      fr: "Documents budgetaires et calculs financiers poses sur une table de travail",
      ar: "وثائق ميزانية وحسابات مالية فوق طاولة عمل",
    },
    tone: "accent",
    intro: {
      fr: "Un cours concret pour mettre de l'ordre dans les couts, les priorites et les premiers besoins de financement.",
      ar: "درس عملي لتنظيم التكاليف والأولويات وأول حاجيات التمويل.",
    },
    audience: {
      fr: "Porteurs de projets ayant besoin de structurer leur budget initial.",
      ar: "حاملو المشاريع الذين يحتاجون إلى هيكلة ميزانيتهم الأولية.",
    },
    mentor: {
      fr: "Nabil Azzouzi, consultant en gestion et financement",
      ar: "نبيل عزوزي، مستشار في التسيير والتمويل",
    },
    outcomes: {
      fr: [
        "Lister les depenses indispensables",
        "Distinguer couts fixes et variables",
        "Preparer une base budgetaire presentable",
      ],
      ar: [
        "حصر المصاريف الضرورية",
        "التمييز بين التكاليف الثابتة والمتغيرة",
        "إعداد قاعدة ميزانية قابلة للتقديم",
      ],
    },
    lessonPlan: [
      {
        title: {
          fr: "Comprendre la logique budgetaire",
          ar: "فهم منطق الميزانية",
        },
        duration: "4 min",
      },
      {
        title: {
          fr: "Lister les couts de lancement",
          ar: "حصر تكاليف الانطلاق",
        },
        duration: "5 min",
      },
      {
        title: {
          fr: "Prioriser les depenses",
          ar: "ترتيب المصاريف حسب الأولوية",
        },
        duration: "5 min",
      },
      {
        title: {
          fr: "Construire un premier tableau",
          ar: "إنشاء أول جدول",
        },
        duration: "4 min",
      },
      {
        title: {
          fr: "Preparer la suite financement",
          ar: "التحضير لمرحلة التمويل",
        },
        duration: "6 min",
      },
    ],
  },
  {
    id: "communiquer-en-ligne",
    title: {
      fr: "Communiquer en ligne avec des actions simples",
      ar: "التواصل عبر الإنترنت بخطوات بسيطة",
    },
    category: { fr: "Digital", ar: "Digital" },
    level: { fr: levelLabels.fr.beginner, ar: levelLabels.ar.beginner },
    duration: "14 min",
    lessonsCount: 6,
    description: {
      fr: "Apprendre a presenter son projet, choisir les bons canaux et garder un message coherent.",
      ar: "تعلم تقديم مشروعك واختيار القنوات المناسبة والحفاظ على رسالة متماسكة.",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: {
      fr: "Ecran de travail digital avec graphiques et outils de communication",
      ar: "واجهة عمل رقمية تضم رسومًا بيانية وأدوات تواصل",
    },
    tone: "neutral",
    intro: {
      fr: "Un module direct pour poser les bases d'une communication digitale simple et credible.",
      ar: "وحدة مباشرة لوضع أسس تواصل رقمي بسيط وموثوق.",
    },
    audience: {
      fr: "Beneficiaires qui veulent rendre leur projet plus visible en ligne.",
      ar: "المستفيدون الذين يريدون جعل مشروعهم أكثر ظهورا على الإنترنت.",
    },
    mentor: {
      fr: "Imane Oufkir, formatrice en communication digitale",
      ar: "إيمان أوفقير، مكونة في التواصل الرقمي",
    },
    outcomes: {
      fr: [
        "Clarifier le message du projet",
        "Choisir des canaux adaptes",
        "Garder une presence en ligne coherente",
      ],
      ar: [
        "توضيح رسالة المشروع",
        "اختيار القنوات الملائمة",
        "الحفاظ على حضور رقمي منسجم",
      ],
    },
    lessonPlan: [
      {
        title: { fr: "Poser son message principal", ar: "صياغة الرسالة الأساسية" },
        duration: "3 min",
      },
      {
        title: { fr: "Choisir les bons canaux", ar: "اختيار القنوات المناسبة" },
        duration: "2 min",
      },
      {
        title: { fr: "Organiser ses contenus", ar: "تنظيم المحتوى" },
        duration: "3 min",
      },
      {
        title: { fr: "Eviter la surcharge digitale", ar: "تفادي الحمل الرقمي الزائد" },
        duration: "2 min",
      },
      {
        title: { fr: "Plan simple de publication", ar: "خطة نشر بسيطة" },
        duration: "4 min",
      },
    ],
  },
  {
    id: "gestion-quotidienne",
    title: {
      fr: "Mettre en place une gestion quotidienne plus sereine",
      ar: "إرساء تسيير يومي أكثر سلاسة",
    },
    category: { fr: "Gestion", ar: "Gestion" },
    level: { fr: levelLabels.fr.intermediate, ar: levelLabels.ar.intermediate },
    duration: "21 min",
    lessonsCount: 9,
    description: {
      fr: "Des reperes pratiques pour organiser le suivi, les priorites et les decisions courantes.",
      ar: "مرجعيات عملية لتنظيم التتبع والأولويات والقرارات اليومية.",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: {
      fr: "Equipe organisant des documents et des notes pour la gestion d'un projet",
      ar: "فريق ينظم وثائق وملاحظات لتسيير مشروع",
    },
    tone: "brand",
    intro: {
      fr: "Cette formation aide a installer une routine de gestion plus claire et moins stressante.",
      ar: "هذا التكوين يساعد على بناء روتين تسيير أوضح وأقل ضغطا.",
    },
    audience: {
      fr: "Porteurs de projets et responsables d'activite en phase d'organisation.",
      ar: "حاملو المشاريع ومسؤولو الأنشطة في مرحلة التنظيم.",
    },
    mentor: {
      fr: "Meryem Bennis, coach en organisation et pilotage",
      ar: "مريم بنيس، كوتش في التنظيم والقيادة",
    },
    outcomes: {
      fr: [
        "Fixer des priorites realistes",
        "Suivre les taches importantes",
        "Rendre la gestion quotidienne plus lisible",
      ],
      ar: [
        "تحديد أولويات واقعية",
        "تتبع المهام المهمة",
        "جعل التسيير اليومي أكثر وضوحا",
      ],
    },
    lessonPlan: [
      {
        title: { fr: "Faire le tri dans les priorites", ar: "ترتيب الأولويات" },
        duration: "4 min",
      },
      {
        title: { fr: "Installer une routine simple", ar: "إرساء روتين بسيط" },
        duration: "5 min",
      },
      {
        title: { fr: "Suivre les taches critiques", ar: "تتبع المهام الحرجة" },
        duration: "4 min",
      },
      {
        title: { fr: "Decider plus sereinement", ar: "اتخاذ القرار بهدوء أكبر" },
        duration: "3 min",
      },
      {
        title: { fr: "Connecter gestion et suivi", ar: "ربط التسيير بالتتبع" },
        duration: "5 min",
      },
    ],
  },
  {
    id: "cooperative-impact",
    title: {
      fr: "Animer une cooperative avec une vision plus claire",
      ar: "تنشيط تعاونية برؤية أوضح",
    },
    category: { fr: "Cooperative", ar: "Cooperative" },
    level: { fr: levelLabels.fr.intermediate, ar: levelLabels.ar.intermediate },
    duration: "19 min",
    lessonsCount: 7,
    description: {
      fr: "Un parcours pour structurer les besoins collectifs, repartir les roles et mieux suivre l'avancement.",
      ar: "مسار لهيكلة الحاجيات الجماعية وتوزيع الأدوار وتتبع التقدم بشكل أفضل.",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1522204538344-922f76ecc041?auto=format&fit=crop&w=1200&q=80",
    imageAlt: {
      fr: "Groupe de travail collaboratif reunit autour d'une table avec plusieurs participants",
      ar: "مجموعة عمل تعاونية مجتمعة حول طاولة",
    },
    tone: "accent",
    intro: {
      fr: "Un cours concu pour les logiques collectives, avec une attention forte sur les roles et la coordination.",
      ar: "درس مصمم للمنطق الجماعي مع تركيز قوي على الأدوار والتنسيق.",
    },
    audience: {
      fr: "Cooperatives, associations et collectifs qui ont besoin d'une organisation plus visible.",
      ar: "التعاونيات والجمعيات والمجموعات التي تحتاج إلى تنظيم أكثر وضوحا.",
    },
    mentor: {
      fr: "Yassine Moutaouakil, accompagnateur de cooperatives",
      ar: "ياسين المتوكل، مرافق للتعاونيات",
    },
    outcomes: {
      fr: [
        "Repartir les roles plus clairement",
        "Structurer les besoins collectifs",
        "Mieux suivre les etapes communes",
      ],
      ar: [
        "توزيع الأدوار بوضوح أكبر",
        "هيكلة الحاجيات الجماعية",
        "تتبع المراحل المشتركة بشكل أفضل",
      ],
    },
    lessonPlan: [
      {
        title: {
          fr: "Comprendre la dynamique collective",
          ar: "فهم الدينامية الجماعية",
        },
        duration: "3 min",
      },
      {
        title: { fr: "Nommer les roles utiles", ar: "تحديد الأدوار المفيدة" },
        duration: "4 min",
      },
      {
        title: {
          fr: "Organiser les priorites communes",
          ar: "تنظيم الأولويات المشتركة",
        },
        duration: "4 min",
      },
      {
        title: {
          fr: "Suivre l'avancement collectif",
          ar: "تتبع التقدم الجماعي",
        },
        duration: "4 min",
      },
      {
        title: {
          fr: "Passer vers le dashboard projet",
          ar: "الانتقال إلى لوحة قيادة المشروع",
        },
        duration: "4 min",
      },
    ],
  },
  {
    id: "pitch-projet",
    title: {
      fr: "Presenter son projet avec un pitch plus convaincant",
      ar: "قدم مشروعك بعرض أكثر إقناعا",
    },
    category: { fr: "Ideation", ar: "Ideation" },
    level: { fr: levelLabels.fr.beginner, ar: levelLabels.ar.beginner },
    duration: "12 min",
    lessonsCount: 5,
    description: {
      fr: "Structurer un message clair pour expliquer le projet en quelques points forts.",
      ar: "هيكلة رسالة واضحة لشرح المشروع عبر نقاط قوة مركزة.",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: {
      fr: "Participants en atelier collaboratif ecoutant une presentation de projet",
      ar: "مشاركون في ورشة تعاونية يستمعون إلى عرض مشروع",
    },
    tone: "neutral",
    intro: {
      fr: "Un module tres pratique pour presenter son idee avec plus d'impact et de simplicite.",
      ar: "وحدة عملية جدا لتقديم الفكرة بوضوح وتأثير أكبر.",
    },
    audience: {
      fr: "Beneficiaires qui doivent expliquer leur projet a un partenaire, un expert ou un financeur.",
      ar: "المستفيدون الذين يحتاجون إلى شرح مشروعهم لشريك أو خبير أو ممول.",
    },
    mentor: {
      fr: "Khadija Raji, formatrice en prise de parole",
      ar: "خديجة الراجي، مكونة في الإلقاء والعرض",
    },
    outcomes: {
      fr: [
        "Presenter un projet en peu de temps",
        "Mettre en avant les bons points forts",
        "Gagner en aisance pour les echanges",
      ],
      ar: [
        "عرض المشروع في وقت قصير",
        "إبراز نقاط القوة الأساسية",
        "اكتساب طلاقة أكبر في التبادل",
      ],
    },
    lessonPlan: [
      {
        title: {
          fr: "Identifier le coeur du message",
          ar: "تحديد جوهر الرسالة",
        },
        duration: "2 min",
      },
      {
        title: { fr: "Construire un pitch simple", ar: "بناء عرض بسيط" },
        duration: "3 min",
      },
      {
        title: { fr: "Eviter les longueurs", ar: "تجنب الإطالة" },
        duration: "2 min",
      },
      {
        title: { fr: "Parler avec confiance", ar: "التحدث بثقة" },
        duration: "2 min",
      },
      {
        title: {
          fr: "Adapter le discours au contexte",
          ar: "تكييف الخطاب مع السياق",
        },
        duration: "3 min",
      },
    ],
  },
  {
    id: "rechercher-financement",
    title: {
      fr: "Identifier les pistes de financement pertinentes",
      ar: "تحديد مسارات التمويل المناسبة",
    },
    category: { fr: "Financement", ar: "Financement" },
    level: { fr: levelLabels.fr.advanced, ar: levelLabels.ar.advanced },
    duration: "26 min",
    lessonsCount: 11,
    description: {
      fr: "Explorer les options d'appui, preparer son dossier et mieux comprendre les attentes des financeurs.",
      ar: "استكشاف خيارات الدعم وإعداد الملف وفهم انتظارات الممولين بشكل أفضل.",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: {
      fr: "Main utilisant une calculatrice et consultant un tableau financier",
      ar: "يد تستعمل آلة حاسبة وتراجع لوحة مالية",
    },
    tone: "brand",
    intro: {
      fr: "Une formation plus avancee pour preparer la recherche de financement avec davantage de clarte.",
      ar: "تكوين متقدم لإعداد البحث عن التمويل بوضوح أكبر.",
    },
    audience: {
      fr: "Projets en phase de maturation qui veulent mieux cibler leurs options de financement.",
      ar: "المشاريع في مرحلة النضج التي تريد استهداف خيارات التمويل بشكل أفضل.",
    },
    mentor: {
      fr: "Rachid El Mansouri, conseiller financement",
      ar: "رشيد المنصوري، مستشار تمويل",
    },
    outcomes: {
      fr: [
        "Identifier des pistes realistres",
        "Comprendre les attentes des financeurs",
        "Mieux preparer un dossier d'appui",
      ],
      ar: [
        "تحديد مسارات واقعية",
        "فهم انتظارات الممولين",
        "إعداد ملف دعم بشكل أفضل",
      ],
    },
    lessonPlan: [
      {
        title: {
          fr: "Cartographier les options possibles",
          ar: "رسم خريطة للخيارات الممكنة",
        },
        duration: "5 min",
      },
      {
        title: {
          fr: "Lire les attentes des financeurs",
          ar: "قراءة انتظارات الممولين",
        },
        duration: "5 min",
      },
      {
        title: { fr: "Poser les bons indicateurs", ar: "تحديد المؤشرات المناسبة" },
        duration: "4 min",
      },
      {
        title: { fr: "Structurer un mini-dossier", ar: "هيكلة ملف مصغر" },
        duration: "6 min",
      },
      {
        title: {
          fr: "Preparer l'echange avec un expert",
          ar: "التحضير للتبادل مع خبير",
        },
        duration: "6 min",
      },
    ],
  },
  {
    id: "presence-digitale",
    title: {
      fr: "Construire une presence digitale utile et credible",
      ar: "بناء حضور رقمي مفيد وموثوق",
    },
    category: { fr: "Digital", ar: "Digital" },
    level: { fr: levelLabels.fr.intermediate, ar: levelLabels.ar.intermediate },
    duration: "16 min",
    lessonsCount: 7,
    description: {
      fr: "Un module pratique pour garder une image claire du projet sur les bons supports numeriques.",
      ar: "وحدة عملية للحفاظ على صورة واضحة للمشروع عبر القنوات الرقمية المناسبة.",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80",
    imageAlt: {
      fr: "Ordinateur et smartphone affichant des interfaces numeriques modernes",
      ar: "حاسوب وهاتف يعرضان واجهات رقمية حديثة",
    },
    tone: "accent",
    intro: {
      fr: "Le cours aide a construire une presence numerique propre, coherente et utile pour le projet.",
      ar: "يساعد هذا الدرس على بناء حضور رقمي نظيف ومنسجم ومفيد للمشروع.",
    },
    audience: {
      fr: "Porteurs de projets voulant rendre leur activite plus visible et plus credible en ligne.",
      ar: "حاملو المشاريع الذين يريدون جعل نشاطهم أكثر ظهورا ومصداقية على الإنترنت.",
    },
    mentor: {
      fr: "Sara Lamrani, consultante en presence numerique",
      ar: "سارة العمراني، مستشارة في الحضور الرقمي",
    },
    outcomes: {
      fr: [
        "Choisir les bons supports",
        "Rendre le projet plus credible visuellement",
        "Organiser une presence digitale durable",
      ],
      ar: [
        "اختيار القنوات المناسبة",
        "جعل المشروع أكثر مصداقية بصريا",
        "تنظيم حضور رقمي مستدام",
      ],
    },
    lessonPlan: [
      {
        title: { fr: "Choisir les supports utiles", ar: "اختيار القنوات المفيدة" },
        duration: "3 min",
      },
      {
        title: { fr: "Poser une identite simple", ar: "بناء هوية بسيطة" },
        duration: "4 min",
      },
      {
        title: { fr: "Garder un message coherent", ar: "الحفاظ على رسالة منسجمة" },
        duration: "3 min",
      },
      {
        title: { fr: "Publier sans surcharger", ar: "النشر دون إفراط" },
        duration: "3 min",
      },
      {
        title: { fr: "Mesurer l'impact des actions", ar: "قياس أثر الإجراءات" },
        duration: "3 min",
      },
    ],
  },
];

export function getCategories(locale: Locale) {
  return [
    categoryLabels[locale].all,
    categoryLabels[locale].Ideation,
    categoryLabels[locale].Gestion,
    categoryLabels[locale].Financement,
    categoryLabels[locale].Digital,
    categoryLabels[locale].Cooperative,
  ];
}

export function getCourses(locale: Locale): Course[] {
  return courseSeeds.map((course) => ({
    id: course.id,
    title: course.title[locale],
    category: categoryLabels[locale][course.category[locale]],
    level: course.level[locale],
    duration: course.duration,
    lessons: `${course.lessonsCount} ${levelLabels[locale].lessons}`,
    lessonsCount: course.lessonsCount,
    description: course.description[locale],
    imageSrc: course.imageSrc,
    imageAlt: course.imageAlt[locale],
    tone: course.tone,
    intro: course.intro[locale],
    audience: course.audience[locale],
    mentor: course.mentor[locale],
    outcomes: course.outcomes[locale],
    lessonPlan: course.lessonPlan.map((lesson) => ({
      title: lesson.title[locale],
      duration: lesson.duration,
    })),
  }));
}

export function getCourseById(id: string, locale: Locale) {
  return getCourses(locale).find((course) => course.id === id);
}

export function toneClass(tone: Course["tone"]) {
  switch (tone) {
    case "brand":
      return "bg-brand/10 text-brand-emphasis";
    case "accent":
      return "bg-accent/12 text-accent-contrast dark:text-accent";
    default:
      return "bg-surface text-muted-strong";
  }
}
