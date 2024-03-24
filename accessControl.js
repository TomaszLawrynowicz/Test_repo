window.addEventListener('DOMContentLoaded', (event) => {
    var allowedIPRange = ['127.0.0']; // Replace this with your Wi-Fi network's IP range
    var userIPAddress = window.location.hostname;
    var lastIndex=userIPAddress.lastIndexOf(".");
    var userIPAddressRange = userIPAddress.slice(0,lastIndex);

    if (!allowedIPRange.includes(userIPAddressRange)) {
        window.location.replace('access_denied.html'); // Redirect to an access denied page
    }
});
