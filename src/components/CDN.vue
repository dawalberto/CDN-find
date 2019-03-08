<template>
    <div>
        <div class="preview">
            <a @click.prevent="show = !show" href="#">{{ name }}</a>
            <p class="description" v-show="!show"> 👉 {{ cdn.description }}</p>
        </div>
        <div v-show="show">
            <p><span>CDN:</span> <a :href="url" target="_blanck">{{ url }}</a></p>
            <p><span>Version:</span> {{ cdn.version }}</p>
            <p><span>Description:</span> {{ cdn.description }}</p>
            <p v-if="cdn.homepage"><span>Homepage:</span> <a :href="cdn.homepage" target="_blanck">{{ cdn.homepage }}</a></p>
            <p v-if="cdn.repository"><span>Repository:</span> <a :href="cdn.repository.url" target="_blanck">{{ cdn.repository.url }}</a></p>
            <p><span>Author:</span> {{ getAuthor }}</p>
            <p><span>License:</span> {{ cdn.license }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        props: ['name', 'url'],
        data() {
            return {
                cdn: 'desconocido',
                show: false
            }
        },
        computed: {
            getAuthor() {
                return typeof this.cdn.author === 'object' ? this.cdn.author.name : this.cdn.author;
            }
        },
        beforeMount() {
            axios.get(`https://api.cdnjs.com/libraries/${this.name}`)
                .then( (res) => this.cdn = res.data )
                .catch( (err) => console.log(err) )
        }
    }
</script>

<style scoped>
    span {
        font-weight: bold;
    }
    .preview {
        margin: 1rem auto 1rem auto;
    }
    .description {
        display: inline;
    }
</style>