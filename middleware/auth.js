export default ({ redirect }) => {
  const loggedIn = false;
  console.log('auth middleware'); // criando um middleware nomeado
  if(!loggedIn){
    return redirect('/') // redirecionando para home
  }
}