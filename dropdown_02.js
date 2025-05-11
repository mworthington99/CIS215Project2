/**
 * @author Clayton Allen
 * @description @function dropdown() This will filter
 * the what is displayed on @file project1data.php
 * @constant dataDisplay is the ID of option menu, the selections
 * in this menu will be @constant dataOption
 * @constant displayList is the class of all menu options
 * that can change in the markup text. 
 * 
 */
function dropdown(){
    const dataDisplay = document.getElementById("dataDisplay");
    const displayList = document.querySelectorAll(".data-section");
    /**
     * @method addEventListener will be triggered
     * when user changes menu options. 
     */
    dataDisplay.addEventListener("change", () => {
        const dataOption = dataDisplay.value;
        /**
         * @method forEach is the most efficent 
         * way to cycle and change this display
         * will iterate through i.
         */
        displayList.forEach(i => {
            //Will retrive the selected category from the mark up language
            const selectedCategory = i.getAttribute("data-category");
            if(selectedCategory == "All" || selectedCategory == dataOption ){
                i.hidden = false; //displays the object thats being iterated.
                console.log("Object is seen: ", i);
            }else{ 
               i.hidden = true; //hides the object thats being iterated.
               console.log("Object is hidden: ", i);
            }

        });
    });
}
dropdown(); //call dropdown.