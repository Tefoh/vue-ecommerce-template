<template>
  <main class="main">
    <div class="account">
      <div class="container">
        <h1 class="account__title">reset pass</h1>
        <div class="account__form">
          <form action="">
            <input
              type="text"
              class="txt txt--left"
              placeholder="email or mobile"
            />
            <button class="btn btn--brand btn--boxshadow w--100">
              send reset password link
            </button>
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
