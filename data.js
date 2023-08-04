const martialArtsSliderContent = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690903073/zen-strike/diffarent-martial-arts-image/Karate-Boy-PNG-Image_kdmayt.png",
    title: "Unlock Your Inner Warrior",
    description:
      "Discover the ancient art of self-discipline and empowerment through martial arts training. Join us on a journey of physical and mental transformation.",
    cta: {
      buttonText: "Learn More",
      link: "/learn-more",
    },
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690961400/zen-strike/diffarent-martial-arts-image/pngimg.com_-_karate_PNG43_xqsfwp.png",
    title: "Train with the Masters",
    description:
      "Our highly skilled and experienced instructors will guide you through the secrets of various martial arts forms, from Karate and Taekwondo to Jiu-Jitsu and Kung Fu.",
    cta: {
      buttonText: "Explore Classes",
      link: "/explore-classes",
    },
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690960776/zen-strike/diffarent-martial-arts-image/pngimg.com_-_taekwondo_PNG25_p5lhgn.png",
    title: "Build Strength and Confidence",
    description:
      "Gain more than just physical strength - our classes are designed to boost your self-confidence, enhance focus, and improve overall well-being.",
    cta: {
      buttonText: "Get Started",
      link: "/get-started",
    },
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690961676/zen-strike/diffarent-martial-arts-image/581-5813381_bjj-brazilian-jiu-jitsu_lgocfh.png",
    title: "A Place for Everyone",
    description:
      "No matter your age or fitness level, we welcome beginners and seasoned practitioners alike. Our classes are tailored to suit everyone's needs.",
    cta: {
      buttonText: "Join Now",
      link: "/join-now",
    },
  },
];

const martialArtsData = [
  {
    id: 1,
    name: "Karate",
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690903073/zen-strike/diffarent-martial-arts-image/Karate-Boy-PNG-Image_kdmayt.png",
    description:
      "Karate is a traditional striking martial art that originated in Okinawa, Japan. It focuses on developing powerful punches, kicks, knee strikes, and elbow strikes, making it an effective form of self-defense. The word 'Karate' translates to 'empty hand,' emphasizing the art's reliance on unarmed combat techniques. Karate practitioners, known as karateka, undergo rigorous training to develop their physical strength, flexibility, and mental discipline. In addition to physical techniques, Karate places great importance on the practice of kata, a series of pre-arranged movements that allow practitioners to hone their techniques and movements with precision. The philosophical foundation of Karate revolves around self-discipline, respect for others, and a commitment to continuous self-improvement.",
  },
  {
    id: 2,
    name: "Kung Fu (Chinese Martial Arts)",
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690961400/zen-strike/diffarent-martial-arts-image/pngimg.com_-_karate_PNG43_xqsfwp.png",
    description:
      "Kung Fu is an extensive term encompassing a wide range of Chinese martial arts styles, each with its own unique techniques, forms, and philosophical foundations. The term 'Kung Fu' translates to 'skill achieved through hard work and practice,' emphasizing the dedication required to master these arts. Kung Fu styles may include striking techniques, such as punches, kicks, and blocks, as well as grappling techniques and the use of traditional Chinese weapons. The practice of Kung Fu is not solely focused on combat but also emphasizes health, meditation, and self-cultivation. Each Kung Fu style is deeply rooted in Chinese culture and history, often named after animals or legendary figures. ",
  },
  {
    id: 3,
    name: "Taekwondo",
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690960776/zen-strike/diffarent-martial-arts-image/pngimg.com_-_taekwondo_PNG25_p5lhgn.png",
    description:
      "Taekwondo is a dynamic martial art that originated in Korea. Known for its high, fast kicks, Taekwondo practitioners, known as Taekwondoists, develop exceptional flexibility, strength, and precision in their techniques. The art combines traditional Korean martial arts, such as Taekkyeon, with elements from Chinese and Japanese fighting styles. Taekwondo training includes a diverse range of techniques, encompassing hand strikes, kicks, blocks, and various forms (poomsae). One of Taekwondo's key components is sparring, allowing practitioners to test their skills in controlled combat scenarios. The philosophy of Taekwondo revolves around courtesy, integrity, perseverance, self-control, and an indomitable spirit.",
  },
  {
    id: 4,
    name: "Brazilian Jiu-Jitsu (BJJ)",
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690961676/zen-strike/diffarent-martial-arts-image/581-5813381_bjj-brazilian-jiu-jitsu_lgocfh.png",
    description:
      "Brazilian Jiu-Jitsu (BJJ) is a ground-based martial art and combat sport that evolved from traditional Japanese Jiu-Jitsu and Judo. BJJ practitioners, known as grapplers, focus on submission grappling and ground fighting techniques. The core principle of BJJ is that a smaller, well-trained individual can defend against a larger, more aggressive opponent using leverage, technique, and joint manipulation. The art prioritizes positional control, allowing practitioners to gain dominant positions from which to execute submissions such as joint locks and chokes. BJJ is a central component of modern mixed martial arts (MMA) due to its practicality and effectiveness in real-life combat scenarios.",
  },
];

