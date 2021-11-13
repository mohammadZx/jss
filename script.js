var jss = document.querySelectorAll('*[class *= jss-]');
for (elm of jss) {
    var jssClass;
    for (classes of elm.classList) {
        if (classes.substring(0, 4) == "jss-") {
            jssClass = classes.substring(4)
            var getPropery = jssClass.split('--')[0];
            var getValue = jssClass.split('--')[1];
            elm.style.setProperty(getPropery, getValue)
        }
    }

}