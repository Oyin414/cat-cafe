const menuContainer = document.createElement('div')
menuContainer.className = 'menu_container'
let menuHeader = document.createElement('h1')
menuHeader.textContent = `Menu Items`
menuHeader.className = 'menu_header'
menuContainer.appendChild(menuHeader)


const menu = [
    ['Appetizers','Mozorella Sticks','Sweet Potato Wedges','Falafel Bites'],
    ['Mains','Pizza','Pasta','French Fries'],
    ['Desserts','Chocolate Cake','Tiramisu','Cheesecake']
]

for (let i = 0; i < menu.length; i++) {
    let menuItems = document.createElement('div')
    menuItems.className = 'mini_header'
      let headers = document.createElement('h2')
        headers.textContent = `${menu[i][0]}`
    for (let j = 1; j < menu[i].length; j++) {
      let items = document.createElement('div')
      items.textContent = `${menu[i][j]}`
      items.className = 'items'
      headers.appendChild(items)
    }
    menuItems.appendChild(headers)
    menuContainer.appendChild(menuItems)
}

export {menuContainer}