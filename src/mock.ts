import {
  SlideObjectType,
  SlideBackgroundType,
  ShapeType,
  PictureType,
  ShapeObjectType,
  PictureObjectType,
  TextObjectType,
  Slide,
  Doc,
  Editor,
} from './types'

const picture1: PictureObjectType = {
  id: 'a38883aff79d4daf8ce292a0a8353b7f',
  type: SlideObjectType.PICTURE,
  pictureType: PictureType.BASE64,
  size: {
    width: 100,
    height: 100,
  },
  position: {
    left: 55,
    top: 150,
  },
  angle: 0,
  data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=',
}

const picture2: PictureObjectType = {
  id: '89bca59ceade4a5f92a3900fda5415e2',
  type: SlideObjectType.PICTURE,
  pictureType: PictureType.URL,
  size: {
    width: 300,
    height: 405,
  },
  position: {
    left: 250,
    top: 100,
  },
  angle: 5,
  data: 'https://i.pinimg.com/736x/c8/92/f8/c892f8559ff2bef1990cb170f83b6bc0.jpg',
}

const picture3: PictureObjectType = {
  id: '131b368770a44fb3ab74b5f2b2280d09',
  type: SlideObjectType.PICTURE,
  pictureType: PictureType.BASE64,
  size: {
    width: 128,
    height: 128,
  },
  position: {
    left: 360,
    top: 240,
  },
  angle: 90,
  data: 'https://freesvg.org/img/tikigiki_simple-beach-ball-01.png',
}

const text1: TextObjectType = {
  id: '188014653ffb49cd898a60c63acfaaf7',
  type: SlideObjectType.TEXT,
  size: {
    width: 120,
    height: 25,
  },
  position: {
    left: 390,
    top: 85,
  },
  angle: 355,
  text: 'Lorem Ipsum',
  style: {
    fontFamily: 'Roboto',
    fontSize: 20,
    bold: true,
    cursive: false,
    fontColor: {
      r: 255,
      g: 255,
      b: 0,
      a: 1,
    },
  },
  borderColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
  backgroundColor: {
    r: 255,
    g: 128,
    b: 0,
    a: 1,
  },
}

const text2: TextObjectType = {
  id: '83157e6a6fec4a5dbb27b95bcd68f3c2',
  type: SlideObjectType.TEXT,
  size: {
    width: 165,
    height: 20,
  },
  position: {
    left: 600,
    top: 260,
  },
  angle: 15,
  text: 'Suspendisse et erat.',
  style: {
    fontFamily: 'Arial',
    fontSize: 18,
    bold: false,
    cursive: true,
    fontColor: {
      r: 232,
      g: 162,
      b: 54,
      a: 1,
    },
  },
  borderColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 0,
  },
  backgroundColor: {
    r: 33,
    g: 33,
    b: 33,
    a: 1,
  },
}

const text3: TextObjectType = {
  id: '6bf260cf55cf4dfcb4e5fb667e759f18',
  type: SlideObjectType.TEXT,
  size: {
    width: 250,
    height: 250,
  },
  position: {
    left: 360,
    top: 0,
  },
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, modi repellendus esse dicta labore iusto expedita ab officia debitis, ullam temporibus. Sequi, ducimus. Natus, quidem! Facere eos obcaecati ipsa, fugit quod nihil voluptates nemo animi ullam blanditiis veritatis mollitia excepturi. Voluptatibus velit est nisi nesciunt neque autem dolores vero, quo, sed aliquid in natus? Nostrum repellendus earum corporis perspiciatis exercitationem!',
  angle: 25,
  style: {
    fontFamily: 'Roboto',
    fontSize: 16,
    bold: false,
    cursive: true,
    fontColor: {
      r: 255,
      g: 235,
      b: 20,
      a: 1,
    },
  },
  borderColor: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  },
  backgroundColor: {
    r: 126,
    g: 20,
    b: 144,
    a: 1,
  },
}

const shape1: ShapeObjectType = {
  id: 'f6ba95e407ab48db939aeed916d4fc31',
  type: SlideObjectType.SHAPE,
  shapeType: ShapeType.RECTANGLE,
  size: {
    width: 75,
    height: 75,
  },
  position: {
    left: 640,
    top: 410,
  },
  angle: 30,
  backgroundColor: {
    r: 0,
    g: 128,
    b: 0,
    a: 0.5,
  },
  borderColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 0.8,
  },
}

const shape2: ShapeObjectType = {
  id: '73e2788497de4fd987696e79ccdd3977',
  type: SlideObjectType.SHAPE,
  shapeType: ShapeType.TRIANGLE,
  size: {
    width: 120,
    height: 30,
  },
  position: {
    left: 220,
    top: 200,
  },
  angle: 15,
  backgroundColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 0.2,
  },
  borderColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
}

