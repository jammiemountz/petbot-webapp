class newsCaroselController {
  /** @ngInject */
  constructor() {
    this.newsMentions = [
      {
        source: 'The Next Web',
        image: '/assets/nextweb.jpg',
        link: 'http://thenextweb.com/gadgets/2015/08/31/petbot-uses-petificial-intelligence-to-let-your-cat-or-dog-send-you-selfies/',
        title: 'PetBot uses ‘petificial intelligence’ to let your cat or dog send you selfies'
      }, {
        source: 'AOL',
        image: '/assets/aol.png',
        link: 'http://www.aol.com/article/2015/09/26/this-robot-lets-your-pets-send-you-selfies/21241319/',
        title: 'This robot lets your pets send you selfies'
      }, {
        source: 'CNN Chile',
        image: '/assets/cnn.png',
        link: 'http://www.cnnchile.com/noticia/2015/09/02/petbot-la-camara-que-todo-dog-lover-deseara-tener',
        title: 'PetBot: La cámara que todo dog lover deseará tener'
      }, {
        source: 'Huffington Post',
        image: '/assets/Huffington-Post.png',
        link: 'http://www.huffingtonpost.com.au/2015/09/25/petbot-will-let-your-pet-_n_8193724.html?utm_hp_ref=australia&ir=Australia',
        title: 'PetBot Will Let Your Pet Send You Selfies'
      }, {
        source: 'The Guardian',
        image: '/assets/theguardian.png',
        link: 'http://www.theguardian.com/technology/2015/sep/12/gadgets-tech-smartphone-dog-varibike-goggles-owatch',
        title: 'Five things we love: from a smartphone for dogs to goggles that guide you'
      }, {
        source: 'Pet Guide',
        image: '/assets/petguide.png',
        link: 'http://www.petguide.com/blog/dog/petbot-petcam-lets-you-dole-out-treats-and-take-pet-selfies/',
        title: 'PetBot Petcam Lets You Dole Out Treats And Take Pet Selfies'
      }, {
        source: 'Bark Post',
        image: '/assets/barkpost.jpeg',
        link: 'http://barkpost.com/petbot-dog-selfies/',
        title: '“The First Smartphone For Your Pet” Sends Your Dog’s Selfies Right To You'
      }, {
        source: 'Tech Republic',
        image: '/assets/techrepublic.png',
        link: 'http://www.techrepublic.com/pictures/pet-tech/7/',
        title: 'Photos: The latest and greatest tech for pets'
      }, {
        source: 'Fox News',
        image: '/assets/foxnews.jpg',
        link: 'http://www.foxnews.com/tech/2015/08/31/say-treat-petbot-will-send-pet-selfies-while-and-your-furry-friend-are-apart/',
        title: 'Say \'treat!\' PetBot will send you pet selfies while you and your furry friend are apart'
      }
    ];
  }
}

export const newsCarosel = {
  template: require('./news-carosel.html'),
  controller: newsCaroselController,
  controllerAs: 'newsCaroselCtrl'
};
