<script>
	import { theme } from '../stores/stores.ts';
</script>

<div class='experienceCard'>
	<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' />
	<section class='hero-section'>
		<div class='card-grid'>
			<a class='card' href='/passman'>
				<div class='card__background'
						 style='background-image: url(/.images/passman.png)'></div>
				<div class='card__content'>
					<p class='card__category'>Security</p>
					<h3 class='card__heading'>Passman</h3>
				</div>
			</a>

			<a class='card' href='/zbcTemplate'>
				<div class='card__background'
						 style='background-image: url(/.images/zbcCard.png)'></div>
				<div class='card__content'>
					<p class='card__category'>Work templates</p>
					<h3 class='card__heading'>Bjarnechapter ZBC</h3>
				</div>
			</a>

			<a class='card' href='/boredscraper'>
				<div class='card__background'
						 style='background-image: url(/.images/bored_scraper.png)'></div>
				<div class='card__content'>
					<p class='card__category'>Command Line Tools</p>
					<h3 class='card__heading'>Bored Scraper</h3>
				</div>
			</a>

			<a class='card' href='/sveltefolio'>
				{#if $theme === 'dark'}
					<div class='card__background'
							 style='background-image: url(/.images/Sveltedark.png)'></div>
				{:else}
					<div class='card__background'
							 style='background-image: url(/.images/Sveltelight.png)'></div>
				{/if}
				<div class='card__content'>
					<p class='card__category'>Website</p>
					<h3 class='card__heading'>SveltFolio</h3>
				</div>
			</a>
		</div>
	</section>
</div>

<style>
    :root {
        --text-light: rgba(255, 255, 255, 0.6);
        --text-lighter: rgba(255, 255, 255, 0.9);
        --spacing-s: 0.5rem;
        --spacing-m: 1rem;
        --spacing-l: 2rem;
        --spacing-xl: 2rem;
        --spacing-xxl: 4rem;
        --width-container: 75rem;
    }

    .hero-section {
        align-items: flex-start;
        display: flex;
        min-height: 100%;
        justify-content: center;
        padding: var(--spacing-xxl) var(--spacing-l);
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: var(--spacing-l);
        grid-row-gap: var(--spacing-l);
        max-width: var(--width-container);
        width: 100%;
    }

    @media (min-width: 540px) {
        .card-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 960px) {
        .card-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }


    .card {
        list-style: none;
        position: relative;
    }

    .card:before {
        content: '';
        display: block;
        padding-bottom: 150%;
        width: 100%;
    }

    .card__background {
        background-size: cover;
        background-position: center;
        border-radius: var(--spacing-l);
        bottom: 0;
        filter: brightness(0.9) saturate(1.2) contrast(0.85);
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform-origin: center;
        transform: scale(1) translateZ(0);
        transition: filter 200ms linear,
        transform 200ms linear;
    }

    .card:hover .card__background {
        transform: scale(1.05) translateZ(0);
    }

    .card-grid:hover > .card:not(:hover) .card__background {
        filter: brightness(0.7) saturate(0.3) contrast(1.1) blur(20px);
    }

    .card__content {
        left: 0;
        padding: var(--spacing-l);
        position: absolute;
        top: 0;
    }

    .card__category {
        color: var(--text-light);
        font-size: 0.9rem;
        margin-bottom: var(--spacing-s);
        text-transform: uppercase;
    }

    .card__heading {
        color: var(--text-lighter);
        font-size: 1.9rem;
        text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
        line-height: 1.4;
        word-spacing: 100vw;
    }

</style>
