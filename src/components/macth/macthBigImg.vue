<template lang="html">
  <div class="bigImg">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img :src="bigImg1" alt="...">

        </div>
        <div class="item">
          <img :src="bigImg2" alt="...">
        </div>
      </div>
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <!-- <span class="fa fa-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span> -->
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <!-- <span class="fa fa-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bigImg1:'./static/29hqvb3qomp5kr0n244hhevws.jpg',
      bigImg2:'./static/6zvvlhibczmv9e8mfks4wel8l.jpg',
    }
  }
}
</script>

<style lang="css">
</style>
