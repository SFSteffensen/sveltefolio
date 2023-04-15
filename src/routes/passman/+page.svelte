<title>
    Passman
</title>
<div class="pageheight">
    <div class="center">
        <h1 class="title typing-style" data-theme={$theme}>
            Passman <br/> A password manager written using Tauri
        </h1>
    </div>
    <img
            src="https://media.discordapp.net/attachments/905002334428483674/1044965665288757339/Login.png?width=1909&height=1074"
            alt=""
            style="width: 20%; margin: 0 auto; display: flex; justify-content: center; align-items: center; border-radius: 10px; padding-bottom: 4rem;"
    />
    <p class="carved" data-theme={$theme}>
        Passman is a password manager written in <span class="rs">Rust</span> & <span class="ts">TypeScript</span> using
        Tauri. It was made for a programming exam and is not intended to be used in production.
        As of now it has major security flaws and is just a proof of concept.
        Due to the above reasons, the repo is private and will not be made public.
    </p>
</div>
<div style="display: flex;
            justify-content: center;
            align-items: center;">
    <a
            href="/../"
            class="source center"
            data-theme={$theme}>
        Take Me Back
    </a>
</div>

<style>
    .title {
        font-size: 2rem;
        font-family: 'SF Mono Ligatures', monospace;
        font-weight: 800;
        text-align: center;
        text-transform: uppercase;
    }

    .title[data-theme="dark"] {
        color: var(--text-colour-dark-primary);
    }

    .title[data-theme="light"] {
        color: var(--text-colour-light-primary);
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .carved {
        border-radius: 50px;
        padding: 2rem;
        width: 80%;
        margin: 0 auto;
    }

    .carved[data-theme="dark"] {
        background: #232634;
    }

    .carved[data-theme="light"] {
        background: #dce0e8;
    }

    .source {
        font-size: 1.5rem;
        font-family: 'SF Mono Ligatures', monospace;
        font-weight: 800;
        text-align: center;
        text-transform: uppercase;
        padding: 1rem;
        border-radius: 50px;
        margin: 0 auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 20%;
    }

    .source[data-theme="dark"] {
        background: #232634;
        color: var(--text-colour-dark-primary);
    }

    .source[data-theme="light"] {
        background: #dce0e8;
        color: var(--text-colour-light-primary);
    }

    .typing-style {
        width: 40ch;
        animation: typing 2s steps(24), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
        font-size: 2em;
    }

    @keyframes typing {
        from {
            width: 0
        }
    }

    @keyframes blink {
        50% {
            border-color: transparent
        }
    }

    .rs {
        color: #e69f67;
    }

    .ts {
        color: #3178c6;
    }
</style>

<script lang="ts">
    import {theme} from "../../stores/stores";
</script>