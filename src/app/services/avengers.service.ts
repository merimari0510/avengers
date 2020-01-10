import { Injectable } from '@angular/core';

@Injectable()
export class AvengersService {

  private avengers: Avenger[] = [
    {
      name: 'Iron Man',
      name_short: 'iron-man',
      img_card: 'card-iron-man.jpg',
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ['Anthony Edward Stark'] },
          {
            'title': 'Alias(es)' ,
            'description': ["Tony Stark", "Iron Man", "The New Kid", "Visionary", "Genius", "The Great Tony Stark", "Big Man in a Suit of Armor", "Billionaire", "Playboy", "Boozy Man Child", "The World's Greatest Hero"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Birth date' ,
            'description': ['May 29, 1970']
          },
          {
            'title': 'Title(s)' ,
            'description': ['CEO of Stark Industries (formerly)', 'Consultant (formerly)']
          },
          {
            'title': 'Affiliation' ,
            'description': ["MIT (formerly)", "Stark Industries", "S.H.I.E.L.D. (formerly)", "*Project Insight (formerly)", "Avengers", "Damage Control"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Iron Man", "The Incredible Hulk (pre-credits scene)", "Iron Man 2", "Thor (mentioned)", "The Avengers", "Iron Man 3", "Captain America: The Winter Soldier (picture)", "Avengers: Age of Ultron", "Ant-Man (mentioned)", "Captain America: Civil War", "Guardians of the Galaxy Vol. 2 (mentioned; deleted scene)", "Spider-Man: Homecoming", "Thor: Ragnarok (mentioned)", "Avengers: Infinity War", "Avengers: Endgame", "Spider-Man: Far From Home (flashback)", "Black Widow (unreleased)"]
          },
          {
            'title': 'One-shot' ,
            'description': ["The Consultant (archive footage)", "All Hail the King (mentioned)", "Peter's To-Do List (mentioned)"]
          },
          {
            'title': 'TV series',
            'description': ["Agents of S.H.I.E.L.D. (mentioned)", "Daredevil (mentioned)", "Luke Cage (mentioned)", "Runaways (figure)", "Cloak & Dagger (mentioned)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (footage)", "Team Thor (mentioned)", "Team Thor: Part 2 (drawing)"]
          },
          {
            'title': 'Game',
            'description': ["Iron Man", "The Incredible Hulk", "Iron Man 2", "Iron Man 3 - The Official Game", "Captain America: The Winter Soldier - The Official Game (mentioned)"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Robert Downey, Jr.", "Davin Ransom (young)"]
          },
          {
            'title': 'Voiced by' ,
            'description': ['Ari Ross', 'Stephen Stanton', 'Eric Loomis', 'Adrian Pasdar']
          }
        ]
      },
      description: "When industrial billionaire Tony Stark puts on his sophisticated steel mesh armor of his own design, it becomes a living high-tech weapons - the world's greatest human fighting machine.",
      description_more: ["Anthony Edward «Tony» Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries. A brash but brilliant inventor, Stark was self-described as a genius, billionaire, playboy, and philanthropist. With his great wealth and exceptional technical knowledge, Stark was one of the world's most powerful men following the deaths of his parents and enjoyed the playboy lifestyle for many years until he was kidnapped by the Ten Rings in Afghanistan, while demonstrating a fleet of Jericho missiles. With his life on the line, Stark created an armored suit which he used to escape his captors. Upon returning home, he utilized several more armors to use against terrorists, as well as Obadiah Stane who turned against Stark. Stark enjoyed the fame that came with his new secret identity and decided to share it with the world, publicly revealing himself as Iron Man.",
      "Fresh off from defeating enemies all over the world, Stark found himself dying due to his own Arc Reactor poisoning his body, all while he was challenged by Ivan Vanko who attempted to destroy his legacy. Due to their assistance in both these battles, Stark reluctantly agreed to serve as a consultant for S.H.I.E.L.D. where he used his position to upgrade their technology while he began a relationship with Pepper Potts. With the world yet again being threatened, Stark joined the Avengers and helped defeat the Chitauri and Loki. Due to the battle, he suffered from post-traumatic stress disorder, leading him to create the Iron Legion to safeguard the world and help him retire.",
      "The 2012 «Mandarin» terrorist attacks forced Stark to come out of retirement to protect his country, inadvertently putting his loved ones at risk and leaving him defenseless when his home was destroyed. Stark continued his mission, finding Aldrich Killian as the mastermind of the attacks. Eventually, Stark defeated Killian, almost losing Pepper Potts in the process. In the wake of the battle, Stark destroyed all of his armors with the Clean Slate Protocol. However, when the Avengers were officially demobilized due to the War on HYDRA, Stark built more armors and resumed his role as Iron Man, aiding them in the capture of Wolfgang von Strucker and acquiring Loki's Scepter.",
      "Once the threat of HYDRA had been ended, at last, Stark, influenced by Wanda Maximoff's mind games, built Ultron with the help of Bruce Banner as a new peacekeeping A.I. to protect the world and allow the Avengers to retire. However, Ultron believed that humanity threatened the world and thus, according to his program, decided to extinguish humanity. Through the work of the Avengers, Ultron was defeated, however not without massive civilian cost and many lives being lost.",
      "After the Ultron Offensive, Stark retired from active duty, still haunted by his role in the chaos the A.I. created. The guilt of creating Ultron and causing so much destruction and loss of life eventually convinced Stark to support the Sokovia Accords. Stark was forced to lead a manhunt for his ally Captain America when he began protecting the fugitive Winter Soldier, igniting the Avengers Civil War. The end result left the Avengers in complete disarray, especially after Stark learned of the Winter Soldier's role in his parent's deaths. Stark returned to New York to become a mentor to Spider-Man and to guide him in order to make him a better hero than he ever was, also becoming engaged with Potts in the process.",
      "In 2018, when Thanos and the Black Order invaded Earth in their conquest to acquire the six Infinity Stones, Stark, Doctor Strange, and Spider-Man convened to battle Thanos on Titan with the help of the Guardians of the Galaxy. When Stark was held at Thanos' mercy, Doctor Strange surrendered the Time Stone for Stark's life. After the Snap, Stark and Nebula remained the sole survivors on Titan. Stark and Nebula used the Benatar to escape Titan, but were stranded in space as the ship was damaged. They were rescued by Captain Marvel, who brought them back to Earth.",
      "In the five years after the Snap, Stark chose to retire from being Iron Man, marrying Potts and having a daughter, Morgan Stark. When Stark discovered the key to travel through time, he rejoined the Avengers to undo the Snap, traveling back in time to retrieve the Scepter and then to regain the Tesseract. During the Battle of Earth, Stark heroically sacrificed himself to eliminate Thanos and his armies, who traveled through time to collect the Infinity Stones, saving the universe from decimation, and leaving behind a legacy as one of Earth's most revered superheroes."],
      list_img: ['assets/img/portfolios/iron-man/01.jpg', 'assets/img/portfolios/iron-man/02.jpg', 'assets/img/portfolios/iron-man/03.jpg', 'assets/img/portfolios/iron-man/04.jpg', 'assets/img/portfolios/iron-man/05.jpg', 'assets/img/portfolios/iron-man/06.jpg', 'assets/img/portfolios/iron-man/07.jpg', 'assets/img/portfolios/iron-man/08.jpg', 'assets/img/portfolios/iron-man/09.jpg', 'assets/img/portfolios/iron-man/10.jpg', 'assets/img/portfolios/iron-man/11.jpg', 'assets/img/portfolios/iron-man/12.jpg', 'assets/img/portfolios/iron-man/13.jpg', 'assets/img/portfolios/iron-man/14.jpg', 'assets/img/portfolios/iron-man/15.jpg', 'assets/img/portfolios/iron-man/16.jpg', 'assets/img/portfolios/iron-man/17.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/iron-man-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ['Steven Grant Rogers'] },
          {
            'title': 'Alias(es)' ,
            'description': ["Steve Rogers", "Captain America", "Cap", "The First Avenger", "The Little Guy", "Soldier", "Mystery Man", "American Hero", "America's Golden Boy", "Mr. Rogers", "America", "Captain Stevens"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Birth date' ,
            'description': ['July 4, 1918']
          },
          {
            'title': 'Title(s)' ,
            'description': ['Captain (formerly)', 'Agent of S.H.I.E.L.D. (formerly)']
          },
          {
            'title': 'Affiliation' ,
            'description': ["United States Army (formerly)", "United Service Organizations (formerly)", "United States Department of the Treasury (formerly)", "SSR (formerly)", "Howling Commandos (formerly)", "S.H.I.E.L.D. (formerly)", "Avengers (formerly)", "Brooklyn Support Group (formerly)"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Iron Man 2 (mentioned)", "Captain America: The First Avenger", "The Avengers", "Iron Man 3 (mentioned; deleted scene)", "Thor: The Dark World (illusion)", "Captain America: The Winter Soldier", "Avengers: Age of Ultron", "Ant-Man (post-credits scene)", "Captain America: Civil War", "Spider-Man: Homecoming (cameo)", "Avengers: Infinity War", "Ant-Man and the Wasp (mentioned)", "Captain Marvel (mid-credit scene)", "Avengers: Endgame", "Spider-Man: Far From Home (picture)"]
          },
          {
            'title': 'One-shot' ,
            'description': ["Agent Carter (flashback)"]
          },
          {
            'title': 'TV series',
            'description': ["Agents of S.H.I.E.L.D. (mentioned)", "Agent Carter (flashback)", "Daredevil (mentioned)", "Jessica Jones (mentioned)", "Luke Cage (mentioned)", "Runaways (figure)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (footage)", "Team Thor (mentioned)", "Team Thor: Part 2 (drawing)"]
          },
          {
            'title': 'Game',
            'description': ["Captain America: Super Soldier", "Captain America: The Winter Soldier - The Official Game"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Chris Evans", "Patrick Gorman (old)"]
          },
          {
            'title': 'Voiced by' ,
            'description': ['Roger Craig Smith']
          }
        ]
      },
      description: 'Steve Rogers ... Raised to appreciate the ideals of democracy, endowed with a superhuman physicist, and led to being the most skilled fighter in the world. Alone or as a leader of the Avengers, the fight for freedom and justice.',
      description_more: ["Captain Steven Grant «Steve» Rogers is a World War II veteran, a founding member of the Avengers, and Earth's first superhero. Rogers had suffered from numerous health problems, and upon America's entry into World War II, was rejected from the service within United States Army despite several attempts to enlist. Rogers was the only recipient of the Super Soldier Serum developed by Abraham Erskine under the Strategic Scientific Reserve. Determined to serve, Rogers ultimately volunteered for the Project Rebirth, which enhanced the frail Rogers' body to the peak of human physicality. Mistrusted by Chester Phillips, the head of the SSR, Rogers was relegated to propaganda campaigns, and was given the new moniker of Captain America. Rogers later joined the war with a combat role after he single-handedly liberated captured Allied prisoners of war.",
      "From 1943 to 1945, Rogers attacked multiple HYDRA bases alongside the Howling Commandos, in another attempt to take down Red Skull, and recover the Tesseract. His famous World War II exploits had made him a living legend, and during this time he also formed a relationship with Peggy Carter. Despite Bucky Barnes seemingly dying during a mission, Rogers carried on to help the Allies win the war, but crashed into the Arctic during his final mission. Rogers then spent sixty-six years encased into ice in suspended animation before Rogers was eventually found by S.H.I.E.L.D. in the early 21st century.",
      "When he awoke, Rogers had found himself alone in a modern world that he hardly recognized, with no idea what to do with his life. Following Loki having stolen the Tesseract from S.H.I.E.L.D. and declaring war on humanity, Nick Fury enlisted Rogers' help in retrieving what he had once known as HYDRA's weapon, and also foiling Loki's plans. Joining the Avengers, Rogers played one of the key roles in the Battle of New York, successfully stopping the Chitauri Invasion, capturing Loki, and reacquiring the Tesseract while finding his place within this new world.",
      "Joining S.H.I.E.L.D. as his way to maintain peace and justice with the aid of Black Widow, Captain America had come into a fierce conflict against the Winter Soldier who had seemingly assassinated Fury. Having been blamed for the incident by Alexander Pierce, Rogers discovered that HYDRA, whom he thought had dissolved in 1945, had existed in secret as a parasite within S.H.I.E.L.D., and that they were planning to use Project Insight as a way to bring about a new world order, while also learning that Winter Soldier was, in fact, his best friend Barnes, operating as the brainwashed assassin. Along Romanoff, Maria Hill and Falcon, Rogers had ended the HYDRA Uprising. As the immediate threat of HYDRA was quelled, Rogers embarked on a quest to locate Barnes.",
      "During the search for Barnes, the Avengers had assembled in order to eliminate the remnants of HYDRA, which prompted Rogers to abandon his own quest and rejoin all of his former teammates to help capture the Scepter and Baron Wolfgang von Strucker. After securing their victory, Rogers was almost immediately thrown into another crisis when Ultron, the new peacekeeping artificial intelligent program designed by Tony Stark and Bruce Banner, began a plot to eliminate humanity. Following a prolonged and brutal conflict in which Vision's creation gave them an advantage, Ultron was defeated during the Battle of Sokovia: However, the cost of their battle meant many of the Avengers disbanded, while Rogers and Romanoff stayed to lead the second incarnation of the Avengers.",
      "While the Avengers conducted worldwide missions, they soon began tracking down Crossbones, only for Scarlet Witch to be blamed for innocent deaths when she failed to fully contain an explosion that Crossbones caused. Thaddeus Ross used the disaster to write the Sokovia Accords, but Rogers refused to sign due to moral disagreements. Rogers' problems increased more as Barnes resurfaced having seemingly caused a recent terrorist bombing, as Rogers chose to protect Barnes, which then lead to Ross sending Stark out to apprehend them both. Upon learning Helmut Zemo was to blame, Rogers fought against his former allies to find Zemo, only for Zemo's schemes to finally be completed as he revealed Barnes killed Stark's parents, resulting in Rogers going on the run and the Avengers falling apart due to Rogers and Stark's conflict.",
      "Having saved his friends from the Raft, Rogers sent Barnes to gain help from Black Panther in Wakanda, while he and all his allies then became vigilantes. However, when Thanos and his Black Order attacked Earth seeking the final Infinity Stones, Rogers came out of hiding in order to protect Vision. In order to keep Vision safe, Rogers had brought him to Wakanda, while he and Black Panther's army held off the onslaught of Outriders sent down by Thanos. Despite their success with destroying Thanos' forces, when Thanos himself arrived on the planet, he effortlessly overpowered Rogers and all the other heroes and took the Mind Stone, killing Vision in the process. Despite all their attempts, Thanos completed his goal and wiped out half of the population of the universe, leaving Rogers to witness his best friend die again alongside his countless others.",
      "Five years after the Snap, Captain America and his fellow Avengers found a method to traverse through time safely and traveled to various points in the past to amass all six Infinity Stones. After successfully aiding in the resurrection of the lives taken by the snap, Captain America participated in the Battle of Earth and was deemed worthy of Mjølnir, wielding it in combat against Thanos. After Iron Man sacrificed his life to kill Thanos and his army, Rogers attended his friend's funeral before traveling back in time to restore Mjølnir and the Infinity Stones to their original time. However, after returning the items, Rogers chose to travel back to the 1940s and live out a life in the past, where he married Peggy Carter. Having grown old, Rogers paid a visit to Wilson in 2023, entrusting him with his shield. "],
      list_img: ['assets/img/portfolios/captain-america/01.jpg', 'assets/img/portfolios/captain-america/02.jpg', 'assets/img/portfolios/captain-america/03.jpg', 'assets/img/portfolios/captain-america/04.jpg', 'assets/img/portfolios/captain-america/05.jpg', 'assets/img/portfolios/captain-america/06.jpg', 'assets/img/portfolios/captain-america/07.jpg', 'assets/img/portfolios/captain-america/08.jpg', 'assets/img/portfolios/captain-america/09.jpg', 'assets/img/portfolios/captain-america/10.jpg', 'assets/img/portfolios/captain-america/11.jpg', 'assets/img/portfolios/captain-america/12.jpg', 'assets/img/portfolios/captain-america/13.jpg', 'assets/img/portfolios/captain-america/14.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/captain-america-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Thor Odinson"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["God of Thunder", "Prince of Thunder", "Prince of Asgard", "Heir to the Throne of Asgard", "Son of Odin", "The Mighty Thor", "The Big Guy with the Hammer", "The Future King of Asgard", "The Man Who Wouldn't Be King", "The Big Blonde Dude with the Hammer", "First Son of Odin", "Your Majesty", "Lord of Thunder", "Thunder", "Stupid White Man", "Tiny Avenger", "Couple of Hot-Headed Fools (with Hulk)", "Strongest Avenger", "God of Hammers"]
          },
          {
            'title': 'Species' ,
            'description': ['Asgardian (Cyborg)', 'Frog (temporarily)']
          },
          {
            'title': 'Citizenship' ,
            'description': ['Asgardian']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Birth date' ,
            'description': ["964 A.D.-965 A.D."]
          },
          {
            'title': 'Title(s)' ,
            'description': ["God of Thunder", "Prince of Asgard (formerly)", "King of Asgard (formerly)", "King of New Asgard (formerly)"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["Asgardian Royal Family (formerly)", "Avengers (formerly)", "Revengers (formerly)", "Guardians of the Galaxy"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Thor", "Captain America: The First Avenger (drawing)", "The Avengers", "Iron Man 3 (mentioned)", "Thor: The Dark World", "Avengers: Age of Ultron", "Captain America: Civil War (mentioned)", "Doctor Strange (mid-credits scene)", "Spider-Man: Homecoming (mentioned)", "Thor: Ragnarok", "Avengers: Infinity War", "Avengers: Endgame", "Spider-Man: Far From Home (mentioned)", "Thor: Love and Thunder (unreleased)"]
          },
          {
            'title': 'TV series',
            'description': ["Agents of S.H.I.E.L.D. (mentioned)", "Luke Cage (mentioned)"]
          },
          {
            'title': 'Web series' ,
            'description': ["Team Thor", "Team Thor: Part 2", "Team Darryl (mentioned)"]
          },
          {
            'title': 'Game',
            'description': ["Thor: God of Thunder", "Thor: The Dark World - The Official Game", "Avengers: Damage Control"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Chris Hemsworth", "Dakota Goyo (young)", "Jaimie Alexander (illusion)"]
          },
          {
            'title': 'Voiced by' ,
            'description': ["Travis Willingham"]
          }
        ]
      },
      description: 'From the immortal Asgard greets us - The most powerful warrior of mythology, possessor of the mystic hammer Uru, Mjolnir. He is the Norse God of Thunder, master of the storm and lightning, heir to the throne of the immortal Asgard - The Mighty Thor!',
      description_more: ["Thor Odinson is the Asgardian God of Thunder, the former king of Asgard and New Asgard, and a founding member of the Avengers. When his irresponsible and impetuous behavior reignited a conflict between Asgard and Jotunheim, Thor was denied the right to become king, stripped of his power, and banished to Earth by Odin. While exiled on Earth, Thor learned humility, finding love with Jane Foster, and helped save his new friends from the Destroyer sent by Loki. Due to his selfless act of sacrifice, Thor redeemed himself in his father's eyes and was granted his power once more, which he then used to defeat Loki's schemes of genocide.",
      "Upon being welcomed back to Asgard as a hero, Thor was forced to return to Earth in order to retrieve Loki after he had survived to fall through a black hole and had begun his attempt at world domination, having taken possession of the Tesseract. Thor joined the Avengers under the guidance of S.H.I.E.L.D. and stood with them to stop the schemes of his own adopted brother, eventually following the newly formed team as they battled against Loki's army of the Chitauri during the Battle of New York until Loki was eventually defeated by the Avengers, captured and returned onto Asgard to await justice for his crimes against Earth.",
      "Thor returned to Asgard having defeated his brother's schemes, as he then helped the Asgardian Armies restore peace across all of the Nine Realms during the War of the Nine Realms. However, the peace proved to be short-lived as Thor then fought the Dark Elves during the Second Dark Elf Conflict as they had attempted to plunge the Nine Realms into eternal darkness. During these events, Thor was reunited with Jane Foster who had become host to the Aether and a target of the Dark Elves, with Thor being forced to free Loki from imprisonment for his aid. Eventually, the Aether was removed from Foster's body and Loki seemingly sacrificed Thor from Kurse, leading to the Dark Elves and Malekith's defeat. Thor renounced his claim to the throne and left Asgard for Earth so he could stay with Foster.",
      "During his stay on Earth, Thor helped the Avengers once again, this time in their attempts to locate Loki's Scepter. This also lead to him joining the fight against HYDRA. Following HYDRA's defeat and the capture of Baron Wolfgang von Strucker, the team had to stop the newly created Ultron, a rogue invention inadvertently created by Tony Stark which had threatened to wipe out all of humanity and replace it with its own Ultron Sentries. Once Ultron had been defeated, Thor promised his Avengers allies that he would return and went back to Asgard to investigate the visions he saw when being manipulated by Scarlet Witch of the Infinity Stones. In his investigations, Thor also discovered that Loki was still alive and had usurped Odin's royal throne during Thor's absence.",
      "To aid in both pursuing his brother and finding his father to return peace to Asgard, Thor sought help from Doctor Strange. However, Thor was just too late to save his own father from death. Shortly afterwards, Thor met Hela, the Goddess of Death and his sister. In the wake of his first encounter with Hela, Thor's hammer Mjølnir was destroyed and he was banished to Sakaar, where he was forced to compete in the Contest of Champions. After a reunion and subsequent fight with Hulk, the pair allied with the rogue Valkyrie in order to save Asgard and escape Sakaar. After battling with Hela and losing an eye to her, Thor then had Loki unleash Ragnarök and destroy Asgard, killing Hela in the process, although he escaped with the remaining Asgardians. Declaring that Asgard was all its people and not a place, Thor accepted his newfound position as king and decided to relocate the Asgardians on Earth.",
      "As they were en route to Earth, their ship was attacked by Thanos and the Black Order, who sought the Tesseract which Loki took from Asgard's vault at the last moment. Thor witnessed Thanos take the stone and murder his brother before he was flung from the ship and left for dead. He was picked up by the Guardians of the Galaxy and had teamed up with Rocket Raccoon and Groot to travel to Nidavellir. With the help of Eitri, Thor crafted Stormbreaker and aided the nation of Wakanda and the Avengers in defeating the Outriders and confronting Thanos. However, Thor squandered his chance to kill Thanos with his new weapon and Thanos activated the completed Infinity Gauntlet and erased half the universe's population from existence before he escaped. After the Avengers were joined by Captain Marvel, the team traveled to the Garden, where Thor and the Avengers ambushed and interrogated Thanos, discovering that the Titan destroyed the Stones, ensuring that a reversal of his actions was now impossible. Enraged, Thor beheaded Thanos using Stormbreaker and left the planet.",
      "Following Thanos' death, Thor left the Avengers and relocated to Tønsberg, Norway, where he and the surviving Asgardians resettled, renaming the town New Asgard. Five years later, Hulk and Rocket traveled to New Asgard to convince the now-overweight and depressed Thor to rejoin the team after discovering how to travel through time. Thor joined the Avengers on their Time Heist and participated in the Battle of Earth, where he fought Thanos again alongside Captain America and Iron Man, the latter sacrificing his life to eliminate Thanos and his armies. After attending Stark's funeral, Thor decided to go with the Guardians of the Galaxy, proclaiming Valkyrie to succeed him as the new ruler of the Asgardians. "],
      list_img: ['assets/img/portfolios/thor/01.jpg', 'assets/img/portfolios/thor/02.jpg', 'assets/img/portfolios/thor/03.jpg', 'assets/img/portfolios/thor/04.jpg', 'assets/img/portfolios/thor/05.jpg', 'assets/img/portfolios/thor/06.jpg', 'assets/img/portfolios/thor/07.jpg', 'assets/img/portfolios/thor/08.jpg', 'assets/img/portfolios/thor/09.jpg', 'assets/img/portfolios/thor/10.jpg', 'assets/img/portfolios/thor/11.jpg', 'assets/img/portfolios/thor/12.jpg', 'assets/img/portfolios/thor/13.jpg', 'assets/img/portfolios/thor/14.jpg', 'assets/img/portfolios/thor/15.jpg', 'assets/img/portfolios/thor/16.jpg', 'assets/img/portfolios/thor/17.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/thor-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Robert Bruce Banner"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Bruce Banner", "Hulk", "The Incredible Hulk", "Gringo", "Mr. Green", "Mysterious Friend", "White Man at the Bottling Plant", "The Green Guy", "The Big Green Dude", "The Target", "The Green One", "The Pioneer in Gamma Radiation", "The Big Guy", "A Mindless Beast", "Big Man", "Enormous Green Rage Monster", "Force of Nature on Legs", "Incredible Green Guy", "The Defending", "Stupid Avenger"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American', 'Sakaaran (formerly)']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Birth date' ,
            'description': ["December 18, 1969"]
          },
          {
            'title': 'Title(s)' ,
            'description': ["Doctor", "Champion"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["Harvard University (formerly)", "Culver University (formerly)", "Pingo Doce Bottling Plant (formerly)", "Avengers (formerly)", "Revengers (formerly)"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["The Incredible Hulk", "Thor (mentioned)", "The Avengers", "Iron Man 3 (post-credits scene)", "Captain America: The Winter Soldier (mentioned)", "Avengers: Age of Ultron", "Captain America: Civil War (footage)", "Spider-Man: Homecoming (picture)", "Thor: Ragnarok", "Avengers: Infinity War", "Captain Marvel (mid-credits scene)", "Avengers: Endgame"]
          },
          {
            'title': 'One-shot' ,
            'description': ["The Consultant (mentioned)"]
          },
          {
            'title': 'TV series',
            'description': ["Agents of S.H.I.E.L.D. (mentioned)", "Daredevil (picture)", "Jessica Jones (mentioned)", "Luke Cage (mentioned)", "Iron Fist (mentioned)", "The Defenders (picture)", "The Punisher (picture)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (mentioned)", "Team Thor"]
          },
          {
            'title': 'Game',
            'description': ["The Incredible Hulk", "Avengers: Damage Control"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Edward Norton", "Mark Ruffalo", "Taika Waititi (motion capture)"]
          },
          {
            'title': 'Voiced by' ,
            'description': ["Lou Ferrigno", "J.B. Blanc", "J.D. Hall", "Fred Tatasciore", "Jonathan Lipow"]
          }
        ]
      },
      description: 'Caught in the heart of a nuclear explosion, victim of the wild gamma radiation, Dr. Robert Bruce Banner is now transformed into tense times in the dark personification of his repressed rage and rage - In the most powerful creature that has walked the face of the Earth: The Incredible Hulk!',
      description_more: ["Robert Bruce Banner, M.D., Ph.D., is a renowned scientist and a founding member of the Avengers. As someone who was highly respected for his work regarding biochemistry, nuclear physics, and gamma radiation, he was commissioned by Thaddeus Ross to recreate the Super Soldier Serum which created Captain America, although Ross elected not to inform Banner what he was creating. However, when an exposure to high levels of gamma radiation instead of vita radiation went awry, the mild-mannered scientist had found that when angered, provoked or excited, he would transform into the huge, rage-fueled, nearly mindless creature known as Hulk.",
      "Fearful of the damage that Hulk could inflict as well as fleeing from the United States government, Banner attempted to commit suicide; when the attempt failed, he chose to live a discreet life in South America while also communicating with Samuel Sterns to cure himself. However, when General Ross had sent a team led by Emil Blonsky to apprehend Banner, he was then forced to return to New York City where he recruited the help of Betty Ross and Sterns to cure him of his affliction. Banner was apprehended by the Armed Forces shortly after, but Blonsky, who had received a variant of the Super Soldier Serum, was administered Banner's gamma-irradiated blood, transforming him into the Abomination and forcing Ross to allow Banner to turn into Hulk and battle him before then allowing Hulk to escape.",
      "Banner fled the United States and dedicated his time to aiding the sick and poor. When a mounting threat called for Banner's specialized scientific expertise, S.H.I.E.L.D. recruited him, knowing full well that the incredible strength of Banner's alter-ego, Hulk, would be an additional asset to the Avengers. Banner was tasked with tracking down the Tesseract, working alongside Tony Stark to achieve this. Despite almost causing a disaster when he was forcibly transformed into Hulk by Loki, Banner joined the Avengers during the Battle of New York and assisted them in defeating Loki and his Chitauri army. Once the Avengers split up in the wake of the battle, Banner had become good friends with Stark and relocated to the Avengers Tower, free to live his life without apprehension.",
      "In the wake of the HYDRA Uprising, the Avenger regrouped once more to battle the ever-growing threat of HYDRA, successfully capturing Wolfgang von Strucker and retaking the Scepter. In order to make it so that Earth could always be safe without constantly needing the Avengers to protect it, Banner assisted Stark with creating Ultron, an artificial intelligence. Ultron, programmed to protect Earth at all costs, deemed humanity and the Avengers as its greatest threat and focused on annihilating them. Banner was then enlisted by Stark to help create Vision, and was later coaxed by Black Widow into transforming into Hulk and help defeat Ultron. Following Ultron's defeat, Hulk commandeered a Quinjet and left Earth, flying into space and coming across a wormhole that caused the Quinjet to crash on the planet Sakaar, where the stressful environment prevented him from regressing back into Banner, causing him to remain in Hulk form for two years.",
      "On Sakaar, he became a gladiator for Grandmaster and was soon revered as a beloved champion, choosing to turn his back on Earth and enjoy the life of an admired warrior. However, when Thor arrived on the planet, Hulk fought against his old friend in the arena. In the wake of their fight, Thor informed Hulk that Asgard was under threat due to Hela's return. Hulk aided the Asgardians in their fight, defeating Fenris and allowing the Asgardians to board the Statesman vessel, and as Ragnarök was unleashed, joined them on their voyage to Earth.",
      "On their way back to Earth, the Statesman was attacked by the Black Order, who killed half of the Asgardians. Hulk challenged their leader, Thanos, who soundly defeated him. He was then teleported to the New York Sanctum by Heimdall, where Banner warned Doctor Strange, Iron Man and later Captain America of Thanos' arrival. Finding himself no longer able to transform into Hulk, Banner operated a Hulkbuster armor to aid the Avengers in the Battle of Wakanda. Although Banner and his allies managed to kill off Thanos' forces, Thanos personally arrived in Wakanda to retrieve the Mind Stone. He effortlessly subdued Banner and the other heroes and completed the Infinity Gauntlet, wiping out half of the universe's population, with Banner being one of the survivors.",
      "Some time after the Snap, Banner permanently merged himself and Hulk into one being, which combined Hulk's raw strength and physique with Banner's mind and intelligence and turned him into an adored celebrity. In 2023, he rejoined the Avengers to help them use Pym Particles and the Quantum Realm to travel through time. After traveling back to the Battle of New York in 2012, Banner successfully gained the Time Stone from the Ancient One and returned to the present. He and Rocket Raccoon helped Tony Stark design the Nano Gauntlet to contain the Stones the Avengers had collected. Banner elected to use the Stones to resurrect all the lives claimed by the Snap, injuring himself in the process. In the aftermath of the Battle of Earth, which resulted in Iron Man's death, Banner sent Captain America to return the Infinity Stones to their proper places in time. "],
      list_img: ['assets/img/portfolios/hulk/01.jpg', 'assets/img/portfolios/hulk/02.jpg', 'assets/img/portfolios/hulk/03.jpg', 'assets/img/portfolios/hulk/04.jpg', 'assets/img/portfolios/hulk/05.jpg', 'assets/img/portfolios/hulk/06.jpg', 'assets/img/portfolios/hulk/07.jpg', 'assets/img/portfolios/hulk/08.jpg', 'assets/img/portfolios/hulk/09.jpg', 'assets/img/portfolios/hulk/10.jpg', 'assets/img/portfolios/hulk/11.jpg', 'assets/img/portfolios/hulk/12.jpg', 'assets/img/portfolios/hulk/13.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/hulk-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Natalia Alianovna Romanoff"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Natasha Romanoff", "Black Widow", "Nat", "Natalie Rushman", "The Notary", "Master Assassin", "Tatiana Sokolova", "Alion Vans", "Marya Konn", "Irina Zlataryova", "Audrey", "Fräulein", "Hawley", "Auntie Nat", "Honey", "Daughter of Ivan", "Liebchen"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ["Soviet (formerly)", "Russian (formerly)", "American"]
          },
          {
            'title': 'Gender' ,
            'description': ['Female']
          },
          {
            'title': 'Birth date' ,
            'description': ["1984"]
          },
          {
            'title': 'Clearance' ,
            'description': ["Level 6 (formerly)"]
          },
          {
            'title': 'Title(s)' ,
            'description': ["Agent of S.H.I.E.L.D. (formerly)"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["Red Room (formerly)", "KGB Emblem 2 KGB (formerly)", "S.H.I.E.L.D. (formerly)", "STRIKE Team: Delta (formerly)", "Hammer Industries (formerly; undercover)", "Stark Industries (formerly, undercover)", "Avengers"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Iron Man 2", "The Avengers", "Captain America: The Winter Soldier", "Avengers: Age of Ultron", "Captain America: Civil War", "Spider-Man: Homecoming (video footage)", "Thor: Ragnarok (footage)", "Avengers: Infinity War", "Captain Marvel (mid-credits scene)", "Avengers: Endgame", "Spider-Man: Far From Home (picture)", "Black Widow (unreleased)"]
          },
          {
            'title': 'TV series',
            'description': ["Agents of S.H.I.E.L.D. (mentioned)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (footage)", "Team Thor (drawing)", "Team Thor: Part 2 (drawing)"]
          },
          {
            'title': 'Game',
            'description': ["Iron Man (mentioned)", "Iron Man 2", "Captain America: The Winter Soldier - The Official Game"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Scarlett Johansson", "Jenny Agutter (disguised)"]
          },
          {
            'title': 'Voiced by' ,
            'description': ["Catherine Campion", "Laura Bailey"]
          }
        ]
      },
      description: "Natasha Romanova, known as Black Widow, is one of the greatest spies still alive today, one of S.H.I.E.L.D.'s best agents, and a recurring member of the Avengers. She is a former pupil and close friend of Wolverine.",
      description_more: ["Natalia Alianovna «Natasha» Romanoff, also known as Black Widow, was one of the most talented spies and assassins in the entire world and a founding member of the Avengers. Originally a KGB operative and dangerous assassin, Romanoff was recruited into S.H.I.E.L.D. by Clint Barton. Having extensive mastery in martial arts and armed with her Bite, Black Widow became one of S.H.I.E.L.D.'s most efficient agents. During one mission, she was sent undercover into Stark Industries to watch Tony Stark due to the fear that he was dying. During this mission, Romanoff assisted Stark with defeating Ivan Vanko's terrorist plots against him.",
      "When Loki declared war on the Earth, Black Widow was recruited into the Avengers after Hawkeye had just been enthralled by Loki. Romanoff assisted in recruiting Stark and Bruce Banner into the team while they tracked down and attempted to capture Loki, eventually saving Barton from his grasp. Once Loki's entire plan had been uncovered, Romanoff joined the team during the Battle of New York and was instrumental in destroying the portal over the city which had been created by the Tesseract, effectively ending the entire invasion while Loki was defeated and captured.",
      "In the wake of the Avengers successfully defeating Loki, Romanoff had continued her work with S.H.I.E.L.D., this time working with Captain America. While working together, Romanoff and Rogers uncovered a conspiracy following an assassination attempt on Nick Fury, which had eventually led to them discovering that HYDRA had somehow been infiltrating their entire organization. Despite the efforts of the Winter Soldier to stop them, Romanoff helped expose Alexander Pierce's evil schemes to the world, which also resulted in all of her own morally dubious history being revealed. As a result, Romanoff was forced into dropping off the grid again and began rebuilding her cover.",
      "Romanoff eventually rejoined the Avengers, working to bring down various HYDRA cells across the world and assisting in the capture of Wolfgang von Strucker. However, before she could form a romantic relationship with Banner, the rogue artificial intelligence Ultron was created by Stark and Banner, forcing Romanoff and the rest of their team to join together and defeat him. Despite being captured, Romanoff was able to inform the team of Ultron's location on Sokovia, resulting in a final battle in which the Avengers had defeated Ultron once and for all. Unlike most members of the original Avengers, Black Widow remained a member while forming the second incarnation of the team.",
      "As many of the governments of the world had demanded the Avengers to sign the Sokovia Accords in the wake of their recent battles, Romanoff agreed to their terms and signed the Accords. She later joined Iron Man in a fight against Captain America due to his disagreements with the Accords and his criminal activities with the Winter Soldier who Rogers was attempting to protect. As the two Avengers' factions fought against each other, Romanoff betrayed Iron Man's team in order to assist Captain America to find the instigator of the team's fight. As a result, Black Widow had to escape from the government for aiding Rogers, while being on the run, Romanoff soon joined him and Wilson in stopping terrorists.",
      "When the threat of Thanos approached Earth, Romanoff, Rogers, and Wilson protected Vision, who had the Mind Stone, which Thanos was after. They later defended Wakanda from the attack, but were ultimately defeated when Thanos destroyed half of all life with the Infinity Gauntlet, where Romanoff emerged as one of the survivors. Romanoff was part of the Ambush on Thanos in an effort to retrieve the Infinity Stones and undo the Titan's snap, with no success.",
      "Five years later, Romanoff led the Avengers alongside Captain America, now formed by Okoye, Rocket Raccoon, Nebula, War Machine, and Captain Marvel. In order to undo the Snap, the remaining Avengers split up in teams to retrieve all Infinity Stones from several alternate timelines in the Time Heist. Sent to retrieve the Soul Stone on Vormir with Barton, Romanoff, against Barton's insistence, willingly jumped off the Vormir mountains into the abyss below, sacrificing herself in the process in order to obtain the Soul Stone for the Avengers. "],
      list_img: ['assets/img/portfolios/black-widow/01.jpg', 'assets/img/portfolios/black-widow/02.jpg', 'assets/img/portfolios/black-widow/03.jpg', 'assets/img/portfolios/black-widow/04.jpg', 'assets/img/portfolios/black-widow/05.jpg', 'assets/img/portfolios/black-widow/06.jpg', 'assets/img/portfolios/black-widow/07.jpg', 'assets/img/portfolios/black-widow/08.jpg', 'assets/img/portfolios/black-widow/09.jpg', 'assets/img/portfolios/black-widow/10.jpg', 'assets/img/portfolios/black-widow/11.jpg', 'assets/img/portfolios/black-widow/12.jpg', 'assets/img/portfolios/black-widow/13.jpg', 'assets/img/portfolios/black-widow/14.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/black-widow-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Clinton Francis Barton"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Clint Barton", "Hawkeye", "Greatest Living Marksman on the Planet", "Tall, Dark and Unauthorized", "The Hawk", "Stick in the Mud", "A Couple of Master Assassins (with Black Widow)", "Legolas", "Honey", "Old Man", "Arrow Guy", "Ronin", "Son of Edith", "Earthly Being"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Clearance' ,
            'description': ["Level 7 (formerly)"]
          },
          {
            'title': 'Title(s)' ,
            'description': ["Agent of S.H.I.E.L.D. (formerly)"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["S.H.I.E.L.D. (formerly)", "STRIKE Team: Delta (formerly)", "Avengers (formerly)"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Thor", "The Avengers", "Avengers: Age of Ultron", "Captain America: Civil War", "Spider-Man: Homecoming (drawing)", "Avengers: Infinity War (mentioned)", "Avengers: Endgame", "Spider-Man: Far From Home (picture)"]
          },
          {
            'title': 'TV series',
            'description': ["Agents of S.H.I.E.L.D. (mentioned)", "Hawkeye (unreleased)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (footage)", "Team Thor (drawing)", "Team Thor: Part 2 (drawing)"]
          },
          {
            'title': 'Game',
            'description': ["Avengers: Damage Control"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Jeremy Renner"]
          }
        ]
      },
      description: 'Trained by criminals and inspired by heroes, Clint Barton has gone from a troubled young man to one of the greatest heroes on Earth. The world knows him best as Hawkeye (Hawkeye): The most powerful shooter on the planet.',
      description_more: ["Clinton Francis «Clint«» Barton, also known as Hawkeye, is a skilled marksman, a former special agent of S.H.I.E.L.D. and one of the founding members of the Avengers. Known for his use of the bow and arrow as his primary weapon, Barton had become one of the best agents of S.H.I.E.L.D., responsible for the recruitment of Black Widow, whom he developed a strong friendship with. Assigned by Nick Fury into watching over the Tesseract, he was brainwashed by Loki and used as a pawn for all his evil schemes. However, following their Attack on the Helicarrier, he was freed from Loki's mental control by Black Widow and joined the Avengers to fight against Loki's Chitauri army in the Battle of New York, ending Loki's Invasion before Hawkeye had returned to his work as a S.H.I.E.L.D. agent.",
      "Hawkeye continued to work for S.H.I.E.L.D. until its collapse following the HYDRA Uprising, he and the Avengers worked to bring down the remnants of HYDRA, eventually capturing Wolfgang von Strucker and ending the organization's threat to the world. However, Hawkeye was pulled back into the fight as Tony Stark had inadvertently used HYDRA as well as some Chitauri technology to create Ultron. As Ultron tried to destroy the world, he allied himself with Pietro and Wanda Maximoff and Barton focused much of his efforts in convincing them to change sides while keeping all the Avengers safe by bringing them into his family home. During the final Battle of Sokovia, Hawkeye's life was saved by Quicksilver's sacrifice, resulting in Barton retiring from the Avengers to return to his family.",
      "Despite living happily within retirement for a brief time, Barton was recruited by Captain America to help him during his fight against the newly produced Sokovia Accords, which forced Rogers to protect his friend Bucky Barnes from being arrested for a crime he did not commit. Feeling that he owed a debt to Rogers and Maximoff, Hawkeye had joined in the Clash of the Avengers, fighting against Iron Man who was in support of the Accords. Despite putting up a good fight, Hawkeye and most of their team were eventually defeated and imprisoned at the Raft under the orders of Thaddeus Ross, only to be freed by Rogers. Barton returned back to retirement and, after striking his deal with Ross, was then placed under house arrest.",
      "In the wake of the Snap, Barton then went onto a grief-fuelled rampage against criminals for five years as a vigilante named Ronin. Having been found by Black Widow, Barton was then convinced to return to the Avengers to attempt to reverse the Snap. Hawkeye joined the team in enacting the Time Heist in order to obtain the Infinity Stones, during which he witnessed Romanoff sacrifice her life so Hawkeye could reclaim the Soul Stone. However, as the Avengers had succeeded in their goal, they were ambushed by Thanos, with Hawkeye being ordered to ensure Thanos could not get the Nano Gauntlet. Eventually, Thanos and his entire army were defeated as Tony Stark had sacrificed his life, allowing Barton to then return home with his beloved family, while he still mourned Romanoff's death. "],
      list_img: ['assets/img/portfolios/hawkeye/01.jpg', 'assets/img/portfolios/hawkeye/02.jpg', 'assets/img/portfolios/hawkeye/03.jpg', 'assets/img/portfolios/hawkeye/04.jpg', 'assets/img/portfolios/hawkeye/05.jpg', 'assets/img/portfolios/hawkeye/06.jpg', 'assets/img/portfolios/hawkeye/07.jpg', 'assets/img/portfolios/hawkeye/08.jpg', 'assets/img/portfolios/hawkeye/09.jpg', 'assets/img/portfolios/hawkeye/10.jpg', 'assets/img/portfolios/hawkeye/11.jpg', 'assets/img/portfolios/hawkeye/12.jpg', 'assets/img/portfolios/hawkeye/13.jpg', 'assets/img/portfolios/hawkeye/14.jpg', 'assets/img/portfolios/hawkeye/15.jpg', 'assets/img/portfolios/hawkeye/16.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/hawkeye-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Vision"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Vision of Hope", "Superbot", "Machine"]
          },
          {
            'title': 'Species' ,
            'description': ['Android']
          },
          {
            'title': 'Gender' ,
            'description': ['Male (masculine programming & voice)']
          },
          {
            'title': 'Birth date' ,
            'description': ["May 2015"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["Avengers"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Avengers: Age of Ultron", "Captain America: Civil War", "Spider-Man: Homecoming (mentioned)", "Avengers: Infinity War", "Avengers: Endgame (indirectly mentioned)", "Spider-Man: Far From Home (picture)"]
          },
          {
            'title': 'TV series',
            'description': ["WandaVision (unreleased)"]
          },
          {
            'title': 'Web series' ,
            'description': ["Team Thor (mentioned)", "Team Thor: Part 2 (drawing)"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Paul Bettany"]
          }
        ]
      },
      description: 'Vision is a synthezoid and an Avenger who possesses the power to alter his density at will. He is always afraid he may have lost touch with his inner humanity.',
      description_more: ["Vision was an android who possessed a synthetic body made from vibranium created by Ultron with Helen Cho's help, using the powerful artifact known as the Mind Stone to bring Vision to life. Originally conceived as the perfect form for Ultron, the body was taken by the Avengers before Tony Stark and Bruce Banner proceeded to upload the remnants of Stark's personal A.I. J.A.R.V.I.S. into it. Upon his birth, Vision declared he was the hybrid of both Ultron and J.A.R.V.I.S., one that would fight with them to protect humanity. Vision had then joined with the Avengers in the Battle of Sokovia, using his powers to prevent Ultron from transferring his consciousness to the internet, and allowing the Avengers to successfully put an end to Ultron.",
      "In the wake of the Ultron Offensive, Vision became an official member of the Avengers under Captain America's leadership. However, tension between these Avengers rose following the creation of the Sokovia Accords, as Vision saw the equations regarding the number of threats related to their actions as the reason for them to allow oversight of their actions. This led to a conflict, as Captain America had gone against the Sokovia Accords in order to protect the Winter Soldier, who was being framed by Helmut Zemo, forcing Vision to side with Iron Man in order to then bring Captain America and his allies to justice. During their conflict, Vision was involved in a battle which had concluded when Vision inadvertently shot War Machine out of the sky, while the Avengers were torn apart by their conflict.",
      "Feeling guilt over paralyzing War Machine, Vision, and Scarlet Witch had then quietly left the Avengers in order to rebuild a relationship. However, Vision was soon attacked by the Black Order, who were attempting to steal the Mind Stone from his head under the orders from Thanos. Having been rescued his allies, Vision agreed to have the Mind Stone removed from his head and destroyed, as they travelled into Wakanda to recruit the help of Shuri. Their attempts were unsuccessfully, as the Black Order attacked Wakanda, while Corvus Glaive was able to force the wounded Vision into the open. As Thanos arrived, Vision had convinced the devastated Scarlet Witch to destroy the Mind Stone, killing him, only for Thanos to use the Time Stone to then resurrect Vision and rip the stone from his head, killing him for a second time as Thanos claimed his victory. "],
      list_img: ['assets/img/portfolios/vision/01.jpg', 'assets/img/portfolios/vision/02.jpg', 'assets/img/portfolios/vision/03.jpg', 'assets/img/portfolios/vision/04.jpg', 'assets/img/portfolios/vision/05.jpg', 'assets/img/portfolios/vision/06.jpg', 'assets/img/portfolios/vision/07.jpg', 'assets/img/portfolios/vision/08.jpg', 'assets/img/portfolios/vision/09.jpg', 'assets/img/portfolios/vision/10.jpg', 'assets/img/portfolios/vision/11.jpg', 'assets/img/portfolios/vision/12.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/vision-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Pietro Maximoff"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Quicksilver", "Quick Little Bastard", "The Enhanced (with Wanda Maximoff)", "The Twins (with Wanda Maximoff)", "Something Too Fast To See", "Strucker's Prized Pupils (with Scarlet Witch)"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['Sokovian']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Affiliation' ,
            'description': ["HYDRA (formerly)", "Avengers"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Captain America: The Winter Soldier (mid-credits scene)", "Avengers: Age of Ultron", "Captain America: Civil War (picture)"]
          },
          {
            'title': 'TV series',
            'description': ["Agents of S.H.I.E.L.D. (mentioned)"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Aaron Taylor-Johnson"]
          }
        ]
      },
      description: 'The super-speed son of the infamous mutant conqueror Magneto, Pietro Maximoff has played many roles: super hero and super villain. Endowed with the power of super speed Pietro is one of the fastest heroes the world has ever seen.',
      description_more: ["Pietro Maximoff is the son of the mutant named Magneto and a gypsy named Magda, who fled in terror by the strange powers manifested by Magneto and his intentions to dominate the world. Magda sought refuge in a citadel in the Balkan mountains, on a mountain known as Wundagore in the small European nation of Transia, Magda was collected by Bova, a humanoid cow developed by being known as the High Evolutionary. With Bova as his midwife Magda gave birth to twins, a boy and a girl whom he called Pietro and Wanda. Still afraid that her husband would find her and find out about the existence of the children Magda left Bova taking care of her children and lost herself in the mountain where she apparently perished.",
      "Bova, thought that Wundagore was not a good place to raise children, and saw his opportunity when only a few nights later, a couple appeared during a storm, they were Robert and Madeline Frank (former superheroes who were active during the Second War World known as the Whizzer and Miss America). They came to Wundagore for help because Madeline was pregnant, but her son died during childbirth, so Bova introduced Robert to the twins as if they were his true children. But upon learning of the death of his wife Robert fled in pain. Bova then introduced the two little ones to his master, the High Evolutionary, who decided to give Django and Marya Maximoff an adoption for a gypsy marriage who had lost their two children, Ana and Mateo during the war.",
      "Thus the twins grew up with their new family until they reached adolescence and began to discover their mutant powers. When Django was forced to steal food to feed his hungry family, enraged villagers attacked the gypsy camp. Pietro managed to flee the camp with his sister thanks to his super speed, but the fact and circumstances of the separation from his family were so traumatic that they would not remember these details until their adulthood. For the following years, Wanda and Pietro roamed central Europe, feeding on what they could, Pietro always had a protective attitude towards his sister Wanda. One day Wanda accidentally caused a fire with his powers, causing a group of superstitious peasants to persecute her believing her a witch. Although Pietro tried to defend her, they were soon overtaken by the numerical superiority of their attackers and would have died possibly had it not been for the arrival of Magneto, who rescued them. They would ignore that it was their true father and Magneto without knowing that they were their children recruited them to join them to their Brotherhood of Evil Mutants, where they adopted the men of Quicksilver and Scarlet Witch.",
      "As members of the Brotherhood, Quicksilver and the Scarlet Witch helped Magneto in his terrorist campaigns against humanity and helped him fight the original members of the X-Men. For months they served Magneto for a feeling of obligation and fear of reprisals. Always unaware of the ties that bound them to the mutant leader.",
      "When Magneto was defeated by the overwhelming powers of the Stranger (a cosmic entity), Quicksilver and the Scarlet Witch left the Brotherhood; the Strange took Magneto away from Earth, and the Maximoff twins then returned to their native Transia.",
      "Pietro and Wanda would soon find refuge with the group of Super-Heroes called The Avengers, who was reforming their ranks, in the absence of several of its members. The twins were included along with Hawkeye in the new team. Although the team was considered less powerful and capable than the previous one, these new avengers would soon prove themselves by beating Kang the Conqueror and Doctor Doom, and other threats. Although Captain America initially had many clashes with Quicksilver and Hawkeye that often rebelled against his orders, the Avengers leader would manage to mold them as valuable team members.",
      "Since then Pietro would walk many times between the heroic and the villainy, because he felt that he sometimes did not fit on either side. He has been a member of the Brotherhood of Evil Mutants, The Avengers, X-Factor, the Royal Family of the Inhumans, the Knights of Wundagore, The West Coast Avengers, the Genosha Cabinet among others. Endowed with prodigious speed Pietro is one of the fastest beings on the planet and one of the most complicated heroes that the wonderful Marvel universe has to offer us."],
      list_img: ['assets/img/portfolios/quicksilver/01.jpg', 'assets/img/portfolios/quicksilver/02.jpg', 'assets/img/portfolios/quicksilver/03.jpg', 'assets/img/portfolios/quicksilver/04.jpg', 'assets/img/portfolios/quicksilver/05.jpg', 'assets/img/portfolios/quicksilver/06.jpg', 'assets/img/portfolios/quicksilver/07.jpg', 'assets/img/portfolios/quicksilver/08.jpg', 'assets/img/portfolios/quicksilver/09.jpg', 'assets/img/portfolios/quicksilver/10.jpg', 'assets/img/portfolios/quicksilver/11.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/quicksilver-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Wanda Maximoff"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Scarlet Witch", "The Twins (with Quicksilver)", "Little Witch", "The Enhanced (with Quicksilver)", "Strucker's Prized Pupils (with Quicksilver)", "Weapon of Mass Destruction", "Child"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['Sokovian']
          },
          {
            'title': 'Gender' ,
            'description': ['Female']
          },
          {
            'title': 'Affiliation' ,
            'description': ["HYDRA (formerly)", "Avenger"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Captain America: The Winter Soldier (mid-credits scene)", "Avengers: Age of Ultron", "Captain America: Civil War", "Avengers: Infinity War", "Avengers: Endgame", "Spider-Man: Far From Home (picture)", "Doctor Strange in the Multiverse of Madness (unreleased)"]
          },
          {
            'title': 'TV series',
            'description': ["Agents of S.H.I.E.L.D. (mentioned)", "WandaVision (unreleased)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (footage)", "Team Thor (drawing)"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Elizabeth Olsen"]
          }
        ]
      },
      description: 'Mutant and member of the Avengers, Scarlet Witch used her powers to manipulate probability and alter reality in her effort to help the world. After a massive breakdown, she then destroyed the foundations of it by causing the disaster known as M-Day.',
      description_more: ["Wanda Maximoff is a native of Sokovia who grew up with her twin brother, Pietro. In an effort to help purge their country of strife, the twins joined HYDRA and agreed to undergo experiments with the Scepter under the supervision of Wolfgang von Strucker, and received her superpowers as a result, with Wanda attaining various abilities including telekinesis, telepathy, and energy manipulation. When HYDRA fell, the twins joined Ultron to get their revenge on Tony Stark, but eventually switched sides and joined the Avengers when they discovered Ultron's true intentions. Although Pietro was killed during the ensuing Ultron Offensive, Wanda survived and became a member of the Avengers. During the Avengers Civil War, she sided with Captain America and was briefly imprisoned in the Raft before Rogers freed her along with his teammates.",
      "Over the next two years, Maximoff reunited and reconciled with Vision, and together the two started living off the grid in Europe, forming a romantic relationship. However, the two soon came under threat from Thanos and the Black Order, who sought the Infinity Stone in Vision's head. After coming under attack by the Order, the two Avengers reunited with their teammates and sought refuge in Wakanda. Maximoff partook in the city's defense when the Black Order launched a major assault against it, and during the battle, she managed to destroy the Mind Stone in attempt to stop Thanos, killing Vision in the process. However, using the Time Stone to reverse Vision's destruction, Thanos seized the stone from Vision allowing him to complete the Infinity Gauntlet; Maximoff was subsequently disintegrated in the Snap.",
      "After the effects of the Snap were undone in 2023, she was enlisted by Doctor Strange to aid her teammates, the Avengers, during the Battle of Earth, where she played an instrumental role in the Mad Titan's defeat. Maximoff attended Stark's funeral along with the other heroes. After the funeral, she comforted Clint Barton telling him Romanoff would be proud of him, remembering Vision too."],
      list_img: ['assets/img/portfolios/scarlet-witch/01.jpg', 'assets/img/portfolios/scarlet-witch/02.jpg', 'assets/img/portfolios/scarlet-witch/03.jpg', 'assets/img/portfolios/scarlet-witch/04.jpg', 'assets/img/portfolios/scarlet-witch/05.jpg', 'assets/img/portfolios/scarlet-witch/06.jpg', 'assets/img/portfolios/scarlet-witch/07.jpg', 'assets/img/portfolios/scarlet-witch/08.jpg', 'assets/img/portfolios/scarlet-witch/09.jpg', 'assets/img/portfolios/scarlet-witch/10.jpg', 'assets/img/portfolios/scarlet-witch/11.jpg', 'assets/img/portfolios/scarlet-witch/12.jpg', 'assets/img/portfolios/scarlet-witch/13.jpg', 'assets/img/portfolios/scarlet-witch/14.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/scarlet-witch-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Scott Edward Harris Lang"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Ant-Man", "Chang", "SFPD 56210", "Prisoner 121758584", "Scotty", "Cyber-Criminal", "Self-Proclaimed Whistleblower", "The Mastermind Vistacorp Cyber-Thief", "World's Greatest Grandma", "Giant-Man", "Humie", "Tiny", "The Guy Who Got Really Big", "Idiot", "Regular Size-Man", "Puppy", "Little Buddy", "Stuart Little", "Piss-Ant"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Affiliation' ,
            'description': ["Vistacorp (formerly)", "Baskin-Robbins (formerly)", "X-Con Security Consultants", "Avengers (formerly)"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Ant-Man", "Captain America: Civil War", "Spider-Man: Homecoming (video footage)", "Avengers: Infinity War (mentioned)", "Ant-Man and the Wasp", "Avengers: Endgame", "Spider-Man: Far From Home (picture)", "Ant-Man 3 (unreleased)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (2 episodes)"]
          },
          {
            'title': 'Game',
            'description': ["Avengers: Damage Control"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Paul Rudd", "Jackson Dunn (young)", "Lee Moore (old)", "Bazlo LeClair (baby)", "Loen LeClair (baby)"]
          }
        ]
      },
      description: 'Hank Pym is a genius, one of the founding members of the Avengers, the creator of Pym Particles, and a modern-day superhero. ',
      description_more: ["Scott Edward Harris Lang is a former criminal who was convinced by Hank Pym to take up his mantle as the new Ant-Man. As Ant-Man, Lang fought against Darren Cross who became obsessed with Pym Particles and intended to recreate and sell the technology to terrorist organizations such as HYDRA and the Ten Rings. After his daughter was taken hostage by Cross, Lang was able to send Cross into the Quantum Realm, where he saw Janet van Dyne, before successfully returning. Cross was presumably killed. Lang then began a romantic relationship with Hope van Dyne.",
      "During the Avengers Civil War, Ant-Man fought alongside Captain America after being recruited by Falcon, whom he had previously met before defeating Cross. He was given a chance to back out, as what they would be doing would be outside the law, but scoffed as being a wanted man was nothing new to him. Lang was subsequently imprisoned on the Raft following the Clash of the Avengers before being freed by Captain America. He, along with Hawkeye, returned to a normal life by making a deal with Thaddeus Ross and the FBI, which resulted in him being placed under house arrest.",
      "Two years after the Clash of the Avengers, Lang remained under house arrest, spending much of his time playing with his daughter and learning magic tricks. One day near the end of his sentence, Lang received a dream from Janet van Dyne in which he saw a younger Hope. Lang notified Pym and Hope, who was on the run because of the Sokovia Accords. Hope, now having taken up the mantle of Wasp, broke Lang out of his home whilst successfully evading police detection, and took him to her father's portable lab. At Pym's lab, the three learned that Lang was quantumically entangled with Janet and that they had a limited amount of time to retrieve her from the Quantum Realm. Ava Starr and Bill Foster, a former colleague of Pym's, sought to steal the lab and use Janet's energy to heal Ava of her intangibility and pain. Sonny Burch, a criminal businessman also sought out the lab for its advanced technology. Together, Lang and Hope were able to fight them off while Pym went into the Quantum Realm himself, successfully saving his wife. Upon her return, Janet was able to heal Ava. Lang was able to get back home just in time right before the FBI showed up following the end of his sentence and was no longer under house arrest.",
      "Not long after, Lang arrived in Luis' van on a roof with a portable Quantum Realm portal for the Pym family to acquire a substance to help heal Ava. While he was in the Quantum Realm, Thanos succeeded in gaining all six Infinity Stones from the Avengers and the Guardians of the Galaxy, thus wiping out half of all life in the universe. During a countdown before his return, Pym and the van Dynes were all turned to dust, leaving Lang stranded in the Quantum Realm, though the world believed Lang was another victim of the Snap.",
      "Five years later, Lang was freed from the Quantum Realm, after a rat accidentally activated the impounded van's portal. Having only been trapped for 5 hours in the dimension's time, Lang soon discovered that five entire years had passed in the real world. He sought out Captain America and the rest of the surviving Avengers to suggest using the Quantum Realm to travel back to the past and undo the Snap. Once Tony Stark figured out how to safely travel through time, Ant-Man alongside the Avengers went on a series of time heists to recover the Infinity Stones in the past. He later fought alongside the rest of the Avengers and their allies against Thanos in the final battle. Once Thanos and his forces were decimated, Lang reunited with his daughter and Hope."],
      list_img: ['assets/img/portfolios/ant-man/01.jpg', 'assets/img/portfolios/ant-man/02.jpg', 'assets/img/portfolios/ant-man/03.jpg', 'assets/img/portfolios/ant-man/04.jpg', 'assets/img/portfolios/ant-man/05.jpg', 'assets/img/portfolios/ant-man/06.jpg', 'assets/img/portfolios/ant-man/07.jpg', 'assets/img/portfolios/ant-man/08.jpg', 'assets/img/portfolios/ant-man/09.jpg', 'assets/img/portfolios/ant-man/10.jpg', 'assets/img/portfolios/ant-man/11.jpg', 'assets/img/portfolios/ant-man/12.jpg', 'assets/img/portfolios/ant-man/13.jpg', 'assets/img/portfolios/ant-man/14.jpg', 'assets/img/portfolios/ant-man/15.jpg', 'assets/img/portfolios/ant-man/16.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/ant-man-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Stephen Vincent Strange"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Doctor Strange", "Mr. Doctor", "Doc", "Stonekeeper", "Wizard", "Time Stone Guy", "Bleecker Street Magician"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Birth date' ,
            'description': ["Early 2017 (multiple times by Dormammu; deaths undone by the Time Stone)", "Spring 2018 (victim of the Snap; resurrected by Hulk in 2023)"]
          },
          {
            'title': 'Title(s)' ,
            'description': ["Doctor", "Master of the New York Sanctum"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["Metro-General Hospital (formerly)", "Masters of the Mystic Arts"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Captain America: The Winter Soldier (mentioned)", "Doctor Strange", "Thor: Ragnarok", "Avengers: Infinity War", "Avengers: Endgame", "Spider-Man: Far From Home (mentioned)", "Doctor Strange in the Multiverse of Madness (unreleased)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (mentioned)"]
          },
          {
            'title': 'Game',
            'description': ["Avengers: Damage Control"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Benedict Cumberbatch"]
          }
        ]
      },
      description: 'Once he was a man like others. But then he discovered independent reality, where the magic and soul of men shape the forces that shape our lives. At that moment, he was reborn, to become a man like no other.',
      description_more: ["The death of his father, and his brother would fill him with anger and guilt, Stephen froze his brother's body in the hope that one day medical science would bring him back to life.",
      "Not long after Stephen suffered a car accident that damaged his nervous system which would deprive him of exercising his career. Trying to heal would waste his fortune, and already in ruin and become a tramp he would hear from a mystic in the Himalayas who could heal him.",
      "Strange traveled to Tibet where he would find this teacher known as The Elder. Although Stephen doubted the magic, he stayed as a guest, having discovered that a disciple of the Elder known as Mordo would try to kill the old master. Strange had contact with the magic of Mordo.",
      "Having avoided betrayal and with a better understanding of magic, Strange would become the disciple of the Elder, who saw good in his soul, so Stephen Strange (Strange) would enter into the knowledge of magic to become the sorcerer more great that ever existed",
      "Expert in the use of magic, Dr. Strange can manipulate the mystical energy from various sources. His magic (like that of most sorcerers) derives from three main sources: the powers derived from the soul, mind and body (mesmerism, astral projection, telepathy, etc.)."],
      list_img: ['assets/img/portfolios/doctor-strange/01.jpg', 'assets/img/portfolios/doctor-strange/02.jpg', 'assets/img/portfolios/doctor-strange/03.jpg', 'assets/img/portfolios/doctor-strange/04.jpg', 'assets/img/portfolios/doctor-strange/05.jpg', 'assets/img/portfolios/doctor-strange/06.jpg', 'assets/img/portfolios/doctor-strange/07.jpg', 'assets/img/portfolios/doctor-strange/08.jpg', 'assets/img/portfolios/doctor-strange/09.jpg', 'assets/img/portfolios/doctor-strange/10.jpg', 'assets/img/portfolios/doctor-strange/11.jpg', 'assets/img/portfolios/doctor-strange/12.jpg', 'assets/img/portfolios/doctor-strange/13.jpg', 'assets/img/portfolios/doctor-strange/14.jpg', 'assets/img/portfolios/doctor-strange/15.jpg', 'assets/img/portfolios/doctor-strange/16.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/doctor-strange-portada.jpg',
      cite: "",
      cite_video: '',
      video: 'https://www.youtube.com/embed/FQew3FzqBw4',
      actor_name: 'Benedict Cumberbatch',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'thor-ragnarok',  'doctor-strange']
    },
    {
      name: 'Spider-Man',
      name_short: 'spider-man',
      img_card: 'card-spider-man.jpg',
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Peter Benjamin Parker"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Spider-Man", "Kid", "Guy Who Crawls Up the Walls", "Crime-Fighting-Spider", "Spider-Boy", "Amazing Man-Spider", "Queens' Own Colorful Local Crimestopper", "The Newest Official Member of the Avengers", "Iron Spider", "The Next Tony Stark", "The Next Iron Man", "Hormonal Teenager", "Scared Little Kid in a Sweatsuit", "Favorite Young Adult"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Birth date' ,
            'description': ["August 10, 2001"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["Midtown School of Science and Technology", "Stark Industries (formerly)", "Avengers (formerly)"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Iron Man 2", "Ant-Man (mentioned)", "Captain America: Civil War", "Spider-Man: Homecoming", "Avengers: Infinity War", "Avengers: Endgame", "Spider-Man: Far From Home", "Spider-Man 3 (unreleased)"]
          },
          {
            'title': 'One-shot' ,
            'description': ["Peter's To-Do List"]
          },
          {
            'title': 'TV series',
            'description': ["Runaways (figure)"]
          },
          {
            'title': 'Web series' ,
            'description': ["The Daily Bugle (picture & mentioned)"]
          },
          {
            'title': 'Game',
            'description': ["Avengers: Damage Control", "Spider-Man: Far From Home - Virtual Reality Experience"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Tom Holland", "Max Favreau (young)"]
          }
        ]
      },
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
      list_img: ['assets/img/portfolios/spider-man/01.jpg', 'assets/img/portfolios/spider-man/02.jpg', 'assets/img/portfolios/spider-man/03.jpg', 'assets/img/portfolios/spider-man/04.jpg', 'assets/img/portfolios/spider-man/05.jpg', 'assets/img/portfolios/spider-man/06.jpg', 'assets/img/portfolios/spider-man/07.jpg', 'assets/img/portfolios/spider-man/08.jpg', 'assets/img/portfolios/spider-man/09.jpg', 'assets/img/portfolios/spider-man/10.jpg', 'assets/img/portfolios/spider-man/11.jpg', 'assets/img/portfolios/spider-man/12.jpg', 'assets/img/portfolios/spider-man/13.jpg', 'assets/img/portfolios/spider-man/14.jpg', 'assets/img/portfolios/spider-man/15.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/spider-man-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["T'Challa"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Black Panther", "His Highness", "Your Highness", "The Other Guy", "New Guy", "Son of T'Chaka", "Cat Lover", "Kumkani", "Son of a Murderer", "Clown"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['Wakandan']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Title(s)' ,
            'description': ["Prince of Wakanda (formerly)", "Black Panther", "King of Wakanda"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["Golden Tribe", "Tribal Council"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Captain America: Civil War", "Spider-Man: Homecoming (footage)", "Black Panther", "Avengers: Infinity War", "Avengers: Endgame", "Spider-Man: Far From Home (picture)", "Black Panther II (unreleased)"]
          },
          {
            'title': 'Game',
            'description': ["Avengers: Damage Control"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Chadwick Boseman", "Ashton Tyler (young)"]
          }
        ]
      },
      description: "T'Challa is the Black Panther,the super genius warrior king of the African nation of Wakanda, the most technologically advanced nation on Earth. He is one of the smartest men in the Marvel Universe, a former Avenger, and Storm's husband.",
      description_more: ["Wakanda is an African nation, a country based on a warrior spirituality, so the title of Black Panther given to its kings is hereditary, but it has to be won through a series of arduous and dangerous tests. To this end heirs to the throne are especially educated since childhood. The next in the line of succession was T’Challa son of King T’Chaka. T’Challa was a super-genius and skilled in everything. His father T’Chaka was killed by Ulysses Klaw who had arrived in Wakanda in search of the Vibranium. After the murder of T’Chaka his younger brother S’yan would assume the mantle of the Black Panther ruling in his place. S’Yan was an excellent warrior as equal to what T`Chaka was, although he was not interested in the reign. S’yan loved his nephew T’Challa. At the death of his father the young T’Challa had a desire for revenge and so T’Challa went to study in America and Europe and thus learn from other cultures to become a better ruler for Wakanda.",
      "When T`Challa felt ready, he returned to Wakanda to claim his rights to the throne. At 19 years of age with a T’Challa mask he would challenge his uncle S’yan (King and Black Panther) whom he would defeat in clean combat, after that T’Challa would take the following challenges to become the next Black Panther.",
      "T’Challa would thus face the champions of the 18 tribes of Wakanda, being judged worthy by the Panther God (another form of the Egyptian goddess Bast) and having won and applied a rare heart-shaped herb that only grows in Wakanda. T’Challa would thus win the title of the Black Panther and the skills of the feline, mystically united to the God-Panther, gaining human skills.",
      "Thus T'Challa would rule the savage and technologically advanced Wakanda, and it would not take long for the King to need to prove himself and prepare for the future challenges he would have, thus challenging the group of superheroes known as the Fantastic Four, thus initiating his entrance to the community of superheroes of the world. T’Challa has been and is a member of The Avengers. His genius, skills and resources have made him one of the most dangerous and powerful men on the planet."],
      list_img: ['assets/img/portfolios/black-panther/01.jpg', 'assets/img/portfolios/black-panther/02.jpg', 'assets/img/portfolios/black-panther/03.jpg', 'assets/img/portfolios/black-panther/04.jpg', 'assets/img/portfolios/black-panther/05.jpg', 'assets/img/portfolios/black-panther/06.jpg', 'assets/img/portfolios/black-panther/07.jpg', 'assets/img/portfolios/black-panther/08.jpg', 'assets/img/portfolios/black-panther/09.jpg', 'assets/img/portfolios/black-panther/10.jpg', 'assets/img/portfolios/black-panther/11.jpg', 'assets/img/portfolios/black-panther/12.jpg', 'assets/img/portfolios/black-panther/13.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/black-panther-portada.jpg',
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
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Samuel Thomas Wilson"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Sam Wilson", "Falcon", "The Good Looking Guy with the Sunglasses", "The Badass", "Kid", "Good Man"]
          },
          {
            'title': 'Species' ,
            'description': ['Human']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American']
          },
          {
            'title': 'Gender' ,
            'description': ['Male']
          },
          {
            'title': 'Affiliation' ,
            'description': ["United States Air Force (formerly)", "Air National Guard (formerly)", "United States Department of Veterans Affairs (formerly)", "Avengers (formerly)"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Captain America: The Winter Soldier", "Avengers: Age of Ultron", "Ant-Man", "Captain America: Civil War", "Avengers: Infinity War", "Avengers: Endgame", "Spider-Man: Far From Home (picture)"]
          },
          {
            'title': 'TV series',
            'description': ["The Falcon and the Winter Soldier (6 episodes; unreleased)"]
          },
          {
            'title': 'Web series' ,
            'description': ["WHiH Newsfront (footage)"]
          },
          {
            'title': 'Game',
            'description': ["Captain America: The Winter Soldier - The Official Game", "Avengers: Damage Control"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Anthony Mackie"]
          },
          {
            'title': 'Voiced by' ,
            'description': ["Bumper Robinson"]
          }
        ]
      },
      description: "Empowered by evil, inspired by good, Sam Wilson's bleak outlook on life was wiped away the day he met Captain America. He uses his winged costume, combat prowess, and avian telepathy as the Falcon, defender of Harlem.",
      description_more: ["Samuel Thomas «Sam» Wilson, better known as Falcon, is a former United States Air Force pararescue airman, who left active duty when his wing-man Riley died in combat, instead choosing to help other veterans suffering from post-traumatic stress disorder. At this time, Wilson met Captain America and was drawn into his conflict with HYDRA, as Captain America needed help from anyone not associated with S.H.I.E.L.D. as they had been infiltrated by HYDRA. Retaking his title as the Falcon, Wilson had then assisted in destroying all Alexander Pierce's schemes of world domination. Following their victory against Pierce's HYDRA unit, Falcon agreed to assist Captain America in tracking down the Winter Soldier, who was in fact Captain America's close friend who had been brainwashed.",
      "As Falcon continued searching for the Winter Soldier, he was then recruited into the Avengers, since their original team had been disbanded following the defeat of Ultron. During his time with the Avengers, Falcon briefly encountered Ant-Man before assisting in defeating Crossbones. In the aftermath of several battles that had killed civilians, the Avengers were then forced into following the Sokovia Accords, putting them all under the government's full control. However, as the Winter Soldier was blamed for terrorist attacks by Helmut Zemo, Falcon stood by Captain America with protecting the Winter Soldier, which had then caused the Avengers Civil War. In the wake of this clash, Falcon, and several other Avengers who were loyal to Captain America, were defeated by Iron Man, and locked into the Raft, until Captain America freed them as they became fugitives.",
      "While the Avengers were still disbanded, the Earth had come under attack by Thanos and his Black Order, bringing Falcon and his allies out of hiding. Learning that Thanos intended to steal the Mind Stone from Vision, Falcon joined the Avengers in taking Vision to Wakanda for his protection, while they had then tried to keep Thanos' forces back. However, they were eventually defeated as Thanos claimed the Infinity Stones and used them to cause the Snap, killing trillions including Falcon. Eventually, that Snap was undone by the surviving Avengers, as Falcon rejoined their battles against Thanos, as they finally defeated him, at the cost of Tony Stark's life. In the aftermath of the battle, Falcon learned that Captain America returned to the past and had lived a full life with Peggy Carter, seeing him return as an old man, and passed his shield down to Falcon."],
      list_img: ['assets/img/portfolios/falcon/01.jpg', 'assets/img/portfolios/falcon/02.jpg', 'assets/img/portfolios/falcon/03.jpg', 'assets/img/portfolios/falcon/04.jpg', 'assets/img/portfolios/falcon/05.jpg', 'assets/img/portfolios/falcon/06.jpg', 'assets/img/portfolios/falcon/07.jpg', 'assets/img/portfolios/falcon/08.jpg', 'assets/img/portfolios/falcon/09.jpg', 'assets/img/portfolios/falcon/10.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/falcon-portada.jpg',
      cite: "",
      cite_video: '',
      video: 'https://www.youtube.com/embed/gfNEwhPxeGM',
      actor_name: 'Anthony Mackie',
      list_movies_apears: ['avengers-endgame', 'avengers-infinity-war', 'captain-america-civil-war', 'ant-man', 'avengers-ultron', 'captain-america-the-winter-soldier']
    },
    {
      name: 'Captain Marvel',
      name_short: 'captain-marvel',
      img_card: 'card-captain-marvel.jpg',
      info: {
        'description': [
          {
            'title': 'Real Name' ,
            'description': ["Carol Danvers"]
          },
          {
            'title': 'Alias(es)' ,
            'description': ["Captain Marvel", "Avenger", "Vers", "Auntie Carol", "Ace", "Janis Joplin", "Blockbuster Girl", "Starforce Lady", "Twinkle Fists", "Disaffected Niece", "Freak", "Space Soldier Wearing a Rubber Suit", "Raw Soldier", "One Woman Security Force", "New Blood", "New Girl", "Mohawk Lady", "The New Avenger"]
          },
          {
            'title': 'Species' ,
            'description': ['Human/Kree Hybrid']
          },
          {
            'title': 'Citizenship' ,
            'description': ['American", "Kree Imperial (formerly)']
          },
          {
            'title': 'Gender' ,
            'description': ['Female']
          },
          {
            'title': 'Birth date' ,
            'description': [""]
          },
          {
            'title': 'Title(s)' ,
            'description': ["Captain (formerly)"]
          },
          {
            'title': 'Affiliation' ,
            'description': ["United States Air Force (formerly)", "Starforce (formerly)", "Avengers (formerly)"]
          }
        ],
        'appearences': [
          {
            'title': 'Movies' ,
            'description': ["Captain Marvel", "Avengers: Endgame", "Spider-Man: Far From Home (mentioned)", "Captain Marvel 2 (unreleased)"]
          },
          {
            'title': 'Game',
            'description': ["Avengers: Damage Control"]
          }
        ],
        'actor': [
          {
            'title': 'Portrayed by' ,
            'description': ["Brie Larson", "Mckenna Grace (young)", "London Fuller (young)"]
          }
        ]
      },
      description: "After encountering the Kree hero Captain Marvel, Carol Danvers was accidentally subjected to a Kree Psyche-Magnitron which genetically transformed her into a superhuman Kree warrior.",
      description_more: ["The young Carol Danvers entered the Air Force upon graduation from high school. Carol was an excellent student achieving a rapid advance in her career, reaching the rank of Major. Due to her stellar performance, excellent combat skills and natural intelligence, Carol was recruited by the intelligence service. She ended up serving at the CIA, where she would meet Colonel Nick Fury. She partnered with Colonel Michael Rossi and the two became lovers. Carol had a distinguished career at the CIA.",
      "By then Carol would also meet with the Canadian agent named Logan (Wolverine). The two were partners and shared adventures. During their time together, Logan and Carol became very friends, even lovers. Both have saved each other's lives numerous times.",
      "After leaving her spy job, she became head of NASA security at Cape Canaveral, where she met the warrior Kree known as Captain Marvel. During a battle between Mar-Vell and his enemy Yon-Rogg, Carol was injured and while being transported by Captain Marvel was irradiated by the Psyche-Magneton (a machine of Kree origin). Draining the energies of the Nega-Bands of Mar-Vell the Psyche-Magneton would reconstruct Carol's DNA cell by cell creating a perfect synthesis of human and Kree genes. The machine caused Carol's genetic structure to somehow merge with Mar-Vell's. While Mar-Vell was not altered by the event, Carol was now a perfect hybrid of Kree and human genes. In addition, he had all the Kree de Mar-vell knowledge and training. Through this accident Ms. Marvel would be born one of the most powerful heroines on the planet."],
      list_img: ['assets/img/portfolios/captain-marvel/01.jpg', 'assets/img/portfolios/captain-marvel/02.jpg', 'assets/img/portfolios/captain-marvel/03.jpg', 'assets/img/portfolios/captain-marvel/04.jpg', 'assets/img/portfolios/captain-marvel/05.jpg', 'assets/img/portfolios/captain-marvel/06.jpg', 'assets/img/portfolios/captain-marvel/07.jpg', 'assets/img/portfolios/captain-marvel/08.jpg', 'assets/img/portfolios/captain-marvel/09.jpg', 'assets/img/portfolios/captain-marvel/10.jpg', 'assets/img/portfolios/captain-marvel/11.jpg', 'assets/img/portfolios/captain-marvel/12.jpg', 'assets/img/portfolios/captain-marvel/13.jpg', 'assets/img/portfolios/captain-marvel/14.jpg', 'assets/img/portfolios/captain-marvel/15.jpg', 'assets/img/portfolios/captain-marvel/16.jpg', 'assets/img/portfolios/captain-marvel/17.jpg', 'assets/img/portfolios/captain-marvel/18.jpg'],
      img_portafolio_portada: 'assets/img/portfolios/captain-marvel-portada.jpg',
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
  info: Info,
  description: string;
  description_more?: string[];
  list_img:string[];
  img_portafolio_portada:string;
  cite:string;
  cite_video:string;
  video:string;
  actor_name?:string;
  list_movies_apears?:string[];
};

export interface Info {
  description: Element[],
  appearences: Element[],
  actor: Element[]
};


export interface Element {
  title: string,
  description: string[]
};
