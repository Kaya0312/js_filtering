// import * as Item from './views/Item';
// import renderItem from './views/ItemView';

async function asyncTest() {
    const res  = await fetch('src/scripts/fashion.json');
    const json = await res.json();

    const itemContainer = document.querySelector('.products');
       
    json.map((item) => {
        const str = `
        <li>
            <div class="image_container"><img src="src/data/images/${item.image}"></div>
            <p class="product_name">${item.name}</p>
            <p class="price">${item.price}</p>
            <p>Size: ${item.size}</p>
            <p>Category: ${item.category}</p>
        </li>
        `;
        itemContainer.insertAdjacentHTML('beforeend', str);
    })

    function updateItem(filteredJson) {

        itemContainer.innerHTML = '';

        filteredJson.map((item) => {
            const newStr = `
            <li>
                <div class="image_container"><img src="src/data/images/${item.image}"></div>
                <p class="product_name">${item.name}</p>
                <p class="price">${item.price}</p>
                <p>Size: ${item.size}</p>
                <p>Category: ${item.category}</p>
            </li>
            `;
            itemContainer.insertAdjacentHTML('beforeend', newStr);
        })
    }

    
    const radioBtn = document.querySelector('.sidebar ul.category_list');
    
    radioBtn.addEventListener('change', function(event) {

        const filterValue = event.target.value;
        const filterName = event.target.name;

        // const radios = document.getElementsByName(name);

        console.log(event.target);
        const target = document.getElementById("radio1");
        const target2 = document.getElementById("radio2");

        const filteredItem = json.filter(function(item) {

            if (item.category == filterValue) {
                return true;
            } else if(item.size == filterValue) {                
                return true;
            }

        });
    
        console.log("Filtered", filteredItem);
        updateItem(filteredItem);
    });
  }

asyncTest();