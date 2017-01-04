export const userPolls = state => state.Polls;

export const getPollById = (state, props) => {
    return state.AllPolls.filter(poll => poll._id === props.params.pollId)[0];
}

export const getAllPollsDateDesc = (state, props) => {
    console.log("polls desc 10", state.AllPolls.sort((a, b) => {
        return a.creation_date - b.creation_date;
    }));
    return state.AllPolls.sort((a, b) => {
        return a.creation_date - b.creation_date;
    }).slice(0, 10);
}