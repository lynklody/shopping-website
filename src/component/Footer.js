import React, { Component } from 'react';
// import filter from "../App";

class Footer extends Component {
    render() {
        const { filter, setFilter: setVisibilityFilter } = this.props;
        // renamed setVisibilityFilter to setFilter in order to keep the original func name below
        return (
            <div>
                <span>Show:</span>
                <button disabled={filter === "all"}
                    onClick={
                        () => setVisibilityFilter("all")
                    }
                >All</button>
                <button disabled={filter === "active"}
                    onClick={
                        () => setVisibilityFilter("active")
                    }
                >Active</button>
                <button disabled={filter === "completed"}
                    onClick={
                        () => setVisibilityFilter("completed")
                    }
                >Completed</button>
            </div>
        );
    }
}

export default Footer;