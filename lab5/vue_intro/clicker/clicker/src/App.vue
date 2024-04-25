<script setup>
import Clicker from './components/Clicker.vue'
const showClicker = (m) => {
  window.alert(m)
}
</script>

<template>

  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

  </header>

  <main>
    <div class="wrapper" v-for="n in 100">
      <Clicker :clicker-index=n :amount=3 @button-clicked="(score) => showClicker(`Clicker ${n} score: ${score}`)">
        aboba
      </Clicker>
    </div>
  </main>

</template>
