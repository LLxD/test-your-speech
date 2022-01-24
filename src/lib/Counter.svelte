<script>
  let word;
  let loadWord = async () => {
    await fetch(`https://random-word-api.herokuapp.com/word?number=1&swear=0`)
      .then((r) => r.json())
      .then((data) => {
        word = data[0];
      });
  };
  loadWord();

  let output = "";
  let gameStart = false;

  const start = () => {
    gameStart = true;
    const recognition = new webkitSpeechRecognition();
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.start();
    // This event happens when you talk in the microphone
    recognition.onresult = function (event) {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          const content = event.results[i][0].transcript.trim();
          output = content;
        }
      }
    };
    console.log(output);
  };
</script>

<div class="container">
  {#if word === undefined}
    <h1>Carregando</h1>
  {:else}
    <h1>{word}</h1>
  {/if}
  {#if output === ""}
    <h1>Começar!</h1>
  {:else}
    <h1>{output}</h1>
  {/if}
</div>

<button on:click={loadWord}> loadar </button>
<button style="display:${gameStart ? 'none' : 'block'}" on:click={start}>
  start
</button>

<style>
  .container {
    display: grid;
    align-self: center;
    justify-self: center;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    text-align: center;
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
