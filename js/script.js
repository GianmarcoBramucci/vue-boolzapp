import {contacts} from "./data.js"; 

Vue.createApp({
    data(){
        return{
            contacts,
            atcvieContact:{}
        }
    },
    methods: {
        atcvieClass: function(object){
            if(object.id==this.atcvieContact.id){
                return 'active';
            }    
        },
        changeAtcvieClass: function(object){
           this.atcvieContact= object;    
        }
    },
    computed:{
    },
    mounted(){
        let i = 0;
        for(let contact of this.contacts ){
            i++;
            contact.id=i+1;
        }
        this.atcvieContact= contacts[0];
    }
}).mount('#app')