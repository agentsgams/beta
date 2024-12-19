
// general functions

function validURL(str) {
    const exp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const reg = new RegExp(exp);
    return !!reg.test(str);
};


// cloaker

function output(msg, clr) {
    const txt = document.getElementById("output");
    txt.style.color = clr;
    txt.innerText = msg;
};

function changeTabTitle() {
    const tcInput = document.getElementById("cloakerurl");
    if (tcInput.value == "") {
        window.localStorage.removeItem("agentsgams-title");
        output("No title entered. Default applied, refresh to see changes", "red");
    } else {
        window.localStorage.setItem("agentsgams-title", tcInput.value);
        window.document.title = tcInput.value;
        output("Title change successful", "green");
    }
    tcInput.value = "";
};

function changeTabFavicon() {
    const tcInput = document.getElementById("cloakerurl");
    if (tcInput.value === "") {
        document.querySelector("link[rel*='icon']").href = "";
        window.localStorage.removeItem("agentsgams-icon");
        output("No image entered. Default applied, refresh to see changes", "red");
    } else if (validURL(tcInput.value)) {
        document.querySelector("link[rel*='icon']").href = tcInput.value;
        window.localStorage.setItem("agentsgams-icon", tcInput.value);
        output("Icon change successful", "green");
    } else {
        output("Icon change failed. Make sure you are using a valid URL", "red");
    }
    tcInput.value = "";
};

function resetTabSettings() {
    let items = ["agentsgams-icon", "agentsgams-title"];
    items.forEach((item) => window.localStorage.removeItem(item));
    window.location.reload();
};

function cloakTemplate(name) {
    switch (name) {
        case "classlink":
            // ico
            var tcInput = document.getElementById("cloakerurl");
            tcInput.value = "https://cdn.classlink.com/production/launchpad/resources/images/favicon/favicon-32x32.png";
            changeTabFavicon();
            // title
            tcInput.value = "Login";
            changeTabTitle();
            break;
        case "classroom":
            // ico
            var tcInput = document.getElementById("cloakerurl");
            tcInput.value = "https://ssl.gstatic.com/classroom/favicon.png";
            changeTabFavicon();
            // title
            tcInput.value = "Home";
            changeTabTitle();
            break;
    }
};