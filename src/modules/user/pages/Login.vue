<template>
  <main class="main">
    <div class="account">
      <div class="container">
        <h1 class="account__title">Login form</h1>
        <div class="account__form">
          <form action="">
            <input
              type="text"
              class="txt txt--left"
              placeholder="username or email"
            />
            <input type="text" class="txt txt--left" placeholder="password" />
            <label class="ui-checkbox">
              <input type="checkbox" class="ui-checkbox__input" />
              <span class="ui-checkbox__mark"></span>
              remember me
            </label>
            <router-link
              :to="{ name: 'ResetPass' }"
              class="account__recoverpass"
              >reset password</router-link
            >
            <button class="btn btn--brand btn--boxshadow w--100">login</button>

            <div class="account__footer">
              <span>dont have an account?</span>
              <router-link :to="{ name: 'Register' }" class="account__router"
                >register page</router-link
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
