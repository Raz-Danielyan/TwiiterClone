import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    height: '100vh',
    textTransform: 'capitalize'
  },
  blueSide: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#71C9F8',
    flex: '0 0 50%',
    overflow: 'hidden'
  },
  blueSideBigIcon: {
    position: 'absolute',
    top: "56%",
    left: "81%",
    width: "250%",
    height: "250%",
    transform: 'translate(-50%,-50%)',
  },
  blueSideListInfo: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    zIndex: 1,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
      "& svg": {
        fontSize: 32,
        marginRight: 15
      }
    }
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  makeSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20
  },
  loginSideField: {
    marginBottom: 15
  },
  registerSideField: {
    marginBottom: 30
  },
});

export default useStyles;