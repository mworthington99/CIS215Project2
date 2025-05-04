/**
 * @author Clayton Allen
 * @description This function is used to filter the display shown for categories on 
 * data page. 
 * 
 * @
 */
function dropdown(){
    /**
     * @constant filter IS the refrence for dataDisplay in project1data.php
     * 
     */
    const filter = document.getElementById("dataDisplay");

    /**
     * @constant section This gathers the data from the data display and grabs whatever section its asscioated 
     * select values in option menu and runs it through a query selector. 
     */
    const section = document.querySelectorAll(".data-section");
    /**
     * @description
     * Adds an event listener that will change what data is displayed if different options
     * on the dropdown are selected. 
     */
    filter.addEventListener("change", () => {
        /**
         * @constant selected Stores whatever value is selected and is used for comparing the data-category in project1data.php
         * and the selected value. 
         * 
         * 
         */
        const selected = filter.value;

        section.forEach(section => {
            const category = section.getAttribute("data-category");
            /**@description  Loops through and displays the all categories or whatever
             * specific selected category*/
            if (selected == "All" || category == selected){
                section.style.display = ""; //Shows selected displays.

            }else{
                section.style.display = "none"; //Hides the displays that are filtered out
            }
        })
    });
}
dropdown(); //calls drop down javascript function