export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  fil: 'Filipino',
} as const;

export const defaultLang = 'en' as const;

export type Language = keyof typeof languages;

export const appStoreBadges: Record<Language, string> = {
  en: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1570838400',
  es: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-es?size=250x83&releaseDate=1570838400',
  fr: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83&releaseDate=1570838400',
  pt: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/pt-br?size=250x83&releaseDate=1570838400',
  fil: 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1570838400',
};

export const googlePlayBadges: Record<Language, string> = {
  en: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
  es: 'https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png',
  fr: 'https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png',
  pt: 'https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png',
  fil: 'https://play.google.com/intl/en_us/badges/static/images/badges/fil_badge_web_generic.png',
};

export const ui = {
  en: {
    // SEO Meta Tags
    meta_title: "Bingo!! - Best Bingo Caller App for iOS & Android",
    meta_description: "Bingo!! is the best bingo caller app for iOS and Android. Play bingo anywhere with automatic number calling, QR card verification, and beautiful cards.",
    meta_keywords: "bingo app, bingo caller, bingo game, bingo cards, bingo machine, play bingo, bingo iOS, bingo Android",
    og_title: "Bingo!! - Best Bingo Caller App",
    og_description: "Play bingo anywhere with automatic number calling, QR card verification, and beautiful cards. Available on iOS and Android.",

    // Header
    title: "Bingo!! - Best Bingo caller machine",
    headline: "Best Bingo caller machine!",
    subtitle: "Create unforgettable bingo nights at home with family and friends!",

    // Advantages Section
    advantages_title: "6 advantages",
    advantage1_title: "Customize your game",
    advantage1_desc: "Choose between 90 or 75 balls mode, the speed and different voices or languages",
    advantage2_title: "Printables or cards app",
    advantage2_desc: "Print the cards or download our cards app to play with your own device. Play with as many cards as you want!",
    advantage3_title: "Scan the card and check",
    advantage3_desc: "Every card has a unique QR code for instant verification. Scan any card to instantly check if it's a winning BINGO",
    advantage4_title: "External screen support",
    advantage4_desc: "You can view the board on television if you have the Airplay connection or even by cable",
    advantage5_title: "Real voices",
    advantage5_desc: "Our friend Adam makes jokes and rhymes so you will laugh a lot with your family or friends",
    advantage6_title: "Create your own rhymes",
    advantage6_desc: "If you prefer your own voice, record the numbers and the rhymes… it's going to be funny!",

    // QR Tutorial Section
    qr_title: "How QR code works",
    qr_subtitle: "Scan QR codes on your bingo cards for instant digital card management and automatic gameplay",
    qr_step1_title: "1. Scan QR code",
    qr_step1_desc: "Point your camera at the QR code on your bingo card",
    qr_step2_title: "2. Card appears",
    qr_step2_desc: "Your bingo card automatically appears in the app",
    qr_step3_title: "3. Play automatically",
    qr_step3_desc: "Start playing with automatic number marking",

    // Both Apps Section
    apps_title: "Get both apps",
    apps_subtitle: "Everything you need for the perfect home bingo experience",
    main_app_title: "Bingo!!",
    main_app_desc: "The best bingo caller machine with voices, animations and customization",

    // Cards Section
    cards_title: "Get your cards",
    cards_app_title: "Bingo Cards!!",
    cards_app_desc: "Get digital bingo cards on your device with our companion app",

    // Team Section
    team_title: "Meet our team",
    team_subtitle: "The talented developers and designers behind your favorite bingo app",
    team_ios: "iOS Developer",
    team_android: "Android Developer",
    team_designer: "UX/UI Designer",
    team_linkedin: "LinkedIn Profile →",

    // Navigation
    nav_apps: "Apps",
    nav_advantages: "Advantages",
    nav_qr: "QR Tutorial",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_team: "Team",

    // Footer
    footer_rights: "© 2024 Wombat Apps. All rights reserved.",
    footer_tagline: "Best Bingo caller machine!",

    // Missing translations
    guaranteed_fun: "Guaranteed fun!",
    download_free: "Download free!",
    available_platforms: "Available on all platforms",
    downloads_count: "downloads",
    privacy_policy_title: "Privacy Policy",
    privacy_policy_subtitle: "Privacy Policy for Bingo!! Apps",

    // Privacy Policy Content
    privacy_intro: "Álvaro Murillo del Puerto, José Balanza and Laura Abajo Díaz built and designed Bingo!!, Bingo!! Lite and Bingo!! Cards. Bingo!! is a paid app but Bingo!! Lite and Bingo!! Cards are in app purchase. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
    privacy_info_collection_title: "Information Collection and Use",
    privacy_info_collection_content: "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to ADVERTISING ID. The information that we request will be retained by us and used as described in this privacy policy. The ads shown in Bingo!!, Bingo!! Lite and Bingo!! Cards apps comply with Apple Store Ads Policies and User Data Privacy. The apps do use third party services that may collect information used to identify you. Link to privacy policy of third party service providers used by the apps:",
    apple_privacy_policy: "Apple Privacy Policy",
    privacy_log_data_title: "Log Data",
    privacy_log_data_content: "We want to inform you that whenever you use our Service, in a case of an error in the apps we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\"IP\") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.",
    privacy_cookies_title: "Cookies",
    privacy_cookies_content: "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these \"cookies\" explicitly. However, the apps may use third party code and libraries that use \"cookies\" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
    privacy_service_providers_title: "Service Providers",
    privacy_service_providers_content: "We may employ third-party companies and individuals due to the following reasons: To facilitate our Service; To provide the Service on our behalf; To perform Service-related services; To assist us in analyzing how our Service is used. We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
    privacy_security_title: "Security",
    privacy_security_content: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
    privacy_links_title: "Links to Other Sites",
    privacy_links_content: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
    privacy_children_title: "Children's Privacy",
    privacy_children_content: "These Services do not address anyone under the age of 16. We do not knowingly collect personally identifiable information from children under 16. In the case we discover that a child under 16 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.",
    privacy_changes_title: "Changes to This Privacy Policy",
    privacy_changes_content: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.",
    privacy_contact_title: "Contact Us",
    privacy_contact_content: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.",
    contact_email: "Email:",
    contact_website: "Website:",

    // Reviews Section
    reviews_title: "What our users say",
    reviews_subtitle: "Real reviews from satisfied Bingo players around the world",
    review1_text: "Excellent app! 3 different viewing modes, shows all numbers drawn, last 4 numbers called are highlighted in case of a late call and shows current number enlarged. Can record your own number call-outs and change the frequency of calls. Hours of fun",
    review1_author: "RBukes",
    review1_source: "App Store",
    review2_text: "Great game! We connected it to the TV and it looked great! It generates cards with QR codes to easily check lines and bingos. Great family bingo afternoon! Highly recommended!",
    review2_author: "LyJ!",
    review2_source: "App Store",
    review3_text: "Excellent bingo app. Does everything you need apart from tell you how many numbers have been called",
    review3_author: "Koolkevin7",
    review3_source: "App Store",
    review4_text: "Amazing, very well made with an impeccable design.",
    review4_author: "Alberto BG",
    review4_source: "App Store",
    review5_text: "With the new option for 2 second call time, the app is now our favorite",
    review5_author: "dmaa670",
    review5_source: "App Store",

    // FAQ Section
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Find answers to common questions about our Bingo apps",
    faq_q1: "How do I play Bingo with friends and family?",
    faq_a1: "Download the main Bingo!! app on one device to act as the caller. Everyone else can either use printed cards or download the Bingo Cards!! app to get digital cards on their phones or tablets.",
    faq_q2: "What's the difference between 75-ball and 90-ball Bingo?",
    faq_a2: "75-ball Bingo uses numbers 1-75 with 5x5 cards, while 90-ball Bingo uses numbers 1-90 with 9x3 cards. You can choose either mode in the app settings to match your preference.",
    faq_q3: "Can I customize the voices and language?",
    faq_a3: "Yes! The app supports English, Spanish, and French with different voice options. You can also record your own custom voice and rhymes for a personalized experience.",
    faq_q4: "How does the QR code verification work?",
    faq_a4: "Each bingo card has a unique QR code. Simply scan the code with the main app's camera to instantly verify if the card has a winning BINGO pattern.",
    faq_q5: "Can I display the game on a TV or larger screen?",
    faq_a5: "Absolutely! You can cast the bingo board to an external screen using AirPlay (for Apple devices) or connect via cable to display on any TV or monitor.",
    faq_q6: "How many cards can each player have?",
    faq_a6: "Each player can play with as many bingo cards as they want simultaneously, whether using printed cards or the digital Bingo Cards!! app. There are no limits!",
    faq_q7: "Is the app suitable for all ages?",
    faq_a7: "Yes! Our Bingo apps are family-friendly and perfect for players of all ages. The engaging voices and animations make it fun for everyone.",
    faq_q8: "Do I need an internet connection to play?",
    faq_a8: "No, once downloaded, you can play Bingo offline with family and friends in the same location. No internet connection required during gameplay.",

    // Accessibility
    skip_to_content: "Skip to main content",
    toggle_menu: "Toggle navigation menu",
    previous_review: "Previous review",
    next_review: "Next review",
    customer_reviews: "Customer reviews",
  },

  es: {
    // SEO Meta Tags
    meta_title: "Bingo!! - La Mejor App de Bingo para iOS y Android",
    meta_description: "Bingo!! es la mejor app de bingo para iOS y Android. Juega al bingo en cualquier lugar con canto automático, verificación QR y hermosos cartones.",
    meta_keywords: "app de bingo, cantar bingo, juego de bingo, cartones de bingo, máquina de bingo, jugar bingo, bingo iOS, bingo Android",
    og_title: "Bingo!! - La Mejor App de Bingo",
    og_description: "Juega al bingo en cualquier lugar con canto automático de números, verificación QR y hermosos cartones. Disponible en iOS y Android.",

    // Header
    title: "Bingo!! - ¡El mejor Bingo digital!",
    headline: "¡El mejor Bingo digital!",
    subtitle: "¡Disfruta las mejores noches de bingo en casa con tu familia y amigos!",

    // Advantages Section
    advantages_title: "6 ventajas",
    advantage1_title: "Personaliza tu juego",
    advantage1_desc: "Elige entre el modo de 90 o 75 bolas, la velocidad y diferentes voces o idiomas",
    advantage2_title: "Cartones imprimibles o app",
    advantage2_desc: "Imprime los cartones o descarga nuestra app de cartones para jugar con tu propio dispositivo. ¡Juega con tantos cartones como quieras!",
    advantage3_title: "Escanea y verifica el cartón",
    advantage3_desc: "Cada cartón tiene un código QR único para verificación instantánea. Escanea cualquier cartón para verificar al instante si es un BINGO ganador",
    advantage4_title: "Soporte de pantalla externa",
    advantage4_desc: "Puedes ver el tablero en televisión si tienes conexión Airplay o incluso por cable",
    advantage5_title: "Voces reales",
    advantage5_desc: "Nuestro amigo Adam hace bromas y rimas para que te diviertas mucho con tu familia o amigos",
    advantage6_title: "Crea tus propias rimas",
    advantage6_desc: "Si prefieres tu propia voz, graba los números y las rimas... ¡va a ser divertido!",

    // QR Tutorial Section
    qr_title: "Cómo funciona el código QR",
    qr_subtitle: "Escanea códigos QR en tus cartones de bingo para verificación instantánea",
    qr_step1_title: "1. Escanear código QR",
    qr_step1_desc: "Apunta tu cámara al código QR de tu cartón de bingo",
    qr_step2_title: "2. Aparece el cartón",
    qr_step2_desc: "Tu cartón de bingo aparece automáticamente en la app",
    qr_step3_title: "3. Verificación automática",
    qr_step3_desc: "La app verifica automáticamente si tienes BINGO",

    // Both Apps Section
    apps_title: "Obtén ambas apps",
    apps_subtitle: "Todo lo que necesitas para disfrutar el bingo en casa",
    main_app_title: "Bingo!!",
    main_app_desc: "El mejor bingo digital con voces, animaciones y personalización",

    // Cards Section
    cards_title: "Consigue tus cartones",
    cards_app_title: "Cartones de Bingo!!",
    cards_app_desc: "Obtén cartones de bingo digitales en tu dispositivo con nuestra app",

    // Team Section
    team_title: "Conoce nuestro equipo",
    team_subtitle: "Los talentosos desarrolladores y diseñadores detrás de tu app de bingo favorita",
    team_ios: "Desarrollador iOS",
    team_android: "Desarrollador Android",
    team_designer: "Diseñador UX/UI",
    team_linkedin: "Perfil de LinkedIn →",

    // Navigation
    nav_apps: "Apps",
    nav_advantages: "Ventajas",
    nav_qr: "Tutorial QR",
    nav_reviews: "Reseñas",
    nav_faq: "Preguntas",
    nav_team: "Equipo",

    // Footer
    footer_rights: "© 2024 Wombat Apps. Todos los derechos reservados.",
    footer_tagline: "¡El mejor Bingo digital!",

    // Missing translations
    guaranteed_fun: "¡Diversión garantizada!",
    download_free: "¡Descarga gratis!",
    available_platforms: "Disponible en todas las plataformas",
    downloads_count: "descargas",
    privacy_policy_title: "Política de Privacidad",
    privacy_policy_subtitle: "Política de Privacidad para las Apps de Bingo!!",

    // Privacy Policy Content
    privacy_intro: "Álvaro Murillo del Puerto, José Balanza y Laura Abajo Díaz construyeron y diseñaron Bingo!!, Bingo!! Lite y Bingo!! Cards. Bingo!! es una app de pago pero Bingo!! Lite y Bingo!! Cards son compras dentro de la aplicación. Esta página se utiliza para informar a los visitantes sobre nuestras políticas con respecto a la recopilación, uso y divulgación de Información Personal si alguien decidió utilizar nuestro Servicio. Si elige utilizar nuestro Servicio, entonces acepta la recopilación y el uso de información en relación con esta política. La Información Personal que recopilamos se utiliza para proporcionar y mejorar el Servicio. No utilizaremos ni compartiremos su información con nadie excepto como se describe en esta Política de Privacidad.",
    privacy_info_collection_title: "Recopilación y Uso de Información",
    privacy_info_collection_content: "Para una mejor experiencia, mientras utiliza nuestro Servicio, podemos requerirle que nos proporcione cierta información de identificación personal, incluyendo pero no limitándose a ID DE PUBLICIDAD. La información que solicitamos será retenida por nosotros y utilizada como se describe en esta política de privacidad. Los anuncios mostrados en las apps Bingo!!, Bingo!! Lite y Bingo!! Cards cumplen con las Políticas de Anuncios de Apple Store y Privacidad de Datos del Usuario. Las apps sí utilizan servicios de terceros que pueden recopilar información utilizada para identificarle. Enlace a la política de privacidad de proveedores de servicios de terceros utilizados por las apps:",
    apple_privacy_policy: "Política de Privacidad de Apple",
    privacy_log_data_title: "Datos de Registro",
    privacy_log_data_content: "Queremos informarle que cada vez que utiliza nuestro Servicio, en caso de error en las apps recopilamos datos e información (a través de productos de terceros) en su teléfono llamados Datos de Registro. Estos Datos de Registro pueden incluir información como la dirección de Protocolo de Internet (\"IP\") de su dispositivo, nombre del dispositivo, versión del sistema operativo, la configuración de la app al utilizar nuestro Servicio, la hora y fecha de su uso del Servicio, y otras estadísticas.",
    privacy_cookies_title: "Cookies",
    privacy_cookies_content: "Las cookies son archivos con una pequeña cantidad de datos que se utilizan comúnmente como identificadores únicos anónimos. Estos se envían a su navegador desde los sitios web que visita y se almacenan en la memoria interna de su dispositivo. Este Servicio no utiliza estas \"cookies\" explícitamente. Sin embargo, las apps pueden usar código y bibliotecas de terceros que utilizan \"cookies\" para recopilar información y mejorar sus servicios. Tiene la opción de aceptar o rechazar estas cookies y saber cuándo se está enviando una cookie a su dispositivo. Si elige rechazar nuestras cookies, es posible que no pueda utilizar algunas partes de este Servicio.",
    privacy_service_providers_title: "Proveedores de Servicios",
    privacy_service_providers_content: "Podemos emplear empresas e individuos de terceros debido a las siguientes razones: Para facilitar nuestro Servicio; Para proporcionar el Servicio en nuestro nombre; Para realizar servicios relacionados con el Servicio; Para ayudarnos a analizar cómo se utiliza nuestro Servicio. Queremos informar a los usuarios de este Servicio que estos terceros tienen acceso a su Información Personal. La razón es realizar las tareas asignadas a ellos en nuestro nombre. Sin embargo, están obligados a no divulgar o utilizar la información para ningún otro propósito.",
    privacy_security_title: "Seguridad",
    privacy_security_content: "Valoramos su confianza al proporcionarnos su Información Personal, por lo que nos esforzamos por utilizar medios comercialmente aceptables para protegerla. Pero recuerde que ningún método de transmisión por internet, o método de almacenamiento electrónico es 100% seguro y confiable, y no podemos garantizar su seguridad absoluta.",
    privacy_links_title: "Enlaces a Otros Sitios",
    privacy_links_content: "Este Servicio puede contener enlaces a otros sitios. Si hace clic en un enlace de terceros, será dirigido a ese sitio. Tenga en cuenta que estos sitios externos no son operados por nosotros. Por lo tanto, le recomendamos encarecidamente que revise la Política de Privacidad de estos sitios web. No tenemos control sobre y no asumimos responsabilidad por el contenido, políticas de privacidad, o prácticas de sitios o servicios de terceros.",
    privacy_children_title: "Privacidad de los Niños",
    privacy_children_content: "Estos Servicios no se dirigen a personas menores de 16 años. No recopilamos a sabiendas información de identificación personal de niños menores de 16 años. En el caso de que descubramos que un niño menor de 16 años nos ha proporcionado información personal, la eliminamos inmediatamente de nuestros servidores. Si usted es padre o tutor y sabe que su hijo nos ha proporcionado información personal, póngase en contacto con nosotros para que podamos tomar las acciones necesarias.",
    privacy_changes_title: "Cambios a Esta Política de Privacidad",
    privacy_changes_content: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Por lo tanto, se le aconseja revisar esta página periódicamente para cualquier cambio. Le notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página. Estos cambios son efectivos inmediatamente después de que se publiquen en esta página.",
    privacy_contact_title: "Contáctanos",
    privacy_contact_content: "Si tiene alguna pregunta o sugerencia sobre nuestra Política de Privacidad, no dude en contactarnos.",
    contact_email: "Correo electrónico:",
    contact_website: "Sitio web:",

    // Reviews Section
    reviews_title: "Lo que dicen nuestros usuarios",
    reviews_subtitle: "Reseñas reales de jugadores de Bingo satisfechos de todo el mundo",
    review1_text: "¡Excelente app! 3 modos de vista diferentes, muestra todos los números cantados, los últimos 4 números están resaltados en caso de llamada tardía y muestra el número actual ampliado. Puedes grabar tus propias llamadas de números y cambiar la frecuencia. Horas de diversión",
    review1_author: "RBukes",
    review1_source: "App Store",
    review2_text: "¡Un juego genial! Lo hemos conectado con la tele y se veía muy bien! Genera cartones con QR para poder comprobar las líneas y bingos fácilmente. ¡Muy buena tarde de bingo en familia! ¡Muy recomendable!",
    review2_author: "LyJ!",
    review2_source: "App Store",
    review3_text: "Excelente app de bingo. Hace todo lo que necesitas excepto decirte cuántos números han sido cantados",
    review3_author: "Koolkevin7",
    review3_source: "App Store",
    review4_text: "Mola tela, muy bien hecha y un diseño impecable.",
    review4_author: "Alberto BG",
    review4_source: "App Store",
    review5_text: "Con la nueva opción de 2 segundos de tiempo de llamada, la app ahora es nuestra favorita",
    review5_author: "dmaa670",
    review5_source: "App Store",

    // FAQ Section
    faq_title: "Preguntas Frecuentes",
    faq_subtitle: "Encuentra respuestas a preguntas comunes sobre nuestras apps de Bingo",
    faq_q1: "¿Cómo juego Bingo con amigos y familia?",
    faq_a1: "Descarga la app principal Bingo!! en un dispositivo para actuar como locutor. Todos los demás pueden usar cartones impresos o descargar la app Cartones de Bingo!! para obtener cartones digitales en sus teléfonos o tablets.",
    faq_q2: "¿Cuál es la diferencia entre Bingo de 75 y 90 bolas?",
    faq_a2: "El Bingo de 75 bolas usa números del 1-75 con cartones de 5x5, mientras que el Bingo de 90 bolas usa números del 1-90 con cartones de 9x3. Puedes elegir cualquier modo en la configuración de la app.",
    faq_q3: "¿Puedo personalizar las voces y el idioma?",
    faq_a3: "¡Sí! La app soporta español, inglés y francés con diferentes opciones de voz. También puedes grabar tu propia voz personalizada y rimas para una experiencia única.",
    faq_q4: "¿Cómo funciona la verificación por código QR?",
    faq_a4: "Cada cartón de bingo tiene un código QR único. Simplemente escanea el código con la cámara de la app principal para verificar instantáneamente si el cartón tiene un patrón BINGO ganador.",
    faq_q5: "¿Puedo mostrar el juego en una TV o pantalla más grande?",
    faq_a5: "¡Por supuesto! Puedes transmitir el tablero de bingo a una pantalla externa usando AirPlay (para dispositivos Apple) o conectar por cable para mostrar en cualquier TV o monitor.",
    faq_q6: "¿Cuántos cartones puede tener cada jugador?",
    faq_a6: "Cada jugador puede jugar con tantos cartones de bingo como quiera simultáneamente, ya sea usando cartones impresos o la app digital Cartones de Bingo!! ¡No hay límites!",
    faq_q7: "¿Es la app adecuada para todas las edades?",
    faq_a7: "¡Sí! Nuestras apps de Bingo son familiares y perfectas para jugadores de todas las edades. Las voces atractivas y animaciones lo hacen divertido para todos.",
    faq_q8: "¿Necesito conexión a internet para jugar?",
    faq_a8: "No, una vez descargada, puedes jugar Bingo sin conexión con familia y amigos en la misma ubicación. No se requiere conexión a internet durante el juego.",

    // Accessibility
    skip_to_content: "Saltar al contenido principal",
    toggle_menu: "Alternar menú de navegación",
    previous_review: "Reseña anterior",
    next_review: "Siguiente reseña",
    customer_reviews: "Reseñas de clientes",
  },

  fr: {
    // SEO Meta Tags
    meta_title: "Bingo!! - La Meilleure App de Bingo pour iOS et Android",
    meta_description: "Bingo!! est la meilleure app de bingo pour iOS et Android. Jouez au bingo partout avec appel automatique, vérification QR et de beaux cartons.",
    meta_keywords: "app bingo, appeler bingo, jeu de bingo, cartons de bingo, machine à bingo, jouer bingo, bingo iOS, bingo Android",
    og_title: "Bingo!! - La Meilleure App de Bingo",
    og_description: "Jouez au bingo partout avec appel automatique des numéros, vérification QR et de beaux cartons. Disponible sur iOS et Android.",

    // Header
    title: "Bingo!! - La meilleure machine à Bingo !",
    headline: "La meilleure machine à Bingo !",
    subtitle: "Vivez des soirées bingo mémorables à la maison en famille et entre amis!",

    // Advantages Section
    advantages_title: "6 avantages",
    advantage1_title: "Personnalisez votre jeu",
    advantage1_desc: "Choisissez entre le mode 90 ou 75 boules, la vitesse et différentes voix ou langues",
    advantage2_title: "Cartons imprimables ou app",
    advantage2_desc: "Imprimez les cartons ou téléchargez notre app de cartons pour jouer avec votre propre appareil. Jouez avec autant de cartons que vous voulez !",
    advantage3_title: "Scannez et vérifiez le carton",
    advantage3_desc: "Chaque carton a un code QR unique pour vérification instantanée. Scannez n'importe quel carton pour vérifier instantanément si c'est un BINGO gagnant",
    advantage4_title: "Support écran externe",
    advantage4_desc: "Vous pouvez voir le plateau à la télévision si vous avez une connexion Airplay ou même par câble",
    advantage5_title: "Vraies voix",
    advantage5_desc: "Notre ami Adam fait des blagues et des rimes pour que vous passiez un excellent moment en famille ou entre amis",
    advantage6_title: "Créez vos propres rimes",
    advantage6_desc: "Si vous préférez votre propre voix, enregistrez les numéros et les rimes... ça va être amusant !",

    // QR Tutorial Section
    qr_title: "Comment fonctionne le code QR",
    qr_subtitle: "Scannez les codes QR sur vos cartons de bingo pour une gestion numérique instantanée et un jeu automatique",
    qr_step1_title: "1. Scanner le code QR",
    qr_step1_desc: "Dirigez votre appareil photo vers le code QR de votre carton de bingo",
    qr_step2_title: "2. Le carton apparaît",
    qr_step2_desc: "Votre carton de bingo apparaît automatiquement dans l'app",
    qr_step3_title: "3. Jouer automatiquement",
    qr_step3_desc: "Commencez à jouer avec marquage automatique des numéros",

    // Both Apps Section
    apps_title: "Obtenez les deux apps",
    apps_subtitle: "Tout ce qu'il faut pour profiter du bingo à la maison",
    main_app_title: "Bingo !!",
    main_app_desc: "La meilleure machine à bingo avec voix, animations et personnalisation",

    // Cards Section
    cards_title: "Obtenez vos cartons",
    cards_app_title: "Cartons de Bingo !!",
    cards_app_desc: "Obtenez des cartons de bingo numériques sur votre appareil avec notre app complémentaire",

    // Team Section
    team_title: "Rencontrez notre équipe",
    team_subtitle: "Les talentueux développeurs et designers derrière votre app de bingo préférée",
    team_ios: "Développeur iOS",
    team_android: "Développeur Android",
    team_designer: "Designer UX/UI",
    team_linkedin: "Profil LinkedIn →",

    // Navigation
    nav_apps: "Apps",
    nav_advantages: "Avantages",
    nav_qr: "Tutoriel QR",
    nav_reviews: "Avis",
    nav_faq: "FAQ",
    nav_team: "Équipe",

    // Footer
    footer_rights: "© 2024 Wombat Apps. Tous droits réservés.",
    footer_tagline: "La meilleure machine à Bingo !",

    // Missing translations
    guaranteed_fun: "Plaisir garanti !",
    download_free: "Télécharger gratuitement !",
    available_platforms: "Disponible sur toutes les plateformes",
    downloads_count: "téléchargements",
    privacy_policy_title: "Politique de Confidentialité",
    privacy_policy_subtitle: "Politique de confidentialité pour les Apps Bingo!!",

    // Privacy Policy Content
    privacy_intro: "Álvaro Murillo del Puerto, José Balanza et Laura Abajo Díaz ont construit et conçu Bingo!!, Bingo!! Lite et Bingo!! Cards. Bingo!! est une app payante mais Bingo!! Lite et Bingo!! Cards sont des achats intégrés. Cette page sert à informer les visiteurs de nos politiques concernant la collecte, l'utilisation et la divulgation d'informations personnelles si quelqu'un décide d'utiliser notre Service. Si vous choisissez d'utiliser notre Service, alors vous acceptez la collecte et l'utilisation d'informations en relation avec cette politique. Les Informations Personnelles que nous collectons sont utilisées pour fournir et améliorer le Service. Nous n'utiliserons pas ou ne partagerons pas vos informations avec quiconque sauf comme décrit dans cette Politique de Confidentialité.",
    privacy_info_collection_title: "Collecte et Utilisation d'Informations",
    privacy_info_collection_content: "Pour une meilleure expérience, lors de l'utilisation de notre Service, nous pouvons vous demander de nous fournir certaines informations d'identification personnelle, y compris mais non limité à l'ID PUBLICITAIRE. Les informations que nous demandons seront conservées par nous et utilisées comme décrit dans cette politique de confidentialité. Les publicités affichées dans les apps Bingo!!, Bingo!! Lite et Bingo!! Cards respectent les Politiques Publicitaires de l'Apple Store et la Confidentialité des Données Utilisateur. Les apps utilisent des services tiers qui peuvent collecter des informations utilisées pour vous identifier. Lien vers la politique de confidentialité des fournisseurs de services tiers utilisés par les apps :",
    apple_privacy_policy: "Politique de Confidentialité Apple",
    privacy_log_data_title: "Données de Journal",
    privacy_log_data_content: "Nous souhaitons vous informer que chaque fois que vous utilisez notre Service, en cas d'erreur dans les apps nous collectons des données et informations (via des produits tiers) sur votre téléphone appelées Données de Journal. Ces Données de Journal peuvent inclure des informations telles que l'adresse de Protocole Internet (\"IP\") de votre appareil, le nom de l'appareil, la version du système d'exploitation, la configuration de l'app lors de l'utilisation de notre Service, l'heure et la date de votre utilisation du Service, et d'autres statistiques.",
    privacy_cookies_title: "Cookies",
    privacy_cookies_content: "Les cookies sont des fichiers contenant une petite quantité de données qui sont couramment utilisés comme identifiants uniques anonymes. Ils sont envoyés à votre navigateur depuis les sites web que vous visitez et sont stockés dans la mémoire interne de votre appareil. Ce Service n'utilise pas ces \"cookies\" explicitement. Cependant, les apps peuvent utiliser du code et des bibliothèques tierces qui utilisent des \"cookies\" pour collecter des informations et améliorer leurs services. Vous avez la possibilité d'accepter ou de refuser ces cookies et de savoir quand un cookie est envoyé à votre appareil. Si vous choisissez de refuser nos cookies, vous pourriez ne pas pouvoir utiliser certaines parties de ce Service.",
    privacy_service_providers_title: "Fournisseurs de Services",
    privacy_service_providers_content: "Nous pouvons employer des entreprises et individus tiers pour les raisons suivantes : Pour faciliter notre Service ; Pour fournir le Service en notre nom ; Pour effectuer des services liés au Service ; Pour nous aider à analyser comment notre Service est utilisé. Nous souhaitons informer les utilisateurs de ce Service que ces tiers ont accès à vos Informations Personnelles. La raison est d'effectuer les tâches qui leur sont assignées en notre nom. Cependant, ils sont obligés de ne pas divulguer ou utiliser les informations à d'autres fins.",
    privacy_security_title: "Sécurité",
    privacy_security_content: "Nous valorisons votre confiance en nous fournissant vos Informations Personnelles, c'est pourquoi nous nous efforçons d'utiliser des moyens commercialement acceptables pour les protéger. Mais rappelez-vous qu'aucune méthode de transmission sur internet, ou méthode de stockage électronique n'est sûre et fiable à 100%, et nous ne pouvons garantir sa sécurité absolue.",
    privacy_links_title: "Liens vers d'Autres Sites",
    privacy_links_content: "Ce Service peut contenir des liens vers d'autres sites. Si vous cliquez sur un lien tiers, vous serez dirigé vers ce site. Notez que ces sites externes ne sont pas exploités par nous. Par conséquent, nous vous conseillons fortement de consulter la Politique de Confidentialité de ces sites web. Nous n'avons aucun contrôle sur et n'assumons aucune responsabilité pour le contenu, les politiques de confidentialité, ou les pratiques de sites ou services tiers.",
    privacy_children_title: "Confidentialité des Enfants",
    privacy_children_content: "Ces Services ne s'adressent à personne de moins de 16 ans. Nous ne collectons pas sciemment d'informations d'identification personnelle d'enfants de moins de 16 ans. Dans le cas où nous découvrons qu'un enfant de moins de 16 ans nous a fourni des informations personnelles, nous les supprimons immédiatement de nos serveurs. Si vous êtes parent ou tuteur et que vous savez que votre enfant nous a fourni des informations personnelles, veuillez nous contacter afin que nous puissions prendre les mesures nécessaires.",
    privacy_changes_title: "Modifications de Cette Politique de Confidentialité",
    privacy_changes_content: "Nous pouvons mettre à jour notre Politique de Confidentialité de temps à autre. Ainsi, il vous est conseillé de consulter cette page périodiquement pour tout changement. Nous vous informerons de tout changement en publiant la nouvelle Politique de Confidentialité sur cette page. Ces changements sont effectifs immédiatement après leur publication sur cette page.",
    privacy_contact_title: "Nous Contacter",
    privacy_contact_content: "Si vous avez des questions ou suggestions concernant notre Politique de Confidentialité, n'hésitez pas à nous contacter.",
    contact_email: "Email :",
    contact_website: "Site web :",

    // Reviews Section
    reviews_title: "Ce que disent nos utilisateurs",
    reviews_subtitle: "Vraies critiques de joueurs de Bingo satisfaits du monde entier",
    review1_text: "Excellente app ! 3 modes de vue différents, affiche tous les numéros tirés, les 4 derniers numéros appelés sont surlignés en cas d'appel tardif et affiche le numéro actuel agrandi. Peut enregistrer vos propres appels de numéros et changer la fréquence. Des heures de plaisir",
    review1_author: "RBukes",
    review1_source: "App Store",
    review2_text: "Excellent jeu ! Nous l'avons connecté à la télé et c'était superbe ! Il génère des cartons avec codes QR pour vérifier facilement les lignes et bingos. Excellent après-midi bingo en famille ! Très recommandé !",
    review2_author: "LyJ!",
    review2_source: "App Store",
    review3_text: "Excellente app de bingo. Fait tout ce dont vous avez besoin sauf vous dire combien de numéros ont été appelés",
    review3_author: "Koolkevin7",
    review3_source: "App Store",
    review4_text: "Fantastique, très bien réalisée avec un design impeccable.",
    review4_author: "Alberto BG",
    review4_source: "App Store",
    review5_text: "Avec la nouvelle option de 2 secondes de temps d'appel, l'app est maintenant notre préférée",
    review5_author: "dmaa670",
    review5_source: "App Store",

    // FAQ Section
    faq_title: "Questions Fréquemment Posées",
    faq_subtitle: "Trouvez des réponses aux questions courantes sur nos apps Bingo",
    faq_q1: "Comment jouer au Bingo avec mes amis et ma famille ?",
    faq_a1: "Téléchargez l'app principale Bingo!! sur un appareil pour agir comme annonceur. Tous les autres peuvent utiliser des cartons imprimés ou télécharger l'app Cartons de Bingo!! pour obtenir des cartons numériques sur leurs téléphones ou tablettes.",
    faq_q2: "Quelle est la différence entre le Bingo à 75 et 90 boules ?",
    faq_a2: "Le Bingo à 75 boules utilise les numéros 1-75 avec des cartons 5x5, tandis que le Bingo à 90 boules utilise les numéros 1-90 avec des cartons 9x3. Vous pouvez choisir n'importe quel mode dans les paramètres de l'app.",
    faq_q3: "Puis-je personnaliser les voix et la langue ?",
    faq_a3: "Oui ! L'app supporte le français, l'anglais et l'espagnol avec différentes options de voix. Vous pouvez aussi enregistrer votre propre voix personnalisée et rimes pour une expérience unique.",
    faq_q4: "Comment fonctionne la vérification par code QR ?",
    faq_a4: "Chaque carton de bingo a un code QR unique. Scannez simplement le code avec l'appareil photo de l'app principale pour vérifier instantanément si le carton a un motif BINGO gagnant.",
    faq_q5: "Puis-je afficher le jeu sur une TV ou un écran plus grand ?",
    faq_a5: "Absolument ! Vous pouvez diffuser le plateau de bingo sur un écran externe en utilisant AirPlay (pour les appareils Apple) ou connecter par câble pour afficher sur n'importe quel TV ou moniteur.",
    faq_q6: "Combien de cartons chaque joueur peut-il avoir ?",
    faq_a6: "Chaque joueur peut jouer avec autant de cartons de bingo qu'il le souhaite simultanément, que ce soit en utilisant des cartons imprimés ou l'app numérique Cartons de Bingo!! Il n'y a pas de limites !",
    faq_q7: "L'app convient-elle à tous les âges ?",
    faq_a7: "Oui ! Nos apps Bingo sont familiales et parfaites pour les joueurs de tous âges. Les voix engageantes et animations le rendent amusant pour tout le monde.",
    faq_q8: "Ai-je besoin d'une connexion internet pour jouer ?",
    faq_a8: "Non, une fois téléchargée, vous pouvez jouer au Bingo hors ligne avec la famille et les amis au même endroit. Aucune connexion internet requise pendant le jeu.",

    // Accessibility
    skip_to_content: "Passer au contenu principal",
    toggle_menu: "Basculer le menu de navigation",
    previous_review: "Avis précédent",
    next_review: "Avis suivant",
    customer_reviews: "Avis clients",
  },

  pt: {
    // SEO Meta Tags
    meta_title: "Bingo!! - O Melhor App de Bingo para iOS e Android",
    meta_description: "Bingo!! é o melhor app de bingo para iOS e Android. Jogue bingo em qualquer lugar com sorteio automático de números, verificação por QR code e cartelas lindas.",
    meta_keywords: "app de bingo, sorteador de bingo, jogo de bingo, cartelas de bingo, máquina de bingo, jogar bingo, bingo iOS, bingo Android",
    og_title: "Bingo!! - O Melhor App de Bingo",
    og_description: "Jogue bingo em qualquer lugar com sorteio automático de números, verificação por QR code e cartelas lindas. Disponível para iOS e Android.",

    // Header
    title: "Bingo!! - A melhor máquina de Bingo!",
    headline: "A melhor máquina de Bingo!",
    subtitle: "Crie noites de bingo inesquecíveis em casa com família e amigos!",

    // Advantages Section
    advantages_title: "6 vantagens",
    advantage1_title: "Personalize seu jogo",
    advantage1_desc: "Escolha entre o modo de 90 ou 75 bolas, a velocidade e diferentes vozes ou idiomas",
    advantage2_title: "Cartelas impressas ou app",
    advantage2_desc: "Imprima as cartelas ou baixe nosso app de cartelas para jogar com seu próprio dispositivo. Jogue com quantas cartelas quiser!",
    advantage3_title: "Escaneie e verifique a cartela",
    advantage3_desc: "Cada cartela tem um QR code único para verificação instantânea. Escaneie qualquer cartela para verificar instantaneamente se é um BINGO vencedor",
    advantage4_title: "Suporte a tela externa",
    advantage4_desc: "Você pode ver o painel na televisão se tiver conexão Airplay ou até mesmo por cabo",
    advantage5_title: "Vozes reais",
    advantage5_desc: "Nosso amigo Adam faz piadas e rimas para você se divertir muito com sua família ou amigos",
    advantage6_title: "Crie suas próprias rimas",
    advantage6_desc: "Se preferir sua própria voz, grave os números e as rimas... vai ser muito divertido!",

    // QR Tutorial Section
    qr_title: "Como o QR code funciona",
    qr_subtitle: "Escaneie QR codes nas suas cartelas de bingo para gerenciamento digital instantâneo e jogo automático",
    qr_step1_title: "1. Escanear QR code",
    qr_step1_desc: "Aponte sua câmera para o QR code na sua cartela de bingo",
    qr_step2_title: "2. Cartela aparece",
    qr_step2_desc: "Sua cartela de bingo aparece automaticamente no app",
    qr_step3_title: "3. Jogar automaticamente",
    qr_step3_desc: "Comece a jogar com marcação automática dos números",

    // Both Apps Section
    apps_title: "Baixe os dois apps",
    apps_subtitle: "Tudo que você precisa para a experiência perfeita de bingo em casa",
    main_app_title: "Bingo!!",
    main_app_desc: "A melhor máquina de bingo com vozes, animações e personalização",

    // Cards Section
    cards_title: "Obtenha suas cartelas",
    cards_app_title: "Cartelas de Bingo!!",
    cards_app_desc: "Obtenha cartelas de bingo digitais no seu dispositivo com nosso app complementar",

    // Team Section
    team_title: "Conheça nossa equipe",
    team_subtitle: "Os talentosos desenvolvedores e designers por trás do seu app de bingo favorito",
    team_ios: "Desenvolvedor iOS",
    team_android: "Desenvolvedor Android",
    team_designer: "Designer UX/UI",
    team_linkedin: "Perfil LinkedIn →",

    // Navigation
    nav_apps: "Apps",
    nav_advantages: "Vantagens",
    nav_qr: "Tutorial QR",
    nav_reviews: "Avaliações",
    nav_faq: "FAQ",
    nav_team: "Equipe",

    // Footer
    footer_rights: "© 2024 Wombat Apps. Todos os direitos reservados.",
    footer_tagline: "A melhor máquina de Bingo!",

    // Missing translations
    guaranteed_fun: "Diversão garantida!",
    download_free: "Baixe grátis!",
    available_platforms: "Disponível em todas as plataformas",
    downloads_count: "downloads",
    privacy_policy_title: "Política de Privacidade",
    privacy_policy_subtitle: "Política de Privacidade para os Apps Bingo!!",

    // Privacy Policy Content
    privacy_intro: "Álvaro Murillo del Puerto, José Balanza e Laura Abajo Díaz construíram e projetaram Bingo!!, Bingo!! Lite e Bingo!! Cards. Bingo!! é um app pago, mas Bingo!! Lite e Bingo!! Cards são compras dentro do aplicativo. Esta página é usada para informar os visitantes sobre nossas políticas quanto à coleta, uso e divulgação de Informações Pessoais se alguém decidir usar nosso Serviço. Se você optar por usar nosso Serviço, então concorda com a coleta e uso de informações em relação a esta política. As Informações Pessoais que coletamos são usadas para fornecer e melhorar o Serviço. Não usaremos ou compartilharemos suas informações com ninguém, exceto conforme descrito nesta Política de Privacidade.",
    privacy_info_collection_title: "Coleta e Uso de Informações",
    privacy_info_collection_content: "Para uma melhor experiência, ao usar nosso Serviço, podemos solicitar que você nos forneça certas informações de identificação pessoal, incluindo, mas não se limitando a ID DE PUBLICIDADE. As informações que solicitamos serão retidas por nós e usadas conforme descrito nesta política de privacidade. Os anúncios exibidos nos apps Bingo!!, Bingo!! Lite e Bingo!! Cards estão em conformidade com as Políticas de Anúncios da Apple Store e Privacidade de Dados do Usuário. Os apps usam serviços de terceiros que podem coletar informações usadas para identificá-lo. Link para a política de privacidade dos provedores de serviços de terceiros usados pelos apps:",
    apple_privacy_policy: "Política de Privacidade da Apple",
    privacy_log_data_title: "Dados de Registro",
    privacy_log_data_content: "Queremos informá-lo que sempre que você usa nosso Serviço, em caso de erro nos apps, coletamos dados e informações (através de produtos de terceiros) em seu telefone chamados Dados de Registro. Esses Dados de Registro podem incluir informações como o endereço de Protocolo de Internet (\"IP\") do seu dispositivo, nome do dispositivo, versão do sistema operacional, a configuração do app ao utilizar nosso Serviço, a hora e data do seu uso do Serviço, e outras estatísticas.",
    privacy_cookies_title: "Cookies",
    privacy_cookies_content: "Cookies são arquivos com uma pequena quantidade de dados que são comumente usados como identificadores únicos anônimos. Eles são enviados para o seu navegador pelos sites que você visita e são armazenados na memória interna do seu dispositivo. Este Serviço não usa esses \"cookies\" explicitamente. No entanto, os apps podem usar código e bibliotecas de terceiros que usam \"cookies\" para coletar informações e melhorar seus serviços. Você tem a opção de aceitar ou recusar esses cookies e saber quando um cookie está sendo enviado ao seu dispositivo. Se você optar por recusar nossos cookies, pode não conseguir usar algumas partes deste Serviço.",
    privacy_service_providers_title: "Provedores de Serviços",
    privacy_service_providers_content: "Podemos empregar empresas e indivíduos terceirizados pelas seguintes razões: Para facilitar nosso Serviço; Para fornecer o Serviço em nosso nome; Para realizar serviços relacionados ao Serviço; Para nos ajudar a analisar como nosso Serviço é usado. Queremos informar os usuários deste Serviço que esses terceiros têm acesso às suas Informações Pessoais. O motivo é realizar as tarefas atribuídas a eles em nosso nome. No entanto, eles são obrigados a não divulgar ou usar as informações para qualquer outro fim.",
    privacy_security_title: "Segurança",
    privacy_security_content: "Valorizamos sua confiança em nos fornecer suas Informações Pessoais, por isso nos esforçamos para usar meios comercialmente aceitáveis de protegê-las. Mas lembre-se que nenhum método de transmissão pela internet, ou método de armazenamento eletrônico é 100% seguro e confiável, e não podemos garantir sua segurança absoluta.",
    privacy_links_title: "Links para Outros Sites",
    privacy_links_content: "Este Serviço pode conter links para outros sites. Se você clicar em um link de terceiros, será direcionado para esse site. Observe que esses sites externos não são operados por nós. Portanto, recomendamos fortemente que você revise a Política de Privacidade desses sites. Não temos controle sobre e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites ou serviços de terceiros.",
    privacy_children_title: "Privacidade das Crianças",
    privacy_children_content: "Estes Serviços não se dirigem a menores de 16 anos. Não coletamos intencionalmente informações de identificação pessoal de crianças menores de 16 anos. Caso descubramos que uma criança menor de 16 anos nos forneceu informações pessoais, excluímos imediatamente essas informações de nossos servidores. Se você é pai ou responsável e sabe que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos tomar as medidas necessárias.",
    privacy_changes_title: "Alterações nesta Política de Privacidade",
    privacy_changes_content: "Podemos atualizar nossa Política de Privacidade de tempos em tempos. Assim, você é aconselhado a revisar esta página periodicamente para quaisquer alterações. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Essas alterações entram em vigor imediatamente após serem publicadas nesta página.",
    privacy_contact_title: "Entre em Contato",
    privacy_contact_content: "Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contatar.",
    contact_email: "E-mail:",
    contact_website: "Site:",

    // Reviews Section
    reviews_title: "O que nossos usuários dizem",
    reviews_subtitle: "Avaliações reais de jogadores de Bingo satisfeitos ao redor do mundo",
    review1_text: "App excelente! 3 modos de visualização diferentes, mostra todos os números sorteados, os últimos 4 números chamados são destacados em caso de chamada atrasada e mostra o número atual ampliado. Pode gravar suas próprias chamadas de números e alterar a frequência. Horas de diversão",
    review1_author: "RBukes",
    review1_source: "App Store",
    review2_text: "Jogo ótimo! Conectamos à TV e ficou incrível! Gera cartelas com códigos QR para verificar facilmente linhas e bingos. Ótima tarde de bingo em família! Muito recomendado!",
    review2_author: "LyJ!",
    review2_source: "App Store",
    review3_text: "Excelente app de bingo. Faz tudo que você precisa, exceto dizer quantos números foram chamados",
    review3_author: "Koolkevin7",
    review3_source: "App Store",
    review4_text: "Incrível, muito bem feito com um design impecável.",
    review4_author: "Alberto BG",
    review4_source: "App Store",
    review5_text: "Com a nova opção de tempo de chamada de 2 segundos, o app agora é nosso favorito",
    review5_author: "dmaa670",
    review5_source: "App Store",

    // FAQ Section
    faq_title: "Perguntas Frequentes",
    faq_subtitle: "Encontre respostas para perguntas comuns sobre nossos apps de Bingo",
    faq_q1: "Como jogo Bingo com amigos e família?",
    faq_a1: "Baixe o app principal Bingo!! em um dispositivo para atuar como sorteador. Todos os outros podem usar cartelas impressas ou baixar o app Cartelas de Bingo!! para obter cartelas digitais em seus celulares ou tablets.",
    faq_q2: "Qual a diferença entre Bingo de 75 e 90 bolas?",
    faq_a2: "O Bingo de 75 bolas usa números de 1-75 com cartelas 5x5, enquanto o Bingo de 90 bolas usa números de 1-90 com cartelas 9x3. Você pode escolher qualquer modo nas configurações do app.",
    faq_q3: "Posso personalizar as vozes e o idioma?",
    faq_a3: "Sim! O app suporta português, inglês, espanhol e francês com diferentes opções de voz. Você também pode gravar sua própria voz personalizada e rimas para uma experiência única.",
    faq_q4: "Como funciona a verificação por QR code?",
    faq_a4: "Cada cartela de bingo tem um QR code único. Simplesmente escaneie o código com a câmera do app principal para verificar instantaneamente se a cartela tem um padrão BINGO vencedor.",
    faq_q5: "Posso exibir o jogo em uma TV ou tela maior?",
    faq_a5: "Com certeza! Você pode transmitir o painel de bingo para uma tela externa usando AirPlay (para dispositivos Apple) ou conectar por cabo para exibir em qualquer TV ou monitor.",
    faq_q6: "Quantas cartelas cada jogador pode ter?",
    faq_a6: "Cada jogador pode jogar com quantas cartelas de bingo quiser simultaneamente, seja usando cartelas impressas ou o app digital Cartelas de Bingo!! Não há limites!",
    faq_q7: "O app é adequado para todas as idades?",
    faq_a7: "Sim! Nossos apps de Bingo são para toda a família e perfeitos para jogadores de todas as idades. As vozes envolventes e animações tornam divertido para todos.",
    faq_q8: "Preciso de conexão com a internet para jogar?",
    faq_a8: "Não, uma vez baixado, você pode jogar Bingo offline com família e amigos no mesmo local. Não é necessária conexão com a internet durante o jogo.",

    // Accessibility
    skip_to_content: "Pular para o conteúdo principal",
    toggle_menu: "Alternar menu de navegação",
    previous_review: "Avaliação anterior",
    next_review: "Próxima avaliação",
    customer_reviews: "Avaliações de clientes",
  },

  fil: {
    // SEO Meta Tags
    meta_title: "Bingo!! - Pinakamahusay na Bingo App para sa iOS at Android",
    meta_description: "Ang Bingo!! ang pinakamahusay na bingo app para sa iOS at Android. Maglaro ng bingo kahit saan gamit ang awtomatikong pagtawag ng numero, QR verification, at magagandang card.",
    meta_keywords: "bingo app, bingo caller, laro ng bingo, bingo cards, bingo machine, maglaro ng bingo, bingo iOS, bingo Android",
    og_title: "Bingo!! - Pinakamahusay na Bingo App",
    og_description: "Maglaro ng bingo kahit saan gamit ang awtomatikong pagtawag ng numero, QR verification, at magagandang card. Available sa iOS at Android.",

    // Header
    title: "Bingo!! - Pinakamahusay na Bingo machine!",
    headline: "Pinakamahusay na Bingo machine!",
    subtitle: "Lumikha ng hindi malilimutang bingo nights sa bahay kasama ang pamilya at mga kaibigan!",

    // Advantages Section
    advantages_title: "6 na benepisyo",
    advantage1_title: "I-customize ang iyong laro",
    advantage1_desc: "Pumili sa pagitan ng 90 o 75 balls mode, ang bilis at iba't ibang boses o wika",
    advantage2_title: "Printable o cards app",
    advantage2_desc: "I-print ang mga card o i-download ang aming cards app para maglaro gamit ang sarili mong device. Maglaro ng kahit ilang card ang gusto mo!",
    advantage3_title: "I-scan ang card at i-check",
    advantage3_desc: "Bawat card ay may natatanging QR code para sa instant verification. I-scan ang kahit anong card para agad na ma-check kung ito ay panalo na BINGO",
    advantage4_title: "External screen support",
    advantage4_desc: "Maaari mong tingnan ang board sa telebisyon kung may Airplay connection ka o kahit sa pamamagitan ng cable",
    advantage5_title: "Tunay na mga boses",
    advantage5_desc: "Ang aming kaibigang si Adam ay gumagawa ng mga biro at rhymes para tawanan mo kasama ang iyong pamilya o mga kaibigan",
    advantage6_title: "Gumawa ng sarili mong rhymes",
    advantage6_desc: "Kung mas gusto mo ang sarili mong boses, i-record ang mga numero at ang mga rhymes... magiging masaya ito!",

    // QR Tutorial Section
    qr_title: "Paano gumagana ang QR code",
    qr_subtitle: "I-scan ang QR codes sa iyong bingo cards para sa instant digital card management at awtomatikong gameplay",
    qr_step1_title: "1. I-scan ang QR code",
    qr_step1_desc: "Itutok ang iyong camera sa QR code sa iyong bingo card",
    qr_step2_title: "2. Lalabas ang card",
    qr_step2_desc: "Awtomatikong lalabas ang iyong bingo card sa app",
    qr_step3_title: "3. Maglaro nang awtomatiko",
    qr_step3_desc: "Magsimulang maglaro na may awtomatikong pagmamarka ng numero",

    // Both Apps Section
    apps_title: "Kunin ang dalawang apps",
    apps_subtitle: "Lahat ng kailangan mo para sa perpektong bingo experience sa bahay",
    main_app_title: "Bingo!!",
    main_app_desc: "Ang pinakamahusay na bingo caller machine na may mga boses, animations at customization",

    // Cards Section
    cards_title: "Kunin ang iyong mga card",
    cards_app_title: "Bingo Cards!!",
    cards_app_desc: "Kumuha ng digital bingo cards sa iyong device gamit ang aming companion app",

    // Team Section
    team_title: "Kilalanin ang aming team",
    team_subtitle: "Ang mga mahuhusay na developers at designers sa likod ng iyong paboritong bingo app",
    team_ios: "iOS Developer",
    team_android: "Android Developer",
    team_designer: "UX/UI Designer",
    team_linkedin: "LinkedIn Profile →",

    // Navigation
    nav_apps: "Apps",
    nav_advantages: "Mga Benepisyo",
    nav_qr: "QR Tutorial",
    nav_reviews: "Mga Review",
    nav_faq: "FAQ",
    nav_team: "Team",

    // Footer
    footer_rights: "© 2024 Wombat Apps. Lahat ng karapatan ay nakalaan.",
    footer_tagline: "Pinakamahusay na Bingo machine!",

    // Missing translations
    guaranteed_fun: "Garantisadong saya!",
    download_free: "I-download nang libre!",
    available_platforms: "Available sa lahat ng platforms",
    downloads_count: "downloads",
    privacy_policy_title: "Patakaran sa Privacy",
    privacy_policy_subtitle: "Patakaran sa Privacy para sa Bingo!! Apps",

    // Privacy Policy Content
    privacy_intro: "Sina Álvaro Murillo del Puerto, José Balanza at Laura Abajo Díaz ang gumawa at nagdisenyo ng Bingo!!, Bingo!! Lite at Bingo!! Cards. Ang Bingo!! ay bayad na app ngunit ang Bingo!! Lite at Bingo!! Cards ay in-app purchase. Ang pahinang ito ay ginagamit upang ipaalam sa mga bisita ang aming mga patakaran tungkol sa pagkolekta, paggamit, at pagsisiwalat ng Personal na Impormasyon kung may magpasyang gumamit ng aming Serbisyo. Kung pipiliin mong gamitin ang aming Serbisyo, sumasang-ayon ka sa pagkolekta at paggamit ng impormasyon kaugnay ng patakarang ito. Ang Personal na Impormasyon na kinokolekta namin ay ginagamit para sa pagbibigay at pagpapabuti ng Serbisyo. Hindi namin gagamitin o ibabahagi ang iyong impormasyon sa sinuman maliban sa inilarawan sa Patakaran sa Privacy na ito.",
    privacy_info_collection_title: "Pagkolekta at Paggamit ng Impormasyon",
    privacy_info_collection_content: "Para sa mas magandang karanasan, habang ginagamit ang aming Serbisyo, maaari naming hilingin sa iyo na bigyan kami ng ilang personal na impormasyon, kabilang ngunit hindi limitado sa ADVERTISING ID. Ang impormasyong hinihiling namin ay papanatilihin namin at gagamitin ayon sa inilarawan sa patakarang ito sa privacy. Ang mga ad na ipinapakita sa Bingo!!, Bingo!! Lite at Bingo!! Cards apps ay sumusunod sa Apple Store Ads Policies at User Data Privacy. Ang mga apps ay gumagamit ng mga third party services na maaaring mangolekta ng impormasyong ginagamit upang kilalanin ka. Link sa patakaran sa privacy ng mga third party service providers na ginagamit ng mga apps:",
    apple_privacy_policy: "Patakaran sa Privacy ng Apple",
    privacy_log_data_title: "Log Data",
    privacy_log_data_content: "Nais naming ipaalam sa iyo na sa tuwing gagamitin mo ang aming Serbisyo, sa kaso ng error sa mga apps, nangongolekta kami ng data at impormasyon (sa pamamagitan ng third party products) sa iyong telepono na tinatawag na Log Data. Ang Log Data na ito ay maaaring magsama ng impormasyon tulad ng Internet Protocol (\"IP\") address ng iyong device, pangalan ng device, bersyon ng operating system, configuration ng app kapag ginagamit ang aming Serbisyo, oras at petsa ng iyong paggamit ng Serbisyo, at iba pang statistics.",
    privacy_cookies_title: "Cookies",
    privacy_cookies_content: "Ang Cookies ay mga file na may maliit na dami ng data na karaniwang ginagamit bilang anonymous unique identifiers. Ipinapadala ang mga ito sa iyong browser mula sa mga website na binibisita mo at naka-store sa internal memory ng iyong device. Ang Serbisyong ito ay hindi tahasang gumagamit ng mga \"cookies\" na ito. Gayunpaman, ang mga apps ay maaaring gumamit ng third party code at libraries na gumagamit ng \"cookies\" upang mangolekta ng impormasyon at mapabuti ang kanilang mga serbisyo. May opsyon kang tanggapin o tanggihan ang mga cookies na ito at malaman kung kailan ipinapadala ang cookie sa iyong device. Kung pipiliin mong tanggihan ang aming mga cookies, maaaring hindi mo magamit ang ilang bahagi ng Serbisyong ito.",
    privacy_service_providers_title: "Mga Service Providers",
    privacy_service_providers_content: "Maaari kaming mag-employ ng third-party companies at individuals dahil sa mga sumusunod na dahilan: Upang mapadali ang aming Serbisyo; Upang ibigay ang Serbisyo sa aming ngalan; Upang magsagawa ng mga serbisyong kaugnay ng Serbisyo; Upang tulungan kaming suriin kung paano ginagamit ang aming Serbisyo. Nais naming ipaalam sa mga gumagamit ng Serbisyong ito na ang mga third party na ito ay may access sa iyong Personal na Impormasyon. Ang dahilan ay upang maisagawa ang mga gawaing itinalaga sa kanila sa aming ngalan. Gayunpaman, obligado silang huwag ibunyag o gamitin ang impormasyon para sa anumang iba pang layunin.",
    privacy_security_title: "Seguridad",
    privacy_security_content: "Pinahahalagahan namin ang iyong tiwala sa pagbibigay sa amin ng iyong Personal na Impormasyon, kaya nagsisikap kaming gumamit ng mga commercially acceptable na paraan ng pagprotekta nito. Ngunit tandaan na walang paraan ng transmission sa internet, o paraan ng electronic storage na 100% secure at reliable, at hindi namin magagarantiyahan ang absolute security nito.",
    privacy_links_title: "Mga Link sa Ibang Sites",
    privacy_links_content: "Ang Serbisyong ito ay maaaring maglaman ng mga link sa ibang sites. Kung mag-click ka sa third-party link, ididirekta ka sa site na iyon. Tandaan na ang mga external sites na ito ay hindi pinapatakbo namin. Samakatuwid, mahigpit naming pinapayo na suriin mo ang Patakaran sa Privacy ng mga website na ito. Wala kaming kontrol at walang pananagutan para sa nilalaman, mga patakaran sa privacy, o mga gawi ng anumang third-party sites o services.",
    privacy_children_title: "Privacy ng mga Bata",
    privacy_children_content: "Ang mga Serbisyong ito ay hindi nakatuon sa sinumang wala pang 16 taong gulang. Hindi kami sadyang nangongolekta ng personal na impormasyon mula sa mga batang wala pang 16. Sa kaso na matuklasan namin na ang isang batang wala pang 16 ay nagbigay sa amin ng personal na impormasyon, agad naming tinatanggal ito sa aming mga server. Kung ikaw ay magulang o tagapag-alaga at alam mong nagbigay sa amin ng personal na impormasyon ang iyong anak, mangyaring makipag-ugnayan sa amin upang magawa namin ang mga kinakailangang aksyon.",
    privacy_changes_title: "Mga Pagbabago sa Patakaran sa Privacy na Ito",
    privacy_changes_content: "Maaari naming i-update ang aming Patakaran sa Privacy paminsan-minsan. Kaya, pinapayuhan kang suriin ang pahinang ito pana-panahon para sa anumang mga pagbabago. Aabisuhan ka namin sa anumang mga pagbabago sa pamamagitan ng pag-post ng bagong Patakaran sa Privacy sa pahinang ito. Ang mga pagbabagong ito ay epektibo kaagad pagkatapos mai-post sa pahinang ito.",
    privacy_contact_title: "Makipag-ugnayan sa Amin",
    privacy_contact_content: "Kung mayroon kang anumang mga katanungan o mungkahi tungkol sa aming Patakaran sa Privacy, huwag mag-atubiling makipag-ugnayan sa amin.",
    contact_email: "Email:",
    contact_website: "Website:",

    // Reviews Section
    reviews_title: "Ano ang sinasabi ng aming mga user",
    reviews_subtitle: "Tunay na mga review mula sa mga nasisiyahang Bingo players sa buong mundo",
    review1_text: "Napakagandang app! 3 iba't ibang viewing modes, ipinapakita ang lahat ng numerong na-draw, ang huling 4 na numerong tinawag ay naka-highlight kung sakaling late ang tawag at ipinapakita ang kasalukuyang numero nang pinalaki. Maaaring i-record ang sarili mong number call-outs at baguhin ang frequency ng mga tawag. Oras ng kasiyahan",
    review1_author: "RBukes",
    review1_source: "App Store",
    review2_text: "Magandang laro! Ikinonekta namin ito sa TV at napakaganda! Gumagawa ito ng mga card na may QR codes para madaling ma-check ang mga linya at bingo. Napakagandang family bingo afternoon! Highly recommended!",
    review2_author: "LyJ!",
    review2_source: "App Store",
    review3_text: "Napakagandang bingo app. Ginagawa ang lahat ng kailangan mo maliban sa sabihin kung ilan na ang numerong tinawag",
    review3_author: "Koolkevin7",
    review3_source: "App Store",
    review4_text: "Kamangha-mangha, napakagandang gawa na may walang kapintasang disenyo.",
    review4_author: "Alberto BG",
    review4_source: "App Store",
    review5_text: "Sa bagong opsyon na 2 segundo call time, ang app na ito ay paborito na namin",
    review5_author: "dmaa670",
    review5_source: "App Store",

    // FAQ Section
    faq_title: "Mga Madalas Itanong",
    faq_subtitle: "Maghanap ng mga sagot sa karaniwang mga tanong tungkol sa aming Bingo apps",
    faq_q1: "Paano ako maglalaro ng Bingo kasama ang mga kaibigan at pamilya?",
    faq_a1: "I-download ang pangunahing Bingo!! app sa isang device upang maging caller. Ang lahat ng iba ay maaaring gumamit ng printed cards o i-download ang Bingo Cards!! app upang makakuha ng digital cards sa kanilang mga telepono o tablets.",
    faq_q2: "Ano ang pagkakaiba ng 75-ball at 90-ball Bingo?",
    faq_a2: "Ang 75-ball Bingo ay gumagamit ng mga numerong 1-75 na may 5x5 cards, habang ang 90-ball Bingo ay gumagamit ng mga numerong 1-90 na may 9x3 cards. Maaari kang pumili ng alinmang mode sa app settings upang tumugma sa iyong kagustuhan.",
    faq_q3: "Maaari ko bang i-customize ang mga boses at wika?",
    faq_a3: "Oo! Ang app ay sumusuporta sa Filipino, English, Spanish, at French na may iba't ibang voice options. Maaari ka ring mag-record ng sarili mong custom na boses at rhymes para sa personalized na karanasan.",
    faq_q4: "Paano gumagana ang QR code verification?",
    faq_a4: "Bawat bingo card ay may natatanging QR code. I-scan lamang ang code gamit ang camera ng pangunahing app upang agad na ma-verify kung ang card ay may panalo na BINGO pattern.",
    faq_q5: "Maaari ko bang ipakita ang laro sa TV o mas malaking screen?",
    faq_a5: "Oo naman! Maaari mong i-cast ang bingo board sa external screen gamit ang AirPlay (para sa Apple devices) o ikonekta sa pamamagitan ng cable upang ipakita sa anumang TV o monitor.",
    faq_q6: "Ilang cards ang maaaring magkaroon ang bawat player?",
    faq_a6: "Bawat player ay maaaring maglaro ng kahit ilang bingo cards ang gusto nila nang sabay-sabay, gamit man ang printed cards o ang digital Bingo Cards!! app. Walang limitasyon!",
    faq_q7: "Ang app ba ay angkop para sa lahat ng edad?",
    faq_a7: "Oo! Ang aming Bingo apps ay family-friendly at perpekto para sa mga players ng lahat ng edad. Ang mga nakaka-enganyo na boses at animations ay nagpapasaya sa lahat.",
    faq_q8: "Kailangan ko ba ng internet connection para maglaro?",
    faq_a8: "Hindi, kapag na-download na, maaari kang maglaro ng Bingo offline kasama ang pamilya at mga kaibigan sa iisang lokasyon. Hindi kailangan ng internet connection habang naglalaro.",

    // Accessibility
    skip_to_content: "Pumunta sa pangunahing nilalaman",
    toggle_menu: "I-toggle ang navigation menu",
    previous_review: "Nakaraang review",
    next_review: "Susunod na review",
    customer_reviews: "Mga review ng customer",
  },
} as const;

export type TranslationKey = keyof typeof ui.en;
