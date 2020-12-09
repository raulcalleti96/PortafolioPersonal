window.onload=function() {

    setTimeout('change()',4900);
}
function change()
{
    document.getElementById('container').style.zIndex = "-1";
    document.getElementById('header').style.zIndex = "100";
}