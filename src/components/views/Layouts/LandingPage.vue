<template>
  <div>
    <!-- <b-row>
      <b-col>
        <div id="logo_home">
          <h1>
            <a href="/" title="Findoctor">
              <img src="/img/logo/logo.png" alt="FindoctorF"
            /></a>
          </h1> 
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
    <nav class="main-menu">
      <ul class="d-flex">
        <li><router-link to="/findoctor">Find Your Doctor</router-link></li>
        <li><router-link to="/benefits">Benefits of <br>Signing Up</router-link></li>
        <li><router-link to="/consult">How to Consult <br> Your Doctor</router-link></li>
        <li><router-link to="/aboutus">About Us</router-link></li>
        <li><router-link to="/login" v-b-modal="'login-modal'">Registered User? Sign In</router-link></li>
        <li class="btn-login">
          <router-link to="/signup" v-b-modal="'sign-up'">New Patient? Sign Up</router-link>
        </li>

      </ul>
    </nav> -->

    <router-view />

  </div>
</template>

<script>
export default {
  name: "landing-page",
  components: {},
};
</script>

<style></style>
