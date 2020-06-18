<template>
  <div class="container">
    <div class="card">
      <h5 class="card-title">Withdrawal result</h5>
      <p>
        {{ lastOperation }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("cash", ["lastOperation"])
  },
  mounted() {
    let interval = setInterval(() => {
      this.$store.dispatch("auth/logout");
      this.$router.push({ path: "/" });
      clearTimeout(interval);
    }, 3000);
  }
};
</script>
<style scoped></style>
