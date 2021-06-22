<template>
    Demo1<br>
    {{ count }}
</template>
<script>
import { mapState } from 'vuex'

export default {
    created(){
        this.increment();
    },
    methods: {
        increment() {
            console.log('--- demo1 實作開始---')
            this.$store.commit('increment')
            console.log(this.$store.state.count)
            console.log('--- demo1 實作結束---')
        }
    },
    computed:mapState({
        count: state=>state.count,
    })
}
</script>