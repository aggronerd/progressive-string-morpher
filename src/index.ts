/**
 *
 * @param initialString
 * @param targetString
 */
import Transition from "./Transition";

export function calculateTransitionSteps(initialString: string, targetString: string): Array<string> {
    const transitionSteps = [initialString];
    const current = new Transition(initialString, targetString);
    while(true) {
        const done = current.next();
        if(done) {
            return transitionSteps;
        } else {
            transitionSteps.push(current.getCurrentString());
        }
    }
}