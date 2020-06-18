<template>
  <div class="container">
    <div class="card">
      <h5 class="card-title">Withdrawal</h5>

      <selectedBanknotes
        :items="banknotes"
        :selected="selectedBanknot"
        :action="select"
      />

      <b-form-group>
        <div class="reserved">
          <span>
            {{ availableAmount }}
          </span>
        </div>
      </b-form-group>

      <labelInput
        type="number"
        placeholder="Enter amount"
        btmText="Withdrawal"
        :action="submit"
        :error="error"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import LabelInput from "@/components/LabelInput.vue";
import SelectedBanknotes from "@/components/SelectedBanknotes.vue";

export default {
  components: {
    LabelInput,
    SelectedBanknotes
  },
  data() {
    return {
      selectedBanknot: null,
      withdrawalAmount: null,
      error: null
    };
  },
  computed: {
    selectedCurencyText() {
      // eslint-disable-next-line no-extra-boolean-cast
      return this.selectedBanknot !== null
        ? `Selected: ${this.banknotes[this.selectedBanknot].name}`
        : "Select currency";
    },
    availableAmount() {
      return this.selectedBanknot !== null
        ? `Avaliable amount: ${this.banknotes[this.selectedBanknot].count *
            this.banknotes[this.selectedBanknot].rating +
            " " +
            this.curentcy} 
       `
        : "";
    },
    ...mapState("cash", ["banknotes", "curentcy"])
  },
  methods: {
    select(selectedBanknot) {
      this.selectedBanknot = selectedBanknot;
    },
    submit(withdrawalAmount) {
      this.$store
        .dispatch("cash/withdrawal", {
          amount: withdrawalAmount,
          curency: this.selectedBanknot
        })
        .then(() => this.$router.push({ path: "/resultWithdrawal" }))
        .catch(error => (this.error = error));
    }
  }
};
</script>
<style scoped></style>
