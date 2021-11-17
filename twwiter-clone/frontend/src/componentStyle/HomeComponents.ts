import { makeStyles, TextField, Theme, withStyles } from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';

export const HomeStyles = makeStyles({
  sideMenuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sideMenulistItem: {
    paddingBottom: 10,
    cursor: 'pointer',
    "&:hover": {
      "& button": {
        background: "rgb(29, 161, 242)",
        color: "#fff"
      }
    }
  },
  sideMenulistItemButtonTweet: {
    background: "rgb(29, 161, 242)",
    height: 50,
    fontWeight: 700,
    fontSize: 20,
    padding: '20px 30px 23px 30px',
    color: '#fff',
    maxWidth: 230,
    marginTop: 20
  },
  sideMenulistItemButton: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 16
  },
  sideMenulistItemLable: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 5
  },
  sideMenulistItemIcon: {
    fontSize: 25
  },
  wrapper: {
    height: '100vh'
  },
  logo: {
    fontSize: 36,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 'none',
    borderBottom: 'none',
  },
  tweetAvatar: {
    width: 45,
    height: 45,
    margin: '5px 9px 0 8px',
  },
  tweetsWrapperUser: {
    display: 'flex',
    borderRadius: 0,
    borderRight: 'none',
    borderTop: 'none',
    borderLeft: 'none'
  },
  tweetsHeader: {
    position: 'sticky',
    display: "flex",
    alignItems: "center",
    top: 0,
    background: "#fff",
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderRadius: 0,
    padding: '10px 15px',
    zIndex: 1,
    "& h6": {
      fontWeight: 800
    }
  },
  AddTweet: {
    flexDirection: 'column'
  },
  addTweetWrapper: {
    display: 'flex',
    justifyContent: "space-between"
  },
  addTweetWrapperAvatar: {
    display: 'flex',
    alignItems: 'center',
  },
  addTweetText: {
    fontSize: 24,
    padding: '10px'
  },
  addTweetIcons: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 5,
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
  },
  twwetUserName: {
    color: grey[500],
  },
  twwetFooter: {
    display: 'flex',
    position: "relative",
    left: -13,
    justifyContent: 'space-between',
    width: '90%'
  },
  tweet: {
    cursor: 'pointer',
    '&:hover': {
      background: 'rgb(245,248,250)'
    }
  },
  rightSide: {
    position: 'sticky',
    paddingTop: 20,
    paddingLeft: 10,
    top: 0,
  },
  rightSideBlock: {
    background: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    }
  },
  rightSideBlockHeader: {
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    background: "transparent",
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      background: '#edf3f6',
    },
  },
  addForm: {
    padding: 20,
    paddingLeft: 13
  },
  addFormBody: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  addFormBottomActions: {
    display: 'inline-block',
    justifyContent: 'flex-start',
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,

    background: 'rgba(0, 0, 0, 0.12)',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px'
  },
  tweetUserName: {
    margin: "0px 0px 10px 10px",
    fontSize: "18px",
    color: "rgba(0, 0, 0, 0.52)"
  },
  imagesList: {
    display: 'flex',
    alignItems: 'center',
    margin: "10px 0",
    flexWrap: 'wrap'
  },
  imagesListItemFullWidth: {
    borderRadius: 6,
    width: 500,
    height: 500,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  imagesListItem: {
    position: 'relative',
    cursor: 'pointer',
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 10,
    marginTop: 5,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    "& button": {
      position: 'absolute',
      padding: 0,
      top: '-10px',
      right: '-8px',
      color: 'rgb(251 30 73)'
    }
  },
  sideProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "50px",
    padding: "3px 11px 3px 5px",
    borderRadius: "30px",
    background: "#fff",
    "&:hover": {
      background: "#F5F8FA"
    }
  },
  sideProfieMenu: {
    marginRight: "auto",
    marginLeft: "6px"
  },
  ProfileMenu: {
    boxShadow: '1px 1px 10px rgba(0,0,0,.8) !important',
    border: '1px solid rgba(0,0,0,.1) !important'
  }
});
export const TextFieldHome = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      background: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '&.Mui-focused': {
        background: '#fff',
        '& fieldset': {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:hover': {
        '& fieldset': { borderColor: 'transparent' },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px'
    }
  }
})
)(TextField)