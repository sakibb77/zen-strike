const martialArtsSliderContent = [
  {
    id: 1,
    image: "bg-slideImg1",
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
    image: "bg-slideImg2",
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
    image: "bg-slideImg3",
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
    image: "bg-slideImg4",
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

export { instructors, martialArtsSliderContent, martialArtsData };
