export const validateEmail = (email) => {
    return email.match(/[\w\.]+@.[a-z]{2,6}\.\D{2,3}/gmi);
};

export const validateUserEmail = (event, setErrorState, setErrorMessage) => {
    if (event.target.value === "") {
        setErrorState(false);
        setErrorMessage("*Write your email");
    } else if (!validateEmail(event.target.value)) {
        setErrorState(false);
        setErrorMessage("*Wrong email");
    } else {
        setErrorState(true);
    }
};
