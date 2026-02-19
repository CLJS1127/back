const notificationLayout = (() => {
    const markAsRead = (btn) => {
        const li = btn.closest("li");
        if (li) li.classList.add("read");
        btn.remove();
    }
    return {markAsRead};
})();
