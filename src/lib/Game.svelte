<script>
  let word;
  let loadWord = () => {
    return fetch(`https://random-word-api.herokuapp.com/word?number=1&swear=0`)
      .then((r) => r.json())
      .then((data) => {
        word = data[0];
      });
  };

  let count = 0;

  let output = "";
  let gameStart = false;

  const start = () => {
    const recognition = new webkitSpeechRecognition();
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.start();
    // This event happens when you talk in the microphone
    recognition.onresult = function (event) {
      const content = event.results[0][0].transcript.trim();
      output = content;
    };
    recognition.onspeechend = () => {
      setTimeout(() => checkResult(word, output), 800);
      setTimeout(() => startGame(), 2000);
    };
  };

  const clean = (word) => {
    const cleanedWord = word
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?']/g, "");
    return cleanedWord;
  };

  let coinSound;
  let correct;

  const checkResult = (loadedWord, listenedWord) => {
    if (clean(listenedWord).includes(clean(loadedWord))) {
      correct = true;
      setTimeout(() => (correct = false), 2000);
      coinSound.play();
      count++;
    }
    return "FOI";
  };

  const startGame = () => {
    gameStart = true;
    loadWord().then(() => start());
  };
</script>

<audio
  src="https://www.myinstants.com/media/sounds/02-coin-snk-vs-capcom-svc-chaos-neo-geo-ost-neogeo.mp3"
  preload="auto"
  bind:this={coinSound}
/>

<div class="container">
  {#if word === undefined}
    <h1>Vamos jogar!</h1>
  {:else if gameStart}
    <h1>{clean(word)}</h1>
  {/if}
  {#if output === ""}
    <h1>Começar!</h1>
  {:else}
    <h1>{clean(output)}</h1>
  {/if}
  {#if correct}
    <h2>Você acertou!</h2>
  {/if}
  {#if count !== 0}
    <h2>Acertos: {count}</h2>
  {/if}
</div>

{#if !gameStart}
  <button on:click={startGame}> Vamos lá! </button>
{/if}

<style>
  .container {
    display: grid;
    align-self: center;
    justify-self: center;
    text-align: center;
    padding: 1vw;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    text-align: center;
    font-size: 3em;
    font-weight: 100;
    line-height: 1.1;
    max-width: 100vw;
  }
  h2 {
    color: rgb(82, 243, 42);
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.1;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
