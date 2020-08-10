const INITIAL_STATE = {
    description: 'Ler livros',
    list: [{
        _id: 1,
        description: 'Pagar conta',
        done: true
    },
    {
        _id: 2,
        description: 'Pagar conta de luz',
        done: false
    }]
}
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DESCRIPTION_CHANGED":
            return {
                ...state, description: action.payload
            }
        default:
            return state
    }
}