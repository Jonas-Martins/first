<template>
  <div>
    <h1>Empresa</h1>
  </div>
</template>

<script>
export default {
  middleware: "auth", // usando um middleware nomeado
  
  // middleware() { // criando um middleware anonimo, serve igual o router before
  //   console.log("middleware empresa");
  // },
};
</script>

<style>
</style>
