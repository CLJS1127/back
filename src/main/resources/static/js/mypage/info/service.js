const infoService = (() => {
    const submitForm = (form) => {
        form.submit();
    };
    return {submitForm};
})();
