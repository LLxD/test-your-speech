<script>
  import logo from "./assets/svelte.png";
  import Game from "./lib/Game.svelte";
</script>

<main>
  <img src={logo} alt="Svelte Logo" />

  <Game />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(body) {
    background-color: #111;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 10rem;
    width: 10rem;
  }
</style>
