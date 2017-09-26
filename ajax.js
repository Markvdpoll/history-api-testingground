function foobar_a() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("content").innerHTML = xmlhttp.responseText;
            var SaveContent = document.getElementById("webshopcontent").innerHTML;
            processAjaxData(SaveContent, '/foo_a');
        }
    }
    xmlhttp.open("GET", "/foo_a.php", true);
    xmlhttp.send();
}

function foobar_b() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("content").innerHTML = xmlhttp.responseText;
            var SaveContent = document.getElementById("webshopcontent").innerHTML;
            processAjaxData(SaveContent, '/foo_b');
        }
    }
    xmlhttp.open("GET", "/foo_b.php", true);
    xmlhttp.send();
}

function foobar_c() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("content").innerHTML = xmlhttp.responseText;
            var SaveContent = document.getElementById("webshopcontent").innerHTML;
            processAjaxData(SaveContent, '/foo_c');
        }
    }
    xmlhttp.open("GET", "/foo_c.php", true);
    xmlhttp.send();
}

  
function processAjaxData(response, urlPath){
    document.getElementById("webshopcontent").innerHTML = response;
    var title = "Example pushstate";
    document.title = title;
    window.history.pushState({"html":response,"pageTitle":title},"", urlPath);
}

window.onpopstate = function(e){
    if(e.state){
        document.getElementById("webshopcontainer").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    }
};
