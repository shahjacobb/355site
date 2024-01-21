document.addEventListener("DOMContentLoaded", function() {
    // Function to update content
    function updateContent(id, content) {
        document.getElementById(id).textContent = content;
    }

    // Display navigator information
    updateContent("navigatorInfo", "appName: " + navigator.appName +
        ", product: " + navigator.product +
        ", appVersion: " + navigator.appVersion +
        ", userAgent: " + navigator.userAgent +
        ", platform: " + navigator.platform +
        ", language: " + navigator.language);

    // Display window size
    updateContent("windowInfo", "innerHeight: " + window.innerHeight +
        ", innerWidth: " + window.innerWidth);

    // Display screen resolution
    updateContent("screenInfo", "width: " + screen.width +
        ", height: " + screen.height +
        ", availWidth: " + screen.availWidth +
        ", availHeight: " + screen.availHeight +
        ", colorDepth: " + screen.colorDepth +
        ", pixelDepth: " + screen.pixelDepth);

    // Display location information
    updateContent("locationInfo", "href: " + window.location.href +
        ", hostname: " + window.location.hostname +
        ", pathname: " + window.location.pathname +
        ", protocol: " + window.location.protocol);

    // Display geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            updateContent("geoLocationInfo", "Latitude: " + position.coords.latitude +
                ", Longitude: " + position.coords.longitude);
        }, function() {
            updateContent("geoLocationInfo", "Geolocation is not supported or permission denied.");
        });
    } else {
        updateContent("geoLocationInfo", "Geolocation is not supported by this browser.");
    }
});
