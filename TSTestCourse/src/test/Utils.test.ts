import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe('Utils test suite', () => {

    describe('StringUtils tests', ()=> {
        let sut: StringUtils;

        beforeEach(()=> {
            sut = new StringUtils();
           // console.log('Setup');

        });
        afterEach(() => {
            //clearing mock
           // console.log('Teardown');

        });
        it('Should return correct uppercase', ()=> {
           
            const actual = sut.toUpperCase('te');
            expect(actual).toBe('TE');
           // console.log('actual test');
        });
        it('should throw error on Invalid argument! - function', () => {
            function expectError() {
                const actual = sut.toUpperCase('');
            }           
            expect(expectError).toThrow();
            expect(expectError).toThrowError('Invalid argument!');

        });
        it('should throw error on Invalid argument! - arrow function', () => {
                  
            // expect(()=> {
            //     const actual = sut.toUpperCase('');
            // }).toThrow();
            expect(()=>{
                const actual = sut.toUpperCase('');
            }).toThrowError('Invalid argument!');

        });

        it('should throw error on Invalid argument! - try catch block', () => {
                  
           try {
            sut.toUpperCase('');

           } catch(error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Invalid argument!');
           }

        });
    });

    it('should return uppercase of valid string', ()=>{
        //1. arrange:
        const sut = toUpperCase;
        const expected = 'ABC';

        //2. act:
        const actual = toUpperCase('abc');

        //assert:
        expect(actual).toBe(expected);

    });

   
});
//describe.only : use if you want to run only one test case

describe('ToUpperCase examples', () => {
    it.each([
        {input:'abc', expected: 'ABC'},
        {input: 'My-String', expected:'MY-STRING'},
        {input:'def', expected:'DEF'}
    ])('$input toUpperCase should be $expected', ({input, expected})=> {
        const actual = toUpperCase(input);
        expect(actual).toBe(expected);
    })
});

describe.skip('getStringInfo for arg My-String should', () => {

    xit('return right length', ()=>{
        const actual = getStringInfo('My-String');
       
        expect(actual.charaters).toHaveLength(9);
    });

    xit('return right lowercase', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.lowerCase).toBe('my-string');
    });

    it('return right Uppercase', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.upperCase).toBe('MY-STRING');
    });

    it('should return defined', ()=> {
        const actual = getStringInfo('My-String');
        expect(actual.extraInfo).toBeDefined();
    });

    it('return right characters', ()=>{
        const actual = getStringInfo('My-String');
        expect(actual.charaters).toEqual(['M','y','-','S','t','r','i','n','g']);
        expect(actual.charaters).toContain<string>('M');
        expect(actual.charaters).toEqual(
            expect.arrayContaining(['S','t','r','i','n','g','M','y','-'])
        );
    });

    it('return right extraInfo', ()=>{
        const actual = getStringInfo('My-String');

        expect(actual.extraInfo).toEqual({});

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    });

});