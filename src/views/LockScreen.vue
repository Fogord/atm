<template>
  <div class="container">
    <div class="card">
      <h5 class="card-title">Authorization</h5>
      <b-img :src="require('@/assets/locker.png')" />
      <labelInput
        type="password"
        placeholder="Enter pincode"
        btmText="Submit"
        :action="submit"
        :error="error"
      />
    </div>
  </div>
</template>
<script>
import LabelInput from "@/components/LabelInput.vue";

export default {
  components: {
    LabelInput
  },
  data() {
    return {
      pincode: null,
      valid: false,
      error: ""
    };
  },
  watch: {
    pincode() {
      this.error = "";
    }
  },
  methods: {
    submit(pincode) {
      console.log(pincode);

      // change flag of user auth
      this.$store
        .dispatch("auth/logIn", pincode)
        .then(() => this.$router.push({ path: "/cashWithdrawal" }))
        .catch(error => (this.error = error));
    }
  }
};
</script>
<style scoped></style>
