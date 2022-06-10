import {getPartOfSpeech, partsOfSpeech} from "../hieroglyphs";

describe('testHieroglyphs', () =>{

    it('getPartsOfSpeechTest_1', () => {
        let result = ['adjective', 'adverb', 'verb']
        console.log(typeof(result))
        expect(getPartOfSpeech([1, 2, 3])).toEqual(result)
    });

})
