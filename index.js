new Vue({
    el: '#app',
    data: {
      selectedCategory: 'All',

    //   boshlangich ma'lumotlar
    productImages: {
        "Electronics": "./img/Laptop-Free-Download-PNG.png"
    },
    products: [
      { name: 'Laptop', price: 1200, category: 'Electronics', available: true, showDetails: "16-core Neural Engine 100GB/s memory bandwidth", photo: null, isShow: false },
      { name: 'Smartphone', price: 800, category: 'Electronics', available: false, showDetails: 'Titanium with textured matte glass back', photo: null, isShow: false },
      { name: 'Shoes', price: 120, category: 'Fashion', available: true, showDetails: "Timberland Redwood Falls Boot - Men's Minimum Clearance Price $95.98 $95.98 $160.00 Comp. value Extra 25% Off! ", photo: null, isShow: false },
      { name: 'Watch', price: 250, category: 'Accessories', available: true, showDetails: "All the essentials. Light on price. From $249 or $20.75/mo. for 12 mo.* ", photo: null, isShow: false },
      { name: 'Headphones', price: 150, category: 'Electronics', available: false, showDetails: "JBL Tour One M2 Bluetooth Wireless Headphones", photo: null, isShow: false },
      { name: 'Jacket', price: 100, category: 'Fashion', available: true, showDetails: "Luck Slim Fit Leather Jacket $449.25Current Price $449.25 (25% off)", photo: null, isShow: false },
    ],
    },
    computed: {
      // select option categories
      uniqueCategories() {
        const categories = this.products.map(product => product.category);
        return [...new Set(categories)];
      },

      // select option filtering
      filteredProducts() {
        if (this.selectedCategory === 'All') {
            this.products.map(product => {product.photo = this.productImages[product.category]})
            console.log(this.products)
          return this.products;
        } else {
          return this.products.filter(product => product.category === this.selectedCategory);
        }
      }
    }
  });
