function changeTheme(themeName) {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.setAttribute('href', themeName);
}


function handleTerminalInput(event) {
    if (event.key === "Enter") {
        const terminal = document.getElementById('terminal');
        const input = event.target.value.trim();
        terminal.innerHTML += `<div>> ${input}</div>`;

        if (/^[0-9+\-*/\s()]+$/.test(input)) {
            try {
                const result = eval(input);
                terminal.innerHTML += `<div>Result: ${result}</div>`;
            } catch (error) {
                terminal.innerHTML += `<div>Error: ${error.message}</div>`;
            }
        } else if (input.startsWith("print(") && input.endsWith(")")) {
            const output = input.substring(7, input.length - 2);
            terminal.innerHTML += `<div>${output}</div>`;
        } else {
            terminal.innerHTML += "<div>Invalid input. Please enter a valid arithmetic expression or use print() function.</div>";
        }

        event.target.value = ''; 
        terminal.scrollTop = terminal.scrollHeight;
    }
}

document.getElementById('editor').addEventListener('keyup', handleTerminalInput);

const saveBtn = document.getElementById('saveBtn');
    const popup = document.getElementById('popup');

    saveBtn.addEventListener('click', () => {
        popup.style.display = 'block'; 
        
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    });
