import { Injectable } from '@angular/core';
@Injectable()
export class MoviesService {
    private movies: Movie[] = [
    {
      name: 'Iron Man',
      id: 'iron-man',
      date: new Date(2008,4,30),
      img_card: 'iron-man',
      short_desc: 'Billionaire businessman Tony Stark will undergo a radical change in his life when he is kidnapped in the Middle East by a group of terrorists who use the same weapons that his company manufactures. To escape his captivity, he will make an armor with incredible capabilities that will be only the first of many and with which he will attempt thereafter to compensate for the damage caused and make a positive difference in the world.',
      duration: 126,
      genre: ['Action', 'Science fiction'],
      trailer: '',
      sinopsis: [
        "Tony Stark (Robert Downey Jr., 'Chaplin'), owner of Stark Industries, consecrated inventor, arms dealer and billionaire playboy, is kidnapped in Afghanistan after an arms demonstration for the United States Army. Forced by his captors to make a fearsome weapon, he ends up secretly building a revolutionary high-tech armor that he uses to escape.",
        "When he understands the great potential of the armor, he decides to review it to improve it and, thus, use it to keep justice and protect the innocent. After being rescued by James Rhodes (Terrence Howard, 'Crash'), he decides to detach himself from the production of military armament, which evidences the family business. Obadiah Stane (Jeff Bridges, 'The Great Lebowski'), the administrator of the same, warns him that this decision can lead to ruin.",
        "It comes to Toni that several of his company's weapons have reached the terrorist group that kidnapped him in Afghanistan. He asks his secretary, «Pepper» Potts (Gwyneth Paltrow, 'Shakespeare in Love'), to hack the information system of his own company to discover who has allowed such activities. In the end they discover that Stane himself leads a double life, trying to reproduce Toni 's robotic armor for his own benefit, so they will have to stop him",
        "«Iron Man» is the film adaptation of the famous Marvel comic, created by Stan Lee and Jack Kirby in 1963."
      ],
      ordre_vision: 1
    },
    {
      name: 'The incredible Hulk',
      id: 'incredible-hulk',
      img_card: 'incredible-hulk',
      date: new Date(2008,6,20),
      short_desc: 'Because of an accident while working with Gamma rays, Dr. Bruce Banner has acquired the ability to become a creature of uncontrollable strength and power. Pursued by the American army and with barely control over his unstoppable alter ego, Bruce hides in the most remote places on the planet while desperately seeking a cure with the help of the anonymous benefactor Mr. Blue.',
      duration: 102,
      genre: ['Action', 'Fantasy'],
      ordre_vision: 2
    },
    {
      name: 'Iron Man 2',
      id: 'iron-man-2',
      img_card: 'iron-man-2',
      date: new Date(2010,4,30),
      short_desc: 'The world knows that Tony Stark is Iron Man, which places the peculiar billionaire in the eye of the media hurricane and will generate for him a plethora of fans all over the world and also of new enemies that will seek to seize the secrets of his technology. But the biggest terrors for Tony Stark do not come from outside but from the poison that is slowly killing him and from his own inner demons that too often take the form of a bottle.',
      duration: 124,
      genre: ['Action', 'Adventure', 'Science fiction'],
      ordre_vision: 3
    },
    {
      name: 'Avengers',
      id: 'avengers',
      img_card: 'avengers',
      date: new Date(2012,4,27),
      short_desc: "Loki has returned to the earth and is willing to get the tesreact with his power to gain control of the planet. To try to stop him, Nick Furia will have to hurry to gather the most powerful heroes on the planet ... even if they don't have much interest in working together.",
      duration: 143,
      genre: ['Action', 'Adventure', 'Science fiction'],
      ordre_vision: 6
    },
    {
      name: 'Iron Man 3',
      id: 'iron-man-3',
      img_card: 'iron-man-3',
      date: new Date(2013,4,26),
      short_desc: 'Despite not yet being fully recovered from the events he experienced during the Avengers movie, Tony Stark manages to get in the spotlight of an international terrorist known only as "The Mandarin" and suffer one of the greatest and most devastating attacks on his person and his facilities. But Stark is a man whose resources go far beyond what his enemies suppose.',
      duration: 131,
      genre: ['Action', 'Science fiction'],
      ordre_vision: 7
    },
    {
      name: 'Avengers: Age of Ultron',
      id: 'avengers-ultron',
      img_card: 'avengers-ultron',
      date: new Date(2015,4,30),
      short_desc: 'The Avengers form a team and have practically finished with Hydra bases spread around the world. However, in one of these, the presence of two improved humans, Wanda and Pietro Maximoff will create complications. However, the real problems of the avengers will not come until an artificial intelligence developed as a team between Bruce Banner and Tony Stark becomes aware and decides that the best possible path for humanity is extinction. The era of Ultron has arrived.',
      duration: 141,
      genre: ['Action', 'Adventure', 'Science fiction'],
      sinopsis: ["It has been a year since S.H.I.E.L.D. collapsed with the resurgence of the terrorist organization HYDRA; the Avengers gather to track and eliminate HYDRA cells themselves. Their last mission takes them to the location of the Scepter that Loki used during the Chitauri Invasion; the Scepter is now in the possession of Baron Wolfgang von Strucker, one of HYDRA's notorious bosses who has been using the energy extracted from the alien weapon to propel advanced weaponry, as well as to create altered individuals. ",
      "The Avengers fight against HYDRA forces at the HYDRA Research Base in Sokovia. During the battle, without Strucker's approval, two of their agents join the conflict: Pietro and Wanda Maximoff. Pietro uses his superhuman speed to submit to Clinton Barton, while Wanda provides protection to Strucker, without success, since the latter ended up being captured by Steven Rogers, Anthony Stark finds the Scepter, and Wanda tries to stop him using his powers to implant a vision in his mind. In his vision, Stark sees his dead companions as the Chitauri launch an even greater invasion of Earth.When seeing Stark's nightmare, Wanda suspiciously allows the Avengers to recover the Scepter before fleeing with his brother.",
      "With the arrest of Strucker, HYDRA has suffered a great blow and the organization is in a state of discord. Upon returning to the Avengers Tower with the Scepter, Stark and Banner begin to study the weapon; their research leads them to find a network of neurons that, according to Stark, could be reconfigured into an artificial intelligence stored within the Scepter Gem. The two scientists extract it for use in Stark's secret peacekeeping program, «Ultron», designed to allow the Iron Legion to operate independently and safeguard the Earth under the direction of advanced artificial intelligence. After three days, the project apparently had little success. However, while the Avengers throw a party to celebrate their recent victories, Ultron awakens and immediately determines that the only way to save Earth is to eradicate humanity, which he considers the main factor in the turbulence of the planet. ",
      "JARVIS tries to stop Ultron, but the latter turns it off and then takes control of the Iron Legion's armor. After the Avengers have finished their party, the team, along with Maria Hill, James Rhodes and Helen Cho, they run a small contest to see who can raise the Mjolnir. Their competition is interrupted when Ultron suddenly directs the Iron Legion to attack them, and an intense battle is generated. There, Ultron has the opportunity to kill Cho, but mysteriously saves him life While the majority of the Iron Legion is destroyed by the Avengers, a drone manages to escape with the Scepter and flees to the HYDRA Research Base, where Ultron uses the technology stored there to begin the construction of an army of robotic drones. ",
      "Later, Ultron recruits the Maximoff twins, who want to destroy Stark because a Stark Industries bomb killed their parents when they were children; Wanda had voluntarily allowed Stark to leave with the Scepter in the hope that his fear of leaving Dying to the world leads him to build his own ruin, which in this case seems to be Ultron.After Ultron kills Strucker to lure the Avengers, he and the twins travel to South Africa to acquire Vibranio from the arms dealer, Ulysses Klaue. The Avengers try to stop them, but Wanda hypnotizes Thor, Romanoff and Rogers, giving them vivid hallucinations that make them invalid. She then hypnotizes Banner, turning him into Hulk and sending him to attack Johannesburg. Stark decides to call «Veronica», who deploys the armor Hulkbuster to subdue Hulk, resulting in collateral damage that causes public opinion about the Avengers to be against him.",
      "The team takes refuge in the Clinton Barton Farm, where Barton meets his wife Laura and their children Cooper and Lila. After experiencing apocalyptic visions in his hallucination, Thor leaves, traveling to the mystical «Spring of the View» with Erik Selvig to determine the meaning of his hallucination. On the other hand, Romanoff and Banner plan to flee along in order to start a new life when Ultron is defeated. Later, Nicholas Fury arrives at the farm and encourages the Avengers to form a plan to stop Ultron. Banner deduces that Ultron plans to create another body made of synthetic fabric, using the «Ark» device developed by Helen Cho. ",
      "Meanwhile, Ultron, Pietro and Wanda go to Cho's lab in Seoul, South Korea, where Ultron reveals his plan to use the Vibranium samples along with the Ark device to create a more powerful body, using the Scepter Gem as his primary energy source.To ensure his cooperation, Ultron takes control of Cho's mind with the Scepter.When Ultron transfers his consciousness to the synthetic body and Cho implants the Gem in his forehead, Wanda looks curiously at Ultron's mind and discovers their plan to destroy mankind: Horrified, the twins turn against Ultron, and leave the laboratory.On reaching Seoul, Rogers, Romanoff and Barton fight Ultron, who kidnaps Romanoff and derails a train to stop the Avengers. The twins help Rogers rescue passengers from the train, while Barton retrieves the Ark and takes it back to the Avengers Tower.",
      "In the Tower of the Avengers, Stark and Banner charge J.A.R.V.I.S., who survived Ultron's previous attack by escaping through the internet, to the synthetic body of the Ark as an attempt to rectify his mistake with Ultron. Believing that Stark is about to create another Ultron, Rogers and the twins try to stop them, but Thor arrives and gives life to the body with a lightning bolt from the Mjolnir. The resulting being, fortunately, is friendly. Thor explains that the Gem of the Scepter is the Gem of the Mind, one of the six Gems of the Infinite, the most powerful objects that exist, that Thor saw in his hallucination. The twins and the synthetic being, who later receives the name «Vision», allied with the Avengers, who return to Sokovia to end Ultron's threat. ",
      "Upon arriving in Sokovia, the Avengers discover that Ultron has used Vibranio and Chitauri anti-gravity technology to build a machine that lifts a large part of Novi Grad, the capital of Sokovia, to the sky. His intention is to crash it on the ground to to replicate a meteorite strike, causing a mass extinction event.While Banner rescues Romanoff, the Avengers evacuate civilians from the city and fight against the army of Ultron robots, but then Novi Grad ascends, causing the people no longer They can escape, however, Fury arrives with a SHIELD Helicarrier, along with James Rhodes, to help them evacuate the last civilians.Romanoff and Banner, the latter now transformed into the Hulk, join the battle and the team reaches the core of the Ultron device There, they eliminate most of the drones and severely damage Ultron's primary body.In retaliation, Ultron steals the Avengers' Quinjet beef and kill Pietro. Hulk jumps to the plane and throws Ultron to the ground, where Wanda finds him and destroys him as revenge for killing his brother. ",
      "One of Ultron's drones deactivates the device, which causes Novi Grad to start plummeting towards Earth and forces the other Avengers to flee aboard the Helicarrier along with evacuated citizens. Meanwhile, Stark fires his bursts of energy and Thor invokes lightning to reflect the core of the Vibranium. The resulting explosion shatters the city into debris, which falls safely into a nearby lake. Hulk, in search of peace after the battle, decides to put the Quinjet into mode stealthy and cuts communications when Romanoff tries to convince him to come back. Ultron's conscience tries to run away in a last remaining drone, but the Vision confronts him. The two have a brief exchange of ideals before the Vision destroys the drone, ending Ultron's threat.",
      "The Avengers move to the New Avengers Center, which was formed with the help of Fury, Cho, Hill and Selvig. Romanoff assumes he must move on without Banner, while Thor says goodbye to the team to return to Asgard in order to learn more about the Gems of Infinity; Stark and Barton also retire. Meanwhile, Rogers and Romanoff return to the facilities to train the second incarnation of the Avengers, consisting of Wanda Maximoff, Samuel Wilson, James Rhodes and Vision. ",
       "In the post-credits scene, Thanos opens a vault containing the Infinity Gauntlet. Dissatisfied with the failures of his pawns, the mad Titan puts on the Gauntlet, willing to obtain the Infinity Gems for himself and smiles at the possibility To succeed"],
      ordre_vision: 11
    },
    {
      name: 'Capitán América: Civil War',
      id: 'captain-america-civil-war',
      date: new Date(2016,4,29),
      img_card: 'captain-america-civil-war',
      short_desc: 'Key movie in the cinematic Marvel Universe. Given the high collateral damage and questionable results that have so far had the events in which the Avengers have been implicated, the American government and the united nations propose to the heroes that they undergo a control and supervision by these organisms. . They are called Sokovia agreements. Faced with the dilemma, the heroes will take opposite sides. Those who are in favor of signing the agreements and submitting to such supervision, with Tony Stark in the lead and those who, led by Steve Rogers, believe that this signature would mean the control of the avengers by political and economic interests and refuse to submit Civil war between heroes is served, but to complicate matters further, a dark character who manipulates events from the shadows is willing to use the division to end the Avengers forever.',
      duration: 148,
      genre: ['Action', 'Fantasy'],
      ordre_vision: 13
    },
    {
      name: 'Spider-Man: Homecoming',
      id: 'spider-man-homecoming',
      date: new Date(2017,7,28),
      img_card: 'spider-man-homecoming',
      short_desc: "Since a radioactive spider spiked and developed its incredible powers, Peter Parker has had a complicated life trying to combine his student life with that of urban justice. But the stakes went up even more when Tony Stark asked for help to face the rebel fAction of the Avengers. Peter thought that would be the step to the big leagues, but other than winning a suit with new and incredible technology Stark doesn't seem to have him at all. He has now discovered a dangerous band of mercenaries who steal alien technology for the black market and should try to stop them alone, but little does he imagine that this work can affect his personal life and his relationship with his mentor in a much more intense way than I had thought possible.",
      duration: 134,
      genre: ['Action', 'Adventure'],
      ordre_vision: 16
    },
    {
      name: 'Avengers: Infinity War',
      date: new Date(2018,4,27),
      id: 'avengers-infinity-war',
      img_card: 'avengers-infinity-war',
      short_desc: 'What had been feared for a long time has happened. Thanos has decided to claim the gems of infinity and with them, reduce the population of the universe by half. The heroes of the earth must team up to try to stop him but not even all his combined power will be enough to stop him. The final act of the Marvel film universe has begun.',
      duration: 156,
      genre: ['Adventure', 'Action'],
      ordre_vision: 19
    },
    {
      name: 'Avengers: Endgame',
      id: 'avengers-endgame',
      date: new Date(2019,4,25),
      img_card: 'avengers-endgame',
      short_desc: 'The events in Infinity War take the avengers and their allies to the most distressing situation they have ever known. But when everything seems irremissibly lost, a hope will appear from the most unexpected of places and give the heroes what they most crave; The possibility of confronting Thanos again and undoing the work of the mad Titan.',
      duration: 181,
      genre: ['Action', 'Fantasía', 'Adventure'],
      ordre_vision: 22
    },
    {
      name: 'Thor',
      id: 'thor',
      img_card: 'thor',
      short_desc: "In the mythical city of Asgard, everyone assumes that the time for King Odin's firstborn, the mighty Thor, is crowned as the new king. However, Odin realizes that his son is too proud and arrogant to occupy the throne and decides for him an exemplary punishment; He will be banished in the primitive world of Midgard (the earth) until he learns humility. In that world, Thor will know the true meaning of love and friendship and will have to figure out how to regain his power when the machinations of his perverse and devious brother Loki endanger both Asgard and the earth.",
      ordre_vision: 5
    },
    {
      name: 'Thor: The Dark World',
      id: 'thor-the-dark-world',
      img_card: 'thor-the-dark-world',
      short_desc: "Millennia ago, Odin's father, Bor, confronted Malekith, the dark elf who intended to unleash a terrible weapon known as the Ether over the nine kingdoms. Malekith was defeated and the weapon buried in a stone column. Today, Asgard is a kingdom in peace that prepares for convergence, a cosmic event that will open doors between worlds. Precisely through one of these portals, Jane Foster, Thor's earthly love will come into contact with the now liberated Ether, who will also awaken the dark Elf from his lethargy. The battle to save Jane and the nine kingdoms of Malekith's power is lending itself.",
      sinopsis: ["In the past, a cosmic event known as the Convergence occurred, opening portals between the Nine Worlds. A sinister race called the Dark Elves tries to use Convergence as a way to liberate the Ether, a force of mass destruction with the ability to destroy the entire Universe. The exact origin of the Ether is unknown, but it is known to be one of the six most powerful objects in the universe. The leader of the Dark Elves, Malekith, almost manages to use the Ether to cause instant destruction of the Nine Worlds under the mistaken belief of You can recreate them in your own image. However, he is opposed by Bor, the then King of Asgard and Odin's father, who uses the Bifrost to pluck the Ether from Malekith's hands just as he tried to carry out his plan, robbing the Dark Elves of his most powerful weapon . Returning to his home world, Svartalfheim, it becomes clear that the Dark Elves cannot defeat the Asgardians and that they are practically annihilated in battle. While the Asgardians, unable to destroy the Ether, seal it in a place that can never be found, Malekith, Algrim and several survivors manage to escape in suspended animation, promising to return one day and finish their plan.",
      "5,000 years later, after the Chitauri Invasion, a chained Loki is brought before Odin. The Father of All sentences Loki to life imprisonment in prison for his crimes against humanity. Meanwhile, in Vanaheim, home of the Vanir, Thor, along with the warriors Fandral, Volstagg, Hogun and Sif, fights the Marauders, a group of invaders who have systematically terrorized the Nine Worlds for the past two years. The Asgardians win the battle, and while Hogun remains in Vanaheim to help his people rebuild their home, Thor and his friends return to Asgard through the Bifrost Bridge, which was repaired by the power of the Teseract. Later Thor's victory is celebrated, who leaves quickly. He visits Heimdall every day, asking how Jane Foster is doing. Odin clearly does not approve of Thor's affection for Foster, since she will be dead long before him. ",
      "Back on Earth, Jane Foster is in London, after being contacted by Erik Selvig to investigate readings of an unknown nature. After not hearing from Thor for a while, she has an appointment with a man named Richard. Darcy Lewis quickly interrupts his appointment and explains that Foster's scientific team has captured strange signals, signals that have not been detected since the events that took place in New Mexico two years ago. They get into a car, where Lewis's intern, Ian Boothby is waiting for you, and they drive to where the signal is highest and they end up in an abandoned storage house.They find that a series of portals have been opened, linking the Earth with several different worlds and altering the laws of the physics, which causes gravity to change without warning. While Lewis and Boothby continue to play with the portals, Foster is consumed by one of them and is transported to a planet unknown She is in a dark abyss, where a strange vault is located. When you touch the vault, a red substance, the Ether, emerges from it and infests your body. Foster is teleported to Earth, waking up five hours later. She walks outside, where Lewis and Boothby have been waiting. The police had been called there by Lewis and, consequently, attempted to arrest all three for search of private property; a policeman tries to touch Foster, but the Ether pushes him. Thor arrives suddenly, seeking to investigate Foster's well-being, since Heimdall lost sight of her after she disappeared. While rejoicing to see him, Foster slaps Thor in the face for taking two years to visit her even though he was on Earth during the Battle of New York. Thor apologizes to her, but then takes her to Asgard to investigate the nature of the Ether.",
      "Once there, Heimdall greets them, but Jane Foster is quickly taken to the healing chambers so they can know what was happening to her. Scientists find the Ether in their body, but they don't know what it is really about. Eir tries to get Foster's Ether, but fails. Odin, furious because a human has entered Asgard, orders that they take her back to Earth, but when a guard touches her wrist, the Ether reacts defensively as he did with the policeman. Odin, recognizing the Ether, tells Foster about his many possible origins using the Book of Yggdrasil, and how the Dark Elves almost used it to destroy the worlds. While Odin works to find a way to eliminate the Ether without killing Foster, Frigga, Odin's wife, Thor's mother and Loki's adoptive mother, she befriends her. Frigga has been secretly trying to convey his disappointment to Loki regarding his actions, but he constantly rejects her. ",
      "Meanwhile, alerted by the use of the Ether by Foster, Malekith and the Dark Elves wake up from their long sleep. Under Malekith's orders, Algrim lets himself be captured by the Asgardians disguised as a Marauder and, using vile technology, becomes Kursed, a powerful warrior that the Dark Elves frequently used in their war against the Asgardians.He frees all the prisoners, except Loki, and begins a disturbance in the dungeons, distracting the Asgardians so that Malekith can carry his squad of ships to Asgard with little opposition. A battle is generated, during which they manage to enter the palace and destroy everything in their path. Frigga confronts Malekith in a duel while creating a holographic replica of Foster. Frigga almost manages to defeat Malekith, but the Kursed intervenes and mortally wounds her when she refuses to yield to Foster and the location of the Ether. In retaliation, an enraged Thor disfigures Malekith's face with lightning, ob linking the Dark Elves to retreat. Frigga then dies from his wound.",
      "Subsequently, a funeral is held for the dead Asgardians and Frigga. Odin, suffering from grief, imprisons Jane Foster. Thor knows that Malekith will return for Foster, but Odin, blinded by hatred and pain, refuses to release her. So, Thor has a plan to get her out, even though he would be committing treason. With Heimdall distracting Odin from them, Thor frees Loki from his cell, as Loki knows of the secret portals that could transport Foster to another world, driving Malekith away from Asgard. With the help of Sif, Fandral and Volstagg, Thor, Foster and Loki hijack a downed Dark Elf ship and manage to leave Asgard, and a hidden portal teleports them to Svartalfheim. However, while escaping, Foster's body is slowly infested by the Ether. ",
      "The trio lands on the moors of Svartalfheim and, by then, Foster's body has completely channeled the Ether, improving his perceptions, but weakening it physically. Malekith feels the transfer of the Ether and faces the trio in Svartalfheim, and in that At the moment, Loki seems to betray Thor, cutting off his hand and handing Fk to Malekith willingly. Loki tells Malekith that in exchange for the Ether, he wants a front row seat to see Asgard's destruction. Malekith proceeds to drain the Ether of Foster's body, but Loki's betrayal is revealed as a ruse, and it is revealed that Thor's injury was nothing more than a holographic projection destined to lull Malekith with a false sense of security. Summoning the Mjolnir, Thor try to destroy the Ether, but it fails, since it is indestructible. Kursed then fights Thor while Malekith and his minions leave the planet, and Kursed quickly gains the advantage against Thor Loki comes to Thor's aid, stabbing Kursed, but this has no effect on the Kursed, who sticks the blade over Loki's body as well. Loki manages to press one of the implosion bombs, destroying the Kursed. Loki then apologizes to Thor for his actions, and seems to die in his arms. After crying to Loki, Thor and Foster enter a cave, believing that they have failed to stop Malekith. Suddenly, Foster's cell phone starts ringing and they go deeper into the cave, finding a portal. The portal teleports them safely back to London. Meanwhile, an Einherjar guard appears in the same area where Loki died, and returns to Asgard to inform Odin of what happened.",
      "While Jane Foster was in Asgard, Darcy Lewis has been trying unsuccessfully to contact S.H.I.E.L.D. when she and Ian Boothby see in the news that Erik Selvig has been running naked in Stonehenge, and now they have put him in a retirement home to receive psychiatric care. They go there to get him out, and he tells them that his sanity was shaken after being hypnotized by Loki during the Chitauri Invasion. In recent months, Selvig has studied the effects of Convergence and has developed devices that can teleport people to different worlds. They reunite with Thor and Foster, and Selvig tells them that the people who lived in England after the previous Convergence had built certain objects to create a secret map to where the Convergence would reach its peak. The location is revealed as Greenwich. Foster theorizes that Malekith plans to extend the Ether through the portals so that he can destroy all the worlds at once. ",
      "They travel to Greenwich the next morning and, when they arrive, they discover that several portals have been opened over the city, a sign that the Convergence is reaching its highest point. Malekith arrives, and Thor faces him in a battle, with both opponents matched. The fight moves through several portals throughout the city, transporting them to different worlds. While the two are fighting, scientists use Selvig devices to deal with the Dark Elves, accidentally summoning an icy beast. in the process, Thor and Malekith are soon separated by one of the portals, and Malekith, now without opposition, releases the Ether in the portals Thor soon regroups with his friends and takes Selvig's devices, noting that while the Ether can be indestructible, Malekith himself isn't. Using the devices, Thor impales Malekith with them, allowing Foster to teleport him back to Svartalfheim, stopping his attack, however, Malekith's damaged ship begins to crash, and almost crushes Thor and Foster, but Selvig uses the last of his devices to transport him to Svartalfheim, resulting in the ship falling on Malekith, killing him. The portals are closed and the Convergence comes to an end. ",
      "Some time later, Thor returns to Asgard, where Odin congratulates him on his victory despite the crimes he committed in doing so. Odin tells Thor that he will be a wise king, but Thor responds by saying that he is not ready to assume the throne. Thor leaves Asgard to meet with Foster on Earth, however, when he leaves, it is revealed that Odin is Loki, who faked his death and usurped Odin's throne.",
      "In the first post-credits scene, Sif and Volstagg give the recovered Ether to Taneleer Tivan. The latter seems anxious to take it, but is curious to know why the Asgardians do not keep it safe in their own vault; Volstagg explains that the Teseracto is already in Asgard, and that keeping two Infinity Gems in one place is imprudent. When they leave, Tivan tells his assistant Carina; «One less, I will look for five». ",
       "In the second post-credit scene, Thor returns to Earth, where he happily meets Foster, not knowing that the icy beast that was teleported to Earth during the Convergence continues to run through London chasing a flock of birds."],
      ordre_vision: 8
    },
    {
      name: 'Captain America: The Winter Soldier',
      id: 'captain-america-the-winter-soldier',
      img_card: 'captain-america-the-winter-soldier',
      short_desc: 'Together with Natasha Romanov, the black widow, and the entire SHIELD organization, Captain America works on espionage, rescue and infiltration missions for the government, however, when Nick Furia receives a lethal attack that is about to end his life, it is revealed that something very dark is growing from within the spy agency itself. Among all the mysterious plot, the terrible winter soldier stands out, a very dangerous murderer and combat operative capable of surpassing Captain America himself, and that something absolutely unexpected will connect Steve Rogers with the winter soldier.',
      sinopsis: ["Two years after the Battle of New York, Steven Rogers continues to work under the alias of Captain America as an agent of the spy agency S.H.I.E.L.D. - While he was exercising on a morning in Washington DC, Rogers frequently passes on to a man who later introduces himself as Samuel Wilson, a veteran pararescue soldier of the United States Armed Forces who now works as a counselor in the Department of Affairs of Veterans. After exercising, Wilson and Rogers shared their experiences to adapt again to everyday life after serving the army. ",
      "Natalia Romanoff arrives to take Rogers with her on a mission to rescue some hostages from the search for SHIELD, the Lemuria Star, which had been taken by a group of pirates led by Georges Batroc. Rogers, Romanoff, and Brock Rumlow, together with other members of the SHIELD STRIKE unit, they successfully rescue the hostages and eliminate the pirates.However, halfway through the mission, Rogers discovers that Romanoff had been assigned his own secret mission under the order of the Director Nicholas Fury to extract SHIELD information from the ship on a USB drive. This aroused suspicion in Rogers because Romanoff deviated and almost endangered the mission. ",
      "Back in the Triskelion, Rogers is annoyed with Fury for lying to him. Fury, as a show of confidence, takes Rogers to the basement where he introduces the Insight Project to Rogers. The Insight Project consists of three new generation SHIELD Helicarriers that they will be thrown into the air and will connect to a satellite to neutralize enemy targets. Fury tells Rogers that «SHIELD accepts the world as it is, not as it would like it to be,» but Rogers responds by saying that «this is not Freedom, this is scary ...» Later, Rogers visits the Captain America exhibition at the Smithsonian Institute and also visits Margaret Carter, in a retirement home; Carter now suffers from some kind of dementia. He also meets with Wilson again after observing how he spoke in a session for veterans with PTSD. ",
      "Meanwhile, Fury discovers that the data extracted from the USB drive is inaccessible, and informs Alexander Pierce about this, after Pierce concluded a meeting with the World Security Council, where they talked about the Lemurian Star. Fury told him asks Pierce to make a formal request to the Council to delay the Insighit Project because Fury is suspicious. Fury leaves the Triskelion and is on his way to meet Maria Hill when he is attacked by murderers who personified policemen. He escapes, but he is then when he is stopped by a masked man in the middle of the road that fires a magnetic disk-grenade under Nicholas Fury's SUV, causing him to turn around, however, before the masked man reaches Fury, he he manages to use a high-tech device to cut the street and escape through the sewers. ",
      "Rogers arrives at his apartment, and after talking with his neighbor, he begins to suspect after learning that his stereo was on. He sneaks out the window and finds Fury sitting in a chair in the dark. He He tells Rogers that his wife kicked him out, while communicating through texts written on his phone to tell him that his story is just a distrAction because he was being spied on. Fury tells Rogers that SHIELD has committed, before being shot several times by the masked man who was in a nearby building. Fury gives the USB drive to Rogers and tells him that I didn't trust anyone, before falling unconscious. Rogers' neighbor destroys the door, introducing herself as Agent 13, who had been assigned by Fury to take care of Rogers. Next, Rogers chases after the masked man, jumping out the window of the buildings. He throws his shield at the masked man on the roof, but surprisingly the man is able to catch the shield with his cybernetic arm and throws it back before jumping out of the building and disappearing. ",
      "Fury is brought to a hospital in critical condition. His heart stopped during surgery and after doctors fail to revive him, his body is picked up by Maria Hill. Rumlow alerts you to Rogers that he is wanted in the Triskelion for urgent meeting. As I was not sure I could trust, Rogers quickly hides the USB drive into a vending machine and walks away. in the Triskelion, he is questioned by Pierce, who tells him that one of the friends of Fury and wants to know who killed him, Rogers does not trust Pierce and does not tell anything about the USB drive or the circumstances of the death of Fury, simply reiterating that Fury told him not to trust anyone He leaves Pierce to go back to the hospital.. ",
      "While he is withdrawing from the Triskelion in an elevator, Rogers is accompanied by several agents STRIKE, including Rumlow, and realizes that these have been sent to subdue him. He fights against attackers and manages to beat them, before jumping out of the elevator to avoid arrest. After landing, he goes on his motorcycle and evades a Quinjet who was attacking him. Pierce then declares that Rogers is a fugitive from SHIELD to not having provided information on the death of Fury. ",
      "Rogers later arrives at the hospital, where he realizes the USB drive is not in the place where he left it. Romanoff appears and reveals that she had taken it and he annoyingly asks him what he knows about everything that has happened. she tells him that masked man is a murderer known as the Soldier of Winter, and had met him before. with the help of Romanoff, they go to an Apple Store to see if they can access any information that may be valuable in USB. but the like Fury, find nothing. However, they are able to track the location of where the program on the USB. Rumlow and his team arrive and try to find them was written, but do not. ",
      "They steal a van and go to the location, while talking about the past of each. When they arrive, Rogers realizes that they are in old training center where he was formed during World War II. They find a storage room secret full of old computers inside an old SHIELD office - There you find a more modern USB slot and place the USB drive. This turns on the room and someone from the computer starts talking to them. ",
      "That someone is Arnim Zola, who tells them that he was recruited by SHIELD after World War II, and he helped rebuild HYDRA within SHIELD - However, in the 1970s, when he received the news that his body was dying (and SHIELD still in need of your help), his mind could be transferred to computers. He had been working on an algorithm that HYDRA wanted. He told Rogers and Romanoff that some of the deaths of the leaders of SHIELD had been due to HYDRA, as he showed the photograph of Howard Stark, implying that the death of Stark could not have been an accident. He also participated in the Program soldier Winter. But before Rogers and Romanoff could get more information about Zola, a SHIELD missile appears and destroys the facilities Rogers and Romanoff are able to survive the explosion and seek refuge with Samuel Wilson. lson tells them that he can help them by showing them a military program with advanced personal flight suits. ",
      "Rogers and Romanoff then return to Washington, DC, to capture the Jasper Sitwell agent, who is working for HYDRA. Sitwell had just finished a meeting with Senator Stern, a fellow HYDRA, when Wilson called Sitwell and forced him to go to the roof of a tall building. Wilson, working with Romanoff and Rogers, manage to extract information from the algorithm to Sitwell. He tells them that the algorithm Zola can calculate whether a person would be a threat in the future on the basis of their actions past . Sitwell also tells the three that HYDRA will use the Insight Project as a weapon to eliminate everything that they considered threats to them and the world, mentioning Anthony Stark, Bruce Banner and Stephen Strange, but this would also mean that millions of innocent people would die. ",
      "The group is heading towards the Triskelion, but they are attacked by the Winter Soldier and his men, who kill Sitwell. A battle breaks out, and while Rogers and the Winter Soldier fight, the latter's mask is torn off, revealing himself as Rogers' best friend, James Barnes, when Rogers calls him by his name, he doesn't recognize Barnes escapes when Romanoff attacks him with a grenade launcher, and Rogers, Romanoff, and Wilson are taken into custody by Rumlow and their names While they are in the van, one of the guards stuns the other guard, revealing that it is Maria Hill. They then use a device to cut the hole in the van and escape. ",
      "Hill takes them to a secret facility where Fury is resting, revealing that the director did not die, even though he was seriously injured. Fury had taken Tetrodotoxin B, developed by Bruce Banner, which lowered his heart rate to a single beat per minute. to appear to be dead, Hill and Fury tell them that the Insight Project is only two hours away from being launched and that they have to act quickly.The Helicarriers would reach three thousand feet, connecting with the Insight satellites, and aiming at all their targets before the only way to prevent this from happening was to change three special chips that would take SHIELD's control over the Helicarriers. ",
      "Because Rogers had lost his suit before, he bursts into the Captain America exhibition of the Smithsonian Institute and steals the suit that was on display. Meanwhile, Barnes is preparing for battle, but he begins to wonder who he is and remember what happened; after falling off the train, he was found by HYDRA, including Arnim Zola, who put the arm prosthesis on him, erased his memories and put him in a cryogenic state between the missions so that he did not age. Pierce decides that he is starting to remember too much about his past and requests to be brainwashed again. ",
      "The members of the World Security Council arrive at the Triskelion. Each is assigned a credential on their collar that grants them access to any part of the Triskelion. They then meet at Alexander Pierce's office. Rogers and Wilson break into the Triskelion and take control of the communication systems. Rogers reveals to the agents that there are HYDRA infiltrators inside SHIELD, and that they could not be allowed to launch the Insight Project. Rumlow and his men enter the control room and they threaten a technician to start the Helicarriers. However, Agent 13 intervenes, starting a shooting, but Rumlow manages to get the Helicarriers to get going. ",
      "A Pierce will deliver a weapon and this he points to the councilman Singh, but Romanoff, using a Velo photostat and disguised as Hawley councilman, stops him. Romanoff starts loading all files SHIELD and HYDRA internet. Pierce, who was being pointed, he informs Romanoff that two Alpha level members are needed to disable the encryption that the files have and that there is only one present.Nicholas Fury, another Alpha level member, arrives in a helicopter to the Triskelion.Fury points out that Pierce probably He erased all traces of him as Director of SHIELD, but that he had backed up the retina scanner with his damaged eye instead of his usual one.Fury and Pierce then scan their retinas and disable file encryption, so which allows Romanoff to load the files. ",
      "Rogers and Wilson manage to put the chips, with a bit of difficulty, in two of the Helicarriers, but when Wilson leaves for the last one in his return suit, the Winter Soldier damages him and he is forced to parachute to the Triskelion. Hill notifies Wilson that Rumlow is heading to Pierce's office. Wilson intercepts him and the two begin to fight. ",
      "Rogers tries to place the last chip, but confronts Banes. The two fight, and Rogers tries to convince Barnes that he was good once. In Pierce's office, the file upload is over. However, Pierce uses a device to trigger an electric shock on the collars of the members of the World Security Council, killing them instantly Romanoff is still safe, but Pierce uses the device to threaten Fury and Romanoff to lower their weapons. During this time, the Helicarriers of the Insight Project have connected to the satellites and are starting to run the Zola Algorithm, scanning their targets. Rogers manages to place the last chip, causing the targets to change and the Helicarriers to fire at each other. ",
      "Pierce witnessed the destruction of the Insight Project Helicarriers. He decides to use the security badge to threaten Romanoff and escape the Triskelion. Romanoff however, activates a taser disk on it, temporarily deactivating the security badge to give him enough time for Fury to shoot Pierce and kill him. ”Wilson, who is still fighting with Rumlow, sees a Helicarrier crashes with the Triskelion and jumps from the 41st floor through the window and is saved by Fury and Romanoff, who piloted a helicopter.",
      "The Helicarrier where Rogers and Barnes are is very damaged by the fire caused by the confrontation between the aircraft. Before he passes out, Rogers promises Rogers that he will always be with him until the end, exchanging the promise that Barnes made to decades ago, Rogers then falls into the water below and, when he is almost drowning, a hand grabs him and drags him from the water; it is Barnes, who then disappears. ",
      "Rumlow is buried under the rubble, but later it looks like he is taken care of by doctors. When Rogers wakes up a little later, a lot of events have occurred; SHIELD is unstable at this time due to HYDRA, Nicholas Fury is considered officially dead and he destroys all evidence of being alive, even replacing his eye patch with sunglasses. If someone asked him what happened to Fury, Rogers had to answer that he is dead. ",
      "Romanoff appeared at a congressional hearing in the United States Capitol with high-ranking officials to discuss who was responsible for the fall of SHIELD. Because all SHIELD files have been uploaded to the internet, along with Romanoff's past, she sets out to find a new identity. Romanoff then gives Rogers a file with information about Barnes and the experiments they did with him, before saying goodbye. Wilson realizes that Rogers is going to look for Barnes to make him remember who he really is, and decides to accompany him. ",
      "In the first post-credit scene, Baron Wolfgang von Strucker is observing the Scepter, declaring to List that there are still HYDRA agents throughout the world that continue to operate. He then approaches a couple of cells where they are contained a man who is running at incredible speed, and a woman who is levitating a few cubes.The two are known as the Maximoff twins and as the only survivors of a group of volunteers who underwent von Strucker's experiments, who declares that now all they are living in the «age of miracles».",
      "In the second post-credit scene, James Barnes, who is dressed as a civilian, is at the Smithsonian Institute, where he reads an entire section dedicated to him, to learn more about his past."],
      ordre_vision: 9
    },
    {
      name: 'Guardians of the Galaxy',
      id: 'guardians-of-the-galaxy',
      img_card: 'guardians-of-the-galaxy',
      short_desc: "Peter Quill is an earthly child who was abducted in the eighties shortly after his mother's death. He spent his childhood with the thieves and alien smugglers of Yondu Udonta, from whom he learned until he was one of the best. At present, he has managed to steal a mysterious orb and intends to sell it on the planet Xandar, home of the Nova Corps. What Quill does not know, is that the orb is actually one of the gems of infinity and will get them to go for it from galactic bounty hunters like Rocket and Groot, lethal killers like Gamora and even less imagines that he will have to make a unthinkable alliance with all of them if he wants to save his life and escape from Thanos himself and Ronan, the accuser Kree.",
      ordre_vision: 10
    },
    {
      name: 'Guardians of the Galaxy 2',
      id: 'guardians-of-the-galaxy-2',
      img_card: 'guardians-of-the-galaxy-2',
      short_desc: "Peter Quill, Rocket Racoon, Gamora, Drax and a reborn Groot form an unlikely team known as «Guardians of the Galaxy» their ability to make a living as mercenaries and bounty hunters in the galaxy is only matched by their ability to get into trouble. When they are about to be exterminated by a misunderstanding with the supreme empress of the race of sovereigns, the guardians are rescued by Ego, an incarnated cosmic entity that claims nothing more and nothing less than being the lost father of Peter Quill.",
      ordre_vision: 15
    },
    {
      name: 'Ant Man',
      id: 'ant-man',
      img_card: 'ant-man',
      short_desc: "Scott Lang just got out of jail. All he wants is not to get into trouble and ingratiate himself with his ex-wife so that she doesn't stop him from seeing what he loves most in the world, his daughter Cassie. However, things will not be easy for Scott when he makes a living and ends up being involved in stealing a very special device. A suit that belongs to the retired scientist Hank Pym, creator of the so-called Pym particles and former Shield field agent who developed enough technology to shrink to microscopic levels and control insects. However, the theft is not what it seemed and Scott will end up involved in Pym's plans to prevent the theft of his technology and whether or not he wants to become the new ant man.",
      ordre_vision: 12
    },
    {
      name: 'Black Panther',
      id: 'black-panther',
      img_card: 'black-panther',
      short_desc: "After the death of King T'chaka, his son and heir Prince T'Challa must take his place not only as king of the hidden country of Wakanda, but also as Black Panther, the superhuman protector of the kingdom. Aided by his brilliant sister Shuri, his personal guard corps, known as Dora Milaje, and the rest of the Wakanda tribes, T'Challa must face a challenge that will call into question his legitimacy as king and redefine the role of Wakanda before the world thinking if, for the first time in its history, it must reveal to the planet that they have the largest existing source of Vibranium, a metal of incredible characteristics that has endowed them with superior technology but that has made them target of all types of smugglers and Mercenaries who seek to seize this incredible raw material.",
      ordre_vision: 18
    },
    {
      name: 'Ant-Man and the Wasp',
      id: 'ant-man-and-the-wasp',
      img_card: 'ant-man-and-the-wasp',
      short_desc: "The events that took place in Civil War mean that Scott Lang is under house arrest, and Hank Pym and his daughter Hope Van Dyne are unaccounted for and sought by justice. However, Hank has not stopped working on the idea of reconnecting with the quantum universe and perhaps thus rescuing his wife Janet, lost years ago in that underworld. For this he will require Scott's help even if it means he can be arrested again.",
      ordre_vision: 20
    },
    {
      name: 'Doctor Strange',
      id: 'doctor-strange',
      img_card: 'doctor-strange',
      short_desc: "Dr. Stephen Strange is a surgeon as bright as paid of himself that one day he suffers a terrible accident that leaves his hands in an unusable state for surgery. Desperately seeking a cure, Strange ends up having news of a remote region of the East where he goes in search of unknown healing techniques in the West. There, to his surprise, he will discover that magic exists and can be mastered by work and study if he is able to master his ego and put himself at the orders of the old woman. A very powerful sorceress charged with defending the world from the incursions of other dimensional planes and whose authority is now undermined by the rebellion of Kaecillius, one of his former students who has submitted to the power of the extra-dimensional demon Dormammu.",
      ordre_vision: 14
    },
    {
      name: 'Thor: Ragnarok',
      id: 'thor-ragnarok',
      img_card: 'thor-ragnarok',
      short_desc: "Overwhelmed by the dreams that make him foresee Ragnarok, the end of the gods, Thor returns to Asgard where he discovers that his brother Loki is alive and pretends to be his father Odin, who has disappeared. Thor and Loki should look for the old king but lurking after Odin's disappearance is Hela, the goddess of the underworld who becomes willing to claim Asgard. She will inflict an absolute defeat on the two brothers of Asgard and all the warriors of the city, and will force Thor and Loki to an involuntary exile of unforeseeable consequences.",
      ordre_vision: 17
    },
    {
      name: 'Spider-Man: Far From Home',
      id: 'spider-man-far-from-home',
      img_card: 'spider-man-far-from-home',
      short_desc: "After the momentous events in Avengers; Endgame, Peter Parker must try to resume his life and find his role as a hero in a world that has changed forever and whose challenges seem more dangerous than ever.",
      ordre_vision: 23
    },
    {
      name: 'Captain Marvel',
      id: 'captain-marvel',
      img_card: 'captain-marvel',
      short_desc: "Set in the 90s, this new adventure presents a period of history never seen before in the Marvel Cinematic Universe. The journey of Carol Danvers to become one of the most powerful heroines in the universe, Captain Marvel, a member of a race of noble warrior heroes. While a galactic war between two alien races arrives on Earth, Danvers will fight alongside a small group of allies, while trying to find herself to discover who she really is.",
      ordre_vision: 21
    },
    {
      name: 'Captain America: The First Avenger',
      id: 'captain-america-the-first-avenger',
      img_card: 'captain-america-the-first-avenger',
      short_desc: "Born during the Great Depression, Steven Rogers grew up as a fragile young man in a poor family. Horrified by the footage of the Nazis in Europe, Rogers prepared to enlist in the army. However, due to his fragility and illness, he was rejected. Listening to the young man's sincere plea, General Chester Phillips offered Rogers the opportunity to participate in a special experiment ... Operation: Renaissance. After weeks of testing, Rogers finally received the Super Soldier Serum and was bombarded by «Vita rays.» Steven Rogers emerged from treatment with a body as perfect as a capable and fit body. Rogers underwent an intensive program of physical and tactical training. Three months later, he was given his first assignment as Captain America. Armed with his indestructible shield and his ability to battle.",
      sinopsis: ["In 2011, a group of researchers explored the Arctic Circle and discovered the buried remains of a large plane. While they investigate inside the aircraft, two of the researchers discover a frozen and circular object with red, white and blue ornaments. ",
      "In March 1942, Johann Schmidt, the Nazi HYDRA division commanding officer and his men invade an ancient church in Tønsberg, Norway, in search of a mysterious and cosmic device known as the Teseract, which possesses incalculable powers. Upon discovering the true location of the Teseracto, Schmidt kills the head of the church along with everyone else in the town. ",
      "In New York City in 1943, Steven Rogers is rejected once again for military service of World War II, despite making several inventions in different enlistment offices, due to his numerous health problems and weak resistance Physics While attending an exhibition of future technologies with his friend James Buchanan Barnes, Rogers tries again to enlist after accidentally hearing a conversation between Rogers and Barnes about his desire to help in the war, Dr. Abraham Erskine approves the request for Rogers to enlist as a candidate for the Renaissance Project, an experiment developed by the Strategic Scientific Reserve under the supervision of Erskine, Colonel Chester Phillips and the English agent, Margaret Carter. ",
      "During basic training, Colonel Phillips is not convinced of Erskine's claims that Rogers is the right person for the procedure, but he finally accepts it after seeing Rogers commit an act of bravery. The night before the treatment, Erskine He reveals to Rogers that Schmidt was given a pre-eliminated version of the serum he was developing and suffered negative side effects, due to his internal ambition for power and obsession to become a “superior man.” However, he says he chose Rogers because he believed that he was a good man and that, having been weak all his life, he would not lose respect for the strength he would gain.",
      "In New York, Erskine is assisted by Howard Stark, who submits Rogers to the Super-Soldier treatment, putting him in a special chamber where the Super Soldier Serum is injected and «vita rays» are administered. Rogers emerges from the camera with an improved physique. After successfully witnessing the experiment, one of the attendees reveals himself as one of Schmidt's accomplices, Heinz Kruger, who shoots Erskine, killing him. Kruger grabs the last jar of the Super Soldier Serum and escapes the facilities on the streets of New York. Rogers starts chasing after Kruger, who runs away in a car, using his new strength and endurance while running. Despite trying to escape in a submarine, Rogers manages to capture him, but the bottle of the Super Soldier Serum is broken and the killer immediately commits suicide with a cyanide capsule before he can be interrogated for information. ",
      "With Erskine dead and the Super-Soldier formula lost, the SSR is ordered to join the war, however, Philips decides to leave Rogers behind and allows scientists to study him in an attempt to rediscover Erskine's formula. Senator Brandt approaches Rogers and offers him the opportunity to tour the nation to promote inscriptions in the army, with the image of a strong soldier, an ideal symbol for the public; Rogers immediately accepts the proposal. the shows, Rogers plays a character known to the public as “Captain America.” While Rogers continues to tour the entire country, Captain America begins to gain great popularity among the public, making his image have appearances in movies , comics, comics and even a radio show. Over time, Rogers begins to tire of parading and not having a more direct role in the war compared to the others who They fight actively.",
      "For his part, Schmidt presents his new armament driven by the Teseracto to three Nazi officers sent to supervise its operation, Schmidt uses the weapon to kill the officers after one of them realized that Germany was one of the targets. Schmidt uses this moment to declare his secession from the Third Reich, claiming that HYDRA would grow in Hitler's shadow. HYDRA continues to draw energy from the Teseracto and use it to create a variety of weapons, integrating it into a range of vehicles and other technologies, quickly giving fAction the potential to become a major threat to war, and the world in general. ",
      "In 1943, while on tour in Italy performing an act for the active military, Rogers learns that the unit of his friend, James Buchanan Barnes, was lost in a battle against Schmidt's forces. Despite the insistence of the Colonel Philips in the vanity of the situation, Rogers refuses to believe that Barnes is dead and decides to set up a solo rescue mission, receiving help from Agent Carter and Stark, who transports him on his plane to the enemy lines. ",
      "Rogers manages to sneak into the main HYDRA factory, where he finds and releases most of the captive soldiers and begins a riot to escape. During the conflict, Rogers discovers that in a separate room, Barnes has been tortured, after waking him, he helps him escape with him.",
      "Schmidt, seeing that the prisoners were escaping and Rogers while moving through the facilities, launches a factory self-destruction to cover HYDRA operations and evacuate to another facility. As the building begins to detonate, Schmidt confronts Rogers on a high walkway where he ends up revealing to Rogers the effect he had after using the unfinished version of the Super Soldier Serum. Schmidt expresses his conviction that he is above normal human beings, before revealing that his face was only a mask, making it clear that his skin turned red, he lost his hair and was disfigured, accident by which they began calling him «Red Skull.» Schmidt and Zola manage to escape in an elevator, while Rogers takes Barnes to the roof where they both barely manage to leave the factory before regrouping with the liberated soldiers to return them to the base. ",
      "After the liberation of the allied prisons, Rogers gains the respect and recognition of his superior officers as a soldier and is given a high rank, along with the opportunity to fight as Captain America, as a key figure in the war front which directly opposes HYDRA Rogers recruits Barnes, Timothy Dugan, Gabe Jones, James Morita, James Montgomery Falsworth, and Jacques Dernier as part of his special unit known as the Howling Commands, to assault the other known HYDRA bases. Stark equips Rogers with advanced weaponry, including a durable and comfortable uniform, as well as a circular shield made of Vibranium, a rare and almost indestructible metal.In the following months, Rogers and his team carried a strong offensive, sabotaging various HYDRA operations , resulting in great frustration on the part of Schmidt. ",
      "Later, the team assaults the train that transports Arnim Zola. Rogers and Barnes engage in a fight with the soldiers on the train, until Barnes falls off the train to a precipice and apparently dies, while Jones locates Zola in the train and captures it. Rogers deeply affected by the loss of his friend, is convinced by Carter to use his pain as motivation to end HYDRA once and for all. The use of the information extracted from Zola, helps to locate the HYDRA's last fortress, where Rogers directs an attack to stop Schmidt before he used the weapons he created with the Teseracto to destroy the world's main cities.",
      "With the help of Phillips, Rogers manages to infiltrate the Schmidt bomber plane before it completely takes off. During the following fight, Rogers pushes Schmidt against the machine that contains the Teseracto, which is seriously damaged and causes Schmidt to take the Teseracto with his hands, only to disappear after becoming a flash of light. The cube falls to the ground, melting all levels below or in its path, to finally fall into the Earth's ocean. Seeing that there was no way to land the plane without risk of detonating the bombs it contained, Rogers decides to crash. Just before the impact, Rogers says goodbye to Carter through a radio and promises that they will dance together for the next few days. While they talk, Rogers' transmission is cut off and Carter sadly assumes that he has sacrificed himself. Stark subsequently directs several expeditions in the ocean in order to find Rogers, but only manages to recover the Teseracto from the bottom of the sea. However, all his attempts were useless, since he fails to find Schmidt's crashed ship. ",
      "A long time later, Rogers wakes up in a room set in the 40s. He deduces that something is wrong, since he was present at the game that is reported on the radio. Rogers decides to flee to the outside of the building, where he is with a modern Times Square in New York City. Moments later comes Nicholas Fury, who informs him that he was asleep for almost seventy years. Rogers breathes deeply and sadly reveals that he had an appointment. ",
      "In the post-credit scene, some time later, Fury approaches Rogers training, proposing a mission with ramifications around the world. This scene is then cut to present a small preview of The Avengers."],
      ordre_vision: 4
    },
    {
      name: 'Black Widow',
      id: 'black-widow',
      img_card: 'black-widow',
      date: new Date(2020,5,1),
      short_desc: "It's a movie about self forgiveness and it's a movie about family. I think that in life we almost reached the age of majority and you have this kind of moments when you are in a transition phase and then you move further and I think about the independent film of Black Widow. I think the character is, when we find her, in a moment of real crisis, and throughout the movie, facing herself in many ways and many things that make her, she, she really comes that crisis on the other side and we begin to reestablish ourselves where he is a more self-possessed person. So that's your trip, well, I hope anyway",
      trailer: 'https://www.youtube.com/embed/Cy_znrsuXic',
      sinopsis: ["At birth, the 'Black Widow' (Natasha Romanova) is handed over to the KGB, which prepares her to become her definitive agent, but when the USSR dissolves, the government tries to kill her when the Action moves to the current New York, where she is an independent operator. ",
      "The solo film will find Romanoff living in the United States, 15 years after the fall of the Soviet Union"],
      ordre_vision: 24
    }
  ];

