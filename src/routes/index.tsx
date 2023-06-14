import { component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {


  //una señal con el valor de 1
  const pokemonId = useSignal(1) //para primitivos
  //const pokemonId2 = useStore() objetos mas complejos


  return (
    <>
    
      <span class="text-2xl">Poke-qwik</span>
      <span class="text-2xl m-3">Search</span>
      <span class="text-9x1">{pokemonId}</span>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Poke-Qwik',
  meta: [
    {
      name: 'description',
      content: 'mi primer app con qwik',
    },
  ],
};
