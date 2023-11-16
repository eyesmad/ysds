try {
    (({
        quizId: t = location.pathname.match(/\/([^\/]*)/)[1],
        time: c = 5.6
    } = {}) => {
        const o = {
            score: 10 * c,
            previous_record: 5,
            too_small: 0,
            time_started: Date.now() - 600,
            selectedOnly: !1
        };
        e = JSON.stringify({
            data: function(e, t) {
                for (var c = "", o = 0, n = e.length; o < n; o++) c += "-" + (e.charCodeAt(o) + t % (o + 1));
                return c.substr(1)
            }(JSON.stringify(o), 77)
        });
        const n = "https://quizlet.com/" + t + "/match";
        fetch(n + "/highscores", {
            credentials: "include",
            headers: {
                accept: "application/json",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "cs-token": document.cookie.match(/qtkn=([^;]*)(;||$)/)[1],
                pragma: "no-cache",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            referrer: n,
            referrerPolicy: "origin-when-cross-origin",
            body: e,
            method: "POST",
            mode: "cors"
        }).then(() => {
            window.location = "https://quizlet.com/" + t + "/scores"
        }).catch(() => alert("Something went wrong! Are you sure that a Quizlet set is open?"))
    })();
} catch (err) {
    alert("Something went wrong! Are you sure that a Quizlet set is open?");
}
