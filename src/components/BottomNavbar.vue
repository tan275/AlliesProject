<template>
    <v-bottom-navigation v-model="value" app>
    <v-btn value="recent" @click="$router.push('/books')">
      <span>Bookshelf</span>

      <v-icon>mdi-bookshelf</v-icon>
    </v-btn>

    <v-btn value="favorites" @click="$router.push('/authors')">
      <span>Authors</span>

      <v-icon>mdi-badge-account</v-icon>
    </v-btn>

    <v-btn value="nearby" @click="$router.push('/members')">
      <span>Members</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn value="nearby" @click="$router.push('/issues')">
      <span>Issues</span>

      <v-icon>mdi-book-account</v-icon>
    </v-btn>

    <v-btn value="nearby" @click="$router.push('/employees')">
      <span>Employees</span>

      <v-icon>mdi-account-group</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>