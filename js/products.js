import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { api_path,baseURL,checkLogin} from "./app.js";

const productsAPP = {
  data() {
    return {
      productsList:[],
      temp: {}
    }
  },

  methods: {
    showDetail(product) {
      this.temp = {...product};
    },
    getProductsList() {
      axios.get(`${baseURL}/api/${api_path}/admin/products`)
      .then((res) => {
        this.productsList = res.data.products;
      })
      .catch((err) =>{
        alert(err.response.data.message);
      })
    },
  },

  mounted() {
    this.getProductsList();
  },
  created() {
    checkLogin();  },
}

createApp(productsAPP).mount("#products");