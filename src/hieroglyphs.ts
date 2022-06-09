type hieroglyph = {
    id: number
    character: string
    translate: string | string[]
    pinyin: string | string[]
    partsOfSpeech: string | string[]
    hskLevel: number
}

const partsOfSpeech : {[key:number] : string} = {
    1 : "adjective",
    2 : "adverb",
    3 : "verb"
};

function getPartOfSpeech(keys: number[]){
    let result = [];
    for (let i in keys) {
        if (i in partsOfSpeech){
            result.push(partsOfSpeech[i])
        }
    }
    return result;
}

let h_00000001: hieroglyph = {
    id: 0x1,
    character: '好',
    translate: 'хороший',
    pinyin: ['hǎo', 'hào'],
    partsOfSpeech: getPartOfSpeech([1, 2, 3]),
    hskLevel: 1
}

let h_00000002: hieroglyph = {
    id: 0x2,
    character: '',
    translate: [
        'звать',
        'кричать',
        'чтобы тебя звали',
        'приказывать',
        'приветствовать',
        'кричать',
        'плакать'
    ],
    pinyin: 'jiào',
    partsOfSpeech: getPartOfSpeech([3]),
    hskLevel: 1
}