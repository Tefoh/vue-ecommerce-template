<template>
  <main class="main">
    <div class="account">
      <div class="container">
        <h1 class="account__title">Register form</h1>
        <div class="account__form">
          <form action="">
            <input type="text" class="txt" placeholder="name" />
            <input type="text" class="txt txt--left" placeholder="email" />
            <input type="text" class="txt txt--left" placeholder="username" />
            <input type="text" class="txt txt--left" placeholder="password" />
            <button
              class="btn btn--brand btn--boxshadow w--100 margin--bottom-10"
            >
              register
            </button>
            <button class="btn btn--cancel btn--cancel w--100">cancel</button>

            <div class="account__footer">
              <span>already have an account?</span>
              <router-link :to="{ name: 'Login' }" class="account__router"
                >Login page</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
