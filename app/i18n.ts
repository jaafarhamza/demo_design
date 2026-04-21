export const locales = ["fr", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localizeHref(locale: Locale, href: string) {
  if (!href.startsWith("/")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export const uiDictionary = {
  fr: {
    brandTagline: "Formation, accompagnement et suivi des projets",
    nav: {
      home: "Accueil",
      trainings: "Formations",
      experts: "Experts",
      community: "Communaute",
      contact: "Contact",
      contactUs: "Nous contacter",
    },
    lang: {
      label: "Langue",
      french: "FR",
      arabic: "AR",
    },
    footer: {
      description:
        "Une experience numerique moderne pour orienter, former et accompagner les porteurs de projets INDH avec un parcours clair, accessible et responsive.",
      navigation: "Navigation",
      platform: "Plateforme",
      trust: "Confiance",
      helpCenter: "Centre d'aide",
      designed:
        "© 2026 INDH Digitale. Concu pour une presentation moderne, accessible et evolutive.",
      location: "Maroc · FR / AR",
      primaryLinks: [
        { href: "/", label: "Accueil" },
        { href: "/trainings", label: "Formations" },
        { href: "/experts", label: "Experts" },
        { href: "/community", label: "Communaute" },
      ],
      platformLinks: [
        { href: "/contact", label: "Contact" },
        { href: "/trainings", label: "Catalogue" },
        { href: "/experts", label: "Mentors" },
        { href: "/community", label: "Groupes" },
      ],
      legalLinks: [
        { href: "/contact", label: "Confidentialite" },
        { href: "/contact", label: "Accessibilite" },
        { href: "/contact", label: "Support" },
        { href: "/contact", label: "Mentions" },
      ],
    },
    pages: {
      contact: {
        eyebrow: "Contact",
        title: "Parler avec l'equipe INDH Digitale.",
        description:
          "Un point de contact simple pour poser une question, demander un rendez-vous ou orienter un besoin.",
      },
      createProject: {
        eyebrow: "Create a Project",
        title: "Commencer a structurer votre projet.",
        description:
          "Une page de demarrage pour passer de l'idee a une premiere structure plus claire.",
      },
      myTrainings: {
        eyebrow: "My Trainings",
        title: "Retrouver vos modules et votre progression.",
        description:
          "Un espace personnel pour reprendre les cours en cours, suivre l'avancement et continuer le parcours.",
      },
    },
  },
  ar: {
    brandTagline: "التكوين والمواكبة وتتبع المشاريع",
    nav: {
      home: "الرئيسية",
      trainings: "التكوينات",
      experts: "الخبراء",
      community: "المجتمع",
      contact: "اتصال",
      contactUs: "تواصل معنا",
    },
    lang: {
      label: "اللغة",
      french: "FR",
      arabic: "AR",
    },
    footer: {
      description:
        "تجربة رقمية حديثة لتوجيه وتكوين ومواكبة حاملي المشاريع داخل مسار واضح وسهل الولوج ومتجاوب.",
      navigation: "التصفح",
      platform: "المنصة",
      trust: "الثقة",
      helpCenter: "مركز المساعدة",
      designed:
        "© 2026 INDH Digitale. تجربة تقديم حديثة وسهلة الولوج وقابلة للتطور.",
      location: "المغرب · FR / AR",
      primaryLinks: [
        { href: "/", label: "الرئيسية" },
        { href: "/trainings", label: "التكوينات" },
        { href: "/experts", label: "الخبراء" },
        { href: "/community", label: "المجتمع" },
      ],
      platformLinks: [
        { href: "/contact", label: "اتصال" },
        { href: "/trainings", label: "الفهرس" },
        { href: "/experts", label: "المرشدون" },
        { href: "/community", label: "المجموعات" },
      ],
      legalLinks: [
        { href: "/contact", label: "الخصوصية" },
        { href: "/contact", label: "الولوج" },
        { href: "/contact", label: "الدعم" },
        { href: "/contact", label: "معلومات قانونية" },
      ],
    },
    pages: {
      contact: {
        eyebrow: "اتصال",
        title: "تواصل مع فريق INDH Digitale.",
        description:
          "نقطة تواصل واضحة لطرح الأسئلة أو طلب موعد أو توجيه الحاجة إلى الجهة المناسبة.",
      },
      createProject: {
        eyebrow: "إنشاء مشروع",
        title: "ابدأ في هيكلة مشروعك.",
        description:
          "صفحة انطلاق تساعدك على الانتقال من الفكرة إلى أول بنية واضحة للمشروع.",
      },
      myTrainings: {
        eyebrow: "تكويناتي",
        title: "اعثر على وحداتك ومسار تقدمك.",
        description:
          "فضاء شخصي للعودة إلى الدروس الجارية وتتبع التقدم ومواصلة المسار.",
      },
    },
  },
} as const;
