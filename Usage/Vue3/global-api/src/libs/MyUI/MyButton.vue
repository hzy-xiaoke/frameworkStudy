<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
}
</script>

<style>
.my-button {
  padding: 5px 10px;
  background: orange;
  border: none;
  color: white;
  cursor: pointer;
}
.my-button:hover {
  background: rgba(255, 166, 0, 0.834);
}

</style>