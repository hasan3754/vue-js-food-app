<template>
  <div>


<div>
  <b-nav>
    <b-nav-item class="btn btn-danger" active>Active</b-nav-item>
    <b-nav-item>    <router-link :to="{ name: 'Index' }">
          <span class="nav-title">Ninja Smoothies </span>
        </router-link></b-nav-item>
    <b-nav-item>          <router-link :to="{ name: 'addsmoothie' }">
            <i class="material-icons">add</i>
          </router-link></b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</div>





    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
    
        <a href="" class="btn-floating btn-large halfway-fab pink">

        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
    }
  }
}
</script>

<style>
.navbar nav{
  padding: 0 20px;
}
</style>