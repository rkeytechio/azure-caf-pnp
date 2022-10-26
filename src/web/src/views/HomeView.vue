<template>
  <div class="home">
    <div class="banner">
      <v-img src="../assets/images/azure-caf-pnp-banner.png"></v-img>
    </div>
    <div class="wrapper">
      <p>
        Azure
        <strong
          ><a
            href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/"
            target="_blank"
            rel="noopener"
            >Cloud Adoption Framework</a
          ></strong
        >
        (aka CAF) provides proven guidelines and best practices that help you
        confidently adopt the cloud and achieve business outcomes.
      </p>
      <p>
        This portal aims to consolidate the most common strategies adopted by
        teams and organisations across the world into one place. We aim to
        provide tools and quick access to the most up-to-date rules and
        guidelines to name and tag your Azure resources, laying the foundation
        for a well-governed cloud environment.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class HomeView extends Vue {}
</script>