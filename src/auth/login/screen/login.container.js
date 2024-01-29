import LoginScreen from "./login";
import { connect } from "react-redux";
import { compose } from "@reduxjs/toolkit";
import { setLoginData } from "../reduxSlice";

const mapStateToProps = state => {
    return {
        loginData: state.login.loginData
    };
};
const mapDispatchToProps = dispatch => ({
    setUserDataForLogin: data => dispatch(setLoginData(data)),
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(LoginScreen);