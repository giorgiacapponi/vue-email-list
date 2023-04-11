const {createApp}=Vue;
createApp({
    data(){
        return{
            newEmail:[],
           

        }
    },

    
    methods:{
        rndEmail(){
            for(let i=0;i<30;i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                 .then((resp)=>{
                  
                    this.newEmail.push(resp.data.response)
                   
                 })
            }
        }

    }
}).mount('#app')