import {
    PictureObjectType,
    TextObjectType,
    SlideObjectType,
    PrimitiveObjectType
} from "./types"

const picture1 : PictureObjectType = {
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
    data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=",
}

const picture2 : PictureObjectType = {
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
    data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH1ggDCwMADQ4NnwAAAFVJREFUGJWNkMEJADEIBEcbSDkXUnfSgnBVeZ8LSAjiwjyEQXSFEIcHGP9oAi+H0Bymgx9MhxbFdZE2a0s9kTZdw01ZhhYkABSwgmf1Z6r1SNyfFf4BZ+ZUExcNUQUAAAAASUVORK5CYII=",
}

const text1 : TextObjectType = {
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
    text: "Lorem ipsum dolor",
    style: {
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

const text2 : TextObjectType = {
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
    text: "Suspendisse et erat.",
    style: {
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

const primitive1 : PrimitiveObjectType = {
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

const primitive2 : PrimitiveObjectType = {
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