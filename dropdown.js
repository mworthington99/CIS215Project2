/**
 * @author Clayton Allen
 * @description This function is used to filter the display shown for categories on 
 * data page. 
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
     * This gat
     */
    filter.addEventListener("change", () => {
        /**
         * @constant selected 
         * 
         */
        const selected = filter.value;

        section.forEach(section => {
            const category = section.getAttribute("data-category");
            /**@description  */
            if (selected == "All" || category == selected){
                section.style.display = "";

            }else{
                section.style.display = "none";
            }
        })
    });
}
dropdown(); //calls drop down javascript function