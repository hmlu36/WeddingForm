<template>
  <RegiestForm />
</template>

<script>
import RegiestForm from './components/RegiestForm.vue';
import { defineRule } from 'vee-validate';

defineRule('required', value => {
  if (!value || !value.length) {
    return '此欄位必填';
  }
  return true;
});


export default {
  name: 'App',
  components: {
    RegiestForm,
  },
  data() {
    return {};
  },
  beforeCreate() {},
  methods: {},
};
</script>
