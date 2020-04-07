import {calculateTransitionSteps} from "./index";

let targetString: string;
let initialString: string;

describe('calculateTransitionSteps', () => {
    const subject = () => calculateTransitionSteps(initialString, targetString);

    describe('Both empty strings', () => {
        beforeEach(() => {
            initialString = '';
            targetString = '';
        });

        it('Returns expected', () => {
            expect(subject()).toEqual(['']);
        })
    });

    describe('Empty to something', () => {
        beforeEach(() => {
            initialString = '';
            targetString = 'Something';
        });

        it('Returns expected', () => {
            expect(subject()).toEqual([
                '',
                'S',
                'So',
                'Som',
                'Some',
                'Somet',
                'Someth',
                'Somethi',
                'Somethin',
                'Something',
            ]);
        })
    });

    describe('Something to empty', () => {
        beforeEach(() => {
            initialString = 'Something';
            targetString = '';
        });

        it('Returns expected', () => {
            expect(subject()).toEqual([
                'Something',
                'something',
                'omething',
                'mething',
                'ething',
                'thing',
                'hing',
                'ing',
                'ng',
                'g',
                '',
            ]);
        })
    });

    describe('Not an anagram!', () => {
        beforeEach(() => {
            initialString = 'This is not an anagram';
            targetString = 'It certainly is not!'
        });

        it('returns expected', () => {
            expect(subject()).toMatchSnapshot()
        });
    });

    describe('Aggronerd!!!', () => {
        beforeEach(() => {
            initialString = 'Greg Doran';
            targetString = 'Aggronerd!!!';
        });

        it('returns expected', () => {
            expect(subject()).toEqual([
                'Greg Doran',
                'greg Doran',
                'greg doran',
                'grge doran',
                'grgedoran',
                'grgeodran',
                'grgeordan',
                'grgeoradn',
                'grgeorand',
                'ggreorand',
                'ggroerand',
                'ggroearnd',
                'ggroeanrd',
                'ggroaenrd',
                'ggroanerd',
                'ggraonerd',
                'ggaronerd',
                'gagronerd',
                'aggronerd',
                'aggronerd!',
                'aggronerd!!',
                'aggronerd!!!',
                'Aggronerd!!!',
            ])
        });
    });

    describe('He bugs gore!', () => {
        beforeEach(() => {
            targetString = 'He bugs Gore!';
            initialString = 'George Bush';
        });

        it('returns expected', () => {

            expect(subject()).toEqual([
                "George Bush",
                "george Bush",
                "george bush",
                "egorge bush",
                "egogre bush",
                "egogr ebush",
                "egogr beush",
                "egogr buesh",
                "egogr buseh",
                "egogr bushe",
                "eggor bushe",
                "eggo rbushe",
                "eggo brushe",
                "eggo burshe",
                "eggo busrhe",
                "eggo bushre",
                "egg obushre",
                "egg boushre",
                "egg buoshre",
                "egg busohre",
                "egg bushore",
                "eg gbushore",
                "eg bgushore",
                "eg bugshore",
                "eg busghore",
                "eg bushgore",
                "e gbushgore",
                "e bgushgore",
                "e bugshgore",
                "e bughsgore",
                "e buhgsgore",
                "e bhugsgore",
                "e hbugsgore",
                "eh bugsgore",
                "he bugsgore",
                "he bugs gore",
                "he bugs gore!",
                "He bugs gore!",
                "He bugs Gore!"
            ])
        });
    });
});
