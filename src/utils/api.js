import {
    _getUsers,
    _getQuestion,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_DATA'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        tweets,
    }))
}

export function saveQuestion (info) {
    return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}