// JSON object and array
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
 if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText);
    var data = this.responseText;
    console.log(data);
 }
};
xmlhttp.open("GET", "main.json", true);
xmlhttp.send();