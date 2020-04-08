import Transition from './Transition';

describe('Transition', () => {
  let transitionStep: Transition;
  let initialString: string;
  let targetString: string;

  const prepareTransitionStep = () => {
    transitionStep = new Transition(initialString, targetString);
    return transitionStep;
  };

  beforeEach(() => {
    initialString = 'Listen';
    targetString = 'Silent';
  });

  describe('currentIndexToOrder', () => {
    const subject = () => prepareTransitionStep().currentIndexToOrder;

    it('matches expectation', () => {
      expect(subject()).toEqual([2, 1, 0, 5, 3, 4]);
    });

    describe('with duplicate characters', () => {
      beforeEach(() => {
        initialString = 'aakBa';
        targetString = 'AkbAa';
      });

      it('equals expected', () => {
        expect(subject()).toEqual([0, 3, 1, 2, 4]);
      });
    });

    describe('with none existent characters in to', () => {
      beforeEach(() => {
        initialString = 'Li st en';
        targetString = 'Silent';
      });

      it('equals expected', () => {
        expect(subject()).toEqual([2, 1, null, 0, 5, null, 3, 4]);
      });
    });

    describe('with none existent characters in from', () => {
      beforeEach(() => {
        initialString = 'Listen';
        targetString = 'Si-l-ent';
      });

      it('equals expected', () => {
        expect(subject()).toEqual([3, 1, 0, 7, 5, 6]);
      });
    });
  });

  describe('next', () => {
    const subject = () => prepareTransitionStep().next();

    describe('basic case', () => {
      it('downcase case first', () => {
        subject();

        expect(transitionStep.getCurrentString()).toEqual('listen');
      });

      it('step 2', () => {
        initialString = 'listen';

        subject();

        expect(transitionStep.getCurrentString()).toEqual('ilsten');
      });
    });

    describe('Insertion of special character in middle', () => {
      beforeEach(() => {
        initialString = 'hypenjones';
        targetString = 'hypen-jones';
      });

      it('Adds the hypen', () => {
        subject();

        expect(transitionStep.getCurrentString()).toEqual('hypen-jones');
      });
    });
  });
});
