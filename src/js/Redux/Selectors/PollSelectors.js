export const userPolls = state => state.Polls;

export const getPollById = (state, props) => {
    return state.AllPolls.filter(poll => poll._id === props.params.pollId)[0];
}