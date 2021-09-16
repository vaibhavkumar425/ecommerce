import { makeStyles,alpha,InputBase } from "@material-ui/core"
import { Search } from "@material-ui/icons";
const useStyle = makeStyles((theme)=>({
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#FFFFFF",
        '&:hover': {
          backgroundColor: "#F9F9F9",
        },
        display:"inline",
        marginRight: theme.spacing(2),
        marginLeft: 10,
        width: '40%',
      },
      searchIcon: {
        padding: 6,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'inline',
        color: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: '#232323',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '40%',
      }
}));
const SearchBar = () => {
    const classes = useStyle();
    return (
        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    )
}
export default SearchBar;