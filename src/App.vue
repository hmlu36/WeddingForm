<template>
  <RegiestForm v-bind:profile="profile" />
</template>

<script>
import RegiestForm from './components/RegiestForm.vue';

export default {
  name: 'App',
  components: {
    RegiestForm,
  },
  data() {
    return {
      msg: '',
      profile: {},
    };
  },
  beforeCreate() {},
  methods: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
* {
  font-family: 'Noto Sans TC';
}
</style>