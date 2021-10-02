var apiclient=(function () {
    var url='http://localhost:8080/blueprints';
    return{
        getBlueprintsByAuthor:function(name, callback) {
            $.get(url+"/"+name).then(responseJSON=>{
                callback(
                   responseJSON
                )
            })
        },
        getBlueprintsByNameAndAuthor:function(autor,obra,callback){
            $.get(url+"/"+autor+"/"+obra).then(responseJSON=>{
                callback(
                    responseJSON
                )
            })
        },
        putBlueprints:function(autor,obra,blueprintAct,callback){
            $.ajax({
                url: url+"/"+autor+"/"+obra,
                type: 'PUT',
                data: JSON.stringify(blueprintAct),
                contentType: "application/json"
            }).then((responseJSON)=>apiclient.getBlueprintsByAuthor(autor,callback))
        },
        postBlueprints:function(autor,blueprintAct,callback){
            $.ajax({
                url: url,
                type: 'POST',
                data: JSON.stringify(blueprintAct),
                contentType: "application/json"
            }).then((responseJSON)=>apiclient.getBlueprintsByAuthor(autor,callback))
        },
        deleteBlueprints:function(autor,obra,callback){
            $.ajax({
                url: url+"/"+autor+"/"+obra,
                type: 'DELETE',
                contentType: "application/json"
            }).then((responseJSON)=>apiclient.getBlueprintsByAuthor(autor,callback))
        }
    }
})();