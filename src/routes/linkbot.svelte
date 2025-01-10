<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LinkBot-JS v1.1 by itsbumble</title>
    <style>
        body {
            background-color: #263238;
            color: #FFFFFF;
            font-family: Helvetica, sans-serif;
        }
        #splash {
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 200px;
            background-color: #263238;
            text-align: center;
            padding-top: 50px;
            font-size: 24px;
        }
        #main {
            display: none;
        }
        .button {
            background-color: #37474F;
            color: #FFFFFF;
            border: none;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
        }
        #warning {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #FFCDD2; /* Light red for warning */
        }
    </style>
</head>
<body>

<div id="splash">LinkBot-JS v1.1 by itsbumble</div>

<div id="main">
    <div>
        <label for="baseUrl">Enter base URL (use 'XXXX' as placeholder):</label>
        <input type="text" id="baseUrl" value="https://example.com/XXXX.jpeg" />
    </div>
    <div>
        <label for="numLinks">Enter number of links:</label>
        <input type="text" id="numLinks" />
    </div>
    <div>
        <button class="button" onclick="generateLinks()">Generate Links</button>
        <button class="button" onclick="openLinks()">Open Links in Browser</button>
        <button class="button" onclick="copyLinks()">Copy Links</button>
        <button class="button" onclick="clearLinks()">Clear Links</button>
        <button class="button" onclick="openSupport()">Support Me</button>
    </div>
    <textarea id="linkOutput" style="width: 100%; height: 200px; background-color: #37474F; color: #FFFFFF;" readonly></textarea>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const splash = document.getElementById('splash');
        splash.style.display = 'block';

        setTimeout(() => {
            splash.style.display = 'none';
            document.getElementById('main').style.display = 'block';
        }, 750);
    });

    let allLinks = [];

    function generateLinks() {
        const numLinks = parseInt(document.getElementById('numLinks').value);
        const baseLink = document.getElementById('baseUrl').value;

        if (!baseLink.includes('XXXX')) {
            alert('Base URL must contain "XXXX" as a placeholder.');
            return;
        }

        if (isNaN(numLinks) || numLinks <= 0) {
            alert('Please enter a number greater than 0.');
            return;
        }

        allLinks = Array.from({ length: numLinks }, () => {
            const randomNum = Math.floor(Math.random() * 3000) + 1;
            return baseLink.replace('XXXX', randomNum);
        });

        document.getElementById('linkOutput').value = allLinks.join('\n');
    }

    function openLinks() {
        if (!allLinks.length) return;
        allLinks.forEach(link => window.open(link, '_blank'));
    }

    function copyLinks() {
        if (!allLinks.length) return;
        const linkOutput = document.getElementById('linkOutput');
        linkOutput.select();
        document.execCommand('copy');
        alert('Links have been copied to clipboard.');
    }

    function clearLinks() {
        document.getElementById('linkOutput').value = '';
        allLinks = [];
    }

    function openSupport() {
        window.open('https://bumble.pink', '_blank');
    }
</script>

</body>
</html>
