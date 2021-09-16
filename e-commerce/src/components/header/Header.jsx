import { AppBar,Toolbar ,makeStyles} from "@material-ui/core"
import SearchBar from "./SearchBar";
const useStyle = makeStyles({
    header: {
        background: "#3DB2FF",
        height:60
    },
    logo :{
        fontSize: 50,
        color:"#FFE459",
        height:77,
        marginLeft: "10%",
        fontStyle: "oblique"
    }
})

const Header = () => {
    const classes = useStyle();
    return (
        <>
        <AppBar className={classes.header}>
            <Toolbar>
            <h1 className={classes.logo}>Ecommerce</h1>
            <SearchBar/>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Header
