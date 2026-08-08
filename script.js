/* ===================================
   SPIDER SMART HOME
   MAIN STYLE
=================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {

    --red: #e50914;
    --dark-red: #9b0000;
    --blue: #0066ff;
    --dark-blue: #001a4d;
    --cyan: #00d9ff;
    --black: #030712;
    --white: #ffffff;
    --green: #00ff88;
    --yellow: #ffd000;

}

body {

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    color: white;

    background:

        radial-gradient(
            circle at 20% 20%,
            rgba(229, 9, 20, 0.35),
            transparent 25%
        ),

        radial-gradient(
            circle at 80% 30%,
            rgba(0, 102, 255, 0.35),
            transparent 25%
        ),

        radial-gradient(
            circle at 50% 100%,
            rgba(229, 9, 20, 0.25),
            transparent 30%
        ),

        #020617;

    min-height: 100vh;

    overflow-x: hidden;

}


/* ===================================
   BACKGROUND WEB
=================================== */

.web-background {

    position: fixed;

    inset: 0;

    z-index: -5;

    overflow: hidden;

}

.web {

    position: absolute;

    width: 600px;

    height: 600px;

    border-radius: 50%;

    border: 1px solid
        rgba(255, 255, 255, 0.12);

}

.web::before {

    content: "";

    position: absolute;

    width: 100%;

    height: 100%;

    border-radius: 50%;

    border: 1px solid
        rgba(255, 255, 255, 0.10);

    transform: scale(0.75);

}

.web::after {

    content: "";

    position: absolute;

    width: 100%;

    height: 100%;

    border-radius: 50%;

    border: 1px solid
        rgba(255, 255, 255, 0.08);

    transform: scale(0.5);

}

.web-one {

    left: -300px;

    top: -300px;

}

.web-two {

    right: -300px;

    bottom: -300px;

}

.web-three {

    right: -400px;

    top: 20%;

    opacity: 0.5;

}


/* ===================================
   PARTICLES
=================================== */

.particles span {

    position: fixed;

    z-index: -1;

    color: #ff1e2d;

    font-size: 20px;

    animation:
        floatParticle 8s infinite;

}

.particles span:nth-child(1) {
    left: 10%;
    top: 20%;
}

.particles span:nth-child(2) {
    left: 25%;
    top: 70%;
}

.particles span:nth-child(3) {
    left: 40%;
    top: 30%;
}

.particles span:nth-child(4) {
    left: 60%;
    top: 80%;
}

.particles span:nth-child(5) {
    left: 75%;
    top: 20%;
}

.particles span:nth-child(6) {
    left: 90%;
    top: 60%;
}

.particles span:nth-child(7) {
    left: 50%;
    top: 50%;
}

@keyframes floatParticle {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.3;
    }

    50% {
        transform: translateY(-40px) rotate(180deg);
        opacity: 1;
    }

    100% {
        transform: translateY(0) rotate(360deg);
        opacity: 0.3;
    }

}


/* ===================================
   HERO
=================================== */

.hero {

    position: relative;

    padding: 45px 20px;

    text-align: center;

    background:

        linear-gradient(
            135deg,
            #a00000,
            #ed1c24 45%,
            #001f70
        );

    border-bottom:
        4px solid #ffffff;

    box-shadow:
        0 0 40px
        rgba(229, 9, 20, 0.7);

}

.spider-symbol {

    font-size: 75px;

    animation:
        spiderBounce 2s infinite;

    filter:
        drop-shadow(
            0 0 15px
            rgba(0,0,0,0.7)
        );

}

@keyframes spiderBounce {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }

}

.small-title {

    font-size: 14px;

    letter-spacing: 4px;

    margin-bottom: 8px;

}

.hero h1 {

    font-size:
        clamp(38px, 7vw, 80px);

    font-weight: 1000;

    letter-spacing: 4px;

    text-shadow:

        4px 4px 0 #001a4d,

        0 0 20px
        rgba(255,255,255,0.5);

}

.hero h1 span {

    display: block;

    color: #00c8ff;

    text-shadow:

        3px 3px 0 #001a4d,

        0 0 25px #00aaff;

}

.tagline {

    margin-top: 15px;

    font-size: 18px;

    font-style: italic;

}

.clock {

    margin-top: 20px;

    font-size: 20px;

    font-weight: bold;

    color: #fff;

}


