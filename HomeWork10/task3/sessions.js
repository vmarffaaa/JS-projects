window.onload = function() {
    let sessionList = document.getElementById('sessionList');
    let sessions = localStorage.getItem('sessions');

    if (sessions === null) {
        sessionList.innerHTML = '<p>Немає наявних сесій.</p>';
    } else {
        sessions = JSON.parse(sessions);
        let ul = document.createElement('ul');
        sessions.forEach(session => {
            let li = document.createElement('li');
            li.textContent = `Session: ${session}`;
            ul.appendChild(li);
        });
        sessionList.appendChild(ul);
    }
};