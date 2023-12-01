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
`,
    css: code`
.kort {
  display: flex;
  gap: 1rem;
}

.tekst {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}


/* Uinteressant */
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
};
