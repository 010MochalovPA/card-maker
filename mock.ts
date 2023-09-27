import {
    SlideObjectType,
    SlideBackgroundType,
    PrimitiveObject,
    PictureObject,
    TextObject,
    Slide,
    Doc,
    Editor
} from "./types"

const picture1 : PictureObject = {
    id: "a38883aff79d4daf8ce292a0a8353b7f",
    type: SlideObjectType.PICTURE,
    size: {
        width: 100,
        height: 100,
    },
    position: {
        x: 30,
        y: 45,
    },
    angle: 10,
    data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=",
}

const picture2 : PictureObject = {
    id: "89bca59ceade4a5f92a3900fda5415e2",
    type: SlideObjectType.PICTURE,
    size: {
        width: 250,
        height: 250,
    },
    position: {
        x: 0,
        y: 0,
    },
    angle: 45,
    data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=",
}

const picture3 : PictureObject = {
    id: "131b368770a44fb3ab74b5f2b2280d09",
    type: SlideObjectType.PICTURE,
    size: {
        width: 128,
        height: 128,
    },
    position: {
        x: 360,
        y: 240,
    },
    angle: 90,
    data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=",
}

const text1 : TextObject = {
    id: "188014653ffb49cd898a60c63acfaaf7",
    type: SlideObjectType.TEXT,
    size: {
        width: 150,
        height: 30,
    },
    position: {
        x: 300,
        y: 100,
    },
    angle: 0,
    text: "Lorem ipsum dolor",
    params: {
        font: "Roboto",
        size: 12,
        bold: true,
        cursive: false, 
        color: {
            r: 255,
            g: 255,
            b: 255,
            a: 0.8,
        }
    }
}

const text2 : TextObject = {
    id: "83157e6a6fec4a5dbb27b95bcd68f3c2",
    type: SlideObjectType.TEXT,
    size: {
        width: 25,
        height: 100,
    },
    position: {
        x: 500,
        y: 500,
    },
    angle: 0,
    text: "Suspendisse et erat.",
    params: {
        font: "Arial",
        size: 16,
        bold: false,
        cursive: true,
        color: {
            r: 255,
            g: 255,
            b: 255,
            a: 0.8,
        }
    }
}

const text3 : TextObject = {
    id: "6bf260cf55cf4dfcb4e5fb667e759f18",
    type: SlideObjectType.TEXT,
    size: {
        width: 125,
        height: 125,
    },
    position: {
        x: 360,
        y: 120,
    },
    text: "Suspendisse et erat.",
    angle: 0,
    params: {
        font: "Roboto",
        size: 16,
        bold: false,
        cursive: true,
        color: {
            r: 220,
            g: 220,
            b: 220,
            a: 1,
        }
    }
}

const primitive1 : PrimitiveObject = {
    id: "f6ba95e407ab48db939aeed916d4fc31",
    type: SlideObjectType.PRIMITIVE,
    item: {},
    size: {
        width: 75,
        height: 75,
    },
    position: {
        x: 50,
        y: 50,
    },
    angle: 0,
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

const primitive2 : PrimitiveObject = {
    id: "73e2788497de4fd987696e79ccdd3977",
    type: SlideObjectType.PRIMITIVE,
    item: {},
    size: {
        width: 120,
        height: 30,
    },
    position: {
        x: 30,
        y: 200,
    },
    angle: 0,
    backgroundColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 0.2,
    },
    borderColor: {
        r: 120,
        g: 120,
        b: 120,
        a: 1,
    },
}

const primitive3 : PrimitiveObject = {
    id: "c1770501005b4c5297da47724fc361e1",
    type: SlideObjectType.PRIMITIVE,
    item: {},
    size: {
        width: 200,
        height: 200,
    },
    position: {
        x: 250,
        y: 250,
    },
    angle: 120,
    backgroundColor: {
        r: 180,
        g: 70,
        b: 26,
        a: 1,
    },
    borderColor: {
        r: 200,
        g: 200,
        b: 200,
        a: 0.5,
    },
}

const slide0: Slide = {
    id: "90b877d2b36b454e820378127e8b9f7e",
    background: {
        type: SlideBackgroundType.PICTURE,
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=",
    },
    objects: [],
}

const slide1: Slide = {
    id: "c932d26bcf6946618042e9852163c642",
    background: {
        type: SlideBackgroundType.PICTURE,
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=",
    },
    objects: [ picture1, text1, primitive1 ],
}

const slide2: Slide = {
    id: "4713d4539004469d8ac1bb0afd408f25",
    background: {
        type: SlideBackgroundType.SOLID_COLOR,
        color: {
            r: 255,
            g: 255,
            b: 255,
            a: 0.1,
        }
    },
    objects: [ picture2, text2, primitive2 ],
}

const slide3: Slide = {
    id: "c1d4b504d20a44b9a104709adfd29839",
    background: {
        type: SlideBackgroundType.PICTURE,
        data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=",
    },
    objects: [ picture3, text3, primitive3 ],
}

const document1: Doc = {
    title: "presentation1",
    slideList: [slide1, slide2, slide3],
}

const document2: Doc = {
    title: "presentation2",
    slideList: [slide1, slide0],
}

const document3: Doc = {
    title: "presentation3",
    slideList: [slide0],
}

const editor1: Editor = {
    document: document1,
}

const editor2: Editor = {
    document: document2,
}

const editor3: Editor = {
    document: document3,
}

export {
    editor1,
    editor2,
    editor3
}