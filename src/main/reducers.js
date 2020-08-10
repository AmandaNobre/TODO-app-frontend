import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livros',
        list: [{
            _id: 1,
            description: 'Pagar conta',
            done: true
        }]
    })
})

export default rootReducer