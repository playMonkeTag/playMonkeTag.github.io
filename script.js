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
    
    const joinUrl = `/play?server=${encodeURIComponent(serverCode)}`;
    window.location.href = joinUrl;

    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const serverCodeInput = document.getElementById('serverCode');

    if (serverCodeInput) {
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
    }

    // Check if we're on the play page
    if (window.location.pathname === '/play') {
        handlePlay();
    }
});

function handlePlay() {
    const urlParams = new URLSearchParams(window.location.search);
    const serverCode = urlParams.get('server');
    const jobId = urlParams.get('jobId');

    let joinUrl = 'roblox://experiences/start?placeId=18306442585';

    if (serverCode) {
        joinUrl += `&launchData=${encodeURIComponent(JSON.stringify({ server: serverCode }))}`;
    } else if (jobId) {
        joinUrl += `&gameInstanceId=${jobId}`;
    }

    // Redirect to the game
    window.location.href = joinUrl;
}