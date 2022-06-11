import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Layout, BackTop } from 'ant-design-vue'
import XbootHeader from './header'


const XbootLayout = defineComponent({
    name :'XbootLayout',
    props :{

    },
    computed :{

    },
    setup(){

    },
    created(){

    },
    methods:{

    },
    render(){
        return (
            <>
                <Layout>
                    Hello
                </Layout>
            </>
        )
    }
})
XbootLayout.Header = XbootHeader

export default XbootLayout as typeof  XbootLayout & {
    readonly Header: typeof XbootHeader

}