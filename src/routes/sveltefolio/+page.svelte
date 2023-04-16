<title>
	SveltFolio
</title>
<div class='pageheight'>
	<div class='center'>
		<h1 class='title typing-style' data-theme={$theme}>
			SvelteFolio
		</h1>
	</div>
	{#if $theme === 'dark'}
		<img
			alt=''
			src={'/.images/Sveltedark.png'}
			class='pic'
		/>
	{:else}
		<img
			alt=''
			src={'/.images/Sveltelight.png'}
			class='pic'
		/>
	{/if}
	<p class='carved' data-theme={$theme}>
		This is a portfolio built with Svelte, It's also coincidentally the site you're on right now!
		It's my first experience using Svelte and it's been a great learning experience, I've throughout this project really taken a liking to the routing system and the way it's implemented,
		and I'm looking forward to using it in future web related projects.
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
		href='Will be added soon'
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
        width: 12ch;
        animation: typing 1s steps(12), blink .5s step-end infinite alternate;
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
		.pic {
        height: 15rem;
        border-radius: 3%;
        margin: 0 auto 3rem;
        display: block;
        margin: 0 auto;
				display: flex;
				justify-content: center;
				align-items: center;
				padding-bottom: 4rem;
		}
    @media (max-width: 400px) or (max-height: 400px) {
				.pic {
						height: 7rem;
				}
		}
</style>

<script lang='ts'>
	import { theme } from '../../stores/stores';
</script>