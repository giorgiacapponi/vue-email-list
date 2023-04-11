const {createApp}=Vue;
createApp({
    data(){
        return{
            newEmail:this.rndEmail()
              
        }
    },
    methods:{
        rndEmail(){
            let email=[]
            for(let i=0;i<30;i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                 .then((resp)=>{
                  
                    email.push(resp.data.response)
                   
                 })
            }
            console.log(email);
           return email
             
            
        }

    },
}).mount('#app')