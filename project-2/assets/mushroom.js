// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Filter the collection to only include items with favourite = "mushroom"
	const meatItems = collection.filter(item => item.favourite === "mushroom")

	// Loop through each meat item in the filtered array
	meatItems.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`

		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				<p>${item.name}</p>
				<p>${item.mustorder}</p>
				
				<p>${item.favouritespot}</p>
				<p>${item.location}</p>
				<p>${item.significance}</p>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}

// Fetch gets your JSON file…
fetch('assets/script.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})