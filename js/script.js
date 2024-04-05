import {contacts} from "./data.js"; 

Vue.createApp({
    data(){
        return{
            contacts,
            atcvieContact: contacts[0] 
        }
    },
    methods: {

    },
    computed:{
       
    },
    mounted(){
        let i = 0;
        for(let contact of contacts ){
            i++;
            contact.id=i+1;
        }
    }
}).mount('#app')