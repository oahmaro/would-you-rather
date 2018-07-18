export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'
export const SAVE_POLL = 'SAVE_POLL'

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