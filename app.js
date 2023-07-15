var input=document.getElementById('inp');
var submit=document.getElementById('sub');
var output=document.getElementById('em');
var output2=document.getElementById('cd');
submit.addEventListener('click',()=>{
    var name = 'slightly smiling face';
    if(input.value.length==0)
    alert("Enter the Name");
    else
    {
        name=input.value;
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/emoji?name=' + name,
            headers: { 'X-Api-Key': 'VUz/PhiUoSiFu+bTCDQwWw==CrdmVopAUwelWYmf'},
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
                output.innerText="Emoji = "+result[0].character;

                output2.innerText="Code = "+result[0].code;
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
        
    }

})