
function drawShape() {
    var myContent = document.getElementById('mContent');
    myContent.innerHTML = "";
    for (var i = 1; i <= 10; i++) {

        var addp = document.createElement('p');
        addp.innerHTML = i;
        addp.onclick = function () {
            alert("Selected:#" + i);
        }
        myContent.appendChild(addp);

    }
}
function clearShape() {
    var myContent = document.getElementById('mContent');
    myContent.remove('p');
}