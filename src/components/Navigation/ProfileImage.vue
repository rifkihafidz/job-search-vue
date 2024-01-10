<template>
  <img
    :src="imageLink"
    alt="User Profile Image"
    class="h-8 w-8 rounded-3xl object-contain"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://static.vecteezy.com/system/resources/previews/013/851/517/original/boy-with-light-brown-curly-hair-illustration-on-a-white-background-free-vector.jpg",
    };
  },
};
</script>
