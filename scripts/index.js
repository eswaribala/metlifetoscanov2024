//alert("started rocking java script");

document.addEventListener('load',function(){

    document.addEventListener('submit',function(){
        let firstName=document.querySelector("#firstName").value;
        let lastName=document.querySelector("#lastName").value;
        let dob=document.querySelector("#dob").value;
        let gender=document.querySelector("#gender").value;
        let selectedOccupation=document
            .querySelector('input[name="occupation"]:checked');
        let occupation="";
        if(selectedOccupation){
            occupation=selectedOccupation.value;
        }

        let customerData={
            "firstName":firstName,
            "lastName":lastName,
            "dob":dob,
            "gender":gender,
            "occupation":occupation
        }
        alert(customerData);

    })

})