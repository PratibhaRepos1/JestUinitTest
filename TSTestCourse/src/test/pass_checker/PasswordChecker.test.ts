import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker";

describe('PasswordChecker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(()=>{
        sut = new PasswordChecker();
    });
    it('Password with less than 8 chars is invalid', ()=> {
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);

    });
    it('Password with more than 8 chars is ok', ()=> {
        const actual = sut.checkPassword('1234567Ab');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('Password with no uppercase letter is invalid', ()=> {
        const actual = sut.checkPassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });
    it('Password with uppercase letter is valid', ()=> {
        const actual = sut.checkPassword('Abcd');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('Password with no lowercase letter is invalid', ()=> {
        const actual = sut.checkPassword('ABCD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);

    });
    it('Password with lowercase letter is valid', ()=> {
        const actual = sut.checkPassword('Abcd');
       // expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('Complex password is valid', () => {
        const actual = sut.checkPassword('1234abcD');
        expect(actual.reasons).toHaveLength(0);
        expect(actual.valid).toBe(true);

    });

    it('Admin password with no number is invalid', () => {
        const actual = sut.checkAdminPassword('abcdABCD');
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER)
        expect(actual.valid).toBe(false);

    });
    it('Admin password with no number is invalid', () => {
        const actual = sut.checkAdminPassword('abcdABCD7');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER)
 

    });

});