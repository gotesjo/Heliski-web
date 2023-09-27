const app = Vue.createApp({
  data() {
    return {
      cart: [],
      showCart: false,

      valdProduktIndex: 100,

      valdProdukt: "",

      showModal: false,
      cartHasItems: false,
      closeMenu: false,

      staff: [],
      projects: [],
      selectedProjects:
        JSON.parse(localStorage.getItem("selectedprojects")) || {},
      selectedStaff: JSON.parse(localStorage.getItem("selectedstaff")) || {},

      items: [
        {
          id: 0,
          name: "En äventyrlig Helikopterresa Zermatt",
          description:
            'Njut av en oförglömlig dag i bergen med vår exklusiva "Helikopter Drop"-upplevelse! Färdas i en toppmodern helikopter till otrampade skidområden och upplev den ultimata friheten på snön.',
          price: 10000,
          image: "./pictures/varor1.jpg",
          availability: "Begränsade platser kvar!",
          location: "Zermatt",
        },
        {
          id: 1,
          name: "Exklusivt Hotell och Helikopter-paket i Zermatt!",
          description:
            "Upplev lyx och äventyr på högsta nivå med vår Hotell och Helikopter-paket i det förtrollande Zermatt. Men det som verkligen sätter guldkant på din vistelse är vårt spektakulära helikopterlyft på onsdagen. Detta är mer än en skidresa; det är en oöverträffad upplevelse av lyx och äventyr",
          price: 35000,
          image: "./pictures/varorBilder/hotell2.jpg",
          availability: "Begränsade platser kvar!",
          location: "Zermatt",
        },
        {
          id: 2,
          name: "Ultimat Resepaket i Zermatt!",
          description:
            "Dyk djupt in i alpernas hjärta med vårt Ultimat Resepaket. Från det ögonblick du lyfter från hemmaflygplatsen till ditt ögonblick av avfärd garanterar vi en upplevelse fylld med spänning och lyx. Landning i de majestätiska alperna, du kommer att inkvarteras på ett prestigefyllt femstjärnigt hotell där varje önskan tas om hand, från läcker mat till avkopplande spafaciliteter.",
          price: 40000,
          image: "./pictures/flygpaket.jpg",
          availability: "Begränsade platser kvar!",
          location: "Zermatt",
        },
        {
          id: 3,
          name: "En äventyrlig Helikopterresa Madesimo",
          description:
            "Ta del av den fantastiska skidåkningen i Madesimo genom vår unika Helikopter Drop-erfarenhet. Res med en högteknologisk helikopter till outforskade områden för att känna pulsen av äkta frihet på snöklädda backar. Det är inte bara en dag i bergen, det är en dag du aldrig kommer att glömma.",
          price: 12000,
          image: "./pictures/varorBilder/helicopter3.jpeg",
          availability: "Begränsade platser kvar!",
          location: "Madesimo",
        },
        {
          id: 4,
          name: "Exklusivt Hotell och Helikopter-paket i Madesimo",
          description:
            "Njut av den ultimata kombinationen av lyx och adrenalin med vårt unika Hotell och Helikopter-paket i det idylliska Madesimo. Bo en hel vecka på ett av ortens finaste femstjärniga hotell där ingenting saknas när det kommer till komfort och elegans.",
          price: 37000,
          image: "./pictures/varorBilder/hotell3.jpeg",
          availability: "Begränsade platser kvar!",
          location: "Madesimo",
        },
        {
          id: 5,
          name: "Ultimat Resepaket i Madesimo!",
          description:
            'Dyk djupt in i alpernas hjärta med vårt "Ultimat Resepaket". Från det ögonblick du lyfter från hemmaflygplatsen till ditt ögonblick av avfärd garanterar vi en upplevelse fylld med spänning och lyx. Landning i de majestätiska alperna, du kommer att inkvarteras på ett prestigefyllt femstjärnigt hotell där varje önskan tas om hand, från läcker mat till avkopplande spafaciliteter.',
          price: 42000,
          image: "./pictures/varorBilder/plane2.jpg",
          availability: "Begränsade platser kvar!",
          location: "Madesimo",
        },
        {
          id: 6,
          name: "En äventyrlig Helikopterresa i St. Moritz",
          description:
            "Upplev en extraordinär dag i de schweiziska alperna med vår unika Helikopter Drop-tjänst, lokaliserad i det exklusiva skidresmålet Moritz. Flyg i en toppmodern helikopter till oskiftade terränger och njut av en oförglömlig frihet på de pudriga backarna.",
          price: 15000,
          image: "./pictures/varorBilder/helicopter5.jpeg",
          availability: "Begränsade platser kvar!",
          location: "StMoritz",
        },
        {
          id: 7,
          name: "Exklusivt Hotell och Helikopter-paket i St. Moritz!",
          description:
            'Förverkliga ditt drömsemester med vårt exceptionella "Hotell och Helikopter"-paket i den glamorösa alpdestinationen St. Moritz. Få en smak av lyx genom att bo på ett exklusivt femstjärnigt hotell, där varenda detalj är noggrant utvald för din komfort och njutning. Förutom att uppleva den alpina elegansen, får du också chansen att delta i en oslagbar helikopterupplevelse.',
          price: 40000,
          image: "./pictures/varorBilder/hotell4.jpg",
          availability: "Begränsade platser kvar!",
          location: "StMoritz",
        },
        {
          id: 8,
          name: "Ultimat Resepaket i St. Moritz!",
          description:
            'Dyk djupt in i alpernas hjärta med vårt "Ultimat Resepaket". Från det ögonblick du lyfter från hemmaflygplatsen till ditt ögonblick av avfärd garanterar vi en upplevelse fylld med spänning och lyx. Landning i de majestätiska alperna, du kommer att inkvarteras på ett prestigefyllt femstjärnigt hotell där varje önskan tas om hand, från läcker mat till avkopplande spafaciliteter.',
          price: 47000,
          image: "./pictures/varorBilder/plane3.jpg",
          availability: "Begränsade platser kvar!",
          location: "StMoritz",
        },
        {
          id: 9,
          name: "En äventyrlig Helikopterresa i Val-Thorens",
          description:
            'Njut av en oförglömlig dag i bergen med vår exklusiva "Helikopter Drop"-upplevelse! Färdas i en toppmodern helikopter till otrampade skidområden och upplev den ultimata friheten på snön.',
          price: 15000,
          image: "./pictures/varorBilder/helikopter2.jpg",
          availability: "Begränsade platser kvar!",
          location: "ValThorens",
        },
        {
          id: 10,
          name: "Exklusivt Hotell och Helikopter-paket i Magnifika Val Thorens!",
          description:
            "Upplev alpernas magi på ett helt nytt sätt med vårt enastående Hotell och Helikopter-paket i det snörika Val Thorens. Bo på ett lyxigt femstjärnigt hotell, där varje detalj har skapats för att maximera din komfort och välbefinnande. Men detta är bara början; höjdpunkten i din vecka kommer på onsdag, när du får chansen att ta del av en extraordinär helikopterupplevelse.",
          price: 40000,
          image: "./pictures/varorbilder/hotell5.webp",
          availability: "Begränsade platser kvar!",
          location: "ValThorens",
        },
        {
          id: 11,
          name: "Ultimat Resepaket i Val Thorens!",
          description:
            'Dyk djupt in i alpernas hjärta med vårt "Ultimat Resepaket". Från det ögonblick du lyfter från hemmaflygplatsen till ditt ögonblick av avfärd garanterar vi en upplevelse fylld med spänning och lyx. Landning i de majestätiska alperna, du kommer att inkvarteras på ett prestigefyllt femstjärnigt hotell där varje önskan tas om hand, från läcker mat till avkopplande spafaciliteter.',
          price: 47000,
          image: "./pictures/varorBilder/plane6.jpeg",
          availability: "Begränsade platser kvar!",
          location: "ValThorens",
        },
      ],
    };
  },

  methods: {
    buyProduct(product) {
      this.cart.push(product);
      localStorage.setItem("varukorg", JSON.stringify(this.cart));
      this.closeModal();
    },

    removeProductCart(product) {
      let index = this.cart.indexOf(product);
      if (index !== -1) {
        this.cart.splice(index, 1);

        localStorage.setItem("varukorg", JSON.stringify(this.cart));
      }
    },

    openCart() {
      this.showCart = !this.showCart;
      this.closeMenu = false;
    },
    closeCart() {
      this.showCart = false;
    },

    showAlert() {
      alert("Din order har skickats!");
    },

    checkout() {
      console.log("Checkout button clicked!"); // loggar när knappen klickas
      console.log("Current cart:", this.cart); // loggar nuvarande varukorg
      this.cart = [];
      console.log("Cart after emptying:", this.cart); // loggar varukorgen efter tömning
      localStorage.setItem("varukorg", JSON.stringify(this.cart));
    },

    handleCheckOut() {
      if (this.cart.length > 0) {
        this.showAlert();
        this.checkout();
        this.closeCart();
      } else {
        alert("Du måste lägga till varor i varukorgen innan du kan checka ut.");
      }
    },

    openModal(product) {
      this.valdProdukt = product;
      this.showModal = true;
      console.log(this.valdProdukt);
      this.closeMenu = false;
    },

    closeModal() {
      this.valdProdukt = "";
      this.showModal = false;
    },

    openPersonalPage(astaff) {
      this.selectedStaff = astaff;
      const staffName = this.selectedStaff.name;
      console.log(staffName);
      this.getProjectByName(staffName);
      localStorage.setItem("selectedstaff", JSON.stringify(this.selectedStaff));
      window.location.href = "individuell-sida.html";
    },
    
    getProjectByName(name) {
      let array = [];
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].ansvarig === name) {
          array.push(this.projects[i]);
        }
      }
      localStorage.setItem("selectedprojects", JSON.stringify(array));
    }, 
  },

  computed: {
    totalItemsCart() {
      return this.cart.length;
    }, 
     
    updated() {
      let total = 0;
      for(let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price;
      }
      return total;
    },

    ZermattItems() {
      return this.items.filter((item) => item.location === "Zermatt");
    },

    MadesimoItems() {
      return this.items.filter((item) => item.location === "Madesimo");
    },

    StMoritzItems() {
      return this.items.filter((item) => item.location === "StMoritz");
    },

    ValThorensItems() {
      return this.items.filter((item) => item.location === "ValThorens");
    },
    staffEmanuel() {
      return this.staff.filter((astaff) => astaff.name === "Emanuel");
    },
    staffAxel() {
      return this.staff.filter((astaff) => astaff.name === "Axel");
    },
    staffJesper() {
      return this.staff.filter((astaff) => astaff.name === "Jesper");
    },
    staffLudvig() {
      return this.staff.filter((astaff) => astaff.name === "Ludvig");
    },
  },

  mounted() {
    const savedCart = localStorage.getItem("varukorg");
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  },
  created() {
    axios.get("data/staff.json").then((response) => {
      this.staff = response.data.staffMembers;
    });

    axios.get("data/projects.json").then((response) => {
      this.projects = response.data.projekt;
    });
  },
});

app.mount("#app");

// Animation personlig sida personliga bars
const textElement = document.querySelectorAll(".text-text");

textElement.forEach((textElement) => {
  const textContent = textElement.textContent;
  textElement.textContent = "";

  for (let i = 0; i < textContent.length; i++) {
    setTimeout(() => {
      textElement.textContent += textContent[i];
    }, i * 200);
  }
});
