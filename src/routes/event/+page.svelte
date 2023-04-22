<script>
  import { Badge, Button, Heading } from 'flowbite-svelte';

  let eventId = '';
  /** @type {{request_id: string; } | null} */
  let result = null;
  /** @type {number | null} */
  let statusCode = null;

  function searchEvent() {
    fetch(`http://localhost:3001/events`)
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



<form id="search-form" on:submit={searchEvent}>
  <div id="search-input-cont">
    <input id="event-id-input" type="text" bind:value={eventId} placeholder="Write a Event Id" />
    <Button size="xs" type="submit">Search</Button>
  </div>
</form>

{#if statusCode == 200 && result}
  <div class="container">
    <div class="content">
      <div>
        <Heading tag="h6"><Badge border>Default</Badge>Heading 6</Heading>
      </div>
    </div>
    <div class="sidebar">
    </div>
  </div>
{/if}






<style>
  #search-form {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  #search-input-cont {
    display: flex;
    width: 40%;
    align-items: center;
    margin: 0 0 0 10px;
  }

  #event-id-input {
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 8px;
    outline: none;
    padding-right: 10px;
    margin-right: 10px;
    background-color: rgb(233,233,233);
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1%;
  }

  .sidebar {
    align-items: flex-end;
    width: 29%;
    margin-left: 1%;
    background-color: #F8F9F9;
    border: 1px solid darkgrey;
    padding: 1%;
    border-radius: 8px;
  }

  .content {
    width: 70%;
    background-color: #F8F9F9;    
    border: 1px solid darkgrey;
    padding: 1%;
    border-radius: 8px;
  }
  
</style>
