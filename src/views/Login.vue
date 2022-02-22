<template>
  <section>
      <div class="form_container">
          <div class="form">
              <h2>Login</h2>
              <form>
                  <input type="text" placeholder="Email">
                  <input type="password" placeholder="Senha">
                  <button class="btn">Entrar</button>
                  <button class="btn">Novo? Criar conta</button>
              </form>
              
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.form_container{
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form{
    border: 3px solid rgb(46, 46, 46);
    width: 100%;
    max-width: 470px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.form h2{
    margin: 10px auto 0 auto;
    font-size: 2rem;
    color: rgb(90, 90, 90);
}

form{
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.check{
    display: inline;
}

</style>