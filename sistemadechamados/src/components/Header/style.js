import { makeStyles } from "@material-ui/styles";
import coverImage from "../../assets/cover.png";
import { AuthContext } from "../../contexts/auth";

export const useStyles = makeStyles({
  __sidebar: {
    margin: 0,
    padding: 0,
    width: "200px",
    backgroundColor: "#181c2e",
    position: "fixed",
    height: "100%",
    overflow: "auto",

    "& a": {
      color: "rgba(255,255,255,0.7)",
      padding: "20px 20px 20px 10px",
      textDecoration: "none",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      transition: "ease-in-out .4s",

      "&:hover": {
        backgroundColor: "#121212",
        color: "#FFF",
      },

      "& svg": {
        marginRight: ".5em",
      },
    },
  },

  __cover: {
    background: `url(${coverImage})`,
    backgroundColor: "#181c2e",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "150px",
    padding: "25px 30px",

    "& img": {
      borderRadius: "50%",
      display: "block",
      margin: "auto",
      width: "90px",
      height: "90px",
      filter: "drop-shadow( 3px 5px 6px #121212)",
    },
  },

  "@media screen and (max-width: 700px)": {
    __sidebar: {
      width: "100%",
      height: "auto",
      position: "relative",

      "& a": {
        float: "left",

        "& svg": {
          display: "none",
        },
      },
    },

    __cover: {
      display: "none",
    },
  },

  "@media screen and (max-width: 400px)": {
    __sidebar: {
      width: "100%",
      height: "auto",
      position: "relative",
      justifyContent: "center",
      display: "flex",

      "& svg": {
        display: "none",
      },
    },

    __cover: {
      display: "none",
    },
  },
});
