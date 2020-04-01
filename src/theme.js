import { createMuiTheme } from '@material-ui/core/styles'
import { blue, red, indigo, pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        error: {
            main: red[300],
        },
        background: {
            default: indigo[50],
        },
    },
    // spreadThis: {
    //     customError: {
    //         color: "red",
    //         fontSize: "0.8rem",
    //         marginTop: 5
    //     },
    // }
})

export default theme;