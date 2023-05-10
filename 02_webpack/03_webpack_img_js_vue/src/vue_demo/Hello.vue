

<template>
  <div>
    <h2 class="title_vue">{{title}}</h2>
    <p class="content_vue">contenu de vue</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "titre de vue"
    }
  }
}
</script>

<style>

.title_vue{
  color:rgb(138, 138, 206);
  font-size: 100px;
}

.content_vue{
  color:aqua;
  font-size:30px;
}
</style>