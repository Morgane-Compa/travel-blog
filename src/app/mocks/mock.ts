//Mon type de données
export interface Article {
    id : number,
    pays : string,
    ville : string,
    dateDepart : string,
    dateRetour : string,
    imageP : string,
    imageS : string[],
    texteVoyage : string,
    positif : string[],
    negatif : string[],
    conseils : string[],
    resume : string,
    top : boolean
};

//Mes données
export const ARTICLES : Article[] = [
  {
    id : 1,
    pays : "Kandorya",
    ville : "Edenoria",
    dateDepart : "13.07.2022",
    dateRetour : "17.07.2022",
    imageP : "assets/img/kando.png",
    imageS : ["assets/img/sea-g251f29be9_1920 2.png", 
              "assets/img/sea-g251f29be9_1920 3.png", 
              "assets/img/sea-g251f29be9_1920 4.png", 
              "assets/img/sea-g251f29be9_1920 5.png",
              "assets/img/sea-g251f29be9_1920 6.png",
              "assets/img/sea-g251f29be9_1920 7.png", 
              "assets/img/sea-g251f29be9_1920 8.png",],
    texteVoyage : "Vous en avez marre de partir en voyage juste pour voir des paysages? Vous voulez parler avec des gens, rencontrer l'habitant  d'une contrée inconnu? Vous voulez mettre de la magie et des paillettes dans votre vie? Kandorya est fait pour Vous! Ici pas de chichis les portes de tout le monde vous sont ouvertes. Aller donc visiter le camp des orcs et lutins pour admirer leurs rituels sacrificiels à leur divinité tout en faisant attention de ne pas être le prochain sur la liste. Posez vous sur le quai des pirates pour boire du ruhm et chanter à la liberté tout en sortant les canon pour aller défoncer la porte du chateau à proximité. Et pour finir venez admirer dans l'arène d'Edenorya les combat sanglant de gladiateurs",
    positif : ["Une foire rythmé avec toujours des choses à faire", "Les soirées à la taverne des pirates sont toujours un plaisir", "Les bonbons des lutins sont à essayer une fois dans sa vie"],
    negatif : ["Attention, si vous êtes humain nes vous promenez pas en pleine nuis sur la plaine, vous risquez de vous faire manger par les orcs qui sont de chasse", "ne vous approchez pas de la poudre de fatae, vous pourriez devenir rapidement accro à cette puissante drogue", "La foire se passe en été, veillez à vous protéger du soleil"],
    conseils : ["Si vous avez besoin d'information le camps du nainformateur est la pour ça. Si vous attirez sont attention, Taverne, le chef de cette organisation pourrais même faire de vous un membre de sa famille ce qui vous mettra sous sa protection, un veritable plus pour votre survie"],
    resume : "En bref, entre les différentes races que vous pouvez rencontrer, les nombreux évènements de la foire et les dangers qui vont avec, niveau dépaysement vous allez être servis! Je conseille, c'est à faire une fois dans sa vie.",
    top : true
  },
  {
    id : 2,
    pays : "Albanie",
    ville : "Tirana",
    dateDepart : "14.04.22",
    dateRetour : "17.05.22",
    imageP : "assets/img/global img.png",
    imageS : ["assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png",
              "assets/img/global img.png",
              "assets/img/global img.png", 
              "assets/img/global img.png",],
    texteVoyage : "Gummi bears bear claw sugar plum shortbread gingerbread halvah sugar plum. Sesame snaps ice cream marzipan cheesecake ice cream. Tiramisu chocolate chocolate bar gingerbread liquorice wafer icing. Marshmallow toffee tiramisu brownie macaroon oat cake. Candy tootsie roll jelly pudding macaroon sweet roll brownie. Danish soufflé pastry marshmallow jelly-o cupcake macaroon wafer donut. Ice cream chupa chups pie icing oat cake sesame snaps marzipan. Wafer apple pie ice cream bonbon chupa chups ice cream tiramisu apple pie. Wafer ice cream tootsie roll cookie cotton candy marzipan. Marzipan cheesecake chocolate macaroon marzipan fruitcake shortbread wafer. Jelly pudding sugar plum cake liquorice icing chocolate cake marshmallow. Cheesecake cookie tart chocolate marzipan cotton candy.",
    positif : ["Un pays très simple à sillonner, sans embrouilles ni complexité ", "Des habitants gentils, spontanés et qui cherchent le contact ", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques "],
    negatif : ["Le climat torride en juillet-août, sauf en montagne", "La côte très fréquentée l'été et de plus en plus bétonnée"],
    conseils : ["Prenez une paire de tong !"],
    resume : "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l'été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    top : false
  },
  {
    id : 3,
    pays : "Grèce",
    ville : "Athène",
    dateDepart : "14.04.22",
    dateRetour : "17.05.22",
    imageP : "assets/img/cafe.png",
    imageS : ["assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png",
              "assets/img/global img.png",
              "assets/img/global img.png", 
              "assets/img/global img.png",],
    texteVoyage : "Gummi bears bear claw sugar plum shortbread gingerbread halvah sugar plum. Sesame snaps ice cream marzipan cheesecake ice cream. Tiramisu chocolate chocolate bar gingerbread liquorice wafer icing. Marshmallow toffee tiramisu brownie macaroon oat cake. Candy tootsie roll jelly pudding macaroon sweet roll brownie. Danish soufflé pastry marshmallow jelly-o cupcake macaroon wafer donut. Ice cream chupa chups pie icing oat cake sesame snaps marzipan. Wafer apple pie ice cream bonbon chupa chups ice cream tiramisu apple pie. Wafer ice cream tootsie roll cookie cotton candy marzipan. Marzipan cheesecake chocolate macaroon marzipan fruitcake shortbread wafer. Jelly pudding sugar plum cake liquorice icing chocolate cake marshmallow. Cheesecake cookie tart chocolate marzipan cotton candy.",
    positif : ["Un pays très simple à sillonner, sans embrouilles ni complexité ", "Des habitants gentils, spontanés et qui cherchent le contact ", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques "],
    negatif : ["Le climat torride en juillet-août, sauf en montagne", "La côte très fréquentée l'été et de plus en plus bétonnée"],
    conseils : ["Prenez une paire de tong !"],
    resume : "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l'été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    top : false
  },
  {
    id : 4,
    pays : "Italie",
    ville : "Rome",
    dateDepart : "14.04.22",
    dateRetour : "17.05.22",
    imageP : "assets/img/colosseo.png",
    imageS : ["assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png",
              "assets/img/global img.png",
              "assets/img/global img.png", 
              "assets/img/global img.png",],
    texteVoyage : "Gummi bears bear claw sugar plum shortbread gingerbread halvah sugar plum. Sesame snaps ice cream marzipan cheesecake ice cream. Tiramisu chocolate chocolate bar gingerbread liquorice wafer icing. Marshmallow toffee tiramisu brownie macaroon oat cake. Candy tootsie roll jelly pudding macaroon sweet roll brownie. Danish soufflé pastry marshmallow jelly-o cupcake macaroon wafer donut. Ice cream chupa chups pie icing oat cake sesame snaps marzipan. Wafer apple pie ice cream bonbon chupa chups ice cream tiramisu apple pie. Wafer ice cream tootsie roll cookie cotton candy marzipan. Marzipan cheesecake chocolate macaroon marzipan fruitcake shortbread wafer. Jelly pudding sugar plum cake liquorice icing chocolate cake marshmallow. Cheesecake cookie tart chocolate marzipan cotton candy.",
    positif : ["Un pays très simple à sillonner, sans embrouilles ni complexité ", "Des habitants gentils, spontanés et qui cherchent le contact ", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques "],
    negatif : ["Le climat torride en juillet-août, sauf en montagne", "La côte très fréquentée l'été et de plus en plus bétonnée"],
    conseils : ["Prenez une paire de tong !"],
    resume : "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l'été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    top : false
  },
  {
    id : 5,
    pays : "Guatemala",
    ville : "Monterrico",
    dateDepart : "14.04.22",
    dateRetour : "17.05.22",
    imageP : "assets/img/palmiers.png",
    imageS : ["assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png",
              "assets/img/global img.png",
              "assets/img/global img.png", 
              "assets/img/global img.png",],
    texteVoyage : "Gummi bears bear claw sugar plum shortbread gingerbread halvah sugar plum. Sesame snaps ice cream marzipan cheesecake ice cream. Tiramisu chocolate chocolate bar gingerbread liquorice wafer icing. Marshmallow toffee tiramisu brownie macaroon oat cake. Candy tootsie roll jelly pudding macaroon sweet roll brownie. Danish soufflé pastry marshmallow jelly-o cupcake macaroon wafer donut. Ice cream chupa chups pie icing oat cake sesame snaps marzipan. Wafer apple pie ice cream bonbon chupa chups ice cream tiramisu apple pie. Wafer ice cream tootsie roll cookie cotton candy marzipan. Marzipan cheesecake chocolate macaroon marzipan fruitcake shortbread wafer. Jelly pudding sugar plum cake liquorice icing chocolate cake marshmallow. Cheesecake cookie tart chocolate marzipan cotton candy.",
    positif : ["Un pays très simple à sillonner, sans embrouilles ni complexité ", "Des habitants gentils, spontanés et qui cherchent le contact ", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques "],
    negatif : ["Le climat torride en juillet-août, sauf en montagne", "La côte très fréquentée l'été et de plus en plus bétonnée"],
    conseils : ["Prenez une paire de tong !"],
    resume : "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l'été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    top : false
  },
  {
    id : 6,
    pays : "Tunisie",
    ville : "Tunis",
    dateDepart : "14.04.22",
    dateRetour : "17.05.22",
    imageP : "assets/img/white dome.png",
    imageS : ["assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png", 
              "assets/img/global img.png",
              "assets/img/global img.png",
              "assets/img/global img.png", 
              "assets/img/global img.png",],
    texteVoyage : "Gummi bears bear claw sugar plum shortbread gingerbread halvah sugar plum. Sesame snaps ice cream marzipan cheesecake ice cream. Tiramisu chocolate chocolate bar gingerbread liquorice wafer icing. Marshmallow toffee tiramisu brownie macaroon oat cake. Candy tootsie roll jelly pudding macaroon sweet roll brownie. Danish soufflé pastry marshmallow jelly-o cupcake macaroon wafer donut. Ice cream chupa chups pie icing oat cake sesame snaps marzipan. Wafer apple pie ice cream bonbon chupa chups ice cream tiramisu apple pie. Wafer ice cream tootsie roll cookie cotton candy marzipan. Marzipan cheesecake chocolate macaroon marzipan fruitcake shortbread wafer. Jelly pudding sugar plum cake liquorice icing chocolate cake marshmallow. Cheesecake cookie tart chocolate marzipan cotton candy.",
    positif : ["Un pays très simple à sillonner, sans embrouilles ni complexité ", "Des habitants gentils, spontanés et qui cherchent le contact ", "Un relief vallonné, offrant de superbes paysages dotés de villages pittoresques "],
    negatif : ["Le climat torride en juillet-août, sauf en montagne", "La côte très fréquentée l'été et de plus en plus bétonnée"],
    conseils : ["Prenez une paire de tong !"],
    resume : "L'Albanie est un pays que nous avons adoré visiter, en grande partie grâce à l'accueil chaleureux des Albanais, mais pas seulement ! Nous avons découvert une culture fièrement préservée, une variété de paysages captivante et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique sature de touristes l'été. Notre conseil, si vous venez à cette saison, serait alors de s'éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, où se concentre à notre avis tout le charme de l'Albanie.",
    top : false
  }
  
]
  