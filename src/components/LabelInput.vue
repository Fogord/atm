<template>
  <div>
    <b-form ref="form" @submit.prevent="action(value)">
      <b-form-group id="input-group" label-for="input">
        <b-form-input
          id="input"
          v-model="value"
          :type="type"
          :placeholder="placeholder"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" :disabled="!value" variant="primary">
        {{ btmText }}
      </b-button>
    </b-form>
    <div class="error">
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LalbelInput",
  props: {
    type: String,
    placeholder: String,
    btmText: String,
    error: String,
    action: Function
  },
  data() {
    return {
      value: null
    };
  }
};
</script>
<style scoped></style>
