export default (context, inject) => { // contexto, e inject
  // inject('name', 'Jonas') // funçãõ do inject
  inject('name', (name) => `Olá ${name}`)
}