// Function to copy USDT address to clipboard
function copyAddress() {
    const address = document.getElementById('usdt-address').innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert('USDT address copied to clipboard');
    });
}

// Function to handle form submission for payment
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = 750; // Amount in USDT

    // Simulate payment processing
    alert(`Payment of 750 USDT to TWaB9s2nBVMbDaZaVNpAYMKXqzc6ZE26CY for ${name} (${email})`);
    alert('Payment successful! License key will be sent to your email.');
    // TODO: Send the license key to the user's email
});

// Function to handle form submission for license key
document.getElementById('license-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const licenseKey = document.getElementById('license-key').value;
    // Simulate license key validation
    alert(`License key ${licenseKey} submitted`);
    alert('License key is valid. Access granted.');
    // TODO: Grant access to the simulator
});

// Function to handle chat bot interactions
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const message = chatInput.value;
    if (message.trim()) {
        chatBox.innerHTML += `<p class="neon-text">You: ${message}</p>`;
        chatInput.value = '';

        // Simulate chat bot response
        const botResponse = 'Thank you for your message. We will get back to you shortly.';
        chatBox.innerHTML += `<p class="neon-text">Bot: ${botResponse}</p>`;
    }
}

// Function to fetch live crypto transactions
function fetchLiveTransactions() {
    const liveTransactions = document.getElementById('live-transactions');
    liveTransactions.innerHTML = '<p class="neon-text">Fetching live transactions...</p>';

    fetch('https://min-api.cryptocompare.com/data/v2/histohour?fsym=USDT&tsym=USD&limit=10')
        .then(response => response.json())
        .then(data => {
            liveTransactions.innerHTML = '';
            data.Data.Data.forEach(transaction => {
                liveTransactions.innerHTML += `<p class="neon-text">Time: ${new Date(transaction.time * 1000).toLocaleString()}, Price: ${transaction.close} USD</p>`;
            });
        })
        .catch(error => {
            liveTransactions.innerHTML = '<p class="neon-text">Error fetching live transactions.</p>';
            console.error('Error:', error);
        });
}

fetchLiveTransactions();
