<template>
  <div class="hero">
    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container justify-content-center">
        <div class="page-next-level text-center">
          <h4 class="title">Welcome to Monster NFT 👹 Mint List</h4>
        </div>
      </div>
    </section>

    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
    <!-- Hero End -->
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="less" scoped>
.bg-half {
  padding: 260px 0;
  background: url('~@/assets/images/shape.png') center center;
  height: auto;
}
</style>
