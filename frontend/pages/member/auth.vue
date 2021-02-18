<template>
  <div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10">
        <div class="text-center">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Sign in {{ loading }} - {{ response }}
          </h1>
          <p class="text-gray-500 dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <div class="m-7">
          <form action="" @submit.prevent="login()">
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Email Address</label
              >
              <input
                id="email"
                v-model="members.email"
                type="email"
                name="email"
                placeholder="you@company.com"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <div class="flex justify-between mb-2">
                <label
                  for="password"
                  class="text-sm text-gray-600 dark:text-gray-400"
                  >Password</label
                >
                <a
                  href="#!"
                  class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >Forgot password?</a
                >
              </div>
              <input
                id="password"
                v-model="members.pass"
                type="password"
                name="password"
                placeholder="Your Password"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p class="text-sm text-center text-gray-400">
              Don&#x27;t have an account yet?
              <a
                href="#"
                class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >Sign up</a
              >.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // middleware: 'auth',
  data() {
    return {
      members: {
        email: '',
        pass: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      response: 'response/response',
      loading: 'response/loading',
    }),
    user() {
      return this.$strapi.user
    },
  },
  methods: {
    login() {
      this.$strapi
        .login({
          identifier: this.members.email,
          password: this.members.pass,
        })
        .then(
          (res) => {
            this.$store.commit('response/response', res, { root: true })
          },
          (err) => {
            this.$store.commit('response/response', err, { root: true })
          }
        )
    },
  },
}
</script>

<style></style>
