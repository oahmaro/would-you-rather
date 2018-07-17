import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { getInitialUsers } from '../utils/api'
import { getInitialQuestions } from '../utils/api'
import { saveQuestionAnswer } from '../utils/api'

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
        const { authedUser, users, questions } = getState()
        console.log('REALLY IMPORTANT!', authedUser)
        return saveQuestionAnswer({authedUser, qid, answer})
            .then(() => {
                dispatch(handleInitialQuestions())
                dispatch(handleInitialUsers(authedUser))
            })  
    }
}