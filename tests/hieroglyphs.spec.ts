import {getPartOfSpeech, partsOfSpeech} from "../src/hieroglyphs";

describe('testHieroglyphs', () =>{
    it('getPartsOfSpeechTest_1', () => {
        let a : number[] = [1, 2, 3];
        let result = ['adjective', 'adverb', 'verb'];
        expect(getPartOfSpeech(a)).toEqual(result);
    });
})
