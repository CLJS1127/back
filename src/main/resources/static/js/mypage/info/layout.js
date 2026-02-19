const infoLayout = (() => {
    const initFields = (birth, gender, phone, education) => {
        if (birth && birth.includes("-")) {
            const [y, m, d] = birth.split("-");
            const yEl = document.getElementById("M_Year");
            const mEl = document.getElementById("M_Month");
            const dEl = document.getElementById("M_Day");
            if (yEl) yEl.value = y;
            if (mEl) mEl.value = String(parseInt(m, 10));
            if (dEl) dEl.value = String(parseInt(d, 10));
        }

        if (gender) {
            const man = document.getElementById("M_Gender0");
            const women = document.getElementById("M_Gender1");
            if (gender === "man" && man) man.checked = true;
            if (gender === "women" && women) women.checked = true;
        }

        if (phone) {
            const parts = phone.split("-");
            if (parts.length >= 3) {
                const p1 = document.getElementById("M_Hand_Phone1");
                const p2 = document.getElementById("M_Hand_Phone2");
                const p3 = document.getElementById("M_Hand_Phone3");
                if (p1) p1.value = parts[0];
                if (p2) p2.value = parts[1];
                if (p3) p3.value = parts[2];
            }
        }

        if (education) {
            const educationSelect = document.getElementById("M_Education");
            if (educationSelect) educationSelect.value = education;
        }
    };

    const handleAddressSearch = () => {
        new daum.Postcode({
            oncomplete: (data) => {
                const zonecode = data.zonecode;
                let addr = data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;
                let extraAddr = "";
                if (data.userSelectedType === "R") {
                    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) extraAddr += data.bname;
                    if (data.buildingName !== "" && data.apartment === "Y") extraAddr += (extraAddr !== "" ? ", " + data.buildingName : data.buildingName);
                    if (extraAddr !== "") extraAddr = " (" + extraAddr + ")";
                }
                document.getElementById("postcheck").value = zonecode;
                document.getElementById("M_ZipCode").value = zonecode;
                document.getElementById("M_Addr_Text").value = addr + extraAddr;
                const addrDetail = document.getElementById("M_Addr_Text1");
                addrDetail.value = "";
                addrDetail.focus();
            },
        }).open();
    };

    const updateEmailField = (select, input) => {
        if (select.value !== "etc" && select.value !== "") {
            input.value = select.value;
            input.readOnly = true;
        } else {
            input.value = "";
            input.readOnly = false;
            input.focus();
        }
    };

    const upsertHidden = (form, name, value) => {
        let input = form.querySelector(`input[name="${name}"]`);
        if (!input) {
            input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            form.appendChild(input);
        }
        input.value = value || "";
    };

    const hideHelp = (wrap) => {
        const helpLayer = wrap.querySelector(".mbrLayerHelp");
        if (helpLayer) helpLayer.style.display = "none";
    };

    return {initFields, handleAddressSearch, updateEmailField, upsertHidden, hideHelp};
})();
