import { receiveUsers, saveUserAnswer } from '../actions/users'
import { receiveQuestions, saveQuestionAnswer } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { getInitialUsers } from '../utils/api'
import { getInitialQuestions } from '../utils/api'
import { saveQuestionAnswerAPI } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialQuestions () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleInitialUsers (AUTHED_ID) {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
        })
    }
  }

export function handleSaveQuestionAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswerAPI({authedUser, qid, answer})
            .then(() => {
                dispatch(saveQuestionAnswer(authedUser, qid, answer))
                dispatch(saveUserAnswer(authedUser, qid, answer))
                dispatch(hideLoading())
            })  
    }
}