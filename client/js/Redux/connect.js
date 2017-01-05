import {connect} from 'react-redux';

export default (s2p, d2p) => {

    let reals2p = s2p;

    if (typeof s2p === "undefined" || s2p === null) {
        return connect(s2p, d2p);
    }

    if (typeof s2p !== "function") {
        reals2p = (state, ownProps) => (
            Object.keys(s2p).reduce((prev, key) => {
                if (s2p.hasOwnProperty(key)) {
                    prev[key] = s2p[key](state, ownProps);
                }
                return prev;
            }, {})
        );        
    }   
    
    return connect(reals2p, d2p);
}