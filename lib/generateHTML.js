function generateHTML(userResponses) {  
     //createHTML creates html for team data
     let createHTML = 
     `<html>
         <head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         </head>
            <body>
                <header>
                    <h1>${userResponses.team}</h1>
                </header>
                    <div class="container">
                    </div>
                <script type="text/javascript" src="js/materialize.min.js"></script>
            </body>    
    </html>`
    return createHTML;
}
  module.exports = generateHTML;