/* -------------------------
   BASIC SETTINGS
------------------------- */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {

    font-family: Arial, sans-serif;

    min-height: 100vh;

    color: white;

    background:
        radial-gradient(circle at center, #172554 0%, #020617 70%);

    overflow-x: hidden;

}


/* -------------------------
   SPIDER WEB BACKGROUND
------------------------- */

.web {

    position: fixed;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    border: 2px solid rgba(255, 0, 0, 0.15);

    pointer-events: none;

}

.web::before,
.web::after {

    content: "";

    position: absolute;

    inset: 50px;

    border-radius: 50%;

    border: 2px solid rgba(255, 0, 0, 0.12);

}

.web::after {

    inset: 120px;

}

.web1 {

    top: -250px;
    left: -250px;

}

.web2 {

    bottom: -250px;
    right: -250px;

}


/* -------------------------
   HEADER
------------------------- */

header {

    text-align: center;

    padding: 35px 20px;

    background:
        linear-gradient(
            135deg,
            #b91c1c,
            #dc2626,
            #991b1b
        );

    border-bottom: 5px solid #0f172a;

    box-shadow:
        0 5px 25px rgba(220, 38, 38, 0.5);

}

.spider {

    font-size: 65px;

    animation: spiderMove 2s infinite alternate;

}

@keyframes spiderMove {

    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-10px);
    }

}

header h1 {

    font-size: 40px;

    font-weight: 900;

    letter-spacing: 3px;

    text-shadow:
        3px 3px 0 #020617;

}

header p {

    margin-top: 10px;

    font-size: 18px;

    font-style: italic;

}


/* -------------------------
   DASHBOARD
------------------------- */

main {

    width: 90%;

    max-width: 1100px;

    margin: 40px auto;

}

.dashboard-title {

    text-align: center;

    margin-bottom: 30px;

    font-size: 25px;

    color: #ef4444;

    letter-spacing: 2px;

}


/* -------------------------
   DEVICE GRID
------------------------- */

.dashboard {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 30px;

}


/* -------------------------
   DEVICE CARD
------------------------- */

.device-card {

    position: relative;

    background:
        linear-gradient(
            145deg,
            #111827,
            #020617
        );

    border: 2px solid #dc2626;

    border-radius: 20px;

    padding: 35px;

    text-align: center;

    box-shadow:
        0 0 20px rgba(220, 38, 38, 0.25);

    transition: 0.3s;

}

.device-card:hover {

    transform: translateY(-8px);

    border-color: #3b82f6;

    box-shadow:
        0 0 30px rgba(59, 130, 246, 0.5);

}


/* -------------------------
   DEVICE ICON
------------------------- */

.device-icon {

    font-size: 60px;

    margin-bottom: 15px;

}

.device-card h2 {

    color: #ef4444;

    letter-spacing: 2px;

    margin-bottom: 15px;

}


/* -------------------------
   STATUS
------------------------- */

.device-card p {

    font-size: 18px;

    margin-bottom: 20px;

}

.on {

    color: #22c55e;

    font-weight: bold;

    text-shadow:
        0 0 10px #22c55e;

}

.off {

    color: #ef4444;

    font-weight: bold;

}


/* -------------------------
   BUTTON
------------------------- */

button {

    padding: 13px 30px;

    border: none;

    border-radius: 30px;

    background:
        linear-gradient(
            90deg,
            #dc2626,
            #991b1b
        );

    color: white;

    font-size: 16px;

    font-weight: bold;

    letter-spacing: 1px;

    cursor: pointer;

    box-shadow:
        0 0 15px rgba(220, 38, 38, 0.4);

    transition: 0.3s;

}

button:hover {

    transform: scale(1.08);

    background:
        linear-gradient(
            90deg,
            #2563eb,
            #1d4ed8
        );

    box-shadow:
        0 0 20px rgba(37, 99, 235, 0.7);

}


/* -------------------------
   FOOTER
------------------------- */

footer {

    text-align: center;

    padding: 30px;

    margin-top: 30px;

    background: #020617;

    border-top: 2px solid #dc2626;

}

.footer-spider {

    font-size: 35px;

    margin-bottom: 10px;

}

footer p {

    margin: 5px;

    color: #94a3b8;

}


/* -------------------------
   MOBILE RESPONSIVE
------------------------- */

@media (max-width: 650px) {

    .dashboard {

        grid-template-columns: 1fr;

    }

    header h1 {

        font-size: 28px;

    }

    header p {

        font-size: 15px;

    }

    .device-card {

        padding: 25px;

    }

}
