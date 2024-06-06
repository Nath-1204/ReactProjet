import { connect } from "react-redux"
import Component from "./component"

const mapStateToProps = state => {
    return {
        count : state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrementClick: () => dispatch({ type : 'INCREMENT'}),
        handleDecrementClick: () => dispatch({ type : 'DECREMENT'})
    }
}

const Container = connect(mapStateToProps,mapDispatchToProps)(Component);

export default Container;