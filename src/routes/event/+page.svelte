<script>
  import { Button } from 'flowbite-svelte';

  let event_id = '';
  /** @type {{request_id: string; } | null} */
  let result = null;
  /** @type {number | null} */
  let statusCode = null;

  function searchEvent() {
    fetch(`http://localhost:3001/events/`)
      .then((response) => {
        statusCode = response.status;
        return response.json();
      })
      .then((data) => {
        result = data;
        // parse
      })
      .catch((error) => {
        alert(error);
      });
  }
</script>

<form id="example-form" on:submit={searchEvent}>
  <div id="search-input-cont">
    <input type="text" bind:value={event_id} placeholder="Write a Event Id" />
    <Button type="submit">Submit</Button>
  </div>
</form>

{#if statusCode == 200 && result}
  <p>{result['request_id']}</p>
{/if}

<style>
  #example-form {
    /* align-items: end; */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  #search-input-cont {
    width: 40%;
    display: flex;
    align-items: center;
    margin: 0 0 0 10px;
  }
</style>
