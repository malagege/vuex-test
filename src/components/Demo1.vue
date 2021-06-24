<template>
    Demo1<br>
    {{ count }}
</template>
<script>
import { mapActions } from 'vuex'


export default {
    created(){
        console.log('actionA Start -------')
        this.actionA({test:'helloword'})
        console.log('actionA Finished -------')

        console.log('actionB Start -------')
        this.actionB()
        console.log('actionB Finished -------')
    },
    methods: {
        ...mapActions(['actionA','actionB']),
        // async getData(){
        //     await timeout(3000)
        //     return 1
        // }, // 外部引用看來吃不到

    }
}
</script>