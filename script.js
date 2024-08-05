function validateForm() {
    const serverCodeInput = document.getElementById('serverCode');
    const errorElement = document.getElementById('error');
    const serverCode = serverCodeInput.value.trim();
    const serverCodePattern = /^[a-z]+ [a-z]+ [a-z]+$/;

    if (!serverCodePattern.test(serverCode)) {
        errorElement.textContent = "Invalid server code. Please use the format: word word word";
        return false;
    }

    errorElement.textContent = "";
    return true;
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

        const visualValue = words.join('-');
        e.target.setAttribute('data-visual-value', visualValue);
    });

    serverCodeInput.addEventListener('focus', function(e) {
        e.target.type = 'text';
    });

    serverCodeInput.addEventListener('blur', function(e) {
        const visualValue = e.target.getAttribute('data-visual-value');
        e.target.type = 'text';
        e.target.value = visualValue;
    });
});
