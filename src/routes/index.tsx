import { component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {



  //una señal con el valor de 1
  const pokemonId = useSignal(1); //para primitivos

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
      
        {
          pokemonId.value < 2 ? <button disabled class="btn btn-primary mix-blend-color-burn mr-3">
            Anterior
          </button>

            :
            <button onClick$={() => pokemonId.value--} class="btn btn-primary mr-3">
              Anterior
            </button>

        }
          <button
          onClick$={() => pokemonId.value++}
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
