export const tokyoNumber = {
  data(){
    return{
      title:"Welcome to Tokyo",
      subtitle: "Tokyo is a great city",
      number: 0
    }
  },
  computed: {
    upperCaseTitle(){
      return this.title.toUpperCase();
    },
  },
  filters: {
    lowerCase(value){
      return value.toLowerCase();
    }
  },
  created(){
    console.log("created in MixIn!")
  }
}