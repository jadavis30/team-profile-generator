function generateHTML(employees) {  
     //createHTML creates html for team data
     let createHTML = 
     `<html>
         <head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         </head>
            <body>
                <header class="container">
                    <h1>My Team</h1>
                </header>
                    <div id="dynamic" class="container">
                    </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js">
                    </script>
            </body>    
    </html>`
    return createHTML;
}
function generateEngineerCard(userResponses) {
let createEngineer=
`<div class="card blue-grey darken-1">
    <div class="card-content white-text">
        <span class="card-title">${userResponses.engineername}</span>
        <span><i class="material-icons">build</i>Engineer</span>
    </div>
    <div class="card-action">
        <a href="#">${userResponses.engineerid}</a>
        <a href="#">${userResponses.engineeremail}</a>
        <a href="#">${userResponses.githubURL}</a>
    </div>
</div>`
return createEngineer;
}
function appendEngineer(createEngineer) {
    $("#dynamic").append(createEngineer);
}
  module.exports = generateHTML;