<template>
  <div class="container">
    <div class="card">
      <h5 class="card-title">Withdrawal</h5>

      <selectedBanknotes
        :items="banknotes"
        :selected="selectedBanknote"
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
      selectedBanknote: null,
      withdrawalAmount: null,
      error: null
    };
  },
  computed: {
    selectedCurencyText() {
      // eslint-disable-next-line no-extra-boolean-cast
      return this.selectedBanknote !== null
        ? `Selected: ${this.banknotes[this.selectedBanknote].name}`
        : "Select currency";
    },
    availableAmount() {
      return this.selectedBanknote !== null
        ? `Avaliable amount: ${this.banknotes[this.selectedBanknote].count *
            this.banknotes[this.selectedBanknote].rating +
            " " +
            this.currency} 
       `
        : "";
    },
    ...mapState("cash", ["banknotes", "currency"])
  },
  methods: {
    select(selectedBanknote) {
      this.selectedBanknote = selectedBanknote;
    },
    submit(withdrawalAmount) {
      this.$store
        .dispatch("cash/withdrawal", {
          amount: withdrawalAmount,
          curency: this.selectedBanknote
        })
        .then(() => this.$router.push({ path: "/resultWithdrawal" }))
        .catch(error => (this.error = error));
    }
  }
};
</script>
<style scoped></style>
