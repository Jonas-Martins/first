<template>
  <div>
    <h1>Produtos</h1>
    <div v-for="(dados, i) in locator" :key="i">
      {{dados.name}}
    </div>
    {{locator}}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }){ // não tem acesso ao dados de this. tudo que tiver em return será mesclado ao data e carrega antes do compoennte ser criado
    const locator = await $axios.$get('/locator')
    return {
      locator
    }
  }
}
</script>

<style>

</style>
