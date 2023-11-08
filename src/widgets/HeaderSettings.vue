<script setup lang="ts"></script>

<template>
  <div class="header-block">
    <span class="header-title">Let’s joke!</span>
    <NuxtImg src="icons/settings.svg" class="header-settings" />
  </div>
</template>

<style scoped>
.header-block {
  width: 100%;
  max-width: 372px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.header-title {
  color: var(--black);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}

.header-settings {
  width: 28px;
  height: 28px;
  cursor: pointer;
}
</style>
