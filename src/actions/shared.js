import { receiveUsers, saveUserAnswer } from '../actions/users'
import { receivePolls, savePollAnswer } from '../actions/polls'
import { setAuthedUser } from '../actions/authedUser'
import { getInitialUsers } from '../utils/api'
import { getInitialPolls } from '../utils/api'
import { savePollAnswerAPI } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialPolls () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialPolls()
            .then((questions) => {
                dispatch(receivePolls(questions))
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

export function handleSavePollAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return savePollAnswerAPI({authedUser, qid, answer})
            .then(() => {
                dispatch(savePollAnswer(authedUser, qid, answer))
                dispatch(saveUserAnswer(authedUser, qid, answer))
                dispatch(hideLoading())
            })  
    }
}