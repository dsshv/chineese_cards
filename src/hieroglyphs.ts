type hieroglyph = {
    id: number
    character: string
    translate: string | string[]
    pinyin: string | string[]
    partsOfSpeech: string | string[]
    hskLevel: number
}

export const partsOfSpeech : {[key:number] : string} = {
    1 : "adjective",
    2 : "adverb",
    3 : "verb"
};

export function getPartOfSpeech(keys: number[]){
    let result : string[] = [];
    for (let i of keys) {
        //console.log(i)
        if (i  in partsOfSpeech){
            result.push(partsOfSpeech[i])
        }
    }
    return result;
}

export let h_00000001: hieroglyph = {
    id: 0x1,
    character: '好',
    translate: 'хороший',
    pinyin: ['hǎo', 'hào'],
    partsOfSpeech: getPartOfSpeech([1, 2, 3]),
    hskLevel: 1
}; // 好

export let h_00000002: hieroglyph = {
    id: 0x2,
    character: '叫',
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
} // 叫

console.log(h_00000001.partsOfSpeech)
console.log(h_00000002.partsOfSpeech)