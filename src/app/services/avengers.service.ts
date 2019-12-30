import { Injectable } from '@angular/core';

@Injectable()
export class AvengersService {

  private avengers: Avenger[] = [
    {
      name: 'Iron Man',
      name_short: 'iron-man',
      img_card: 'card-iron-man.jpg',
      description: 'A great power requires a great responsability',
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
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/5rrdm4YoKtE'
    },
    {
      name: 'Thor',
      name_short: 'thor',
      img_card: 'card-thor.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/abM1Z3fYT3s'
    },
    {
      name: 'Hulk',
      name_short: 'hulk',
      img_card: 'card-hulk.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/cXzi5F6qObc'
    },
    {
      name: 'Black Widow',
      name_short: 'black-widow',
      img_card: 'card-black-widow.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/lhXrzV5dkbw'
    },
    {
      name: 'Hawkeye',
      name_short: 'hawkeye',
      img_card: 'card-hawkeye.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/l1kLfRl9YWM'
    },
    {
      name: 'Vision',
      name_short: 'vision',
      img_card: 'card-vision.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/egTZU_iQ9u0'
    },
    {
      name: 'Quicksilver',
      name_short: 'quicksilver',
      img_card: 'card-quicksilver.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/3HczWv6BvRw'
    },
    {
      name: 'Scarlet Witch',
      name_short: 'scarlet-witch',
      img_card: 'card-scarlet-witch.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/m542S0OnMoc'
    },
    {
      name: 'Ant-Man',
      name_short: 'ant-man',
      img_card: 'card-ant-man.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/eB3TbNo9usM'
    },
    {
      name: 'Doctor Strange',
      name_short: 'doctor-strange',
      img_card: 'card-doctor-strange.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/FQew3FzqBw4'
    },
    {
      name: 'Spider-Man',
      name_short: 'spider-man',
      img_card: 'card-spider-man.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/zceKndOf6qY'
    },
    {
      name: 'Black Panther',
      name_short: 'black-panther',
      img_card: 'card-black-panther.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/8ck8pVhsWLU'
    },
    {
      name: 'Falcon',
      name_short: 'falcon',
      img_card: 'card-falcon.jpg',
      description: 'A great power requires a great responsability',
      list_img: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg'],
      cite: "",
      cite_video: 'https://www.youtube.com/embed/',
      video: 'https://www.youtube.com/embed/gfNEwhPxeGM'
    },
    {
      name: 'Captain Marvel',
      name_short: 'captain-marvel',
      img_card: 'card-captain-marvel.jpg',
      description: 'A great power requires a great responsability',
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
