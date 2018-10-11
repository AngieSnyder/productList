$().ready(function(){
    var url = "http://localhost:8080/Vendors/List";

    $.getJSON(url)
        .then(function(jsonResponse){
            console.log(jsonResponse);
            render(jsonResponse);
        });
});

function render(jsonResponse){
    var tbody = $("#tbody");
    var vendors = jsonResponse.data;
    for(var vendor of vendors) {
        var row = "<tr>";
        row += "<td>" + vendor.id + "</td>";
        row += "<td>" + vendor.code + "</td>";
        row += "<td>" + vendor.name + "</td>";
        row += "<td>" + vendor.address + "</td>";
        row += "<td>" + vendor.city + "</td>";
        row += "<td>" + vendor.state + "</td>";
        row += "<td>" + vendor.zip + "</td>";
        row += "<td>" + vendor.phoneNumber + "</td>";
        row += "<td>" + vendor.email + "</td>";
        row += "</tr>";
        tbody.append(row);
    }

}