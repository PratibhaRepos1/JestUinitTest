import { OtherStringUtils, calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils"

describe.skip('OtherUtils test suite', () => {
    //spies 
    describe.only('OtherStringUtils with spies', ()=> {
        let sut:OtherStringUtils;

        beforeEach(()=>{
            sut = new OtherStringUtils();
        })

        test('Use a spy to track calls', ()=> {
            const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('abc');
            expect(toUpperCaseSpy).toBeCalledWith('abc');
        });

        test('Use a spy to track calls to other module', ()=> {
            const consoleLogSpy = jest.spyOn(console, 'log');
            sut.logString('abc');
            expect(consoleLogSpy).toBeCalledWith('abc');
        });

        // mocking private method with some hack, but its not a good practice:

        test.only('Use a spy to replace the implementation of a method', ()=> {
            jest.spyOn(sut as any, 'callExternalService').mockImplementation(()=> {
                console.log('calling mocked implementation!!!');

            });
            (sut as any).callExternalService();

        });

    });

    //jest mock
    describe('Tracking callbacks with Jest mocks', () => {
        const callBackMock = jest.fn();

        afterEach(()=> {
            jest.clearAllMocks();
        })

        it('calls callback for invalid argument - track calls', ()=> {
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toBeCalledWith('Invalid arguments!');
            expect(callBackMock).toBeCalledTimes(1);


        });

        it('calls callback for valid argument - track calls', ()=> {
            const actual = toUpperCaseWithCb('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toBeCalledWith('called function with abc');
            expect(callBackMock).toBeCalledTimes(1);
        });
    })

    //mock
    describe('Tracking Callbacks', ()=> {
        let cbArgs = [];
        let timesCalled = 0;

        function callBackMock(arg:string) {
            cbArgs.push(arg);
            timesCalled++;
        }
        afterEach(() => {
            //clearing tracking fields
            cbArgs = [];
            timesCalled = 0;

        });

        it('calls callback for invalid argument - track calls', ()=> {
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid arguments!');
            expect(timesCalled).toBe(1);

        });

        it('calls callback for valid argument - track calls', ()=> {
            const actual = toUpperCaseWithCb('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with abc');
            expect(timesCalled).toBe(1);

        });
    })

    //stub
    it('Calculates complexity', () => {
        const someInfo = {
            length: 3,
            lowerCase: 'ab',
            upperCase: 'AB',
            charaters: ['a', 'b'],
            extraInfo: {
                field1: "someInfo",
                field2: "someOtherInfo"
            }
        } 
        const actual = calculateComplexity(someInfo);
        expect(actual).toBe(6);


    })
    //fake
    it('ToUpperCase - calls callback for invalid argument', ()=> {
        const actual = toUpperCaseWithCb('', ()=>{});
        expect(actual).toBeUndefined();
    });


    it('ToUpperCase - calls callback for valid argument', ()=> {
        const actual = toUpperCaseWithCb('abc', ()=>{});
        expect(actual).toBe('ABC');
    });

    

})