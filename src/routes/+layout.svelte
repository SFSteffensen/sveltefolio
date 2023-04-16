<nav class='navbar'>
	<!-- Navigation Links -->
	<div>
		<button class='navbar-link heroButton' data-theme='dark' href='#home' on:click={scrollToAnchor}>Home</button>
	</div>
	<div>
		<button class='navbar-link heroButton' data-theme='dark' href='#about' on:click={scrollToAnchor}>About</button>
	</div>
	<div>
		<button class='navbar-link heroButton' data-theme='dark' href='#experience' on:click={scrollToAnchor}>
			Experience
		</button>
	</div>
	<div>
		<button class='navbar-link heroButton' data-theme='dark' href='#contact' on:click={scrollToAnchor}>Contact
		</button>
	</div>
	<!-- Theme Toggle Button -->
	<div>
		<button class='heroButton' data-theme={$theme} on:click={toggle_theme}>
			{#if $theme === 'dark'}
				<svg width='24px' height='24px' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg'
						 xmlns:xlink='http://www.w3.org/1999/xlink' fill='#ffffff'>
					<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
					<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
					<g id='SVGRepo_iconCarrier'><title>sun</title>
						<g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
							<g id='Combined-Shape' fill='#ffffff' transform='translate(21.333333, 21.333333)'>
								<path
									d='M256,384 L256,469.333333 L213.333333,469.333333 L213.333333,384 L256,384 Z M355.346224,325.176335 L415.686003,385.516113 L385.516113,415.686003 L325.176335,355.346224 L355.346224,325.176335 Z M113.987109,325.176335 L144.156999,355.346224 L83.81722,415.686003 L53.6473307,385.516113 L113.987109,325.176335 Z M234.666667,118.01971 C299.089002,118.01971 351.313623,170.244331 351.313623,234.666667 C351.313623,299.089002 299.089002,351.314049 234.666667,351.314049 C203.711846,351.372867 174.007802,339.102338 152.119399,317.213934 C130.230995,295.325531 117.960466,265.621487 118.019285,234.666667 C118.019285,170.244331 170.244331,118.01971 234.666667,118.01971 Z M234.666667,160.686377 C193.808416,160.686377 160.685951,193.808546 160.685951,234.748031 C160.648688,254.358867 168.422443,273.1772 182.289288,287.044045 C196.156133,300.91089 214.974466,308.684645 234.666667,308.647305 C275.524788,308.647305 308.646957,275.524917 308.646957,234.666667 C308.646957,193.808481 275.524853,160.686377 234.666667,160.686377 Z M469.333333,213.333333 L469.333333,256 L384,256 L384,213.333333 L469.333333,213.333333 Z M85.3333333,213.333333 L85.3333333,256 L3.55271368e-15,256 L3.55271368e-15,213.333333 L85.3333333,213.333333 Z M83.81722,53.6473307 L144.156999,113.987109 L113.987109,144.156999 L53.6473307,83.81722 L83.81722,53.6473307 Z M385.516113,53.6473307 L415.686003,83.81722 L355.346224,144.156999 L325.176335,113.987109 L385.516113,53.6473307 Z M256,9.68506364e-12 L256,85.3333333 L213.333333,85.3333333 L213.333333,9.6772259e-12 L256,9.68506364e-12 Z'></path>
							</g>
						</g>
					</g>
				</svg>
			{:else}
				<svg width='24px' height='24px' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'
						 fill='#ffffff'>
					<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
					<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
					<g id='SVGRepo_iconCarrier'>
						<path fill='#ffffff'
									d='M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z'></path>
					</g>
				</svg>
			{/if}
		</button>
	</div>
</nav>


<style>
    /* Root Variables */
    :root {
        --backround-colour-dark-primary: #303446;
        --backround-colour-dark-secondary: #292c3c;
        --backround-colour-dark-accent: #232634;
        --backround-colour-light-primary: #eff1f5;
        --backround-colour-light-secondary: #e6e9ef;
        --backround-colour-light-accent: #dce0e8;
        --text-colour-dark-primary: #c6d0f5;
        --text-colour-dark-secondary: #b5bfe2;
        --text-colour-dark-accent: #a5adce;
        --text-colour-light-primary: #4c4f69;
        --text-colour-light-secondary: #5c5f77;
        --text-colour-light-accent: #6c6f85;
        --link-colour-dark-primary: #969cb7;
        --link-colour-light-primary: #607399;
        --main-font: 'helvetica neue', helvetica, arial, sans-serif;
        --mono-font: 'SF Mono Ligatures', monospace;
        --i: 0;
    }

    /* Body Styles */
    :global(body) {
        width: 100%;
        background: var(--backround-colour-dark-primary);
        background-size: 350% 350%;
        position: relative;
        animation: change 20s ease-in-out infinite;
        font-size: 20px;
        color: var(--text-colour-dark-secondary);
        font-family: var(--main-font);
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        padding-top: 2.5rem;
    }

    :global(body.light) {
        background: var(--backround-colour-light-primary);
        background-size: 350% 350%;
        position: relative;
        animation: change 2s 0s ease-in-out infinite;
        font-size: 20px;
        color: var(--text-colour-light-secondary);
        font-family: var(--main-font);
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        padding-top: 2.5rem;
    }

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
    }


    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--backround-colour-dark-accent);
        opacity: 0.9;
        backdrop-filter: blur(2px);
        height: 3.5rem;
        gap: 3rem;
    }

    @media (max-width: 768px) {
        .navbar {
            overflow-x: auto;
            justify-content: flex-start;
        }
    }

    .navbar > div {
        opacity: 0;
        transform: translateY(-150%);
        animation: slide-in 1s forwards;
        animation-delay: calc(0.2s * var(--i));
    }

    .navbar > div:nth-child(1) {
        --i: 1;
    }

    .navbar > div:nth-child(2) {
        --i: 2;
    }

    .navbar > div:nth-child(3) {
        --i: 3;
    }

    .navbar > div:nth-child(4) {
        --i: 4;
    }

    .navbar > div:nth-child(5) {
        --i: 5;
    }

    .heroButton {
        position: relative;
        border-radius: 16px;
        width: 7rem;
        height: 3.5rem;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: var(--text-colour-dark-primary);
        text-decoration: none;
        font-weight: bold;
        transition: all 0.2s ease-in;
    }

    .heroButton:hover {
        background: var(--backround-colour-light-accent);
        color: var(--text-colour-light-primary);
        height: 2rem;
        width: 7rem;
        border: 2px solid var(--backround-colour-dark-secondary);
        transform: scale(1.1) translateZ(0);
    }

    @keyframes slide-in {
        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }

    @keyframes change {
        0% {
            background-position: 0 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0 50%;
        }
    }

</style>

<script>
	import { onMount } from 'svelte';
	import { theme } from '../stores/stores.ts';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	// On mount, set the theme based on the value in the theme store
	onMount(() => {
		document.body.classList.toggle('light', $theme === 'light');
		let themeElements = document.querySelectorAll('[data-theme]');
		themeElements.forEach((element) => {
			element.dataset.theme = $theme;
		});
	});

	// Function to smoothly scroll to an anchor on the page
	function scrollToAnchor(event) {
		event.preventDefault();
		const href = event.target.getAttribute('href');
		const offsetTop = document.querySelector(href).offsetTop - 60;
		window.scrollTo({
			top: offsetTop,
			behavior: 'smooth'
		});
	}

	// Function to toggle between light and dark themes
	const toggle_theme = () => {
		theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
		document.body.className = $theme;
	};

	inject({ mode: dev ? 'development' : 'production' });

</script>


<slot></slot>