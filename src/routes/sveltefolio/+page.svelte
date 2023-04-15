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
			src='.images/SveltDark.png'
			style='width: 20%; margin: 0 auto; display: flex; justify-content: center; align-items: center; border-radius: 10px; padding-bottom: 4rem;'
		/>
	{:else}
		<img
			alt=''
			src='../../../public/images/Sveltelight.png'
			style='width: 20%; margin: 0 auto; display: flex; justify-content: center; align-items: center; border-radius: 10px; padding-bottom: 4rem;'
		/>
	{/if}
	<p class='carved' data-theme={$theme}>

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

<script lang='ts'>
	import { theme } from '../../stores/stores';
</script>