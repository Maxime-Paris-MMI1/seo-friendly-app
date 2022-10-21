<template> 
  <div id="app"> 
      <div class="topnav"> 
        <div class="collapse navbar-collapse" id="navbarColor01"> 
            <router-link class="nav-link" to="/">France</router-link> 
            <router-link class="nav-link" to="/histoire">Histoire</router-link> 
            <router-link class="nav-link" to="/geographie">Géographie</router-link> 
            <router-link class="nav-link" to="/culture">Culture</router-link> 
        </div> 
      </div> 
    <router-view/> 
  </div> 
</template> 
<script> 
   export default { 
    name: 'App' 
   } 
</script> 
<style> 
  body { 
    margin: 0; 
    font-family: Arial, Helvetica, sans-serif; 
  } 
  .topnav { 
    overflow: hidden; 
    background-color: #333; 
  } 
  .topnav a { 
    float: left; 
    color: #f2f2f2; 
    text-align: center; 
    padding: 14px 16px; 
    text-decoration: none; 
    font-size: 17px; 
  } 
  .topnav a:hover { 
    background-color: #ddd; 
    color: black; 
  } 
  .topnav a.active { 
    background-color: #04AA6D; 
    color: white; 
  }
</style>