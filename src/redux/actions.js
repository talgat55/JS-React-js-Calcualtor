import {INCREMENT_CURRENT_STEP, SET_PROGRAM, SET_TERM_PERIOD, SET_TOTAL_SUM} from "./types";


export function setProgram(program) {
    return {
        type: SET_PROGRAM,
        payload: program
    }
}

export function setTotalSum(sum) {
    return {
        type: SET_TOTAL_SUM,
        payload: sum
    }
}

export function setTermPeriod(term) {
    return {
        type: SET_TERM_PERIOD,
        payload: term
    }
}

export function setIncrementCurrentStep(step) {
    return {
        type: INCREMENT_CURRENT_STEP,
        payload: step
    }
}



