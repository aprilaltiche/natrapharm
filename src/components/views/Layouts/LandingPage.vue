<template>
  <div>
    <ul>
      <li><router-link to="/findoctor">findoctor</router-link></li>
      <li><router-link to="/benefits">benefits</router-link></li>
      <li><router-link to="/consult">consult</router-link></li>
      <li><router-link to="/aboutus">aboutus</router-link></li>
      <li><router-link to="/login">login</router-link></li>
      <li><router-link to="/signup">sign up</router-link></li>

      <router-view />
    </ul>
  </div>
</template>

<script>
export default {
  name: "landing-page",
  components: {},
};
</script>

<style></style>
