<template>
  <header :class="[' w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a
          :href="url"
          class="flex h-full items-center text-xl"
          >{{ company }}</a
        >

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-9 h-full first:ml-0"
            >
              <a
                href=""
                class="flex h-full items-center py-2.5"
              >
                {{ menuItem }}</a
              >
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <action-button
            v-if="!isLoggedIn"
            text="Sign In"
            @click="loginUser"
          />
          <profile-image v-else />
        </div>
      </div>

      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      company: "Job Portals",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Locations", "Life at Job Portals", "How we hire", "Students", "Jobs"],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
