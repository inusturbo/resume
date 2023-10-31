function changeLanguage(language) {
    var elements = document.body.getElementsByClassName(language);
    var languages = ["chinese", "english", "japanese"];
    languages.forEach(function (lang) {
        var elems = document.body.getElementsByClassName(lang);
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
        }
    });
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline";
    }
    var dropdownContent = document.getElementById("languageDropdown");
    dropdownContent.style.display = "none";
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("languageDropdown");
    if (
        dropdownContent.style.display === "none" ||
        dropdownContent.style.display === ""
    ) {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
}
