import Transition from './Transition';

/**
 * Returns a Transition object that allows the caller to iteratively calculate the next steps in the
 * transition from initialString to targetString.
 *
 * @param initialString The string to morph from
 * @param targetString The string to morph to
 */
export function morph(initialString: string, targetString: string): Transition {
  return new Transition(initialString, targetString);
}

/**
 * Returns all the strings that are part of the transition from the initialString to the
 * targetString. It is recommended to use morph() instead if you are working with a big difference
 * between two large strings.
 *
 * @param initialString The string to morph from
 * @param targetString The string to morph to
 */
export function calculateAll(initialString: string, targetString: string): Array<string> {
  const transitionSteps = [];
  const current = morph(initialString, targetString);
  do {
    transitionSteps.push(current.getCurrentString());
  } while (!current.next());
  return transitionSteps;
}
