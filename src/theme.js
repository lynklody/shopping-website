import { createMuiTheme } from '@material-ui/core/styles'
import { blue, red, indigo, pink, orange, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        fontFamily: "Arial",
        card: {
            fontSize: 20,
            fontWeight: 1000,
        },
        button: {
            fontSize: 18,
            fontWeight: 600,
        }
    },
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: pink,
        error: {
            main: red[300],
        },
        warning: orange,
        success: green,
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