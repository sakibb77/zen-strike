import SingleMartialArts from "./SingleMartialArts";

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

const MartialArts = () => {
  return (
    <div className="bg-dark">
      <div className="wrapper section-padding text-light">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          diffarent kinds of martial arts
        </h1>
        {martialArtsData.map((martialArt) => (
          <SingleMartialArts martialArt={martialArt} key={martialArt.id} />
        ))}
      </div>
    </div>
  );
};

export default MartialArts;