const instructors = [
  {
    id: 1,
    name: "Michael Smith",
    details:
      "6th-degree black belt in Karate. 15 years of teaching experience. Known for his precise techniques and focus on discipline.",
    martial_arts: "Karate",
    contact_info: {
      email: "michael.smith@example.com",
      phone: "+1 (555) 123-4567",
      website: "https://www.example.com/michael_smith",
    },
    photo_url:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690983864/zen-strike/instructors/instructor_xxvn8b.webp",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    details:
      "4th-degree black belt in Jiu-Jitsu. Competed in multiple international tournaments and holds several championship titles.",
    martial_arts: "Jiu-Jitsu",
    contact_info: {
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 987-6543",
      website: "https://www.example.com/sarah_johnson",
    },
    photo_url:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690983714/zen-strike/instructors/instructor-1_swx1ma.jpg",
  },
  {
    id: 3,
    name: "Robert Wang",
    details:
      "Taekwondo master. Trained several national champions. His classes focus on speed, agility, and Olympic-style sparring.",
    martial_arts: "Taekwondo",
    contact_info: {
      email: "robert.wang@example.com",
      phone: "+1 (555) 567-8901",
      website: "https://www.example.com/robert_wang",
    },
    photo_url:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690983714/zen-strike/instructors/instructor-3_b0x3yn.jpg",
  },
  {
    id: 4,
    name: "Amanda Davis",
    details:
      "3rd-degree black belt in Muay Thai. Specializes in advanced striking techniques and clinch work.",
    martial_arts: "Muay Thai",
    contact_info: {
      email: "amanda.davis@example.com",
      phone: "+1 (555) 234-5678",
      website: "https://www.example.com/amanda_davis",
    },
    photo_url:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690983714/zen-strike/instructors/instructor-2_ziyl2d.jpg",
  },
];

const martialArtsFAQ = [
  {
    id: 1,
    question: "What is the best age to start learning martial arts?",
    answer:
      "There is no definitive answer to this question as it depends on the individual. Generally, kids can start as young as 4 or 5 years old, while adults can start at any age. It's essential to find a suitable style and instructor for the person's age and skill level.",
  },
  {
    id: 2,
    question: "Which martial art is best for self-defense?",
    answer:
      "Many martial arts can be effective for self-defense. Some popular choices include Krav Maga, Brazilian Jiu-Jitsu, Muay Thai, and Taekwondo. However, the effectiveness of self-defense depends on the practitioner's training, technique, and ability to apply the skills in real-life situations.",
  },
  {
    id: 3,
    question: "Is martial arts training suitable for women?",
    answer:
      "Yes, martial arts training is suitable for women and can be beneficial in various aspects. It helps improve self-confidence, physical fitness, and self-defense skills. Women can participate and excel in various martial arts styles, just like men.",
  },
  {
    id: 4,
    question: "How often should I attend martial arts classes?",
    answer:
      "The frequency of attending martial arts classes depends on your personal goals, schedule, and dedication. For beginners, starting with 2-3 classes per week is usually a good pace to allow time for rest and recovery. As you progress, you may increase the frequency if desired.",
  },
  {
    id: 5,
    question: "What equipment do I need for martial arts training?",
    answer:
      "The required equipment can vary depending on the martial art style. In general, comfortable workout clothing, a mouthguard, and hand wraps are essential for most martial arts. For specific styles like boxing or Muay Thai, you may also need gloves and shin guards.",
  },
];

const galleryImages = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052731/zen-strike/gallery/pexels-kampus-production-6765016_fpettd.jpg",
    orientation: "horizontal",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052731/zen-strike/gallery/pexels-rdne-stock-project-8612476_y9rzqz.jpg",
    orientation: "horizontal",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052731/zen-strike/gallery/pexels-alexa-popovich-9395506_p3ylw3.jpg",
    orientation: "squre",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052730/zen-strike/gallery/pexels-anna-tarazevich-5895869_xaht8h.jpg",
    orientation: "vartical",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052724/zen-strike/gallery/pexels-bakr-magrabi-3527074_glyo3v.jpg",
    orientation: "vartical",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052596/zen-strike/gallery/pexels-alexa-popovich-9313037_nxuqkq.jpg",
    orientation: "vartical",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052592/zen-strike/gallery/pexels-kampus-production-6765030_ttebqh.jpg",
    orientation: "vartical",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052572/zen-strike/gallery/pexels-haste-leart-v-690597_jtrmzx.jpg",
    orientation: "horizontal",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052417/zen-strike/gallery/pexels-rdne-stock-project-7045370_gq5lwe.jpg",
    orientation: "horizontal",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691054794/zen-strike/gallery/schaolin-g7957737c7_1280_rquoef.jpg",
    orientation: "horizontal",
  },
];