  constructor() {
    console.log("Service start!");
  }
  getMovies() {
    return this.movies;
  }
  getMoviesOrderByName() {
    let moviesArray:Movie[] = this.movies;
    moviesArray.sort(function(a, b){
      var nameA = a.name.toLowerCase(), nameB=b.name.toLowerCase();
      if (nameA < nameB) //sort string ascending
          return -1;
      if (nameA > nameB)
          return 1;
      return 0 //default return value (no sorting)
    });
    return moviesArray;
  }

  getMovie( id:string ) {
    let movieSearch:Movie;
    for ( let movie of this.movies ) {
      let name = movie.id;
      if (name.indexOf( id ) >= 0) {
        movieSearch = movie;
      }
    }
    return movieSearch;
  }
  searchMovie( id:string ) {
    let moviesArray:Movie[] = [];
    id = id.toLowerCase();
    for ( let movie of this.movies ) {
      let name = movie.name.toLowerCase();
      if (name.indexOf( id ) >= 0) {
        moviesArray.push( movie );
      }
    }
    return moviesArray;
  }
}
export interface Movie {
  name: string;
  id:string;
  img_card: string;
  date?: Date;
  short_desc?: string;
  duration?: number;
  trailer?: string;
  genre?: string[];
  sinopsis?: string[];
  ordre_vision: number;
};
