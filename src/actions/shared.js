import { receiveUsers, saveUserAnswer } from '../actions/users'
import { receiveQuestions, saveQuestionAnswer } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { getInitialUsers } from '../utils/api'
import { getInitialQuestions } from '../utils/api'
import { saveQuestionAnswerAPI } from '../utils/api'

export function handleInitialQuestions () {
    return (dispatch) => {
        return getInitialQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleInitialUsers (AUTHED_ID) {
    return (dispatch) => {
      return getInitialUsers()
        .then((users) => {
          dispatch(receiveUsers(users))
          dispatch(setAuthedUser(AUTHED_ID))
        })
    }
  }

export function handleSaveQuestionAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        
        return saveQuestionAnswerAPI({authedUser, qid, answer})
            .then(() => {
                dispatch(saveQuestionAnswer(authedUser, qid, answer))
                dispatch(saveUserAnswer(authedUser, qid, answer))
            })  
    }
}