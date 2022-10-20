<template>
  <footer>
    <div class="copyright">
      &copy; {{ year }} Designed by Developed by
      <a href="https:///www.rkeytech.io" target="_blank" rel="noopener"
        >rkeytech.io</a
      > for Azure Community.
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