const shape3: ShapeObjectType = {
  id: 'c1770501005b4c5297da47724fc361e1',
  type: SlideObjectType.SHAPE,
  shapeType: ShapeType.ELLIPSE,
  size: {
    width: 150,
    height: 200,
  },
  position: {
    left: 250,
    top: 380,
  },
  angle: 135,
  backgroundColor: {
    r: 255,
    g: 86,
    b: 86,
    a: 1,
  },
  borderColor: {
    r: 255,
    g: 251,
    b: 175,
    a: 1,
  },
}

const slide0: Slide = {
  id: '90b877d2b36b454e820378127e8b9f7e',
  background: {
    type: SlideBackgroundType.PICTURE_BASE64,
    data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=',
  },
  objects: [],
}

const slide1: Slide = {
  id: 'c932d26bcf6946618042e9852163c642',
  background: {
    type: SlideBackgroundType.PICTURE_URL,
    data: 'https://live.staticflickr.com/65535/51624967801_8e3859f34a_b.jpg',
  },
  objects: [picture1, text1, shape1],
}

const slide2: Slide = {
  id: '4713d4539004469d8ac1bb0afd408f25',
  background: {
    type: SlideBackgroundType.SOLID_COLOR,
    color: {
      r: 0,
      g: 35,
      b: 150,
      a: 0.8,
    },
  },
  objects: [picture2, text2, shape2],
}

const slide3: Slide = {
  id: 'c1d4b504d20a44b9a104709adfd29839',
  background: {
    type: SlideBackgroundType.PICTURE_URL,
    data: 'https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg',
  },
  objects: [picture3, text3, shape3],
}

const slide4: Slide = {
  id: '9741ab9d1b7e40ae8d1004eaf73edd21',
  background: {
    type: SlideBackgroundType.SOLID_COLOR,
    color: {
      r: 60,
      g: 60,
      b: 60,
      a: 1,
    },
  },
  objects: [text1, text2, text3],
}

const slide5: Slide = {
  id: 'adbf79efcf1f49b980fdaf2e8775601a',
  background: {
    type: SlideBackgroundType.SOLID_COLOR,
    color: {
      r: 235,
      g: 235,
      b: 235,
      a: 1,
    },
  },
  objects: [picture3],
}

const slide6: Slide = {
  id: '18e8ae4602194c5ea369749e464d2f28',
  background: {
    type: SlideBackgroundType.PICTURE_BASE64,
    data: 'https://www.theviennablog.com/wp-content/uploads/2022/10/hallstatt-austria-winter-landscape-2021-08-28-15-08-14-utc-1024x683.jpg',
  },
  objects: [shape1, shape2, shape3],
}

const slide7: Slide = {
  id: '5fd3ef9443244fc2a19c33c0499ecf69',
  background: {
    type: SlideBackgroundType.PICTURE_URL,
    data: 'https://sportishka.com/uploads/posts/2022-04/1650706226_1-sportishka-com-p-islandiya-vikipediya-krasivo-foto-1.jpg',
  },
  objects: [picture1, text3, picture3],
}

const slide8: Slide = {
  id: 'ee801b22443f47c49b80332b8a15afdc',
  background: {
    type: SlideBackgroundType.SOLID_COLOR,
    color: {
      r: 235,
      g: 235,
      b: 235,
      a: 1,
    },
  },
  objects: [picture1, text1, text2, text3, picture3],
}

const slide9: Slide = {
  id: '4ae80354dd914db887dfcf8c967f1394',
  background: {
    type: SlideBackgroundType.SOLID_COLOR,
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    },
  },
  objects: [picture1, picture2, picture3, text3],
}

const slide10: Slide = {
  id: '8b8fe802c9284809b5742c1dab37ad47',
  background: {
    type: SlideBackgroundType.SOLID_COLOR,
    color: {
      r: 255,
      g: 0,
      b: 0,
      a: 1,
    },
  },
  objects: [picture1, picture2, picture3, text1, text2, text3, shape1, shape2, shape3],
}

const document1: Doc = {
  title: 'Presentation 1',
  slideList: [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10],
}

const document2: Doc = {
  title: 'presentation2',
  slideList: [slide1, slide0],
}

const document3: Doc = {
  title: 'presentation3',
  slideList: [slide0],
}

const editor1: Editor = {
  document: document1,
  history: [],
  currentSlide: 'c1d4b504d20a44b9a104709adfd29839',
  selected: {
    slideIds: ['c932d26bcf6946618042e9852163c642', 'c1d4b504d20a44b9a104709adfd29839'],
  },
}

const editor2: Editor = {
  document: document2,
  history: [],
  currentSlide: 'c932d26bcf6946618042e9852163c642',
  selected: {
    slideObjectIds: ['188014653ffb49cd898a60c63acfaaf7'],
  },
}

const editor3: Editor = {
  document: document3,
  history: [],
  currentSlide: 'c1d4b504d20a44b9a104709adfd29839',
  selected: {
    slideObjectIds: [],
  },
}

export { editor1, editor2, editor3 }
