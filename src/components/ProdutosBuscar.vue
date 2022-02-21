<template>
  <div class="buscar_container">
      <input type="text">
      <img src="../assets/search.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>

input{
    padding-right: 40px;
}

.buscar_container{
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.buscar_container img{
    margin-left: -53px;
    cursor: pointer;
    padding: 10px;
}

</style>