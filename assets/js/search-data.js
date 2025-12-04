// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-i-will-attend-the-dagstuhl-database-reliability-seminar-in-october-2023",
          title: 'I will attend the Dagstuhl Database Reliability Seminar in October 2023.',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-serve-the-program-committee-for-pldi-24",
          title: 'I was invited to serve the program committee for PLDI’24.',
          description: "",
          section: "News",},{id: "news-our-paper-api-driven-program-synthesis-for-testing-static-typing-implementations-has-been-accepted-at-popl-24",
          title: 'Our paper “API-driven Program Synthesis for Testing Static Typing Implementations” has been accepted...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-serve-on-the-program-committee-for-issta-ecoop-2024-tool-demonstration-track",
          title: 'I was invited to serve on the Program Committee for ISSTA/ECOOP 2024 (Tool...',
          description: "",
          section: "News",},{id: "news-i-will-give-a-talk-at-lambda-days-2024-about-enhancing-the-reliability-of-type-checkers-in-compilers",
          title: 'I will give a talk at Lambda Days 2024 about “Enhancing the Reliability...',
          description: "",
          section: "News",},{id: "news-i-will-give-a-talk-at-devoxx-greece-2024-about-enhancing-the-reliability-of-type-checkers-in-compilers",
          title: 'I will give a talk at Devoxx Greece 2024 about “Enhancing the Reliability...',
          description: "",
          section: "News",},{id: "news-our-paper-bloat-beneath-python-s-scales-a-fine-grained-inter-project-dependency-analysis-has-been-accepted-to-fse-24",
          title: 'Our paper “Bloat beneath Python’s Scales: A Fine-Grained Inter-Project Dependency Analysis” has been...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-serve-on-the-program-committee-of-icst-2025",
          title: 'I was invited to serve on the program committee of ICST 2025.',
          description: "",
          section: "News",},{id: "news-our-proposal-for-a-dagstuhl-seminar-on-testing-program-analyzers-and-verifiers-co-organized-with-maria-christakis-alastair-donaldson-and-john-regehr-has-been-accepted",
          title: 'Our proposal for a Dagstuhl seminar on “Testing Program Analyzers and Verifiers”, co-organized...',
          description: "",
          section: "News",},{id: "news-together-with-stefanos-chaliasos-we-have-started-working-on-detecting-private-information-leakage-in-zero-knowledge-applications-which-has-received-funding-from-the-ethereum-foundation-and-aztec-labs-more-details-can-be-found-at-https-aztec-network-blog-announcing-the-noir-awardees-of-the-inaugural-ef-zk-grants-wave",
          title: 'Together with Stefanos Chaliasos, we have started working on “Detecting Private Information Leakage...',
          description: "",
          section: "News",},{id: "news-our-paper-when-your-infrastructure-is-a-buggy-program-understanding-faults-in-infrastructure-as-code-ecosystems-has-been-accepted-to-oopsla-2024",
          title: 'Our paper “When Your Infrastructure is a Buggy Program: Understanding Faults in Infrastructure...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-serve-the-program-committee-for-pldi-25",
          title: 'I was invited to serve the program committee for PLDI’25.',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-serve-the-program-committee-for-oopsla-26",
          title: 'I was invited to serve the program committee for OOPSLA’26.',
          description: "",
          section: "News",},{id: "news-our-paper-pyxray-practical-cross-language-call-graph-construction-through-object-layout-analysis-has-been-accepted-to-icse-2026",
          title: 'Our paper “PyXray: Practical Cross-Language Call Graph Construction through Object Layout Analysis” has...',
          description: "",
          section: "News",},{id: "news-our-paper-validating-soundness-and-completeness-of-pattern-match-coverage-analyzers-has-been-accepted-to-oopsla-2025",
          title: 'Our paper “Validating Soundness and Completeness of Pattern-Match Coverage Analyzers” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-best-of-both-worlds-effective-foreign-bridge-identification-in-v8-embedders-for-security-analysis-has-been-accepted-to-ieee-s-amp-amp-p-2026",
          title: 'Our paper Best of Both Worlds: Effective Foreign Bridge Identification in V8 Embedders...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-serve-the-program-committee-for-issta-26",
          title: 'I was invited to serve the program committee for ISSTA’26.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%68%65%6F%64%6F%72%6F%73.%73%6F%74%69%72%6F%70%6F%75%6C%6F%73@%69%6E%66.%65%74%68%7A.%63%68", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/thodoris-sotiropoulos-6837b028b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uXKw8hYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/theosotir", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
