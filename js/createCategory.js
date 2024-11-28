document.getElementById('add-category-button').addEventListener('click', () => {
    const categoryType = document.getElementById('category-type').value;
    const categoryName = document.getElementById('category-name').value;

    // Check if the product name is empty
    if (categoryName.trim() === '') {
        alert('Please enter a valid product name.');
        return;
    }

    // Select the correct menu based on category
    const menuId = categoryType === 'men' ? 'men-menu' : 'women-menu';
    const menu = document.getElementById(menuId);

    // Create new product item
    const newMenuItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = '#';
    newLink.className = 'dropdown-item';
    newLink.textContent = categoryName;

    // Add product to menu
    newMenuItem.appendChild(newLink);
    menu.appendChild(newMenuItem);

    // Reset form fields
    document.getElementById('add-category-form').reset();

    // Show success message
    alert(`Successfully added "${categoryName}" to the ${categoryType} category.`);
});