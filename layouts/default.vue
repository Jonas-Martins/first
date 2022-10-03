<template>
  <div>
    <ul>
      <li>
        <NuxtLink :to="{ name: 'empresa' }"> Empresa </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/servicos"> Serviços </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'produtos' }"> Produtos </NuxtLink>
      </li>
    </ul>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
