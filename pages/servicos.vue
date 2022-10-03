<template>
  <div>
    <h1>Serviços</h1>
    <!-- criando um .vue com o msm nome de uma pasta criamos um template -->
    <!-- {{$fetchState}} pega o estado de carregamento da promisse(API) -->
    <!-- <template v-if="$fetchState.pending">
      Carregando ...
    </template>
    <template v-else>
      <div v-for="(dados, i) in locator" :key="i">
        {{dados.name}}
      </div>
      {{locator}}
    </template> -->
    {{ locator }}
    <NuxtChild />
    <!-- tudo que tiver dentro da pasta servico por exmplo sera renderziado aqui -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      locator: [],
    };
  },

  async fetch() {
    // usa o this pegando os dados direto do data, e roda dps do componente ser criado
    this.locator = await this.$axios
      .$get("/locator")
      .then((r) => {
        console.log(r);
        return r;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    // this.$axios.$get('/locator')
    // .then((r) => {
    //   console.log(r)
    //   this.locator = r
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  },
};
</script>

<style>
</style>
