<title>
	ZBC LaTeX Template
</title>
<div class='pageheight'>
	<div class='center'>
		<h1 class='title typing-style' data-theme={$theme}>
			ZBC LaTeX Template
		</h1>
	</div>
	<img
		alt=''
		src='https://media.discordapp.net/attachments/905002334428483674/1095993490602725396/zbcCard.png?width=759&height=1074'
		style='width: 20%; margin: 0 auto; display: flex; justify-content: center; align-items: center; border-radius: 10px; padding-bottom: 4rem;'
	/>
	<p class='carved' data-theme={$theme}>
		This is an unofficial danish LaTeX template for ZBC (Zealand business College) reports. It is based on the
		RapportTemplate by <a class='link' data-theme={$theme} href='https://github.com/HollowNumber' target='_blank'>HollowNumbers</a>
		Template but implements the Bjarne chapter style.
		It's a quick and easy way to get started with LaTeX and ZBC reports.
		a quickstart guide is located in the Readme.md file.
	</p>
</div>
<div style='display: flex;
            justify-content: center;
            align-items: center;'>
	<a
		class='source center'
		data-theme={$theme}
		href='/../'>
		Take Me Back
	</a>

	<a
		class='source center'
		data-theme={$theme}
		href='https://github.com/S3bTheGuy/RapportTemplate'
		rel='noopener noreferrer'
		target='_blank'>
		Github Repo
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
        width: 19ch;
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

    .link {
        text-decoration: none;
        color: var(--link-colour-light-primary);
        font-weight: 500;
    }

    .link[data-theme="dark"] {
        color: var(--link-colour-dark-primary);
        text-decoration: none;
    }
</style>

<script lang='ts'>
	import { theme } from '../../stores/stores';
</script>