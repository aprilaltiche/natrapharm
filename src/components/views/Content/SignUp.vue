<template>
<<<<<<< HEAD
  <div>
    <!-- The modal -->
    <b-modal
      id="sign-up"
      title="Register"
      ok-title="REGISTER"
      cancel-title="CANCEL"
    >
      <b-form>
        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="m-2 "
              placeholder="Patient's First Name"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="m-2 "
              placeholder="Patient's Middle Name"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="m-2"
              placeholder="Patient's Last Name"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="m-2"
              placeholder="Jr.,Sr."
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="m-2 form-control"
              placeholder="Mobile Number(required)"
            ></b-form-input>
          </b-col>

          <b-col>
            <b-form-select v-model="selected" :options="options" class="m-2 form-control">
            </b-form-select>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="m-2"
              placeholder="Email(required)"
              type="email"
              required
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
              id="inline-form-input-name"
              class="m-2"
              placeholder="Password"
              type="password"
              required
            ></b-form-input>
          </b-col>
        </b-row>

        <b-form-checkbox class="m-2"
          >I read and agree to the
          <a
            style="text-decoration:underline;"
            href="javascript:(0);"
            data-toggle="modal"
            data-target="#myModal"
            role="button"
          >
            Terms and Conditions of HIPS</a
          ></b-form-checkbox
        >
      </b-form>
    </b-modal>
=======
  <div class="page-signin">
    
>>>>>>> 327fc031760b758d1dcc2978401c59ab4ef8e39d
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>