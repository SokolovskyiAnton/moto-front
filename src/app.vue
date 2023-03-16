<template>
  <NuxtLayout>
    <Html :lang="lang">
      <Head>
        <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f14a73" />
      </Head>
    </Html>

    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const lang = 'en'

</script>
