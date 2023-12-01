import { code } from './utils';

const kortkomponentFlex = {
    html: code`
<div class="kort">
  <div class="ikon"></div>
  <div class="tekst">
    <h2>En kort tittel</h2>
    <p>En lengre beskrivelse</p>
  </div>
</div>

<style>
.kort {
  display: flex;
  gap: 1rem;
}

.tekst {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
`,
    css: code`
/* Dette er bare litt styling for å gjøre
   eksempelet penere. */
body {
  margin: 1rem;
}

.kort {
  border: 2px solid black;
  border-radius: 4px;
  width: 250px;
  padding: 1rem;
}

.ikon {
  border-radius: 50%;
  background-color: black;
  width: 1.5rem;
  height: 1.5rem;
}

h2, p {
  margin: 0;
}
`,
};

const kortkomponentGrid = {
    html: code`
<div class="kort">
  <div class="ikon"></div>
  <h2>En kort tittel</h2>
  <p class="beskrivelse">En lengre beskrivelse</p>
</div>

<style>
.kort {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  align-items: center;
  gap: 0.5rem 1rem;
}

.beskrivelse {
  grid-column: 2;
}
</style>
`,
    css: code`
/* Dette er bare litt styling for å gjøre
   eksempelet penere. */
body {
  margin: 1rem;
}

.kort {
  border: 2px solid black;
  border-radius: 4px;
  width: 250px;
  padding: 1rem;
}

.ikon {
  border-radius: 50%;
  background-color: black;
  width: 1.5rem;
  height: 1.5rem;
}

h2, p {
  margin: 0;
}
`,
};

export default {
    'kort-flex': kortkomponentFlex,
    'kort-grid': kortkomponentGrid,
};
