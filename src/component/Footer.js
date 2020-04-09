import React, { Component } from 'react';
import { Container, Box, Button } from '@material-ui/core'
// import filter from "../App";

class Footer extends Component {
    render() {
        const { filter, setFilter: setVisibilityFilter } = this.props;
        // So here's a smart trick:
        // renamed setVisibilityFilter to setFilter in order to keep the original func name below
        return (
            <Container>
                <Box display="flex" 
                    alignItems="center" 
                    justifyContent="center">
                    <Button disabled={filter === "all"}
                        onClick={
                            () => setVisibilityFilter("all")
                        }
                        color="primary"
                    >
                        All
                    </Button>
                    <Button disabled={filter === "active"}
                        onClick={
                            () => setVisibilityFilter("active")
                        }
                        color="primary"
                    >
                        Active
                    </Button>
                    <Button disabled={filter === "completed"}
                        onClick={
                            () => setVisibilityFilter("completed")
                        }
                        color="primary"
                    >
                        Completed
                    </Button>

                    {/* <button disabled={filter === "all"}
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
                    >Completed</button> */}
                </Box>
            </Container>
        );
    }
}

export default Footer;