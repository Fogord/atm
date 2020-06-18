<template>
  <div>
    <div class="box">
      <div
        class="boxItem"
        v-for="(item, index) in items"
        :key="index"
        :active="selected === index"
        @click.prevent="action(index)"
        tabindex="-1"
      >
        <div>
          {{ item.name }}
        </div>
        <div>
          {{ item.count * item.rating }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedBanknotes",
  props: {
    items: Array,
    topTextKey: String,
    bottomTextKey: String,
    selected: Number,
    action: Function
  }
};
//outline: 1px solid blue;
</script>

<style scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  width: 210px;
}

.boxItem {
  display: flex;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10px;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  margin: 10px;
}

.boxItem:active,
.boxItem:focus {
  outline: none;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgba(0, 123, 255, 0.8);
}
</style>
