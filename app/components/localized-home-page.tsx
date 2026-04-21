import Image from "next/image";
import Link from "next/link";
import { type Locale, localizeHref } from "../i18n";

const heroImageSrc =
  "https://cdn.pixabay.com/photo/2020/01/20/11/51/woman-4780153_1280.jpg";
const missionImageSrc =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80";
const journeyImageSrc =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";
const featureImageSrc =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80";
const audienceImageSrc =
  "https://images.unsplash.com/photo-1522204538344-922f76ecc041?auto=format&fit=crop&w=1400&q=80";
const impactImageSrc =
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80";

const homeContent = {
  fr: {
    hero: {
      kicker: "Plateforme nationale INDH",
      title: "Former, orienter et transformer une idee en projet structure.",
      description:
        "INDH Digitale centralise la formation, l'accompagnement expert et les outils de suivi dans une experience claire, moderne et accessible pour les porteurs de projets au Maroc.",
      primaryCta: "Decouvrir le parcours",
      secondaryCta: "Explorer les formations",
      stats: [
        {
          value: "4",
          label: "piliers reunis",
          detail: "formation, projet, experts, suivi",
        },
        {
          value: "FR / AR",
          label: "experience bilingue",
          detail: "pensee pour le contexte marocain",
        },
        {
          value: "24/7",
          label: "acces continu",
          detail: "desktop, tablette et mobile",
        },
      ],
      chips: [
        "Jeunes porteurs de projets",
        "Cooperatives et associations",
        "Auto-entrepreneurs",
      ],
      topTags: ["Formation + mentorat", "FR / AR"],
      bottomCards: [
        {
          label: "Suivi",
          value: "78%",
          detail: "progression du parcours",
        },
        {
          label: "Rendez-vous expert",
          value: "09:30",
          detail: "Session financement local reservee",
        },
      ],
    },
    mission: {
      kicker: "Project Mission / Why It Exists",
      title: "Une plateforme pensee pour rendre l'accompagnement plus simple.",
      description:
        "INDH Digitale relie orientation, formation et suivi pour que le porteur de projet avance plus vite, avec moins de friction et plus de clarte.",
      cards: [
        {
          title: "Le besoin",
          description:
            "Eviter un parcours fragmente entre information, appui et prise de decision.",
        },
        {
          title: "Le role de l'INDH",
          description:
            "Offrir une experience plus visible, plus accessible et mieux suivie.",
        },
      ],
      impactTitle: "Pourquoi cela compte",
      impactDescription:
        "Une plateforme utile ne doit pas seulement informer. Elle doit aussi aider a comprendre, se former et avancer.",
      imageTag: "Contexte terrain",
      imageCardTitle: "Une mission claire",
      imageCardDescription:
        "Rapprocher les beneficiaires, les experts et les outils dans une seule experience.",
      highlightCards: [
        {
          title: "Orientation claire",
          description:
            "Un parcours plus simple a comprendre des le premier contact.",
        },
        {
          title: "Accompagnement humain",
          description:
            "Experts, mentorat et rendez-vous dans un meme espace digital.",
        },
        {
          title: "Impact visible",
          description:
            "Des outils de suivi qui rendent la progression plus lisible.",
        },
      ],
    },
    how: {
      kicker: "How It Works",
      title: "Un parcours simple, de la formation au suivi.",
      description:
        "La plateforme montre un chemin clair: apprendre, structurer le projet, rencontrer un expert puis suivre les prochaines actions.",
      steps: [
        {
          step: "01",
          label: "Formation",
          title: "Se former avec des contenus courts et utiles",
          description:
            "Des modules video simples et pratiques pour demarrer sans surcharge.",
        },
        {
          step: "02",
          label: "Projet",
          title: "Construire son projet avec une trame claire",
          description:
            "L'utilisateur organise l'idee, les besoins et les premiers livrables.",
        },
        {
          step: "03",
          label: "Experts",
          title: "Recevoir un accompagnement au bon moment",
          description:
            "Questions, mentorat et rendez-vous restent relies au meme espace.",
        },
        {
          step: "04",
          label: "Suivi",
          title: "Suivre la progression et les prochaines actions",
          description:
            "Chaque etape laisse une trace claire pour savoir quoi faire ensuite.",
        },
      ],
      imageTag: "Parcours accompagne",
      imageTitle: "Vue d'ensemble",
      imageMetric: "4 etapes visibles",
      imageMetric2: "1 espace pour avancer",
    },
    features: {
      kicker: "Key Features",
      title: "Les modules essentiels dans une meme interface.",
      description:
        "L'experience regroupe les briques principales du projet: apprendre, echanger avec des experts, construire son projet, suivre ses avancees et rester connecte a une dynamique collective.",
      count: "5 modules pour guider l'experience",
      heroTag: "Module principal",
      heroTitle: "Dashboard central pour relier formation, projet et suivi.",
      heroDescription:
        "Une vue unique pour reprendre son parcours, retrouver ses actions et passer a l'etape suivante.",
      chipsTitle: "Modules relies",
      modules: [
        {
          label: "Formations",
          title: "Des contenus courts pour apprendre vite",
          description:
            "Modules, parcours et ressources pour comprendre et progresser sans surcharge.",
        },
        {
          label: "Experts",
          title: "Un lien direct avec l'accompagnement",
          description:
            "Mentorat, questions et rendez-vous relies au parcours utilisateur.",
        },
        {
          label: "Projet",
          title: "Des outils pour structurer l'idee",
          description:
            "Guidage, organisation et premiers livrables dans un meme flux.",
        },
        {
          label: "Dashboard",
          title: "Une vue claire sur l'avancement",
          description:
            "Progression, priorites et prochaines actions visibles en un coup d'oeil.",
        },
        {
          label: "Communaute",
          title: "Un espace plus vivant et collaboratif",
          description:
            "Partage d'experiences, entraide et dynamique collective autour des projets.",
        },
      ],
    },
    audiences: {
      kicker: "Target Users",
      title: "Une plateforme pensee pour plusieurs profils de beneficiaires.",
      description:
        "Le design doit rester souple pour parler a des parcours individuels, collectifs et associatifs sans perdre en clarte.",
      imageTag: "Publics cibles",
      imageTitle: "Une meme base, plusieurs usages",
      imageDescription:
        "Une plateforme utile doit parler aux jeunes entrepreneurs, aux cooperatives, aux associations et aux auto-entrepreneurs.",
      cards: [
        {
          step: "01",
          label: "Jeunes entrepreneurs",
          title: "Un point d'entree plus simple pour lancer une idee",
          description:
            "Des contenus utiles, un cadre clair et un accompagnement rassurant pour demarrer.",
        },
        {
          step: "02",
          label: "Cooperatives",
          title: "Des outils pour structurer une dynamique collective",
          description:
            "La plateforme aide a organiser les besoins, les etapes et les ressources autour du projet.",
        },
        {
          step: "03",
          label: "Associations",
          title: "Un espace pour orienter et suivre les initiatives",
          description:
            "L'information, les experts et le suivi restent plus faciles a mobiliser dans un meme environnement.",
        },
        {
          step: "04",
          label: "Auto-entrepreneurs",
          title: "Un accompagnement agile pour avancer plus vite",
          description:
            "Une experience legere, mobile et pratique pour apprendre, clarifier et passer a l'action.",
        },
      ],
    },
    support: {
      kicker: "Learning + Project Support Preview",
      title: "Les deux piliers les plus forts, reunis dans une meme experience.",
      description:
        "La plateforme ne se limite pas a former. Elle aide aussi a construire un projet avec une progression claire, des outils utiles et un appui visible.",
      imageTag: "Learn and build",
      imageTitle: "Une logique simple",
      imageDescription:
        "Apprendre pour gagner en clarte, puis structurer pour passer a l'action avec plus de confiance.",
      pillars: [
        {
          label: "Learning",
          title: "Des modules pour comprendre avant d'agir",
          description:
            "Cours, parcours et ressources pour apprendre avec un rythme simple et progressif.",
          accent: "bg-brand/10 text-brand-emphasis",
        },
        {
          label: "Project Support",
          title: "Des outils pour transformer une idee en plan d'action",
          description:
            "Organisation, accompagnement et suivi pour faire avancer le projet sans perdre le fil.",
          accent: "bg-accent/12 text-accent-contrast dark:text-accent",
        },
      ],
      bridgeTitle: "Ce que l'utilisateur ressent",
      bridgeHeading: "Une experience qui apprend puis accompagne.",
      bridgeDescription:
        "Le contenu aide a comprendre, tandis que les outils projet aident a structurer et faire avancer les prochaines etapes.",
      bridgeChips: [
        "Cours en ligne",
        "Parcours guides",
        "Documents utiles",
        "Suivi du projet",
      ],
    },
    impact: {
      kicker: "Success Stories / Impact",
      title: "Montrer des trajectoires inspirantes et un impact attendu.",
      description:
        "Cette section sert a installer la confiance: elle montre ce que la plateforme peut changer pour les beneficiaires et pour l'accompagnement sur le terrain.",
      badge: "Histoires, effets attendus, confiance",
      imageTag: "Histoire type",
      imageTitle:
        "Une beneficiaire gagne en clarte, apprend plus vite et avance avec plus de confiance.",
      imageDescription:
        "Formation, outils projet et suivi l'aident a passer d'une intention a une demarche plus structuree.",
      impactCardTitle: "Impact attendu",
      impactCardHeading: "Rendre le parcours plus rassurant et plus lisible.",
      impactCardDescription:
        "Le design de la plateforme doit montrer qu'elle n'est pas seulement informative: elle accompagne une progression concrete.",
      impactChips: ["Progression visible", "Appui humain", "Confiance"],
      stories: [
        {
          label: "Beneficiaire",
          title: "De l'idee a un projet mieux structure",
          description:
            "Une experience qui aide a comprendre les etapes, suivre l'avancement et mieux preparer les prochaines decisions.",
        },
        {
          label: "Territoire",
          title: "Un accompagnement plus visible sur le terrain",
          description:
            "Des outils partages pour rendre l'appui plus lisible entre acteurs, experts et beneficiaires.",
        },
        {
          label: "Impact",
          title: "Plus de clarte, plus de confiance, plus d'action",
          description:
            "La plateforme donne des reperes concrets qui renforcent la confiance dans le parcours.",
        },
      ],
    },
    final: {
      kicker: "Final CTA + Contact",
      title: "Pret a explorer la plateforme ou a lancer le premier pas.",
      description:
        "Cette derniere section doit donner une sortie claire: decouvrir le parcours, contacter l'equipe ou commencer directement l'experience.",
      primaryCta: "Explorer la plateforme",
      secondaryCta: "Contacter l'equipe",
      imageTag: "Prochaine etape",
      imageTitle: "Appel a l'action",
      imageDescription:
        "Une fin de page efficace donne une direction nette, avec des actions visibles et un contact simple a activer.",
      imageChips: ["Explorer", "Contacter", "Commencer"],
      actions: [
        {
          title: "Explorer la plateforme",
          description:
            "Decouvrir les modules, les parcours et la logique globale de l'experience.",
          href: "/trainings",
          cta: "Voir les formations",
        },
        {
          title: "Contacter l'equipe",
          description:
            "Poser une question, demander un echange ou presenter le besoin de votre structure.",
          href: "/contact",
          cta: "Nous contacter",
        },
        {
          title: "Commencer son parcours",
          description:
            "Entrer dans une experience claire pour apprendre, structurer et faire avancer un projet.",
          href: "/trainings",
          cta: "Commencer",
        },
      ],
    },
  },
  ar: {
    hero: {
      kicker: "منصة وطنية للمبادرة الوطنية",
      title: "تكوين وتوجيه وتحويل الفكرة إلى مشروع منظم.",
      description:
        "تجمع INDH Digitale بين التكوين والمواكبة الخبيرة وأدوات التتبع داخل تجربة واضحة وحديثة وسهلة الولوج لحاملي المشاريع بالمغرب.",
      primaryCta: "اكتشف المسار",
      secondaryCta: "استكشف التكوينات",
      stats: [
        {
          value: "4",
          label: "ركائز مجمعة",
          detail: "تكوين، مشروع، خبراء، تتبع",
        },
        {
          value: "FR / AR",
          label: "تجربة ثنائية اللغة",
          detail: "مصممة للسياق المغربي",
        },
        {
          value: "24/7",
          label: "ولوج مستمر",
          detail: "حاسوب، لوحي، هاتف",
        },
      ],
      chips: [
        "حاملو المشاريع الشباب",
        "التعاونيات والجمعيات",
        "المقاولون الذاتيون",
      ],
      topTags: ["تكوين + مواكبة", "FR / AR"],
      bottomCards: [
        {
          label: "التتبع",
          value: "78%",
          detail: "تقدم المسار",
        },
        {
          label: "موعد خبير",
          value: "09:30",
          detail: "جلسة تمويل محلي محجوزة",
        },
      ],
    },
    mission: {
      kicker: "رسالة المشروع / لماذا وجد",
      title: "منصة صممت لتجعل المواكبة أبسط وأوضح.",
      description:
        "تربط INDH Digitale بين التوجيه والتكوين والتتبع حتى يتقدم حامل المشروع بسرعة أكبر وباحتكاك أقل ووضوح أكثر.",
      cards: [
        {
          title: "الحاجة",
          description:
            "تجنب مسار متشظي بين المعلومة والدعم واتخاذ القرار.",
        },
        {
          title: "دور INDH",
          description:
            "تقديم تجربة أكثر وضوحا وأسهل ولوجا وأفضل تتبعا.",
        },
      ],
      impactTitle: "لماذا هذا مهم",
      impactDescription:
        "المنصة المفيدة لا تكتفي بالمعلومة. بل يجب أن تساعد أيضا على الفهم والتكوين والتقدم.",
      imageTag: "سياق ميداني",
      imageCardTitle: "رسالة واضحة",
      imageCardDescription:
        "تقريب المستفيدين والخبراء والأدوات داخل تجربة واحدة.",
      highlightCards: [
        {
          title: "توجيه واضح",
          description: "مسار أسهل للفهم منذ أول تواصل.",
        },
        {
          title: "مواكبة إنسانية",
          description: "خبراء وإرشاد ومواعيد داخل نفس الفضاء الرقمي.",
        },
        {
          title: "أثر مرئي",
          description: "أدوات تتبع تجعل التقدم أكثر وضوحا.",
        },
      ],
    },
    how: {
      kicker: "كيف يشتغل",
      title: "مسار بسيط من التكوين إلى التتبع.",
      description:
        "تُظهر المنصة طريقا واضحا: التعلّم ثم هيكلة المشروع ثم لقاء خبير ثم متابعة الخطوات القادمة.",
      steps: [
        {
          step: "01",
          label: "التكوين",
          title: "التعلّم من خلال محتوى قصير وعملي",
          description: "وحدات فيديو بسيطة وعملية للبداية دون إرهاق.",
        },
        {
          step: "02",
          label: "المشروع",
          title: "بناء المشروع عبر هيكلة واضحة",
          description: "ينظم المستخدم الفكرة والحاجيات وأول المخرجات.",
        },
        {
          step: "03",
          label: "الخبراء",
          title: "الحصول على المواكبة في الوقت المناسب",
          description: "الأسئلة والإرشاد والمواعيد تبقى مرتبطة بنفس الفضاء.",
        },
        {
          step: "04",
          label: "التتبع",
          title: "تتبع التقدم والخطوات القادمة",
          description: "كل مرحلة تترك أثرا واضحا لمعرفة ما الذي يأتي بعد ذلك.",
        },
      ],
      imageTag: "مسار مواكب",
      imageTitle: "نظرة شاملة",
      imageMetric: "4 مراحل واضحة",
      imageMetric2: "فضاء واحد للتقدم",
    },
    features: {
      kicker: "الوظائف الأساسية",
      title: "الوحدات الأساسية داخل واجهة واحدة.",
      description:
        "تجمع التجربة اللبنات الرئيسية للمشروع: التعلم، التفاعل مع الخبراء، بناء المشروع، تتبع التقدم والبقاء ضمن دينامية جماعية.",
      count: "5 وحدات توجه التجربة",
      heroTag: "الوحدة الرئيسية",
      heroTitle: "لوحة قيادة مركزية تربط التكوين بالمشروع والتتبع.",
      heroDescription:
        "رؤية واحدة لاستئناف المسار والعثور على الإجراءات والمرور إلى المرحلة التالية.",
      chipsTitle: "الوحدات المرتبطة",
      modules: [
        {
          label: "التكوينات",
          title: "محتوى قصير للتعلم بسرعة",
          description: "وحدات ومسارات وموارد للفهم والتقدم دون تشبع.",
        },
        {
          label: "الخبراء",
          title: "صلة مباشرة بالمواكبة",
          description: "إرشاد وأسئلة ومواعيد مرتبطة بمسار المستخدم.",
        },
        {
          label: "المشروع",
          title: "أدوات لهيكلة الفكرة",
          description: "توجيه وتنظيم وأول المخرجات داخل نفس التدفق.",
        },
        {
          label: "لوحة القيادة",
          title: "رؤية واضحة للتقدم",
          description: "التقدم والأولويات والخطوات القادمة في نظرة واحدة.",
        },
        {
          label: "المجتمع",
          title: "فضاء أكثر حيوية وتعاونا",
          description: "تقاسم الخبرات والتعاون والدينامية الجماعية حول المشاريع.",
        },
      ],
    },
    audiences: {
      kicker: "الفئات المستهدفة",
      title: "منصة صممت لعدة ملفات من المستفيدين.",
      description:
        "يجب أن يبقى التصميم مرنا ليتحدث إلى المسارات الفردية والجماعية والجمعوية دون فقدان الوضوح.",
      imageTag: "الفئات المستهدفة",
      imageTitle: "قاعدة واحدة، استعمالات متعددة",
      imageDescription:
        "المنصة المفيدة يجب أن تتحدث إلى رواد الأعمال الشباب والتعاونيات والجمعيات والمقاولين الذاتيين.",
      cards: [
        {
          step: "01",
          label: "رواد الأعمال الشباب",
          title: "مدخل أبسط لإطلاق فكرة",
          description: "محتوى مفيد وإطار واضح ومواكبة مطمئنة للانطلاق.",
        },
        {
          step: "02",
          label: "التعاونيات",
          title: "أدوات لهيكلة دينامية جماعية",
          description: "تساعد المنصة على تنظيم الحاجيات والمراحل والموارد حول المشروع.",
        },
        {
          step: "03",
          label: "الجمعيات",
          title: "فضاء لتوجيه المبادرات وتتبعها",
          description: "المعلومة والخبراء والتتبع أسهل تعبئة داخل نفس البيئة.",
        },
        {
          step: "04",
          label: "المقاولون الذاتيون",
          title: "مواكبة مرنة للتقدم بسرعة",
          description: "تجربة خفيفة ومتحركة وعملية للتعلم والتوضيح والانطلاق.",
        },
      ],
    },
    support: {
      kicker: "التعلم + دعم المشروع",
      title: "أقوى ركيزتين داخل تجربة واحدة.",
      description:
        "المنصة لا تقتصر على التكوين فقط. بل تساعد أيضا على بناء مشروع عبر تقدم واضح وأدوات مفيدة ودعم مرئي.",
      imageTag: "تعلّم وابنِ",
      imageTitle: "منطق بسيط",
      imageDescription:
        "التعلم لاكتساب الوضوح ثم الهيكلة للمرور إلى الفعل بثقة أكبر.",
      pillars: [
        {
          label: "Learning",
          title: "وحدات للفهم قبل التنفيذ",
          description: "دروس ومسارات وموارد للتعلم بوتيرة بسيطة ومتدرجة.",
          accent: "bg-brand/10 text-brand-emphasis",
        },
        {
          label: "Project Support",
          title: "أدوات لتحويل الفكرة إلى خطة عمل",
          description: "تنظيم ومواكبة وتتبع لدفع المشروع إلى الأمام دون ضياع الخيط.",
          accent: "bg-accent/12 text-accent-contrast dark:text-accent",
        },
      ],
      bridgeTitle: "ما الذي يشعر به المستخدم",
      bridgeHeading: "تجربة تعلّم ثم تواكب.",
      bridgeDescription:
        "يساعد المحتوى على الفهم، بينما تساعد أدوات المشروع على الهيكلة ودفع الخطوات التالية.",
      bridgeChips: [
        "دروس عبر الإنترنت",
        "مسارات موجهة",
        "وثائق مفيدة",
        "تتبع المشروع",
      ],
    },
    impact: {
      kicker: "قصص النجاح / الأثر",
      title: "إبراز مسارات ملهمة وأثر منتظر.",
      description:
        "تخدم هذه الفقرة بناء الثقة: فهي تُظهر ما الذي يمكن أن تغيّره المنصة بالنسبة للمستفيدين وبالنسبة للمواكبة الميدانية.",
      badge: "قصص، أثر منتظر، ثقة",
      imageTag: "قصة نموذجية",
      imageTitle:
        "مستفيدة تكتسب وضوحا أكبر وتتعلم أسرع وتتقدم بثقة أكثر.",
      imageDescription:
        "يساعدها التكوين وأدوات المشروع والتتبع على الانتقال من النية إلى مسار أكثر هيكلة.",
      impactCardTitle: "الأثر المنتظر",
      impactCardHeading: "جعل المسار أكثر طمأنة وأكثر وضوحا.",
      impactCardDescription:
        "يجب أن يُظهر تصميم المنصة أنها لا تكتفي بالمعلومة، بل ترافق تقدما ملموسا.",
      impactChips: ["تقدم مرئي", "دعم إنساني", "ثقة"],
      stories: [
        {
          label: "المستفيد",
          title: "من الفكرة إلى مشروع أكثر هيكلة",
          description:
            "تجربة تساعد على فهم المراحل وتتبع التقدم والاستعداد بشكل أفضل للقرارات القادمة.",
        },
        {
          label: "المجال",
          title: "مواكبة أكثر وضوحا على أرض الواقع",
          description:
            "أدوات مشتركة تجعل الدعم أكثر وضوحا بين الفاعلين والخبراء والمستفيدين.",
        },
        {
          label: "الأثر",
          title: "وضوح أكثر، ثقة أكثر، فعل أكثر",
          description:
            "تعطي المنصة مؤشرات عملية تعزز الثقة داخل المسار.",
        },
      ],
    },
    final: {
      kicker: "الدعوة الأخيرة + التواصل",
      title: "هل أنت مستعد لاكتشاف المنصة أو أخذ الخطوة الأولى.",
      description:
        "يجب أن تمنح هذه الفقرة الأخيرة مخرجا واضحا: اكتشاف المسار أو التواصل مع الفريق أو بدء التجربة مباشرة.",
      primaryCta: "استكشف المنصة",
      secondaryCta: "تواصل مع الفريق",
      imageTag: "المرحلة القادمة",
      imageTitle: "دعوة إلى الفعل",
      imageDescription:
        "نهاية الصفحة الفعالة تمنح اتجاها واضحا مع أفعال مرئية وتواصل بسيط التفعيل.",
      imageChips: ["استكشف", "تواصل", "ابدأ"],
      actions: [
        {
          title: "استكشف المنصة",
          description:
            "اكتشف الوحدات والمسارات والمنطق العام للتجربة.",
          href: "/trainings",
          cta: "عرض التكوينات",
        },
        {
          title: "تواصل مع الفريق",
          description:
            "اطرح سؤالا أو اطلب موعدا أو قدّم حاجة بنيتك.",
          href: "/contact",
          cta: "تواصل معنا",
        },
        {
          title: "ابدأ مسارك",
          description:
            "ادخل إلى تجربة واضحة للتعلم والهيكلة ودفع المشروع إلى الأمام.",
          href: "/trainings",
          cta: "ابدأ",
        },
      ],
    },
  },
} as const;

