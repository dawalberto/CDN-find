<template>
    <div>
        <a href="https://twitter.com/daw_alberto" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="https://github.com/dawalberto" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        <hr>
        <p>© {{ getYear }} Alberto García Sola, made with <a href="https://vuejs.org/"><i class="fab fa-vuejs fa-1x"></i></a> and hosted with <span class="text-danger">❤</span> by <a href="https://github.com/" target="_blank"><i class="fab fa-github fa-1x"></i></a></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        computed: {
            getYear() {
                let date = new Date();
                date = date.getFullYear();

                return date;
            }
        }
    }
</script>

<style scoped>
    div {
        text-align: center;
        width: 100%;
        color: #35495e;
    }
    hr {
        width: 80%;
        border: 1px solid #35495e;
    }
    span {
        color: #35495e;
    }
    .fa-vuejs {
        color: #35495e;
    }
    .fa-github {
        color: #35495e;
    }
    .fa-twitter {
        color: #35495e;
    }
</style>