function handleJoin(event) {
    event.preventDefault();
    const serverCodeInput = document.getElementById('serverCode');
    const errorElement = document.getElementById('error');
    const serverCode = serverCodeInput.value.trim();
    const serverCodePattern = /^[a-z]+ [a-z]+ [a-z]+$/;

    if (!serverCodePattern.test(serverCode)) {
        errorElement.textContent = "Invalid server code. Please use the format: word word word";
        return false;
    }

    errorElement.textContent = "";
    
    const joinUrl = `roblox://experiences/start?placeId=18306442585&launchData=${encodeURIComponent(JSON.stringify({ server: serverCode }))}`;
    
    window.location.href = joinUrl;

    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const serverCodeInput = document.getElementById('serverCode');

    serverCodeInput.addEventListener('input', function(e) {
        let value = e.target.value.toLowerCase();
        value = value.replace(/[^a-z\s]/g, '');
        value = value.replace(/\s+/g, ' ');
        
        const words = value.split(' ');
        if (words.length > 3) {
            words.length = 3;
        }

        e.target.value = words.join(' ');
    });
});
