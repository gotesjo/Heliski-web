


const app = Vue.createApp({

    data(){

        return{
            cart:[],
            showCart:false,

            valdProduktIndex:100,

            valdProdukt:"",
            calculatedPrice:0,

            items:[{

                id: 0,

                name: 'Helikopter',

                description: 'Njut av en oförglömlig dag i bergen med vår exklusiva "Helikopter Drop"-upplevelse! Färdas i en toppmodern helikopter till otrampade skidområden och upplev den ultimata friheten på snön.',

                price: 10000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'Zermatt',          

            },

            {

                id: 1,

                name: 'Hotell och Helikopter',

                description: 'Upplev lyx och äventyr på högsta nivå med vår Hotell och Helikopter-paket i det förtrollande Zermatt. Bo en hel vecka på ett exklusivt femstjärnigt hotell med alla tänkbara bekvämligheter, från gourmetmåltider till spa-behandlingar. Men det som verkligen sätter guldkant på din vistelse är vårt spektakulära helikopterlyft på onsdagen. Stig ombord på en toppmodern helikopter och låt dig föras till orörda skidområden som få någonsin har sett. Känn friheten i pulversnö och klar alpluft som du svävar nerför bergsidan. Detta är mer än en skidresa; det är en oöverträffad upplevelse av lyx och äventyr',

                price: 35000,    

                image: './pictures/hotel2.jpg',

                availability: 'Begränsade platser kvar!',  

                location: 'Zermatt',          

            },

            {

                id: 2,

                name: 'All in One',

                description: 'Detta är produkt 1',

                price: 40000,    

                image: './pictures/flygpaket.jpg',

                availability: 'Begränsade platser kvar!',  

                location: 'Zermatt',          

            },

            {

                id: 3,

                name: 'Helikopter',

                description: 'Ta del av den fantastiska skidåkningen i Madesimo genom vår unika Helikopter Drop-erfarenhet. Res med en högteknologisk helikopter till outforskade områden för att känna pulsen av äkta frihet på snöklädda backar. Det är inte bara en dag i bergen, det är en dag du aldrig kommer att glömma.',

                price: 12000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',  

                location: 'Madesimo',          

            },

            {

                id: 4,

                name: 'Hotell och Helikopter',

                description: 'Njut av den ultimata kombinationen av lyx och adrenalin med vårt unika Hotell och Helikopter-paket i det idylliska Madesimo. Bo en hel vecka på ett av ortens finaste femstjärniga hotell där ingenting saknas när det kommer till komfort och elegans. Som kronan på verket får du på onsdagen möjligheten att delta i en fantastisk helikopterupplevelse. Kliv in i en toppmodern helikopter och lyft till orörda delar av Alperna som få har privilegiet att utforska. Upplev skidåkning på en helt ny nivå i detta snöparadis, långt borta från trängsel och liftköer. Detta är inte bara en semester; det är en drömvecka för den som söker både avkoppling och spänning.',

                price: 37000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'Madesimo',            

            },

            {

                id: 5,

                name: 'All in one',

                description: 'Detta är produkt 1',

                price: 42000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'Madesimo',            

            },

            {

                id: 6,

                name: 'Helikopter',

                description: 'Upplev en extraordinär dag i de schweiziska alperna med vår unika Helikopter Drop-tjänst, lokaliserad i det exklusiva skidresmålet Moritz. Flyg i en toppmodern helikopter till oskiftade terränger och njut av en oförglömlig frihet på de pudriga backarna.',

                price: 15000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',  

                location: 'StMoritz',        

            },

            {

                id: 7,

                name: 'Hotell och Helikopter',

                description: 'Förverkliga ditt drömsemester med vårt exceptionella "Hotell och Helikopter"-paket i den glamorösa alpdestinationen St. Moritz. Få en smak av lyx genom att bo på ett exklusivt femstjärnigt hotell, där varenda detalj är noggrant utvald för din komfort och njutning. Förutom att uppleva den alpina elegansen, får du också chansen att delta i en oslagbar helikopterupplevelse. På onsdagen, gör dig redo för en adrenalinfylld dag då du lyfts upp av en toppmodern helikopter till de orörda skidområdena i Engadin-regionen. Här får du friheten att carva dina egna spår i den orörda snön, långt från liftköer och folkmassor. Detta paket är inte bara en resa, det är en upplevelse av livstid som kombinerar det bästa av lyx och äventyr.',

                price: 40000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'StMoritz',            

            },

            {

                id: 8,

                name: 'All in one',

                description: 'Detta är produkt 1',

                price: 47000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'StMoritz',  

 

            },

            {

                id: 9,

                name: 'Helikopter',

                description: 'Njut av en oförglömlig dag i bergen med vår exklusiva "Helikopter Drop"-upplevelse! Färdas i en toppmodern helikopter till otrampade skidområden och upplev den ultimata friheten på snön.',

                price: 15000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'ValThorens',            

            },

            {

                id: 10,

                name: 'Hotell och Helikopter',

                description: 'Upplev alpernas magi på ett helt nytt sätt med vårt enastående Hotell och Helikopter-paket i det snörika Val Thorens. Bo på ett lyxigt femstjärnigt hotell, där varje detalj har skapats för att maximera din komfort och välbefinnande. Men detta är bara början; höjdpunkten i din vecka kommer på onsdag, när du får chansen att ta del av en extraordinär helikopterupplevelse. Färdas med en toppmodern helikopter till avlägsna skidområden och lämna ditt avtryck på orörd snö, bortom de trånga liftköerna och de vanliga pister. Detta paket i Val Thorens kombinerar lyxig logi med en hisnande helikopterresa, och ger dig en oförglömlig vecka fylld med äventyr och exklusivitet.',

                price: 40000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'ValThorens',          

            },

            {

                id: 11,

                name: 'All in one',

                description: 'Detta är produkt 1',

                price: 47000,    

                image: './pictures/varor1.jpg',

                availability: 'Begränsade platser kvar!',

                location: 'ValThorens',          

            }

            ]    

        }

    },

    methods: {

        handleClickLocation(product) {

 
   
            
                this.cart.push(product);
                localStorage.setItem('varukorg', JSON.stringify(this.cart));
              

          },
          removeProductCart(product){

            let index = this.cart.indexOf(product);
            if (index !== -1) {
                this.cart.splice(index, 1);

                localStorage.setItem('varukorg', JSON.stringify(this.cart));

            }
        },

          openCart:function(event){
            event.preventDefault();
            this.showCart = !this.showCart;


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

          }
          

      },

mounted(){

    const savedCart = localStorage.getItem('varukorg')
    if(savedCart)
    {
        this.cart= JSON.parse(savedCart);
    }
}
     

});

 

app.mount('#app');