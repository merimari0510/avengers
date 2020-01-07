import { Injectable } from '@angular/core';

@Injectable()
export class AvengersService {

  private avengers: Avenger[] = [
    {
      name: 'Iron Man',
      name_short: 'iron-man',
      img_card: 'card-iron-man.jpg',
      description: "When industrial billionaire Tony Stark puts on his sophisticated steel mesh armor of his own design, it becomes a living high-tech weapons - the world's greatest human fighting machine.",
      description_more: ["Anthony «Tony» Edward Stark, aliasa Iron Man, is a fictional character, a superhero of the Marvel Comics Universe. A scientist, businessman, manufacturer of weapons and combat equipment. He is one of the most popular Marvel Comics heroes, is based on film director and aviator Howard Hughes.",
      "Anthony Stark was born with extreme intelligence. After the death of his parents when he was 21, Stark inherited Stark Industries. After being wounded in a war zone, he built an armor that would help keep him alive. Stark realized that thanks to his armor, he could help people, so he became Iron Man. Some time later Stark helped organize the superhero team, The Avengers. Tony has no powers, so the only thing that protects him is his armor. In it you can fly, you can throw repulsive rays from your arms and chest, etc. You can also connect to different communication systems, such as satellites, cell phones and computers worldwide. Armor has increased its reaction time and improved its ability to heal."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg' ],
      cite: "And so, as Christmas morning began, my journey was at its end. You start with something pure. Something exciting. Then come the mistakes, the compromises. We create our own demons. As promised, I got Pepper sorted out. Took a little tinkering. But then I thought 'why stop there?'' Of course there are people who say progress is dangerous, but then I bet none of those idiots ever had to live with a chest full of shrapnel. And now, neither will I. Let me tell you: that was the best sleep I'd had in years. So if I were to wrap this up tight with a bow or whatever, I guess I'd say my armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. One thing you can't take away...I am Iron Man.",
      cite_video: 'https://www.youtube.com/embed/JgyyVFusnaA',
      video: 'https://www.youtube.com/embed/5-Cx7UslEuE',
      actor_name: 'Robert Downey Jr',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'spider-man-homecoming', 'captain-america-civil-war', 'avengers-ultron', 'iron-man', 'iron-man-2', 'iron-man-3', 'avengers', 'incredible-hulk']
    },
    {
      name: 'Captain America',
      name_short: 'captain-america',
      img_card: 'card-captain-america.jpg',
      description: 'Steve Rogers ... Raised to appreciate the ideals of democracy, endowed with a superhuman physicist, and led to being the most skilled fighter in the world. Alone or as a leader of the Avengers, the fight for freedom and justice.',
      description_more: ["Steve Rogers was born on July 4, 1922, parents were Irish immigrants Joseph Rogers and Sarah. Steve grew up a fragile young man during the Great Depression in the United States. Little is known about Rogers's early years other than the fact that from a young age he had a strong sense of duty, honor and humility. His father died when he was a child and his mother died of pneumonia later, when Rogers was in his teens.",
      "Horrified by the news about the looting and attacks by the Nazis in Europe, and the Empire of Japan in Asia, Young Rogers tried to enlist in the Army and was rejected due to his fragility and weakness. But Rogers would not give up and insist on serving his nation, hearing his pleas, General Chester Phillips of the US Army offered Rogers the opportunity to take part in a top-secret experiment to improve the physical performance called Operation Renaissance.",
      "Rogers agreed and was taken to a secret laboratory in Washington DC, where he was introduced to Dr. Abraham Erskine (codename Professor Joseph Reinstein), the creator of the Super Soldier Serum.",
      "After weeks of testing, Rogers was finally administered with the Serum in combination with the Vita-Ray (a special combination of radiation designed to accelerate and stabilize the serum in his body).",
      "Steve Rogers left the lightning chamber with a perfect human body, possibly the next step in human evolution. An infiltrated Nazi spy murdered Dr. Erskine only a few minutes after the experiment. Dr. Erskine died without completely revealing the Super Soldier's formula, leaving Steve as the sole beneficiary of his genius.",
      "Rogers then went through an intense program of physical and tactical training, polishing his new physical skills, and becoming an expert in military strategy, becoming a true Super Soldier, and embodied the symbol of freedom, thus being born Captain America.",
      "Steve would thus intervene in many secret missions during World War II, fighting alongside other heroes of the time. During a mission with his partner Bucky Barnes, the Captain would disappear from history, being left for dead, when in reality he would remain frozen in suspended animation for years. Thanks to his improved organism the Captain would survive to this day, until he was released from his ice block by Namor and then rescued by The Avengers. Steve would join the group of superheroes, becoming his leader and one of the most emblematic heroes in history."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "Whatever happens tomorrow I want you to promise me something: that it will remain you. Not a perfect soldier, but a good man of heart.",
      cite_video: 'https://www.youtube.com/embed/ip8Pynrt4-U',
      video: 'https://www.youtube.com/embed/5rrdm4YoKtE',
      actor_name: 'Chris Evans',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'spider-man-homecoming', 'captain-america-civil-war', 'avengers-ultron', 'captain-america-the-winter-soldier', 'captain-america-the-first-avenger', 'thor-the-dark-world', 'avengers']
    },
    {
      name: 'Thor',
      name_short: 'thor',
      img_card: 'card-thor.jpg',
      description: 'From the immortal Asgard greets us - The most powerful warrior of mythology, possessor of the mystic hammer Uru, Mjolnir. He is the Norse God of Thunder, master of the storm and lightning, heir to the throne of the immortal Asgard - The Mighty Thor!',
      description_more: ["Thor was raised in a society of nobility and love of war, trained in the arts of his world and standing out since childhood for his power and nobility, raised as a born warrior the young God of Thunder would grow arrogant.",
      "Odin knew that it was necessary for his son to learn a little humility and for this he would make Thor live human existences, where he could learn the value of mortal life, so different from the immortal life that the gods enjoyed.",
      "Thor would assume different mortal lives, from a humble mortal, protector of the earth, god, warrior and hero through the centuries.",
      "In our era Thor would embody the mortal form of medical student Donald Blake. As Blake would learn the values ​​of humility and perseverance and the science of men.",
      "After leaving medical school, Blake would open an office in New York. And he would become a famous doctor, in his time Odin implanted in his mind the idea of ​​going on vacation to Norway, where the young doctor would find the sacred hammer Mjolnir in the form of a cane, so would the entry into our era of the mighty Thor that would be destined to put an end to the Ragnarok cycle and has become one of the most powerful entities of creation.",
      "Normally to interact in the world of mortals, Thor has to adapt his immortal strength, mind and spirit, voluntarily diminishing his powers and not becoming himself a threat to the world, but even with his diminished power Thor is one of the most powerful that have manifested in the universe.",
      "Thor have a huge amount of powers and abilities many of them channeled through Mjolnir his magic hammer, I am very afraid that he will leave many of his powers aside, but we will see the ones I remember most"],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "Are you Thor, the God of Hammers? That hammer was to help you control your power, to focus it. It was never your source of strength.",
      cite_video: 'https://www.youtube.com/embed/-mHaq88BAV4',
      video: 'https://www.youtube.com/embed/abM1Z3fYT3s',
      actor_name: 'Chris Hemsworth',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'thor-ragnarok', 'avengers-ultron', 'thor-the-dark-world', 'avengers', 'doctor-strange', 'thor']
    },
    {
      name: 'Hulk',
      name_short: 'hulk',
      img_card: 'card-hulk.jpg',
      description: 'Caught in the heart of a nuclear explosion, victim of the wild gamma radiation, Dr. Robert Bruce Banner is now transformed into tense times in the dark personification of his repressed rage and rage - In the most powerful creature that has walked the face of the Earth: The Incredible Hulk!',
      description_more: ["Robert Bruce Banner, alias Hulk is a fictional character from the Marvel Comics universe. It is the strongest and most powerful creature in the Marvel universe.",
      "His first appearance was in his homonymous comic Incredible Hulk # 1 (May 1962) and was created by Stan Lee and Jack Kirby. In this comic, Hulk has gray skin, which was chosen by Stan Lee, in the same comic by mistake of the colorist Stan Goldberg, also seems to have a green and even blue color. Finally deciding the green color for later editions, the gray color remained as an alternate version of the character.",
      "Robert Bruce Banner was a scientist who worked on a Gamma radiation bomb. Then, Bruce realized that a young man named Rick Jones had entered the testing ground. Banner ran to save the boy and heroically pushed him into a ditch of protection that saved Rick's life, but Bruce was exposed to extreme amounts of Gamma radiation that altered the structure of his DNA. When Bruce got angry, he became a green creature with incredible powers that he was nicknamed Hulk. His love interest, Betty Ross, seemed to be the only person who could return him to normal, but she was the daughter of General Thunderbolt Ross, who is looking for a way to stop the Hulk, hoping to deliver him to justice or destroy him completely. Because of that, Bruce always seeks the cure for his transformation and remain calm as much as he can."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "You can be a person for the world, but for someone you are a world.",
      cite_video: '',
      video: 'https://www.youtube.com/embed/cXzi5F6qObc',
      actor_name: 'Mark Ruffalo',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'thor-ragnarok', 'avengers-ultron', 'iron-man-3', 'avengers', 'incredible-hulk']
    },
    {
      name: 'Black Widow',
      name_short: 'black-widow',
      img_card: 'card-black-widow.jpg',
      description: "Natasha Romanova, known as Black Widow, is one of the greatest spies still alive today, one of S.H.I.E.L.D.'s best agents, and a recurring member of the Avengers. She is a former pupil and close friend of Wolverine.",
      description_more: ["Natasha Romanoff was born in Stalingrad (now Volgograd), around 1928, Natalia «Natasha» was orphaned as a baby, her parents were murderers and she was trapped in a burning building during an attack by enemy forces. Ivan Petrovich Bezukhov, a Soviet soldier, would find and rescue Natasha. Ivan would keep a close eye on Natasha as she grew up, in 1938 she had attracted the attention of Soviet intelligence, and changed her name to Romanova (Romanoff's feminine form) so the young woman began an arduous training. She would train by then with Logan (the future Wolverine). In 1941 she was kidnapped by the Ninjas Clan of The Hand, who almost washed her brain to enter her service, but was saved by Ivan, Logan (Wolverine) and Captain America.",
      "After World War II, Natasha was recruited to be part of the “Black Widow” Program, an elite team of female agents. Together with other young women Natasha received an intense regime of chemicals very similar to the Supersoldered Serum, which improved her physically and biologically to maximum levels. Trained then in the dreaded Red-Room for Soviet Superstrips, Natasha would further sharpen her combat skills and be on her way to becoming one of the deadliest spies in the world!",
      "In 1956 Natasha and Ivan were victims of a savage attack, with Ivan near death, James Barnes the Winter Soldier «Winter Soldier», former comrade of Captain America (Bucky) and then Soviet agent gave them a chemist who would prolong even Plus your life expectancy. Natasha and Barnes would become lovers by then.",
      "In 1958 The Soviet State arranged for Natasha to marry Alexi Shostakov (Soviet super soldier later known as the Red Guardian), a champion test pilot. After a few years of a happy marriage, the KGB faked Shostakov death in a rocket test. Natasha devastated restarted her duties as a Soviet super spy.",
      "For years he was on the European social scene, stealing brilliant technology for his Soviet bosses, that was when Natasha was charged with sabotaging and stealing the technology of Tony Stark (Iron-Man). Natasha would thus enter the world of American superheroes, also manipulating and falling in love with Hawkeye, although with problems, the couple would continue when he became a member of The Avengers.",
      "Given her extraordinary abilities, Nick Fury would call her to join S.H.I.E.L.D. As a free agent. Soon she would also be a part of The Avengers and would even lead them."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "All my friends are fighters, and here comes a guy avoiding a fight 'cause he knows he'll win.",
      cite_video: 'https://www.youtube.com/embed/ShJgHgfHtrs',
      video: 'https://www.youtube.com/embed/lhXrzV5dkbw',
      actor_name: 'Scarlett Johansson',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'captain-america-civil-war', 'avengers-ultron', 'captain-america-the-winter-soldier', 'avengers', 'iron-man-2', 'black-widow']
    },
    {
      name: 'Hawkeye',
      name_short: 'hawkeye',
      img_card: 'card-hawkeye.jpg',
      description: 'Trained by criminals and inspired by heroes, Clint Barton has gone from a troubled young man to one of the greatest heroes on Earth. The world knows him best as Hawkeye (Hawkeye): The most powerful shooter on the planet.',
      description_more: ["Clint Barton was born in Waverly, Iowa. At an early age he lost his parents in a car accident. Orphan spent six years in an orphanage next to his older brother Barney, both escaped from the orphanage to join the Carson Carnival of Traveling Wonders, where young Clint soon caught the attention of the Swordsman, who took him as his assistant. With the help of Trick Shot, Clint trained to become a master archer.",
      "Now called Hawkeye, also known as «the best shooter in the world,» Clint's archery skills made him the star attraction of the carnival.",
      "Years later, Clint would witness how Iron-Man stopped an uncontrolled car, saving the lives of many people and seeing the admiration that people had for him, Clint would decide to also be a hero. Clint made his own suit and became a masked adventurer. In his first performance as a hero he stopped a jewel thief, but when the police saw him with the loot he confused him with the thief and tried to stop him, Clint fled, and ended up fighting against Iron-Man.",
      "But Clint's luck didn't change when shortly after he met Natasha Romanoff, The Black Widow, who took care of him and became his lover (well, if he was really lucky). Although Natasha insisted that she worked for the peace of the world, Clint suspected that she was actually a foreign spy. As a partner of the Black Widow, Hawkeye committed several outlaws which led him to face Iron-Man again. Finally Natasha in love with him, decided to defect from his country, and Hawkeye began to amend his mistakes.",
      "So Clint would have an opportunity to join The Avengers, the most powerful heroes on the planet. Although at the beginning Clint would have several frictions with Captain America, it would not be long for the avenging leader to win Clint's admiration and respect.",
      "Since then Clint Barton would live many things and grow as a hero being currently one of the most recognized and beloved avengers by the public reader."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "No matter what you did or what you were, if you go out you have to fight, fight and win, if you want to stay here but if you go out that door you will be avenger",
      cite_video: 'https://www.youtube.com/embed/Nwb8k95l-h4',
      video: 'https://www.youtube.com/embed/l1kLfRl9YWM',
      actor_name: 'Jeremy Renner',
      list_movies_apears: ['avengers-endgame', 'captain-america-civil-war', 'avengers-ultron', 'avengers', 'thor']

    },
    {
      name: 'Vision',
      name_short: 'vision',
      img_card: 'card-vision.jpg',
      description: 'Vision is a synthezoid and an Avenger who possesses the power to alter his density at will. He is always afraid he may have lost touch with his inner humanity.',
      description_more: ["", ""],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "Human beings are fearful and in need of protection. But that fear can inspire them to do great things.",
      cite_video: '',
      video: 'https://www.youtube.com/embed/egTZU_iQ9u0',
      actor_name: 'Paul Bettany',
      list_movies_apears: ['avengers-infinity-war', 'captain-america-civil-war', 'avengers-ultron']
    },
    {
      name: 'Quicksilver',
      name_short: 'quicksilver',
      img_card: 'card-quicksilver.jpg',
      description: 'The super-speed son of the infamous mutant conqueror Magneto, Pietro Maximoff has played many roles: super hero and super villain. Endowed with the power of super speed Pietro is one of the fastest heroes the world has ever seen.',
      description_more: ["Pietro Maximoff is the son of the mutant named Magneto and a gypsy named Magda, who fled in terror by the strange powers manifested by Magneto and his intentions to dominate the world. Magda sought refuge in a citadel in the Balkan mountains, on a mountain known as Wundagore in the small European nation of Transia, Magda was collected by Bova, a humanoid cow developed by being known as the High Evolutionary. With Bova as his midwife Magda gave birth to twins, a boy and a girl whom he called Pietro and Wanda. Still afraid that her husband would find her and find out about the existence of the children Magda left Bova taking care of her children and lost herself in the mountain where she apparently perished.",
      "Bova, thought that Wundagore was not a good place to raise children, and saw his opportunity when only a few nights later, a couple appeared during a storm, they were Robert and Madeline Frank (former superheroes who were active during the Second War World known as the Whizzer and Miss America). They came to Wundagore for help because Madeline was pregnant, but her son died during childbirth, so Bova introduced Robert to the twins as if they were his true children. But upon learning of the death of his wife Robert fled in pain. Bova then introduced the two little ones to his master, the High Evolutionary, who decided to give Django and Marya Maximoff an adoption for a gypsy marriage who had lost their two children, Ana and Mateo during the war.",
      "Thus the twins grew up with their new family until they reached adolescence and began to discover their mutant powers. When Django was forced to steal food to feed his hungry family, enraged villagers attacked the gypsy camp. Pietro managed to flee the camp with his sister thanks to his super speed, but the fact and circumstances of the separation from his family were so traumatic that they would not remember these details until their adulthood. For the following years, Wanda and Pietro roamed central Europe, feeding on what they could, Pietro always had a protective attitude towards his sister Wanda. One day Wanda accidentally caused a fire with his powers, causing a group of superstitious peasants to persecute her believing her a witch. Although Pietro tried to defend her, they were soon overtaken by the numerical superiority of their attackers and would have died possibly had it not been for the arrival of Magneto, who rescued them. They would ignore that it was their true father and Magneto without knowing that they were their children recruited them to join them to their Brotherhood of Evil Mutants, where they adopted the men of Quicksilver and Scarlet Witch.",
      "As members of the Brotherhood, Quicksilver and the Scarlet Witch helped Magneto in his terrorist campaigns against humanity and helped him fight the original members of the X-Men. For months they served Magneto for a feeling of obligation and fear of reprisals. Always unaware of the ties that bound them to the mutant leader.",
      "When Magneto was defeated by the overwhelming powers of the Stranger (a cosmic entity), Quicksilver and the Scarlet Witch left the Brotherhood; the Strange took Magneto away from Earth, and the Maximoff twins then returned to their native Transia.",
      "Pietro and Wanda would soon find refuge with the group of Super-Heroes called The Avengers, who was reforming their ranks, in the absence of several of its members. The twins were included along with Hawkeye in the new team. Although the team was considered less powerful and capable than the previous one, these new avengers would soon prove themselves by beating Kang the Conqueror and Doctor Doom, and other threats. Although Captain America initially had many clashes with Quicksilver and Hawkeye that often rebelled against his orders, the Avengers leader would manage to mold them as valuable team members.",
      "Since then Pietro would walk many times between the heroic and the villainy, because he felt that he sometimes did not fit on either side. He has been a member of the Brotherhood of Evil Mutants, The Avengers, X-Factor, the Royal Family of the Inhumans, the Knights of Wundagore, The West Coast Avengers, the Genosha Cabinet among others. Endowed with prodigious speed Pietro is one of the fastest beings on the planet and one of the most complicated heroes that the wonderful Marvel universe has to offer us."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/3HczWv6BvRw',
      actor_name: 'Aaron Taylor-Johnson',
      list_movies_apears: ['avengers-ultron', 'captain-america-the-winter-soldier']
    },
    {
      name: 'Scarlet Witch',
      name_short: 'scarlet-witch',
      img_card: 'card-scarlet-witch.jpg',
      description: 'Mutant and member of the Avengers, Scarlet Witch used her powers to manipulate probability and alter reality in her effort to help the world. After a massive breakdown, she then destroyed the foundations of it by causing the disaster known as M-Day.',
      description_more: ["", ""],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "I can't control your fear only mine",
      cite_video: 'https://www.youtube.com/embed/14qmIBsdt6U',
      video: 'https://www.youtube.com/embed/m542S0OnMoc',
      actor_name: 'Elizabeth Olsen',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'captain-america-civil-war', 'avengers-ultron', 'captain-america-the-winter-soldier']
    },
    {
      name: 'Ant-Man',
      name_short: 'ant-man',
      img_card: 'card-ant-man.jpg',
      description: 'Hank Pym is a genius, one of the founding members of the Avengers, the creator of Pym Particles, and a modern-day superhero. ',
      description_more: ["", ""],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "Humans believe they are the only ones who are able to feel pain.",
      cite_video: '',
      video: 'https://www.youtube.com/embed/eB3TbNo9usM',
      actor_name: 'Paul Rudd',
      list_movies_apears: ['avengers-endgame', 'ant-man-and-the-wasp', 'captain-america-civil-war', 'ant-man']
    },
    {
      name: 'Doctor Strange',
      name_short: 'doctor-strange',
      img_card: 'card-doctor-strange.jpg',
      description: 'Once he was a man like others. But then he discovered independent reality, where the magic and soul of men shape the forces that shape our lives. At that moment, he was reborn, to become a man like no other.',
      description_more: ["The death of his father, and his brother would fill him with anger and guilt, Stephen froze his brother's body in the hope that one day medical science would bring him back to life.",
      "Not long after Stephen suffered a car accident that damaged his nervous system which would deprive him of exercising his career. Trying to heal would waste his fortune, and already in ruin and become a tramp he would hear from a mystic in the Himalayas who could heal him.",
      "Strange traveled to Tibet where he would find this teacher known as The Elder. Although Stephen doubted the magic, he stayed as a guest, having discovered that a disciple of the Elder known as Mordo would try to kill the old master. Strange had contact with the magic of Mordo.",
      "Having avoided betrayal and with a better understanding of magic, Strange would become the disciple of the Elder, who saw good in his soul, so Stephen Strange (Strange) would enter into the knowledge of magic to become the sorcerer more great that ever existed",
      "Expert in the use of magic, Dr. Strange can manipulate the mystical energy from various sources. His magic (like that of most sorcerers) derives from three main sources: the powers derived from the soul, mind and body (mesmerism, astral projection, telepathy, etc.)."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/FQew3FzqBw4',
      actor_name: 'Benedict Cumberbatch',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'thor-ragnarok',  'doctor-strange']
    },
    {
      name: 'Spider-Man',
      name_short: 'spider-man',
      img_card: 'card-spider-man.jpg',
      description: 'Peter Parker was bitten by a spider and gave him super powers like a spider after Uncle Ben was killed he vowed to fight crime and his super hero name is Spider-man.',
      description_more: ["Peter Benjamin Parker is the son of the agents of the C.I.A. Mary and Richard Parker, who were killed abroad in a plane crash as spies of the US government when Peter was just a child. After the death of his parents, Peter would go live with his uncles Ben and May in New York. Peter would grow up being a shy young man but at the same time very intelligent and with an extraordinary affinity for science, at this time Peter would develop a great love and put out for his uncles.",
      "While attending a scientific exhibition on radiation, a spider would be exposed to a beam of particles receiving high doses of radiation, the spider for things of destiny would bite the young Peter Parker in one hand. Peter, who was then only 15 years old, would discover that the radioactive spider had given him amazing abilities equivalent to those of a giant spider.",
      "The young man who had always received abuse from his classmates saw the ideal opportunity to excel. Now with his super powers Peter would try to gain fame and fortune. Thinking of keeping his identity secret, in disguise he tested his new abilities by venturing into the world of Professional Struggle, then defeating even a fighter known as The Hogan Crusher. Then Peter, using his scientific genius, built a pair of artificial spiderweb launchers that he would use on his wrists. Calling himself now Spider-Man, with a new and striking costume, became a sensation on television. Without caring for the rest of the world, he promised to use his powers only to take care of himself and uncles. After his first television special, Peter thinking it was none of his business would allow a thief to escape when he ran past him.",
      "Success seemed to smile at the young man now, but a few days later, back home he found that his beloved uncle Ben had been shot dead. When Spider-Man faced the murderer hidden in a warehouse, he discovered with horror that his uncle's murderer was the thief who allowed him to escape earlier. Consumed by guilt, he finally realized that great power entails great responsibility, just as his dear uncle had once said.",
      "In this way the young Spider-Man would begin a life of struggle against injustice and crime. This life of constant struggle between the life of Peter Parker and that of the Spider-Man justice, would be full of ups and downs, triumphs and failures.",
      "He was not seen with good eyes and although he fought for justice by exposing his life in every fierce battle with the worst villains, Spider-Man would be considered another criminal, thus confronting both law enforcement and criminals.",
      "Peter would thus become one of the most skilled superheroes on the planet and one of the most misunderstood as well and that he would never stop being Peter Parker. This is why Spider-Man is the most human of superheroes, despite having super powers.",
      "Since then Peter has been through many things, until he gained some recognition for his fight against crime. He has been and is a member of The Avengers and the Fantastic 4 now known as the Future Foundation and is one of the most recognized and loved characters in the comic industry.",
      "The spider that peaks Peter gives him amazing powers, of which Peter only apparently manifests some at lower levels, his potential being really much higher as he is a totemic representative of the Mystic Spirit of the Spider, yet even so Peter has extraordinary power levels when proposed."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "Lord know, kids like Henry need a hero. Courageous self-sacrificing people, setting examples for all of us. Everybody loves a hero, people line up for them, cheer them, scream their names, and years later they'll tell how they stood in the rain for hours, just to get a glimpse of the one who taught'em to hold on a second longer. I believe there´s a hero in all of us; that keeps us honest, gives us strength, makes us noble, and finally allows us to die with pride. Even though sometimes we have to be steady and give up the thing we want the most. Even our dreams",
      cite_video: 'https://www.youtube.com/embed/mKtt0Uig7Og',
      video: 'https://www.youtube.com/embed/zceKndOf6qY',
      actor_name: 'Tom Holland',
      list_movies_apears: ['spider-man-far-from-home', 'avengers-endgame', 'avengers-infinity-war', 'spider-man-homecoming', 'captain-america-civil-war']
    },
    {
      name: 'Black Panther',
      name_short: 'black-panther',
      img_card: 'card-black-panther.jpg',
      description: "T'Challa is the Black Panther,the super genius warrior king of the African nation of Wakanda, the most technologically advanced nation on Earth. He is one of the smartest men in the Marvel Universe, a former Avenger, and Storm's husband.",
      description_more: ["Wakanda is an African nation, a country based on a warrior spirituality, so the title of Black Panther given to its kings is hereditary, but it has to be won through a series of arduous and dangerous tests. To this end heirs to the throne are especially educated since childhood. The next in the line of succession was T’Challa son of King T’Chaka. T’Challa was a super-genius and skilled in everything. His father T’Chaka was killed by Ulysses Klaw who had arrived in Wakanda in search of the Vibranium. After the murder of T’Chaka his younger brother S’yan would assume the mantle of the Black Panther ruling in his place. S’Yan was an excellent warrior as equal to what T`Chaka was, although he was not interested in the reign. S’yan loved his nephew T’Challa. At the death of his father the young T’Challa had a desire for revenge and so T’Challa went to study in America and Europe and thus learn from other cultures to become a better ruler for Wakanda.",
      "When T`Challa felt ready, he returned to Wakanda to claim his rights to the throne. At 19 years of age with a T’Challa mask he would challenge his uncle S’yan (King and Black Panther) whom he would defeat in clean combat, after that T’Challa would take the following challenges to become the next Black Panther.",
      "T’Challa would thus face the champions of the 18 tribes of Wakanda, being judged worthy by the Panther God (another form of the Egyptian goddess Bast) and having won and applied a rare heart-shaped herb that only grows in Wakanda. T’Challa would thus win the title of the Black Panther and the skills of the feline, mystically united to the God-Panther, gaining human skills.",
      "Thus T'Challa would rule the savage and technologically advanced Wakanda, and it would not take long for the King to need to prove himself and prepare for the future challenges he would have, thus challenging the group of superheroes known as the Fantastic Four, thus initiating his entrance to the community of superheroes of the world. T’Challa has been and is a member of The Avengers. His genius, skills and resources have made him one of the most dangerous and powerful men on the planet."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "But in times of crisis, the wise build bridges, while fools build barriers. We must find a way to look after one another as if we were one single tribe.",
      cite_video: 'https://www.youtube.com/embed/5LkK0ztdbDc',
      video: 'https://www.youtube.com/embed/8ck8pVhsWLU',
      actor_name: 'Chadwick Boseman',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'captain-america-civil-war', 'black-panther']
    },
    {
      name: 'Falcon',
      name_short: 'falcon',
      img_card: 'card-falcon.jpg',
      description: "Empowered by evil, inspired by good, Sam Wilson's bleak outlook on life was wiped away the day he met Captain America. He uses his winged costume, combat prowess, and avian telepathy as the Falcon, defender of Harlem.",
      description_more: ["", ""],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/gfNEwhPxeGM',
      actor_name: 'Anthony Mackie',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'captain-america-civil-war', 'ant-man', 'avengers-ultron', 'captain-america-the-winter-soldier']
    },
    {
      name: 'Captain Marvel',
      name_short: 'captain-marvel',
      img_card: 'card-captain-marvel.jpg',
      description: "After encountering the Kree hero Captain Marvel, Carol Danvers was accidentally subjected to a Kree Psyche-Magnitron which genetically transformed her into a superhuman Kree warrior.",
      description_more: ["The young Carol Danvers entered the Air Force upon graduation from high school. Carol was an excellent student achieving a rapid advance in her career, reaching the rank of Major. Due to her stellar performance, excellent combat skills and natural intelligence, Carol was recruited by the intelligence service. She ended up serving at the CIA, where she would meet Colonel Nick Fury. She partnered with Colonel Michael Rossi and the two became lovers. Carol had a distinguished career at the CIA.",
      "By then Carol would also meet with the Canadian agent named Logan (Wolverine). The two were partners and shared adventures. During their time together, Logan and Carol became very friends, even lovers. Both have saved each other's lives numerous times.",
      "After leaving her spy job, she became head of NASA security at Cape Canaveral, where she met the warrior Kree known as Captain Marvel. During a battle between Mar-Vell and his enemy Yon-Rogg, Carol was injured and while being transported by Captain Marvel was irradiated by the Psyche-Magneton (a machine of Kree origin). Draining the energies of the Nega-Bands of Mar-Vell the Psyche-Magneton would reconstruct Carol's DNA cell by cell creating a perfect synthesis of human and Kree genes. The machine caused Carol's genetic structure to somehow merge with Mar-Vell's. While Mar-Vell was not altered by the event, Carol was now a perfect hybrid of Kree and human genes. In addition, he had all the Kree de Mar-vell knowledge and training. Through this accident Ms. Marvel would be born one of the most powerful heroines on the planet."],
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "I Have Nothing To Prove To You",
      cite_video: 'https://www.youtube.com/embed/s_2HbawaNvs',
      video: 'https://www.youtube.com/embed/YAGHsKoEv44',
      actor_name: 'Brie Larson',
      list_movies_apears: ['avengers-endgame', 'captain-marvel']
    }
  ]

  constructor() {
    console.log("Service start!");
  }

  getAvengers() {
    return this.avengers;
  }

  getAvenger( element:string ) {
    let avengerSearch:Avenger;

    for ( let avenger of this.avengers ) {
      let name_short = avenger.name_short;
      if (name_short.indexOf( element ) >= 0) {
        avengerSearch = avenger;
      }
    }

    return avengerSearch;
  }

  searchAvenger( element:string ) {
    let avengersArray:Avenger[] = [];
    element = element.toLowerCase();

    for ( let avenger of this.avengers ) {
      let name = avenger.name.toLowerCase();
      if (name.indexOf( element ) >= 0) {
        avengersArray.push( avenger );
      }
    }

    return avengersArray;

  }

  // getMoviesAvenger(index:number) {
  //   return this.avengers[index].list_movies_apears;
  // }
}

export interface Avenger{
  name: string;
  name_short?:string;
  img_card: string;
  description: string;
  description_more?: string[];
  list_img:string[];
  cite:string;
  cite_video:string;
  video:string;
  actor_name?:string;
  list_movies_apears?:string[];
};
