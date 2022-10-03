<template>
  <div v-tooltip="`${this.$name('Jonas Martins')} Plugins Funcionando `">
    <h1>Início</h1>
    <pre>
      <!-- {{$store.state.user}} -->
      {{user}}
    </pre>
    <pre>
      <!-- Variáveis de ambiente -->
      {{ $config }} 
    </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  asyncData({$config}){
    console.log($config)
  },
  head() {
    // altera as meta tags para cada página
    return {
      // title: 'Página Inicial',
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Descrição da página inicial!!",
        },
      ],
      bodyAttrs: {
        // adiciona atributos no body
        class: "d-flex",
        style: "color: red",
      },
    };
  },
  data() {
    return {
      title: "Inicial",
    };
  },
  computed:{
    ...mapState({
      user: state => state.user
    })
  },
  mounted(){
    console.log(this.$name('Jonas Martins')) // puxando o valor de uma plugin
    console.log(this.$dayjs().format())
  }
};
</script>

<style>
</style>