export function LocalizedHomePage({ locale }: { locale: Locale }) {
  const copy = homeContent[locale];

  return (
    <main className="mx-auto flex w-full max-w-360 flex-1 flex-col px-3 pb-16 pt-8 sm:px-4 sm:pt-10 lg:px-6 lg:pb-24">
      <section className="relative scroll-mt-28 overflow-hidden px-2 py-6 sm:scroll-mt-32 sm:px-3 sm:py-8 lg:px-4 lg:py-10 xl:px-6">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <div className="relative z-10 space-y-7">
            <div className="space-y-4">
              <span className="hero-kicker">{copy.hero.kicker}</span>
              <h1 className="max-w-4xl font-display text-[clamp(2.8rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.055em] text-foreground">
                {copy.hero.title}
              </h1>
              <p className="max-w-2xl text-[1.03rem] leading-8 text-muted-strong sm:text-[1.12rem]">
                {copy.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={localizeHref(locale, "/trainings")}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
              >
                {copy.hero.primaryCta}
              </Link>
              <Link
                href={localizeHref(locale, "/trainings")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/80 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
              >
                {copy.hero.secondaryCta}
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {copy.hero.stats.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 backdrop-blur-xl"
                >
                  <p className="font-display text-2xl text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-muted-strong">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {copy.hero.chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex min-h-11 items-center rounded-full border border-border/70 bg-surface px-4 text-sm text-muted-strong"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                unoptimized
                src={heroImageSrc}
                alt={
                  locale === "ar"
                    ? "مقاولة تعمل على حاسوب داخل فضاء تشاركي"
                    : "Entrepreneur working on a laptop in a collaborative workspace"
                }
                width="1280"
                height="853"
                priority
                className="h-[27rem] w-full object-cover sm:h-[31rem] lg:h-144"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,24,18,0.12),rgba(13,24,18,0.18)_48%,rgba(13,24,18,0.62))]" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-5 sm:top-5">
                {copy.hero.topTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex min-h-10 items-center rounded-full bg-background/82 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 px-3 sm:grid-cols-2">
              {copy.hero.bottomCards.map((card) => (
                <article
                  key={card.label}
                  className="rounded-[1.4rem] bg-background/80 p-4"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    {card.label}
                  </p>
                  <p className="mt-3 font-display text-3xl text-foreground">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-strong">
                    {card.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-12">
          <div className="space-y-6 lg:pt-5">
            <div className="space-y-4 sm:space-y-5">
              <span className="section-label">{copy.mission.kicker}</span>
              <h2 className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground">
                {copy.mission.title}
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                {copy.mission.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {copy.mission.cards.map((card) => (
                <article key={card.title} className="panel p-5">
                  <p className="section-label">{card.title}</p>
                  <p className="mt-3 text-base leading-7 text-muted-strong">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>

            <article className="rounded-[1.8rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_12%,transparent))] p-5 shadow-card sm:p-6">
              <p className="section-label">{copy.mission.impactTitle}</p>
              <p className="mt-3 max-w-xl text-base leading-8 text-muted-strong">
                {copy.mission.impactDescription}
              </p>
            </article>
          </div>

          <div className="space-y-4">
            <article className="relative overflow-hidden rounded-[2rem] bg-surface shadow-card">
              <Image
                unoptimized
                src={missionImageSrc}
                alt={
                  locale === "ar"
                    ? "فريق في اجتماع حول مشروع"
                    : "Equipe en reunion autour d'un ordinateur pour echanger sur un projet"
                }
                width="1400"
                height="934"
                className="h-[19rem] w-full object-cover sm:h-[23rem] lg:h-[27rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.08),rgba(16,27,20,0.2)_52%,rgba(16,27,20,0.72))]" />
              <div className="absolute left-4 top-4 rounded-full bg-background/82 px-4 py-2 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.mission.imageTag}
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] bg-background/84 p-4 shadow-card backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.mission.imageCardTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-strong">
                  {copy.mission.imageCardDescription}
                </p>
              </div>
            </article>

            <div className="grid gap-3 md:grid-cols-3">
              {copy.mission.highlightCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-border/70 bg-background/62 p-4 backdrop-blur-xl"
                >
                  <h3 className="text-base text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.98fr] lg:gap-10 xl:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="section-label">{copy.how.kicker}</span>
              <h2 className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground">
                {copy.how.title}
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                {copy.how.description}
              </p>
            </div>

            <div className="grid gap-4">
              {copy.how.steps.map((step) => (
                <article
                  key={step.step}
                  className="rounded-[1.8rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand to-accent font-display text-base text-brand-contrast shadow-card">
                      {step.step}
                    </span>
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      {step.label}
                    </p>
                  </div>
                  <h3 className="mt-4 font-display text-[1.4rem] leading-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[2rem] bg-surface shadow-card">
            <Image
              unoptimized
              src={journeyImageSrc}
              alt={
                locale === "ar"
                  ? "مجموعة تشتغل على تخطيط مشروع"
                  : "Equipe travaillant sur le parcours d'un projet"
              }
              width="1400"
              height="934"
              className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.05),rgba(16,27,20,0.18)_44%,rgba(16,27,20,0.78))]" />
            <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
              {copy.how.imageTag}
            </div>
            <div className="absolute inset-x-4 bottom-4 grid gap-3">
              <div className="rounded-[1.5rem] bg-background/84 p-4 shadow-card backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.how.imageTitle}
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <p className="font-display text-2xl text-foreground">
                    {copy.how.imageMetric}
                  </p>
                  <p className="font-display text-2xl text-foreground">
                    {copy.how.imageMetric2}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:gap-8">
          <div className="space-y-5">
            <div className="space-y-4">
              <span className="section-label">{copy.features.kicker}</span>
              <h2 className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.05em] text-foreground">
                {copy.features.title}
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                {copy.features.description}
              </p>
            </div>

            <div className="rounded-full border border-border/70 bg-background/70 px-4 py-3 text-sm text-muted-strong">
              {copy.features.count}
            </div>

            <article className="relative overflow-hidden rounded-[2rem] bg-surface shadow-card">
              <Image
                unoptimized
                src={featureImageSrc}
                alt={
                  locale === "ar"
                    ? "واجهة رقمية ترمز إلى لوحة قيادة التكوين"
                    : "Visuel d'interface digitale pour illustrer la plateforme"
                }
                width="1400"
                height="934"
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_42%,rgba(16,27,20,0.84))]" />
              <div className="absolute inset-x-4 top-4 rounded-[1.4rem] bg-background/84 p-4 shadow-card backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.features.heroTag}
                </p>
                <h3 className="mt-3 font-display text-[1.5rem] leading-tight text-foreground">
                  {copy.features.heroTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-strong">
                  {copy.features.heroDescription}
                </p>
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] bg-background/84 p-4 shadow-card backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.features.chipsTitle}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {copy.features.modules.map((module) => (
                    <span key={module.label} className="theme-chip">
                      {module.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            {copy.features.modules.map((module, index) => (
              <article
                key={module.label}
                className="rounded-[1.9rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand to-accent font-display text-base text-brand-contrast shadow-card">
                    0{index + 1}
                  </span>
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    {module.label}
                  </p>
                </div>
                <h3 className="mt-4 font-display text-[1.35rem] leading-tight text-foreground">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
          <div className="space-y-4">
            <span className="section-label">{copy.audiences.kicker}</span>
            <h2 className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.05em] text-foreground">
              {copy.audiences.title}
            </h2>
            <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
              {copy.audiences.description}
            </p>

            <article className="relative overflow-hidden rounded-[2rem] bg-surface shadow-card">
              <Image
                unoptimized
                src={audienceImageSrc}
                alt={
                  locale === "ar"
                    ? "مجموعة من الشباب والمهنيين يتبادلون داخل ورشة"
                    : "Groupe de jeunes professionnels et porteurs de projets en echange collaboratif"
                }
                width="1400"
                height="934"
                className="h-[18rem] w-full object-cover sm:h-[24rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.16)_42%,rgba(16,27,20,0.72))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.audiences.imageTag}
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] bg-background/84 p-4 shadow-card backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.audiences.imageTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-strong">
                  {copy.audiences.imageDescription}
                </p>
              </div>
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {copy.audiences.cards.map((card) => (
              <article
                key={card.step}
                className="rounded-[1.9rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand to-accent font-display text-base text-brand-contrast shadow-card">
                    {card.step}
                  </span>
                  <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                    {card.label}
                  </p>
                </div>
                <h3 className="mt-4 font-display text-[1.35rem] leading-tight text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:gap-8">
          <div className="space-y-5">
            <div className="space-y-4">
              <span className="section-label">{copy.support.kicker}</span>
              <h2 className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.05em] text-foreground">
                {copy.support.title}
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                {copy.support.description}
              </p>
            </div>

            <article className="relative overflow-hidden rounded-[2rem] bg-surface shadow-card">
              <Image
                unoptimized
                src={journeyImageSrc}
                alt={
                  locale === "ar"
                    ? "أشخاص يشتغلون بين التعلم وبناء المشروع"
                    : "Personnes en session de travail sur ordinateur entre apprentissage et construction de projet"
                }
                width="1400"
                height="934"
                className="h-[18rem] w-full object-cover sm:h-[24rem] xl:h-[26rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_42%,rgba(16,27,20,0.78))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.support.imageTag}
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[1.45rem] bg-background/84 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.support.imageTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-strong">
                  {copy.support.imageDescription}
                </p>
              </div>
            </article>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
              {copy.support.pillars.map((pillar) => (
                <article
                  key={pillar.label}
                  className="rounded-[1.9rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl sm:p-6"
                >
                  <span
                    className={`inline-flex min-h-9 items-center rounded-full px-4 text-xs font-semibold tracking-[0.18em] uppercase ${pillar.accent}`}
                  >
                    {pillar.label}
                  </span>
                  <h3 className="mt-4 font-display text-[1.45rem] leading-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>

            <article className="rounded-[1.9rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_12%,transparent))] p-5 shadow-card sm:p-6">
              <p className="section-label">{copy.support.bridgeTitle}</p>
              <h3 className="mt-3 font-display text-[1.55rem] leading-tight text-foreground">
                {copy.support.bridgeHeading}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-strong">
                {copy.support.bridgeDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {copy.support.bridgeChips.map((chip) => (
                  <span key={chip} className="theme-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="space-y-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className="section-label">{copy.impact.kicker}</span>
              <h2 className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.05em] text-foreground">
                {copy.impact.title}
              </h2>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                {copy.impact.description}
              </p>
            </div>
            <div className="rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-muted-strong">
              {copy.impact.badge}
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.06fr_0.94fr]">
            <article className="relative overflow-hidden rounded-[2.1rem] bg-surface shadow-card">
              <Image
                unoptimized
                src={impactImageSrc}
                alt={
                  locale === "ar"
                    ? "مستفيدة في بيئة مهنية تبعث على الثقة"
                    : "Femme entrepreneure en echange confiant dans un environnement professionnel"
                }
                width="1400"
                height="933"
                className="h-[18rem] w-full object-cover sm:h-[24rem] lg:h-[28rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_38%,rgba(16,27,20,0.84))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.impact.imageTag}
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[1.6rem] bg-background/88 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <h3 className="font-display text-[1.45rem] leading-tight text-foreground sm:text-[1.72rem]">
                  {copy.impact.imageTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-strong">
                  {copy.impact.imageDescription}
                </p>
              </div>
            </article>

            <div className="grid gap-4">
              <article className="rounded-[1.9rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_14%,transparent),color-mix(in_oklab,var(--accent)_12%,transparent))] p-5 shadow-card sm:p-6">
                <p className="section-label">{copy.impact.impactCardTitle}</p>
                <h3 className="mt-3 font-display text-[1.55rem] leading-tight text-foreground">
                  {copy.impact.impactCardHeading}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-strong">
                  {copy.impact.impactCardDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {copy.impact.impactChips.map((chip) => (
                    <span key={chip} className="theme-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </article>

              <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                {copy.impact.stories.map((story) => (
                  <article
                    key={story.title}
                    className="rounded-[1.8rem] border border-border/70 bg-background/68 p-5 shadow-card backdrop-blur-xl"
                  >
                    <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                      {story.label}
                    </p>
                    <h3 className="mt-3 font-display text-[1.28rem] leading-tight text-foreground">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {story.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-8 scroll-mt-28 px-2 py-8 sm:scroll-mt-32 sm:px-3 sm:py-10 lg:mt-12 lg:px-4 lg:py-14 xl:px-6">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-border/70 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_12%,transparent),color-mix(in_oklab,var(--accent)_14%,transparent))] p-4 shadow-card sm:p-5 lg:p-6">
          <div className="relative grid gap-5 xl:grid-cols-[1.04fr_0.96fr] xl:items-stretch">
            <div className="space-y-5 rounded-[1.9rem] bg-background/78 p-5 backdrop-blur-xl sm:p-6">
              <div className="space-y-4">
                <span className="section-label">{copy.final.kicker}</span>
                <h2 className="max-w-3xl font-display text-[clamp(1.95rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.05em] text-foreground">
                  {copy.final.title}
                </h2>
                <p className="max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
                  {copy.final.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={localizeHref(locale, "/trainings")}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
                >
                  {copy.final.primaryCta}
                </Link>
                <Link
                  href={localizeHref(locale, "/contact")}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/85 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
                >
                  {copy.final.secondaryCta}
                </Link>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {copy.final.actions.map((action) => (
                  <article
                    key={action.title}
                    className="rounded-[1.6rem] border border-border/70 bg-background/68 p-4 shadow-card backdrop-blur-xl"
                  >
                    <h3 className="text-lg text-foreground">{action.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {action.description}
                    </p>
                    <Link
                      href={localizeHref(locale, action.href)}
                      className="mt-4 inline-flex min-h-10 items-center rounded-full bg-surface px-4 text-sm font-semibold text-brand-emphasis transition-colors hover:bg-surface-strong"
                    >
                      {action.cta}
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <article className="relative overflow-hidden rounded-[1.9rem] bg-surface shadow-card">
              <Image
                unoptimized
                src={impactImageSrc}
                alt={
                  locale === "ar"
                    ? "فريق يناقش الخطوة التالية حول مشروع"
                    : "Equipe en discussion pour passer a l'action autour d'un projet"
                }
                width="1400"
                height="934"
                className="h-[18rem] w-full object-cover sm:h-[24rem] xl:h-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,27,20,0.06),rgba(16,27,20,0.18)_38%,rgba(16,27,20,0.84))]" />
              <div className="absolute left-4 top-4 inline-flex min-h-10 items-center rounded-full bg-background/84 px-4 text-sm font-semibold text-brand-emphasis shadow-card backdrop-blur-xl">
                {copy.final.imageTag}
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[1.45rem] bg-background/84 p-4 shadow-card backdrop-blur-xl sm:p-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {copy.final.imageTitle}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-strong">
                  {copy.final.imageDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {copy.final.imageChips.map((chip) => (
                    <span key={chip} className="theme-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
