import { component$, useSignal,  $ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {



  //una señal con el valor de 1
  const pokemonId = useSignal(1); //para primitivos


  const changePokemonId = $((value: number) => {
    if ((pokemonId.value + value <= 0)) return
    pokemonId.value += value
  })

  //const pokemonId2 = useStore() objetos mas complejos

  return (
    <>
      <span class="text-2xl">Poke-qwik</span>
      <span class="text-2xl m-3">Search</span>
      <span class="text-9x1">{pokemonId}</span>

      <img
        style={{ width: "200px" }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}
        alt="pokemon-image"
      />
      <div class="mr-2 mt-3">


        <button onClick$={() => changePokemonId(-1)} class="btn btn-primary mr-3">
          Anterior
        </button>


        <button
          onClick$={() => changePokemonId(+1)}
          class="btn btn-primary  border-t-0"
        >
          Siguiente
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Poke-Qwik",
  meta: [
    {
      name: "description",
      content: "mi primer app con qwik",
    },
  ],
};
