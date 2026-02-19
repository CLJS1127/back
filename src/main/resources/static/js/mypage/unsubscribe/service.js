const unsubscribeService = (() => {
    const submitForm = (form) => {
        form.submit();
    }
    return {submitForm};
})();
