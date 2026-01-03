import { defineCollection, z } from 'astro:content';

// Existing collections
const faqsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    app: z.enum(['bingo', 'cards', 'print']),
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    title: z.string(),
    subtitle: z.string(),
    contactText: z.string(),
    contactLink: z.string(),
    items: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

const usecasesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    app: z.enum(['bingo', 'cards', 'print']),
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    title: z.string(),
    subtitle: z.string(),
    items: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
});

const featuresCollection = defineCollection({
  type: 'data',
  schema: z.object({
    app: z.enum(['bingo', 'cards', 'print']),
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    title: z.string(),
    subtitle: z.string(),
    items: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
});

// New collections for migrated content

const seoCollection = defineCollection({
  type: 'data',
  schema: z.object({
    app: z.enum(['bingo', 'cards', 'print', 'hub']),
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    meta: z.object({
      title: z.string(),
      description: z.string(),
      keywords: z.string(),
    }),
    og: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

const heroCollection = defineCollection({
  type: 'data',
  schema: z.object({
    app: z.enum(['bingo', 'cards', 'print', 'hub']),
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    headline: z.string(),
    subtitle: z.string(),
    subtitleCta: z.string().optional(),
    tags: z
      .array(
        z.object({
          label: z.string(),
        })
      )
      .optional(),
  }),
});

const navigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    app: z.enum(['bingo', 'cards', 'print', 'hub']),
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    items: z.array(
      z.object({
        key: z.string(),
        label: z.string(),
      })
    ),
  }),
});

const ctaCollection = defineCollection({
  type: 'data',
  schema: z.object({
    app: z.enum(['bingo', 'cards', 'print']),
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    title: z.string(),
    subtitle: z.string(),
    otherAppsLabel: z.string(),
    otherApps: z.array(
      z.object({
        app: z.string(),
        description: z.string(),
      })
    ),
  }),
});

const appsfamilyCollection = defineCollection({
  type: 'data',
  schema: z.object({
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    title: z.string(),
    subtitle: z.string(),
    apps: z.array(
      z.object({
        app: z.enum(['bingo', 'cards', 'print']),
        description: z.string(),
      })
    ),
  }),
});

const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    title: z.string(),
    subtitle: z.string(),
    roles: z.object({
      ios: z.string(),
      android: z.string(),
      designer: z.string(),
    }),
    linkedinLabel: z.string(),
  }),
});

const footerCollection = defineCollection({
  type: 'data',
  schema: z.object({
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    rights: z.string(),
    tagline: z.string(),
    privacyPolicy: z.string(),
    viewAllApps: z.string(),
  }),
});

const privacyCollection = defineCollection({
  type: 'data',
  schema: z.object({
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    subtitle: z.string(),
    intro: z.string(),
    sections: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    ),
    contact: z.object({
      emailLabel: z.string(),
      websiteLabel: z.string(),
    }),
    applePrivacyPolicy: z.string(),
  }),
});

const uiCollection = defineCollection({
  type: 'data',
  schema: z.object({
    locale: z.enum(['en', 'es', 'fr', 'pt']),
    accessibility: z.object({
      skipToContent: z.string(),
      toggleMenu: z.string(),
    }),
    buttons: z.object({
      downloadFree: z.string(),
      downloadOnAppstore: z.string(),
      getItOnGoogle: z.string(),
      comingSoon: z.string(),
    }),
    downloadSamples: z.object({
      sample75: z.string(),
      sample90: z.string(),
    }),
    orgDescription: z.string(),
  }),
});

export const collections = {
  faqs: faqsCollection,
  usecases: usecasesCollection,
  features: featuresCollection,
  seo: seoCollection,
  hero: heroCollection,
  navigation: navigationCollection,
  cta: ctaCollection,
  appsfamily: appsfamilyCollection,
  team: teamCollection,
  footer: footerCollection,
  privacy: privacyCollection,
  ui: uiCollection,
};
