<script lang="ts">
    import experienceCard from "../components/experienceCard.svelte";
    import {theme} from "../stores/stores";
    // we make a function for scrolling to a refrence
    import {scrollToAnchor} from "../utils";
    import socialfooter from "../components/socialfooter.svelte";

</script>
<div class="top-div">
    <div class="pageheight">
        <div class="center">
            <h1 class="title typing-style" id="home" data-theme={$theme}>
                Welcome to my portfolio!
            </h1>
        </div>
        <img
                src="https://avatars.githubusercontent.com/u/51111827?s=400&u=c2505b9768e98681bd1f82800c1d18f890c9232d&v=4"
                alt="S3bTheGuy's profile picture"
                class="profileimage"
                data-theme={$theme}
        />
        <p class="carved" data-theme={$theme}>
            Hi there, I'm Sebastian Steffensen - a Danish student developer with a passion for creating sleek,
            user-friendly applications and websites.
            <br/><br/>
            When I'm not studying at <a class="link" data-theme={$theme} href="https://www.zbc.dk">Zealand Business
            College</a> or working on a new project, you can usually find me playing video games, or trying out new
            recipes in the kitchen.
            <br/><br/>
            On this portfolio website, you can browse some of my latest projects and learn more about my skills and
            experience. But if you really want to get to know me, be sure to check out the <a class="link" href="#about"
                                                                                              data-theme={$theme}
                                                                                              on:click={scrollToAnchor}
                                                                                              style="font-style: italic">"About
            Me"</a> section - where I share more about my background, interests, and goals.
            <br/><br/>
            Thanks for stopping by, and feel free to <a class="link" data-theme={$theme} href="#contact"
                                                        on:click={scrollToAnchor} style="font-style: italic">get in
            touch</a> if you have any questions or just want to chat!
        </p>
    </div>

    <div class="pageheight" id="about">
        <h1 class="title" data-theme={$theme}>
            About me
        </h1>

        <p class="carved" data-theme={$theme}>
            Hi (again), I'm Sebastian! I'm an introverted student developer from Denmark. I might come off as quiet or
            reserved at first, but don't worry - once you get to know me, I'm pretty friendly.
            <br/><br/>
            When I'm not studying or working, you'll usually find me playing video games. I've been a fan for years and
            love exploring new worlds and stories through my favorite games.
            <br/><br/>
            I have experience in several programming languages, including <span class="rs">Rust</span>, <span
                class="ts">TypeScript</span>, <span class="swift">Swift</span>, and <span class="cs">C#</span>. However,
            Rust is definitely my favorite due to its emphasis on performance, safety, and concurrency. I'm a big fan of
            code that runs fast and without errors. I also prefer using UNIX-like operating systems for everything
            except gaming. There's just something so satisfying about the flexibility and customization they offer.
            <br/><br/>
            Outside of programming and gaming, I enjoy cooking and spending time with my friends and family. I'm always
            up for trying new things and exploring new places, whether that means hiking in the beautiful Danish
            countryside or trying out a new restaurant in the city.
            <br/><br/>
            Thanks for taking the time to get to know me a little better. If you want to chat about programming, gaming,
            or anything else, <a class="link" href="#contact" data-theme={$theme} on:click={scrollToAnchor}
                                 style="font-style: italic">feel free to get in touch!</a>
        </p>
    </div>

    <div class="pageheight">
        <h1 class="title" id="experience" data-theme={$theme}>Experience & Projects</h1>
        <svelte:component this={experienceCard}/>
    </div>

    <div>
        <h1 class="title" id="contact" data-theme={$theme}></h1>
        <svelte:component this={socialfooter}/>
    </div>
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

    .pageheight {
        min-height: 100vh;
    }

    p {
        justify-content: center;
        text-align: center;
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

    .profileimage {
        width: 15rem;
        height: 15rem;
        border-radius: 9999px;
        margin: 0 auto 3rem;
        display: block;
    }

    .profileimage[data-theme="dark"] {
        box-shadow: 0 0 5px #fff;
    }

    .profileimage {
        box-shadow: 0 0 5px #000;
    }

    .link {
        text-decoration: none;
        color: var(--link-colour-light-primary);
        font-weight: 500;
    }

    .link[data-theme="dark"] {
        color: var(--link-colour-dark-primary);
        text-decoration: none;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .typing-style {
        width: 24ch;
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

    .swift {
        color: rgb(222, 93, 67);
    }

    .cs {
        color: rgb(158, 123, 218);
    }

    @media (max-width: 600px) or (max-height: 600px) {
        .title {
            font-size: 1.5rem;
        }
        .profileimage {
            width: 10rem;
            height: 10rem;
        }
    }

    .top-div {
        display: flex;
        flex-direction: column;
    }

</style>