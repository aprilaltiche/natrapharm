<template>
  <div class="findoctor">
    <div class="position-relative">
      <video
        playsinline=""
        autoplay=""
        muted=""
        loop=""
        poster="img/banner-bg.png"
        id="bgvid"
      >
        <source src="video/intro.mp4" type="video/mp4" />
      </video>
      <div class="position-absolute content">
        <h3 class="text-center">FIND YOUR DOCTOR</h3>
        <b-form class="pt-5">
          <b-row class="justify-content-center">
            <b-col sm="12" class="my-2">
              <b-form-input
                id="inline-form-input-name"
                class="mr-4  form-control "
                placeholder="Location"
              ></b-form-input>
            </b-col>
            <b-col sm="12" class="my-2">
              <b-form-input
                id="inline-form-input-name"
                class="mr-4  form-control "
                placeholder="Specialization"
              ></b-form-input>
            </b-col>
            <b-col sm="12" class="my-2">
              <b-form-input
                id="inline-form-input-name"
                class="mr-4  form-control "
                placeholder="Doctor Name or Hospital"
              ></b-form-input>
            </b-col>
            <b-button variant="danger">SEARCH</b-button>
          </b-row>
        </b-form>

        <b-row class="justify-content-center search-doctor text-white pt-4 ">
          <span>
            <span class=""
              ><strong>How to Search for your doctor:<br /></strong>
            </span>
            1. Start your search by location, specialization, name or
            hospital.<br />
            2. Click “SEARCH” to view results. <br />
            3. Once you’ve found your doctor, click “Book Now” to schedule an
            appointment.
          </span>
        </b-row>

        <b-row class="justify-content-center pt-4">
          <p
            align="center"
            class="p_header28 fadeInUp animated "
            style="bolder"
          >
            <span class="m1 btn-register" style="cursor: pointer;"
              >Sign Up
            </span>
            <span class="text-white">
              for a
              <span class="m2 text-white bolder">FREE </span>
              <span class="m2 text-white ">account NOW</span></span
            >
          </p>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
