function filter(id) {
 let child = document.getElementById(`${id}`);
 let parentRegion = document.getElementById("region");
 let parentLocation = document.getElementById("location");
 let parentFlats = document.getElementById("flats");
 let parentCost = document.getElementById("cost");
 let parentDecoration = document.getElementById("decoration");
 let parentYear = document.getElementById("year");
 let parentPayVariant = document.getElementById("pay-variant");
 let parentKitchenSize = document.getElementById("kitchen-size");
 let parentBathroom = document.getElementById("bathroom");

 let filterRegion = document.getElementById("filter-item-region");
 let filterLocation = document.getElementById("filter-item-location");
 let filterFlat = document.getElementById("filter-item-flat");
 let filterCost = document.getElementById("filter-item-cost");
 let filterDecoration = document.getElementById("filter-item-decoration");
 let filterYear = document.getElementById("filter-item-year");
 let filterPayVariant = document.getElementById("filter-item-pay-variant");
 let filterKitchenSize = document.getElementById("filter-item-kitchen-size");
 let filterBathroom = document.getElementById("filter-item-bathroom");

    if(parentRegion === child.parentNode){
        filterRegion.children[1].innerText = child.children[2].textContent;
        filterRegion.classList.add("show-filter");
    }

    if(parentLocation === child.parentNode){
        filterLocation.children[1].innerText = child.children[2].textContent;
        filterLocation.classList.add("show-filter");
    }

    if(parentFlats === child.parentNode){
        filterFlat.children[1].innerText = child.children[2].textContent;
        filterFlat.classList.add("show-filter");
    }

    if(parentCost === child.parentNode){
        filterCost.children[1].innerText = child.children[2].textContent;
        filterCost.classList.add("show-filter");
    }

    if(parentDecoration === child.parentNode){
        filterDecoration.children[1].innerText = child.children[2].textContent;
        filterDecoration.classList.add("show-filter");
    }

    if(parentYear === child.parentNode){
        filterYear.children[1].innerText = child.children[2].textContent;
        filterYear.classList.add("show-filter");
    }

    if(parentPayVariant === child.parentNode){
        filterPayVariant.children[1].innerText = child.children[2].textContent;
        filterPayVariant.classList.add("show-filter");
    }

    if(parentKitchenSize === child.parentNode){
        filterKitchenSize.children[1].innerText = child.children[2].textContent;
        filterKitchenSize.classList.add("show-filter");
    }

    if(parentBathroom === child.parentNode){
        filterBathroom.children[1].innerText = child.children[2].textContent;
        filterBathroom.classList.add("show-filter");
    }
}

function deleteFilter(id) {
    let filterBlock = document.getElementById(`${id}`);

    filterBlock.children[1].innerText = "";
    filterBlock.classList.remove("show-filter");

    let listRegion = document.getElementById("region");
    let parentLocation = document.getElementById("location");
    let parentFlats = document.getElementById("flats");
    let parentCost = document.getElementById("cost");
    let parentDecoration = document.getElementById("decoration");
    let parentYear = document.getElementById("year");
    let parentPayVariant = document.getElementById("pay-variant");
    let parentKitchenSize = document.getElementById("kitchen-size");
    let parentBathroom = document.getElementById("bathroom");

    if(id === "filter-item-region"){
        let arrayList = listRegion.children;
        for( let i=0; i< arrayList.length; i++){
                arrayList[i].children[0].checked = false;
        }
    }

    if(id === "filter-item-location"){
        let arrayList = parentLocation.children;
        for( let i=0; i< arrayList.length; i++){
            arrayList[i].children[0].checked = false;
        }
    }

    if(id === "filter-item-flat"){
        let arrayList = parentFlats.children;
        for( let i=0; i< arrayList.length; i++){
            arrayList[i].children[0].checked = false;
        }
    }

    if(id === "filter-item-cost"){
        let arrayList = parentCost.children;
        for( let i=0; i< arrayList.length; i++){
            arrayList[i].children[0].checked = false;
        }
    }

    if(id === "filter-item-decoration"){
        let arrayList = parentDecoration.children;
        for( let i=0; i< arrayList.length; i++){
            arrayList[i].children[0].checked = false;
        }
    }

    if(id === "filter-item-year"){
        let arrayList = parentYear.children;
        for( let i=0; i< arrayList.length; i++){
            arrayList[i].children[0].checked = false;
        }
    }

    if(id === "filter-item-pay-variant"){
        let arrayList = parentPayVariant.children;
        for( let i=0; i< arrayList.length; i++){
            arrayList[i].children[0].checked = false;
        }
    }

    if(id === "filter-item-kitchen-size"){
        let arrayList = parentKitchenSize.children;
        for( let i=0; i< arrayList.length; i++){
            arrayList[i].children[0].checked = false;
        }
    }

    if(id === "filter-item-bathroom"){
        let arrayList = parentBathroom.children;
        for( let i=0; i< arrayList.length; i++){
            arrayList[i].children[0].checked = false;
        }
    }

}