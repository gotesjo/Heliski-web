// const indiapp = Vue.createApp({
//     data(){
//         return {
//             staff: [],
//             projects: [],
//             selectedStaff: [],

//         }
//     },
//     methods: {
//         chooseStaffMember(name) {
//             this.selectedStaff = this.staff.name["name"];
//         }


//     },
//     created(){ 
//         axios.get('data/staff.json') 
//             .then((response) => {
//                 this.staff = response.data.staffMembers; });
        
//         axios.get('data/projects.json') 
//         .then((response) => {
//             this.projects = response.data.projekt; });

//         }
// });

// indiapp.mount('#indi-app');