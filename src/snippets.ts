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
/* Dette er bare litt styling for å gjøre eksempelet penere. */
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
/* Dette er bare litt styling for å gjøre eksempelet penere. */
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

const søkOgFilterFlex = {
    html: code`
<div class="layout">
  <div class="venstre">
    <div class="søk">Søk</div>
    <div class="filter">Filter</div>
  </div>
  <div class="midten">
    <h2 class="antall-treff">Antall treff</h2>
    <ul class="liste">
      <li>Treff 1</li>
      <li>Treff 2</li>
      <li>Treff 3</li>
    </ul>
  </div>
</div>
`,
    css: code`
.layout, .venstre, .midten {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 600px) {
  .layout {
    flex-direction: row;
    gap: 2rem;
  }

  .venstre {
    width: 200px;
  }

  .midten {
    flex: 1;
  }
}

/* Dette er bare litt styling for å gjøre eksempelet penere. */
body {
  margin: 1rem;
}

.søk, .filter, .liste li {
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.5rem;
}

.filter {
  height: 100px;
}

.liste {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

h2, p {
  margin: 0;
}
`,
};

const søkOgFilterGrid = {
    html: code`
<div class="layout">
  <div class="søk">Søk</div>
  <div class="filter">Filter</div>
  <h2 class="antall-treff">Antall treff</h2>
  <ul class="liste">
    <li>Treff 1</li>
    <li>Treff 2</li>
    <li>Treff 3</li>
  </ul>
</div>
`,
    css: code`
.layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 600px) {
  .layout {
    display: grid;
    gap: 1rem 2rem;
    align-items: center;
    grid-template-columns: 200px 1fr;
    grid-template-areas:
      "søk antall"
      "filter liste";
  }

  .filter {
    grid-area: filter;
  }

  .filter, .liste {
    align-self: start;
  }
}

/* Dette er bare litt styling for å gjøre eksempelet penere. */
body {
  margin: 1rem;
}

.søk, .filter, .liste li {
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.5rem;
}

.filter {
  height: 100px;
}

.liste {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
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

const poengtavleGrid = {
    html: code`
<ol>
  <li>
    <span>Et navn</span>
    <div class="score" style="width: 93%">93%</div>
  </li>
  <li>
    <span>Et lengre navn</span>
    <div class="score" style="width: 64%">64%</div>
  </li>
  <li>
    <span>Det aller lengste navnet</span>
    <div class="score" style="width: 22%">22%</div>
  </li>
</ol>
`,
    css: code`
ol {
  display: grid;
  grid-template-columns: fit-content(25%) 1fr;
  align-items: center;
  gap: 0.5rem;
}

li {
  display: contents;
}

/* Dette er bare litt styling for å gjøre eksempelet penere. */
body {
  margin: 1rem;
}

span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}

.score {
  background-color: gold;
  padding: 0.25rem;
  border-radius: 4px;
}

li {
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.5rem;
}

ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
`,
};

export default {
    '1': kortkomponentFlex,
    '2': kortkomponentGrid,
    '3': søkOgFilterFlex,
    '4': søkOgFilterGrid,
    '5': poengtavleGrid,
};
