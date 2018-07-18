export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'
export const SAVE_POLL = 'SAVE_POLL'
export const ADD_POLL = 'ADD_POLL'

export function receivePolls (questions) {
    return {
        type: RECEIVE_POLLS,
        ...questions
    }
}

export function savePollAnswer (authedUser, qid, answer) {
    return {
        type: SAVE_POLL_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function addPoll (poll) {
    return {
        type: ADD_POLL,
        poll,
    }
}