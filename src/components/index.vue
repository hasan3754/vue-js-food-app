<template>




  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">





  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    v-for="smoothie in smoothies" :key="smoothie.id"
  >
  <b-icon icon="bell-fill" class="border rounded p-2" @click="deleteSmoothie(smoothie.id)"></b-icon>
    <b-card-text>
      {{ smoothie.title }}
    </b-card-text>

          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
             <b-badge>{{ ing }}</b-badge>
          </li>
    <b-badge>{{ ing }}</b-badge>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>







      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from './init'
export default {
  name: 'index',
  data(){
    return{
      smoothies: [

      ]
    }
  },
    methods: {
 deleteSmoothie(id){
      // delete doc from firestore
      db.collection('smoothies').doc(id).delete()
      .then(() => {
        this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
  ,
  created(){
    // fetch data from firestore
    db.collection('smoothies').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    })
  }
}
</script>

<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients{
  margin: 30px auto;
}
.index .ingredients li{
  display: inline-block;
}
</style>