const martialArtsDetails = [
  {
    id: 1,
    name: "Karate",
    origin: "Japan",
    description:
      "Karate is a Japanese martial art that primarily focuses on striking techniques such as punches, kicks, knee strikes, and elbow strikes. It was developed on the Ryukyu Islands, which are now part of Okinawa, Japan. Karate practitioners, also known as karatekas, train to deliver powerful and precise movements with maximum efficiency. The word 'karate' is a combination of the kanji characters 'kara' (empty) and 'te' (hand), indicating that it is primarily an unarmed combat system. Karate is not only about physical techniques but also emphasizes mental and spiritual aspects, including discipline, respect, and self-control. Training typically involves learning various forms (katas), sparring with partners, and breaking boards to demonstrate striking prowess. Karate has become popular worldwide and is practiced by people of all ages for self-defense, physical fitness, and character development.",
    famousPractitioners: [
      "Gichin Funakoshi",
      "Masutatsu Oyama",
      "Hirokazu Kanazawa",
    ],
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052731/zen-strike/gallery/pexels-kampus-production-6765016_fpettd.jpg",
  },
  {
    id: 2,
    name: "Kung Fu (Chinese Martial Arts)",
    origin: "China",
    description:
      "Kung Fu, also known as Chinese Martial Arts, is a vast and diverse system of fighting techniques that originated in China over a thousand years ago. The term 'Kung Fu' (Gongfu) refers to any skill achieved through hard work and practice, not limited to martial arts alone. There are hundreds of Kung Fu styles, each with its unique techniques, principles, and training methods. These styles may include both armed and unarmed combat, incorporating strikes, kicks, throws, joint locks, and various animal-inspired movements. Kung Fu training encompasses not only physical conditioning but also meditation, philosophy, and moral values. Some Kung Fu styles are well-known for their acrobatic and flashy movements, while others emphasize internal energy cultivation and sensitivity. Famous practitioners like Bruce Lee, Jet Li, and Jackie Chan have brought global attention to Kung Fu, making it a popular martial art worldwide.",
    famousPractitioners: ["Bruce Lee", "Jet Li", "Jackie Chan"],
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052731/zen-strike/gallery/pexels-rdne-stock-project-8612476_y9rzqz.jpg",
  },
  {
    id: 3,
    name: "Taekwondo",
    origin: "Korea",
    description:
      "Taekwondo is a Korean martial art and Olympic sport that places a strong emphasis on dynamic and powerful kicking techniques. The name 'Taekwondo' is derived from the Korean words 'tae' (to strike with the foot), 'kwon' (to strike with the fist), and 'do' (the way or path). Developed in the mid-20th century, Taekwondo combines traditional Korean martial arts, influences from Japanese karate, and other indigenous fighting styles. Practitioners, known as taekwondoin, learn a wide array of techniques for self-defense, sparring, board breaking, and patterns (forms). Besides its physical aspects, Taekwondo places importance on mental discipline, respect, and perseverance. Taekwondo's inclusion in the Olympic Games has significantly boosted its global popularity, attracting practitioners of all ages from different cultural backgrounds.",
    famousPractitioners: ["Choi Hong Hi", "Hwang Kee", "Woo-Jin Jung"],
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691052572/zen-strike/gallery/pexels-haste-leart-v-690597_jtrmzx.jpg",
  },
  {
    id: 4,
    name: "Brazilian Jiu-Jitsu (BJJ)",
    origin: "Brazil",
    description:
      "Brazilian Jiu-Jitsu (BJJ) is a grappling-based martial art and combat sport that evolved from Japanese Jujutsu and Judo. It was developed in Brazil in the early 20th century, primarily by the Gracie family. BJJ focuses on ground fighting and submissions, aiming to enable a smaller and weaker person to defend against and defeat a larger opponent using leverage and technique. Practitioners, known as grapplers, learn a variety of joint locks and chokeholds to control and submit their opponents effectively. BJJ training involves sparring (rolling) with resisting partners, developing positional awareness, and enhancing ground-based combat skills. This martial art has gained widespread recognition and is often practiced for self-defense, sport, and mixed martial arts (MMA) competitions. Brazilian Jiu-Jitsu is known for its effectiveness, particularly in close-quarters combat and situations where the fight goes to the ground.",
    famousPractitioners: ["Helio Gracie", "Carlos Gracie", "Royce Gracie"],
    image:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1691054794/zen-strike/gallery/schaolin-g7957737c7_1280_rquoef.jpg",
  },
];

const footerContent = {
  id: "zen_strike_footer",
  logo: "path/to/zen_strike_logo.png",
  links: [
    { text: "Home", url: "/home" },
    { text: "martial arts", url: "/martialarts" },
    { text: "instructor", url: "/instructor" },
    { text: "gallery", url: "/gallery" },
  ],
  ligal: ["Terms of Service", "Privacy Policy", "Disclaimer"],
  address: "123 Zen Way, Martial City, Zenland",
  phone: "+1 (123) 456-7890",
  email: "info@zenstrike.com",
  socialMedia: {
    facebook: "https://www.facebook.com/zenstrike",
    instagram: "https://www.instagram.com/zenstrike",
    twitter: "https://www.twitter.com/zenstrike",
  },
  copyright: "© new Date().getFullYear() Zen Strike. All Rights Reserved.",
};

export {
  instructors,
  martialArtsSliderContent,
  martialArtsData,
  martialArtsFAQ,
  galleryImages,
  martialArtsDetails,
  footerContent,
};