/* ===================================
   NAVIGATION
=================================== */

nav {

    position: sticky;

    top: 0;

    z-index: 100;

    display: flex;

    justify-content: center;

    gap: 10px;

    flex-wrap: wrap;

    padding: 15px;

    background:
        rgba(2, 6, 23, 0.95);

    border-bottom:
        1px solid #e50914;

    backdrop-filter:
        blur(10px);

}

nav a {

    color: white;

    text-decoration: none;

    padding: 9px 18px;

    border-radius: 20px;

    font-weight: bold;

    font-size: 13px;

    transition: 0.3s;

}

nav a:hover {

    background: #e50914;

    box-shadow:
        0 0 15px #e50914;

}


/* ===================================
   MAIN
=================================== */

main {

    width: 92%;

    max-width: 1200px;

    margin: auto;

}


/* ===================================
   WELCOME
=================================== */

.welcome {

    margin: 45px 0;

    padding: 35px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 30px;

    background:

        linear-gradient(
            135deg,
            rgba(229,9,20,0.25),
            rgba(0,102,255,0.25)
        );

    border:

        1px solid
        rgba(255,255,255,0.25);

    border-radius: 25px;

    backdrop-filter:
        blur(10px);

}

.section-label {

    color: #00d9ff;

    font-size: 13px;

    letter-spacing: 3px;

    font-weight: bold;

    margin-bottom: 10px;

}

.welcome h2 {

    font-size:
        clamp(28px, 5vw, 50px);

}

.welcome h2 span {

    color: #e50914;

    text-shadow:
        0 0 15px #e50914;

}

.welcome p {

    margin-top: 10px;

    color: #dbeafe;

}


/* ===================================
   POWER CIRCLE
=================================== */

.power-circle {

    width: 160px;

    height: 160px;

    min-width: 160px;

    border-radius: 50%;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    background:

        radial-gradient(
            circle,
            #0066ff,
            #001a4d
        );

    border:
        4px solid #00d9ff;

    box-shadow:

        0 0 25px #0066ff,

        inset 0 0 25px
        rgba(0,217,255,0.5);

}

.power-icon {

    font-size: 35px;

}

.power-circle strong {

    color: #00ff88;

}


/* ===================================
   SECTION HEADING
=================================== */

.section-heading {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 15px;

    margin: 50px 0 30px;

}

.section-heading h2 {

    font-size: 32px;

    text-align: center;

}

.section-heading span {

    color: #e50914;

    font-size: 25px;

}


/* ===================================
   DEVICE GRID
=================================== */

.device-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;

}


/* ===================================
   DEVICE CARD
=================================== */

.device-card {

    position: relative;

    padding: 25px;

    text-align: center;

    border-radius: 22px;

    background:

        linear-gradient(
            145deg,
            rgba(30,41,59,0.95),
            rgba(2,6,23,0.95)
        );

    border:
        2px solid
        rgba(229,9,20,0.65);

    box-shadow:

        0 10px 30px
        rgba(0,0,0,0.4),

        0 0 15px
        rgba(229,9,20,0.15);

    overflow: hidden;

    transition:
        transform 0.3s,
        border 0.3s,
        box-shadow 0.3s;

}

.device-card::before {

    content: "";

    position: absolute;

    top: 0;

    left: 0;

    width: 100%;

    height: 5px;

    background:

        linear-gradient(
            90deg,
            #e50914,
            #00d9ff,
            #e50914
        );

}

.device-card:hover {

    transform:
        translateY(-10px)
        scale(1.02);

    border-color: #00d9ff;

    box-shadow:

        0 15px 40px
        rgba(0,0,0,0.5),

        0 0 30px
        rgba(0,217,255,0.3);

}


/* ===================================
   CARD TOP
=================================== */

.card-top {

    display: flex;

    justify-content:
        space-between;

    align-items: center;

}

.device-number {

    font-size: 12px;

    color: #64748b;

    font-weight: bold;

}

.web-icon {

    font-size: 20px;

}


/* ===================================
   DEVICE ICON
=================================== */

.device-icon {

    width: 100px;

    height: 100px;

    margin: 20px auto;

    display: flex;

    justify-content: center;

    align-items: center;

    border-radius: 50%;

    font-size: 50px;

    background:

        radial-gradient(
            circle,
            rgba(229,9,20,0.5),
            rgba(0,26,77,0.8)
        );

    border:
        2px solid #e50914;

    box-shadow:

        0 0 20px
        rgba(229,9,20,0.4);

    transition: 0.3s;

}

