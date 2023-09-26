


const app = Vue.createApp({

    data(){

        return{
            cart:[],
            showCart:false,

            valdProduktIndex:100,

            valdProdukt:"",
            calculatedPrice:0,

            showModal: false,
            cartHasItems: false,
            closeMenu:false,

            staff: [],
            projects: [],
            selectedProjects: JSON.parse(localStorage.getItem('selectedprojcts')) || {},
            selectedStaff: JSON.parse(localStorage.getItem('selectedstaff')) || {},

            items:[{

                id: 0,

                name: 'En äventyrlig Helikopterresa: Utforska Otillgängliga Skidparadis i Zermatt!',

                description: 'Njut av en oförglömlig dag i bergen med vår exklusiva "Helikopter Drop"-upplevelse! Färdas i en toppmodern helikopter till otrampade skidområden och upplev den ultimata friheten på snön.',

                price: 10000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'Zermatt',          

            },

            {

                id: 1,

                name: 'Lyxigt Äventyr i Alperna: Exklusivt Hotell och Helikopter-paket i Förtrollande Zermatt!',

                description: 'Upplev lyx och äventyr på högsta nivå med vår Hotell och Helikopter-paket i det förtrollande Zermatt. Bo en hel vecka på ett exklusivt femstjärnigt hotell med alla tänkbara bekvämligheter, från gourmetmåltider till spa-behandlingar. Men det som verkligen sätter guldkant på din vistelse är vårt spektakulära helikopterlyft på onsdagen. Stig ombord på en toppmodern helikopter och låt dig föras till orörda skidområden som få någonsin har sett. Känn friheten i pulversnö och klar alpluft som du svävar nerför bergsidan. Detta är mer än en skidresa; det är en oöverträffad upplevelse av lyx och äventyr',

                price: 35000,    

                image: './pictures/varorBilder/hotell2.jpg',

                availability: 'Begränsade platser kvar!',  

                location: 'Zermatt',          

            },

            {

                id: 2,

                name: 'Ultimat Resepaket: Komplett Resa till Zermatt – Flyg, Helikopteräventyr & Lyxhotell!',

                description: 'Dyk djupt in i alpernas hjärta med vårt "Ultimat Resepaket". Från det ögonblick du lyfter från hemmaflygplatsen till ditt ögonblick av avfärd garanterar vi en upplevelse fylld med spänning och lyx. Landning i de majestätiska alperna, du kommer att inkvarteras på ett prestigefyllt femstjärnigt hotell där varje önskan tas om hand, från läcker mat till avkopplande spafaciliteter. Men hjärtat i detta paket är det exklusiva helikopterlyftet, som tar dig till skidområden där naturen regerar och där spåren du lämnar är de enda. Med snö under fötterna och en oändlig himmel ovanför, kommer du att förstå vad äkta skidglädje betyder. Vår service fortsätter ända till din hemresa, där du kan reflektera över en vecka av oförglömliga minnen. Med SnowWhile Heli blir varje resa inte bara en semester, utan en saga av äventyr och förstklassig behandling',

                price: 40000,    

                image: './pictures/flygpaket.jpg',

                availability: 'Begränsade platser kvar!',  

                location: 'Zermatt',          

            },

            {

                id: 3,

                name: 'En Majestätisk Helikopterfärd: Upptäck Gömda Skidskatter i Madesimo!',

                description: 'Ta del av den fantastiska skidåkningen i Madesimo genom vår unika Helikopter Drop-erfarenhet. Res med en högteknologisk helikopter till outforskade områden för att känna pulsen av äkta frihet på snöklädda backar. Det är inte bara en dag i bergen, det är en dag du aldrig kommer att glömma.',

                price: 12000,    

                image: './pictures/varorBilder/helicopter3.jpeg',

                availability: 'Begränsade platser kvar!',  

                location: 'Madesimo',          

            },

            {

                id: 4,

                name: 'Dolda Pärlan i Alperna: Exklusivt Hotell och Helikopter-paket i Mysteriska Madesimo!',

                description: 'Njut av den ultimata kombinationen av lyx och adrenalin med vårt unika Hotell och Helikopter-paket i det idylliska Madesimo. Bo en hel vecka på ett av ortens finaste femstjärniga hotell där ingenting saknas när det kommer till komfort och elegans. Som kronan på verket får du på onsdagen möjligheten att delta i en fantastisk helikopterupplevelse. Kliv in i en toppmodern helikopter och lyft till orörda delar av Alperna som få har privilegiet att utforska. Upplev skidåkning på en helt ny nivå i detta snöparadis, långt borta från trängsel och liftköer. Detta är inte bara en semester; det är en drömvecka för den som söker både avkoppling och spänning.',

                price: 37000,    

                image: './pictures/varorBilder/hotell3.jpeg',

                availability: 'Begränsade platser kvar!',

                location: 'Madesimo',            

            },

            {

                id: 5,

                name:'Ultimat Resepaket: Madesimos Magiska Bergsmiljö – Flyg in, Helikopterutforskning & Italiensk Lyxovernattning!',
                

                description: 'Dyk djupt in i alpernas hjärta med vårt "Ultimat Resepaket". Från det ögonblick du lyfter från hemmaflygplatsen till ditt ögonblick av avfärd garanterar vi en upplevelse fylld med spänning och lyx. Landning i de majestätiska alperna, du kommer att inkvarteras på ett prestigefyllt femstjärnigt hotell där varje önskan tas om hand, från läcker mat till avkopplande spafaciliteter. Men hjärtat i detta paket är det exklusiva helikopterlyftet, som tar dig till skidområden där naturen regerar och där spåren du lämnar är de enda. Med snö under fötterna och en oändlig himmel ovanför, kommer du att förstå vad äkta skidglädje betyder. Vår service fortsätter ända till din hemresa, där du kan reflektera över en vecka av oförglömliga minnen. Med SnowWhile Heli blir varje resa inte bara en semester, utan en saga av äventyr och förstklassig behandling',

                price: 42000,    

                image: './pictures/varorBilder/plane2.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'Madesimo',            

            },

            {

                id: 6,

                name: 'En Exklusiv Helikoptertur: Njut av Skidåknings Underverk i St. Moritz',

                description: 'Upplev en extraordinär dag i de schweiziska alperna med vår unika Helikopter Drop-tjänst, lokaliserad i det exklusiva skidresmålet Moritz. Flyg i en toppmodern helikopter till oskiftade terränger och njut av en oförglömlig frihet på de pudriga backarna.',

                price: 15000,    

                image: './pictures/varorBilder/helicopter5.jpeg',

                availability: 'Begränsade platser kvar!',  

                location: 'StMoritz',        

            },

            {

                id: 7,

                name: 'Elegans bland Snötäckta Toppmöten: Exklusivt Hotell och Helikopter-paket i Stilfulla St. Moritz!',

                description: 'Förverkliga ditt drömsemester med vårt exceptionella "Hotell och Helikopter"-paket i den glamorösa alpdestinationen St. Moritz. Få en smak av lyx genom att bo på ett exklusivt femstjärnigt hotell, där varenda detalj är noggrant utvald för din komfort och njutning. Förutom att uppleva den alpina elegansen, får du också chansen att delta i en oslagbar helikopterupplevelse. På onsdagen, gör dig redo för en adrenalinfylld dag då du lyfts upp av en toppmodern helikopter till de orörda skidområdena i Engadin-regionen. Här får du friheten att carva dina egna spår i den orörda snön, långt från liftköer och folkmassor. Detta paket är inte bara en resa, det är en upplevelse av livstid som kombinerar det bästa av lyx och äventyr.',

                price: 40000,    

                image: './pictures/varorBilder/hotell4.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'StMoritz',            

            },

            {

                id: 8,

                name: 'Ultimat Resepaket: Airlift till St. Moritz’s Glittrande Snötoppar – Helikopterdyk & Boende vid Sjön!',
                

                description: 'Dyk djupt in i alpernas hjärta med vårt "Ultimat Resepaket". Från det ögonblick du lyfter från hemmaflygplatsen till ditt ögonblick av avfärd garanterar vi en upplevelse fylld med spänning och lyx. Landning i de majestätiska alperna, du kommer att inkvarteras på ett prestigefyllt femstjärnigt hotell där varje önskan tas om hand, från läcker mat till avkopplande spafaciliteter. Men hjärtat i detta paket är det exklusiva helikopterlyftet, som tar dig till skidområden där naturen regerar och där spåren du lämnar är de enda. Med snö under fötterna och en oändlig himmel ovanför, kommer du att förstå vad äkta skidglädje betyder. Vår service fortsätter ända till din hemresa, där du kan reflektera över en vecka av oförglömliga minnen. Med SnowWhile Heli blir varje resa inte bara en semester, utan en saga av äventyr och förstklassig behandling',

                price: 47000,    

                image: './pictures/varorBilder/plane3.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'StMoritz',  

 

            },

            {

                id: 9,

                name: 'Höghöjdsäventyret Väntar: Upptäck Orörda Snölandskap i Val Thorens med Helikopter!',

                description: 'Njut av en oförglömlig dag i bergen med vår exklusiva "Helikopter Drop"-upplevelse! Färdas i en toppmodern helikopter till otrampade skidområden och upplev den ultimata friheten på snön.',

                price: 15000,    

                image: './pictures/varorBilder/helikopter2.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'ValThorens',            

            },

            {

                id: 10,

                name: 'Höghöjdens Hemligheter: Lyxigt Hotell och Helikopter-paket i Magnifika Val Thorens!',

                description: 'Upplev alpernas magi på ett helt nytt sätt med vårt enastående Hotell och Helikopter-paket i det snörika Val Thorens. Bo på ett lyxigt femstjärnigt hotell, där varje detalj har skapats för att maximera din komfort och välbefinnande. Men detta är bara början; höjdpunkten i din vecka kommer på onsdag, när du får chansen att ta del av en extraordinär helikopterupplevelse. Färdas med en toppmodern helikopter till avlägsna skidområden och lämna ditt avtryck på orörd snö, bortom de trånga liftköerna och de vanliga pister. Detta paket i Val Thorens kombinerar lyxig logi med en hisnande helikopterresa, och ger dig en oförglömlig vecka fylld med äventyr och exklusivitet.',

                price: 40000,    

                image: './pictures/varorbilder/hotell5.webp',

                availability: 'Begränsade platser kvar!',

                location: 'ValThorens',          

            },

            {

                id: 11,

                name: 'Ultimat Resepaket: Skidhimlen Kallar i Val Thorens – Direktflyg, Helikopterupptäcktsfärd & Alpin Lyx!',

                description: 'Dyk djupt in i alpernas hjärta med vårt "Ultimat Resepaket". Från det ögonblick du lyfter från hemmaflygplatsen till ditt ögonblick av avfärd garanterar vi en upplevelse fylld med spänning och lyx. Landning i de majestätiska alperna, du kommer att inkvarteras på ett prestigefyllt femstjärnigt hotell där varje önskan tas om hand, från läcker mat till avkopplande spafaciliteter. Men hjärtat i detta paket är det exklusiva helikopterlyftet, som tar dig till skidområden där naturen regerar och där spåren du lämnar är de enda. Med snö under fötterna och en oändlig himmel ovanför, kommer du att förstå vad äkta skidglädje betyder. Vår service fortsätter ända till din hemresa, där du kan reflektera över en vecka av oförglömliga minnen. Med SnowWhile Heli blir varje resa inte bara en semester, utan en saga av äventyr och förstklassig behandling',

                price: 47000,    

                image: './pictures/varorBilder/plane6.jpeg',

                availability: 'Begränsade platser kvar!',

                location: 'ValThorens',          

            }

            ]    

        }

    },

    methods: {

        buyProduct(product) {
                this.cart.push(product);
                localStorage.setItem('varukorg', JSON.stringify(this.cart));
                this.closeModal();
          },

        removeProductCart(product){
            let index = this.cart.indexOf(product);
            if (index !== -1) {
                this.cart.splice(index, 1);

                localStorage.setItem('varukorg', JSON.stringify(this.cart));
            }
        },

        openCart(){
           
            this.showCart = !this.showCart;
            this.closeMenu=false;


          },
          closeCart(){
            this.showCart = false;
          },

          onChange(event, productPrice,){

            const selectedQuantity =parseInt(event.target.value);
            this.updatedPrice();
            
            this.calculatedPrice = selectedQuantity * productPrice;
            if(selectedQuantity==="1"){

                this.calculatedPrice = this.valdProdukt.price;

            }

            else if(selectedQuantity==="2"){

                this.calculatedPrice = this.valdProdukt.price *2;

            }

            else if(selectedQuantity==="3"){

                this.calculatedPrice = this.valdProdukt.price *3;

            }

            else if(selectedQuantity==="4"){

                this.calculatedPrice = this.valdProdukt.price *4;

            }

        },

        updatedPrice(){
            this.totalPrice = this.cart.reduce((sum, product) => sum + (product.price * product.quantity))
        },

        showAlert(){
            alert("Din order har skickats!");
           },
    
        checkout() {
    
                console.log('Checkout button clicked!'); // loggar när knappen klickas
                console.log('Current cart:', this.cart); // loggar nuvarande varukorg
                this.cart = [];
                console.log('Cart after emptying:', this.cart); // loggar varukorgen efter tömning
                localStorage.setItem('varukorg', JSON.stringify(this.cart));
                
            },

        handleCheckOut(){
            if(this.cart.length > 0){

            
                this.showAlert();
                this.checkout();
                this.closeCart();
            }
            else{
                alert("Du måste lägga till varor i varukorgen innan du kan checka ut.");

            }
               
               
         },
         

        openModal(product) {
            this.valdProdukt = product;
            this.showModal = true;
            console.log(this.valdProdukt);
            this.closeMenu=false;
        },
        closeModal () {
            this.valdProdukt = '';
            this.showModal = false;
        },

        openPersonalPage(astaff) {
            this.selectedStaff = astaff;
            staffName = this.selectedStaff.name;
            localStorage.setItem('selectedstaff', JSON.stringify(this.selectedStaff));
            window.location.href = 'individuell-sida.html';
            this.selectedProjects = this.getProject();
        },
        getProject(name) {
            if (name === 'Emanuel'){
                return this.projectsEmanuel();
        
            } else if (name === 'Jesper') {
                return this.projectsJesper();

            } else if (name === 'Axel') {
                return this.projectsAxel();

            } else if (name === 'Ludvig') {
                return this.projectsLudvig();
            }
        }

         

    },

    computed: {
        totalItemsCart(){
           
           return this.cart.length;
        },

        ZermattItems() {

            return this.items.filter(item => item.location === 'Zermatt');

          },

          MadesimoItems() {

            return this.items.filter(item => item.location === 'Madesimo');

          },

        StMoritzItems() {

          return this.items.filter(item => item.location === 'StMoritz');

        },

        ValThorensItems() {

            return this.items.filter(item => item.location === 'ValThorens');

          },
          staffEmanuel() {
            return this.staff.filter(astaff => astaff.name === 'Emanuel');
          },
          staffAxel() {
            return this.staff.filter(astaff => astaff.name === 'Axel');
          },
          staffJesper() {
            return this.staff.filter(astaff => astaff.name === 'Jesper');
          },
          staffLudvig() {
            return this.staff.filter(astaff => astaff.name === 'Ludvig');
          },
          projectsEmanuel() {
            return this.projects.filter(aproject => aproject.ansvarig === 'Emanuel');
          },
          projectsAxel() {
            return this.projects.filter(aproject => aproject.ansvarig === 'Axel');
          },
          projectsJesper() {
            return this.projects.filter(aproject => aproject.ansvarig === 'Jesper');
          },
          projectsLudvig() {
            return this.projects.filter(aproject => aproject.ansvarig === 'Ludvig');
          }
          

      },

mounted(){

    const savedCart = localStorage.getItem('varukorg')
    if(savedCart)
    {
        this.cart= JSON.parse(savedCart);
    }
},
created(){ 
    axios.get('data/staff.json') 
        .then((response) => {
            this.staff = response.data.staffMembers; });
    
    axios.get('data/projects.json') 
    .then((response) => {
        this.projects = response.data.projekt; });

    }

});

 

app.mount('#app');


const textElement = document.querySelectorAll('.text-text');

textElement.forEach((textElement) => {
    const textContent = textElement.textContent;
    textElement.textContent = '';


for (let i = 0; i < textContent.length; i++) {
    setTimeout(() => {
        textElement.textContent += textContent[i];
    }, i*200);
}
})