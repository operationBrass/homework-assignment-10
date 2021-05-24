let fullHTML = "";

const starterHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="../Assets/style.css">

</head>
<body>

<div class="container">
    <header class="header"> 
        <h1 class="headerTitle"> Team Profile Generator </h1>
    </header>

<div class="teamProfileContainer"> 

        <!-- team managers card --> `

const endingHTML = 
` </div>
<footer class="footer"> <h2 class="footerTitle"> <i>OperationBrass - Brendan Lewis 2021 </i></h2> </footer>
</div>
</body>
</html>`


module.exports = {

start: function startReport() 
{
    return starterHTML;
},

end: function endReport()
{
    return endingHTML;
},

addManager: function addManager(manager)
{
    return `<div id="manID" class='manCard'> 
    <h2 class='mHeader'> Team Manager </h2> 
    <P class='mName'> Name: ${manager.name} </P>
    <p class="mID"> User ID: ${manager.id} </p>
    <p class="mEmail">Email: <a href=mailto:${manager.email}> ${manager.email} </a> </p>
    <p class='mOfficeNum'> Office Number: ${manager.officeNumber} </p>
</div>
</div>
    <div class = "teamContainer">`
},

addIntern: function addIntern(intern)
{

  return `
    <div class='teamCard'> 
        <h2 class='mHeader'> Intern </h2> 
        <P class='tName'>Name: ${intern.name}  </P>
        <p class="tID"> User ID: ${intern.id} </p>
        <p class="tEmail">Email: <a href=mailto:${intern.email}> ${intern.email} </a></p>
        <p class='tOther'>School: ${intern.school} </p>
    </div>`

},

addEngineer: function addEngineer(engineer)
{

return `    
    <div class='teamCard'> 
        <h2 class='mHeader'> Engineer </h2> 
        <P class='tName'>Name: ${engineer.name} </P>
        <p class="tID">User ID: ${engineer.id}</p>
        <p class="tEmail">Email: <a href=mailto:${engineer.email}> ${engineer.email} </a></p>
        <p class='tOther'>GitHub: <a href=http://www.github.com/${engineer.userName}> ${engineer.userName} </a></p>
    </div>`

}};