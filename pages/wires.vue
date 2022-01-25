<template>
  <main>
    <div class="container sub-section">
      <div class="wires-section">
        <div class="w-full header-section">
          <h1 class="title">
            Buy bitcoin from anywhere - confidently and securely.
          </h1>
          <h3>
            After passing our approval process, send us a wire and we'll send your bitcoin immediately upon it hitting our account.
          </h3>
        </div>
      </div>
    </div>
    <div class="wire-info-section sub-section">
      <div class="wire-details">
        <h1>
          Get Started Today
        </h1>
        <div class="wire-checklist flex flex-row flex-wrap justify-evenly">
          <div class="wire-step">
            <h2>
              Step 1
            </h2>
            <span>
              Provide us with some basic identification
            </span>
          </div>
          <div class="wire-step">
            <h2>
              Step 2
            </h2>
            <span>
              Send us a recieving bitcoin address
            </span>
          </div>
          <div class="wire-step">
            <h2>
              Step 3
            </h2>
            <span>
              Send your wire and recieve your bitcoin
            </span>
          </div>
        </div>
        <WireForm class="m-auto" />
      </div>
    </div>
  </main>
</template>

<script>
import WireForm from '~/components/WireForm.vue'

export default {
  components: {
    WireForm
  }
}
</script>

<style lang="scss">
.wires-section {
  display: block;
  width: 60vw;
  margin: 145px auto 45px auto;

  .title {
    color: #599bd5;
    font-weight: 900;
    margin: 20px 0;
  }
}
.wire-info-section {
  background-color: #599bd5;
  color: white;
  padding: 50px 0;
  margin: auto;

  h1 {
    text-align: center;
    font-size: 36px;
  }

  .wire-step {
    min-width: 330px;
    margin: 25px 0;

    h1 {
      font-size: 24px;
      font-weight: bold
    }
    h2 {
      font-size: 18px;
    }
  }
}
</style>
