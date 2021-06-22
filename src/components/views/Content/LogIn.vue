<template>
  <div>
    <!-- The modal -->
    <b-modal
      id="login-modal"
      title="Register"
      ok-title="LOGIN"
      cancel-title="CANCEL"
    >
      <b-form>
        <b-row>
          <b-col sm="12" class="my-2">
            <b-form-input
              id="inline-form-input-name"
              class="mr-4  form-control "
              placeholder="Username, Email or Mobile Number"
            ></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-input
              id="inline-form-input-name"
              class="mr-4  form-control "
              placeholder="Your password"
            ></b-form-input>
          </b-col>
        </b-row>

        <b-row class="justify-content-end">
          <a
            style="text-decoration:underline;"
            href="javascript:(0);"
            data-toggle="modal"
            data-target="#myModal"
            role="button"
            class="mx-3"
          >
            Forgot password?
          </a>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
};
</script>

<style lang="scss">

</style>
