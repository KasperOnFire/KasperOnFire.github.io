$(document).ready(function () {
    $("#input").focus();
});

function SetPrompt(marker) {
    if (marker != "") {
        if (marker.length > 1) {
            prompt = "&" + marker + ";&nbsp;"
        } else {
            prompt = marker + "&nbsp;"
        }
        currentMarkers = $(".markers").each($(this).text = prompt);
    }
}