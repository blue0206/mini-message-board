async function renderTimestamp() {
    const timestamps = document.querySelectorAll(".timestamp");
    for (let i=0; i<timestamps.length; i++) {
        timestamps[i].textContent = await formatTimestamp(timestamps[i].textContent);
    }
}

async function formatTimestamp(time: string): Promise<string> {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return fetch("/api/timeFormat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            time,
            timeZone
        })
    }).then(response => response.json())
    .then(data => data.time)
    .catch(error => {
        console.log(error);
        return "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderTimestamp();
});