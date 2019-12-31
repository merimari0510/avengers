import { Injectable } from '@angular/core';

@Injectable()
export class AvengersService {

  private avengers: Avenger[] = [
    {
      name: 'Iron Man',
      name_short: 'iron-man',
      img_card: 'card-iron-man.jpg',
      description: "When industrial billionaire Tony Stark puts on his sophisticated steel mesh armor of his own design, it becomes a living high-tech weapons - the world's greatest human fighting machine.",
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg' ],
      cite: "And so, as Christmas morning began, my journey was at its end. You start with something pure. Something exciting. Then come the mistakes, the compromises. We create our own demons. As promised, I got Pepper sorted out. Took a little tinkering. But then I thought 'why stop there?'' Of course there are people who say progress is dangerous, but then I bet none of those idiots ever had to live with a chest full of shrapnel. And now, neither will I. Let me tell you: that was the best sleep I'd had in years. So if I were to wrap this up tight with a bow or whatever, I guess I'd say my armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. One thing you can't take away...I am Iron Man.",
      cite_video: 'https://www.youtube.com/embed/JgyyVFusnaA',
      video: 'https://www.youtube.com/embed/5-Cx7UslEuE',
      actor_name: 'Robert Downey Jr'/*,
      list_movies_apears: [
        {
          name: 'Iron Man',
          short_name: 'iron-man',
          date: new Date(2008,4,30),
          duration: 126,
          img_poster: 'iron-man-poster',
          img_card: 'iron-man',
          trailer_oficial: '',
          genre: ['Acción', 'Ciencia ficción'],
          sinopsis: [
            "Tony Stark (Robert Downey Jr., 'Chaplin'), dueño de Industrias Stark, inventor consagrado, vendedor de armas y playboy multimillonario, es secuestrado en Afganistán después de una demostración armamentística para el Ejército de los Estados Unidos. Forzado por sus captores a fabricar un arma temible, acaba construyendo en secreto una armadura de alta tecnología revolucionaria que usa para escaparse.",
            "Cuando comprende el gran potencial de la armadura, decide revisarla para mejorarla y, así, utilizarla para guardar la justicia y proteger a los inocentes. Después de ser rescatado por James Rhodes (Terrence Howard, 'Crash'), decide desligarse de la producción de armamento militar, lo que deja en evidencia la empresa familiar. Obadiah Stane (Jeff Bridges, 'El gran Lebowski'), el administrador de la misma, le advierte que esa decisión les puede llevar a la ruina.",
            "A oídos de Toni llega que varias de las armas de su empresa han llegado al grupo de terroristas que le secuestró en Afganistán. Le pide a su secretaria, «Pepper» Potts (Gwyneth Paltrow, 'Shakespeare in Love'), que piratee el sistema informativo de su propia empresa para descubrir quien ha permitido tales actividades. Al final descubren que el propio Stane lleva una doble vida, intentando reproducir la armadura robótica de Toni para su propio beneficio, por lo que tendrán que detenerlo.",
            "«Iron Man» es la adaptación cinematográfica del famoso cómic de Marvel, creado por Stan Lee y Jack Kirby en 1963."
          ]
        },
        {
          name: 'El increible Hulk',
          short_name: 'incredible-hulk'
        },
        {
          name: 'Iron Man 2',
          short_name: 'iron-man-2'
        },
        {
          name: 'Los Vengadors',
          short_name: 'avengers'
        },
        {
          name: 'Iron Man 3',
          short_name: 'iron-man-3'
        },
        {
          name: 'Los Vengadores. La era de Ultrón',
          short_name: 'avengers-ultron'
        },
        {
          name: 'Capitán América: Civil War',
          short_name: 'captain-america-civil-war',
          date: new Date(2016,4,29)
        },
        {
          name: 'Spider-Man: Homecoming',
          short_name: 'spider-man-homecoming',
          date: new Date(2017,7,28)
        },
        {
          name: 'Vengadores: Infinity War',
          short_name: 'avengers-infinity-war',
          date: new Date(2018,4,27)
        },
        {
          name: 'Vengadores: Endgame',
          short_name: 'avengers-endgame',
          date: new Date(2019,4,25)
        },
      ]*/
    },
    {
      name: 'Captain America',
      name_short: 'captain-america',
      img_card: 'card-captain-america.jpg',
      description: 'Steve Rogers ... Raised to appreciate the ideals of democracy, endowed with a superhuman physicist, and led to being the most skilled fighter in the world. Alone or as a leader of the Avengers, the fight for freedom and justice.',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/5rrdm4YoKtE'
    },
    {
      name: 'Thor',
      name_short: 'thor',
      img_card: 'card-thor.jpg',
      description: 'From the immortal Asgard greets us - The most powerful warrior of mythology, possessor of the mystic hammer Uru, Mjolnir. He is the Norse God of Thunder, master of the storm and lightning, heir to the throne of the immortal Asgard - The Mighty Thor!',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/abM1Z3fYT3s'
    },
    {
      name: 'Hulk',
      name_short: 'hulk',
      img_card: 'card-hulk.jpg',
      description: 'Caught in the heart of a nuclear explosion, victim of the wild gamma radiation, Dr. Robert Bruce Banner is now transformed into tense times in the dark personification of his repressed rage and rage - In the most powerful creature that has walked the face of the Earth: The Incredible Hulk!',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/cXzi5F6qObc'
    },
    {
      name: 'Black Widow',
      name_short: 'black-widow',
      img_card: 'card-black-widow.jpg',
      description: "Natasha Romanova, known as Black Widow, is one of the greatest spies still alive today, one of S.H.I.E.L.D.'s best agents, and a recurring member of the Avengers. She is a former pupil and close friend of Wolverine.",
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/lhXrzV5dkbw'
    },
    {
      name: 'Hawkeye',
      name_short: 'hawkeye',
      img_card: 'card-hawkeye.jpg',
      description: 'Trained by criminals and inspired by heroes, Clint Barton has gone from a troubled young man to one of the greatest heroes on Earth. The world knows him best as Hawkeye (Hawkeye): The most powerful shooter on the planet.',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/l1kLfRl9YWM'
    },
    {
      name: 'Vision',
      name_short: 'vision',
      img_card: 'card-vision.jpg',
      description: 'Vision is a synthezoid and an Avenger who possesses the power to alter his density at will. He is always afraid he may have lost touch with his inner humanity.',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/egTZU_iQ9u0'
    },
    {
      name: 'Quicksilver',
      name_short: 'quicksilver',
      img_card: 'card-quicksilver.jpg',
      description: 'The super-speed son of the infamous mutant conqueror Magneto, Pietro Maximoff has played many roles: super hero and super villain. Endowed with the power of super speed Pietro is one of the fastest heroes the world has ever seen.',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/3HczWv6BvRw'
    },
    {
      name: 'Scarlet Witch',
      name_short: 'scarlet-witch',
      img_card: 'card-scarlet-witch.jpg',
      description: 'Mutant and member of the Avengers, Scarlet Witch used her powers to manipulate probability and alter reality in her effort to help the world. After a massive breakdown, she then destroyed the foundations of it by causing the disaster known as M-Day.',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/m542S0OnMoc'
    },
    {
      name: 'Ant-Man',
      name_short: 'ant-man',
      img_card: 'card-ant-man.jpg',
      description: 'Hank Pym is a genius, one of the founding members of the Avengers, the creator of Pym Particles, and a modern-day superhero. ',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/eB3TbNo9usM'
    },
    {
      name: 'Doctor Strange',
      name_short: 'doctor-strange',
      img_card: 'card-doctor-strange.jpg',
      description: 'Once he was a man like others. But then he discovered independent reality, where the magic and soul of men shape the forces that shape our lives. At that moment, he was reborn, to become a man like no other.',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/FQew3FzqBw4'
    },
    {
      name: 'Spider-Man',
      name_short: 'spider-man',
      img_card: 'card-spider-man.jpg',
      description: 'Peter Parker was bitten by a spider and gave him super powers like a spider after Uncle Ben was killed he vowed to fight crime and his super hero name is Spider-man.',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/zceKndOf6qY'
    },
    {
      name: 'Black Panther',
      name_short: 'black-panther',
      img_card: 'card-black-panther.jpg',
      description: "T'Challa is the Black Panther,the super genius warrior king of the African nation of Wakanda, the most technologically advanced nation on Earth. He is one of the smartest men in the Marvel Universe, a former Avenger, and Storm's husband.",
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/8ck8pVhsWLU'
    },
    {
      name: 'Falcon',
      name_short: 'falcon',
      img_card: 'card-falcon.jpg',
      description: "Empowered by evil, inspired by good, Sam Wilson's bleak outlook on life was wiped away the day he met Captain America. He uses his winged costume, combat prowess, and avian telepathy as the Falcon, defender of Harlem.",
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/gfNEwhPxeGM'
    },
    {
      name: 'Captain Marvel',
      name_short: 'captain-marvel',
      img_card: 'card-captain-marvel.jpg',
      description: "After encountering the Kree hero Captain Marvel, Carol Danvers was accidentally subjected to a Kree Psyche-Magnitron which genetically transformed her into a superhuman Kree warrior.",
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/YAGHsKoEv44'
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
  list_img:string[];
  cite:string;
  cite_video:string;
  video:string;
  actor_name?:string;
  // list_movies_apears?:Movie[];
};

/*export interface Movie {
  name: string;
  short_name?:string;
  date?: Date;
  duration?: number,
  img_poster?: string,
  img_card?: string,
  trailer_oficial?: string,
  genre?: string[],
  sinopsis?: string[]
};*/
