...
export const askQuestion = ({dispatch}, e) => {
    dispatch('ASK_QUESTION', e)
}

export const updateActiveText = ({dispatch}, e) => {
    dispatch('UPDATE_ACTIVE_TEXT', e.target.value)
}
...