.device-card:hover .device-icon {

    transform:
        rotate(5deg)
        scale(1.1);

}

.device-card h3 {

    font-size: 20px;

    color: #ffffff;

    letter-spacing: 1px;

}

.device-description {

    color: #94a3b8;

    font-size: 13px;

    margin-top: 5px;

}


/* ===================================
   STATUS
=================================== */

.status {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin: 20px 0;

    padding: 10px 15px;

    border-radius: 10px;

    background:
        rgba(255,255,255,0.05);

}

.status span {

    color: #94a3b8;

    font-size: 12px;

}

.on {

    color: #00ff88;

    text-shadow:
        0 0 10px #00ff88;

}

.off {

    color: #ff3344;

}


/* ===================================
   BUTTON
=================================== */

.device-card button {

    width: 100%;

    padding: 13px;

    border: none;

    border-radius: 12px;

    color: white;

    font-size: 14px;

    font-weight: bold;

    cursor: pointer;

    background:

        linear-gradient(
            90deg,
            #d00000,
            #ff1e2d
        );

    box-shadow:
        0 5px 15px
        rgba(229,9,20,0.3);

    transition: 0.3s;

}

.device-card button:hover {

    transform: scale(1.03);

    background:

        linear-gradient(
            90deg,
            #0066ff,
            #00aaff
        );

    box-shadow:
        0 0 20px
        rgba(0,170,255,0.5);

}

.device-card button.active {

    background:

        linear-gradient(
            90deg,
            #0066ff,
            #00aaff
        );

}


/* ===================================
   ACTIVE CARD
=================================== */

.device-card.active {

    border-color: #00d9ff;

    box-shadow:

        0 0 30px
        rgba(0,217,255,0.35);

}

.device-card.active .device-icon {

    border-color: #00d9ff;

    box-shadow:
        0 0 30px
        rgba(0,217,255,0.5);

}


/* ===================================
   SECURITY
=================================== */

.security-section {

    margin: 60px 0;

    padding: 30px;

    display: flex;

    align-items: center;

    gap: 25px;

    border-radius: 20px;

    background:

        linear-gradient(
            90deg,
            rgba(0,102,255,0.25),
            rgba(0,255,136,0.1)
        );

    border:
        2px solid
        rgba(0,217,255,0.5);

}

.security-icon {

    font-size: 55px;

}

.security-section h2 {

    font-size: 28px;

}

.security-section h2 span {

    color: #00ff88;

}

.security-status {

    margin-left: auto;

    display: flex;

    align-items: center;

    gap: 10px;

    color: #00ff88;

}

.green-dot {

    width: 12px;

    height: 12px;

    border-radius: 50%;

    background: #00ff88;

    box-shadow:
        0 0 15px #00ff88;

}


/* ===================================
   ABOUT
=================================== */

.about-section {

    text-align: center;

    margin: 60px 0;

    padding: 40px;

}

.about-section h2 {

    font-size: 30px;

    color: #e50914;

}

.about-section p {

    max-width: 650px;

    margin: 15px auto;

    color: #94a3b8;

    line-height: 1.7;

}


/* ===================================
   FOOTER
=================================== */

footer {

    text-align: center;

    padding: 45px 20px;

    background:

        linear-gradient(
            135deg,
            #050505,
            #001a4d
        );

    border-top:
        3px solid #e50914;

}

.footer-spider {

    font-size: 50px;

    margin-bottom: 10px;

}

footer h2 {

    color: #e50914;

}

footer p {

    color: #94a3b8;

    margin-top: 8px;

}

.copyright {

    font-size: 12px;

}


/* ===================================
   RESPONSIVE
=================================== */

@media (max-width: 900px) {

    .device-grid {

        grid-template-columns:
            repeat(2, 1fr);

    }

}

@media (max-width: 650px) {

    .device-grid {

        grid-template-columns: 1fr;

    }

    .welcome {

        flex-direction: column;

        text-align: center;

    }

    .security-section {

        flex-direction: column;

        text-align: center;

    }

    .security-status {

        margin-left: 0;

    }

    nav a {

        font-size: 11px;

        padding: 8px 10px;

    }

}
