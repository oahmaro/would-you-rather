import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA'

export function getInitialUsers() {
    return _getUsers()
        .then(users => ({
           users 
        }))
}

export function getInitialQuestions() {
    return _getQuestions()
        .then(questions => ({
            questions 
        }))
}

export function saveQuestion (info) {
    return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}
